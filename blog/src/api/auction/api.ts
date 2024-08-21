import {AuctionItem, AuctionsRequest} from "./type";

async function requestAuctionList(
    data: AuctionsRequest,
    onSuccess: (auctions: AuctionItem[]) => void,
    onFailure: () => void
) {
    try {
        const response = await fetch('http://localhost:8080/auctions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const auctions: AuctionItem[] = await response.json();
            onSuccess(auctions);
        } else {
            onFailure();
        }
    } catch (error) {
        onFailure();
    }
}

export {requestAuctionList};
