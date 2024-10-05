import Link from "next/link";
import ProductLogo from "./public/ProductLogo";

export default function EntrancePresenter() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ProductLogo className="w-[500px]" />
      <div>
        <h2 className="font-bold text-geek-purple-60"># ちょっとGeekになった気分</h2>
        <ul className="mt-4 text-geek-gray-80">
          <li>- アイデアをすぐにメモ</li>
          <li>- アウトプットを続けよう</li>
          <li>- 記事のネタ探しにも最適</li>
        </ul>
      </div>
      <Link href="/login">
        <button className="mt-16 px-16 py-8 bg-geek-purple-btn-gradient font-noto text-xl text-white tracking-wider shadow-lg rounded-md">
          今すぐはじめる
        </button>
      </Link>
    </div>
  );
}
