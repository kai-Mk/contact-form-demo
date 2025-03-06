import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="w-3/5 m-auto p-10 flex flex-col justify-center items-center border border-orange-500">
        <h1 className="text-3xl font-serif font-bold">お問い合わせフォーム</h1>
        <form action="" className="text-center w-full mt-8">
          <label htmlFor="name" className="flex mb-5 ">
            <span className="flex-1 text-right pr-8">お名前</span>
            <input type="text" id="name" className="flex-3 border border-orange-500" />
          </label>
          <label htmlFor="email" className="flex mb-5">
            <span className="flex-1 text-right pr-8">メールアドレス</span>
            <input type="text" id="email" className="flex-3 border border-orange-500" />
          </label>
          <label htmlFor="content" className="flex mb-5">
          <span className="flex-1 text-right pr-8">お問い合わせ内容</span>
            <textarea name="" id="content" className="flex-3 h-30 border border-orange-500"></textarea>
          </label>
          <button className="w-40 mt-3  border border-orange-500">送信</button>
        </form>
      </div>
    </div>
  );
}
