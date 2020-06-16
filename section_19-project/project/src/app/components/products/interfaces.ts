export interface IProduct {
    title: string;
    imageUrl: string;
    price: number;
    categories?: string[];
    category: string;
    id: string;
    count: number;
    isOpen: boolean;
}

export interface ICategory {
    categoryName: string;
    isActive: boolean;
}

export interface IListGroup {
    list: any[];
    key: string;
}