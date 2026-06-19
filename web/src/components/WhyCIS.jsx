import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { whyCards } from "../data";

const whyAccents = [
  { from: "#0b2a66", to: "#1849a0", text: "#0b2a66" },
  { from: "#1487a4", to: "#24b2c8", text: "#1487a4" },
  { from: "#6a9218", to: "#89b52c", text: "#6a9218" },
];

export default function WhyCIS() {
  return (
    <section id="why-cis" className="section-shell overflow-hidden bg-[#081c42] text-white">
      <div className="mb-12 overflow-hidden rounded-[2.3rem] border border-white/10 shadow-[0_26px_70px_rgba(5,16,40,0.25)]">
        <div className="grid lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div className="bg-[linear-gradient(180deg,#071a3b,#0a2444)] p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c5dfff]">Why CIS</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Kami tidak berhenti pada advice. Kami mengorkestrasi hasil.
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-200">
              Pendekatan CIS menggabungkan kejelasan strategi, kualitas eksekusi, dan akuntabilitas hasil dalam satu delivery model yang terintegrasi.
            </p>
          </div>
          <img
            src="/assets/why-scene-rev6.png"
            alt="Why CIS visual from CIS COMPRO rev 6"
            className="h-full min-h-[320px] w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Why CIS?"
            title="Integrated Expertise. Collaborative Impact."
            description="Kami menyatukan keahlian lintas disiplin dan perspektif independen untuk menyelesaikan tantangan bisnis yang kompleks dan memastikan dampak nyata yang berkelanjutan."
            tone="light"
          />
          <Reveal className="mt-8 rounded-[2rem] border border-white/12 bg-white/10 p-7 text-lg leading-8 text-slate-100 shadow-2xl backdrop-blur">
            Different experts. One integrated solution. One accountable outcome.
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {whyCards.map((card, index) => {
            const accent = whyAccents[index % whyAccents.length];
            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <WhyCard card={card} index={index} accent={accent} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ card, index, accent }) {
  const Icon = card.icon;
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  return (
    <motion.article
      whileHover={{ y: -10 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPointer({ x, y });
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-2xl backdrop-blur"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, ${hexToRgba(accent.to, 0.2)}, transparent 42%)`,
        }}
      />
      <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }} />
      <div className="relative p-7">
        <div className="flex items-start justify-between gap-4">
          <motion.div
            whileHover={{ rotate: -4, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="inline-flex rounded-full p-3 text-white shadow-lg ring-4 ring-white/8"
            style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
          >
            <Icon size={24} />
          </motion.div>
          <p className="text-sm font-bold tracking-[0.22em] text-white/45">0{index + 1}</p>
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{card.title}</h3>
        <div className="mt-4 h-px bg-gradient-to-r from-white/25 via-[#f0c45a]/35 to-transparent" />
        <motion.p whileHover={{ x: 3 }} className="mt-4 text-[15px] leading-7 text-slate-200">
          {card.description}
        </motion.p>
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
