import { ReactComponent as PersonIcon } from "../assets/contact-person-icon.svg";
import { ReactComponent as MailIcon } from "../assets/contact-mail-icon.svg";
import { ReactComponent as LocationIcon } from "../assets/contact-location-icon.svg";
import { ReactComponent as FacebookIcon } from "../assets/contact-facebook.svg";
import { ReactComponent as LinkedinIcon } from "../assets/contact-linkedin.svg";
import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { localizationState } from "../atoms/localizationAtom";
import { CheckIcon } from "@heroicons/react/24/solid";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../styles/slider-home.css";

const contentStyle = {
  background: "#fff",
  borderColor: "#fff",
  width: "350px",
  padding: "10px",
};

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const AboutContactMe = () => {
  const [loading, setLoading] = useState(false);
  const lang = useRecoilValue(localizationState);
  const [modal, setModal] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
      if (!validateEmail(email)) {
        setError(`${!lang ? "Not a valid email!" : "Pas un e-mail valide!"}`);
      } else {
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
          setModal(true);
          msgRef.current.value = "";
          nameRef.current.value = "";
          emailRef.current.value = "";
          subRef.current.value = "";
        }
      }
    } else {
      setError(
        `${!lang ? "All fields are required!" : "Tous les champs sont requis!"}`
      );
    }
  };

  return (
    <div className="bg-[#252C08]">
      <div className="max-w-[1400px] mx-auto py-24 xl:flex justify-around p-4">
        <Popup
          open={modal}
          position="right center"
          modal="true"
          {...{ contentStyle }}
        >
          {(close) => (
            <div className="bg-[#fff] relative  min-h-[250px]">
              {/* <button
              className="bg-[#e0cf6f] text-white rounded-full w-6 h-6 flex justify-center items-center text-2xl absolute right-0"
              onClick={close}
            >
              &times;
            </button> */}
              <div className="w-[85px] h-[85px] absolute rounded-full flex justify-center items-center text-white bg-[#604945] left-[38%] -top-[50px]">
                <CheckIcon className="w-10 h-10" />
              </div>

              <div className="py-[20%]">
                <h3 className="text-2xl font-bold text-center">
                  {!lang ? "Thank you!" : " Merci!"}
                </h3>
                <p className="text-center my-2">
                  {!lang
                    ? "Thank you, your message was sent!"
                    : "Merci, votre message a été envoyé!"}
                </p>
              </div>

              <div className="w-full flex justify-center absolute bottom-5">
                <button
                  className="font-bold text-sm bg-[#604945] mx-auto py-2 px-4 w-[90%] text-white"
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                >
                  {!lang ? "CLOSE" : "FERMER"}
                </button>
              </div>
            </div>
          )}
        </Popup>

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
          {
            <button
              className="btn-gradient-bg w-full text-white font-bold py-3 mt-4"
              onClick={click}
            >
              {loading
                ? `${!lang ? "SENDING..." : "ENVOI EN COURS..."}`
                : `${!lang ? "SEND YOUR MESSAGE" : "ENVOYEZ VOTRE MESSAGE"}`}
            </button>
          }
          {error && !success && (
            <div className="w-full text-red-500 font-bold my-2 text-center">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutContactMe;
