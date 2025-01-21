import { IoLogoWhatsapp } from "react-icons/io";

const StickyBtn = () => {
  return (
    <div className="bg-white fixed bottom-0 z-50 left-0 right-0 mt-24 w-full md:hidden block">
      <div className="flex gap-1 py-2 px-2">
        <div className="flex-1">
          <div className="bg-secondary w-full h-16 flex justify-center rounded-md ">
            <div className="flex items-center gap-1 px-4 w-full  ">
              <IoLogoWhatsapp className="text-3xl text-secondary" />
              <h1 className="text-secondary font-bold text-xl">WhatsApp</h1>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <a
            href={`https://wa.me/447397145697?text=${encodeURIComponent(
              "Hello British PhD Writers, I want to inquire about your services please."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-green w-full h-16 flex justify-center rounded-md ">
              <div className="flex items-center gap-1 px-4 w-full ">
                <IoLogoWhatsapp className="text-3xl" color="white" />
                <h1 className="text-white font-bold text-xl">WhatsApp</h1>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBtn;
