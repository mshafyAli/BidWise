import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { PiHandGrabbingBold } from "react-icons/pi";

const services = [
    {
        title: "Website Maintenance",
        description:
          "BidWise provides ongoing website maintenance services, ensuring optimal performance, security, and up-to-date content.",
      },
      {
        title: "Digital Marketing",
        description:
          "We offer affordable multi-channel digital marketing services to a range of big and small businesses from various industries.",
      },
      {
        title: "Enterprise Development",
        description:
          "Specializing in enterprise web development, they create unique features and functionalities tailored to solve specific business challenges, enhancing day-to-day operations.",
      },
      {
        title: "Website Audit",
        description:
          "Our website audit services & website optimization services allow you to focus on running your business.",
      },
      {
        title: "Hosting and Administration",
        description:
          "Our Hosting and Administration services will keep your site healthy, functional, and performing optimally.",
      },
      {
        title: "Website Migration",
        description:
          "Our website migration services offer you comprehensive assistance for seamless sites and website migration.",
      },
      {
        title: "Payment Gateway Integrations",
        description:
          "Digital Gravity offers a payment gateway integration solution to enable seamless cross-border transactions.",
      },
      {
        title: "Performance Optimization",
        description:
          "Being Performance Optimization Experts, we conduct thorough analyses and audits to pinpoint areas needing improvement.",
      },
      {
        title: "Cyber security",
        description:
          "We are a trusted and trained cybersecurity provider for enterprise organizations and governments.",
      },
      {
        title: "QA Testing",
        description:
          "With a talented team of SQAs onboard we can help you with the most dependable QA testing services in UAE.",
      },
];

const Services = () => {
  return (
    <div className="bg-moreLightGray w-full h-auto py-12 overflow-hidden">
      <div className="pl-24 mb-8">
        <h1 className="text-4xl md:text-6xl font-bold">Our Web Services</h1>
      </div>

      {/* Container is draggable */}
      <motion.div
        className="flex items-center gap-4 cursor-grab"
        drag="x" // Enable horizontal dragging
        dragConstraints={{ right: 0, left: -3100 }} // Limit drag movement
        dragElastic={0.2} // Drag resistance
        initial={{ x: 0 }} // Start position
      >
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="relative w-[24rem] h-auto flex-shrink-0  bg-primary  backdrop-blur-sm rounded-3xl p-8 group hover:bg-tertiary transition-all duration-300"
          >
            <h2 className="text-white text-base font-bold mb-4">
              {service.title}
            </h2>
            <p className="text-white text-sm  mb-12">{service.description}</p>
            <button
              className="absolute bottom-6 right-6 w-8 h-8 bg-white rounded-full flex items-center justify-center
                          transition-transform duration-300 group-hover:rotate-90"
            >
              <Plus className="w-6 h-6 text-black" />
            </button>
          </div>
        ))}
      </motion.div>

      <div>
        <motion.div
          className="mt-6"
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <PiHandGrabbingBold className="mx-auto text-2xl" />
        </motion.div>

        <h3 className="text-[10px] text-[#7C7C7C] text-center">
          Drag to see more
        </h3>
      </div>
    </div>
  );
};

export default Services;



// "use client";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import { Plus } from "lucide-react";
// import { PiHandGrabbingBold } from "react-icons/pi";

// const services = [
//   {
//     title: "Website Maintenance",
//     description:
//       "BidWise provides ongoing website maintenance services, ensuring optimal performance, security, and up-to-date content.",
//   },
//   {
//     title: "Digital Marketing",
//     description:
//       "We offer affordable multi-channel digital marketing services to a range of big and small businesses from various industries.",
//   },
//   {
//     title: "Enterprise Development",
//     description:
//       "Specializing in enterprise web development, they create unique features and functionalities tailored to solve specific business challenges, enhancing day-to-day operations.",
//   },
//   {
//     title: "Website Audit",
//     description:
//       "Our website audit services & website optimization services allow you to focus on running your business.",
//   },
//   {
//     title: "Hosting and Administration",
//     description:
//       "Our Hosting and Administration services will keep your site healthy, functional, and performing optimally.",
//   },
//   {
//     title: "Website Migration",
//     description:
//       "Our website migration services offer you comprehensive assistance for seamless sites and website migration.",
//   },
//   {
//     title: "Payment Gateway Integrations",
//     description:
//       "Digital Gravity offers a payment gateway integration solution to enable seamless cross-border transactions.",
//   },
//   {
//     title: "Performance Optimization",
//     description:
//       "Being Performance Optimization Experts, we conduct thorough analyses and audits to pinpoint areas needing improvement.",
//   },
//   {
//     title: "Cyber security",
//     description:
//       "We are a trusted and trained cybersecurity provider for enterprise organizations and governments.",
//   },
//   {
//     title: "QA Testing",
//     description:
//       "With a talented team of SQAs onboard we can help you with the most dependable QA testing services in UAE.",
//   },
// ];

// const Services = () => {
//   const controls = useAnimation();
//   const cardWidth = 320; // Adjust based on card width (Tailwind: w-[20rem] ~ 320px)
//   const visibleCards = 3; // Number of cards to scroll at a time
//   const totalCards = services.length;
//   const pauseTime = 3000; // Pause for 3 seconds

//   useEffect(() => {
//     const animateCarousel = async () => {
//       let position = 0;
//       while (true) {
//         await controls.start({
//           x: -position, // Move cards
//           transition: { duration: 1.5, ease: "easeInOut" },
//         });

//         await new Promise((resolve) => setTimeout(resolve, pauseTime)); // Pause

//         position += cardWidth * visibleCards; // Move 3 cards forward

//         if (position >= cardWidth * totalCards) {
//           await controls.start({
//             x: 0,
//             transition: { duration: 1.5, ease: "easeInOut" },
//           }); // Reset to first item
//           position = 0;
//         }
//       }
//     };

//     animateCarousel();
//   }, [controls]);

//   return (
//     <div className="bg-moreLightGray w-full h-auto py-12 overflow-hidden">
//       <div className="pl-24 mb-8">
//         <h1 className="text-4xl md:text-6xl font-bold">Our Web Services</h1>
//       </div>

//       {/* Draggable & Auto-Scrolling Container */}
//       <div className="w-full overflow-hidden">
//         <motion.div
//           className="flex gap-4 cursor-grab active:cursor-grabbing"
//           drag="x"
//           dragConstraints={{ right: 0, left: -1000 }} // Adjust as needed
//           dragElastic={0.2}
//           animate={controls}
//         >
//           {[...services, ...services].map((service, index) => (
//             <div
//               key={index}
//               className="relative w-[20rem] flex-shrink-0 bg-primary backdrop-blur-sm rounded-3xl p-8 
//                          group hover:bg-tertiary transition-all duration-300"
//             >
//               <h2 className="text-white text-xl font-medium mb-4">
//                 {service.title}
//               </h2>
//               <p className="text-white text-sm mb-12">{service.description}</p>
//               <button
//                 className="absolute bottom-6 right-6 w-8 h-8 bg-white rounded-full flex items-center justify-center 
//                             transition-transform duration-300 group-hover:rotate-90"
//               >
//                 <Plus className="w-6 h-6 text-black" />
//               </button>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Drag Hint */}
//       <div className="mt-6 flex flex-col items-center">
//         <motion.div
//           animate={{ x: [-20, 20, -20] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <PiHandGrabbingBold className="text-2xl text-[#7C7C7C]" />
//         </motion.div>
//         <h3 className="text-[10px] text-[#7C7C7C]">Drag to see more</h3>
//       </div>
//     </div>
//   );
// };

// export default Services;
