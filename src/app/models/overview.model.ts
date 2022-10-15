import { TaskModel } from "./task.model";

/**
 * Overview model
 * 
 * Has the columns and functions used to control tasks on the board
 */
export class OverviewModel {

    boardName: string = "";
    backlog: Array<TaskModel> = new Array<TaskModel>();
    blocks: Array<TaskModel> = new Array<TaskModel>();
    wip: Array<TaskModel> = new Array<TaskModel>();
    test: Array<TaskModel> = new Array<TaskModel>();
    done: Array<TaskModel> = new Array<TaskModel>();

    constructor(items?: any) {
        if (items) {
            if (items.boardName && items.boardName != "")
                this.boardName = items.boardName;

            if (items.backlog && Array.isArray(items.backlog))
                this.backlog = this.createItemsByArray(items.backlog);

            if (items.blocks && Array.isArray(items.blocks))
                this.blocks = this.createItemsByArray(items.blocks);

            if (items.wip && Array.isArray(items.wip))
                this.wip = this.createItemsByArray(items.wip);

            if (items.test && Array.isArray(items.test))
                this.test = this.createItemsByArray(items.test);

            if (items.done && Array.isArray(items.done))
                this.done = this.createItemsByArray(items.done);
        }

        return;
    }

    hasBlocks(): boolean {
        return this.blocks.length > 0;
    }

    createItemsByArray(array: Array<Object>): Array<TaskModel> {
        let taskArray: Array<TaskModel> = new Array<TaskModel>();

        array.forEach((item) => taskArray.push(new TaskModel(item)));

        return taskArray;
    }
}