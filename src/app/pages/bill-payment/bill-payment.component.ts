import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css'],
})
export class BillPaymentComponent implements OnInit {
  billPaymentForm!: FormGroup;
  accounts = ['Account 1', 'Account 2', 'Account 3'];
  categories = ['Electricity/Power', 'Water', 'Internet'];
  billers = ['PAYORBORO', 'Biller 2', 'Biller 3'];

  constructor(private fb: FormBuilder) {} 

  ngOnInit(): void {
    this.billPaymentForm = this.fb.group({
      account: [''],
      category: [''],
      biller: [''],
      meterNo: [''],
      amount: [''],
    });
  }

  onSubmit(): void {
    console.log(this.billPaymentForm.value);
  }
}
