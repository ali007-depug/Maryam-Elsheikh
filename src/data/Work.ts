export interface expProp {
//   type: "Chemical Engineer" | "Content Writer";
  experience: Experience[];
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  description: string;
  src: string;
}

export const WorkData = {
   "Chemical Engineer":{
  experience: [
    {
      role: "Marketing Team Supervisor",
      company: "Marciel Marketing Company",
      date: "12/2024 – Present",
      description:
        "Oversee content strategy planning and execution, leading a team of creators to produce high-quality, brand-aligned content. Optimize workflows, review and edit content, coordinate with teams, and ensure consistency across channels.",
      src: "marciel.webp",
    },
    {
      role: "Sales Associate - Computer Showroom (Internship)",
      company: "Alfafa for Computer Company LTD",
      date: "7/2025 – 8/2025",
      description:
        "Assisted customers in selecting computers, printers, and accessories by providing technical guidance and product knowledge. Managed sales transactions, maintained product displays, and supported after-sales inquiries.",
      src: "alafaf.webp",
    },
    {
      role: "Operation Engineer (Internship)",
      company: "Azal Pharma",
      date: "2/2022 – 3/2022",
      description:
        "Gained hands-on experience in operating and controlling RO-systems, water quality monitoring, and teamwork. Prepared and compared daily results and technical reports.",
      src: "azal.webp",
    },
    {
      role: "QC Engineer (Training)",
      company: "Sudanese Standards & Metrology Organization (SSMO)",
      date: "11/2023 – 23/2/2023",
      description:
        "Trained in maintaining a safe work environment, applying standard operating procedures, and compiling data sheets. Assisted in quality control testing of samples and reporting findings.",
      src: "ssmo.webp",
    },
  ],
},
"Content Writer":{
  experience: [
    {
      role: "Marketing Team Supervisor",
      company: "Marciel Marketing Company",
      date: "12/2024 – Present",
      description:
        "Working remotely, I oversee the planning, management, and execution of content strategies. Lead a team of creators to produce brand-aligned content, optimize workflows, review and edit, and ensure message consistency across all channels.",
      src: "marciel.webp",
    },
    {
      role: "Content Writer (Volunteer)",
      company: "TEDx WadMadani",
      date: "2021",
      description:
        "Volunteered as a content writer remotely, created 15+ posts supporting the conference, managed the Facebook page, and increased followers by 50%.",
      src: "tedEx.webp",
    },
    {
      role: "Articles Writer",
      company: "Akerlahza Newspaper",
      date: "12/2019 – 12/2020",
      description:
        "Worked remotely as a weekly articles writer focusing on women’s issues and community problems. Developed skills in research, analysis, and creative report writing.",
      src: "akherLahza.webp",
    },
  ],
}
};
