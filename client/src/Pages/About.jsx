import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about.css";
import aboutBanner from "../assets/about_banner.png";
import smoke from "../assets/smoke.png";
import { ReactComponent as HorseArrow } from "../assets/why_horses_arrow.svg";
import { ReactComponent as TressArrow } from "../assets/why_trees_arrow.svg";
import { ReactComponent as BeesArrow } from "../assets/why_bees_arrow.svg";
import horseImg from "../assets/why_beyond_bg.png";
import { ReactComponent as PersonIcon } from "../assets/wb-person-icon.svg";
import { ReactComponent as PersonHeartIcon } from "../assets/wb-person-hearticon.svg";
import { ReactComponent as PersonVipIcon } from "../assets/wb-vip-icon.svg";
import { ReactComponent as CareIcon } from "../assets/wb-care-icon.svg";
import { ReactComponent as HorseIcon } from "../assets/wb-horse-icon.svg";
import { ReactComponent as TreesIcon } from "../assets/wb-trees-icon.svg";
import aboutKarineBanner from "../assets/about_karine_banner.png";
import whyMeBanner from "../assets/why_me_banner.png";
import AboutContactMe from "../Components/AboutContactMe";
import Footer from "../Components/Footer";

const tabContents = [
  {
    index: 1,
    content:
      "My values ​​are health, evolution, nature, respect and harmony. They are also embedded in everything I do, and therefore in all the programs I offer. Respect for self, for others, for the environment, continuous growth and development, living in harmony with your values, and caring for your mental, physical, spiritual and emotional health are at the heart of my approach.",
  },
  {
    index: 2,
    content:
      "My values ​​are health, evolution, nature, respect and harmony. They are also embedded in everything I do, and therefore in all the programs I offer. Respect for self, for others, for the environment, continuous growth and development, living in harmony with your values, and caring for your mental, physical, spiritual and emotional health are at the heart of my approach.",
  },
  {
    index: 3,
    content:
      "My values ​​are health, evolution, nature, respect and harmony. They are also embedded in everything I do, and therefore in all the programs I offer. Respect for self, for others, for the environment, continuous growth and development, living in harmony with your values, and caring for your mental, physical, spiritual and emotional health are at the heart of my approach.",
  },
];

