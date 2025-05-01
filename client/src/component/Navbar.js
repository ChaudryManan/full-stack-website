import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from './SearchContext';

export default function Navbar() {
  const [inputValue, setInputValue] = useState('');
  const { 
    category, 
    setcategory,  // Preserve lowercase naming
    search, 
    setSearch 
  } = useContext(SearchContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    // Use the exact setcategory name from context
    setcategory(selectedCategory);
  };

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  useEffect(() => {
    setInputValue(search);
  }, [search]);

  return (
    <div className="w-full mt-4 pb-2 custom:hidden"  >
      <div>
        <ul className="flex  sm:justify-evenly md:justify-center items-center sm:gap-3 md:gap-12 md:text-2xl">
          <li>
            <Link to="/">
              <img
                src="https://img.freepik.com/free-vector/instagram-shop-logo-design_23-2149750724.jpg?semt=ais_hybrid&w=60"
                alt="Logo"
                className="w-12"
              />
            </Link>
          </li>

          <li>
            <Link to="/home" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>

          <li>
            <select
              className="text-center outline-none px-2 py-1"
              value={category}
              onChange={handleCategory}
            >
              <option value="">Category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="children">Children</option>
            </select>
          </li>

          <li className="w-full md:w-1/3">
            <div className="flex">
              <input
                className="w-full py-1 px-2 rounded-l-2xl border border-blue-300 outline-none"
                type="text"
                placeholder="Search..."
                value={inputValue}
                onChange={handleChange}
               
              />
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded-r-2xl hover:bg-blue-600"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </li>

          <li >
            <Link to="/selling" className="hover:underline text-nowrap">Selling Account</Link>
          </li>

          <li>
            <Link to="/cart">
              <img
                className="w-10"
                src="https://cdn-icons-png.flaticon.com/128/3523/3523885.png"
                alt="Cart"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}