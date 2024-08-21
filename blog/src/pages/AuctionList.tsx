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
        </div>
    );
}

export default AuctionList;