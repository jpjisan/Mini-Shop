import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Nav from "./Nav";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import { Link, useLocation } from "react-router-dom";
import axios from "../utils/axios";

function Home() {
  const [products, setProducts] = useContext(ProductContext);
  
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  console.log(category);

  const [filteredProducts, setfilteredProducts] = useState(null);
  // const getFilteredProducts = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`);
  //     setfilteredProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // console.log();

    if (!filteredProducts || category == "undefined")
      setfilteredProducts(products);
    if (category != "undefined")
      //  getFilteredProducts();
      setfilteredProducts(products.filter((item,index)=>item.category === category));
      
  }, [category, products]);

  return products ? (
    <>
      <Nav />
      <div className="hero bg-zinc-100 relative w-[85%] h-full pt-15 flex justify-center flex-wrap gap-10 overflow-y-auto">
        {category != "undefined" && (
          <div className="home absolute top-[3%] left-[5%] px-2 py-1 bg-red-400 rounded">
            {" "}
            <Link to="/" className="font-medium text-zinc-100">
              {" "}
              Home
            </Link>
          </div>
        )}
        {filteredProducts?.map((item, index) => {
          return <Card key={index} product={item} />;
        })}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
