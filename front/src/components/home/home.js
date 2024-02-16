import ProductCard from "./product";
import { useEffect } from "react";
//import axios from 'axios'
import {getAllProducts} from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.allProducts);

  const dome = () => {
    console.log(products);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <div
        style={{
          transition: "all 0.5",
          background: " repeating-linear-gradient(#0A4296, #0E5ACB, #fff)",
        }}
        className="flex min-h-[500px] py-20 items-center justify-evenly flex-col"
      >
        <div className="text-md font-md text-[#aaa]">Welcome to Ecommerce</div>
        <div className="text-lg font-lg text-white">
          FIND AMAZING PRODUCTS BELOW
        </div>
        <button
          onClick={() => dome()}
          style={{ border: "1px solid white" }}
          className="bordar-[#fff] m-2 px-5 py-3 hover:bg-[#fff] hover:text-blue-500 text-white text-sm"
        >
          Scroll
        </button>
      </div>
      <div className="py-3 text-lg font-bold bg-white text-black text-center">
        Featured Products
      </div>
      <div className="flex flex-wrap justify-evenly">
        {products &&
          products.map((item) => <ProductCard key={item._id} product={item} />)}

        {products &&
          products.map((item) => <ProductCard key={item._id} product={item} />)}
      </div>
    </>
  );
};

export default Home;
