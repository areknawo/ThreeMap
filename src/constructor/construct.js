/**
 * Worker base
 */
import { quadkeyToTile } from "@mapbox/tilebelt";
import VT from "@mapbox/vector-tile";
import colorParse from "color-parse";
import vertexNormals from "face-normals";
import { dist, normalize, sub  } from "gl-vec2";
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

const maxRGBValue: number = 255;

function readStyleFunction(func: string, feature: object): number {
    return Function(`return (${func}(${JSON.stringify(feature)}))`)();
}

async function requestTile(url: string): Promise<object> {
    return new Promise((resolve: (value: PromiseLike<Protobuf>) => void): void => {
        xhr({
                method: "GET",
                responseType: "arraybuffer",
                url,
                useXDR: true,
            },
            function(err: Error, resp: IResponse, data: Protobuf): void {

                return resolve(data);
            },
        );
    });
}

/**
 * Protection against z-fighting
 */
const layerOrderLevels: number[] = [100, 100, 100, 80, 60, 50, 30, 25, 20, 20, 10, 5, 2, 1, 0.5, 0.1, 0.1]; // tslint:disable-line
self.addEventListener("message", async function(ev: { data: IWorkerMessage }): Promise<void> {
    const tileData: VT.VectorTile = new VT.VectorTile(new Protobuf(await requestTile(ev.data.url)));
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
    let mapFeature: VT.VectorTileFeature;
    let shown: boolean;
    const zoomIndex: number = 2;
    const widthToSides: number = 2;
    for (const layer of ev.data.style.layers) {
        if (tileData.layers[layer.name]) {
            workerDataBuffers.layerOrder += layerOrderLevels[workerDataBuffers.tile[zoomIndex]];
            style = layer;
            for (let i: number = 0; i < tileData.layers[layer.name].length; i++) {
                mapFeature = tileData.layers[layer.name].feature(i);
                shown = false;
                workerDataBuffers.feature = mapFeature;
                style.color_tmp = typeof style.color === "string" ?
                    colorParse(readStyleFunction(style.color, mapFeature.properties)) : style.color;
                if (style.show) {
                    shown = true;
                    if (mapFeature.type === DataTypes.Linestring) {
                        if (typeof style.type !== "undefined" || style.type === "lineString") {
                            // @ts-ignore
                            style.width_tmp = typeof style.width === "string" ?
                                readStyleFunction(style.width, mapFeature.properties) / widthToSides : style.width;
                            lineString(workerDataBuffers, style);
                        }
                    } else if (mapFeature.type === DataTypes.Polygon) {
                        if (typeof style.type !== "undefined" || style.type === "polygon") {
                            style.height_tmp = typeof style.type !== "undefined" || style.type === "polygon" ?
                                // @ts-ignore
                                readStyleFunction(style.height, mapFeature.properties) : style.height;
                            // @ts-ignore
                            style.min_height_tmp = typeof style.min_height === "string" ?
                                readStyleFunction(style.min_height, mapFeature.properties) : style.min_height;
                            polygon(workerDataBuffers, style);
                        }
                    }
                }
                // @ts-ignore
                self.postMessage({type: "feature", realData: {feature: mapFeature, shown}});
            }
            if (style.cups) {
                cupBuilder(style, workerDataBuffers);
            }
        }
    }
    const normalBuffer: ArrayBuffer = vertexNormals(workerDataBuffers.vecData, 0).buffer;
    const vertexBuffer: ArrayBuffer = new Float32Array(workerDataBuffers.vecData).buffer;
    const colorBuffer: ArrayBuffer = new Float32Array(workerDataBuffers.colData).buffer;
    self.postMessage(
        {type: "onFinish", realData: {vertexBuffer, colorBuffer, normalBuffer, id: ev.data.id}},
        // @ts-ignore
        [vertexBuffer, colorBuffer, normalBuffer],
    );
});

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
                        style.color_tmp[0] / maxRGBValue,
                        style.color_tmp[1] / maxRGBValue,
                        style.color_tmp[2] / maxRGBValue,
                    );
                }
            }
            if (workerDataBuffers.cups[key][0].normal) {
                const numOfGenVec3: number = 9;
                const toThird: number = 3;
                const right: Vec2 = workerDataBuffers.cups[key][0].right;
                const left: Vec2 = workerDataBuffers.cups[key][0].left;
                const rightVec: Vec2 = [
                    workerDataBuffers.cups[key][0].right[0],
                    workerDataBuffers.cups[key][0].right[2],
                ];
                const leftVec: Vec2 =
                    [workerDataBuffers.cups[key][0].left[0], workerDataBuffers.cups[key][0].left[2]];
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
                    center[0] + (thickness / toThird) * (horizontalNormal[0] - verticalNormal[0]),
                    workerDataBuffers.layerOrder,
                    center[1] + (thickness / toThird) * (horizontalNormal[1] - verticalNormal[1]),
                ];
                const middleLeftCup: Vec3 = [
                    center[0] - (thickness / toThird) * (verticalNormal[0] + horizontalNormal[0]),
                    workerDataBuffers.layerOrder,
                    center[1] - (thickness / toThird) * (verticalNormal[1] + horizontalNormal[1]),
                ];
                workerDataBuffers.vecData.push(...right, ...topCup, ...middleRightCup);
                workerDataBuffers.vecData.push(...right, ...left, ...topCup);
                workerDataBuffers.vecData.push(...left, ...middleLeftCup, ...topCup);
                for (let i: number = 0; i < numOfGenVec3; i++) {
                    workerDataBuffers.colData.push(
                        style.color_tmp[0] / maxRGBValue,
                        style.color_tmp[1] / maxRGBValue,
                        style.color_tmp[2] / maxRGBValue,
                    );
                }
            }
        }
    }
}
