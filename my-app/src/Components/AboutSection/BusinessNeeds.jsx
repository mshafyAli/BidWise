


import Image from "next/image"

const icons1 = [
  "/icon1.svg", "/icon2.svg", "/icon3.svg", "/icon4.svg", "/icon5.svg", "/icon6.svg", "/icon7.svg", "/icon8.svg", "/icon9.svg", "/icon10.svg",
  "/icon11.svg", "/icon12.svg", "/icon13.svg", "/icon14.svg",
];

const icons2 = [
  "/icon15.svg", "/icon16.svg", "/icon17.svg", "/icon18.svg", "/icon19.svg", "/icon20.svg","/icon21.svg", "/icon22.svg", "/icon23.svg",
  "/icon24.svg", "/icon25.svg", "/icon26.svg", "/icon27.svg",
];

const BusinessNeeds = () => {
  return (
    <div className="bg-tertiary w-full h-auto pb-12">
      <div className="py-6 text-white text-center md:w-1/2 w-[90%] mx-auto">
        <h1 className="font-bold text-3xl hidden md:block">
          Futuristic Technology Unique to All <br /> Business Needs
        </h1>
        <h1 className="font-bold text-2xl block md:hidden">
          Futuristic Technology Unique to All Business Needs
        </h1>
        <p className="pt-2 md:text-sm text-base">
          We are experts with highly innovative and cutting-edge digital
          technology, built exclusively around your business vision.
        </p>
      </div>
      <SmallVideoCarousel />
      <SmallVideoCarousel2 />
    </div>
  );
};

export default BusinessNeeds;

const SmallVideoCarousel = () => {
  const carouselIcons = [...icons1, ...icons1, ...icons1]; // Loop back to icons1 after icons2

  return (
    <div className="overflow-clip">
      <div className="animate-carousel-move md:animate-carousel-moveMd flex gap-3">
        {carouselIcons.map((icon, index) => (
          <div key={index} className="">
            <div className="bg-white w-[5rem] h-[5rem] rounded-lg flex justify-center items-center">
              <Image src={icon} className="w-16 h-16" width={40} height={40} alt={`icon-${index}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SmallVideoCarousel2 = () => {
  const carouselIcons = [...icons2, ...icons2, ...icons2]; // Loop back to icons2 after icons1

  return (
    <div className="overflow-clip mt-3">
      <div className="animate-carousel-move md:animate-carousel-moveMd flex gap-3">
        {carouselIcons.map((icon, index) => (
          <div key={index} className="">
            <div className="bg-white w-[5rem] h-[5rem] rounded-lg flex justify-center items-center">
              <Image src={icon} className="w-16 h-16" width={40} height={40}  alt={`icon-${index}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



