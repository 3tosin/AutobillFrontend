// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AccountService {
//   private apiUrl = 'https://your-api-url.com/account-balance';

//   constructor(private http: HttpClient) {}

//   getAccountBalance(): Observable<number> {
//     // If you're returning a static number, use 'of' to create an observable from the number.
//     return of(80000);

//     // If you want to use the HTTP client to fetch the data, uncomment the following line:
//     // return this.http.get<number>(this.apiUrl);
//   }
// }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'https://autobillbackend-o69q.onrender.com/api/';
  
 constructor(private http: HttpClient) { }

  getAccountBalance(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/accounts/1`);
  }

}
