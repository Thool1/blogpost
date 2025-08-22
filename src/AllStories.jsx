
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Trending from "./Trending";
import Sports from "./Sports";
import Entertainment from "./Entertainment";
import Magazine from "./Magazine";
export default function AllStories({ newsData }) {
  const [windowWidth, setWidnowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidnowWidth(window.innerWidth);
      // console.log(window.innerWidth <= 470 ? "470" : "!470");
    };
    window.addEventListener("resize", handleResize);
    return window.addEventListener("resize", handleResize);
  });

  // debugger;
  return (
    <div>
      {newsData.map((news, index) => {
        // console.log(news)
        if (windowWidth <= 671) {
          if (index === 3) {
            return <Trending key={news._id} />;
          }
          if (index === 7) {
            return <Sports key={news._id} />;
          }

          if (index === 11) {
            return <Entertainment key={news._id} />;
          }

          if (index === 15) {
            return <Magazine key={news._id} />;
          }
          return (
            <Link
              to={`/article/${news._id}`}
              key={news._id}
              className="flex border-b py-5 border-[#d4d4d4]"
            >
              <div className="h-[200px] w-[200px] rounded-lg mr-4 flex-shrink-0  overflow-hidden flex justify-center items-center  max-[450px]:w-[130px] max-[450px]:h-[130px]">
                <img
                  className="w-full h-full object-cover bg-center"
                  src={news.image || " "}
                  alt="Banner"
                />
              </div>
              <div className="">
                <h1 className="text-lg max-[670px]:text-base">{news.title}</h1>
                <h5 className="max-[670px]:mt-2 mt-4 font-sans text-[rgba(0,0,0,0.6)] text-xs font-medium">
                  {news.author.name}
                </h5>
              </div>
            </Link>
          );
        } else {
          return (
            <Link
              to={`/article/${news._id}`}
              key={news._id}
              className="flex border-b py-5 border-[#d4d4d4]"
            >
              <div className="h-[200px] w-[200px] rounded-lg mr-4 flex-shrink-0  overflow-hidden flex justify-center items-center  max-[450px]:w-[130px] max-[450px]:h-[130px]">
                <img
                  className="w-full h-full object-cover bg-center"
                  src={news.image || " "}
                  alt="Banner"
                />
              </div>
              <div className="">
                <h1 className="text-lg">{news.title}</h1>
                <h5 className="mt-4 line-clamp-2 text-[15px] text-[#000000b3]">
                  {news.content}
                </h5>
                <h5 className="mt-4 font-sans text-[rgba(0,0,0,0.6)] text-xs font-medium">
                  {console.log(news.author.name)}
                  {/* {news.author.name} */}
                </h5>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
}
