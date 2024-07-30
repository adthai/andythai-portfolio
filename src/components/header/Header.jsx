import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMailSend, BiMenuAltRight } from "react-icons/bi";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  useOutsideAlerter({
    ref: menuRef,
    action: () => setMenuOpened(false),
  });

  const toggleMenu = () => {
    setMenuOpened(prevState => !prevState);
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Andy Thai</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li><a href="#expertise">About Me</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li>
            <SocialIcon network="linkedin" url="https://www.linkedin.com/in/adthai01" />
          </li>
          <li><SocialIcon network="github" url="https://www.github.com/adthai"/> </li>
          <li className={`flexCenter ${css.phone}`}>
            <a href="tel:+1206-427-7175"><BiPhoneCall size={"55px"} /></a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <a href="mailto:adthai.me@gmail.com"><BiMailSend size={"55px"} /></a>
          </li>
        </ul>
        <div className={css.menuIcon} onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;