import React, { useState } from 'react';

import { FaBars , FaTimes   } from "react-icons/fa";
 import {motion} from 'framer-motion';

export default function  Nav () {

  const [Nav,setNav] = useState(false);
const ChNav = () => {
    return setNav(!Nav)
}    
    const btns = [
        {id : 1,link : '#Home',where:'Home'},{ id: 2, link : "#About",where: "About"},{id: 3, link : '#Portfolio',where: "Portfolio"}, {id : 4 , link : '#Experience',where: "Experience"}, {id : 5, link : "#Contact",where: "Contact"}
    ]

    return (
    <motion.div className="flex mx-0 justify-between items-center w-screen h-20 text-white fixed bg-gray-800 px-4"
    >
        <div className="flex ">
            <h1 className="text-5xl px-4 font-coli"> Moyin </h1> </div>
            <ul className=" hidden md:flex md:mr-4 ">
                {btns.map(({id,link,where})=> {
                    return(
                    <li key={id} className= "px-4  my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-300">
                      <a href={link} >{where}</a> 
                    </li>)
                } )}
            
            </ul>
            <div onClick={ChNav} className="md:hidden cursor-pointer text-gray-400 pr-4 z-10">
              {Nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
            </div>

            { Nav && <ul className='md:hidden flex flex-col justify-center items-center absolute top-0 left-0  w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>
             {btns.map(({id,link,where}) => {
                return (
                    <li key={id} className="mt-4 cursor-pointer text-gray-700 hover:scale-150 duration-150">
                        <a href={link} >{where}</a>
                    </li>
                )
             })}
            </ul>}
            
        </motion.div> 
        
    )
}