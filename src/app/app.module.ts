import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillPaymentComponent } from './pages/bill-payment/bill-payment.component';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from './shared/material/material.module'

import { ScheduleBillPaymentDialogComponent } from './pages/schedule-payment-dialog/schedule-payment-dialog.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    BillPaymentComponent,
    ScheduleBillPaymentDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
