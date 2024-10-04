import Image from 'next/image'
import Logo from "@/app/public/GeekDraft_logo.png"
import Profile from "@/app/public/dummy_profile.png"
import Link from 'next/link'
import DashboardIcon from './icons/DashboardIcon'

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-center gap-8 shadow-md fixed z-30">
        <Image src={ Logo } alt="logo" className="w-56 h-24" />
        <nav className="flex items-center gap-8">
            <ul>
                <li>
                    <Link href="/dashboard" className='flex items-center justify-center gap-2'>
                        <DashboardIcon />
                        <p>ダッシュボード</p>
                    </Link>
                </li>
            </ul>
            <button className=''>
                <Image src={ Profile } alt="logo" width={100} height={100} className="w-12 h-12 rounded-full" />
            </button>
        </nav>
    </header>
  )
}

export default Header
