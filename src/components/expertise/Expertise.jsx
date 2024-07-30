import React from 'react'
import css from './expertise.module.scss';
import { projectExperience, WhatDoIHelp, furtherInfo } from '../../utils/data'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion.js';

const Expertise = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="expertise"></a>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
        <div className={css.leftSide}>
        {projectExperience.map((exp, i) => {
            return (
              <motion.div
              variants={fadeIn("right", "tween", (i+1)*0.2, 1)}
              className={css.exp} key={i}>
                <div className="flexCenter" style={{background: exp.bg}}>
                  <exp.icon size={25} color="white"/>
                </div>
                <div>
                  <span>
                    {exp.name}
                  </span>
                  <span class="secondaryText">
                    {exp.projects}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
        variants={textVariant(0.5)}
        className={css.rightSide}>
          <span className="primaryText"> Summary: </span>
          <br/>
          {
            WhatDoIHelp.map((paragraph, i) => {
              return (
                <span className="secondaryText" key={i}>{paragraph}</span>
              )
            })
          }
          <br/>
          <br/>
          {
            furtherInfo.map((paragraph, i) => {
              return (
                <span className="secondaryText" key={i}>{paragraph}</span>
              )
            })
          }
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Expertise;