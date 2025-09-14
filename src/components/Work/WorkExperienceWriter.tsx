export default function WorkExperienceWriter() {
  const experiences = [
    {
      role: "Marketing Team Supervisor",
      company: "Marciel Marketing Company",
      date: "12/2024 – Present",
      description:
        "Working remotely, I oversee the planning, management, and execution of content strategies. Lead a team of creators to produce brand-aligned content, optimize workflows, review and edit, and ensure message consistency across all channels.",
    },
    {
      role: "Content Writer (Volunteer)",
      company: "TEDx WadMadani",
      date: "2021",
      description:
        "Volunteered as a content writer remotely, created 15+ posts supporting the conference, managed the Facebook page, and increased followers by 50%.",
    },
    {
      role: "Articles Writer",
      company: "Akerlahza Newspaper",
      date: "12/2019 – 12/2020",
      description:
        "Worked remotely as a weekly articles writer focusing on women’s issues and community problems. Developed skills in research, analysis, and creative report writing.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6"
    >
 <div className="relative mb-16 sm:mb-20 inline-block w-full text-center">
        {/* Background text */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-11 w-full">
          <span className="text-[60px] sm:text-[100px] lg:text-[140px] font-extrabold text-white opacity-10 tracking-widest select-none">
            WORK
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl text-white relative">
          Work Experience
        </h1>
      </div>
      <div
        className={`grid gap-8 md:grid-cols-2`}
        style={{ gridAutoRows: "1fr" }}
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`${
              // If last card in odd count → span full width
              index === experiences.length - 1 && experiences.length % 2 !== 0
                ? "md:col-span-2"
                : ""
            } border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-900`}
          >
            <div className="flex flex-col gap-2 mb-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {exp.role}
              </h3>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {exp.company} • {exp.date}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
