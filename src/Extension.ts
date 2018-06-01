/**
 * @module Extension
 */
import { Mesh, Object3D } from "three";
import { IStyle } from "./ThreeMap.interfaces";
import { TileList } from "./tilelist";

interface IHandlers {
  onFeature(e: object): object;
  onTileCreated(e: object): any;
  onTileRemoved(e: object): {};
  onUpdate(e: object): {};
}

interface IOnFeatureEvent {
  /**
   * Vector tile feature object.
   */
  feature: any;
  /**
   * If feature is shown in view.
   */
  shown: boolean;
}
interface IOnTileCreatedEvent {
  /**
   * THREE.JS Mesh of created tile.
   */
  tile: Mesh;
}
interface IOnTileRemovedEvent {
  /**
   * Quadkey of removed tile.
   */
  tileID: string;
}
interface IOnUpdateEvent {
  /**
   * List of new tiles in view.
   */
  tiles: TileList;
}
/**
 * Base class provided for creating ThreeMap Extensions
 */
export class Extension {
  /**
   * ThreeMap ThreeJS base object - tiles container
   */
  public map: Object3D;
  /**
   * Function to be executed when new tile feature is loaded.
   */
  public onFeature: (e: IOnFeatureEvent) => {};
  /**
   * Function to be executed when new tile is added to ThreeMap parent element
   */
  public onTileCreated: (e: IOnTileCreatedEvent) => {};
  /**
   * Function to be executed when tile is removed from ThreeMap parent element
   */
  public onTileRemoved: (e: IOnTileRemovedEvent) => {};
  /**
   * Function to be executed on every ThreeJS controls update - e.g. pan, move etc.
   */
  public onUpdate: (e: IOnUpdateEvent) => {};
  /**
   * ThreeMap style configuration object
   */
  public style: IStyle;

  /**
   * @param handlers - Functions to apply for ThreeMap's corresponding events.
   * @example `new Extension({onFeature: ()=>{}, onTileCreated: ()=>{}, onTileRemoved: ()=>{}, onUpdate: ()=>{}});`
   */
  public constructor(handlers: IHandlers) {
    this.onFeature = handlers.onFeature;
    this.onTileCreated = handlers.onTileCreated;
    this.onTileRemoved = handlers.onTileRemoved;
    this.onUpdate = handlers.onUpdate;
  }
}
