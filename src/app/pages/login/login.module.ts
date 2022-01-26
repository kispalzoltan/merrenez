import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, MatButtonModule, MatCardModule
  ],exports:[LoginComponent]
})
export class LoginModule { }
