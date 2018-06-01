/**
 * A-Map types & interfaces
 */
import { VectorTileFeature } from "@mapbox/vector-tile";
import * as THREE from "three";
import { Tile } from "./tile";

/**
 * Tile primitive is an array of tile coordinates & zoom level
 * @example ```[1255,1426,15]```
 */
export type TilePrimitive = number[];

/**
 * Alternative to TilePrimitive - tile coordinates & zoom level represented as object properties: x, y, z
 */
export interface ITileObject {
    x: number;
    y: number;
    z: number;
}

export interface IView {
    /**
     * List of tiles to be removed
     */
    toRemove: Tile[];
    /**
     * List of tiles to be added
     */
    toRender: Tile[];
}

export interface IStyle {
    address: string;
    layers: ILayerStyle[];
    material: THREE.Material;
    maxZoom?: number;
    minZoom?: number;
    tilesExtend?: number;
    workers?: number;
}

export type Vec2 = number[] | [number, number];
export type Vec3 = number[] | [number, number, number];
export type styleFunction = (feature: object) => number;
export type F = (...args: object[]) => {};

export interface ILayerStyle {
    color: styleFunction | string;
    color_tmp?: number[];
    cups?: boolean;
    height?: styleFunction | string | number;
    height_tmp?: number;
    min_height?: styleFunction | string | number;
    min_height_tmp?: number;
    name: string;
    show: styleFunction | boolean;
    type?: string[] | string;
    width?: styleFunction | string | number;
    width_tmp?: number;
}

export interface ITileBuffers {
    colorBuffer: ArrayBuffer;
    id: string;
    normalBuffer: ArrayBuffer;
    vertexBuffer: ArrayBuffer;
}

export interface IWorkerEventData {
    realData: ITileBuffers;
    type: string;
}

export interface IWorkerEvent {
    data: IWorkerEventData;
    target: object;
}

export interface IWorkerData {
    colData: number[];
    cups: object;
    feature: VectorTileFeature;
    inxData: number[];
    layerOrder: number;
    tile: TilePrimitive;
    vecData: number[];
}

export interface IWorkerMessage {
    id: string;
    style: IStyle;
    url: string;
}
