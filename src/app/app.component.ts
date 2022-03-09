import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SzakdogaMerrenez';
  public isSignedIn = false;
  constructor(public firebaseservice:FirebaseService){}

  ngOnInit(): void {
      if(localStorage.getItem('user')!==null){
        this.isSignedIn = true;
      }
      else
      {
        this.isSignedIn = false;
      }

      
  }
  async onSigngup (email:string, password:string){
    await this.firebaseservice.signup(email, password);
    if(this.firebaseservice.isLoggedIn){
      this.isSignedIn = true;
    }
  }
  async onSigngin (email:string, password:string){
    await this.firebaseservice.singnin(email, password);
    if(this.firebaseservice.isLoggedIn){
      this.isSignedIn = true;
    }
  }
  handleLogout(){
    this.isSignedIn = false;
  }
}
