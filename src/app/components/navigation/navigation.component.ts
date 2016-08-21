import './navigation.scss'
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    selector: 'navigation',
    template: `<div class="navigation">
                  Navigation
               </div>`,
  styleUrls: [
    './navigation.scss'
  ]
})
export class NavigationComponent {

  constructor(){

  }
}
