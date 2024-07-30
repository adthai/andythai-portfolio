import React from "react";
import {fadeIn, slideIn, staggerContainer} from "../../utils/motion.js";
import css from './Intro.module.scss';
import {motion} from "framer-motion";

const Intro = () => {
  return(
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`innerWidth ${css.container}`}
        >
      <div className={` innerWidth ${css.container}`}>

        {/*Upper elements */}
        <div className = {css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hello, <br/> I'm Andy.
          </motion.span>
        </div>

        {/* image */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className={css.splash}>
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src= "/splash.png" alt=""/>
        </motion.div>


        {/*lower elements */}
        <div className = {css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className = {css.experience}>
            <div className="primaryText">1</div>
            <div className="secondaryText">
              <div>Year of Work</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className = {css.certificate}>
            <img src="/certificate.png" alt=""/>
            <span>University of Washington c/o 2024</span>
          </motion.div>
        </div>
      </div>
      </motion.div>
    </section>
  )};

export default Intro