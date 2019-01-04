import { Component } from '@angular/core';
import { ToastService } from './toaster/toaster.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Custom Toaster';

  constructor(private toastService: ToastService){}

  createToaster(message: string, type: string) {
    this.toastService.createToast(message, type);
  }
}
