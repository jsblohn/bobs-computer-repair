/*
============================================
; Title: invoice.service.ts
; Author: Professor Krasso
; Date:   28 August 2020
; Modified By: Janet Blohn
; Description: Bob's Computer Repair Application
; Invoice Service for bobs-computer-repair
============================================
*/
/* Import Angular modules */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// Import IServices from the Services Interface (IService)
import { IInvoice } from './invoice.interface';
import { IService } from './service.interface';

import { ServicesService } from './services.service';



@Injectable({
  providedIn: 'root'
})

// Export the services with the Invoice Array and define the services in the constructor
export class InvoiceService {
  invoice: Array<IInvoice>;

  constructor (private servicesService: ServicesService) {
    this.invoice = [{
       serviceName: '',
        price: 0,
        partsAmount: 0,
    laborAmount: 0
  }


     ]
   }


   // Return the service
   /*getServices(): Observable<IService[]> {
     return of(this.services);
   }*/


}
