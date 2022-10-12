import { useRef, useState } from "react";

const WaitingList = () => {
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();

  const subscribe = async () => {
    setLoading(true);
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    if ((name, email)) {
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
    }
  };
  return (
    <div className="max-w-[1220px] flex justify-center items-center bg-[#252C08] mx-auto my-8 p-4">
      <div className="w-[90%]">
        <h2 className="font-bold xl:text-[54px]  text-[40px] mt-8 text-[#84904B] text-center">
          Join My <span className="text-[#fff]">Waiting List</span>
        </h2>
        <p className="font-bold xl:text-[20px] my-2 text-[#84904B] text-center">
          Be The First To Learn About
          <span className="text-[#fff]"> Upcoming Events</span>
        </p>
        <div className="grid grid-cols-3 gap-x-2 items-center my-8">
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
            placeholder="Name"
            className="py-2 bg-[#223F1D] border-none focus:outline-none text-white px-4 placeholder:text-white placeholder:opacity-50"
          />
          <button
            className="btn-gradient-bg w-full text-white font-bold py-2"
            onClick={subscribe}
          >
            {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitingList;
