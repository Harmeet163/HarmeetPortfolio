"use client";
import { Description } from "@radix-ui/react-dialog";
import { Item } from "@radix-ui/react-select";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJs,
  FaGit,
  FaGoogle,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiFirebase,
  SiVite,
} from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";

// about part
const about = {
  title: "About me",
  description: "knnklnlk lnlknlkn lknknlk .nobl lnnnioln nininii",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Luke Coleman",
    },
    {
      fieldName: "Phone",
      fieldValue: "Luke Coleman",
    },
    {
      fieldName: "Experirenc",
      fieldValue: "Luke Coleman",
    },
    {
      fieldName: "Skype",
      fieldValue: "Luke Coleman",
    },
    {
      fieldName: "Email",
      fieldValue: "Luke Coleman",
    },
    {
      fieldName: "Github",
      fieldValue: "Luke Coleman",
    },
    {
      fieldName: "language",
      fieldValue: "Luke Coleman",
    },
  ],
};

// experience part
const experience = {
  // ico
  title: "my exp",
  description: "jvoijroievrovjreoiveror",
  item: [
    {
      comapny: "vdfvfd",
      position: "rerferfer",
      duration: "2002-4555",
    },
    {
      comapny: "vdfvfd",
      position: "rerferfer",
      duration: "2002-4555",
    },

    {
      comapny: "vdfvfd",
      position: "rerferfer",
      duration: "2002-4555",
    },
    {
      comapny: "vdfvfd",
      position: "rerferfer",
      duration: "2002-4555",
    },
    {
      comapny: "vdfvfd",
      position: "rerferfer",
      duration: "2002-4555",
    },
    {
      comapny: "vdfvfd",
      position: "rerferfer",
      duration: "2002-4555",
    },
  ],
};

// education part
const education = {
  // ico
  title: "my education",
  description: "jvoijroievrovjreoiveror",
  item: [
    {
      institution: "parul uni",
      degree: "rerferfer",
      duration: "2002-4555",
    },
    {
      institution: "vdfvfd",
      degree: "rerferfer",
      duration: "2002-4555",
    },
    {
      institution: "vdfvfd",
      degree: "rerferfer",
      duration: "2002-4555",
    },
    {
      institution: "vdfvfd",
      degree: "rerferfer",
      duration: "2002-4555",
    },
  ],
};

// skills

// const skills = {
//   title: "My Skills",
//   description:
//     "Here are some of the tools and technologies I have experience with:",
//   skillCategories: [
//     {
//       category: "Languages",
//       skillList: ["HTML", "CSS", "JavaScript"],
//     },
//     {
//       category: "Libraries",
//       skillList: ["Bootstrap", "Material UI", "Tailwind CSS"],
//     },
//     {
//       category: "Design",
//       skillList: ["Figma", "UI Design"],
//     },
//     {
//       category: "Frameworks",
//       skillList: ["React JS", "Next JS", "Vite React"],
//     },
//     {
//       category: "Developer Tools",
//       skillList: ["Git", "VSCode", "Google Analytics"],
//     },
//     {
//       category: "Backend",
//       skillList: ["Firebase"],
//     },
//   ],
// };
const skills = {
  title: "My Skills",
  description:
    "Here are some of the tools and technologies I have experience with:",
  skillCategories: [
    {
      category: "Languages",
      skillList: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },
    {
      category: "Libraries",
      skillList: [
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Material UI", icon: <AiOutlineCode /> }, // Example icon for Material UI
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Design",
      skillList: [
        { name: "Figma", icon: <FaFigma /> },
        { name: "UI Design", icon: <AiOutlineCode /> }, // Example icon for UI Design
      ],
    },
    {
      category: "Frameworks",
      skillList: [
        { name: "React JS", icon: <FaReact /> },
        { name: "Next JS", icon: <SiNextdotjs /> },
        { name: "Vite React", icon: <SiVite /> },
      ],
    },
    {
      category: "Developer Tools",
      skillList: [
        { name: "Git", icon: <FaGit /> },
        { name: "VSCode", icon: <AiOutlineCode /> }, // VSCode can use a generic icon
        { name: "Google Analytics", icon: <FaGoogle /> },
      ],
    },
    {
      category: "Backend",
      skillList: [{ name: "Firebase", icon: <SiFirebase /> }],
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[79vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col   xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content box */}
          <div className="min-h-[70vh] w-full">
            {/* exp */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                    {experience.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
                          justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px] 
                          text-center lg:text-left"
                          >
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.comapny}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
                          justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px] 
                          text-center lg:text-left"
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            {/* <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px] bg-[#232329] rounded-xl
                            flex items-center justify-center group"
                            >
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent> */}
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {skills.skillCategories.map((category, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <h4 className="text-2xl font-semibold text-accent">
                        {category.category}
                      </h4>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {category.skillList.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="bg-[#232329] h-[150px] py-6 px-8 rounded-xl flex 
                flex-col justify-center items-center gap-2"
                          >
                            <div className="text-4xl text-accent">
                              {skill.icon}
                            </div>
                            <p className="text-lg">{skill.name}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
