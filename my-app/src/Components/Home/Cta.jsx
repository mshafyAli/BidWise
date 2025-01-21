
import React from "react";
import ReviewsAndWhatsApp from "../ReviewsAndWhatsApp";

const Cta = () => {
  return (
    <div className="banner1 w-full  h-auto my-6 md:my-0 ">
      <div className="md:w-[80%] w-[90%] mx-auto">
        {/* Use flex-row and justify-end to align content to the right */}
        <div className="flex flex-col md:flex-row justify-end items-center md:items-end ">
          <div className="w-full md:w-[50%] md:pt-16 py-8 ">
            {/* Heading */}
            <h1 className="text-xl md:text-3xl font-bold text-white md:ml-6 ml-0  md:text-primary">
              Your Confidentiality Is Our Utmost Priority to Take Your Online
              Class For You!
            </h1>

            {/* Paragraph */}
            <p className="md:text-gray text-white pt-4 md:ml-6 ml-0 text-sm">
              At British PhD Writers , we understand the importance of
              maintaining confidentiality when it comes to taking classes on
              behalf of our clients. We recognize that students may require our
              services for a variety of reasons, and we are committed to
              protecting their privacy and ensuring that their personal
              information is kept confidential. We take various measures to
              safeguard the privacy and security of our clients information,
              such as using secure servers, encrypting data, and implementing
              strict access controls. Our team of experienced professionals
              understands the sensitivity of the information they handle and is
              bound by a strict code of ethics to maintain confidentiality at
              all times. We assure our clients that their confidentiality is our
              utmost priority, and we take every precaution to ensure that their
              personal information is kept safe and secure.
            </p>

            <p className="md:text-gray text-white pt-6 md:ml-6 ml-0 text-sm">
              All information exchanged between the student and tutor is
              confidential and not shared with third-party, companies, or
              educational institutes.
            </p>

            <div className="md:ml-6 ml-0">
            <ReviewsAndWhatsApp/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
