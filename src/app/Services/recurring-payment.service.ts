import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecurringPaymentService {
  private apiUrl = 'https://autobillbackend-o69q.onrender.com/api';
  private endpoint =
    'https://autobillbackend-o69q.onrender.com/api/recurringPayments';

  constructor(private http: HttpClient) {}
  postReviewData(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add other headers if needed
    });

    return this.http
      .post(this.endpoint, payload, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  getRecurringPayments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/recurring-payments`);
  }

  getPaymentDetails(paymentId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/recurring-payments/${paymentId}`);
  }

  cancelPayment(paymentId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/recurring-payments/${paymentId}`);
  }
}

