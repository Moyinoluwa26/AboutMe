import React from 'react';
import {GrLinkedin,GrGithub,GrMail, GrInstagram} from 'react-icons/gr';
import {IoMdContact} from "react-icons/io"
const Links = () => {

    const Link = [
        {id:1,child:(<>Linkedin <GrLinkedin size={30}/></>),href:"https://www.linkedin.com/in/oyejide-moyinoluwa/"},
        {id:2,child:(<>Github <GrGithub size={30}/></>),href:"https://github.com/Moyinoluwa26"},
        {id:3,child:(<>Mail <GrMail size={30}/></>),href:"mailto:victormoyin435@gmail.com"},
        {id:4,child:(<>Instagram <GrInstagram size={30} /></>),href:"https://www.instagram.com/dlarkoh_jii/"},
        {id:5,child:(<>Resume <IoMdContact size={30}/></>),href:"./Moyin.pdf",download:true}
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>

    <ul>
        {Link.map(({id,child,href,download}) => {
            return (
        <li key={id} className='flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:rounded-md duration-300 hover:ml-[-11px]'>
            <a
             href={href} className='flex flex-row justify-between items-center w-full text-white '
            download={download}
            >
                {child}
            </a>
        </li>)})}
    </ul>
    </div> );
}
 
export default Links;