import React from 'react'
import { Link } from "react-router-dom";



const Notfound = () => {
  return (
    <div>
        <div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center items-center gap-4 py-44"
        >
      
    <div className="w-96 p-4 bg-white flex items flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
           Error!!
            </h1>
            <p className="text-sm text-center">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg">
              404 Not Found
              </button>
            </Link>
          </div>
          </div>
              </div>
  )
}

export default Notfound