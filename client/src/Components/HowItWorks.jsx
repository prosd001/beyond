import partnerOne from "../assets/partner-one.png";
import partnerTwo from "../assets/partner-two.png";
import partnerThree from "../assets/partner-three.png";
import partnerFour from "../assets/partner-four.png";
import partnerFive from "../assets/partner-five.png";
import partnerSix from "../assets/partner-six.png";
import partnerSeven from "../assets/partner-seven.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HowItWorks = () => {
  // slider
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: false,
    speed: 1500,
    arrows: false,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
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
    <div className="w-full 2xl:max-w-[1700px] max-w-[1300px] mx-auto lg:hidden mt-10">
      <Slider {...settings}>
        <img
          src={partnerOne}
          alt=""
          className="w-[80px] h-[50px] object-contain"
          onClick={() => {
            window.open(
              "https://www.nature.org/en-us/get-involved/how-to-help/plant-a-billion/",
              "_blank"
            );
          }}
        />
        <img
          src={partnerTwo}
          alt=""
          className="w-[80px] h-[100px] object-contain"
          onClick={() => {
            window.open("https://www.equi-sens.ca/qui-sommes-nous", "_blank");
          }}
        />
        <img
          src={partnerThree}
          alt=""
          className="w-[80px] h-[50px] object-contain"
          onClick={() => {
            window.open("https://mielmontreal.com/", "_blank");
          }}
        />
        <img
          src={partnerFour}
          alt=""
          className="w-[110px] h-[50px] object-contain "
          onClick={() => {
            window.open("https://tenirpromesse.org/wp/apropos/", "_blank");
          }}
        />
        <img
          src={partnerFive}
          alt=""
          className="min-w-[100px] h-[50px] object-contain"
          onClick={() => {
            window.open("https://evolutrek.com/", "_blank");
          }}
        />
        <img
          src={partnerSix}
          alt=""
          className="w-[80px] h-[100px] object-contain"
          onClick={() => {
            window.open("https://ecuriesunnybreeze.com/", "_blank");
          }}
        />
        <img
          src={partnerSeven}
          alt=""
          className="w-[80px] h-[50px] object-contain"
          onClick={() => {
            window.open("https://equssleadership.com/", "_blank");
          }}
        />
      </Slider>
    </div>
  );
};

export default HowItWorks;
