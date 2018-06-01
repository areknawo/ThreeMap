/**
 * @module ThreeMapGlobals
 * ThreeMap's most important values.
 */
import Emitter = mitt.Emitter;
import {
  Camera,
  Frustum,
  Material,
  Object3D,
  OrbitControls,
  Scene,
} from "three";
import { IStyle } from "./ThreeMap.interfaces";
import { TileGrid } from "./tilegrid";

/**
 * ThreeMap globally-accessible values.
 */
interface IThreeMap {
  /**
   * ThreeJS camera.
   */
  camera: Camera;
  /**
   * ThreeJS controls.
   */
  controls: OrbitControls;
  /*
     * ThreeMap events.
     */
  events: Emitter;
  /**
   * Camera frustum for tiles calculations.
   */
  frustum: Frustum;
  /**
   * Tiles grid.
   */
  grid: TileGrid;
  /**
   * ThreeMap's tiles' ThreeJS material.
   */
  material: Material;
  /**
   * ThreeJS scene.
   */
  scene: Scene;
  /**
   * ThreeMap style configuration.
   */
  style: IStyle;
  /**
   * ThreeMap main object
   */
  three_map: Object3D;
}

/**
 * @hidden
 * ThreeMap globals initialization.
 */
export const TM: IThreeMap = {
  camera: undefined,
  controls: undefined,
  events: undefined,
  frustum: undefined,
  grid: undefined,
  material: undefined,
  scene: undefined,
  style: undefined,
  three_map: undefined,
};
