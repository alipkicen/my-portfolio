"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data (update here)
const about = {
  title: "About Me",
  description: "Early-career engineer, taking a self-driven path into software development, data analysis, and ML/AI. I learn by building small tools, documenting progress, and sharing what I’m learning here.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Krishan Arpidani",
    },
    {
      fieldName: "Contact",
      fieldValue: "(+60)18 313 4090",
    },
    {
      fieldName: "Experience",
      fieldValue: "Early-career, actively learning",
    },
    {
      fieldName: "Focus",
      fieldValue: "Full-stack, Data & ML/AI",
    },
    {
      fieldName: "Email",
      fieldValue: "alip.kicen@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Malaysian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bahasa Malaysia",
    },
  ],
};

//experience data (update here)
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Early-career engineer focused on package reliability operations— while growing skills in software, data, and ML/AI.",
  items: [
    {
      company: "Micron Memory Malaysia Sdn. Bhd.",
      companyUrl: "https://my.micron.com/about/company",
      position: "Package Reliability Operation Engineer",
      duration: "September 2024 - Current",
    },
    {
      company: "Sanmina-SCI Systems (M) Sdn. Bhd.",
      companyUrl: "https://www.sanmina.com/services-contract-electronics-manufacturing/",
      position: "Process Engineer Intern (Bachelor's Degree)",
      duration: "July 2023 - October 2023",
    },
    {
      company: "Sanmina-SCI Systems (M) Sdn. Bhd.",
      companyUrl: "https://www.sanmina.com/services-contract-electronics-manufacturing/",
      position: "Assistant Engineer Intern (Diploma)",
      duration: "December 2019 - April 2020",
    },
  ],
};

//education data (update here)
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Background in E&E, building hands-on skills while self-learning full-stack, data analysis, and ML/AI.",
  items: [
    {
      institute: "Universiti Putra Malaysia",
      instituteUrl: "https://eng.upm.edu.my/department/department_of_electrical_and_electronic_engineering/introduction-1886",
      degree: "Bachelor in Electrical and Electronics Engineering",
      duration: "Jun 2020 - Aug 2024",
    },
    {
      institute: "Ungku Omar Polytechnic",
      instituteUrl: "https://www.puo.edu.my/webportal/departments/academic-departments/the-department-of-electrical-engineering/",
      degree: "Diploma in Electrical and Electronics Engineering",
      duration: "Jun 2017 - April 2020",
    },
  ],
};

