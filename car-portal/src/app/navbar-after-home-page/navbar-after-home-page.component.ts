import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-navbar-after-home-page',
  templateUrl: './navbar-after-home-page.component.html',
  styleUrls: ['./navbar-after-home-page.component.scss']
})
export class NavbarAfterHomePageComponent {
  isExpand=false;

  constructor(private router:Router,
    private fb: FormBuilder,
    private redirectMenu : RedirectMenuService,
     ) {}

  expandSideBar(){

    if (this.isExpand){

      this.isExpand=false

    }else{

      this.isExpand=true

    }
    console.log(this.isExpand);

   

  }

  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }

}
