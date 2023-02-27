export interface IAlert {
    className: string;
    heading: string;
    body: string;
    footer?: string;
    buttons: IBtn[];
}

export interface IBtn {
    isVisible: boolean;
    className: string;
    label: string;
    method?: any;
}

