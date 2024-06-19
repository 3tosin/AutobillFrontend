import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-bill-dashboard',
  templateUrl: './auto-bill-dashboard.component.html',
  styleUrls: ['./auto-bill-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AutoBillDashboardComponent {
  isModalOpen = false;

  constructor(private location: Location, private router: Router) {}

  goBack() {
    this.location.back();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  selectPaymentType(type: string) {
    // console.log('Selected payment type:', type);
    this.navigateToBillPayment();
    this.closeModal();
    // You can navigate to another page or handle the selection here
  }

  navigateToBillPayment(): void {
    this.router.navigate(['/billpayment']);
  }
}
