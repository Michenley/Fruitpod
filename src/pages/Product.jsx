import { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/products";
import SEO from "../components/SEO";
import Button from "../components/ui/Button";
import Tag from "../components/ui/Tag";

const section = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// Same base as on Order page (update to your real number)
const WHATSAPP_BASE = "https://wa.me/233000000000";

function Product() {
  const { slug, id } = useParams();
  const navigate = useNavigate();

  const key = slug || id;

  const product = useMemo(
    () => products.find((p) => p.slug === key || p.id === key),
    [key]
  );

  if (!product) {
    return (
      <>
        <SEO
          title="We couldn’t find that item – Fruitpod"
          description="The Fruitpod item you’re looking for could not be found."
          path={`/menu/${key || ""}`}
        />

        <main className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold text-fp-dark">
            We couldn&apos;t find that item
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            It may have been renamed or is no longer on the menu.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button as={Link} to="/menu" variant="primary">
              Back to menu
            </Button>
            <Button variant="outline" onClick={() => navigate(-1)}>
              Go back
            </Button>
          </div>
        </main>
      </>
    );
  }

  const {
    name,
    description,
    price,
    category,
    tags = [],
    image,
    alt,
  } = product;

  const message = encodeURIComponent(
    `Hi Fruitpod! I'd like to order: ${name} (GHS ${price}).`
  );
  const whatsappLink = `${WHATSAPP_BASE}?text=${message}`;

  // Simple related items: same category, not this one
  const related = products
    .filter((p) => p.id !== product.id && p.category === category)
    .slice(0, 3);

  return (
    <>
      <SEO
        title={`${name} – Fruitpod`}
        description={description || `Order ${name} from Fruitpod.`}
        path={`/menu/${product.slug || product.id}`}
      />

      <main className="mx-auto max-w-6xl space-y-10 px-4 py-10">
        {/* Breadcrumbs */}
        <nav className="mb-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-fp-green">
            Home
          </Link>
          <span> / </span>
          <Link to="/menu" className="hover:text-fp-green">
            Menu
          </Link>
          <span> / </span>
          <span className="text-slate-700">{name}</span>
        </nav>

        {/* Main layout: image + details */}
        <motion.section
          variants={section}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
        >
          {/* Image side */}
          <div className="rounded-3xl bg-fp-greenLight/40 p-2 ring-1 ring-fp-greenLight/70 md:p-3">
            <div className="overflow-hidden rounded-2xl">
              {image ? (
                <img
                  src={image}
                  alt={alt || name}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-fp-greenLight via-white to-fp-green/20 text-sm font-medium text-fp-dark/70">
                  Image coming soon
                </div>
              )}
            </div>
          </div>

          {/* Details side */}
          <div className="flex flex-col space-y-4">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.22em] text-fp-green">
                {category}
              </p>
              <h1 className="text-2xl font-semibold tracking-tight text-fp-dark md:text-3xl">
                {name}
              </h1>
            </div>

            <p className="text-sm text-slate-700 md:text-base">
              {description ||
                "A bright Fruitpod bowl made with real seasonal fruit and a playful mix of textures."}
            </p>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}

            <div className="space-y-3 pt-2">
              <p className="text-lg font-semibold text-fp-dark">
                ₵{price}{" "}
                <span className="text-xs font-normal text-slate-500">
                  per serving
                </span>
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  as="a"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Order this item on WhatsApp
                </Button>
                <Button variant="outline" onClick={() => navigate("/menu")}>
                  Back to menu
                </Button>
              </div>
            </div>

            {/* Small info list */}
            <div className="mt-4 grid gap-3 text-xs text-slate-600 md:grid-cols-2">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-fp-dark">
                  Perfect for
                </p>
                <p>
                  Quick lunches, office treats or a bright snack between
                  meetings.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-fp-dark">
                  How we serve it
                </p>
                <p>
                  Prepared fresh when you order. Best enjoyed within a few hours
                  of pickup or delivery.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Related items */}
        {related.length > 0 && (
          <motion.section
            variants={section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-fp-dark md:text-xl">
                You might also like
              </h2>
              <Link
                to="/menu"
                className="text-xs font-medium text-fp-green hover:underline"
              >
                View full menu
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/menu/${p.slug || p.id}`}
                  className="group rounded-2xl bg-white/90 p-3 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md hover:ring-fp-green/30"
                >
                  <div className="overflow-hidden rounded-xl">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.alt || p.name}
                        className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="flex h-32 w-full items-center justify-center bg-gradient-to-br from-fp-greenLight via-white to-fp-green/20 text-[11px] font-medium text-fp-dark/70">
                        Image coming soon
                      </div>
                    )}
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-fp-green">
                    {p.category}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-fp-dark">
                    {p.name}
                  </p>
                  <p className="text-xs text-slate-600">₵{p.price}</p>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </main>
    </>
  );
}

export default Product;
