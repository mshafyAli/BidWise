import Banner from "./Banner";
import Navbar from "../Navbar";

const NavBannerBg = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      
      <div className="absolute inset-0 bg-servicesHero bg-cover bg-center z-0"></div>
      
      {/* Navbar and Banner Components */}
      <div className="relative z-20">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
};

export default NavBannerBg;
