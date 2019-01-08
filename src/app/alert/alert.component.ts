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
    
    this.AlertService.getAlert().subscribe((alert) => {
         console.log("ogOnInit")
        this.isShowMessage = true;
        this.informativeMessage=alert.message;
        console.log("informativeMessage"+this.informativeMessage )

        this.informativeType=alert.type;
        console.log("informativeType"+this.informativeType )

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
