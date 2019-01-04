import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastComponent } from './toaster/toaster.component';
import { ToastService } from './toaster/toaster.services';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  imports: [
  
  BrowserModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
