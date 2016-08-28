import { Component, ViewEncapsulation } from '@angular/core';
import {NavigationComponent} from "./components/navigation/navigation.component";



@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.scss'
  ],
  template: `
    <!--<nav>-->
      <!--<span>-->
        <!--<a [routerLink]=" ['./'] ">-->
          <!--Index-->
        <!--</a>-->
      <!--</span>-->
      <!--|-->
      <!--<span>-->
        <!--<a [routerLink]=" ['./home'] ">-->
          <!--Home-->
        <!--</a>-->
      <!--</span>-->
    <!--</nav>-->
    <navigation></navigation>
    <div class="main-container">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [NavigationComponent],
})
export class App {

  constructor() {

  }

  ngOnInit() {

  }

}
