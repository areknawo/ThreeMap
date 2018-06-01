// @ts-ignore
import TileWorker from "worker!./worker.tmp.min.js"; // tslint:disable-line
import { TM } from "./ThreeMap";
import { IWorkerEvent, IWorkerEventData, IWorkerMessage } from "./ThreeMap.interfaces";
import { buildFromWorkerData, doesTileExists } from "./utils";

class WorkerPool {
    public readonly taskList: object;
    private readonly availableWorkers: TileWorker[];
    private readonly callback: (e: IWorkerEventData) => void;

    public constructor(numOfWorkers: number, callback: (e: IWorkerEventData) => void) {
        this.availableWorkers = [];
        this.taskList = {};
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
     * Function responsible for offloading tasks to workers
     */
    public checkoutTasks(): void {
        const taskKeys: string[] = Object.keys(this.taskList);
        if (this.availableWorkers.length > 0 && taskKeys.length > 0) {
            const worker: TileWorker = this.availableWorkers.pop();
            // @ts-ignore
            const taskKey: string = taskKeys.pop();
            // @ts-ignore
            worker.postMessage(this.taskList[taskKey]);
            // @ts-ignore
            delete this.taskList[taskKey];
        }
    }

    /**
     *
     * @param message Data to be sent to worker
     * Add task to worker
     */
    public startWorker(message: IWorkerMessage): void {
        this.taskList[message.id] = message;
        this.checkoutTasks();
    }
}

let pool: WorkerPool;

export function initWorkerPool(): void {
    pool = new WorkerPool(TM.style.workers, (ev: IWorkerEventData): void => {
        if (doesTileExists(ev.realData.id)) {
            buildFromWorkerData(ev.realData);
        }
    });
}

export function startWorker(message: IWorkerMessage): void {
    return pool.startWorker(message);
}

export function cancelTask(id: string): void {
    if (pool.taskList[id]) {
        delete pool.taskList[id];
    }
}
