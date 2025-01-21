import React, { useRef } from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner'
import { useRouter } from "next/navigation";

const NavBannerBg = () => {
  const aboutRef = useRef(null);
  const router = useRouter();

  const handleAboutClick = () => {
    router.push("/#about"); // Navigate to the home page with the '/about' URL
  };
  return (
    <div className='w-full banner  h-auto'>
        <Navbar handleAboutClick={handleAboutClick} />
        <Banner/>
    </div>
  )
}

export default NavBannerBg