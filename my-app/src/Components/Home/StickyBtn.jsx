import { FaWhatsapp, FaPhoneAlt,  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const StickyBtn = () => {
  return (
    <div className="fixed hidden bottom-[25%] left-4 md:flex flex-col items-center gap-2 z-50">
      <div className="bg-primary cursor-pointer w-10 h-10 rounded-full flex justify-center items-center duration-500 ease-in-out before:transition-transform before:duration-500 before:ease-in-out hover:bg-green-600">
        <FaWhatsapp color="white" size={20} />
      </div>
      <div className="bg-primary cursor-pointer w-10 h-10 rounded-full flex justify-center items-center duration-500 ease-in-out before:transition-transform before:duration-500 before:ease-in-out hover:bg-gray-400">
        <IoIosMail color="white" size={20} />
      </div>
      <div className="bg-primary cursor-pointer w-10 h-10 rounded-full flex justify-center items-center duration-500 ease-in-out before:transition-transform before:duration-500 before:ease-in-out hover:bg-blue-400">
        <FaPhoneAlt color="white" size={20} />
      </div>
      
    </div>
  );
};

export default StickyBtn;
