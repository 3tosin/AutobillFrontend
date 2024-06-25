import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AccountService } from '../../Services/accounts.service';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css'],
})
export class BillPaymentComponent {
  selectedPeriod: string = '';
  startDate: string = '';
  accountBalance: number | undefined;
  data: any;

  selectedCategory: string | null = null;
  selectedBiller: string | null = null;
  selectedPackage: string | null = null;
  selectedPrice: string | null = null;
  smartCardNumber: string = '';
  smartCardNumberError: boolean = false;

  categories = [
    'Cable TV',
    'Electricity and Water',
    'Capital Markets & Investments',
    'Education',
    'Government Taxes and Levies',
    'Insurance & HMO',
    'Internet Subscription',
    'Travel & Logistics',
    'Utilities',
  ];
  billers: { [key: string]: string[] } = {
    'Cable TV': ['DSTV', 'Netflix', 'Prime Video', 'Showmax'],
    'Electricity and Water': ['IKEDC'],
  };
  packages: { [key: string]: string[] } = {
    DSTV: [
      'DSTV Premium - ₦37,000',
      'DSTV Compact Plus',
      'DSTV Confam',
      'DSTV Yanga',
    ],
  };
  price: { [key: string]: string[] } = {
    DSTV: ['₦37,000', '₦25,000', '₦15,700', '₦9,700'],
  };

  constructor(
    private location: Location,
    private router: Router,
    private accountService: AccountService
  ) {}

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
    this.selectedBiller = null;
    this.selectedPackage = null;
    this.selectedPrice = null;
  }

  onBillerChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedBiller = target.value;
    this.selectedPackage = null;
    this.selectedPrice = null;
  }

  onPackageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedPackage = target.value;
    this.selectedPrice = null;
  }
  onPriceChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedPrice = target.value;
  }
  onSmartCardNumberChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    let value = target.value;

    value = value.replace(/\D/g, '').slice(0, 10);
    target.value = value;

    this.smartCardNumber = value;
    this.smartCardNumberError = value.length !== 10;
  }

  allChoicesSelected(): boolean {
    return (
      !!this.selectedCategory &&
      !!this.selectedBiller &&
      !!this.smartCardNumber &&
      !!this.selectedPackage
      // !!this.selectedPeriod
    );
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  onSubmit() {
    const state = {
      category: this.selectedCategory,
      biller: this.selectedBiller,
      package: this.selectedPackage,
      smartCardNumber: this.smartCardNumber,
      price:
        this.packages[this.selectedBiller!].find(
          (pkg) => pkg === this.selectedPackage
        ) || '',
    };
    this.router.navigate(['/schedule-payment'], { state });
  }

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }
  ngOnInit(): void {
    this.accountService.getAccountBalance().subscribe((response) => {
      this.data = response;
      this.accountBalance = this.data.balance;
      // console.log(this.data.balance);
    });
  }
}
