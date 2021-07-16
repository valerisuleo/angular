export interface ITableFilter {
    isFiltering: boolean;
    keys: string[];
}

export interface ITable {
    dataSource: any;
    hasVirtualScroll: boolean;
    columns: string[];
    tableFilter: ITableFilter;
    label: string;
}