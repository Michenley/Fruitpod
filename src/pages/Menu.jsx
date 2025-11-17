import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";
import SEO from "../components/SEO";

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase().trim();

  // 1) filter by category
  const categoryFiltered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // 2) filter by search (name + description)
  const visibleProducts = categoryFiltered.filter((p) => {
    if (!query) return true;
    const haystack = `${p.name} ${p.description || ""}`.toLowerCase();
    return haystack.includes(query);
  });

  const allCategories = ["All", ...categories];

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    // smooth-ish scroll to top of the page section so user doesn’t feel lost
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SEO
        title="Fruitpod menu"
        description="Parfaits, smoothies, juices, fruit bowls and add-ons. Build the combo you love."
        path="/menu"
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-10">
        {/* Intro + filters */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="space-y-6"
        >
          <SectionHeader
            eyebrow="Menu"
            title="Fruitpod menu"
            subtitle={
              query
                ? `Showing results for “${query}”. Browse parfaits, smoothies, juices, fruit bowls and add-ons.`
                : "Browse parfaits, smoothies, juices, fruit bowls and add-ons. Prices are indicative — we can adjust later to match the real Fruitpod list."
            }
          />

          {/* Category filter row */}
          <div className="flex flex-wrap items-center gap-2">
            {allCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryClick(cat)}
                  className={`rounded-full border px-4 py-1.5 text-xs md:text-sm font-medium transition ${
                    isActive
                      ? "border-fp-green bg-fp-green text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-fp-green/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}

            {/* Count */}
            <span className="ml-auto text-xs text-slate-600">
              {visibleProducts.length} item
              {visibleProducts.length !== 1 ? "s" : ""}
            </span>
          </div>
        </motion.section>

        {/* Products grid / empty state */}
        {visibleProducts.length > 0 ? (
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.04,
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </section>
        ) : (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-700">
            <p className="text-sm">
              No items match your search{query ? ` “${query}”` : ""} in{" "}
              <span className="font-medium">{activeCategory}</span>.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Try a different term or category.
            </p>
          </section>
        )}

        {/* CTA at bottom */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 flex flex-col items-start gap-3 rounded-2xl bg-fp-greenLight px-5 py-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h2 className="text-lg font-semibold md:text-xl">
              Ready to build your bowl?
            </h2>
            <p className="max-w-xl text-sm text-slate-700">
              Pick a parfait, smoothie or fruit bowl and we’ll confirm your
              order via WhatsApp or call. Later we can add a custom “build your
              bowl” flow here.
            </p>
          </div>
          <Button variant="primary">Order from this menu</Button>
        </motion.section>
      </main>
    </>
  );
}

export default Menu;
