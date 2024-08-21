import {PricePolicy, PercentagePricePolicy, ConstantPricePolicy} from "./type";
import {getPriceFormatted} from "../../../util/NumberUtil";
import {formatVariationDuration, getMsFromIso8601Duration} from "../../../util/DateUtil";
import {useEffect, useState} from "react";

interface PricePolicyElementProps {
    pricePolicy: PricePolicy;
    originPrice: number;
    currentPrice: number;
    variationDuration: string;
    priceLimit: number;
}

function PricePolicyElement(
    {
        pricePolicy,
        originPrice,
        currentPrice,
        variationDuration,
        priceLimit
    }: PricePolicyElementProps) {

    const discountStrategyElement = document.getElementById('discountStrategy');

    const [price, setPrice] = useState<number>(currentPrice);

    useEffect(() => {
        const interval = getMsFromIso8601Duration(variationDuration);
        const intervalId = setInterval(() => {
            const nextPrice = calculateNextPrice();

            if(priceLimit <= nextPrice) {
                setPrice(nextPrice);
            }

        }, interval);

        return () => clearInterval(intervalId);
    }, [variationDuration]);

    function calculateNextPrice() : number {
        if (pricePolicy.type === "CONSTANT") {
            return  price - (pricePolicy as ConstantPricePolicy).variationWidth;
        } else if (pricePolicy.type === "PERCENTAGE") {
            return  price - (currentPrice * (pricePolicy as PercentagePricePolicy).discountRate / 100);
        } else {
            return -1;
        }
    }

    const component = () => {
        switch (pricePolicy.type) {
            case "CONSTANT":
                return (
                    <div id="discountStrategy" className="text-gray-700 text-lg">
                        {formatVariationDuration(variationDuration)}후 <span className="text-[#62CBC6] font-semibold">{pricePolicy.variationWidth}원</span> 할인이 적용됩니다.
                    </div>
                )
            case "PERCENTAGE":
                return (
                    <div id="discountStrategy" className="text-gray-700 text-lg">
                        {formatVariationDuration(variationDuration)}후 <span className="text-[#62CBC6] font-semibold">${pricePolicy.discountRate}%</span> 할인이 적용됩니다.
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
                        <h1 className="text-2xl font-bold">{getPriceFormatted(price)}</h1>
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