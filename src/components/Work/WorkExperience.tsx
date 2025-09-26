"use client";
import { motion } from "framer-motion";
// import type { expProp } from "../../data/Work";
import type { Experience } from "../../data/Work";
import { WorkData } from "../../data/Work";

interface workCardProps {
  exp: Experience;
  index: number;
}
interface WorkExperienceTimelineProps {
  portfolioType: "Chemical Engineer" | "Content Writer";
}

export default function WorkExperienceTimeline({portfolioType}: WorkExperienceTimelineProps) {
  
const data = WorkData[portfolioType].experience;


  return (
    <section
      id="work"
      className="bg-gradient-to-r  from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6"
    >
      <div className="relative mb-16 sm:mb-20 inline-block w-full text-center">
        {/* Background text */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-11 w-full">
          <span className="text-[60px] sm:text-[100px] lg:text-[140px] font-extrabold text-white opacity-6 tracking-widest select-none">
            WORK
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl text-white relative">
          Work Experience
        </h1>
      </div>

      {/* small desc */}
      <div className="w-full mx-auto mb-10 max-w-3xl px-6 text-center">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white">
          My work experience spans{" "}
          <span className="font-semibold italic">
            marketing, sales, and engineering
          </span>{" "}
          internships, where I gained strong skills in leadership, teamwork, and
          problem-solving. These diverse roles reflect my adaptability and
          ability to excel across both{" "}
          <span className="italic text-gray-100">
            technical and creative fields
          </span>
          .
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 ">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1  bg-white transform -translate-x-1/2"></div>

        <div className="space-y-16 max-md:overflow-hidden">
          {data.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative flex flex-col sm:flex-row ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Dot */}
              <span className="absolute left-1/2 max-sm:top-1 top-4 w-5 h-5 rounded-full max-md:bg-gray-300 bg-gray-800 border-4 max-md:border-orange-500 border-white transform -translate-x-1/2"></span>

              {/* Card */}
              <WorkCard exp={exp} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ exp, index }: workCardProps) {
  return (
    // card wrapper
    <div
      className={`bg-gray-700 shadow shadow-gray-700 border border-gray-400 rounded-2xl p-6 sm:p-8 w-full md:w-5/12 hover:scale-105 transition-all duration-200 ease-in-out ${
        index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
      }`}
    >
      {/* card role + data */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          {exp.role}
        </h3>
        <span className="text-sm text-gray-200 mt-1 sm:mt-0">
          {exp.date}
        </span>
      </div>

      {/* company name + logo */}
      <div className="flex justify-between items-center">
        {/* name */}
        <h4 className="text-lg font-medium text-sky-400  mb-2">
          {exp.company}
        </h4>
        {/* logo */}
        <img
          src={exp.src}
          alt={exp.company + "logo"}
          width={50}
          height={50}
          className="rounded size-17 md:size-20"
        />
      </div>
      {/* desc */}
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {exp.description}
      </p>
    </div>
  );
}
