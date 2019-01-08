import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { Alert, AlertType } from './alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
  alert= [];
  id: string;
  informativeType: string;
  informativeMessage: string;
  labelClass: string;
  isShowMessage = false;
  informativeMessages = AlertType;

  constructor(private AlertService: AlertService){

  }

  ngOnInit(): void {
    
    this.AlertService.subject.subscribe((alert) => {
        
        this.isShowMessage = true;
        this.informativeMessage=alert.message;

        this.informativeType=alert.type;

        this.labelClass = 'c-pageerrors__title c-pageerrors__title--information';
        if (this.informativeType === this.informativeMessages.Warning ) {
          this.labelClass = 'c-pageerrors__title c-pageerrors__title--warning';
        }
    });

    
     
   
  }
  // emit button click event to parent component
  handleCancelButtonClick(): void {
    this.isShowMessage = false;
  }
}
