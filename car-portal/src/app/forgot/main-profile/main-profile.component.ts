import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {FormGroup,FormControl,Validators} from '@angular/forms'
// import { from } from 'rxjs';
@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss']
})
export class MainProfileComponent {
  constructor(private router: Router){}
  navigateToProfile() {
    this.router.navigate(['/main-profile']);
  }
  
  navigateToAccountSettings() {
    this.router.navigate(['/profile-settings']);
  }
  navigateToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  loginUser(){
    alert("logged in")
  }
  
  
  // loginForm = new FormGroup({
  //   user:new FormControl('',[Validators.required]),
  //   email: new FormControl('',[Validators.required]),
  //   password: new FormControl('',[Validators.required]),
  //   address: new FormControl('',[Validators.required])
  // })

}
