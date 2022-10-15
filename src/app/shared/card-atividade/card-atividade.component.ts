import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';

@Component({
  selector: 'card-atividade',
  templateUrl: './card-atividade.component.html',
  styleUrls: ['./card-atividade.component.scss']
})
export class CardAtividadeComponent implements OnInit {

  @Input("task") task!: TaskModel;

  dataFormatada: string = '';

  constructor() { }

  ngOnInit(): void {
    this.dataFormatada = this.task.deadline.toLocaleDateString('pt-BR');
  }

}
