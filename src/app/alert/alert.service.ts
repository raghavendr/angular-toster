import {Injectable} from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import {Observable, Subject} from 'rxjs';

// import 'rxjs/add/operator/filter';
import { Alert, AlertType } from './alert.model';




@Injectable()
export class AlertService {

    public subject = new Subject<Alert>();
    // private keepAfterRouteChange = false;
    
   

     // subscribe to Alert messages
     getAlert(AlertId?: string): Observable<any> {
        // return this.subject.asObservable().filter((x: Alert) => x && x.AlertId === AlertId);
        return this.subject.asObservable();
    }
  
    success(message: string, keepAfterRouteChange = false) {
        this.alert(new Alert({ message, type: AlertType.Success }));
    } 

    information(message: string) {
        this.alert(new Alert({ message, type: AlertType.Information }));
    }

    warning(message: string) {
        this.alert(new Alert({ message, type: AlertType.Warning }));
    }

    // main Alert method    
    alert(alert: Alert) {
        // this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    }

    // clear Alert messages
    clear(AlertId?: string) {
        this.subject.next(new Alert({AlertId}));
    }

}