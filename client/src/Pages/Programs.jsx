import AOS from "aos";
import "aos/dist/aos.css";
import smoke from "../assets/smoke.png";
import banner from "../assets/home_slider_bg_one.png";
import { useEffect } from "react";
import { ReactComponent as WebBrown } from "../assets/web-brown.svg";
import { ReactComponent as WebGreen } from "../assets/web-green.svg";
import { ReactComponent as WebYellow } from "../assets/web-yellow.svg";
import { ReactComponent as PersonBrown } from "../assets/person-brown.svg";
import { ReactComponent as PersonGreen } from "../assets/person-green.svg";
import { ReactComponent as PersonYellow } from "../assets/person-yellow.svg";
import { ReactComponent as TimeBrown } from "../assets/time-brown.svg";
import { ReactComponent as TimeGreen } from "../assets/time-green.svg";
import { ReactComponent as TimeYellow } from "../assets/time-yellow.svg";
import { ReactComponent as HorseIcon } from "../assets/horse-icon.svg";
import { ReactComponent as HiveIcon } from "../assets/hive-icon.svg";
import { ReactComponent as TreeIcon } from "../assets/tree-icon.svg";
import { ReactComponent as PeopleIcon } from "../assets/people-white.svg";
import AboutContactMe from "../Components/AboutContactMe";
import Footer from "../Components/Footer";

