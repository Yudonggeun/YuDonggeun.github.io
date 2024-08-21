import {ChargePointsRequest} from "./type";

async function chargePointsApi(
    data: ChargePointsRequest,
    sessionId: string,
    onSuccess: () => void,
    onFailure: () => void
) {
    try {
        const response = await fetch('http://localhost:8080/payments/points/charge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'Cookie': `JSESSIONID=${sessionId}`,
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            onSuccess();
        } else {
            onFailure();
        }
    } catch (error) {
        onFailure();
    }
}

export {chargePointsApi};
