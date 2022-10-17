import { useRef, useState } from "react";

const Download = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const checkRef = useRef();

  const download = async () => {
    setLoading(true);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const check = checkRef.current.checked;

    if (check) {
      if ((name, email)) {
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
      <div className="w-[90%] max-w-[700px]">
        <h2 className="font-bold xl:text-[54px]  text-[40px] mt-8 text-[#84904B] text-center">
          Download <span className="text-[#fff]">My Guide</span>
        </h2>
        <div className="flex flex-col gap-x-2 items-center my-8 w-full">
          <input
            type="text"
            placeholder="Name"
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
            <input
              type={"checkbox"}
              className="bg-[#223F1D] checked:text-[#223F1D]"
              ref={checkRef}
            />
            <span className="text-[#9AA098] ml-2">Join my waiting list</span>
          </div>
          <button
            className="btn-gradient-bg w-full text-white font-bold py-3 max-w-[800px]"
            onClick={download}
          >
            {loading ? "PLEASE WAIT..." : "DOWNLOAD"}
          </button>
          {error && (
            <div className="w-full text-red-500 font-bold my-2 text-center">
              All fields are required!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Download;
