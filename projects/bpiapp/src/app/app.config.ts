import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

//import { routes } from './app.routes';
import { routes } from './app-routing.module';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers:
  [provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      HttpHeaders,
      BrowserModule
    )
  ]
};
