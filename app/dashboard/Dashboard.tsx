"use client"

import { useSession } from "next-auth/react";
// import { auth } from "../../auth"
import { useEffect, useState } from "react";
// import Link from "next/link"

const DashboardPresenter = () => {
  const {data: session} = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [res, setRes] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/dashboard", {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      }
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP Error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("res:", data);
      setRes(data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("fetch error:", error)
    })
  }, [session])

  // <div>
  //     <p>login: {session?.user?.name}</p>
  //     <p>{session.user?.email}</p>
  //     <Link href="/login">
  //     <button
  //       className="p-8"
  //       onClick={() => {
  //         // "use server"
  //         signOut()
  //       }
  //     }
  //     >
  //         ログアウト
  //     </button>
  //     </Link>
  // </div>
    return (
      isLoading ?
        <>
        <p>Not login</p>
        </> : res
    )

  }


export default DashboardPresenter
