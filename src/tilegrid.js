/**
 * Grid - main tile-grouping unit
 */
import { getChildren, tileToBBOX, tileToQuadkey } from "@mapbox/tilebelt";
import { TM } from "./ThreeMap";
import { IView, TilePrimitive } from "./ThreeMap.interfaces";
import { Tile } from "./tile";
import { TileList } from "./tilelist";
import { getCameraPosition,  getTileFromMerc, getZoom, getZoomLevel, intersects, realTile } from "./utils";
export class Grid {
    /**
     * 'Renders' tiles - sends tasks to build & remove them
     * @param view List of tiles to render & remove
     */
    public static render(view: IView): void {
        if (view.toRender) {
            for (const tileToRender of view.toRender) {
                tileToRender.build();
            }
        }
        if (view.toRemove) {
            for (const tileToRemove of view.toRemove) {
                tileToRemove.remove();
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

    public getTilesForView(): TileList {
        const tiles: TileList = new TileList();
        let tile: TilePrimitive;
        let quadkey: string;
        let tileObject: Tile;
        this.position = getCameraPosition();
        this.zoom = getZoomLevel(getZoom());
        const centerTile: TilePrimitive = getTileFromMerc(this.position, this.zoom);
        for (let x: number = -TM.style.tilesExtend; x <= TM.style.tilesExtend; x++) {
           for (let y: number = -TM.style.tilesExtend; y <= TM.style.tilesExtend; y++) {
                tile = [centerTile[0] + x, centerTile[1] + y, centerTile[centerTile.length - 1]];
                if (realTile(tile)) {
                    quadkey = tileToQuadkey(tile);
                    tileObject = this.tiles && this.tiles.containsTile(quadkey) ?
                    this.tiles[quadkey] : new Tile(tile, quadkey);

                    if (intersects(tileObject.bounds)) {
                        tiles[quadkey] = tileObject;
                    }
                }
           }
        }

        return tiles;
    }
    /**
     * Updates view on change
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
        TM.events.emit("update", {tiles: this.tiles});
        Grid.render(view);
    }

}
