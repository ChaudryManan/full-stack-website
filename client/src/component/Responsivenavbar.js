import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from './SearchContext';

function Responsivenavbar() {
  const [inputValue, setInputValue] = useState('');
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const { 
    category, 
    setcategory,
    search, 
    setSearch 
  } = useContext(SearchContext);

  const handleClick = () => {
    setShow(prev => !prev);
  };

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    setcategory(selectedCategory);
  };

  return (
    <div className='w-full relative responsive:hidden'>
      <div className='pt-4 md:px-7'>
        <ul className='flex items-center justify-between'>
          <li>
            <Link to="/" onClick={handleClick}>
              <img
                src="https://static.thenounproject.com/png/48216-200.png"
                alt="Logo"
                className="w-16"
              />
            </Link>
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
                className="bg-blue-500 text-white px-1 md:px-4 py-1 rounded-r-2xl hover:bg-blue-600"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
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
        </ul>
      </div>

      <div
        className='absolute top-17 bg-sky-500/20 backdrop-blur-lg rounded-lg text-blue-600 z-50'
        style={{ display: show ? 'block' : 'none' }}
      >
        <ul className='flex flex-col gap-3 items-center'>
          <li onClick={handleClick}>
            <Link to="/home" className="hover:underline">Home</Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/selling" className="hover:underline">Selling Account</Link>
          </li>
          <li onClick={handleClick}>
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
  )
}

export default Responsivenavbar;
