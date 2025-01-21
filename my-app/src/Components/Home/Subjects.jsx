import React, { useState } from "react";
import Image from "next/image";
import ReviewsAndWhatsApp from "../ReviewsAndWhatsApp";
import { FaAtom, FaBacterium, FaBolt, FaBrain, FaBriefcase, FaBuilding, FaBullhorn, FaCalculator, FaChartBar, FaChartLine, FaCode, FaCog, FaCogs, FaDatabase, FaDna, FaDollarSign, FaFilm, FaFingerprint, FaFish, FaFlask, FaGamepad, FaGlobe, FaGlobeAmericas, FaHtml5, FaJava, FaLaptopCode, FaLeaf, FaLightbulb, FaMicrochip, FaMountain, FaPaintBrush, FaPencilRuler, FaPills, FaPython, FaRobot, FaRocket, FaServer, FaShieldAlt, FaShippingFast, FaTasks, FaUserNurse, FaUserTie, FaVial } from "react-icons/fa";
import { RiFunctionLine } from "react-icons/ri"; // For Sigma

const subjectsCard = [
  {
    id: 1,
    title: "Mathematics",
    icon: <FaCalculator size={30} color="white" />,
  },
  {
    id: 2,
    title: "Nursing",
    icon: <FaUserNurse size={30} color="white" />,
  },
  {
    id: 3,
    title: "Chemistry",
    icon: <FaFlask size={30} color="white" />,
  },
  {
    id: 4,
    title: "Statistics",
    icon: <FaChartBar size={30} color="white" />,
  },
  {
    id: 5,
    title: "Algebra",
    icon: <RiFunctionLine size={30} color="white" />,
  },
  {
    id: 6,
    title: "Physics",
    icon: <FaAtom size={30} color="white" />,
  },
  {
    id: 7,
    title: "Economics",
    icon: <FaDollarSign size={30} color="white" />,
  },
  {
    id: 8,
    title: "Python",
    icon: <FaPython size={30} color="white" />,
  },
  
  { id: 9, title: "Business Management", icon: <FaBriefcase  size={30} color="white" /> },
  { id: 10, title: "Marketing", icon: <FaBullhorn size={30} color="white" /> },
  { id: 11, title: "Finance", icon: <FaChartLine size={30} color="white" /> },
  { id: 12, title: "Accounting", icon: <FaCalculator size={30} color="white" /> },
  { id: 13, title: "Engineering", icon: <FaCogs size={30} color="white" /> },
  { id: 14, title: "HRM", icon: <FaUserTie size={30} color="white" /> },
  { id: 15, title: "ENTR", iconnc: <FaLightbulb size={30} color="white" /> },
  { id: 16, title: "Supply Chain and Logistics", icon: <FaShippingFast size={30} color="white" /> },
  { id: 17, title: "Project Management", icon: <FaTasks size={30} color="white" /> },
  { id: 18, title: "Civil Engineering", icon: <FaBuilding size={30} color="white" /> },
  { id: 19, title: "Mechanical Engineering", icon: <FaCog size={30} color="white" /> },
  { id: 20, title: "Electrical Engineering", icon: <FaBolt size={30} color="white" /> },
  { id: 21, title: "Electronic Engineering", icon: <FaMicrochip size={30} color="white" /> },
  { id: 22, title: "Chemical Engineering", icon: <FaFlask size={30} color="white" /> },
  { id: 23, title: "Aerospace Engineering", icon: <FaRocket size={30} color="white" /> },
  { id: 24, title: "Software Engineering", icon: <FaLaptopCode size={30} color="white" /> },
  { id: 25, title: "International Business ", icon: <FaGlobe size={30} color="white" /> },
  { id: 26, title: "Robotics and Automation", icon: <FaRobot size={30} color="white" /> },
  { id: 27, title: "Artificial Intelligence", icon: <FaBrain size={30} color="white" /> },
  { id: 28, title: "Machine Learning", icon: <FaChartBar size={30} color="white" /> },
  { id: 29, title: "Biochemistry", icon: <FaVial size={30} color="white" /> },
  { id: 30, title: "Biotechnology", icon: <FaDna size={30} color="white" /> },
  { id: 31, title: "Microbiology", icon: <FaBacterium size={30} color="white" /> },
  { id: 32, title: "Environmental Science", icon: <FaLeaf size={30} color="white" /> },
  { id: 33, title: "Geology", icon: <FaMountain size={30} color="white" /> },
  { id: 34, title: "Earth Sciences", icon: <FaGlobeAmericas size={30} color="white" /> },
  { id: 35, title: "Forensic Science", icon: <FaFingerprint size={30} color="white" /> },
  { id: 36, title: "Marine Biology", icon: <FaFish size={30} color="white" /> },
  { id: 37, title: "Pharmacology", icon: <FaPills size={30} color="white" /> },
  { id: 38, title: "Computer Science", icon: <FaCode size={30} color="white" /> },
  { id: 39, title: "Cybersecurity", icon: <FaShieldAlt size={30} color="white" /> },
  { id: 40, title: "Information Systems", icon: <FaServer size={30} color="white" /> },
  { id: 41, title: "Web Development", icon: <FaHtml5 size={30} color="white" /> },
  { id: 42, title: "Game Development", icon: <FaGamepad size={30} color="white" /> },
  { id: 43, title: "Data Sciee", icon: <FaDatabase size={30} color="white" /> },
  { id: 44, title: "Java", icon: <FaJava size={30} color="white" /> },
  { id: 45, title: "Graphic Design", icon: <FaPencilRuler size={30} color="white" /> },
  { id: 46, title: "Fine Arts", icon: <FaPaintBrush size={30} color="white" /> },
  { id: 47, title: "Film and Media Studies", icon: <FaFilm size={30} color="white" /> },
];
// const Subjects = () => {
//   const itemsPerPage = 12; // Number of items to show per page
//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentSubjects = subjectsCard.slice(startIndex, startIndex + itemsPerPage);

