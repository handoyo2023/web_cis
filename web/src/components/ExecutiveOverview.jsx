import { motion } from "framer-motion";
import {
  BrainCircuit,
  Handshake,
  Rocket,
  ShieldCheck,
  Telescope,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { overviewCards } from "../data";

const missionIcons = [Users, Handshake, Wrench, TrendingUp, ShieldCheck];

export default function ExecutiveOverview() {
  const mission = overviewCards.find((card) => card.title === "Mission");

  return (
    <section id="tentang" className="section-divider section-shell">
      <div className="grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Executive Overview"
            title="Integrated Consulting: Bridging Strategy & Execution Through Collaboration and Technology"
            description="CIS menyelaraskan perencanaan strategis dengan keunggulan eksekusi, mentransformasikan visi organisasi menjadi hasil bisnis yang berkelanjutan."
          />

          <Reveal className="relative overflow-hidden rounded-[2.3rem] border border-slate-200 bg-[linear-gradient(180deg,#fbfdff,#f2f7fd)] shadow-[0_26px_65px_rgba(8,25,57,0.09)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(103,173,255,0.24),_transparent_45%)]" />
            <div className="relative grid gap-6 p-6 sm:p-8">
              <div className="scene-soft overflow-hidden rounded-[1.8rem] border border-white/80 bg-[linear-gradient(180deg,#f7fbff,#edf4fd)] shadow-sm">
                <img
                  src="/assets/overview-scene-rev6.png"
                  alt="Executive overview visual from CIS COMPRO rev 6"
                  className="aspect-[1420/477] w-full object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="space-y-5">
          <Reveal delay={0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(8,25,57,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#dfeafb,#ffffff,#dfeafb)]" />
              <div className="p-6 lg:p-8">
                <div className="mx-auto inline-flex h-24 w-24 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0b2a66,#1c57c8)] text-white shadow-[0_18px_40px_rgba(8,25,57,0.18)] ring-4 ring-white">
                  <Telescope size={42} strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 text-center text-[2.15rem] font-semibold tracking-[-0.04em] text-[#0b2a66] lg:text-[2.35rem]">
                  Vision
                </h3>
                <div className="mt-3 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#9fb8e6]" />
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1c57c8]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1c57c8]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1c57c8]" />
                  </span>
                  <span className="h-px w-10 bg-[#9fb8e6]" />
                </div>
                <div className="mx-auto mt-8 max-w-[34rem] space-y-5 text-center text-slate-700">
                  <p className="text-base leading-8">Menjadi mitra terpercaya dan</p>
                  <p className="mx-auto max-w-[24rem] text-[2.15rem] font-semibold uppercase leading-[1.02] tracking-[-0.04em] text-[#0b2a66] sm:text-[2.7rem]">
                    perusahaan konsultansi terdepan
                  </p>
                  <p className="mx-auto max-w-[34rem] text-base leading-8">
                    untuk memberdayakan organisasi dalam mencapai keunggulan dan menciptakan dampak jangka panjang.
                  </p>
                  <p className="mx-auto max-w-[32rem] text-base leading-8">
                    Melalui solusi yang inovatif, terintegrasi, dan berkelanjutan.
                  </p>
                </div>
                <div className="mt-8 overflow-hidden rounded-[1.8rem] bg-[linear-gradient(180deg,#eff6ff,#dceaff)]">
                  <img
                    src="/assets/overview-vision-earth-rev6.png"
                    alt="Earth visual from CIS COMPRO rev 6 vision card"
                    className="h-[150px] w-full object-cover object-center opacity-95 sm:h-[190px]"
                  />
                </div>
              </div>
            </motion.article>
          </Reveal>

          <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <Reveal delay={0.16}>
              <motion.article
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(8,25,57,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#dfeafb,#ffffff,#dfeafb)]" />
                <div className="p-6 lg:p-7">
                  <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0b2a66,#1c57c8)] text-white shadow-[0_18px_40px_rgba(8,25,57,0.18)] ring-4 ring-white lg:h-24 lg:w-24">
                    <BrainCircuit size={36} strokeWidth={1.8} className="lg:h-[42px] lg:w-[42px]" />
                  </div>
                  <h3 className="mt-5 text-center text-[2rem] font-semibold tracking-[-0.04em] text-[#0b2a66] lg:text-[2.15rem]">
                    Philosophy
                  </h3>
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-[#9fb8e6]" />
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1c57c8]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1c57c8]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1c57c8]" />
                    </span>
                    <span className="h-px w-10 bg-[#9fb8e6]" />
                  </div>
                  <div className="mt-7 space-y-6 text-center text-[15px] leading-8 text-slate-700">
                    <p>Kami percaya setiap organisasi memiliki tantangan dan peluang yang unik.</p>
                    <p className="font-semibold text-[#1c57c8]">
                      Filosofi kami berakar pada kolaborasi, integritas, dan perbaikan berkelanjutan.
                    </p>
                    <p>
                      Kami bermitra dengan klien untuk memahami kebutuhan mereka secara mendalam dan
                      menciptakan solusi praktis, berkelanjutan, dan berdampak nyata.
                    </p>
                  </div>
                  <div className="mt-8 flex justify-center text-[#7ea0d7]">
                    <UsersIcon />
                  </div>
                </div>
              </motion.article>
            </Reveal>

            <Reveal delay={0.24}>
              <motion.article
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(8,25,57,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#dfeafb,#ffffff,#dfeafb)]" />
                <div className="p-6 lg:p-7">
                  <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0b2a66,#1c57c8)] text-white shadow-[0_18px_40px_rgba(8,25,57,0.18)] ring-4 ring-white lg:h-24 lg:w-24">
                    <Rocket size={36} strokeWidth={1.8} className="lg:h-[42px] lg:w-[42px]" />
                  </div>
                  <h3 className="mt-5 text-center text-[2rem] font-semibold tracking-[-0.04em] text-[#0b2a66] lg:text-[2.15rem]">
                    Mission
                  </h3>
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-[#d8e2f4]" />
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1c57c8]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1c57c8]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1c57c8]" />
                    </span>
                    <span className="h-px w-10 bg-[#d8e2f4]" />
                  </div>
                  <div className="mt-8 space-y-5">
                    {mission.list.map((item, itemIndex) => {
                        const MissionIcon = missionIcons[itemIndex] ?? Rocket;
                        return (
                          <div
                            key={item}
                            className="grid grid-cols-[52px_1fr] items-start gap-4 border-b border-[#dbe5f1] pb-5 last:border-b-0 last:pb-0"
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c8d7eb] text-[#1c57c8]">
                              <MissionIcon size={20} strokeWidth={1.8} />
                            </div>
                            <p className="text-[15px] leading-7 text-slate-700">{item}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal className="mt-10 rounded-[2rem] border border-[#dbe8f4] bg-white px-7 py-6 shadow-[0_16px_40px_rgba(8,25,57,0.06)]">
        <p className="text-center text-lg font-medium leading-8 text-[#13355f] md:text-xl">
          CIS menyelaraskan <span className="text-[#0f5db8]">arah strategis</span>,{" "}
          <span className="text-[#d39a17]">kapabilitas teknologi</span>,{" "}
          dan <span className="text-[#0d6e7d]">kesiapan manusia</span> untuk memastikan transformasi bergerak dari visi menuju eksekusi yang berdampak.
        </p>
      </Reveal>
    </section>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 160 64" aria-hidden="true" className="h-16 w-40">
      <g fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="28" cy="18" r="8" />
        <path d="M12 48c3-10 10-15 16-15s13 5 16 15" />
        <rect x="7" y="50" width="42" height="4" rx="2" />
        <circle cx="80" cy="18" r="8" />
        <path d="M64 48c3-10 10-15 16-15s13 5 16 15" />
        <rect x="59" y="50" width="42" height="4" rx="2" />
        <circle cx="132" cy="18" r="8" />
        <path d="M116 48c3-10 10-15 16-15s13 5 16 15" />
        <rect x="111" y="50" width="42" height="4" rx="2" />
      </g>
    </svg>
  );
}
