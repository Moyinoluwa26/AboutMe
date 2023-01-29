import React from 'react';
const Contact = () => {
    return ( <div name="Contact" className='w-screen h-full bg-black p-4 text-white'>
        <div className='fle flex-col p-4 justify-center max-w-screen-lg lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
                <p className='py-8'>Submit the form below to get in touch with me : </p>
            </div>
            <div className='flex justify-center items-center'>
                <form 
                action="https://getform.io/f/1ccdfed4-212b-41d7-9c8b-f906a4d6d1e2"
                className='flex flex-col w-full h-full md:w-1/2 '
                method="POST">
                    <input type="text"
                    name='name'
                    placeholder='Enter your Name'
                    className=' px-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text"
                    name='Email'
                    placeholder='Enter your Email'
                    className='px-2 my-6 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea placeholder="Enter Your Message"name ="Message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white  '></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-110 duration-300 '>Let's Talk</button>
                </form>
                
            </div>
        </div>
    </div>  );
}
 
export default Contact;