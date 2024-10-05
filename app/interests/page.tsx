import { SessionProvider } from "next-auth/react"
import Header from "../components/common/Header"

const InterestsPresenter = () => {
  return (
    <SessionProvider>
      <Header />
      <p>インタレストのページです</p>
    </SessionProvider>
  )
}

export default InterestsPresenter
