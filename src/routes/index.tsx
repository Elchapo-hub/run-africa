import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X, Compass, Leaf, ShieldCheck } from "lucide-react";
import { SmoothScroll } from "@/components/SmoothScroll";
import {
  ScrollProgress,
  FloatingChat,
  Stats,
  HorizontalGallery,
  WhenToGo,
  Testimonials,
  FAQ,
  TripPlanner,
} from "@/components/ExtraSections";
import runAfricaLogo from "@/assets/runafrica.jpeg";
import { galleryPhotos, getGalleryPhoto } from "@/lib/gallery";

const uploadedPhoto = (id: string) => galleryPhotos.find((photo) => photo.id === id)!.src;
const hero = uploadedPhoto("13");
const approach = uploadedPhoto("17");
const heroSlides = [
  {
    photo: getGalleryPhoto("13")!,
    eyebrow: "Your local team, ready to go",
    title: "Tanzania,",
    highlight: "together.",
    description:
      "Meet the Run Africa crew and set off for a thoughtfully planned day of discovery.",
  },
  {
    photo: getGalleryPhoto("15")!,
    eyebrow: "The joy of reaching the top",
    title: "A summit",
    highlight: "worth celebrating.",
    description: "Take on a highland hike and share the view with your group at the summit.",
  },
  {
    photo: getGalleryPhoto("21")!,
    eyebrow: "Make room for a shared adventure",
    title: "Good company.",
    highlight: "Open skies.",
    description: "Enjoy Tanzania’s open-air experiences, local stops and time together outdoors.",
  },
  {
    photo: getGalleryPhoto("25")!,
    eyebrow: "Into Tanzania’s green highlands",
    title: "Take",
    highlight: "the scenic way.",
    description:
      "Follow forest trails and discover waterfalls, viewpoints and the people you meet along the way.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Run Africa Expeditions — Tanzania Safaris & Treks" },
      {
        name: "description",
        content:
          "Thoughtfully planned Tanzania journeys through forest trails, highland viewpoints and waterfalls.",
      },
      { property: "og:title", content: "Run Africa Expeditions — Tanzania Safaris & Treks" },
      {
        property: "og:description",
        content:
          "Thoughtfully planned journeys through Tanzania’s highlands, forests and waterfalls.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function ParallaxImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale: 1.2 }}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function useTyping(text: string, speed = 24) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const characters = Array.from(text);
    let characterIndex = 0;
    setTypedText("");

    const timer = window.setInterval(() => {
      characterIndex += 1;
      setTypedText(characters.slice(0, characterIndex).join(""));

      if (characterIndex >= characters.length) window.clearInterval(timer);
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, speed]);

  return typedText;
}

const journeys = [
  {
    n: "01",
    tag: "Highland escape · Day trip",
    title: "Magoroto Viewpoints",
    place: "Morogoro Region",
    text: "Take in the hills, enjoy a slower pace and make time for the views along the way.",
    img: uploadedPhoto("1"),
  },
  {
    n: "02",
    tag: "Nature walk · Day trip",
    title: "Kisasa Waterfalls",
    place: "Lushoto, Tanga",
    text: "Follow a green forest trail to a refreshing waterfall and a memorable day outdoors.",
    img: uploadedPhoto("24"),
  },
  {
    n: "03",
    tag: "Group adventure · Custom",
    title: "Tanzania Highlands",
    place: "Tanzania",
    text: "Bring your group together for scenic hikes, local stops and time in nature.",
    img: uploadedPhoto("15"),
  },
];

const destinations = [
  { name: "Morogoro", text: "Green highland views and outdoor escapes.", img: uploadedPhoto("3") },
  {
    name: "Lushoto",
    text: "Forest trails, waterfalls and cool mountain air.",
    img: uploadedPhoto("16"),
  },
  {
    name: "Tanzania Highlands",
    text: "Scenic hikes and shared summit moments.",
    img: uploadedPhoto("12"),
  },
  {
    name: "Local Experiences",
    text: "Meet the people and places along the way.",
    img: uploadedPhoto("9"),
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Safaris", "#safaris"],
    ["Gallery", "/gallery"],
    ["Approach", "#approach"],
    ["Destinations", "#destinations"],
    ["Plan a trip", "#planner"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-on-image">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <a
          href="#top"
          aria-label="Run Africa home"
          className="inline-flex items-center gap-2 font-display text-xl tracking-tight"
        >
          <img src={runAfricaLogo} alt="" className="h-11 w-11 object-contain mix-blend-screen" />
          Run Africa<span className="text-accent">.</span>
        </a>
        <nav className="hidden gap-8 text-sm md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="opacity-80 transition hover:opacity-100">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition hover:brightness-110 md:inline-flex"
        >
          Plan your journey
        </a>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 flex flex-col gap-4 rounded-lg bg-secondary p-6 text-secondary-foreground md:hidden"
        >
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="text-lg">
              {l}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}

function Index() {
  const [heroSlide, setHeroSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const currentHero = heroSlides[heroSlide]!;
  const heroHeading = `${currentHero.title} ${currentHero.highlight}`;
  const typedHeading = useTyping(heroHeading, 38);
  const typedEyebrow = useTyping(currentHero.eyebrow, 18);
  const typedDescription = useTyping(currentHero.description, 16);
  const typedTitle = typedHeading.slice(0, currentHero.title.length);
  const typedHighlight = typedHeading.slice(currentHero.title.length + 1);
  const hasReachedHighlight = typedHeading.length > currentHero.title.length;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div id="top" className="overflow-x-clip">
      <SmoothScroll />
      <ScrollProgress />
      <FloatingChat />
      <Nav />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-[100svh] min-h-[600px] overflow-hidden text-on-image"
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={currentHero.photo.id}
            src={currentHero.photo.src}
            alt={currentHero.photo.alt}
            width={1920}
            height={1088}
            style={{ y: heroY }}
            initial={{ opacity: 0, x: 36, scale: 1.08 }}
            animate={{ opacity: 1, x: 0, scale: 1.1 }}
            exit={{ opacity: 0, x: -36, scale: 1.1 }}
            transition={{ duration: 1.35, ease }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-hero-overlay" />
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 md:px-10 md:pb-24"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={`hero-copy-${currentHero.photo.id}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.7, ease }}
              className="max-w-4xl"
            >
              <p className="eyebrow mb-5 text-accent">{typedEyebrow}</p>
              <h1 className="text-5xl leading-[0.95] sm:text-6xl md:text-8xl">
                {typedTitle}
                {hasReachedHighlight ? " " : ""}
                <em className="text-accent">{typedHighlight}</em>
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block h-[0.78em] w-[2px] translate-y-[0.08em] animate-pulse bg-accent"
                />
              </h1>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={`hero-description-${currentHero.photo.id}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.65, ease, delay: 0.05 }}
              className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
              <p className="max-w-md text-base opacity-85 md:text-lg">{typedDescription}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#safaris"
                  className="rounded-full bg-primary px-6 py-3.5 text-sm text-primary-foreground transition hover:brightness-110"
                >
                  Explore our safaris
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-on-image/40 px-6 py-3.5 text-sm backdrop-blur-sm transition hover:bg-on-image/10"
                >
                  Plan your journey <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-secondary py-5 text-secondary-foreground">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-12 whitespace-nowrap font-display text-2xl md:text-3xl"
        >
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "Tanzania",
              "✦",
              "Journeys that stay with you",
              "✦",
              "Morogoro",
              "✦",
              "Lushoto",
              "✦",
              "Waterfall trails",
              "✦",
            ].map((t, i) => (
              <span key={`${k}-${i}`} className={t === "✦" ? "text-accent" : ""}>
                {t}
              </span>
            )),
          )}
        </motion.div>
      </div>

      <Stats />

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow mb-5 text-primary">The art of going further</p>
          <h2 className="text-4xl leading-tight md:text-6xl">
            Wild places. <em className="text-primary">Thoughtfully explored.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col justify-end">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Good travel is more than a destination. It is the details that let you be present:
            considered routes, a pace that feels right, and space for the unexpected.
          </p>
          <a
            href="#approach"
            className="mt-8 inline-flex items-center gap-2 self-start border-b border-foreground pb-1 text-sm"
          >
            Get to know us <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>

      {/* Journeys */}
      <section id="safaris" className="mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-36">
        <Reveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4 text-primary">Made for your kind of wonder</p>
            <h2 className="text-4xl md:text-6xl">
              Journeys worth <em className="text-primary">taking.</em>
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm">
            Plan a journey <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journeys.map((j, i) => (
            <Reveal key={j.n} delay={i * 0.12}>
              <article className="group relative aspect-[4/5] overflow-hidden rounded-lg text-on-image shadow-elegant">
                <img
                  src={j.img}
                  alt={j.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover transition duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-card-overlay" />
                <div className="absolute inset-x-0 top-0 flex justify-between p-5 text-sm">
                  <span>{j.n}</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-on-image/15 backdrop-blur transition group-hover:rotate-45 group-hover:bg-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="eyebrow text-accent">{j.tag}</p>
                  <h3 className="mt-2 text-2xl md:text-3xl">{j.title}</h3>
                  <p className="mt-1 text-sm opacity-75">{j.place}</p>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-90">
                    {j.text}
                  </p>
                  <div className="mt-5 flex gap-3 text-sm">
                    <a
                      href="#contact"
                      className="rounded-full bg-primary px-4 py-2 text-primary-foreground"
                    >
                      Request a quote
                    </a>
                    <a href="#contact" className="rounded-full border border-on-image/40 px-4 py-2">
                      Explore
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <HorizontalGallery />

      {/* Approach */}
      <section
        id="approach"
        className="relative overflow-hidden bg-secondary text-secondary-foreground"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 md:grid-cols-2 md:gap-16 md:px-10 md:py-32">
          <ParallaxImg
            src={approach}
            alt="Travelers walking through a forest trail in Tanzania"
            className="aspect-[4/3] rounded-lg shadow-elegant md:aspect-[4/5]"
          />
          <Reveal>
            <p className="eyebrow mb-5 text-accent">Travel with intention</p>
            <h2 className="text-4xl leading-tight md:text-6xl">
              Closer to nature. <em className="text-accent">Closer to what matters.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed opacity-75">
              From the first conversation to the final mile, we help shape a journey around your
              interests, comfort and sense of adventure.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                [Compass, "Considered journeys", "Designed around you"],
                [Leaf, "Respect for place", "Travel thoughtfully"],
                [ShieldCheck, "Care in the details", "Clarity from start to finish"],
              ].map(([Icon, t, d], i) => {
                const I = Icon as typeof Compass;
                return (
                  <Reveal key={i} delay={i * 0.1}>
                    <I className="mb-3 h-6 w-6 text-accent" />
                    <p className="font-semibold">{t as string}</p>
                    <p className="text-sm opacity-65">{d as string}</p>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <WhenToGo />

      {/* Destinations */}
      <section id="destinations" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <Reveal className="mb-12">
          <p className="eyebrow mb-4 text-primary">A world of discovery</p>
          <h2 className="text-4xl md:text-6xl">
            Find your <em className="text-primary">wild.</em>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1} className={i % 2 ? "lg:mt-16" : ""}>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition duration-[1.4s] ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs backdrop-blur">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-xl md:text-2xl">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Testimonials />
      <TripPlanner />
      <FAQ />

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden text-on-image">
        <ParallaxImg src={hero} alt="" className="absolute inset-0" />
        <div className="absolute inset-0 bg-overlay/70" />
        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center md:py-44">
          <Reveal>
            <p className="eyebrow mb-5 text-accent">Your story, out there</p>
            <h2 className="text-4xl leading-tight md:text-7xl">
              Some places change <em className="text-accent">the way you see.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg opacity-85">
              Tell us what you dream of discovering. We’ll help you explore the possibilities.
            </p>
            <a
              href="#planner"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground transition hover:brightness-110"
            >
              Plan your safari <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="bg-secondary px-5 py-10 text-center text-sm text-secondary-foreground/60">
        © {new Date().getFullYear()} Run Africa Expeditions · Tanzania & East Africa · Architectured
        by @Zeph-codes
      </footer>
    </div>
  );
}
