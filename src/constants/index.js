import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  easyeda,
  git,
  figma,
  docker,
  Zummit,
  KAT,
  lenest,
  iit,
  VNIT ,
  carrent,
  jobit,
  tripguide,
  threejs,
  rust,
  django,
  python,
  bits,
  nal,
  arduino,
  linux,
  netro_1,
  netro_2,
  netro_3,
  netro_4,
  esp,
  kyn
  , fitbud
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
 
  {
    title: "Education",
    description: [
  "I am currently in my Final Year of Bachelors in Electronics and Instrumentation form BITS Pilani Goa (2021-2025).",
  "I completed my 12th  from PACE Junior Science College-Nerul in HSC Board.",
  "My primary schooling till 10th is from Sanjivani International School Kharghar in ICSE Board.",
]
  
  },
  {
    title: "Hobbies/Interests",
    description: [
     "I enjoy reading books in my free time and going to the gym daily.",
      "I’ve worked on technical student projects, like my university’s MARS Rover team.",
      "In school, I was the Sports Captain and later the Head Boy.",
      "I practiced Taekwondo and played basketball and athletics for my school.",

    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
 
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "easyeda",
    icon: easyeda,
  },
  {
    name: "rust",
    icon: rust,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "arduino",
    icon: arduino,
  },
  {
    name: "linux",
    icon: linux,
  },
];


const experiences = [
  {
    title: "Software Developer (Intern)",
    company_name: "Lenest",
    icon: lenest,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developing applications using Python and other related technologies.",
      "MAde a simple Invoice generator wudsing Tkinter for UI and Excel for data.",
      "A routine maker for patients with specific types diseases, also can help in assisiting the doctors to diagnose the disease by their symptoms.",
      "An auto emailing service to send patients automated emails which contained videos curated ny the organsation for the patients.",
      "A chatbot which can help in finding solution to any problem related to for patients based on their input in output of a video made by the organisation.",
      "The softwares are being actively used by the organisation to make the operations more efficient."
    ],
  },
  {
    title: "Full Stack Developer ",
    company_name: "BITS Pilani Goa- AUGSD",
    icon: bits,
    iconBg: "#E6DEDD",
    date: "September 2023 - July 2024",
    points: [
      "Developing and maintaining web applications using django,html,css.",
      "Developed a web application which enables the HEad of Departments to append new course data for the upcoming semesters in a systematic manner.",
      "In addition to the web application. Developed a Timetable Generator which use the Course data submitted in the course loader to design the timetable for the upcoming semester.",
      "The applications are being used and maintainedby the Academic DIvision of BITS Goa"

     
    ],
  },
  {
    title: "PCB Developer (Intern)",
    company_name: "IIT Roorkee",
    icon: iit,
    iconBg: "#E6DEDD",
    date: "November 2023 - January 2024",
    points: [
      "Developing a custom PCB for an esp32 microntroller using EasyEDA.",
      "A 4 layer PCB which was used to interface an e-ink paper display to an ESP32 WROOM-2.",
      "The design is being used in a research projet by thee organisation."

     
    ],
  },
  {
    title: "PCB Designer and Embedded Developer (Intern)",
    company_name: "VNIT Nagpur",
    icon: VNIT ,
    iconBg: "#383E56",
    date: "March 2024 - August 2024",
    points: [
      "Developing PCB Designs and Watch Interfaces using EASYEDA and C++.",
      "A custom ESP32-c3 PCB interfaced with MAX30105 heart rate monitor.",
      "Watch Interface made for ST7789 lcd screen to display the output of the heart rate monitor on the screen.",
      "Using BLE and Wire technology to interface the PCB with a local laptop or equivalent device.",
      "The design is being used to develop a healthcare product by the organisation."
    ],
  },
  {
    title: "Backend Developer (Intern)",
    company_name: "Zummit Infolabs",
    icon: Zummit,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Developinng backend API's using Django Rest Framework.",
      "Collaborating with the frontend and the Machine Learning team to create pipelining of the data from REact frontend to python Backend.",
      "Using router technology to connect the frontend and backend.",
      "THe API's are now being used in their upcoming product for interviews taken by AI.",
    ],
  },
   {
    title: "PCB Developer (Intern)",
    company_name: "Khagheshwara Aviation Technology",
    icon: KAT,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Developing a Battery MAnagement System PCB using EasyEDA and FreeCad.",
      "Developing a PCB for provding power to motors and sensors on a VTOL aircraft.",
      "A 6 layer PCB designed to withstand high current surges and provide safety to the other devices on the aircraft.",
      
    ],
  },
  {
    title: "Embedded Developer (Intern)",
    company_name: "CSIR NAL",
    icon: nal,
    iconBg: "#383E56",
    date: "July 2024 - December 2024",
    points: [
      "Migrating embedded C code to Rust for electronic monitoring unit.",
      "Developed a schedule plan generator adhering to ARINC 653 standards for aviation.",
      "Wrote program for data packetisation and transmission in CAN,RS485 and UART protocols ofr an unmanned aerial vehicle.",
      "Developed a program to TImeSync windows machines vai LAN.",
      "Explored on pssibilities and limitations of using an R5F processor in safety critical enviroments",
      "The code will be used in safety critical applications on aircrafts.",
    
    ],
  },
  {
    title: "Infrastructure Specialist",
    company_name: "Kyndryl",
    icon: kyn,
    iconBg: "#E6DEDD",
    date: "August 2025 - Present",
    points: [
      "I just started working here and will update this section soon."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "New Life",
    description:
      "A hackathon submission for NETROPOLIS. Application made with django and React which lets you create your own life and affect it with decisions. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: [carrent,],
    images:[carrent,netro_1,netro_2,netro_3,netro_4],
    source_code_link: "https://github.com/Admsher/netropolis-hackathon",
  },
  {
    name: "Urban Heat Index",
    description:
      "A Data Analysis Project to determine the Vegetation Index from USGS Landsat 8 and Landsat 9 imagery.  FInd more here: https://github.com/Admsher/Urban-Heat-Index",
    tags: [
      {
        name: "Python",
        color: "orange-text-gradient",
      },
     
    ],
    image: jobit,
    images:[],
    source_code_link: "https://github.com/Admsher/Urban-Heat-Index",
  },
  {
    name: "MIMXRT-1064",
    description:
      "A custom crate deveoped for IMXRT-1064 board by NXP semiconductors which can be used to access IMXRT-1064 peripherals. ",
    tags: [
      {
        name: "Rust",
        color: "yellow-text-gradient",
      },
    ],
    image: tripguide,
    images:[],
    source_code_link: "https://github.com/Admsher/MIMXRT1064",
  },
  {
    name: "TeleMail",
    description:
      "A online telcounsultation device prototype made for TCOE hacakathon 2024. ",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
        
      },
      {
         name: "Python",
        color: "orange-text-gradient",
      }
    ],
    image: esp,
    images:[],
    source_code_link: "https://github.com/Admsher/TCOE-submission",
  },

  {
    name: "FitBud",
    description:
      "A fitness app prototype made using flutter and django rest framework which helps users to keep a track of their daily fitness activities. ",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
    ],
    image: fitbud,
    images:[],
    source_code_link: "https://github.com/Admsher/fitbud",
    videoUrl: "src/assets/Group_08.mp4"
  
  }
];

export { services, technologies, experiences, testimonials, projects };