import React from 'react';
import "../App.css"
import image from './fiver.jpg'
import { motion, transform } from "framer-motion";
import Order from './Order';
export default function About() {
  const containerVariants={
hidden:{opacity:0},
show:{opacity:1 ,
  transition:{
    staggerChildren:0.3,
    when: "beforeChildren",
  }
}
  }
  const itemVariant={
    hidden:{y:30,opacity:0},
    show:{y:0,opacity:1,transition:{duration:0.6,ease:'easeOut'}}
  }
  return (
    <>
<div className='bg-gray-600 w-full h-[calc(100vh-4.5rem)] '>
<div className="w-full h-full
bg-[url('https://cdn.pixabay.com/photo/2023/09/11/06/03/building-8246151_1280.jpg')]
    bg-center bg-cover bg-no-repeat text-white flex justify-center items-center flex-col  relative
 ">
  <div className='absolute left-0 top-0  w-full h-full bg-black opacity-50 z-0'></div>
  <motion.div className='flex justify-center items-center flex-col '
    variants={containerVariants}
    initial="hidden"
    animate="show"
  >
   <motion.h1 variants={itemVariant} className='z-30 text-md'>Welcome To Our Company </motion.h1>
   <motion.h1 variants={itemVariant} className='text-5xl z-30 font-semibold'>Cause<span className='text-amber-500 z-30'>makers</span> </motion.h1>
   <motion.h2 variants={itemVariant} className='text-5xl z-30 font-semibold'>Game<span className='text-amber-500 z-30'>changer</span></motion.h2>
   <motion.p variants={itemVariant} className='z-30 mt-3  w-[80%] text-center'>Transforming shopping experiences into meaningful moments with products that reflect your unique style</motion.p>
   <div className='flex gap-5 z-30 text-xl mt-5'>
    <motion.button variants={itemVariant} className='border p-2 px-5 rounded-3xl bg-about text-white hover:bg-transparent'>Order Now</motion.button>
    <motion.button variants={itemVariant} className='border p-2 px-5 hover:bg-white hover:text-blue-500 rounded-3xl'>Contact Us</motion.button>
   </div>
   </motion.div>
</div>
<div className='main w-full h-[50%]  flex  justify-around flex-col md:flex-row items-center gap-4  '>
<div className='mt-14'>
 <motion.div
  className="w-48 h-48 border rounded-[50%] overflow-hidden glow-animate  bg-center bg-cover"
  whileHover={{
    rotate: 360,
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
  }}
>
  <img className="w-48 h-48 object-cover" src={image} />
</motion.div>

</div>
<div className='flex  flex-col  items-center gap-2 '>
  <h1 className='my-2 text-2xl font-semibold'> Our Main Outlets</h1>
  
<div className='grid grid-cols-2 gap-3 pb-1  '>
<div className='w-36 h-36 border rounded-xl backdrop-blur-md flex justify-center items-center  hover:scale-[1.1] 
  transition-all duration-500 ease-out   bg-about text-white  ' >Lahore</div>
<div className='w-36 h-36 border rounded-xl flex justify-center items-center hover:scale-[1.1] 
  transition-all duration-500 ease-out  bg-orange-500 text-white'>Karachi</div>
<div className='w-36 h-36 border rounded-xl flex justify-center items-center hover:scale-[1.1] 
  transition-all duration-500 ease-out  bg-orange-500 text-white'>Islamabad</div>
<div className='w-36 h-36 border rounded-xl flex justify-center items-center hover:scale-[1.1] 
  transition-all duration-500 ease-out  bg-about text-white'>Dubai</div>
</div>
</div>

</div>

</div >

    </>
  );
}
