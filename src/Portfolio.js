import React from 'react';
import myprofil1 from "./IMG_1018.JPG";
import myprofil3 from "./IMG_4096.PNG";
import myprofil2 from "./IMG_3362.JPG";
import myprofil4 from "./IMG_2820.JPG";
const Portfolio = () => {
    const ports = [
        {id: 1, source : myprofil1,},
        {id: 2, source : myprofil2,},
        {id: 3, source : myprofil3,},
        {id: 4, source : myprofil4,},
        
    ]
    return ( <div name = "portfolio" className="pt-10 bg-gradient-to-b from-black to-gray-500 w-screen oversroll-none text-white md:h-full">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 ' >Portfolio</p>
                <p className='py-6'>Check out some of my previous projects</p>
            </div>
            
            <div className='pt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {ports.map(({id,source})=> {
                return (
                
                <div key={id} className='hover:scale-105 duration-300 shadow-md shadow-gray-600 rounded-lg'>
                    <img src={source} alt='' className=' rounded-md w-full h-4/5 object-fill hover:scale-120 duration-200'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-150'>In</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-150'>Out</button>                
                    </div>
                </div>)})}
            </div>
        </div>
    </div> );
}
 
export default Portfolio;