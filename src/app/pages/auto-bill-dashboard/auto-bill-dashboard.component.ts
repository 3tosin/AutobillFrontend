import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-auto-bill-dashboard',
  templateUrl: './auto-bill-dashboard.component.html',
  styleUrls: ['./auto-bill-dashboard.component.scss'],
})
export class AutoBillDashboardComponent  implements OnInit {
addNewBill() {
throw new Error('Method not implemented.');
}

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    // Initialize data or perform any necessary tasks here
  }

}