//   const totalPages = Math.ceil(subjectsCard.length / itemsPerPage);





//   return (
//     <div className="Cta w-full md:h-[350px] mt-12 md:mb-[16rem]">
//       <div className="md:w-[75%] w-[95%] mx-auto">
//         <div className="pt-16  text-white ">
//           <h1 className="text-xl md:px-24 md:text-3xl font-bold  px-1 text-center">
//             Master Your Online Classes with Our Pro Help from Top Subject Matter
//             Experts!
//           </h1>

//           <p className="md:px-24 pt-4 text-sm text-center">
//             At British PhD Writers , we understand the importance of
//             quality assistance for online classes. That&apos;s why we&apos;ve assembled a
//             team of subject matter experts from top universities so that you can
//             &quot;pay someone to my online class&quot; to succeed. Our tutors have
//             advanced degrees and extensive experience in their respective
//             fields, and they are passionate about helping students like you.
//             With their expertise and guidance, you can feel confident in your
//             online classes and reach your full potential. Whether you need help
//             with a specific academic or ongoing support, our subject matter
//             experts are here to help.
//           </p>
//         </div>

//         <div className="flex md:items-center justify-center pt-4 md:px-4">
//           <div className="grid grid-cols-2  gap-2 md:grid-cols-6">
//             {currentSubjects.map((card, index) => (
//               <div
//                 key={index}
//                 className=" p-4 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center"
//               >
//                 <div className="flex items-center justify-center  w-14 h-14 bg-black text-white rounded-full mb-4">
//                   {card.icon}
//                 </div>

//                 <h2 className="md:text-lg text-sm font-bold mb- text-center">{card.title}</h2>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-center items-center mt-6">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentPage(index + 1)}
//             className={`px-3 py-1 mx-1 rounded text-base ${
//               currentPage === index + 1 ? "bg-primary text-white" : "bg-secondary"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//         <div className="flex  justify-center items-center  md:-mt-2 pb-6 md:pb-0">
//         <ReviewsAndWhatsApp />
//         </div>
//       </div>
//     </div>
//   );
// };

const Subjects = () => {
  const itemsPerPage = 12; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSubjects = subjectsCard.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(subjectsCard.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="Cta w-full md:h-[350px] mt-12 md:mb-[19rem]">
      <div className="md:w-[75%] w-[95%] mx-auto">
        <div className="pt-16 text-white">
          <h1 className="text-xl md:px-24 md:text-3xl font-bold px-1 text-center">
            Master Your Online Classes with Our Pro Help from Top Subject Matter Experts!
          </h1>

          <p className="md:px-24 pt-4 text-sm text-center">
            At British PhD Writers, we understand the importance of quality assistance for online classes. That&apos;s why we&apos;ve assembled a
            team of subject matter experts from top universities so that you can &quot;pay someone to my online class&quot; to succeed. Our tutors have
            advanced degrees and extensive experience in their respective fields, and they are passionate about helping students like you. With their
            expertise and guidance, you can feel confident in your online classes and reach your full potential. Whether you need help with a specific
            academic or ongoing support, our subject matter experts are here to help.
          </p>
        </div>

        <div className="flex md:items-center justify-center pt-4 md:px-4">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
            {currentSubjects.map((card, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-black text-white rounded-full mb-4">
                  {card.icon}
                </div>

                <h2 className="md:text-lg text-sm font-bold text-center">{card.title}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 rounded bg-secondary text-white disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 rounded md:bg-primary bg-green text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <div className="flex justify-center items-center md:-mt-2 pb-6 md:pb-0">
          <ReviewsAndWhatsApp />
        </div>
      </div>
    </div>
  );
};


export default Subjects;



