import {AuctionDetailItem, AuctionItem, AuctionPurchaseRequest, AuctionsRequest} from "./type";

async function requestAuctionList(
    data: AuctionsRequest,
    onSuccess: (auctions: AuctionItem[]) => void,
    onFailure: () => void
) {
    try {
        const response = await fetch(`http://localhost:8080/auctions?size=${data.size}&offset=${data.offset}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const auctions: AuctionItem[] = await response.json();
            onSuccess(auctions);
        } else {
            onFailure();
        }
    } catch (error) {
        console.error('Failed to fetch auctions.', error);
        onFailure();
    }
}

async function requestAuctionDetail(
    auctionId: number,
    onSuccess: (auctionDetail: AuctionDetailItem) => void,
    onFailure: () => void
) {
    try {
        const response = await fetch(`http://localhost:8080/auctions/${auctionId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        if (response.ok) {
            const auctionDetail: AuctionDetailItem = await response.json();
            onSuccess(auctionDetail);
        } else {
            onFailure();
        }
    } catch (error) {
        console.error('Failed to fetch auction detail.', error);
        onFailure();
    }
}

async function requestAuctionBid(
    auctionId: number,
    request: AuctionPurchaseRequest,
    onSuccess: () => void,
    onFailure: () => void
) {
    try {
        const response = await fetch(`http://localhost:8080/auctions/${auctionId}/purchase`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                price: request.price,
                quantity: request.quantity,
            }),
        });

        if (response.ok) {
            onSuccess();
        } else {
            onFailure();
        }

    } catch (error) {
        console.error('Failed to bid auction.', error);
        onFailure();
    }
}

export {
    requestAuctionList,
    requestAuctionDetail,
    requestAuctionBid,
};
