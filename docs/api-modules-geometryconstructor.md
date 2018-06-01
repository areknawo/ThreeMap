[ThreeMap](api-readme.md) > [GeometryConstructor](api-modules-geometryconstructor.md)



## Module: GeometryConstructor

### Enumerations

* [DataTypes](api-enums-geometryconstructor.datatypes.md)


### Interfaces

* [IResponse](api-interfaces-geometryconstructor.iresponse.md)


### Variables

* [layerOrderLevels](api-modules-geometryconstructor.md#layerorderlevels)


### Functions

* [cupBuilder](api-modules-geometryconstructor.md#cupbuilder)
* [readStyleFunction](api-modules-geometryconstructor.md#readstylefunction)



---
## Variables
<a id="layerorderlevels"></a>

### «Const» layerOrderLevels

**●  layerOrderLevels**:  *`number`[]*  =  [100, 100, 100, 80, 60, 50, 30, 25, 20, 20, 10, 5, 2, 1, 0.5, 0.1, 0.1]

*Defined in [constructor/construct.ts:47](https://github.com/areknawo/Three-Map/blob/41e1f78/src/constructor/construct.ts#L47)*



Protection against z-fighting




___


## Functions
<a id="cupbuilder"></a>

###  cupBuilder

► **cupBuilder**(style: *[ILayerStyle](api-interfaces-interfaces.ilayerstyle.md)*, workerDataBuffers: *[IWorkerData](api-interfaces-interfaces.iworkerdata.md)*): `void`



*Defined in [constructor/construct.ts:149](https://github.com/areknawo/Three-Map/blob/41e1f78/src/constructor/construct.ts#L149)*



Generates line's cups.
*__example__*: `cupBuilder({...}, {...});`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| style | [ILayerStyle](api-interfaces-interfaces.ilayerstyle.md)   |  Layer's style configuration. |
| workerDataBuffers | [IWorkerData](api-interfaces-interfaces.iworkerdata.md)   |  Data used for building tile. |





**Returns:** `void`





___

<a id="readstylefunction"></a>

###  readStyleFunction

► **readStyleFunction**(func: *`string`*, feature: *`object`*): `any`



*Defined in [constructor/construct.ts:40](https://github.com/areknawo/Three-Map/blob/41e1f78/src/constructor/construct.ts#L40)*



Parses function string to function & executes it returning its value.
*__example__*: `readStyleFunction('(feature) => {return feature.height}, {...});`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| func | `string`   |  Function string. |
| feature | `object`   |  MVT feature properties. |





**Returns:** `any`





___


