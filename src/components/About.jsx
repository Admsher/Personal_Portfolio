import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, description }) => {
  return (
    <div className='xs:w-[1000px] h-[320px]'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col'
        >
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
          <div className='mt-4'>
            {description.map((point, index) => (
              <p
                key={`${title}-${index}`}
                className='text-white text-[14px] text-center'
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
  return (
   <section className={`relative w-full h-screen mx-auto`}>
<img src="/src/assets/pin.jpg" alt="Background Image" class="w-full h-full object-cover opacity-20"></img>  
  {/* <section className={`relative w-full h-screen mx-auto`}> */}
   <div className={`absolute inset-0 top-[120px]  max-w-10xl flex-row items-start gap-5 `}> 
    <motion.div variants={textVariant()}>
      {/* <p className={styles.sectionSubText}>Introduction</p> */}
      <h2 className={styles.sectionHeadText}>About me</h2>
    </motion.div>



      <div className='mt-20 flex flex-col gap-6' style={{alignItems: "center"}}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
   
   </section>
  )
}

export default  SectionWrapper(About, "about") 