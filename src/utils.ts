/**
 * Collection of util functions used in library.
 *
 * @format
 * @module Utils
 */

import SphericalMercator from "@mapbox/sphericalmercator";
import { getChildren, pointToTile, quadkeyToTile, tileToBBOX, tileToQuadkey } from "@mapbox/tilebelt";
import { Box3, BufferAttribute, BufferGeometry, Mesh, Object3D, Vector3 } from "three";
import { TM } from "./ThreeMap";
import { IStyle, ITileBuffers, ITileObject, TilePrimitive } from "./ThreeMap.interfaces";

/**
 * X and y size of Mercator map.
 */
const mercatorExtend: number = 20037510;
/**
 * X and y size of tile.
 */
const tileExtend: number = 2048;
/**
 * Pre-calculated scale (tile to mercator size).
 */
const scale: number = mercatorExtend / tileExtend;
/**
 * SphericalMercator library instance for latLng to mercator coordinates conversion.
 */
const merc: SphericalMercator = new SphericalMercator({
  size: 2048,
});
/**
 * Regular expression for matching tile properties in url.
 */
const tileRegex: RegExp = /{([zxy])}/g;

/**
 * Get url for tile object.
 *
 * @param tileObject - Tile primitive represented as object of x, y, z values.
 * @example `getURLForTile({x: 1, y: 3, z: 7);`
 */
export function getURLForTile(tileObject: ITileObject): string {
  tileRegex.lastIndex = 0;

  return TM.style.address.replace(tileRegex, (match: string, key: string) => tileObject[key]);
}

/**
 * @hidden
 * Throws error.
 * @param message - Error message.
 * @example `throwError('Error');`
 */
export function throwError(message: string): never {
  throw new Error(message);
}
/**
 * Parses ThreeMap style configuration and applies default values.
 *
 * @param style - Style configuration.
 * @example `readStyle({...});`
 */
export function readStyle(style: IStyle): IStyle {
  if (!style.address || !style.layers || !style.material) {
    return throwError("Required style properties (address, layers, material) haven't been supplied");
  }
  for (const layer of style.layers) {
    if (!layer.name || !layer.color) {
      return throwError("Required style properties (name, color) haven't been supplied");
    }
    if (layer.width && typeof layer.width === "function") {
      layer.width = layer.width.toString();
    }
    if (layer.height && typeof layer.height === "function") {
      layer.height = layer.height.toString();
    }
    if (layer.min_height && typeof layer.min_height === "function") {
      layer.min_height = layer.min_height.toString();
    }
    if (layer.color && typeof layer.color === "function") {
      layer.color = layer.color.toString();
    }
    layer.height = layer.height ? layer.height : 0;
    layer.min_height = layer.min_height ? layer.min_height : 0;
    layer.width = layer.width ? layer.width : 2;
    layer.show = layer.show ? layer.show : true;
    layer.cups = layer.cups ? layer.cups : true;
    layer.type = layer.type ? layer.type : "ALL";
  }

  style.maxZoom = style.maxZoom ? style.maxZoom : 16;
  style.minZoom = style.minZoom ? style.minZoom : 1;
  style.tilesExtend = style.tilesExtend ? style.tilesExtend : 2;
  style.workers = style.workers ? style.workers : 4;

  return style;
}

/**
 * Convert longitude - latitude coordinates to mercator coordinates.
 *
 * @param ll - Array of longitude & latitude coordinates.
 * @returns Array of mercator x & y coordinates.
 * @example `ll2merc([77.35262, 40.2525]);`
 */
export function ll2merc(ll: number[]): number[] {
  let xy = merc.forward(ll);
  return [xy[0], -xy[1]];
}

/**
 * Converts mercator coordinates to longitude - latitude coordinates.
 *
 * @param xy - Array of mercator x & y coordinates.
 * @returns Array of longitude & latitude coordinates.
 * @example `ThreeMap.mercToLonLat([462073.1353, 295052.562]);`
 */
export function merc2ll(xy: number[]): number[] {
  return merc.inverse([xy[0], -xy[1]]);
}

/**
 * Returns tile coordinates for given mercator x & y and zoom level values.
 *
 * @param pos - Array of mercator x & y coordinates.
 * @param z - Specified zoom level.
 * @example `getTileFromMerc([130533.56363, 106826.5536], 14);`
 */
export function getTileFromMerc(pos: number[], z: number): TilePrimitive {
  const mercPos: number[] = merc.inverse(pos);

  return pointToTile(mercPos[0], mercPos[1], z);
}

/**
 * Converts distance from camera to controls target into zoom level.
 *
 * @param distance - Distance between camera and controls target.
 * @example `getZoomLevel(357200);`
 */
export function getZoomLevel(distance: number): number {
  const maxZoomLevel: number = 15000000;

  return Math.round(
    Math.min(Math.max(Math.log(distance / maxZoomLevel) / Math.log(0.5), TM.style.minZoom), TM.style.maxZoom),
  );
}

