import { useEffect, useState } from "react";
import AllStoriesIcon from "./assets/AllStoriesIcon.svg";
import loadingImage from "./assets/Loading.gif";
import CoverStory from "./CoverStory";
// import Weather from "./Weather";
import EditorsPick from "./EditorsPick";
import ShowCase from "./ShowCase";
import AllStories from "./AllStories";
import Trending from "./Trending";
import Sports from "./Sports";
import Entertainment from "./Entertainment";
import Magazine from "./Magazine";

export default function TrendingPage() {
  const [newsData, setNewsData] = useState([]);
  const [validNews, setValidNews] = useState();
  useEffect(() => {
    // fetch("https://freshapi.up.railway.app/articles")
    // fetch("https://freshapi-udny.onrender.com/entertainment")
    // fetch("https://freshapi-udny.onrender.com/editorsPick")
    fetch("https://freshapi-udny.onrender.com/trending")
      .then((res) => res.json())
      .then((data) => setNewsData(data.data));
  }, []);

  useEffect(() => {
    const filteredNews = newsData.filter((news) => {
      return news.image;
    });
    if (filteredNews.length > 0) {
      const randomNumber = Math.floor(Math.random() * filteredNews.length);
      setValidNews(filteredNews[randomNumber]);
    }
  }, [newsData]);
console.log(newsData);
  if (newsData.length === 0) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        {<img src={loadingImage} />}
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex gap-5 max-w-7xl mx-auto max-[671px]:flex-col">
        <div className="w-[730px] max-w-[730px] max-[671px]:w-full">
          {/* {validNews && <CoverStory validNews={validNews} />} */}
        </div>
        <div className="w-[524px] max-w-[524px] max-[671px]:w-full max-[671px]:max-w-full ">
          {/* {<EditorsPick />} */}
          {/* {<Weather />} */}
        </div>
      </div>
      <div>
        {/* {<ShowCase />} */}
      </div>
      <div className="max-w-7xl mx-auto  ">
        <div className="border-b border-[#d4d4d4] pb-4">
          <img src={AllStoriesIcon} alt="" />
        </div>
        <div className="flex justify-between max-w-[750px]:flex-col">
          <div className="w-[59.3%] max-[671px]:w-full">
            {<AllStories newsData={newsData} />}
          </div>
          <div className="w-[39%] max-[671px]:w-0">
           { <Trending />}
            {<Sports />}
           { <Entertainment />}
            {<Magazine />}
          </div>
        </div>
      </div>
    </div>
  );
}
