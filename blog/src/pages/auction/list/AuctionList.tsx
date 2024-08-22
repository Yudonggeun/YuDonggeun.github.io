import AuctionListElement from "./AuctionListElement";
import {AuctionItem, AuctionsRequest} from "../../../api/auction/type";
import {requestAuctionList} from "../../../api/auction/api";
import {useEffect, useState} from "react";

function AuctionList() {

    const [request, setRequest] = useState<AuctionsRequest>({
        offset: 0,
        size: 20,
    });

    const [auctions, setAuctions] = useState<AuctionItem[]>([]);

    useEffect(() => {
        requestAuctionList(
            request,
            (newAuctions) => {
                setAuctions([...newAuctions]);
            },
            () => {
            }
        );
    }, []);

    const nextPage = () => {
        requestAuctionList(
            {
                offset: request.offset + request.size,
                size: request.size,
            },
            (newAuctions) => {
                setAuctions([...newAuctions]);
                setRequest({...request, offset: request.offset + request.size});
            },
            () => {
            }
        );
    }

    const previousPage = () => {
        requestAuctionList(
            {
                offset: request.offset - request.size,
                size: request.size,
            },
            (newAuctions) => {
                setAuctions([...newAuctions]);
                setRequest({...request, offset: request.offset - request.size});
            },
            () => {
            }
        );
    }


    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
                <div className="navbar bg-base-100 p-4 relative">
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
                        {
                            auctions.map((auction) => (
                                <AuctionListElement
                                    id={auction.id}
                                    title={auction.title}
                                    price={auction.price}
                                    startedAt={new Date(auction.startedAt)}
                                    endedAt={new Date(auction.finishedAt)}
                                    imageUrl={'https://cdn.usegalileo.ai/stability/61d9ba43-1402-4c08-acd8-5b4d04828fb2.png'}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="flex justify-between p-4">
                    <button
                        className="btn btn-outline text-[#62CBC6] border-[#62CBC6]"
                        onClick={previousPage}
                    >
                        이전 페이지
                    </button>
                    <button
                        className="btn btn-outline text-[#62CBC6] border-[#62CBC6]"
                        onClick={nextPage}
                    >
                        다음 페이지
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AuctionList;