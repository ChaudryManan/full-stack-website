// Home.jsx
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./SearchContext";

export default function Home() {
  const {
    product,
    searchmatch,
    category,
    mencategory,
    womenscategory,
    childrendata,
    addtocart,
    order,
  } = useContext(SearchContext);

  const navigate = useNavigate();

  // Determine which list to show
  let itemsToShow;
  if (searchmatch.length > 0) {
    itemsToShow = searchmatch;
  } else if (category === "men") {
    itemsToShow = mencategory;
  } else if (category === "women") {
    itemsToShow = womenscategory;
  } else if (category === "children") {
    itemsToShow = childrendata;
  } else {
    itemsToShow = product;
  }

  // Handler for ordering (sets context + routes)
  const handleOrderClick = (item) => {
    order(item);         // update ordereditem in context
    navigate("/order");  // go to Order page
  };

  // Handler for cart (only updates context)
  const handleAddToCart = (item) => {
    addtocart(item);
    alert("Item added to cart");
  };

  return (
    <div className="w-full flex justify-center flex-col items-center mt-5">
      <div className="bg-primary w-full h-78 border">
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="new-cui-img-wxWpA"
          src="https://aimg.kwcdn.com/cart/201a0dab5e3/06bf771a-9f3e-44fb-99a4-6e44b8c6ec3d.jpeg?imageView2/q/100!/format/webp"
          alt="Banner"
        />
      </div>

      <div className="w-11/12">
        <div className="flex justify-center items-center my-3">
          <h1 className="text-3xl font-semibold">Explore</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {itemsToShow.length > 0 ? (
            itemsToShow.map((e) => (
              <div
                key={e._id}
                className="border-gray-200 md:w-70 h-auto border rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow p-4 flex flex-col items-center text-center"
              >
                <div className="md:w-44 h-44 sm:w-40 overflow-hidden border rounded-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={e.product_image}
                    alt={e.product_name}
                  />
                </div>

                <p className="text-gray-700 text-sm my-2 mt-4">
                  {e.product_name}
                </p>
                <h2 className="text-sm text-gray-600">
                  Brand: {e.product_brand}
                </h2>
                <h2 className="text-lg font-semibold text-black mb-1">
                  {e.product_price} $
                </h2>

                <div className="flex lg:flex-row flex-col md:flex-col xs:items-center gap-4 mt-2">
                  <button
                    onClick={() => handleOrderClick(e)}
                    className="bg-gray-400 p-1 rounded-md"
                  >
                    Order Now
                  </button>

                  <button
                    onClick={() => handleAddToCart(e)}
                    className="bg-green-500 p-1 rounded-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
