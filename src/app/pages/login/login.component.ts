import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FirebaseService } from 'src/app/services/firebase.service';
//import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;
  isSignedIn:any;

  constructor(/*private authService: AuthService*/
  public fbservice:FirebaseService, private apc: AppComponent) { 
    this.isSignedIn = apc.isSignedIn;
  }

  ngOnInit() {}

  /*loginGoogle() {
    this.authService.login(this.email, this.password);
  }*/

}
