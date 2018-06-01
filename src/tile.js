/**
 * Full-fledged tile
 * Tile class used for View instances
 */
import { tileToQuadkey } from "@mapbox/tilebelt";
import { dist } from "gl-vec2";
import { Box3 } from "three";
import { TM } from "./ThreeMap";
import { TilePrimitive } from "./ThreeMap.interfaces";
import { getURLForTile, removeTile, tileBounds } from "./utils";
import { startWorker } from "./workerpool";

export class Tile implements Tile {
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

    public constructor(tile: TilePrimitive, id?: string) {
        this.id = id ?  id : tileToQuadkey(tile);
        [this.x, this.y, this.z] = tile;
        this.url = getURLForTile({x: this.x, y: this.y, z: this.z});
        this.bounds = tileBounds(this.id);
    }
    /**
     * Send task to worker to start creating geometry - call startWorker from WorkerPool
     */
    public build(): void {
            return startWorker({url: this.url, id: this.id, style: TM.style});
    }
    public distanceToTile(tile: Tile): number {
        return dist([this.x, this.y], [tile.x, tile.y]);
    }
    public getBounds(): Box3 {
        return this.bounds;
    }
    /**
     * Remove tile from grid - call removeTile from Utils
     */
    public remove(): void {
        removeTile(this.id);
    }

}
