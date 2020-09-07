/*
============================================
; Title: IInvoice.ts
; Author: Professor Krasso
; Date:   03 September 2020
; Modified By: Janet Blohn
; Description: Bob's Computer Repair
; Invoice Interface for bobs-computer-repair
============================================
*/

// Import the Interface the Services Interface and add additional fields
import { IService } from './service.interface';

export interface IInvoice {
   //lineItems: Array<IService>;

    invoiceId: number;
    serviceName: string;
    price: number;

    partsAmount: number;
    laborAmount: number;





}
