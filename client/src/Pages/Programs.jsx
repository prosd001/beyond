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
import { ReactComponent as TimeBrown } from "../assets/time-brown.svg";
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

const Programs = () => {
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
        <div className="relative w-full max-w-[2000px] mx-auto bg__programs 2xl:h-[1000px] xl:h-[800px] h-[600px]">
          <div
            className="absolute 2xl:top-[38%] xl:top-[38%] top-[30%] md:left-[15%] 2xl:left-[23%] xl:left-[17%] text-center font-bold"
            data-aos="zoom-in"
          >
            {lang && (
              <>
                <p className="xl:text-[64px] text-[40px] text-white capitalize">
                  Coaching professionel et
                </p>
                <p className="xl:text-[64px] text-[40px] text-[#E0CF6F] capitalize">
                  développement du leadership
                </p>
              </>
            )}
          </div>
          {!lang && (
            <div
              className="absolute 2xl:top-[38%] xl:top-[40%] top-[30%] md:left-[20%] 2xl:left-[30%] xl:left-[23%] text-center font-bold"
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
                  Equine facilitated private coaching session
                </p>
              )}
              {lang && (
                <p className="text-[#393B3F] xl:text-[24px] xl:ml-4 font-semibold my-2">
                  Séance privée de coaching assisté par les chevaux
                </p>
              )}

              {!lang && (
                <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                  Take the time to disconnect and reconnect to your true self.
                  In the heart of nature, with all senses wide open, and guided
                  by 3 coaches devoted to your personal growth and development,
                  this experience was designed to accelerate your insight to
                  create an immediate impact. A memorable moment that will
                  propel you forward!
                </p>
              )}
              {lang && (
                <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                  Prenez le temps de vous arrêter quelques heures, de vous
                  déconnecter afin de mieux vous reconnecter. En pleine nature,
                  les sens bien ouverts, et accompagné de 3 coachs dédiés à
                  votre développement personnel, cette expérience a été conçue
                  afin d'accélérer vos prises de conscience et avoir un impact
                  immédiat. Un moment inoubliable!
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
                    ? "https://www.youtube.com/embed/5HqTrv7hbGU"
                    : "https://www.youtube.com/embed/gpazUxcCc6Y"
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
              <TimeBrown />
              <p className="text-[#9AA098] text-sm my-2">
                {!lang ? "Duration" : "Durée"}
              </p>
              <p className="text-[#393B3F] font-bold">
                {!lang ? "3 to 3.5 hours" : "3 à 3.5 heures"}
              </p>
            </div>
            <div
              className="text-center xl:w-[300px] flex flex-col justify-center items-center"
              data-aos="zoom-in"
            >
              <PersonBrown />
              <p className="text-[#9AA098] text-sm my-2">
                {!lang ? "Program designed for" : "Ce programme s’adresse à"}
              </p>
              <p className="text-[#393B3F] font-bold">
                {!lang ? "Individuals" : "Tout le monde"}
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
                {!lang ? "English and French" : "Français et Anglais"}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24 bg-[#604945] first__package text-white md:p-5 xl:p-8 p-4 my-4">
          <p className="text-xl font-bold my-3">
            {!lang ? "This package includes:" : "Ce forfait inclut:"}
          </p>
          {!lang && (
            <ul className="grid xl:grid-cols-2 gap-x-5 gap-y-3">
              <li data-aos="fade-left">
                30-minute virtual call and preliminary questionnaire to clarify
                your goals and expectations
              </li>
              <li data-aos="fade-left">
                Follow up 45-60 minutes virtual coaching call 7 days after the
                experience; to circle back on the experience and anchor the
                insights for a long lasting impact
              </li>
              <li data-aos="fade-left">
                Personalized coaching session focused on a project, an objective
                or a personal or professional issue/challenge
              </li>
              <li data-aos="fade-left">
                Document to deepen your personal reflection
              </li>
              <li data-aos="fade-left">
                The coaching approach combines both NLP (neuro-linguistic
                programming) and horse-assisted coaching (which includes
                observation and interaction with 2 horses)
              </li>

              <li data-aos="fade-left">Snack and drink</li>
            </ul>
          )}

          {lang && (
            <ul className="grid xl:grid-cols-2 gap-x-5 gap-y-3">
              <li data-aos="fade-left">
                Rencontre virtuelle de 30 minutes et questionnaire préliminaire
                afin de bien cibler les besoins et attentes
              </li>
              <li data-aos="fade-left">
                Coaching virtuel de 45-60 minutes 7 jours après la séance;
                retour sur l’expérience et ancrage des prises de conscience afin
                de faire perdurer leur impact
              </li>
              <li data-aos="fade-left">
                Séance de coaching personnalisé axée sur un projet, un objectif
                ou un enjeu/défi personnel ou professionnel
              </li>
              <li data-aos="fade-left">
                Document pour approfondir votre réflexion personnelle
              </li>
              <li data-aos="fade-left">
                L’approche de coaching combine à la fois la PNL (programmation
                neuro-linguistique) et le coaching assisté par les chevaux (ce
                qui inclut observation et interaction avec 2 chevaux)
              </li>

              <li data-aos="fade-left">Collation et breuvage</li>
            </ul>
          )}

          <p className="text-xl font-bold my-3">
            {!lang
              ? "Additional options - à-la-carte (coming soon)"
              : "Peuvent être ajoutées  - à-la-carte"}
          </p>
          {!lang && (
            <ul className="grid grid-cols-2 gap-x-5" data-aos="fade-left">
              <li>Retreat and walk in nature, discovery trail</li>
              <li>Healthy meal</li>
            </ul>
          )}
          {lang && (
            <ul className="grid grid-cols-2 gap-x-5" data-aos="fade-left">
              <li>Retraite et marche en nature, sentier découverte</li>
              <li>Repas santé</li>
            </ul>
          )}
          {!lang && (
            <p className="font-bold my-5" data-aos="fade-up">
              No riding experience required. Interactions with horses are done
              on the ground, and in complete safety
            </p>
          )}
          {lang && (
            <p className="font-bold my-5" data-aos="fade-up">
              Aucune expérience équestre requise. Les intéractions avec le
              cheval se font au sol, et en toute sécurité.
            </p>
          )}
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
                    ? "https://www.youtube.com/embed/u86l8kO1Y0g"
                    : "https://www.youtube.com/embed/iwCGhZGZLDw"
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
                  Personal growth and development program
                </p>
                <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                  To initiate your personal development journey in a structured,
                  effective and inspiring way, all the while benefiting from
                  personalized support and guidance from a professional coach.
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
                    ÉVOLUTION
                  </h3>
                </div>
                <p className="text-[#393B3F] xl:text-[24px] xl:ml-4 font-semibold my-2">
                  Programme de développement et d’évolution personnelle
                </p>
                <p className="text-[#393B3F] xl:text-lg xl:ml-4">
                  Si vous désirez entamer une démarche de développement
                  personnel de façon ciblée, efficace et inspirante, avec un
                  accompagnement et support personnalisé d’une coach
                  professionnelle.
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
                {!lang ? "Duration" : "Durée"}
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
                {!lang ? "Program designed for" : "Ce programme s’adresse à"}
              </p>
              <p className="text-[#393B3F] font-bold">
                {!lang
                  ? "Individuals wishing to initiate a personal development journey"
                  : "Toute personne désirant entamer une démarche de développement personnel"}
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
                {!lang ? "English and French" : "Français et Anglais"}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto xl:my-24 xl:flex xl:justify-between text-white second__package mt-4">
          <div className="bg-[#84904B] p-6 lg:w-[46%] md:w-full my-4 xl:my-0">
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
            )}
            {lang && (
              <ul className="grid grid-cols-1 gap-y-2" data-aos="fade-left">
                <li>
                  Rencontre virtuelle de 30 minutes et questionnaire
                  préliminaire afin de bien cibler les besoins et attentes
                </li>
                <li>
                  1 séance de coaching assisté par les chevaux - voir programme
                  Connection pour plus de plus amples détails
                </li>
                <li>
                  5 séance personnalisées, combinant contenu éducatif, mentorat
                  et coaching en PNL (programmation neuro-linguistique)
                </li>
                <li>Document de référence pour réflexion personnelle</li>
                <li>1 session de bouclage et questionnaire final</li>
                <li>Formulaire d’appréciation finale</li>
                <li>
                  Accès à la plateforme de formation Académie Beyond Wordz
                </li>
              </ul>
            )}
          </div>

          <div className="bg-[#84904B] p-6 lg:w-[46%] md:w-full">
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
                {!lang ? "From 3 to 6" : "3 à 6"}
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
                  préliminaire afin de bien cibler les besoins et attentes
                </li>
                <li>
                  6 ateliers de groupe virtuels portant sur le développement du
                  leadership
                </li>
                <li>
                  2 séances de coaching individuel en PNL (programmation
                  neuro-linguistique), en virtuel
                </li>
                <li>Document de référence et de réflexion personnelle</li>
                <li>
                  1 séance de bouclage individuelle afin de revenir sur les
                  acquis, le chemin parcouru et les succès obtenus
                </li>
                <li>Formulaire d’appréciation finale</li>
                <li>
                  Accès à la plateforme de formation Académie Beyond Wordz et de
                  discussion privée
                </li>
              </ul>
            )}

            <p className="text-lg mb-2 font-[600] my-3">
              {!lang
                ? "Additional options - à-la-carte"
                : "Peuvent être ajoutées  - à-la-carte"}
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
                <li>Séance de coaching individuel (virtuel)</li>
                <li>
                  Séance de coaching assisté par les chevaux (voir programme
                  Connection pour de plus amples détails)
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
                  : "Programme de développement et transformation personnelle"}
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
                  diversifié, combinant la PNL, le coaching orienté solutions,
                  et le coaching assisté par les chevaux. Ce programme vous
                  permet de travailler sur un but, projet ou défi important pour
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
                {!lang ? "Duration" : "Durée"}
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
                {!lang ? "Program designed for" : "Ce programme s’adresse à"}
              </p>
              <p className="text-[#393B3F] font-bold">
                {!lang ? "Professionals" : "Professionnels"}
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
                {!lang ? "English and French" : "Français et Anglais"}
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
                Rencontre virtuelle de 30 minutes et questionnaire préliminaire
                afin de bien cibler les besoins et attentes
              </li>
              <li>
                Documents de réflexion personnelle et retour sur les acquis
                entre les séances de coaching
              </li>
              <li>
                1 séance de coaching assisté par les chevaux - voir programme
                Connection pour plus de plus amples détails
              </li>
              <li>Questionnaire d’évaluation de mi-parcours</li>
              <li>
                10 séance de coaching personnalisé en PNL (programmation
                neuro-linguistique) (virtuel)
              </li>
              <li>Séance de bouclage et questionnaire final</li>
              <li>Formulaire d’appréciation finale</li>
            </ul>
          )}
          <p className="text-xl font-bold my-3">
            {!lang
              ? "Additional options - à-la-carte (coming soon)"
              : "Peuvent être ajoutées  - à-la-carte"}
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
                Séance de coaching assisté par les chevaux, en remplacement de
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

export default Programs;
