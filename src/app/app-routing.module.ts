import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCardComponent } from './pages/game/card/game-card.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'game', component: GameCardComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }