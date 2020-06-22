export interface IProduct {
    title: string;
    imageUrl: string;
    price: number;
    categories: ICategory[];
    category: string;
    id: string;
    count: number;
    isOpen: boolean;
    seqN: number;
}

export interface ICategoryMenu {
    categoryName: string;
    isActive: boolean;
    id: string;
    cssClass?: string;
}

export interface IListGroup {
    list: any[];
    key: string;
}

export interface ICategory {
    name: string;
    id: number;
}