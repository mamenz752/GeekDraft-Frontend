import { SessionProvider } from "next-auth/react"
import Header from "../components/common/Header"
import Profile from "./Profile"

const ProfilePresenter = () => {
  return (
    <SessionProvider>
      <Header />
      <Profile />
    </SessionProvider>
  )
}

export default ProfilePresenter