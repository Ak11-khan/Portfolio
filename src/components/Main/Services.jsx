import React, { useState ,useEffect, useRef} from "react";
import service from "../../data/service.json";
import { getImageUrl } from "../../Utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from "./Services.module.css";
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCogs, faPalette, faRocket,faClipboardCheck,faPlug } from '@fortawesome/free-solid-svg-icons';

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200, // Add another breakpoint for more granularity
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 3,
        },
      }
    ],
  };
  
  // fonawesome icon

  const iconMapping = {
    faClipboardList,
    faCogs,
    faPalette,
    faRocket,
    faClipboardCheck,
    faPlug,
  };
  
  
  // Animation variants
  const variants = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  };
  // const textVariant = (delay) => {
  //   return {
  //     hidden: {
  //       y: -50,
  //       opacity: 0,
  //     },
  //     show: {
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         duration: 1.25,
  //         stiffness: 100,
  //         delay: delay,
  //       },
  //     },
  //   };
  // };
 

  const Services = () => {
    return (
      <div id="service" className="mb-6">
        <motion.div className={style.serviceContainer}>
          <h1 className="lg:text-xl text-base text-white mb-4 tracking-wide capitalize">Expertise in Transforming Ideas into Reality</h1>
          <p className="text-purple-lightPurple lg:text-3xl text-2xl font-semibold">My <span className="text-white lg:text-3xl text-2xl font-thin">Expertise</span></p>
        </motion.div>
  
        <div className={style.sliderContainer}>
          <Slider {...sliderSettings}>
            {service.map((item, index) => (
              <motion.div
                key={index}
                className={style.sliderItem}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <div className={style.cardDiv}>
                  <div className={`${style.iconRound}`}>
                    <FontAwesomeIcon icon={iconMapping[item.icon]} size="3x" style={{ color: '#777DCC' }} />
                  </div>
                  <div className={style.content}>
                    <h3 className={style.cardTitle}>{item.title}</h3>
                    <p className={`text-base text-center transition-all duration-300 ${style.paragraph}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  
  export default Services;