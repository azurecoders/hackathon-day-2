"use client"; // Required for interactivity (e.g., useState)
import { UserRound, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-background border-b border-[#ccc]/10 text-text">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 h-[8vh]">
        {/* Logo and Desktop Links */}
        <div className="flex items-center gap-12">
          <div>
            <Link href="/" className="text-2xl md:text-4xl font-bold">
              JobBoard
            </Link>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-text hover:text-shadows/90 duration-300 transition-all"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-text hover:text-shadows/90 duration-300 transition-all"
            >
              Find Job
            </Link>
            <Link
              href="/"
              className="text-text hover:text-shadows/90 duration-300 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-text hover:text-shadows/90 transition-all"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="/sign-in"
            className="group flex items-center gap-4 border-2 border-[#ccc]/15 px-3 py-2 rounded-md hover:bg-shadows/90 duration-300 transition-all"
          >
            <UserRound className="group-hover:text-text2 transition-all" />
            <span className="group-hover:text-text2 transition-all">Log in</span>
          </Link>
          <Link
            href="/sign-up"
            className="px-3 py-2 rounded-md bg-shadows text-text2 duration-300 transition-all hover:bg-shadows/90"
          >
            Create Account
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-[#ccc]/10">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className="text-text hover:text-shadows/90 duration-300 transition-all"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-text hover:text-shadows/90 duration-300 transition-all"
            >
              Find Job
            </Link>
            <Link
              href="/"
              className="text-text hover:text-shadows/90 duration-300 transition-all"
            >
              Contact
            </Link>
            <div className="flex flex-col gap-4 mt-4">
              <Link
                href="/sign-in"
                className="group flex items-center justify-center gap-4 border-2 border-[#ccc]/15 px-3 py-2 rounded-md hover:bg-shadows/90 duration-300 transition-all"
              >
                <UserRound className="group-hover:text-text2 transition-all" />
                <span className="group-hover:text-text2 transition-all">
                  Log in
                </span>
              </Link>
              <Link
                href="/sign-up"
                className="text-center px-3 py-2 rounded-md bg-shadows text-text2 duration-300 transition-all hover:bg-shadows/90"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;