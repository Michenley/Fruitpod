import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import TeamMemberCard from "../components/TeamMemberCard";
import { values, founder, history, team } from "../data/about";
import heroImage from "../assets/fruit-hero.jpg";
import SEO from "../components/SEO";

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <>
      <SEO
        title="About Fruitpod"
        description="Learn how Fruitpod started, what we care about and the small team behind the bright bowls, parfaits and smoothies."
        path="/about"
      />

      <main className="mx-auto max-w-6xl space-y-12 px-4 py-10">
        {/* Hero-style about section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-6 rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-100 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-8"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-fp-green">
              About Fruitpod
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A small fruit bar with a bright idea.
            </h1>
            <p className="text-sm text-slate-700 md:text-base">
              Fruitpod started as a simple thought: make it easy to grab
              something fresh, colourful and genuinely enjoyable – whether
              you&apos;re on a lunch break, between classes or headed home.
            </p>

            <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-fp-dark">
                  Real fruit, real texture
                </p>
                <p>
                  Bowls, parfaits and juices built from real ingredients – with
                  the crunch, creaminess and colour left in.
                </p>
              </div>
              <div>
                <p className="font-semibold text-fp-dark">
                  Made for busy days
                </p>
                <p>
                  Quick to order, easy to eat and bright enough to feel like a
                  small pause in the middle of everything else.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button as={Link} to="/order" variant="primary">
                Order Fruitpod
              </Button>
              <Button as={Link} to="/menu" variant="outline">
                Browse the menu
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08,
              }}
              className="relative h-56 w-full max-w-xs overflow-hidden rounded-3xl bg-fp-greenLight/40 ring-1 ring-fp-greenLight/70"
            >
              <img
                src={heroImage}
                alt="People enjoying bright Fruitpod bowls"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5" />
            </motion.div>
          </div>
        </motion.section>

        {/* What makes Fruitpod different */}
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
            eyebrow="What makes Fruitpod different"
            title="A small menu with a lot of care"
            subtitle="We keep things simple on purpose: fewer items, better ingredients and a team that actually cares how your bowl turns out."
            align="center"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {values.slice(0, 3).map((value) => (
              <div
                key={value.id}
                className="rounded-2xl bg-white/90 p-4 text-sm text-slate-800 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-[2px] hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fp-green">
                  {value.eyebrow || "Value"}
                </p>
                <h3 className="mt-1 text-base font-semibold text-fp-dark">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700">{value.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Founder story band */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-6 rounded-3xl bg-fp-greenLight px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-8"
        >
          <div className="max-w-md space-y-2">
            <p className="text-xs uppercase tracking-[0.24em] text-fp-green">
              Our founder&apos;s story
            </p>
            <h2 className="text-xl font-semibold text-fp-dark md:text-2xl">
              Fruitpod grew out of one simple obsession: good fruit, every day.
            </h2>
            <p className="text-sm text-slate-800">{founder.blurb}</p>
          </div>

          <div className="grid gap-3 text-sm text-slate-800 md:max-w-md">
            <div className="rounded-2xl bg-white/90 p-3 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fp-green">
                The idea
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Start with what&apos;s seasonal and close by, build bowls that
                actually taste like fruit – and make it easy to order again.
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 p-3 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fp-green">
                The promise
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Keep things bright, friendly and consistent – the kind of place
                you can recommend without thinking twice.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Our history timeline */}
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
            eyebrow="Our history"
            title="How Fruitpod has grown"
            subtitle="A quick look at how a small idea turned into a colourful little fruit bar."
            align="center"
          />

          <div className="mx-auto max-w-3xl space-y-6">
            {history.map((item, index) => (
              <div
                key={item.year}
                className={`relative border-l border-fp-green/30 pl-8 pb-6 ${
                  index === history.length - 1 ? "pb-0" : ""
                }`}
              >
                <span className="absolute left-0 top-1 -ml-[7px] h-3 w-3 rounded-full bg-fp-green" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fp-green">
                  {item.year}
                </p>
                <h3 className="mt-1 text-base font-semibold text-fp-dark md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Image band / culture section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden rounded-3xl bg-slate-900 text-white"
        >
          <div className="grid gap-0 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="flex flex-col justify-center space-y-3 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-lime-200">
                Fruitpod moments
              </p>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Bowls that fit into real life.
              </h2>
              <p className="text-sm text-slate-100/90 md:text-base">
                Morning commutes, office snacks, study breaks, Friday team
                treats – we want Fruitpod to feel like a small moment you
                actually look forward to, not just something you grab because
                you&apos;re in a hurry.
              </p>
            </div>
            <div className="relative h-52 w-full md:h-full">
              <img
                src={heroImage}
                alt="People enjoying Fruitpod"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/10 to-transparent md:bg-gradient-to-l" />
            </div>
          </div>
        </motion.section>

        {/* Our Team */}
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
            eyebrow="Our team"
            title="The people behind Fruitpod"
            subtitle="A small crew that cares a lot about fresh fruit, good service and bright colours."
            align="center"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {team.map((member) => (
              <div
                key={member.id}
                className="transition-transform duration-150 hover:-translate-y-[2px]"
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  blurb={member.blurb}
                />
              </div>
            ))}
          </div>
        </motion.section>

        {/* Getting started CTA */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pb-4"
        >
          <div className="flex flex-col items-center gap-3 rounded-3xl bg-fp-green px-6 py-7 text-center text-white md:px-10 md:py-8">
            <h2 className="text-xl font-semibold md:text-2xl">
              Ready to try Fruitpod for yourself?
            </h2>
            <p className="max-w-xl text-sm text-white/90 md:text-base">
              Start with a classic parfait, a bright fruit bowl or a simple
              juice – and build from there. We&apos;ll help you find a combo
              you love.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-1">
              <Button
                as={Link}
                to="/order"
                variant="primary"
                className="bg-fp-dark text-white hover:bg-fp-dark/90"
              >
                Order now
              </Button>
              <Button as={Link} to="/menu" variant="ghost">
                Browse the menu
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}

export default About;
