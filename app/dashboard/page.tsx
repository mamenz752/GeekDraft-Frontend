import { SessionProvider } from 'next-auth/react'
// import { auth } from "../../auth"
// import { getSession } from 'next-auth/react'
import DashboardPresenter from './Dashboard'
// import { useEffect } from 'react';

const Administrator = () => {
  // const session = getSession();

  return (
    <SessionProvider>
      <DashboardPresenter />
    </SessionProvider>
  )
}

export default Administrator
