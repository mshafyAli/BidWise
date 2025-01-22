import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlinePlusSm } from "react-icons/hi";

// FAQ data
const faqData = [
  {
    id: 1,
    question: "I need web design services for my enterprise website. Can you help?",
    answer: "Yes, we offer comprehensive web design services tailored to your enterprise needs!",
  },
  {
    id: 2,
    question: "How long does it take to complete a web project?",
    answer: "The timeline depends on the project scope, but we ensure timely delivery while maintaining quality.",
  },
  {
    id: 3,
    question: "How long does it take to complete a web project?",
    answer: "The timeline depends on the project scope, but we ensure timely delivery while maintaining quality.",
  },
  {
    id: 4,
    question: "How long does it take to complete a web project?",
    answer: "The timeline depends on the project scope, but we ensure timely delivery while maintaining quality.",
  },
  {
    id: 5,
    question: "How long does it take to complete a web project?",
    answer: "The timeline depends on the project scope, but we ensure timely delivery while maintaining quality.",
  },
  {
    id: 6,
    question: "How long does it take to complete a web project?",
    answer: "The timeline depends on the project scope, but we ensure timely delivery while maintaining quality.",
  },
  {
    id: 7,
    question: "How long does it take to complete a web project?",
    answer: "The timeline depends on the project scope, but we ensure timely delivery while maintaining quality.",
  },
  {
    id: 8,
    question: "How long does it take to complete a web project?",
    answer: "The timeline depends on the project scope, but we ensure timely delivery while maintaining quality.",
  },
  {
    id: 9,
    question: "How long does it take to complete a web project?",
    answer: "The timeline depends on the project scope, but we ensure timely delivery while maintaining quality.",
  },
  {
    id: 10,
    question: "How long does it take to complete a web project?",
    answer: "The timeline depends on the project scope, but we ensure timely delivery while maintaining quality.",
  },
  
];

// Slider settings
const settings = {
  infinite: true,
  speed: 400,
  autoplay: true,
  swipeToSlide: true,
  draggable: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const Faq = () => {
  return (
    <div className="bg-lightGray w-full h-auto relative py-12">
      <div className="w-[90%] mx-auto relative">
        <h1 className="text-primary font-bold text-4xl mb-4">FAQ</h1>

        {/* Slider container */}
        <Slider {...settings}>
          {faqData.map((item) => (
            <div key={item.id} className="relative w-full h-[20rem] group overflow-hidden">
              {/* Optimized Image */}
              <Image
                src="/faqTexture.webp"
                alt={`FAQ Texture ${item.id}`}
                layout="fill"
                objectFit="cover"
              />

              {/* Text overlay */}
              <div className="absolute inset-0 px-4 py-4 bg-transparent transition-all group-hover:bg-primary duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-primary before:scale-x-0 before:origin-right group-hover:before:scale-x-100 hover:text-white before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left flex flex-col justify-center items-start">
                {/* "1" and the original paragraph, hidden on hover */}
                <h1 className="text-2xl font-bold text-black group-hover:text-white group-hover:opacity-100 z-10 relative transition-opacity duration-500 ease-in-out group-hover:-mt-24">
                  {item.id}
                </h1>
                <p className="text-sm pt-10 text-black group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                  {item.question}
                </p>

                {/* New paragraph, initially hidden and shown on hover */}
                <p className="relative z-10 text-sm text-black opacity-0 group-hover:opacity-100 group-hover:-mt-24 md:py-8 pt-3 group-hover:text-white transition-all duration-500 ease-in-out">
                  {item.answer}
                </p>

                <div className="mx-auto">
                  <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center">
                    <HiOutlinePlusSm className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Faq;
