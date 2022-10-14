import { Link, useLocation } from "react-router-dom";
import logoWhite from "../assets/logo-nav-white.png";
import logoDark from "../assets/contact-me-logo.png";
import { ReactComponent as Hamopen } from "../assets/hamburger-open.svg";
import { ReactComponent as HamoClose } from "../assets/hamburger-close.svg";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { localizationState } from "../atoms/localizationAtom";

const Navbar = () => {
  const [lang, setLang] = useRecoilState(localizationState);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // Instances
  const location = useLocation();

  if (mobileNavOpen) {
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
            <Link to="/">Home</Link>
          </p>
          <p
            className="uppercase cursor-pointer mb-4"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/about">About</Link>
          </p>
          <p
            className="uppercase cursor-pointer mb-4"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/programs">Programs</Link>
          </p>
        </div>
        <div className="flex items-center flex-col mt-4 gap-y-3">
          <button
            className="nav-btn-active w-[80%]"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            BUSINESSES & MANAGERS
          </button>
          <button
            className="nav-btn-inactive w-[80%]"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            PERSONAL DEVELOPMENT
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

  if (location.pathname === "/" || location.pathname === "/home-businesses") {
    return (
      <>
        <section className="absolute top-0 xl:hidden flex justify-between items-center bg-transparent z-50 w-full px-3 py-2">
          <img src={logoWhite} alt="" className=" h-[80px]" />
          <span
            onClick={() => {
              setMobileNavOpen(true);
            }}
          >
            <Hamopen className="w-7 h-7" />
          </span>
        </section>
        <section className="absolute bg-transparent top-4 z-50 px-10 xl:flex hidden justify-evenly w-full">
          <img src={logoWhite} alt="" />
          <div className="flex items-center text-white gap-8 ml-[100px]">
            <p
              className={`${
                location.pathname === "/"
                  ? "uppercase cursor-pointer font-bold"
                  : "uppercase cursor-pointer"
              }`}
            >
              <Link to="/">Home</Link>
            </p>
            <p className="uppercase cursor-pointer">
              <Link to="/about">About</Link>
            </p>
            <p
              className={`${
                location.pathname === "/programs" ||
                location.pathname === "/programs-businesses"
                  ? "uppercase cursor-pointer font-bold"
                  : "uppercase cursor-pointer"
              }`}
            >
              <Link to="/programs">Programs</Link>
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
              <Link to="/home-businesses">BUSINESSES & MANAGERS</Link>
            </button>
            <button
              className={`${
                location.pathname === "/" || location.pathname === "/"
                  ? "nav-btn-active"
                  : "nav-btn-inactive"
              }`}
            >
              <Link to="/">PERSONAL DEVELOPMENT</Link>
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

  return location.pathname === "/" ||
    location.pathname === "/programs" ||
    location.pathname === "/programs-businesses" ? (
    <>
      <section className="absolute top-0 xl:hidden flex justify-between items-center bg-transparent z-50 w-full px-3 py-2">
        <img src={logoWhite} alt="" className=" h-[80px]" />
        <span
          onClick={() => {
            setMobileNavOpen(true);
          }}
        >
          <Hamopen className="w-7 h-7" />
        </span>
      </section>
      <section className="absolute bg-transparent top-4 z-50 px-10 xl:flex hidden justify-evenly w-full">
        <img src={logoWhite} alt="" />
        <div className="flex items-center text-white gap-8 ml-[100px]">
          <p
            className={`${
              location.pathname === "/"
                ? "uppercase cursor-pointer font-bold"
                : "uppercase cursor-pointer"
            }`}
          >
            <Link to="/">Home</Link>
          </p>
          <p className="uppercase cursor-pointer">
            <Link to="/about">About</Link>
          </p>
          <p
            className={`${
              location.pathname === "/programs" ||
              location.pathname === "/programs-businesses"
                ? "uppercase cursor-pointer font-bold"
                : "uppercase cursor-pointer"
            }`}
          >
            <Link to="/programs">Programs</Link>
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
            <Link to="/programs-businesses">BUSINESSES & MANAGERS</Link>
          </button>
          <button
            className={`${
              location.pathname === "/programs" || location.pathname === "/"
                ? "nav-btn-active"
                : "nav-btn-inactive"
            }`}
          >
            <Link to="/programs">PERSONAL DEVELOPMENT</Link>
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
    <>
      <section className="absolute top-0 xl:hidden flex justify-between items-center bg-transparent z-50 w-full px-3 py-2">
        <img src={logoDark} alt="" className="cursor-pointer h-[80px]" />
        <span
          onClick={() => {
            setMobileNavOpen(true);
          }}
        >
          <Hamopen className="w-7 h-7 mr-2" />
        </span>
      </section>
      <section className="absolute bg-white top-0 z-50 px-10 xl:flex hidden justify-evenly w-full text-[#604945] py-5">
        <img src={logoDark} alt="" className="cursor-pointer" />
        <div className="flex items-center gap-8 ml-[100px]">
          <p className="uppercase cursor-pointer">
            <Link to="/">Home</Link>
          </p>
          <p
            className={`${
              location.pathname === "/about"
                ? "uppercase cursor-pointer font-bold text-[#E0CF6F]"
                : "uppercase cursor-pointer"
            }`}
          >
            <Link to="/about">About</Link>
          </p>
          <p className="uppercase cursor-pointer">
            <Link to="/programs">Programs</Link>
          </p>
        </div>

        <div className="flex items-center">
          <div className="divide-x flex divide-[#393B3F]">
            <p
              className={`${
                !lang
                  ? "font-bold mr-1 cursor-pointer text-[#E0CF6F]"
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
                lang
                  ? "font-bold pl-1 cursor-pointer text-[#E0CF6F]"
                  : "pl-1 cursor-pointer"
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
