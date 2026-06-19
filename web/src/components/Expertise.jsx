import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { expertiseItems } from "../data";

const expertiseAccents = [
  { from: "#0b2a66", to: "#1c57c8", text: "#0b2a66", dot: "#0b2a66" },
  { from: "#117a90", to: "#22b2c8", text: "#117a90", dot: "#117a90" },
  { from: "#1d58d6", to: "#4b84ff", text: "#1d58d6", dot: "#1d58d6" },
  { from: "#c68910", to: "#e2aa32", text: "#c68910", dot: "#c68910" },
  { from: "#5d2fc0", to: "#814cf0", text: "#5d2fc0", dot: "#5d2fc0" },
];

export default function Expertise() {
  return (
    <section id="keahlian" className="section-divider section-shell">
      <SectionHeader
        eyebrow="CIS Expertise"
        title="Keahlian multidisiplin untuk menjawab tantangan bisnis yang kompleks."
        description="Kami merancang solusi lintas domain yang terintegrasi, dari advisory sampai implementasi, dengan orientasi hasil yang jelas."
      />

      <Reveal className="mt-14 overflow-hidden rounded-[2.3rem] border border-slate-200 bg-white shadow-[0_26px_65px_rgba(8,25,57,0.08)]">
        <div className="relative">
          <img
            src="/assets/expertise-scene-rev6.png"
            alt="CIS expertise visual from CIS COMPRO rev 6"
            className="h-[260px] w-full object-contain object-center sm:h-[320px] lg:h-[360px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,23,56,0.02),rgba(6,23,56,0.12))]" />
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-5">
        {expertiseItems.map((item, index) => {
          const accent = expertiseAccents[index % expertiseAccents.length];
          return (
            <Reveal key={item.title} delay={index * 0.06}>
              <ExpertiseCard item={item} accent={accent} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ExpertiseCard({ item, accent }) {
  const Icon = item.icon;
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  return (
    <motion.article
      whileHover={{ y: -8 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPointer({ x, y });
      }}
      className="expertise-card group relative h-full overflow-hidden bg-white p-0"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, ${hexToRgba(accent.to, 0.16)}, transparent 42%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f0c45a]/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
      />
      <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }} />
      <div className="relative p-6">
        <motion.div
          whileHover={{ rotate: -4, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="mb-5 inline-flex rounded-full p-3 text-white shadow-lg ring-4 ring-white"
          style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
        >
          <Icon size={22} />
        </motion.div>
        <h3 className="text-xl font-semibold leading-8 tracking-tight" style={{ color: accent.text }}>
          {item.title}
        </h3>
        <div className="mt-4 h-px bg-gradient-to-r from-[#0f5db8]/25 via-[#d39a17]/25 to-transparent" />
        <ul className="mt-5 space-y-3 text-[15px] leading-7 text-slate-600">
          {item.items.map((entry) => (
            <motion.li
              key={entry}
              initial={{ opacity: 0.95 }}
              whileHover={{ x: 3 }}
              className="flex gap-3"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accent.dot }} />
              <span>{entry}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const bigint = Number.parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
