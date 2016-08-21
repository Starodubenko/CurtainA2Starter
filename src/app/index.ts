// App
import {AuthService} from "./services/auth.service";
import {LoggedInGuard} from "./guards/loggedIn.guard";
export * from './app.component';
export * from './app.routes';

// Application wide providers
export const APP_PROVIDERS = [
  AuthService,

  LoggedInGuard
];
