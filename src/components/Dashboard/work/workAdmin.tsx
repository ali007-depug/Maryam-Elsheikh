/**
 * REFACTOR STRATEGY: WORK ADMIN (MATCHING ABOUT ADMIN)
 * 1. EXPANSIVE WIDTH: max-w-[1600px] for that cinematic dashboard feel.
 * 2. CONSISTENT THEME: slate-950 base, glass-pill components, and orange-500 accents.
 * 3. CINEMATIC HEADING: Background "WORK" text at 0.03 opacity to match the "ABOUT" section.
 * 4. LAYOUT: Center-focused content stack with a left-aligned professional timeline.
 */

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
import { Save, X, Pen, Plus, Trash2, Loader2, Sparkles } from "lucide-react";
import WorkCardEditor from "./WorkCardEditor";
import { IKContext } from "imagekitio-react";
import { motion, AnimatePresence } from "framer-motion";
import { authenticator } from "../../../lib/imagekit";
import { toast } from "sonner";
// ImageKit Credentials
const publicKey = import.meta.env.VITE_IK_PUBLIC_KEY;
const urlEndpoint = import.meta.env.VITE_IK_URL_ENDPOINT;

export interface Experience {
  role: string;
  company: string;
  date: string;
  description: string;
  src: string;
}

export default function WorkAdmin({
  portfolioType,
}: {
  portfolioType: string;
}) {
  const [ids, setIds] = useState({ portfolioId: "", workId: "" });
  const [loading, setLoading] = useState(true);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function getWorkData() {
      setLoading(true);
      try {
        const q = query(
          collection(db, "portfolioType"),
          where("type", "==", portfolioType.toLowerCase()),
        );
        const snap = await getDocs(q);
        if (!snap.empty) {
          const pId = snap.docs[0].id;
          const wSnap = await getDocs(
            collection(db, "portfolioType", pId, "work"),
          );
          if (!wSnap.empty) {
            setExperiences(wSnap.docs[0].data().experience || []);
            setIds({ portfolioId: pId, workId: wSnap.docs[0].id });
          }
        }
      } catch (e) {
        console.error("Fetch Error:", e);
      }
      setLoading(false);
    }

    getWorkData();
  }, [portfolioType]);

  const handleSave = async () => {
    if (!ids.portfolioId || !ids.workId) return;
    setIsSaving(true);
    try {
      const workRef = doc(
        db,
        "portfolioType",
        ids.portfolioId,
        "work",
        ids.workId,
      );
      await updateDoc(workRef, { experience: experiences });
      setIsEditing(false);
      toast.success("Work Card Has Been Change Successfully");
    } catch (e) {
      console.error("Save Error:", e);
    }
    setIsSaving(false);
  };

  if (loading)
    return (
      <div className="p-40 flex flex-col items-center justify-center space-y-4">
        <Loader2 className="animate-spin text-orange-500" size={40} />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
          Fetching Portfolio Data...
        </span>
      </div>
    );

  return (
    <IKContext
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
    >
      <section className="relative mx-auto max-w-[1600px] py-20 px-6 sm:px-12 bg-slate-950 backdrop-blur-xl rounded-[3.5rem] border border-white/5 shadow-2xl mt-10 overflow-hidden transition-all duration-500 hover:border-orange-500/10">
        {/* --- CINEMATIC HEADING (Matching About Admin) --- */}
        <div className="relative mb-24 text-center">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-0 w-full pointer-events-none">
            <span className="text-[80px] sm:text-[120px] lg:text-[180px] font-black opacity-[0.03] tracking-[0.2em] select-none uppercase text-orange-500">
              WORK
            </span>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <Sparkles className="text-orange-500" size={20} />
              <h1 className="font-black text-5xl sm:text-6xl text-white tracking-tighter">
                Career <span className="text-orange-500 italic">Timeline</span>
              </h1>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              Professional Milestone Management
            </p>
          </div>
        </div>

        {/* --- CONTENT STACK --- */}
        <div className="max-w-[1200px] mx-auto space-y-12 relative z-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="bg-slate-900/30 rounded-[2.5rem] border border-white/5 p-10 transition-all duration-500 hover:border-orange-500/20 hover:bg-slate-900/50">
                {isEditing && (
                  <button
                    className="absolute -top-3 -right-3 h-10 w-10 bg-rose-500/20 text-rose-500 border border-rose-500/20 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-rose-500 hover:text-white z-50 shadow-2xl"
                    onClick={() =>
                      setExperiences(experiences.filter((_, i) => i !== index))
                    }
                  >
                    <Trash2 size={18} />
                  </button>
                )}

                <WorkCardEditor
                  index={index}
                  exp={exp}
                  isEditing={isEditing}
                  onUpdate={(updated: Partial<Experience>) => {
                    const newExps = [...experiences];
                    newExps[index] = { ...newExps[index], ...updated };
                    setExperiences(newExps);
                  }}
                />
              </div>
            </div>
          ))}

          {isEditing && (
            <button
              onClick={() =>
                setExperiences([
                  ...experiences,
                  { role: "", company: "", date: "", description: "", src: "" },
                ])
              }
              className="w-full py-16 border-2 border-dashed border-slate-800 rounded-[2.5rem] text-slate-500 hover:text-orange-500 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all flex flex-col items-center gap-4 group"
            >
              <div className="p-5 bg-slate-800 rounded-2xl group-hover:bg-orange-500/20 group-hover:text-orange-500 transition-all">
                <Plus size={32} />
              </div>
              <Button className="font-black text-[10px] uppercase tracking-[0.3em]">
                Add Professional Milestone
              </Button>
            </button>
          )}
          {/* --- ADMIN ACTION BAR --- */}
          <div className=" flex  mx-auto w-fit gap-3">
            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex gap-2"
                >
                  <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-green-600  hover:bg-green-500 text-white font-black uppercase tracking-widest text-[10px] h-11 px-8 rounded-2xl shadow-xl shadow-orange-950/20"
                  >
                    {isSaving ? (
                      <Loader2 className="animate-spin w-4 h-4 mr-2" />
                    ) : (
                      <Save size={16} className="mr-2" />
                    )}{" "}
                    Push Changes
                  </Button>
                  <Button
                    onClick={() => setIsEditing(false)}
                    variant="ghost"
                    className="h-11 w-11 rounded-2xl bg-white/5 text-slate-400 hover:text-black"
                  >
                    <X size={20} />
                  </Button>
                </motion.div>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-white/5 cursor-pointer hover:bg-orange-600 text-white border border-white/10 h-11 px-8 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl"
                >
                  <Pen size={14} className="mr-2" /> Edit Timeline
                </Button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Decorative Glows */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      </section>
    </IKContext>
  );
}
