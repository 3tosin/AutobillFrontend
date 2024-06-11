import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { RouteReuseStrategy } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AutoBillDashboardComponent } from './pages/auto-bill-dashboard/auto-bill-dashboard.component'; // Import AutoBillDashboardComponent

@NgModule({
  declarations: [
    HomeComponent,
    AutoBillDashboardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // SplashScreen,
    // StatusBar,
  ],
  // Don't include AppComponent in the bootstrap array
})
export class AppModule {
  constructor() {
    // Call the bootstrapApplication function to bootstrap the AppComponent
    bootstrapApplication(AppComponent);
  }
}
