import { n as __toESM } from "../_runtime.mjs";
import { n as galleryPhotos } from "./gallery-CgWjky4-.mjs";
import { t as runafrica_default } from "./runafrica-BCvWqfjh.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Search } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CvmUJr4_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Gallery() {
	const [search, setSearch] = (0, import_react.useState)("");
	const normalizedSearch = search.trim().toLowerCase();
	const photos = normalizedSearch ? galleryPhotos.filter((photo) => `${photo.title} ${photo.description}`.toLowerCase().includes(normalizedSearch)) : galleryPhotos;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-3",
					"aria-label": "Run Africa home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: runafrica_default,
						alt: "",
						className: "h-12 w-12 rounded bg-black object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg",
						children: "Run Africa"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: "gallery",
					className: "text-sm transition hover:text-primary",
					children: "Back home"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-primary",
					children: "Moments from our journeys"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-3 text-4xl md:text-6xl",
					children: ["Explore the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-primary",
						children: "gallery."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted-foreground",
					children: "Search the Run Africa collection by place, experience, or story."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative mt-8 block max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Search the gallery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: search,
							onChange: (event) => setSearch(event.target.value),
							placeholder: "Search waterfalls, hikes, Morogoro...",
							className: "w-full rounded-full border border-input bg-card py-3.5 pl-12 pr-5 outline-none transition focus:border-primary"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4",
					children: photos.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/gallery/$photoId",
						params: { photoId: photo.id },
						className: "group relative aspect-[4/5] overflow-hidden rounded-lg bg-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: photo.src,
								alt: photo.alt,
								loading: "lazy",
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 bottom-0 p-4 text-on-image",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-base md:text-xl",
									children: photo.title
								})
							})
						]
					}, photo.id))
				}),
				photos.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-12 text-center text-muted-foreground",
					children: [
						"No gallery photos match “",
						search,
						"”."
					]
				})
			]
		})]
	});
}
//#endregion
export { Gallery as component };
