import { Component } from '@angular/core';

@Component({
  selector: 'app-pin-confirmation',
  templateUrl: './pin-confirmation.component.html',
  styleUrl: './pin-confirmation.component.css'
})
export class PinConfirmationComponent {
 pin = '';

  handleInput(value: string) {
    this.pin += value;
  }

  // Submit the PIN for validation (not implemented in this example)
  submitPIN() {
    console.log('PIN:', this.pin);
  }
}
