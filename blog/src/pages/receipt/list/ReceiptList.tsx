import ReceiptListElement from "./ReceiptListElement";
import {ReceiptSimpleInfo} from "./type";


const receiptList: Array<ReceiptSimpleInfo> = [
    {
        id: 1,
        authorId: 1,
        type: 'PURCHASE',
        productName: '롤렉스 서브마리너',
        quantity: 1,
        price: 10000000
    },
    {
        id: 2,
        authorId: 3,
        type: 'REFUND',
        productName: 'test',
        quantity: 4,
        price: 5000000
    }
]

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
                            {receiptList.map(receipt => (
                                <ReceiptListElement key={receipt.id} {...receipt} />
                            ))}
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ReceiptListPage;