import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  category: string | null = null;
  biller: string | null = null;
  package: string | null = null;
  smartCardNumber: string = '';
  Price: string | null = null;
  startDate: Date | null = null;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      category: string;
      biller: string;
      package: string;
      smartCardNumber: string;
      Price: string;
    };
    if (state) {
      this.category = state.category;
      this.biller = state.biller;
      this.package = state.package;
      this.smartCardNumber = state.smartCardNumber;
      this.Price = state.Price;
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const startDateParam = params['startDate'];

      if (startDateParam) {
        const parsedDate = new Date(startDateParam);
        if (!isNaN(parsedDate.getTime())) {
          this.startDate = parsedDate; // Assign parsed date if valid
        } else {
          console.warn('Invalid startDate parameter:', startDateParam);
          // Handle invalid date parameter (optional)
        }
      } else {
        console.warn('No startDate parameter provided.');
        // Handle case where startDate parameter is missing (optional)
      }
    });
  }

  goBack() {
    this.router.navigate(['/schedule-payment']);
  }

  @ViewChild('successModal') successModal!: TemplateRef<any>;
  showModal: boolean = false;

  confirmSchedule(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.router.navigate(['/schedule-payment']);
  }
  onSubmit(): void {
    this.router.navigate(['/pin-confirmation']);
  }
}
