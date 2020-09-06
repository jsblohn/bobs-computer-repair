/*
============================================
; Title: services.service.ts
; Author: Professor Krasso
; Date:   28 August 2020
; Modified By: Janet Blohn
; Description: Bob's Computer Repair Application
; Service for bobs-computer-repair
============================================
*/
/* Import Angular modules */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// Import IServices from the Services Interface (IService)
import { IService } from './service.interface';

@Injectable({
  providedIn: 'root'
})

// Export the services with the Services Array and define the services in the constructor
export class ServicesService {
  services: Array<IService>;

  constructor() {
    this.services = [
      {serviceName: "Password Reset", price: 39.99},
      {serviceName: "Spyware Removal", price: 99.99},
      {serviceName: "RAM Upgrade", price: 129.99},
      {serviceName: "Software Installation", price: 49.99},
      {serviceName: "Tune-up", price: 89.99},
      {serviceName: "Keyboard Cleaning", price: 45.00},
      {serviceName: "Disk Clean-up", price: 149.99}
    ]
   };

   // Return the service
   getServices(): Observable<IService[]> {
     return of(this.services);
   }

   // Find the service by serverName and return it
   getService(serviceName: string) {
     for (let service of this.services) {
       if (service.serviceName = serviceName) {
         return service;
       }
     }
   }
}
