/**
 * @module Tile
 */
import { tileToQuadkey } from "@mapbox/tilebelt";
import { dist } from "gl-vec2";
import { Box3 } from "three";
import { TM } from "./ThreeMap";
import { TilePrimitive } from "./ThreeMap.interfaces";
import { getURLForTile, removeTile, tileBounds } from "./utils";
import { startWorker } from "./workerpool";

/**
 * Full-fledged tile - used for View instances
 */
export class Tile {
  /**
   * Tile's bounds
   */
  public bounds: Box3;
  /**
   * Tile's id a.k.a. QuadKey
   */
  public id: string;
  /**
   * Tile's x coordinate
   */
  public x: number;
  /**
   * Tile's y coordinate
   */
  public y: number;
  /**
   * Tile's zoom level
   */
  public z: number;
  /**
   * One-time assign url of tile
   */
  private readonly url: string;

  /**
   * @param tile - Array of tile coordinates [x,y,z].
   * @param id - Optional pre-generated tile's quadkey.
   * @example `new Tile([10, 15, 8], "00003232");`
   */
  public constructor(tile: TilePrimitive, id?: string) {
    this.id = id ? id : tileToQuadkey(tile);
    [this.x, this.y, this.z] = tile;
    this.url = getURLForTile({ x: this.x, y: this.y, z: this.z });
    this.bounds = tileBounds(this.id);
  }
  /**
   * Send task to worker to start creating geometry.
   *
   * @example `Tile.build();`
   */
  public build(): void {
    return startWorker({ url: this.url, id: this.id, style: TM.style });
  }
  /**
   * Get tile's bounds.
   *
   * @returns ThreeJS bounding box.
   * @example `Tile.getBounds();`
   */
  public getBounds(): Box3 {
    return this.bounds;
  }
  /**
   * Remove tile from grid.
   *
   * @example `Tile.remove();`
   */
  public remove(): void {
    removeTile(this.id);
  }
}
