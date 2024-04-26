import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

export const AuthGuard: CanActivateFn = ( 
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree=> {
    const isValidPayment = true;
    return isValidPayment
    ? true
    : inject(Router).createUrlTree(['/orderConfirmation', 'failed']);
  
  };

  
  