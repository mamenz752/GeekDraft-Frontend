import { SessionProvider } from 'next-auth/react'
import DashboardPresenter from './Dashboard'
import Header from '../components/common/Header'

const Administrator = () => {
  return (
    <SessionProvider>
      <Header />
      <DashboardPresenter />
    </SessionProvider>
  )
}

export default Administrator
