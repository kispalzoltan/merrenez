import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientCardComponent } from './patient-card.component';



@NgModule({
  declarations: [
    PatientCardComponent
  ],
  imports: [
    CommonModule
  ],exports: [PatientCardComponent]
})
export class PatientCardModule { }
