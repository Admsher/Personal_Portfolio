
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import pin from '/src/assets/pin.jpg'
import React, { Suspense, useEffect, useState } from "react";
const ServiceCard = ({ index, title, description }) => {
  return (
    <div className='xs:w-[1000px] h-[320px]'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ${
          isMobile ? "xs:w-full xs:h-[200px]" : ""
        }`}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col ${
            isMobile ? "xs:p-5 xs:py-3" : ""
          }`}
        >
          <h3 className={`text-white text-[20px] font-bold text-center ${
            isMobile ? "xs:text-[16px]" : ""
          }`}>{title}</h3>
          <div className={`mt-4 ${
            isMobile ? "xs:text-[14px]" : ""
          }`}>
            {description.map((point, index) => (
              <p
                key={`${title}-${index}`}
                className={`text-white text-[14px] text-center ${
                  isMobile ? "xs:text-[12px]" : ""
                }`}
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
const About = () => {
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1200px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
   <section className="relative w-full h-full" style={{
  marginTop: isMobile ? "200px" : "0px"}}>
<img src={pin} alt="Background Image" class="w-full h-full object-cover opacity-20"></img>  
  {/* <section className={`relative w-full h-screen mx-auto`}> */}
   <div className={`absolute inset-0 top-[120px]  max-w-10xl flex-row items-start gap-5 `}> 
    <motion.div variants={textVariant()}>
      {/* <p className={styles.sectionSubText}>Introduction</p> */}
      <h2 className={styles.sectionHeadText}>About me</h2>
    </motion.div>



    <div className='mt-20 flex flex-col gap-10'  style={{ justifyContent: 'center', alignItems: 'center' }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
   
   </section>
  )
}

export default  SectionWrapper(About, "about") 