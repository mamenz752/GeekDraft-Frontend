import Link from 'next/link'
import React from 'react'
import PlusIcon from './icons/PlusIcon'

const WideButton = () => {
  return (
    <Link href={"/dashboard"} className="py-3 px-6 flex justify-center items-center gap-4 rounded-full bg-geek-purple-btn-gradient hover:opacity-85">
        <PlusIcon />
        <p className="text-lg font-bold tracking-widest text-white">アイデアをメモ</p>
    </Link>
  )
}

export default WideButton
