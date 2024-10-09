"use client"

import { useSession } from "next-auth/react"
import DashboardCalendar from "./DashboardCalendar"

const Dashboard = () => {
  const {data: session} = useSession();

  return (
    session ?
      <div className="absolute top-24">
        <DashboardCalendar />
      </div>
      :
      <div className="absolute top-24">
        <p>Not login</p>
      </div>
  )
}

export default Dashboard
