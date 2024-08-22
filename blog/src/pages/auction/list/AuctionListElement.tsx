import {usePageStore} from "../../../store/PageStore";
import {getKrDateFormat} from "../../../util/DateUtil";
import {getPriceFormatted} from "../../../util/NumberUtil";

interface AuctionSimpleInfo {
    id: number;
    title: string;
    price: number;
    startedAt: Date;
    endedAt: Date;
    imageUrl: string;
}

function AuctionListElement(
    {
        id,
        title,
        price,
        startedAt,
        endedAt,
        imageUrl,
    }: AuctionSimpleInfo
) {

    const {currentPage, setPage} = usePageStore();

    const changePage = (page: string) => {
        setPage(page);
    }

    return (
        <div className="card bg-base-100 shadow-xl border border-gray-300"
             onClick={() => changePage('auctionDetail')}>
            <div className="card-body">
                <h2 className="card-title text-base">{title}</h2>
            </div>
            <figure className="aspect-square">
                <img
                    src={imageUrl}
                    alt="Rolex Submariner"
                />
            </figure>
            <div className="card-body">
                <p className="text-sm text-[#62CBC6]">시작 시간: {getKrDateFormat(startedAt)}</p>
                <p className="text-sm text-[#62CBC6]">종료 시간: {getKrDateFormat(endedAt)}</p>
                <p className="text-sm text-[#62CBC6]">현재가: {getPriceFormatted(price)}</p>
            </div>
        </div>
    );
}

export default AuctionListElement;

// const auction: AuctionSimpleInfo = {
//     id: 1,
//     title: '롤렉스 서브마리너',
//     price: 10000000,
//     startedAt: new Date('2000-10-08T13:30:00'),
//     endedAt: new Date('2004-10-09T13:30:00'),
//     imageUrl: 'https://cdn.usegalileo.ai/stability/61d9ba43-1402-4c08-acd8-5b4d04828fb2.png'
// }
