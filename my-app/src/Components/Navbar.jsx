import React from "react";
import Link from "next/link"
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#0D0D1F]" >
      <div className="layout  py-6 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-bold">
            BidWise
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-white">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>Growth marketing</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>Design</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <Link href="/success-stories">Success stories</Link>
            <Link href="/about">About</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/tools">Tools</Link>
          </div>

          {/* CTA Button */}
          <button className="bg-[#E6186F] text-white px-6 py-2 rounded-full hover:bg-[#d1165f] transition-colors">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
