import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { deliverItems, impacts, industries, stats } from "../data";

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) {
          return;
        }

        started = true;
        const start = performance.now();
        const duration = 1200;

        const tick = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          setDisplay(Math.round(value * progress));
          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="industri" className="section-divider section-shell bg-[#f7fbff]">
      <SectionHeader
        eyebrow="Proven Multi-Industry Experience"
        title="Collective expertise with measurable impact across industries."
        description="Kami menggabungkan pengalaman lintas industri untuk memastikan setiap transformasi menghasilkan hasil bisnis yang nyata dan terukur."
      />

      <Reveal className="mt-14 overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white shadow-[0_26px_65px_rgba(8,25,57,0.08)]">
        <img
          src="/assets/experience-scene-rev6.png"
          alt="Proven multi industry experience visual from CIS COMPRO rev 6"
          className="h-full min-h-[280px] w-full object-cover object-center sm:min-h-[320px]"
        />
      </Reveal>

      <Reveal className="mt-14 overflow-hidden rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,#071a3c,#0a244f)] px-6 py-8 text-white shadow-[0_22px_55px_rgba(5,16,40,0.18)] lg:px-8">
        <div className="flex items-center justify-center gap-4 text-center">
          <span className="hidden h-px w-16 bg-[#c89a2d]/70 sm:block" />
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f0c45a]">
            Collective Experience At Scale
          </p>
          <span className="hidden h-px w-16 bg-[#c89a2d]/70 sm:block" />
        </div>

        <div className="mt-8 grid gap-y-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-y-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-4 px-4 xl:px-6 ${
                  index !== stats.length - 1 ? "xl:border-r xl:border-[#c89a2d]/45" : ""
                }`}
              >
                <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white/45 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                  <Icon size={26} strokeWidth={1.9} />
                </div>
                <div className="min-w-0">
                  <p className="text-5xl font-semibold tracking-tight text-[#f0c45a]">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 max-w-[11rem] text-base leading-7 text-white">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-5">
        {industries.map((industry, index) => {
          return (
            <Reveal key={industry.title} delay={index * 0.05}>
              <article className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_20px_48px_rgba(8,25,57,0.08)]">
                <img
                  src={industry.image}
                  alt={industry.alt}
                  className="h-full w-full object-cover object-top"
                />
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-14 grid gap-6 xl:grid-cols-2 xl:items-stretch">
        <Reveal className="overflow-hidden rounded-[2rem] border border-[#d8dce5] bg-white px-5 py-6 shadow-[0_18px_45px_rgba(8,25,57,0.08)] sm:px-8 sm:py-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <span className="h-px bg-[#d8dce5]" />
            <h3 className="text-center text-[1.45rem] font-extrabold tracking-[0.02em] text-[#071540] sm:text-[1.8rem]">
              WHAT WE DELIVER
            </h3>
            <span className="h-px bg-[#d8dce5]" />
          </div>

          <div className="mt-5">
            {deliverItems.map((item, index) => (
              <div
                key={item.title}
                className={`grid gap-4 py-5 sm:grid-cols-[92px_1fr] sm:items-center sm:gap-6 ${
                  index !== deliverItems.length - 1 ? "border-b border-[#d8dce5]" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[86px] w-[86px] rounded-full"
                />
                <div>
                  <h4 className="text-[1.1rem] font-extrabold leading-tight sm:text-[1.35rem]" style={{ color: item.color }}>
                    {item.title}
                  </h4>
                  <p className="mt-2 max-w-[36rem] text-[1rem] font-semibold leading-[1.4] text-[#111827] sm:text-[1.05rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="overflow-hidden rounded-[2rem] border border-[#d8dce5] bg-white px-5 py-6 shadow-[0_18px_45px_rgba(8,25,57,0.08)] sm:px-8 sm:py-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <span className="h-px bg-[#d8dce5]" />
            <h3 className="text-center text-[1.45rem] font-extrabold tracking-[0.02em] text-[#071540] sm:text-[1.8rem]">
              MEASURABLE BUSINESS IMPACT
            </h3>
            <span className="h-px bg-[#d8dce5]" />
          </div>

          <div className="mt-6 space-y-4">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <motion.article
                  key={impact.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.6rem] border border-[#d8e4f0] bg-[linear-gradient(180deg,#ffffff,#f9fbfe)] p-5 shadow-[0_14px_36px_rgba(8,25,57,0.06)]"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div
                      className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white shadow-[0_12px_28px_rgba(8,25,57,0.12)]"
                      style={{ background: `linear-gradient(135deg, ${impact.iconFrom}, ${impact.iconTo})` }}
                    >
                      <Icon size={26} strokeWidth={1.9} />
                    </div>
                    <div className="min-w-0 flex-1">
                      {impact.value ? (
                        <p className="text-[2rem] font-semibold leading-none tracking-[-0.04em]" style={{ color: impact.accent }}>
                          {impact.value}
                        </p>
                      ) : null}
                      <p className={`${impact.value ? "mt-3" : ""} text-[1.02rem] font-semibold leading-7 text-[#0a2444]`}>
                        {impact.title}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
