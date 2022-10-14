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

const Home = () => {
  const lang = useRecoilValue(localizationState);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return lang ? (
    <>
      <section className="">
        <SliderHomePersonal />
        <div className="flex flex-col items-center max-w-[2000px] mx-auto">
          <h2
            className="xl:text-[54px] text-[40px] font-bold mt-4 xl:mt-0"
            data-aos="zoom-in"
          >
            Mes <span className="text-[#84904B]">programmes</span>
          </h2>
          <div className="flex justify-center gap-10 mt-[140px] flex-col xl:flex-row">
            <div
              className="relative bg-[#604945] w-[380px] px-6 pb-3"
              data-aos="flip-left"
            >
              <HorseIcon className="absolute -top-[100px] left-[100px]" />
              <h3 className="uppercase text-white font-bold text-[24px] mt-[90px]">
                CONNECTION
              </h3>
              <p className="text-[#CAB8B5] mt-4">
                Séance privée ou activité de consolidation d’équipe et de
                coaching assisté par les chevaux visant à développer des
                compétences de leadership personnel et professionnel, de
                communication et de collaboration. En solo ou en groupe, cette
                expérience a été conçue afin d'avoir un impact certain et
                immédiat sur les participants.
              </p>
            </div>
            <div
              className="relative bg-[#84904B] w-[380px] px-6 mt-[90px] xl:mt-0 pb-3"
              data-aos="flip-up"
            >
              <TreeIcon className="absolute -top-[100px] left-[100px]" />
              <h3 className="uppercase text-white font-bold text-[24px] mt-[90px]">
                Évolution
              </h3>
              <p className="text-[#fff] mt-4">
                Programme de 3 mois visant le développement du leadership. Afin
                d'entamer votre parcours de développement professionnel de
                manière structurée, efficace et inspirante, grâce à l’expertise,
                à l’accompagnement et au soutien d'une coach professionnelle.
                Forfait en privé et en groupe disponibles.
              </p>
            </div>
            <div
              className="relative bg-[#E0CF6F] w-[380px] px-6 mt-[70px] xl:mt-0 pb-3"
              data-aos="flip-right"
            >
              <HiveIcon className="absolute -top-[100px] left-[100px]" />
              <h3 className="uppercase font-bold text-[24px] mt-[90px]">
                TRANSFORMATION
              </h3>
              <p className="mt-4">
                Programme de 6 mois, visant une transformation personnelle par
                un accompagnement en coaching unique et diversifié, combinant la
                PNL, le coaching orienté solutions, et le coaching assisté par
                les chevaux. Ce programme vous permet de travailler sur un but,
                projet ou défi important pour vous et qui sera transformateur
                pour votre vie
              </p>
            </div>
          </div>
          <button
            className="uppercase btn-gradient-bg text-white text-sm font-bold w-[187px] mt-9 py-3"
            data-aos="fade-up"
          >
            <Link to={"/programs-businesses"}>Learn More</Link>
          </button>
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
            Comment ça <span className="text-[#84904B]">Fonctionne</span>
          </h2>
        </div>
        <WorksSlider />

        <div className="flex flex-col items-center mt-[100px]">
          <h2
            className="xl:text-[54px] text-[40px] text-center font-bold px-2"
            data-aos="zoom-in"
          >
            Mes <span className="text-[#84904B]">Causes</span> et
            <span className="text-[#84904B]"> Partenaires</span>
          </h2>
          <p className="text-[#393B3F] text-center" data-aos="zoom-in">
            Les causes que nous soutiendrons
            <span className="font-bold"> ...cultivons</span>, tous ensemble!
          </p>
          <div className="xl:flex items-center justify-center xl:gap-16 mt-10 grid grid-cols-4 gap-3 p-2">
            <img src={partnerOne} alt="" data-aos="fade-right" />
            <img src={partnerTwo} alt="" data-aos="fade-right" />
            <img
              src={partnerThree}
              alt=""
              data-aos="fade-right"
              className="col-span-2"
            />
            <img src={partnerFour} alt="" />
            <img src={partnerFive} alt="" data-aos="fade-left" />
            <img src={partnerSix} alt="" data-aos="fade-left" />
            <img src={partnerSeven} alt="" data-aos="fade-left" />
          </div>
        </div>

        <div className="flex flex-col items-center mt-[100px] bg-[#252C08] py-4 pb-8">
          <h2
            className="text-white xl:text-[54px] text-[40px] font-bold my-8"
            data-aos="zoom-in"
          >
            Témoignages
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
                Une expérience de connexion au vivant, de cœur à cœur, avec
                simplicité, pour vivre un grand calme et savourer le moment
                présent, dans un magnifique endroit en nature tout près de
                Montréal, sur la Rive-Sud.
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
                Coach professionnelle certifiée
              </p>
              <p className="text-[#9AA098] text-sm mt-4">
                Le coaching avec les chevaux est tout simplement magique. Ce
                coaching restera gravé dans ma mémoire à vie, car il m'a
                transformé, il m'a aidé à m'affirmer et à mettre mes limites.
                Rien n'était programmé, la connexion avec Karine et avec les
                chevaux s'est faite naturellement. Karine a une belle qualité de
                présence et de se faire coacher dans un environnement comme le
                sien, y'a rien de plus merveilleux, tous mes sens étaient mis à
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
              <p className="text-[#9AA098] text-lg mt-2">Naturopath</p>
              <p className="text-[#9AA098] text-sm mt-4">
                Quelle prise de conscience guidée extraordinaire! Ça changé ma
                vie! L’expérience privilégiée avec le cheval m’a tellement
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
                J’ai vécu une expérience inoubliable et très enrichissante. Dans
                le moment présent, dans la belle nature, avec Karine pour me
                guider et ses chevaux pour me faire comprendre quel aspect de
                moi je devais améliorer, j’ai pris conscience d’où mettre mon
                énergie afin de retrouver ce précieux équilibre si nécessaire
                pour se réaliser dans la vie. Quelle belle façon de grandir!
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
            className="xl:text-[54px] text-[40px] font-bold mt-4 xl:mt-0"
            data-aos="zoom-in"
          >
            My <span className="text-[#84904B]">Programs</span>
          </h2>
          <div className="flex justify-center gap-10 mt-[140px] flex-col xl:flex-row">
            <div
              className="relative bg-[#604945] w-[380px] px-6 pb-3"
              data-aos="flip-left"
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
              className="relative bg-[#84904B] w-[380px] px-6 mt-[90px] xl:mt-0 pb-3"
              data-aos="flip-up"
            >
              <TreeIcon className="absolute -top-[100px] left-[100px]" />
              <h3 className="uppercase text-white font-bold text-[24px] mt-[90px]">
                EVOLUTION
              </h3>
              <p className="text-[#fff] mt-4">
                3-month personal growth and leadership development program. To
                initiate your professional development journey in a structured,
                effective and inspiring way, benefiting from the expertise,
                guidance and support of a professional coach. Private and group
                packages available.
              </p>
            </div>
            <div
              className="relative bg-[#E0CF6F] w-[380px] px-6 mt-[70px] xl:mt-0 pb-3"
              data-aos="flip-right"
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
          <button
            className="uppercase btn-gradient-bg text-white text-sm font-bold w-[187px] mt-9 py-3"
            data-aos="fade-up"
          >
            <Link to={"/programs-businesses"}>Learn More</Link>
          </button>
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

        <div className="flex flex-col items-center mt-[100px]">
          <h2
            className="xl:text-[54px] text-[40px] text-center font-bold px-2"
            data-aos="zoom-in"
          >
            My <span className="text-[#84904B]">Causes</span> &{" "}
            <span className="text-[#84904B]">Partners</span>
          </h2>
          <p className="text-[#393B3F]" data-aos="zoom-in">
            Causes we will support …{" "}
            <span className="font-bold">let’s grow</span>, all together!
          </p>
          <div className="xl:flex items-center justify-center xl:gap-16 mt-10 grid grid-cols-4 gap-3 p-2">
            <img src={partnerOne} alt="" data-aos="fade-right" />
            <img src={partnerTwo} alt="" data-aos="fade-right" />
            <img
              src={partnerThree}
              alt=""
              data-aos="fade-right"
              className="col-span-2"
            />
            <img src={partnerFour} alt="" />
            <img src={partnerFive} alt="" data-aos="fade-left" />
            <img src={partnerSix} alt="" data-aos="fade-left" />
            <img src={partnerSeven} alt="" data-aos="fade-left" />
          </div>
        </div>

        <div className="flex flex-col items-center mt-[100px] bg-[#252C08] py-4 pb-8">
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