const About = () => {
  // Local States
  const [wmTabIndex, setWmTabIndex] = useState(2);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <section className="xl:mt-[130px] mt-[110px]">
        <div className="relative w-full max-w-[2000px] mx-auto">
          <img
            src={aboutBanner}
            alt=""
            className="object-cover w-full h-[500px] xl:h-auto"
          />
          <p
            className="absolute xl:top-[35%] xl:left-[45%] top-[39%] left-[35%] xl:text-[64px] text-white font-bold text-[44px]"
            data-aos="fade-up"
          >
            About
          </p>
          <img src={smoke} alt="" className="absolute bottom-0 w-full" />
        </div>

        <div className="why-horses-bg max-w-[1400px] mx-auto w-full xl:py-10 xl:mt-4 p-3 py-5">
          <HorseArrow className="" data-aos="fade-right" />
          <h2 className="font-bold xl:text-[54px] text-[40px] xl:my-5 my-2">
            Why <span className="text-[#604945]">Horses</span>
          </h2>
          <p
            className="text-[#393B3F] xl:text-[24px] xl:leading-10 text-md"
            data-aos="fade-left"
          >
            Preyed on in the wild, horses are highly attuned to their body,
            their senses and extremely attentive to their environment, for their
            life depends on their ability to sense danger and react to it. They
            are also masters at staying grounded and tuning into the intention
            of others,and can quickly detect any variation of energetic
            frequencies. This heightened sensory awareness allows them to
            effectively detect human conscious and unconscious emotional states
            as well as detect any incongruence with their body language. They
            therefore have much to teach us about self-awareness and emotional
            intelligence. They are outstanding partners for personal and
            professional development and extremely effective at mirroring our
            own leadership style and communication effectiveness. They are
            unparalleled teachers and coaches.
          </p>
        </div>

        <div className="why-trees-bg max-w-[1400px] mx-auto w-full xl:py-10 xl:mt-4 p-3 py-5">
          <div className="flex justify-between xl:px-4">
            <h2 className="font-bold xl:text-[54px] text-white  text-[40px]">
              Why <span className="text-[#84904B]">Trees</span>
            </h2>
            <TressArrow className="ml-auto" />
          </div>
          <p className="text-white xl:text-[24px] xl:leading-10 xl:mt-[350px] mt-[100px] xl:p-14">
            Trees represent resilience, stability, connection, flexibility,
            evolution, and benevolence (to name a few). They communicate and
            collaborate with their environment in a remarkable way, and take
            great care of their peers and children. Yup, trees have families,
            just like we do! Not only are they majestic, they are the lungs of
            the earth and critical to the survival of all living beings. Their
            protection is therefore essential and we have much to learn and grow
            from. If we just allow ourselves to be inspired by their wisdom and
            strategies, we can learn to evolve and grow in harmony with
            everything that surrounds us.
          </p>
        </div>

        <div className="why-bees-bg max-w-[1400px] mx-auto w-full xl:py-10 xl:mt-4 p-3 py-5">
          <BeesArrow className="" />
          <h2 className="font-bold xl:text-[54px] text-[40px] xl:my-5 my-2">
            Why <span className="text-[#E0CF6F]">Bees</span>
          </h2>
          <p className="text-[#05040D] xl:text-[24px] xl:leading-10 text-md">
            Also essential to the survival of our planet (with over 200 billion
            of crops yearly depending on pollination), bees inspire me with
            their phenomenal ability to adapt and transform. Throughout their
            life they will learn to play different roles to ensure the
            sustainability and wellbeing of the colony. They are fantastic role
            models when it comes to collaboration, communication, teamwork,
            productivity and effectiveness. They live for a short time, but with
            a very clear purpose and contribution to the generations ahead.
            Needless to say, they too are fantastic teachers for teams and
            leaders.
          </p>
          <p className="text-[#05040D] xl:text-[24px] xl:leading-10 text-md mt-2">
            By protecting trees, bees and offering deep connections between
            humans and horses, we contribute to building a better tomorrow for
            all generations to come.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto w-full xl:py-10 xl:mt-4">
          <div className="bg-[#F2F4F5] flex xl:justify-around xl:p-[60px] xl:flex-row flex-col p-4">
            <div>
              <img src={horseImg} alt="" className="w-full" />
            </div>
            <div className="xl:w-[600px] mt-4 xl:-mt-3">
              <h3 className="font-bold xl:text-[54px] xl:mb-3 text-[40px]">
                Why <br />
                <span className="text-[#84904B]">Beyond Wordz</span>
              </h3>
              <div className="xl:flex text-[#393B3F] xl:gap-10 mt-4 grid grid-cols-2 gap-x-4">
                <div className="flex flex-col gap-y-6">
                  <div className="xl:w-[220px]">
                    <PersonIcon />
                    <p className="mt-2">
                      Because my approach is unique, inspiring, tailored to your
                      needs and designed for maximum impact.
                    </p>
                  </div>
                  <div className="xl:w-[220px]">
                    <PersonHeartIcon />
                    <p className="mt-2">
                      Because of the effectiveness and impact of experiential,
                      multi-sensory and immersive learning experiences.
                    </p>
                  </div>
                  <div className="xl:w-[220px]">
                    <CareIcon />
                    <p className="mt-2">
                      Because your growth will help other causes grow too. You
                      sign up for a program, I give back!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-6">
                  <div className="xl:w-[220px]">
                    <HorseIcon />
                    <p className="mt-2">
                      Because partnering with horses will accelerate insights
                      and your personal and professional growth.
                    </p>
                  </div>
                  <div className="xl:w-[220px]">
                    <TreesIcon />
                    <p className="mt-2">
                      Because my environment allows you to disconnect in order
                      to reconnect to your true and authentic self.
                    </p>
                  </div>
                  <div className="xl:w-[220px]">
                    <PersonVipIcon />
                    <p className="mt-2">
                      Simply because you deserve it! Take time for yourself.
                      Gift yourself a coaching experience, beyond the words!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full xl:py-10 xl:mt-4">
          <div className="bg-[#F2F4F5]">
            <div className="xl:flex justify-around p-4">
              <div className="xl:w-[40%] xl:flex flex-col justify-center w-full">
                <h3 className="font-bold xl:text-[54px] text-[40px] mb-3">
                  About <span className="text-[#84904B]">Karine</span>
                </h3>
                <p className="text-[#393B3F]">
                  Multiple roles but a shared passion that connects them all;
                  that of unleashing human potential and inspiring tomorrow’s
                  leaders, one heart at a time!
                </p>
                <div className="grid xl:grid-cols-3 gap-2 mt-5 grid-cols-2">
                  <div className="bg-[#252C08] text-[#9AA098] xl:w-full p-8 text-center flex items-center justify-center">
                    Certified professional NLP coach
                  </div>
                  <div className="bg-[#252C08] text-[#9AA098] xl:w-full p-8 text-center flex items-center justify-center">
                    Learning and leadership development specialist
                  </div>
                  <div className="bg-[#252C08] text-[#9AA098] xl:w-full p-8 text-center flex items-center justify-center">
                    Synergologist (body language expert)
                  </div>
                  <div className="bg-[#252C08] text-[#9AA098] xl:w-full p-8 text-center flex items-center justify-center">
                    Equine assisted facilitator
                  </div>
                  <div className="bg-[#252C08] text-[#9AA098] xl:w-full p-8 text-center flex items-center justify-center">
                    Seasoned facilitator and instructional designer
                  </div>
                  <div className="bg-[#252C08] text-[#9AA098] xl:w-full p-8 text-center flex items-center justify-center">
                    Mentor and life-long learner
                  </div>
                </div>
              </div>
              <img src={aboutKarineBanner} alt="" />
            </div>

            <div className="xl:flex justify-center w-full p-4 gap-8">
              <img src={whyMeBanner} alt="" />
              <div className="flex justify-center items-center xl:w-[60%]">
                <div className="">
                  <h3 className="font-bold xl:text-[54px] text-[40px] mt-3">
                    Why <span className="text-[#84904B]">Me</span>
                  </h3>
                  <div className="ml-2 ">
                    <div className="flex gap-x-3 mb-3 w-full">
                      <button
                        className={`${
                          wmTabIndex === 0
                            ? "py-2 font-bold border-b-4 border-[#84904B] text-[#252C08]"
                            : "py-2"
                        }`}
                        onClick={() => setWmTabIndex(0)}
                      >
                        My Mission
                      </button>
                      <button
                        className={`${
                          wmTabIndex === 1
                            ? "py-2 font-bold border-b-4 border-[#84904B] text-[#252C08]"
                            : "py-2"
                        }`}
                        onClick={() => setWmTabIndex(1)}
                      >
                        My Story
                      </button>
                      <button
                        className={`${
                          wmTabIndex === 2
                            ? "py-2 font-bold border-b-4 border-[#84904B] text-[#252C08]"
                            : "py-2"
                        }`}
                        onClick={() => setWmTabIndex(2)}
                      >
                        My Values
                      </button>
                    </div>
                    <p>{tabContents[wmTabIndex].content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AboutContactMe />
      </section>
      <Footer />
    </>
  );
};

export default About;
