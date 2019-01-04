import {Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Toast, ToastType} from './toast';

@Injectable()
export class ToastService {
    private subject = new Subject<Toast>();


    getToast(): Observable<any> {
        console.log(this.subject.asObservable());
        return this.subject.asObservable();
    }

    toast(toast: Toast) {        
        this.subject.next(toast);
    }

    createToast(message: string, type: string) {
        this.clearToast();
        this.toast(new Toast({message, type: ToastType[type]}));
    }

    clearToast() {
        this.subject.next(new Toast({ }));
    }

}
