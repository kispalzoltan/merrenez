import { Component, Input, OnInit } from '@angular/core';
import { Score } from './../../../shared/models/score.model';


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
