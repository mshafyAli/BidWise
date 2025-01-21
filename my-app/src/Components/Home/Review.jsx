import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import trustpilotImg from "/public/trustpilot.png";
import { FaQuoteRight } from "react-icons/fa6";

const reviewsData = [
  {
    id: 1,
    quote:
      "I was panicking when the deadline for one of my major tasks got near. I chose British PhD Writers Assessment, and they delivered my urgent order on time!",
    author: "-Arthur J.",
    trustpilotImg,
  },
  {
    id: 2,
    quote:
      "I wanted help with my research methodology chapter, and I reached out to British PhD Writers. The team helped me with my task and guided me all the way.",
    author: "Karl Crossfield",
    trustpilotImg,
  },
  {
    id: 3,
    quote:
      "It’s tough to find a service with experts who know what they are editing about. I’ve placed multiple orders and always received top-notch work from here.",
    author: "Marc Reid",
    trustpilotImg,
  },
  {
    id: 4,
    quote:
      "The support team was incredibly responsive and made sure all my questions were answered. I’ll definitely use British PhD Writers again for my next project!",
    author: "Sophia Anderson",
    trustpilotImg,
  },
  {
    id: 5,
    quote:
      "Amazing service! The quality of the work exceeded my expectations, and the experts were very professional in their communication.",
    author: "James Carter",
    trustpilotImg,
  },
  {
    id: 6,
    quote:
      "Their attention to detail and ability to meet tight deadlines is impressive. I’m extremely satisfied with their service and will use it again.",
    author: "Liam Brown",
    trustpilotImg,
  },
  {
    id: 7,
    quote:
      "I highly recommend their service! The process was seamless, and the delivery was on time with great attention to detail.",
    author: "Emily Johnson",
    trustpilotImg,
  },
  {
    id: 8,
    quote:
      "British PhD Writers provided me with excellent assistance for my dissertation. I couldn’t have done it without their expert guidance.",
    author: "Oliver Scott",
    trustpilotImg,
  },
];

const Review = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const handleTalkToExpertClick = () => {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    } else {
      console.error("Tawk.to is not initialized or not loaded yet.");
    }
  };

  return (
    <>
      <div className="w-full ">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="w-full lg:w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-around gap-10 pt-16">
            <h1 className="text-primary text-3xl font-bold text-center lg:text-left">
              Add Perfection To Your Content With Our Expert Help
            </h1>

            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2">
              <a
                href={`https://wa.me/447397145697?text=${encodeURIComponent(
                  "Hello British PhD Writers, I want to inquire about your services please."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-secondary w-full rounded-md lg:w-[238px] md:h-[50px] cursor-pointer h-auto uppercase px-1 py-3  text-white font-semibold text-center">
                  50% OFF Order Now
                </div>
              </a>

              <div
                className="bg-primary w-full rounded-md md:w-[100px] cursor-pointer md:h-[50px] uppercase px-1 py-3  text-white font-semibold text-center"
                onClick={handleTalkToExpertClick}
              >
                live chat
              </div>
            </div>
          </div>

          <div className="bg-primary w-full lg:w-[85%] mx-auto hidden md:block h-2 mt-6 lg:mt-8"></div>
          <div className="w-full lg:w-[85%] mx-auto">
            <a a
                href={`https://wa.me/447397145697?text=${encodeURIComponent(
                  "Hello British PhD Writers, I want to inquire about your services please."
                )}`}
                target="_blank"
                rel="noopener noreferrer">
            <div className="bg-primary md:w-[220px] w-full lg:w-[360px] md:mt-0 mt-6 text-base lg:text-xl h-12 text-white font-bold px-2 md:py-2 py-3 mb-10 lg:mb-10 mx-auto lg:mx-0 text-center">
              Boost Your Grades Now
            </div>
            </a>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-evenly pb-12 gap-8 lg:gap-0 ">
            

            <div className="w-full ">
              <Slider {...settings}>
                {reviewsData.map((review) => (
                  <div key={review.id} className="bg-[#FFF8E6] h-auto p-6">
                    <div className="flex items-center justify-between">
                      <Image
                        src={review.trustpilotImg}
                        alt="Trustpilot"
                        width={80}
                        height={40}
                        priority
                      />
                      <FaQuoteRight size={30} className="text-primary" />
                    </div>

                    <p className="py-2 text-sm">{review.quote}</p>
                    <h2 className="py-2 text-sm">{review.author}</h2>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
