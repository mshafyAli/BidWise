
import { motion } from "framer-motion";
import Image from "next/image";
import { PiHandGrabbingBold } from "react-icons/pi";

// Data for our work section
const OurWorkData = [
  {
    id: 1,
    src: "/work1.webp", // Using relative paths for images
    alt: "Project 1",
    width: 400,
    height: 300,
    title: "Betterhomes",
    description:
      "Establishing a dynamic presence with incredible reach for a business with dedicated efforts to the real estate industry.",
  },
  {
    id: 2,
    src: "/work2.webp",
    alt: "Project 2",
    width: 400,
    height: 300,
    title: "CryptoSouk",
    description:
      "Developing a user-friendly interface for a business with dedicated efforts to the real estate industry.",
  },
  {
    id: 3,
    src: "/work3.webp",
    alt: "Project 3",
    width: 400,
    height: 300,
    title: "CryptoSouk",
    description:
      "Developing a user-friendly interface for a business with dedicated efforts to the real estate industry.",
  },
  {
    id: 4,
    src: "/work4.webp",
    alt: "Project 4",
    width: 400,
    height: 300,
    title: "CryptoSouk",
    description:
      "Developing a user-friendly interface for a business with dedicated efforts to the real estate industry.",
  },
  {
    id: 5,
    src: "/work5.webp",
    alt: "Project 5",
    width: 400,
    height: 300,
    title: "CryptoSouk",
    description:
      "Developing a user-friendly interface for a business with dedicated efforts to the real estate industry.",
  },
];

const OurWork = () => {
  return (
    <div className="bg-darkGray w-full py-12 overflow-hidden">
      <div className="pl-8 md:pl-24 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold text-center md:text-left">
          Our Work
        </h1>
      </div>

      <motion.div
        className="flex gap-4 px-4 md:px-8 md:pl-24 cursor-grab"
        drag="x" // Enable horizontal dragging
        dragConstraints={{ left: -1000, right: 0 }} // Adjust constraints to allow dragging of all images
        dragElastic={0.2} // Set constraints on the drag distance
      >
        {OurWorkData.map((item) => (
          <motion.div
            key={item.id}
            className="min-w-[15rem] sm:min-w-[20rem] md:min-w-[25rem] overflow-hidden group"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="w-full h-[15rem] sm:h-[20rem] object-cover filter grayscale group-hover:grayscale-0 transition-transform duration-300 group-hover:scale-105"
            />
            <h1 className="text-white font-bold py-2 text-lg sm:text-xl">{item.title}</h1>
            <p className="text-xs sm:text-sm text-[#7C7C7C]">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex flex-col items-center mt-4">
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-2"
        >
          <PiHandGrabbingBold className="mx-auto text-2xl text-white" />
        </motion.div>
        <h4 className="text-xs sm:text-sm text-[#7C7C7C] text-center">Drag to see more</h4>
      </div>
    </div>
  );
};

export default OurWork;
