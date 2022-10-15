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
import { useRecoilValue } from "recoil";
import { localizationState } from "../atoms/localizationAtom";

const tabContents = [
  {
    index: 1,
    content:
      "My values ​​are health, evolution, nature, respect and harmony. They are also embedded in everything I do, and therefore in all the programs I offer. Respect for self, for others, for the environment, continuous growth and development, living in harmony with your values, and caring for your mental, physical, spiritual and emotional health are at the heart of my approach.",
    content_fr:
      "Mes valeurs sont la santé, l’évolution, la nature, le respect et l’harmonie.  Elles sont d’ailleurs omniprésentes dans tout ce que je fais, et donc dans tous les programmes offerts.  Le respect de soi, de l’autre, de l’environnement, croître et évoluer de façon continue, vivre en harmonie avec ses propres valeurs, et protéger sa santé mentale, physique, spirituelle et émotionnelle sont au coeur de mon approche.",
  },
  {
    index: 2,
    content:
      "My values ​​are health, evolution, nature, respect and harmony. They are also embedded in everything I do, and therefore in all the programs I offer. Respect for self, for others, for the environment, continuous growth and development, living in harmony with your values, and caring for your mental, physical, spiritual and emotional health are at the heart of my approach.",
    content_fr:
      "Mes valeurs sont la santé, l’évolution, la nature, le respect et l’harmonie.  Elles sont d’ailleurs omniprésentes dans tout ce que je fais, et donc dans tous les programmes offerts.  Le respect de soi, de l’autre, de l’environnement, croître et évoluer de façon continue, vivre en harmonie avec ses propres valeurs, et protéger sa santé mentale, physique, spirituelle et émotionnelle sont au coeur de mon approche.",
  },
  {
    index: 3,
    content:
      "My values ​​are health, evolution, nature, respect and harmony. They are also embedded in everything I do, and therefore in all the programs I offer. Respect for self, for others, for the environment, continuous growth and development, living in harmony with your values, and caring for your mental, physical, spiritual and emotional health are at the heart of my approach.",
    content_fr:
      "Mes valeurs sont la santé, l’évolution, la nature, le respect et l’harmonie.  Elles sont d’ailleurs omniprésentes dans tout ce que je fais, et donc dans tous les programmes offerts.  Le respect de soi, de l’autre, de l’environnement, croître et évoluer de façon continue, vivre en harmonie avec ses propres valeurs, et protéger sa santé mentale, physique, spirituelle et émotionnelle sont au coeur de mon approche.",
  },
];

