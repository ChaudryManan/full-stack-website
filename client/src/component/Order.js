import React, { useState, useContext } from "react";
import { SearchContext } from "./SearchContext";
import Api from "./Api.js";

function Order() {
  const [count, setCount] = useState(1);
  const { ordereditem } = useContext(SearchContext);
  const [formData, setFormData] = useState({
    postal_address: "",
    phone_number: "",
    product_description: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleNegative = () => {
    setCount((prev) => Math.max(prev - 1, 1));
  };
  const handlePositive = () => {
    setCount((prev) => prev + 1);
  };
  const handleOrderToggle = () => {
    setShowForm((prev) => !prev);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("postal_address", formData.postal_address);
    form.append("phone_number", formData.phone_number);
    form.append("product_id", ordereditem._id);
    form.append("quantity", count);
    form.append("total_price", ordereditem.product_price * count);
    form.append("product_description", formData.product_description);

    try {
      await Api.post("/order", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("Order successful");
    } catch (error) {
      console.error("Order failed:", error);
    }
  };

  if (!ordereditem) {
    return <div>No item selected.</div>;
  }
  const price = ordereditem.product_price * count;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        {/* Image */}
        <div className="h-64 md:h-auto md:w-1/2">
          <img
            src={ordereditem.product_image}
            alt={ordereditem.product_name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              {ordereditem.product_name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="text-lg font-semibold">Price: {price}</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleNegative}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  onClick={handlePositive}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">Description</h2>
              <p className="text-sm text-gray-600 leading-relaxed border p-3 rounded">
                {ordereditem.product_description}
              </p>
            </div>
          </div>

          <button
            onClick={handleOrderToggle}
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            {showForm ? "Cancel" : "Order Now"}
          </button>
        </div>
      </div>

      {/* ORDER FORM: hidden/shown via React state, works at every width */}
      {showForm && (
        <form
          className="bg-white px-10 py-5 rounded-lg shadow-md w-full max-w-4xl mt-6"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-2xl font-semibold mb-6">
            Enter your address
          </h1>

          <div className="mb-4">
            <label
              htmlFor="postal_address"
              className="block text-lg font-medium mb-2"
            >
              Postal Address
            </label>
            <input
              id="postal_address"
              name="postal_address"
              value={formData.postal_address}
              onChange={handleChange}
              type="text"
              placeholder="Enter your postal address"
              required
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone_number"
              className="block text-lg font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              type="text"
              placeholder="Enter your phone number"
              required
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="product_description"
              className="block text-lg font-medium mb-2"
            >
              Important Message
            </label>
            <textarea
              id="product_description"
              name="product_description"
              value={formData.product_description}
              onChange={handleChange}
              placeholder="Enter message"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Order;
