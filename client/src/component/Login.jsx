import React, { useContext, useState } from 'react';
import Api from './Api';
import { AuthContext } from './AuthContext';

import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const handleSignUp=()=>{
    navigate('/signup');
  }
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post('/login', form); // Assuming the backend route is '/login'
      console.log('Login successful', response.data);
      alert('Login successful!');
      login(response.data)
      navigate('/');
    
    } catch (error) {
      console.log('Login failed', error.message);
      alert('Login failed! Please check your credentials.');
    }
  };
const{login}=useContext(AuthContext)
  return (
    <div className='  flex justify-center items-center w-full h-screen bg-transparent relative
    bg-[url("https://media.istockphoto.com/id/1386446426/photo/badshahi-mosque.jpg?s=612x612&w=0&k=20&c=vShhc9rb17q_5k-tx_HJnlDvlE4YjCNNlOCEWplI2_Y=")]
    bg-center bg-cover bg-no-repeat  flex-col  '>
        <div className='absolute bg-black h-full left-0 top-0 w-full opacity-60 z-10 '></div>
    <div className="p-6  md:w-[25%] w-[90%] h-[50%] flex flex-col  justify-center md:gap-5 gap-3  border  z-30  ">
    
      <form onSubmit={handleSubmit} className="space-y-4  flex flex-col md:gap-2 -mt-6">
        <div className=''>
          <label htmlFor="email" className="block text-sm font-medium text-white ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder ="Enter your Email"
            value={form.email}
            onChange={handleChange}
            className="  placeholder-white text-white  mt-1 block w-full px-3 py-2 border outline-none rounded-md focus:border-blue-500 bg-transparent"
            required
          />
        </div>

        <div >
          <label htmlFor="password" className="block text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            value={form.password}
            onChange={handleChange}
            className="placeholder-white text-white mt-1 block w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500 bg-transparent"
            required
          />
        </div>

        <button
          type="submit" className=" w-[50%]  hover:bg-yellow-800  text-white py-2  px-4 rounded hover:bg-transparent transition outline-none ml-10 md:ml-20  "
        >
        Submit
        </button>
      </form>
      <button className='w-[50%] rounded   hover:bg-yellow-800  text-white  ml-10 md:ml-20' onClick={handleSignUp} >Sign Up</button>
    </div>
    </div>
  );
}
