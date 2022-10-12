import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider-work.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import worksSliderOne from "../assets/works-slider-one.png";

const PreviousBtn = (props) => {
  const { onClick } = props;
  return (
    <div
      className="xl:w-[50px] xl:h-[50px] h-[40px] w-[40px] rounded-full bg-[#84904B] inline-flex items-center justify-center prev-arrow text-white p-3 cursor-pointer"
      onClick={onClick}
      data-aos="fade-right"
    >
      <ChevronLeftIcon />
    </div>
  );
};

const NextBtn = (props) => {
  const { onClick } = props;
  return (
    <div
      className="xl:w-[50px] xl:h-[50px] h-[40px] w-[40px] rounded-full bg-[#84904B] inline-flex items-center justify-center next-arrow text-white p-3 cursor-pointer"
      onClick={onClick}
      data-aos="fade-left"
    >
      <ChevronRightIcon />
    </div>
  );
};

const WorksSlider = () => {
  // slider
  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    responsive: [
      {
        breakpoint: 640,
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
  return (
    <div
      className="p-4 relative mt-[100px] max-w-[2000px] mx-auto"
      data-aos="zoom-in-up"
    >
      <Slider {...settings}>
        <div className="w-[400px]">
          <img src={worksSliderOne} alt="" className="object-contain" />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Multiple coaches, one focus: YOU!
          </h4>
          <p className="text-[#393B3F]">
            We join forces to provide impactful coaching experiences that will
            be focused on your personal or professional goals, projects and
            challenges.
          </p>
        </div>

        <div className="w-[500px]">
          <img src={worksSliderOne} alt="" className="object-contain" />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Multiple coaches, one focus: YOU!
          </h4>
          <p className="text-[#393B3F]">
            We join forces to provide impactful coaching experiences that will
            be focused on your personal or professional goals, projects and
            challenges.
          </p>
        </div>

        <div className="w-[500px]">
          <img src={worksSliderOne} alt="" className="object-contain" />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Multiple coaches, one focus: YOU!
          </h4>
          <p className="text-[#393B3F]">
            We join forces to provide impactful coaching experiences that will
            be focused on your personal or professional goals, projects and
            challenges.
          </p>
        </div>

        <div className="w-[500px]">
          <img src={worksSliderOne} alt="" className="object-contain" />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Multiple coaches, one focus: YOU!
          </h4>
          <p className="text-[#393B3F]">
            We join forces to provide impactful coaching experiences that will
            be focused on your personal or professional goals, projects and
            challenges.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default WorksSlider;