//skills data (update here)
const skills = {
  title: "Skills & Learning Progress",
  description: "I’m early in my journey—these are tools I’m practicing now and still learning. The badges show my current comfort level.",
  items: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
      level: "learning"
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
      level: "learning"
    },
    {
      icon: <FaJs />,
      name: "javascript",
      level: "practicing"
    },
    {
      icon: <FaReact />,
      name: "react.js",
      level: "practicing"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
      level: "practicing"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
      level: "learning"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
      level: "practicing"
    },
    {
      icon: <FaPython />,
      name: "python",
      level: "comfortable"
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  // pad about section to always have 8 slots
  const aboutPadded = [
    ...about.info,
    ...Array(Math.max(0, 8 - about.info.length)).fill({
      fieldName: "",
      fieldValue: "",
      __placeholder: true,
    }),
  ];

  const levelLabel = {
    learning: "Learning",
    practicing: "Practicing",
    comfortable: "Comfortable",
    familiar: "Familiar",
  };

  const levelBarWidth = {
    learning: "w-[40%]",
    practicing: "w-[65%]",
    comfortable: "w-[85%]",
    familiar: "w-[50%]",
  };

  const levelBadgeClass = {
    learning: "bg-amber-400/20 text-amber-200 border border-amber-400/30",
    practicing: "bg-sky-400/20 text-sky-200 border border-sky-400/30",
    comfortable: "bg-emerald-400/20 text-emerald-200 border border-emerald-400/30",
    familiar: "bg-violet-400/20 text-violet-200 border border-violet-400/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, }}
      transition={{ delay: 1, duration: 3, ease: "easeOut" }}
      className="min-h-[70vh] flex items-center justify-center py-8 xl:py-6"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-8 xl:gap-10">
          {/* Left menu */}
          <TabsList className="flex flex-col w-full max-w-[340px] mx-auto xl:mx-0 gap-3">
            <TabsTrigger value="experience" className="text-sm md:text-base">Experience</TabsTrigger>
            <TabsTrigger value="education" className="text-sm md:text-base">Education</TabsTrigger>
            <TabsTrigger value="skills" className="text-sm md:text-base">Skills</TabsTrigger>
            <TabsTrigger value="about" className="text-sm md:text-base">About Me</TabsTrigger>
          </TabsList>

          {/* Right content */}
          <div className="min-h-[60vh] w-full">
            {/* EXPERIENCE */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-4 text-center xl:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{experience.title}</h3>
                <p className="max-w-[640px] text-sm md:text-base leading-relaxed text-white/70 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[380px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
                    {experience.items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-[#232329] py-5 px-6 rounded-xl flex flex-col justify-center gap-2"
                      >
                        <span className="text-accent text-xs md:text-sm">{item.duration}</span>
                        <h3 className="text-left md:text-xl font-medium">{item.position}</h3>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          {item.companyUrl ? (
                            <a
                              href={item.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/70 text-sm hover:text-accent hover:underline decoration-dotted underline-offset-4"
                              title={`Open ${item.company} in a new tab`}
                              aria-label={`Open ${item.company} in a new tab`}
                            >
                              {item.company}
                            </a>
                          ) : (
                          <span className="text-white/70 text-sm">{item.company}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-4 text-center xl:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{education.title}</h3>
                <p className="max-w-[640px] text-sm md:text-base leading-relaxed text-white/70 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[380px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
                    {education.items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-[#232329] py-5 px-6 rounded-xl flex flex-col justify-center gap-2"
                      >
                        <span className="text-accent text-xs md:text-sm">{item.duration}</span>
                        <h3 className="text-left md:text-xl font-medium">{item.degree}</h3>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          {item.instituteUrl ? (
                          <a
                              href={item.instituteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/70 text-sm hover:text-accent hover:underline decoration-dotted underline-offset-4"
                              title={`Open ${item.institute} in a new tab`}
                              aria-label={`Open ${item.institute} in a new tab`}
                            >
                              {item.institute}
                            </a>
                          ) : (
                          <p className="text-white/70 text-sm">{item.institute}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-center xl:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{skills.title}</h3>
                  <p className="max-w-[640px] text-sm md:text-base leading-relaxed text-white/70 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {skills.items.map((skill, i) => (
                    <li key={i}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="relative w-full h-[120px] md:h-[140px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            {/* badge */}
                            {skill.level && (
                              <span
                                className={[
                                  "absolute top-2 right-2 text-[10px] px-2 py-[2px] rounded-full",
                                  levelBadgeClass[skill.level] || "bg-white/10 text-white/70",
                                ].join(" ")}
                              >
                                {levelLabel[skill.level] || "Learning"}
                              </span>
                            )}

                            {/* icon */}
                            <div className="text-4xl md:text-5xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>

                            {/* progress bar */}
                            {skill.level && (
                              <div className="absolute left-3 right-3 bottom-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className={["h-full bg-accent", levelBarWidth[skill.level] || "w-[40%]"].join(" ")} />
                              </div>
                            )}
                          </TooltipTrigger>
                          <TooltipContent><p className="text-sm">{skill.name}</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* ABOUT */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{about.title}</h3>
                <p className="max-w-[900px] text-sm md:text-base leading-relaxed text-white/70 mx-auto xl:mx-0">
                  {about.description}
                </p>

                {/* two-column definition list on desktop */}
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-16 max-w-[900px] mx-auto xl:mx-0">
                  {aboutPadded.map((item, i) => (
                    <li
                      key={i}
                      className={`${
                        item.__placeholder ? "hidden" : ""
                      } grid grid-cols-[120px,minmax(0,1fr)] items-baseline gap-3`}
                    >
                      {/* label */}
                      <span className="text-white/60 text-sm">{item.fieldName}</span>

                      {/* value (email/contact clickable) */}
                      {item.fieldName === "Email" ? (
                        <a
                          href={`mailto:${item.fieldValue}`}
                          className="text-base md:text-lg hover:text-accent underline decoration-dotted underline-offset-4"
                        >
                          {item.fieldValue}
                        </a>
                      ) : item.fieldName === "Contact" ? (
                        <a
                          href={`tel:${String(item.fieldValue).replace(/\D/g, "")}`}
                          className="text-base md:text-lg hover:text-accent"
                        >
                          {item.fieldValue}
                        </a>
                      ) : (
                        <span className="text-base md:text-lg">{item.fieldValue}</span>
                      )}
                    </li>
                  ))}
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