import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {LoginResponse} from "../model/loginResponse.model";
import {User} from "../model/user.model";
import {Subject} from 'rxjs/Subject';
let decode = require('jwt-decode');


@Injectable()
export class AuthService {
  static ADMIN_USERNAME: string = 'admin';
  static PASSWORD: string = '1111';

  private _userSource = new Subject<User>();
  private user = this._userSource.asObservable();

  constructor(private http: Http) {
    this._userSource.next(this.getUser());
  }

  logIn(username: string, password: string): Observable<LoginResponse> {
    return Observable.create(observer => {
      this.http.post("http://localhost:8080/api/authenticate", {username: username, password: password})
        .subscribe((res: Response) => {
          let resJson = res.json();
          localStorage.setItem('user_token', resJson.token);
          this._userSource.next(this.getUser());
          observer.next(new LoginResponse(resJson.message))
        });
    })
  }

  isLoggedIn() {
    return !!localStorage.getItem('user_token');
  }

  getUser() {
    return localStorage.getItem('user_token') ? User.fromJson(decode(localStorage.getItem('user_token'))) : null;
  }

  getObservableUser() {
    return this.user;
  }

  logOut() {
    localStorage.removeItem('user_token');
    this._userSource.next(null);
    return !this.isLoggedIn();
  }
}
