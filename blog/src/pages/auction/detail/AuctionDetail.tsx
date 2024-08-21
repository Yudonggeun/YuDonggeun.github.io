function AuctionDetail() {

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
            src="https://cdn.usegalileo.ai/stability/441b95f1-3714-46e5-b38e-7570c57700cd.png"
            alt="Honda CB750 Four K0"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-2xl font-bold">혼다 CB750 Four K0</h1>
          <p className="text-base">
            이 1970년식 혼다 CB750 K0는 매우 희귀하고 오리지널 상태의 바이크입니다. 이 바이크는 2009년에 미국에서 영국으로 수입되었습니다.
          </p>

          <h2 className="text-2xl font-bold pt-5">현재 입찰가</h2>
          <h1 className="text-2xl font-bold">₩24,000,000</h1>

          <div className="flex items-center gap-4 py-2">
            <div>
              <p className="text-base font-medium">경매 종료 시간</p>
              <p className="text-sm text-primary">2024년 8월 27일 15:30</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-base font-medium">변동 주기</p>
            <p className="text-sm text-primary">1분 단위</p>
          </div>

          <div>
            <div className="flex justify-between">
              <p className="text-base font-medium">경매 진행률</p>
              <p className="text-sm">50%</p>
            </div>
            <progress className="progress progress-primary w-full" value="50" max="100"></progress>
            <div className="flex justify-between mt-2">
              <p className="text-sm">현재 재고: 25개</p>
              <p className="text-sm">총 재고: 50개</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-base font-medium">최대 구매 가능 수량</p>
            <p className="text-sm text-primary">5개</p>
          </div>

          <div className="mt-4">
            <label className="label">
              <span className="label-text">구매 수량</span>
            </label>
            <div className="flex items-center max-w-xs">
              <button className="btn btn-outline btn-square">-</button>
              <input
                type="number"
                min="1"
                max="5"
                value="1"
                className="input input-bordered w-20 text-center mx-2"
              />
              <button className="btn btn-outline btn-square">+</button>
            </div>
          </div>

          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary">즉시 구매</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionDetail;