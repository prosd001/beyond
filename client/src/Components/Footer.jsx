import { Link } from "react-router-dom";
import logoFooter from "../assets/logo-footer.png";
import { ReactComponent as FacebookIcon } from "../assets/facebook-icon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin-icon.svg";
import { useRecoilState } from "recoil";
import { localizationState } from "../atoms/localizationAtom";

const Footer = () => {
  const [lang, setLang] = useRecoilState(localizationState);

  return (
    <footer className="bg-[#604945] text-white flex items-center justify-center py-6 xl:gap-[200px] xl:flex-row flex-col">
      <div>
        <img src={logoFooter} alt="" className="w-[230px] h-[100px]" />
        <p className="mt-1">
          {!lang ? "2022 . ALL RIGHT RESERVED" : "2022 . TOUS DROITS RÉSERVÉS"}
        </p>
        <div className="flex justify-between mt-4">
          <div className="text-white divide-x flex">
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
          <div className="flex gap-1">
            <a
              href="https://www.facebook.com/karine.roy.7543/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/company/beyond-wordz-coaching"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="-ml-[50px] xl:ml-0 mt-6">
        <p className="cursor-pointer my-1">
          <Link to="/">{!lang ? "Home" : "Accueil"}</Link>
        </p>
        <p className="cursor-pointer my-1">
          <Link to="/about">{!lang ? "About" : "À Propos"}</Link>
        </p>
        <p className="cursor-pointer my-1">
          <Link to="/programs">{!lang ? "Programs" : "Programmes"}</Link>
        </p>
        <p className="cursor-pointer my-1">
          <Link to="/articales">
            {!lang ? "Articles & Resources" : "Articles et Ressources"}
          </Link>
        </p>
        <p className="cursor-pointer my-1">
          <a
            href="https://www.linkedin.com/company/beyond-wordz-coaching"
            target="_blank"
            rel="noopener noreferrer"
          >
            {!lang ? "Beyond Wordz Academy" : "Beyond Wordz Académie"}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
