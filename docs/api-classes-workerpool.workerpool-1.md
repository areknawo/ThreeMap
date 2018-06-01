[ThreeMap](api-readme.md) > [WorkerPool](api-modules-workerpool.md) > [WorkerPool](api-classes-workerpool.workerpool-1.md)



## Class: WorkerPool


Pool of WebWorkers for handling hard task outside main thread.

### Constructors

* [constructor](api-classes-workerpool.workerpool-1.md#constructor)


### Properties

* [taskList](api-classes-workerpool.workerpool-1.md#tasklist)


### Methods

* [checkoutTasks](api-classes-workerpool.workerpool-1.md#checkouttasks)
* [startWorker](api-classes-workerpool.workerpool-1.md#startworker)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new WorkerPool**(numOfWorkers: *`number`*, callback: *`function`*): [WorkerPool](api-classes-workerpool.workerpool-1.md)


*Defined in [workerpool.ts:16](https://github.com/areknawo/ThreeMap/blob/master/src/workerpool.ts#L16)*


*__example__*: `var pool = new WorkerPool(4, (e)=>{...});`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| numOfWorkers | `number`   |  Number of workers to be created in pool. |
| callback | `function`   |  Function to be called on Worker's job end. |





**Returns:** [WorkerPool](api-classes-workerpool.workerpool-1.md)

---


## Properties
<a id="tasklist"></a>

###  taskList

**●  taskList**:  *`any`[]* 

*Defined in [workerpool.ts:14](https://github.com/areknawo/ThreeMap/blob/master/src/workerpool.ts#L14)*





___


## Methods
<a id="checkouttasks"></a>

###  checkoutTasks

► **checkoutTasks**(): `void`



*Defined in [workerpool.ts:48](https://github.com/areknawo/ThreeMap/blob/master/src/workerpool.ts#L48)*



Offloads tasks to workers.
*__example__*: `pool.checkoutTasks();`





**Returns:** `void`





___

<a id="startworker"></a>

###  startWorker

► **startWorker**(message: *[IWorkerMessage](api-interfaces-interfaces.iworkermessage.md)*): `void`



*Defined in [workerpool.ts:62](https://github.com/areknawo/ThreeMap/blob/master/src/workerpool.ts#L62)*



Add task to the list for it to be handled by worker.
*__example__*: `pool.startWorker({...});`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | [IWorkerMessage](api-interfaces-interfaces.iworkermessage.md)   |  Data to be sent to worker. |





**Returns:** `void`





___


