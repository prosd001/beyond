import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider-home.css";
import smoke from "../assets/smoke.png";

const SliderHome = () => {
  const sliderHomeSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "button__bar",
    arrows: false,
  };

  return (
    <div className="slider__home ">
      <Slider {...sliderHomeSettings}>
        <div className="text-white bg-no-repeat xl:bg-cover home__sbg relative">
          <div
            className="max-w-[1000px] mx-auto text-center xl:mt-[250px] mt-[150px]"
            data-aos="fade-up"
          >
            <h2 className="capitalize xl:text-[64px] text-[44px] font-bold">
              Inspiring tomorrow’s leaders,{" "}
              <span className="text-[#E0CF6F]">One Heart</span> At a time
            </h2>
            <h3 className="xl:text-[24px] max-w-[700px] mx-auto xl:mt-4 xl:mb-6 text-sm p-3 xl:p-0 xl:leading-8">
              Gift yourself and your team a coaching experience, beyond the
              words!
            </h3>
            <div className="flex justify-between items-center max-w-[650px] mx-auto p-2 flex-col xl:flex-row gap-y-2">
              <button
                className="btn-gradient-bg xl:w-[284px] w-[320px] h-[54px] font-bold uppercase text-sm"
                data-aos="fade-right"
              >
                Attend a free webinar
              </button>
              <button
                className="bg-white w-[320px] h-[54px] text-[#84904B] font-bold uppercase text-sm"
                data-aos="fade-left"
              >
                Book your free discovery call
              </button>
            </div>
          </div>

          <img
            src={smoke}
            className="w-full hidden xl:visible object-cover mt-4"
            alt=""
          />
        </div>

        <div className="text-white bg-no-repeat xl:bg-cover home__sbg relative">
          <div
            className="max-w-[1000px] mx-auto text-center xl:mt-[250px] mt-[150px]"
            data-aos="fade-up"
          >
            <h2 className="capitalize xl:text-[64px] text-[44px] font-bold">
              Inspiring tomorrow’s leaders,{" "}
              <span className="text-[#E0CF6F]">One Heart</span> At a time
            </h2>
            <h3 className="xl:text-[24px] max-w-[700px] mx-auto xl:mt-4 xl:mb-6 text-sm p-3 xl:p-0 xl:leading-8">
              Gift yourself and your team a coaching experience, beyond the
              words!
            </h3>
            <div className="flex justify-between items-center max-w-[650px] mx-auto p-2 flex-col xl:flex-row gap-y-2">
              <button
                className="btn-gradient-bg xl:w-[284px] w-[320px] h-[54px] font-bold uppercase text-sm"
                data-aos="fade-right"
              >
                Attend a free webinar
              </button>
              <button
                className="bg-white w-[320px] h-[54px] text-[#84904B] font-bold uppercase text-sm"
                data-aos="fade-left"
              >
                Book your free discovery call
              </button>
            </div>
          </div>
          <div></div>
          <img
            src={smoke}
            className="w-full hidden xl:visible object-cover mt-4"
            alt=""
          />
        </div>

        <div className="text-white bg-no-repeat xl:bg-cover home__sbg relative">
          <div
            className="max-w-[1000px] mx-auto text-center xl:mt-[250px] mt-[150px]"
            data-aos="fade-up"
          >
            <h2 className="capitalize xl:text-[64px] text-[44px] font-bold">
              Inspiring tomorrow’s leaders,{" "}
              <span className="text-[#E0CF6F]">One Heart</span> At a time
            </h2>
            <h3 className="xl:text-[24px] max-w-[700px] mx-auto xl:mt-4 xl:mb-6 text-sm p-3 xl:p-0 xl:leading-8">
              Gift yourself and your team a coaching experience, beyond the
              words!
            </h3>
            <div className="flex justify-between items-center max-w-[650px] mx-auto p-2 flex-col xl:flex-row gap-y-2">
              <button
                className="btn-gradient-bg xl:w-[284px] w-[320px] h-[54px] font-bold uppercase text-sm"
                data-aos="fade-right"
              >
                Attend a free webinar
              </button>
              <button
                className="bg-white w-[320px] h-[54px] text-[#84904B] font-bold uppercase text-sm"
                data-aos="fade-left"
              >
                Book your free discovery call
              </button>
            </div>
          </div>
          <div></div>
          <img
            src={smoke}
            className="w-full hidden xl:visible object-cover mt-4"
            alt=""
          />
        </div>

        <div className="text-white bg-no-repeat xl:bg-cover home__sbg relative">
          <div
            className="max-w-[1000px] mx-auto text-center xl:mt-[250px] mt-[150px]"
            data-aos="fade-up"
          >
            <h2 className="capitalize xl:text-[64px] text-[44px] font-bold">
              Inspiring tomorrow’s leaders,{" "}
              <span className="text-[#E0CF6F]">One Heart</span> At a time
            </h2>
            <h3 className="xl:text-[24px] max-w-[700px] mx-auto xl:mt-4 xl:mb-6 text-sm p-3 xl:p-0 xl:leading-8">
              Gift yourself and your team a coaching experience, beyond the
              words!
            </h3>
            <div className="flex justify-between items-center max-w-[650px] mx-auto p-2 flex-col xl:flex-row gap-y-2">
              <button
                className="btn-gradient-bg xl:w-[284px] w-[320px] h-[54px] font-bold uppercase text-sm"
                data-aos="fade-right"
              >
                Attend a free webinar
              </button>
              <button
                className="bg-white w-[320px] h-[54px] text-[#84904B] font-bold uppercase text-sm"
                data-aos="fade-left"
              >
                Book your free discovery call
              </button>
            </div>
          </div>
          <div></div>
          <img
            src={smoke}
            className="w-full hidden xl:visible object-cover mt-4"
            alt=""
          />
        </div>

        <div className="text-white bg-no-repeat xl:bg-cover home__sbg relative">
          <div
            className="max-w-[1000px] mx-auto text-center xl:mt-[250px] mt-[150px]"
            data-aos="fade-up"
          >
            <h2 className="capitalize xl:text-[64px] text-[44px] font-bold">
              Inspiring tomorrow’s leaders,{" "}
              <span className="text-[#E0CF6F]">One Heart</span> At a time
            </h2>
            <h3 className="xl:text-[24px] max-w-[700px] mx-auto xl:mt-4 xl:mb-6 text-sm p-3 xl:p-0 xl:leading-8">
              Gift yourself and your team a coaching experience, beyond the
              words!
            </h3>
            <div className="flex justify-between items-center max-w-[650px] mx-auto p-2 flex-col xl:flex-row gap-y-2">
              <button
                className="btn-gradient-bg xl:w-[284px] w-[320px] h-[54px] font-bold uppercase text-sm"
                data-aos="fade-right"
              >
                Attend a free webinar
              </button>
              <button
                className="bg-white w-[320px] h-[54px] text-[#84904B] font-bold uppercase text-sm"
                data-aos="fade-left"
              >
                Book your free discovery call
              </button>
            </div>
          </div>
          <div></div>
          <img
            src={smoke}
            className="w-full hidden xl:visible object-cover mt-4"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderHome;
