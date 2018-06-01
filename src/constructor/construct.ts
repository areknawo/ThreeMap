/**
 * @module GeometryConstructor
 */
import { quadkeyToTile } from "@mapbox/tilebelt";
import VT from "@mapbox/vector-tile";
import colorParse from "color-parse";
import vertexNormals from "face-normals";
import { dist, normalize, sub } from "gl-vec2";
import Protobuf from "pbf";
import xhr from "xhr";
import { ILayerStyle, IWorkerData, IWorkerMessage, Vec2, Vec3 } from "../ThreeMap.interfaces";
import { lineString } from "./linestring";
import { polygon } from "./polygon";

interface IResponse {
  body: object | string;
  headers: {};
  method: string;
  rawRequest: XMLHttpRequest;
  statusCode: number;
  url: string;
}

enum DataTypes {
  Linestring = 2,
  Polygon = 3,
}

/**
 * @hidden
 */
const funcRegex = /function/g;
/**
 * Parses function string to function & executes it returning its value.
 *
 * @param func - Function string.
 * @param feature - MVT feature properties.
 * @example `readStyleFunction('(feature) => {return feature.height}, {...});`
 */
function readStyleFunction(func: string, feature: object): any {
  return Function(`return (${func}(${JSON.stringify(feature)}))`)();
}

/**
 * Protection against z-fighting
 */
const layerOrderLevels: number[] = [100, 100, 100, 80, 60, 50, 30, 25, 20, 20, 10, 5, 2, 1, 0.5, 0.1, 0.1];

self.addEventListener("message", (ev: { data: IWorkerMessage }): void => {
  xhr(
    {
      method: "GET",
      responseType: "arraybuffer",
      url: ev.data.url,
      useXDR: true,
    },
    (err: Error, resp: IResponse, data: Protobuf): void => {
  const tileData: VT.VectorTile = new VT.VectorTile(new Protobuf(data));
  const workerDataBuffers: IWorkerData = {
    colData: [],
    cups: [],
    feature: undefined,
    inxData: [],
    layerOrder: 0,
    tile: quadkeyToTile(ev.data.id),
    vecData: [],
  };
  let style: ILayerStyle;
  let mapFeature: any;
  let shown: boolean;
  for (const layer of ev.data.style.layers) {
    if (tileData.layers[layer.name]) {
      workerDataBuffers.layerOrder += layerOrderLevels[workerDataBuffers.tile[2]];
      style = layer;
      for (let i: number = 0; i < tileData.layers[layer.name].length; i++) {
        mapFeature = tileData.layers[layer.name].feature(i);
        shown = false;
        workerDataBuffers.feature = mapFeature;

        if (typeof style.color === "string" && style.color.match(funcRegex)) {
          style.color_tmp = colorParse(readStyleFunction(style.color, mapFeature.properties));
        } else {
          style.color_tmp = colorParse(style.color).values;
        }

        if (typeof style.show === "boolean") {
          style.show_tmp = style.show;
        } else if (typeof style.show === "string") {
          style.show_tmp = readStyleFunction(style.show, mapFeature.properties);
        }
        if (style.show_tmp) {
          shown = true;
          if (mapFeature.type === DataTypes.Linestring) {
            if (style.type === "LINESTRING" || "ALL") {

              if (typeof style.width === "string") {
                style.width_tmp = readStyleFunction(style.width, mapFeature.properties) / 2;
              } else if (typeof style.width === "number") {
                style.width_tmp = style.width;
              }
              lineString(workerDataBuffers, style);
              if (style.cups) {
                cupBuilder(style, workerDataBuffers);
              }
            }
          } else if (mapFeature.type === DataTypes.Polygon) {
            if (style.type === "POLYGON" || "ALL") {

              if (typeof style.height === "string") {
                style.height_tmp = readStyleFunction(style.height, mapFeature.properties);
              } else if (typeof style.height === "number") {
                style.height_tmp = style.height;
              }

              if (typeof style.min_height === "string") {
                style.min_height_tmp = readStyleFunction(style.min_height, mapFeature.properties);
              } else if (typeof style.min_height === "number") {
                style.min_height_tmp = style.min_height;
              }
              polygon(workerDataBuffers, style);
            }
          }
        }
        // @ts-ignore
        self.postMessage({ type: "feature", realData: { feature: mapFeature, shown } });
      }
    }
  }
  const normalBuffer: ArrayBuffer = vertexNormals(workerDataBuffers.vecData, 0).buffer;
  const vertexBuffer: ArrayBuffer = new Float32Array(workerDataBuffers.vecData).buffer;
  const colorBuffer: ArrayBuffer = new Float32Array(workerDataBuffers.colData).buffer;
  self.postMessage(
    { type: "onFinish", realData: { vertexBuffer, colorBuffer, normalBuffer, id: ev.data.id } },
    // @ts-ignore
    [vertexBuffer, colorBuffer, normalBuffer],
  );
    });

});

