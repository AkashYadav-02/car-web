import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ ButtonModule} from 'primeng/button';
import { NewpassComponent } from './newpass/newpass.component';
import { ForgotComponent } from './forgot/forgot.component'
// import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    NewpassComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextareaModule,
    ReactiveFormsModule,
    NgbModule,
    ToastModule,
    DividerModule,
    RouterModule,  
    BrowserAnimationsModule ,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
