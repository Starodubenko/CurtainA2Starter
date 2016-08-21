import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {LoginComponent} from "./login";
import {NavigationComponent} from "../../components/navigation";


@Component({
  selector: 'curtain',
  templateUrl: './curtain.template.html',
  styleUrls: ['./curtain.style.scss'],
  directives: [LoginComponent, NavigationComponent]
})
export class Curtain {

  constructor(){

  }

}
