[ThreeMap](../README.md) > [Interfaces](../modules/interfaces.md) > [IStyle](../interfaces/interfaces.istyle.md)

# Interface: IStyle

ThreeMap style configuration.

## Hierarchy

**IStyle**

## Index

### Properties

* [address](interfaces.istyle.md#address)
* [layers](interfaces.istyle.md#layers)
* [material](interfaces.istyle.md#material)
* [maxZoom](interfaces.istyle.md#maxzoom)
* [minZoom](interfaces.istyle.md#minzoom)
* [tilesExtend](interfaces.istyle.md#tilesextend)
* [workers](interfaces.istyle.md#workers)

---

## Properties

<a id="address"></a>

###  address

**● address**: *`string`*

*Defined in [ThreeMap.interfaces.ts:46](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L46)*

Your MVT tiles address with {x}, {y} and {z} params.

___
<a id="layers"></a>

###  layers

**● layers**: *[ILayerStyle](interfaces.ilayerstyle.md)[]*

*Defined in [ThreeMap.interfaces.ts:50](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L50)*

Array of layers' styles

___
<a id="material"></a>

###  material

**● material**: *`Material`*

*Defined in [ThreeMap.interfaces.ts:55](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L55)*

THREE.JS Material for ThreeMap's tiles. Keep in mind that ThreeMap automatically sets vertexColors and side attributes.

___
<a id="maxzoom"></a>

### `<Optional>` maxZoom

**● maxZoom**: *`number`*

*Defined in [ThreeMap.interfaces.ts:60](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L60)*

Max value for address' {z} param.
*__default__*: `16`

___
<a id="minzoom"></a>

### `<Optional>` minZoom

**● minZoom**: *`number`*

*Defined in [ThreeMap.interfaces.ts:65](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L65)*

Min value for address' {z} param.
*__default__*: `1`

___
<a id="tilesextend"></a>

### `<Optional>` tilesExtend

**● tilesExtend**: *`number`*

*Defined in [ThreeMap.interfaces.ts:74](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L74)*

Value for tiles calculation.  
ThreeMap generate tiles for view by generating grid of tiles e.g. 5x5.  
Then it checks if these are in camera frustum.  
This value sets the tile grid limit in each direction from center tile.  
E.g. if value is 3 then the grid is 7x7 which is (3x2+1) x (3x2+1).
*__default__*: `2`

___
<a id="workers"></a>

### `<Optional>` workers

**● workers**: *`number`*

*Defined in [ThreeMap.interfaces.ts:79](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L79)*

Number of WebWorkers to be used in WorkerPool instance.
*__default__*: `4`

___

