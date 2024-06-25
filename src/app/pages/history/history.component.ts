import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../Services/transaction.service';
import { Router } from '@angular/router';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  description: string;
  date: string;
  from: string;
  biller?: string;
  accountDebited?: string;
  beneficiary?: string;
  sender?: string;
  smartCardNumber?: string;
  transactionType?: string;
  sessionId?: string;
  remarks?: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  today: Date = new Date();
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  selectedTransaction: Transaction | null = null;
  searchQuery: string = '';

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
      this.filteredTransactions = data;
    });
  }

  openTransactionDetail(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

  closeTransactionDetail(): void {
    this.selectedTransaction = null;
  }

  goBack(): void {
    this.router.navigate(['/home']);
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
}
