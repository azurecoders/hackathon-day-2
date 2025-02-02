"use client"
import React, { useState } from 'react';
import { MdMenu, MdNotificationsNone, MdOutlineSettings } from 'react-icons/md';
import SideBar from './SideBar';

const JobNavBar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="flex fixed w-full">
      <SideBar isToggle={sidebarVisible} />
      <div className="flex-1 flex flex-col min-h-screen w-full">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-neutral-200/20 px-4 py-2">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-gray-100"
              onClick={toggleSidebar}
            >
              <MdMenu className='size-5' />
            </button>
            <div className="text-2xl pl-4 font-bold text-blue-600">JobBoard</div>
            {/* Search Bar */}
            <div className="flex-1 mx-4">
              <div className="max-w-xl">
                <input
                  type="search"
                  placeholder="Search jobs..."
                  className="w-full px-4 py-2 rounded-lg border border-neutral-200/20 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            {/* Notification and Settings Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <MdNotificationsNone />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <MdOutlineSettings />
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default JobNavBar;