const Programs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <section className="">
        <div className="relative w-full max-w-[2000px] mx-auto">
          <img
            src={banner}
            alt=""
            className="object-cover w-full max-h-[1070px] h-[600px] xl:h-auto"
          />
          <div className="absolute xl:top-[38%] top-[30%] xl:left-[32%] text-center font-bold">
            <p className="xl:text-[64px] text-[40px] text-white">
              Professional Coaching &
            </p>
            <p className="xl:text-[64px] text-[40px] text-[#E0CF6F]">
              Leadership Development
            </p>
            <p className="xl:text-[64px] text-[40px] text-[#E0CF6F]">
              experiences
            </p>
          </div>
          <img src={smoke} alt="" className="absolute bottom-0 w-full" />
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24">
          <div className="xl:flex justify-between">
            <div className="md:w-[43%] flex flex-col justify-center p-4">
              <div className="xl:flex justify-start gap-4 items-center">
                <HorseIcon className="w-14 h-14" />
                <h3 className="text-[#604945] xl:text-[40px] font-bold">
                  CONNECTION
                </h3>
              </div>
              <p className="text-[#393B3F] xl:text-[24px] xl:ml-4 font-semibold my-2">
                Equine facilitated private coaching session
              </p>
              <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                Take the time to disconnect and reconnect to your true self. In
                the heart of nature, with all senses wide open, and guided by 3
                coaches devoted to your personal growth and development, this
                experience was designed to accelerate your insight to create an
                immediate impact. A memorable moment that will propel you
                forward!
              </p>
            </div>
            <div className="md:w-[50%] p-4 xl:min-h-[300px]">
              <iframe
                src={`https://www.youtube.com/embed/rokGy0huYEA`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex justify-around items-center xl:mt-10 p-2">
            <div className="text-center xl:w-[300px] flex flex-col justify-center items-center">
              <TimeBrown />
              <p className="text-[#9AA098] text-sm my-2">Duration</p>
              <p className="text-[#393B3F] font-bold">3 to 3.5 hours</p>
            </div>
            <div className="text-center xl:w-[300px] flex flex-col justify-center items-center">
              <PersonBrown />
              <p className="text-[#9AA098] text-sm my-2">
                Program designed for
              </p>
              <p className="text-[#393B3F] font-bold">Individuals</p>
            </div>
            <div className="text-center xl:w-[300px] flex flex-col justify-center items-center">
              <WebBrown />
              <p className="text-[#9AA098] text-sm my-2">Offered in</p>
              <p className="text-[#393B3F] font-bold">English and French</p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24 bg-[#604945] first__package text-white md:p-5 xl:p-8 p-4 my-4">
          <p className="text-xl font-bold my-3">This package includes:</p>
          <ul className="grid xl:grid-cols-2 gap-x-5 gap-y-3">
            <li>
              30-minute virtual call and preliminary questionnaire to clarify
              your goals and expectations
            </li>
            <li>
              Follow up 45-60 minutes virtual coaching call 7 days after the
              experience; to circle back on the experience and anchor the
              insights for a long lasting impact
            </li>
            <li>
              Personalized coaching session focused on a project, an objective
              or a personal or professional issue/challenge
            </li>
            <li>Document to deepen your personal reflection</li>
            <li>
              The coaching approach combines both NLP (neuro-linguistic
              programming) and horse-assisted coaching (which includes
              observation and interaction with 2 horses)
            </li>

            <li>Snack and drink</li>
          </ul>

          <p className="text-xl font-bold my-3">
            Additional options - à-la-carte (coming soon)
          </p>
          <ul className="grid grid-cols-2 gap-x-5">
            <li>Retreat and walk in nature, discovery trail</li>
            <li>Healthy meal</li>
          </ul>
          <p className="text-xl font-bold my-3">
            No riding experience required. Interactions with horses are done on
            the ground, and in complete safety
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24">
          <div className="xl:flex justify-between">
            <div className="md:w-[50%] p-4 xl:min-h-[300px]">
              <iframe
                src={`https://www.youtube.com/embed/rokGy0huYEA`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="w-full h-full"
              />
            </div>
            <div className="md:w-[43%] flex flex-col justify-center p-4">
              <div className="xl:flex justify-start gap-4 items-center">
                <TreeIcon className="w-14 h-14" />
                <h3 className="text-[#84904B] xl:text-[40px] font-bold">
                  EVOLUTION
                </h3>
              </div>
              <p className="text-[#393B3F] xl:text-[24px] xl:ml-4 font-semibold my-2">
                Personal growth and development program
              </p>
              <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                To initiate your personal development journey in a structured,
                effective and inspiring way, all the while benefiting from
                personalized support and guidance from a professional coach.
              </p>
            </div>
          </div>
          <div className="flex justify-around items-center xl:mt-10 p-4">
            <div className="text-center xl:w-[300px] flex flex-col justify-center items-center">
              <TimeGreen />
              <p className="text-[#9AA098] text-sm my-2">Duration</p>
              <p className="text-[#393B3F] font-bold">
                3 months, Every 2 weeks
              </p>
            </div>
            <div className="text-center xl:w-[300px] flex flex-col justify-center items-center">
              <PersonGreen />
              <p className="text-[#9AA098] text-sm my-2">
                Program designed for
              </p>
              <p className="text-[#393B3F] font-bold">
                Individuals wishing to initiate a personal development journey
              </p>
            </div>
            <div className="text-center xl:w-[300px] flex flex-col justify-center items-center">
              <WebGreen />
              <p className="text-[#9AA098] text-sm my-2">Offered in</p>
              <p className="text-[#393B3F] font-bold">English and French</p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24 xl:flex justify-between text-white second__package mt-4">
          <div className="bg-[#84904B] p-6 md:w-[46%] my-4 xl:my-0">
            <p className="text-xl font-bold my-3">PRIVATE PACKAGE</p>
            <p className="text-lg mb-2 font-[600]">This package includes:</p>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                30-minute virtual meeting and preliminary questionnaire to
                discuss your goals and expectations
              </li>
              <li>
                1 horse-assisted coaching session - refer to the Connection
                program for all details
              </li>
              <li>
                5 private coaching sessions, combining tailored educational
                content on growth and development, mentoring and NLP coaching
                (neuro-linguistic programming)
              </li>
              <li>Reference document for self reflection</li>
              <li>
                Final session to review your learnings, progress and successes
              </li>
              <li>Final feedback form</li>
              <li>Access to the Beyond Wordz Academy training platform</li>
            </ul>
          </div>
          <div className="bg-[#84904B] p-6 md:w-[46%]">
            <p className="text-xl font-bold my-3">GROUP PACKAGE</p>
            <div className="flex justify-between items-center">
              <div className="flex justify-start gap-x-2">
                <PeopleIcon className="w-6 h-6" />
                <span>Number of participants per cohort</span>
              </div>
              <p className="xl:text-lg font-bold">From 3 to 6</p>
            </div>
            <p className="text-lg mb-2 font-[600] my-3">
              This package includes:
            </p>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                30-minute virtual meeting and preliminary questionnaire to
                discuss your goals and expectations
              </li>
              <li>6 virtual workshops on personal growth and development</li>
              <li>
                2 private and virtual NLP coaching sessions (neuro-linguistic
                programming)
              </li>
              <li>Reference document for self reflection</li>
              <li>
                Final session to review your learnings, progress and successes
              </li>
              <li>Final feedback form</li>
              <li>
                Access to the Beyond Wordz Academy training and community
                platform
              </li>
            </ul>

            <p className="text-lg mb-2 font-[600] my-3">
              Additional options - à-la-carte
            </p>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>Individual virtual coaching sessions</li>
              <li>
                Horse-assisted coaching sessions (see Connection program for all
                details)
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24 mt-4">
          <div className="xl:flex justify-between ">
            <div className="md:w-[43%] flex flex-col justify-center p-4">
              <div className="xl:flex justify-start gap-4 items-center">
                <HiveIcon className="w-16 h-16" />
                <h3 className="text-[#E0CF6F] xl:text-[40px] font-bold">
                  TRANSFORMATION
                </h3>
              </div>
              <p className="text-[#393B3F] xl:text-[24px] xl:ml-4 font-semibold my-2">
                Personal growth and transformation program
              </p>
              <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                The purpose of this program is to propel your personal
                transformation through unique and diversified coaching support,
                combining NLP, solution-oriented coaching, and horse-assisted
                coaching. This program allows you to work on a goal, project or
                challenge that is important to you and that will be
                transformative for your life.
              </p>
            </div>
            <div className="md:w-[50%] p-4 xl:min-h-[300px]">
              <iframe
                src={`https://www.youtube.com/embed/rokGy0huYEA`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex justify-around items-center xl:mt-10 p-2">
            <div className="text-center xl:w-[300px] flex flex-col justify-center items-center">
              <TimeYellow />
              <p className="text-[#9AA098] text-sm my-2">Duration</p>
              <p className="text-[#393B3F] font-bold">
                6 months, every 2 weeks
              </p>
            </div>
            <div className="text-center xl:w-[300px] flex flex-col justify-center items-center">
              <PersonYellow />
              <p className="text-[#9AA098] text-sm my-2">
                Program designed for
              </p>
              <p className="text-[#393B3F] font-bold">Professionals</p>
            </div>
            <div className="text-center xl:w-[300px] flex flex-col justify-center items-center">
              <WebYellow />
              <p className="text-[#9AA098] text-sm my-2">Offered in</p>
              <p className="text-[#393B3F] font-bold">English and French</p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24 bg-[#E0CF6F] third__package md:p-5 xl:p-8 mt-4 mb-8 p-4">
          <p className="text-xl font-bold my-3">This package includes:</p>
          <ul className="grid xl:grid-cols-2 gap-x-5 gap-y-3">
            <li>
              30-minute virtual meeting and preliminary questionnaire to discuss
              your goals and expectations
            </li>
            <li>Personal reflection questionnaire between coaching sessions</li>
            <li>
              1 horse-assisted coaching session - see Connection program for
              more details
            </li>
            <li>Mid-term evaluation questionnaire</li>
            <li>
              10 private and virtual NLP coaching sessions (neuro-linguistic
              programming)
            </li>
            <li>
              Final session to review your learnings, progress and successes
            </li>
            <li>Final feedback form</li>
          </ul>
          <p className="text-xl font-bold my-3">
            Additional options - à-la-carte (coming soon)
          </p>
          <ul className="grid grid-cols-2 gap-x-5">
            <li>
              Horse-assisted coaching sessions, to replace or complement some of
              your virtual coaching sessions
            </li>
          </ul>
        </div>
        <AboutContactMe />
      </section>
      <Footer />
    </>
  );
};

export default Programs;
