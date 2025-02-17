import { BsLinkedin } from "react-icons/bs";
import { FaBehance } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import SignUp from "./Signup";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="layout py-8">
      <div className=" flex flex-col md:flex-row items-center justify-between ">
        {/* left side container */}
        <div className="md:w-[60%] ">
          <div className="flex items-center justify-start gap-10">
            {/* left side  */}

            <div className="md:flex flex-col hidden justify-center items-center  pt-4">
              <div className="flex flex-col items-center gap-1">
                <div className="group rounded-full w-8 h-8 bg-transparent text-white flex justify-center items-center duration-500 ease-in-out hover:bg-white">
                  <FaBehance
                    className=" duration-500 ease-in-out text-white group-hover:text-primary"
                    size={15}
                  />
                </div>

                <div className="w-[1px] h-8 bg-white mb-2 "></div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="group rounded-full w-8 h-8 bg-transparent flex justify-center items-center duration-500 ease-in-out hover:bg-white">
                  <IoLogoYoutube
                    className="text-white duration-500 ease-in-out group-hover:text-primary"
                    size={15}
                  />
                </div>
                <div className="w-[1px] h-8 bg-white mb-2"></div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="group rounded-full w-8 h-8 bg-transparent flex justify-center items-center duration-500 ease-in-out hover:bg-white">
                  <BsLinkedin
                    className="text-white duration-500 ease-in-out group-hover:text-primary"
                    size={15}
                  />
                </div>
                <div className="w-[1px] h-8 bg-white mb-2 "></div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="group rounded-full w-8 h-8 bg-transparent flex justify-center items-center duration-500 ease-in-out hover:bg-white">
                  <FaSquareInstagram
                    className="text-white duration-500 ease-in-out group-hover:text-primary"
                    size={15}
                  />
                </div>
                <div className="w-[1px] h-8 bg-white mb-2 "></div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="group rounded-full w-8 h-8 bg-transparent flex justify-center items-center duration-500 ease-in-out hover:bg-white">
                  <FaXTwitter
                    className="text-white duration-500 ease-in-out group-hover:text-primary"
                    size={15}
                  />
                </div>
                <div className="w-[1px] h-8 bg-white mb-2 "></div>
              </div>
              <div className="group rounded-full w-8 h-8 bg-transparent flex justify-center items-center duration-500 ease-in-out hover:bg-white">
                <BsLinkedin
                  className="text-white duration-500 ease-in-out group-hover:text-primary"
                  size={15}
                />
              </div>
            </div>

            {/* right side */}
            <div className=" w-full">
              <h1 className="heading text-white">
                Leverage the power of data-driven web design services
              </h1>
              <p className="para text-white py-4">
                At Bidwise, we don't just build websites; we craft digital
                experiences that leave a lasting impression. As a leading web
                development agency, we have successfully designed and developed
                over 300 websites, catering to diverse industries both locally
                and globally.
              </p>
              <Link href="https://partnersdirectory.withgoogle.com/partners/3181900332">
                <Image
                  src="/PartnerBadge.svg"
                  className="w-18 h-18 "
                  width={80}
                  height={80}
                  alt="Google Partner"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="md:w-[30%] w-full  ">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Banner;
