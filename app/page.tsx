import Image from "next/image";
import Logo from "@/app/public/GeekDraft_logo.png"
import Link from "next/link";

export default function EntrancePresenter() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={ Logo }
        alt={"GeekDraftのロゴ"}
        width={500}
      />
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
