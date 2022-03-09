import { Component, OnInit, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  globalListenFunc: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.keydown();
  }
  
  keydown(){
    this.globalListenFunc = this.renderer.listen('document', 'keydown', e => {
      console.log(e.key);
      if(e.key == "a"){
        console.log("ügyes vagy")
      }
    });
  }

}
