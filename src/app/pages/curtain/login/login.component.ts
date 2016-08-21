import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {FormBuilder} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.style.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({});

    this.initializeForm()
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

  private initializeForm() {
    this.loginForm = this.fb.group({
      'username': [
        this.username,
        [
          Validators.required,
        ]
      ],
      'password': [
        this.password,
        [
          Validators.required,
          Validators.minLength(4),
        ]
      ]
    })
  }
}
