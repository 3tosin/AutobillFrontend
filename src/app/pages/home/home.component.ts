import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/accounts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  accountBalance: number | undefined;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService
      .getAccountBalance()
      .subscribe((balance: number | undefined) => {
        // this.accountBalance = balance;
        if (balance) {
          this.accountBalance = balance;
        } else {
          console.error('Error fetching balance');
        }
      });
  }
}
