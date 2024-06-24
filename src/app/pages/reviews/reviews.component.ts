import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecurringPaymentService } from '../../Services/recurring-payment.service';
import { AccountService } from '../../Services/accounts.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit, AfterViewInit {
  category: string | null = null;
  biller: string | null = null;
  package: string | null = null;
  smartCardNumber: string = '';
  startDate: Date | null = null;
  email: string = '';
  password: string = '';
  frequency: string = '';
  amount: number | undefined;
  accountBalance: number | undefined;
  data: any;
  
  @ViewChild('successModal') successModal!: TemplateRef<any>;
  @ViewChild('totalDebitValue') totalDebitValueElement!: ElementRef;

  showModal: boolean = false;


  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private recurringPaymentService: RecurringPaymentService,
    private accountService : AccountService
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      category: string;
      biller: string;
      package: string;
      smartCardNumber: string;
      email: string;
      password: string;
      frequency: string;
    };
    if (state) {
      this.category = state.category;
      this.biller = state.biller;
      this.package = state.package;
      this.smartCardNumber = state.smartCardNumber;
      this.email = state.email;
      this.password = state.password;
      this.frequency = state.frequency;
    }
  }

  ngOnInit(): void {
      this.accountService.getAccountBalance().subscribe((response) => {
        this.data = response;
        this.accountBalance = this.data.balance;
        // console.log(this.data.balance);
      });
    this.route.queryParams.subscribe((params) => {
      const startDateParam = params['startDate'];

      if (startDateParam) {
        const parsedDate = new Date(startDateParam);
        if (!isNaN(parsedDate.getTime())) {
          this.startDate = parsedDate;
        } else {
          console.warn('Invalid startDate parameter:', startDateParam);
        }
      } else {
        console.warn('No startDate parameter provided.');
      }
    });
  }

  ngAfterViewInit(): void {
    // Access totalDebitValueElement safely in ngAfterViewInit
    if (this.totalDebitValueElement) {
      const totalDebitText: string =
        this.totalDebitValueElement.nativeElement.innerText.trim();
      const totalDebitValue: number = parseFloat(
        totalDebitText.replace(/[^\d.-]/g, '')
      );
      this.amount = totalDebitValue;
    }
  }

  goBack() {
    this.router.navigate(['/schedule-payment']);
  }

  confirmSchedule(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    const payload = {
      email: this.email,
      amount: this.amount,
      frequency: this.frequency,
      category: this.category,
      biller: this.biller,
      password: this.password,
      // Add other fields as needed
    };

    // Log the payload to verify before sending
    console.log('Sending payload:', payload);

    this.recurringPaymentService.postReviewData(payload).subscribe({
      next: (response) => {
        console.log('Post successful', response);
        this.router.navigate(['/pin-confirmation']);
      },
      error: (error) => {
        console.error('Error occurred:', error);
        // Log specific details from the error object
        if (error && error.message) {
          console.error('Error message:', error.message);
        }
      },
    });

    // this.recurringPaymentService.postReviewData(payload).subscribe(
    //   next:(response) => {
    //     console.log('Post successful', response);
    //     this.router.navigate(['/pin-confirmation']);
    //   },
    //   error:(error) => {
    //     console.error('Error occurred:', error);
    //     // Log specific details from the error object
    //     if (error && error.message) {
    //       console.error('Error message:', error.message);
    //     }
    //   }
    // );
  }
}
