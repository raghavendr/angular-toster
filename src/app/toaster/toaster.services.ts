import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import {Toast, ToastType} from './toast';

@Injectable()
export class ToastService {
    private subject = new Subject<Toast>();


    getToast(): Observable<any> {
        return this.subject.asObservable().filter((i: Toast) => i);
    }

    toast(toast: Toast) {
        this.subject.next(toast);
    }

    createToast(message: string, type: string) {
        this.toast(new Toast({message, type: ToastType[type]}));
    }

    clearToast() {
        this.subject.next(new Toast({ }));
    }

}
