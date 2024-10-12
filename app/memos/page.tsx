import { SessionProvider } from "next-auth/react"
import Header from "../components/common/Header"
import AllMemosView from "./AllMemosView"

const MemosPresenter = () => {
  return (
    <SessionProvider>
      <Header />
      <AllMemosView />
    </SessionProvider>
  )
}

export default MemosPresenter
