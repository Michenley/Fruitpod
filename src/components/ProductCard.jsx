import { Link } from "react-router-dom";
import Tag from "./ui/Tag";

function ProductCard({ product }) {
  const { id, slug, name, description, price, tags = [], category } = product;

  // Use slug if it exists, otherwise fall back to id
  const detailPath = `/menu/${slug || id}`;

  return (
    <Link
      to={detailPath}
      className="
        block h-full rounded-2xl focus:outline-none
        focus-visible:ring-2 focus-visible:ring-fp-green
        focus-visible:ring-offset-2 focus-visible:ring-offset-fp-offWhite
      "
    >
      <article
        className="
          group flex h-full flex-col rounded-2xl bg-white/80 p-4
          shadow-sm ring-1 ring-slate-100
          transition-transform duration-200 ease-out
          hover:-translate-y-1 hover:shadow-lg hover:ring-fp-green/25
          active:translate-y-[1px] active:scale-[0.98] active:shadow-md
        "
      >
        <header className="mb-2 flex items-start justify-between gap-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-fp-green/80">
              {category}
            </p>
            <h3
              className="
                mt-1 text-base md:text-lg font-semibold text-fp-dark
                transition-colors duration-200 group-hover:text-fp-green
              "
            >
              {name}
            </h3>
          </div>
          <p
            className="
              shrink-0 rounded-full bg-fp-greenLight px-3 py-1
              text-xs font-semibold text-fp-green
              transition-transform duration-200 group-hover:scale-105
            "
          >
            ₵{price}
          </p>
        </header>

        <p className="flex-1 text-sm text-slate-600">{description}</p>

        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}

        {/* Hover hint on desktop */}
        <div className="mt-3 flex items-center justify-end">
          <span
            className="
              hidden sm:inline text-[11px] font-medium text-fp-green
              opacity-0 group-hover:opacity-100
              transition-opacity duration-200
            "
          >
            See details →
          </span>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;
