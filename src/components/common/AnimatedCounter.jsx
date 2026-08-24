import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 2, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setCount(Math.floor(latest));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="inline-block font-bold">
      {prefix}{count}{suffix}
    </span>
  );
}
