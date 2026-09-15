import resume from "../../../assets/nav/Arfa_Khan_Resume.pdf";
import React from "react";
// import './SkillCircle.css';
import style from "./Dashboard.module.css";
import skillsData from "../../data/skillsData.json";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  return (
    // <div className="mt-8 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    // {/* Radial gradient for the container to give a faded look */}
    // <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    // <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
    //   Backgrounds I have
    // </p>

    <div className={style.dashboardContainer}>
      <div className={style.mySkills}>
        <h3 className="text-purple-lightPurple lg:text-3xl text-2xl font-semibold">My <span className="text-white lg:text-3xl text-2xl font-thin">Progress</span></h3>
        <p className="text-white lg:text-lg  text-base line-clamp-4 leading-1 mt-2 mb-8">
          Expert in crafting exceptional digital experiences with a strong grasp
          of HTML, CSS, JavaScript, ReactJS, and PHP. I focus on creating
          intuitive and visually appealing interfaces while ensuring robust
          functionality.
        </p>
        <a href={resume} download>
        <button>Download CV</button>
        </a>
      </div>
      {/* <h2 className="text-white lg:text-3xl text-2xl font-semibold mt-10 p-6 mb-4">Dashboard</h2> */}
      <div className={style.dashboardBox}>
        {skillsData.map((skillData, dash) => {
          return (
            <div key={dash} className={style.stats}>
              <div className={style.statBox}>
                <p>
                  {" "}
                  <CircularProgressbar
                    value={skillData.percentage}
                    text={`${skillData.percentage}%`}
                    strokeWidth={8}
                    styles={buildStyles({
                      pathColor: `#270F8C`, // Color of the progress path
                      textColor: "#000", // Color of the text
                      trailColor: "#c78abf", // Color of the trail
                      backgroundColor: "#6A89D4", // Background color if you are using a background
                      textSize: "16px",
                    })}
                  />
                </p>
                <h3 className="text-[16px]" style={{ color: skillData.color }}>{skillData.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Dashboard;
