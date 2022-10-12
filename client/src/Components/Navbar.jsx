import { Link, useLocation } from "react-router-dom";
import logoWhite from "../assets/logo-nav-white.png";
import logoDark from "../assets/contact-me-logo.png";
import { ReactComponent as Hamopen } from "../assets/hamburger-open.svg";
import { ReactComponent as HamoClose } from "../assets/hamburger-close.svg";
import { useState } from "react";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // Instances
  const location = useLocation();

  if (mobileNavOpen) {
    return (
      <section className="absolute top-0 bg-[#05040D] z-50 w-full">
        <div className="flex justify-between px-3 py-2 items-center">
          <img src={logoWhite} alt="" className="cursor-pointer h-[80px]" />
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
          <p
            className="uppercase cursor-pointer mb-4"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link to="/articales">Articales & Resources</Link>
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
            <p className="font-bold mr-1 cursor-pointer">EN</p>
            <p className="pl-1 cursor-pointer">FR</p>
          </div>
        </div>
      </section>
    );
  }

  return location.pathname === "/" || location.pathname === "/programs" ? (
    <>
      <section className="absolute top-0 xl:hidden flex justify-between items-center bg-transparent z-50 w-full px-3 py-2">
        <img src={logoWhite} alt="" className="cursor-pointer h-[80px]" />
        <span
          onClick={() => {
            setMobileNavOpen(true);
          }}
        >
          <Hamopen className="w-7 h-7" />
        </span>
      </section>
      <section className="absolute bg-transparent top-4 z-50 px-10 xl:flex hidden justify-evenly w-full">
        <img src={logoWhite} alt="" className="cursor-pointer" />
        <div className="flex items-center text-white gap-8 ml-[100px]">
          <p className="uppercase cursor-pointer font-bold">
            <Link to="/">Home</Link>
          </p>
          <p className="uppercase cursor-pointer">
            <Link to="/about">About</Link>
          </p>
          <p className="uppercase cursor-pointer">
            <Link to="/programs">Programs</Link>
          </p>
          <p className="uppercase cursor-pointer">
            <Link to="/articales">Articales & Resources</Link>
          </p>
        </div>
        <div className="flex items-center">
          <button className="nav-btn-active">BUSINESSES & MANAGERS</button>
          <button className="nav-btn-inactive">PERSONAL DEVELOPMENT</button>
          <div className="text-white divide-x flex">
            <p className="font-bold mr-1 cursor-pointer">EN</p>
            <p className="pl-1 cursor-pointer">FR</p>
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
          <Hamopen className="w-7 h-7" />
        </span>
      </section>
      <section className="absolute bg-white top-0 z-50 px-10 xl:flex hidden justify-evenly w-full text-[#604945] py-5">
        <img src={logoDark} alt="" className="cursor-pointer" />
        <div className="flex items-center gap-8 ml-[100px]">
          <p className="uppercase cursor-pointer">
            <Link to="/">Home</Link>
          </p>
          <p className="uppercase cursor-pointer font-bold text-[#E0CF6F]">
            <Link to="/about">About</Link>
          </p>
          <p className="uppercase cursor-pointer">
            <Link to="/programs">Programs</Link>
          </p>
          <p className="uppercase cursor-pointer">
            <Link to="/articales">Articales & Resources</Link>
          </p>
        </div>
        <div className="flex items-center">
          <div className="divide-x flex divide-[#393B3F]">
            <p className="font-bold mr-1 cursor-pointer text-[#E0CF6F]">EN</p>
            <p className="pl-1 cursor-pointer">FR</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
