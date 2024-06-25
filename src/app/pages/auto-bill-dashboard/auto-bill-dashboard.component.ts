import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HistoryComponent } from '../history/history.component';
import { RecurringPaymentService } from '../../Services/recurring-payment.service';


@Component({
  selector: 'app-auto-bill-dashboard',
  templateUrl: './auto-bill-dashboard.component.html',
  styleUrls: ['./auto-bill-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AutoBillDashboardComponent {
  payments: any[] = [];
  selectedPayment: any;
  isModalOpen: boolean = false;
  // isModalOpen = false;

  constructor(
    private location: Location,
    private router: Router,
    private recurringPaymentService: RecurringPaymentService
  ) {}

  goBack() {
    this.router.navigate(['/home']);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  selectPaymentType(type: string) {
    this.navigateToBillPayment();
    this.closeModal();
  }

  navigateToBillPayment(): void {
    this.router.navigate(['/billpayment']);
  }

  ngOnInit(): void {
    this.fetchPayments();
  }

  fetchPayments(): void {
    this.recurringPaymentService.getRecurringPayments().subscribe(
      (response) => {
        this.payments = response;
      },
      (error) => {
        console.error('Error fetching payments:', error);
      }
    );
  }

  openPaymentDetails(payment: any): void {
    this.recurringPaymentService.getPaymentDetails(payment.id).subscribe(
      (response) => {
        this.selectedPayment = response;
        this.isModalOpen = true;
      },
      (error) => {
        console.error('Error fetching payment details:', error);
      }
    );
  }



  cancelPayment(): void {
    this.recurringPaymentService
      .cancelPayment(this.selectedPayment.id)
      .subscribe(
        (response) => {
          console.log('Payment cancelled', response);
          this.closeModal();
          this.fetchPayments();
        },
        (error) => {
          console.error('Error cancelling payment:', error);
        }
      );
  }
}
