import { useRef, useState } from "react";

const Download = ({ url }) => {
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();

  const download = async () => {
    setLoading(true);
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    if ((name, email)) {
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
    }
  };

  return (
    <div className="max-w-[1220px] flex justify-center items-center bg-[#252C08] mx-auto my-8 p-4">
      <div className="w-[90%]">
        <h2 className="font-bold xl:text-[54px]  text-[40px] mt-8 text-[#84904B] text-center">
          Download <span className="text-[#fff]">My Guide</span>
        </h2>
        <div className="grid grid-cols-3 gap-x-2 items-center my-8">
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="py-2 bg-[#223F1D] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
          />
          <input
            type="text"
            placeholder="Name"
            className="py-2 bg-[#223F1D] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
            ref={nameRef}
          />
          <button
            className="btn-gradient-bg w-full text-white font-bold py-2"
            onClick={download}
          >
            {loading ? "PLEASE WAIT..." : "DOWNLOAD"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
