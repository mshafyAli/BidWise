import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Importing Next.js Image component

import WebBg from "./public/WebBg.webp";
import MobileBg from "./public/MobileBg.webp";
import WebRight from "./public/WebRight.webp";
import MobileRight from "./public/MobileRight.webp";
import { GoDotFill } from "react-icons/go";

// Services data
const services = [
  {
    id: 1,
    name: "Web Development",
    bgImage: WebBg,
    description:
      "Get an edge over your competitors and boost your profitability with magnetic web experiences.Maven Tech Digital is the choice of the UAE’s leading brands for website design and web development services in Dubai. Whether it’s custom web development or WordPress web development, we make sure you get the best of both worlds in the form of a responsive, secure, and high-performance website.",
    rightImage: WebRight,
  },
  {
    id: 2,
    name: "Mobile Application Development",
    bgImage: MobileBg,
    description: "Develop high-performance mobile applications.",
    rightImage: MobileRight,
  },
  {
    id: 3,
    name: "Digital Marketing",
    bgImage: WebBg,
    description: "Maximize your reach with digital marketing strategies.",
    rightImage: WebRight,
  },
  {
    id: 4,
    name: "Digital Branding & Communication",
    bgImage: MobileBg,
    description: "Maximize your reach with digital marketing strategies.",
    rightImage: WebRight,
  },
  {
    id: 5,
    name: "UI/UX DESIGN",
    bgImage: WebBg,
    description: "Maximize your reach with digital marketing strategies.",
    rightImage: WebRight,
  },
];

function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const leftSectionRef = useRef(null);

  // Function to handle scrolling inside the left section
  const handleWheel = (e) => {
    if (leftSectionRef.current) {
      leftSectionRef.current.scrollTop += e.deltaY;
    }
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${services[activeServiceIndex].bgImage.src})`,
          transition: "background-image 0.5s ease-in-out",
        }}
      />

      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:min-h-screen h-auto py-10 md:py-0 relative z-5">
          {/* Left Section with service names */}
          <div
            className="flex items-center justify-center gap-4 pl-4 overflow-hidden"
            onWheel={handleWheel}
          >
            <div className="flex justify-center items-center gap-6">
              <div className="w-4 h-9 border-2 border-white border-opacity-10 rounded-t-full rounded-b-full flex justify-center items-center">
                <motion.div
                  animate={{ y: [-10, 10] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <GoDotFill className="text-white text-opacity-10" size={10} />
                </motion.div>
              </div>
              <div className="w-[1px] h-[14rem] bg-white bg-opacity-10"></div>
            </div>
            {/* Scrollable names container */}
            <div
              className="space-y-2 overflow-y-auto h-[14rem]"
              ref={leftSectionRef}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: index === activeServiceIndex ? 1 : 0.4, // Control opacity for inactive items
                  }}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeServiceIndex === index
                      ? "text-white font-bold"
                      : "text-white text-opacity-20"
                  }`}
                >
                  {service.name}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Section with active service details */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white md:w-[60%] w-full"
          >
            <h1>{services[activeServiceIndex].name}</h1>
            <Image
              src={services[activeServiceIndex].rightImage}
              alt={services[activeServiceIndex].name}
              width={640} // Adjust width as per your design
              height={480} // Adjust height as per your design
              className="w-full h-auto"
            />
            <p className="text-[11px]">
              {services[activeServiceIndex].description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
