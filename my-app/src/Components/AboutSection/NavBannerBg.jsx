import Navbar from "../Navbar";
import Banner from "./Banner";


const NavBannerBg = () => {
  return (
    <div
      className="w-full bg-AboutBg bg-cover  bg-darkGray h-auto" 
      
    >
      <Navbar />
      <Banner />
    </div>
  );
};

export default NavBannerBg;