import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCardComponent } from './pages/game/card/game-card.component';

const routes: Routes = [
  { path: 'game', component: GameCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }