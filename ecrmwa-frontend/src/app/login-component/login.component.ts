import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthGuardService } from '../auth/auth-guard.service';
import { User } from '../model/user/user';
import { AuthService } from '../service/authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = []

  constructor(private authService: AuthService, private authGuardService: AuthGuardService) { }

  ngOnInit(): void {
    this.authService.getUsers().subscribe((data: User[]) => { this.users = data });
  }

  public onLoginUser(loginForm: NgForm): void {
    let uuid = localStorage.getItem("ecrma_login");

    // Check if a user was already logged in
    if(uuid?.trim().length != 0) {
      console.warn("[ECRMA] Somebody is already logged in. Logging out that account");
      this.onLogoutUser(); 
    }

    this.authService.authenticateUser(loginForm.value).subscribe(
      (user: User) => {
        if(user == null)
          console.error("[ECRMA] Failed to login!");
        else {
          const loginInfo = JSON.stringify({ 
            'uuid' : user.uuid, 
            'email': user.email,
            'role' : user.is_admin ? 'admin' : 'user', 
          })
          console.log("[ECRMA] ", loginInfo)
          localStorage.setItem("ecrma_login", loginInfo);
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

}
