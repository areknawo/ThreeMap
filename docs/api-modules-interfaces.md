[ThreeMap](api-readme.md) > [Interfaces](api-modules-interfaces.md)



## Module: Interfaces

### Interfaces

* [ILayerStyle](api-interfaces-interfaces.ilayerstyle.md)
* [IStyle](api-interfaces-interfaces.istyle.md)
* [ITileBuffers](api-interfaces-interfaces.itilebuffers.md)
* [ITileObject](api-interfaces-interfaces.itileobject.md)
* [IView](api-interfaces-interfaces.iview.md)
* [IWorkerData](api-interfaces-interfaces.iworkerdata.md)
* [IWorkerEvent](api-interfaces-interfaces.iworkerevent.md)
* [IWorkerEventData](api-interfaces-interfaces.iworkereventdata.md)
* [IWorkerMessage](api-interfaces-interfaces.iworkermessage.md)


### Type aliases

* [GeometryType](api-modules-interfaces.md#geometrytype)
* [TilePrimitive](api-modules-interfaces.md#tileprimitive)
* [Vec2](api-modules-interfaces.md#vec2)
* [Vec3](api-modules-interfaces.md#vec3)
* [styleFunction](api-modules-interfaces.md#stylefunction)



---
## Type aliases
<a id="geometrytype"></a>

###  GeometryType

**Τ GeometryType**:  *"POLYGON"⎮"LINESTRING"⎮"ALL"* 

*Defined in [ThreeMap.interfaces.ts:82](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L82)*





___

<a id="tileprimitive"></a>

###  TilePrimitive

**Τ TilePrimitive**:  *[`number`,`number`,`number`]* 

*Defined in [ThreeMap.interfaces.ts:14](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L14)*



Tile primitive is an array of tile coordinates & zoom level.




___

<a id="vec2"></a>

###  Vec2

**Τ Vec2**:  *`number`[]⎮[`number`,`number`]* 

*Defined in [ThreeMap.interfaces.ts:87](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L87)*



2D Vector - array of x, y coords.




___

<a id="vec3"></a>

###  Vec3

**Τ Vec3**:  *`number`[]⎮[`number`,`number`,`number`]* 

*Defined in [ThreeMap.interfaces.ts:92](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L92)*



3D Vector - array of x, y, z coords.




___

<a id="stylefunction"></a>

###  styleFunction

**Τ styleFunction**:  *`function`* 

*Defined in [ThreeMap.interfaces.ts:100](https://github.com/areknawo/Three-Map/blob/41e1f78/src/ThreeMap.interfaces.ts#L100)*



Function expression allowed in ThreeMap's style configuration. You get access to currently processed feature's properties. IT MUST RETURN VALUE OF SAME TYPE AS SPECIFIED! IT MUST BE WRITTEN AS FUNCTION EXPRESSION WITH FUNCTION KEYWORD (NO ARROW FUNCTIONS!)

#### Type declaration
►(feature: *`any`*): `number`⎮`boolean`⎮`string`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| feature | `any`   |  - |





**Returns:** `number`⎮`boolean`⎮`string`






___


