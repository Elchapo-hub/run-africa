import { n as galleryPhotos, r as getGalleryPhoto } from "./gallery-CgWjky4-.mjs";
import { t as runafrica_default } from "./runafrica-BCvWqfjh.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as ArrowLeft, p as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Route } from "./gallery._photoId-wt7DCac1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery._photoId-NRG2go8S.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryPhotoPage() {
	const { photoId } = Route.useParams();
	const photo = getGalleryPhoto(photoId);
	if (!photo) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center bg-background px-5 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "This photo is not here."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: "/#gallery",
			className: "mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to the gallery"]
		})] })
	});
	const currentIndex = galleryPhotos.findIndex((item) => item.id === photo.id);
	const relatedPhotos = Array.from({ length: 4 }, (_, offset) => galleryPhotos[(currentIndex + offset + 1) % galleryPhotos.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
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
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/#gallery",
						className: "inline-flex items-center gap-2 text-sm transition hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to gallery"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.25fr_0.75fr] md:items-center md:px-10 md:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-lg bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo.src,
						alt: photo.alt,
						className: "max-h-[75vh] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-4 md:px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4 text-primary",
							children: "A Run Africa moment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl leading-tight md:text-6xl",
							children: photo.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg leading-relaxed text-muted-foreground",
							children: photo.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground",
							children: "From forest paths and waterfalls to welcoming communities and wide-open views, our Tanzania journeys make room for the moments that stay with you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-2 text-xs",
							children: [
								"Tanzania",
								"Local experiences",
								"Outdoor journeys"
							].map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border px-3 py-1.5",
								children: word
							}, word))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/#planner",
							className: "mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition hover:brightness-110",
							children: ["Plan a journey ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary py-14 text-secondary-foreground md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 md:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-3 text-accent",
							children: "More from the journey"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-8 font-display text-3xl md:text-4xl",
							children: "More moments to discover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-5",
							children: relatedPhotos.map((related) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/gallery/$photoId",
								params: { photoId: related.id },
								className: "group relative aspect-[4/5] overflow-hidden rounded-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: related.src,
									alt: related.alt,
									loading: "lazy",
									className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 pt-10 text-sm text-on-image",
									children: related.title
								})]
							}, related.id))
						})
					]
				})
			})
		]
	});
}
//#endregion
export { GalleryPhotoPage as component };
