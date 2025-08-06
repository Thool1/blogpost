// import { useEffect, useState } from "react";
// import { Link } from "react-router";
// import defaultPlaceholder from "./assets/news-default-image@2x_0.png";
// import loadingImage from "./assets/Loading.webp";

// export default function Finance() {
//   const [financeData, setFinanceData] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://yahoo-finance166.p.rapidapi.com/api/news/list-by-symbol?s=AAPL%2CGOOGL%2CTSLA&region=US&snippetCount=500",
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key":
  //           "4e40c16f8emsh71ad07a2714c36dp141839jsn863d5d8fbfd2",
  //         "x-rapidapi-host": "yahoo-finance166.p.rapidapi.com",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const financeData = data.data.main.stream;
  //       setFinanceData(financeData);
  //     });
  // }, []);

  // if (financeData.length === 0) {
  //   return (
  //     <div
  //       style={{
  //         position: "absolute",
  //         top: "50%",
  //         left: "50%",
  //         transform: "translate(-50%,-50%)",
  //       }}
  //     >
  //       {<img src={loadingImage} />}
  //     </div>
  //   );
  // }
  // return (
  //   <div className="flex flex-wrap gap-7 justify-between">
  //     {financeData.map((data) => {
  //       const content = data.content;
  //       const imageUrl = data.content.thumbnail
  //         ? data.content.thumbnail.resolutions[0].url
  //         : defaultPlaceholder;
  //       return (
  //         <Link
  //           to={`/finance/${data.id}`}
  //           key={data.id}
  //           className="w-3xs border border-solid"
  //         >
  //           <div className="max-h-[255px]  overflow-hidden">
  //             <img className="w-full  " src={imageUrl} alt="" />
  //           </div>
  //           <div className="p-2.5">
  //             <h1>{content.title}</h1>
  //             <h5>Source Name :</h5>
  //           </div>
  //         </Link>
  //       );
  //     })}
  //   </div>
  // );
// }
