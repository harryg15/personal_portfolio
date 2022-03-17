import React from 'react';
import { motion } from 'framer-motion';  //allows animation


import { AppWrap } from '../../wrapper'
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {  //relating to 'scaleVariants' in 'motion.div'
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (    //Below is the main 'Harry icon' that animates on the page & all the classes
  <div className="app__header app__flex">
    <motion.div   //div will have few animation props
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}   //will animate from minus value, from invis to vis
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hi there, I'm</p>
            <h1 className="head-text">Harrison</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">22 Years Old</p>
          <p className="p-text">Junior Programmer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}  //will animate from minus value, from invis to vis
      transition={{ duration: 0.5, delayChildren: 0.5 }}  //delay what's below after icon is shown above
      className="app__header-img"
    >
      <motion.img
        whileInView={{ scale: [0, 1] }}  
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}  //animating large circle behind above image
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div  //Below is the little circles that animate behind person with tech-stack
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.html, images.react, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home')