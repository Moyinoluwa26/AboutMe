import React from 'react';
import Html from "./html.logo.png";
import Css  from "./css-logo.png";
import Java from "./JavaScript-logo.png";
import Boot from "./Bootstrap_logo.png";
import Tail from "./tailwindcss.logo.png";
import ReactIm from "./Loggy.png";
import ReduxIm   from "./Redux.logo.png";
import GithubIm from "./github.png";


const Experience = () => {
    const Exp = [
        {id:1, src : Html},
        {id:2 , src:Css},
        {id:3, src:Java},
        {id:4, src:Boot},
        {id:5, src:Tail},
        {id:6, src:ReactIm, style:"hover:scale-150 duration-300 h-30"},
        {id:7,src:ReduxIm},
        {id:8,src:GithubIm} 
    ]
    return (<div name="experience"  className='bg-gradient-to-b from-gray-500 to-black w-full h-screen'>
<div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div>
        <p className='p-2 inline text-4xl font-bold border-b-4 border-gray-500'>Experience</p>
        <p className='py-8'>These are the Technologies I have worked with : </p>
    </div>
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8  text-center py-8 px-12 sm:px-0 '>
        {Exp.map(({id,src, style}) =>{
            return (
        <div key={id} className='shadow-md hover:scale-110 duration-300 py-2 rounded-lg '>
            <img src={src} alt=" " className={`w-20 mx-auto ${style}`}/>
            <p className='mt-4 '></p>
        </div>)})}
    </div>
</div>
 </div>);
}
 
export default Experience;