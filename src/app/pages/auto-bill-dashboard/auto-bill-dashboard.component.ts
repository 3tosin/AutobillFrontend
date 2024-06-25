import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HistoryComponent } from '../history/history.component';
import { AutobillDetailsService } from '../../Services/autobill-details.service';



interface Transaction {
  id: number;
  title: string;
  amount: number;
  description: string;
  date: string;
  from: string;
}

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
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  selectedTransaction: Transaction | null = null;
  searchQuery: string = '';
  isLoading: boolean = true;
  // isModalOpen = false;

  constructor(
    private location: Location,
    private router: Router,
    private autobillbillServiceDetails: AutobillDetailsService
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
    this.loadTransactions();
  }
  loadTransactions(): void {
    this.autobillbillServiceDetails.getTransactions().subscribe(
      (data) => {
        this.isLoading = false;
        this.transactions = data;
        this.filteredTransactions = data;
      },
      (error) => {
        this.isLoading = false;
        console.error('Error fetching transactions:', error);
      }
    );
  }

  openTransactionDetail(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

  closeTransactionDetail(): void {
    this.selectedTransaction = null;
  }
  searchTransactions(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredTransactions = this.transactions;
    } else {
      this.filteredTransactions = this.transactions.filter(
        (transaction) =>
          transaction.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          transaction.description
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          transaction.from
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          transaction.date
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      );
    }
  }

  // cancelRecurringPayment(paymentId: number): void {
  //   this.autobillbillServiceDetails.cancelRecurringPayment(paymentId).subscribe(
  //     () => {
  //       this.transactions = this.transactions.filter((transaction) => transaction.id !== paymentId);
  //       this.filteredTransactions = this.filteredTransactions.filter((transaction) => transaction.id !== paymentId);
  //     },
  //     (error) => {
  //       console.error('Error cancelling recurring payment:', error);
  //     }
  //   );
  // }
  cancelRecurringPayment(paymentId: number): void {
    this.autobillbillServiceDetails.cancelRecurringPayment(paymentId).subscribe({
      next: () => {
        this.transactions = this.transactions.filter(
          (transaction) => transaction.id !== paymentId
        );
        this.filteredTransactions = this.filteredTransactions.filter(
          (transaction) => transaction.id !== paymentId
        );
      },
      error: (error) => {
        console.error('Error cancelling recurring payment:', error);
      },
    });
  }
}

