import { SessionProvider } from "next-auth/react"
import Header from "../components/common/Header"

const ProfilePresenter = () => {
  return (
    <SessionProvider>
      <Header />
      <p className="absolute top-24">プロフィールのページです</p>
    </SessionProvider>
  )
}

export default ProfilePresenter