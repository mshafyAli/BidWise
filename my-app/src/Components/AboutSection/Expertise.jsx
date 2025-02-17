

import { useState } from "react";

const Expertise = () => {
  // State to store the currently selected item
  const [selectedExpert, setSelectedExpert] = useState({
    id: 1,
    img: "https://www.digitalgravity.ae/assets/svg/experties/icon-1.svg",
    description:
      "A steady stream of insights assists you in making informed business decisions. Whether you are an e-commerce business or a corporate firm, a data-savvy tech firm or a blockchain start-up, Maven Tech Digital analytics services and solutions will help your organization grow and stay ahead of the competition.",
  });

  const ExpertData = [
    {
      id: 1,
      img: "https://www.digitalgravity.ae/assets/svg/experties/icon-1.svg",
      title: "Data & Analytics Solutions",
      description:
        "A steady stream of insights assists you in making informed business decisions. Whether you are an e-commerce business or a corporate firm, a data-savvy tech firm or a blockchain start-up, Maven Tech Digital analytics services and solutions will help your organization grow and stay ahead of the competition.",
    },
    {
      id: 2,
      img: "https://www.digitalgravity.ae/assets/svg/experties/icon-2.svg",
      title: "Digital Marketing",
      description:
        "We deliver results-driven digital marketing services, including SEO, PPC, and social media marketing...",
    },
    {
      id: 3,
      img: "https://www.digitalgravity.ae/assets/svg/experties/icon-3.svg",
      title: "Creative Designing",
      description:
        "Our creative designing solutions bring innovation and freshness to your brand identity...",
    },
    {
      id: 4,
      img: "https://www.digitalgravity.ae/assets/svg/experties/icon-4.svg",
      title: "Web Design & Development",
      description:
        "We provide state-of-the-art web design and development services for businesses of all sizes...",
    },
    {
      id: 5,
      img: "https://www.digitalgravity.ae/assets/svg/experties/icon-5.svg",
      title: "Digital Commerce",
      description:
        "Our digital commerce solutions drive growth and increase conversions for e-commerce platforms...",
    },
    {
      id: 6,
      img: "https://www.digitalgravity.ae/assets/svg/experties/icon-6.svg",
      title: "Cyber Security Services",
      description:
        "Protect your business with our comprehensive cyber security services...",
    },
    {
      id: 7,
      img: "https://www.digitalgravity.ae/assets/svg/experties/icon-7.svg",
      title: "Application Development",
      description:
        "Our team builds robust and scalable applications tailored to your business needs...",
    },
    {
      id: 8,
      img: "https://www.digitalgravity.ae/assets/svg/experties/icon-8.svg",
      title: "Quality Engineering & Testing",
      description:
        "Ensure the quality of your products with our expert engineering and testing services...",
    },
    {
      id: 9,
      img: "https://www.digitalgravity.ae/assets/svg/experties/icon-9.svg",
      title: "Resource Outsourcing",
      description:
        "We offer reliable and scalable resource outsourcing solutions to meet your staffing needs...",
    },
  ];

  // Function to update selected item
  const handleSelectExpert = (item) => {
    setSelectedExpert({
        id: item.id,
      img: item.img,
      description: item.description,
    });
  };

  return (
    <div className="bg-primary w-full h-auto mt-14 pb-10">
      <h1 className="text-4xl pl-24 py-4 font-bold text-white">Expertise</h1>
      <div className="md:w-[80%] w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 justify-between">
          {/* Left side - Image and description */}
          <div className="md:w-1/2 w-full flex flex-col md:justify-start md:items-start justify-center items-center">
            <img
              src={selectedExpert.img}
              className="opacity-40 w-[10rem] h-auto"
              alt=""
            />
            <h4 className="text-sm text-white py-8 w-[60%]">
              {selectedExpert.description}
            </h4>
          </div>

          {/* Right side - Grid of expertise */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {ExpertData.map((item) => (
              <div
                className={`cursor-pointer  p-3 ${
                  selectedExpert.id === item.id
                    ? "bg-[#D40835]"
                    : "bg-transparent"
                } hover:bg-[#D40835]`}
                key={item.id}
                onClick={() => handleSelectExpert(item)}
              >
                <img src={item.img} className="w-[2.5rem] h-auto" alt="" />
                <h1 className="text-white text-sm py-2">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;

