import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple'
import { RmHomepageComponent } from './rm-homepage/rm-homepage.component';
import { CarSubsComponent } from './car-subs/car-subs.component';
import { HomeCarCollecComponent } from './home-screen/home-car-collec/home-car-collec.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TimelineModule } from 'primeng/timeline';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RmCarCollecComponent } from './rm-homepage/rm-car-collec/rm-car-collec.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HomeupperpageComponent } from './rm-homepage/homeupperpage/homeupperpage.component';
import { AfternavbarComponent } from './afternavbar/afternavbar.component';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    
    CarSubsComponent,
    HomeCarCollecComponent,
    RmHomepageComponent,
    CarSubsComponent,
    HomeCarCollecComponent,
    HomeScreenComponent,
    NavbarComponent,
    LoginComponent,
    RmCarCollecComponent,
    DashboardComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
