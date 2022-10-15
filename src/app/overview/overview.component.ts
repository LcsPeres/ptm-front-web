import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverviewModel } from '../models/overview.model';
import { TaskModel } from '../models/task.model';
import { PtmService } from '../services/ptm.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  hasTest: boolean = true;
  cards: OverviewModel = new OverviewModel();

  constructor(
    private router: Router,
    private ptmService: PtmService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards(): void {
    this.ptmService.getAllOverviewItems("1").subscribe({
      next: (success: OverviewModel) => { this.cards = new OverviewModel(success) },
      error: (error) => console.log(error)
    });
  }

  drop(event: any): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );

    this.transferTaskToColumn(event.container.data, event.container.id.substring(event.container.id.length - 1));
  }

  transferTaskToColumn(taskModel: Array<TaskModel>, toColumn: number) {
    this.taskService.transferTaskToColumn(+taskModel[0].id, toColumn).subscribe({
      next: (res) => {
        this.getAllCards();
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message);
        this.getAllCards();
      },
      complete: () => { }
    });
  }

  addNewTask() {

  }
  
}
