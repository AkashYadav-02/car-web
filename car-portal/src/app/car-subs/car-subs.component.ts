import { Component } from '@angular/core';

@Component({
  selector: 'app-car-subs',
  templateUrl: './car-subs.component.html',
  styleUrls: ['./car-subs.component.scss']
})
export class CarSubsComponent {
  isUpperVisible=true
  isLowerVisible=false
  onClick(){
    if (this.isUpperVisible){
      this.isUpperVisible=false
    }else{
      this.isUpperVisible=true
    }
  }

  onPress(){
    if (this.isLowerVisible){
      this.isLowerVisible=false
    }else{
      this.isLowerVisible=true
    }
  }

}
