import React from 'react';
import {Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
        
         <Link to="/">
          <button className="w-44 -mx-14z font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
      
          >
            Sign In
        </button>
          </Link> 
          
          <a className="hidden sm:flex inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
            Forgot Password?
          </a>
        </div>
        <p className="text-center text-gray-500 mt-9 text-xs">
          &copy;2020 Touseef . All rights reserved.
        </p>
      </form>
    </>
  );
}

export default SignIn;
