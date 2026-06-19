import { useState } from "react";
import Reveal from "./Reveal";

const initialForm = {
  nama: "",
  perusahaan: "",
  email: "",
  whatsapp: "",
  kebutuhan: "",
};

export default function CTA() {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("CIS contact form:", form);
    window.alert("Terima kasih. Tim CIS akan segera menghubungi Anda.");
    setForm(initialForm);
  };

  return (
    <section id="kontak" className="section-divider section-shell">
      <div className="overflow-hidden rounded-[2.7rem] bg-[#081c42] text-white shadow-[0_28px_80px_rgba(5,16,40,0.24)]">
        <div className="grid gap-10 px-6 py-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-12">
          <Reveal>
            <p className="section-eyebrow !text-[#c5dfff]">Transform Today. Grow Tomorrow.</p>
            <h2 className="section-title !text-white">Mulai Business Process Diagnostic Anda Sekarang.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Dapatkan insight strategis, temukan peluang efisiensi, dan tingkatkan kinerja bisnis Anda dalam waktu singkat.
            </p>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/12 shadow-2xl">
              <img
                src="/assets/digital-scene-rev6.png"
                alt="Digital transformation visual from CIS COMPRO rev 6"
                className="h-[220px] w-full object-cover object-center"
              />
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.8rem] border border-white/12 bg-white/8 p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f0c45a]">
                  Quick Contact
                </p>
                <div className="mt-4 space-y-2 text-base text-slate-200">
                  <p>Email: support@ciscorp.co.id</p>
                  <p>WhatsApp: +6282317907380</p>
                  <p>Telp :(021)3951 6622</p>
                  <p>
                    APL Tower Central Park Lt. 26 Unit 05
                    <br />
                    Letjen S. Parman Kav. No.28,  
                    <br />
                    Jakarta Barat, Jakarta 11440
                  </p>
                </div>
              </div>
              <div className="rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f0c45a]">
                  Engagement Focus
                </p>
                <div className="mt-4 space-y-2 text-base text-slate-200">
                  <p>Business Process Diagnostic</p>
                  <p>Transformation Prioritization</p>
                  <p>Integrated Execution Roadmap</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2.2rem] bg-[linear-gradient(180deg,#ffffff,#fbfdff)] p-6 text-[#0a2444] shadow-2xl">
              <div className="mb-1">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0f5db8]">Schedule Consultation</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Isi kebutuhan utama Anda dan tim CIS akan menindaklanjuti dengan pendekatan yang paling relevan.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="form-field">
                  <span>Nama</span>
                  <input
                    required
                    value={form.nama}
                    onChange={(event) => setForm({ ...form, nama: event.target.value })}
                  />
                </label>
                <label className="form-field">
                  <span>Perusahaan</span>
                  <input
                    required
                    value={form.perusahaan}
                    onChange={(event) => setForm({ ...form, perusahaan: event.target.value })}
                  />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="form-field">
                  <span>Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                  />
                </label>
                <label className="form-field">
                  <span>Nomor WhatsApp</span>
                  <input
                    required
                    value={form.whatsapp}
                    onChange={(event) => setForm({ ...form, whatsapp: event.target.value })}
                  />
                </label>
              </div>
              <label className="form-field">
                <span>Kebutuhan</span>
                <textarea
                  required
                  rows="5"
                  value={form.kebutuhan}
                  onChange={(event) => setForm({ ...form, kebutuhan: event.target.value })}
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex justify-center rounded-full bg-[#f0c45a] px-6 py-3.5 text-sm font-semibold text-[#071c40] transition hover:-translate-y-0.5"
              >
                Jadwalkan Konsultasi
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
