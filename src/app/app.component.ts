import { Component, ViewEncapsulation } from '@angular/core';
import {NavigationComponent} from "./components/navigation/navigation.component";



@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.scss'
  ],
  template: `
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
