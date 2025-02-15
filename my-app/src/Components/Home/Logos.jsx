import Slider from "react-slick/lib/slider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';



const brandSectionOne = [
    { id: 1, img: '/customer-logo1.webp' },
    { id: 2, img: '/customer-logo2.webp' },
    { id: 3, img: '/customer-logo3.webp' },
    { id: 4, img: '/customer-logo4.webp' },
    { id: 5, img: '/customer-logo5.webp' },
    { id: 5, img: '/customer-logo6.webp' },

  ];

  const settings = {
    infinite: true,
    speed: 400,
    autoplay: true,
    swipeToSlide: true,
    draggable: true,
    slidesToShow: 5,
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

const Logos = () => {
  return (
    <div>
      <div className="cursor-grab">
        <Slider {...settings}>
          {brandSectionOne.map((brand) => (
            <div key={brand.id}>
              <Image
                src={brand.img}
                width={120}
                height={120}
                alt={`Brand ${brand.id}`}
                
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Logos;
