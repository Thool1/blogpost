import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadingImage from "./assets/Loading.gif";

export default function ArticlePage() {
  const [article, setArticle] = useState();
  const { id } = useParams();
//   console.log(article);
  useEffect(() => {
    fetch("https://freshapi.up.railway.app/articles")
      .then((res) => res.json())
      .then((news) => {
        const newsArray = Object.entries(news)[0][1];
        const foundArticle = newsArray.find((article) => article._id === id);
        setArticle(foundArticle);
      });
  }, [id]);

  if (!article) {
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
    <div className="w-full flex flex-wrap gap-7  align-middle justify-center   ">
      <div className="max-w-7xl">
        <div className="max-w-[640px] mx-auto">
          <h1
            className="text-4xl font-semibold"
            style={{ letterSpacing: "-0.03em" }}
          >
            {article.title}
          </h1>
          <h2 className="text-xl noto-sans text-[#555555] my-4">
            {article.excerpt}
          </h2>

          <div className="mb-5 mt-5 flex justify-between">
            <a href="#" className="noto-sans font-bold">
              {article.author.name}
            </a>
            <span>{article.publishedAt}</span>
          </div>
        </div>
        <img src={article.image} alt="" />
      </div>
    </div>
  );
}
