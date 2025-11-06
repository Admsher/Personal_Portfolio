import { motion } from "framer-motion";

import { styles } from "../style";
import { AmorsCanvas, PillarCanvas } from "./canvas";
import meetImage from "../assets/david3.jpg";

const Hero = () => {
  return (
    
    <section className={`relative w-full h-screen mx-auto`}>
      <img src={meetImage} alt="Background Image" class="w-full h-full  object-cover opacity-15"></img>
       
      <div
        className={`absolute inset-0 top-[120px]  max-w-10xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
         {/* <div className='w-5 h-5 rounded-full bg-[#915EFF]' /> */}
          {/* <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
        </div>

      
        
        <div >
          
          <h1 className={`${styles.heroHeadText} mt-2 text-white-0`}>
             {/* <span className='text-[#ffffff]'>Welcome</span> */}
          </h1>
          {/* <hr style="border: none; border-top: 2px solid white; margin: 20px 0;"/> */}

          <p className={`${styles.heroSubText} mt-2 text-white`}>
            Welcome to my portfolio .<br className='sm:block hidden' />As an embedded developer, <br className='sm:block hidden' />I thrive on creating efficient, low-level software solutions that drive hardware innovation. <br className='sm:block hidden' />My expertise in PCB design allows me to transform concepts into functional<br className='sm:block hidden' /> electronic circuits with precision and reliability.<br className='sm:block hidden' /> On the web development front,<br className='sm:block hidden' /> I craft dynamic and intuitive web applications that enhance user experiences.<br className='sm:block hidden' /> 
          
             
            
          </p>
          <br ></br>
          <br />
         
          <p  className={`${styles.heroSubText} mt-2 text-white`}>
          Whats going on right now?<br></br><br></br>
         <p>Gave up on the OS. Now using my Pi 5 as a NAS.</p>
        
          </p>
          <br></br><br></br>
          <br></br>
          <center>
           <blockquote style={{ fontStyle: 'italic', color: '#fff',border: '1px solid #fff', paddingLeft: '20px', margin: '20px 0' }}>
    "If it works , we don't touch it again."
    <footer style={{ textAlign: 'right', color: '#fff', fontSize: '0.9em', marginTop: '10px' ,marginRight: '10px'}}>
        - Rule of Thumb
    </footer>
</blockquote>
</center>

        </div>
        
            {/* <AmorsCanvas  /> */}
        
      </div>

     

      <div className='absolute xs:bottom-14.5 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;