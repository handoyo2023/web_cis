import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { heroCards } from "../data";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-[#061738] text-white"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/hero-scene-rev6.png"
          alt="CIS company profile hero visual"
          className="h-full w-full object-cover object-center opacity-42"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(119,186,255,0.28),_transparent_34%),linear-gradient(135deg,_rgba(6,23,56,0.92),_rgba(4,15,37,0.8)_55%,_rgba(7,35,84,0.78))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:90px_90px] opacity-35" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-28 lg:min-h-screen lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-32">
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl xl:text-7xl"
          >
            Transformasi Organisasi Berbasis Konsultasi Terintegrasi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 md:text-[1.12rem] xl:pr-10"
          >
            Menavigasi Masa Depan Bisnis Anda Melalui Sinergi Teknologi, Desain Operasional, & Pengembangan Manusia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3"
          >
            <div className="glass-line rounded-[1.7rem] px-5 py-5">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#b6d5ff]">Collaborative</p>
              <p className="mt-3 text-sm leading-6 text-slate-100">
                Menyatukan pakar lintas disiplin yang bekerja sebagai satu tim terkoordinasi untuk memberikan solusi tepat sasaran.
              </p>
            </div>
            <div className="glass-line rounded-[1.7rem] px-5 py-5">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#b6d5ff]">Integrated</p>
              <p className="mt-3 text-sm leading-6 text-slate-100">
                Mengintegrasikan strategi, teknologi, proses, dan manusia ke dalam satu pendekatan terarah agar solusi berjalan efektif di lapangan.
              </p>
            </div>
            <div className="glass-line rounded-[1.7rem] px-5 py-5">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#b6d5ff]">Fokus pada hasil bisnis yang terukur</p>
              <p className="mt-3 text-sm leading-6 text-slate-100">
                Meningkatkan efisiensi, menekan biaya, dan mendorong pertumbuhan berkelanjutan.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full bg-[#f0c45a] px-6 py-3.5 text-sm font-semibold text-[#071c40] shadow-[0_18px_40px_rgba(240,196,90,0.24)] transition hover:-translate-y-0.5"
            >
              Konsultasi Sekarang
              <ArrowRight size={16} />
            </a>
            <a
              href="#keahlian"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/16"
            >
              Lihat Keahlian Kami
            </a>
            <a
              href="/assets/cis-compro-finaly.pdf"
              download="CIS COMPRO - FINALY.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[#f0c45a]/35 bg-[#0a2444]/50 px-6 py-3.5 text-sm font-semibold text-[#f6d27f] transition hover:-translate-y-0.5 hover:border-[#f0c45a] hover:bg-[#0d2b63]"
            >
              Download Compro
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-8 top-6 z-10 hidden items-center justify-between rounded-full border border-white/12 bg-[#081b42]/65 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d3e5ff] backdrop-blur xl:flex">
            <span>Executive Lens</span>
            <span className="text-[#f0c45a]">Enterprise Transformation</span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-shell min-h-0 p-4 sm:p-6 xl:min-h-[640px] xl:p-0"
          >
            <div className="relative rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] p-5 backdrop-blur-xl sm:p-6 xl:absolute xl:inset-x-8 xl:top-24">
              <a
                href="#why-cis"
                className="inline-flex max-w-[14rem] text-xs font-semibold uppercase tracking-[0.24em] text-[#c5dfff] transition hover:text-[#f0c45a] sm:max-w-none sm:text-sm"
              >
                Integrated Consulting Dashboard
              </a>
              <div className="mt-5 grid gap-4">
                {heroCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="rounded-3xl border border-white/12 bg-[#0d214d]/80 p-4 shadow-2xl"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-[#f0c45a]/15 p-3 text-[#f0c45a]">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold">{card.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-300">{card.subtitle}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>



          </motion.div>
        </div>
      </div>
    </section>
  );
}
