import {CanActivate, Router, RouterState, ActivatedRouteSnapshot, RouterStateSnapshot,} from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isLoggedIn = this.authService.isLoggedIn();
    let targetState = state.url;
    let result = true;

    debugger;
    if (targetState == '/' && isLoggedIn){
      result = false;
      history.back(-1)
    } else
      if (targetState != '/' && !isLoggedIn){
      this.router.navigate(['']);
    }
    return result;
  }
}
