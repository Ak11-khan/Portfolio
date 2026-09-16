import React from "react";
import experience from "../../data/experience.json";
import skills from "../../data/skills.json";
import { motion } from "framer-motion";
import { getImageUrl } from "../../imageutils";
import style from "./Experience.module.css"; // Import the CSS module

const skillVariants = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Experience = () => {
  return (
    <section id="experience" className="mt-10">
      <motion.h1
        initial="hidden"
        animate="show"
        className="text-white lg:text-3xl sm:text-2xl xs:text-xl text-base font-semibold p-6 mb-8"
      >
        Experience{" "}
      </motion.h1>

      {/* Skills start here Details */}
      <div className={style.skills}>
        {skills.map((skill, id) => {
          return (
            <motion.div
              key={id}
              variants={skillVariants(id * 0.2)} // Apply stagger effect
              initial="hidden"
              animate="show"
              className={style.skill}
            >
              <div className={style.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </motion.div>
          );
        })}
      </div>
       {/* Experience starts here */}
      <div className={style.experienceContainer}>
        {experience.map((experience, id) => {
          return (
            <div key={id} className={style.experienceContent}>
              {/* Image Gallery */}
              <div className={style.imageGallery}>
                {(experience.images || [experience.imageSrc]).map(
                  (image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={getImageUrl(image)}
                      alt={`Experience image ${imgIndex + 1}`}
                    />
                  )
                )}
              </div>

              {/* Experience Details */}
              <div className={style.experienceDetails}>
                <h6 className="text-xl font-semibold">{experience.title}</h6>
                <div className={`w-full md:w-1/5 mt-1 ${style.expDate}`}>{experience.dates}</div>
                <div className="text-left mt-2 md:mt-0">
                  <ul className="md:list-disc ">
                    {experience.summary.map((item) => (
                      <li className="text-md md:text-base mb-2 " key={item}>
                        {" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
