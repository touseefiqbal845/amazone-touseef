import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cart from "./containers/Cart"; // Import the Cart component
import Notfound from "./containers/Notfound";
import SignIn from "./containers/Sign";

export default function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route exact path="/product/:productId" element={<ProductDetails />} />
          <Route exact path="/cart" element={<Cart />} /> {/* Add this route */}
          <Route path="*" element={<Notfound/>} />
          <Route path="/sign" element={<SignIn/>} />
          
        </Routes>
      </Router>
    </div>
  );
}