/**
 * Checks if tile exists in grid.
 *
 * @param quadkey - Tile's quadkey.
 * @example `doesTileExists('0123');`
 */
export function doesTileExists(quadkey: string): boolean {
  return TM.grid.tiles.containsTile(quadkey);
}

/**
 * Checks if tile coordinates are in specified bounds (max is 2^zoom level).
 *
 * @param tile - Tile to be checked.
 * @example `realTile([3,4,4]);`
 */
export function realTile(tile: TilePrimitive): boolean {
  const maxTile: number = 2 ** tile[2] - 1;

  return tile[0] >= 0 && tile[1] >= 0 && tile[0] <= maxTile && tile[1] <= maxTile;
}
/**
 * Returns given tile's center in mercator coordinates.
 *
 * @param id - Tile's quadkey.
 * @example `getTilePosition('0123');`
 */
export function getTilePosition(id: string): number[] {
  const thirdChildIndex: number = 2;
  let tile: number[] = quadkeyToTile(id);
  tile = getChildren(tile)[thirdChildIndex];
  const n: number = Math.PI - 2 * Math.PI * tile[1] / 2 ** tile[2];
  const halfDegrees: number = 180;
  const fullDegrees: number = 360;

  return merc.forward([
    tile[0] / 2 ** tile[2] * fullDegrees - halfDegrees,
    halfDegrees / Math.PI * Math.atan(halfDegrees / fullDegrees * (Math.exp(n) - Math.exp(-n))),
  ]);
}

/**
 * Returns number representing x and y scale for resizing tile local coordinates to mercator coordinates.
 *
 * @param id - Tile's quadkey.
 * @example `getTileScale('0123');`
 */
export function getTileScale(id: string): number {
  const tile: number[] = quadkeyToTile(id);

  return scale / 2 ** tile[2];
}

/////////////////////////////
///// THREE.JS SECTION /////
///////////////////////////

/**
 * Returns camera base plane (x & z) position.
 *
 * @example `getCameraPosition()`;`
 */
export function getCameraPosition(): number[] {
  return [TM.controls.target.x, -TM.controls.target.z];
}
/**
 * Returns distance from controls' target to camera.
 *
 * @example `getZoom();`
 */
export function getZoom(): number {
  return TM.controls.target.distanceTo(TM.camera.position);
}

/**
 * Processes data returned from worker & creates tile's mesh.
 *
 * @param data - Position, color & normal buffers generated by WebWorker.
 * @example `buildFromWorkerData({...});`
 */
export function buildFromWorkerData(data: ITileBuffers): void {
  const pos: number[] = getTilePosition(data.id);
  const tileScale: number = getTileScale(data.id);
  const bufferAttributeSize: number = 3;
  const geometry: BufferGeometry = new BufferGeometry();
  geometry.addAttribute("position", new BufferAttribute(new Float32Array(data.vertexBuffer), bufferAttributeSize));
  geometry.addAttribute("color", new BufferAttribute(new Float32Array(data.colorBuffer), bufferAttributeSize));
  geometry.addAttribute("normal", new BufferAttribute( new Float32Array(data.normalBuffer), bufferAttributeSize));
  const tile: Mesh = new Mesh(geometry, TM.material);
  tile.name = data.id;
  TM.three_map.add(tile);
  tile.scale.set(tileScale, 1, tileScale);
  tile.position.set(pos[0], 0, -pos[1]);
  TM.events.emit("tileCreated", { tile });
}

/**
 * Returns bounding box for tile.
 *
 * @param tile - Tile's quadkey to get bounds for.
 * @example `tileBounds('0123');`
 */
export function tileBounds(tile: string): Box3 {
  const pos: number[] = getTilePosition(tile);
  const boundsOffset: number = 0.94;
  const tileScale: number = getTileScale(tile) * tileExtend * boundsOffset;
  const vec1: Vector3 = new Vector3(pos[0] + tileScale, 0, -pos[1] + tileScale);
  const vec2: Vector3 = new Vector3(pos[0] - tileScale, 0, -pos[1] - tileScale);

  return new Box3(vec1, vec2);
}

/**
 * Checks if bounding box intersects camera's frustum.
 *
 * @param bounds - Bounding box.
 * @example `intersects(new THREE.Box3(...));`
 */
export function intersects(bounds: Box3): boolean {
  return TM.frustum.intersectsBox(bounds);
}
/**
 * Removes tile from grid & disposes its geometry.
 *
 * @param quadkey - Quadkey of tile to remove.
 * @example `removeTile('0123');`
 */
export function removeTile(quadkey: string): void {
  const toRemove: Object3D | Mesh = TM.three_map.getObjectByName(quadkey);
  if (toRemove && toRemove instanceof Mesh) {
    if (toRemove.geometry) {
      toRemove.geometry.dispose();
    }
    TM.three_map.remove(toRemove);
  }
  TM.events.emit("tileRemoved", { tileID: quadkey });
}
