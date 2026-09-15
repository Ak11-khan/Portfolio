import React from "react";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../imageutils";
import style from "./Projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className="my-14">
      <div className={style.projectItem}>
        <h1 className="text-purple-lightPurple lg:text-3xl text-2xl font-semibold ">My Latest <span className="text-white lg:text-3xl text-2xl font-thin">Projects</span></h1>
        <p className="text-white lg:text-lg text-base mt-2 mb-8">
  Explore my projects that showcase my skills and creativity. From web applications to innovative solutions, each project reflects my commitment to quality and excellence.Click the button below to access the dashboard and see more details.
</p>
        <button className="">
          Dashboard
        </button>
      </div>

      <div className={style.projectContainer}>
        {projects.map((project, index) => (
          <div key={index} className={style.projectCard}>
            <div className={style.cardContainer}>
              <div className="flex justify-center w-full h-[220px] mb-2">
                <img
                  className="rounded w-full h-full  object-fill"
                  src={getImageUrl(project.imageSrc)}
                  alt={project.title}
                />
              </div>
              <h3 className={style.cardTitle}>{project.name}</h3>
              <p className="line-clamp-3 overflow-hidden text-[16px]">
                {project.description}
              </p>

              {/* Tags section */}
              <div className="flex flex-wrap justify-center items-center space-x-2 my-4 md:flex-row">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-2 py-1 text-sm font-semibold rounded ${tag.color}`} // Dynamically apply the tag color
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <a
                href={project.source_code_link}
                className={style.cardButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
