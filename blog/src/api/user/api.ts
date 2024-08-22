import {SignInRequest, SignUpRequest} from "./type";

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

async function signInApi(
    data: SignInRequest,
    onSuccess: (sessionId: string) => void,
    onFailure: () => void
) {
    try {
        const response = await fetch('http://localhost:8080/auth/signin', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {

            // print reponse headers keys and values
            response.headers.forEach((value, key) => {
                console.log(key, value);
            });

            const cookies = response.headers.get('set-cookie');
            console.log(cookies);

            // cookies?.forEach((cookie) => {
            //     const [key, value] = cookie.split('=');
            //     console.log(key, value);
            //     if (key === 'JSESSIONID') {
            //         const sessionId = value;
            //         onSuccess(sessionId);
            //     }
            // });
        } else {
            onFailure();
        }
    } catch (error) {
        console.error(error);
        onFailure();
    }
}

export {signUpApi, signInApi};
