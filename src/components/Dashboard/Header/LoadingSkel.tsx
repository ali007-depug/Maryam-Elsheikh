/**
 * COMPONENT: AdminHeaderSkeleton
 * 1. LAYOUT: Mirrors the 1600px max-width and 80px (h-20) height.
 * 2. ANIMATION: 'animate-pulse' with a custom glass-shimmer effect.
 * 3. SHAPES: Matches the 'Squircle' (rounded-xl) geometry of your header.
 */

export default function AdminHeaderSkeleton() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[110] flex justify-center border-b border-white/5 bg-slate-950 backdrop-blur-2xl">
      <div className="w-full max-w-[1600px] h-20 px-6 md:px-12 flex justify-between items-center">
        
        {/* LEFT: Identity Skeleton */}
        <div className="flex items-center gap-5">
          {/* Avatar Squircle */}
          <div className="h-11 w-11 rounded-xl bg-white animate-pulse border border-white/5" />
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {/* Name Bar */}
              <div className="h-3 w-20 bg-white rounded-full animate-pulse" />
              {/* Badge Icon */}
              <div className="h-4 w-8 bg-orange-500 rounded border border-orange-500/10 animate-pulse" />
            </div>
            {/* Subtitle/Type Bar */}
            <div className="h-2 w-32 bg-white rounded-full animate-pulse" />
          </div>
        </div>

        {/* RIGHT: Actions Skeleton */}
        <div className="flex items-center gap-4">
          {/* Environment Status (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-4 mr-6">
            <div className="flex flex-col items-end gap-1.5">
              <div className="h-2 w-16 bg-white rounded-full" />
              <div className="h-2 w-24 bg-emerald-500 rounded-full animate-pulse" />
            </div>
            <div className="h-8 w-[1px] bg-white" />
          </div>

          {/* Button Skeletons */}
          <div className="h-10 w-24 bg-white rounded-xl border border-white animate-pulse hidden sm:block" />
          <div className="h-10 w-32 bg-white rounded-xl border border-white animate-pulse" />
        </div>

      </div>
      
      {/* Cinematic Loading Line (Top-most progress indicator) */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent w-full animate-shimmer" />
    </header>
  );
}