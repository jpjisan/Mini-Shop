import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(ProductContext);
  let distictCategory = products?.reduce(
    (acc, curr) => [...acc, curr.category],
    []
  );
  distictCategory = [...new Set(distictCategory)];
  // console.log(distictCategory);
  let color = () => {
   return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},.5)`;
  };
  // console.log(color());

  return (
    <nav className="w-[15%] bg-zinc-200 py-15 flex flex-col items-center gap-3 h-full p-5">
      <a className="py-2 px-5 border text-blue-300 rounded  " href="/create">
        {" "}
        Add Products
      </a>
      <hr className="w-[80%] mt-2 text-blue-300 " />
      <h1 className="w-[90%] font-semibold text-lg">Categories
</h1>
      <div className="w-[90%] flex flex-col gap-2">
        {distictCategory?.map((cat, index) => (
          <Link to={`/?category=${cat}`} key={index} className="flex items-center gap-1 text-sm capitalize">
            <span
              style={{ backgroundColor: color() }}
              className="block w-[10px] h-[10px] rounded-full bg-red-200 "
            ></span>
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
