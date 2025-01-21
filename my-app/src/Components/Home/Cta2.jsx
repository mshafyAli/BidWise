



// import React from "react";
// import Image from "next/image";
// import ReviewsAndWhatsApp from "../ReviewsAndWhatsApp";

// const Cta2 = () => {
//   return (
//     <div className="Cta1 w-full h-[400px] md:h-[250px] md:mb-6 mb-6 relative">
//       <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-40">
//         <div className="bg-black bg-opacity-85 md:w-[65%] w-[90%] mx-auto rounded-lg md:h-[12rem] h-auto md:my-8 my-4  md:py-2 md:px-10">
//           {/* Content Container */}
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
//             {/* Left Section - Image */}
//             <div className="flex-shrink-0">
//               <Image
//                 src="/discount.webp"
//                 alt="Discount Image"
//                 width={350}
//                 height={350}
//               />
//             </div>

//             {/* Right Section - Text and CTA */}
//             <div className="text-center md:text-left">
//               <h1 className="text-white font-bold text-xl md:text-3xl">
//                 Get A Full-Academic Editing
//               </h1>
//               <h1 className="text-white text-xl md:text-3xl font-bold">
//                 From Our PhD Qualified Experts!
//               </h1>

//               {/* Reviews and WhatsApp */}
//               <div className="mt-4">
//                 <ReviewsAndWhatsApp />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cta2;


import React from "react";
import Image from "next/image";
import ReviewsAndWhatsApp from "../ReviewsAndWhatsApp";

const Cta2 = () => {
  return (
    <div className="Cta1 w-full md:min-h-[320px] min-h-[420px] md:mb-6 mb-6 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-40">
        <div className="bg-black bg-opacity-85 md:w-[70%] w-[90%] mx-auto my-6 rounded-lg md:py-6 px-4 md:px-6">
          {/* Content Container */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6  md:gap-10">
            {/* Left Section - Image */}
            <div className="flex-shrink-0 w-full md:w-[40%]">
              <Image
                src="/discount.webp"
                alt="Discount Image"
                width={350}
                height={350}
                layout="responsive" // Make the image responsive
                className="rounded-lg"
              />
            </div>

            {/* Right Section - Text and CTA */}
            <div className="text-center md:text-left flex-grow">
              <h1 className="text-white font-bold text-xl md:text-3xl">
                Get A Full-Academic Editing
              </h1>
              <h1 className="text-white text-xl md:text-3xl font-bold">
                From Our PhD Qualified Experts!
              </h1>

              {/* Reviews and WhatsApp */}
              <div className="">
                <ReviewsAndWhatsApp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta2;


