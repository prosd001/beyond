import { useRef, useState } from "react";
import contactLogo from "../assets/contact-me-logo.svg";
import { useRecoilState } from "recoil";
import { localizationState } from "../atoms/localizationAtom";
import { CheckIcon } from "@heroicons/react/24/solid";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../styles/slider-home.css";

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const contentStyle = {
  background: "#fff",
  borderColor: "#fff",
  width: "350px",
  padding: "10px",
};

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useRecoilState(localizationState);
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

  return lang ? (
    <div className="flex justify-center gap-10 xl:p-6 p-4 py-16 xl:flex-row flex-col xl:items-center xl:my-8">
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

      <div className="w-[500px]  md:mx-auto lg:mx-0" data-aos="fade-right">
        <img
          src={contactLogo}
          alt=""
          className="w-[220px] md:mx-auto xl:mx-0"
        />
        <h2 className="xl:text-[45px] text-[26px] font-bold capitalize mt-4 xl:leading-[50px] md:text-center lg:text-left">
          Offrez-vous une <br className="xl:hidden" /> expérience de coaching,{" "}
          <br />
          <span className="text-[#84904B]">au-delà des mots!</span>
        </h2>
      </div>
      <div
        className="flex flex-col max-w-[500px] md:mx-auto lg:mx-0"
        data-aos="fade-left"
      >
        <div>
          <p className="font-semibold text-lg mb-3">Vos Informations</p>
          <div className="flex justify-between">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="py-2 bg-[#604945] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50 w-[46%]"
            />
            <input
              ref={nameRef}
              type="text"
              placeholder="Nom"
              className="py-2 bg-[#604945] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50 w-[46%]"
            />
          </div>
        </div>
        <div>
          <p className="font-semibold text-lg mb-3 mt-2">Sujet</p>
          <input
            ref={subRef}
            type="text"
            placeholder="Insérez votre sujet"
            className="py-2 bg-[#604945] w-full border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
          />
        </div>
        <div>
          <p className="font-semibold text-lg mb-3 mt-2">Message</p>
          <textarea
            ref={msgRef}
            className="py-2 bg-[#604945] w-full min-h-[100px] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
            placeholder="Votre Message"
          />
        </div>

        {
          <button
            className="btn-gradient-bg w-full text-white font-bold py-3 mt-4"
            onClick={click}
          >
            {loading ? "Contactez moi..." : "Contactez moi"}
          </button>
        }
        {error && !success && (
          <div className="w-full text-red-500 font-bold my-2 text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex justify-center gap-10 xl:p-6 p-4 py-16 xl:flex-row flex-col xl:items-center xl:my-8">
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

      <div className="w-[500px] md:mx-auto lg:mx-0" data-aos="fade-right">
        <img
          src={contactLogo}
          alt=""
          className="w-[220px] md:mx-auto xl:mx-0"
        />
        <h2 className="xl:text-[45px] text-[26px] font-bold capitalize mt-4 xl:leading-[50px] md:text-center lg:text-left">
          Gift yourself <br className="xl:hidden" /> a coaching experience,{" "}
          <br />
          <span className="text-[#84904B]">beyond the words</span>
        </h2>
      </div>
      <div
        className="flex flex-col max-w-[500px] md:mx-auto lg:mx-0"
        data-aos="fade-left"
      >
        <div>
          <p className="font-semibold text-lg mb-3">Your Info</p>
          <div className="flex justify-between">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="py-2 bg-[#604945] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50 w-[46%]"
            />
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              className="py-2 bg-[#604945] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50 w-[46%]"
            />
          </div>
        </div>
        <div>
          <p className="font-semibold text-lg mb-3 mt-2">Subject</p>
          <input
            ref={subRef}
            type="text"
            placeholder="Insert your subject"
            className="py-2 bg-[#604945] w-full border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
          />
        </div>
        <div>
          <p className="font-semibold text-lg mb-3 mt-2">Message</p>
          <textarea
            ref={msgRef}
            className="py-2 bg-[#604945] w-full min-h-[100px] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
            placeholder="Your message"
          />
        </div>

        {
          <button
            className="btn-gradient-bg w-full text-white font-bold py-3 mt-4"
            onClick={click}
          >
            {loading ? "SENDING..." : "CONTACT ME"}
          </button>
        }
        {error && !success && (
          <div className="w-full text-red-500 font-bold my-2 text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMe;
