import SignUp from "./SignUp";
import { FaHandshake, FaHeadphones } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import Bullets from "./Bullets";
import ReviewsAndWhatsApp from "./ReviewsAndWhatsApp";
import MobileBtn from "./MobileBtn";

const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-primary bg-opacity-80 w-full h-auto mb-6">
      <div className="h-auto w-full">
        <div className="md:w-[75%]  max-w-7xl mx-auto px-4 md:pt-4 md:pb-10  pt-0 pb-6  ">
          <div className="flex flex-col items-start md:flex-row gap-6 md:gap-20 lg:gap-20  ">
            {/* Left Container */}
            <div className="flex gap-2 items-start md:w-[65%] w-full ">
              <div className="w-16 h-[1px] mt-3 bg-white hidden "></div>
              <div className="w-full">
                <h1 className="text-white font-medium text-xl  uppercase">
                UK&apos;s Top Ranked Academic Helper
                </h1>
                <h1 className="text-secondary text-2xl md:text-4xl font-bold">
                TOP NOTCH ACADEMIC HELP BY BRITISH PHD WRITER
                </h1>
                <div className="md:hidden block">
               <MobileBtn/>
               </div>
                <h1 className="text-white md:pb-4 pb-2 md:pt-2 text-2xl  font-bold">
                  No Plagiarism Guranteed - Free Turnitin Report
                </h1>


                <Bullets />
                <div className="hidden md:block">
                <ReviewsAndWhatsApp/>
                </div>

               
                

                <section className="text-white hidden md:block ">
                  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-start  gap-8 md:gap-4">
                    {/* First Feature */}
                    <div className="flex items-center gap-2 border-r border-gray-600 pr-4">
                      <FaHandshake className="text-secondary text-2xl" />
                      <div>
                        <h2 className="font-semibold text-xl  leading-7">
                          97.9%
                        </h2>
                        <p className="text-sm">
                          Satisfaction Rate
                        </p>
                      </div>
                    </div>

                    {/* Second Feature */}
                    <div className="flex items-center gap-2 border-r border-gray-600 pr-4">
                      <FaTruckFast className="text-secondary text-2xl" />
                      <div>
                        <h2 className="font-semibold text-xl ">
                          99.7%
                        </h2>
                        <p className="text-sm">Timely Delivered</p>
                      </div>
                    </div>

                    {/* Third Feature */}
                    <div className="flex items-center gap-4">
                      <FaHeadphones className="text-secondary text-2xl" />
                      <div>
                        <h2 className="font-semibold text-xl">
                          24/7
                        </h2>
                        <p className="text-sm ">Customer Support</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

            
            </div>

            {/* Right Container */}
            <div className="md:w-[35%] w-full  mx-auto">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
