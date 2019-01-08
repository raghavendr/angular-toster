export class Alert {
    type: AlertType;
    message: string;
    AlertId: string;
    keepAfterRouteChange: boolean;
    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Warning= 'Warning',
    Success= 'Success',
    Information= 'Information',
}