import CoverStoryIcon from "./assets/CoverStoryIcon.svg";
import { Link } from "react-router-dom";
export default function CoverStory({ validNews }) {
  // console.log(validNews);

  return (
    <Link
      to={`/article/${validNews._id}`}
      className="relative max-w-[712px] h-[400px]  shadow-sm flex overflow-hidden  rounded-lg hover:scale-102 transition-transform duration-200 hover:shadow-xl max-[671px]:h-[300px] max-[490px]:h-[220px]"
    >
      <div className="absolute bg-[#0000004D] w-full h-full flex flex-col justify-between  rounded-lg p-4">
        <span className="">
          <img src={CoverStoryIcon} alt="CoverStoryIcon" />
        </span>
        <div>
          <h1 className="text-shadow first-cap  noto-serif text-white font-bold text-[27px]">
            {validNews.title}
          </h1>
          <h3 className="noto-sans text-[#FFFFFFCC] font-normal text-[15px]">
            {validNews.author.name}
          </h3>
        </div>
      </div>
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${validNews.image})` }}
      ></div>
    </Link>
  );
}
