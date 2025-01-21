

"use client";
import dynamic from 'next/dynamic';
import { useRef} from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { FaGift } from "react-icons/fa";
import { TalkBtn } from "../../../Components/TalkBtn";
import Link from "next/link";
const StickyBtn = dynamic(() => import('@/Components/StickyBtn'));

const ThankYouPage = () => {
  const aboutRef = useRef(null);
  const router = useRouter();

  const scrollToTopAndNavigate = (path, hash) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(`${path}${hash}`);
  };



  return (
    <>
      <Head>
        <title>Thank You - British PhD Writers.</title>
      </Head>
      <Navbar />
      <div className="flex items-center justify-center py-12 px-4">
        <div className="bg-white max-w-3xl w-full shadow-2xl px-6 py-8 md:px-10 md:py-2">
          <h1 className="text-green font-bold text-2xl md:text-4xl pb-6 pt-12 text-center">
            CONGRATULATIONS
          </h1>
          <h3 className="text-[#4D5C6E] font-medium text-sm md:text-base py-4 md:py-8">
            50% Discount has been applied on your order at{" "}
            <Link href="/">
              <span className="font-bold text-green ">British PhD Writers</span>
            </Link>
            . Your key manager will be connected to you shortly via{" "}
            <a
              href="tel:+441618189341"
              className="text-green font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Phone call
            </a>{" "}
            and{" "}
            <a
              href={`https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello British PhD Writers, I want to avail my secure promo code BPW-OFF50"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green font-bold"
            >
              WhatsApp
            </a>
            . Enjoy the assistance of a verified expert in your academic field
            of study. Simply hire an expert to lend a hand, with professionalism
            guaranteed.
          </h3>
          <p className="text-[#4D5C6E] text-sm font-medium md:text-base">
            To avail promo code, please contact us through WhatsApp or live chat.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 gap-2 py-8 mt-8 ">
            <a
              href={`https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello British PhD Writers, I want to avail my secure promo code BPW-OFF50"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-[260px] bg-green h-10 flex items-center justify-center rounded-md group hover:text-primary"
            >
              <div className="flex items-center gap-2">
                <FaGift
                  className="text-2xl md:text-3xl group-hover:text-primary text-white"
                  size={25}
                  
                />
                <h1 className="text-white font-bold text-sm md:text-base uppercase group-hover:text-primary">
                  Avail Promo Code
                </h1>
              </div>
            </a>

            <div className="w-full md:w-[260px]">
              <TalkBtn
                width="w-full"
                mdWidth="md:w-[260px]"
                label="Chat With Experts"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer aboutRef={aboutRef} />
      <StickyBtn />
    </>
  );
};

export default ThankYouPage;
