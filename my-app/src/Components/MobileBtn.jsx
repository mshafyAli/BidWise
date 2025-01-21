import { FaGift } from "react-icons/fa";

import { IoLogoWhatsapp } from "react-icons/io";

const MobileBtn = () => {
    
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-start justify-center md:gap-4 gap-2 md:my-8 my-4 ">
      
      {/* Reviews Button */}
      <a href={`https://wa.me/447397145697?text=${encodeURIComponent(
        "Hello British PhD Writers, I want to avail my secure promo code BPW-OFF50"
      )}`}
        target="_blank"
        rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 bg-secondary text-white px-4 md:py-1 rounded-md shadow-lg w-full py-2  cursor-pointer group hover:text-primary" >
        <FaGift className="text-white text-2xl  group-hover:text-primary " />
        <h1 className="font-bold text-sm md:text-base uppercase group-hover:text-primary text-white">
        Avail Promo Code
        </h1>
      </a>

      {/* WhatsApp Button */}
      <a
      href={`https://wa.me/447397145697?text=${encodeURIComponent(
        "Hello British PhD Writers, I want to inquire about your services please."
      )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center md:justify-start gap-2 bg-green text-white px-4 py-2 md:py-1 rounded-md  w-full group hover:text-primary"
      >
        <IoLogoWhatsapp className="text-white text-2xl group-hover:text-primary" />
        <h1 className="font-bold text-sm md:text-base uppercase group-hover:text-primary text-white">
          WHATSAPP NOW
        </h1>
      </a>

    </section>
  );
};

export default MobileBtn;



