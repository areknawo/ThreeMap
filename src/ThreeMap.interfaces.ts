// TODO: THINK ABOUT DIFFERENT STRUCTURE OF THIS
/**
 * @module Interfaces
 *
 * ThreeMap types & interfaces.
 */
import { VectorTileFeature } from "@mapbox/vector-tile";
import * as THREE from "three";
import { Tile } from "./tile";

/**
 * Tile primitive is an array of tile coordinates & zoom level.
 */
export type TilePrimitive = [number, number, number];

/**
 * Alternative to TilePrimitive - tile coordinates & zoom level represented as object properties: x, y, z.
 */
export interface ITileObject {
  x: number;
  y: number;
  z: number;
}

/**
 * Object that represents current ThreeMap view - contains 2 Tile arrays.
 */
export interface IView {
  /**
   * List of tiles to be removed.
   */
  toRemove: Tile[];
  /**
   * List of tiles to be added.
   */
  toRender: Tile[];
}

/**
 * ThreeMap style configuration.
 */
export interface IStyle {
  /**
   * Your MVT tiles address with {x}, {y} and {z} params.
   */
  address: string;
  /**
   * Array of layers' styles
   */
  layers: ILayerStyle[];
  /**
   * THREE.JS Material for ThreeMap's tiles. <bt/>
   * Keep in mind that ThreeMap automatically sets vertexColors and side attributes.
   */
  material: THREE.Material;
  /**
   * Max value for address' {z} param.
   * @default `16`
   */
  maxZoom?: number;
  /**
   * Min value for address' {z} param.
   * @default `1`
   */
  minZoom?: number;
  /**
   * Value for tiles calculation. <br/>
   * ThreeMap generate tiles for view by generating grid of tiles e.g. 5x5. <br/>
   * Then it checks if these are in camera frustum. <br/>
   * This value sets the tile grid limit in each direction from center tile. <br/>
   * E.g. if value is 3 then the grid is 7x7 which is (3x2+1) x (3x2+1).
   * @default `2`
   */
  tilesExtend?: number;
  /**
   * Number of WebWorkers to be used in WorkerPool instance.
   * @default `4`
   */
  workers?: number;
}

export type GeometryType = "POLYGON" | "LINESTRING" | "ALL";

/**
 * 2D Vector - array of x, y coords.
 */
export type Vec2 = number[] | [number, number];

/**
 * 3D Vector - array of x, y, z coords.
 */
export type Vec3 = number[] | [number, number, number];

/**
 * Function expression allowed in ThreeMap's style configuration.
 * You get access to currently processed feature's properties.
 * IT MUST RETURN VALUE OF SAME TYPE AS SPECIFIED!
 * IT MUST BE WRITTEN AS FUNCTION EXPRESSION WITH FUNCTION KEYWORD (NO ARROW FUNCTIONS!)
 */
export type styleFunction = (feature: any) => number | boolean | string;

/**
 * Layer's style configuration. <br/>
 * Each property of style should be of specified type, styleFunction (if allowed) or function string.
 */
export interface ILayerStyle {
  /**
   * Element's vertices color as hex or in other format.
   * @see [color-parse](https://www.npmjs.com/package/color-parse)
   */
  color: styleFunction | string | number[];
  /**
   * Element height - only for polygons.
   */
  height?: styleFunction | string | number;
  /**
   * Element min-height - only for polygons.
   * @see [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:min_height)
   */
  min_height?: styleFunction | string | number;
  /**
   * Layer's name e.g. buildings
   */
  name: string;
  /**
   * If element shall be shown
   * @default `true`
   */
  show?: styleFunction | string | boolean;
  /**
   * If generate cups
   * @default `true`
   */
  cups?: boolean;
  /**
   * Accepted geometry type for layer.
   * @default `ALL`
   */
  type?: GeometryType;
  /**
   * Line width - only for lineStrings.
   * @default `2`
   */
  width?: styleFunction | string | number;
  /**
   * @hidden
   */
  min_height_tmp?: number;
  /**
   * @hidden
   */
  height_tmp?: number;
  /**
   * @hidden
   */
  width_tmp?: number;
  /**
   * @hidden
   */
  color_tmp?: number[];
  /**
   * @hidden
   */
  show_tmp?: boolean;
}

/**
 * Buffers for generating geometry. <bt/>
 * Fruit of WebWorkers' work.
 */
export interface ITileBuffers {
  id: string;
  colorBuffer: ArrayBuffer;
  normalBuffer: ArrayBuffer;
  vertexBuffer: ArrayBuffer;
}

/**
 * Data of event sent from WebWorker.
 */
export interface IWorkerEventData {
  realData: ITileBuffers;
  type: string;
}

/**
 * Event sent from WebWorker.
 */
export interface IWorkerEvent {
  data: IWorkerEventData;
  target: object;
}

/**
 * Data object used inside WebWorkers for building tiles.
 */
export interface IWorkerData {
  colData: number[];
  cups: object;
  feature: VectorTileFeature;
  inxData: number[];
  layerOrder: number;
  tile: TilePrimitive;
  vecData: number[];
}

/**
 * Message sent to WebWorker
 */
export interface IWorkerMessage {
  id: string;
  style: IStyle;
  url: string;
}
