import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { format } from "date-fns";
import Footer from "../Components/Footer";
import Download from "../Components/Download";
import WaitingList from "../Components/WaitingList";

const ArticalesDetails = () => {
  const [articale, setArticale] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Instaces
  const params = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/articale/${params.slug}`)
      .then((response) => response.json())
      .then((data) => {
        setArticale(data.articale[0]);
        setContent(data.content[0]);
        setLoading(false);
      });
  }, [params.slug]);

  return (
    <>
      <section className="xl:mt-[180px] mt-[120px]">
        {loading && (
          <div className="flex w-full justify-center items-center mt-[20%]">
            <div aria-label="Loading..." role="status">
              <svg
                class="h-16 w-16 animate-spin stroke-[#84904B]"
                viewBox="0 0 256 256"
              >
                <line
                  x1="128"
                  y1="32"
                  x2="128"
                  y2="64"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="195.9"
                  y1="60.1"
                  x2="173.3"
                  y2="82.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="224"
                  y1="128"
                  x2="192"
                  y2="128"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="195.9"
                  y1="195.9"
                  x2="173.3"
                  y2="173.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="128"
                  y1="224"
                  x2="128"
                  y2="192"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="60.1"
                  y1="195.9"
                  x2="82.7"
                  y2="173.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="32"
                  y1="128"
                  x2="64"
                  y2="128"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <line
                  x1="60.1"
                  y1="60.1"
                  x2="82.7"
                  y2="82.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
              </svg>
              {/* <span class="text-2xl font-bold text-[#84904B]">Loading...</span> */}
            </div>
          </div>
        )}
        {!loading && (
          <div>
            <div className="bg-[#F2F4F5] max-w-[1300px] flex mx-auto p-10 gap-x-8 flex-col xl:flex-row">
              <img
                src={articale.banner_url}
                alt=""
                className="xl:w-[60%] w-full object-cover"
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#9AA098] tracking-[6px] mt-2">
                  {articale.type === "Resource" ? "GUIDE RESOURCE" : "ARTICLE"}
                </p>
                <h2 className="xl:text-[40px] leading-[45px] xl:my-4 text-[30px] my-3">
                  {articale.title}
                </h2>
                <p className="text-[#393B3F] xl:text-xl text-lg">
                  {format(new Date(articale.updatedAt), "MMMM dd, yyyy")}
                </p>
              </div>
            </div>

            <div className="blog max-w-[1100px] mx-auto mt-6 p-4">
              {parse(content.content)}
            </div>

            {articale.type === "Resource" ? (
              <Download url={articale.guide_url} />
            ) : (
              <WaitingList />
            )}
          </div>
        )}
      </section>
      {!loading && <Footer />}
    </>
  );
};

export default ArticalesDetails;
