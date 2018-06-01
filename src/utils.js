/**
 * @module Utils
 * @preferred
 *
 * Collection of util functions used in library - separated for organization purposes
 */
import SphericalMercator from "@mapbox/sphericalmercator";
import { getChildren, pointToTile, quadkeyToTile, tileToBBOX, tileToQuadkey } from "@mapbox/tilebelt";
import colorParse from "color-parse";
import { Box3, BufferAttribute, BufferGeometry, Mesh, Object3D, Vector3 } from "three";
import { TM } from "./ThreeMap";
import { IStyle, ITileBuffers, ITileObject, TilePrimitive } from "./ThreeMap.interfaces";
import { Tile } from "./tile";
import { cancelTask } from "./workerpool";

const mercatorExtend: number = 20037510;
const tileExtend: number = 2048;
const zoomIndex: number = 2;
const baseZoomNum: number = 2;
/**
 * Pre-calculated scale (tile to max mercator values)
 */
const scale: number = mercatorExtend / tileExtend;
/**
 * SphericalMercator library instance for latLng to mercator coordinates conversion
 */
const merc: SphericalMercator = new SphericalMercator({
    size: 2048,
});
/**
 * Regular expression for matching tile properties in url
 */
const tileRegex: RegExp = /{([zxy])}/g;

/**
 * Get url for tile object
 * @param tileObject Tile primitive represented as object of x, y, z values
 * @returns Tile url
 */
export function getURLForTile(tileObject: ITileObject): string  {
    tileRegex.lastIndex = 0;

    return TM.style.address.replace(tileRegex, (match: string, key: string) =>
        tileObject[key]);
}

export function readStyle(style: IStyle): IStyle {
    for (const layer of style.layers) {
        if (layer.width && typeof layer.width === "function") {
            layer.width = layer.width.toString();
        }
        if (layer.height && typeof layer.height === "function") {
            layer.height = layer.height.toString();
        }
        if (layer.min_height && typeof layer.min_height === "function") {
            layer.min_height = layer.min_height.toString();
        }
        layer.color && typeof layer.color === "function" ?
        layer.color = layer.color.toString() : layer.color = colorParse(layer.color).values;
    }

    return style;
}

export function ll2merc(ll: number[]): number[] {
    return merc.forward(ll);
}

export function merc2ll(xy: number[]): number[] {
    return merc.inverse(xy);
}

export function getTileFromMerc(pos: number[], z: number): TilePrimitive {
    const mercPos: number[] = merc2ll(pos);

    return pointToTile(mercPos[0], mercPos[1], z);
}

/**
 * Turns distance into zoom level
 * @param distance Distance between camera and controls target
 * @returns Zoom level
 */
export function getZoomLevel(distance: number): number {
    const maxZoomLevel: number =  15000000;
    const zoomLevelLog: number = 0.5;

    return Math.round(
        Math.min(
            Math.max(
            Math.log(distance / maxZoomLevel) / Math.log(zoomLevelLog),
            TM.style.minZoom,
            ),
            TM.style.maxZoom,
        ),
    );
}

/**
 * Checks if tile exists in grid
 * @param id Tile's id (QuadKey)
 * @returns If tile exists
 */
export function doesTileExists(id: string): boolean {
    return TM.grid.tiles.containsTile(id);
}
export function realTile(tile: TilePrimitive): boolean {
    const maxTile: number = baseZoomNum ** tile[zoomIndex] - 1;

    return tile[0] >= 0 && tile[1] >= 0 && tile[0] <= maxTile && tile[1] <= maxTile;
}
/**
 * Get tile's center in mercator coordinates
 * @param id Tile's id (QuadKey)
 * @returns Mercator position in form of X, Y array
 */
export function getTilePosition(id: string): number[] {
    const thirdChildIndex: number = 2;
    let tile: number[] = quadkeyToTile(id);
    tile = getChildren(tile)[thirdChildIndex];
    const n: number = Math.PI - baseZoomNum * Math.PI * tile[1] / baseZoomNum ** tile[zoomIndex];
    const halfDegrees: number = 180;
    const fullDegrees: number = 360;

    return merc.forward([
        (tile[0] / baseZoomNum ** tile[zoomIndex] * fullDegrees - halfDegrees),
        (halfDegrees / Math.PI * Math.atan((halfDegrees / fullDegrees) * (Math.exp(n) - Math.exp(-n)))),
    ]);
}

/**
 * Get scale vector for resizing tile local coordinates to mercator coordinates
 * @param id Tile's id (QuadKey)
 * @returns Scale vector in form of X, Y, Z array
 */
export function getTileScale(id: string): number {
    const tile: number[] = quadkeyToTile(id);

    return scale / baseZoomNum ** tile[zoomIndex];
}

/////////////////////////////
///// THREE.JS SESSION /////
///////////////////////////

/**
 * Returns camera base plane position
 * @returns ThreeJS camera XZ (base plane) position
 */
export function getCameraPosition(): number[] {
    return [TM.controls.target.x, -TM.controls.target.z];
}
/**
 * Used for getting zoom level (see Utils)
 * @returns Camera to controls' target distance
 */
export function getZoom(): number {
    return TM.controls.target.distanceTo(TM.camera.position);
}

/**
 * Process data returned from worker
 * @param data Geometry & color buffers generated by worker
 */
export function buildFromWorkerData(data: ITileBuffers): void {
    const pos: number[] = getTilePosition(data.id);
    const tileScale: number = getTileScale(data.id);
    const bufferAttributeSize: number = 3;
    const geometry: BufferGeometry = new BufferGeometry();
    const vertexBuffer: Float32Array = new Float32Array(data.vertexBuffer);
    const colorBuffer: Float32Array = new Float32Array(data.colorBuffer);
    const normalBuffer: Float32Array = new Float32Array(data.normalBuffer);
    geometry.addAttribute("position", new BufferAttribute(vertexBuffer, bufferAttributeSize));
    geometry.addAttribute("color", new BufferAttribute(colorBuffer, bufferAttributeSize));
    geometry.addAttribute("normal", new BufferAttribute(normalBuffer, bufferAttributeSize));
    const tile: Mesh = new Mesh(geometry, TM.material);
    tile.name = data.id;
    TM.three_map.add(tile);
    tile.scale.set(tileScale, 1, tileScale);
    tile.position.set(pos[0], 0, -pos[1]);
    TM.events.emit("tileCreated", {tile});
}

/**
 * @param tile Tile to get bounds for
 * @returns Tile bounds in THREE.Box3 form
 */
export function tileBounds(tile: string): Box3 {
    const pos: number[] = getTilePosition(tile);
    const boundsOffset: number = 0.94;

    const tileScale: number = getTileScale(tile)[0] * tileExtend * boundsOffset;
    const vec1: Vector3 = new Vector3(pos[0] + tileScale, 0, -pos[1] + tileScale);
    const vec2: Vector3 = new Vector3(pos[0] - tileScale, 0, -pos[1] - tileScale);

    return new Box3(vec1, vec2);
}

export function intersects(bounds: Box3): boolean {

    return TM.frustum.intersectsBox(bounds);
}
/**
 * Remove tile from grid & dispose its geometry
 * @param id ID (QuadKey) of tile to remove
 */
export function removeTile(id: string): void {
    const toRemove: Object3D | Mesh = TM.three_map.getObjectByName(id);
    if (toRemove && toRemove instanceof Mesh) {
        if (toRemove.geometry) {
            toRemove.geometry.dispose();
        }
        TM.three_map.remove(toRemove);
    } else {
        cancelTask(id);
    }
    TM.events.emit("tileRemoved", {tileID: toRemove});
}
