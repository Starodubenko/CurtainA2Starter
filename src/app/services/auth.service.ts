import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginAlert} from "../pages/curtain/login/login.alert";


@Injectable()
export class AuthService {
  static ADMIN_USERNAME: string = 'admin';
  static PASSSWORD: string = '1111';

  logIn(username: string, password: string): Observable<LoginAlert> {
    return Observable.create(observer => {
      let loginResponse = new LoginAlert();
      let isAdmin = AuthService.ADMIN_USERNAME == username.toLowerCase();
      let isRightAuth = AuthService.PASSSWORD == password;

      if (isRightAuth){
        localStorage.setItem('user_token', username);
      } else {
        loginResponse.hasMessage = true;
        loginResponse.message = "Login or password is wrong.";
      }
      observer.next(loginResponse);
    })
  }

  isLoggedIn(){
    return !!localStorage.getItem('user_token');
  }
}
