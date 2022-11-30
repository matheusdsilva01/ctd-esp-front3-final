export type Comic = {
    id: string;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    }
    price: number;
    stock: number;
}