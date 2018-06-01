/**
 * @module LineStringConstructor
 */
import { add, scale, normalize, sub } from "gl-vec2";
import { ILayerStyle, IWorkerData, Vec2, Vec3 } from "../ThreeMap.interfaces";
interface ILineSegment {
  back: {
    left: Vec3;
    normal?: Vec2;
    right: Vec3;
  };
  front: {
    left: Vec3;
    normal?: Vec2;
    right: Vec3;
  };
}
/**
 * Parses data for line generation.
 *
 * @param data - Data used for building tile.
 * @param style - Layer's style configuration.
 * @example `lineString({...}, {...});`
 */
export function lineString(data: IWorkerData, style: ILayerStyle): IWorkerData {
  const tileExtend: number = 2048;
  const geometry: Array<Array<{ x: number; y: number }>> = data.feature.loadGeometry();
  let vertices: Vec2[];

  for (const lineSeg of geometry) {
    vertices = [];
    for (const vec of lineSeg) {
      vertices.push([vec.x - tileExtend, vec.y - tileExtend]);
    }
    line(vertices, data, style);
  }

  return data;
}

/**
 * Generates line segment - line between 2 vectors.
 *
 * @param v1 - First vector.
 * @param v2 - Second vector.
 * @param data - Data used for building tile.
 * @param style - Layer's style configuration.
 * @example `lineSegment([1,2], [3,4] , {...}, {...});`
 */
function lineSegment(v1: Vec2, v2: Vec2, data: IWorkerData, style: ILayerStyle): ILineSegment {
  const lineVec: Vec2 = sub([], v2, v1);
  const normal: Vec2 = normalize([], [-lineVec[1], lineVec[0]]);
  const distance: number = scale([], normal, style.width_tmp);
  const numOfGenColors: number = 6;
  let frontRight: Vec3 = add([], v2, distance);
  let frontLeft: Vec3 = sub([], v2, distance);
  let backRight: Vec3 = add([], v1, distance);
  let backLeft: Vec3 = sub([], v1, distance);

  frontRight = [frontRight[0], data.layerOrder, frontRight[1]];
  frontLeft = [frontLeft[0], data.layerOrder, frontLeft[1]];
  backRight = [backRight[0], data.layerOrder, backRight[1]];
  backLeft = [backLeft[0], data.layerOrder, backLeft[1]];

  data.vecData.push(...backRight, ...backLeft, ...frontRight);
  data.vecData.push(...frontRight, ...backLeft, ...frontLeft);

  for (let i: number = 0; i < numOfGenColors; i++) {
    data.colData.push(style.color_tmp[0] / 255, style.color_tmp[1] / 255, style.color_tmp[2] / 255);
  }

  return {
    back: {
      left: backLeft,
      right: backRight,
    },
    front: {
      left: frontLeft,
      right: frontRight,
    },
  };
}

/**
 * Generates line.
 *
 * @param vertices - Preprocessed vertices array.
 * @param data - Data used for building tile.
 * @param style - Layer's style configuration.
 * @example `line([[1,2], [3,4]], {...}, {...});`
 */
function line(vertices: number[][], data: IWorkerData, style: ILayerStyle): IWorkerData {
  const numOfGenColors: number = 6;
  if (vertices.length < 2) {
    return;
  }
  let seg1: ILineSegment;
  let seg2: ILineSegment;
  for (let i: number = 0; i < vertices.length - 1; i++) {
    seg1 = seg2 ? seg2 : lineSegment(vertices[i], vertices[i + 1], data, style);
    if (i === 0) {
      const vertexKey: string = vertices[i].join("|");
      if (data.cups[vertexKey]) {
        delete data.cups[vertexKey].normal;
        data.cups[vertexKey].push(seg1.back);
      } else {
        const lineVec: Vec2 = sub([], vertices[i + 1], vertices[i]);
        const normal: Vec2 = normalize([], lineVec);
        const cup: ILineSegment["back"] = seg1.back;
        cup.normal = normal;
        data.cups[vertexKey] = [cup];
      }
    }
    if (i === vertices.length - 2) {
      const vertexKey: string = vertices[i + 1].join("|");
      if (data.cups[vertexKey]) {
        delete data.cups[vertexKey].normal;
        data.cups[vertexKey].push(seg1.front);
      } else {
        const lineVec: Vec2 = sub([], vertices[i], vertices[i + 1]);
        const normal: Vec2 = normalize([], lineVec);
        const cup: ILineSegment["front"] = seg1.front;
        cup.normal = normal;
        data.cups[vertexKey] = [cup];
      }
    }
    if (vertices[i + 2]) {
      seg2 = lineSegment(vertices[i + 1], vertices[i + 2], data, style);
      data.vecData.push(...seg1.front.right, ...seg1.front.left, ...seg2.back.right);
      data.vecData.push(...seg1.front.right, ...seg1.front.left, ...seg2.back.left);
      for (let k: number = 0; k < numOfGenColors; k++) {
        data.colData.push(style.color_tmp[0] / 255, style.color_tmp[1] / 255, style.color_tmp[2] / 255);
      }
    }
  }

  return data;
}
