import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  description: string;
  date: string;
  from: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl =
    'https://autobillbackend-o69q.onrender.com/api/recurringPayments';
  private email = 'mailteedee@gmail.com';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = `${this.apiUrl}?email=${this.email}`;
    return this.http.get<Transaction[]>(url, { headers });
  }
}
