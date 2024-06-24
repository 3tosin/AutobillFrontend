import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HistoryComponent } from '../history/history.component';

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
}
