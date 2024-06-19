import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  category: string | null = null;
  biller: string | null = null;
  package: string | null = null;
  smartCardNumber: string = '';

  constructor(private location: Location, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      category: string;
      biller: string;
      package: string;
      smartCardNumber: string;
    };
    if (state) {
      this.category = state.category;
      this.biller = state.biller;
      this.package = state.package;
      this.smartCardNumber = state.smartCardNumber;
    }
  }

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }

  confirmSchedule() {
    this.router.navigate(['/pin-confirmation']);
  }
}
