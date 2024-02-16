import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/actions/productActions";

const Product = () => {
  const dispatch = useDispatch();
  let { product, loading } = useSelector((state) => state.product);
  const [value, setValue]= useState(1);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id, dispatch]);


  return (
    <>
      {loading && <h1>Loading...</h1>}
      {product && (
        <div className="bg-[#fff]">
          <div className="flex p-3 gap-3 items-center sm:flex-row flex-col justify-center">
            <div className="px-5 sm:w-[50%] w-full">
              <img
                className="w-full"
                alt={product.name}
                src="https://images.unsplash.com/photo-1568176579502-3fbc3aacebaf?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="sm:w-[50%] py-2 w-full">
              <div className="font-semibold text-xl">{product.name}</div>
              <div
                style={{ borderBottom: "1px solid #333" }}
                className="font-sm pb-3 text-sm"
              >
                {product.description}{" "}
              </div>
              <div
                style={{ borderBottom: "1px solid #333" }}
                className="py-4 flex"
              >
                <span className="text-sm font-[300]">
                  {" "}
                  {`(${product.numOfReviews} reviews)`}{" "}
                </span>
              </div>

              <div className="font-bold pt-4 py-3 text-3xl">{`₹${product.price}`}</div>

              <div className="flex py-4 gap-5">
                <div className="flex items-center gap-4">
                  <button onClick={() => setValue(value-1)} className="border-1 bg-black border-black p-2 text-white">
                    -
                  </button>
                  <input
                    value={value}
                    type="submit"
                    className="border-none text-center w-[20px] bg-transparent outline-none"
                  />
                  <button onClick={() => setValue(value+1)}  className="border-1 bg-black border-black p-2 text-white">
                    +
                  </button>
                </div>
                <button className="px-7 py-2 text-sm text-white rounded-full bg-orange-700">
                  Add to cart
                </button>
              </div>
              <div
                style={{
                  borderBottom: "1px solid #333",
                  borderTop: "1px solid #333",
                }}
                className="py-3 flex"
              >
                <div className="text-lg font-[300]">Status : </div>
                <div className="text-xl text-orange-900 font-semibold">
                  {product.stock > 0 ? "InStock" : "OutOfStock"}
                </div>
              </div>
              <div className="py-4">
                <div className="font-semibold pb-1 text-xl">Discription :-</div>
                <div className="text-sm font-sm">{product.description}</div>
              </div>
              <div className="py-3">
                <button className="bg-orange-700 text-md text-white py-2 px-8 rounded-full">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="flex justify-center">
              <div
                style={{
                  borderBottom: "1px solid #444",
                  display: "inline-block",
                }}
                className="pt-8 mx-auto sm:px-8 px-5 pb-2 text-[#444] text-center text-2xl"
              >
                Reviews
              </div>
            </div>
            {<div
              style={{ overflow: "scroll", flex: "none" }}
              className="py-6 gap-3 flex flex-row px-3"
            >
              {product.reviews.map((item) => (
                <div
                  key={item._id}
                  style={{ flex: "none", alignItems: "center", border: "1px solid #555" }}
                  className="w-[300px] flex items-center flex-col py-3 border-1 border-1 border-[#111]"
                >
                  <Avatar />
                  <div className="text-md text-center pb-3 font-medium">
                    {item.name}
                  </div>

                  <div className="text-sm text-center font-sm">
                    {item.comment}
                  </div>
                </div>
              ))}
            </div>}
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
