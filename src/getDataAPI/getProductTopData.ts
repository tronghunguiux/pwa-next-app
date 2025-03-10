import dataFetch from "../JSON/products_exhaust.json";

interface DataFetchProducts {
    id: number;
    title?: string;
    imageUrl?: string;
    brand?: string;
    get_point?:string;
    price_old?:string;
    sale_off?:string;
    prices?:string;
    // tags?:string[];
}

export const fetchProducts = async (): Promise<DataFetchProducts[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataFetch);
        }, 500);
    });
};
