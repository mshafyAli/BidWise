import { IoLogoWhatsapp } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";


const ReviewsAndWhatsApp = () => {
    const handleTalkToExpertClick = () => {
        if (window.Tawk_API?.maximize) {
          window.Tawk_API.maximize();
        } else {
          console.error("Tawk.to is not initialized or not loaded yet.");
        }
      };
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-start justify-center md:gap-4 gap-2 md:my-8 my-4 w-full md:w-auto">
      
      {/* Reviews Button */}
      <div className="flex items-center justify-center md:justify-start gap-2 bg-secondary text-white px-4 md:py-1 rounded-md shadow-lg w-full py-2 md:w-auto cursor-pointer group hover:text-primary" onClick={handleTalkToExpertClick}>
        <IoChatboxEllipses className="text-white text-2xl  group-hover:text-primary" />
        <h1 className="font-bold text-sm md:text-base uppercase group-hover:text-primary">
        Chat With Experts
        </h1>
      </div>

      {/* WhatsApp Button */}
      <a
       href={`https://wa.me/447397145697?text=${encodeURIComponent(
        "Hello British PhD Writers, I want to inquire about your services please."
      )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center md:justify-start gap-2 bg-green  text-white px-4 py-2 md:py-1 rounded-md  w-full md:w-auto group hover:text-primary"
      >
        <IoLogoWhatsapp className="text-white text-2xl group-hover:text-primary" />
        <h1 className="font-bold text-sm md:text-base uppercase group-hover:text-primary">
          WHATSAPP NOW
        </h1>
      </a>

    </section>
  );
};

export default ReviewsAndWhatsApp;
