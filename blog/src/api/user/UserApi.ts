
// API 호출 함수 정의
import SignUpRequest from "./type";

async function signUpApi(
    data: SignUpRequest,
    onSuccess: () => void,
    onFailure: () => void
) {
    try {
        const response = await fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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

export default signUpApi;