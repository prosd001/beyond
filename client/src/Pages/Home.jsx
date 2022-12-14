import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactComponent as HorseIcon } from "../assets/horse-icon.svg";
import { ReactComponent as HiveIcon } from "../assets/hive-icon.svg";
import { ReactComponent as TreeIcon } from "../assets/tree-icon.svg";
import coachOne from "../assets/coach-one.png";
import coachTwo from "../assets/coach-two.png";
import coachThree from "../assets/coach-three.png";
import coachFour from "../assets/coach-four.png";
import partnerOne from "../assets/partner-one.png";
import partnerTwo from "../assets/partner-two.png";
import partnerThree from "../assets/partner-three.png";
import partnerFour from "../assets/partner-four.png";
import partnerFive from "../assets/partner-five.png";
import partnerSix from "../assets/partner-six.png";
import partnerSeven from "../assets/partner-seven.png";
import WorksSlider from "../Components/WorksSlider";
import ContactMe from "../Components/ContactMe";
import Footer from "../Components/Footer";
import { useRecoilValue } from "recoil";
import { localizationState } from "../atoms/localizationAtom";
import SliderHomePersonal from "../Components/SliderHomePersonal";
import { Link } from "react-router-dom";
import HowItWorks from "../Components/HowItWorks";

const Home = () => {
  const lang = useRecoilValue(localizationState);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return lang ? (
    <>
      <section className="">
        <SliderHomePersonal />
        <div className="flex flex-col items-center max-w-[2000px] mx-auto">
          <h2
            className="xl:text-[54px] text-[40px] font-bold mt-4 xl:mt-4"
            data-aos="zoom-in"
          >
            Mes <span className="text-[#84904B]">programmes</span>
          </h2>
          <div className="flex justify-center gap-10 mt-[140px] flex-col xl:flex-row">
            <div
              className="relative bg-[#604945] w-[380px] px-6 pb-3 h-[390px]"
              data-aos="zoom-in"
            >
              <HorseIcon className="absolute -top-[100px] left-[100px]" />
              <h3 className="uppercase text-white font-bold text-[24px] mt-[90px]">
                CONNECTION
              </h3>
              <p className="text-[#CAB8B5] mt-4">
                S??ance priv??e de coaching assist?? par les chevaux. En pleine
                nature, les sens bien ouverts, et accompagn?? de 3 coachs d??di??s
                ?? votre d??veloppement personnel, cette exp??rience a ??t?? con??ue
                afin d'acc??l??rer vos prises de conscience pour avoir un impact
                imm??diat. D??connecter, afin de mieux vous reconnecter!
                Offrez-vous un moment inoubliable!
              </p>
            </div>
            <div
              className="relative bg-[#84904B] w-[380px] px-6 mt-[90px] xl:mt-0 pb-3 h-[390px]"
              data-aos="zoom-in"
            >
              <TreeIcon className="absolute -top-[100px] left-[100px]" />
              <h3 className="uppercase text-white font-bold text-[24px] mt-[90px]">
                ??volution
              </h3>
              <p className="text-[#fff] mt-4">
                Programme de d??veloppement et d?????volution personnelle de 3 mois.
                Afin d'entamer votre parcours de d??veloppement personnel de
                mani??re structur??e, efficace et inspirante, gr??ce ?? l???expertise,
                ?? l???accompagnement et au soutien d'une coach professionnelle.
                Forfaits en priv?? et en groupe disponibles.
              </p>
            </div>
            <div
              className="relative bg-[#E0CF6F] w-[380px] px-6 mt-[70px] xl:mt-0 pb-8 h-[390px]"
              data-aos="zoom-in"
            >
              <HiveIcon className="absolute -top-[100px] left-[100px]" />
              <h3 className="uppercase font-bold text-[24px] mt-[90px]">
                TRANSFORMATION
              </h3>
              <p className="mt-4">
                Programme de 6 mois, visant une transformation personnelle par
                un accompagnement en coaching unique et diversifi??, combinant la
                PNL, le coaching orient?? solutions, et le coaching assist?? par
                les chevaux. Ce programme vous permet de travailler sur un but,
                projet ou d??fi important et qui sera transformateur pour votre
                vie.
              </p>
            </div>
          </div>
          <Link to={"/programs"}>
            <button
              className="uppercase btn-gradient-bg text-white text-sm font-bold w-[187px] mt-9 py-3"
              data-aos="fade-up"
            >
              {!lang ? "Learn More" : "EN SAVOIR PLUS"}
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center mt-[85px]">
          <h2
            className="xl:text-[54px] text-[40px] font-bold"
            data-aos="zoom-in"
          >
            Mes <span className="text-[#84904B]">Coachs</span>
          </h2>
          <div className="flex gap-8 mt-10 xl:flex-row flex-col px-2">
            <img src={coachOne} alt="" data-aos="fade-right" />
            <img src={coachTwo} alt="" data-aos="fade-left" />
          </div>
          <div className="flex gap-8 mt-8 xl:flex-row flex-col px-2">
            <img src={coachThree} alt="" data-aos="fade-right" />
            <img src={coachFour} alt="" data-aos="fade-left" />
          </div>
        </div>

        <div className="flex flex-col items-center mt-[100px]">
          <h2
            className="xl:text-[54px] text-[31px] font-bold"
            data-aos="zoom-in"
          >
            Comment ??a <span className="text-[#84904B]">fonctionne?</span>
          </h2>
        </div>
        <WorksSlider />

        <div className="flex flex-col items-center xl:mt-[100px] mt-[50px]">
          <h2
            className="xl:text-[54px] text-[40px] text-center font-bold px-2"
            data-aos="zoom-in"
          >
            Mes <span className="text-[#84904B]">Causes</span> et
            <span className="text-[#84904B]"> Partenaires</span>
          </h2>
          <p className="text-[#393B3F] text-center" data-aos="zoom-in">
            Les causes que nous soutiendrons
            <span className="font-bold"> ...grandissons</span>, tous ensemble!
          </p>
          <div className="lg:flex items-center justify-center xl:gap-16 mt-10  grid-cols-4 gap-3 p-2 hidden">
            <img
              src={partnerOne}
              alt=""
              className="cursor-pointer"
              data-aos="fade-right"
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
              className="cursor-pointer"
              data-aos="fade-right"
              onClick={() => {
                window.open(
                  "https://www.equi-sens.ca/qui-sommes-nous",
                  "_blank"
                );
              }}
            />
            <img
              src={partnerThree}
              alt=""
              className="cursor-pointer col-span-2"
              data-aos="fade-right"
              onClick={() => {
                window.open("https://mielmontreal.com/", "_blank");
              }}
            />
            <img
              src={partnerFour}
              alt=""
              className="cursor-pointer"
              onClick={() => {
                window.open("https://tenirpromesse.org/wp/apropos/", "_blank");
              }}
            />
            <img
              src={partnerFive}
              alt=""
              className="cursor-pointer"
              data-aos="fade-left"
              onClick={() => {
                window.open("https://evolutrek.com/", "_blank");
              }}
            />
            <img
              src={partnerSix}
              alt=""
              className="cursor-pointer"
              data-aos="fade-left"
              onClick={() => {
                window.open("https://ecuriesunnybreeze.com/", "_blank");
              }}
            />
            <img
              src={partnerSeven}
              alt=""
              className="cursor-pointer"
              data-aos="fade-left"
              onClick={() => {
                window.open("https://equssleadership.com/", "_blank");
              }}
            />
          </div>
          <HowItWorks />
        </div>

        <div className="flex flex-col items-center xl:mt-[100px] bg-[#252C08] py-4 pb-8 mt-[50px]">
          <h2
            className="text-white xl:text-[54px] text-[40px] font-bold my-8"
            data-aos="zoom-in"
          >
            T??moignages
          </h2>
          <div className="flex items-center justify-center xl:gap-10 flex-col xl:flex-row">
            <div
              className="xl:w-[275px] xl:h-[400px] w-[300px] h-fit"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center rounded-full bg-[#84904B] w-[90px] h-[90px]">
                <span className="text-[#252C08] text-[40px] font-bold">R</span>
              </div>
              <h4 className="text-[#E0CF6F] font-bold text-xl mt-3">
                Roxane V.
              </h4>
              <p className="text-[#9AA098] text-lg mt-2">Solopreneure</p>
              <p className="text-[#9AA098] text-sm mt-4">
                Une exp??rience de connexion au vivant, de c??ur ?? c??ur, avec
                simplicit??, pour vivre un grand calme et savourer le moment
                pr??sent, dans un magnifique endroit en nature tout pr??s de
                Montr??al, sur la Rive-Sud.
              </p>
            </div>

            <div
              className="xl:w-[275px] xl:h-[400px] w-[300px] h-fit mt-3 xl:mt-0"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center rounded-full bg-[#84904B] w-[90px] h-[90px]">
                <span className="text-[#252C08] text-[40px] font-bold">M</span>
              </div>
              <h4 className="text-[#E0CF6F] font-bold text-xl mt-3">
                Melanie M.
              </h4>
              <p className="text-[#9AA098] text-lg mt-2">
                Coach professionnelle certifi??e
              </p>
              <p className="text-[#9AA098] text-sm mt-4">
                Le coaching avec les chevaux est tout simplement magique. Ce
                coaching restera grav?? dans ma m??moire ?? vie, car il m'a
                transform??, il m'a aid?? ?? m'affirmer et ?? mettre mes limites.
                Rien n'??tait programm??, la connexion avec Karine et avec les
                chevaux s'est faite naturellement. Karine a une belle qualit?? de
                pr??sence et de se faire coacher dans un environnement comme le
                sien, y'a rien de plus merveilleux, tous mes sens ??taient mis ??
                contribution.
              </p>
            </div>

            <div
              className="xl:w-[275px] xl:h-[400px] w-[300px] h-fit mt-3 xl:mt-0"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center rounded-full bg-[#84904B] w-[90px] h-[90px]">
                <span className="text-[#252C08] text-[40px] font-bold">D</span>
              </div>
              <h4 className="text-[#E0CF6F] font-bold text-xl mt-3">
                Daniele F.
              </h4>
              <p className="text-[#9AA098] text-lg mt-2">Naturopathe</p>
              <p className="text-[#9AA098] text-sm mt-4">
                Quelle prise de conscience guid??e extraordinaire! ??a chang?? ma
                vie! L???exp??rience privil??gi??e avec le cheval m???a tellement
                appris sur mes forces et mes limites. Merci.
              </p>
            </div>

            <div
              className="xl:w-[275px] xl:h-[400px] w-[300px] h-fit mt-3 xl:mt-0"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center rounded-full bg-[#84904B] w-[90px] h-[90px]">
                <span className="text-[#252C08] text-[40px] font-bold">S</span>
              </div>
              <h4 className="text-[#E0CF6F] font-bold text-xl mt-3">
                Sylvie C.
              </h4>
              <p className="text-[#9AA098] text-sm mt-4">
                J???ai v??cu une exp??rience inoubliable et tr??s enrichissante. Dans
                le moment pr??sent, dans la belle nature, avec Karine pour me
                guider et ses chevaux pour me faire comprendre quel aspect de
                moi je devais am??liorer, j???ai pris conscience d???o?? mettre mon
                ??nergie afin de retrouver ce pr??cieux ??quilibre si n??cessaire
                pour se r??aliser dans la vie. Quelle belle fa??on de grandir!
              </p>
            </div>
          </div>
        </div>

        <ContactMe />
      </section>
      <Footer />
    </>
  ) : (
    <>
      <section className="">
        <SliderHomePersonal />
        <div className="flex flex-col items-center max-w-[2000px] mx-auto">
          <h2
            className="xl:text-[54px] text-[40px] font-bold mt-4 xl:mt-4"
            data-aos="zoom-in"
          >
            My <span className="text-[#84904B]">Programs</span>
          </h2>
          <div className="flex justify-center gap-10 mt-[140px] flex-col xl:flex-row">
            <div
              className="relative bg-[#604945] w-[380px] px-6 pb-8 h-[390px]"
              data-aos="zoom-in"
            >
              <HorseIcon className="absolute -top-[100px] left-[100px]" />
              <h3 className="uppercase text-white font-bold text-[24px] mt-[90px]">
                CONNECTION
              </h3>
              <p className="text-[#CAB8B5] mt-4">
                Equine facilitated private coaching session. In the heart of
                nature, with all senses wide open, and guided by 3 coaches
                devoted to your personal growth and development, this experience
                was designed to accelerate your insight to create an immediate
                impact. Take the time to disconnect and reconnect to your true
                self. A memorable moment that will propel you forward!
              </p>
            </div>
            <div
              className="relative bg-[#84904B] w-[380px] px-6 mt-[90px] xl:mt-0 pb-3 h-[390px]"
              data-aos="zoom-in"
            >
              <TreeIcon className="absolute -top-[100px] left-[100px]" />
              <h3 className="uppercase text-white font-bold text-[24px] mt-[90px]">
                EVOLUTION
              </h3>
              <p className="text-[#fff] mt-4">
                3-month personal growth and development program. To initiate
                your personal development journey in a structured, effective and
                inspiring way, benefiting from the expertise, guidance and
                support of a professional coach. Private and group packages
                available.
              </p>
            </div>
            <div
              className="relative bg-[#E0CF6F] w-[380px] px-6 mt-[70px] xl:mt-0 pb-3 h-[390px]"
              data-aos="zoom-in"
            >
              <HiveIcon className="absolute -top-[100px] left-[100px]" />
              <h3 className="uppercase font-bold text-[24px] mt-[90px]">
                TRANSFORMATION
              </h3>
              <p className="mt-4">
                6-month program, aimed at your personal transformation through
                unique and diversified coaching support, combining NLP,
                solution-oriented, and horse-assisted coaching. This program
                allows you to work on a goal, project or challenge that is
                important to you and that will be transformative for your life.
              </p>
            </div>
          </div>
          <Link to={"/programs"}>
            <button
              className="uppercase btn-gradient-bg text-white text-sm font-bold w-[187px] mt-9 py-3"
              data-aos="fade-up"
            >
              {!lang ? "Learn More" : "EN SAVOIR PLUS"}
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center mt-[85px]">
          <h2
            className="xl:text-[54px] text-[40px] font-bold"
            data-aos="zoom-in"
          >
            My <span className="text-[#84904B]">Coaches</span>
          </h2>
          <div className="flex gap-8 mt-10 xl:flex-row flex-col px-2">
            <img src={coachOne} alt="" data-aos="fade-right" />
            <img src={coachTwo} alt="" data-aos="fade-left" />
          </div>
          <div className="flex gap-8 mt-8 xl:flex-row flex-col px-2">
            <img src={coachThree} alt="" data-aos="fade-right" />
            <img src={coachFour} alt="" data-aos="fade-left" />
          </div>
        </div>

        <div className="flex flex-col items-center mt-[100px]">
          <h2
            className="xl:text-[54px] text-[40px] font-bold"
            data-aos="zoom-in"
          >
            How It <span className="text-[#84904B]">Works</span>
          </h2>
        </div>
        <WorksSlider />

        <div className="flex flex-col items-center xl:mt-[100px] mt-[50px]">
          <h2
            className="xl:text-[54px] text-[40px] text-center font-bold px-2"
            data-aos="zoom-in"
          >
            My <span className="text-[#84904B]">Causes</span> &{" "}
            <span className="text-[#84904B]">Partners</span>
          </h2>
          <p className="text-[#393B3F]" data-aos="zoom-in">
            Causes we will support ???{" "}
            <span className="font-bold">let???s grow</span>, all together!
          </p>
          <div className="lg:flex items-center justify-center xl:gap-16 mt-10 hidden grid-cols-4 gap-3 p-2">
            <img
              src={partnerOne}
              alt=""
              className="cursor-pointer"
              data-aos="fade-right"
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
              className="cursor-pointer"
              data-aos="fade-right"
              onClick={() => {
                window.open(
                  "https://www.equi-sens.ca/qui-sommes-nous",
                  "_blank"
                );
              }}
            />
            <img
              src={partnerThree}
              alt=""
              className="cursor-pointer col-span-2"
              data-aos="fade-right"
              onClick={() => {
                window.open("https://mielmontreal.com/", "_blank");
              }}
            />
            <img
              src={partnerFour}
              alt=""
              className="cursor-pointer"
              onClick={() => {
                window.open("https://tenirpromesse.org/wp/apropos/", "_blank");
              }}
            />
            <img
              src={partnerFive}
              alt=""
              className="cursor-pointer"
              data-aos="fade-left"
              onClick={() => {
                window.open("https://evolutrek.com/", "_blank");
              }}
            />
            <img
              src={partnerSix}
              alt=""
              className="cursor-pointer"
              data-aos="fade-left"
              onClick={() => {
                window.open("https://ecuriesunnybreeze.com/", "_blank");
              }}
            />
            <img
              src={partnerSeven}
              alt=""
              className="cursor-pointer"
              data-aos="fade-left"
              onClick={() => {
                window.open("https://equssleadership.com/", "_blank");
              }}
            />
          </div>
          <HowItWorks />
        </div>

        <div className="flex flex-col items-center xl:mt-[100px] mt-[50px] bg-[#252C08] py-4 pb-8">
          <h2
            className="text-white xl:text-[54px] text-[40px] font-bold my-8"
            data-aos="zoom-in"
          >
            Testimonials
          </h2>
          <div className="flex items-center justify-center xl:gap-10 flex-col xl:flex-row">
            <div
              className="xl:w-[275px] xl:h-[400px] w-[300px] h-fit"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center rounded-full bg-[#84904B] w-[90px] h-[90px]">
                <span className="text-[#252C08] text-[40px] font-bold">R</span>
              </div>
              <h4 className="text-[#E0CF6F] font-bold text-xl mt-3">
                Roxane V.
              </h4>
              <p className="text-[#9AA098] text-lg mt-2">Solopreneur</p>
              <p className="text-[#9AA098] text-sm mt-4">
                A living connection experience, from heart to heart, in all
                simplicity, to enjoy the present moment in a calm and
                magnificent place immersed in nature and very close to Montreal,
                on the South Shore.
              </p>
            </div>

            <div
              className="xl:w-[275px] xl:h-[400px] w-[300px] h-fit mt-3 xl:mt-0"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center rounded-full bg-[#84904B] w-[90px] h-[90px]">
                <span className="text-[#252C08] text-[40px] font-bold">M</span>
              </div>
              <h4 className="text-[#E0CF6F] font-bold text-xl mt-3">
                Melanie M.
              </h4>
              <p className="text-[#9AA098] text-lg mt-2">
                Certified Professional Coach
              </p>
              <p className="text-[#9AA098] text-sm mt-4">
                Coaching with horses is simply magical. This coaching will
                remain engraved in my memory for life, because it transformed
                me, and helped me assert myself and set my limits. Nothing was
                pre-programmed; the connection with Karine, and with the horses
                happened naturally. Karine has a great quality of presence and
                to be coached in an environment like hers, there's nothing more
                wonderful, all my senses were involved.
              </p>
            </div>

            <div
              className="xl:w-[275px] xl:h-[400px] w-[300px] h-fit mt-3 xl:mt-0"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center rounded-full bg-[#84904B] w-[90px] h-[90px]">
                <span className="text-[#252C08] text-[40px] font-bold">D</span>
              </div>
              <h4 className="text-[#E0CF6F] font-bold text-xl mt-3">
                Daniele F.
              </h4>
              <p className="text-[#9AA098] text-lg mt-2">Naturopath</p>
              <p className="text-[#9AA098] text-sm mt-4">
                Extraordinary insights! It changed my life! The privileged
                experience I had with the horse taught me so much about my
                strengths and my limits. Thanks.
              </p>
            </div>

            <div
              className="xl:w-[275px] xl:h-[400px] w-[300px] h-fit mt-3 xl:mt-0"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center rounded-full bg-[#84904B] w-[90px] h-[90px]">
                <span className="text-[#252C08] text-[40px] font-bold">S</span>
              </div>
              <h4 className="text-[#E0CF6F] font-bold text-xl mt-3">
                Sylvie C.
              </h4>
              <p className="text-[#9AA098] text-sm mt-4">
                I had an unforgettable and very enriching experience. In the
                present moment, in the beautiful nature, with Karine to guide me
                and her horses to make me understand the aspect of myself I
                needed to improve, I now realize where I need to focus my energy
                to live a balanced and fulfilled life. What a great way to grow!
              </p>
            </div>
          </div>
        </div>

        <ContactMe />
      </section>
      <Footer />
    </>
  );
};

export default Home;
