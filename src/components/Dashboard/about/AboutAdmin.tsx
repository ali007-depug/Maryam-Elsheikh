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
import {
  Save,
  X,
  Pen,
  Plus,
  Loader2,
  Sparkles,
  Layout,
  BarChart3,
} from "lucide-react";
import {  type IconName } from "../../AboutMe/IconsHandler";
import IconEditor from "./IconPicker";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import EditHeroText from "../Hero/EditHeroText";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { toast } from "sonner";
import { useAuth } from "../../../context/Auth";

interface CardsProps {
  icon: IconName | string;
  title: string;
  text: string;
  iconColor: string;
  color: string;
  size?: number;
}

export default function AboutAdmin({
  portfolioType,
}: {
  portfolioType: "Chemical Engineer" | "Content Writer";
}) {
  const [ids, setIds] = useState({ portfolioId: "", aboutId: "" });
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [aboutParas, setAboutParas] = useState<string[]>([]);
  const [cards, setCards] = useState<CardsProps[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [markdownValue, setMarkdownValue] = useState("");

  const {isAdmin} = useAuth();

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

  useEffect(() => {
    async function getAboutData() {
      setLoading(true);
      try {
        const q = query(
          collection(db, "portfolioType"),
          where("type", "==", portfolioType.toLowerCase()),
        );
        const snap = await getDocs(q);
        if (!snap.empty) {
          const pId = snap.docs[0].id;
          const aSnap = await getDocs(
            collection(db, "portfolioType", pId, "about"),
          );
          if (!aSnap.empty) {
            const data = aSnap.docs[0].data();
            const paras = data.about || [];
            setAboutParas(paras);
            setCards(data.cards || []);
            setMarkdownValue(paras.join("\n\n"));
            setIds({ portfolioId: pId, aboutId: aSnap.docs[0].id });
          }
        }
      } catch (e) {
        console.error("Fetch Error:", e);
      }
      setLoading(false);
    }
    getAboutData();
  }, [portfolioType]);

  const handleSaveAll = async () => {
    if (!ids.portfolioId || !ids.aboutId) return;
    setIsSaving(true);
    try {
      const aboutRef = doc(db, "portfolioType", ids.portfolioId, "about", ids.aboutId);
      const newParas = isEditing 
        ? markdownValue.split("\n\n").filter(p => p.trim() !== "")
        : aboutParas;

      await updateDoc(aboutRef, { about: newParas, cards: cards });
      setAboutParas(newParas);
      setIsEditing(false);
            toast.success('About Data Has Been Change Successfully')

    } catch (e) {
      console.error("Save Error:", e);
    }
    setIsSaving(false);
  };

  const handleAddCard = () => {
    if (cards.length >= 4) return;
    setCards([...cards, {
      icon: "FaGraduationCap",
      title: "New Metric",
      text: "Description",
      iconColor: portfolioType === "Chemical Engineer" ? "#38bdf8" : "#f97316",
      color: "slate-200",
    }]);
  };

  if (loading) return <Loading />;

  return (
    <section className="relative mx-auto max-w-[1400px] py-20 px-6 sm:px-12 bg-slate-950 rounded-[3rem] border border-white/5 shadow-2xl mt-10 overflow-hidden">
      
      <div className="relative mb-16 text-center">
        <div className="flex items-center justify-center gap-3">
          <Sparkles className={theme.heading} size={20} />
          <h1 className="font-black text-4xl sm:text-5xl text-white tracking-tighter uppercase">
            About <span className={`${theme.heading} italic`}>Settings</span>
          </h1>
        </div>
      </div>

      <div className="space-y-12">
        <div className="bg-slate-900/30 p-8 rounded-[2.5rem] border border-white/5 min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Layout className={theme.heading} size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Narrative Content</span>
            </div>
            {!isEditing && (
              <Button
                onClick={() => setIsEditing(true)}
                variant="ghost"
                className={`bg-white cursor-pointer hover:text-white rounded-xl px-6 text-xs transition-all border border-white/5 ${portfolioType === "Chemical Engineer" ? "hover:bg-sky-600" : "hover:bg-orange-500"}`}
              >
                <Pen className="w-4 h-4 mr-2" /> Modify Bio
              </Button>
            )}
          </div>

          {!isEditing ? (
            <article className={`prose prose-invert max-w-none ${portfolioType === "Chemical Engineer" ? "prose-sky" : "prose-orange"} text-white`}>
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {aboutParas.join("\n\n") || "*Bio narrative empty.*"}
              </ReactMarkdown>
            </article>
          ) : (
            <div className="animate-in fade-in duration-500">
              <EditHeroText
                value={markdownValue}
                onChange={setMarkdownValue}
                onSave={handleSaveAll}
                onCancel={() => {
                   setMarkdownValue(aboutParas.join("\n\n"));
                   setIsEditing(false);
                }}
                isAdmin={isAdmin}
              />
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 ml-4">
            <BarChart3 className={theme.heading} size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Quick Metrics & Stats</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence>
              {cards.map((card, idx) => (
                <motion.div 
                  key={idx} 
                  className="relative group bg-slate-900/40 p-6 rounded-[2rem] border border-white/5"
                >
                  <IconEditor
                    currentIcon={card.icon}
                    currentText={card.text}
                    currentTitle={card.title}
                    currentColor={card.iconColor}
                    currentSize={card.size || 30}
                    onUpdate={(updated) => {
                      const newCards = [...cards];
                      newCards[idx] = { ...newCards[idx], ...updated };
                      setCards(newCards);
                    }}
                    isAdmin={isAdmin}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-slate-600 hover:text-rose-500"
                    onClick={() => setCards(cards.filter((_, i) => i !== idx))}
                  >
                    <X size={16} />
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>

            {cards.length < 4 && (
              <button
                onClick={handleAddCard}
                disabled={isAdmin ? false : true}
                className={`h-[180px] flex flex-col items-center justify-center border-2 border-dashed border-slate-800 rounded-[2rem] hover:bg-white/5 transition-all text-slate-600 ${portfolioType === "Chemical Engineer" ? "hover:border-sky-500" : "hover:border-orange-500"}`}
              >
                <Plus size={32} />
                <span className="text-[10px] font-black uppercase mt-3 text-center">Add<br/>Metric</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {!isEditing && (
        <div className="flex justify-center mt-12 border-t border-white/5 pt-10">
          <Button
            onClick={handleSaveAll}
            disabled={isSaving && isAdmin ? false : true}
            className={`text-white h-12 px-12 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${theme.button}`}
          >
            {isSaving ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : <Save size={16} className="mr-2" />}
            Sync All Changes
          </Button>
        </div>
      )}
    </section>
  );
}