import { SessionProvider } from 'next-auth/react'
import Dashboard from './Dashboard'
import Header from '../components/common/Header'

const DashboardPresenter = () => {
  return (
    <SessionProvider>
      <Header />
      <Dashboard />
    </SessionProvider>
  )
}

export default DashboardPresenter
