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
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  transactions: Transaction[] = [];
  selectedTransaction: Transaction | null = null;

  constructor(private transactionService: TransactionService, private router: Router) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

  openTransactionDetail(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

  closeTransactionDetail(): void {
    this.selectedTransaction = null;
  }
  goBack() {
   this.router.navigate(["/home"]);
  }
}
