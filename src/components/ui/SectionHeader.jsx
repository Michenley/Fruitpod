/* Standardized section heading with optional eyebrow + subtitle */

function SectionHeader({ eyebrow, title, subtitle, align = "left" }) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <header className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.28em] text-fp-green">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </header>
  );
}

export default SectionHeader;
