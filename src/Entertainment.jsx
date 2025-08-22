import EntertainmentIcon from "./assets/EntertainmentIcon.svg";
import BannerImageLayer from "./assets/Layer.png";
import { useEffect, useState } from "react";
import { Link } from "react-router";
export default function Entertainment() {
  const [data, setData] = useState([]);
  const [firstNews, setFirstNews] = useState({});
  const [remainingNews, setRemainingNews] = useState([]);
  useEffect(() => {
    // fetch("https://freshapi.up.railway.app/entertainment")
    fetch("https://freshapi-udny.onrender.com/entertainment")
      .then((res) => res.json())
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    data.filter((news, index) => {
      if (index === 0) {
        // console.log(news);
        setFirstNews(news);
      }
    });
  }, [data]);
  useEffect(() => {
    setRemainingNews(data.filter((news, index) => index !== 0 && index <= 4));
  }, [data]);

  return (
    <div className=" mt-5 bg-no-repeat rounded-lg overflow-hidden border border-[#d4d4d4] max-[670px]:border-0">
      <div
        className=" bg-cover relative"
        style={{
          backgroundImage: `url(${firstNews.image})`,
        }}
      >
        <div
          style={{ backgroundImage: `url(${BannerImageLayer})` }}
          className=" flex items-end h-[255px]  border-b border-[#d4d4d4] px-12"
        >
          <div className="absolute top-6 left-6">
            <img src={EntertainmentIcon} alt="" />
          </div>
          <Link to={`/article/${firstNews._id}`}>
            <ol className="list-decimal list-outside mb-5">
              <li className=" text-lg  font-medium">{firstNews.title}</li>
              <p className="pl-4 text-[#676767] font-sans mt-1">
                Yesterday • 05:30 pm
              </p>
            </ol>
          </Link>
        </div>
      </div>
      <div className="h-[calc(100% - 275px)]  top-[275px] ">
        <ol start="2" className="list-decimal list-outside   ">
          {remainingNews.length > 0
            ? remainingNews.map((news) => {
                // console.log(news);
                return (
                  <Link
                    to={`/article/${news._id}`}
                    key={news._id}
                    className="block border-b border-[#d4d4d4]  h-[98px] pb-[19.3px] pt-[17.3px] pr-[18.3px]  pl-[46px] last:border-b-0"
                  >
                    <li className=" pl-[18px] text-sm">{news.title}</li>
                    <span className="pl-[18px] font-sans text-sm block mt-1 text-[#757575]">
                      9 hours ago
                    </span>
                  </Link>
                );
              })
            : ""}
        </ol>

        <div className="">
          <Link 
          to={'/entertainment'}
          className="text-[#FF5722] flex items-center justify-between  font-sans pl-12 p-4 -mb-[3px]   hover:bg-[#f9fafbc2]">
            See all from Entertainment
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
