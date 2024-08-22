import {ReceiptSimpleItem, ReceiptsRequest} from "./type";

async function requestReceiptList(
    data: ReceiptsRequest,
    sessionId: string,
    onSuccess: (receipts: ReceiptSimpleItem[]) => void,
    onFailure: () => void
) {
    try {
        const response = await fetch('http://localhost:8080/receipts/buyer', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Cookie': `JSESSIONID=${sessionId}`,
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
