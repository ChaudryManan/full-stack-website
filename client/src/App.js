import './App.css';
import About from './component/About';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleView = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <>
   
       {/* <div className='w-full border-b-2 mt-2  border-gray-300 '>
 
</div> */}

     <div className="App w-full  mx-auto h-[600px] mt-20">
     
      <h1 className='mb-6 text-lg font-bold'>Welcome to Easy Buy</h1> 
    
      {isVisible?(<Signup  handleClick={toggleView}/>):(<Login handleClick={toggleView}/>)}
    </div>
    </>
   
  );
}

export default App;