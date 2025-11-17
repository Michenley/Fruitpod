function TestimonialCard({ quote, name, role }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-slate-100">
      <p className="text-sm text-slate-700 italic">
        “{quote}”
      </p>
      <div className="mt-3">
        <p className="text-sm font-semibold text-fp-dark">
          {name}
        </p>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
          {role}
        </p>
      </div>
    </article>
  );
}

export default TestimonialCard;
