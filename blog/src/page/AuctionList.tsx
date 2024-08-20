function AuctionList() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
                <div className="navbar bg-base-100 p-4 relative">
                    <div className="navbar-start absolute left-4">
                        <button className="btn btn-ghost btn-square text-[#62CBC6]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="navbar-center w-full flex justify-center">
                        <span className="text-lg font-bold">Lucky Vicky</span>
                    </div>
                </div>

                <div className="flex justify-center gap-2 p-4">
                    <button className="btn btn-sm btn-outline text-[#62CBC6] border-[#62CBC6]">
                        전체
                    </button>
                    <button className="btn btn-sm btn-outline text-[#62CBC6] border-[#62CBC6]">
                        종료 임박
                    </button>
                    <button className="btn btn-sm btn-outline text-[#62CBC6] border-[#62CBC6]">
                        최근 추가
                    </button>
                    <button className="btn btn-sm btn-outline text-[#62CBC6] border-[#62CBC6]">
                        즉시 구매
                    </button>
                </div>

                <div className="p-4">
                    <div className="grid grid-cols-1 gap-[10px]">

                        <div className="card bg-base-100 shadow-xl border border-gray-300">
                            <div className="card-body">
                                <h2 className="card-title text-base">롤렉스 서브마리너</h2>
                            </div>
                            <figure className="aspect-square">
                                <img
                                    src="https://cdn.usegalileo.ai/stability/61d9ba43-1402-4c08-acd8-5b4d04828fb2.png"
                                    alt="Rolex Submariner"
                                />
                            </figure>
                            <div className="card-body">
                                <p className="text-sm text-[#62CBC6]">시작 시간: 2000년 10월 8일 13시 30분</p>
                                <p className="text-sm text-[#62CBC6]">종료 시간: 2000년 10월 8일 13시 30분</p>
                                <p className="text-sm text-[#62CBC6]">현재가: ₩10,000,000</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl border border-gray-300">
                            <div className="card-body">
                                <h2 className="card-title text-base">롤렉스 서브마리너</h2>
                            </div>
                            <figure className="aspect-square">
                                <img
                                    src="https://cdn.usegalileo.ai/stability/61d9ba43-1402-4c08-acd8-5b4d04828fb2.png"
                                    alt="Rolex Submariner"
                                />
                            </figure>
                            <div className="card-body">
                                <p className="text-sm text-[#62CBC6]">시작 시간: 2000년 10월 8일 13시 30분</p>
                                <p className="text-sm text-[#62CBC6]">종료 시간: 2000년 10월 8일 13시 30분</p>
                                <p className="text-sm text-[#62CBC6]">현재가: ₩10,000,000</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="btm-nav">
                <a href="#" className="text-[#62CBC6]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 3L4 9v12h5v-7h6v7h5V9l-8-6zM12 0L0 9h4v15h8v-7h2v7h8V9h4L12 0z"
                        />
                    </svg>
                    <span className="btm-nav-label">경매</span>
                </a>
                <a href="#" className="text-[#62CBC6] active">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M21.71 20.29L16.9 15.5A8.48 8.48 0 0018 10.5 8.5 8.5 0 109.5 19a8.48 8.48 0 005-.6l4.79 4.79a1 1 0 001.42-1.42zM10.5 17A6.5 6.5 0 1117 10.5 6.51 6.51 0 0110.5 17z"
                        />
                    </svg>
                    <span className="btm-nav-label">포인트 충전</span>
                </a>
            
                <a href="#" className="text-[#62CBC6]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 3L2 9v12h20V9l-10-6zm0 2.18L19 9l-7 4.09L5 9l7-3.82zM4 20V9.36l8 4.64 8-4.64V20H4z"
                        />
                    </svg>
                    <span className="btm-nav-label">구매 내역</span>
                </a>

                <a href="#" className="text-[#62CBC6]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 12a5 5 0 11-5 5 5 5 0 015-5m0-2a7 7 0 107 7 7 7 0 00-7-7zm0-4a4 4 0 11-4 4 4 4 0 014-4m0-2a6 6 0 106 6 6 6 0 00-6-6zm0 6a2 2 0 112-2 2 2 0 01-2 2z"
                        />
                    </svg>
                    <span className="btm-nav-label">로그인/로그아웃</span>
                </a>
            </div>
        </div>
    );
}

export default AuctionList;