[ThreeMap](api-readme.md) > [TileGrid](api-modules-tilegrid.md) > [TileGrid](api-classes-tilegrid.tilegrid-1.md)



## Class: TileGrid


Grid - main tile-grouping unit

### Properties

* [position](api-classes-tilegrid.tilegrid-1.md#position)
* [tiles](api-classes-tilegrid.tilegrid-1.md#tiles)
* [zoom](api-classes-tilegrid.tilegrid-1.md#zoom)


### Methods

* [getTilesForView](api-classes-tilegrid.tilegrid-1.md#gettilesforview)
* [update](api-classes-tilegrid.tilegrid-1.md#update)
* [render](api-classes-tilegrid.tilegrid-1.md#render)



---
## Properties
<a id="position"></a>

###  position

**●  position**:  *`number`[]* 

*Defined in [tilegrid.ts:36](https://github.com/areknawo/Three-Map/blob/41e1f78/src/tilegrid.ts#L36)*



Current mercator position




___

<a id="tiles"></a>

###  tiles

**●  tiles**:  *[TileList](api-classes-tilelist.tilelist-1.md)* 

*Defined in [tilegrid.ts:40](https://github.com/areknawo/Three-Map/blob/41e1f78/src/tilegrid.ts#L40)*



Current tiles in view




___

<a id="zoom"></a>

###  zoom

**●  zoom**:  *`number`* 

*Defined in [tilegrid.ts:44](https://github.com/areknawo/Three-Map/blob/41e1f78/src/tilegrid.ts#L44)*



Current zoom level




___


## Methods
<a id="gettilesforview"></a>

###  getTilesForView

► **getTilesForView**(): [TileList](api-classes-tilelist.tilelist-1.md)



*Defined in [tilegrid.ts:55](https://github.com/areknawo/Three-Map/blob/41e1f78/src/tilegrid.ts#L55)*



Gets tiles inside current view.
*__example__*:     var gridInstance = new Grid();
    gridInstance.getTilesForView();





**Returns:** [TileList](api-classes-tilelist.tilelist-1.md)
Tiles in view.





___

<a id="update"></a>

###  update

► **update**(): `void`



*Defined in [tilegrid.ts:81](https://github.com/areknawo/Three-Map/blob/41e1f78/src/tilegrid.ts#L81)*



Updates view on change.
*__example__*: `gridInstance.update();`





**Returns:** `void`





___

<a id="render"></a>

### «Static» render

► **render**(view: *[IView](api-interfaces-interfaces.iview.md)*): `void`



*Defined in [tilegrid.ts:21](https://github.com/areknawo/Three-Map/blob/41e1f78/src/tilegrid.ts#L21)*



'Renders' tiles - sends tasks to build & remove them.
*__example__*: `Grid.render({toRender: [...], toRemove: [...]});`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| view | [IView](api-interfaces-interfaces.iview.md)   |  List of tiles to render & remove. |





**Returns:** `void`





___


