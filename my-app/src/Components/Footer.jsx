import { FaFacebookF, FaBehance } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlus } from "react-icons/fa6";

import { useEffect, useState } from "react";
const Footer = () => {
  const controls = useAnimation();

  const [isOpenOverview, setIsOpenOverview] = useState(false);
  const [isOpenWeb, setIsOpenWeb] = useState(false);
  const [isOpenMarketing, setIsOpenMarketing] = useState(false);

  
  const toggleOverview = () => {
    setIsOpenOverview(prev => ! prev);
    setIsOpenWeb(false);
    setIsOpenMarketing(false);
  };

  const toggleWeb = () => {
    setIsOpenWeb(prev => ! prev);
    setIsOpenOverview(false);
    setIsOpenMarketing(false);
  };
  const toggleMarketing = () => {
    setIsOpenMarketing(prev => !prev);
    setIsOpenOverview(false);
    setIsOpenWeb(false);
  };

  // Set up the InView hook to track when the footer is in view
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false, // Trigger when 10% of the footer is visible
  });

  // Effect to trigger the animation when the heading comes into or out of view
  useEffect(() => {
    if (inView) {
      // When in view, shift heading to the right
      controls.start({ x: 200, transition: { duration: 2 } });
    } else {
      // When out of view, return to initial position
      controls.start({ x: 0, transition: { duration: 2 } });
    }
  }, [inView, controls]);
  return (
    <>
      <div className="w-full md:flex relative hidden " ref={ref}>
        <style jsx>{`
          .hover-effect {
            position: relative;
            overflow: hidden;
            display: inline-block;
          }
          .hover-effect::after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: white;
            transform-origin: bottom center;
            transition: transform 0.5s ease-out;
          }
          .hover-effect:hover::after {
            transform: scaleX(1);
            transform-origin: bottom center;
          }
        `}</style>
        {/* <h1 className="sm:text-6xl lg:text-7xl text-white font-bold absolute top-20 left-[12rem]">Design.Build.Launch</h1> */}
        <motion.h1
          className="sm:text-6xl lg:text-7xl text-white font-bold absolute top-20 left-[4rem]"
          animate={controls} // Bind animation controls to the heading
          initial={{ x: 0 }} // Initial position
        >
          Design.Build.Launch
        </motion.h1>

        <div className="bg-primary w-1/2 h-[600px]">
          <div className="flex flex-col lg:pl-[10rem] sm:pl-[12rem] pt-[14rem]">
            <h1 className="text-white  text-2xl">Let's build </h1>
            <h1 className="text-white font-semibold text-4xl">
              something awesome
            </h1>
            <p className="text-white py-2">
              Reach out to our team and we'll get back to you within a day.
            </p>
          </div>
          <div className="flex items-start text-white gap-4 pr-24  lg:pl-[10rem] sm:pl-[12rem]">
            <div className="bg-white w-20 h-[2px] mt-2"></div>
            <div>
              <p>
                Office The Meydan Hotel, Business Center, 1-M Floor, Nad Al
                Sheba, Dubai, United Arab Emirates
              </p>
              <a
                href=""
                className=" relative w-[12rem] overflow-hidden before:content-[''] before:absolute before:w-full before:scale-x-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100 before:origin-center block"
              >
                discover@digitalgravity.ae
              </a>
              <div className="flex flex-col pt-2">
                <a href="" className="text-white hover-effect w-[8rem]">
                  +971 4 242 1375
                </a>
                <a
                  href=""
                  className="relative w-[8rem] overflow-hidden before:content-[''] before:absolute before:w-full before:scale-x-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:transition-transform before:duration-500 before:ease-out hover:before:scale-x-100 before:origin-center block"
                >
                  +971 4 242 1375
                </a>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <FaXTwitter color="white" size={20} />
                <FaFacebookF color="white" size={20} />
                <FaSquareInstagram color="white" size={20} />
                <IoLogoYoutube color="white" size={20} />
                <BsLinkedin color="white" size={20} />
                <FaBehance color="white" size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-[#353535] h-[600px]">
          <div className="flex justify-start gap-10   pt-[16rem] text-white px-12">
            {/* Overview Column */}
            <div className=" w-1/6 lg:w-1/5  ">
              <h5 className="font-semibold border-l-2 border-white pl-2 mb-4  ">
                Overview
              </h5>
              <ul className="flex flex-col">
                <li className="mb-1 text-[12px] w-[4rem] hover-effect ">
                  About Us
                </li>
                <li className="mb-1 text-[12px] w-[3rem] hover-effect">
                  Services
                </li>
                <li className="mb-1 text-[12px] w-[4.5rem] hover-effect">
                  Case Studies
                </li>
                <li className="mb-1 text-[12px] w-[3rem] hover-effect">
                  Partners
                </li>
                <li className="mb-1 text-[12px] w-[3rem] hover-effect">Blog</li>
                <li className="mb-1 text-[12px] w-[4rem] hover-effect">
                  Terms & Conditions
                </li>
                <li className="mb-1 text-[12px] w-[6rem] hover-effect">
                  Privacy Policy
                </li>
              </ul>
            </div>
            {/* Web Solutions Column */}
            <div className=" w-1/4 lg:w-1/3 ">
              <h5 className="font-semibold border-l-2 border-white pl-2 mb-4">
                Web Solutions
              </h5>
              <ul>
                <li className="mb-2 text-[12px]">Web Development</li>
                <li className="mb-2 text-[12px]">UI/UX Design</li>
                <li className="mb-2 text-[12px]">Digital Marketing Services</li>
                <li className="mb-2 text-[12px]">Branding & Communication</li>
                <li className="mb-2 text-[12px]">Ecommerce Web Development</li>
                <li className="mb-2 text-[12px]">Mobile App Development</li>
                <li className="mb-2 text-[12px]">
                  IT Resource Outsourcing Dubai
                </li>
              </ul>
            </div>

            {/* Digital Marketing Services Column */}
            <div className="w-1/4 lg:w-1/3 ">
              <h5 className="font-semibold border-l-2 border-white pl-2 mb-2">
                Digital Marketing Services
              </h5>
              <ul>
                <li className="mb-2 text-[12px]">PPC</li>
                <li className="mb-2 text-[12px]">SEO</li>
                <li className="mb-1 text-[12px]">CRO</li>
                <li className="mb-1 text-[12px]">Content Marketing</li>
                <li className="mb-1 text-[12px]">Social Media Marketing</li>
                <li className="mb-1 text-[12px]">Social Media Optimization</li>
                <li className="mb-2 text-[12px]">Email Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-darkGray w-full h-auto md:hidden block">
        <div className=" py-8 px-4">
          <h1 className="text-4xl  text-white font-bold ">
            Design.Build.Launch
          </h1>
          <div className="pt-8">
            <h1 className="text-white  text-xl">Let's build </h1>
            <h1 className="text-white font-semibold text-3xl">
              something awesome
            </h1>
          </div>
          <p className="text-white py-2">
            Reach out to our team and we'll get back to you within a day.
          </p>
          <p className="text-white py-2">
            Office The Meydan Hotel, Business Center, 1-M Floor, Nad Al Sheba,
            Dubai, United Arab Emirates
          </p>
          <div>
            <a
              href="#"
              className=" relative w-[12rem] text-white overflow-hidden before:content-[''] before:absolute before:w-full before:scale-x-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100 before:origin-center block"
            >
              discover@digitalgravity.ae
            </a>

            <a href="#" className="text-white hover-effect w-[8rem]">
              +971 4 242 1375
            </a>
            <a
              href="#"
              className="relative w-[8rem] text-white overflow-hidden before:content-[''] before:absolute before:w-full before:scale-x-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:transition-transform before:duration-500 before:ease-out hover:before:scale-x-100 before:origin-center block"
            >
              +971 4 242 1375
            </a>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <FaXTwitter color="white" size={20} />
            <FaFacebookF color="white" size={20} />
            <FaSquareInstagram color="white" size={20} />
            <IoLogoYoutube color="white" size={20} />
            <BsLinkedin color="white" size={20} />
            <FaBehance color="white" size={20} />
          </div>

          <div className="mt-6">
            <div
              className="flex items-center cursor-pointer gap-2"
              onClick={toggleOverview}
            >
              {isOpenOverview ? (
                <FaPlus className="text-primary rotate-45 transition-transform duration-300" />
              ) : (
                <FaPlus className="text-primary transition-transform duration-200" />
              )}
              <h1 className="text-white">Overview</h1>
            </div>

            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                isOpenOverview
                  ? "max-h-[12rem] opacity-100"
                  : " max-h-0 opacity-0"
              }`}
            >
              <ul className="my-2 flex flex-col text-white pl-6 transition-opacity duration-300 ease-in-out">
                {isOpenOverview && (
                  <>
                    <li className="mb-1 text-white text-sm w-[4rem] hover-effect ">
                      About Us
                    </li>
                    <li className="mb-1 text-sm w-[3.4rem] hover-effect ">
                      Services
                    </li>
                    <li className="mb-1 text-sm w-[5rem] hover-effect ">
                      Case Studies
                    </li>
                    <li className="mb-1 text-sm w-[3.2rem] hover-effect">
                      Partners
                    </li>
                    <li className="mb-1 text-sm w-[2.5rem] hover-effect ">
                      Blog
                    </li>
                    <li className="mb-1 text-sm w-[8rem] hover-effect ">
                      Terms & Conditions
                    </li>
                    <li className="mb-1 text-sm w-[6rem] hover-effect ">
                      Privacy Policy
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="flex items-center gap-2" onClick={toggleWeb}>
              {isOpenWeb ? (
                <FaPlus className="text-primary rotate-45 transition-transform duration-300" />
              ) : (
                <FaPlus className="text-primary transition-transform duration-300" />
              )}

              <h1 className="text-white">Web Solutions</h1>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                isOpenWeb ? "max-h-[14rem]" : " max-h-0"
              }`}
            >
              <ul className="flex flex-col my-2 text-white pl-6 transition-opacity duration-300 ease-in-out">
                {isOpenWeb && (
                  <>
                    <li className="mb-2 text-sm">Web Development</li>
                    <li className="mb-2 text-sm">UI/UX Design</li>
                    <li className="mb-2 text-sm">Digital Marketing Services</li>
                    <li className="mb-2 text-sm">Branding & Communication</li>
                    <li className="mb-2 text-sm">Ecommerce Web Development</li>
                    <li className="mb-2 text-sm">Mobile App Development</li>
                    <li className="mb-2 text-sm">
                      IT Resource Outsourcing Dubai
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="flex items-center gap-2" onClick={toggleMarketing}>
              {isOpenMarketing ? (
                <FaPlus className="text-primary rotate-45 transition-transform duration-300" />
              ) : (
                <FaPlus className="text-primary transition-transform duration-300" />
              )}

              <h1 className="text-white">Digital Marketing Services</h1>
            </div>

            <div className={`overflow-hidden transition-max-h duration-500 ease-in-out ${isOpenMarketing ? "max-h-[12rem]":"max-h-0"}`}>

              <ul className="flex flex-col my-2 text-white pl-6 transition-opacity duration-300 ease-in-out">
                {isOpenMarketing && (
                  <>
                    <li className="mb-2 text-sm">PPC</li>
                    <li className="mb-2 text-sm">SEO</li>
                    <li className="mb-1 text-sm">CRO</li>
                    <li className="mb-1 text-sm">Content Marketing</li>
                    <li className="mb-1 text-sm">Social Media Marketing</li>
                    <li className="mb-1 text-sm">Social Media Optimization</li>
                    <li className="mb-2 text-sm">Email Marketing</li>
                  </>
                )}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
