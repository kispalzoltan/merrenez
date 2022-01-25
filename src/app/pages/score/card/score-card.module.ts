import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreCardComponent } from './score-card.component';
import {MatTableModule} from '@angular/material/table';
import { MatCard, MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ScoreCardComponent
  ],
  imports: [
    CommonModule, MatTableModule, MatCardModule
  ],
  exports:[ScoreCardComponent]
})
export class ScoreCardModule { }
