import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoBillDashboardComponent } from './auto-bill-dashboard.component';

describe('AutoBillDashboardComponent', () => {
  let component: AutoBillDashboardComponent;
  let fixture: ComponentFixture<AutoBillDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoBillDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoBillDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
