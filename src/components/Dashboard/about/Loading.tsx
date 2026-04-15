import { Loader2 } from "lucide-react";
export default function Loading() {
  return (
    <div className="p-40 flex flex-col items-center justify-center space-y-4">
      <Loader2 className="animate-spin text-orange-500" size={40} />
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
        Retrieving Narrative...
      </span>
    </div>
  );
}
