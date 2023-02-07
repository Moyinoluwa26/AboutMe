import React, {} from 'react';
import { SlArrowRightCircle } from 'react-icons/sl';
import myprofile from './myprofile.JPG';


export default  function Home  ()  {
    
    return ( <div id="Home" 
        name="home"
    className='text-lg text-white  w-screen h-full bg-gradient-to-b from-black to-gray-500 '>
        <div className='max-w-screen-lg  mx-auto h-full w-full   flex flex-col-reverse  items-center justify-center  px-4 md:flex-row'>
            <div className=' md:w-2/3 mt-24 mx-auto justify-center '>
                <h1>Hi! my name is Oyejide Moyinoluwa</h1>
                <h2 className="text-2xl md:text-4xl text-white font-bold  ">I'm a Front-End Developer </h2>
                <p className='text-gray-300'>I will develop a user friendly interface for your business</p>
             
               <div>
         <button className='mx-auto group text-white hover:scale-75 duration-200 w-fit sm:ml-0 px-4 py-3 my-5  flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
         cursor-pointer'>
            Portfolio
            <span className='mx-2 group-hover:scale-150 group-hover:mx-4 group-hover:rotate-90 duration-200'> 
            <SlArrowRightCircle className=''/>
            </span>
         </button >
                 </div>
            </div>
            <div className='md:w-1/3 mt-32'>
                <img src={myprofile} alt="my profile"  className='rounded-2xl mx-auto md:h-80 h-64 w-75 object-scale-down'/>
            </div>
        </div>
        
        </div> );
}
 


