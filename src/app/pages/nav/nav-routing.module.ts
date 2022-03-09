import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCardComponent } from '../game/card/game-card.component';
import { ScoreCardComponent } from '../score/card/score-card.component';


const routes: Routes = [
  { path: 'game', component: GameCardComponent },
  { path: 'score', component: ScoreCardComponent },
  { path: '**', component: GameCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }