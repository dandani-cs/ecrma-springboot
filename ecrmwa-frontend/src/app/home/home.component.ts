import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"
import { AuthGuardService } from '../auth/auth-guard.service';
import { User } from '../model/user/user';
import { AuthService } from '../service/authservice/auth.service';

type NewType = NgForm;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = []

  constructor(private authService: AuthService, private authGuardService: AuthGuardService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getUsers().subscribe((data: User[]) => { this.users = data });
  }

  public onLoginUser(loginForm: NewType): void {
    let uuid = localStorage.getItem("ecrma_login");

    // Check if a user was already logged in
    if(uuid != null) {
      console.warn("[ECRMA] Somebody is already logged in. Logging out that account");
      window.alert("[ECRMA] Somebody is already logged in. Logging out that account");
      this.onLogoutUser(); 
    }

    this.authService.authenticateUser(loginForm.value).subscribe(
      (user: User) => {
        if(user == null) {
          console.error("[ECRMA] Failed to login!");
          window.alert("[ECRMA] Failed to login!");
        
        }  else {
          const loginInfo = JSON.stringify({ 
            'uuid' : user.uuid, 
            'email': user.email,
            'role' : user.is_admin ? 'admin' : 'user', 
          })
          console.log("[ECRMA] ", loginInfo)
          localStorage.setItem("ecrma_login", loginInfo);

          window.alert("[ECRMA] Login Successful!");
          if(user.is_admin == true) {
            this.router.navigate(['/candidates'])
          } else {
            this.router.navigate(['/candidates/search-name'])
          }
        }
      }
    )
  }

  public onLogoutUser(): void {
    let loginInfo = localStorage.getItem("ecrma_login")!;
    if(loginInfo != null) {
      const info = JSON.parse(loginInfo);
      let uuid   = info['uuid'].toString();

      this.authService.logoutUser(info['uuid']).subscribe(
        (user: User) => {
        }
      )
      console.log("[ECRMA] Logging out", uuid);
      localStorage.removeItem("ecrma_login");
    } else
      console.error("[ECRMA] Failed to logout!");
  }

  public onSignupUser(signupForm: NewType):void {
    signupForm.value['is_admin']     = false;
    signupForm.value['is_logged_in'] = false;
    console.log(signupForm.value);
    this.authService.findExisting(signupForm.value['email']).subscribe(
      (existing: User) => {

        // If no existing user
        if(existing == null) {
            this.authService.addUser(signupForm.value).subscribe(
            (newUser: User) => {
              if(newUser == null) {
                console.error("[ECRMA] Failed to sign up!");
                window.alert("[ECRMA] Failed to sign up!");
              }  else {
                this.authService.authenticateUser(signupForm.value).subscribe(
                  (authUser: User) => {
                    if(authUser == null) {
                      console.error("[ECRMA] Failed to login!");
                      window.alert("[ECRMA] Failed to login!");
                    
                    }  else {
                      const loginInfo = JSON.stringify({ 
                        'uuid' : authUser.uuid, 
                        'email': authUser.email,
                        'role' : authUser.is_admin ? 'admin' : 'user', 
                      })
                      console.log("[ECRMA] ", loginInfo)
                      localStorage.setItem("ecrma_login", loginInfo);
                      if(authUser.is_admin == true) {
                        this.router.navigate(['/candidates'])
                      } else {
                        this.router.navigate(['/candidates/search-name'])
                      }
                    }
                  }
                )
              }
            }
          );
        } else
          window.alert("A user with that email already exists!");
      }
    )
  }

}
