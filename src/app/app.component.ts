import { Component, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.scss'
  ],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [],
})
export class App {

  constructor() {

  }

  ngOnInit() {

  }

}
