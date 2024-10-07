"use client"

import { useSession } from "next-auth/react"

const Dashboard = () => {
  const {data: session} = useSession();

  if (session) {
    return (
      <div className="absolute top-24">
          <p>login: {session?.user?.name}</p>
          <p>email: {session?.user?.email}</p>
      </div>
    )
  }

  return (
    <div className="absolute top-24">
      <p>Not login</p>
    </div>
  )
}

export default Dashboard
