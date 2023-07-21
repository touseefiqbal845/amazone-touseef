import React, { useEffect } from 'react';
import axios from "axios";
import { useParams ,Link} from "react-router-dom";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productaction";
import { useDispatch, useSelector } from "react-redux";
import { BiLoaderCircle } from 'react-icons/bi';
import { addToCart } from "../redux/actions/productaction";
import Footer from "./footer";
import FreeDelivery from "./FreeDelivery";



const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };
 
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
const handleAddToCart = () => {
    // Dispatch the addToCart action with the selected product
    dispatch(addToCart(product));
  };
  return (
    <div className="grid grid gap-4 mx-auto h-screen sm:max-64-screen-sm">
  {Object.keys(product).length === 0 ? (
   <div className="text-8xl  font-bold">
          <BiLoaderCircle />
        </div>
  ) : (

    <div className="flex flex-col md:flex-row shadow-lg rounded">
        <FreeDelivery/>
      <div className="md:w-1/3 p-8 shadow-lg rounded">
        <img className="shadow-lg rounded ring-gray-900 w-full h-54 mx-auto object-scale-down" src={image} alt="Product" />
      </div>
      <div className="md:w-2/3 p-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="inline-block bg-gray-200 rounded-full px-3 py-3 text-sm font-semibold text-gray-700 mr-2">${price}</p>
       
        <h3 className="text-brown text-2xl font-bold mt-5 mb-4">{category}</h3>
        <p>{description}</p>
          <Link to="/cart">
        <button className="w-64 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
        onClick={handleAddToCart} >
          Add to Cart
        </button>

        </Link>
      </div>
    </div>
  )}
     <Footer/>
</div>
 

  );
};

export default ProductDetails;
