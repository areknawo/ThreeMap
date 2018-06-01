[ThreeMap](../README.md) > [TileGrid](../modules/tilegrid.md) > [TileGrid](../classes/tilegrid.tilegrid-1.md)

# Class: TileGrid

Grid - main tile-grouping unit

## Hierarchy

**TileGrid**

## Index

### Properties

* [position](tilegrid.tilegrid-1.md#position)
* [tiles](tilegrid.tilegrid-1.md#tiles)
* [zoom](tilegrid.tilegrid-1.md#zoom)

### Methods

* [getTilesForView](tilegrid.tilegrid-1.md#gettilesforview)
* [update](tilegrid.tilegrid-1.md#update)
* [render](tilegrid.tilegrid-1.md#render)

---

## Properties

<a id="position"></a>

###  position

**● position**: *`number`[]*

*Defined in [tilegrid.ts:36](https://github.com/areknawo/ThreeMap/blob/master/src/tilegrid.ts#L36)*

Current mercator position

___
<a id="tiles"></a>

###  tiles

**● tiles**: *[TileList](tilelist.tilelist-1.md)*

*Defined in [tilegrid.ts:40](https://github.com/areknawo/ThreeMap/blob/master/src/tilegrid.ts#L40)*

Current tiles in view

___
<a id="zoom"></a>

###  zoom

**● zoom**: *`number`*

*Defined in [tilegrid.ts:44](https://github.com/areknawo/ThreeMap/blob/master/src/tilegrid.ts#L44)*

Current zoom level

___

## Methods

<a id="gettilesforview"></a>

###  getTilesForView

▸ **getTilesForView**(): [TileList](tilelist.tilelist-1.md)

*Defined in [tilegrid.ts:55](https://github.com/areknawo/ThreeMap/blob/master/src/tilegrid.ts#L55)*

Gets tiles inside current view.
*__example__*: ```
var gridInstance = new Grid();
gridInstance.getTilesForView();
```

**Returns:** [TileList](tilelist.tilelist-1.md)
Tiles in view.

___
<a id="update"></a>

###  update

▸ **update**(): `void`

*Defined in [tilegrid.ts:83](https://github.com/areknawo/ThreeMap/blob/master/src/tilegrid.ts#L83)*

Updates view on change.
*__example__*: `gridInstance.update();`

**Returns:** `void`

___
<a id="render"></a>

### `<Static>` render

▸ **render**(view: *[IView](../interfaces/interfaces.iview.md)*): `void`

*Defined in [tilegrid.ts:21](https://github.com/areknawo/ThreeMap/blob/master/src/tilegrid.ts#L21)*

'Renders' tiles - sends tasks to build & remove them.
*__example__*: `Grid.render({toRender: [...], toRemove: [...]});`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| view | [IView](../interfaces/interfaces.iview.md) |  List of tiles to render & remove. |

**Returns:** `void`

___

