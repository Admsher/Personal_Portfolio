import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import '../../src/index.css'
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

 

  

  return (
    <div
      className={`xl:mt-12 flex xl:flex-col-reverse gap-10 overflow-hidden`}
    >
      

        <div className="contact-links" style={{position: 'relative', left: '40%'}}>
          <a href="https://github.com/Admsher" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/varad-shinde-7b80b2215/" target="_blank">LinkedIn</a>
          <a href="mailto:varad@live.in">Mail</a>
        </div>
      

      <motion.div
        variants={slideIn("center", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[1050px] h-[350px]'
      >
      
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
