import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowCaseIcon from "./assets/ShowCaseIcon.svg";
export default function ShowCase() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch("https://freshapi.up.railway.app/bestof")
    fetch("https://freshapi-udny.onrender.com/bestof")
      .then((res) => res.json())
      .then(({ data }) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className=" bg-[#f7f8fc] w-full border-t border-b border-[#d4d4d4] mt-4 mb-6">
      <div className="max-w-7xl  my-4 mx-auto ">
        <div className="pb-5">
          <img src={ShowCaseIcon} alt="" />
        </div>
        <div className=" flex justify-between border-t pt-5 border-[#d4d4d4] overflow-auto  max-[1199px]:gap-5">
          {products.length > 0
            ? products.map((product) => {
                // console.log(product.image);

                return (
                  <Link
                    to={`/article/${product._id}`}
                    key={product._id}
                    className="card max-w-[224px] max-h-[265px] bg-white rounded-lg overflow-hidden hover:-translate-y-2  duration-300 flex-shrink-0"
                  >
                    <div className="h-[140px]  w-full overflow-hidden flex justify-center items-center">
                      <img
                        className="object-cover object-center h-full w-full"
                        src={product.image}
                        // src={ShowcaseCardIcon}
                        alt=""
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm  line-clamp-5 ">
                        {product.title} Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Amet eos vitae, aliquam ab
                      </p>
                    </div>
                  </Link>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
