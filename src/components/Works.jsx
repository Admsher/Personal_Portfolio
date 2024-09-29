
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

const ProjectCard = ({index, name, description, tags, image, source_code_link,images}) => {
 const [isPopupOpen, setIsPopupOpen] = useState(false);


  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    console.log("Popping")
  };

   return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
   
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
  <div
    onClick={() => window.open(source_code_link, "_blank")}
    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-3'
  >
    <img
      src={github}
      alt='source code'
      className='w-1/2 h-1/2 object-contain'
    />
  </div>
  <div
    onClick={togglePopup}
    className='black-gradient w-37 h-10 l flex justify-center items-center cursor-pointer'
    style={{
      borderRadius: "10px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    }}
  >
    <span style={{ color: "white" }}>See More</span>
  </div>
</div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
           {isPopupOpen && (
        <Popup
          isOpen={isPopupOpen}
          onClose={togglePopup}
          content={{
            name: name,
            images: images,
            description: description,
          }}
        />
      )}
      {/* ... */}
    </motion.div>
  );
}

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