const About = () => {
  const lang = useRecoilValue(localizationState);

  // Local States
  const [wmTabIndex, setWmTabIndex] = useState(2);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="xl:mt-[130px] mt-[100px]">
        <div className="relative w-full max-w-[2000px] mx-auto">
          <img
            src={aboutBanner}
            alt=""
            className="object-cover w-full h-[500px] xl:h-auto"
          />
          {!lang && (
            <p
              className="absolute xl:top-[35%] xl:left-[45%] top-[39%] left-[35%] xl:text-[64px] text-white font-bold text-[44px]"
              data-aos="zoom-in"
            >
              About
            </p>
          )}
          {lang && (
            <p
              className="absolute xl:top-[35%] xl:left-[42%] top-[39%] left-[27%] xl:text-[64px] text-white font-bold text-[44px] capitalize"
              data-aos="zoom-in"
            >
              À propos
            </p>
          )}
          <img
            src={smoke}
            alt=""
            className="absolute -bottom-1 xl:bottom-0 w-full"
          />
        </div>

        <div className="why-horses-bg max-w-[1400px] mx-auto w-full xl:py-10 xl:mt-4 p-3 py-5">
          <HorseArrow className="" data-aos="fade-right" />
          {!lang && (
            <h2 className="font-bold xl:text-[54px] text-[40px] xl:my-5 my-2">
              Why <span className="text-[#604945]">Horses</span>
            </h2>
          )}
          {lang && (
            <h2 className="font-bold xl:text-[54px] text-[40px] xl:my-5 my-2">
              Pourquoi les
              <span className="text-[#604945]">chevaux?</span>
            </h2>
          )}
          {!lang && (
            <p
              className="text-[#393B3F] xl:text-[24px] xl:leading-10 text-md"
              data-aos="fade-left"
            >
              Preyed on in the wild, horses are highly attuned to their body,
              their senses and extremely attentive to their environment, for
              their life depends on their ability to sense danger and react to
              it. They are also masters at staying grounded and tuning into the
              intention of others,and can quickly detect any variation of
              energetic frequencies. This heightened sensory awareness allows
              them to effectively detect human conscious and unconscious
              emotional states as well as detect any incongruence with their
              body language. They therefore have much to teach us about
              self-awareness and emotional intelligence. They are outstanding
              partners for personal and professional development and extremely
              effective at mirroring our own leadership style and communication
              effectiveness. They are unparalleled teachers and coaches.
            </p>
          )}
          {lang && (
            <p
              className="text-[#393B3F] xl:text-[24px] xl:leading-10 text-md"
              data-aos="fade-left"
            >
              Proies à l'état sauvage, les chevaux sont très sensibles à leurs
              corps, leurs sens et extrêmement attentifs à leur environnement,
              car leur vie dépend de leur capacité à percevoir et ressentir le
              danger et à y réagir. Ils sont également habilités à rester dans
              le moment présent, en écoute constante et aptes à rapidement
              détecter toute variation des fréquences énergétiques qui les
              entourent, de près ou de loin. Cette conscience sensorielle élevée
              leur permet de détecter efficacement les états émotionnels
              conscients et inconscients des humains ainsi que de détecter tout
              décalage avec leur langage corporel. Ils ont donc beaucoup à nous
              apprendre sur la conscience de soi et l'intelligence émotionnelle.
              Ce sont des partenaires exceptionnels pour le développement
              personnel et professionnel et extrêmement efficaces pour refléter
              notre propre style de leadership et notre efficacité à
              communiquer. Ce sont des professeurs et des coachs hors pair.
            </p>
          )}
        </div>

        <div className="why-trees-bg max-w-[1600px] mx-auto w-full xl:py-10 xl:mt-4 p-3 py-5 xl:px-10">
          <div className="max-w-[1400px] mx-auto xl:mt-6 mt-4">
            <div className="flex justify-between xl:px-2">
              {!lang && (
                <h2
                  className="font-bold xl:text-[54px] text-white  text-[40px]"
                  data-aos="fade-right"
                >
                  Why <span className="text-[#84904B]">Trees</span>
                </h2>
              )}
              {lang && (
                <h2
                  className="font-bold xl:text-[54px] text-white  text-[40px]"
                  data-aos="fade-right"
                >
                  Pourquoi les
                  <span className="text-[#84904B]">arbres?</span>
                </h2>
              )}
              <TressArrow className="ml-auto" data-aos="fade-left" />
            </div>
            {!lang && (
              <p
                className="text-white xl:text-[24px] xl:leading-10 xl:mt-[350px] mt-[300px] xl:p-2"
                data-aos="fade-right"
              >
                Trees represent resilience, stability, connection, flexibility,
                evolution, and benevolence (to name a few). They communicate and
                collaborate with their environment in a remarkable way, and take
                great care of their peers and children. Yup, trees have
                families, just like we do! Not only are they majestic, they are
                the lungs of the earth and critical to the survival of all
                living beings. Their protection is therefore essential and we
                have much to learn and grow from. If we just allow ourselves to
                be inspired by their wisdom and strategies, we can learn to
                evolve and grow in harmony with everything that surrounds us.
              </p>
            )}
            {lang && (
              <p
                className="text-white xl:text-[24px] xl:leading-10 xl:mt-[350px] mt-[300px] xl:p-2"
                data-aos="fade-right"
              >
                Les arbres représentent pour moi la résilience, la stabilité, la
                connexion, la flexibilité, l'évolution et la bienveillance (pour
                n'en citer que quelques-uns). Ils communiquent et collaborent
                avec leur environnement de façon remarquable, et prennent grand
                soin de leurs pairs et enfants. Et oui, les arbres ont des
                familles, tout comme nous! Non seulement ils sont majestueux,
                mais ils sont les poumons de la terre et essentiels à la survie
                de tous les êtres vivants. Leur protection est donc essentielle
                et prendre le temps d’étudier et de s’inspirer de leur sagesse
                et stratégies nous permettra de grandir et d’évoluer, en
                harmonie avec ce qui nous entoure.
              </p>
            )}
          </div>
        </div>

        <div className="why-bees-bg max-w-[1400px] mx-auto w-full xl:py-10 xl:mt-4 p-3 py-5">
          <BeesArrow className="" data-aos="fade-right" />
          {!lang && (
            <h2 className="font-bold xl:text-[54px] text-[40px] xl:my-5 my-2">
              Why <span className="text-[#E0CF6F]">Bees</span>
            </h2>
          )}
          {lang && (
            <h2 className="font-bold xl:text-[54px] text-[40px] xl:my-5 my-2">
              Pourquoi les <span className="text-[#E0CF6F]">abeilles</span>
            </h2>
          )}
          {!lang && (
            <>
              <p
                className="text-[#05040D] xl:text-[24px] xl:leading-10 text-md"
                data-aos="fade-left"
              >
                Also essential to the survival of our planet (with over 200
                billion of crops yearly depending on pollination), bees inspire
                me with their phenomenal ability to adapt and transform.
                Throughout their life they will learn to play different roles to
                ensure the sustainability and wellbeing of the colony. They are
                fantastic role models when it comes to collaboration,
                communication, teamwork, productivity and effectiveness. They
                live for a short time, but with a very clear purpose and
                contribution to the generations ahead. Needless to say, they too
                are fantastic teachers for teams and leaders.
              </p>
              <p
                className="text-[#05040D] xl:text-[24px] xl:leading-10 text-md mt-2"
                data-aos="fade-left"
              >
                By protecting trees, bees and offering deep connections between
                humans and horses, we contribute to building a better tomorrow
                for all generations to come.
              </p>
            </>
          )}
          {lang && (
            <>
              <p
                className="text-[#05040D] xl:text-[24px] xl:leading-10 text-md"
                data-aos="fade-left"
              >
                Également essentielles à la survie de notre planète (avec plus
                de 200 milliards de récoltes annuelles dépendant de la
                pollinisation), les abeilles m'inspirent par leur capacité à
                s'adapter et à se transformer de manière phénoménale. Leur vie
                durant, ils s'adapteront et joueront différents rôles afin
                d'assurer la pérennité et le bien-être de leur colonie. Ce sont
                des modèles fantastiques en matière de collaboration, de
                communication, de travail d'équipe, de productivité et
                d'efficacité. Leur vie est courte, mais leur objectif est très
                clair, tout comme leur contribution aux générations à venir. Il
                va sans dire qu'elles aussi sont des enseignantes inspirantes
                pour les équipes et les dirigeants.
              </p>
              <p
                className="text-[#05040D] xl:text-[24px] xl:leading-10 text-md mt-2"
                data-aos="fade-left"
              >
                En protégeant les arbres, les abeilles et en offrant cette
                connexion profonde entre les humains et les chevaux que nous
                contribuons à construire un meilleur demain pour toutes les
                générations à venir.
              </p>
            </>
          )}
        </div>

        <div className="max-w-[1400px] mx-auto w-full xl:py-10 xl:mt-4">
          <div className="bg-[#F2F4F5] flex xl:justify-around xl:p-[60px] xl:flex-row flex-col p-4">
            <div>
              <img
                src={horseImg}
                alt=""
                className="w-full"
                data-aos="zoom-in"
              />
            </div>
            <div className="xl:w-[600px] mt-4 xl:-mt-3">
              {!lang && (
                <h3
                  className="font-bold xl:text-[54px] xl:mb-3 text-[40px]"
                  data-aos="fade-left"
                >
                  Why <br />
                  <span className="text-[#84904B]">Beyond Wordz</span>
                </h3>
              )}
              {lang && (
                <h3
                  className="font-bold xl:text-[54px] xl:mb-3 text-[40px]"
                  data-aos="fade-left"
                >
                  Pourquoi <br />
                  <span className="text-[#84904B]">Beyond Wordz</span>
                </h3>
              )}
              <div className="xl:flex text-[#393B3F] xl:gap-10 mt-4 grid grid-cols-2 gap-x-4">
                <div className="flex flex-col gap-y-6">
                  <div className="xl:w-[220px]">
                    <PersonIcon data-aos="zoom-in" />
                    {!lang && (
                      <p className="mt-2">
                        Because my approach is unique, inspiring, tailored to
                        your needs and designed for maximum impact.
                      </p>
                    )}
                    {lang && (
                      <p className="mt-2">
                        Parce que mon approche est unique, inspirante,
                        personnalisée et conçue pour un impact maximal.
                      </p>
                    )}
                  </div>
                  <div className={`xl:w-[220px] ${lang && "xl:mt-6"}`}>
                    <PersonHeartIcon data-aos="zoom-in" />
                    {!lang && (
                      <p className="mt-2">
                        Because of the effectiveness and impact of experiential,
                        multi-sensory and immersive learning experiences.
                      </p>
                    )}
                    {lang && (
                      <p className="mt-2">
                        En raison de l'efficacité et de l'impact des expériences
                        d'apprentissage expérientielles, multisensorielles et
                        immersives.
                      </p>
                    )}
                  </div>
                  {lang && (
                    <div className="xl:w-[220px] xl:mt-2 mt-12">
                      <CareIcon data-aos="zoom-in" />
                      {lang && (
                        <p className="mt-2">
                          Parce que votre croissance aidera également d'autres
                          causes à grandir. Une inscription, un don!
                        </p>
                      )}
                    </div>
                  )}
                  {!lang && (
                    <div className="xl:w-[220px]">
                      <CareIcon data-aos="zoom-in" />
                      {!lang && (
                        <p className="mt-2">
                          Because your growth will help other causes grow too.
                          You sign up for a program, I give back!
                        </p>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-y-6">
                  <div className="xl:w-[220px]">
                    <HorseIcon data-aos="zoom-in" />
                    {!lang && (
                      <p className="mt-2">
                        Because partnering with horses will accelerate insights
                        and your personal and professional growth.
                      </p>
                    )}
                    {lang && (
                      <p className="mt-2">
                        Parce que le partenariat avec les chevaux accélère les
                        prises de conscience et votre croissance personnelle et
                        professionnelle
                      </p>
                    )}
                  </div>
                  <div className="xl:w-[220px]">
                    <TreesIcon data-aos="zoom-in" />
                    {!lang && (
                      <p className="mt-2">
                        Because my environment allows you to disconnect in order
                        to reconnect to your true and authentic self.
                      </p>
                    )}
                    {lang && (
                      <p className="mt-2">
                        Parce que mon environnement vous permet de vous
                        déconnecter afin de vous reconnecter à votre nature
                        profonde, véritable et authentique.
                      </p>
                    )}
                  </div>
                  <div className="xl:w-[220px] mt-6 xl:mt-0">
                    <PersonVipIcon data-aos="zoom-in" />
                    {!lang && (
                      <p className="mt-2">
                        Simply because you deserve it! Take time for yourself.
                        Gift yourself a coaching experience, beyond the words!
                      </p>
                    )}
                    {lang && (
                      <p className="mt-2">
                        Tout simplement parce que vous le méritez ! Prenez le
                        temps de vous arrêter, prenez du temps pour vous.
                        Offrez-vous une expérience de coaching, au-delà des
                        mots!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full xl:py-10 xl:mt-4">
          <div className="bg-[#F2F4F5]">
            <div className="flex justify-around p-4 flex-col-reverse xl:flex-row">
              <div
                className="xl:w-[40%] xl:flex flex-col justify-center w-full"
                data-aos="fade-right"
              >
                {!lang && (
                  <h3
                    className="font-bold xl:text-[54px] text-[40px] mb-3 mt-4 xl:mt-0"
                    data-aos="zoom-in"
                  >
                    About <span className="text-[#84904B]">Karine</span>
                  </h3>
                )}
                {lang && (
                  <h3
                    className="font-bold xl:text-[54px] text-[40px] mb-3 mt-4 xl:mt-0"
                    data-aos="zoom-in"
                  >
                    À propos de
                    <span className="text-[#84904B]">Karine</span>
                  </h3>
                )}
                {!lang && (
                  <p className="text-[#393B3F]" data-aos="zoom-in">
                    Multiple roles but a shared passion that connects them all;
                    that of unleashing human potential and inspiring tomorrow’s
                    leaders, one heart at a time!
                  </p>
                )}
                {lang && (
                  <p className="text-[#393B3F]" data-aos="zoom-in">
                    Plusieurs rôles mais une passion commune qui les relient
                    tous; celle de valoriser le potentiel humain et d'inspirer
                    les leaders de demain, un cœur à la fois !
                  </p>
                )}
                <div
                  className="grid xl:grid-cols-3 gap-2 mt-5 grid-cols-2"
                  data-aos="zoom-in"
                >
                  <div className="bg-[#252C08] text-[#9AA098] xl:w-full p-8 text-center flex items-center justify-center">
                    {!lang
                      ? "Certified professional NLP coach"
                      : "Coach professionnelle certifiée en PNL"}
                  </div>
                  <div className="bg-[#252C08] text-[#9AA098] xl:w-full p-8 text-center flex items-center justify-center">
                    {!lang
                      ? "Learning and leadership development specialist"
                      : "Spécialiste en apprentissage et en développement du leadership"}
                  </div>
                  <div className="bg-[#252C08] text-[#9AA098] xl:w-full p-8 text-center flex items-center justify-center">
                    {!lang
                      ? "Synergologist (body language expert)"
                      : "Synergologue (experte en langage non-verbal)"}
                  </div>
                  <div className="bg-[#252C08] text-[#9AA098] xl:w-full p-8 text-center flex items-center justify-center">
                    {!lang
                      ? "Equine assisted facilitator"
                      : "Facilitatrice équine"}
                  </div>
                  <div className="bg-[#252C08] text-[#9AA098] xl:w-full p-8 text-center flex items-center justify-center">
                    {!lang
                      ? "Seasoned facilitator and instructional designer"
                      : "Conceptrice pédagogique et facilitatrice chevronnée"}
                  </div>
                  <div className="bg-[#252C08] text-[#9AA098] xl:w-full p-8 text-center flex items-center justify-center">
                    {!lang
                      ? "Mentor and life-long learner"
                      : "Mentor et apprenant à vie"}
                  </div>
                </div>
              </div>
              <img src={aboutKarineBanner} alt="" data-aos="fade-left" />
            </div>

            <div className="xl:flex justify-around w-full p-4 gap-8 xl:mb-10 max-w-[1200px] mx-auto">
              <img src={whyMeBanner} alt="" data-aos="fade-right" />
              <div
                className="flex justify-center items-center xl:w-[60%]"
                data-aos="zoom-in"
              >
                <div className="">
                  {!lang && (
                    <h3 className="font-bold xl:text-[54px] text-[40px] mt-3">
                      Why <span className="text-[#84904B]">Me</span>
                    </h3>
                  )}
                  {lang && (
                    <h3 className="font-bold xl:text-[54px] text-[40px] mt-3">
                      Pourquoi <span className="text-[#84904B]">Moi?</span>
                    </h3>
                  )}
                  <div className="ml-2 ">
                    <div className="flex gap-x-10 xl:gap-x-14 mb-3 w-full">
                      <button
                        className={`${
                          wmTabIndex === 0
                            ? "py-2 font-bold border-b-4 border-[#84904B] text-[#252C08]"
                            : "py-2"
                        }`}
                        onClick={() => setWmTabIndex(0)}
                      >
                        {!lang ? "My Mission" : "Ma Mission"}
                      </button>
                      <button
                        className={`${
                          wmTabIndex === 1
                            ? "py-2 font-bold border-b-4 border-[#84904B] text-[#252C08]"
                            : "py-2"
                        }`}
                        onClick={() => setWmTabIndex(1)}
                      >
                        {!lang ? "My Story" : "Mon Histoire"}
                      </button>
                      <button
                        className={`${
                          wmTabIndex === 2
                            ? "py-2 font-bold border-b-4 border-[#84904B] text-[#252C08]"
                            : "py-2"
                        }`}
                        onClick={() => setWmTabIndex(2)}
                      >
                        {!lang ? "My Values" : "Mes Valeurs"}
                      </button>
                    </div>
                    <p>
                      {!lang
                        ? tabContents[wmTabIndex].content
                        : tabContents[wmTabIndex].content_fr}
                    </p>
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
