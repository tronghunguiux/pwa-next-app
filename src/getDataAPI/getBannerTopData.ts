import dataFetchBanner from "@/JSON/banner_top.json";

interface DataFetchBanner {
    id: number;
    title: string;
    imageUrl: string;
}

export const fetchBanners = async (): Promise<DataFetchBanner[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataFetchBanner);
        }, 500); // Giả lập thời gian fetch
    });
};
