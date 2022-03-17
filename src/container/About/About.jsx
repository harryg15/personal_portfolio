import React, { useState, useEffect } from 'react';  //importing most popular hooks(adding in state etc..)
import { motion } from 'framer-motion'

import{ AppWrap, MotionWrap } from '../../wrapper'
import './About.scss'
import { urlFor, client } from '../../client';  //importing client.js


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {  //only want this useEffect once component loads
    const query = '*[_type == "abouts"]';  // effectively fetching 'about, skills etc.' section data from CMS to plug-in

    client.fetch(query)
    .then((data) => setAbouts(data))
  }, []);
  
  //use 'sanity start' to go ahead and add Sections(About, Skills etc...) into the CMS


   return (
    <>
      <h2 className="head-text">A Little More About <span>Me</span></h2>

      <div className="app__profiles">  
        {abouts.map((about, index) => (  //maps over container animation when cursor is hovering
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(  //wrapping About section wih id='about' telling us which one we're at
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',  //gives about section white background
);  