import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [MessageService]
})
export class RegistrationComponent {
  email:string =''
  password : string='';
  fname:string='';
  lname:string='';

  register: FormGroup|any;
  myForm: any;
  
  
    constructor(private messageService: MessageService,private router: Router) { }
    ngOnInit(): void {
      this.register = new FormGroup({
      fname : new FormControl(),
      lname : new FormControl(),
       email    : new FormControl(),
       password  :new FormControl(),
       Confirmpassword : new FormControl(),
     });
    }

    showTopCenter() {
      this.messageService.add({ key: 'tc', severity: 'success', summary: 'success', detail: 'Registration Successful' });
  }
registerdata(register:FormGroup){
  console.log(this.register.value);
}

redirectToLoginPage(){
  this.router.navigate(['login']);
}
  // onSubmit() {
  //   if (this.myForm && this.myForm.valid) {
  //     console.log('Form submitted');
  //     this.showTopCenter();
  //     this.router.navigate(['/login']);
  //   }
  //    else {
  //     console.log('Please fill in all required fields.');
      
  //   }
  // }

}
