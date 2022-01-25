import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SplashScreenModule } from '../splash-screen/splash-screen.module';
import { GameCardModule } from '../game/card/game-card.module';
import { LoginModule } from '../login/login.module';
import { NavModule } from '../nav/nav.module';
import { ScoreCardModule } from '../score/card/score-card.module';
import { RegistrationModule } from '../registration/registration.module';
import { FormsModule } from '@angular/forms';
import { OpinionScreenModule } from '../opinion-screen/opinion-screen.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, SplashScreenModule,GameCardModule, LoginModule, NavModule, ScoreCardModule, RegistrationModule, FormsModule,OpinionScreenModule, HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
