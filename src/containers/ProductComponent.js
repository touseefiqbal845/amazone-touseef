
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';






import Header from "./Header";
const ActionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SELECTED_PRODUCTS: "SELECTED_PRODUCTS",
  REMOVE_SELECTED_PRODUCTS: "REMOVE_SELECTED_PRODUCTS",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
};


const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
const [isHovered, setIsHovered] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update the search term state
  };
 const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const filteredProducts = products.filter((product) => {
    // Filter products based on the search term
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const renderedProducts = filteredProducts.map((product) => {
    const { id, title, price, image, category } = product;
// State to track if the card is hovered

 

    return (
       
     <div
        className="max-w-sm px-9 my-4 sm:my-24 sm:mx-4 mx-auto lg:mb-10 rounded overflow-hidden shadow-lg"
        key={id}
       
      >
        <Link to={`/product/${id}`}>
          <div>

            <div className="-mx-3 w-33 text-center font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              20% off Sale!
            </div>
            <img
              src={image}
              alt="Product"
              className="ring-1 mt-4  shadow-lg rounded ring-gray-300 w-54 h-44 mx-auto object-scale-down"
              onMouseEnter={handleMouseEnter} // Add event listener for onMouseEnter
        onMouseLeave={handleMouseLeave} // Add event listener for onMouseLeave
        style={{
          // Apply scaling effect based on the isHovered state
          transform: isHovered ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.1s ease',
        }}
            />
            
          </div>
          <div className="px-3 py-3">
            <div className="font-bold text-lg mb-2"  >{title}</div>
          </div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            ${price}
          </span>
          <div>
            <h4 className="mt-1 -mx-2 text-gray font-semibold py-1 px-3 rounded">{category}</h4>
          </div>
          <div className="flex mb-5 -mx-3 w-33 text-center space-x-7 h-11 flex-row  px-4  font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div>
     
      <div className="flex items-center bg-black rounded-md border border-gray-300 p-2">
        <input
          className="flex-grow bg-black outline-none border-none px-23 w-24 mx-1 text-base font-bold text-white"
          type="text"
          placeholder="Search Your Favorite Products"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
<div className="xsm:hidden inline-block  flex-grow w-full   text-base font-bold   whitespace-nowrap mx-auto animate-marquee">
        <h1> <marquee className=" px-4 mx-40 py-1 bg-gradient-to-tr from-Yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-blue active:from-yellow-400 active:to-yellow-500 duration-200 rounded-md">PLEASE SIGN IN FIRSTLY! </marquee></h1>
   
    </div>
      
    {/* <div className=" sm:hidden inline-block  flex-grow w-full italic  text-base font-bold   whitespace-nowrap mx-auto animate-marquee">
        <h1> <marquee className="px-4 mx-40 py-1 bg-gradient-to-tr from-blue-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 rounded-md">On Above $1000 Dollor Free Delievery</marquee></h1>
    </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:mx-44 lg:mt-7">
       
        {renderedProducts}
      </div>
      
    </div>
  );
};

export default ProductComponent;
