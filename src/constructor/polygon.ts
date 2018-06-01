/**
 * @module PolygonConstructor
 */
import earcut from "earcut";
import { ILayerStyle, IWorkerData } from "../ThreeMap.interfaces";

/**
 * Parses data for polygon generation.
 *
 * @param data - Data used for building tile.
 * @param style - Layer's style configuration.
 * @example `polygon({...}, {...});`
 */
export function polygon(data: IWorkerData, style: ILayerStyle): IWorkerData {
  const geometry: Array<Array<Array<{ x: number; y: number }>>> = classifyRings(data.feature.loadGeometry());
  let vertices: number[][];
  for (const ring of geometry) {
    vertices = [[], []];
    for (let j: number = 0; j < ring.length; j++) {
      for (let l: number = 0; l < ring[j].length - 1; l++) {
        vertices[0].push(ring[j][l].x - 2048, ring[j][l].y - 2048);
        if (j > 0) {
          vertices[1].push((vertices[0].length - 2) / 2);
        }
      }
    }
    if (style.height === 0) {
      flatPolygon(vertices, data, style);
    } else {
      extrudedPolygon(vertices, data, style);
    }
  }

  return data;
}

/**
 * Generates flat polygon.
 *
 * @param vertices - Preprocessed vertices array.
 * @param data - Data used for building tile.
 * @param style - Layer's style configuration.
 * @example `flatPolygon([[1,2],[3,4],[5,6],[1,2]], {...}, {...});
 */
function flatPolygon(vertices: number[][], data: IWorkerData, style: ILayerStyle): IWorkerData {
  const tris: number[] = earcut(vertices[0], vertices[1]);
  for (const tri of tris) {
    // @ts-ignore
    data.vecData.push(vertices[0][tri * 2], style.min_height_tmp + data.layerOrder, vertices[0][tri * 2 + 1]);
    data.colData.push(style.color_tmp[0] / 255, style.color_tmp[1] / 255, style.color_tmp[2] / 255);
  }

  return data;
}

/**
 * Generates extruded polygon - 3D Object.
 *
 * @param vertices - Preprocessed vertices array.
 * @param data - Data used for building tile.
 * @param style - Layer's style configuration.
 * @example `extrudedPolygon([[1,2],[3,4],[5,6],[1,2]], {...}, {...});
 */
function extrudedPolygon(vertices: number[][], data: IWorkerData, style: ILayerStyle): IWorkerData {
  const numOfGenColors: number = 6;
  const tris: number[] = earcut(vertices[0], vertices[1]);
  for (const tri of tris) {
    // @ts-ignore
    data.vecData.push(vertices[0][tri * 2], style.min_height_tmp + data.layerOrder, vertices[0][tri * 2 + 1]);
    data.colData.push(style.color_tmp[0] / 255, style.color_tmp[1] / 255, style.color_tmp[2] / 255);
  }
  for (const tri of tris) {
    // @ts-ignore
    data.vecData.push(vertices[0][tri * 2], style.height_tmp, vertices[0][tri * 2 + 1]);
    data.colData.push(style.color_tmp[0] / 255, style.color_tmp[1] / 255, style.color_tmp[2] / 255);
  }
  for (let i: number = 0; i < vertices[0].length / 2; i++) {
    if (i + 1 !== vertices[0].length / 2) {
      data.vecData.push(vertices[0][i * 2], style.height_tmp, vertices[0][i * 2 + 1]);
      data.vecData.push(vertices[0][i * 2], style.min_height_tmp + data.layerOrder, vertices[0][i * 2 + 1]);
      data.vecData.push(vertices[0][(i + 1) * 2], style.min_height_tmp + data.layerOrder, vertices[0][(i + 1) * 2 + 1]);
      data.vecData.push(vertices[0][(i + 1) * 2], style.min_height_tmp + data.layerOrder, vertices[0][(i + 1) * 2 + 1]);
      data.vecData.push(vertices[0][(i + 1) * 2], style.height_tmp, vertices[0][(i + 1) * 2 + 1]);
      data.vecData.push(vertices[0][i * 2], style.height_tmp, vertices[0][i * 2 + 1]);

      for (let l: number = 0; l < numOfGenColors; l++) {
        data.colData.push(style.color_tmp[0] / 255, style.color_tmp[1] / 255, style.color_tmp[2] / 255);
      }
    } else {
      data.vecData.push(vertices[0][i * 2], style.height_tmp, vertices[0][i * 2 + 1]);
      data.vecData.push(vertices[0][i * 2], style.min_height_tmp + data.layerOrder, vertices[0][i * 2 + 1]);
      data.vecData.push(vertices[0][0], style.min_height_tmp + data.layerOrder, vertices[0][1]);
      data.vecData.push(vertices[0][0], style.min_height_tmp + data.layerOrder, vertices[0][1]);
      data.vecData.push(vertices[0][0], style.height_tmp, vertices[0][1]);
      data.vecData.push(vertices[0][i * 2], style.height_tmp, vertices[0][i * 2 + 1]);

      for (let j: number = 0; j < numOfGenColors; j++) {
        data.colData.push(style.color_tmp[0] / 255, style.color_tmp[1] / 255, style.color_tmp[2] / 255);
      }
    }
  }

  return data;
}
/**
 * @hidden
 * Helps in polygon classification.
 *
 * @param ring - MVT Polygon data.
 * @example `signedArea([{x: 1, y: 2}, ...]);
 */
function signedArea(ring: Array<{ x: number; y: number }>): number {
  let sum: number = 0;
  const len: number = ring.length;
  let j: number = len - 1;
  let p1: { x: number; y: number };
  let p2: { x: number; y: number };
  for (let i: number = 0; i < len; j = i++) {
    p1 = ring[i];
    p2 = ring[j];
    sum += (p2.x - p1.x) * (p1.y + p2.y);
  }

  return sum;
}

/**
 * @hidden
 * Sorts vertices for polygons with holes.
 *
 * @param rings - MVT Geometry data.
 * @example `classifyRings([[{x: 1, y: 2}, ...],[...]]);`
 */
function classifyRings(rings: Array<Array<{ x: number; y: number }>>): Array<Array<Array<{ x: number; y: number }>>> {
  const len: number = rings.length;
  if (len <= 1) {
    return [rings];
  }
  const polygons: Array<Array<Array<{ x: number; y: number }>>> = [];
  let poly: Array<Array<{ x: number; y: number }>>;
  let ccw: boolean;

  for (let i: number = 0; i < len; i++) {
    const area: number = signedArea(rings[i]);
    if (area === 0) {
      continue;
    }
    if (ccw === undefined) {
      ccw = area < 0;
    }
    if (ccw === area < 0) {
      if (poly) {
        polygons.push(poly);
      }
      poly = [rings[i]];
    } else {
      if (poly) {
        poly.push(rings[i]);
      }
    }
  }
  if (poly) {
    polygons.push(poly);
  }

  return polygons;
}
