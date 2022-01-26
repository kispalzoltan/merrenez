import { Component, Input, OnInit } from '@angular/core';
import { Score } from './../../../shared/models/score.model';

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
