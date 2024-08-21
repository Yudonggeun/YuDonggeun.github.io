interface AuctionsRequest {
    offset: number;
    size: number;
}

interface AuctionItem {
    id: number;
    title: string;
    price: number;
    startedAt: string;
    finishedAt: string;
}


export type { AuctionsRequest, AuctionItem };