/**
 * Generates line's cups.
 *
 * @param style - Layer's style configuration.
 * @param workerDataBuffers - Data used for building tile.
 *
 * @example `cupBuilder({...}, {...});`
 */
function cupBuilder(style: ILayerStyle, workerDataBuffers: IWorkerData): void {
  const numOfGenColors: number = 6;
  for (const key in workerDataBuffers.cups) {
    if (workerDataBuffers.cups.hasOwnProperty(key)) {
      if (workerDataBuffers.cups[key].length >= 2) {
        workerDataBuffers.vecData.push(
          ...workerDataBuffers.cups[key][0].right,
          ...workerDataBuffers.cups[key][0].left,
          ...workerDataBuffers.cups[key][1].right,
          ...workerDataBuffers.cups[key][1].right,
          ...workerDataBuffers.cups[key][0].left,
          ...workerDataBuffers.cups[key][1].left,
        );

        for (let i: number = 0; i < numOfGenColors; i++) {
          workerDataBuffers.colData.push(
            style.color_tmp[0] / 255,
            style.color_tmp[1] / 255,
            style.color_tmp[2] / 255,
          );
        }
      }
      if (workerDataBuffers.cups[key][0].normal) {
        const numOfGenVec3: number = 9;
        const toThird: number = 3;
        const right: Vec2 = workerDataBuffers.cups[key][0].right;
        const left: Vec2 = workerDataBuffers.cups[key][0].left;
        const rightVec: Vec2 = [workerDataBuffers.cups[key][0].right[0], workerDataBuffers.cups[key][0].right[2]];
        const leftVec: Vec2 = [workerDataBuffers.cups[key][0].left[0], workerDataBuffers.cups[key][0].left[2]];
        let center: Vec2 = sub([], rightVec, leftVec);
        const thickness: number = Math.round(dist(rightVec, leftVec));
        center = [leftVec[0] + center[0] / 2, leftVec[1] + center[1] / 2];
        const verticalNormal: Vec2 = workerDataBuffers.cups[key][0].normal;
        const horizontalNormal: Vec2 = normalize([], sub([], rightVec, leftVec));
        const topCup: Vec3 = [
          center[0] - thickness / 2 * verticalNormal[0],
          workerDataBuffers.layerOrder,
          center[1] - thickness / 2 * verticalNormal[1],
        ];
        const middleRightCup: Vec3 = [
          center[0] + thickness / toThird * (horizontalNormal[0] - verticalNormal[0]),
          workerDataBuffers.layerOrder,
          center[1] + thickness / toThird * (horizontalNormal[1] - verticalNormal[1]),
        ];
        const middleLeftCup: Vec3 = [
          center[0] - thickness / toThird * (verticalNormal[0] + horizontalNormal[0]),
          workerDataBuffers.layerOrder,
          center[1] - thickness / toThird * (verticalNormal[1] + horizontalNormal[1]),
        ];
        workerDataBuffers.vecData.push(...right, ...topCup, ...middleRightCup);
        workerDataBuffers.vecData.push(...right, ...left, ...topCup);
        workerDataBuffers.vecData.push(...left, ...middleLeftCup, ...topCup);
        for (let i: number = 0; i < numOfGenVec3; i++) {
          workerDataBuffers.colData.push(
            style.color_tmp[0] / 255,
            style.color_tmp[1] / 255,
            style.color_tmp[2] / 255,
          );
        }
      }
    }
  }
}
