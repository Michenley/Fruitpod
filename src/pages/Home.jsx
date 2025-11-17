import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import ProductCard from "../components/ProductCard";
import HeroFloatingCard from "../components/HeroFloatingCard";
import InteractiveCard3D from "../components/InteractiveCard3D";
import { products } from "../data/products";
import SEO from "../components/SEO";

// HERO image
import heroKitchen from "../assets/hero-kitchen.jpg";

// Shared section animation: subtle + fast
const section = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

// You can tweak which products show where later
const featured = products.slice(0, 3); // “Seasonal picks”
const editorsPick = products.slice(3, 6); // “Editor’s pick”

function Home() {
  const navigate = useNavigate();

  // Pick three smoothies from the product list for the 3D section
  const smoothies = ["green-glow", "berry-blend", "sunrise-juice"]
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <>
      <SEO
        title="Fruitpod – Fresh bowls, parfaits & smoothies"
        description="Fresh fruit bowls, parfaits, juices and smoothies made with real fruit. Browse the Fruitpod menu and order quickly via WhatsApp."
        path="/"
      />

      <main className="flex flex-col">
        {/* HERO: full-bleed image + floating card */}
        <motion.section
          initial={{ opacity: 0, y: 10, scale: 1.01 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1], // smooth “modern” curve
          }}
          className="relative"
        >
          <div className="relative h-[54vh] w-full overflow-hidden md:h-[68vh]">
            <img
              src={heroKitchen}
              alt="Person preparing colourful Fruitpod bowls with fresh fruit"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            {/* soft overlay to keep text readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-transparent" />

            {/* Floating card */}
            <div className="absolute left-6 top-8 sm:left-12 sm:top-10">
              <HeroFloatingCard
                title="Salad Caprese (Fruitpod twist)"
                subtitle="Creamy yogurt, tomatoes, basil & strawberry—fresh, bright and snack-friendly."
                ctaLabel="View bowl"
                onClick={() =>
                  navigate("/menu/salad-caprese-fruitpod-twist")
                }
              />
            </div>
          </div>
        </motion.section>

        {/* SECTION 1: “Seasonal picks” */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-6xl space-y-6 px-4 py-12"
        >
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Seasonal picks
            </h2>
            <p className="text-sm text-slate-700">
              A few bright bowls &amp; parfaits for right now.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </motion.section>

        {/* SECTION 2: Smoothies — 3D motion cards (no videos) */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-6xl space-y-6 px-4 pb-12"
        >
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Smoothies you’ll love
            </h2>
            <p className="text-sm text-slate-700">
              Bright, refreshing and made from real fruit—no secrets, just
              fruit.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {smoothies.map((s) => (
              <InteractiveCard3D
                key={s.slug}
                image={s.image}
                title={s.name}
                subtitle={`GHS ${s.price}`}
                to={`/menu/${s.slug}`}
              />
            ))}
          </div>
        </motion.section>

        {/* SECTION 3: “Editor’s pick” */}
        <motion.section
          variants={section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-6xl space-y-6 px-4 pb-16"
        >
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Editor’s pick
            </h2>
            <p className="text-sm text-slate-700">
              Curated favourites by the Fruitpod team.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {editorsPick.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </motion.section>

        {/* FOOTER CTA band */}
        <section className="pb-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl bg-fp-green px-6 py-8 text-center text-white md:py-10">
              <h3 className="text-xl font-semibold md:text-2xl">
                Get bright bowls in your week
              </h3>
              <p className="mt-1 text-sm text-white/90 md:text-base">
                Order a quick bowl or browse the full menu—Fruitpod fits
                anywhere in the day.
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <Button
                  as={Link}
                  to="/order"
                  variant="ghost"
                  className="bg-fp-dark text-white hover:bg-fp-dark/90"
                >
                  Order now
                </Button>
                <Button
                  as={Link}
                  to="/menu"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  Browse menu
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
