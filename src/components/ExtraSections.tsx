import { motion, useInView, useScroll, useSpring, useTransform, animate } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Plus,
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Check,
} from "lucide-react";
import { featuredGalleryPhotoIds, galleryPhotos } from "@/lib/gallery";

const uploadedPhoto = (id: string) => galleryPhotos.find((photo) => photo.id === id)!;
const hero = uploadedPhoto("13").src;

const ease = [0.22, 1, 0.36, 1] as const;

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-primary"
    />
  );
}

export function FloatingChat() {
  return (
    <motion.a
      href="https://wa.me/255678664341"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      aria-label="Chat with Run Africa on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-30" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease, onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { n: 12, s: "+", l: "Years guiding in Tanzania" },
    { n: 2400, s: "+", l: "Happy travellers" },
    { n: 98, s: "%", l: "Summit success support" },
    { n: 4.9, s: "★", l: "Average guest rating" },
  ];
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="bg-background px-5 py-10 text-center md:py-14">
            <p className="font-display text-4xl text-primary md:text-6xl">
              {s.n % 1 ? (
                <>
                  {s.n}
                  {s.s}
                </>
              ) : (
                <Counter to={s.n} suffix={s.s} />
              )}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HorizontalGallery() {
  const photos = featuredGalleryPhotoIds.map(uploadedPhoto);

  return (
    <section id="gallery" className="bg-secondary py-24 text-secondary-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3 text-accent">Moments from our journeys</p>
            <h2 className="text-4xl md:text-6xl">
              Run Africa <em className="text-accent">gallery.</em>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-75 md:text-base">
            A collection of photographs shared with us from the places, people and experiences that
            make every journey memorable.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {photos.map((photo) => (
            <Link
              key={photo.id}
              to="/gallery/$photoId"
              params={{ photoId: photo.id }}
              aria-label={`View ${photo.title}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-on-image md:p-4">
                <span className="font-display text-sm md:text-lg">{photo.title}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm opacity-70">Select a photo to read more about the journey.</p>
        <Link
          to="/gallery"
          className="mt-6 inline-flex items-center gap-2 border-b border-on-image/70 pb-1 text-sm transition hover:text-accent"
        >
          Search the full gallery <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

const months = [
  ["Jan", "Calving season", "Southern Serengeti teems with newborn wildebeest and predators.", 4],
  ["Feb", "Calving peak", "Thousands of calves born daily — dramatic predator action.", 5],
  ["Mar", "Green season", "Lush landscapes, fewer crowds, great value.", 3],
  ["Apr", "Long rains", "Quiet parks and the lowest prices of the year.", 2],
  ["May", "Rains ease", "Herds start moving west; landscapes still green.", 3],
  [
    "Jun",
    "Dry season begins",
    "Migration heads to the Western Corridor. Ideal for Kilimanjaro.",
    4,
  ],
  ["Jul", "River crossings", "Mara River crossings begin in the north. Peak season.", 5],
  ["Aug", "Peak crossings", "Best wildlife viewing of the year. Book early.", 5],
  ["Sep", "Northern Serengeti", "Crossings continue, clear skies, superb game.", 5],
  ["Oct", "Dry & golden", "Great game viewing and a perfect Zanzibar add-on.", 4],
  ["Nov", "Short rains", "Herds return south. Fewer visitors, softer prices.", 3],
  ["Dec", "Festive safari", "Green plains and the start of calving season.", 4],
] as const;

export function WhenToGo() {
  const [m, setM] = useState(6);
  const [name, title, desc, score] = months[m] ?? months[0]!;
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <p className="eyebrow mb-4 text-primary">When to go</p>
      <h2 className="text-4xl md:text-6xl">
        Every month, <em className="text-primary">a different story.</em>
      </h2>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Tap a month to see what Tanzania offers.
      </p>
      <div className="mt-10 grid grid-cols-6 gap-2 md:grid-cols-12">
        {months.map((x, i) => (
          <button
            key={x[0]}
            onClick={() => setM(i)}
            className={`relative rounded-md border py-3 text-sm transition ${i === m ? "border-primary text-primary-foreground" : "border-border hover:border-primary"}`}
          >
            {i === m && (
              <motion.span
                layoutId="month"
                className="absolute inset-0 rounded-md bg-primary"
                transition={{ type: "spring", bounce: 0.25 }}
              />
            )}
            <span className="relative">{x[0]}</span>
          </button>
        ))}
      </div>
      <motion.div
        key={m}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="mt-8 grid gap-6 rounded-lg bg-card p-6 shadow-elegant md:grid-cols-[1fr_auto] md:p-10"
      >
        <div>
          <p className="eyebrow text-primary">{name}</p>
          <h3 className="mt-2 text-3xl">{title}</h3>
          <p className="mt-3 text-muted-foreground">{desc}</p>
        </div>
        <div className="flex items-end gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ height: 0 }}
              animate={{ height: 12 + i * 10 }}
              transition={{ delay: i * 0.06 }}
              className={`w-4 rounded-sm ${i < score ? "bg-primary" : "bg-muted"}`}
            />
          ))}
          <span className="ml-3 text-sm text-muted-foreground">Wildlife rating</span>
        </div>
      </motion.div>
    </section>
  );
}

const reviews = [
  {
    q: "Our guide spotted a leopard we'd never have seen on our own. Every detail was handled — we just got to be present.",
    n: "Sarah & Tom",
    f: "United Kingdom · Serengeti Migration",
  },
  {
    q: "Summiting Kilimanjaro was the hardest and best thing I've done. The team's pacing and care were incredible.",
    n: "Daniel K.",
    f: "Germany · Kilimanjaro Trek",
  },
  {
    q: "From the crater floor to the beaches of Zanzibar, it felt like the trip was built just for us.",
    n: "Amina R.",
    f: "Canada · Safari & Beach",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);
  const r = reviews[i] ?? reviews[0]!;
  return (
    <section className="relative overflow-hidden text-on-image">
      <img
        src={hero}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-overlay/80" />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
        <Quote className="mx-auto h-10 w-10 text-accent" />
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="mt-6 font-display text-2xl leading-snug md:text-4xl">“{r.q}”</p>
          <p className="mt-6 font-semibold">{r.n}</p>
          <p className="text-sm opacity-70">{r.f}</p>
        </motion.div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Previous"
            onClick={() => setI((i + reviews.length - 1) % reviews.length)}
            className="grid h-10 w-10 place-items-center rounded-full border border-on-image/30 hover:bg-on-image/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          {reviews.map((_, k) => (
            <span
              key={k}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-accent" : "w-3 bg-on-image/40"}`}
            />
          ))}
          <button
            aria-label="Next"
            onClick={() => setI((i + 1) % reviews.length)}
            className="grid h-10 w-10 place-items-center rounded-full border border-on-image/30 hover:bg-on-image/10"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  [
    "When is the best time for a safari?",
    "June to October offers dry weather and river crossings; January–February is calving season. Every month has something special.",
  ],
  [
    "Are your safaris private?",
    "Yes — every journey is tailor-made with a private vehicle and your own guide.",
  ],
  [
    "How fit do I need to be for Kilimanjaro?",
    "Good general fitness is enough. Our routes include acclimatization days to improve your chances of summiting.",
  ],
  [
    "Can I add Zanzibar to my safari?",
    "Absolutely. Most guests finish with a few relaxing days on the island.",
  ],
  [
    "What is included in the price?",
    "Park fees, accommodation, meals on safari, transfers and a professional guide. We'll share a clear breakdown with every quote.",
  ],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-[1fr_1.5fr] md:px-10 md:py-32">
      <div>
        <p className="eyebrow mb-4 text-primary">Good to know</p>
        <h2 className="text-4xl md:text-6xl">
          Questions, <em className="text-primary">answered.</em>
        </h2>
      </div>
      <div className="divide-y divide-border border-y border-border">
        {faqs.map(([q, a], i) => (
          <div key={q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg"
            >
              {q}
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                className="shrink-0 text-primary"
              >
                <Plus />
              </motion.span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="pb-6 text-muted-foreground">{a}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

const interests = [
  "Wildlife safari",
  "Kilimanjaro trek",
  "Zanzibar beach",
  "Ngorongoro crater",
  "Cultural visits",
  "Honeymoon",
];

export function TripPlanner() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[]>([]);
  const [days, setDays] = useState(7);
  const [done, setDone] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDone(true);
  };
  const toggle = (x: string) =>
    setPicked((p) => (p.includes(x) ? p.filter((y) => y !== x) : [...p, x]));
  return (
    <section id="planner" className="bg-muted">
      <div className="mx-auto max-w-3xl px-5 py-24 md:py-32">
        <p className="eyebrow mb-4 text-center text-primary">Safari planner</p>
        <h2 className="text-center text-4xl md:text-6xl">
          Build your <em className="text-primary">dream trip.</em>
        </h2>
        <div className="mt-10 rounded-lg bg-card p-6 shadow-elegant md:p-10">
          {done ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-10 text-center"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check />
              </div>
              <h3 className="mt-6 text-3xl">Asante sana!</h3>
              <p className="mt-2 text-muted-foreground">
                We’ll reply within 24 hours with your tailored itinerary.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={submit}>
              <div className="mb-8 flex gap-2">
                {[0, 1, 2].map((s) => (
                  <span
                    key={s}
                    className={`h-1 flex-1 rounded-full transition ${s <= step ? "bg-primary" : "bg-muted"}`}
                  />
                ))}
              </div>
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                {step === 0 && (
                  <>
                    <p className="mb-4 text-lg">What would you love to experience?</p>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((x) => (
                        <button
                          type="button"
                          key={x}
                          onClick={() => toggle(x)}
                          className={`rounded-full border px-4 py-2 text-sm transition ${picked.includes(x) ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}
                        >
                          {x}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {step === 1 && (
                  <>
                    <p className="mb-4 text-lg">
                      How many days?{" "}
                      <span className="font-display text-3xl text-primary">{days}</span>
                    </p>
                    <input
                      type="range"
                      min={3}
                      max={21}
                      value={days}
                      onChange={(e) => setDays(+e.target.value)}
                      className="w-full accent-primary"
                    />
                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                      <span>3 days</span>
                      <span>21 days</span>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      name="name"
                      placeholder="Your name"
                      className="rounded-md border border-input bg-background px-4 py-3"
                    />
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="rounded-md border border-input bg-background px-4 py-3"
                    />
                    <input
                      name="travelMonth"
                      type="month"
                      className="rounded-md border border-input bg-background px-4 py-3"
                    />
                    <input
                      name="travellerCount"
                      type="number"
                      min={1}
                      defaultValue={1}
                      placeholder="Travellers"
                      className="rounded-md border border-input bg-background px-4 py-3"
                    />
                    <textarea
                      name="message"
                      placeholder="Anything else we should know?"
                      rows={3}
                      className="rounded-md border border-input bg-background px-4 py-3 sm:col-span-2"
                    />
                  </div>
                )}
              </motion.div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  disabled={step === 0}
                  onClick={() => setStep(step - 1)}
                  className="text-sm text-muted-foreground disabled:opacity-0"
                >
                  ← Back
                </button>
                {step < 2 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground"
                  >
                    Send request <ArrowUpRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
