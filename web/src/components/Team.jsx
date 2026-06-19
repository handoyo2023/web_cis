import { Users } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { teamMembers } from "../data";

export default function Team() {
  return (
    <section id="tim" className="section-divider section-shell">
      <SectionHeader
        eyebrow="Member Team"
        title="CIS Team Directory"
      />

      <div className="mt-14 overflow-hidden rounded-[2.3rem] border border-slate-200 bg-white shadow-[0_26px_65px_rgba(8,25,57,0.08)]">
        <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#fbfdff,#f4f8fc)] px-8 py-8 lg:px-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#dbe8f4] bg-white px-4 py-2 text-sm font-semibold text-[#0f5db8]">
            <Users size={16} />
            Member Team
          </div>
        </div>
        <div className="p-8 lg:p-10">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name}>
                <article className="rounded-[1.65rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f6f9fc)] px-5 py-6 shadow-[0_18px_44px_rgba(8,25,57,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(8,25,57,0.12)]">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c79a2b]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-lg font-semibold tracking-tight text-[#0a2444]">{member.name}</p>
                  {member.role ? (
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[#0f5db8]">
                      {member.role}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
