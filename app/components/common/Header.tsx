import Image from 'next/image'
import ProductLogo from "@/app/public/ProductLogo"
import Profile from "@/app/public/dummy_profile.png"
import Link from 'next/link'
import DashboardIcon from './icons/DashboardIcon'
import IdeaMemoIcon from './icons/IdeaMemoIcon'
import InterestIcon from './icons/InterestIcon'

import { M_PLUS_1 } from 'next/font/google'

export const m_plus_1 = M_PLUS_1({
    subsets: ["latin"],
    weight: ['400', '700'],
    style: 'normal',
    display: 'swap'
})

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-center gap-8 shadow-md fixed z-30">
        <Link href="/dashboard">
            <ProductLogo className="w-52 h-20" />
        </Link>
        <nav className="flex items-center gap-8">
            <ul className="flex items-center gap-6">
                <li className="w-48 h-full after:absolute after:w-48 after:h-1 after:bottom-3 after:bg-geek-purple-btn-gradient after:rounded-lg">
                    <Link href="/dashboard" className="p-2 flex items-center justify-center gap-4">
                        <DashboardIcon />
                        <p className={`${m_plus_1.className} font-bold tracking-wider`}>ダッシュボード</p>
                    </Link>
                </li>
                <li className="w-48 h-full after:absolute after:w-48 after:h-1 after:bottom-3 after:bg-geek-purple-btn-gradient after:rounded-lg">
                    <Link href="/memos" className="p-2 flex items-center justify-center gap-4">
                        <IdeaMemoIcon />
                        <p className={`${m_plus_1.className} font-bold tracking-wider`}>アイデアメモ</p>
                    </Link>
                </li>
                <li  className="w-48 h-full after:absolute after:w-48 after:h-1 after:bottom-3 after:bg-geek-purple-btn-gradient after:rounded-lg">
                    <Link href="/interests" className="p-2 flex items-center justify-center gap-4">
                        <InterestIcon />
                        <p className={`${m_plus_1.className} font-bold tracking-wider`}>インタレスト</p>
                    </Link>
                </li>
            </ul>
            <button
            >
                <Image src={ Profile } alt="logo" width={100} height={100} className="w-12 h-12 rounded-full" />
            </button>
        </nav>
    </header>
  )
}

export default Header
