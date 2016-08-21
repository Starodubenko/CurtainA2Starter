import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  static ADMIN_USERNAME: string = 'admin';
  static PASSSWORD: string = '1';

  logIn(username: string, password: string): Observable<boolean> {
    return Observable.create(observer => {
      let isAdmin = AuthService.ADMIN_USERNAME == username.toLowerCase();
      let isRightAuth = AuthService.PASSSWORD == password;

      if (isRightAuth){
        localStorage.setItem('user_token', username);
      }
      observer.next(isRightAuth);
    })
  }

  isLoggedIn(){
    return !!localStorage.getItem('user_token');
  }
}
