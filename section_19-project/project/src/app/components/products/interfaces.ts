export interface IProduct {
    title: string;
    imageUrl: string;
    price: number;
    categories?: string[];
    category: string;
    id?: string;
}

export interface ICategory {
    categoryName: string;
    isSelected: boolean;
}

export interface IListGroup {
    list: any[];
    key: string;
}