import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    Location, {provide: LocationStrategy, useClass: HashLocationStrategy},
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding())
  ]
};
