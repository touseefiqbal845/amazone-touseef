import React,{useEffect} from 'react';
import axios from "axios";
import ProductComponent from "./ProductComponent";
import {setProducts} from "../redux/actions/productaction";
import {useDispatch,useSelector } from "react-redux";
import Footer from "./footer";
import Header from "./Header";
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

const ProductListing = () => {
    const products =  useSelector((state) => state);
     const dispatch = useDispatch(); 
    const fetchProducts = async () =>{
        const response =await axios.get('https://fakestoreapi.com/products?limit=12')
        .catch((err)=>{
            console.log("Err",err)
        });
        dispatch(setProducts(response.data));
        
        
    };
    useEffect(() => {
  fetchProducts();
}, [])

    console.log(products);
  return (
<div>

        <ProductComponent/>
        <Footer/>
    
</div>
  )
}

export default ProductListing