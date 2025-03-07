import React from 'react'

const Confirm = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-3/5 m-auto p-10 flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-serif font-bold">お問い合わせフォーム</h1>
        <form action="" className="text-center w-full mt-8">
          <div className="flex mb-5 items-center">
            <span className="flex-1 text-right pr-8">お名前</span>
            <p className="flex-3 h-8 px-2 text-left text-sm">結果です</p>
          </div>
          <div className="flex mb-5 items-center">
            <span className="flex-1 text-right pr-8">メールアドレス</span>
            <p className="flex-3 h-8 px-2 text-left text-sm">結果です</p>
          </div>
          <div  className="flex mb-10">
            <span className="flex-1 text-right pr-8">お問い合わせ内容</span>
            <p className="flex-3 h-8 px-2 text-left text-sm">結果です</p>
          </div>
          <button  className="flex justify-center items-center mx-auto w-40 mt-5 h-10 rounded-full border border-cyan-400 shadow-lg hover:shadow-none hover:translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">送信</button>
        </form>
      </div>
    </div>
  )
}

export default Confirm