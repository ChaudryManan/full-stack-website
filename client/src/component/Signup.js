import React, { useState } from 'react'
import Api from './Api'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
   const [form,setform]=useState({
    email:"",
    password:"",
    firstName:"",
    lastName:""
   })
   const handleClick=()=>{
    navigate('/login');
   }
    const navigate = useNavigate();
   const handleChange=(e)=>{
   setform({...form,[e.target.name]:e.target.value})
   }
   const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const response=await Api.post("/signup",form)
      console.log("sign up successfull",response.data)
      alert("User registered successfully!");
      navigate('/')
       console.log(form)
    }
    catch(error){
console.log("user is not signed in successfully",error.message)
alert("User is not registerd successfully!");
    }
   
    }

  return (

    <div className='  flex justify-center items-center w-full h-screen bg-transparent relative
    bg-[url("https://media.istockphoto.com/id/1386446426/photo/badshahi-mosque.jpg?s=612x612&w=0&k=20&c=vShhc9rb17q_5k-tx_HJnlDvlE4YjCNNlOCEWplI2_Y=")]
    bg-center bg-cover bg-no-repeat  flex-col  '>
        <div className='absolute bg-black h-full left-0 top-0 w-full opacity-60 z-10 '></div>
    <div className="p-6 md:w-[25%] w-[90%] h-[70%] flex flex-col  justify-center gap-5   border  z-30    ">
  <form onSubmit={handleSubmit} className="space-y-4">
    
    <div className='relative'>
      <label htmlFor="firstname" className="block text-white font-medium  bg-transparent">
        First Name
      </label>
      <input
        type="text"
        id="firstname"
        name="firstName"
        placeholder="Enter First Name"
        value={form.firstName}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-3 py-2 border rounded-md outline-none  text-white bg-transparent placeholder-white"
      />
    </div>

    <div>
      <label htmlFor="lastname" className="block text-sm font-medium text-white">
        Last Name
      </label>
      <input
        type="text"
        id="lastname"
        name="lastName"
        placeholder="Enter Last Name"
        value={form.lastName}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border  rounded-md outline-none  text-white bg-transparent placeholder-white "
        required
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-white">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your Email"
        value={form.email}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border outline-none  rounded-md   text-white bg-transparent placeholder-white"
        required
      />
    </div>

    <div>
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
        className="mt-1 block w-full px-3 py-2 border rounded-md outline-none   text-white bg-transparent placeholder-white"
        required
      />
    </div>

    <button
      type="submit"
      className="w-full  text-white hover:bg-yellow-800 py-2 px-4 rounded  transition outline-none "
    >
      Submit
    </button>
  </form>
  <div className="flex justify-center">
  <button
    className="w-48 hover:bg-yellow-800 text-white py-1"
    onClick={handleClick}
  >
    Login
  </button>
</div>
</div>
</div>

  )
}
