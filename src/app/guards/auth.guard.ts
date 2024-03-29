import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router:Router){}
  canActivate():boolean{
    const isLoggedIn =!!localStorage.getItem('loginUsers');
    if(!isLoggedIn){
      this.router.navigate(['/homepage']);
    }
    return isLoggedIn;
  }
  
}
