import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about.css";
import smoke from "../assets/smoke.png";
import { useEffect } from "react";
import { ReactComponent as WebBrown } from "../assets/web-brown.svg";
import { ReactComponent as WebGreen } from "../assets/web-green.svg";
import { ReactComponent as WebYellow } from "../assets/web-yellow.svg";
import { ReactComponent as PersonBrown } from "../assets/person-brown.svg";
import { ReactComponent as PersonGreen } from "../assets/person-green.svg";
import { ReactComponent as PersonYellow } from "../assets/person-yellow.svg";
import { ReactComponent as Watch } from "../assets/watch.svg";
import { ReactComponent as TimeGreen } from "../assets/time-green.svg";
import { ReactComponent as TimeYellow } from "../assets/time-yellow.svg";
import { ReactComponent as HorseIcon } from "../assets/horse-icon.svg";
import { ReactComponent as HiveIcon } from "../assets/hive-icon.svg";
import { ReactComponent as TreeIcon } from "../assets/tree-icon.svg";
import { ReactComponent as PeopleIcon } from "../assets/people-white.svg";
import AboutContactMe from "../Components/AboutContactMe";
import Footer from "../Components/Footer";
import { useRecoilValue } from "recoil";
import { localizationState } from "../atoms/localizationAtom";

const ProgramsTeam = () => {
  const lang = useRecoilValue(localizationState);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="">
        <div className=" w-full relative mx-auto bg__programs_business 2xl:h-[1000px] xl:h-[800px] h-[600px] h_control_about">
          <div className="xl:max-w-[2000px] relative w-full h-full mx-auto">
            <div
              className="absolute 2xl:top-[38%] xl:top-[38%] top-[30%] md:left-[15%] 2xl:left-[26%] xl:left-[17%] text-center font-bold"
              data-aos="zoom-in"
            >
              {lang && (
                <>
                  <p className="xl:text-[64px] text-[40px] text-white capitalize">
                    Coaching professionel et
                  </p>
                  <p className="xl:text-[64px] text-[40px] text-[#E0CF6F] capitalize">
                    d??veloppement du leadership
                  </p>
                </>
              )}
            </div>
            {!lang && (
              <div
                className="absolute 2xl:top-[38%] xl:top-[40%] md:left-[20%] top-[30%] 2xl:left-[30%] xl:left-[23%] text-center font-bold"
                data-aos="zoom-in"
              >
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
            )}
          </div>
          <img
            src={smoke}
            alt=""
            className="absolute xl:-bottom-2 -bottom-1 w-full"
          />
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24">
          <div className="xl:flex justify-between">
            <div
              className="md:w-[43%] flex flex-col justify-center p-4"
              data-aos="fade-right"
            >
              <div className="xl:flex justify-start gap-4 items-center">
                <HorseIcon className="w-14 h-14" />
                {!lang && (
                  <h3 className="text-[#604945] xl:text-[40px] font-bold">
                    CONNECTION
                  </h3>
                )}
                {lang && (
                  <h3 className="text-[#604945] xl:text-[40px] font-bold">
                    CONNECTION
                  </h3>
                )}
              </div>
              {!lang && (
                <p className="text-[#393B3F] xl:text-[24px] xl:ml-4 font-semibold my-2">
                  Horse-Assisted Workshops
                </p>
              )}
              {lang && (
                <p className="text-[#393B3F] xl:text-[24px] xl:ml-4 font-semibold my-2">
                  Ateliers assist??s par le cheval
                </p>
              )}

              {!lang && (
                <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                  Private session or team building workshops combined with
                  horse-assisted activities aimed at developing your leadership,
                  communication and collaboration skills. Solo or in a group
                  setting, this experience has been designed to accelerate
                  insights and have a definite and immediate impact on its
                  participants. A memorable moment that will propel you forward!
                </p>
              )}
              {lang && (
                <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                  Ce programme est offert en priv?? ou en groupe, en
                  collaboration avec Equss Leadership. Le programme de groupe a
                  ??t?? con??u ?? des fins de consolidation d?????quipe et
                  d??veloppement du leadership. Il comprend des ateliers et du
                  coaching de groupe sur la communication, la collaboration, la
                  confiance et le leadership, et est jumel?? ?? des jeux et d??fis
                  avec les chevaux. Pour un apprentissage exp??rientiel,
                  inspirant, cr??atif, et efficace
                </p>
              )}
            </div>
            <div
              className="md:w-[50%] p-4 xl:min-h-[410px]"
              data-aos="fade-left"
            >
              <iframe
                src={`${
                  !lang
                    ? "https://www.youtube.com/embed/BiWWpDP7qVY"
                    : "https://www.youtube.com/embed/gkxZXV-VT40"
                }`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex xl:justify-center items-center xl:mt-10 p-2 xl:gap-24 justify-around">
            <div
              className="text-center xl:w-[300px] flex flex-col justify-center items-center"
              data-aos="zoom-in"
            >
              <PersonBrown />
              <p className="text-[#9AA098] text-sm my-2">
                {!lang ? "Program designed for" : "Ce programme s???adresse ??"}
              </p>
              <p className="text-[#393B3F] font-bold">
                {!lang ? "Managers or Teams" : "??quipes & Gestionnaires"}
              </p>
            </div>
            <div
              className="text-center xl:w-[300px] flex flex-col justify-center items-center"
              data-aos="zoom-in"
            >
              <WebBrown />
              <p className="text-[#9AA098] text-sm my-2">
                {!lang ? "Offered in" : "Offert en"}
              </p>
              <p className="text-[#393B3F] font-bold">
                {!lang ? "English and French" : "Fran??ais et Anglais"}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24 xl:flex justify-between text-white second__package mt-4">
          <div className="bg-[#604945] p-6 lg:w-[46%] my-4 xl:my-0">
            <p className="text-xl font-bold my-3">
              {!lang ? "PRIVATE PACKAGE" : "FORFAIT INDIVIDUEL"}
            </p>

            <div
              className="flex justify-between items-center"
              data-aos="fade-right"
            >
              <div className="flex justify-start gap-x-2">
                <Watch className="w-6 h-6" />
                <span>{!lang ? "Duration" : "Dur??e"}</span>
              </div>
              <p className="xl:text-lg font-bold">
                {!lang ? "3 to 3.5 hours" : "3 ?? 3.5 heures"}
              </p>
            </div>

            <p className="text-lg mb-2 font-[600] xl:mt-4 mt-3">
              {!lang ? "This package includes:" : "Ce forfait inclut:"}
            </p>
            {!lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>
                  30-minute virtual call and preliminary questionnaire to
                  clarify your goals and expectations
                </li>
                <li>
                  Personalized coaching session focused on a project, an
                  objective or a personal or professional issue/challenge
                </li>
                <li>
                  The coaching approach combines both NLP (neuro-linguistic
                  programming) and horse-assisted coaching (which includes
                  observation and interaction with 2 horses)
                </li>
                <li>
                  Follow up 45-60 minutes virtual coaching call 7 days after the
                  experience; to circle back on the experience and anchor the
                  insights for a long lasting impact
                </li>
                <li>Document to deepen your personal reflection</li>
                <li>Snack and drink</li>
              </ul>
            )}
            {lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>
                  Rencontre virtuelle de 30 minutes et questionnaire
                  pr??liminaire afin de bien cibler les besoins et attentes
                </li>
                <li>
                  S??ance de coaching personnalis?? ax??e sur un projet, un
                  objectif ou un enjeu/d??fi professionnel
                </li>
                <li>
                  L???approche de coaching combine ?? la fois la PNL (programmation
                  neuro-linguistique) et le coaching assist?? par les chevaux (ce
                  qui inclut observation et interaction avec 2 chevaux)
                </li>
                <li>
                  Coaching virtuel de 45-60 minutes 7 jours apr??s la s??ance;
                  retour sur l???exp??rience et ancrage des prises de conscience
                  afin de faire perdurer leur impact
                </li>
                <li>Document pour approfondir votre r??flexion personnelle</li>
                <li>Collation et breuvage</li>
              </ul>
            )}

            <p className="text-lg mb-2 font-[600] my-3">
              {!lang
                ? "Additional options - ??-la-carte"
                : "Peuvent ??tre ajout??es  - ??-la-carte"}
            </p>
            {!lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>Retreat and walk in nature, discovery trail</li>
                <li>Healthy meal</li>
              </ul>
            )}
            {lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>Retraite et marche en nature, sentier d??couverte</li>
                <li>Repas sant??</li>
              </ul>
            )}
            {!lang && (
              <p className="font-bold my-5" data-aos="fade-up">
                No riding experience required. Interactions with horses are done
                on the ground, and in complete safety
              </p>
            )}
            {lang && (
              <p className=" font-bold my-5" data-aos="fade-up">
                Aucune exp??rience ??questre requise. Les int??ractions avec le
                cheval se font au sol, et en toute s??curit??.
              </p>
            )}
          </div>

          <div className="bg-[#604945] p-6 lg:w-[46%]">
            <p className="text-xl font-bold my-3">
              {!lang ? "GROUP PACKAGE" : "FORFAIT DE GROUPE"}
            </p>

            <div
              className="flex justify-between items-center"
              data-aos="fade-right"
            >
              <div className="flex justify-start gap-x-2">
                <Watch className="w-6 h-6" />
                <span>{!lang ? "Duration" : "Dur??e"}</span>
              </div>
              <p className="xl:text-lg font-bold">
                {!lang ? "1-2 days" : "1 ?? 2 jours"}
              </p>
            </div>

            <div
              className="flex justify-between items-center mt-3"
              data-aos="fade-right"
            >
              <div className="flex justify-start gap-x-2">
                <PeopleIcon className="w-6 h-6" />
                <span>
                  {!lang
                    ? "Number of participants per cohort"
                    : "Nombre de participants par cohorte"}
                </span>
              </div>
              <p className="xl:text-lg font-bold">
                {!lang ? "From 8 to 20" : "8 ?? 20"}
              </p>
            </div>
            <p className="text-lg mb-2 font-[600] my-3">
              {!lang ? "This package includes:" : "Ce forfait inclut:"}
            </p>
            {!lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>
                  Initial virtual meeting to clarify goals and expectations
                </li>
                <li>
                  Daily schedule and program tailored to your needs. Educational
                  workshops and creative moment, combined with equine assisted
                  challenges
                </li>
                <li>Group debrief and coaching</li>
                <li>Follow-up call one week after the event</li>
                <li>
                  Snacks, beverages and pastries. Catering service available
                </li>
                <li>Participant's notebook</li>
              </ul>
            )}
            {lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>
                  Rencontres virtuelles afin de bien cibler les besoins et
                  attentes
                </li>
                <li>
                  Journ??e con??ue sur mesure selon les besoins du groupe.
                  Ateliers de formation et moments cr??atifs, entrem??l??s de d??fis
                  avec les chevaux
                </li>
                <li>Retour sur exp??rience et coaching de groupe</li>
                <li>Appel de suivi une semaine apr??s l'??v??nement</li>
                <li>
                  Collations, breuvage et viennoiseries. Service de traiteur
                  disponible
                </li>
                <li>Cahier du participant</li>
              </ul>
            )}

            {!lang && (
              <p className=" font-bold my-5" data-aos="fade-up">
                No riding experience required. Interactions with horses are done
                on the ground, and in complete safety
              </p>
            )}
            {lang && (
              <p className="font-bold my-5" data-aos="fade-up">
                Aucune exp??rience ??questre requise. Les int??ractions avec le
                cheval se font au sol, et en toute s??curit??.
              </p>
            )}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24">
          <div className="xl:flex justify-between">
            <div
              className="md:w-[50%] p-4 xl:min-h-[410px]"
              data-aos="fade-right"
            >
              <iframe
                src={`${
                  !lang
                    ? "https://www.youtube.com/embed/VWYpEwl9wWU"
                    : "https://www.youtube.com/embed/MvZyrEw9rNI"
                }`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="w-full h-full"
              />
            </div>
            {!lang && (
              <div
                className="md:w-[43%] flex flex-col justify-center p-4"
                data-aos="fade-left"
              >
                <div className="xl:flex justify-start gap-4 items-center">
                  <TreeIcon className="w-14 h-14" />
                  <h3 className="text-[#84904B] xl:text-[40px] font-bold">
                    EVOLUTION
                  </h3>
                </div>
                <p className="text-[#393B3F] xl:text-[24px] xl:ml-4 font-semibold my-2">
                  Leadership development program
                </p>
                <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                  Training, coaching and mentoring program for managers aimed at
                  developing leadership skills in people/team management and
                  authentic leadership. To initiate your professional
                  development journey in a structured, effective and inspiring
                  way, all the while benefiting from personalized support and
                  guidance from a professional coach, and the synergy of the
                  group and collective intelligence should you opt for the group
                  package.
                </p>
              </div>
            )}
            {lang && (
              <div
                className="md:w-[43%] flex flex-col justify-center p-4"
                data-aos="fade-left"
              >
                <div className="xl:flex justify-start gap-4 items-center">
                  <TreeIcon className="w-14 h-14" />
                  <h3 className="text-[#84904B] xl:text-[40px] font-bold">
                    ??VOLUTION
                  </h3>
                </div>
                <p className="text-[#393B3F] xl:text-[24px] xl:ml-4 font-semibold my-2">
                  Programme de d??veloppement du leadership
                </p>
                <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                  Programme de formation, de coaching et de mentorat pour
                  gestionnaires visant le d??veloppement de comp??tences en
                  gestion d?????quipe et en leadership authentique.Si vous d??sirez
                  entamer une d??marche de d??veloppement professionnel de fa??on
                  cibl??e, efficace et inspirante, avec un accompagnement et
                  support personnalis?? d???une coach professionnelle.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-around items-center xl:mt-10 p-4">
            <div
              className="text-center xl:w-[300px] flex flex-col justify-center items-center"
              data-aos="zoom-in"
            >
              <TimeGreen />
              <p className="text-[#9AA098] text-sm my-2">
                {!lang ? "Duration" : "Dur??e"}
              </p>
              <p className="text-[#393B3F] font-bold">
                {!lang ? "3 months, Every 2 weeks" : "3 mois, aux 2 semaines"}
              </p>
            </div>

            <div
              className="text-center xl:w-[300px] flex flex-col justify-center items-center"
              data-aos="zoom-in"
            >
              <PersonGreen />
              <p className="text-[#9AA098] text-sm my-2">
                {!lang ? "Program designed for" : "Ce programme s???adresse ??"}
              </p>
              <p className="text-[#393B3F] font-bold">
                {!lang
                  ? "Managers, Future Managers"
                  : "Gestionnaires et futurs gestionnaires"}
              </p>
            </div>
            <div
              className="text-center xl:w-[300px] flex flex-col justify-center items-center"
              data-aos="zoom-in"
            >
              <WebGreen />
              <p className="text-[#9AA098] text-sm my-2">
                {" "}
                {!lang ? "Offered in" : "Offert en"}
              </p>
              <p className="text-[#393B3F] font-bold">
                {" "}
                {!lang ? "English and French" : "Fran??ais et Anglais"}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24 xl:flex justify-between text-white second__package mt-4">
          <div className="bg-[#84904B] p-6 lg:w-[46%] my-4 xl:my-0">
            <p className="text-xl font-bold my-3">
              {!lang ? "PRIVATE PACKAGE" : "FORFAIT INDIVIDUEL"}
            </p>
            <p className="text-lg mb-2 font-[600]">
              {!lang ? "This package includes:" : "Ce forfait inclut:"}
            </p>
            {!lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>
                  30-minute virtual meeting and preliminary questionnaire to
                  discuss your goals and expectations
                </li>
                <li>
                  6 private coaching sessions, combining tailored educational
                  content on leadership development, mentoring and NLP coaching
                  (neuro-linguistic programming)
                </li>
                <li>Reference document for self reflection</li>
                <li>
                  Final session to review your learnings, progress and successes
                </li>
                <li>Final feedback form</li>
                <li>Access to the Beyond Wordz Academy training platform</li>
              </ul>
            )}
            {lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>
                  Rencontre virtuelle de 30 minutes et questionnaire
                  pr??liminaire afin de bien cibler les besoins et attentes
                </li>

                <li>
                  6 s??ance personnalis??es, combinant contenu ??ducatif, mentorat
                  et coaching en PNL (programmation neuro-linguistique)
                </li>
                <li>Document de r??f??rence pour r??flexion personnelle</li>
                <li>1 session de bouclage et questionnaire final</li>
                <li>Formulaire d???appr??ciation finale</li>
                <li>
                  Acc??s ?? la plateforme de formation Acad??mie Beyond Wordz
                </li>
              </ul>
            )}
            <p className="text-lg mb-2 font-[600] my-3">
              {!lang
                ? "Additional options - ??-la-carte"
                : "Peuvent ??tre ajout??es  - ??-la-carte"}
            </p>
            {!lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>
                  Horse-assisted coaching sessions, to replace or complement
                  some of your virtual coaching sessions
                </li>
              </ul>
            )}
            {lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>S??ance de coaching individuel (virtuel)</li>
              </ul>
            )}
          </div>

          <div className="bg-[#84904B] p-6 lg:w-[46%]">
            <p className="text-xl font-bold my-3">
              {!lang ? "GROUP PACKAGE" : "FORFAIT DE GROUPE"}
            </p>
            <div
              className="flex justify-between items-center"
              data-aos="fade-right"
            >
              <div className="flex justify-start gap-x-2">
                <PeopleIcon className="w-6 h-6" />
                <span>
                  {!lang
                    ? "Number of participants per cohort"
                    : "Nombre de participants par cohorte"}
                </span>
              </div>
              <p className="xl:text-lg font-bold">
                {!lang ? "From 3 to 6" : "3 ?? 6"}
              </p>
            </div>
            <p className="text-lg mb-2 font-[600] my-3">
              {!lang ? "This package includes:" : "Ce forfait inclut:"}
            </p>
            {!lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
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
            )}
            {lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>
                  Rencontre virtuelle de 30 minutes et questionnaire
                  pr??liminaire afin de bien cibler les besoins et attentes
                </li>
                <li>
                  6 ateliers de groupe virtuels portant sur le d??veloppement du
                  leadership
                </li>
                <li>
                  2 s??ances de coaching individuel en PNL (programmation
                  neuro-linguistique), en virtuel
                </li>
                <li>Document de r??f??rence et de r??flexion personnelle</li>
                <li>
                  1 s??ance de bouclage individuelle afin de revenir sur les
                  acquis, le chemin parcouru et les succ??s obtenus
                </li>
                <li>Formulaire d???appr??ciation finale</li>
                <li>
                  Acc??s ?? la plateforme de formation Acad??mie Beyond Wordz et de
                  discussion priv??e
                </li>
              </ul>
            )}

            <p className="text-lg mb-2 font-[600] my-3">
              {!lang
                ? "Additional options - ??-la-carte"
                : "Peuvent ??tre ajout??es  - ??-la-carte"}
            </p>
            {!lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>Individual virtual coaching sessions</li>
                <li>
                  Horse-assisted coaching sessions (see Connection program for
                  all details)
                </li>
              </ul>
            )}
            {lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>S??ance de coaching individuel (virtuel)</li>
                <li>
                  S??ance de coaching assist?? par les chevaux (voir programme
                  Connection pour de plus amples d??tails)
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24 mt-4">
          <div className="xl:flex justify-between ">
            <div
              className="md:w-[43%] flex flex-col justify-center p-4"
              data-aos="fade-right"
            >
              <div className="xl:flex justify-start gap-4 items-center">
                <HiveIcon className="w-16 h-16" />
                <h3 className="text-[#E0CF6F] xl:text-[40px] font-bold">
                  {!lang ? "TRANSFORMATION" : "TRANSFORMATION"}
                </h3>
              </div>
              <p className="text-[#393B3F] xl:text-[24px] xl:ml-4 font-semibold my-2">
                {!lang
                  ? "Personal growth and transformation program"
                  : "Programme de d??veloppement et transformation personnelle"}
              </p>
              {!lang && (
                <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                  The purpose of this program is to propel your personal
                  transformation through unique and diversified coaching
                  support, combining NLP, solution-oriented coaching, and
                  horse-assisted coaching. This program allows you to work on a
                  goal, project or challenge that is important to you and that
                  will be transformative for your life.
                </p>
              )}
              {lang && (
                <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                  Ce programme a pour but de vous faire vivre une transformation
                  personnelle par un accompagnement en coaching unique et
                  diversifi??, combinant la PNL, le coaching orient?? solutions,
                  et le coaching assist?? par les chevaux. Ce programme vous
                  permet de travailler sur un but, projet ou d??fi important pour
                  vous et qui sera transformateur pour votre vie.
                </p>
              )}
            </div>
            <div
              className="md:w-[50%] p-4 xl:min-h-[410px]"
              data-aos="fade-left"
            >
              <iframe
                src={`${
                  !lang
                    ? "https://www.youtube.com/embed/DjPh4NA2TGU"
                    : "https://www.youtube.com/embed/kN-IQmEAxMM"
                }`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex justify-around items-center xl:mt-10 p-2">
            <div
              className="text-center xl:w-[300px] flex flex-col justify-center items-center"
              data-aos="zoom-in"
            >
              <TimeYellow />
              <p className="text-[#9AA098] text-sm my-2">
                {!lang ? "Duration" : "Dur??e"}
              </p>
              <p className="text-[#393B3F] font-bold">
                {!lang ? "6 months, every 2 weeks" : "6 mois, aux 2 semaines"}
              </p>
            </div>
            <div
              className="text-center xl:w-[300px] flex flex-col justify-center items-center"
              data-aos="zoom-in"
            >
              <PersonYellow />
              <p className="text-[#9AA098] text-sm my-2">
                {!lang ? "Program designed for" : "Ce programme s???adresse ??"}
              </p>
              <p className="text-[#393B3F] font-bold">
                {!lang
                  ? "Managers, Future Managers"
                  : "Gestionnaires et futurs gestionnaires"}
              </p>
            </div>
            <div
              className="text-center xl:w-[300px] flex flex-col justify-center items-center"
              data-aos="zoom-in"
            >
              <WebYellow />
              <p className="text-[#9AA098] text-sm my-2">
                {!lang ? "Offered in" : "Offert en"}
              </p>
              <p className="text-[#393B3F] font-bold">
                {!lang ? "English and French" : "Fran??ais et Anglais"}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24 bg-[#E0CF6F] third__package md:p-5 xl:p-8 mt-4 mb-8 p-4">
          <p className="text-xl font-bold my-3">
            {!lang ? "This package includes:" : "Ce forfait inclut:"}
          </p>
          {!lang && (
            <ul
              className="grid xl:grid-cols-2 gap-x-5 gap-y-3"
              data-aos="fade-left"
            >
              <li>
                30-minute virtual meeting and preliminary questionnaire to
                discuss your goals and expectations
              </li>
              <li>
                Personal reflection questionnaire between coaching sessions
              </li>
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
          )}
          {lang && (
            <ul
              className="grid xl:grid-cols-2 gap-x-5 gap-y-3"
              data-aos="fade-left"
            >
              <li>
                Rencontre virtuelle de 30 minutes et questionnaire pr??liminaire
                afin de bien cibler les besoins et attentes
              </li>
              <li>
                Documents de r??flexion personnelle et retour sur les acquis
                entre les s??ances de coaching
              </li>
              <li>
                1 s??ance de coaching assist?? par les chevaux - voir programme
                Connection pour plus de plus amples d??tails
              </li>
              <li>Questionnaire d?????valuation de mi-parcours</li>
              <li>
                10 s??ance de coaching personnalis?? en PNL (programmation
                neuro-linguistique) (virtuel)
              </li>
              <li>S??ance de bouclage et questionnaire final</li>
              <li>Formulaire d???appr??ciation finale</li>
            </ul>
          )}
          <p className="text-xl font-bold my-3">
            {!lang
              ? "Additional options - ??-la-carte (coming soon)"
              : "Peuvent ??tre ajout??es  - ??-la-carte"}
          </p>
          {!lang && (
            <ul className="grid grid-cols-2 gap-x-5" data-aos="fade-left">
              <li>
                Horse-assisted coaching sessions, to replace or complement some
                of your virtual coaching sessions
              </li>
            </ul>
          )}
          {lang && (
            <ul className="grid grid-cols-2 gap-x-5" data-aos="fade-left">
              <li>
                S??ance de coaching assist?? par les chevaux, en remplacement de
                certaines sessions de coaching virtuel
              </li>
            </ul>
          )}
        </div>
        <AboutContactMe />
      </section>
      <Footer />
    </>
  );
};

export default ProgramsTeam;
