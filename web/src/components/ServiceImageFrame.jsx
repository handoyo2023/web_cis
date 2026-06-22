export default function ServiceImageFrame({
  src,
  alt,
  imageClassName,
  outerClassName = "",
  innerClassName = "",
}) {
  return (
    <div
      className={`rounded-[1.9rem] border border-slate-200 bg-[linear-gradient(180deg,#fdfefe,#f5f9ff)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] ${outerClassName}`.trim()}
    >
      <div
        className={`scene-soft overflow-hidden rounded-[1.45rem] border border-[#d9e3f1] bg-white ${innerClassName}`.trim()}
      >
        <img src={src} alt={alt} className={imageClassName} />
      </div>
    </div>
  );
}
