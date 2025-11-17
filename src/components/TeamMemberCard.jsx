function TeamMemberCard({ name, role, blurb }) {
  const initial = name?.charAt(0) ?? "?";

  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-slate-100">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fp-greenLight text-sm font-semibold text-fp-dark">
          {initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-fp-dark">{name}</p>
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
            {role}
          </p>
        </div>
      </div>
      <p className="text-sm text-slate-700">{blurb}</p>
    </article>
  );
}

export default TeamMemberCard;
