import { IoCall, IoMail } from "react-icons/io5";
import Image from "next/image";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-8 pb-[6rem] md:pb-6 md:pt-8  w-full mt-10 ">
      <div className="md:w-[80%] w-[90%] mx-auto">
        <div className="container mx-auto  flex flex-col md:flex-row justify-start md:justify-evenly md:gap-4  md:text-left ">
          <div className="w-full md:w-[30%] mb-2 md:mb-0">
            <div className="flex justify-start items-center ">
              <div>
                <Link href={"/"}>
                  <Image
                    src="/bpw-logo.png"
                    alt="Logo"
                    width="220"
                    height="220"
                    quality={60}
                    priority
                    className="w-[240px] h-auto "
                  />
                </Link>
              </div>
            </div>
            <p className="mt-4 text-sm ">
              We offer a range of assignments with diverse intricacy levels and
              tailored editing support services. Additionally, we provide
              research resources solely for citation purposes. Any materials or
              services acquired from our website must be appropriately cited.
            </p>
          </div>

          <div className="w-full  md:w-1/6  mb-2 md:mb-0 hidden md:block">
            <h1 className="text-lg md:text-xl font-bold">Main Menu</h1>
            <div className="flex flex-col md:items-start">
              <Link href={"/"}>
                <div className="flex gap-2 items-center">
                  <FaAnglesRight size={15} />
                  <h2 className="text-sm">Home</h2>
                </div>
              </Link>

              <Link href={"/assignment-help"}>
                <div className="flex gap-2 items-center">
                  <FaAnglesRight size={15} />
                  <h2 className="text-sm">Assignment Help</h2>
                </div>
              </Link>

              <Link href={"/essay-help"}>
                <div className="flex gap-2 items-center">
                  <FaAnglesRight size={15} />
                  <h2 className="text-sm">Essay Help</h2>
                </div>
              </Link>

              <Link href={"/coursework-help"}>
                <div className="flex gap-2 items-center">
                  <FaAnglesRight size={15} />
                  <h2 className="text-sm">Coursework Help</h2>
                </div>
              </Link>

              <Link href={"/dissertation-help"}>
                <div className="flex gap-2 items-center">
                  <FaAnglesRight size={15} />
                  <h2 className="text-sm">Dissertation</h2>
                </div>
              </Link>

              <Link href={"/online-exam"}>
                <div className="flex gap-2 items-center">
                  <FaAnglesRight size={15} />
                  <h2 className="text-sm">Online Exam</h2>
                </div>
              </Link>

              <Link href={"/research-proposal"}>
                <div className="flex gap-2 items-center">
                  <FaAnglesRight size={15} />
                  <h2 className="text-sm">Research Proposal</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/4 hidden md:block">
            <h3 className="text-lg md:text-xl font-bold mb-2">Contact Us</h3>
            <div className="flex flex-col  md:items-start">
              <a
                href={`https://wa.me/447397145697?text=${encodeURIComponent(
                  "Hello British PhD Writers, I want to inquire about your services please."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-2 items-center">
                  <IoLogoWhatsapp size={15} />
                  <h2 className="text-sm">WhatsApp Now</h2>
                </div>
              </a>
              <div className="mt-1">
                <a
                  href="mailto:info@britishphdwriters.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <IoMail size={15} />
                  <h1 className="text-sm">Email Us</h1>
                </a>
              </div>
              <div className="mt-1">
                <a href="tel:+441618189341" className="flex items-center gap-2">
                  <IoCall size={15} />
                  <h1 className="text-sm">Call Us</h1>
                </a>
              </div>
            </div>
          </div>

          <div className="flex md:hidden">
            <div className="w-full  md:w-1/6  mb-2 md:mb-0">
              <h1 className="text-lg md:text-xl font-bold">Main Menu</h1>
              <div className="flex flex-col md:items-start">
                <Link href={"/"}>
                  <div className="flex gap-2 items-center">
                    <FaAnglesRight size={15} />
                    <h2 className="text-sm">Home</h2>
                  </div>
                </Link>

                <Link href={"/assignment-help"}>
                  <div className="flex gap-2 items-center">
                    <FaAnglesRight size={15} />
                    <h2 className="text-sm">Assignment Help</h2>
                  </div>
                </Link>

                <Link href={"/essay-help"}>
                  <div className="flex gap-2 items-center">
                    <FaAnglesRight size={15} />
                    <h2 className="text-sm">Essay Help</h2>
                  </div>
                </Link>

                <Link href={"/coursework-help"}>
                  <div className="flex gap-2 items-center">
                    <FaAnglesRight size={15} />
                    <h2 className="text-sm">Coursework Help</h2>
                  </div>
                </Link>

                <Link href={"/dissertation-help"}>
                  <div className="flex gap-2 items-center">
                    <FaAnglesRight size={15} />
                    <h2 className="text-sm">Dissertation</h2>
                  </div>
                </Link>

                <Link href={"/online-exam"}>
                  <div className="flex gap-2 items-center">
                    <FaAnglesRight size={15} />
                    <h2 className="text-sm">Online Exam</h2>
                  </div>
                </Link>

                <Link href={"/research-proposal"}>
                  <div className="flex gap-2 items-center">
                    <FaAnglesRight size={15} />
                    <h2 className="text-sm">Research Proposal</h2>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg md:text-xl font-bold mb-2">Contact Us</h3>
              <div className="flex flex-col  md:items-start">
                <a
                  href={`https://wa.me/447397145697?text=${encodeURIComponent(
                    "Hello British PhD Writers, I want to inquire about your services please."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-2 items-center">
                    <IoLogoWhatsapp size={15} />
                    <h2 className="text-sm">WhatsApp Now</h2>
                  </div>
                </a>
                <div className="mt-1">
                  <a
                    href="mailto:info@britishphdwriters.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <IoMail size={15} />
                    <h1 className="text-sm">Email Us</h1>
                  </a>
                </div>
                <div className="mt-1">
                  <a
                    href="tel:+441618189341"
                    className="flex items-center gap-2"
                  >
                    <IoCall size={15} />
                    <h1 className="text-sm">Call Us</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-dashed border-gray border-opacity-50 md:mx-16 mt-4"></div>

        <div className="flex items-center flex-col text-sm md:flex-row justify-between gap-2 md:gap-0 md:mx-16 mt-4">
          <h2>Copyright © 2024 All rights reserved</h2>
          <h2>
            <Link href="/privacy-policy">Privacy Policy</Link> &nbsp;|&nbsp;{" "}
            <Link href="/term-and-condition">Terms & Condition</Link>
            &nbsp;|&nbsp; <Link href="/refund-policy">Refund Policy</Link>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
