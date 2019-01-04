export class Toast {
    type: ToastType;
    message: string;
    constructor(init?: Partial<Toast>) {
        Object.assign(this, init);
    }
}

export enum ToastType {
    Error,
    Info,
    Warning
}