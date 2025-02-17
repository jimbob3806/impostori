export class ProgressWidget extends CLIWidget {
    /**
     *
     * @param {number} ms
     * @returns {string}
     */
    static formatMs(ms: number): string;
    /**
     *
     * @param {Date} date
     * @returns {string}
     */
    static formatDate(date: Date): string;
    constructor({ manager, startOps, endOps, description, startTime, updateInterval }?: {
        manager?: CLIManager | undefined;
        startOps?: number | undefined;
        endOps?: number | undefined;
        description?: string | undefined;
        startTime?: number | undefined;
        updateInterval?: number | undefined;
    });
    currentOps: number;
    endOps: number;
    nextOp: number;
    description: string;
    startTime: number;
    updateInterval: number;
    /**
     *
     * @param {number} ops
     * @returns {boolean}
     */
    increment(ops?: number): boolean;
    /**
     *
     * @returns {number}
     */
    next(): number;
    get elapsedMs(): number;
    get remainingMs(): number;
    get averageMs(): number;
    get ms(): {};
    get progress(): number;
    get complete(): boolean;
    get completeQueue(): boolean;
    #private;
}
import { CLIWidget } from "./Widget.js";
import { CLIManager } from "./Manager.js";
