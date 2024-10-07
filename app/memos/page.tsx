import { SessionProvider } from "next-auth/react"
import Header from "../components/common/Header"

const MemosPresenter = () => {
  return (
    <SessionProvider>
      <Header />
      <p className="absolute top-24">アイデアメモのページです</p>
    </SessionProvider>
  )
}

export default MemosPresenter
