import { UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-background border-b border-[#ccc]/10 text-text">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 h-[8vh]">
        <div className="flex items-center gap-12">
          <div>
            <h1 className="text-4xl font-bold">FSA</h1>
          </div>
          <div className="flex gap-8">
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
              About
            </Link>
            <Link
              href="/"
              className="text-text hover:text-shadows/90 duration-300 transition-all"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-text hover:text-shadows/90 duration-300 transition-all"
            >
              Services
            </Link>
            <Link
              href="/"
              className="text-text hover:text-shadows/90 duration-300 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="/sign-in"
            className="flex items-center gap-4 border-2 border-[#ccc]/15 px-3 py-2 rounded-md hover:bg-shadows/90 duration-300 transition-all"
          >
            <UserRound />
            <span>Log in</span>
          </Link>
          <Link
            href="/sign-up"
            className="px-3 py-2 rounded-md bg-shadows text-text duration-300 transition-all hover:bg-shadows/90"
          >
            Create free Account
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
