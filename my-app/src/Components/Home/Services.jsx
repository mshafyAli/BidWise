import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Importing Next.js Image component

import WebBg from "../../../public/WebBg.webp";
import MobileBg from "../../../public/MobileBg.webp";
import WebRight from "../../../public/WebRight.webp";
import MobileRight from "../../../public/MobileRight.webp";
import { GoDotFill } from "react-icons/go";

// Services data
const services = [
  {
    id: 1,
    name: "Web Development",
    bgImage: WebBg,
    description:
      "At Bidwise, we don't just build websites; we craft digital experiences that leave a lasting impression. As a leading web development agency. we have successfully designed and developed over 300 websites, catering to diverse industries globally.",
    rightImage: WebRight,
  },
  {
    id: 2,
    name: "Mobile Application Development",
    bgImage: MobileBg,
    description: "Bidwise is the best mobile app development company, Offering high quality, creative, scalable, and custom Mobile App Development services for IOS, Android, and cross-platform applications. Our skilled app developers build unparalleled mobile applications that ignite inspiration, engage your target audience, and promote your business online.",
    rightImage: MobileRight,
  },
  {
    id: 3,
    name: "Digital Marketing",
    bgImage: WebBg,
    description: "Grow your online business with Bidwise, a leading digital marketing agency. Digital Gravity is a digital marketing company for small businesses with affordable multi-channel digital marketing services to various big and small businesses.",
    rightImage: WebRight,
  },
  {
    id: 4,
    name: "Digital Branding & Communication",
    bgImage: MobileBg,
    description: "We stand among industry leaders and AI companies and offer our innovative powers of artificial intelligence, If you are struggling with challenges and are unable to cross hurdles of efficiency and productivity we can accelerate your business tasks with enhanced automation. Hence, let’s explore the exciting realm of AI and ML together and avail our AI development services today.",
    rightImage: WebRight,
  },
  {
    id: 5,
    name: "AI Developemt",
    bgImage: WebBg,
    description: "Let Bidwise be your branding agency in creating an exceptional brand identity that will capture attention. Our services include strategic brand positioning, precise segmentation, and targeted marketing to attract the right audience for you. With a blend of innovation and expertise, we can transform your story, reshape narratives, and help you foster meaningful connections with consumers. Join us on a journey towards redefining how your brand thrives in the digital world.",
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

      <div className="layout">
        <div className="flex flex-col md:flex-row md:justify-between items-center  h-auto py-16  relative z-5">
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
                  className={`cursor-pointer text-2xl transition-all duration-300 ${
                    activeServiceIndex === index
                      ? "text-white text-2xl font-bold"
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
            <h1 className="text-3xl font-bold">{services[activeServiceIndex].name}</h1>
            <Image
              src={services[activeServiceIndex].rightImage}
              alt={services[activeServiceIndex].name}
              width={540} // Adjust width as per your design
              height={480} // Adjust height as per your design
              className=" "
            />
            <p className="text-base pr-16 -mt-6">
              {services[activeServiceIndex].description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
