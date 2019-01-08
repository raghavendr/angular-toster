import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastComponent } from './toaster/toaster.component';
import { ToastService } from './toaster/toaster.services';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    AlertComponent
  ],
  imports: [  BrowserModule  ],
  providers: [ToastService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
