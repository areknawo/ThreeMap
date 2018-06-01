/**
 * @module ThreeMap
 * ThreeMap base class - initialize map.
 */
import EventEmitter from "mitt";
import { Camera, Frustum, Matrix4, Object3D, OrbitControls } from "three";
import { Extension } from "./Extension";
import { TM } from "./ThreeMap";
import { IStyle } from "./ThreeMap.interfaces";
import { TileGrid } from "./tilegrid";
import { ll2merc, merc2ll, readStyle } from "./utils";
import { initWorkerPool } from "./workerpool";

/**
 * ThreeMap base class
 */
export class Map extends Object3D {
  /**
   * Convert longitude - latitude coordinates to mercator coordinates.
   *
   * @param latlng - Array of longitude & latitude coordinates.
   * @returns Array of mercator x & y coordinates.
   * @example `ThreeMap.lonlatToMerc([77.35262, 40.2525]);`
   */
  public static lonLatToMerc(latlng: number[]): number[] {
    return ll2merc(latlng);
  }

  /**
   * Convert mercator coordinates to longitude - latitude coordinates.
   *
   * @param mercXY - Array of mercator x & y coordinates.
   * @returns Array of longitude & latitude coordinates.
   * @example `ThreeMap.mercToLonLat([462073.1353, 295052.562]);`
   */
  public static mercToLonLat(mercXY: number[]): number[] {
    return merc2ll(mercXY);
  }

  public events: EventEmitter.Emitter;

  /**
   * @param params - Object with ThreeJS camera, controls and ThreeMap style configuration object.
   * @example `var map = new ThreeMap({camera: [...], controls: [...], style: [...]});`
   */
  public constructor(params: {
    camera: Camera;
    controls: OrbitControls;
    style: IStyle;
  }) {
    super();
    if (!params.camera || !params.controls || !params.style) {
      throw new Error(
        "Please provide parameters with ThreeJS camera, controls and ThreeMap style!",
      );
    }
    this.events = new EventEmitter();
    TM.style = readStyle(params.style);
    TM.camera = params.camera;
    TM.frustum = new Frustum();
    TM.frustum.setFromMatrix(
      new Matrix4().multiplyMatrices(
        TM.camera.projectionMatrix,
        TM.camera.matrixWorldInverse,
      ),
    );
    TM.controls = params.controls;
    TM.grid = new TileGrid();
    TM.events = this.events;
    TM.three_map = this;
    TM.material = params.style.material;
    initWorkerPool();
    params.style.material = undefined;

    TM.controls.addEventListener("change", () => {
      TM.camera.updateMatrix();
      TM.camera.updateMatrixWorld(false);
      TM.camera.matrixWorldInverse.getInverse(TM.camera.matrixWorld);
      TM.frustum.setFromMatrix(
        new Matrix4().multiplyMatrices(
          TM.camera.projectionMatrix,
          TM.camera.matrixWorldInverse,
        ),
      );
      TM.grid.update();
    });
  }

  /**
   * Unregister ThreeMap's event listener.
   *
   * @param event - Event's name.
   * @param callback - Event's associated callback.
   * @example `map.off('tileCreated', (e) => console.log(e));`
   */
  public off(event: string, callback: (data: object) => any): void {
    this.events.off(event, callback);
  }

  /**
   * Register ThreeMap's event listener.
   *
   * @param event - Event's name.
   * @param callback - Event's callback.
   * @example `map.on('tileCreated', (e) => console.log(e));`
   * ```
   */
  public on(event: string, callback: (data: object) => any): void {
    this.events.on(event, callback);
  }

  /**
   * Registers new ThreeMap's extensions.
   *
   * @param ext - ThreeMap's Extension class instance.
   * @example `map.register(new ThreeMap.Extension({...}));`
   * ```
   */
  public registerExtension(ext: Extension): void {
    this.events.on("update", ext.onUpdate.bind(ext));
    this.events.on("tileCreated", ext.onTileRemoved.bind(ext));
    this.events.on("tileRemoved", ext.onTileCreated.bind(ext));
    this.events.on("feature", ext.onFeature.bind(ext));
    ext.style = TM.style;
    ext.map = TM.three_map;
  }
}

export { Extension };
