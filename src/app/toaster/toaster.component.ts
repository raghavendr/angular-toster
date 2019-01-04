import {Component, Input} from '@angular/core';

import {Toast, ToastType} from './toast';
import {ToastService} from './toaster.services';


@Component({
    selector: 'app-toast',
    templateUrl: './toaster.component.html',
    styleUrls: ['./toaster.css']
})

export class ToastComponent {
    toasts: Toast[] = [];

    constructor(private toastService: ToastService) {}

    ngOnInit() {
        this.toastService.getToast().subscribe((toast: Toast) => {
            if (!toast.message) {
                this.toasts = [];
                return;
            }
            console.log(toast, this.toasts);
            this.toasts.push(toast);
        });
    }

    removeToast(toast: Toast) {
        this.toasts = this.toasts.filter(x => x !== toast);
    }

    cssClass(toast: Toast) {
        if (!toast) {
            return;
        }

        // return css class based on alert type
        switch (toast.type) {
            case ToastType.Error:
                return 'toast toast-error';
            case ToastType.Info:
                return 'toast toast-info';
            case ToastType.Warning:
                return 'toast toast-warning';
        }
    }
}