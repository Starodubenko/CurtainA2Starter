import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {routes} from "../../app.routes";
import {User} from "../../model/user.model";
import {BreadcrumbComponent} from "ng2-breadcrumb/src/breadcrumb/breadcrumb";
import {BreadcrumbService} from "ng2-breadcrumb/src/breadcrumb/breadcrumbService";

@Component({
  selector: 'navigation',
  styleUrls: [
    './navigation.scss'
  ],
  directives: [BreadcrumbComponent],
  templateUrl: './navigation.template.html'
})
export class NavigationComponent {

  private breadCrumbs: String[] = ["courses-list", "edit"];
  private user: User;

  constructor(private authService: AuthService,
              private router: Router,
              private breadcrumbService: BreadcrumbService) {
    breadcrumbService.addFriendlyNameForRoute('/', 'Home');
    breadcrumbService.addFriendlyNameForRoute('/courses-list', 'courses list');
    // breadcrumbService.addFriendlyNameForRoute('/', 'Home Sweet Home');
    this.user = this.authService.getUser();
    this.authService.getObservableUser().subscribe((res:User) => {
      this.user = res;
    });
  }

  ngOnInit(){

  }

  logOut(){
    if (this.authService.logOut()) {
      this.router.navigate(['/']);
    }
  }
}
