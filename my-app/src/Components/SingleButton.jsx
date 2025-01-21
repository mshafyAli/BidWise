import { IoLogoWhatsapp } from "react-icons/io";

const SingleButton = () => {
  return (
    <div className="fixed hidden md:block bottom-2  left-2  z-50 ">
      <a
        href={`https://wa.me/447397145697?text=${encodeURIComponent(
          "Hello British PhD Writers, I want to inquire about your services please."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-green w-full md:w-[200px] h-8 flex gap-2 items-center justify-center rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg animate-bounce">
          <IoLogoWhatsapp className="text-2xl text-white" />
          <h1 className="text-white font-bold text-sm  uppercase">
            Get Instant Quote
          </h1>
        </div>
      </a>
    </div>
  );
};

export default SingleButton;
