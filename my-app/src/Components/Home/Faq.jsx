

import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "Why should I hire your writer?",
      answer:
        "With our writers, you will be able to improve your writing skills. We have professional academic experts do work on your behalf, so you will get help to understand and read assignments efficiently and improve your research and writing skills. As we are covering complex assignments as well so you can also learn to cater to complicated guidelines",
    },
    {
      question: "How fast can you do my assignment?",
      answer:
        "We have competent subject-matter experts on board who can deliver assignments even in 3 hours because your satisfaction is our priority. We do everything in our power to complete your order on time. 99% of our orders are completed and sent to customers before the deadline so that you can request changes if required.",
    },
    {
      question: "Can I collaborate with my assignment writer?",
      answer:
        "Yes, you can communicate with your writer any time you want. You can track the progress of your order and send instructions as per the guidelines. We at British PhD Writers appreciate all students sharing details before our writer start work on your document to maintain accuracy.",
    },
    {
      question: "Can I request a revision for my Assignment?",
      answer:
        "Our writers go the extra mile to make sure that your Assignment is just according to your guidelines so that you don’t have to request any changes. However, if you still want the writer to change anything, you can request revision FREE of cost. You can simply go to your user area and mark revision for the writer as many times as you need. You can also contact our 24/7 available live support team to get the latest updates about revision.",
    },
    {
      question: "Do you offer guaranteed top results?",
      answer:
        "We are committed to providing you highest quality assignment work. We provide guaranteed to give you perfectly according to the guidelines to achieve good grades in your degree program. You will assign the relevant writer to work on your assignment. No matter the subject, we have skilled writers from various disciplines.",
    },
    {
      question: "Can't find my field. Can you still help?",
      answer:
        "If you don’t find your subject or field mentioned on our site, that’s not an issue; as we mentioned before, we are catering to all disciplines and subjects. We have the most experienced writers from various fields and all are highly qualified from reputed universities to meet your requirements. Whatever is your subject you can hire us to do it for you.",
    },
  ];

  const leftSideFaqs = faqData.slice(0, 3);
  const rightSideFaqs = faqData.slice(3);

  return (
    <div className="md:mt-2">
      <div className="w-[95%] md:w-[75%] mx-auto">
        <div>
          <h1 className="text-xl md:text-3xl font-bold px-1 md:px-2 text-primary text-center">
            Our Most Frequently Asked Questions
          </h1>

          <p className="text-gray px-6  text-sm text-center">
            Go through our FAQ section to get answers for all hire someone to
            take my online class service questions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-evenly md:gap-4">
          {/* Left Side */}
          <div>
            {leftSideFaqs.map((item, index) => (
              <div
                key={index}
                className={`md:w-[500px] w-full mt-4 ${
                  openIndex === index
                    ? "bg-primary"
                    : "bg-white border border-gray"
                } cursor-pointer py-4 md:px-6 px-3`}
                onClick={() => handleToggle(index)}
              >
                <div
                  className={`flex items-center justify-between ${
                    openIndex === index
                      ? "border-b-2 border-[#BAC5CD] pb-4"
                      : ""
                  }`}
                >
                  <h1
                    className={`font-bold text-sm ${
                      openIndex === index ? "text-white" : "text-primary"
                    }`}
                  >
                    {item.question}
                  </h1>
                  {openIndex === index ? (
                    <FaArrowDown className="text-secondary" size={20} />
                  ) : (
                    <FaArrowUp className="text-secondary" size={20} />
                  )}
                </div>
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-[250px]" : "max-h-0"
                  }`}
                >
                  <p className="mt-2 py-4 text-white">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div>
            {rightSideFaqs.map((item, index) => (
              <div
                key={index + 3} // Adjusting the index for the right side
                className={`md:w-[500px] w-full mt-4 ${
                  openIndex === index + 3
                    ? "bg-primary"
                    : "bg-white border border-gray"
                } cursor-pointer py-4 md:px-6 px-3`}
                onClick={() => handleToggle(index + 3)}
              >
                <div
                  className={`flex items-center justify-between ${
                    openIndex === index + 3
                      ? "border-b-2 border-[#BAC5CD] pb-4"
                      : ""
                  }`}
                >
                  <h1
                    className={`font-bold text-sm ${
                      openIndex === index + 3 ? "text-white" : "text-primary"
                    }`}
                  >
                    {item.question}
                  </h1>
                  {openIndex === index + 3 ? (
                    <FaArrowDown className="text-secondary" size={20} />
                  ) : (
                    <FaArrowUp className="text-secondary" size={20} />
                  )}
                </div>
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    openIndex === index + 3 ? "max-h-[250px]" : "max-h-0"
                  }`}
                >
                  <p className="mt-2 py-4 text-white">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-center font-bold mt-6 text-2xl">
          ANY ISSUES OR QUESTIONS?
        </h1>
        <p className="text-center text-gray  text-sm font-semibold">
          Send us a message, and we’ll reply within seconds!
        </p>
        <div className="md:flex items-center justify-center gap-4 pt-4 w-[90%] mx-auto ">
          <a
            href={`https://wa.me/447397145697?text=${encodeURIComponent(
              "Hello British PhD Writers, I want to inquire about your services please."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 bg-primary text-white px-4 md:py-1 py-2 rounded-md  w-full md:w-auto">
              <IoLogoWhatsapp className="text-2xl text-[#fff]" />
              <h1 className="text-[#fff] font-bold text-sm md:text-base uppercase">
                get Started
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faq;
