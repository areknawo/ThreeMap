[ThreeMap](api-readme.md) > [Interfaces](api-modules-interfaces.md) > [ILayerStyle](api-interfaces-interfaces.ilayerstyle.md)



## Interface: ILayerStyle


Layer's style configuration.  
Each property of style should be of specified type, styleFunction (if allowed) or function string.


## Properties
<a id="color"></a>

###  color

**●  color**:  *[styleFunction](api-modules-interfaces.md#stylefunction)⎮`string`⎮`number`[]* 

*Defined in [ThreeMap.interfaces.ts:111](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L111)*



Element's vertices color as hex or in other format.
*__see__*: [color-parse](https://www.npmjs.com/package/color-parse)





___

<a id="cups"></a>

### «Optional» cups

**●  cups**:  *`boolean`* 

*Defined in [ThreeMap.interfaces.ts:134](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L134)*



If generate cups
*__default__*: `true`





___

<a id="height"></a>

### «Optional» height

**●  height**:  *[styleFunction](api-modules-interfaces.md#stylefunction)⎮`string`⎮`number`* 

*Defined in [ThreeMap.interfaces.ts:115](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L115)*



Element height - only for polygons.




___

<a id="min_height"></a>

### «Optional» min_height

**●  min_height**:  *[styleFunction](api-modules-interfaces.md#stylefunction)⎮`string`⎮`number`* 

*Defined in [ThreeMap.interfaces.ts:120](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L120)*



Element min-height - only for polygons.
*__see__*: [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:min_height)





___

<a id="name"></a>

###  name

**●  name**:  *`string`* 

*Defined in [ThreeMap.interfaces.ts:124](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L124)*



Layer's name e.g. buildings




___

<a id="show"></a>

### «Optional» show

**●  show**:  *[styleFunction](api-modules-interfaces.md#stylefunction)⎮`string`⎮`boolean`* 

*Defined in [ThreeMap.interfaces.ts:129](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L129)*



If element shall be shown
*__default__*: `true`





___

<a id="type"></a>

### «Optional» type

**●  type**:  *[GeometryType](api-modules-interfaces.md#geometrytype)* 

*Defined in [ThreeMap.interfaces.ts:139](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L139)*



Accepted geometry type for layer.
*__default__*: `ALL`





___

<a id="width"></a>

### «Optional» width

**●  width**:  *[styleFunction](api-modules-interfaces.md#stylefunction)⎮`string`⎮`number`* 

*Defined in [ThreeMap.interfaces.ts:144](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L144)*



Line width - only for lineStrings.
*__default__*: `2`





___


