import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
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

const WaitingList = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [lang, setLang] = useRecoilState(localizationState);
  const [modal, setModal] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();

  const subscribe = async () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    if ((name, email)) {
      console.log(email);
      if (!validateEmail(email)) {
        setError(`${!lang ? "Not a valid email!" : "Pas un e-mail valide!"}`);
      } else {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/waitings/add-waiting`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
          }
        );

        const responseData = await response.json();
        if (responseData.success) {
          setLoading(false);
          setSuccess(true);
          nameRef.current.value = "";
          emailRef.current.value = "";
          setError("");
          setModal(true);
        }
      }
    } else {
      setLoading(false);
      setError(
        `${!lang ? "All fields are required!" : "Tous les champs sont requis!"}`
      );
    }
  };
  return (
    <div className="max-w-[1220px] flex justify-center items-center bg-[#252C08] mx-auto my-8 p-4">
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
                  ? "Thank you. You are now on my list. Stay tuned for more!"
                  : "Merci. Vous êtes maintenant ajouté à ma liste. Restez branché!"}
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

      <div className="xl:w-[90%]">
        {!lang && (
          <h2 className="font-bold xl:text-[54px]  text-[40px] mt-8 text-[#84904B] text-center">
            Join My <span className="text-[#fff]">Waiting List</span>
          </h2>
        )}
        {lang && (
          <h2 className="font-bold xl:text-[54px]  text-[40px] mt-8 text-[#84904B] text-center capitalize">
            Rejoindre ma <span className="text-[#fff]">liste d'attente</span>
          </h2>
        )}
        {!lang && (
          <p className="font-bold xl:text-[20px] my-2 text-[#84904B] text-center">
            Be The First To Learn About
            <span className="text-[#fff]"> Upcoming Events</span>
          </p>
        )}
        {lang && (
          <p className="font-bold xl:text-[20px] my-2 text-[#84904B] text-center capitalize">
            Soyez le premier informé des
            <span className="text-[#fff]"> événements à venir</span>
          </p>
        )}

        {error && !success && (
          <div className="w-full text-red-500 font-bold my-2 text-center">
            {error}
          </div>
        )}
        <div className="grid xl:grid-cols-3 gap-x-2 items-center my-8 grid-cols-1 gap-y-4">
          <input
            required
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="py-2 bg-[#223F1D] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
          />
          <input
            required
            ref={nameRef}
            type="text"
            placeholder={`${!lang ? "Name" : "Nom"}`}
            className="py-2 bg-[#223F1D] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
          />
          {
            <button
              className="btn-gradient-bg w-full text-white font-bold py-2 uppercase"
              onClick={subscribe}
            >
              {loading
                ? `${!lang ? "SUBSCRIBING..." : "s'abonner..."}`
                : `${!lang ? "SUBSCRIBE" : "s'abonner"}`}
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default WaitingList;
