// import { useEffect, useState } from "react";
// import ImagesJson from "./Images";

// export default function Weather() {
//   // const apiKey = "d0a794120b45bb9716dfdc928c6c05e3";
//   const [currentWeather, setCurrentWeather] = useState({});
//   const [currentLocation, setCurrentLocation] = useState({});
//   const [dayWiseForcast, setDayWiseForcast] = useState([]);
//   const [condition, setCondiotion] = useState();

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           // console.log(data);
//           setCurrentLocation(data.address);
//         });
//     });
//   }, []);
//   // useEffect(() => {
//   //   if (currentLocation.city) {
//   //     fetch(
//   //       // `https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=${apiKey}&units=metric`
//   //       // `https://wttr.in/${currentLocation.city}?format=j1`
//   //       // `https://wttr.in/Wardha?format=j1`
//   //     )
//   //       .then((res) => res.json())
//   //       .then((data) => {
//   //         const condition = data.current_condition[0].weatherDesc[0].value;
//   //         setCondiotion(condition);
//   //         // console.log(data.nearest_area[0].areaName[0].value);
//   //         setCurrentWeather(data);
//   //       });
//   //   }
//   // }, [currentLocation.city]);

//   useEffect(() => {
//     if (currentWeather.weather) {
//       return setDayWiseForcast(currentWeather.weather);
//     }
//   }, [currentWeather.weather]);

//   const imagePath = condition && ImagesJson[condition];
//   return (
//     <div className="shadow-2xl w-90 p-5 rounded-3xl sticky h-[500px]  top-5 self-start">
//       <div className="flex justify-between">
//         <p className="flex items-center">
//           <span className="h-5 w-2 bg-amber-700 inline-block mr-3 rounded-[2px]"></span>
//           Weather
//         </p>
//         <h1 className="flex items-center">
//           {currentWeather.nearest_area
//             ? currentWeather.nearest_area[0].areaName[0].value
//             : null}
//           <span className="material-symbols-outlined">location_on</span>
//         </h1>
//       </div>

//       {<img src={imagePath} alt={condition} />}
//       <div className="flex justify-between">
//         <h1>{currentWeather.current_condition ? condition : null}</h1>
//         <h1>
//           {currentWeather.current_condition
//             ? `Temp : ${currentWeather.current_condition[0].temp_C} °C`
//             : null}
//         </h1>
//       </div>
//       {dayWiseForcast.map((day) => {
//         console.log(day);
//         return (
//           <div key={day.date}>
//             <hr />
//             <h1>Date :{day.date}</h1>
//             <div className="flex justify-between">
//               <h1>Max Temp :{day.maxtempC}</h1>
//               <h1>Min Temp :{day.mintempC}</h1>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
