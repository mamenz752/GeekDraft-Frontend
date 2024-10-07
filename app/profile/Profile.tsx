"use client"

import { useSession } from "next-auth/react"

const Profile = () => {
    const { data: session } = useSession();

  return (
    session ?
        <div className="absolute top-24">
          <p>login: {session?.user?.name}</p>
          <p>email: {session?.user?.email}</p>
        </div>
    :
        <div className="absolute top-24">
            <p>Not login</p>
        </div>
  )
}

export default Profile
