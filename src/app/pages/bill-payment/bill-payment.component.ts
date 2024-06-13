import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css'],
})
export class BillPaymentComponent {
  selectedPeriod: string = ''; 
  startDate: string = ''; 

  selectedCategory: string | null = null;
  selectedBiller: string | null = null;
  selectedPackage: string | null = null;
  smartCardNumber: string = '';
  categories = ['Cable TV', 'Electricity and Water'];
  billers: { [key: string]: string[] } = {
    'Cable TV': ['DSTV'],
    'Electricity and Water': ['IKEDC'],
  };
  packages: { [key: string]: string[] } = {
    DSTV: ['DSTV Premium - ₦37,000'],
  };
  

  constructor(private location: Location, private router: Router) {}

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
    this.selectedBiller = null;
    this.selectedPackage = null;
  }

  onBillerChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedBiller = target.value;
    this.selectedPackage = null;
  }

  onPackageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedPackage = target.value;
  }

  onSmartCardNumberChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.smartCardNumber = target.value;
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    this.router.navigate(['/reviews'], {
      state: {
        category: this.selectedCategory,
        biller: this.selectedBiller,
        package: this.selectedPackage,
        smartCardNumber: this.smartCardNumber,
      },
    });
  }

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }


}
