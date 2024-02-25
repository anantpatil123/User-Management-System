import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),  importProvidersFrom(HttpClientModule),UserModule
  ],
};
