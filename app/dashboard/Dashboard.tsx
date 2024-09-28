"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

const DashboardPresenter = () => {
  const {data: session} = useSession();

  if (session) {
    return (
      <div>
          <p>login: {session?.user?.name}</p>
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
    <>
     <p>Not login</p>
    </>
  )
}

export default DashboardPresenter
