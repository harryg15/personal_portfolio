import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);  //fetching data we can loop

  useEffect(() => {       //fetches all our skills 
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {   //data = for the 'type == experiences'
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Education</h2>    

      <div className="app__skills-container">  
        <motion.div className="app__skills-list">
          {skills.map((skill) => (  //gets one individual skill every loop. Below is the animation properties
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}  //the id for specific skill
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >  
                <img src={urlFor(skill.icon)} alt={skill.name} />  
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>  //skill.bgColor & .skills etc.. = will be defined in Sanity Studio myself
          ))}   
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div  //looping over all the 'experiences'
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >  
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>  
                    </motion.div>  
                    <ReactTooltip  //Above (work.name etc..) relates to changes in the sanity menu
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(  //centers everything
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',  //gives about section white background
);