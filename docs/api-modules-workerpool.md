[ThreeMap](api-readme.md) > [WorkerPool](api-modules-workerpool.md)



## Module: WorkerPool

### Classes

* [WorkerPool](api-classes-workerpool.workerpool-1.md)


### Variables

* [pool](api-modules-workerpool.md#pool)


### Functions

* [initWorkerPool](api-modules-workerpool.md#initworkerpool)
* [startWorker](api-modules-workerpool.md#startworker)



---
## Variables
<a id="pool"></a>

### «Let» pool

**●  pool**:  *[WorkerPool](api-classes-workerpool.workerpool-1.md)* 

*Defined in [workerpool.ts:68](https://github.com/areknawo/ThreeMap/blob/master/src/workerpool.ts#L68)*





___


## Functions
<a id="initworkerpool"></a>

###  initWorkerPool

► **initWorkerPool**(): `void`



*Defined in [workerpool.ts:75](https://github.com/areknawo/ThreeMap/blob/master/src/workerpool.ts#L75)*



Creates globally-accessible WorkerPool instance.
*__example__*: `initWorkerPool();`





**Returns:** `void`





___

<a id="startworker"></a>

###  startWorker

► **startWorker**(message: *[IWorkerMessage](api-interfaces-interfaces.iworkermessage.md)*): `void`



*Defined in [workerpool.ts:89](https://github.com/areknawo/ThreeMap/blob/master/src/workerpool.ts#L89)*



Sends task to WorkerPool to be handled by worker.
*__example__*: `startWorker({...});`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | [IWorkerMessage](api-interfaces-interfaces.iworkermessage.md)   |  Message to be sent to worker. |





**Returns:** `void`





___


