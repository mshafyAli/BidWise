import { HiMiniStar } from "react-icons/hi2";
import { useState } from "react";
import Popup from "./Popup";

const ReviewBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="w-[90%] md:w-[75%] h-auto rounded-xl bg-[#F6F8FA] mx-auto my-10 md:my-20">
      {/* main container */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-60 p-6 md:p-10">
        {/* left side */}
        <div className="w-full md:w-[45%] text-[#020621] py-4 md:py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-green">CUSTOMER</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            SATISFACTION IS  OUR HIGHEST  PRIORITY
          </h2>
        </div>

        {/* right side */}
        <div className="w-full py-4 md:py-10">
          <h1 className="text-base md:text-xl text-[#878D98]">
            With 1,000,000+ students served and over 96% satisfaction rate,
            <br className="hidden md:block" />
            British PhD Writer is the service you can trust.
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-2 pt-6 md:pt-10">
            <div className="flex gap-2 items-center">
              <HiMiniStar color="white" size={20} className="bg-green" />
              <HiMiniStar color="white" size={20} className="bg-green" />
              <HiMiniStar color="white" size={20} className="bg-green" />
              <HiMiniStar color="white" size={20} className="bg-green" />
            </div>
            <div className="flex items-center gap-1">
              <div>
                <h1 className="text-lg md:text-xl">{"Excellent"}</h1>
              </div>
              <div className="text-sm md:text-base text-[#878D98]">- 9.7/10</div>
            </div>
          </div>

          {/* button */}
          <div className="bg-primary w-[150px] md:w-[250px] h-auto py-3 rounded-lg mt-4 md:mt-2 font-bold text-center text-sm md:text-[16px] text-white cursor-pointer" onClick={openModal}>
            WRITE A REVIEW
          </div>
        </div>
      </div>
      <Popup isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  );
};

export default ReviewBanner;

