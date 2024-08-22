import {ReceiptSimpleItem, ReceiptsRequest} from "./type";

async function requestReceiptList(
    data: ReceiptsRequest,
    onSuccess: (receipts: ReceiptSimpleItem[]) => void,
    onFailure: () => void
) {
    try {
        console.log('Fetching receipts...', data);
        const response = await fetch(`http://localhost:8080/receipts/buyer?offset=${data.offset}&size=${data.size}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });

        if (response.ok) {
            const receipts: ReceiptSimpleItem[] = await response.json();
            onSuccess(receipts);
        } else {
            console.log('Failed to fetch receipts.', response.status);
            onFailure();
        }
    } catch (error) {
        console.log('Failed to fetch receipts.', error);
        onFailure();
    }
}

export {requestReceiptList};
