/*
============================================
; Title: material.module.ts
; Author: Professor Krasso
; Date:   03 September] 2020
; Modified By: Janet Blohn
; Description: Bob's Computer Repair Application
; Material Module for bobs-computer-repair
============================================
*/
/* Import Angular modules */
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// Import required application modules and components
/*import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import { ContactComponent } from './contact/contact.component';*/

@NgModule({
  imports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})

// Export as MaterialModule
export class MaterialModule { }
