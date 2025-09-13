"use client";
import { motion } from "framer-motion";

export default function WorkExperienceTimeline() {
  const experiences = [
    {
      role: "Marketing Team Supervisor",
      company: "Marciel Marketing Company",
      date: "12/2024 – Present",
      description:
        "Oversee content strategy planning and execution, leading a team of creators to produce high-quality, brand-aligned content. Optimize workflows, review and edit content, coordinate with teams, and ensure consistency across channels.",
    },
    {
      role: "Sales Associate - Computer Showroom (Internship)",
      company: "Alfafa for Computer Company LTD",
      date: "7/2025 – 8/2025",
      description:
        "Assisted customers in selecting computers, printers, and accessories by providing technical guidance and product knowledge. Managed sales transactions, maintained product displays, and supported after-sales inquiries.",
    },
    {
      role: "Operation Engineer (Internship)",
      company: "Azal Pharma",
      date: "2/2022 – 3/2022",
      description:
        "Gained hands-on experience in operating and controlling RO-systems, water quality monitoring, and teamwork. Prepared and compared daily results and technical reports.",
    },
    {
      role: "QC Engineer (Training)",
      company: "Sudanese Standards & Metrology Organization (SSMO)",
      date: "11/2023 – 23/2/2023",
      description:
        "Trained in maintaining a safe work environment, applying standard operating procedures, and compiling data sheets. Assisted in quality control testing of samples and reporting findings.",
    },
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
              <div className="relative mb-16 sm:mb-20 inline-block w-full text-center">
          {/* Background text */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10 w-full">
            <span className="text-[60px] sm:text-[100px] lg:text-[140px] font-extrabold text-gray-300 dark:text-ray-800 opacity-30 tracking-widest select-none">
                WORK
            </span>
          </div>
  
          {/* Main heading */}
          <h1 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl text-orange-500 relative">
            Work Experience
          </h1>
        </div>
  

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-orange-500 dark:bg-orange-400 transform -translate-x-1/2"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
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
              <span className="absolute left-1/2 top-4 w-5 h-5 rounded-full bg-orange-500 dark:bg-orange-400 border-4 border-white dark:border-gray-900 transform -translate-x-1/2"></span>

              {/* Card */}
              <div
                className={`bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 sm:p-8 w-full sm:w-5/12 ${
                  index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                    {exp.date}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-orange-600 dark:text-orange-400 mb-2">
                  {exp.company}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
