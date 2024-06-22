import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pin-confirmation',
  templateUrl: './pin-confirmation.component.html',
  styleUrl: './pin-confirmation.component.css',
})
export class PinConfirmationComponent {
  pin: (number | null)[] = [null, null, null, null, null, null];
  currentIndex: number = 0;

  constructor(
    private router: Router,
    private location: Location
  ) {}
  goBack() {
    this.router.navigate(['/reviews']);
  }

  enterDigit(digit: number) {
    if (this.currentIndex < 6) {
      this.pin[this.currentIndex] = digit;
      this.currentIndex++;
    }
    if (this.currentIndex === 6) {
      this.confirmPin();
    }
  }

  confirmPin() {
    const pinCode = this.pin.join('');
    if (pinCode.length === 6 && !pinCode.includes('null')) {
      this.router.navigate(['/home'], {
        queryParams: { pin: pinCode },
      });
    } else {
      alert('Please enter a 6-digit PIN.');
    }
  }
}
