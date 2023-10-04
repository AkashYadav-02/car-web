import { Component, ViewChild } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [MessageService]
})
export class RegistrationComponent {
  email:string =''

  fname:string = ''

  lname: string='';

  password : string='';

  confirmPassword : string='';

  register:FormGroup|any;

  constructor(private router:Router,private fb: FormBuilder,
    private redirectMenu : RedirectMenuService,
    ) {}



  ngOnInit(): void {



    this.register = this.fb.group({

      fname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],

    lname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],

        email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required]],

      confirmPassword: ['', [Validators.required]],

    termsAndConditions: [false, Validators.requiredTrue],

})



   }



   registerdata(){

    console.log(this.register.value);

  }

  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }



redirectToForgotPassPage(){

  this.router.navigate(['forgot']);

}





onSubmit() {

  if (this.register && this.register.valid) {

    console.log('Form submitted');

    this.registerdata();

  }

   else {

    console.log('Please fill in all required fields.');

  }



}



}




   


