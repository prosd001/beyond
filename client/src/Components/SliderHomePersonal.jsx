import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider-home.css";
import smoke from "../assets/smoke.png";
import { useRecoilState } from "recoil";
import { localizationState } from "../atoms/localizationAtom";

const SliderHomePersonal = () => {
  const [lang] = useRecoilState(localizationState);

  const sliderHomeSettings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    dotsClass: "button__bar",
    arrows: false,
    lazyLoad: false,
  };

  return lang ? (
    <div className="slider__home">
      <Slider {...sliderHomeSettings}>
        <div className=" bg-no-repeat xl:bg-cover home__sbg_p relative w-full xl:h-[950px] h-[700px]"></div>
        <div className=" bg-no-repeat xl:bg-cover home__sbg2_p relative w-full xl:h-[950px] h-[700px]"></div>
        <div className=" bg-no-repeat xl:bg-cover home__sbg3_p relative w-full xl:h-[950px] h-[700px]"></div>
        <div className=" bg-no-repeat xl:bg-cover home__sbg4_p relative w-full xl:h-[950px] h-[700px]"></div>
      </Slider>

      <div className="absolute top-0 text-white w-screen xl:h-[950px] h-[700px]">
        <div
          className="max-w-[1000px] mx-auto text-center xl:mt-[250px] mt-[150px]"
          data-aos="zoom-in"
        >
          <h2 className="capitalize xl:text-[64px] text-[44px] font-bold">
            Inspirer les leaders de demain,{" "}
            <span className="text-[#E0CF6F]">Un coeur</span> À la fois
          </h2>
          <h3 className="xl:text-[24px] max-w-[700px] mx-auto xl:mt-4 xl:mb-6 text-sm p-3 xl:p-0 xl:leading-8">
            Offrez-vous et à votre équipe une expérience de coaching, <br />
            au-delà des mots!
          </h3>
          <div className="flex justify-between items-center max-w-[720px] mx-auto p-2 flex-col xl:flex-row gap-y-2">
            <button
              className="btn-gradient-bg xl:w-[284px] w-[320px] h-[54px] font-bold uppercase text-sm"
              onClick={() => {
                window.open(
                  "https://www.eventbrite.com/cc/webinaires-1213099",
                  "_blank"
                );
              }}
            >
              Assistez à un webinaire gratuit
            </button>
            <button
              className="bg-white xl:w-[390px] w-[320px] h-[54px] text-[#84904B] font-bold uppercase text-sm"
              onClick={() => {
                window.open(
                  "https://calendly.com/beyondwordz/rencontre-exploratoire-30min",
                  "_blank"
                );
              }}
            >
              Réservez votre appel découverte gratuit
            </button>
          </div>
        </div>
        <div className="h-[100px] xl:h-0"></div>
        <img
          src={smoke}
          className="w-full object-cover mt-4 absolute -bottom-1  h-[130px] xl:h-auto xl:max-h-[300px]"
          alt=""
        />
      </div>
    </div>
  ) : (
    <div className="slider__home">
      <Slider {...sliderHomeSettings}>
        <div className=" bg-no-repeat xl:bg-cover home__sbg_p relative w-full xl:h-[950px] h-[700px]"></div>
        <div className=" bg-no-repeat xl:bg-cover home__sbg2_p relative w-full xl:h-[950px] h-[700px]"></div>
        <div className=" bg-no-repeat xl:bg-cover home__sbg3_p relative w-full xl:h-[950px] h-[700px]"></div>
        <div className=" bg-no-repeat xl:bg-cover home__sbg4_p relative w-full xl:h-[950px] h-[700px]"></div>
      </Slider>

      <div className="absolute top-0 text-white w-screen xl:h-[950px] h-[700px]">
        <div
          className="max-w-[1000px] mx-auto text-center xl:mt-[250px] mt-[150px]"
          data-aos="zoom-in"
        >
          <h2 className="capitalize xl:text-[64px] text-[44px] font-bold">
            Inspiring tomorrow’s leaders,{" "}
            <span className="text-[#E0CF6F]">One Heart</span> At a time
          </h2>
          <h3 className="xl:text-[24px] max-w-[700px] mx-auto xl:mt-4 xl:mb-6 text-sm p-3 xl:p-0 xl:leading-8">
            Gift yourself and your team a coaching experience, beyond the words!
          </h3>
          <div className="flex justify-between items-center max-w-[650px] mx-auto p-2 flex-col xl:flex-row gap-y-2">
            <button
              className="btn-gradient-bg xl:w-[284px] w-[320px] h-[54px] font-bold uppercase text-sm"
              onClick={() => {
                window.open(
                  "https://www.eventbrite.com/cc/webinaires-1213099",
                  "_blank"
                );
              }}
            >
              Attend a free webinar
            </button>
            <button
              className="bg-white w-[320px] h-[54px] text-[#84904B] font-bold uppercase text-sm"
              onClick={() => {
                window.open(
                  "https://calendly.com/beyondwordz/exploratory-with-karine-roy",
                  "_blank"
                );
              }}
            >
              Book your free discovery call
            </button>
          </div>
        </div>
        <div className="h-[100px] xl:h-0"></div>
        <img
          src={smoke}
          className="w-full object-cover mt-4 absolute -bottom-1  h-[130px] xl:h-auto xl:max-h-[300px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default SliderHomePersonal;
