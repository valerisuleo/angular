export interface IProduct {
    title: string;
    imageUrl: string;
    price: number;
    categories?: string[];
    category: string;
    id?: string;
}