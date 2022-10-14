import { useRef, useState } from "react";
import contactLogo from "../assets/contact-me-logo.png";
import { useRecoilState } from "recoil";
import { localizationState } from "../atoms/localizationAtom";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useRecoilState(localizationState);

  const nameRef = useRef();
  const emailRef = useRef();
  const subRef = useRef();
  const msgRef = useRef();

  const click = async () => {
    setLoading(true);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subRef.current.value;
    const message = msgRef.current.value;

    if ((name, email)) {
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
      }
    }
  };

  return lang ? (
    <div className="flex justify-center gap-10 xl:p-6 p-4 py-16 xl:flex-row flex-col xl:items-center xl:my-8">
      <div className="w-[500px]" data-aos="fade-right">
        <img src={contactLogo} alt="" />
        <h2 className="xl:text-[45px] text-[26px] font-bold capitalize mt-4 xl:leading-[50px]">
          Offrez-vous une <br className="xl:hidden" /> expérience de coaching,{" "}
          <br />
          <span className="text-[#84904B]">au-delà des mots!</span>
        </h2>
      </div>
      <div className="flex flex-col max-w-[500px]" data-aos="fade-left">
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
        <button
          className="btn-gradient-bg w-full text-white font-bold py-3 mt-4"
          data-aos="fade-up"
          onClick={click}
        >
          {loading ? "Contactez moi..." : "Contactez moi"}
        </button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center gap-10 xl:p-6 p-4 py-16 xl:flex-row flex-col xl:items-center xl:my-8">
      <div className="w-[500px]" data-aos="fade-right">
        <img src={contactLogo} alt="" />
        <h2 className="xl:text-[45px] text-[26px] font-bold capitalize mt-4 xl:leading-[50px]">
          Gift yourself <br className="xl:hidden" /> a coaching experience,{" "}
          <br />
          <span className="text-[#84904B]">beyond the words</span>
        </h2>
      </div>
      <div className="flex flex-col max-w-[500px]" data-aos="fade-left">
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
        <button
          className="btn-gradient-bg w-full text-white font-bold py-3 mt-4"
          data-aos="fade-up"
          onClick={click}
        >
          {loading ? "SENDING..." : "CONTACT ME"}
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
