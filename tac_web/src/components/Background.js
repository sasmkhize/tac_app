import React from 'react'
import './Background.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import Event from './pages/Event';
import About from './pages/About';
import Contact from './pages/Contact';
import Upload from './pages/Upload';
import Login from './pages/Login';

const Background = () => {
    let component
    switch (window.location.pathname) {
     case '/':
       component = <Home />
       break;
 
     case '/event':
       component = <Event />
       break;
 
     case '/upload':
         component = <Upload/>
         break;
 
     case '/about':
         component = <About />
         break;
 
     case '/contact':
           component = <Contact />
           break;
      case '/login':
            component = <Login />
            break;
    }

  return (
    <>
    <div className='background'>
        <Navbar/>
        {component}
    </div>
    </>
    
  )
}

export default Background