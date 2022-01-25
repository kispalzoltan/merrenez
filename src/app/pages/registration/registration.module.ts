import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatButtonModule, ReactiveFormsModule, FormsModule,  RegistrationRoutingModule
  ],exports:[RegistrationComponent]
})
export class RegistrationModule { }
