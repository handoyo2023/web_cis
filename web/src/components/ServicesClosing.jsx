import { ArrowRight, BarChart3, CalendarDays, LockKeyhole, Target } from "lucide-react";
import Reveal from "./Reveal";
import { servicesClosing } from "../data";

export default function ServicesClosing() {
  return (
    <section className="section-divider section-shell pt-0">
      <Reveal className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_28px_70px_rgba(8,25,57,0.08)]">
        <div className="grid gap-6 p-5 xl:grid-cols-[0.84fr_0.76fr_1fr] xl:items-stretch xl:p-7">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f5f9ff,#edf4fd)]">
            <img
              src="/assets/closing_kiri.png"
              alt="Visual closing layanan CIS sisi kiri"
              className="h-auto w-full"
            />
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#fbfdff)]">
            <div className="flex h-full flex-col justify-center px-5 py-6 sm:px-6 xl:px-4">
              <h3 className="text-[2rem] font-semibold uppercase leading-[0.96] tracking-[-0.05em] text-[#0a2444] sm:text-[2.45rem]">
                <span className="block">Transform Today.</span>
                <span className="mt-1 block text-[#d39a17]">Grow Tomorrow.</span>
              </h3>
              <p className="mt-6 text-[1.05rem] font-medium leading-8 text-[#16345d]">
                {servicesClosing.title}
              </p>

              <div className="mt-7 flex items-start gap-4 rounded-[1.7rem] border border-[#d7e3f2] bg-[#f6faff] px-5 py-5 shadow-sm">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0b2a66] text-[#f0c45a] shadow-[0_16px_34px_rgba(11,42,102,0.16)]">
                  <BarChart3 size={24} strokeWidth={2} />
                </div>
                <p className="text-base leading-8 text-slate-700">{servicesClosing.note}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0a2b67] bg-[linear-gradient(180deg,#081f4f,#0a245d)] shadow-[0_24px_60px_rgba(5,16,40,0.24)]">
            <div className="h-full p-6 text-white sm:p-8">
              <div className="flex items-start gap-5">
                <div className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/6 text-white">
                  <Target size={42} strokeWidth={1.9} />
                </div>
                <h3 className="max-w-md text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[2.25rem]">
                  {servicesClosing.ctaTitle}
                </h3>
              </div>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-[#f0c45a]/80 via-[#f0c45a]/45 to-transparent" />
              <p className="mt-5 text-lg leading-8 text-slate-100">
                {servicesClosing.ctaDescription}
              </p>

              <a
                href={servicesClosing.ctaHref}
                className="mt-8 flex items-center justify-between gap-4 rounded-[1.8rem] border border-[#d39a17] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-5 py-5 transition hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))]"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#f0c45a]/35 bg-[#12346d] text-[#f0c45a]">
                    <CalendarDays size={26} strokeWidth={1.9} />
                  </div>
                  <div>
                    <p className="text-xl font-semibold uppercase tracking-[0.08em] text-[#f0c45a]">
                      {servicesClosing.ctaLabel}
                    </p>
                    <p className="mt-2 max-w-sm text-base leading-7 text-slate-100">
                      {servicesClosing.ctaNote}
                    </p>
                  </div>
                </div>
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#f0c45a]/35 bg-[#12346d] text-[#f0c45a]">
                  <ArrowRight size={26} />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-5 border-t border-slate-200 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-7">
          {servicesClosing.pillars.map((item, index) => {
            const Icon =
              index === 0 ? ShieldLike :
              index === 1 ? LockKeyhole :
              index === 2 ? Target :
              BarChart3;

            return (
              <div key={item.title} className="flex items-start gap-4 lg:gap-5">
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

function ShieldLike({ size = 24, strokeWidth = 1.9 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v6c0 4.6-3 7.8-7 9-4-1.2-7-4.4-7-9V6l7-3z" />
      <path d="M8.5 12l2.2 2.2 4.8-5" />
    </svg>
  );
}
