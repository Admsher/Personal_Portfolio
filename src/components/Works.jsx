
import {motion} from 'framer-motion'
import CanvasLoader from './Loader'
import React, { useState } from "react";
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import {github } from '../assets'
import { projects } from '../constants'
import {fadeIn , textVariant} from '../utils/motion'
import Popup from './Popup';
// import Tilt from "react-tilt";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, images }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    console.log("Popping");
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className={`relative w-full h-[230px] md:h-[300px] lg:h-[400px] ${
          isPopupOpen ? "blur-sm" : ""
        }`}
        style={{
          filter: isPopupOpen ? "blur(5px)" : "none",
        }}
        onClick={togglePopup}
      >
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className={`absolute inset-0 flex justify-end m-3 card-img_hover ${isPopupOpen ? "hidden" : ""}`}>
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="text-white text-lg font-semibold">{name}</h3>
            <p className="text-white text-sm">{description}</p>
            <button
              className="bg-white text-black px-4 py-2 rounded-lg mt-4 hover:bg-gray-200"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              View Source Code
            </button>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <Popup
          image={images}
          name={name}
          description={description}
          tags={tags}
          source_code_link={source_code_link}
          onClose={togglePopup}
        />
      )}
    </motion.div>
  );
};
const Works = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        

        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-3xl leading-[30px]'
        >
         
        </motion.p>
      </div>

      <div className='mt-20 flex flex-col gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
    
      </div>  
    
    </>
  );
}

export default SectionWrapper(Works, "works")