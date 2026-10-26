globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-26T22:14:48.119Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"1f5-YBa/nl5mOk5xb/sQKSabrFOnr3o\"",
		"mtime": "2026-10-26T22:14:48.119Z",
		"size": 501,
		"path": "../public/favicon.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-26T22:14:48.120Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/run-africa-favicon.jpeg": {
		"type": "image/jpeg",
		"etag": "\"12042-HMvEGRkYcJrXMEAJy0X6DO7NJ84\"",
		"mtime": "2026-10-26T22:14:48.121Z",
		"size": 73794,
		"path": "../public/run-africa-favicon.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.23.39-9VPT5mpI.jpeg": {
		"type": "image/jpeg",
		"etag": "\"30bba-+bvW/3F9plfSgLxzLFCilnms9uk\"",
		"mtime": "2026-10-26T22:14:46.794Z",
		"size": 199610,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.23.39-9VPT5mpI.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.27.26-DZ3Xr55j.jpeg": {
		"type": "image/jpeg",
		"etag": "\"41f31-gymWxn0H6oM2qGDEMoeqes3jpOo\"",
		"mtime": "2026-10-26T22:14:46.804Z",
		"size": 270129,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.27.26-DZ3Xr55j.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.28.30-Y_YjrLy6.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1d4ad-cXaY4gmcbn4vhoDRXj3fcGng96w\"",
		"mtime": "2026-10-26T22:14:46.805Z",
		"size": 119981,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.28.30-Y_YjrLy6.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.29.02-DZEwWPuo.jpeg": {
		"type": "image/jpeg",
		"etag": "\"22f5c-yroIMnj7aE+Uoxp8urEG4kPif2U\"",
		"mtime": "2026-10-26T22:14:46.806Z",
		"size": 143196,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.29.02-DZEwWPuo.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.31.03-BmFrZwQ3.jpeg": {
		"type": "image/jpeg",
		"etag": "\"28dcd-X/SLaHrBvDqfbJ/PtrEIYYHO3BA\"",
		"mtime": "2026-10-26T22:14:46.808Z",
		"size": 167373,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.31.03-BmFrZwQ3.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.29.52-DlM3NY0S.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7868e-MnSdAevSb1pEd8E3yInSqwyKl+k\"",
		"mtime": "2026-10-26T22:14:46.807Z",
		"size": 493198,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.29.52-DlM3NY0S.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.31.14-CTXaYxlg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6a430-KfWLZStoGMEScqJV3UIkHFyjTLw\"",
		"mtime": "2026-10-26T22:14:46.809Z",
		"size": 435248,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.31.14-CTXaYxlg.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.31.45-DG8c1xiR.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7fe39-VUi4Q5iXm4EN4qmc+XYgYJa6djg\"",
		"mtime": "2026-10-26T22:14:46.816Z",
		"size": 523833,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.31.45-DG8c1xiR.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.31.29-BCLBCIcA.jpeg": {
		"type": "image/jpeg",
		"etag": "\"67b7b-6IehDPEHexSoFEb5fbntEiviaGU\"",
		"mtime": "2026-10-26T22:14:46.810Z",
		"size": 424827,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.31.29-BCLBCIcA.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.33.28-BPgFZk-Q.jpeg": {
		"type": "image/jpeg",
		"etag": "\"56962-1oLwZDFcl6QqtTVIyWC1wYPxSyk\"",
		"mtime": "2026-10-26T22:14:46.825Z",
		"size": 354658,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.33.28-BPgFZk-Q.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.33.54-DNaCBpRJ.jpeg": {
		"type": "image/jpeg",
		"etag": "\"273e4-Wy9Xil0Vv0KT0XCytZy0aFDMIuc\"",
		"mtime": "2026-10-26T22:14:46.825Z",
		"size": 160740,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.33.54-DNaCBpRJ.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.23.41-C4Yo_zc4.jpeg": {
		"type": "image/jpeg",
		"etag": "\"d336a-/XFou8RHBA7CRIETeW/aGC8/g1Q\"",
		"mtime": "2026-10-26T22:14:46.794Z",
		"size": 865130,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.23.41-C4Yo_zc4.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.28.12-BGOvgxiy.jpeg": {
		"type": "image/jpeg",
		"etag": "\"cf5bb-lYawtjT3zlRPc8qgeaVh97fHOfE\"",
		"mtime": "2026-10-26T22:14:46.805Z",
		"size": 849339,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.28.12-BGOvgxiy.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.32.17-dYfaHJQr.jpeg": {
		"type": "image/jpeg",
		"etag": "\"343fc-NtMW9SWwyWM5S17rArM8FftGnn4\"",
		"mtime": "2026-10-26T22:14:46.819Z",
		"size": 214012,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.32.17-dYfaHJQr.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.32.10-CFlcTzWh.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7f161-3zKj6nPmTO1A6S009F0eQEush3Y\"",
		"mtime": "2026-10-26T22:14:46.818Z",
		"size": 520545,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.32.10-CFlcTzWh.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.30.29-CRx9lggv.jpeg": {
		"type": "image/jpeg",
		"etag": "\"8aea9-phFCWreFjbIYSZrwwTrX5aXuQJg\"",
		"mtime": "2026-10-26T22:14:46.808Z",
		"size": 569001,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.30.29-CRx9lggv.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.33.21 (1)-BIDbAdFy.jpeg": {
		"type": "image/jpeg",
		"etag": "\"86e32-dp64RBfH+CSL+/YCb7nPbEQaAGw\"",
		"mtime": "2026-10-26T22:14:46.823Z",
		"size": 552498,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.33.21 (1)-BIDbAdFy.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.33.21-DNbwyeAH.jpeg": {
		"type": "image/jpeg",
		"etag": "\"b5283-wRM9/tlA84VI+whiU/mU8Z0IaJ8\"",
		"mtime": "2026-10-26T22:14:46.824Z",
		"size": 742019,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.33.21-DNbwyeAH.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.33.15-WoEaKtwH.jpeg": {
		"type": "image/jpeg",
		"etag": "\"e1368-WertGVCW1i6a//FnBtmAxOHlAyc\"",
		"mtime": "2026-10-26T22:14:46.820Z",
		"size": 922472,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.33.15-WoEaKtwH.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.25.59-8d9oM3Pa.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1315de-S1O5eb3Cix4ROphKJIKGOtBTKR0\"",
		"mtime": "2026-10-26T22:14:46.801Z",
		"size": 1250782,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.25.59-8d9oM3Pa.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.25.26-CL_M-aJV.jpeg": {
		"type": "image/jpeg",
		"etag": "\"17c933-pAGbzVOFnvcekRBm7lplYMu+zPU\"",
		"mtime": "2026-10-26T22:14:46.797Z",
		"size": 1558835,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.25.26-CL_M-aJV.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.35.38-qhP-mr00.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7c70a-MIuEt4otalnX0ar4oQfRxEjTzdU\"",
		"mtime": "2026-10-26T22:14:46.836Z",
		"size": 509706,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.35.38-qhP-mr00.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.42.27 (1)-CV8QdkBh.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2a4ad-jMq6xki/DDFi9bLKOqFeUpfVdD8\"",
		"mtime": "2026-10-26T22:14:46.836Z",
		"size": 173229,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.42.27 (1)-CV8QdkBh.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.45.06 (1)-wr4UuGWV.jpeg": {
		"type": "image/jpeg",
		"etag": "\"20b9b-DErLyq+cV0GOdBlL/7WBoVMAH28\"",
		"mtime": "2026-10-26T22:14:46.846Z",
		"size": 134043,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.45.06 (1)-wr4UuGWV.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.42.27-DRX151qk.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3f693-bX/PmYebCBEx13pODJ8wqH7gBX4\"",
		"mtime": "2026-10-26T22:14:46.837Z",
		"size": 259731,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.42.27-DRX151qk.jpeg"
	},
	"/assets/arrow-up-right-t_OvHsMe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a0-eBDkYMpafmrMErRv4hGmPtyIBnQ\"",
		"mtime": "2026-10-26T22:14:46.793Z",
		"size": 160,
		"path": "../public/assets/arrow-up-right-t_OvHsMe.js"
	},
	"/assets/gallery-xTVoDdH8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b22-1BmKu7+/I9+/FvT/GsF5TYdeUHs\"",
		"mtime": "2026-10-26T22:14:46.793Z",
		"size": 2850,
		"path": "../public/assets/gallery-xTVoDdH8.js"
	},
	"/assets/gallery._photoId-FAdTk0Sg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f05-/ZVe7LhlqMWl6flQ0czv6MMzccM\"",
		"mtime": "2026-10-26T22:14:46.793Z",
		"size": 3845,
		"path": "../public/assets/gallery._photoId-FAdTk0Sg.js"
	},
	"/assets/runafrica-BFo3q0G4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d2-adhMIVCfalSA4sUKrfUnXUfuSgg\"",
		"mtime": "2026-10-26T22:14:46.794Z",
		"size": 1234,
		"path": "../public/assets/runafrica-BFo3q0G4.js"
	},
	"/assets/routes-CCzjUYtG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e0f-hzryqrn2a1o2P/kqIeTJhrUKEHg\"",
		"mtime": "2026-10-26T22:14:46.793Z",
		"size": 73231,
		"path": "../public/assets/routes-CCzjUYtG.js"
	},
	"/assets/runafrica-CZe71zeO.jpeg": {
		"type": "image/jpeg",
		"etag": "\"12042-HMvEGRkYcJrXMEAJy0X6DO7NJ84\"",
		"mtime": "2026-10-26T22:14:46.847Z",
		"size": 73794,
		"path": "../public/assets/runafrica-CZe71zeO.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.35.59-C0OA7f5S.jpeg": {
		"type": "image/jpeg",
		"etag": "\"8ebdc-UX8Js1scesE6DggWwysdBFaOhXs\"",
		"mtime": "2026-10-26T22:14:46.836Z",
		"size": 584668,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.35.59-C0OA7f5S.jpeg"
	},
	"/assets/index-CuDtMLjU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e3c7-l8VkbFpAafAWKJXnlKiLI67+aZ4\"",
		"mtime": "2026-10-26T22:14:46.792Z",
		"size": 517063,
		"path": "../public/assets/index-CuDtMLjU.js"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.34.58-Bp7yVe4i.jpeg": {
		"type": "image/jpeg",
		"etag": "\"a51e6-sn3BpsdnuTlVPE33cnR2UKgAeQU\"",
		"mtime": "2026-10-26T22:14:46.832Z",
		"size": 676326,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.34.58-Bp7yVe4i.jpeg"
	},
	"/assets/styles-BriYSsn3.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15c9e-0u9UlmuX7VmOliNt9J7pHOA8du4\"",
		"mtime": "2026-10-26T22:14:46.847Z",
		"size": 89246,
		"path": "../public/assets/styles-BriYSsn3.css"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.34.32-JNlKG7O3.jpeg": {
		"type": "image/jpeg",
		"etag": "\"144211-pbFslNmuoqpMwNhBDXrQZFA1gGU\"",
		"mtime": "2026-10-26T22:14:46.826Z",
		"size": 1327633,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.34.32-JNlKG7O3.jpeg"
	},
	"/assets/WhatsApp Image 2026-10-22 at 01.42.53-BzmI_GDW.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1161c5-XLYdAVpw3USJMQtvm2F40AOQS5E\"",
		"mtime": "2026-10-26T22:14:46.837Z",
		"size": 1139141,
		"path": "../public/assets/WhatsApp Image 2026-10-22 at 01.42.53-BzmI_GDW.jpeg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_NUc1G1 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_NUc1G1
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
