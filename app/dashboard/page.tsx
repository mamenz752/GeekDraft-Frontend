import { SessionProvider } from 'next-auth/react'
import DashboardPresenter from './Dashboard'

const Administrator = () => {
  return (
    <SessionProvider>
      <DashboardPresenter />
    </SessionProvider>
  )
}

export default Administrator
