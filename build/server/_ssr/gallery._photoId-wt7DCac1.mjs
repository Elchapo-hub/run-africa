import { r as getGalleryPhoto } from "./gallery-CgWjky4-.mjs";
import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery._photoId-wt7DCac1.js
var $$splitComponentImporter = () => import("./gallery._photoId-NRG2go8S.mjs");
var Route = createFileRoute("/gallery/$photoId")({
	head: ({ params }) => {
		const photo = getGalleryPhoto(params.photoId);
		return { meta: [{ title: photo ? `${photo.title} | Run Africa` : "Run Africa Gallery" }] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
