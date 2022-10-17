import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import smoke from "../assets/smoke.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Footer from "../Components/Footer";
import { useRecoilValue } from "recoil";
import { localizationState } from "../atoms/localizationAtom";
import WaitingList from "../Components/WaitingList";

const Articales = () => {
  const [loading, setLoading] = useState(true);
  const [articales, setArticales] = useState([]);
  const [showcase, setShowcase] = useState({});
  const lang = useRecoilValue(localizationState);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  // Instances
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/showcase`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.showcase[0]) {
          setShowcase(data.showcase[0]);
        }
        setLoading(false);
      });
  }, [setArticales]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/public-articales`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setArticales(data.articales);
        }
        setLoading(false);
      });
  }, [setArticales]);

  return (
    <>
      <section>
        {loading && (
          <div className="flex w-full justify-center items-center mt-[20%]">
            <div aria-label="Loading..." role="status">
              <svg
                class="h-16 w-16 animate-spin stroke-[#84904B]"
                viewBox="0 0 256 256"
              >
                <line
                  x1="128"
                  y1="32"
                  x2="128"
                  y2="64"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="195.9"
                  y1="60.1"
                  x2="173.3"
                  y2="82.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="224"
                  y1="128"
                  x2="192"
                  y2="128"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="195.9"
                  y1="195.9"
                  x2="173.3"
                  y2="173.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="128"
                  y1="224"
                  x2="128"
                  y2="192"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="60.1"
                  y1="195.9"
                  x2="82.7"
                  y2="173.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="32"
                  y1="128"
                  x2="64"
                  y2="128"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="60.1"
                  y1="60.1"
                  x2="82.7"
                  y2="82.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
              </svg>
              {/* <span class="text-2xl font-bold text-[#84904B]">Loading...</span> */}
            </div>
          </div>
        )}
        {!loading && (
          <>
            {!showcase.popular && (
              <div className="relative w-full max-w-[2000px] why-trees-bg 2xl:h-[1000px] xl:h-[800px] h-[600px] mx-auto">
                {!lang && (
                  <p
                    className="absolute xl:top-[35%] xl:left-[33%] top-[39%] left-[20%] xl:text-[64px] text-white font-bold text-[44px]"
                    data-aos="zoom-in"
                  >
                    Articles & Resources
                  </p>
                )}
                {lang && (
                  <p
                    className="absolute xl:top-[35%] xl:left-[32%] top-[39%] left-[20%] xl:text-[64px] text-white font-bold text-[44px] capitalize"
                    data-aos="zoom-in"
                  >
                    Articles et Ressources
                  </p>
                )}
                <img
                  src={smoke}
                  alt=""
                  className="absolute xl:-bottom-2 -bottom-1 w-full"
                />
              </div>
            )}

            <div>
              {showcase?.popular && (
                <div
                  className="relative w-full xl:h-[900px] h-[600px]"
                  style={{
                    backgroundImage: `url("${showcase.popular.banner_url}"), linear-gradient(
                180deg,rgba(5, 4, 13, 0) 0%,rgba(5, 4, 13, 0.0823073) 22.35%,rgba(5, 4, 13, 0.41) 46.94%, rgba(5, 4, 13, 0.33) 79.74%, #f0f0f0 100%)`,
                    backgroundBlendMode: "overlay",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="xl:p-24 flex w-full h-full justify-center flex-col p-4 z-50"
                    data-aos="zoom-in"
                  >
                    <h3 className="uppercase text-white xl:text-xl xl:tracking-[15px] tracking-[5px]">
                      popular
                    </h3>
                    <h2 className="text-white capitalize xl:my-10 xl:text-[64px] text-3xl my-4">
                      {showcase.popular.title}
                    </h2>
                    <div className="flex justify-start cursor-pointer items-center">
                      <span
                        className="text-[#E0CF6F] font-bold xl:text-2xl cursor-pointer z-50"
                        onClick={() => {
                          navigate(`/articles/${showcase.popular.slug}`);
                        }}
                      >
                        Read More
                      </span>
                      <ChevronRightIcon className="xl:w-8 xl:h-8 w-4 h-4 text-[#E0CF6F] xl:ml-2 ml-1" />
                    </div>
                  </div>
                  <img
                    src={smoke}
                    alt=""
                    className="absolute -bottom-2 w-full"
                  />
                </div>
              )}

              <div className="max-w-[1400px] mx-auto py-8 p-4">
                {!lang && showcase.popular && (
                  <h2
                    className="font-bold xl:text-[54px] xl:mb-8 text-[40px] mb-4"
                    data-aos="zoom-in"
                  >
                    Featured <span className="text-[#84904B]">Content</span>
                  </h2>
                )}
                {lang && showcase.popular && (
                  <h2
                    className="font-bold xl:text-[54px] xl:mb-8 text-[40px] mb-4 capitalize"
                    data-aos="zoom-in"
                  >
                    Contenu en <span className="text-[#84904B]">vedette</span>
                  </h2>
                )}
                {showcase.popular && (
                  <div className="grid xl:grid-cols-3 xl:gap-x-6">
                    <div
                      className="xl:col-span-2 flex flex-col"
                      data-aos="fade-right"
                    >
                      <div>
                        <img
                          src={showcase.featured_big.banner_url}
                          alt=""
                          className="object-cover w-full"
                        />
                        <p className="uppercase text-[#84904B] text-sm xl:tracking-[8px] tracking-[6px] my-4">
                          {showcase.featured_big.type === "Resource"
                            ? "GUIDE RESOURCE"
                            : "ARTICLE"}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-[#05040D] xl:text-4xl text-xl">
                            {showcase.featured_big.title}
                          </p>

                          <div className="flex justify-start cursor-pointer items-center gap-2 xl:gap-0">
                            <span
                              className="text-[#84904B] font-bold xl:text-lg cursor-pointer z-50 text-sm"
                              onClick={() => {
                                navigate(
                                  `/articles/${showcase.featured_big.slug}`
                                );
                              }}
                            >
                              {showcase.featured_big.type === "Resource"
                                ? "Download"
                                : "See more"}
                            </span>
                            <ChevronRightIcon className="xl:w-7 xl:h-7 w-4 h-4 text-[#84904B] xl:ml-2" />
                          </div>
                        </div>
                      </div>

                      <div className="xl:flex mt-8 justify-between">
                        <div className="xl:w-[47%]">
                          <img
                            src={showcase.featured_small_one.banner_url}
                            alt=""
                            className="object-cover w-full"
                          />
                          <p className="uppercase text-[#84904B] text-xs tracking-[6px] my-3">
                            {showcase.featured_small_one.type === "Resource"
                              ? "GUIDE RESOURCE"
                              : "ARTICLE"}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-[#05040D] text-xl">
                              {showcase.featured_small_one.title}
                            </p>
                            <div className="flex justify-start cursor-pointer items-center gap-2">
                              <span
                                className="text-[#84904B] font-bold cursor-pointer z-50 xl:text-lg"
                                onClick={() => {
                                  navigate(
                                    `/articles/${showcase.featured_small_one.slug}`
                                  );
                                }}
                              >
                                {showcase.featured_small_one.type === "Resource"
                                  ? "Download"
                                  : "See more"}
                              </span>
                              <ChevronRightIcon className="w-6 h-6 text-[#84904B] xl:ml-2" />
                            </div>
                          </div>
                        </div>

                        <div className="xl:w-[47%] my-4 xl:my-0">
                          <img
                            src={showcase.featured_small_two.banner_url}
                            alt=""
                            className="object-cover w-full"
                          />
                          <p className="uppercase text-[#84904B] text-xs tracking-[6px] my-3">
                            {showcase.featured_small_two.type === "Resource"
                              ? "GUIDE RESOURCE"
                              : "ARTICLE"}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-[#05040D] text-xl">
                              {showcase.featured_small_two.title}
                            </p>
                            <div className="flex justify-start cursor-pointer items-center">
                              <span
                                className="text-[#84904B] font-bold text-md cursor-pointer z-50"
                                onClick={() => {
                                  navigate(
                                    `/articles/${showcase.featured_small_two.slug}`
                                  );
                                }}
                              >
                                {showcase.featured_small_two.type === "Resource"
                                  ? "Download"
                                  : "See more"}
                              </span>
                              <ChevronRightIcon className="w-6 h-6 text-[#84904B] ml-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-4" data-aos="fade-left">
                      <div className="">
                        <img
                          src={showcase.featured_smallest_one.banner_url}
                          alt=""
                          className="object-cover w-full"
                        />
                        <p className="uppercase text-[#84904B] text-xs tracking-[5px] my-3">
                          {showcase.featured_smallest_one.type === "Resource"
                            ? "GUIDE RESOURCE"
                            : "ARTICLE"}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-[#05040D] text-xl">
                            {showcase.featured_smallest_one.title}
                          </p>
                          <div className="flex justify-start cursor-pointer items-center">
                            <span
                              className="text-[#84904B] font-bold text-sm cursor-pointer z-50"
                              onClick={() => {
                                navigate(
                                  `/articles/${showcase.featured_smallest_one.slug}`
                                );
                              }}
                            >
                              {showcase.featured_smallest_one.type ===
                              "Resource"
                                ? "Download"
                                : "See more"}
                            </span>
                            <ChevronRightIcon className="w-6 h-6 text-[#84904B] ml-2" />
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <img
                          src={showcase.featured_smallest_two.banner_url}
                          alt=""
                          className="object-cover w-full"
                        />
                        <p className="uppercase text-[#84904B] text-xs tracking-[6px] my-3">
                          {showcase.featured_smallest_two.type === "Resource"
                            ? "GUIDE RESOURCE"
                            : "ARTICLE"}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-[#05040D] text-xl">
                            {showcase.featured_smallest_two.title}
                          </p>
                          <div className="flex justify-start cursor-pointer items-center">
                            <span
                              className="text-[#84904B] font-bold text-md cursor-pointer z-50"
                              onClick={() => {
                                navigate(
                                  `/articles/${showcase.featured_smallest_two.slug}`
                                );
                              }}
                            >
                              {showcase.featured_smallest_two.type ===
                              "Resource"
                                ? "Download"
                                : "See more"}
                            </span>
                            <ChevronRightIcon className="w-6 h-6 text-[#84904B] ml-2" />
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <img
                          src={showcase.featured_smallest_three.banner_url}
                          alt=""
                          className="object-cover w-full"
                        />
                        <p className="uppercase text-[#84904B] text-xs tracking-[6px] my-3">
                          {showcase.featured_smallest_three.type === "Resource"
                            ? "GUIDE RESOURCE"
                            : "ARTICLE"}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-[#05040D] text-xl">
                            {showcase.featured_smallest_three.title}
                          </p>
                          <div className="flex justify-start cursor-pointer items-center">
                            <span
                              className="text-[#84904B] font-bold text-md cursor-pointer z-50"
                              onClick={() => {
                                navigate(
                                  `/articles/${showcase.featured_smallest_three.slug}`
                                );
                              }}
                            >
                              {showcase.featured_smallest_three.type ===
                              "Resource"
                                ? "Download"
                                : "See more"}
                            </span>
                            <ChevronRightIcon className="w-6 h-6 text-[#84904B] ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {articales.length === 0 && (
                  <div>
                    {!lang && (
                      <h2
                        className="font-bold xl:text-[54px] xl:my-10 text-[40px] my-8 text-center"
                        data-aos="zoom-in"
                      >
                        Coming
                        <span className="text-[#84904B]"> Soon...</span>
                      </h2>
                    )}
                    {lang && (
                      <h2
                        className="font-bold xl:text-[54px] xl:my-10 text-[40px] my-8 text-center"
                        data-aos="zoom-in"
                      >
                        À <span className="text-[#84904B]">Venir...</span>
                      </h2>
                    )}
                    <WaitingList />
                  </div>
                )}

                {articales.length !== 0 && (
                  <div>
                    {!lang && (
                      <h2
                        className="font-bold xl:text-[54px] xl:my-10 text-[40px] my-8"
                        data-aos="zoom-in"
                      >
                        All <span className="text-[#84904B]">Content</span>
                      </h2>
                    )}
                    {lang && (
                      <h2
                        className="font-bold xl:text-[54px] xl:my-10 text-[40px] my-8"
                        data-aos="zoom-in"
                      >
                        Tout le <span className="text-[#84904B]">contenu</span>
                      </h2>
                    )}
                    <div
                      className="grid xl:grid-cols-3 gap-x-8 gap-y-10"
                      data-aos="fade-left"
                    >
                      {articales.map((articale) => (
                        <div className="">
                          <img
                            src={articale.banner_url}
                            alt=""
                            className="object-cover w-full"
                          />
                          <p className="uppercase text-[#84904B] text-xs tracking-[6px] my-3">
                            {articale.type === "Resource"
                              ? "GUIDE RESOURCE"
                              : "ARTICLE"}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-[#05040D] text-xl">
                              {articale.title}
                            </p>
                            <div className="flex justify-start cursor-pointer items-center">
                              <span
                                className="text-[#84904B] font-bold text-md cursor-pointer z-50"
                                onClick={() => {
                                  navigate(`/articles/${articale.slug}`);
                                }}
                              >
                                {articale.type === "Resource"
                                  ? "Download"
                                  : "See more"}
                              </span>
                              <ChevronRightIcon className="w-6 h-6 text-[#84904B] ml-2" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full flex justify-center my-5">
                      <button className="capitalize btn-gradient-bg text-white font-bold xl:px-10 xl:py-4 mx-auto px-4 py-2 mt-6">
                        {!lang ? "Show more" : "Montre plus"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </section>
      {!loading && <Footer />}
    </>
  );
};

export default Articales;
