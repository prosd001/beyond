import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider-work.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import worksSliderOne from "../assets/works-slider-one.png";
import { useRecoilState } from "recoil";
import { localizationState } from "../atoms/localizationAtom";
import Card1 from "../assets/howitworks/Card1.jpg";
import Card2 from "../assets/howitworks/Card2.jpg";
import Card3 from "../assets/howitworks/Card3.jpg";
import Card4 from "../assets/howitworks/Card4.jpg";
import Card5 from "../assets/howitworks/Card5.jpg";
import Card6 from "../assets/howitworks/Card6.jpg";

const PreviousBtn = (props) => {
  const { onClick } = props;
  return (
    <div
      className="xl:w-[50px] xl:h-[50px] h-[40px] w-[40px] rounded-full bg-[#84904B] inline-flex items-center justify-center prev-arrow text-white p-3 cursor-pointer"
      onClick={onClick}
      data-aos="fade-right"
    >
      <ChevronLeftIcon />
    </div>
  );
};

const NextBtn = (props) => {
  const { onClick } = props;
  return (
    <div
      className="xl:w-[50px] xl:h-[50px] h-[40px] w-[40px] rounded-full bg-[#84904B] inline-flex items-center justify-center next-arrow text-white p-3 cursor-pointer"
      onClick={onClick}
      data-aos="fade-left"
    >
      <ChevronRightIcon />
    </div>
  );
};

const WorksSlider = () => {
  const [lang, setLang] = useRecoilState(localizationState);
  // slider
  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return !lang ? (
    <div
      className="p-4 relative mt-[100px] max-w-[2000px] mx-auto"
      data-aos="zoom-in-up"
    >
      <Slider {...settings}>
        <div className="max-w-[400px]">
          <img
            src={Card1}
            alt=""
            className="object-cover w-[400px] h-[300px]"
          />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Multiple coaches, one focus: YOU!
          </h4>
          <p className="text-[#393B3F]">
            We join forces to provide impactful coaching experiences that will
            be focused on your personal or professional goals, projects and
            challenges.
          </p>
        </div>

        <div className="max-w-[400px]">
          <img
            src={Card2}
            alt=""
            className="object-cover w-[400px] h-[300px]"
          />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Different programs for different needs
          </h4>
          <p className="text-[#393B3F]">
            Various programs focused on different personal and professional
            needs, thus allowing you to evolve at your own pace.
          </p>
        </div>

        <div className="max-w-[400px]">
          <img
            src={Card3}
            alt=""
            className="object-cover w-[400px] h-[300px]"
          />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Private and group offerings
          </h4>
          <p className="text-[#393B3F]">
            Opt for a private program with sessions tailored to your specific
            needs or join a cohort, to benefit from the collective intelligence
            and synergy.
          </p>
        </div>

        <div className="max-w-[400px]">
          <img
            src={Card4}
            alt=""
            className="object-cover w-[400px] h-[300px]"
          />
          <h4 className="font-bold text-lg mt-3 mb-2">
            With and without horses and designed for you
          </h4>
          <p className="text-[#393B3F]">
            Choose from a variety of impactful and life changing experiences,
            offering a blend of coaching with horses and one-on-one coaching.
            It’s your pick! Design the program you need.
          </p>
        </div>

        <div className="max-w-[400px]">
          <img
            src={Card5}
            alt=""
            className="object-cover w-[400px] h-[300px]"
          />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Transforming your whole self
          </h4>
          <p className="text-[#393B3F]">
            Research on brain science, neuroleadership, quantum physics,
            neuro-linguistic programming, brain-heart coherence and emotional
            intelligence are at the heart on my programs and inspire my coaching
            approach. They are transformational for they touch the mind, the
            body, the heart and the soul.
          </p>
        </div>

        <div className="max-w-[400px]">
          <img
            src={Card6}
            alt=""
            className="object-cover w-[400px] h-[300px]"
          />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Giving back to build a better tomorrow
          </h4>
          <p className="text-[#393B3F]">
            A percentage of all profits are given back to a special cause,
            supporting the horses (connection), the trees (evolution) or the
            bees (transformation), thus contributing to building a better
            tomorrow.
          </p>
        </div>
      </Slider>
    </div>
  ) : (
    <div
      className="p-4 relative mt-[100px] max-w-[2000px] mx-auto"
      data-aos="zoom-in-up"
    >
      <Slider {...settings}>
        <div className="max-w-[400px]">
          <img
            src={Card1}
            alt=""
            className="object-cover w-[400px] h-[300px]"
          />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Plusieurs coachs, un focus : VOUS !
          </h4>
          <p className="text-[#393B3F]">
            Nous unissons nos forces afin de vous offrir des expériences de
            coaching percutantes et qui seront axées sur vos objectifs, projets
            et défis personnels ou professionnels.
          </p>
        </div>

        <div className="max-w-[400px]">
          <img
            src={Card2}
            alt=""
            className="object-cover w-[400px] h-[300px]"
          />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Différents programmes pour différents besoins
          </h4>
          <p className="text-[#393B3F]">
            Des programmes variés ciblant différents besoins personnels et
            professionnels, vous permettant ainsi d'évoluer à votre rythme.
          </p>
        </div>

        <div className="max-w-[400px]">
          <img
            src={Card3}
            alt=""
            className="object-cover w-[400px] h-[300px]"
          />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Offres privées et de groupe
          </h4>
          <p className="text-[#393B3F]">
            Optez pour un programme privé avec des séances adaptées à vos
            besoins spécifiques ou rejoignez une cohorte, afin de bénéficier de
            la synergie de groupe et de l’intelligence collective.
          </p>
        </div>

        <div className="max-w-[400px]">
          <img
            src={Card4}
            alt=""
            className="object-cover w-[400px] h-[300px]"
          />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Avec et sans chevaux et conçu pour vous
          </h4>
          <p className="text-[#393B3F]">
            Choisissez parmi une variété d'expériences toutes aussi mémorables
            et transformatrices, offrant à la fois du coaching assisté par les
            chevaux et du coaching un-à-un. C’est votre choix ! Construisez
            votre programme selon vos besoins!
          </p>
        </div>

        <div className="max-w-[400px]">
          <img
            src={Card5}
            alt=""
            className="object-cover w-[400px] h-[300px]"
          />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Transformer tout votre être
          </h4>
          <p className="text-[#393B3F]">
            La recherche sur les neurosciences, le neuroleadership, la physique
            quantique, la programmation neurolinguistique, la cohérence
            cardiaque et l'intelligence émotionnelle sont au coeur de tous mes
            programmes et inspirent mon approche de coaching. Ils sont
            transformationnels car ils touchent l'esprit, le corps, le cœur et
            l'âme.
          </p>
        </div>

        <div className="max-w-[400px]">
          <img
            src={Card6}
            alt=""
            className="object-cover w-[400px] h-[300px]"
          />
          <h4 className="font-bold text-lg mt-3 mb-2">
            Redonner pour construire un meilleur demain
          </h4>
          <p className="text-[#393B3F]">
            Un pourcentage de mes bénéfices est versé à une cause spéciale,
            soutenant les chevaux (connexion), les arbres (évolution) ou les
            abeilles (transformation), contribuant ainsi à construire un avenir
            meilleur.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default WorksSlider;
