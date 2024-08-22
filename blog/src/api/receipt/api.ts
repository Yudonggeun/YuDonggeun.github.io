import {ReceiptSimpleItem, ReceiptsRequest} from "./type";

async function requestReceiptList(
    data: ReceiptsRequest,
    onSuccess: (receipts: ReceiptSimpleItem[]) => void,
    onFailure: () => void
) {
    try {
        const response = await fetch('http://localhost:8080/receipts/buyer', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const receipts: ReceiptSimpleItem[] = await response.json();
            onSuccess(receipts);
        } else {
            onFailure();
        }
    } catch (error) {
        onFailure();
    }
}

export {requestReceiptList};
