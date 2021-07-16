export interface ITodo {
    completed: boolean
    id: number;
    title: string;
    userId: number;
}

export interface ICell{
    value: string;
    isValueShow: boolean;
    className: string;
    icon: string;
    isIconShow: boolean;
}