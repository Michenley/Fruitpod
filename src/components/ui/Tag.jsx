/* Small pill tag for things like Vegan, New, etc. */

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-fp-green/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-fp-green">
      {children}
    </span>
  );
}

export default Tag;
