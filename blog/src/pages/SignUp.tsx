import {useState} from 'react';
import {signUpApi} from "../api/user/api";
import {SignUpRequest} from "../api/user/type";

function SignUpPage() {

    const [request, setRequest] = useState<SignUpRequest>({
        signUpId: '',
        password: '',
        userRole: 'BUYER',
    });

    const handleUserTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequest({...request, userRole: e.target.value,});
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequest({...request, signUpId: e.target.value,});
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequest({...request, password: e.target.value,});
    };

    const requestSignUp = () => {
        signUpApi(request,
            () => {
                alert("회원가입에 성공했습니다.");
            },
            () => {
                alert("회원가입에 실패했습니다.");
            }
        );
    }

    return (
        <div className="bg-slate-50">
            <div className="container mx-auto px-4 py-8 max-w-lg">
                <h1 className="text-3xl font-bold text-center mb-6 text-[#62CBC6]">회원가입</h1>

                <form className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">사용자 유형</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="BUYER"
                                    className="radio radio-primary"
                                    checked={request.userRole === 'BUYER'}
                                    onChange={handleUserTypeChange}
                                />
                                <span className="ml-2 text-gray-700">구매자</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="SELLER"
                                    className="radio radio-primary"
                                    checked={request.userRole === 'SELLER'}
                                    onChange={handleUserTypeChange}
                                />
                                <span className="ml-2 text-gray-700">판매자</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">이름</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="input input-bordered w-full"
                            placeholder="이름을 입력하세요"
                            value={request.signUpId}
                            onChange={handleNameChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="input input-bordered w-full"
                            placeholder="비밀번호를 입력하세요"
                            value={request.password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            className="btn btn-primary w-full bg-[#62CBC6]"
                            type="button"
                            onClick={requestSignUp}
                        >회원가입
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;