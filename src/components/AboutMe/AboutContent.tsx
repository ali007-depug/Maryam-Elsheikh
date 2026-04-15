import { useEffect, useState } from "react";

import { FaLinkedin } from "react-icons/fa6";
import { IconHandler } from "./IconsHandler";

import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import AboutSkeleton from "./AboutSkelton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface CardProp {
  icon: string;
  text: string;
  title: string;
  iconColor: string;
  color: string;
}

interface AboutState {
  about: string[];
  cards: CardProp[];
}

export default function AboutContent({
  portfolioType,
}: {
  portfolioType: "Chemical Engineer" | "Content Writer";
}) {
  // Styles based on portfolioType
  const theme = {
    bgText:
      portfolioType === "Chemical Engineer"
        ? "text-gray-600/10"
        : "text-orange-700/10",
    heading:
      portfolioType === "Chemical Engineer"
        ? "text-sky-700"
        : "text-orange-500",
    highlight:
      portfolioType === "Chemical Engineer"
        ? "text-sky-400 font-bold"
        : "text-orange-600 font-bold",
    button:
      portfolioType === "Chemical Engineer"
        ? "bg-sky-800 hover:bg-sky-600"
        : "bg-orange-600 hover:bg-orange-700",
    aboutText:
      portfolioType === "Chemical Engineer"
        ? "text-sky-950 "
        : "text-slate-600",
  };

  const [data, setData] = useState<AboutState | null>(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const getAboutData = async () => {
      setFetching(true);
      try {
        // 1. Find the parent portfolio document (e.g. Chemical Engineer)
        const q = query(
          collection(db, "portfolioType"),
          where("type", "==", portfolioType.toLowerCase()),
        );
        const snap = await getDocs(q);

        if (!snap.empty) {
          const pId = snap.docs[0].id;

          // 2. Fetch the specific document inside the 'about' subcollection
          // Path: /portfolioType/{pId}/about/
          const aboutSnap = await getDocs(
            collection(db, "portfolioType", pId, "about"),
          );

          if (!aboutSnap.empty) {
            // We take the first (and likely only) document in that subcollection
            const docData = aboutSnap.docs[0].data();

            // 3. Map the two arrays (about and cards) from the same document
            setData({
              about: docData.about || [], // The array of paragraphs
              cards: docData.cards || [], // The array of card objects
            });
          }
        }
      } catch (error) {
        console.error("About Fetch Error:", error);
      } finally {
        setFetching(false);
      }
    };

    getAboutData();
  }, [portfolioType]);

  if (fetching) return <AboutSkeleton />;

  if (!data) return null;

  return (
    <>
      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Paragraphs */}
        <div
          className={`lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed ${theme.aboutText}`}
        >
          {data.about.map((para, idx) => (
            <div key={idx} className="relative">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // Render the paragraph with your 'first-letter' styling
                  p: ({ children }) => (
                    <p
                      className={`mb-6 first-letter:text-2xl first-letter:font-black   first-letter:${theme.heading}`}
                    >
                      {children}
                    </p>
                  ),
                  // Map **bold** or <strong> to your highlight theme
                  strong: ({ children }) => (
                    <span className={`${theme.highlight}`}>{children}</span>
                  ),
                  // Map links if you have them in your 'about' text
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="underline decoration-orange-500/30 hover:decoration-orange-500 transition-all"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {para}
              </ReactMarkdown>
            </div>
          ))}
          {/* LinkedIn Button */}
          <div className="pt-6 flex items-center justify-center ">
            <a
              href={"https://www.linkedin.com/in/maryamelsheikh1998"}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-4 px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 font-black uppercase tracking-widest text-[10px] text-white ${theme.button}`}
            >
              <FaLinkedin size={22} /> Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Feature Cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {data.cards.map((c, index) => (
            <div
              key={index}
              className={`group p-6 rounded-3xl bg-white/5 border border-white/10 ${portfolioType == "Chemical Engineer" ? "hover:border-sky-900" : "hover:border-orange-500"} transition-all duration-500 flex flex-col items-center text-center space-y-4 shadow-2xl`}
            >
              <div className="p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">
                <IconHandler
                  iconName={c.icon}
                  color={c.iconColor || `${theme.heading}`}
                  size={32}
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-slate-600 font-black uppercase tracking-widest text-[10px] opacity-60">
                  {c.title}
                </h3>
                <p className="text-slate-600 font-bold text-lg leading-tight">
                  {c.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
