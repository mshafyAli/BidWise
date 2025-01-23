import { HiMiniArrowLongRight } from "react-icons/hi2";
import highlight1 from "../../assets/highlight1.webp";
import highlight2 from "../../assets/highlight2.webp";
import highlight3 from "../../assets/highlight3.webp";
import highlight4 from "../../assets/highlight4.webp";
import subWeb2 from "../../assets/subWeb2.webp";
import subWeb3 from "../../assets/subWeb3.webp";
import subWeb4 from "../../assets/subWeb4.webp";
import subWeb5 from "../../assets/subWeb5.webp";
import subWeb6 from "../../assets/subWeb6.webp";
import subSeo1 from "../../assets/subSeo1.webp";
import subSeo2 from "../../assets/subSeo2.webp";
import subSeo3 from "../../assets/subSeo3.webp";
import subApp1 from "../../assets/subApp1.webp";
import subApp2 from "../../assets/subApp2.webp";
import subApp3 from "../../assets/subApp3.webp";
import subApp4 from "../../assets/subApp4.webp";
import subApp5 from "../../assets/subApp5.webp";
import subApp6 from "../../assets/subApp6.webp";
import secSeo1 from "../../assets/secSeo1.webp";
import secSeo2 from "../../assets/secSeo2.webp";
import subSsm1 from "../../assets/subSsm1.webp";
import subSsm2 from "../../assets/subSsm2.webp";
import subSsm3 from "../../assets/subSsm3.webp";
import subPrint1 from "../../assets/subPrint1.webp";
import subPrint2 from "../../assets/subPrint2.webp";
import subPrint3 from "../../assets/subPrint3.webp";
import subPrint4 from "../../assets/subPrint4.webp";


import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sectionData = [
  {
    id: 1,
    image: highlight1,
    alt: "Project 1",
    name: "Palm Marina",
    brands: "Website",
    topic: "Branding"
  },
  {
    id: 2,
    image: highlight2,
    alt: "Project 2",
    name: "Jino",
    brands: "Website",
    topic: "Branding"
  },
  {
    id: 3,
    image: highlight3,
    alt: "Project 3",
    name: "Rmal Hospitality",
    brands: "Website",
    topic: "Branding"
  },
  {
    id: 4,
    image: highlight4,
    alt: "Project 4",
    name: "Emaar",
    brands: "Website",
    topic: "Branding"
  },
  {
    id: 5,
    image: secSeo1,
    alt: "Project 5",
    name: "capital Health",
    brands: "Seo",
    topic: "Branding"
  },
  {
    id: 6,
    image: secSeo2,
    alt: "Project 6",
    name: "MH Services",
    brands: "Seo",
    topic: "Branding"
  }

];

const subSectionData = [
  {
    id: 1,
    image: highlight2,
    alt: "Project 1",
    name: "Jino",
    brands: "Website",
    topic:"Branding"
  },
  {
    id: 2,
    image: subWeb2,
    alt: "Project 2",
    name: "Saeed",
    brands: "Website",
    topic:"Branding"
  },
  {
    id: 3,
    image: subWeb3,
    alt: "Project 3",
    name: "Belgravia",
    brands: "Website",
    topic:"Branding"
  },
  {
    id: 4,
    image: subWeb4,
    alt: "Project 4",
    name: "Capital Health",
    brands: "Website",
    topic:"Branding"
  },
  {
    id: 5,
    image: subWeb5,
    alt: "Project 5",
    name: "Picpax",
    brands: "Website",
    topic:"Branding"
  },
  {
    id: 6,
    image: subWeb6,
    alt: "Project 6",
    name: "DpWorld",
    brands: "Website",
    topic:"Branding"
  },
  {
    id: 7,
    image: subSeo1,
    alt: "Project 7",
    name: "Gj",
    brands: "SEO",
    topic:"Branding"
  },
  {
    id: 8,
    image: subSeo2,
    alt: "Project 8",
    name: "The Reliable Interior",
    brands: "SEO",
    topic:"Branding"
  },
  {
    id: 9,
    image: subSeo3,
    alt: "Project 9",
    name: "Goyzer",
    brands: "SEO",
    topic:"Branding"
  },
  {
    id: 10,
    image: subApp1,
    alt: "Project 10",
    name: "Jino",
    brands: "Mobile App",
    topic:"Marketing"
  },
  {
    id: 11,
    image: subApp2,
    alt: "Project 11",
    name: "Saeed",
    brands: "Mobile App",
    topic:"Marketing"
  },
  {
    id: 12,
    image: subApp3,
    alt: "Project 12",
    name: "Belgravia",
    brands: "Mobile App",
    topic:"Marketing"
  },
  {
    id: 13,
    image: subApp4,
    alt: "Project 13",
    name: "Capital Health",
    brands: "Mobile App",
    topic:"Marketing"
  },
  {
    id: 14,
    image: subApp5,
    alt: "Project 14",
    name: "Picpax",
    brands: "Mobile App",
    topic:"Marketing"
  },
  {
    id: 15,
    image: secSeo1,
    alt: "Project 15",
    name: "Capital Health",
    brands: "ppc",
    topic:"Branding"
  },
  {
    id: 16,
    image: subApp6,
    alt: "Project 15",
    name: "DpWorld",
    brands: "Mobile App",
    topic:"Marketing"
  },
  
  {
    id: 17,
    image: subSeo1,
    alt: "Project 15",
    name: "Gj",
    brands: "ppc",
    topic:"Branding"
  },
  {
    id: 18,
    image: subSeo2,
    alt: "Project 15",
    name: "Reliable Interior",
    brands: "ppc",
    topic:"Branding"
  },
  {
    id: 19,
    image: secSeo1,
    alt: "Project 15",
    name: "Capital Health",
    brands: "smm",
    topic:"Marketing"
  },
  {
    id: 20,
    image: subSsm1,
    alt: "Project 15",
    name: "Nazra",
    brands: "smm",
    topic:"Marketing"
  },
  {
    id: 21,
    image: subSsm2,
    alt: "Project 15",
    name: "Lead",
    brands: "smm",
    topic:"Marketing"
  },
  {
    id: 22,
    image: subSsm3,
    alt: "Project 15",
    name: "Lets Discover",
    brands: "smm",
    topic:"Marketing"
  },
  {
    id: 23,
    image: subPrint1,
    alt: "Project 15",
    name: "MSM",
    brands: "Print",
    topic:"Marketing"
  },
  {
    id: 24,
    image: subPrint2,
    alt: "Project 15",
    name: "Global Catering",
    brands: "Print",
    topic:"Marketing"
  },
  {
    id: 25,
    image: subPrint3,
    alt: "Project 15",
    name: "Sharjah FDI",
    brands: "Print",
    topic:"Marketing"
  },
  {
    id: 26,
    image: subPrint4,
    alt: "Project 15",
    name: "Saeed Brochure",
    brands: "Print",
    topic:"Marketing"
  },
  
   
];

