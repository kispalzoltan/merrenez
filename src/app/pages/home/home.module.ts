import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ScoreCardModule } from './../score/card/score-card.module';
import { SplashScreenComponent } from '../splash-screen/splash-screen.component';
import { SplashScreenModule } from '../splash-screen/splash-screen.module';
import { GameCardModule } from '../game/card/game-card.module';
import { FormsModule } from '@angular/forms';
import { PatientCardModule } from '../patient/card/patient-card.module';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import { OpinionCardModule } from '../opinion/card/opinion-card.module';
import { NavModule } from './../nav/nav.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, ScoreCardModule, SplashScreenModule, GameCardModule, FormsModule, PatientCardModule, 
    LoginModule, RegistrationModule, OpinionCardModule, NavModule, MatDialogModule, MatIconModule
  ],exports:[HomeComponent]
})
export class HomeModule { }
