import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import'./Navbar.scss';
import { images } from '../../constants'


const Navbar = () => {     // classname="app__navbar" with double underscore becuase of BEM naming style method"
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.portfoliologo} alt="logo"/>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (  // when opening menu icon
          <li className="app__flex p-text" /*center the element(p-text makes para text)*/  key={`link-${item}`}> 
            <div />
            <a href={`#${item}`}>{item}</a> 
            </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
          <HiMenuAlt4  onClick={() => setToggle(true)}/>

          
            {toggle && (    //Here is 'Framer-Motion' Speific -- connected to div on scss
              <motion.div
              
                whileInView={{ x: [300, 0] }}     //Once clicked button - this is how many pixels it will trans.
                transition={{ duration: 0.85, ease: 'easeOut' }}         
              >
                  
              <HiX onClick={() => setToggle(false)}/>  
              <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (  //when closing menu icon (reverts everything back)
          <li  key={item}> 
          
            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>  
            </li>
        ))}
            </ul>

              </motion.div>
            )}

          


      </div>
    </nav>
  )
}

export default Navbar

