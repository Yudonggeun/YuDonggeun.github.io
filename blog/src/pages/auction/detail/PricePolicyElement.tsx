import {PercentagePricePolicy, ConstantPricePolicy, AuctionDetailInfo} from "./type";
import {getPriceFormatted} from "../../../util/NumberUtil";
import {formatVariationDuration, getMsFromIso8601Duration} from "../../../util/DateUtil";
import {useEffect} from "react";

interface PricePolicyElementProps {
    priceLimit: number;
    auction: AuctionDetailInfo,
    setAuction: React.Dispatch<React.SetStateAction<AuctionDetailInfo | null>>
}

function PricePolicyElement(
    {
        priceLimit,
        auction,
        setAuction
    }: PricePolicyElementProps) {

    useEffect(() => {
        const interval = getMsFromIso8601Duration(auction.variationDuration);
        const intervalId = setInterval(() => {
            const nextPrice = calculateNextPrice();

            if(priceLimit <= nextPrice) {
                setAuction({...auction, currentPrice: nextPrice});
            }

        }, interval);

        return () => clearInterval(intervalId);
    }, [auction.variationDuration]);

    function calculateNextPrice() : number {
        if (auction.pricePolicy.type === "CONSTANT") {
            return  auction.currentPrice - (auction.pricePolicy as ConstantPricePolicy).variationWidth;
        } else if (auction.pricePolicy.type === "PERCENTAGE") {
            return  auction.currentPrice - (auction.currentPrice * (auction.pricePolicy as PercentagePricePolicy).discountRate / 100);
        } else {
            return -1;
        }
    }

    const component = () => {
        switch (auction.pricePolicy.type) {
            case "CONSTANT":
                return (
                    <div id="discountStrategy" className="text-gray-700 text-lg">
                        {formatVariationDuration(auction.variationDuration)}후 <span className="text-[#62CBC6] font-semibold">{auction.pricePolicy.variationWidth}원</span> 할인이 적용됩니다.
                    </div>
                )
            case "PERCENTAGE":
                return (
                    <div id="discountStrategy" className="text-gray-700 text-lg">
                        {formatVariationDuration(auction.variationDuration)}후 <span className="text-[#62CBC6] font-semibold">${auction.pricePolicy.discountRate}%</span> 할인이 적용됩니다.
                    </div>
                )
            default:
                return (
                  <div>
                      이 상품에 대한 할인 정보가 없습니다.
                  </div>
                )
        }
    }

    return (
        <div>
            <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">할인 정책</h3>
                <div id="discountStrategy" className="text-gray-700 text-lg">
                    {component()}
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold pt-5">현재 가격</h2>
                        <h1 className="text-2xl font-bold">{getPriceFormatted(auction.currentPrice)}</h1>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold pt-5">다음 가격</h2>
                        <h1 className="text-2xl font-bold">{getPriceFormatted(calculateNextPrice())}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricePolicyElement;