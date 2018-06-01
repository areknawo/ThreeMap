[ThreeMap](../README.md) > [ThreeMap](../modules/threemap.md) > [Map](../classes/threemap.map.md)

# Class: Map

ThreeMap base class

## Hierarchy

 `Object3D`

**↳ Map**

## Index

### Constructors

* [constructor](threemap.map.md#constructor)

### Properties

* [castShadow](threemap.map.md#castshadow)
* [children](threemap.map.md#children)
* [events](threemap.map.md#events)
* [frustumCulled](threemap.map.md#frustumculled)
* [id](threemap.map.md#id)
* [isObject3D](threemap.map.md#isobject3d)
* [layers](threemap.map.md#layers)
* [matrix](threemap.map.md#matrix)
* [matrixAutoUpdate](threemap.map.md#matrixautoupdate)
* [matrixWorld](threemap.map.md#matrixworld)
* [matrixWorldNeedsUpdate](threemap.map.md#matrixworldneedsupdate)
* [modelViewMatrix](threemap.map.md#modelviewmatrix)
* [name](threemap.map.md#name)
* [normalMatrix](threemap.map.md#normalmatrix)
* [onAfterRender](threemap.map.md#onafterrender)
* [onBeforeRender](threemap.map.md#onbeforerender)
* [parent](threemap.map.md#parent)
* [position](threemap.map.md#position)
* [quaternion](threemap.map.md#quaternion)
* [receiveShadow](threemap.map.md#receiveshadow)
* [renderOrder](threemap.map.md#renderorder)
* [rotation](threemap.map.md#rotation)
* [scale](threemap.map.md#scale)
* [type](threemap.map.md#type)
* [up](threemap.map.md#up)
* [userData](threemap.map.md#userdata)
* [uuid](threemap.map.md#uuid)
* [visible](threemap.map.md#visible)
* [DefaultMatrixAutoUpdate](threemap.map.md#defaultmatrixautoupdate)
* [DefaultUp](threemap.map.md#defaultup)

### Methods

* [add](threemap.map.md#add)
* [addEventListener](threemap.map.md#addeventlistener)
* [applyMatrix](threemap.map.md#applymatrix)
* [clone](threemap.map.md#clone)
* [copy](threemap.map.md#copy)
* [dispatchEvent](threemap.map.md#dispatchevent)
* [getObjectById](threemap.map.md#getobjectbyid)
* [getObjectByName](threemap.map.md#getobjectbyname)
* [getObjectByProperty](threemap.map.md#getobjectbyproperty)
* [getWorldDirection](threemap.map.md#getworlddirection)
* [getWorldPosition](threemap.map.md#getworldposition)
* [getWorldQuaternion](threemap.map.md#getworldquaternion)
* [getWorldScale](threemap.map.md#getworldscale)
* [hasEventListener](threemap.map.md#haseventlistener)
* [localToWorld](threemap.map.md#localtoworld)
* [lookAt](threemap.map.md#lookat)
* [off](threemap.map.md#off)
* [on](threemap.map.md#on)
* [raycast](threemap.map.md#raycast)
* [registerExtension](threemap.map.md#registerextension)
* [remove](threemap.map.md#remove)
* [removeEventListener](threemap.map.md#removeeventlistener)
* [rotateOnAxis](threemap.map.md#rotateonaxis)
* [rotateOnWorldAxis](threemap.map.md#rotateonworldaxis)
* [rotateX](threemap.map.md#rotatex)
* [rotateY](threemap.map.md#rotatey)
* [rotateZ](threemap.map.md#rotatez)
* [setRotationFromAxisAngle](threemap.map.md#setrotationfromaxisangle)
* [setRotationFromEuler](threemap.map.md#setrotationfromeuler)
* [setRotationFromMatrix](threemap.map.md#setrotationfrommatrix)
* [setRotationFromQuaternion](threemap.map.md#setrotationfromquaternion)
* [toJSON](threemap.map.md#tojson)
* [translateOnAxis](threemap.map.md#translateonaxis)
* [translateX](threemap.map.md#translatex)
* [translateY](threemap.map.md#translatey)
* [translateZ](threemap.map.md#translatez)
* [traverse](threemap.map.md#traverse)
* [traverseAncestors](threemap.map.md#traverseancestors)
* [traverseVisible](threemap.map.md#traversevisible)
* [updateMatrix](threemap.map.md#updatematrix)
* [updateMatrixWorld](threemap.map.md#updatematrixworld)
* [worldToLocal](threemap.map.md#worldtolocal)
* [lonLatToMerc](threemap.map.md#lonlattomerc)
* [mercToLonLat](threemap.map.md#merctolonlat)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Map**(params: *`object`*): [Map](threemap.map.md)

*Overrides Object3D.__constructor*

*Defined in [index.ts:40](https://github.com/areknawo/Three-Map/blob/41e1f78/src/index.ts#L40)*

*__example__*: `var map = new ThreeMap({camera: [...], controls: [...], style: [...]});`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | `object` |  Object with ThreeJS camera, controls and ThreeMap style configuration object. |

**Returns:** [Map](threemap.map.md)

___

## Properties

<a id="castshadow"></a>

###  castShadow

**● castShadow**: *`boolean`*

*Inherited from Object3D.castShadow*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1615*

Gets rendered into shadow map.

___
<a id="children"></a>

###  children

**● children**: *`Object3D`[]*

*Inherited from Object3D.children*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1555*

Array with object's children.

___
<a id="events"></a>

###  events

**● events**: *`EventEmitter.Emitter`*

*Defined in [index.ts:40](https://github.com/areknawo/Three-Map/blob/41e1f78/src/index.ts#L40)*

___
<a id="frustumculled"></a>

###  frustumCulled

**● frustumCulled**: *`boolean`*

*Inherited from Object3D.frustumCulled*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1625*

When this is set, it checks every frame if the object is in the frustum of the camera. Otherwise the object gets drawn every frame even if it isn't visible.

___
<a id="id"></a>

###  id

**● id**: *`number`*

*Inherited from Object3D.id*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1533*

Unique number of this object instance.

___
<a id="isobject3d"></a>

###  isObject3D

**● isObject3D**: *`boolean`*

*Inherited from Object3D.isObject3D*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1638*

Used to check whether this or derived classes are Object3Ds. Default is true. You should not change this, as it is used internally for optimisation.

___
<a id="layers"></a>

###  layers

**● layers**: *`Layers`*

*Inherited from Object3D.layers*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1606*

___
<a id="matrix"></a>

###  matrix

**● matrix**: *`Matrix4`*

*Inherited from Object3D.matrix*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1589*

Local transform.

___
<a id="matrixautoupdate"></a>

###  matrixAutoUpdate

**● matrixAutoUpdate**: *`boolean`*

*Inherited from Object3D.matrixAutoUpdate*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1599*

When this is set, it calculates the matrix of position, (rotation or quaternion) and scale every frame and also recalculates the matrixWorld property.

___
<a id="matrixworld"></a>

###  matrixWorld

**● matrixWorld**: *`Matrix4`*

*Inherited from Object3D.matrixWorld*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1594*

The global transform of the object. If the Object3d has no parent, then it's identical to the local transform.

___
<a id="matrixworldneedsupdate"></a>

###  matrixWorldNeedsUpdate

**● matrixWorldNeedsUpdate**: *`boolean`*

*Inherited from Object3D.matrixWorldNeedsUpdate*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1604*

When this is set, it calculates the matrixWorld in that frame and resets this property to false.

___
<a id="modelviewmatrix"></a>

###  modelViewMatrix

**● modelViewMatrix**: *`Matrix4`*

*Inherited from Object3D.modelViewMatrix*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1582*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from Object3D.name*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1543*

Optional name of the object (doesn't need to be unique).

___
<a id="normalmatrix"></a>

###  normalMatrix

**● normalMatrix**: *`Matrix3`*

*Inherited from Object3D.normalMatrix*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1584*

___
<a id="onafterrender"></a>

###  onAfterRender

**● onAfterRender**: *`function`*

*Inherited from Object3D.onAfterRender*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1649*

Calls after rendering object

#### Type declaration
▸(renderer: *`WebGLRenderer`*, scene: *`Scene`*, camera: *`Camera`*, geometry: * `Geometry` &#124; `BufferGeometry`*, material: *`Material`*, group: *`Group`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| renderer | `WebGLRenderer` |
| scene | `Scene` |
| camera | `Camera` |
| geometry |  `Geometry` &#124; `BufferGeometry`|
| material | `Material` |
| group | `Group` |

**Returns:** `void`

___
<a id="onbeforerender"></a>

###  onBeforeRender

**● onBeforeRender**: *`function`*

*Inherited from Object3D.onBeforeRender*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1643*

Calls before rendering object

#### Type declaration
▸(renderer: *`WebGLRenderer`*, scene: *`Scene`*, camera: *`Camera`*, geometry: * `Geometry` &#124; `BufferGeometry`*, material: *`Material`*, group: *`Group`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| renderer | `WebGLRenderer` |
| scene | `Scene` |
| camera | `Camera` |
| geometry |  `Geometry` &#124; `BufferGeometry`|
| material | `Material` |
| group | `Group` |

**Returns:** `void`

___
<a id="parent"></a>

###  parent

**● parent**: *`Object3D`*

*Inherited from Object3D.parent*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1550*

Object's parent in the scene graph.

___
<a id="position"></a>

###  position

**● position**: *`Vector3`*

*Inherited from Object3D.position*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1565*

Object's local position.

___
<a id="quaternion"></a>

###  quaternion

**● quaternion**: *`Quaternion`*

*Inherited from Object3D.quaternion*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1575*

Global rotation.

___
<a id="receiveshadow"></a>

###  receiveShadow

**● receiveShadow**: *`boolean`*

*Inherited from Object3D.receiveShadow*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1620*

Material gets baked in shadow receiving.

___
<a id="renderorder"></a>

###  renderOrder

**● renderOrder**: *`number`*

*Inherited from Object3D.renderOrder*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1627*

___
<a id="rotation"></a>

###  rotation

**● rotation**: *`Euler`*

*Inherited from Object3D.rotation*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1570*

Object's local rotation (Euler angles), in radians.

___
<a id="scale"></a>

###  scale

**● scale**: *`Vector3`*

*Inherited from Object3D.scale*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1580*

Object's local scale.

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Inherited from Object3D.type*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1545*

___
<a id="up"></a>

###  up

**● up**: *`Vector3`*

*Inherited from Object3D.up*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1560*

Up direction.

___
<a id="userdata"></a>

###  userData

**● userData**: *`any`*

*Inherited from Object3D.userData*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1632*

An object that can be used to store custom data about the Object3d. It should not hold references to functions as these will not be cloned.

___
<a id="uuid"></a>

###  uuid

**● uuid**: *`string`*

*Inherited from Object3D.uuid*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1538*

___
<a id="visible"></a>

###  visible

**● visible**: *`boolean`*

*Inherited from Object3D.visible*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1610*

Object gets rendered if true.

___
<a id="defaultmatrixautoupdate"></a>

### `<Static>` DefaultMatrixAutoUpdate

**● DefaultMatrixAutoUpdate**: *`boolean`*

*Inherited from Object3D.DefaultMatrixAutoUpdate*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1656*

___
<a id="defaultup"></a>

### `<Static>` DefaultUp

**● DefaultUp**: *`Vector3`*

*Inherited from Object3D.DefaultUp*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1655*

___

## Methods

<a id="add"></a>

###  add

▸ **add**(...object: *`Object3D`[]*): `void`

*Inherited from Object3D.add*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1761*

Adds object as child of this object.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` object | `Object3D`[] |

**Returns:** `void`

___
<a id="addeventlistener"></a>

###  addEventListener

▸ **addEventListener**(type: *`string`*, listener: *`function`*): `void`

*Inherited from EventDispatcher.addEventListener*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1078*

Adds a listener to an event type.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  The type of the listener that gets removed. |
| listener | `function` |  The listener function that gets removed. |

**Returns:** `void`

___
<a id="applymatrix"></a>

###  applyMatrix

▸ **applyMatrix**(matrix: *`Matrix4`*): `void`

*Inherited from Object3D.applyMatrix*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1661*

This updates the position, rotation and scale with the matrix.

**Parameters:**

| Param | Type |
| ------ | ------ |
| matrix | `Matrix4` |

**Returns:** `void`

___
<a id="clone"></a>

###  clone

▸ **clone**(recursive?: *`boolean`*): `this`

*Inherited from Object3D.clone*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1807*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` recursive | `boolean` |

**Returns:** `this`

___
<a id="copy"></a>

###  copy

▸ **copy**(source: *`this`*, recursive?: *`boolean`*): `this`

*Inherited from Object3D.copy*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1814*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| source | `this` |
| `Optional` recursive | `boolean` |   |

**Returns:** `this`

___
<a id="dispatchevent"></a>

###  dispatchEvent

▸ **dispatchEvent**(event: *`object`*): `void`

*Inherited from EventDispatcher.dispatchEvent*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1098*

Fire an event type.

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `object` |

**Returns:** `void`

___
<a id="getobjectbyid"></a>

###  getObjectById

▸ **getObjectById**(id: *`number`*): `Object3D`

*Inherited from Object3D.getObjectById*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1772*

Searches through the object's children and returns the first with a matching id, optionally recursive.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number` |  Unique number of the object instance |

**Returns:** `Object3D`

___
<a id="getobjectbyname"></a>

###  getObjectByName

▸ **getObjectByName**(name: *`string`*): `Object3D`

*Inherited from Object3D.getObjectByName*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1778*

Searches through the object's children and returns the first with a matching name, optionally recursive.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  String to match to the children's Object3d.name property. |

**Returns:** `Object3D`

___
<a id="getobjectbyproperty"></a>

###  getObjectByProperty

▸ **getObjectByProperty**(name: *`string`*, value: *`string`*): `Object3D`

*Inherited from Object3D.getObjectByProperty*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1780*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| value | `string` |

**Returns:** `Object3D`

___
<a id="getworlddirection"></a>

###  getWorldDirection

▸ **getWorldDirection**(target: *`Vector3`*): `Vector3`

*Inherited from Object3D.getWorldDirection*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1785*

**Parameters:**

| Param | Type |
| ------ | ------ |
| target | `Vector3` |

**Returns:** `Vector3`

___
<a id="getworldposition"></a>

###  getWorldPosition

▸ **getWorldPosition**(target: *`Vector3`*): `Vector3`

*Inherited from Object3D.getWorldPosition*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1782*

**Parameters:**

| Param | Type |
| ------ | ------ |
| target | `Vector3` |

**Returns:** `Vector3`

___
<a id="getworldquaternion"></a>

###  getWorldQuaternion

▸ **getWorldQuaternion**(target: *`Quaternion`*): `Quaternion`

*Inherited from Object3D.getWorldQuaternion*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1783*

**Parameters:**

| Param | Type |
| ------ | ------ |
| target | `Quaternion` |

**Returns:** `Quaternion`

___
<a id="getworldscale"></a>

###  getWorldScale

▸ **getWorldScale**(target: *`Vector3`*): `Vector3`

*Inherited from Object3D.getWorldScale*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1784*

**Parameters:**

| Param | Type |
| ------ | ------ |
| target | `Vector3` |

**Returns:** `Vector3`

___
<a id="haseventlistener"></a>

###  hasEventListener

▸ **hasEventListener**(type: *`string`*, listener: *`function`*): `void`

*Inherited from EventDispatcher.hasEventListener*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1085*

Adds a listener to an event type.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  The type of the listener that gets removed. |
| listener | `function` |  The listener function that gets removed. |

**Returns:** `void`

___
<a id="localtoworld"></a>

###  localToWorld

▸ **localToWorld**(vector: *`Vector3`*): `Vector3`

*Inherited from Object3D.localToWorld*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1743*

Updates the vector from local space to world space.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| vector | `Vector3` |  A local vector. |

**Returns:** `Vector3`

___
<a id="lookat"></a>

###  lookAt

▸ **lookAt**(vector: *`Vector3`*): `void`

▸ **lookAt**(x: *`number`*, y: *`number`*, z: *`number`*): `void`

*Inherited from Object3D.lookAt*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1755*

Rotates object to face point in space.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| vector | `Vector3` |  A world vector to look at. |

**Returns:** `void`

*Inherited from Object3D.lookAt*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1756*

**Parameters:**

| Param | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |
| z | `number` |

**Returns:** `void`

___
<a id="off"></a>

###  off

▸ **off**(event: *`string`*, callback: *`function`*): `void`

*Defined in [index.ts:97](https://github.com/areknawo/Three-Map/blob/41e1f78/src/index.ts#L97)*

Unregister ThreeMap's event listener.
*__example__*: `map.off('tileCreated', (e) => console.log(e));`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string` |  Event's name. |
| callback | `function` |  Event's associated callback. |

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(event: *`string`*, callback: *`function`*): `void`

*Defined in [index.ts:109](https://github.com/areknawo/Three-Map/blob/41e1f78/src/index.ts#L109)*

Register ThreeMap's event listener.
*__example__*: `map.on('tileCreated', (e) => console.log(e));` `` ` ``

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string` |  Event's name. |
| callback | `function` |  Event's callback. |

**Returns:** `void`

___
<a id="raycast"></a>

###  raycast

▸ **raycast**(raycaster: *`Raycaster`*, intersects: *`any`*): `void`

*Inherited from Object3D.raycast*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1787*

**Parameters:**

| Param | Type |
| ------ | ------ |
| raycaster | `Raycaster` |
| intersects | `any` |

**Returns:** `void`

___
<a id="registerextension"></a>

###  registerExtension

▸ **registerExtension**(ext: *[Extension](extension.extension-1.md)*): `void`

*Defined in [index.ts:120](https://github.com/areknawo/Three-Map/blob/41e1f78/src/index.ts#L120)*

Registers new ThreeMap's extensions.
*__example__*: `map.register(new ThreeMap.Extension({...}));` `` ` ``

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ext | [Extension](extension.extension-1.md) |  ThreeMap's Extension class instance. |

**Returns:** `void`

___
<a id="remove"></a>

###  remove

▸ **remove**(...object: *`Object3D`[]*): `void`

*Inherited from Object3D.remove*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1766*

Removes object as child of this object.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` object | `Object3D`[] |

**Returns:** `void`

___
<a id="removeeventlistener"></a>

###  removeEventListener

▸ **removeEventListener**(type: *`string`*, listener: *`function`*): `void`

*Inherited from EventDispatcher.removeEventListener*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1092*

Removes a listener from an event type.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  The type of the listener that gets removed. |
| listener | `function` |  The listener function that gets removed. |

**Returns:** `void`

___
<a id="rotateonaxis"></a>

###  rotateOnAxis

▸ **rotateOnAxis**(axis: *`Vector3`*, angle: *`number`*): `Object3D`

*Inherited from Object3D.rotateOnAxis*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1688*

Rotate an object along an axis in object space. The axis is assumed to be normalized.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| axis | `Vector3` |  A normalized vector in object space. |
| angle | `number` |  The angle in radians. |

**Returns:** `Object3D`

___
<a id="rotateonworldaxis"></a>

###  rotateOnWorldAxis

▸ **rotateOnWorldAxis**(axis: *`Vector3`*, angle: *`number`*): `Object3D`

*Inherited from Object3D.rotateOnWorldAxis*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1695*

Rotate an object along an axis in world space. The axis is assumed to be normalized. Method Assumes no rotated parent.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| axis | `Vector3` |  A normalized vector in object space. |
| angle | `number` |  The angle in radians. |

**Returns:** `Object3D`

___
<a id="rotatex"></a>

###  rotateX

▸ **rotateX**(angle: *`number`*): `Object3D`

*Inherited from Object3D.rotateX*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1701*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| angle | `number` |   |

**Returns:** `Object3D`

___
<a id="rotatey"></a>

###  rotateY

▸ **rotateY**(angle: *`number`*): `Object3D`

*Inherited from Object3D.rotateY*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1707*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| angle | `number` |   |

**Returns:** `Object3D`

___
<a id="rotatez"></a>

###  rotateZ

▸ **rotateZ**(angle: *`number`*): `Object3D`

*Inherited from Object3D.rotateZ*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1713*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| angle | `number` |   |

**Returns:** `Object3D`

___
<a id="setrotationfromaxisangle"></a>

###  setRotationFromAxisAngle

▸ **setRotationFromAxisAngle**(axis: *`Vector3`*, angle: *`number`*): `void`

*Inherited from Object3D.setRotationFromAxisAngle*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1666*

**Parameters:**

| Param | Type |
| ------ | ------ |
| axis | `Vector3` |
| angle | `number` |

**Returns:** `void`

___
<a id="setrotationfromeuler"></a>

###  setRotationFromEuler

▸ **setRotationFromEuler**(euler: *`Euler`*): `void`

*Inherited from Object3D.setRotationFromEuler*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1671*

**Parameters:**

| Param | Type |
| ------ | ------ |
| euler | `Euler` |

**Returns:** `void`

___
<a id="setrotationfrommatrix"></a>

###  setRotationFromMatrix

▸ **setRotationFromMatrix**(m: *`Matrix4`*): `void`

*Inherited from Object3D.setRotationFromMatrix*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1676*

**Parameters:**

| Param | Type |
| ------ | ------ |
| m | `Matrix4` |

**Returns:** `void`

___
<a id="setrotationfromquaternion"></a>

###  setRotationFromQuaternion

▸ **setRotationFromQuaternion**(q: *`Quaternion`*): `void`

*Inherited from Object3D.setRotationFromQuaternion*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1681*

**Parameters:**

| Param | Type |
| ------ | ------ |
| q | `Quaternion` |

**Returns:** `void`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(meta?: *`object`*): `any`

*Inherited from Object3D.toJSON*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1805*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` meta | `object` |

**Returns:** `any`

___
<a id="translateonaxis"></a>

###  translateOnAxis

▸ **translateOnAxis**(axis: *`Vector3`*, distance: *`number`*): `Object3D`

*Inherited from Object3D.translateOnAxis*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1719*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| axis | `Vector3` |  A normalized vector in object space. |
| distance | `number` |  The distance to translate. |

**Returns:** `Object3D`

___
<a id="translatex"></a>

###  translateX

▸ **translateX**(distance: *`number`*): `Object3D`

*Inherited from Object3D.translateX*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1725*

Translates object along x axis by distance.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| distance | `number` |  Distance. |

**Returns:** `Object3D`

___
<a id="translatey"></a>

###  translateY

▸ **translateY**(distance: *`number`*): `Object3D`

*Inherited from Object3D.translateY*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1731*

Translates object along y axis by distance.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| distance | `number` |  Distance. |

**Returns:** `Object3D`

___
<a id="translatez"></a>

###  translateZ

▸ **translateZ**(distance: *`number`*): `Object3D`

*Inherited from Object3D.translateZ*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1737*

Translates object along z axis by distance.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| distance | `number` |  Distance. |

**Returns:** `Object3D`

___
<a id="traverse"></a>

###  traverse

▸ **traverse**(callback: *`function`*): `void`

*Inherited from Object3D.traverse*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1789*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="traverseancestors"></a>

###  traverseAncestors

▸ **traverseAncestors**(callback: *`function`*): `void`

*Inherited from Object3D.traverseAncestors*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1793*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="traversevisible"></a>

###  traverseVisible

▸ **traverseVisible**(callback: *`function`*): `void`

*Inherited from Object3D.traverseVisible*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1791*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="updatematrix"></a>

###  updateMatrix

▸ **updateMatrix**(): `void`

*Inherited from Object3D.updateMatrix*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1798*

Updates local transform.

**Returns:** `void`

___
<a id="updatematrixworld"></a>

###  updateMatrixWorld

▸ **updateMatrixWorld**(force: *`boolean`*): `void`

*Inherited from Object3D.updateMatrixWorld*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1803*

Updates global transform of the object and its children.

**Parameters:**

| Param | Type |
| ------ | ------ |
| force | `boolean` |

**Returns:** `void`

___
<a id="worldtolocal"></a>

###  worldToLocal

▸ **worldToLocal**(vector: *`Vector3`*): `Vector3`

*Inherited from Object3D.worldToLocal*

*Defined in /home/arek/Desktop/ThreeMap/node_modules/@types/three/three-core.d.ts:1749*

Updates the vector from world space to local space.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| vector | `Vector3` |  A world vector. |

**Returns:** `Vector3`

___
<a id="lonlattomerc"></a>

### `<Static>` lonLatToMerc

▸ **lonLatToMerc**(latlng: *`number`[]*): `number`[]

*Defined in [index.ts:25](https://github.com/areknawo/Three-Map/blob/41e1f78/src/index.ts#L25)*

Convert longitude - latitude coordinates to mercator coordinates.
*__example__*: `ThreeMap.lonlatToMerc([77.35262, 40.2525]);`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| latlng | `number`[] |  Array of longitude & latitude coordinates. |

**Returns:** `number`[]
Array of mercator x & y coordinates.

___
<a id="merctolonlat"></a>

### `<Static>` mercToLonLat

▸ **mercToLonLat**(mercXY: *`number`[]*): `number`[]

*Defined in [index.ts:36](https://github.com/areknawo/Three-Map/blob/41e1f78/src/index.ts#L36)*

Convert mercator coordinates to longitude - latitude coordinates.
*__example__*: `ThreeMap.mercToLonLat([462073.1353, 295052.562]);`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mercXY | `number`[] |  Array of mercator x & y coordinates. |

**Returns:** `number`[]
Array of longitude & latitude coordinates.

___

