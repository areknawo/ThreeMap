
/**
 * TileList - collection of tile primitives
 */
import { IView } from "./ThreeMap.interfaces";
import { Tile } from "./tile";

export class TileList extends Object {
    public constructor() {
        super();
    }

    /**
     * Checks if TileList contains specific Tile by Quadkey
     */
    public containsTile(tile: string): boolean {
        return this.hasOwnProperty(tile);
    }

    /**
     * Get tiles to remove (not seen in current view) and render (actually seen in view)
     * @param  previousTiles Tile
     * @returns View instance - tiles to be rendered & removed
     */
    public getTilesToRender(previousTiles?: TileList): IView {
        const toRender: Tile[] = [];
        if (!previousTiles) {
            for (const tile in this) {
                if (this.hasOwnProperty(tile)) {
                    // @ts-ignore
                    toRender.push(this[tile]);
                }
            }

            return {toRender, toRemove: undefined };
        }
        const toRemove: Tile[] = [];
        const toPreserve: TileList = new TileList();
        for (const tile in this) {
            if (this.hasOwnProperty(tile)) {
                if (!previousTiles.containsTile(tile)) {
                    // @ts-ignore
                    toRender.push(this[tile]);
                } else {
                    // @ts-ignore
                    toPreserve[tile] = true;
                }
            }
        }
        for (const tile in previousTiles) {
            if (!toPreserve.containsTile(tile)) {
                toRemove.push(previousTiles[tile]);
            }
        }

        return {toRender, toRemove};
    }
}
