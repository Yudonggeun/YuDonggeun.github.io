import {getKrDateFormat, formatVariationDuration} from "../../../util/DateUtil";
import {useState} from "react";
import {AuctionDetailInfo} from "./type";
import PricePolicyElement from "./PricePolicyElement";



function AuctionDetail() {

  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = (maximum: number) => {
    if(quantity >= maximum) {
      alert("최대 구매 수량을 초과하였습니다.");
    } else {
      setQuantity(quantity + 1);
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert("최소 구매 수량은 1개입니다.");
    }
  }

  const auction: AuctionDetailInfo = {
    auctionId: 1,
    sellerId: 2,
    productName: "테스트 상품",
    description: "이 1970년식 혼다 CB750 K0는 매우 희귀하고 오리지널 상태의 바이크입니다. 이 바이크는 2009년에 미국에서 영국으로 수입되었습니다.",
    imageUrl: "https://cdn.usegalileo.ai/stability/441b95f1-3714-46e5-b38e-7570c57700cd.png",
    originPrice: 10000,
    currentPrice: 5000,
    currentStock:50,
    totalStock: 100,
    maximumPurchaseLimitCount: 10,
    pricePolicy: {
      type: "CONSTANT",
      variationWidth: 10
    },
    variationDuration: "PT1M",
    startedAt: new Date('2024-08-15T14:18:00'),
    finishedAt: new Date('2024-08-15T15:18:00'),
  };

  return (
    <div className="container mx-auto p-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <button className="btn btn-ghost btn-square">
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
      </div>

      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={auction.imageUrl}
            alt="Honda CB750 Four K0"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-2xl font-bold">{auction.productName}</h1>
          <p className="text-base">
            {auction.description}
          </p>


          <div className="flex items-center gap-4 py-2">
            <div>
              <p className="text-base font-medium">경매 종료 시간</p>
              <p className="text-sm text-primary">{getKrDateFormat(auction.finishedAt)}</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-base font-medium">변동 주기</p>
            <p className="text-sm text-primary">{formatVariationDuration(auction.variationDuration)}</p>
          </div>

          <div>
            <div className="flex justify-between">
              <p className="text-base font-medium">경매 진행률</p>
              <p className="text-sm">{auction.currentStock / auction.totalStock * 100}%</p>
            </div>
            <progress className="progress progress-primary w-full"
                      value={auction.currentStock / auction.totalStock * 100} max="100"></progress>
            <div className="flex justify-between mt-2">
              <p className="text-sm">현재 재고: {auction.currentStock}개</p>
              <p className="text-sm">총 재고: {auction.totalStock}개</p>
            </div>
          </div>

          <PricePolicyElement
              pricePolicy={auction.pricePolicy}
              currentPrice={auction.currentPrice}
              originPrice={auction.originPrice}
              variationDuration={auction.variationDuration}
              priceLimit={0}
          />

          <div className="mt-4">
            <div className="flex justify-end">
              <button
                  className="btn btn-outline btn-square"
                  onClick={() => decreaseQuantity()}
              >-
              </button>
              <div className="h-full">
                <input
                    type="number"
                    min="1"
                    max={auction.maximumPurchaseLimitCount}
                    value={quantity}
                    className="input input-bordered text-center mx-2"
                />
              </div>
              <button
                  className="btn btn-outline btn-square"
                  onClick={() => increaseQuantity(auction.maximumPurchaseLimitCount)}
              >+
              </button>

            </div>

            <div className="mt-2 text-sm text-end">
              최대 구매 가능 수량은 <span className="text-primary">{auction.maximumPurchaseLimitCount}개</span>입니다.
            </div>
            <div className="card-actions justify-end ml-4 mt-4">
              <button className="btn btn-primary">입찰하기</button>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
}

export default AuctionDetail;