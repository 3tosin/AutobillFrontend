import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AutoBillDashboardComponent } from './pages/auto-bill-dashboard/auto-bill-dashboard.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'dashboard', component: AutoBillDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
