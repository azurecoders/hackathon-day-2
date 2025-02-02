import React from 'react'
import Link from 'next/link';
import { MdWork, MdAddBox, MdSearch, MdDashboard } from 'react-icons/md';
import { SlEnvolopeLetter } from 'react-icons/sl';

const SideBar = ({ isToggle }: { isToggle: boolean }) => {

    return (
        <nav className={`h-screen fixed top-0 w-64 bg-white border-r pt-16 border-neutral-200/20 transform transition-transform duration-300 ease-in-out ${isToggle ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto py-4">
                    <div className="px-4 space-y-2">
                        <Link href="/job" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                            <MdWork className="mr-3" />
                            Jobs
                        </Link>
                        <Link href="/job/post" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <MdAddBox className="mr-3" />
                            Post
                        </Link>
                        <Link href="/job/find" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <MdSearch className="mr-3" />
                            Search
                        </Link>
                        <Link href="/job/application" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <SlEnvolopeLetter className="mr-3" />
                            Application
                        </Link>
                        <Link href="/job/dashboard" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <MdDashboard className="mr-3" />
                            Dashboard
                        </Link>
                    </div>
                </div>

                <Link href="/settings/profile" className="p-4 border-t border-neutral-200/20">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <img src="/default-user.svg" alt="logo" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium">John Doe</p>
                            <p className="text-xs text-gray-500">john@example.com</p>
                        </div>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default SideBar
