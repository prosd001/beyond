import { ReactComponent as PersonIcon } from "../assets/contact-person-icon.svg";
import { ReactComponent as MailIcon } from "../assets/contact-mail-icon.svg";
import { ReactComponent as LocationIcon } from "../assets/contact-location-icon.svg";
import { ReactComponent as FacebookIcon } from "../assets/contact-facebook.svg";
import { ReactComponent as LinkedinIcon } from "../assets/contact-linkedin.svg";
import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { localizationState } from "../atoms/localizationAtom";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const AboutContactMe = () => {
  const [loading, setLoading] = useState(false);
  const lang = useRecoilValue(localizationState);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const subRef = useRef();
  const msgRef = useRef();

  const click = async () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subRef.current.value;
    const message = msgRef.current.value;

    if ((name, email, subject, message)) {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/contacts/add-contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        }
      );

      const responseData = await response.json();
      if (responseData.success) {
        setLoading(false);
        setSuccess(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="bg-[#252C08]">
      <div className="max-w-[1400px] mx-auto py-24 xl:flex justify-around p-4">
        <div className="flex items-center" data-aos="fade-right">
          <div className="flex flex-col justify-center">
            {!lang && (
              <h3 className="font-bold xl:text-[54px] text-white text-[40px]">
                Contact <span className="text-[#84904B]">Me</span>
              </h3>
            )}
            {lang && (
              <h3 className="font-bold xl:text-[54px] text-white text-[40px]">
                Contactez <span className="text-[#84904B]">Moi</span>
              </h3>
            )}
            <div className="flex items-center justify-start gap-x-3 mt-6">
              <PersonIcon />
              <p className="text-[#9AA098]">Karine Roy</p>
            </div>
            <div className="flex items-center justify-start gap-x-3 mt-4">
              <MailIcon />
              <p className="text-[#9AA098]">beyondwordzca@gmail.com</p>
            </div>
            <div className="flex items-center justify-start gap-x-3 mt-4">
              <LocationIcon />
              <p className="text-[#9AA098]">Carignan, QC</p>
            </div>
            <div className="flex items-center justify-start gap-x-6 ml-1 mt-7">
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
        <div className="flex flex-col mt-6 xl:mt-0" data-aos="fade-left">
          <div>
            <p className="font-semibold text-lg mb-3 text-[#9AA098]">
              {!lang ? "Your Info" : "Vos Informations"}
            </p>
            <div className="grid grid-cols-2 gap-x-2">
              <input
                ref={emailRef}
                type="email"
                placeholder={`${!lang ? "Email" : "Email"}`}
                className="py-2 bg-[#223F1D] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
              />
              <input
                ref={nameRef}
                type="text"
                placeholder={`${!lang ? "Name" : "Nom"}`}
                className="py-2 bg-[#223F1D] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
              />
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg mb-3 mt-2 text-[#9AA098]">
              {!lang ? "Subject" : "Sujet"}
            </p>
            <input
              ref={subRef}
              type="text"
              placeholder={`${
                !lang ? "Insert your subject" : "Insérez votre sujet"
              }`}
              className="py-2 bg-[#223F1D] w-full border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
            />
          </div>
          <div>
            <p className="font-semibold text-lg mb-3 mt-2 text-[#9AA098]">
              {!lang ? "Message" : "Message"}
            </p>
            <textarea
              ref={msgRef}
              className="py-2 bg-[#223F1D] w-full min-h-[100px] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
              placeholder={`${!lang ? "Your message" : "Votre Message"}`}
            />
          </div>
          {success && (
            <button className="btn-gradient-bg w-full text-white font-bold py-3 mt-4">
              <CheckBadgeIcon className="h-6 w-6 mx-auto" />
            </button>
          )}
          {!success && (
            <button
              className="btn-gradient-bg w-full text-white font-bold py-3 mt-4"
              onClick={click}
            >
              {loading
                ? `${!lang ? "SENDING..." : "ENVOI EN COURS..."}`
                : `${!lang ? "SEND YOUR MESSAGE" : "ENVOYEZ VOTRE MESSAGE"}`}
            </button>
          )}
          {error && !success && (
            <div className="w-full text-red-500 font-bold my-2 text-center">
              {lang
                ? "Tous les champs sont requis!"
                : "All fields are required!"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutContactMe;
