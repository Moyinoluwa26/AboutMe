import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './Nav';
import Home from './head';
import Links from './Links';
import About from './About';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div className='w-full'> 
    <App />
    <Nav/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Links/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
