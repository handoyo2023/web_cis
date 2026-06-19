import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <Reveal className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`section-eyebrow ${isLight ? "!text-[#c5dfff]" : ""}`}>{eyebrow}</p>
      <h2 className={`section-title ${isLight ? "!text-white" : ""}`}>{title}</h2>
      {description ? (
        <p className={`mt-5 text-lg leading-8 ${isLight ? "text-slate-200" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
