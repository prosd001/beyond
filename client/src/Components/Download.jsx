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

const Download = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [lang, setLang] = useRecoilState(localizationState);
  const [modal, setModal] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const checkRef = useRef();

  const download = async () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const check = checkRef.current.checked;

    if (check) {
      if ((name, email)) {
        setLoading(true);
        setError(false);
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
        }
      } else {
        setError(true);
      }
    }

    if ((name, email)) {
      setError(false);
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/downloads/add-downloads`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, downloaded_resources: [url] }),
        }
      );

      const responseData = await response.json();
      if (responseData.success) {
        setLoading(false);
        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
          },
        })
          .then((response) => response.blob())
          .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `Guide.pdf`);

            // Append to html link element page
            document.body.appendChild(link);

            // Start download
            link.click();
            nameRef.current.value = "";
            emailRef.current.value = "";
            setModal(true);

            // Clean up and remove the link
            link.parentNode.removeChild(link);
          });
      }
    } else {
      setError(true);
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
                  ? "Thanks for downloading my resource. Stay tuned!"
                  : "Merci d'avoir téléchargé ma ressource. Restez à l'écoute!"}
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

      <div className="w-[90%] max-w-[700px]">
        {!lang && (
          <h2 className="font-bold xl:text-[54px]  text-[40px] mt-8 text-[#84904B] text-center">
            Download <span className="text-[#fff]">My Guide</span>
          </h2>
        )}
        {lang && (
          <h2 className="font-bold xl:text-[54px]  text-[40px] mt-8 text-[#84904B] text-center">
            Télécharger <span className="text-[#fff]">Mon Guide</span>
          </h2>
        )}
        <div className="flex flex-col gap-x-2 items-center my-8 w-full">
          <input
            type="text"
            placeholder={`${!lang ? "Name" : "Nom"}`}
            className="py-3 bg-[#223F1D] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50 w-full my-4"
            ref={nameRef}
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="py-3 bg-[#223F1D] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50 w-full my-4"
          />
          <div className="mr-auto my-3">
            <input type={"checkbox"} className="checkbox" ref={checkRef} />
            {!lang && (
              <span className="text-[#9AA098] ml-2">Join my waiting list</span>
            )}
            {lang && (
              <span className="text-[#9AA098] ml-2">
                Rejoindre ma liste d'attente
              </span>
            )}
          </div>
          <button
            className="btn-gradient-bg w-full text-white font-bold py-3 max-w-[800px] uppercase"
            onClick={download}
          >
            {loading
              ? `${!lang ? "PLEASE WAIT..." : "Patientez s'il-vous-plait..."}`
              : `${!lang ? "DOWNLOAD" : "Télécharger"}`}
          </button>
          {error && (
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

export default Download;
