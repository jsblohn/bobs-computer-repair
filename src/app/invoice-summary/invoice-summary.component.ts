/*
============================================
; Title:  invoice-summary.component.ts
; Author: Professor Krasso
; Date:   28 August 2020
; Modified By: Janet Blohn
; Description: Bob's Computer Repair Application
; Typescript for invoice-summary.component of bobs-computer-repair
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit, Input, Output, Inject } from '@angular/core';
//import { MatCheckboxModule } from '@angular/material/checkbox';
//import { MatCardModule } from '@angular/material/card';
//import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, NgModel } from '@angular/forms';

import { IInvoice } from '../invoice.interface';
import { InvoiceService } from '../invoice.service';
import { IService } from '../service.interface';
import { ServicesService } from '../services.service';

import { Observable } from "rxjs";

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.css']
})

export class InvoiceSummaryComponent implements OnInit {
  invoices: Array<IInvoice[]>;

  invoice: IInvoice;
  //service: IService;


  invoiceEntry: IInvoice;
  serviceEntries: Array<IService> = [];
  invoiceEntries: Array<IInvoice> = [];
  currentDate: number = Date.now();
  invoiceForm: FormGroup;
  serviceForm: FormGroup;
  //list;
  orderMessage: string;

  constructor(private dialogRef: MatDialogRef<InvoiceSummaryComponent>,
    @Inject(MAT_DIALOG_DATA) data, private invoiceService: InvoiceService, private servicesService: ServicesService,){



    this.invoiceEntry = {} as IInvoice;
    this.invoice = {} as IInvoice;
    this.invoiceEntries = {} as IInvoice[];
    //this.list = data.list;
   }


  ngOnInit(): void {

  }

  onChange($event) {
    console.log($event);
    console.log(this.invoiceEntries);
  }


  clearOrder() {
    //this.serviceEntries = [];
    this.invoiceEntries = [];
    this.orderMessage = "Order Cancelled";
  }


  /*isChecked() {



    this.invoiceEntries.push ({
    serviceName: this.service.serviceName,
     price: this.service.price
    });
     //event.currentTarget.reset();


  }*/
  }

