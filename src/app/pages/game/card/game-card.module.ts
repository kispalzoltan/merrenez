import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card.component';
import { BoardModule } from '../../board/board.module';



@NgModule({
  declarations: [
    GameCardComponent
  ],
  imports: [
    CommonModule,
    BoardModule
  ],exports:[GameCardComponent]
})
export class GameCardModule { }
