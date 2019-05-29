import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { throwError } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn()
    .then(()=>{
      console.log("signIn successful!"); 
      this.authStatus=this.authService.isAuth
      this.router.navigate(['appareils']) //redirige vers la page appareil dès que c'est fini
    });
  } //la méthode signIn est une promesse donc on oeut utiliser une callback function asynchrone

  onSignOut(){
    this.authService.signOut()
    console.log("signOut successful");
    this.authStatus=this.authService.isAuth;
  }

}
