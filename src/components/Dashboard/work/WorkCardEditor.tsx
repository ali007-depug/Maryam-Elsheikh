import React, { useState } from "react";
import { Briefcase } from "lucide-react";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { IKUpload } from "imagekitio-react";
import { Loader2 } from "lucide-react";
import { Upload } from "lucide-react";

interface WorkCardEditorProps {
  exp: {
    src: string;
    role: string;
    company: string;
    date: string;
    description: string;
  };
  isEditing: boolean;
  onUpdate: (updatedField: Partial<WorkCardEditorProps["exp"]>) => void;
  index: number;
}
export default function WorkCardEditor({
  exp,
  isEditing,
  onUpdate,
  index,
  
}: WorkCardEditorProps) {
  const [uploading, setUploading] = useState(false);

  // --- READ-ONLY PREVIEW ---
  if (!isEditing) {
    return (
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="h-24 w-24 shrink-0 bg-slate-950 rounded-[2rem] flex items-center justify-center border border-white/5 shadow-2xl overflow-hidden relative group-hover:border-orange-500/30 transition-all duration-500">
          {exp.src ? (
            <img
              src={exp.src}
              alt="logo"
              className="h-14 w-14 object-contain"
            />
          ) : (
            <Briefcase className="text-slate-700" size={40} />
          )}
          <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="flex-1 space-y-4 w-full">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div className="space-y-1">
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                {exp.role || "Position Title"}
              </h3>
              <p className="text-orange-500 font-bold text-lg tracking-tight uppercase">
                {exp.company || "Company Name"}
              </p>
            </div>
            <span className="px-6 py-2 bg-white/5 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border border-white/5">
              {exp.date || "Date Range"}
            </span>
          </div>
          <p className="text-slate-400 text-base leading-relaxed max-w-4xl border-l-2 border-slate-800 pl-6 py-1">
            {exp.description || "Historical data pending input."}
          </p>
        </div>
      </div>
    );
  }

  // --- EDITING STATE ---
  return (
    <div className="space-y-10 animate-in fade-in zoom-in-95 duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-1">
            Job Designation
          </label>
          <Input
            value={exp.role}
            onChange={(e) => onUpdate({ role: e.target.value })}
            className="bg-slate-950 border-slate-800 rounded-2xl h-14 text-white focus-visible:ring-orange-500 placeholder:text-slate-700"
            placeholder="e.g. Lead UI Engineer"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-1">
            Timeline Period
          </label>
          <Input
            value={exp.date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onUpdate({ date: e.target.value })
            }
            className="bg-slate-950 border-slate-800 rounded-2xl h-14 text-white placeholder:text-slate-700"
            placeholder="e.g. 2021 — Present"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-end">
        <div className="flex-1 space-y-3 w-full">
          <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-1">
            Organization
          </label>
          <Input
            value={exp.company}
            onChange={(e) => onUpdate({ company: e.target.value })}
            className="bg-slate-950 border-slate-800 rounded-2xl h-14 text-orange-500 font-black uppercase tracking-tight"
            placeholder="Company Brand"
          />
        </div>

        <div className="relative group/upload self-start md:self-end">
          <IKUpload
            fileName={`work-logo-${index}.png`}
            folder="/work-experience"
            className="hidden"
            id={`ik-upload-${index}`}
            onUploadStart={() => setUploading(true)}
            onSuccess={(res: { url: string }) => {
              setUploading(false);
              onUpdate({ src: res.url });
            }}
          />
          <label
            htmlFor={`ik-upload-${index}`}
            className="h-14 w-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-slate-700 hover:border-orange-500 transition-all shadow-xl group/label"
          >
            {uploading ? (
              <Loader2 size={20} className="animate-spin text-orange-500" />
            ) : exp.src ? (
              <img src={exp.src} className="h-10 w-10 object-contain" />
            ) : (
              <Upload
                size={20}
                className="text-slate-500 group-hover/label:text-orange-500"
              />
            )}
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-1">
          Experience Details
        </label>
        <Textarea
          value={exp.description}
          onChange={(e) => onUpdate({ description: e.target.value })}
          className="bg-slate-950 border-slate-800 rounded-[2rem] min-h-[160px] text-slate-300 leading-relaxed focus-visible:ring-orange-500 p-6 text-lg"
          placeholder="What did you achieve here?"
        />
      </div>
    </div>
  );
}
