import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function InteractiveCard3D({ image, title, subtitle, to }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;     // horizontal position
    const y = e.clientY - rect.top;      // vertical position

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // Calculate tilt angles but keep them VERY subtle
    const rotateY = ((x - midX) / midX) * 6; // left/right
    const rotateX = ((midY - y) / midY) * 6; // up/down

    setTilt({
      x: Math.max(Math.min(rotateX, 6), -6),
      y: Math.max(Math.min(rotateY, 6), -6),
    });
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 900 }}
      whileTap={{ scale: 0.97 }} // nice mobile feedback
      className="
        rounded-2xl bg-white/90 p-[1px] shadow-sm ring-1 ring-slate-100
        transition-all duration-200 ease-out
        hover:ring-fp-green/40
        active:shadow-md active:translate-y-[1px]
      "
    >
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 18,
        }}
        className="rounded-2xl"
      >
        <Link
          to={to}
          className="
            block h-full rounded-2xl overflow-hidden
            bg-gradient-to-br from-fp-offWhite to-fp-greenLight/40
          "
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl rounded-b-none">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
              loading="lazy"
              decoding="async"
            />

            {/* Gloss overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10" />
          </div>

          {/* Content */}
          <div className="px-4 py-3 space-y-0.5">
            <h3 className="text-base font-semibold text-fp-dark">
              {title}
            </h3>
            <p className="text-sm font-medium text-fp-green">
              {subtitle}
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Tap to view details
            </p>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default InteractiveCard3D;
