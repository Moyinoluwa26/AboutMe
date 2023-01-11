import React, { useState } from 'react';

import { FaBars , FaTimes   } from "react-icons/fa";

export default function  Nav () {

  const [Nav,setNav] = useState(false);

const ChNav = () => {
    return setNav(!Nav)
}    
    const btns = [
        {id : 1,link : 'Home'},{ id: 2, link : "about"},{id: 3, link : 'portfolio'}, {id : 4 , link : 'experience'}, {id : 5, link : "Contact"}
    ]

    return (
    <div className="flex  justify-between items-center w-full h-20 text-white fixed bg-black-500 px-4">
        <div className="flex ">
            <h1 className="text-5xl font-coli"> Moyin </h1> </div>
            <ul className=" hidden md:flex md:mr-4 ">
                {btns.map(({id,link})=> {
                    return(
                    <li key={id} className= "px-4  my-auto cursor-pointer font-medium text-gray-500 hover:scale-150 duration-200">
                        {link}
                    </li>)
                } )}
            
            </ul>
            <div onClick={ChNav} className="md:hidden cursor-pointer pr-4 z-10">
              {Nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            { Nav && <ul className='md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>
             {btns.map(({id,link}) => {
                return (
                    <li key={id} className="mt-4">
                        {link}
                    </li>
                )
             })}
            </ul>}
            
        </div>
        
    )
}