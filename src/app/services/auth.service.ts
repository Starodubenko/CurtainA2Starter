import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginResponse} from "../model/loginResponse.model";
import {User} from "../model/user.model";


@Injectable()
export class AuthService {
  static ADMIN_USERNAME: string = 'admin';
  static PASSSWORD: string = '1111';

  logIn(username: string, password: string): Observable<LoginResponse> {
    return Observable.create(observer => {
      let loginResponse = new LoginResponse();
      let isAdmin = AuthService.ADMIN_USERNAME == username.toLowerCase();
      let isRightAuth = AuthService.PASSSWORD == password;

      if (isRightAuth) {
        let user = new User("John", "Doe");
        localStorage.setItem('user_token', user.toString());
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

  logOut() {
    localStorage.removeItem('user_token');
    return !this.isLoggedIn();
  }
}
