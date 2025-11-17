import { NavLink } from "react-router-dom";
import LogoFruitpod from "./LogoFruitpod";

/* ==== EDIT THESE IF YOU LIKE ==== */
const EMAIL = "hello@fruitpod.example";
const PHONE = "+233 20 000 0000";
const OFFICE = "12 Fruit Lane, East Legon, Accra, Ghana";

const SOCIALS = [
  { href: "https://instagram.com/fruitpod", label: "Instagram", icon: "📸" },
  { href: "https://x.com/fruitpod", label: "X", icon: "𝕏" },
  { href: "https://facebook.com/fruitpod", label: "Facebook", icon: "f" },
];

// OpenStreetMap embed
const OSM_EMBED =
  "https://www.openstreetmap.org/export/embed.html?bbox=-0.232,5.55,-0.05,5.65&layer=mapnik&marker=5.60,-0.17";
/* ================================= */

function Footer() {
  return (
    <footer className="mt-16 border-t border-[#cde7d3] bg-[#eef7ef] text-[#0f5132]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top row: brand + columns */}
        <div className="grid gap-8 md:grid-cols-12">
          {/* Brand + blurb + socials */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7f1db] ring-1 ring-[#cde7d3]">
                <LogoFruitpod size={24} />
              </div>
              <span className="text-2xl font-semibold">Fruitpod</span>
            </div>

            <p className="text-[15px] leading-7 text-[#1b5e3b]">
              Fresh fruit bowls, parfaits, juices & smoothies — made with real,
              seasonal fruit and a playful spirit.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0f5132] ring-1 ring-[#cde7d3] hover:bg-[#e7f6ea]"
                >
                  <span className="text-lg">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h6 className="text-lg font-semibold">Explore</h6>
            <ul className="mt-3 space-y-2 text-[15px]">
              <li>
                <NavLink to="/menu" className="hover:text-[#147d52]">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-[#147d52]">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/order" className="hover:text-[#147d52]">
                  Contact / Order
                </NavLink>
              </li>
              <li>
                {/* keep it simple: just go to Menu for now */}
                <NavLink to="/menu#featured" className="hover:text-[#147d52]">
                  Featured items
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="md:col-span-2">
            <h6 className="text-lg font-semibold">Help</h6>
            <ul className="mt-3 space-y-2 text-[15px]">
              <li>
                <a href="#" className="hover:text-[#147d52]">
                  Get support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#147d52]">
                  Catering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#147d52]">
                  Group orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#147d52]">
                  Press / Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-[#cde7d3]" />

        {/* Contact row */}
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h6 className="text-lg font-semibold">Email</h6>
            <p className="mt-2 text-[15px]">
              <a href={`mailto:${EMAIL}`} className="hover:text-[#147d52]">
                {EMAIL}
              </a>
            </p>
          </div>

          <div>
            <h6 className="text-lg font-semibold">Phone</h6>
            <p className="mt-2 text-[15px]">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="hover:text-[#147d52]"
              >
                {PHONE}
              </a>
            </p>
          </div>

          <div>
            <h6 className="text-lg font-semibold">Office</h6>
            <p className="mt-2 text-[15px]">{OFFICE}</p>
          </div>
        </div>

        {/* Map block */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-white ring-1 ring-[#cde7d3]">
          <div className="h-72 md:h-96">
            <iframe
              title="Fruitpod location (OpenStreetMap)"
              src={OSM_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
          <div className="px-4 py-2 text-xs text-[#1b5e3b]/70">
            Map © OpenStreetMap contributors
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#cde7d3] bg-[#eef7ef]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 text-sm text-[#1b5e3b]/80 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Fruitpod. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#147d52]">
              Terms
            </a>
            <a href="#" className="hover:text-[#147d52]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#147d52]">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
