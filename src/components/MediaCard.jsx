function MediaCard({ image, title, meta }) {
  return (
    <article className="rounded-2xl bg-white/90 shadow-sm ring-1 ring-slate-100 overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="h-40 w-full object-cover" />
        {meta && (
          <span className="absolute bottom-2 left-2 rounded-full bg-black/70 px-2 py-0.5 text-xs text-white">
            {meta}
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm md:text-base font-semibold text-fp-dark">{title}</h3>
      </div>
    </article>
  );
}
export default MediaCard;
