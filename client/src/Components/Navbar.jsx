import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import logoWhite from "../assets/logo-nav-white.png";
import logoDark from "../assets/logo-nav-dark.svg";
import { ReactComponent as Hamopen } from "../assets/hamburger-open.svg";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { localizationState } from "../atoms/localizationAtom";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [lang, setLang] = useRecoilState(localizationState);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // Instances
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("language") === "EN") {
      setLang(false);
    }
  }, []);

  // Mobile nav opened
  if (mobileNavOpen) {
    return (
      <MobileNav
        lang={lang}
        setMobileNavOpen={setMobileNavOpen}
        setLang={setLang}
      />
    );
  }

  if (
    location.pathname.includes("articles/") &&
    location.pathname !== "/home-businesses" &&
    location.pathname !== "/programs-businesses"
  ) {
    return (
      <>
        <section className="absolute top-4 xl:hidden flex justify-between items-center bg-transparent z-50 w-full px-3">
          <img
            src={logoDark}
            alt=""
            className="cursor-pointer h-[80px]"
            onClick={() => {
              navigate("/");
            }}
          />
          <span
            onClick={() => {
              setMobileNavOpen(true);
            }}
          >
            <Hamopen className="w-7 h-7 mr-2" />
          </span>
        </section>

        <section className="absolute bg-[#fff] top-0 py-2 z-50 px-10 xl:flex hidden justify-evenly w-full text-[#604945]">
          <img
            src={logoDark}
            alt=""
            className="cursor-pointer  h-[133px]"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="flex items-center gap-8 ml-[100px]">
            <p className="uppercase cursor-pointer">
              <Link to="/">
                <Link to="/">{!lang ? "Home" : "Accueil"}</Link>
              </Link>
            </p>
            <p
              className={`${
                location.pathname === "/about"
                  ? "uppercase cursor-pointer font-bold"
                  : "uppercase cursor-pointer"
              }`}
            >
              <Link to="/about">{!lang ? "About" : "?? Propos"}</Link>
            </p>
            <p className="uppercase cursor-pointer">
              <Link to="/programs">{!lang ? "Programs" : "Programmes"}</Link>
            </p>
            <p
              className={`${
                location.pathname.includes("/articles")
                  ? "uppercase cursor-pointer font-bold"
                  : "uppercase cursor-pointer"
              }`}
            >
              <Link to={"/articles"}>
                {!lang ? "ARTICLES & RESOURCES" : "Articles et Ressources"}
              </Link>
            </p>
          </div>
          <div className="flex items-center">
            <button className="w-[156px] cursor-none"></button>
            <button className="w-[156px] cursor-none"></button>
            <div className="divide-x divide-white flex xl:ml-3 text-white">
              <p
                className={`${
                  !lang ? "font-bold mr-1  text-[#fff]" : " mr-1 "
                }`}
                onClick={() => {
                  setLang(false);
                }}
              >
                EN
              </p>
              <p
                className={`${lang ? "font-bold pl-1  text-[#fff]" : "pl-1 "}`}
                onClick={() => {
                  setLang(true);
                }}
              >
                FR
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (location.pathname === "/" || location.pathname === "/home-businesses") {
    // switch between personal and business for home
    return (
      <>
        <section className="absolute top-0 xl:hidden flex justify-between items-center bg-transparent z-50 w-full px-3 py-2">
          <img
            src={logoWhite}
            alt=""
            className=" h-[80px] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          <span
            onClick={() => {
              setMobileNavOpen(true);
            }}
          >
            <Hamopen className="w-7 h-7" />
          </span>
        </section>

        <section className="absolute bg-transparent top-4 z-50 px-10 xl:flex hidden justify-evenly w-full">
          <img
            src={logoWhite}
            alt=""
            className="cursor-pointer  h-[133px]"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="flex items-center text-white gap-8 ml-[100px]">
            <p
              className={`${
                location.pathname === "/"
                  ? "uppercase cursor-pointer font-bold"
                  : "uppercase cursor-pointer"
              }`}
            >
              <Link
                to={`${
                  location.pathname === "/programs-businesses"
                    ? "/home-businesses"
                    : "/"
                }`}
              >
                {!lang ? "Home" : "Accueil"}
              </Link>
            </p>
            <p className="uppercase cursor-pointer">
              <Link to="/about">{!lang ? "About" : "?? Propos"}</Link>
            </p>
            <p
              className={`${
                location.pathname === "/programs" ||
                location.pathname === "/programs-businesses"
                  ? "uppercase cursor-pointer font-bold"
                  : "uppercase cursor-pointer"
              }`}
            >
              <Link
                to={`${
                  location.pathname === "/home-businesses"
                    ? "/programs-businesses"
                    : "/programs"
                }`}
              >
                {!lang ? "Programs" : "Programmes"}
              </Link>
            </p>

            <p
              className={`${
                location.pathname.includes("/articles")
                  ? "uppercase cursor-pointer font-bold"
                  : "uppercase cursor-pointer"
              }`}
            >
              <Link to={"/articles"}>
                {!lang ? "ARTICLES & RESOURCES" : "Articles et Ressources"}
              </Link>
            </p>
          </div>
          <div className="flex items-center">
            <button
              className={`${
                location.pathname === "/home-businesses"
                  ? "nav-btn-active"
                  : "nav-btn-inactive"
              }`}
            >
              <Link to="/home-businesses">
                {!lang
                  ? "BUSINESSES & MANAGERS"
                  : "ENTREPRISES & GESTIONNAIRES"}
              </Link>
            </button>
            <button
              className={`${
                location.pathname === "/" || location.pathname === "/"
                  ? "nav-btn-active"
                  : "nav-btn-inactive"
              }`}
            >
              <Link to="/">
                {!lang ? "PERSONAL DEVELOPMENT" : "D??VELOPPEMENT PERSONNEL"}
              </Link>
            </button>
            <div className="text-white divide-x flex xl:ml-3">
              <p
                className={`${
                  !lang
                    ? "font-bold mr-1 cursor-pointer"
                    : " mr-1 cursor-pointer"
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
      </>
    );
  }

  // Switching between personal and business for programs
  return location.pathname === "/" ||
    location.pathname === "/programs" ||
    location.pathname === "/programs-businesses" ? (
    <>
      <section className="absolute top-0 xl:hidden flex justify-between items-center bg-transparent z-50 w-full px-3 py-2">
        <img
          src={logoWhite}
          alt=""
          className=" h-[80px] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <span
          onClick={() => {
            setMobileNavOpen(true);
          }}
        >
          <Hamopen className="w-7 h-7" />
        </span>
      </section>

      <section className="absolute bg-transparent top-4 z-50 px-10 xl:flex hidden justify-evenly w-full">
        <img
          src={logoWhite}
          alt=""
          className="cursor-pointer  h-[133px]"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="flex items-center text-white gap-8 ml-[100px]">
          <p
            className={`${
              location.pathname === "/"
                ? "uppercase cursor-pointer font-bold"
                : "uppercase cursor-pointer"
            }`}
          >
            <Link
              to={`${
                location.pathname === "/programs-businesses"
                  ? "/home-businesses"
                  : "/"
              }`}
            >
              {!lang ? "Home" : "Accueil"}
            </Link>
          </p>
          <p className="uppercase cursor-pointer">
            <Link to="/about">{!lang ? "About" : "?? Propos"}</Link>
          </p>
          <p
            className={`${
              location.pathname === "/programs" ||
              location.pathname === "/programs-businesses"
                ? "uppercase cursor-pointer font-bold"
                : "uppercase cursor-pointer"
            }`}
          >
            <Link
              to={`${
                location.pathname === "/home-businesses"
                  ? "/programs-businesses"
                  : "/programs"
              }`}
            >
              {!lang ? "Programs" : "Programmes"}
            </Link>
          </p>
          <p
            className={`${
              location.pathname.includes("/articles")
                ? "uppercase cursor-pointer font-bold"
                : "uppercase cursor-pointer"
            }`}
          >
            <Link to={"/articles"}>
              {!lang ? "ARTICLES & RESOURCES" : "Articles et Ressources"}
            </Link>
          </p>
        </div>
        <div className="flex items-center">
          <button
            className={`${
              location.pathname === "/programs-businesses"
                ? "nav-btn-active"
                : "nav-btn-inactive"
            }`}
          >
            <Link to="/programs-businesses">
              {!lang ? "BUSINESSES & MANAGERS" : "ENTREPRISES & GESTIONNAIRES"}
            </Link>
          </button>
          <button
            className={`${
              location.pathname === "/programs" || location.pathname === "/"
                ? "nav-btn-active"
                : "nav-btn-inactive"
            }`}
          >
            <Link to="/programs">
              {!lang ? "PERSONAL DEVELOPMENT" : "D??VELOPPEMENT PERSONNEL"}
            </Link>
          </button>
          <div className="text-white divide-x flex xl:ml-3">
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
    </>
  ) : (
    // For other nav white
    <>
      <section className="absolute top-4 xl:hidden flex justify-between items-center bg-transparent z-50 w-full px-3">
        <img
          src={logoWhite}
          alt=""
          className="cursor-pointer h-[80px]"
          onClick={() => {
            navigate("/");
          }}
        />
        <span
          onClick={() => {
            setMobileNavOpen(true);
          }}
        >
          <Hamopen className="w-7 h-7 mr-2" />
        </span>
      </section>

      <section className="absolute bg-transparent top-4 z-50 px-10 xl:flex hidden justify-evenly w-full text-white">
        <img
          src={logoWhite}
          alt=""
          className="cursor-pointer  h-[133px]"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="flex items-center gap-8 ml-[100px]">
          <p className="uppercase cursor-pointer">
            <Link to="/">
              <Link to="/">{!lang ? "Home" : "Accueil"}</Link>
            </Link>
          </p>
          <p
            className={`${
              location.pathname === "/about"
                ? "uppercase cursor-pointer font-bold"
                : "uppercase cursor-pointer"
            }`}
          >
            <Link to="/about">{!lang ? "About" : "?? Propos"}</Link>
          </p>
          <p className="uppercase cursor-pointer">
            <Link to="/programs">{!lang ? "Programs" : "Programmes"}</Link>
          </p>
          <p
            className={`${
              location.pathname.includes("/articles")
                ? "uppercase cursor-pointer font-bold"
                : "uppercase cursor-pointer"
            }`}
          >
            <Link to={"/articles"}>
              {!lang ? "ARTICLES & RESOURCES" : "Articles et Ressources"}
            </Link>
          </p>
        </div>
        <div className="flex items-center">
          <button className="w-[156px] cursor-none"></button>
          <button className="w-[156px] cursor-none"></button>
          <div className="text-white divide-x flex xl:ml-3">
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
    </>
  );
};

export default Navbar;
