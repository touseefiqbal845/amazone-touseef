import React, { useState } from "react";
import { Link } from "react-router-dom";
import  logo  from "../assets/logo.png";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaShoppingCart,FaSignInAlt } from 'react-icons/fa';
import SignIn from "./Sign";



const Header = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update the search term state
  };

  return (
    <div className="navbarr flex items-center justify-between md:w-auto px-4 py-3 bg-gray-900 text-white">
  
        <Link to="/">
                     
          <div className="absolute -mt-3 headerHover">
            <img className="w-24 mt-2" src={logo} alt="logoImage" />
          </div>
         
        </Link>
  
      <nav className=" space-x-4 mx-24  flex flex-row 4 text-1xl">
       
          
       
          {/* <div className="flex-row flex  headerHover">
         <p className="   flex  mt-0 mx-1 flex-row text-xs text-lightText font-light">
              <FaMapMarkerAlt  size={20}  />
            Deliver {"to"}
            <span className="   text-sm mx-2 font-bold  text-whiteText">
          
             Pakistan  
            </span>
          </p>
          </div>
           */}
      <Link to="/" className=" flex space-x-8 text-white ">
       
        <FaMapMarkerAlt size={30} />
         Pk
        </Link>
         <div className="hidden sm:flex flex-col mx-14 items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        
          <Link to="/cart" className=" space-x-8 text-white ">
        <FaShoppingCart size={30} />
        </Link>
        
           <Link to="/sign" className=" text-white mx-4">
      <FaSignInAlt size={30}  />
         
        </Link>
       
      </nav>
      
    </div>
  );
};

export default Header;
