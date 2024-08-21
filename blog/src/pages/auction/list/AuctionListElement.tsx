import {usePageStore} from "../../../store/PageStore";

interface Auction {
    id: number;
    title: string;
    price: number;
    startedAt: Date;
    endedAt: Date;
}

function AuctionListElement(
    // { auction }: { auction: Auction }
) {
    const { currentPage, setPage } = usePageStore();

    const changePage = (page: string) => {
        setPage(page);
    }

    return (
      <div className="card bg-base-100 shadow-xl border border-gray-300"
           onClick={() => changePage('auctionDetail')}>
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
  );
}

export default AuctionListElement;