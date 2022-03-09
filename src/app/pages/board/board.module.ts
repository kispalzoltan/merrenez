import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { MatCardModule } from '@angular/material/card';
import { RabbitModule } from '../rabbit/rabbit.module';




@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,RabbitModule
  ],exports:[BoardComponent]
})
export class BoardModule { }
