"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

const Dashboard = () => {
  const {data: session} = useSession();

  if (session) {
    return (
      <div className="absolute top-24 z-10">
          <p>login: {session?.user?.name}</p>
          <p>email: {session?.user?.email}</p>
          <Link href="/login">
          <button
            className="p-8"
            onClick={() => {
              // "use server"
              signOut()
            }
          }
          >
              ログアウト
          </button>
          </Link>
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
