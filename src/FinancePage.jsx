// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import loadingImage from "./assets/Loading.webp";
// import defaultPlaceholder from "./assets/news-default-image@2x_0.png";

// export default function ArticlePage() {
//   const [finance, setFinance] = useState();
//   const { id } = useParams();
//   useEffect(() => {
//     fetch(
//       "https://yahoo-finance166.p.rapidapi.com/api/news/list-by-symbol?s=AAPL%2CGOOGL%2CTSLA&region=US&snippetCount=500",
//       {
//         method: "GET",
//         headers: {
//           "x-rapidapi-key":
//             "4e40c16f8emsh71ad07a2714c36dp141839jsn863d5d8fbfd2",
//           "x-rapidapi-host": "yahoo-finance166.p.rapidapi.com",
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         const financeData = data.data.main.stream;
//         const filtered = financeData.find((data) => data.id === id);
//         setFinance(filtered);
//       });
//   }, [id]);

//   if (!finance) {
//     return (
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%,-50%)",
//         }}
//       >
//         {<img src={loadingImage} />}
//       </div>
//     );
//   } else {
//     // console.log(finance.content.clickThroughUrl);
//     // console.log(finance.content.thumbnail);
//     return (
//       <div className="w-full flex flex-wrap gap-7  align-middle justify-center   ">
//         <div className="w-3xs border border-solid p-2">
//           <h1 className="mb-5">{finance.content.title}</h1>

//           <img
//             src={
//               finance.content.thumbnail
//                 ? finance.content.thumbnail.resolutions[0].url
//                 : defaultPlaceholder
//             }
//             alt=""
//           />
//           <a
//             href={
//               finance.content.clickThroughUrl
//                 ? finance.content.clickThroughUrl.url
//                 : null
//             }
//           >
//             <p
//               className="text-center text-blue-500  mt-2"
//               title={!finance.content.clickThroughUrl ? "No info" : null}
//             >
//               Show more
//             </p>
//           </a>
//         </div>
//       </div>
//     );
//   }
// }
