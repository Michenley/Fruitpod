function HeroFloatingCard({ title, subtitle, ctaLabel="See more", onClick }) {
  return (
    <div className="w-[280px] rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-black/5">
      <p className="text-[11px] uppercase tracking-[0.18em] text-fp-green/90">Bowl of the day</p>
      <h3 className="mt-1 text-lg font-semibold text-fp-dark">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
      <button
        onClick={onClick}
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-fp-green px-4 py-2 text-sm font-medium text-white hover:bg-fp-green/90"
      >
        {ctaLabel} <span>→</span>
      </button>
    </div>
  );
}
export default HeroFloatingCard;
