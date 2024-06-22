import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AutoBillDashboardComponent } from './pages/auto-bill-dashboard/auto-bill-dashboard.component';
import { BillPaymentComponent } from './pages/bill-payment/bill-payment.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { PinConfirmationComponent } from './pages/pin-confirmation/pin-confirmation.component';
import { SchedulePaymentComponent } from './pages/schedule-payment/schedule-payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'dashboard', component: AutoBillDashboardComponent },
  {
    path: 'billpayment',
    component: BillPaymentComponent,
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
  },
  {
    path: 'pin-confirmation',
    component: PinConfirmationComponent,
  },
  {
    path: 'schedule-payment',
    component: SchedulePaymentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
