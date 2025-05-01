import React, { useEffect,useState } from 'react'
import { SearchContext } from "./SearchContext";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
function Addtocart() {
 const { obj } = useContext(SearchContext);
 const {
  order,
} = useContext(SearchContext);

const navigate = useNavigate();
console.log(obj)
const handleOrderClick = (item) => {
  order(item);         // update ordereditem in context
  navigate("/order");  // go to Order page
};
  return (
    <div>
<div className='flex justify-center items-center text-3xl mt-3'>
    <h1>Items included in add to cart</h1>
</div>
    
    <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-9 p-6">
        {obj.length===0?<div ><h1>No item is included yet</h1></div> :
         
         obj.map((e) => (
           <div key={e._id} className="  border-gray-200  md:w-70 h-auto border rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow p-4 flex flex-col items-center text-center">
             <div   className="md:w-44 h-44 sm:w-40 overflow-hidden border rounded-lg ">
               <img
                 className="w-full h-full object-cover "
                 src={e.product_image}
                 alt="Shoes"
               />
             </div>

             <p className="text-gray-700 text-sm my-2 mt-4">
               {e.product_name}
             </p>

             <h2 className="text-sm text-gray-600">
               Brand: {e.product_brand}
             </h2>
             <h2 className="text-lg font-semibold text-black mb-1">
               {e.product_price + " $"}
             </h2>
             <div className=" flex  xs:flex-col xs:items-center  gap-4 mt-2  ">
             <button
                    onClick={() => handleOrderClick(e)}
                    className="bg-gray-400 p-1 rounded-md"
                  >
                    Order Now
                  </button>
               <img 
                 className="w-7 xs:w-9 hidden"
                 src="https://cdn-icons-png.flaticon.com/128/3523/3523885.png"
                 alt=""
               />
             </div>
           </div>
         ))} 
    </div>
    </div>
  )
}

export default Addtocart