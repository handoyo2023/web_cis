import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { servicesClosing } from "../data";

export default function ServicesClosing() {
  return (
    <section className="section-divider section-shell pt-0">
      <Reveal className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_28px_70px_rgba(8,25,57,0.08)]">
        <div className="grid gap-6 p-5 lg:grid-cols-[0.92fr_0.82fr_1.06fr] lg:p-7">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f5f9ff,#edf4fd)]">
            <img
              src={servicesClosing.image}
              alt={servicesClosing.imageAlt}
              className="block h-auto w-full bg-[#f5f9ff] p-2 sm:h-[420px] sm:w-full sm:object-cover sm:object-center sm:p-0 lg:h-full"
            />
          </div>

          <div className="flex flex-col justify-center rounded-[2rem] bg-[linear-gradient(180deg,#ffffff,#fbfdff)] px-4 py-3 sm:px-6 lg:px-5">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#0b2a66]">
              {servicesClosing.eyebrow}
            </p>
            <h3 className="mt-4 text-[2.1rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#0a2444] sm:text-[2.5rem]">
              Transform Today.
              <span className="block text-[#d39a17]">Grow Tomorrow.</span>
            </h3>
            <p className="mt-5 text-lg font-medium leading-8 text-[#16345d]">
              {servicesClosing.title}
            </p>
            <div className="mt-7 rounded-[1.7rem] border border-[#d7e3f2] bg-[#f6faff] px-5 py-5 shadow-sm">
              <p className="text-base leading-8 text-slate-700">{servicesClosing.note}</p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(180deg,#081f4f,#0a245d)] p-6 text-white shadow-[0_24px_60px_rgba(5,16,40,0.24)] sm:p-8">
            <h3 className="max-w-md text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[2.4rem]">
              Mulai Business Process Diagnostic Anda <span className="text-[#f0c45a]">Sekarang.</span>
            </h3>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-[#f0c45a]/80 via-[#f0c45a]/45 to-transparent" />
            <p className="mt-5 text-lg leading-8 text-slate-100">
              {servicesClosing.ctaDescription}
            </p>
            <a
              href={servicesClosing.ctaHref}
              className="mt-8 flex items-center justify-between gap-4 rounded-[1.8rem] border border-[#d39a17] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-5 py-5 transition hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))]"
            >
              <div>
                <p className="text-xl font-semibold uppercase tracking-[0.08em] text-[#f0c45a]">
                  {servicesClosing.ctaLabel}
                </p>
                <p className="mt-2 max-w-sm text-base leading-7 text-slate-100">
                  {servicesClosing.ctaNote}
                </p>
              </div>
              <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#f0c45a]/35 bg-[#12346d] text-[#f0c45a]">
                <ArrowRight size={26} />
              </div>
            </a>
          </div>
        </div>

        <div className="grid gap-5 border-t border-slate-200 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-7">
          {servicesClosing.pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8e4f2] bg-[#f8fbff] text-[#0b2a66]">
                  <Icon size={24} strokeWidth={1.9} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0b2a66]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
