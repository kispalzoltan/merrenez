import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  constructor(public firebaseAuth:AngularFireAuth, private router: Router) { }

  async singnin(email:string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
      this.router.navigate(['/','home']);
      console.log("bejelentkezes")
    });
  }

  async signup(email:string, password: string){
    console.log("regisztracio")
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log("regisztracio")
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
      //this.router.navigate(['/','home']);
      
    });
  }

  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }


}
