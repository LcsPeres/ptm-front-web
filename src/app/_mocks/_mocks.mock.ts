import { OverviewModel } from "../models/overview.model";
import { TaskModel } from "../models/task.model";

export class MockTest {

    getAllCards(): OverviewModel {
        let mock = new OverviewModel();

        let task = new TaskModel();
        task.id = "ABC01";
        task.title = "First task";
        task.description = "Task description";
        task.gravidade = 2;
        task.deadline = new Date(2021, 11, 22);
        task.urgencia = 5;
        task.tendencia = 5;

        mock.backlog?.push(task);
        
        let task2 = new TaskModel();
        task2.id = "01ABC";
        task2.title = "Second task";
        task2.description = "Task description";
        task2.gravidade = 3;
        task2.deadline = new Date(2021, 11, 23);
        task2.urgencia = 2;
        task2.color = "red";
        task2.tendencia = 2;
        
        mock.wip?.push(task2);

        let task3 = new TaskModel();
        task3.id = "AAA000";
        task3.title = "Third task";
        task3.description = "Task description";
        task3.gravidade = 1;
        task3.deadline = new Date(2021, 11, 24);
        task3.urgencia = 1;
        task3.tendencia = 2;

        mock.backlog?.push(task3);
        
        return mock;
    }
}