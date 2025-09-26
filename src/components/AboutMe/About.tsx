import { aboutData } from "../../data/About";
import { IconHandler } from "./IconsHandler";

export default function About({
  portfolioType,
}: {
  portfolioType: "Chemical Engineer" | "Content Writer";
}) {
  const { about, highlightClass, pButton, cards } = aboutData[portfolioType];

  return (
    <section
      id="about"
      className="mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20"
    >
      {/* Heading wrapper */}
      <div className="relative mb-16 sm:mb-20 inline-block w-full text-center">
        {/* Background text */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10 w-full">
          <span
            className={`text-[60px] sm:text-[100px] lg:text-[140px] font-extrabold opacity-30 tracking-widest select-none ${
              portfolioType === "Chemical Engineer"
                ? "text-gray-600"
                : "text-orange-700"
            }`}
          >
            ABOUT
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={`text-center font-bold text-4xl sm:text-5xl lg:text-6xl relative ${
            portfolioType === "Chemical Engineer"
              ? "text-gray-700"
              : "text-orange-500"
          }`}
        >
          About Me
        </h1>
      </div>

      {/* About content */}
      <div className="max-md:grid-cols-1 grid grid-cols-[1.5fr_1fr] gap-2.5 space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
        <div className="col-start-1 col-end-2 text-balance">
          {/* about content */}
          {about.map((para, idx) => (
            <p
              key={idx}
              dangerouslySetInnerHTML={{
                __html: para.replace(
                  'class="highlight"',
                  `class="font-semibold ${highlightClass}"`
                ),
              }}
            />
          ))}
        </div>
        {/* card contents */}
        <div className="max-lg:grid-cols-1 max-lg:grid-rows-4 max-lg:ga  grid grid-cols-2 grid-rows-2 gap-2.5">
          <Card cards={cards} />
        </div>
      </div>
      {/* linked in button */}

      <a
        href={pButton.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`mx-auto w-fit flex items-center justify-center gap-3 mt-5 px-6 py-3 rounded shadow transition font-bold  text-white ${
          portfolioType === "Chemical Engineer"
            ? "bg-gray-700 hover:bg-gray-800"
            : "bg-orange-600 hover:bg-orange-700"
        }`}
      >
        <IconHandler iconName={pButton.imgSrc} color={pButton.iconColor} size={25}/>
        {pButton.text}
      </a>
    </section>
  );
}

interface cards {
  cards: cardProp[];
}

interface cardProp {
  icon: string;
  text: string;
  title:string;
}
function Card({ cards }: cards) {
  return (
    <>
      {cards.map((c,index) => (
        <div
        key={index}
          className="flex p-2 border rounded-lg shadow-md  flex-col items-center 
    space-y-4 text-sm min-w-20 max-md:min-h-40"
        >
          <IconHandler iconName={c.icon} size={30} />
          <p>{c.title}</p>
          <p>{c.text}</p>
        </div>
      ))}
    </>
  );
}
