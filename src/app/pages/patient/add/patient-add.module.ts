import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { patientAddComponent } from './patient-add.component';



@NgModule({
  declarations: [
    patientAddComponent
  ],
  imports: [
    CommonModule
  ],exports:[patientAddComponent]
})
export class patientAddModule { }
