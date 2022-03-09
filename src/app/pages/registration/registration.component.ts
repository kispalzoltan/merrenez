import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers:[FirebaseService]
})
export class RegistrationComponent implements OnInit {

  isSignedIn:any;

  constructor(public fbservice:FirebaseService, private apc: AppComponent) { 
    this.isSignedIn = apc.isSignedIn;
  }

  
  ngOnInit(): void {
  }

}
