import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {FormBuilder} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";
import {LoginResponse} from "../../../model/loginResponse.model";
import {onlyLettersAndNumbersValidator} from "../../../validators/onlyLettersAndNumbersValidator";
import {onlyNumbersValidator} from "../../../validators/onlyNumbersValidator";

@Component({
  selector: 'login',
  providers: [],
  directives: [],
  pipes: [],
  styleUrls: ['./login.style.scss'],
  templateUrl: './login.template.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  username: string = "";
  password: string = "";
  rememberMe: boolean = false;
  loginAlert: LoginResponse = null;

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
      .subscribe((res:LoginResponse) => {
        if (this.authService.isLoggedIn()) {
          this.router.navigate(['/home'])
        } else {
          this.loginAlert = res;
          this.password = "";
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
