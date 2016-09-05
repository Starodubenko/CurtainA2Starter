import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import {LoggedInGuard} from "./guards/loggedIn.guard";

export const routes: RouterConfig = [
  { path: '',      component: 'LoginComponent', canActivate: [LoggedInGuard]},
  { path: 'home',  component: 'Home' , canActivate: [LoggedInGuard]},
  { path: 'courses-list',  component: 'CourseListPage' , canActivate: [LoggedInGuard]},
  { path: 'courses-list/:id/edit',  component: 'EditCoursePage' , canActivate: [LoggedInGuard]},
];

export const asyncRoutes: AsyncRoutes = {
  'LoginComponent': require('es6-promise-loader!./pages/curtain/login'),
  'Home': require('es6-promise-loader!./pages/home'),
  'CourseListPage': require('es6-promise-loader!./pages/courses'),
  'EditCoursePage': require('es6-promise-loader!./pages/editCourse')
};



export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
];


