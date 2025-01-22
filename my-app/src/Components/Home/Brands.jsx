import Slider from "react-slick/lib/slider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Define the brand sections with image paths
const brandSectionOne = [
  { id: 1, img: '/1.svg' },
  { id: 3, img: '/3.svg' },
  { id: 4, img: '/4.svg' },
  { id: 5, img: '/5.svg' },
  { id: 6, img: '/6.svg' },
  { id: 7, img: '/7.svg' },
  { id: 8, img: '/8.svg' },
  { id: 9, img: '/9.svg' },
  { id: 10, img: '/10.svg' },
  { id: 11, img: '/11.svg' },
  { id: 12, img: '/12.svg' },
  { id: 13, img: '/13.svg' },
  { id: 14, img: '/14.svg' },
  { id: 15, img: '/15.svg' },
  { id: 16, img: '/16.svg' },
  { id: 17, img: '/17.svg' },
];

const brandSectionTwo = [
  { id: 18, img: '/18.svg' },
  { id: 19, img: '/19.svg' },
  { id: 20, img: '/20.svg' },
  { id: 21, img: '/21.svg' },
  { id: 22, img: '/22.svg' },
  { id: 23, img: '/23.svg' },
  { id: 24, img: '/24.svg' },
  { id: 25, img: '/25.svg' },
  { id: 26, img: '/26.svg' },
  { id: 27, img: '/27.svg' },
  { id: 28, img: '/28.svg' },
  { id: 29, img: '/29.svg' },
  { id: 30, img: '/30.svg' },
  { id: 31, img: '/31.svg' },
  { id: 32, img: '/32.svg' },
];

const settings = {
  infinite: true,
  speed: 400,
  autoplay: true,
  swipeToSlide: true,
  draggable: true,
  slidesToShow: 7,
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

const Brands = () => {
  return (
    <div className="bg-moreLightGray w-full h-auto">
      <div className="w-[90%] mx-auto">
        <h1 className="md:w-1/4 text-2xl pt-12 mx-10">
          We are ready to uplift your{' '}
          <span className="text-primary font-semibold">brand like many others in </span>the past!
        </h1>

        {/* First Slider */}
        <div className="cursor-grab">
          <Slider {...settings}>
            {brandSectionOne.map((brand) => (
              <div key={brand.id}>
                <Image
                  src={brand.img}
                  width={160}
                  height={100}
                  alt={`Brand ${brand.id}`}
                  className="filter grayscale hover:grayscale-0 object-cover transition-transform duration-300"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Second Slider */}
        <div className="cursor-grab pb-12">
          <Slider {...settings}>
            {brandSectionTwo.map((brand) => (
              <div key={brand.id}>
                <Image
                  src={brand.img}
                  width={160}
                  height={100}
                  alt={`Brand ${brand.id}`}
                  className="filter grayscale hover:grayscale-0 object-cover transition-transform duration-300"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Brands;
