import AuctionListElement from "./AuctionListElement";

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

                        <AuctionListElement/>
                        <AuctionListElement/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuctionList;