/**
 * @module WorkerPool
 */
// @ts-ignore
import TileWorker from "worker!./worker.tmp.min.js"; // tslint:disable-line
import { TM } from "./ThreeMap";
import { IWorkerEvent, IWorkerEventData, IWorkerMessage } from "./ThreeMap.interfaces";
import { buildFromWorkerData, doesTileExists } from "./utils";

/**
 * Pool of WebWorkers for handling hard task outside main thread.
 */
class WorkerPool {
  public readonly taskList: object[];
  private readonly availableWorkers: TileWorker[];
  private readonly callback: (e: IWorkerEventData) => void;

  /**
   * @param numOfWorkers - Number of workers to be created in pool.
   * @param callback - Function to be called on Worker's job end.
   *
   * @example `var pool = new WorkerPool(4, (e)=>{...});`
   */
  public constructor(numOfWorkers: number, callback: (e: IWorkerEventData) => void) {
    this.availableWorkers = [];
    this.taskList = [];
    this.callback = callback;
    for (let i: number = 0; i < numOfWorkers; i++) {
      this.availableWorkers[i] = new TileWorker();
      this.availableWorkers[i].onmessage = (event: IWorkerEvent): void => {
        if (event.data.type === "onFinish") {
          this.availableWorkers.push(event.target);
          this.callback(event.data);
          this.checkoutTasks();
        } else {
          this.availableWorkers.push(event.target);
          TM.events.emit(event.data.type, event.data.realData);
        }
      };
    }
  }

  /**
   * Offloads tasks to workers.
   *
   * @example `pool.checkoutTasks();`
   */
  public checkoutTasks(): void {
    if (this.availableWorkers.length > 0 && this.taskList.length > 0) {
      const worker: TileWorker = this.availableWorkers.pop();
      const task: object = this.taskList.pop();
      worker.postMessage(task);
    }
  }

  /**
   * Add task to the list for it to be handled by worker.
   *
   * @param message - Data to be sent to worker.
   * @example `pool.startWorker({...});`
   */
  public startWorker(message: IWorkerMessage): void {
    this.taskList.push(message);
    this.checkoutTasks();
  }
}

let pool: WorkerPool;

/**
 * Creates globally-accessible WorkerPool instance.
 *
 * @example `initWorkerPool();`
 */
export function initWorkerPool(): void {
  pool = new WorkerPool(TM.style.workers, (ev: IWorkerEventData): void => {
    if (doesTileExists(ev.realData.id)) {
      buildFromWorkerData(ev.realData);
    }
  });
}

/**
 * Sends task to WorkerPool to be handled by worker.
 *
 * @param message - Message to be sent to worker.
 * @example `startWorker({...});`
 */
export function startWorker(message: IWorkerMessage): void {
  return pool.startWorker(message);
}
