import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";

const OurService = () => {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto my-8">
      <h1 className="text-xl md:text-3xl font-bold px-1 md:px-2 text-primary text-center pb-4 ">
        Simple & Easy Order Process
      </h1>

      <div className="flex justify-center md:flex-row flex-col gap-2 items-center md:gap-8">
        <a
          href={`https://wa.me/447397145697?text=${encodeURIComponent(
            "Hello British PhD Writers, I want to inquire about your services please."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white md:w-[300px] w-full h-auto rounded-md shadow-lg py-6 px-6 border-2 border-white  hover:border-primary cursor-pointer">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center">
                <GrUserExpert className="text-white" size={30} />
              </div>
            </div>

            <h2 className="font-bold py-2 text-center"> Sign up</h2>
            <p className="text-gray  text-sm">
              Fill out the form to sign up with . Ensure that you upload all the
              information needed to initiate your order with us
            </p>

            <div className="flex items-center justify-center font-bold gap-2 pt-4">
              <h2>Order Now</h2>
              <IoArrowForward size={20} />
            </div>
          </div>
        </a>
        <a
          href={`https://wa.me/447397145697?text=${encodeURIComponent(
            "Hello British PhD Writers, I want to inquire about your services please."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white md:w-[300px] w-full h-auto rounded-md shadow-lg py-6 px-6 border-2 border-white  hover:border-primary cursor-pointer">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center">
                <FaBook className="text-white" size={30} />
              </div>
            </div>

            <h2 className="font-bold py-2 text-center">Confirm & Pay</h2>
            <p className="text-gray  text-sm">
              We will receive your requirements and will share a fair pricing
              free quote as per your brief. You need to accept it and make the
              deposit.
            </p>

            <div className="flex items-center justify-center font-bold gap-2 pt-4">
              <h2>Order Now</h2>
              <IoArrowForward size={20} />
            </div>
          </div>
        </a>
        <a
          href={`https://wa.me/447397145697?text=${encodeURIComponent(
            "Hello British PhD Writers, I want to inquire about your services please."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white md:w-[300px] w-full h-auto rounded-md shadow-lg py-6 px-6 border-2 border-white  hover:border-primary cursor-pointer">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center">
                <IoTimer className="text-white" size={30} />
              </div>
            </div>

            <h2 className="font-bold py-2 text-center"> Get Best Grades</h2>
            <p className="text-gray  text-sm">
              An impeccable academic editing will be given to
              you during the set deadline. That will undoubtedly help you
              achieve a successful passing grade.
            </p>

            <div className="flex items-center justify-center font-bold gap-2 pt-4">
              <h2>Order Now</h2>
              <IoArrowForward size={20} />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default OurService;
