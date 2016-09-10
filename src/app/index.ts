// App
import {AuthService} from "./services/auth.service";
import {LoggedInGuard} from "./guards/loggedIn.guard";
import {CourseService} from "./services/course.service";
import {UserService} from "./services/user.service";
import {BreadcrumbService} from "ng2-breadcrumb/src/breadcrumb/breadcrumbService";
export * from './app.component';
export * from './app.routes';

// Application wide providers
export const APP_PROVIDERS = [
  AuthService,
  CourseService,
  UserService,
  BreadcrumbService,

  LoggedInGuard
];
