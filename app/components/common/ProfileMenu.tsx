import Link from 'next/link';
import React, { FC }  from 'react'
import UserIcon from './icons/UserIcon';
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
                    <Link href="/profile" className="flex items-center gap-4 text-geek-gray-60 hover:opacity-60 group">
                        <span className="sr-only">Profile</span>
                        <UserIcon />
                        <p>プロフィール</p>
                    </Link>
                </li>
                <li>
                    <button
                        className="flex items-center gap-4 font-bold text-geek-red-60 hover:opacity-60 group"
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
