[ThreeMap](api-readme.md) > [LineStringConstructor](api-modules-linestringconstructor.md)



## Module: LineStringConstructor

### Interfaces

* [ILineSegment](api-interfaces-linestringconstructor.ilinesegment.md)


### Functions

* [line](api-modules-linestringconstructor.md#line)
* [lineSegment](api-modules-linestringconstructor.md#linesegment)
* [lineString](api-modules-linestringconstructor.md#linestring)



---
## Functions
<a id="line"></a>

###  line

► **line**(vertices: *`number`[][]*, data: *[IWorkerData](api-interfaces-interfaces.iworkerdata.md)*, style: *[ILayerStyle](api-interfaces-interfaces.ilayerstyle.md)*): [IWorkerData](api-interfaces-interfaces.iworkerdata.md)



*Defined in [constructor/linestring.ts:92](https://github.com/areknawo/Three-Map/blob/41e1f78/src/constructor/linestring.ts#L92)*



Generates line.
*__example__*: `line([[1,2], [3,4]], {...}, {...});`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| vertices | `number`[][]   |  Preprocessed vertices array. |
| data | [IWorkerData](api-interfaces-interfaces.iworkerdata.md)   |  Data used for building tile. |
| style | [ILayerStyle](api-interfaces-interfaces.ilayerstyle.md)   |  Layer's style configuration. |





**Returns:** [IWorkerData](api-interfaces-interfaces.iworkerdata.md)





___

<a id="linesegment"></a>

###  lineSegment

► **lineSegment**(v1: *[Vec2](api-modules-interfaces.md#vec2)*, v2: *[Vec2](api-modules-interfaces.md#vec2)*, data: *[IWorkerData](api-interfaces-interfaces.iworkerdata.md)*, style: *[ILayerStyle](api-interfaces-interfaces.ilayerstyle.md)*): [ILineSegment](api-interfaces-linestringconstructor.ilinesegment.md)



*Defined in [constructor/linestring.ts:50](https://github.com/areknawo/Three-Map/blob/41e1f78/src/constructor/linestring.ts#L50)*



Generates line segment - line between 2 vectors.
*__example__*: `lineSegment([1,2], [3,4] , {...}, {...});`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v1 | [Vec2](api-modules-interfaces.md#vec2)   |  First vector. |
| v2 | [Vec2](api-modules-interfaces.md#vec2)   |  Second vector. |
| data | [IWorkerData](api-interfaces-interfaces.iworkerdata.md)   |  Data used for building tile. |
| style | [ILayerStyle](api-interfaces-interfaces.ilayerstyle.md)   |  Layer's style configuration. |





**Returns:** [ILineSegment](api-interfaces-linestringconstructor.ilinesegment.md)





___

<a id="linestring"></a>

###  lineString

► **lineString**(data: *[IWorkerData](api-interfaces-interfaces.iworkerdata.md)*, style: *[ILayerStyle](api-interfaces-interfaces.ilayerstyle.md)*): [IWorkerData](api-interfaces-interfaces.iworkerdata.md)



*Defined in [constructor/linestring.ts:25](https://github.com/areknawo/Three-Map/blob/41e1f78/src/constructor/linestring.ts#L25)*



Parses data for line generation.
*__example__*: `lineString({...}, {...});`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IWorkerData](api-interfaces-interfaces.iworkerdata.md)   |  Data used for building tile. |
| style | [ILayerStyle](api-interfaces-interfaces.ilayerstyle.md)   |  Layer's style configuration. |





**Returns:** [IWorkerData](api-interfaces-interfaces.iworkerdata.md)





___


