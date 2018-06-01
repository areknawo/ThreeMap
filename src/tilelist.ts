/**
 * @module TileList
 */
import { IView } from "./ThreeMap.interfaces";
import { Tile } from "./tile";

/**
 * TileList - collection of tiles
 */
export class TileList extends Array {
  /**
   * Checks if TileList contains specific Tile by Quadkey.
   *
   * @param quadkey - Tile's quadkey.
   * @example `TileList.containsTile("00003232");`
   */
  public containsTile(quadkey: string): boolean {
    for (let i = 0; i < this.length; i++) {
      if (this[i].id === quadkey) {
        return true;
      }
    }
    return false;
  }

  /**
   * Get tiles to remove (not seen in current view) and render (actually seen in view).
   *
   * @param  previousTiles - Collection of currently-in-view tiles.
   * @returns View instance - tiles to be rendered & removed.
   * @example `TileList.getTilesToRender({...});`
   */
  public getTilesToRender(previousTiles?: TileList): IView {
    const toRender: Tile[] = [];
    if (!previousTiles) {
      for (let i = 0; i < this.length; i++) {
          toRender.push(this[i]);
      }

      return { toRender, toRemove: undefined };
    }
    const toRemove: Tile[] = [];
    const toPreserve: TileList = new TileList();
    for (let i = 0; i < this.length; i++) {
        if (!previousTiles.containsTile(this[i].id)) {
          // @ts-ignore
          toRender.push(this[i]);
        } else {
          // @ts-ignore
          toPreserve.push(this[i]);
        }

    }
    for (let i = 0; i < previousTiles.length; i++) {
      if (!toPreserve.containsTile(previousTiles[i].id)) {
        toRemove.push(previousTiles[i]);
      }
    }

    return { toRender, toRemove };
  }
}
