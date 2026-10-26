import { n as __toESM } from "../_runtime.mjs";
import { a as useScroll, i as useTransform, n as animate, o as motion, r as useSpring, s as AnimatePresence, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { n as galleryPhotos, r as getGalleryPhoto, t as featuredGalleryPhotoIds } from "./gallery-CgWjky4-.mjs";
import { t as runafrica_default } from "./runafrica-BCvWqfjh.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, c as Leaf, d as ChevronLeft, f as Check, i as Quote, l as Compass, n as ShieldCheck, o as MessageCircle, p as ArrowUpRight, s as Menu, t as X, u as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bx0n3wsT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.2,
			smoothWheel: true,
			anchors: true
		});
		let id = 0;
		const raf = (t) => {
			lenis.raf(t);
			id = requestAnimationFrame(raf);
		};
		id = requestAnimationFrame(raf);
		return () => {
			cancelAnimationFrame(id);
			lenis.destroy();
		};
	}, []);
	return null;
}
var uploadedPhoto$1 = (id) => galleryPhotos.find((photo) => photo.id === id);
var hero$1 = uploadedPhoto$1("13").src;
var ease$1 = [
	.22,
	1,
	.36,
	1
];
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX },
		className: "fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-primary"
	});
}
function FloatingChat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: "https://wa.me/255678664341",
		target: "_blank",
		rel: "noreferrer",
		initial: { scale: 0 },
		animate: { scale: 1 },
		transition: {
			delay: 1.5,
			type: "spring"
		},
		whileHover: { scale: 1.1 },
		"aria-label": "Chat with Run Africa on WhatsApp",
		className: "fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-primary opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "relative h-6 w-6" })]
	});
}
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, { once: true });
	const [v, setV] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const c = animate(0, to, {
			duration: 2,
			ease: ease$1,
			onUpdate: (x) => setV(Math.round(x))
		});
		return () => c.stop();
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [v.toLocaleString(), suffix]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4",
			children: [
				{
					n: 12,
					s: "+",
					l: "Years guiding in Tanzania"
				},
				{
					n: 2400,
					s: "+",
					l: "Happy travellers"
				},
				{
					n: 98,
					s: "%",
					l: "Summit success support"
				},
				{
					n: 4.9,
					s: "★",
					l: "Average guest rating"
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-background px-5 py-10 text-center md:py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl text-primary md:text-6xl",
					children: s.n % 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [s.n, s.s] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						to: s.n,
						suffix: s.s
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: s.l
				})]
			}, s.l))
		})
	});
}
function HorizontalGallery() {
	const photos = featuredGalleryPhotoIds.map(uploadedPhoto$1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "bg-secondary py-24 text-secondary-foreground md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-3 text-accent",
						children: "Moments from our journeys"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl md:text-6xl",
						children: ["Run Africa ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-accent",
							children: "gallery."
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-sm leading-relaxed opacity-75 md:text-base",
						children: "A collection of photographs shared with us from the places, people and experiences that make every journey memorable."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4",
					children: photos.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/gallery/$photoId",
						params: { photoId: photo.id },
						"aria-label": `View ${photo.title}`,
						className: "group relative aspect-[4/5] overflow-hidden rounded-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: photo.src,
								alt: photo.alt,
								loading: "lazy",
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-on-image md:p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm md:text-lg",
									children: photo.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1" })]
							})
						]
					}, photo.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm opacity-70",
					children: "Select a photo to read more about the journey."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/gallery",
					className: "mt-6 inline-flex items-center gap-2 border-b border-on-image/70 pb-1 text-sm transition hover:text-accent",
					children: ["Search the full gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})
			]
		})
	});
}
var months = [
	[
		"Jan",
		"Calving season",
		"Southern Serengeti teems with newborn wildebeest and predators.",
		4
	],
	[
		"Feb",
		"Calving peak",
		"Thousands of calves born daily — dramatic predator action.",
		5
	],
	[
		"Mar",
		"Green season",
		"Lush landscapes, fewer crowds, great value.",
		3
	],
	[
		"Apr",
		"Long rains",
		"Quiet parks and the lowest prices of the year.",
		2
	],
	[
		"May",
		"Rains ease",
		"Herds start moving west; landscapes still green.",
		3
	],
	[
		"Jun",
		"Dry season begins",
		"Migration heads to the Western Corridor. Ideal for Kilimanjaro.",
		4
	],
	[
		"Jul",
		"River crossings",
		"Mara River crossings begin in the north. Peak season.",
		5
	],
	[
		"Aug",
		"Peak crossings",
		"Best wildlife viewing of the year. Book early.",
		5
	],
	[
		"Sep",
		"Northern Serengeti",
		"Crossings continue, clear skies, superb game.",
		5
	],
	[
		"Oct",
		"Dry & golden",
		"Great game viewing and a perfect Zanzibar add-on.",
		4
	],
	[
		"Nov",
		"Short rains",
		"Herds return south. Fewer visitors, softer prices.",
		3
	],
	[
		"Dec",
		"Festive safari",
		"Green plains and the start of calving season.",
		4
	]
];
function WhenToGo() {
	const [m, setM] = (0, import_react.useState)(6);
	const [name, title, desc, score] = months[m] ?? months[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4 text-primary",
				children: "When to go"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-4xl md:text-6xl",
				children: ["Every month, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "text-primary",
					children: "a different story."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-muted-foreground",
				children: "Tap a month to see what Tanzania offers."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-6 gap-2 md:grid-cols-12",
				children: months.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setM(i),
					className: `relative rounded-md border py-3 text-sm transition ${i === m ? "border-primary text-primary-foreground" : "border-border hover:border-primary"}`,
					children: [i === m && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						layoutId: "month",
						className: "absolute inset-0 rounded-md bg-primary",
						transition: {
							type: "spring",
							bounce: .25
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative",
						children: x[0]
					})]
				}, x[0]))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .5,
					ease: ease$1
				},
				className: "mt-8 grid gap-6 rounded-lg bg-card p-6 shadow-elegant md:grid-cols-[1fr_auto] md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary",
						children: name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-3xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: desc
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-1.5",
					children: [Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: { height: 0 },
						animate: { height: 12 + i * 10 },
						transition: { delay: i * .06 },
						className: `w-4 rounded-sm ${i < score ? "bg-primary" : "bg-muted"}`
					}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-3 text-sm text-muted-foreground",
						children: "Wildlife rating"
					})]
				})]
			}, m)
		]
	});
}
var reviews = [
	{
		q: "Our guide spotted a leopard we'd never have seen on our own. Every detail was handled — we just got to be present.",
		n: "Sarah & Tom",
		f: "United Kingdom · Serengeti Migration"
	},
	{
		q: "Summiting Kilimanjaro was the hardest and best thing I've done. The team's pacing and care were incredible.",
		n: "Daniel K.",
		f: "Germany · Kilimanjaro Trek"
	},
	{
		q: "From the crater floor to the beaches of Zanzibar, it felt like the trip was built just for us.",
		n: "Amina R.",
		f: "Canada · Safari & Beach"
	}
];
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 6e3);
		return () => clearInterval(t);
	}, []);
	const r = reviews[i] ?? reviews[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden text-on-image",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero$1,
				alt: "",
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-overlay/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mx-auto h-10 w-10 text-accent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							ease: ease$1
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 font-display text-2xl leading-snug md:text-4xl",
								children: [
									"“",
									r.q,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-semibold",
								children: r.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm opacity-70",
								children: r.f
							})
						]
					}, i),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Previous",
								onClick: () => setI((i + reviews.length - 1) % reviews.length),
								className: "grid h-10 w-10 place-items-center rounded-full border border-on-image/30 hover:bg-on-image/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
							}),
							reviews.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-accent" : "w-3 bg-on-image/40"}` }, k)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Next",
								onClick: () => setI((i + 1) % reviews.length),
								className: "grid h-10 w-10 place-items-center rounded-full border border-on-image/30 hover:bg-on-image/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
							})
						]
					})
				]
			})
		]
	});
}
var faqs = [
	["When is the best time for a safari?", "June to October offers dry weather and river crossings; January–February is calving season. Every month has something special."],
	["Are your safaris private?", "Yes — every journey is tailor-made with a private vehicle and your own guide."],
	["How fit do I need to be for Kilimanjaro?", "Good general fitness is enough. Our routes include acclimatization days to improve your chances of summiting."],
	["Can I add Zanzibar to my safari?", "Absolutely. Most guests finish with a few relaxing days on the island."],
	["What is included in the price?", "Park fees, accommodation, meals on safari, transfers and a professional guide. We'll share a clear breakdown with every quote."]
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-[1fr_1.5fr] md:px-10 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow mb-4 text-primary",
			children: "Good to know"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "text-4xl md:text-6xl",
			children: ["Questions, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
				className: "text-primary",
				children: "answered."
			})]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-border border-y border-border",
			children: faqs.map(([q, a], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setOpen(open === i ? null : i),
				className: "flex w-full items-center justify-between gap-4 py-6 text-left text-lg",
				children: [q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					animate: { rotate: open === i ? 45 : 0 },
					className: "shrink-0 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: false,
				animate: {
					height: open === i ? "auto" : 0,
					opacity: open === i ? 1 : 0
				},
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pb-6 text-muted-foreground",
					children: a
				})
			})] }, q))
		})]
	});
}
var interests = [
	"Wildlife safari",
	"Kilimanjaro trek",
	"Zanzibar beach",
	"Ngorongoro crater",
	"Cultural visits",
	"Honeymoon"
];
function TripPlanner() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [days, setDays] = (0, import_react.useState)(7);
	const [done, setDone] = (0, import_react.useState)(false);
	const submit = (event) => {
		event.preventDefault();
		setDone(true);
	};
	const toggle = (x) => setPicked((p) => p.includes(x) ? p.filter((y) => y !== x) : [...p, x]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "planner",
		className: "bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 py-24 md:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4 text-center text-primary",
					children: "Safari planner"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-center text-4xl md:text-6xl",
					children: ["Build your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-primary",
						children: "dream trip."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 rounded-lg bg-card p-6 shadow-elegant md:p-10",
					children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							scale: .9,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						className: "py-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-3xl",
								children: "Asante sana!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: "We’ll reply within 24 hours with your tailored itinerary."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-8 flex gap-2",
								children: [
									0,
									1,
									2
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1 flex-1 rounded-full transition ${s <= step ? "bg-primary" : "bg-muted"}` }, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: 30
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: { duration: .4 },
								children: [
									step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-4 text-lg",
										children: "What would you love to experience?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: interests.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => toggle(x),
											className: `rounded-full border px-4 py-2 text-sm transition ${picked.includes(x) ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`,
											children: x
										}, x))
									})] }),
									step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mb-4 text-lg",
											children: [
												"How many days?",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-3xl text-primary",
													children: days
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "range",
											min: 3,
											max: 21,
											value: days,
											onChange: (e) => setDays(+e.target.value),
											className: "w-full accent-primary"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex justify-between text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3 days" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "21 days" })]
										})
									] }),
									step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												name: "name",
												placeholder: "Your name",
												className: "rounded-md border border-input bg-background px-4 py-3"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												name: "email",
												type: "email",
												placeholder: "Email",
												className: "rounded-md border border-input bg-background px-4 py-3"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												name: "travelMonth",
												type: "month",
												className: "rounded-md border border-input bg-background px-4 py-3"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												name: "travellerCount",
												type: "number",
												min: 1,
												defaultValue: 1,
												placeholder: "Travellers",
												className: "rounded-md border border-input bg-background px-4 py-3"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												name: "message",
												placeholder: "Anything else we should know?",
												rows: 3,
												className: "rounded-md border border-input bg-background px-4 py-3 sm:col-span-2"
											})
										]
									})
								]
							}, step),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: step === 0,
									onClick: () => setStep(step - 1),
									className: "text-sm text-muted-foreground disabled:opacity-0",
									children: "← Back"
								}), step < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setStep(step + 1),
									className: "rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground",
									children: "Continue"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground",
									children: ["Send request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
								})]
							})
						]
					})
				})
			]
		})
	});
}
var uploadedPhoto = (id) => galleryPhotos.find((photo) => photo.id === id).src;
var hero = uploadedPhoto("13");
var approach = uploadedPhoto("17");
var heroSlides = [
	{
		photo: getGalleryPhoto("13"),
		eyebrow: "Your local team, ready to go",
		title: "Tanzania,",
		highlight: "together.",
		description: "Meet the Run Africa crew and set off for a thoughtfully planned day of discovery."
	},
	{
		photo: getGalleryPhoto("15"),
		eyebrow: "The joy of reaching the top",
		title: "A summit",
		highlight: "worth celebrating.",
		description: "Take on a highland hike and share the view with your group at the summit."
	},
	{
		photo: getGalleryPhoto("21"),
		eyebrow: "Make room for a shared adventure",
		title: "Good company.",
		highlight: "Open skies.",
		description: "Enjoy Tanzania’s open-air experiences, local stops and time together outdoors."
	},
	{
		photo: getGalleryPhoto("25"),
		eyebrow: "Into Tanzania’s green highlands",
		title: "Take",
		highlight: "the scenic way.",
		description: "Follow forest trails and discover waterfalls, viewpoints and the people you meet along the way."
	}
];
var ease = [
	.22,
	1,
	.36,
	1
];
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 40
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .9,
			ease
		}
	}
};
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants: fadeUp,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: { delay },
		children
	});
}
function ParallaxImg({ src, alt, className }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `overflow-hidden ${className ?? ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
			src,
			alt,
			loading: "lazy",
			style: {
				y,
				scale: 1.2
			},
			className: "h-full w-full object-cover"
		})
	});
}
function useTyping(text, speed = 24) {
	const [typedText, setTypedText] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
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
var journeys = [
	{
		n: "01",
		tag: "Highland escape · Day trip",
		title: "Magoroto Viewpoints",
		place: "Morogoro Region",
		text: "Take in the hills, enjoy a slower pace and make time for the views along the way.",
		img: uploadedPhoto("1")
	},
	{
		n: "02",
		tag: "Nature walk · Day trip",
		title: "Kisasa Waterfalls",
		place: "Lushoto, Tanga",
		text: "Follow a green forest trail to a refreshing waterfall and a memorable day outdoors.",
		img: uploadedPhoto("24")
	},
	{
		n: "03",
		tag: "Group adventure · Custom",
		title: "Tanzania Highlands",
		place: "Tanzania",
		text: "Bring your group together for scenic hikes, local stops and time in nature.",
		img: uploadedPhoto("15")
	}
];
var destinations = [
	{
		name: "Morogoro",
		text: "Green highland views and outdoor escapes.",
		img: uploadedPhoto("3")
	},
	{
		name: "Lushoto",
		text: "Forest trails, waterfalls and cool mountain air.",
		img: uploadedPhoto("16")
	},
	{
		name: "Tanzania Highlands",
		text: "Scenic hikes and shared summit moments.",
		img: uploadedPhoto("12")
	},
	{
		name: "Local Experiences",
		text: "Meet the people and places along the way.",
		img: uploadedPhoto("9")
	}
];
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const links = [
		["Safaris", "#safaris"],
		["Gallery", "/gallery"],
		["Approach", "#approach"],
		["Destinations", "#destinations"],
		["Plan a trip", "#planner"],
		["Contact", "#contact"]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 text-on-image",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					"aria-label": "Run Africa home",
					className: "inline-flex items-center gap-2 font-display text-xl tracking-tight",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: runafrica_default,
							alt: "",
							className: "h-11 w-11 object-contain mix-blend-screen"
						}),
						"Run Africa",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden gap-8 text-sm md:flex",
					children: links.map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: "opacity-80 transition hover:opacity-100",
						children: l
					}, h))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "hidden rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition hover:brightness-110 md:inline-flex",
					children: "Plan your journey"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Menu",
					onClick: () => setOpen(!open),
					className: "md:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.nav, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "mx-4 flex flex-col gap-4 rounded-lg bg-secondary p-6 text-secondary-foreground md:hidden",
			children: links.map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: h,
				onClick: () => setOpen(false),
				className: "text-lg",
				children: l
			}, h))
		})]
	});
}
function Index() {
	const [heroSlide, setHeroSlide] = (0, import_react.useState)(0);
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
	const heroOpacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const currentHero = heroSlides[heroSlide];
	const typedHeading = useTyping(`${currentHero.title} ${currentHero.highlight}`, 38);
	const typedEyebrow = useTyping(currentHero.eyebrow, 18);
	const typedDescription = useTyping(currentHero.description, 16);
	const typedTitle = typedHeading.slice(0, currentHero.title.length);
	const typedHighlight = typedHeading.slice(currentHero.title.length + 1);
	const hasReachedHighlight = typedHeading.length > currentHero.title.length;
	(0, import_react.useEffect)(() => {
		const interval = window.setInterval(() => {
			setHeroSlide((current) => (current + 1) % heroSlides.length);
		}, 5500);
		return () => window.clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "overflow-x-clip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChat, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				ref: heroRef,
				className: "relative h-[100svh] min-h-[600px] overflow-hidden text-on-image",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						mode: "sync",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							src: currentHero.photo.src,
							alt: currentHero.photo.alt,
							width: 1920,
							height: 1088,
							style: { y: heroY },
							initial: {
								opacity: 0,
								x: 36,
								scale: 1.08
							},
							animate: {
								opacity: 1,
								x: 0,
								scale: 1.1
							},
							exit: {
								opacity: 0,
								x: -36,
								scale: 1.1
							},
							transition: {
								duration: 1.35,
								ease
							},
							className: "absolute inset-0 h-full w-full object-cover"
						}, currentHero.photo.id)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-overlay" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						style: { opacity: heroOpacity },
						className: "relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 md:px-10 md:pb-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							initial: false,
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 18
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -18
								},
								transition: {
									duration: .7,
									ease
								},
								className: "max-w-4xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-5 text-accent",
									children: typedEyebrow
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-5xl leading-[0.95] sm:text-6xl md:text-8xl",
									children: [
										typedTitle,
										hasReachedHighlight ? " " : "",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "text-accent",
											children: typedHighlight
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											className: "ml-1 inline-block h-[0.78em] w-[2px] translate-y-[0.08em] animate-pulse bg-accent"
										})
									]
								})]
							}, `hero-copy-${currentHero.photo.id}`)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							initial: false,
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 14
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -14
								},
								transition: {
									duration: .65,
									ease,
									delay: .05
								},
								className: "mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-md text-base opacity-85 md:text-lg",
									children: typedDescription
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#safaris",
										className: "rounded-full bg-primary px-6 py-3.5 text-sm text-primary-foreground transition hover:brightness-110",
										children: "Explore our safaris"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: "inline-flex items-center gap-2 rounded-full border border-on-image/40 px-6 py-3.5 text-sm backdrop-blur-sm transition hover:bg-on-image/10",
										children: ["Plan your journey ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
									})]
								})]
							}, `hero-description-${currentHero.photo.id}`)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden border-y border-border bg-secondary py-5 text-secondary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { x: ["0%", "-50%"] },
					transition: {
						duration: 30,
						repeat: Infinity,
						ease: "linear"
					},
					className: "flex w-max gap-12 whitespace-nowrap font-display text-2xl md:text-3xl",
					children: Array.from({ length: 2 }).flatMap((_, k) => [
						"Tanzania",
						"✦",
						"Journeys that stay with you",
						"✦",
						"Morogoro",
						"✦",
						"Lushoto",
						"✦",
						"Waterfall trails",
						"✦"
					].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: t === "✦" ? "text-accent" : "",
						children: t
					}, `${k}-${i}`)))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-5 text-primary",
					children: "The art of going further"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-4xl leading-tight md:text-6xl",
					children: ["Wild places. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-primary",
						children: "Thoughtfully explored."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .15,
					className: "flex flex-col justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-muted-foreground",
						children: "Good travel is more than a destination. It is the details that let you be present: considered routes, a pace that feels right, and space for the unexpected."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#approach",
						className: "mt-8 inline-flex items-center gap-2 self-start border-b border-foreground pb-1 text-sm",
						children: ["Get to know us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "safaris",
				className: "mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4 text-primary",
						children: "Made for your kind of wonder"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl md:text-6xl",
						children: ["Journeys worth ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-primary",
							children: "taking."
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "inline-flex items-center gap-2 text-sm",
						children: ["Plan a journey ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: journeys.map((j, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .12,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative aspect-[4/5] overflow-hidden rounded-lg text-on-image shadow-elegant",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: j.img,
									alt: j.title,
									loading: "lazy",
									width: 1024,
									height: 1280,
									className: "absolute inset-0 h-full w-full object-cover transition duration-[1.4s] ease-out group-hover:scale-110"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-card-overlay" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 top-0 flex justify-between p-5 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: j.n }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 place-items-center rounded-full bg-on-image/15 backdrop-blur transition group-hover:rotate-45 group-hover:bg-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow text-accent",
											children: j.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 text-2xl md:text-3xl",
											children: j.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm opacity-75",
											children: j.place
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 max-h-0 overflow-hidden text-sm opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-90",
											children: j.text
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 flex gap-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#contact",
												className: "rounded-full bg-primary px-4 py-2 text-primary-foreground",
												children: "Request a quote"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#contact",
												className: "rounded-full border border-on-image/40 px-4 py-2",
												children: "Explore"
											})]
										})
									]
								})
							]
						})
					}, j.n))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HorizontalGallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "approach",
				className: "relative overflow-hidden bg-secondary text-secondary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 md:grid-cols-2 md:gap-16 md:px-10 md:py-32",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImg, {
						src: approach,
						alt: "Travelers walking through a forest trail in Tanzania",
						className: "aspect-[4/3] rounded-lg shadow-elegant md:aspect-[4/5]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-5 text-accent",
							children: "Travel with intention"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-4xl leading-tight md:text-6xl",
							children: ["Closer to nature. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-accent",
								children: "Closer to what matters."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg leading-relaxed opacity-75",
							children: "From the first conversation to the final mile, we help shape a journey around your interests, comfort and sense of adventure."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 sm:grid-cols-3",
							children: [
								[
									Compass,
									"Considered journeys",
									"Designed around you"
								],
								[
									Leaf,
									"Respect for place",
									"Travel thoughtfully"
								],
								[
									ShieldCheck,
									"Care in the details",
									"Clarity from start to finish"
								]
							].map(([Icon, t, d], i) => {
								const I = Icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									delay: i * .1,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "mb-3 h-6 w-6 text-accent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm opacity-65",
											children: d
										})
									]
								}, i);
							})
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhenToGo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "destinations",
				className: "mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4 text-primary",
						children: "A world of discovery"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl md:text-6xl",
						children: ["Find your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-primary",
							children: "wild."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4",
					children: destinations.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .1,
						className: i % 2 ? "lg:mt-16" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[3/4] overflow-hidden rounded-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: d.img,
										alt: d.name,
										loading: "lazy",
										width: 1024,
										height: 1280,
										className: "h-full w-full object-cover transition duration-[1.4s] ease-out group-hover:scale-110"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs backdrop-blur",
										children: ["0", i + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl md:text-2xl",
									children: d.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: d.text
								})
							]
						})
					}, d.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripPlanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "contact",
				className: "relative overflow-hidden text-on-image",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImg, {
						src: hero,
						alt: "",
						className: "absolute inset-0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-overlay/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto max-w-4xl px-5 py-28 text-center md:py-44",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-5 text-accent",
								children: "Your story, out there"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-4xl leading-tight md:text-7xl",
								children: ["Some places change ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-accent",
									children: "the way you see."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-lg text-lg opacity-85",
								children: "Tell us what you dream of discovering. We’ll help you explore the possibilities."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#planner",
								className: "mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground transition hover:brightness-110",
								children: ["Plan your safari ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "bg-secondary px-5 py-10 text-center text-sm text-secondary-foreground/60",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Run Africa Expeditions · Tanzania & East Africa · Architectured by @Zeph-codes"
				]
			})
		]
	});
}
//#endregion
export { Index as component };
