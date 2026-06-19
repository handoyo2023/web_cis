import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { ecosystemItems } from "../data";

export default function Ecosystem() {
  return (
    <section className="section-divider section-shell">
      <SectionHeader
        eyebrow="CIS Ecosystem"
        title="Kolaborasi lintas stakeholder untuk menghadirkan solusi yang terintegrasi dan berdampak nyata."
        description="Ekosistem ini memungkinkan CIS menghadirkan solusi yang tidak hanya tepat secara strategi, tetapi juga efektif dalam implementasi."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <Reveal className="rounded-[2.2rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff,#f1f7fd)] p-8 shadow-[0_26px_65px_rgba(8,25,57,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f5db8]">
            Our Stakeholders
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#0a2444]">
            Orchestrating expertise for your success
          </h3>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Model kolaborasi CIS menghubungkan expert independen, mitra teknologi, akademisi, regulator,
            dan partner implementasi dalam satu orkestrasi delivery.
          </p>
          <div className="mt-8 rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d39a17]">Ecosystem Value</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Solusi menjadi lebih relevan, lebih siap dijalankan, dan lebih kuat secara tata kelola karena dibangun dari perspektif yang saling melengkapi.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {ecosystemItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="card-panel flex min-h-[240px] flex-col bg-[linear-gradient(180deg,#ffffff,#f9fbfe)] p-6">
                  <div
                    className="inline-flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg ring-4 ring-white"
                    style={{
                      background: `linear-gradient(135deg, ${item.iconFrom}, ${item.iconTo})`,
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <p className="mt-7 text-sm font-bold tracking-[0.2em]" style={{ color: item.titleColor }}>
                    {item.number}
                  </p>
                  <h3 className="mt-3 text-[1.6rem] font-semibold leading-tight tracking-[-0.03em]" style={{ color: item.titleColor }}>
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-5 h-px bg-gradient-to-r from-[#0f5db8]/30 via-[#d39a17]/25 to-transparent" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
