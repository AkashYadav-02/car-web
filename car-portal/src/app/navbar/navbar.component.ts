import { Component } from '@angular/core';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private redirectService: RedirectMenuService
    ){

  }

  redirect(path : string){
    this.redirectService.redirectTo(path);
  }

}
