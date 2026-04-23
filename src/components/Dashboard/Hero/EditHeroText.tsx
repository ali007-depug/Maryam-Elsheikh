/**
 * REFACTOR: LINE-BREAK PERSISTENCE
 * 1. REMARK-BREAKS: Converts single newlines into <br /> tags.
 * 2. WHITESPACE-PRE-WRAP: Ensures CSS preserves the spacing from the editor.
 */

import { useState, useRef } from "react";
import { Button } from "../../ui/button";
import {
  Save,
  EyeOff,
  X,
  Eye,
  Bold,
  Italic,
  Type,
  Heading1,
  Heading2,
  Heading3,
  List,
} from "lucide-react";
import { Textarea } from "../../ui/textarea";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks"; // Import this for single line breaks

export default function EditHeroText({
  value,
  onChange,
  onSave,
  onCancel,
  isAdmin
}: {
  value: string;
  onChange: (v: string) => void;
  onSave: () => void;
  onCancel: () => void;
  isAdmin: boolean;
}) {
  const [showPreview, setShowPreview] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const injectMarkdown = (prefix: string, suffix: string = "") => {
    const el = textAreaRef.current;
    if (!el) return;

    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selectedText = value.substring(start, end);
    const beforeText = value.substring(0, start);
    const afterText = value.substring(end);

    let finalPrefix = prefix;
    if (
      prefix === "* " &&
      beforeText.length > 0 &&
      !beforeText.endsWith("\n")
    ) {
      finalPrefix = `\n${prefix}`;
    }

    const newValue = `${beforeText}${finalPrefix}${selectedText || "item"}${suffix}${afterText}`;
    onChange(newValue);

    setTimeout(() => {
      el.focus();
      const cursorOffset = finalPrefix.length;
      el.setSelectionRange(start + cursorOffset, end + cursorOffset);
    }, 10);
  };
return (
    <div className="w-full space-y-4 md:space-y-6 overflow-hidden">
      {/* --- TOOLBAR --- */}
      <div className="flex flex-col gap-3">
        {/* Scrollable Container for Icons */}
        <div className="w-full overflow-x-auto no-scrollbar bg-slate-900/80 p-1.5 rounded-xl border border-white/5 backdrop-blur-md">
          <div className="flex items-center gap-1 min-w-max">
            <div className="flex border-r border-white/10 pr-1 mr-1">
              <ToolbarButton icon={<Heading1 size={14} />} onClick={() => injectMarkdown("# ")} label="H1" />
              <ToolbarButton icon={<Heading2 size={14} />} onClick={() => injectMarkdown("## ")} label="H2" />
              <ToolbarButton icon={<Heading3 size={14} />} onClick={() => injectMarkdown("### ")} label="H3" />
            </div>

            <div className="flex border-r border-white/10 pr-1 mr-1">
              <ToolbarButton icon={<Bold size={14} />} onClick={() => injectMarkdown("**", "**")} label="B" />
              <ToolbarButton icon={<Italic size={14} />} onClick={() => injectMarkdown("_", "_")} label="I" />
            </div>

            <div className="flex items-center">
              <ToolbarButton icon={<List size={14} />} onClick={() => injectMarkdown("* ")} label="Bullet" />
              <ToolbarButton icon={<Type size={14} />} onClick={() => injectMarkdown("<small>", "</small>")} label="Small" />
            </div>
          </div>
        </div>

        {/* Action Toggles */}
        <Button
          variant="ghost"
          size="sm"
          className="w-full h-10 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white/5 rounded-xl border border-white/5"
          onClick={() => setShowPreview(!showPreview)}
        >
          {showPreview ? <><EyeOff className="w-3 h-3 mr-2" /> Editor</> : <><Eye className="w-3 h-3 mr-2" /> Preview</>}
        </Button>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="w-full">
        {!showPreview ? (
          <Textarea
            ref={textAreaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full min-h-[250px] md:min-h-[380px] font-mono text-sm leading-relaxed p-4 md:p-8 bg-slate-950 border-slate-800 text-slate-300 rounded-xl md:rounded-[2.5rem] focus-visible:ring-orange-500 overflow-x-hidden"
            placeholder="Type your content here..."
          />
        ) : (
          <div className="w-full min-h-[250px] md:min-h-[380px] p-4 md:p-8 bg-slate-900/50 border border-white/5 rounded-xl md:rounded-[2.5rem] overflow-x-hidden overflow-y-auto">
            <div className="prose prose-sm md:prose-base prose-invert prose-orange max-w-full break-words">
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {value}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>

      {/* --- ACTIONS --- */}
      <div className="flex flex-col xs:flex-row gap-3 pt-2">
        <Button
          onClick={onSave}
          disabled={!isAdmin}
          className="w-full xs:flex-1 bg-green-600 text-white font-black uppercase tracking-widest text-[10px] h-12 md:h-14 rounded-xl"
        >
          <Save className="w-4 h-4 mr-2" /> Save Changes
        </Button>
        <Button
          variant="ghost"
          onClick={onCancel}
          className="w-full xs:w-auto text-slate-500 font-black uppercase tracking-widest text-[10px] h-12 md:h-14 px-8 rounded-xl border border-white/5"
        >
          <X className="w-4 h-4 mr-2" /> Cancel
        </Button>
      </div>
    </div>
  );}

function ToolbarButton({
  icon,
  onClick,
  label,
}: {
  icon: React.ReactNode;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      className="h-9 w-9 flex items-center justify-center rounded-xl text-slate-400 hover:text-orange-500 hover:bg-white/5 transition-all"
    >
      {icon}
    </button>
  );
}
