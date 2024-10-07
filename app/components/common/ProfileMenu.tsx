import Link from 'next/link';
import React, { FC }  from 'react'
import LogoutIcon from './icons/LogoutIcon';
import { signOut } from 'next-auth/react';

type Props = {
    isProfileMenuOpen: boolean;
}

const handleProfileMenuOpen = (isProfileMenuOpen: boolean): string => {
    if (isProfileMenuOpen) {
        return "grid"
    } else {
        return "hidden"
    }
};

const ProfileMenu: FC<Props> = ({ isProfileMenuOpen }) => {
  return (
    <div className={`absolute top-20 right-80 z-40 ${handleProfileMenuOpen(isProfileMenuOpen)} w-48 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700`}>
        <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
            <ul className="space-y-4">
                <li>
                    <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                        <span className="sr-only">Newsletter</span>
                        <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                        </svg>
                        プロフィール
                    </Link>
                </li>
                <li>
                    <button
                        className="flex items-center gap-2 font-bold text-geek-red-60 hover:opacity-60 group"
                        onClick={() => signOut({ callbackUrl: '/' })}
                    >
                        <span className="sr-only">Logout</span>
                        <LogoutIcon />
                        <p>ログアウト</p>
                    </button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ProfileMenu
