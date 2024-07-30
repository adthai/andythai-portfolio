import React from "react";
import { motion } from "framer-motion";
import css from "./Projects.module.scss";
import { fadeIn, staggerChildren, textVariant} from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="projects"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
          </div>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
          <a href="https://andy-thai2.observablehq.cloud/seattles-economy/" target="_blank" rel="noopener noreferrer">
          <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./vizseattle.png" alt="project" />
          </a>
          <a href="https://github.com/adthai/Beanie-Website" target="_blank" rel="noopener noreferrer">
          <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./beanie_bazaar.png" alt="project"/>
          </a>
        </div>
        <div className={`flexCenter ${css.showCase}`}>
          <a href="https://github.com/UWSocialComputing/Swapify-code"target="_blank" rel="noopener noreferrer">
          <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./logo.png" alt="project" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;