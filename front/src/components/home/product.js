import ReactStar from "react-rating-stars-component";
//import "./home.css"
import {Link} from "react-router-dom"

const ProductCard = ({ product }) => {

  const options = {
    value: product.ratings,
    isHalf: true,
    edit: false,
    size: 17,
    activeColor: "#f7b733",
  };

  return (
    <Link to={`/product/${product._id}`}>
      <div className="product-card rounded border-1 min-w-[120px] max-w-[200px] overflow-hidden m-3 border-[#111]">
        <img src="https://plus.unsplash.com/premium_photo-1702910931271-2ed8ef023fd0?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt={product.name} style={{width: "100%",overflow: "hidden", height: "65%"}} />
        <div className="mx-2 p-1">
        <h1 className="font-semibold">{product.name}</h1>
        <div className="flex gap-2">
          <ReactStar {...options} />
          <span className="text-stone-600 text-sm font-sm">({product.numOfReviews} reviews)</span>
        </div>
        <div className="text-red-500">₹{product.price}</div>
      </div>
        </div>
    </Link>
  );
};

export default ProductCard;
