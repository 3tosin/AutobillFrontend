import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AutoBillDashboardComponent } from './pages/auto-bill-dashboard/auto-bill-dashboard.component' 
// import { BillPaymentComponent } from './pages/bill-payment/bill-payment.component';
import { BillPaymentComponent } from './pages/bill-payment/bill-payment.component';
import { FormsModule } from '@angular/forms';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { PinConfirmationComponent } from './pages/pin-confirmation/pin-confirmation.component';
import { SchedulePaymentComponent } from './pages/schedule-payment/schedule-payment.component';
import { HistoryComponent } from './pages/history/history.component'

import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from './Services/transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutoBillDashboardComponent,
    BillPaymentComponent,
    ReviewsComponent,
    PinConfirmationComponent,
    SchedulePaymentComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatBottomSheetModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync(), TransactionService,],
  bootstrap: [AppComponent],
})
export class AppModule {}
