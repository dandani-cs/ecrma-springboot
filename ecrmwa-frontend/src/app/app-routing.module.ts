import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { LoginComponentComponent } from './login-component/login-component.component';

export const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponentComponent,
  },
  /**
   * Specify pages that require login w/ 'canActivate: [AuthGuard]'
   * Specify roles through 'admin', 'user', 'any' (any logged in user, if ever needed)
   * 
   * These paths are for testing purposes only
   **/
  {
    path: 'admin',
    component: AppComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'admin' }
  },
  {
    path: 'user',
    component: AppComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'user' }
  },
  {
    path: 'any',
    component: AppComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'any' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
