import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './login-component/login.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
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
  
  {path: '',redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
