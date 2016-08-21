import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.style.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private authService: AuthService,
              private router: Router){
  }

  logIn() {
    console.log("login process");
    this.authService.logIn(this.username, this.password)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['/home'])
        }
      })
  }
}
