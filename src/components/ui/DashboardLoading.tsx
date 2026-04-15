import { motion } from "framer-motion";

export default function DashboardLoading() {
  return (
    <div className="w-full min-h-screen bg-slate-950 p-6 lg:p-12 space-y-10">
      
      {/* HEADER SKELETON */}
      <div className="flex justify-between items-end border-b border-white/5 pb-8">
        <div className="space-y-3">
          <Skeleton className="h-4 w-32 bg-orange-500/20" />
          <Skeleton className="h-10 w-64 bg-white/10" />
        </div>
        <Skeleton className="h-12 w-12 rounded-2xl bg-white/5" />
      </div>

      {/* STATS GRID SKELETON */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/5 border border-white/5 rounded-3xl p-6 space-y-4">
            <Skeleton className="h-4 w-20 bg-white/10" />
            <Skeleton className="h-8 w-32 bg-white/20" />
            <Skeleton className="h-2 w-full bg-white/5" />
          </div>
        ))}
      </div>

      {/* MAIN CONTENT AREA SKELETON */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Large Chart/Graph Area */}
        <div className="lg:col-span-2 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 h-[400px] flex flex-col justify-between">
          <div className="flex justify-between">
            <Skeleton className="h-6 w-40 bg-white/10" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-16 rounded-lg bg-white/5" />
              <Skeleton className="h-8 w-16 rounded-lg bg-white/5" />
            </div>
          </div>
          {/* Simulated Bars */}
          <div className="flex items-end justify-between gap-2 h-48">
            {[40, 70, 45, 90, 65, 80, 30].map((h, i) => (
              <Skeleton 
                key={i} 
                className="w-full bg-white/5 rounded-t-lg" 
                style={{ height: `${h}%` }} 
              />
            ))}
          </div>
        </div>

        {/* Sidebar Activity Feed */}
        <div className="space-y-6">
          <Skeleton className="h-6 w-32 bg-white/10 mb-4" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-4 items-center">
              <Skeleton className="h-10 w-10 rounded-full bg-white/5 shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-3/4 bg-white/10" />
                <Skeleton className="h-2 w-1/2 bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --- REUSABLE SKELETON ATOM --- */
function Skeleton({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={style}
      className={`relative overflow-hidden rounded-md ${className}`}
    >
      {/* The Shimmer Reflection */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
    </motion.div>
  );
}