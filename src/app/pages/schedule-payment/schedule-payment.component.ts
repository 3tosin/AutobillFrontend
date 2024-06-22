import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NavController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-schedule-payment',
  templateUrl: './schedule-payment.component.html',
  styleUrls: ['./schedule-payment.component.scss'],
})
export class SchedulePaymentComponent implements OnInit {
  startDate: Date;
  selectedPeriod: string;
  reminderPeriod: string;
  cdr: any;

  constructor(private router: Router) {
    this.startDate = new Date();

    this.selectedPeriod = '';
    this.reminderPeriod = '';
  }

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }

  remindPeriod(reminder: string) {
    this.reminderPeriod = reminder;
  }

  isEndDateToggled: boolean = false;
  isGetNotifiedToggled: boolean = false;

  toggleEndDate() {
    this.isEndDateToggled = !this.isEndDateToggled;
  }

  toggleGetNotified() {
    this.isGetNotifiedToggled = !this.isGetNotifiedToggled;
    this.cdr.detectChanges();
  }

  selectedMethod: string = 'Email/SMS';

  methods: string[] = ['Email/SMS', 'Email', 'SMS'];

  changeMethod(method: string) {
    this.selectedMethod = method;
  }

  selectedReminderTime: number = 2;
  reminderTimes: number[] = [2, 4, 6, 8, 10];

  selectReminderTime(time: number) {
    this.selectedReminderTime = time;
  }

  allChoicesSelected(): boolean {
    return (
      this.isGetNotifiedToggled &&
      !!this.selectedMethod &&
      !!this.startDate &&
      !!this.selectedPeriod
    );
  }

  onSubmit() {
    console.log('Start Date:', this.startDate);
    console.log('Is Get Notified Toggled:', this.isGetNotifiedToggled);
    console.log('Selected Method:', this.selectedMethod);
    console.log('Selected Period:', this.selectedPeriod);

    if (this.allChoicesSelected()) {
      const parsedStartDate = new Date(this.startDate);

      if (
        parsedStartDate instanceof Date &&
        !isNaN(parsedStartDate.getTime())
      ) {
        console.log(
          'Navigating to pin-confirmation with start date:',
          parsedStartDate.toISOString()
        );
        this.router.navigate(['/reviews'], {
          queryParams: { startDate: parsedStartDate.toISOString() },
        });
      } else {
        console.error('startDate is not a valid Date object:', this.startDate);
      }
    } else {
      console.log('Please select all required fields before proceeding.');
    }
  }

  goBack() {
    this.router.navigate(['billpayment']);
  }
  ngOnInit() {}
}
