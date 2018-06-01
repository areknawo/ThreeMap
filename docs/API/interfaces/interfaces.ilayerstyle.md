[ThreeMap](../README.md) > [Interfaces](../modules/interfaces.md) > [ILayerStyle](../interfaces/interfaces.ilayerstyle.md)

# Interface: ILayerStyle

Layer's style configuration.  
Each property of style should be of specified type, styleFunction (if allowed) or function string.

## Hierarchy

**ILayerStyle**

## Index

### Properties

* [color](interfaces.ilayerstyle.md#color)
* [cups](interfaces.ilayerstyle.md#cups)
* [height](interfaces.ilayerstyle.md#height)
* [min_height](interfaces.ilayerstyle.md#min_height)
* [name](interfaces.ilayerstyle.md#name)
* [show](interfaces.ilayerstyle.md#show)
* [type](interfaces.ilayerstyle.md#type)
* [width](interfaces.ilayerstyle.md#width)

---

## Properties

<a id="color"></a>

###  color

**● color**: * [styleFunction](../modules/interfaces.md#stylefunction) &#124; `string` &#124; `number`[]
*

*Defined in [ThreeMap.interfaces.ts:111](https://github.com/areknawo/ThreeMap/blob/master/src/ThreeMap.interfaces.ts#L111)*

Element's vertices color as hex or in other format.
*__see__*: [color-parse](https://www.npmjs.com/package/color-parse)

___
<a id="cups"></a>

### `<Optional>` cups

**● cups**: *`boolean`*

*Defined in [ThreeMap.interfaces.ts:134](https://github.com/areknawo/ThreeMap/blob/master/src/ThreeMap.interfaces.ts#L134)*

If generate cups
*__default__*: `true`

___
<a id="height"></a>

### `<Optional>` height

**● height**: * [styleFunction](../modules/interfaces.md#stylefunction) &#124; `string` &#124; `number`
*

*Defined in [ThreeMap.interfaces.ts:115](https://github.com/areknawo/ThreeMap/blob/master/src/ThreeMap.interfaces.ts#L115)*

Element height - only for polygons.

___
<a id="min_height"></a>

### `<Optional>` min_height

**● min_height**: * [styleFunction](../modules/interfaces.md#stylefunction) &#124; `string` &#124; `number`
*

*Defined in [ThreeMap.interfaces.ts:120](https://github.com/areknawo/ThreeMap/blob/master/src/ThreeMap.interfaces.ts#L120)*

Element min-height - only for polygons.
*__see__*: [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:min_height)

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [ThreeMap.interfaces.ts:124](https://github.com/areknawo/ThreeMap/blob/master/src/ThreeMap.interfaces.ts#L124)*

Layer's name e.g. buildings

___
<a id="show"></a>

### `<Optional>` show

**● show**: * [styleFunction](../modules/interfaces.md#stylefunction) &#124; `string` &#124; `boolean`
*

*Defined in [ThreeMap.interfaces.ts:129](https://github.com/areknawo/ThreeMap/blob/master/src/ThreeMap.interfaces.ts#L129)*

If element shall be shown
*__default__*: `true`

___
<a id="type"></a>

### `<Optional>` type

**● type**: *[GeometryType](../modules/interfaces.md#geometrytype)*

*Defined in [ThreeMap.interfaces.ts:139](https://github.com/areknawo/ThreeMap/blob/master/src/ThreeMap.interfaces.ts#L139)*

Accepted geometry type for layer.
*__default__*: `ALL`

___
<a id="width"></a>

### `<Optional>` width

**● width**: * [styleFunction](../modules/interfaces.md#stylefunction) &#124; `string` &#124; `number`
*

*Defined in [ThreeMap.interfaces.ts:144](https://github.com/areknawo/ThreeMap/blob/master/src/ThreeMap.interfaces.ts#L144)*

Line width - only for lineStrings.
*__default__*: `2`

___

