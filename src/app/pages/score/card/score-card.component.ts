import { Component, Input, OnInit } from '@angular/core';
import { Score } from 'src/app/shared/models/scores.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  @Input() score?: Score;

  constructor() { }


  ngOnInit(): void {
  }

}
