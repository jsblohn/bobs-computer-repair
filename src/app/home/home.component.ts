/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   28 August 2020
; Modified By: Janet Blohn
; Description: Bob's Computer Repair Application
; Typescript for home.component of bobs-computer-repair
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, NgModel } from '@angular/forms';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatCheckbox} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from "rxjs";

// Import required application modules and components
import { IService } from '../service.interface';
import { ServicesService} from  '../services.service';
import { IInvoice } from '../invoice.interface';
import { InvoiceService } from '../invoice.service';
import { InvoiceSummaryComponent } from '../invoice-summary/invoice-summary.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// Export as the HomeComponent
export class HomeComponent implements OnInit {

  // Define variables
  //services: Array<IService>;
  services: Observable<IService[]>;
  //header: Array<string> = ['serviceName', 'price']
  service: IService;
  checkbox: MatCheckbox;
  serviceEntry: IService;
  invoiceEntry: IInvoice;
  invoice: IInvoice;
  serviceEntries: Array<IService> = [];
  serviceChecked: IInvoice;
  invoiceEntries: Array<IInvoice> = [];
  isChecked: false;
  form: FormGroup;
  selectedServices: Array<string> = ['serviceName', 'price'];
  checked: MatCheckbox;
  serviceForm: FormGroup;
  invoiceForm: FormGroup;

  //OrderInfo = this.invoiceEntry.invoice;

orderMessage: string;
  //constructor(private servicesService: ServicesService, private fb: FormBuilder) {
  //constructor (private dialog: MatDialog, private servicesService: ServicesService, private invoiceService: InvoiceService) {
    constructor (private dialog: MatDialog, private servicesService: ServicesService, private fb: FormBuilder) {
    this.services = servicesService.getServices();

    this.serviceEntry = {} as IService;
    this.invoiceEntry = {} as IInvoice;
    this.invoiceEntries = {} as IInvoice[];
    this.isChecked = false;

    this.serviceForm = this.fb.group ({
      checkArray: this.fb.array([])
    });


    const dialogRef = this.dialog.open(InvoiceSummaryComponent,
      {data: {//partsAndLabor: this.getPartsLaborTotal(),
      list: this.invoiceEntries,
      //total: this.getTotal()},
      disableClose: true
       } });

  dialogRef.afterClosed().subscribe(result => {
    if (result === "ordered") {
      //this.invoiceEntry = new invoice{};
    }
  });
}

  ngOnInit(): void {

  }

  onChange(e) {

    console.log(e);
    console.log(this.isChecked);
    //console.log(this.checked);
    console.log(e.checked);
    this.checked = e.checked;
    if (e.checked) {

      let price = e.source.value;
      let serviceName = e.source.name;
      let lineItems = [{serviceName, price}];
      let partsAmount = e.source.partsAmount;
      let laborAmount = e.source.laborAmount;
      //lineItems: [{serviceName: '', price: 0}]
      let newInvoice = {lineItems, partsAmount, laborAmount};


      function pushEntry() {


        this.invoiceEntries.push (


          newInvoice)
        }

      console.log(this.invoiceEntries);
      console.log(e.source.name);

    }}

    subOrder() {
      this.orderMessage = "Order Confirmed";
    }
    clearOrder() {
      this.serviceEntries = [];
      this.invoiceEntries = [];
      this.orderMessage = "Order Cancelled";

    }


}



