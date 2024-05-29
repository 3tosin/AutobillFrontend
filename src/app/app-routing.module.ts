import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillPaymentComponent } from './pages/bill-payment/bill-payment.component';

const routes: Routes = [
  {
    path : 'billpayment',
    component : BillPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
