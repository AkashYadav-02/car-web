import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RmHomepageComponent } from './rm-homepage/rm-homepage.component';
import { CarSubsComponent } from './car-subs/car-subs.component';
import { HomeCarCollecComponent } from './home-car-collec/home-car-collec.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    RmHomepageComponent,
    CarSubsComponent,
    HomeCarCollecComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
