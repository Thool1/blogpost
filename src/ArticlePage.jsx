import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadingImage from "./assets/Loading.gif";

export default function ArticlePage() {
  const [article, setArticle] = useState();
  const { id } = useParams();
  //   console.log(article);
  useEffect(() => {
    // fetch("https://freshapi.up.railway.app/articles")
    fetch("https://freshapi-udny.onrender.com/articles")
      .then((res) => res.json())
      .then((news) => {
        const newsArray = Object.entries(news)[0][1];
        const foundArticle = newsArray.find((article) => article._id === id);
        setArticle(foundArticle);
      });
  }, [id]);

  
    // i dont know how to do this
  function toIST(dateString) {
    const date = new Date(dateString);
    return new Date(date.getTime() + (5.5 * 60 * 60 * 1000));
  }


  function formatDate(dateString) {
  const istDate = toIST(dateString);

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const target = new Date(
    istDate.getFullYear(),
    istDate.getMonth(),
    istDate.getDate()
  );

  // If today
  if (target.getTime() === today.getTime()) {
    return `Today · ${istDate.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })}`;
  }

  // If yesterday
  if (target.getTime() === yesterday.getTime()) {
    return `Yesterday · ${istDate.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })}`;
  }

  // Otherwise: 21 Nov 2025 · 05:30 am
  return `${istDate.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })} · ${istDate.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })}`;
}


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
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        </div>

        <img className="block mx-auto" src={article.image} alt="" />

        <div className="max-w-[640px] mx-auto mt-4">
          {/* {console.log(article.bollywood.title)} */}
          
          {article.bollywood.isBollywood? (
            <>
              <div className="text-lg">
                {/* {article.bollywood.title != null ? ( */}
                  <p className="noto-sans">
                    Movie Name : {article.bollywood.title}
                  </p>
                {/* ) : ( */}
                  {/* "" */}
                {/* )} */}
                {article.bollywood.title != null ? (
                  <p className="noto-sans">
                    Language : {article.bollywood.language}
                  </p>
                ) : (
                  ""
                )}
                {article.bollywood.title != null ? (
                  <p className="noto-sans">
                    Release Date : {article.bollywood.releaseDate}
                  </p>
                ) : (
                  ""
                )}
                {article.bollywood.title != null ? (
                  <p className="noto-sans">Cast : {article.bollywood.cast}</p>
                ) : (
                  ""
                )}
                {article.bollywood.title != null ? (
                  <p className="noto-sans">
                    Director : {article.bollywood.director}
                  </p>
                ) : (
                  ""
                )}
                {article.bollywood.title != null ? (
                  <p className="noto-sans">Genre : {article.bollywood.genre}</p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <h2 className="text-xl noto-sans text-[#555555] my-4">
                  Plot Summary
                </h2>
                <h3 className="text-lg">
                  {article.bollywood.plotSummary != null ? (
                    <p className="noto-sans">
                      {" "}
                      {article.bollywood.plotSummary}
                    </p>
                  ) : (
                    ""
                  )}
                </h3>
              </div>
              <div>
                <h2 className="text-xl noto-sans text-[#555555] my-4">
                  What Works
                </h2>
                <h3 className="text-lg">
                  {article.bollywood.whatWorks != null ? (
                    <p className="noto-sans"> {article.bollywood.whatWorks}</p>
                  ) : (
                    ""
                  )}
                </h3>
              </div>
              <div>
                <h2 className="text-xl noto-sans text-[#555555] my-4">
                  What Doesn’t Work
                </h2>
                <h3 className="text-lg">
                  {article.bollywood.whatDoesntWork != null ? (
                    <p className="noto-sans">
                      {" "}
                      {article.bollywood.whatDoesntWork}
                    </p>
                  ) : (
                    ""
                  )}
                </h3>
              </div>
              <div>
                <h2 className="text-xl noto-sans text-[#555555] my-4">
                  Final Verdict
                </h2>
                <h3 className="text-lg">
                  {article.bollywood.finalVerdict != null ? (
                    <p className="noto-sans">
                      {" "}
                      {article.bollywood.finalVerdict}
                    </p>
                  ) : (
                    ""
                  )}
                </h3>
              </div>
              <div>
                <h2 className="text-xl noto-sans text-[#555555] my-4">
                  Box Office Collection
                </h2>
                <h3 className="text-lg">
                  {article.bollywood.boxOffice != null ? (
                    <p className="noto-sans">
                      {" "}
                      Budget : {article.bollywood.boxOffice.budget}
                    </p>
                  ) : (
                    ""
                  )}

                  {article.bollywood.boxOffice != null ? (
                    <p className="noto-sans">
                      Collection Day Wise :
                      {article.bollywood.boxOffice.dailyCollection.map(
                        (day) => {
                          // console.log(day);
                          return (
                            <span className="block" key={day._id}>
                              {day.day}
                              {day.collection}
                            </span>
                          );
                        }
                      )}
                    </p>
                  ) : (
                    ""
                  )}
                </h3>
              </div>
            </>
          ) : (
            <div>{article.content}</div>
          )}
        </div>
      </div>
    </div>
  );
}
