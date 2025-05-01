import React, { useRef, useState, useEffect, useContext } from "react";
import Api from './Api'
import { SearchContext } from "./SearchContext";
const SellingAccount = () => {
  const [data, setData] = useState({
    product_name: "",
    product_description: "",
    product_price: "",
    product_category: "",
    product_brand:"",
    product_image: null
  });
  const {userInformation}=useContext(SearchContext)
  console.log(userInformation)
  const [productImagePreview, setProductImagePreview] = useState("");
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AR5iFpr7tkS-WPgmKJ-sh9T110WhV5k4Kg&s"
  );

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "product_image") {
      const file = files[0];
      setData({ ...data, product_image: file });
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImagePreview(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleProfileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    // Append text fields
    formData.append('product_name', data.product_name);
    formData.append('product_description', data.product_description);
    formData.append('product_price', data.product_price);
    formData.append('product_category', data.product_category);
    formData.append('product_brand', data.product_brand);
    
    // Append file separately
    if (data.product_image) {
      formData.append('product_image', data.product_image); // This must match your Multer field name
    }
  
    console.log("Submitted product:",      console.log(formData),
    {
      product_name: data.product_name,
      product_description: data.product_description,
      product_price: data.product_price,
      product_category: data.product_category,
      product_image: data.product_image ? data.product_image.name : 'No file',
      product_brand:data.product_brand
    });
  
    Api.post("/product", formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Important for file uploads
      }
    })
    .then(response => {
      alert("Form submitted successfully!");
      // Reset form
      e.target.reset();
      setData({
        product_name: "",
        product_description: "",
        product_price: "",
        product_category: "",
        product_image: null,
        product_brand:""
      });
      setProductImagePreview("");
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please check console for details.");
    });
  };

  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-50">
      <div className="w-11/12 lg:w-3/4 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 py-10">
        {/* Profile Card */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg w-72">
            <div
              className="cursor-pointer"
              onClick={handleImageClick}
              role="button"
              tabIndex={0}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-full w-32 h-32 object-cover"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleProfileSelect}
            />
            <h1 className="mt-4 text-lg font-semibold"> {userInformation?userInformation.name:"your name"}</h1>
            <h2 className="text-gray-500 text-sm">{userInformation?userInformation.email:"your email"}</h2>
          </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-10 py-8"
        >
          <h1 className="text-center text-2xl font-semibold mb-6">
            Product Upload
          </h1>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="product_name">
              Product Name
            </label>
            <input
              id="product_name"
              name="product_name"
              type="text"
              value={data.product_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="product_price">
              Product Brand
            </label>
            <input
             
              name="product_brand"
              type="text"
              value={data.product_brand}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product price"
            />
          </div>


          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="product_price">
              Product Price
            </label>
            <input
              id="product_price"
              name="product_price"
              type="text"
              value={data.product_price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product price"
            />
          </div>
        
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="product_description">
              Product Description
            </label>
            <textarea
              id="product_description"
              name="product_description"
              value={data.product_description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product description"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="category">
              Select Category
            </label>
            <select
              name="product_category"
              value={data.product_category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md outline-none"
            >
              <option value="">Choose category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="children">Children</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="image">
              Product Image
            </label>
            <input
              type="file"
              name="product_image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md outline-none"
            />
            {productImagePreview && (
              <div className="mt-4">
                <img 
                  src={productImagePreview} 
                  alt="Product preview" 
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
            >
              Submit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellingAccount;