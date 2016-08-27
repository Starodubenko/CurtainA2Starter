import './navigation.scss'
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {routes} from "../../app.routes";

@Component({
  selector: 'navigation',
  styleUrls: [
    './navigation.scss'
  ],
  templateUrl: './navigation.template.html'
})
export class NavigationComponent {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  logOut(){
    if (this.authService.logOut()) {
      this.router.navigate(['/']);
    }
  }
}
