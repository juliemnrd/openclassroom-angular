import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

//Une guard est un service qu'Angular exécutera 
//au moment où l'utilisateur essaye de naviguer vers la route sélectionnée

//Ce service implémente l'interface  canActivate ,
//et doit contenir une méthode du même nom qui prend les arguments ActivatedRouteSnapshot et RouterStateSnapshot

//https://angular.io/api/router/CanActivate

@Injectable() // décorateur pour injecter le service AuthService dans ce nouveau service.
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate( //vérifier l'état de l'authentification dansdans le service AuthService
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth']);
    }
  }
}

//Pour appliquer cette garde à la route /appareils  et à toutes ses routes enfants, 
//Il faut l'ajouter dans AppModule