import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { coreValues } from "../data";

export default function CoreValues() {
  return (
    <section id="nilai" className="section-shell bg-[#f7fbff]">
      <SectionHeader
        eyebrow="CIS Core Values"
        title="Prinsip yang membimbing cara kami berpikir, berkolaborasi, dan menghadirkan dampak."
        description="Setiap inisiatif CIS dibangun di atas nilai yang menjaga kualitas keputusan, konsistensi eksekusi, dan relevansi bisnis."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-5">
        {coreValues.map((value, index) => {
          return (
            <Reveal key={value.title} delay={index * 0.06}>
              <CoreValueCard value={value} />
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 rounded-[2rem] border border-[#d8e6f2] bg-white px-8 py-10 text-center shadow-[0_20px_50px_rgba(8,25,57,0.08)]">
        <p className="text-xl font-medium leading-9 text-[#13355f] md:text-2xl">
          "Nilai kami adalah komitmen. Kami menerjemahkannya menjadi solusi terintegrasi yang menghasilkan
          <span className="text-[#d39a17]"> dampak nyata dan berkelanjutan.</span>"
        </p>
      </Reveal>
    </section>
  );
}

function CoreValueCard({ value }) {
  const Icon = value.icon;
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
      className="group relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(8,25,57,0.08)]"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(33, 114, 255, 0.12), transparent 42%)`,
        }}
      />
      <div className={`h-2 w-full bg-gradient-to-r ${value.accent}`} />
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <motion.div
            whileHover={{ rotate: -4, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={`inline-flex rounded-full bg-gradient-to-br ${value.accent} p-4 text-white shadow-lg ring-4 ring-white`}
          >
            <Icon size={24} />
          </motion.div>
          <p className="text-sm font-bold tracking-[0.22em] text-slate-400">{value.number}</p>
        </div>
        <h3 className="mt-6 text-[1.3rem] font-semibold leading-8 tracking-tight text-[#0a2444]">{value.title}</h3>
        <div className="mt-4 h-px bg-gradient-to-r from-[#0f5db8]/25 via-[#d39a17]/25 to-transparent" />
        <motion.p whileHover={{ x: 3 }} className="mt-4 text-[15px] leading-7 text-slate-600">
          {value.description}
        </motion.p>
      </div>
    </motion.article>
  );
}
