import InputLabel from "@/components/InputLabel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="w-3/5 m-auto p-10 flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-serif font-bold">お問い合わせフォーム</h1>
        <form action="" className="text-center w-full mt-8">
          <InputLabel htmlFor="name" label="お名前">
            <input type="text" id="name" className="flex-3 h-8 px-2 rounded-lg border border-gray-500 text-sm" />
          </InputLabel>
          <InputLabel htmlFor="email" label="メールアドレス">
            <input type="text" id="email" className="flex-3 h-8 px-2 rounded-lg border border-gray-500 text-sm" />
          </InputLabel>
          <label htmlFor="content" className="flex mb-10">
            <span className="flex-1 text-right pr-8">お問い合わせ内容</span>
            <textarea name="" id="content" className="flex-3 h-30 px-2 rounded-lg py-0.5 resize-none border border-gray-500 text-sm"></textarea>
          </label>
          <Link href="/confirm" className="flex justify-center items-center mx-auto w-40 mt-5 h-10 rounded-full border border-cyan-400 shadow-lg hover:shadow-none hover:translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">確認画面に</Link>
        </form>
      </div>
    </div>
  );
}
