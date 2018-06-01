[ThreeMap](../README.md) > [WorkerPool](../modules/workerpool.md)

# External module: WorkerPool

## Index

### Classes

* [WorkerPool](../classes/workerpool.workerpool-1.md)

### Variables

* [pool](workerpool.md#pool)

### Functions

* [cancelTask](workerpool.md#canceltask)
* [initWorkerPool](workerpool.md#initworkerpool)
* [startWorker](workerpool.md#startworker)

---

## Variables

<a id="pool"></a>

### `<Let>` pool

**● pool**: *[WorkerPool](../classes/workerpool.workerpool-1.md)*

*Defined in [workerpool.ts:73](https://github.com/areknawo/Three-Map/blob/41e1f78/src/workerpool.ts#L73)*

___

## Functions

<a id="canceltask"></a>

###  cancelTask

▸ **cancelTask**(id: *`string`*): `void`

*Defined in [workerpool.ts:104](https://github.com/areknawo/Three-Map/blob/41e1f78/src/workerpool.ts#L104)*

Remove task from WorkerPool's queue.
*__example__*: `cancelTask('0123');`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of task to be removed. |

**Returns:** `void`

___
<a id="initworkerpool"></a>

###  initWorkerPool

▸ **initWorkerPool**(): `void`

*Defined in [workerpool.ts:80](https://github.com/areknawo/Three-Map/blob/41e1f78/src/workerpool.ts#L80)*

Creates globally-accessible WorkerPool instance.
*__example__*: `initWorkerPool();`

**Returns:** `void`

___
<a id="startworker"></a>

###  startWorker

▸ **startWorker**(message: *[IWorkerMessage](../interfaces/interfaces.iworkermessage.md)*): `void`

*Defined in [workerpool.ts:94](https://github.com/areknawo/Three-Map/blob/41e1f78/src/workerpool.ts#L94)*

Sends task to WorkerPool to be handled by worker.
*__example__*: `startWorker({...});`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | [IWorkerMessage](../interfaces/interfaces.iworkermessage.md) |  Message to be sent to worker. |

**Returns:** `void`

___

