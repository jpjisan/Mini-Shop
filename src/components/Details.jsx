import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
import Loading from "./Loading";

function Details() {
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null);
  // const getSingleProduct = async () => {
  //   const { data } = await axios.get(`/products/${id}`);
  //   console.log(data);

  //   setproduct(data);
  // };

  
  useEffect(() => {
    if(!product){
     setproduct( products.filter((item)=>item.id == id)[0] )
     console.log(product);
     
    }
  }, []);
  console.log();
 
  

  return ( product? 
    <div className="flex justify-center items-center   h-screen w-[70%] m-auto">
      <div className=" h-[80%]  p-4 rounded border-zinc-100 ">
        <div className="  w-full h-full card-details  flex gap-17 items-center justify-center ">
          <img
            src={`${product.image} `}
            alt="Product"
            className="product-image rounded-lg h-full"
          />
          <div className=" flex flex-col gap-2 ">
            <h2 className="product-name text-2xl font-semibold mb-4">
              {product.title}
            </h2>
            <p className="product-price text-sm text-zinc-400 font-semibold ">
              {product.category}
            </p>
            <p className="product-price text-lg text-red-400 font-semibold">
              Price: ${product.price}
            </p>
            <p className="product-description mb-2 font-normal ">
              {product.description}
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> : <Loading/>
  );
}

export default Details;
