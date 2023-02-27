export interface ITableFilter {
    isFiltering: boolean;
    keys: string[];
}

export interface ICell{
    value: string;
    isValueShow: boolean;
    icon: string;
    isIconShow: boolean;
    className: string;
}

export interface IBadgeClass {
    name: string;
    className: string;
}