import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:FormGroup|any;

  constructor(){}
  ngOnInit(): void {
    this.login = new FormGroup({
      email :new FormControl(),
      password : new FormControl()

    })
   }

logindata(Login:FormGroup) {
console.log(this.login.value);
}
}


  // onSubmit() {
    // if (this.myForm && this.myForm.valid) {
    //   console.log('Form submitted');
    //   this.showSuccessToast();
    //   this.router.navigate(['/login']);
    // }
    //  else {
    //   console.log('Please fill in all required fields.');
      
   



