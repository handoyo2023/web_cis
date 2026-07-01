import { ArrowLeft, Link2, MessageCircle, Send } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { roboticsDetailPages } from "../data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function RoboticsDetailPage({ slug }) {
  const page = roboticsDetailPages.find((item) => item.slug === slug);
  const [copyState, setCopyState] = useState("copy");
  const returnTarget = "#service-robotics";
  const mainRef = useRef(null);
  const isIndustryConsultingPage = Boolean(page?.problemPoints?.length || page?.advisorySummary);
  const heroEyebrow = isIndustryConsultingPage ? "ROBOTIC CONSULTING AREA" : page?.eyebrow;

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = useMemo(() => encodeURIComponent(currentUrl), [currentUrl]);
  const encodedTitle = useMemo(
    () => encodeURIComponent(page ? `${page.title} - CIS Robotics` : "CIS Robotics Detail"),
    [page],
  );

  useEffect(() => {
    if (!page) {
      return;
    }

    window.requestAnimationFrame(() => {
      mainRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
      mainRef.current?.focus({ preventScroll: true });
    });
  }, [page]);

  if (!page) {
    return (
      <main className="section-shell pt-36">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_rgba(8,25,57,0.08)]">
          <p className="section-eyebrow">Robotics Detail</p>
          <h1 className="section-title">Halaman detail tidak ditemukan</h1>
          <a
            href="#layanan"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b2a66] px-6 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft size={18} />
            Back
          </a>
        </div>
      </main>
    );
  }

  const handleCopy = async () => {
    if (!currentUrl || !navigator?.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("copy"), 1800);
    } catch {
      setCopyState("failed");
      window.setTimeout(() => setCopyState("copy"), 1800);
    }
  };

  const handleReturn = (event) => {
    event.preventDefault();
    window.location.hash = returnTarget;
    window.setTimeout(() => {
      document.getElementById(returnTarget.replace("#", ""))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

  return (
    <main ref={mainRef} tabIndex={-1} className="section-shell pt-34 outline-none md:pt-38">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-[2.2rem] border border-slate-200 bg-white p-6 shadow-[0_28px_70px_rgba(8,25,57,0.08)] md:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <a
                href={returnTarget}
                onClick={handleReturn}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#f8fbff] px-4 py-2 text-sm font-semibold text-[#0b2a66] transition hover:border-[#0f5db8] hover:text-[#0f5db8]"
              >
                <ArrowLeft size={18} />
                Back
              </a>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#dfe7f3] px-4 py-2 text-sm font-semibold text-[#0b2a66] transition hover:border-[#25d366] hover:text-[#1b8f49]"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
                <a
                  href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#dfe7f3] px-4 py-2 text-sm font-semibold text-[#0b2a66] transition hover:border-[#2aabee] hover:text-[#1d7fb5]"
                >
                  <Send size={17} />
                  Telegram
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-full border border-[#dfe7f3] px-4 py-2 text-sm font-semibold text-[#0b2a66] transition hover:border-[#0f5db8] hover:text-[#0f5db8]"
                >
                  <Link2 size={17} />
                  {copyState === "copied" ? "Link Tersalin" : copyState === "failed" ? "Gagal Copy" : "Copy Link"}
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(160deg,#061a3f,#0f376f)] p-6 text-white shadow-[0_24px_60px_rgba(8,25,57,0.2)] md:p-8">
                <div className="flex h-full flex-col justify-between gap-6">
                  <SectionHeader
                    eyebrow={heroEyebrow}
                    title={page.title}
                    tone="light"
                  />

                  {page.advisorySummary ? (
                    <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f0c45a]">
                        Advisory Focus
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-100 md:text-[0.96rem]">
                        {page.advisorySummary}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#fdfefe,#f5f9ff)] p-3">
                <div className="scene-soft overflow-hidden rounded-[1.55rem] border border-[#d9e3f1] bg-white">
                  <img
                    src={page.heroImage}
                    alt={page.heroAlt}
                    className="w-full bg-white object-contain"
                  />
                </div>
              </div>
            </div>

            {page.problemTitle || page.problemPoints?.length ? (
              <div className="mt-8">
                <div className="rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#fbfdff)] p-6 shadow-sm md:p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f5db8]">
                      Problem Mapping
                    </p>
                    {page.problemTitle ? (
                      <h3 className="mt-4 text-[1.45rem] font-semibold leading-tight tracking-[-0.03em] text-[#0b2148]">
                        {page.problemTitle}
                      </h3>
                    ) : null}
                    {page.problemPoints?.length ? (
                      <div className="mt-5 grid gap-2.5 md:grid-cols-2">
                        {page.problemPoints.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 rounded-[1.1rem] border border-slate-200 bg-white px-4 py-3"
                          >
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c98b11]" />
                            <p className="text-sm font-medium leading-6 text-[#12385f]">{point}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                </div>
              </div>
            ) : null}

            <div className="mt-8 flex justify-end">
              <a
                href={returnTarget}
                onClick={handleReturn}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#f8fbff] px-5 py-3 text-sm font-semibold text-[#0b2a66] transition hover:border-[#0f5db8] hover:text-[#0f5db8]"
              >
                <ArrowLeft size={18} />
                Back
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </main>
  );
}
