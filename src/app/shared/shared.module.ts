import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAtividadeComponent } from './card-atividade/card-atividade.component';



@NgModule({
  declarations: [
    CardAtividadeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardAtividadeComponent
  ]
})
export class SharedModule { }
