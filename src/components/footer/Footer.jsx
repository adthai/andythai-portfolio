import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import{SocialIcon} from 'react-social-icons'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Please reach out!
          </span>
          <span className="secondaryText">
            <b>Email: </b><a href="mailto:adthai.me@gmail.com">adthai.me@gmail.com</a><br/>
            <b>Phone: </b><a href="tel:+1206-427-7175">+1 (206) 427-7175</a>
          </span>
        </div>

        <div className={css.right}>
          <ul className={css.menu}>
            <li><a href="#expertise">About Me</a></li>
            <li><a href="#work">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li>
              <SocialIcon network="linkedin" url="https://www.linkedin.com/in/adthai01" />
            </li>

            <li>
              <SocialIcon network="github" url="https://www.github.com/adthai"/>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;