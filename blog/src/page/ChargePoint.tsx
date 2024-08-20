function ChargePointPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-50">
            <div className="w-full max-w-xs">
                <div className="card bg-base-100 shadow-xl border border-gray-300">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center mb-4 text-[#62CBC6]">포인트 충전</h2>
                        <form>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="points">
                                    충전할 포인트
                                </label>
                                <input
                                    className="input input-bordered w-full"
                                    id="points"
                                    type="number"
                                    placeholder="충전할 포인트를 입력하세요"
                                    min="0"
                                    step="1"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="btn btn-primary w-full bg-[#62CBC6] border-none hover:bg-[#4FA6A3]"
                                    type="button">
                                    충전하기
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChargePointPage;