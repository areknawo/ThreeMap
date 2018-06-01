[ThreeMap](../README.md) > [WorkerPool](../modules/workerpool.md) > [WorkerPool](../classes/workerpool.workerpool-1.md)

# Class: WorkerPool

Pool of WebWorkers for handling hard task outside main thread.

## Hierarchy

**WorkerPool**

## Index

### Constructors

* [constructor](workerpool.workerpool-1.md#constructor)

### Properties

* [taskList](workerpool.workerpool-1.md#tasklist)

### Methods

* [checkoutTasks](workerpool.workerpool-1.md#checkouttasks)
* [startWorker](workerpool.workerpool-1.md#startworker)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WorkerPool**(numOfWorkers: *`number`*, callback: *`function`*): [WorkerPool](workerpool.workerpool-1.md)

*Defined in [workerpool.ts:16](https://github.com/areknawo/Three-Map/blob/41e1f78/src/workerpool.ts#L16)*

*__example__*: `var pool = new WorkerPool(4, (e)=>{...});`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| numOfWorkers | `number` |  Number of workers to be created in pool. |
| callback | `function` |  Function to be called on Worker's job end. |

**Returns:** [WorkerPool](workerpool.workerpool-1.md)

___

## Properties

<a id="tasklist"></a>

###  taskList

**● taskList**: *`object`*

*Defined in [workerpool.ts:14](https://github.com/areknawo/Three-Map/blob/41e1f78/src/workerpool.ts#L14)*

___

## Methods

<a id="checkouttasks"></a>

###  checkoutTasks

▸ **checkoutTasks**(): `void`

*Defined in [workerpool.ts:48](https://github.com/areknawo/Three-Map/blob/41e1f78/src/workerpool.ts#L48)*

Offloads tasks to workers.
*__example__*: `pool.checkoutTasks();`

**Returns:** `void`

___
<a id="startworker"></a>

###  startWorker

▸ **startWorker**(message: *[IWorkerMessage](../interfaces/interfaces.iworkermessage.md)*): `void`

*Defined in [workerpool.ts:67](https://github.com/areknawo/Three-Map/blob/41e1f78/src/workerpool.ts#L67)*

Add task to the list for it to be handled by worker.
*__example__*: `pool.startWorker({...});`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | [IWorkerMessage](../interfaces/interfaces.iworkermessage.md) |  Data to be sent to worker. |

**Returns:** `void`

___

