import { Link } from "react-router-dom";
import logoFooter from "../assets/logo-footer.png";
import { ReactComponent as FacebookIcon } from "../assets/facebook-icon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-[#604945] text-white flex items-center justify-center py-6 xl:gap-[200px] xl:flex-row flex-col">
      <div>
        <img src={logoFooter} alt="" />
        <p className="mt-1">2022 . ALL RIGHT RESERVED</p>
        <div className="flex justify-between mt-4">
          <div className="text-white divide-x flex">
            <p className="font-bold mr-1 cursor-pointer">EN</p>
            <p className="pl-1 cursor-pointer">FR</p>
          </div>
          <div className="flex gap-1">
            <FacebookIcon className="cursor-pointer" />
            <LinkedinIcon className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="font-bold -ml-10 xl:ml-0 mt-6">
        <p className="cursor-pointer my-1">
          <Link>Home</Link>
        </p>
        <p className="cursor-pointer my-1">
          <Link>About</Link>
        </p>
        <p className="cursor-pointer my-1">
          <Link>Programs</Link>
        </p>
        <p className="cursor-pointer my-1">Articales & Resources</p>
        <p className="cursor-pointer my-1">Beyond Worldz Academy</p>
      </div>
    </footer>
  );
};

export default Footer;
