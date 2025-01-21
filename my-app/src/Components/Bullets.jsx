import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Bullets = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2 text-white">
      <div>
        <div className="flex items-center gap-1 pb-2">
          <IoIosCheckmarkCircle className="text-secondary" size={20} />
          <p className="font-medium text-base">Guaranteed Results</p>
        </div>
        <div className="flex items-center gap-1 pb-2">
          <IoIosCheckmarkCircle className="text-secondary" size={20} />
          <p className="font-medium text-base">Native British Experts</p>
        </div>
        <div className="flex items-center gap-1">
          <IoIosCheckmarkCircle className="text-secondary" size={20} />
          <p className="font-medium text-base">Money Back Guarantee</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1 pb-2">
          <IoIosCheckmarkCircle className="text-secondary" size={20} />
          <p className="font-medium text-base">Low Pricing</p>
        </div>
        <div className="flex items-center gap-1 pb-2">
          <IoIosCheckmarkCircle className="text-secondary" size={20} />
          <p className="font-medium text-base">Top Quality Work</p>
        </div>
        <div className="flex items-center gap-1">
          <IoIosCheckmarkCircle className="text-secondary" size={20} />
          <p className="font-medium text-base">On Time Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Bullets;
