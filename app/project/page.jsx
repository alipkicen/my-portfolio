"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"

import Link from "next/link";
import Image from "next/image";
import { Item } from "@radix-ui/react-select";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// map tech names to official sites
const TECH_LINKS = {
  "Next.js": "https://nextjs.org/",
  "React": "https://react.dev/",
  "Tailwind CSS": "https://tailwindcss.com/",
  "shadcn/ui": "https://ui.shadcn.com/",
  "Framer Motion": "https://www.framer.com/motion/",
  "Python": "https://www.python.org/",
  "Streamlit": "https://streamlit.io/",
  "Pandas": "https://pandas.pydata.org/",
  "NumPy": "https://numpy.org/",
  "TensorFlow/Keras": "https://keras.io/",
  "scikit-learn": "https://scikit-learn.org/",
};

//update project list kat sini
const projects = [
  {
    num: "01",
    category: "Portfolio Website",
    description:
      "Personal profile built with Next.js, React, Tailwind CSS, shadcn/ui, and Framer Motion. Includes resume tabs, projects slider, social links, and CV download.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "shadcn/ui" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/thumb1.png",
    live: "/", 
    github: "https://github.com/alipkicen/my-portfolio", 
  },
  {
    num: "02",
    category: "Reliability Timeline App",
    description:
      "Streamlit tool that auto-generates reliability test timelines from a start date and fixed TAT per subprocess. Exports schedules and highlights key milestones.",
    stack: [
      { name: "Python" },
      { name: "Streamlit" },
      { name: "Pandas" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://mmp-gq-ops-reliability-timeline-app.streamlit.app/", 
    github: "https://github.com/alipkicen/reliability-timeline-app", 
  },
  {
    num: "03",
    category: "Stock Price Prediction (LSTM)",
    description:
      "End-to-end Python project using an LSTM model to forecast stock closing prices. Includes preprocessing, train/validation split, scaling, and evaluation with plots.",
    stack: [
      { name: "Python" },
      { name: "TensorFlow/Keras" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "scikit-learn" },
    ],
    image: "/assets/work/thumb3.png",
    live: "", 
    github: "https://github.com/your-username/stock-lstm", 
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0])
  
  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on slide index
    setProject(projects[currentIndex]);
  };

  return ( 
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}, 
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/*project description */}
              <p className="text-white/60">
                {project.description}
              </p>
              {/*stack*/}
              <ul className="flex flex-wrap items-center gap-2 md:gap-3">
                {project.stack.map((item, i) => {
                  const href = TECH_LINKS[item.name];
                  const pill = (
                    <span className="
                      px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent/90
                      text-xs md:text-sm lg:text-base hover:bg-accent/20
                    ">
                      {item.name}
                    </span>
                  );
                  return (
                    <li key={i}>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Open ${item.name}`}
                          aria-label={`Open ${item.name}`}
                          className="focus:outline-none focus:ring-2 focus:ring-accent/60 rounded-full"
                        >
                          {pill}
                        </a>
                      ) : (
                        pill
                      )}
                    </li>
                  );
                })}
              </ul>
              {/*border */}
              <div className="border border-white/20"></div>
              {/*button */}
              <div className="flex items-center gap-4">
                {/*live project button */}
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github button */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*image */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={project.image} 
                          fill 
                          className="object-cover" 
                          alt="" 
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/*slider buttons */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"              
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project