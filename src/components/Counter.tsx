import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number; // in seconds
  label?: string;
  sign?:string
}

export default function Counter({
  from = 0,
  to,
  duration = 2.5,
  label,
  sign
}: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px" // Simplified margin
  });

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number;
    const startValue = from;
    const totalChange = to - from;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
      const easedProgress = easeOutQuart(progress);
      
      const currentValue = startValue + (totalChange * easedProgress);
      setCount(Math.floor(currentValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, from, to, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <motion.span
        className="text-4xl sm:text-5xl font-bold text-orange-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {count >= 1000 ? (count / 1000) + "K": count}{sign}
      </motion.span>
      {label && <span className="text-gray-600 mt-2 text-lg">{label}</span>}
    </div>
  );
}