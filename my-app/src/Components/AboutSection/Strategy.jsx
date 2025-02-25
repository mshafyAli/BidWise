

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image"

// const Strategy = () => {
//   const [scrollDirection, setScrollDirection] = useState(0);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY) {
//       // Scrolling down
//       setScrollDirection(-120); // Move left
//     } else if (currentScrollY < lastScrollY) {
//       // Scrolling up
//       setScrollDirection(20); // Move back to original position
//     }
    
//     setLastScrollY(currentScrollY); // Update last scroll position
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <div className="w-full overflow-hidden">
//       <div className="flex flex-col md:flex-row items-center">
//         <Image src="/concecptStrategy.webp" alt="conceptStrategy" width={300} height={300} className="md:w-1/2 relative z-10" />
//         <motion.h1
//           className="text-primary uppercase font-bold text-6xl whitespace-nowrap hidden md:block" // Prevent line breaks
//           initial={{ x: 0, opacity: 0 }} // Start position
//           animate={{ x: scrollDirection, opacity: 1 }} // Animate based on scroll direction
//           transition={{ duration: 2.0 }} // Animation duration
//         >
//           Concept.Strategy.Executive
//         </motion.h1>

//         <h1 className="text-primary uppercase font-bold text-2xl mt-4  md:hidden block">
//         Concept.Strategy.Executive
//         </h1>

//       </div>
//     </div>
//   );
// };

// export default Strategy;


import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Strategy = () => {
  const [scrollDirection, setScrollDirection] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection(-120); // Move left
    } else {
      setScrollDirection(20); // Move back to original position
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]); // ✅ Added dependency

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // ✅ Added dependency

  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src="/concecptStrategy.webp"
          alt="conceptStrategy"
          width={300}
          height={300}
          className="md:w-1/2 relative z-10"
        />
        <motion.h1
          className="text-primary uppercase font-bold text-6xl whitespace-nowrap hidden md:block"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: scrollDirection, opacity: 1 }}
          transition={{ duration: 2.0 }}
        >
          Concept.Strategy.Executive
        </motion.h1>

        <h1 className="text-primary uppercase font-bold text-2xl mt-4 md:hidden block">
          Concept.Strategy.Executive
        </h1>
      </div>
    </div>
  );
};

export default Strategy;
