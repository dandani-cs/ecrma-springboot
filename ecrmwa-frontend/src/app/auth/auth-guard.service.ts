import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({ 'providedIn': 'root' })
export class AuthGuardService {

  constructor(public router: Router) { 

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const loginData = localStorage.getItem("ecrma_login")!

    if(loginData != null) {
      let loginInfo    = JSON.parse(loginData)
      let expectedRole = route.data.expectedRole

      if(loginInfo && (expectedRole === 'any' || loginInfo.role === expectedRole)) {
        console.log("[ECRMA] You are logged in!")
        return true;
      } else
        console.error("[ECRMA] Non-matching role:", expectedRole, "=/=", loginInfo.role);
    } else
      console.error("[ECRMA] You are not logged in yet");

    this.router.navigate(['login'])
    return false;
  }
}
