import { Er as e, It as t, Ot as n, jn as r, yt as i } from "./create-designer-JVbDIHeY-DuIqFk48.js";
// ../../packages/print-studio/dist/vue-BLOJLcLy.js
function a(e, t = {}) {
	let n = t.target ?? globalThis.window;
	if (!n) return function() {};
	function r(n) {
		"error" in n ? ((t.suppressDefault || i(n.error)) && n.preventDefault(), e.capture(n.error, { source: "browser.error" })) : t.captureResources && e.capture(n, { source: "browser.resource" });
	}
	function a(n) {
		(t.suppressDefault || i(n.reason)) && n.preventDefault(), e.capture(n.reason, { source: "browser.rejection" });
	}
	return n.addEventListener("error", r, !0), n.addEventListener("unhandledrejection", a), function() {
		n.removeEventListener("error", r, !0), n.removeEventListener("unhandledrejection", a);
	};
}
function o(e, t) {
	let n = e.config.errorHandler;
	async function r(...e) {
		let [r, i, a] = e;
		if (!(await t.capture(r, {
			info: a,
			source: "vue"
		})).handled && n) try {
			await n(r, i, a);
		} catch (e) {
			t.capture(e, {
				info: a,
				source: "vue.previous-handler"
			});
		}
	}
	return e.config.errorHandler = r, function() {
		e.config.errorHandler === r && (e.config.errorHandler = n);
	};
}
// ../../packages/print-studio/dist/presets-5cFlqlla.js
function s(i = {}) {
	return {
		dataSources: t(i.dataSources ?? []),
		name: e("core.documentModel.defaultDocumentName"),
		pages: [n()],
		templates: [r()],
		version: "1.0"
	};
}
function c(e) {
	let n = t(e);
	return {
		name: "host:presets",
		setup(e) {
			let r = [];
			for (let i of n.dataSources ?? []) {
				let n = `preset.datasource.${i.key}`;
				r.push({
					group: "data",
					id: n,
					run() {
						e.store().dataSource.get(i.key) || e.store().dataSource.upsert(t(i));
					},
					title: i.label
				});
			}
			for (let t of n.pageTemplates ?? []) {
				let n = `preset.pageTemplate.${t.id}`;
				r.push({
					group: "page",
					id: n,
					run() {
						let n = e.store(), r = n.page.active;
						if (r) {
							let e = n.template.import(t);
							n.template.applyToPages([r.id], e.id);
						}
					},
					title: t.name
				});
			}
			return e.commands.registerScoped(r);
		}
	};
}
export { a as i, s as n, o as r, c as t };
