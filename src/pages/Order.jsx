import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import QRCode from "react-qr-code";
import SEO from "../components/SEO";

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

// TODO: replace these with real Fruitpod contact details
const WHATSAPP_LINK = "https://wa.me/233000000000"; // put your full WhatsApp number here
const PHONE_NUMBER = "+233 00 000 0000"; // display text for call
const PHONE_LINK = "tel:+233000000000";
const INSTAGRAM_LINK = "https://instagram.com/fruitpod"; // update to real handle

function Order() {
  return (
    <>
      <SEO
        title="Order Fruitpod"
        description="Order Fruitpod bowls, parfaits, smoothies and juices via WhatsApp, call or our simple enquiry form."
        path="/order"
      />

      <main className="mx-auto max-w-6xl space-y-12 px-4 py-10">
        {/* Intro */}
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
            eyebrow="Order"
            title="Order Fruitpod"
            subtitle="Choose your bowl, parfait, smoothie or juice and we’ll confirm your order quickly via WhatsApp or call."
          />
        </motion.section>

        {/* How it works */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.05,
          }}
          className="grid gap-6 md:grid-cols-3"
        >
          <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-fp-greenLight text-lg text-fp-green">
                🥣
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fp-green">
                Step 1
              </p>
            </div>
            <h2 className="mt-2 text-base font-semibold text-fp-dark md:text-lg">
              Pick your favourites
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Browse the menu and choose your parfait, smoothie, juice or fruit
              bowl. You can also build a mix for catering or small events.
            </p>
          </div>

          <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-fp-greenLight text-lg text-fp-green">
                💬
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fp-green">
                Step 2
              </p>
            </div>
            <h2 className="mt-2 text-base font-semibold text-fp-dark md:text-lg">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Share your order via WhatsApp or call. We’ll confirm availability,
              timing and total price before we start preparing.
            </p>
          </div>

          <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-fp-greenLight text-lg text-fp-green">
                🚚
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fp-green">
                Step 3
              </p>
            </div>
            <h2 className="mt-2 text-base font-semibold text-fp-dark md:text-lg">
              Pickup or delivery
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Depending on your location, we’ll confirm pickup details or
              delivery options so your Fruitpod arrives fresh.
            </p>
          </div>
        </motion.section>

        {/* Contact buttons + QR */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
          className="space-y-4 rounded-2xl bg-fp-greenLight px-5 py-6"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-3">
              <h2 className="text-lg font-semibold text-fp-dark md:text-xl">
                Ready to place an order?
              </h2>
              <p className="text-sm text-slate-700">
                The quickest way to order is via WhatsApp. You can also call us
                directly, or send a message on Instagram for general questions.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button
                  as="a"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Order on WhatsApp
                </Button>

                <Button as="a" href={PHONE_LINK} variant="outline">
                  Call us: {PHONE_NUMBER}
                </Button>

                <Button
                  as="a"
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                >
                  Message on Instagram
                </Button>
              </div>
            </div>

            {/* QR code block */}
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/90 px-4 py-4 shadow-sm">
              <span className="inline-flex items-center rounded-full bg-fp-greenLight px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-fp-green">
                Scan &amp; order
              </span>
              <div className="rounded-xl bg-white p-2 shadow-sm">
                <QRCode
                  value={WHATSAPP_LINK}
                  size={120}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                />
              </div>
              <p className="max-w-[180px] text-center text-[11px] text-slate-500">
                Point your camera at the code to open our WhatsApp chat
                instantly.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Simple enquiry form (Netlify-ready later) */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
          className="space-y-4"
        >
          <SectionHeader
            eyebrow="Catering & bulk orders"
            title="Planning something bigger?"
            subtitle="Use this form to tell us about office orders, small events or regular deliveries. We’ll get back to you with options."
          />

          <form
            name="fruitpod-enquiry"
            method="POST"
            data-netlify="true"
            className="space-y-4 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-slate-100"
          >
            {/* Netlify hidden input (for later when you deploy) */}
            <input type="hidden" name="form-name" value="fruitpod-enquiry" />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-[0.16em] text-slate-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-fp-green focus:ring-1 focus:ring-fp-green"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-[0.16em] text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-fp-green focus:ring-1 focus:ring-fp-green"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="details"
                className="text-xs font-medium uppercase tracking-[0.16em] text-slate-700"
              >
                Order details
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-fp-green focus:ring-1 focus:ring-fp-green"
                placeholder="Tell us how many people, what kind of order, and your ideal date/time."
                required
              />
            </div>

            <Button type="submit" variant="primary">
              Send enquiry
            </Button>
          </form>
        </motion.section>

        {/* Location / delivery info (text only – map stays in footer) */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="space-y-3 text-sm text-slate-700"
        >
          <h2 className="text-base font-semibold text-fp-dark md:text-lg">
            Where we deliver
          </h2>
          <p>
            You can adjust this section later with exact locations, delivery
            radius or pickup points once your Fruitpod setup is final. For now,
            use it to briefly explain your main delivery areas or pickup spot.
          </p>
        </motion.section>
      </main>
    </>
  );
}

export default Order;
