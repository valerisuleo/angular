export interface IProduct {
    title: string;
    imageUrl: string;
    price: number;
    categories: string[];
    category: string;
    id: string;
    count: number;
    isOpen: boolean;
}

export interface ICategory {
    categoryName: string;
    isActive: boolean;
    id: string;
    cssClass?: string;
}

export interface IListGroup {
    list: any[];
    key: string;
}