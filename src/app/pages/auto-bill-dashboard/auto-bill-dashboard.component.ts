import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-auto-bill-dashboard',
  templateUrl: './auto-bill-dashboard.component.html',
  styleUrl: './auto-bill-dashboard.component.css',
})
export class AutoBillDashboardComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
