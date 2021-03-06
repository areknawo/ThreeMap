[ThreeMap](api-readme.md) > [Tile](api-modules-tile.md) > [Tile](api-classes-tile.tile-1.md)



## Class: Tile


Full-fledged tile - used for View instances

### Constructors

* [constructor](api-classes-tile.tile-1.md#constructor)


### Properties

* [bounds](api-classes-tile.tile-1.md#bounds)
* [id](api-classes-tile.tile-1.md#id)
* [x](api-classes-tile.tile-1.md#x)
* [y](api-classes-tile.tile-1.md#y)
* [z](api-classes-tile.tile-1.md#z)


### Methods

* [build](api-classes-tile.tile-1.md#build)
* [getBounds](api-classes-tile.tile-1.md#getbounds)
* [remove](api-classes-tile.tile-1.md#remove)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Tile**(tile: *[TilePrimitive](api-modules-interfaces.md#tileprimitive)*, id?: *`string`*): [Tile](api-classes-tile.tile-1.md)


*Defined in [tile.ts:39](https://github.com/areknawo/ThreeMap/blob/master/src/tile.ts#L39)*


*__example__*: `new Tile([10, 15, 8], "00003232");`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| tile | [TilePrimitive](api-modules-interfaces.md#tileprimitive)   |  Array of tile coordinates [x,y,z]. |
| id | `string`   |  Optional pre-generated tile's quadkey. |





**Returns:** [Tile](api-classes-tile.tile-1.md)

---


## Properties
<a id="bounds"></a>

###  bounds

**●  bounds**:  *`Box3`* 

*Defined in [tile.ts:19](https://github.com/areknawo/ThreeMap/blob/master/src/tile.ts#L19)*



Tile's bounds




___

<a id="id"></a>

###  id

**●  id**:  *`string`* 

*Defined in [tile.ts:23](https://github.com/areknawo/ThreeMap/blob/master/src/tile.ts#L23)*



Tile's id a.k.a. QuadKey




___

<a id="x"></a>

###  x

**●  x**:  *`number`* 

*Defined in [tile.ts:27](https://github.com/areknawo/ThreeMap/blob/master/src/tile.ts#L27)*



Tile's x coordinate




___

<a id="y"></a>

###  y

**●  y**:  *`number`* 

*Defined in [tile.ts:31](https://github.com/areknawo/ThreeMap/blob/master/src/tile.ts#L31)*



Tile's y coordinate




___

<a id="z"></a>

###  z

**●  z**:  *`number`* 

*Defined in [tile.ts:35](https://github.com/areknawo/ThreeMap/blob/master/src/tile.ts#L35)*



Tile's zoom level




___


## Methods
<a id="build"></a>

###  build

► **build**(): `void`



*Defined in [tile.ts:57](https://github.com/areknawo/ThreeMap/blob/master/src/tile.ts#L57)*



Send task to worker to start creating geometry.
*__example__*: `Tile.build();`





**Returns:** `void`





___

<a id="getbounds"></a>

###  getBounds

► **getBounds**(): `Box3`



*Defined in [tile.ts:66](https://github.com/areknawo/ThreeMap/blob/master/src/tile.ts#L66)*



Get tile's bounds.
*__example__*: `Tile.getBounds();`





**Returns:** `Box3`
ThreeJS bounding box.





___

<a id="remove"></a>

###  remove

► **remove**(): `void`



*Defined in [tile.ts:74](https://github.com/areknawo/ThreeMap/blob/master/src/tile.ts#L74)*



Remove tile from grid.
*__example__*: `Tile.remove();`





**Returns:** `void`





___


