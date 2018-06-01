/**
 * ThreeMap exposed API
 */
import Emitter = mitt.Emitter;
import { Camera, Frustum, Material, Object3D, OrbitControls, Scene } from "three";
import { IStyle } from "./ThreeMap.interfaces";
import { Grid } from "./tilegrid";

interface IThreeMapBase {
    camera: Camera;
    controls: OrbitControls;
    events: Emitter;
    frustum: Frustum;
    grid: Grid;
    material: Material;
    scene: Scene;
    style: IStyle;
    three_map: Object3D;
}
export const TM: IThreeMapBase = {
    /**
     * ThreeJS camera
     */
    camera: undefined,
    /**
     * ThreeJS controls
     */
    controls: undefined,
    /*
     * ThreeMap events
     */
    events: undefined,
    /**
     * Camera frustum for tiles calculations
     */
    frustum: undefined,
    /**
     * Tiles grid
     */
    grid: undefined,
    /**
     * ThreeMap's tiles' ThreeJS material
     */
    material: undefined,
    /**
     * ThreeJS scene
     */
    scene: undefined,
    /**
     * ThreeMap style
     */
    style: undefined,
    /**
     * ThreeMap main object
     */
    three_map: undefined,
};
