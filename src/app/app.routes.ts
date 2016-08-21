import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import {LoggedInGuard} from "./guards/loggedIn.guard";

export const routes: RouterConfig = [
  { path: '',      component: 'Curtain' },
  { path: 'home',  component: 'Home' , canActivate: [LoggedInGuard]},
];

export const asyncRoutes: AsyncRoutes = {
  'Curtain': require('es6-promise-loader!./pages/curtain/curtain.component'),
  'Home': require('es6-promise-loader!./pages/home')
};



export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
];


