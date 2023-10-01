import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  constructor(private messageService: MessageService){}
  title = 'car-portal';

  showToast(){
    this.messageService.add({  key: 'bc',severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }
}