import React from 'react';
import Nav from './Nav';

import Links from './Links';

import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import Home from './head';
import About from './About';


function MyApp() {
    return ( <div className='overflow-hidden'>
<Nav/>
<Home/>
<About/>
<Portfolio/>
<Experience/>
<Contact/>
<Links/>



    
    </div> );
}

export default MyApp;