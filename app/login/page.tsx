import Image from "next/image"
import Logo from "@/app/public/GeekDraft_logo.png"
import Link from "next/link"
import GoogleIcon from "../public/icons/GoogleIcon"

const LoginPresenter = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={ Logo }
        alt={"GeekDraftのロゴ"}
        width={500}
      />
      {/* <div>
        <h2 className="font-bold text-geek-purple-60"># ちょっとGeekになった気分</h2>
        <ul className="mt-4 text-geek-gray-80">
            <li>- アイデアをすぐにメモ</li>
            <li>- アウトプットを続けよう</li>
            <li>- 記事のネタ探しにも最適</li>
        </ul>
      </div> */}
      <Link href="/">
        <button className="mt-16 px-8 py-4 bg-geek-white-btn-gradient font-noto text-lg text-geek-black tracking-wider shadow-lg rounded-md">
          <div className="flex items-center gap-4">
            <GoogleIcon />
            Googleアカウントでログイン
          </div>
        </button>
      </Link>
    </div>
  )
}

export default LoginPresenter
