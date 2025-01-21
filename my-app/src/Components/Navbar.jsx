"use client";

import { useState, useRef, useEffect } from "react";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import { TiArrowSortedDown, TiThMenu, TiTimes } from "react-icons/ti";
import { IoHome } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";
import { BiMessageRoundedDots } from "react-icons/bi";

// import logo from "../../assets/ta-logo.png";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
  FaBook,
  FaFileAlt,
  FaGraduationCap,
  FaLaptop,
  FaSearchDollar,
} from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

const Navbar = ({ handleAboutClick, handleContactClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const serviceRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if click outside of dropdown or service
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !serviceRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-primary bg-opacity-80 h-auto w-full lg:py-8 md:py-8 pt-4 pb-4  ">
      <div className="flex items-center justify-evenly gap-10 md:w-[75%] w-[95%] md:mx-auto text-white ">
        <Link href="/">
          <div className="text-2xl">
            <Image
              src="/bpw-logo.png"
              alt="Logo"
              width="300"
              height="300"
              quality={60}
              priority
              className="w-[280px] md:w-[300px] h-auto md:-ml-8 ml-2 -mr-10 "
            />
            {/* Logo Here */}
          </div>
        </Link>

        <div className="md:flex items-center gap-8 hidden">
          <div className="flex gap-4">
            <Link href="/">
              <h1 className="font-semibold hover:opacity-60 text-sm">Home</h1>
            </Link>

            <button
              onClick={handleAboutClick}
              className="font-semibold hover:opacity-60 cursor-pointer text-sm"
            >
              About
            </button>

            <Link href="/assignment-help">
              <h1 className="font-semibold hover:opacity-60 text-sm">
                Assignment
              </h1>
            </Link>

            <Link href="/essay-help">
              <h1 className="font-semibold hover:opacity-60 text-sm">Essay</h1>
            </Link>

            <Link href="/coursework-help">
              <h1 className="font-semibold hover:opacity-60 text-sm">
                Coursework
              </h1>
            </Link>

            <Link href="/dissertation-help">
              <h1 className="font-semibold hover:opacity-60 text-sm">
                Dissertation
              </h1>
            </Link>

            <Link href="/online-exam">
              <h1 className="font-semibold hover:opacity-60 text-sm">
                Exam
              </h1>
            </Link>

            <Link href="/research-proposal">
              <h1 className="font-semibold hover:opacity-60 text-sm">
                Research Proposal
              </h1>
            </Link>

            <Link href="/reviews">
              <h1 className="font-semibold hover:opacity-60 text-sm">
                Reviews
              </h1>
            </Link>
          </div>
        </div>

        <div className="md:hidden flex items-center mx-auto -mr-2">
          <button
            className="bg-white p-[2px] rounded"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"} // Accessible name
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <TiTimes size={35} className="text-primary" />
            ) : (
              <TiThMenu size={35} className="text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary bg-opacity-40 w-full text-white px-4 py-8">
          <Link href="/">
            <div className="flex gap-2 items-center">
              <IoHome size={25} />
              <h1>Home</h1>
            </div>
          </Link>
          <div className="flex gap-2 items-center py-2">
            <IoBagCheck size={25} />
            <h1 onClick={handleAboutClick} className="cursor-pointer">
              About
            </h1>
          </div>

          <Link href="/assignment-help">
            <div className="flex gap-2 items-center pb-2">
              <FaLaptop size={25} />
              <h1>Assignment Help</h1>
            </div>
          </Link>

          <Link href="/essay-help">
            <div className="flex gap-2 items-center pb-2">
              <FaBookOpenReader size={25} />
              <h1>Essay Help</h1>
            </div>
          </Link>

          <Link href="/coursework-help">
            <div className="flex gap-2 items-center pb-2">
              <FaBook size={25} />
              <h1>Coursework Help</h1>
            </div>
          </Link>

          <Link href="/dissertation-help">
            <div className="flex gap-2 items-center pb-2">
              <FaGraduationCap size={25} />
              <h1>Dissertation Help</h1>
            </div>
          </Link>

          <Link href="/online-exam">
            <div className="flex gap-2 items-center pb-2">
              <FaFileAlt size={25} />
              <h1>Online Exam Help</h1>
            </div>
          </Link>

          <Link href="/research-proposal">
            <div className="flex gap-2 items-center ">
              <FaSearchDollar size={25} />
              <h1>Research Proposal Help</h1>
            </div>
          </Link>

          <Link href="/reviews">
            <div className="flex items-center gap-2 py-2">
              <BiMessageRoundedDots size={25} />
              <h1 className="">Reviews</h1>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Navbar;
