"use client"

import GoogleIcon from "../public/icons/GoogleIcon"
import { signIn } from "next-auth/react"
import ProductLogo from "../public/ProductLogo"

const LoginPresenter = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ProductLogo className="w-[500px]" />
      {/* <div>
        <h2 className="font-bold text-geek-purple-60"># ちょっとGeekになった気分</h2>
        <ul className="mt-4 text-geek-gray-80">
        <li>- アイデアをすぐにメモ</li>
        <li>- アウトプットを続けよう</li>
        <li>- 記事のネタ探しにも最適</li>
        </ul>
        </div> */}
      <button
        className="mt-16 px-8 py-4 bg-geek-white-btn-gradient font-noto text-lg text-geek-black tracking-wider shadow-lg rounded-md"
        onClick={() => signIn("google")}
      >
        <div className="flex items-center gap-4">
          <GoogleIcon />
          Googleアカウントでログイン
        </div>
      </button>
    </div>
  )
}

export default LoginPresenter
