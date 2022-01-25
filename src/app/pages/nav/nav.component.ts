import { Component, Input,OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from './../../shared/models/category.models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  sCategoryTitle?: string;
  @Input() selectedCategory?: string;
  @Input() categories: Category[] = [];
  @Output() callSelectPage = new EventEmitter<string>();
@Output() callSelectC = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  select(target: string): void{
    this.callSelectC.emit(target);
  }

}
