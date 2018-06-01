/**
 * @module TileGrid
 */
import { getChildren, tileToBBOX, tileToQuadkey } from "@mapbox/tilebelt";
import { TM } from "./ThreeMap";
import { IView, TilePrimitive } from "./ThreeMap.interfaces";
import { Tile } from "./tile";
import { TileList } from "./tilelist";
import { getCameraPosition, getTileFromMerc, getZoom, getZoomLevel, intersects, realTile } from "./utils";

/**
 * Grid - main tile-grouping unit
 */
export class TileGrid {
  /**
   * 'Renders' tiles - sends tasks to build & remove them.
   *
   * @param view - List of tiles to render & remove.
   * @example `Grid.render({toRender: [...], toRemove: [...]});`
   */
  public static render(view: IView): void {
    if (view.toRender) {
      for (let i = 0; i < view.toRender.length; i++) {
        view.toRender[i].build();
      }
    }
    if (view.toRemove) {
      for (let i = 0; i < view.toRemove.length; i++) {
        view.toRemove[i].remove();
      }
    }
  }
  /**
   * Current mercator position
   */
  public position: number[];
  /**
   * Current tiles in view
   */
  public tiles: TileList;
  /**
   *  Current zoom level
   */
  public zoom: number;

  /**
   * Gets tiles inside current view.
   *
   * @returns Tiles in view.
   * @example ```
   * var gridInstance = new Grid();
   * gridInstance.getTilesForView();
   * ```
   */
  public getTilesForView(): TileList {
    const tiles: TileList = new TileList();
    let tile: TilePrimitive;
    let tileObject: Tile;
    this.position = getCameraPosition();
    this.zoom = getZoomLevel(getZoom());
    const centerTile: TilePrimitive = getTileFromMerc(this.position, this.zoom);
    for (let x: number = -TM.style.tilesExtend; x <= TM.style.tilesExtend; x++) {
      for (let y: number = -TM.style.tilesExtend; y <= TM.style.tilesExtend; y++) {
        tile = [centerTile[0] + x, centerTile[1] + y, centerTile[2]];
        if (realTile(tile)) {
          tileObject = new Tile(tile);
          if (intersects(tileObject.bounds)) {
            tiles.push(tileObject);
          }
        }
      }
    }

    return tiles;
  }
  /**
   * Updates view on change.
   *
   * @example `gridInstance.update();`
   */
  public update(): void {
    let view: IView;
    if (this.tiles) {
      const oldTiles: TileList = this.tiles;
      this.tiles = this.getTilesForView();
      view = this.tiles.getTilesToRender(oldTiles);
    } else {
      this.tiles = this.getTilesForView();
      view = this.tiles.getTilesToRender();
    }
    //TM.events.emit("update", { tiles: this.tiles });
    TileGrid.render(view);
  }
}
