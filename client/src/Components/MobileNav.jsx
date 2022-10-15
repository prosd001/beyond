import { ReactComponent as HamoClose } from "../assets/hamburger-close.svg";
import logoWhite from "../assets/logo-nav-white.png";
import { Link, useLocation } from "react-router-dom";

const MobileNav = ({ lang, setMobileNavOpen, setLang }) => {
  // Instances
  const location = useLocation();

  // For home/home-bussinesses
  if (location.pathname === "/" || location.pathname === "/home-businesses") {
    return (
      <section className="absolute top-0 bg-[#604945] z-50 w-full">
        <div className="flex justify-between px-3 py-2 items-center">
          <img src={logoWhite} alt="" className=" h-[80px]" />
          <span
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <HamoClose className="w-5 h-5" />
          </span>
        </div>
        <div className="text-white flex flex-col justify-center items-center mt-6">
          <p
            className="uppercase cursor-pointer font-bold mb-4"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/">{!lang ? "Home" : "Accueil"}</Link>
          </p>
          <p
            className="uppercase cursor-pointer mb-4"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/about">{!lang ? "About" : "À Propos"}</Link>
          </p>
          <p
            className="uppercase cursor-pointer mb-4"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/programs">{!lang ? "Programs" : "Programmes"}</Link>
          </p>
          <p
            className={`${
              location.pathname.includes("/articles")
                ? "uppercase cursor-pointer font-bold mb-4"
                : "uppercase cursor-pointer mb-4"
            }`}
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to={"/articles"}>
              {!lang ? "ARTICLES & RESOURCES" : "Articles et Ressources"}
            </Link>
          </p>
        </div>
        <div className="flex items-center flex-col mt-4 gap-y-3">
          <button
            className={`${
              location.pathname === "/home-businesses"
                ? "nav-btn-active w-[80%]"
                : "nav-btn-inactive w-[80%]"
            }`}
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/home-businesses">
              {!lang ? "BUSINESSES & MANAGERS" : "ENTREPRISES & GESTIONNAIRES"}
            </Link>
          </button>
          <button
            className={`${
              location.pathname === "/"
                ? "nav-btn-active w-[80%]"
                : "nav-btn-inactive w-[80%]"
            }`}
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/">
              {!lang ? "PERSONAL DEVELOPMENT" : "DÉVELOPPEMENT PERSONNEL"}
            </Link>
          </button>
          <div className="text-white divide-x flex mb-8">
            <p
              className={`${
                !lang ? "font-bold mr-1 cursor-pointer" : " mr-1 cursor-pointer"
              }`}
              onClick={() => {
                setLang(false);
              }}
            >
              EN
            </p>
            <p
              className={`${
                lang ? "font-bold pl-1 cursor-pointer" : "pl-1 cursor-pointer"
              }`}
              onClick={() => {
                setLang(true);
              }}
            >
              FR
            </p>
          </div>
        </div>
      </section>
    );
  }

  // For programs/programs-businesses
  if (
    location.pathname === "/programs" ||
    location.pathname === "/programs-businesses"
  ) {
    return (
      <section className="absolute top-0 bg-[#604945] z-50 w-full">
        <div className="flex justify-between px-3 py-2 items-center">
          <img src={logoWhite} alt="" className=" h-[80px]" />
          <span
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <HamoClose className="w-5 h-5" />
          </span>
        </div>
        <div className="text-white flex flex-col justify-center items-center mt-6">
          <p
            className="uppercase cursor-pointer mb-4"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/">{!lang ? "Home" : "Accueil"}</Link>
          </p>
          <p
            className="uppercase cursor-pointer mb-4"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/about">{!lang ? "About" : "À Propos"}</Link>
          </p>
          <p
            className="uppercase cursor-pointer mb-4 font-bold"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/programs">{!lang ? "Programs" : "Programmes"}</Link>
          </p>
          <p
            className={`${
              location.pathname.includes("/articles")
                ? "uppercase cursor-pointer font-bold mb-4"
                : "uppercase cursor-pointer mb-4"
            }`}
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to={"/articles"}>
              {!lang ? "ARTICLES & RESOURCES" : "Articles et Ressources"}
            </Link>
          </p>
        </div>
        <div className="flex items-center flex-col mt-4 gap-y-3">
          <button
            className={`${
              location.pathname === "/programs-businesses"
                ? "nav-btn-active w-[80%]"
                : "nav-btn-inactive w-[80%]"
            }`}
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/programs-businesses">
              {!lang ? "BUSINESSES & MANAGERS" : "ENTREPRISES & GESTIONNAIRES"}
            </Link>
          </button>
          <button
            className={`${
              location.pathname === "/programs"
                ? "nav-btn-active w-[80%]"
                : "nav-btn-inactive w-[80%]"
            }`}
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/programs">
              {!lang ? "PERSONAL DEVELOPMENT" : "DÉVELOPPEMENT PERSONNEL"}
            </Link>
          </button>

          <div className="text-white divide-x flex mb-8">
            <p
              className={`${
                !lang ? "font-bold mr-1 cursor-pointer" : " mr-1 cursor-pointer"
              }`}
              onClick={() => {
                setLang(false);
              }}
            >
              EN
            </p>
            <p
              className={`${
                lang ? "font-bold pl-1 cursor-pointer" : "pl-1 cursor-pointer"
              }`}
              onClick={() => {
                setLang(true);
              }}
            >
              FR
            </p>
          </div>
        </div>
      </section>
    );
  }

  // For about/articles
  return (
    <section className="absolute top-0 bg-[#604945] z-50 w-full">
      <div className="flex justify-between px-3 py-2 items-center">
        <img src={logoWhite} alt="" className=" h-[80px]" />
        <span
          onClick={() => {
            setMobileNavOpen(false);
          }}
        >
          <HamoClose className="w-5 h-5" />
        </span>
      </div>
      <div className="text-white flex flex-col justify-center items-center mt-6">
        <p
          className="uppercase cursor-pointer mb-4"
          onClick={() => {
            setMobileNavOpen(false);
          }}
        >
          <Link to="/">{!lang ? "Home" : "Accueil"}</Link>
        </p>
        <p
          className={`${
            location.pathname === "/about"
              ? "uppercase cursor-pointer font-bold mb-4"
              : "uppercase cursor-pointer mb-4"
          }`}
          onClick={() => {
            setMobileNavOpen(false);
          }}
        >
          <Link to="/about">{!lang ? "About" : "À Propos"}</Link>
        </p>
        <p
          className="uppercase cursor-pointer mb-4"
          onClick={() => {
            setMobileNavOpen(false);
          }}
        >
          <Link to="/programs">{!lang ? "Programs" : "Programmes"}</Link>
        </p>
        <p
          className={`${
            location.pathname.includes("/articles")
              ? "uppercase cursor-pointer font-bold mb-4"
              : "uppercase cursor-pointer mb-4"
          }`}
          onClick={() => {
            setMobileNavOpen(false);
          }}
        >
          <Link to={"/articles"}>
            {!lang ? "ARTICLES & RESOURCES" : "Articles et Ressources"}
          </Link>
        </p>
      </div>
      <div className="flex items-center flex-col mt-4 gap-y-3">
        <button
          className="nav-btn-inactive w-[80%]"
          onClick={() => {
            setMobileNavOpen(false);
          }}
        >
          <Link to={"/programs-businesses"}>
            {!lang ? "BUSINESSES & MANAGERS" : "ENTREPRISES & GESTIONNAIRES"}
          </Link>
        </button>
        <button
          className="nav-btn-active w-[80%]"
          onClick={() => {
            setMobileNavOpen(false);
          }}
        >
          <Link to={"/programs"}>
            {!lang ? "PERSONAL DEVELOPMENT" : "DÉVELOPPEMENT PERSONNEL"}
          </Link>
        </button>
        <div className="text-white divide-x flex mb-8">
          <p
            className={`${
              !lang ? "font-bold mr-1 cursor-pointer" : " mr-1 cursor-pointer"
            }`}
            onClick={() => {
              setLang(false);
            }}
          >
            EN
          </p>
          <p
            className={`${
              lang ? "font-bold pl-1 cursor-pointer" : "pl-1 cursor-pointer"
            }`}
            onClick={() => {
              setLang(true);
            }}
          >
            FR
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileNav;
