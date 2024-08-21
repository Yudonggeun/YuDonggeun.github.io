function SignUpPage() {
  return (
      <div className="bg-slate-50">
          <div className="container mx-auto px-4 py-8 max-w-lg">
              <h1 className="text-3xl font-bold text-center mb-6 text-[#62CBC6]">회원가입</h1>

              <form className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                  <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">사용자 유형</label>
                      <div className="flex items-center space-x-4">
                          <label className="flex items-center">
                              <input type="radio" name="userType" value="buyer" className="radio radio-primary"
                                     checked/>
                              <span className="ml-2 text-gray-700">구매자</span>
                          </label>
                          <label className="flex items-center">
                              <input type="radio" name="userType" value="seller" className="radio radio-primary"/>
                              <span className="ml-2 text-gray-700">판매자</span>
                          </label>
                      </div>
                  </div>

                  <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-bold mb-2">이름</label>
                      <input type="text" id="name" name="name" className="input input-bordered w-full"
                             placeholder="이름을 입력하세요" required/>
                  </div>

                  <div className="mb-4">
                      <label htmlFor="password" className="block text-gray-700 font-bold mb-2">비밀번호</label>
                      <input type="password" id="password" name="password" className="input input-bordered w-full"
                             placeholder="비밀번호를 입력하세요" required/>
                  </div>

                  <div className="mb-6">
                      <label htmlFor="confirm-password" className="block text-gray-700 font-bold mb-2">비밀번호 확인</label>
                      <input type="password" id="confirm-password" name="confirm-password"
                             className="input input-bordered w-full" placeholder="비밀번호를 다시 입력하세요" required/>
                  </div>

                  <div className="text-center">
                      <button type="submit" className="btn btn-primary w-full bg-[#62CBC6]">회원가입</button>
                  </div>
              </form>
          </div>
      </div>
  );
}

export default SignUpPage;
