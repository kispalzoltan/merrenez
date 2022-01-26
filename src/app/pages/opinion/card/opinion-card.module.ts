import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpinionCardComponent } from './opinion-card.component';



@NgModule({
  declarations: [OpinionCardComponent],
  imports: [
    CommonModule
  ],exports:[OpinionCardComponent]
})
export class OpinionCardModule { }
