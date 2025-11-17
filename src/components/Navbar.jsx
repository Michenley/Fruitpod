import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoFruitpod from "./LogoFruitpod";

const linkBase =
  // ⬇️ added transition-all, duration-200, hover scale + color, and a11y focus ring
  "text-sm font-medium px-3 py-2 rounded-full transition-all duration-200 hover:scale-[1.02] hover:text-fp-green hover:bg-fp-greenLight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-green/40";

const navLinkClass = ({ isActive }) =>
  isActive
    ? `${linkBase} bg-fp-greenLight text-fp-dark`
    : `${linkBase} text-slate-700`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // '/' focuses search on desktop
  useEffect(() => {
    const onKey = (e) => {
      if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const query = q.trim();
    navigate(query ? `/menu?q=${encodeURIComponent(query)}` : "/menu");
    setShowSearch(false);
    setIsOpen(false);
  };

  return (
    <header className="border-b border-lime-100 bg-fp-offWhite/90 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 md:py-4">
        {/* Brand */}
        <NavLink
          to="/"
          className="flex items-center gap-2 shrink-0 transition-all duration-200 hover:scale-[1.02]"
        >
          <LogoFruitpod />
          <span className="text-lg font-semibold tracking-tight">Fruitpod</span>
        </NavLink>

        {/* Left nav links */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/menu" className={navLinkClass}>
            Menu
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/order" className={navLinkClass}>
            Order
          </NavLink>
        </nav>

        {/* Desktop search */}
        <form onSubmit={submit} className="ml-auto hidden md:block">
          <div className="relative">
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              type="search"
              placeholder="Search bowls, smoothies…  ( / )"
              className="w-[280px] rounded-full border border-slate-200 bg-white/80 px-3 py-2 pl-9 text-sm outline-none transition-all duration-200 focus:border-fp-green focus:ring-1 focus:ring-fp-green"
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔎
            </span>
          </div>
        </form>

        {/* Mobile buttons */}
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <button
            aria-label="Search"
            className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-slate-700 shadow-sm transition-all duration-200 hover:scale-[1.06]"
            onClick={() => setShowSearch((v) => !v)}
          >
            🔎
          </button>
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-slate-700 shadow-sm transition-all duration-200 hover:scale-[1.06]"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile search panel */}
      {showSearch && (
        <div className="border-t border-lime-100 bg-fp-offWhite/95 px-4 pb-3 pt-2 md:hidden">
          <form onSubmit={submit}>
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              type="search"
              placeholder="Search bowls, smoothies…"
              className="w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm outline-none transition-all duration-200 focus:border-fp-green focus:ring-1 focus:ring-fp-green"
            />
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <nav className="border-t border-lime-100 bg-fp-offWhite/95 px-2 pb-3 pt-2 md:hidden">
          <div className="flex flex-col">
            <NavLink
              to="/"
              end
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/order"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Order
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
