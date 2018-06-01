[ThreeMap](../README.md) > [Interfaces](../modules/interfaces.md)

# External module: Interfaces

## Index

### Interfaces

* [ILayerStyle](../interfaces/interfaces.ilayerstyle.md)
* [IStyle](../interfaces/interfaces.istyle.md)
* [ITileBuffers](../interfaces/interfaces.itilebuffers.md)
* [ITileObject](../interfaces/interfaces.itileobject.md)
* [IView](../interfaces/interfaces.iview.md)
* [IWorkerData](../interfaces/interfaces.iworkerdata.md)
* [IWorkerEvent](../interfaces/interfaces.iworkerevent.md)
* [IWorkerEventData](../interfaces/interfaces.iworkereventdata.md)
* [IWorkerMessage](../interfaces/interfaces.iworkermessage.md)

### Type aliases

* [GeometryType](interfaces.md#geometrytype)
* [TilePrimitive](interfaces.md#tileprimitive)
* [Vec2](interfaces.md#vec2)
* [Vec3](interfaces.md#vec3)
* [styleFunction](interfaces.md#stylefunction)

---

## Type aliases

<a id="geometrytype"></a>

###  GeometryType

**ΤGeometryType**: * "POLYGON" &#124; "LINESTRING" &#124; "ALL"
*

*Defined in [ThreeMap.interfaces.ts:82](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L82)*

___
<a id="tileprimitive"></a>

###  TilePrimitive

**ΤTilePrimitive**: *[`number`, `number`, `number`]*

*Defined in [ThreeMap.interfaces.ts:14](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L14)*

Tile primitive is an array of tile coordinates & zoom level.

___
<a id="vec2"></a>

###  Vec2

**ΤVec2**: * `number`[] &#124; [`number`, `number`]
*

*Defined in [ThreeMap.interfaces.ts:87](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L87)*

2D Vector - array of x, y coords.

___
<a id="vec3"></a>

###  Vec3

**ΤVec3**: * `number`[] &#124; [`number`, `number`, `number`]
*

*Defined in [ThreeMap.interfaces.ts:92](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L92)*

3D Vector - array of x, y, z coords.

___
<a id="stylefunction"></a>

###  styleFunction

**ΤstyleFunction**: *`function`*

*Defined in [ThreeMap.interfaces.ts:100](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L100)*

Function expression allowed in ThreeMap's style configuration. You get access to currently processed feature's properties. IT MUST RETURN VALUE OF SAME TYPE AS SPECIFIED! IT MUST BE WRITTEN AS FUNCTION EXPRESSION WITH FUNCTION KEYWORD (NO ARROW FUNCTIONS!)

#### Type declaration
▸(feature: *`any`*):  `number` &#124; `boolean` &#124; `string`

**Parameters:**

| Param | Type |
| ------ | ------ |
| feature | `any` |

**Returns:**  `number` &#124; `boolean` &#124; `string`

___