const SubSection = () => {
  const [scrollDirection, setScrollDirection] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeFilter, setActiveFilter] = useState("ALL"); // Default to "ALL"

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection(-120); // Move left
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection(20); // Move back to original position
    }

    setLastScrollY(currentScrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Function to filter sections based on the selected filter
  const filteredSectionData = activeFilter === "ALL"
    ? sectionData
    : sectionData.filter(item => item.brands.toLowerCase() === activeFilter.toLowerCase());

  // Adjust the sub-section filtering logic to match the active filter
  const filteredSubSectionData = activeFilter === "ALL"
    ? subSectionData
    : subSectionData.filter(item => item.brands.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="md:w-[80%] w-[90%] mx-auto mt-12 mb-24">
      <div className="flex flex-wrap justify-center md:gap-6 gap-2">
        {["ALL", "Website", "MOBILE APP", "SEO", "PPC", "SMM", "PRINT"].map((filter) => (
          <h1
            key={filter}
            className={`bg-lightGray md:px-8 px-4 py-2 text-sm text-[#7C7C7C] hover:bg-primary hover:text-white rounded-3xl cursor-pointer transform transition-all duration-300 ${activeFilter === filter ? 'bg-primary text-white' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </h1>
        ))}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-14 md:mt-10 mt-4">
        {filteredSectionData.map((item, index) => (
          <div
            key={item.id}
            className={`relative ${index % 2 === 0 ? "md:top-0" : "md:top-10"}`}
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                className="object-cover transition-transform duration-300 cursor-pointer hover:scale-110"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="flex flex-col">
                <h2 className="font-semibold">{item.name}</h2>
                <h2 className="text-sm">{item.brands} | Branding</h2>
              </div>
              <div className="group cursor-pointer flex items-center gap-2">
                <h2 className="hover:bg-white group-hover:text-primary font-semibold">
                  View Case Study
                </h2>
                <button className="w-8 h-8 text-white group rounded-full bg-primary p-2 group-hover:bg-white group-hover:text-primary hover:text-primary shadow-md">
                  <HiMiniArrowLongRight className="transform transition-transform duration-200 group-hover:rotate-45" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <motion.h1
        className="text-primary uppercase font-bold text-6xl whitespace-nowrap mt-14 hidden md:block" // Prevent line breaks
        initial={{ x: 0, opacity: 0 }} // Start position
        animate={{ x: scrollDirection, opacity: 1 }} // Animate based on scroll direction
        transition={{ duration: 2.0 }} // Animation duration
      >
        Concept.Strategy.Executive
      </motion.h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:mt-12">
        {filteredSubSectionData.map((item, index) => (
          <div
            key={item.id}
            className={`relative ${index % 3 === 1 ? "md:top-10" : "md:top-0"}`}
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                className="object-cover w-full h-[20rem] cursor-pointer"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="flex flex-col">
                <h2 className="font-semibold">{item.name}</h2>
                <h2 className="text-[12px]">{item.brands} | Branding</h2>
              </div>
              <div className="group cursor-pointer flex items-center gap-2">
                <h2 className="hover:bg-white group-hover:text-primary font-semibold">
                  View Case Study
                </h2>
                <button className="w-8 h-8 text-white group rounded-full bg-primary p-2 group-hover:bg-white group-hover:text-primary hover:text-primary shadow-md">
                  <HiMiniArrowLongRight className="transform transition-transform duration-200 group-hover:rotate-45" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubSection;