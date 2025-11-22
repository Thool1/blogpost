import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorsPickIcon from "./assets/EditorsPick.svg";
import { formatDistanceToNow, parseISO } from "date-fns";
export default function EditorsPick() {
  const [productsList, setProducts] = useState([]);
  useEffect(() => {
    // fetch("https://freshapi.up.railway.app/editors-pick")
    fetch("https://freshapi-udny.onrender.com/editors-pick")
      .then((res) => res.json())
      .then(({ data }) => {
        setProducts(data);
      });
  }, []);

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



  function TimeAgo({ date }) {
    const timeAgo = formatDistanceToNow(parseISO(date), { addSuffix: true });

    return <span>{timeAgo}</span>;
  }

  return (
    <>
      <div className="w-full h-[400px]  max-[670px]:h-auto">
        <div className="w-full h-full border-[#D5D5D5] border max-[670px]:border-0 max-[670px]:border-t max-[670px]:rounded-t-none max-[670px]:rounded-b-none   rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4">
            <img src={EditorsPickIcon} alt="" />
            <Link className="p-1 px-3 bg-[#FFE5DB] text-[#FF5722] text-[14px] font-sans rounded-lg">
              See All
            </Link>
          </div>
          <hr className=" h-[0.5px] bg-[rgb(212,212,212)] border-none  " />
          <div className="  flex flex-col  h-[calc(100%-64px)] last:border-b-0  ">
            {productsList.length > 0
              ? productsList.map((product) => {
                  // console.log(product.image);
                  return (
                    <Link
                      to={`/article/${product._id}`}
                      key={product._id}
                      className=" hover:bg-[#f7f8fcc2] "
                    >
                      <div className="relative flex   gap-4 py-4  w-[93.6%] max-[670px]:w-auto mx-auto border-b border-[#d4d4d4]  ">
                        <div
                          className="w-[78px] h-[78px] flex-shrink-0 border 
                        border-[#d4d4d4] rounded-lg overflow-hidden flex 
                        items-center justify-center max-[670px]:w-[200px] max-[670px]:h-[200px] max-[450px]:w-[130px] max-[450px]:h-[130px] "
                        >
                          <img
                            className="w-full h-full object-cover "
                            src={product.image}
                            alt=""
                          />
                        </div>
                        <div>
                          <h1 className="text-[15px] font-medium line-clamp-2 opacity-90 leading-6 mt-[-5px] max-[670px]:text-[16px]">
                            {product.title}
                          </h1>
                          <h1 className="font-sans text-xs font-medium text-black/70 mt-0.5">
                            {formatDate(product.publishedAt)}
                          </h1>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}
