import {useRef} from "react";
import { motion } from "framer-motion";
import style from '../Hero/Hero.module.css'



const containerVariants = {
  hidden: {opacity:0},
  visible:{
    opacity:1,
    transition:{
      staggerChildren:0.1,
    },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Starts slightly down and invisible
    visible: { opacity: 1, y: 0 }, // Animates upwards and becomes visible
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 50 }, // Starts invisible and below
    visible: { opacity: 1, y: 0 }, // Animates to full opacity and normal position
  };

const Hero = ({ scrollToServices }) => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row bg-gradient-to-r  rounded mt-8">
      <motion.div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center pl-4 py-4 md:items-start md:text-left"
      variants={containerVariants}
      initial="hidden"
      animate="visible"      
      >
        <motion.h4 className=" bg-gradient-to-r from-[#3683B9] via-[#537FDA] to-[#c78abf] inline-block text-transparent bg-clip-text lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] font-semibold mt-10 mb-4 md:mb-6 lg:mt-0"
        variants={itemVariants}>Hi, I'm Arfa
        </motion.h4>
                <motion.h1 className="text-[#dfd9ff] lg:text-3xl sm:text-2xl xs:text-xl text-base lg:leading-[40px] font-bold py-1 mb-2 md:mb-0"
        variants={containerVariants} 
        initial="hidden"
        animate="visible"
        >Software Developer</motion.h1>

        <motion.p className="text-white lg:text-lg  text-base line-clamp-4 leading-1 mb-10 md:mb-12" 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.3, duration: 0.5 }}        
        >
          Crafting innovative solutions that elevate your projects to the next level. I specialize in creating seamless applications and optimizing user experiences to drive results. Let's bring your ideas to life!
        </motion.p>
        <button className="  text-white bg-purple-lightPurple rounded border-none mt-4 px-5 py-3  md:" onClick={scrollToServices}>

               About Me
        </button>
      </motion.div>
      <div className=" w-full lg:w-1/2 flex rounded-full justify-center items-center"  >
      <div className={style.heroImg}>
        <img className="object-cover" src="./images/dummy-women.png"></img>
        </div>
      </div>
      
      <div className="topshade"></div>
      <div className="bottomshade"></div>
    </div>
  );
};

export default Hero;
