function ReceiptListPage() {
    return (
        <div className="bg-slate-50">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-[#62CBC6]">거래 내역</h1>

                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead className="bg-[#62CBC6] text-white">
                            <tr>
                                <th className="px-4 py-2 text-left">거래 유형</th>
                                <th className="px-4 py-2 text-left">상품명</th>
                                <th className="px-4 py-2 text-left">구매 수량</th>
                                <th className="px-4 py-2 text-left">구매 가격</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="px-4 py-2">구매</td>
                                <td className="px-4 py-2">롤렉스 서브마리너</td>
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">₩10,000,000</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="px-4 py-2">환불</td>
                                <td className="px-4 py-2">버버리 트렌치코트</td>
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">₩1,500,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ReceiptListPage;