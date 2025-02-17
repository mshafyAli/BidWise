import { HiMiniArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    icon: "/webIcon.svg",
    title: "CMS Development",
    description:
      "Elevate your online presence with cutting-edge CMS services, encompassing software, websites, and advanced CMS platforms.",
  },
  {
    icon: "/appIcon.svg",
    title: "AngularJS Development",
    description:
      "BidWise is thriving as an Angular JS web development company. We have a team of experts who will help you build top-notch digital products with unmatched capabilities and engagement qualities supported by user-friendly functions and flawless features.",
  },
  {
    icon: "/digitalIcon.svg",
    title: "Website Maintenance Services",
    description:
      "Our commitment extends beyond excellence, fostering a dynamic partnership that propels your online presence to new heights of success and fortifies your digital assets against evolving security challenges.",
  },
  {
    icon: "/uiIcon.svg",
    title: "Wordpress Development",
    description:
      "BidWise is recognized as the top WordPress web development company in Dubai. Our WordPress design and development services cover everything you need. Our dedicated WordPress developers and designers in Dubai offer simply outstanding WordPress development services and solutions.",
  },
  {
    icon: "/ecommerceIcon.svg",
    title: "Laravel Development",
    description:
      "With a dedicated team of experienced Laravel developers, we ensure innovative solutions that align seamlessly with your business objectives, driving unparalleled success in your digital endeavors.",
  },
  {
    icon: "/brandingIcon.svg",
    title: "Mern Development",
    description:
      "With a dedicated team of experienced Mern developers, we ensure innovative solutions that align seamlessly with your business objectives, driving unparalleled success in your digital endeavors.",
  },
  {
    icon: "/videoIcon.svg",
    title: "Pentesting Services",
    description:
      "At BidWise, we offer Pentesting (Penetration Testing) Services, fully customized according to your business needs, without compromising your protection against cyber threats. So, count on us, as we will provide you with a reliable solution to fortify your defense in Dubai.",
  },
  {
    icon: "/resourceIcon.svg",
    title: "Enterprise Development",
    description:
      "If you are a business looking for enterprise development assistance? BidWise has got you covered. We have a team of enterprise development experts - that can help you thrive as an enterprise. No matter if you are looking for website development or software development for business – don’t forget to count on us as your trusted option.",
  },
];

const settings = {
  infinite: true,
  speed: 400,
  autoplay: true,
  swipeToSlide: true,
  draggable: true,
  slidesToShow: 3,
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
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Agency = () => {
  return (
    <div className="layout my-12">
      <div className="md:flex items-start flex-col md:flex-row justify-start gap-10 hidden">
        <div className="md:w-1/3 w-full ">
          <h1 className="md:text-4xl text-2xl font-semibold">
          The Best{" "}
            <span className="text-primary">Website & Web Application</span>
            {" "}Development Company
          </h1>
        </div>

        <div className="max-w-4xl">
          <Slider {...settings} className="mt-4">
            {services.map((service, index) => (
              <div key={index} className="group">
                {" "}
                <div className="py-6 px-4 bg-tertiary lg:h-[28rem] rounded-lg  h-auto group-hover:bg-white group-hover:shadow-md cursor-pointer transition-all duration-300">
                  <div className="bg-white group-hover:bg-primary w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300">
                    <Image
                      src={service.icon}
                      className="w-8 h-8"
                      width={30}
                      height={30}
                      alt={service.title}
                    />
                  </div>
                  <h1 className="font-bold text-base pt-2 text-white group-hover:text-black">{service.title}</h1>
                  <p className="text-white group-hover:text-[#7C7C7C] py-4">{service.description}</p>

                  <div className="group">
                    <button className="w-8 h-8 text-white  rounded-full bg-primary p-2 hover:bg-white  hover:text-primary shadow-md">
                      <HiMiniArrowLongRight className="transform transition-transform duration-200 group-hover:rotate-45" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

   
    </div>
  );
};

export default Agency;
