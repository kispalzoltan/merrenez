import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RabbitComponent } from './rabbit.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    RabbitComponent
  ],
  imports: [
    CommonModule, MatCardModule
  ],exports:[RabbitComponent]
})
export class RabbitModule { }
