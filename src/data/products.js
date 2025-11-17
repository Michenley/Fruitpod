// ---------- Image imports (Vite will handle asset hashing) ----------
import imgCaprese from "../assets/products/salad-caprese-fruitpod-twist.jpg";
import imgClassicParfait from "../assets/products/classic-parfait.jpg";
import imgTropicalParfait from "../assets/products/tropical-parfait.jpg";
import imgGreenGlow from "../assets/products/green-glow.jpg";
import imgBerryBlend from "../assets/products/berry-blend.jpg";
import imgSunriseJuice from "../assets/products/sunrise-juice.jpg";
import imgWatermelonCooler from "../assets/products/watermelon-cooler.jpg";
import imgRainbowBowl from "../assets/products/rainbow-bowl.jpg";
import imgProteinBowl from "../assets/products/protein-bowl.jpg";
import imgChiaSeeds from "../assets/products/chia-seeds.jpg";
import imgGranolaCrunch from "../assets/products/granola-crunch.jpg";

// ---------- Categories ----------
export const categories = [
  "Parfaits",
  "Smoothies",
  "Juices",
  "Fruit Bowls",
  "Add-ons",
];

// Optional: slug helper (kept for future use)
export const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// ---------- Products ----------
export const products = [
  // HERO FEATURE (for Home CTA)
  {
    id: "salad-caprese-fruitpod-twist",
    slug: "salad-caprese-fruitpod-twist",
    name: "Salad Caprese (Fruitpod twist)",
    category: "Parfaits",
    price: 36,
    description:
      "Creamy yogurt, tomatoes, basil & strawberry—fresh, bright and snack-friendly.",
    tags: ["Best seller"],
    image: imgCaprese,
    alt: "Salad Caprese parfait with strawberries, basil and yogurt",
  },

  // Parfaits
  {
    id: "classic-parfait",
    slug: "classic-parfait",
    name: "Classic Parfait",
    category: "Parfaits",
    price: 35,
    description:
      "Creamy yogurt, crunchy granola and seasonal fruit layers.",
    tags: ["High protein"],
    image: imgClassicParfait,
    alt: "Classic parfait with yogurt, granola and fruit",
    featured: true,
  },
  {
    id: "tropical-parfait",
    slug: "tropical-parfait",
    name: "Tropical Parfait",
    category: "Parfaits",
    price: 38,
    description:
      "Pineapple, mango and coconut with yogurt and granola.",
    tags: ["Best seller"],
    image: imgTropicalParfait,
    alt: "Tropical parfait with pineapple, mango and coconut",
  },

  // Smoothies
  {
    id: "green-glow",
    slug: "green-glow",
    name: "Green Glow Smoothie",
    category: "Smoothies",
    price: 32,
    description:
      "Spinach, pineapple, banana, apple and ginger.",
    tags: ["Vegan"],
    image: imgGreenGlow,
    alt: "Green glow smoothie with spinach, pineapple and banana",
    featured: true,
  },
  {
    id: "berry-blend",
    slug: "berry-blend",
    name: "Berry Blend Smoothie",
    category: "Smoothies",
    price: 34,
    description:
      "Strawberry, blueberry, banana and yogurt.",
    tags: ["Antioxidant"],
    image: imgBerryBlend,
    alt: "Berry blend smoothie with strawberries and blueberries",
  },

  // Juices
  {
    id: "sunrise-juice",
    slug: "sunrise-juice",
    name: "Sunrise Juice",
    category: "Juices",
    price: 28,
    description:
      "Orange, carrot, ginger and a splash of lemon.",
    tags: ["Immune boost"],
    image: imgSunriseJuice,
    alt: "Sunrise juice with orange, carrot and ginger",
  },
  {
    id: "watermelon-cooler",
    slug: "watermelon-cooler",
    name: "Watermelon Cooler",
    category: "Juices",
    price: 26,
    description:
      "Fresh watermelon with lime and mint.",
    tags: ["Refreshing"],
    image: imgWatermelonCooler,
    alt: "Watermelon juice with mint and lime",
    featured: true,
  },

  // Fruit Bowls
  {
    id: "rainbow-bowl",
    slug: "rainbow-bowl",
    name: "Rainbow Fruit Bowl",
    category: "Fruit Bowls",
    price: 40,
    description:
      "Colorful mix of seasonal fruit with a lime-honey drizzle.",
    tags: ["Vegan", "Best seller"],
    image: imgRainbowBowl,
    alt: "Rainbow fruit bowl with colorful seasonal fruits",
    featured: true,
  },
  {
    id: "protein-bowl",
    slug: "protein-bowl",
    name: "Protein Fruit Bowl",
    category: "Fruit Bowls",
    price: 42,
    description:
      "Fruit, nuts and seeds with a light yogurt drizzle.",
    tags: ["High protein"],
    image: imgProteinBowl,
    alt: "Protein fruit bowl with nuts and seeds",
  },

  // Add-ons
  {
    id: "chia-seeds",
    slug: "chia-seeds",
    name: "Chia seeds",
    category: "Add-ons",
    price: 5,
    description: "Extra chia for fiber and texture.",
    tags: ["Add-on"],
    image: imgChiaSeeds,
    alt: "Chia seeds in a small bowl",
  },
  {
    id: "granola-crunch",
    slug: "granola-crunch",
    name: "Granola crunch",
    category: "Add-ons",
    price: 5,
    description: "House granola for extra crunch.",
    tags: ["Add-on"],
    image: imgGranolaCrunch,
    alt: "Granola in a small white bowl",
  },
];
