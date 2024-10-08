"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Description } from "@radix-ui/react-dialog";
import WorkSliderbtn from "@/components/WorkSliderbtn";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "fuirhfiuerh",
    description: "roviervinr",
    stack: [{ name: "html5" }, { name: "css" }, { name: "js" }],
    image: "/4.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "fuirhfiuerh",
    description: "roviervinr",
    stack: [{ name: "html5" }, { name: "css" }, { name: "js" }],
    image: "/5.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "fuirhfiuerh",
    description: "roviervinr",
    stack: [{ name: "html5" }, { name: "css" }, { name: "js" }],
    image: "/003.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "fuirhfiuerh",
    description: "roviervinr",
    stack: [{ name: "html5" }, { name: "css" }, { name: "js" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "fuirhfiuerh",
    description: "roviervinr",
    stack: [{ name: "html5" }, { name: "css" }, { name: "js" }],
    image: "",
    live: "",
    github: "",
  },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlide = (swiper) => {
      const currentIndex = swiper.activeIndex;
      setProject(projects[currentIndex]);
    };
  
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[79vh] flex flex-col justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <div className="flex flex-col  xl:flex-row xl:gap-[30px]">
        <div
          className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
        xl:justify-between order-2 xl:order-none "
        >
          <div className="flex flex-col gap-[30px] h-[50%]">
            {/* outkine num */}
            <div
              className="text-8xl leading-none font-extrabold 
            text-transparent text-outline"
            >
              {project.num}
            </div>

            {/* categorey */}
            <h2
              className="text-[42px] font-bold leading-none text-white
             group-hover:text-accent transition-all duration-500 capitalize "
            >
              {project.category} project
            </h2>

            {/* des */}
            <p className="text-white/60">{project.description}</p>

            {/*stack   */}
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index}>
                    {item.name}

                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>

            {/* border */}
            <div className="border border-white/20 "></div>

            <div className="flex gap-4 items-center ">
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger
                      className="w-[70px] h-[70px] rounded-full bg-white/5 flex 
                    justify-center items-center group "
                    >
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger
                      className="w-[70px] h-[70px] rounded-full bg-white/5 flex 
                    justify-center items-center group "
                    >
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>github Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>

        {/* new part */}
        <div className="w-full xl:w-[50%]">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlide}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20  ">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10  "></div>
                    {/* image */}
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
              );
            })}
            {/* slider button */}
            <WorkSliderbtn
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>
  )
}

export default Work