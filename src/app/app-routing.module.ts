import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCardComponent } from './pages/game/card/game-card.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  { path: 'game', component: GameCardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }