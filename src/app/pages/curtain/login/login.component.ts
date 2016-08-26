import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {FormBuilder} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";
import {LoginAlert} from "./login.alert";
import {onlyLettersAndNumbersValidator} from "../../../validators/onlyLettersAndNumbersValidator";
import {onlyNumbersValidator} from "../../../validators/onlyNumbersValidator";

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.style.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  username: string = "";
  password: string = "";
  rememberMe: boolean = false;
  loginAlert: LoginAlert = null;

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({});

    this.initializeForm()
  }

  logIn() {
    this.authService.logIn(this.username, this.password)
      .subscribe((res:LoginAlert) => {
        if (res.hasMessage) {
          this.loginAlert = res;
          this.password = "";
        } else {
          this.router.navigate(['/home'])
        }
      })
  }

  private initializeForm() {
    this.loginForm = this.fb.group({
      'username': [
        this.username,
        [
          Validators.required,
          onlyNumbersValidator,
        ]
      ],
      'password': [
        this.password,
        [
          Validators.required,
          Validators.minLength(4),
          onlyLettersAndNumbersValidator,
        ]
      ]
    })
  }
}
