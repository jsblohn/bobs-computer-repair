/*
; =============================================================
; Title:  main.ts
; Author: Professor Krasso
; Date:   28 August 2020
; Modified By: Janet Blohn
; Description: Bob's Computer Repair Application
; main app module for bobs-computer-repair app
;=============================================================
*/

// Import Angular modules
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import modules from bobs-computer-repair
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Enable ProdMode if this is a production environment
if (environment.production) {
  enableProdMode();
}

//Output errors to the console
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
