import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Pen, Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { heroData } from "../../../data/Hero";
import EditHeroText from "./EditHeroText";
// Markdown Imports
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ImageKitManager from "./UploadImage";
import { toast } from "sonner";

export default function HeroContent({
  portfolioType,
  isAdmin
}: {
  portfolioType: string;
  isAdmin: boolean;
}) {
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [ids, setIds] = useState({ portfolioId: "", heroId: "" });
  const [loading, setLoading] = useState(true);
  const [heroImg, setHeroImg] = useState("");

  const styleData = heroData.find((h) => h.type === portfolioType);

  useEffect(() => {
    async function getHeroData() {
      setLoading(true);
      try {
        const q = query(
          collection(db, "portfolioType"),
          where("type", "==", portfolioType.toLowerCase()),
        );
        const snap = await getDocs(q);
        if (!snap.empty) {
          const pId = snap.docs[0].id;
          const hSnap = await getDocs(
            collection(db, "portfolioType", pId, "Hero"),
          );
          if (!hSnap.empty) {
            const data = hSnap.docs[0].data();
            setDescription(data.description || "");
            setHeroImg(data.heroImg || "");
            setIds({ portfolioId: pId, heroId: hSnap.docs[0].id });
          }
        }
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    }
    getHeroData();
  }, [portfolioType]);

  const saveToFirebase = async () => {
    const heroRef = doc(
      db,
      "portfolioType",
      ids.portfolioId,
      "Hero",
      ids.heroId,
    );
    await updateDoc(heroRef, { description: textAreaValue });
    setDescription(textAreaValue);
    setIsEditing(false);
    toast.success("Hero Has Been Change Successfully");
  };

  if (loading)
    return (
      <div className="p-40 flex flex-col items-center justify-center space-y-4">
        <Loader2 className="animate-spin text-orange-500" size={40} />
        <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">
          Syncing Assets...
        </span>
      </div>
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* --- LEFT COLUMN: CONTENT EDITOR --- */}
      <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden min-h-[550px] flex flex-col transition-all hover:border-orange-500/10">
        {!isEditing ? (
          <div className="p-10 flex-1 relative">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-orange-500" />
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                  Hero Narrative
                </h3>
              </div>
              <Button
                variant="ghost"
                className="bg-white/5 hover:bg-orange-500 hover:text-white rounded-xl px-6 font-bold text-xs transition-all border border-white/5"
                onClick={() => {
                  setTextAreaValue(description);
                  setIsEditing(true);
                }}
              >
                <Pen className="w-4 h-4 mr-2" /> Edit Copy
              </Button>
            </div>

            <article className="prose prose-invert prose-orange max-w-none prose-p:text-slate-400 prose-p:leading-relaxed prose-headings:text-white">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {description ||
                  "*Initial narrative pending. Define your impact.*"}
              </ReactMarkdown>
            </article>

            {/* Subtle Gradient Decor */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
          </div>
        ) : (
          <div className="p-10 bg-slate-950/40 flex-1">
            <EditHeroText
              value={textAreaValue}
              onChange={setTextAreaValue}
              onSave={saveToFirebase}
              onCancel={() => setIsEditing(false)}
              isAdmin={isAdmin}
            />
          </div>
        )}
      </div>

      {/* --- RIGHT COLUMN: VISUAL ENGINE --- */}
      <div className="lg:col-span-5 space-y-8">
        {/* Visual Preview Window */}
        <div
          className={`relative p-12 rounded-[2.5rem] flex flex-col justify-center items-center overflow-hidden border border-white/10 shadow-2xl min-h-[350px] ${styleData?.bgGradient || "bg-slate-950"}`}
        >
          {/* Dynamic Background Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
            className={`absolute w-64 h-64 rounded-full ${styleData?.glowColor || "bg-orange-600"} blur-[100px] pointer-events-none`}
          />

          <div className="relative group">
            <div className="absolute inset-0 bg-orange-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <img
              src={
                heroImg || "https://placehold.co/400x400?text=Awaiting+Media"
              }
              alt="hero preview"
              className="relative w-56 h-56 rounded-full border-[6px] border-slate-900 shadow-2xl object-cover z-10 transition-transform group-hover:scale-105 duration-500"
            />
          </div>

          <div className="mt-8 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              Live Frame Preview
            </span>
          </div>
        </div>
        
        
        {/* Upload Manager (Customized via Props or CSS in the component itself) */}
        <div className="bg-slate-900/40 p-2 rounded-[2rem] border border-white/5">
          <ImageKitManager
            ids={ids}
            onUploadSuccess={(url) => setHeroImg(url)}
            currentImg={heroImg}
            isAdmin={isAdmin}
          />
        </div>
      </div>
    </div>
  );
}
