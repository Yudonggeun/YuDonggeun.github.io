interface ReceiptsRequest {
    size: number;
    offset: number;
}

interface ReceiptSimpleItem {
    id: number;
    auctionId: number;
    type: 'PURCHASED' | 'REFUND';
    productName: string;
    quantity: number;
    price: number;
}

export type { ReceiptsRequest, ReceiptSimpleItem };
