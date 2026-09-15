import React from "react";
import style from "./Footer.module.css"
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (<section>
    <footer className={style.footer}>
   
      <div className={style.social}>
        <a href="#">
        <FaLinkedinIn />
        </a>
        <a href="#">
        <FaGithub />
        </a>
    
        <a href="#">
        <FaXTwitter />
        </a>
      </div>

      <ul className={style.list}>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
      </ul>
      <p className={style.copyright}>
      Copyright © Arfa Khan | All Right Reserved 2024 
      </p>
  
    </footer>
    </section>
  )
};

   

export default Footer;
