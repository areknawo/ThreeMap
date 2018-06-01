[ThreeMap](../README.md) > [TileList](../modules/tilelist.md) > [TileList](../classes/tilelist.tilelist-1.md)

# Class: TileList

TileList - collection of tiles

## Hierarchy

 `Object`

**↳ TileList**

## Index

### Properties

* [Object](tilelist.tilelist-1.md#object)
* [constructor](tilelist.tilelist-1.md#constructor)

### Methods

* [containsTile](tilelist.tilelist-1.md#containstile)
* [getTilesToRender](tilelist.tilelist-1.md#gettilestorender)
* [hasOwnProperty](tilelist.tilelist-1.md#hasownproperty)
* [isPrototypeOf](tilelist.tilelist-1.md#isprototypeof)
* [propertyIsEnumerable](tilelist.tilelist-1.md#propertyisenumerable)
* [toLocaleString](tilelist.tilelist-1.md#tolocalestring)
* [toString](tilelist.tilelist-1.md#tostring)
* [valueOf](tilelist.tilelist-1.md#valueof)

---

## Properties

<a id="object"></a>

### `<Static>` Object

**● Object**: *`ObjectConstructor`*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:257*

Provides functionality common to all JavaScript objects.

___
<a id="constructor"></a>

### `<Static>` constructor

**● constructor**: *`Function`*

*Inherited from Object.constructor*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:112*

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

___

## Methods

<a id="containstile"></a>

###  containsTile

▸ **containsTile**(quadkey: *`string`*): `boolean`

*Defined in [tilelist.ts:17](https://github.com/areknawo/ThreeMap/blob/master/src/tilelist.ts#L17)*

Checks if TileList contains specific Tile by Quadkey.
*__example__*: `TileList.containsTile("00003232");`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| quadkey | `string` |  Tile's quadkey. |

**Returns:** `boolean`

___
<a id="gettilestorender"></a>

###  getTilesToRender

▸ **getTilesToRender**(previousTiles?: *[TileList](tilelist.tilelist-1.md)*): [IView](../interfaces/interfaces.iview.md)

*Defined in [tilelist.ts:28](https://github.com/areknawo/ThreeMap/blob/master/src/tilelist.ts#L28)*

Get tiles to remove (not seen in current view) and render (actually seen in view).
*__example__*: `TileList.getTilesToRender({...});`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` previousTiles | [TileList](tilelist.tilelist-1.md) |  Collection of currently-in-view tiles. |

**Returns:** [IView](../interfaces/interfaces.iview.md)
View instance - tiles to be rendered & removed.

___
<a id="hasownproperty"></a>

### `<Static>` hasOwnProperty

▸ **hasOwnProperty**(v: *`string`*): `boolean`

*Inherited from Object.hasOwnProperty*

*Overrides Object.hasOwnProperty*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:127*

Determines whether an object has a property with the specified name.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v | `string` |  A property name. |

**Returns:** `boolean`

___
<a id="isprototypeof"></a>

### `<Static>` isPrototypeOf

▸ **isPrototypeOf**(v: *`Object`*): `boolean`

*Inherited from Object.isPrototypeOf*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:133*

Determines whether an object exists in another object's prototype chain.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v | `Object` |  Another object whose prototype chain is to be checked. |

**Returns:** `boolean`

___
<a id="propertyisenumerable"></a>

### `<Static>` propertyIsEnumerable

▸ **propertyIsEnumerable**(v: *`string`*): `boolean`

*Inherited from Object.propertyIsEnumerable*

*Overrides Object.propertyIsEnumerable*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:139*

Determines whether a specified property is enumerable.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v | `string` |  A property name. |

**Returns:** `boolean`

___
<a id="tolocalestring"></a>

### `<Static>` toLocaleString

▸ **toLocaleString**(): `string`

*Inherited from Object.toLocaleString*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:118*

Returns a date converted to a string using the current locale.

**Returns:** `string`

___
<a id="tostring"></a>

### `<Static>` toString

▸ **toString**(): `string`

*Inherited from Object.toString*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:115*

Returns a string representation of an object.

**Returns:** `string`

___
<a id="valueof"></a>

### `<Static>` valueOf

▸ **valueOf**(): `Object`

*Inherited from Object.valueOf*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:121*

Returns the primitive value of the specified object.

**Returns:** `Object`

___

