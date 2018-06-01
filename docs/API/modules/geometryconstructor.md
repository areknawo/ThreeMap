[ThreeMap](../README.md) > [GeometryConstructor](../modules/geometryconstructor.md)

# External module: GeometryConstructor

## Index

### Enumerations

* [DataTypes](../enums/geometryconstructor.datatypes.md)

### Interfaces

* [IResponse](../interfaces/geometryconstructor.iresponse.md)

### Variables

* [layerOrderLevels](geometryconstructor.md#layerorderlevels)

### Functions

* [cupBuilder](geometryconstructor.md#cupbuilder)
* [readStyleFunction](geometryconstructor.md#readstylefunction)
* [requestTile](geometryconstructor.md#requesttile)

---

## Variables

<a id="layerorderlevels"></a>

### `<Const>` layerOrderLevels

**● layerOrderLevels**: *`number`[]* =  [100, 100, 100, 80, 60, 50, 30, 25, 20, 20, 10, 5, 2, 1, 0.5, 0.1, 0.1]

*Defined in [constructor/construct.ts:69](https://github.com/areknawo/ThreeMap/blob/master/src/constructor/construct.ts#L69)*

Protection against z-fighting

___

## Functions

<a id="cupbuilder"></a>

###  cupBuilder

▸ **cupBuilder**(style: *[ILayerStyle](../interfaces/interfaces.ilayerstyle.md)*, workerDataBuffers: *[IWorkerData](../interfaces/interfaces.iworkerdata.md)*): `void`

*Defined in [constructor/construct.ts:162](https://github.com/areknawo/ThreeMap/blob/master/src/constructor/construct.ts#L162)*

Generates line's cups.
*__example__*: `cupBuilder({...}, {...});`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| style | [ILayerStyle](../interfaces/interfaces.ilayerstyle.md) |  Layer's style configuration. |
| workerDataBuffers | [IWorkerData](../interfaces/interfaces.iworkerdata.md) |  Data used for building tile. |

**Returns:** `void`

___
<a id="readstylefunction"></a>

###  readStyleFunction

▸ **readStyleFunction**(func: *`string`*, feature: *`object`*): `any`

*Defined in [constructor/construct.ts:40](https://github.com/areknawo/ThreeMap/blob/master/src/constructor/construct.ts#L40)*

Parses function string to function & executes it returning its value.
*__example__*: `readStyleFunction('(feature) => {return feature.height}, {...});`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| func | `string` |  Function string. |
| feature | `object` |  MVT feature properties. |

**Returns:** `any`

___
<a id="requesttile"></a>

###  requestTile

▸ **requestTile**(url: *`string`*): `Promise`<`any`>

*Defined in [constructor/construct.ts:50](https://github.com/areknawo/ThreeMap/blob/master/src/constructor/construct.ts#L50)*

Requests tile from given URL and returns its buffer asynchronously.
*__example__*: `requestTile('https://awesometiles.com/10/15/12');`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  Tile's URL. |

**Returns:** `Promise`<`any`>

___

