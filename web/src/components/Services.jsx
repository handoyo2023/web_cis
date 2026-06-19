import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { serviceBlocks } from "../data";

export default function Services() {
  return (
    <section id="layanan" className="section-divider section-shell">
      <SectionHeader
        eyebrow="Services"
        title="Tiga area layanan utama CIS"
        description=""
      />

      <div className="mt-14 space-y-8">
        {serviceBlocks.map((service, index) => (
          <Reveal key={service.title}>
            <ServiceCard service={service} reversed={index % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, reversed }) {
  const Icon = service.icon;
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  return (
    <motion.article
      whileHover={{ y: -4 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPointer({ x, y });
      }}
      className="group relative overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white p-5 shadow-[0_28px_70px_rgba(8,25,57,0.08)] md:p-7 lg:p-8"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(18, 90, 185, 0.08), transparent 42%)`,
        }}
      />

      <div className={`relative grid gap-7 lg:grid-cols-[0.86fr_1.14fr] ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="rounded-[1.9rem] bg-[linear-gradient(160deg,#ffffff,#f8fbff)] p-1">
          <div className="flex h-full flex-col rounded-[1.6rem] border border-slate-200 bg-white p-6 md:p-7">
            <div className="flex items-center gap-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0b2a66,#1749a1)] text-[#f0c45a] shadow-[0_16px_30px_rgba(11,42,102,0.18)]">
                <Icon size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b98310]">{service.eyebrow}</p>
                <h3 className="mt-1 text-2xl font-semibold leading-tight text-[#0b2148] md:text-[2rem]">{service.title}</h3>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-700">{service.description}</p>

            {service.quote ? (
              <div className="mt-6 rounded-[1.5rem] bg-[linear-gradient(135deg,#0b2a66,#123c7f)] px-5 py-4 text-white shadow-[0_18px_40px_rgba(11,42,102,0.18)]">
                <p className="text-sm leading-7 text-slate-100">"{service.quote}"</p>
              </div>
            ) : null}

            {service.statement ? (
              <div className="mt-6 rounded-[1.35rem] border border-[#d6e1f4] bg-[#f5f9ff] px-5 py-4 text-center">
                <p className="text-lg font-semibold uppercase tracking-[0.16em] text-[#0b2a66]">{service.statement}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="rounded-[1.9rem] border border-slate-200 bg-[linear-gradient(180deg,#fdfefe,#f5f9ff)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
          <div className="scene-soft overflow-hidden rounded-[1.45rem] border border-[#d9e3f1] bg-white">
            <img
              src={service.image}
              alt={service.title}
              className={`h-[280px] w-full bg-white md:h-[360px] ${service.imageFit ?? "object-cover"} ${service.imagePosition ?? "object-center"}`}
            />
          </div>
        </div>
      </div>

      {service.principles?.length ? (
        <div className="relative mt-8">
          <SectionLabel>{service.focusLabel}</SectionLabel>
          <div className={`mt-5 grid gap-4 ${service.principles.length === 3 ? "xl:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-3"}`}>
            {service.principles.map((item) => (
              <PrincipleCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      ) : null}

      {service.approach?.length ? (
        <div className="relative mt-8">
          <SectionLabel>{service.approachLabel}</SectionLabel>
          <div className="mt-5 grid gap-4 xl:grid-cols-5">
            {service.approach.map((step) => (
              <ApproachCard key={step.title} step={step} />
            ))}
          </div>
        </div>
      ) : null}

      {service.capabilityCards?.length ? (
        <div className="relative mt-8">
          <SectionLabel>{service.capabilityLabel}</SectionLabel>
          <div className="mt-5 grid gap-4 lg:grid-cols-2 xl:grid-cols-5">
            {service.capabilityCards.map((item) => (
              <CapabilityCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      ) : null}

      {!service.capabilityCards?.length && (service.points?.length || service.secondaryItems?.length) ? (
        <div className={`relative mt-8 grid gap-5 ${service.secondaryItems?.length ? "xl:grid-cols-[0.72fr_1.28fr]" : ""}`}>
          {service.points?.length ? (
            <InfoPanel
              title={service.capabilityLabel ?? "Capabilities"}
              items={service.points}
              bulletColor="#0f5db8"
            />
          ) : null}
          {service.secondaryItems?.length ? (
            <InfoPanel
              title={service.secondaryLabel}
              items={service.secondaryItems}
              bulletColor="#d39a17"
            />
          ) : null}
        </div>
      ) : null}

      {service.impactItems?.length ? (
        <div className="relative mt-8">
          <SectionLabel>{service.impactLabel}</SectionLabel>
          <div className={`mt-5 grid gap-4 ${service.impactItems.length >= 6 ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-5"}`}>
            {service.impactItems.map((item) => (
              <div
                key={item}
                className="rounded-[1.45rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#fbfdff)] px-5 py-4 text-center shadow-sm"
              >
                <p className="text-sm font-semibold leading-6 text-[#12385f]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </motion.article>
  );
}

function PrincipleCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm">
      {item.image ? <img src={item.image} alt={item.title} className="h-44 w-full object-cover" /> : null}
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div
            className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white shadow-md"
            style={{ background: item.color }}
          >
            {item.number ? (
              <span className="text-lg font-bold">{item.number}</span>
            ) : (
              <Icon size={24} />
            )}
          </div>
          <div>
            <h4 className="text-lg font-semibold leading-7 text-[#0b2148]">{item.title}</h4>
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
          </div>
        </div>

        {item.bullets?.length ? (
          <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
            {item.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: item.color }} />
                <p className="text-sm font-medium leading-6 text-[#12385f]">{bullet}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

function ApproachCard({ step }) {
  const Icon = step.icon;

  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-[1.6rem] border border-slate-200 bg-white px-5 py-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <span className="text-[2rem] font-bold leading-none text-[#d39a17]">{step.number}</span>
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0b2a66] text-white shadow-md">
          <Icon size={24} />
        </div>
      </div>
      <h4 className="mt-4 text-lg font-semibold leading-7 text-[#0b2148]">{step.title}</h4>
      <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
    </motion.div>
  );
}

function CapabilityCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-[1.55rem] border border-slate-200 bg-white shadow-sm">
      <div className="relative">
        <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
        <div
          className="absolute bottom-0 left-5 translate-y-1/2 rounded-full border-4 border-white p-3 text-white shadow-lg"
          style={{ background: item.color }}
        >
          <Icon size={24} />
        </div>
      </div>
      <div className="px-5 pb-5 pt-10">
        <h4 className="text-lg font-semibold leading-7 text-[#0b2148]">{item.title}</h4>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
        <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
          {item.bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: item.color }} />
              <p className="text-sm font-medium leading-6 text-[#12385f]">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function InfoPanel({ title, items, bulletColor }) {
  return (
    <div className="rounded-[1.65rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#fbfdff)] p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f5db8]">{title}</p>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: bulletColor }} />
            <p className="text-sm font-semibold leading-6 text-[#12385f]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d39a17] to-[#d39a17]" />
      <p className="shrink-0 text-sm font-semibold uppercase tracking-[0.22em] text-[#0b2a66]">{children}</p>
      <div className="h-px flex-1 bg-gradient-to-r from-[#d39a17] via-[#d39a17] to-transparent" />
    </div>
  );
}
