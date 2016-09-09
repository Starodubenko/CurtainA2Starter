import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginResponse} from "../model/loginResponse.model";
import {User} from "../model/user.model";
import {plainToClass} from "class-transformer";
import {Subject}    from 'rxjs/Subject';


@Injectable()
export class AuthService {
  static ADMIN_USERNAME: string = 'admin';
  static PASSWORD: string = '1111';

  private _userSource = new Subject<User>();
  private user = this._userSource.asObservable();

  constructor(){
    this._userSource.next(plainToClass(User, JSON.parse(localStorage.getItem('user_token'))));
  }

  logIn(username: string, password: string): Observable<LoginResponse> {
    return Observable.create(observer => {
      let loginResponse = new LoginResponse();
      let isAdmin = AuthService.ADMIN_USERNAME == username.toLowerCase();
      let isRightAuth = AuthService.PASSWORD == password;

      if (isRightAuth) {
        let user = new User("John", "Doe");
        localStorage.setItem('user_token', JSON.stringify(user));
        this._userSource.next(user);
        loginResponse.message = null;
      } else {
        loginResponse.message = "Login or password is wrong.";
      }
      observer.next(loginResponse);
    })
  }

  isLoggedIn() {
    return !!localStorage.getItem('user_token');
  }

  getUser(){
    return plainToClass(User, JSON.parse(localStorage.getItem('user_token')));
  }

  getObservableUser(){
    return this.user;
  }

  logOut() {
    localStorage.removeItem('user_token');
    this._userSource.next(null);
    return !this.isLoggedIn();
  }
}
