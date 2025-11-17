function FeatureCard({ icon, title, body }) {
  return (
    <article className="flex gap-3 rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-slate-100">
      <div className="mt-1 text-xl">
        {icon}
      </div>
      <div>
        <h3 className="text-base md:text-lg font-semibold text-fp-dark">
          {title}
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          {body}
        </p>
      </div>
    </article>
  );
}

export default FeatureCard;
