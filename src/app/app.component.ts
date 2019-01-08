import { Component } from '@angular/core';
import { ToastService } from './toaster/toaster.services';
import { AlertService } from './alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Custom Toaster';

  constructor(private toastService: ToastService, private AlertService: AlertService){}

  /* createToaster(message: string, type: string) {
    this.toastService.createToast(message, type);
  } */

  createAlert(message: string) {
    this.AlertService.warning(message);
  }
}
