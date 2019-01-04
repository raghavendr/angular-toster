import {Component, Input} from '@angular/core';

import {Toast, ToastType} from './toast';
import {ToastService} from './toaster.services';


@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html'
})

export class ToastComponent {
    toasts: Toast[] = [];

    constructor(private toastService: ToastService) {}

    OnInit() {
        this.toastService.getToast().subscribe((toast: Toast) => {
            if (!toast.message) {
                this.toasts = [];
                return;
            }

            this.toasts.push(toast);
        });
    }

    removeAlert(toast: Toast) {
        this.toasts = this.toasts.filter(x => x !== toast);
    }

    cssClass(toast: Toast) {
        if (!toast) {
            return;
        }

        // return css class based on alert type
        switch (toast.type) {
            case ToastType.Error:
                return 'alert alert-danger';
            case ToastType.Info:
                return 'alert alert-info';
            case ToastType.Warning:
                return 'alert alert-warning';
        }
    }
}