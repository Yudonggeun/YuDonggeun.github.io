import {usePageStore} from "../store/PageStore";

function LoginPage() {
    const { currentPage, setPage } = usePageStore();

    const changePage = (page: string) => {
        setPage(page);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-50">
            <div className="w-full max-w-xs">
                <div className="card bg-base-100 shadow-xl border border-gray-300">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center mb-4 text-[#62CBC6]">로그인</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    사용자 이름
                                </label>
                                <input
                                    className="input input-bordered w-full"
                                    id="username"
                                    type="text"
                                    placeholder="사용자 이름을 입력하세요"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    비밀번호
                                </label>
                                <input
                                    className="input input-bordered w-full"
                                    id="password"
                                    type="password"
                                    placeholder="비밀번호를 입력하세요"
                                />
                            </div>
                            <div className="mb-2 flex items-center justify-between">
                                <button
                                    className="btn btn-primary w-full bg-[#62CBC6] border-none hover:bg-[#4FA6A3]"
                                    type="button">
                                    로그인
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="btn btn-primary w-full bg-[#62CBC6] border-none hover:bg-[#4FA6A3]"
                                    type="button" onClick={() => changePage('signup')}>
                                    회원가입
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;