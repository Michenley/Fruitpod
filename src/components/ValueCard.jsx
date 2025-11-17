function ValueCard({ title, body }) {
  return (
    <article className="flex flex-col gap-2 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100">
      <h3 className="text-base md:text-lg font-semibold text-fp-dark">
        {title}
      </h3>
      <p className="text-sm text-slate-600">
        {body}
      </p>
    </article>
  );
}

export default ValueCard;
