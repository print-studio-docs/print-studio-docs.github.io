import { D as e, E as t, O as n, T as r, a as i, c as a, d as o, g as s, i as c, l, n as u, p as d, s as f, t as p, u as m, v as h, w as g } from "./host-DXVDlMXd-CN7n8Uqw.js";
import { r as _ } from "./rolldown-runtime-QGRDbDUS-DZlumgqM.js";
// dist/lib/types-Vh_6jhVV.js
function v(e) {
	return e;
}
// dist/lib/saas-B1H161e1.js
var y = class extends e {
	status;
	constructor(e, t) {
		super(r("app.saas.requestFailed"), {
			code: "saas.http-failed",
			detail: t
		}), this.status = e, this.name = "SaasHttpError";
	}
};
function b(e = {}) {
	let t = (...t) => {
		let n = e.fetcher ?? globalThis.fetch;
		if (!n) throw Error("A fetch implementation is required for SaaS requests");
		return n(...t);
	}, n = e.baseUrl ?? "", r = e.credentials ?? "include", i = {
		config: "/api/config",
		exports: "/api/exports",
		preferences: "/api/preferences",
		session: "/api/session",
		templates: "/api/templates",
		workspace: "/api/workspace",
		...e.paths
	};
	async function a() {
		return e.headers ? typeof e.headers == "function" ? e.headers() : e.headers : {};
	}
	async function o(e, i, o = "application/json") {
		let s = new Headers(await a());
		s.has("Accept") || s.set("Accept", o), new Headers(i?.headers).forEach((e, t) => s.set(t, e));
		let c = await t(`${n}${e}`, {
			credentials: r,
			...i,
			headers: s
		});
		if (!c.ok) {
			let e = `SaaS request failed: ${c.status}`;
			try {
				e = (await c.json()).error ?? e;
			} catch {}
			throw new y(c.status, e);
		}
		return c;
	}
	async function s(e, t) {
		return await (await o(e, t)).json();
	}
	function c(e, t) {
		return {
			body: JSON.stringify(t),
			headers: { "Content-Type": "application/json" },
			method: e
		};
	}
	return {
		async cancelExport(e) {
			await o(`${i.exports}/${encodeURIComponent(e)}`, { method: "DELETE" });
		},
		async createTemplate(e) {
			return (await s(i.templates, c("POST", { document: e }))).template;
		},
		async deleteTemplate(e, t) {
			await o(`${i.templates}/${encodeURIComponent(e)}`, c("DELETE", { revision: t }));
		},
		async downloadExport(e) {
			return (await o(`${i.exports}/${encodeURIComponent(e)}/file`, void 0, "*/*")).blob();
		},
		async getConfig() {
			return s(i.config);
		},
		async getExport(e) {
			return (await s(`${i.exports}/${encodeURIComponent(e)}`)).job;
		},
		async getPreferences() {
			return (await s(i.preferences)).preferences;
		},
		async getSession() {
			return s(i.session);
		},
		async getTemplate(e) {
			return (await s(`${i.templates}/${encodeURIComponent(e)}`)).template;
		},
		async getWorkspace() {
			return (await s(i.workspace)).workspace;
		},
		async listTemplates() {
			return (await s(i.templates)).templates;
		},
		async logout() {
			await o(i.session, { method: "DELETE" });
		},
		async saveWorkspace(e, t) {
			return s(i.workspace, c("PUT", {
				document: t,
				revision: e
			}));
		},
		async setPreference(e, t) {
			await o(`${i.preferences}/${encodeURIComponent(e)}`, c("PUT", { value: t }));
		},
		async submitExport(e, t, n) {
			return (await s(i.exports, c("POST", {
				document: t,
				format: e,
				input: n
			}))).job;
		},
		async updateTemplate(e, t, n) {
			return (await s(`${i.templates}/${encodeURIComponent(e)}`, c("PUT", {
				document: n,
				revision: t
			}))).template;
		}
	};
}
function x(e, t, n) {
	let r = { ...t }, i = /* @__PURE__ */ new Map(), a = !1;
	return {
		dispose() {
			a = !0, i.clear();
		},
		get(e) {
			return r[e] ?? null;
		},
		set(t, o) {
			if (a || r[t] === o) return;
			r[t] = o;
			let s = (i.get(t) ?? Promise.resolve()).then(() => {
				if (!a) return e.setPreference(t, o);
			}).catch((e) => {
				a || n(e);
			});
			i.set(t, s);
		}
	};
}
function S(t, n) {
	return {
		id: `saas.${n.id}`,
		async load() {
			let i = n.document ? n : await t.getTemplate(n.id);
			if (!i.document) throw new e(r("app.saas.templateFailed"), { code: "saas.template-missing" });
			return i.document;
		},
		name: n.name,
		async remove() {
			await t.deleteTemplate(n.id, n.revision);
		},
		async update(e) {
			await t.updateTemplate(n.id, n.revision, e);
		}
	};
}
function C(e) {
	return {
		async create(t) {
			await e.createTemplate(t);
		},
		id: "saas",
		async list() {
			return (await e.listTemplates()).map((t) => S(e, t));
		},
		title: () => r("app.saas.templateSource")
	};
}
function w(e, t) {
	return (e instanceof y || typeof e == "object" && !!e && "status" in e) && e.status === t;
}
function T(e) {
	return new Promise((t, n) => {
		e.throwIfAborted();
		let r = setTimeout(() => {
			e.removeEventListener("abort", i), t();
		}, 500);
		function i() {
			clearTimeout(r), n(e.reason);
		}
		e.addEventListener("abort", i, { once: !0 });
	});
}
async function E(t, n, i) {
	let a = n;
	for (; a.status === "queued" || a.status === "running";) await T(i), a = await t.getExport(a.id);
	if (a.status !== "completed") throw new e(r("app.saas.exportFailed"), {
		code: "saas.export-failed",
		detail: a.error
	});
	return a;
}
function D(t, n, i, a) {
	let o = [];
	o.push(t.document.suspendPersistence());
	let s = !1, c = i.initialRevision ?? 0, l = i.initialSnapshot ? JSON.stringify(i.initialSnapshot) : "", u, d = !1, f = 1e3, p = !1, m, h = !1, g, _ = JSON.stringify(t.document.getPersistentDocument()), v;
	a === void 0 ? i.initialRevision !== void 0 || i.initialSnapshot ? (h = !0, v = Promise.resolve()) : v = b().then(() => {
		h = !0;
	}) : (y(a), h = !0, v = Promise.resolve()), v.catch((e) => {
		m = e, d = !0, s || t.errors.capture(e, { source: "saas.workspace" });
	});
	function y(n) {
		if (!n) return;
		let i = t.document.normalize(n.document);
		if (i.skippedTypes.length > 0) throw new e(r("designer.documentStore.skippedElementTypesMessage", { elementTypes: i.skippedTypes.join(", ") }), { code: "document.unsupported-elements" });
		if (_ !== JSON.stringify(i.document)) throw Error("Prepared SaaS workspace does not match the designer document");
		c = n.revision, l = _;
	}
	async function b() {
		let i = await n.getWorkspace();
		if (s || !i) return;
		if (JSON.stringify(t.document.getPersistentDocument()) !== _) throw p = !0, new e(r("app.saas.conflict"), { code: "saas.conflict" });
		let a = t.document.normalize(i.document);
		if (a.skippedTypes.length > 0) throw new e(r("designer.documentStore.skippedElementTypesMessage", { elementTypes: a.skippedTypes.join(", ") }), { code: "document.unsupported-elements" });
		t.document.load(a.document), c = i.revision, l = JSON.stringify(t.document.getPersistentDocument());
	}
	function x() {
		s || d || (clearTimeout(g), g = setTimeout(() => {
			S().catch((n) => {
				if (s || !h) return;
				(w(n, 409) || w(n, 401)) && (d = !0, p = w(n, 409));
				let i = w(n, 409) ? r("app.saas.conflict") : r("app.saas.saveFailed");
				t.errors.capture(new e(i, {
					cause: n,
					code: "saas.save-failed"
				}), { source: "saas.persistence" }), !d && !s && (g = setTimeout(x, f), f = Math.min(f * 2, 3e4));
			});
		}, i.saveDelayMs ?? 800));
	}
	async function S() {
		if (await v, s) return;
		if (m) throw m;
		if (p) throw new e(r("app.saas.conflict"), { code: "saas.conflict" });
		for (; u;) await u;
		if (s) return;
		if (d) throw new e(r("app.saas.saveFailed"), { code: "saas.save-failed" });
		let i = t.document.getPersistentDocument(), a = JSON.stringify(i);
		if (a === l) return;
		let o = (async () => {
			c = (await n.saveWorkspace(c, i)).revision, l = a, f = 1e3;
		})();
		u = o;
		try {
			await o;
		} finally {
			u = void 0;
		}
	}
	o.push(t.events.on("document:changed", x)), v.then(() => {
		!i.initialSnapshot && l === "" && x();
	}, () => {});
	let C = t.commands.get("file.save") ?? {
		group: "file",
		id: "file.save",
		order: 3,
		shortcut: "Ctrl+S",
		get title() {
			return r("designer.builtins.saveTemplateTitle");
		}
	};
	return o.push(t.commands.registerScoped([{
		...C,
		async run() {
			clearTimeout(g), await S(), t.ui.toast(r("designer.documentActions.documentSavedMessage"), "success");
		},
		get title() {
			return C.title;
		}
	}, {
		id: "document.save",
		async run() {
			clearTimeout(g), await S();
		},
		get title() {
			return C.title;
		}
	}])), {
		dispose() {
			s = !0, clearTimeout(g);
			for (let e of o.reverse()) e();
		},
		async save() {
			clearTimeout(g), await S();
		}
	};
}
async function O(e, n, r, i, a, o) {
	let s;
	try {
		s = await n.submitExport(r, i, a ? t(a) : g(i)), o.throwIfAborted();
		let e = await E(n, s, o), c = await n.downloadExport(s.id);
		return o.throwIfAborted(), {
			blob: c,
			warnings: e.warnings
		};
	} finally {
		if (o.aborted && s) {
			try {
				await n.cancelExport(s.id);
			} catch (t) {
				e.errors.capture(t, { source: "saas.export-cancel" });
			}
			o.throwIfAborted();
		}
	}
}
function k(e, t, n) {
	if (n.length > 0) {
		let i = r(`designer.documentActions.${t === "html" ? "exportHtmlAction" : "exportPdfAction"}`);
		e.ui.toast(r("designer.documentActions.bindingWarningsMessage", {
			actionName: i,
			count: n.length
		})), console.warn(r("designer.documentActions.bindingWarningsDetail", {
			actionName: i,
			warnings: n.join("\n")
		}));
	}
	let i = t === "html" ? "htmlExportedMessage" : "pdfExportedMessage";
	e.ui.toast(r(`designer.documentActions.${i}`), "success");
}
function A(e, t) {
	let n, i = !e.commands.get("export.html") && !e.commands.get("export.pdf"), a = ["html", "pdf"].map((a) => {
		let o = e.commands.get(`export.${a}`);
		if (!o && i && (o = {
			group: "export",
			id: `export.${a}`,
			order: a === "html" ? 10 : 11,
			run() {},
			get title() {
				return r(`designer.builtins.${a === "html" ? "exportHtmlTitle" : "exportPdfTitle"}`);
			}
		}), !o) throw Error(`Missing export command: ${a}`);
		return {
			...o,
			async run(r, ...i) {
				if (e.rendering.active || e.ui.exportDialog) return;
				let o = e.document.getDocument();
				e.ui.openExportDialog(a);
				try {
					let r = await e.rendering.runExternal(async (r) => {
						let s = new AbortController();
						n = s;
						let c = () => s.abort(r.reason);
						r.addEventListener("abort", c, { once: !0 }), r.aborted && c();
						try {
							let n = i[0];
							return await O(e, t, a, o, n, s.signal);
						} finally {
							r.removeEventListener("abort", c), n === s && (n = void 0);
						}
					});
					e.ui.completeExportDialog(), e.output.download(`${o.name || "document"}.${a}`, r.blob), k(e, a, r.warnings);
				} finally {
					e.ui.finishExportDialog();
				}
			},
			get title() {
				return o.title;
			}
		};
	}), o = e.commands.registerScoped(a);
	return () => {
		n?.abort(new DOMException("SaaS plugin disposed", "AbortError")), o();
	};
}
function j(e, t = {}) {
	let n = M(e, t);
	return t.preferences ? {
		manifest: {
			...n.manifest,
			permissions: [...n.manifest.permissions ?? [], "preferences"]
		},
		async setup(t) {
			let r = await e.getPreferences();
			t.signal.throwIfAborted();
			let i = x(e, r, (e) => {
				t.signal.aborted || t.errors.capture(e, { source: "saas.preferences" });
			});
			return t.onDispose(i.dispose), t.preferences.register(i), n.setup(t);
		}
	} : n;
}
function M(e, t = {}, n) {
	return {
		manifest: {
			apiVersion: "1.0",
			id: "saas:services",
			permissions: [
				"commands",
				"events",
				"templates",
				"document:read",
				"document:write",
				"ui",
				"rendering"
			],
			version: "1.0.0"
		},
		setup(i) {
			let a = [];
			try {
				let o = t.workspace ? D(i, e, t, n) : void 0;
				return o && a.push(o.dispose), t.templates && a.push(i.templateLibrary.register(C(e))), t.workspace && a.push(i.commands.registerScoped([{
					group: "file",
					id: "saas.downloadJson",
					order: 3.5,
					run() {
						let e = i.document.getDocument();
						i.output.download(`${e.name || "document"}.json`, new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }));
					},
					get title() {
						return r("app.saas.downloadJson");
					}
				}])), t.logout !== !1 && a.push(i.commands.registerScoped([{
					group: "file",
					id: "saas.logout",
					order: 100,
					async run() {
						await o?.save(), await e.logout();
					},
					get title() {
						return r("app.saas.logout");
					}
				}])), t.exports && a.push(A(i, e)), () => {
					for (let e of a.reverse()) e();
				};
			} catch (e) {
				for (let e of a.reverse()) e();
				throw e;
			}
		}
	};
}
function N(e, t) {
	if (!t?.onUnauthorized) return e;
	async function n(e) {
		throw typeof e == "object" && e && "status" in e && e.status === 401 && await t?.onUnauthorized?.(e), e;
	}
	return new Proxy(e, { get(e, t, r) {
		let i = Reflect.get(e, t, r);
		return typeof i == "function" ? (...t) => {
			try {
				return Reflect.apply(i, e, t).catch(n);
			} catch (e) {
				return n(e);
			}
		} : i;
	} });
}
function P(e = {}) {
	let t = N({
		...b(e),
		...e.api
	}, e.hooks);
	async function n(e = {}) {
		let n = e.discoverFeatures ? await t.getConfig() : void 0;
		if (n && n.mode !== "saas") throw Error("The service is not configured for SaaS");
		e.authenticate !== !1 && await t.getSession();
		let i = e.workspace ?? n?.features.workspace ?? !0, a = e.preferences ?? i, [o, s] = await Promise.all([i ? t.getWorkspace() : Promise.resolve(null), a ? t.getPreferences() : Promise.resolve({})]), c, l = !1, u = !1, d = [], f = x(t, s, (t) => {
			e.onError ? e.onError(t) : c ? c.capture(t, { source: "saas.preferences" }) : d.push(t);
		}), p = M(r, {
			exports: e.exports ?? n?.features.exports ?? !0,
			logout: e.logout,
			saveDelayMs: e.saveDelayMs,
			templates: e.templates ?? n?.features.templates ?? !0,
			workspace: i
		}, o), m = {
			manifest: p.manifest,
			setup(e) {
				if (l || u) throw Error("Prepared SaaS integration has already been used");
				u = !0, c = e.errors;
				for (let e of d.splice(0)) c.capture(e, { source: "saas.preferences" });
				let t;
				try {
					let n = p.setup(e);
					if (n instanceof Promise) throw Error("Prepared SaaS setup must be synchronous");
					t = n;
				} catch (e) {
					throw l = !0, f.dispose(), c = void 0, e;
				}
				return () => {
					try {
						t?.();
					} finally {
						l = !0, f.dispose(), c = void 0;
					}
				};
			}
		};
		return {
			designerOptions: {
				initialDocument: o?.document,
				persistPreferences: a,
				preferenceStorage: a ? f : void 0,
				...i ? { storage: !1 } : {},
				strictInitialDocument: i
			},
			dispose() {
				if (u && !l) throw Error("Remove the SaaS plugin before disposing its preparation");
				l = !0, f.dispose();
			},
			plugin: m
		};
	}
	let r = {
		...t,
		createPlugin(e) {
			return j(r, e ?? {
				exports: !0,
				preferences: !0,
				templates: !0,
				workspace: !0
			});
		},
		async logout() {
			await t.logout(), await e.hooks?.onLogout?.();
		},
		prepare: n
	};
	return r;
}
// dist/lib/index.js
function F(e) {
	let t = new URL(e.url, globalThis.location?.href);
	if (t.protocol !== "https:" && t.protocol !== "http:") throw Error("Sandbox plugins require an HTTP module URL");
	return {
		manifest: e.manifest,
		async setup(n) {
			let r = document.createElement("iframe");
			r.hidden = !0, r.sandbox.add("allow-scripts"), r.referrerPolicy = "no-referrer";
			let i = new MessageChannel(), a = /* @__PURE__ */ new Map(), o = 0, s = () => {}, c = () => {}, l = new Promise((e, t) => {
				s = e, c = t;
			}), u = setTimeout(() => c(/* @__PURE__ */ Error(`Sandbox plugin timed out: ${n.pluginId}`)), e.timeoutMs ?? 1e4);
			n.onDispose(() => {
				clearTimeout(u), c(new DOMException("Plugin unloaded", "AbortError"));
				for (let e of a.values()) e.reject(new DOMException("Plugin unloaded", "AbortError"));
				a.clear(), i.port1.close(), r.remove();
			});
			function d(e, t, n) {
				i.port1.postMessage({
					error: n ? String(n) : void 0,
					id: e,
					type: "reply",
					value: t
				});
			}
			function f(e, t) {
				let n = String(++o);
				return new Promise((r, o) => {
					a.set(n, {
						reject: o,
						resolve: r
					}), i.port1.postMessage({
						args: t,
						command: e,
						id: n,
						type: "invoke"
					});
				});
			}
			i.port1.onmessage = (e) => {
				let t = e.data;
				if (!t || typeof t != "object" || !("type" in t)) return;
				if (t.type === "ready") {
					clearTimeout(u), s();
					return;
				}
				if (t.type === "failed") {
					c(/* @__PURE__ */ Error("Sandbox module failed to load"));
					return;
				}
				if (!("id" in t) || typeof t.id != "string") return;
				let r = t.id;
				if (t.type === "result") {
					let e = a.get(r);
					a.delete(r), "error" in t && t.error ? e?.reject(Error(String(t.error))) : e?.resolve("value" in t ? t.value : void 0);
				} else try {
					if (t.type === "command" && "command" in t && typeof t.command == "string" && "title" in t && typeof t.title == "string") {
						let e = t.command;
						n.commands.register({
							id: e,
							run: (t, ...n) => f(e, n),
							title: t.title
						}), d(r);
					} else if (t.type === "document:get") d(r, n.document.getDocument());
					else if (t.type === "execute" && "command" in t && typeof t.command == "string") {
						let e = "args" in t && Array.isArray(t.args) ? t.args : [];
						n.commands.execute(t.command, ...e).then((e) => d(r, e), (e) => d(r, void 0, e));
					} else throw Error("Unsupported sandbox request");
				} catch (e) {
					d(r, void 0, e), c(e), n.errors.capture(e, { source: "plugin.sandbox" });
				}
			}, r.srcdoc = "<!doctype html><meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none'; script-src 'unsafe-inline' http: https:; connect-src 'none'; img-src 'none'; style-src 'none'; frame-src 'none'; form-action 'none'; base-uri 'none'\"><script>\n        addEventListener('message', async function connect(event) {\n          if (!event.ports[0]) {\n            return;\n          }\n          removeEventListener('message', connect);\n          const port = event.ports[0];\n          const calls = new Map();\n          const commands = new Map();\n          let sequence = 0;\n\n          function request(type, data = {}) {\n            const id = String(++sequence);\n            return new Promise((resolve, reject) => {\n              calls.set(id, { resolve, reject });\n              port.postMessage({ type, id, ...data });\n            });\n          }\n\n          port.onmessage = async ({ data }) => {\n            if (data.type === 'reply') {\n              const call = calls.get(data.id);\n              calls.delete(data.id);\n              if (data.error) {\n                call?.reject(new Error(data.error));\n              } else {\n                call?.resolve(data.value);\n              }\n            }\n            if (data.type === 'invoke') {\n              try {\n                const value = await commands.get(data.command)?.(...data.args);\n                port.postMessage({ type: 'result', id: data.id, value });\n              } catch (error) {\n                port.postMessage({\n                  type: 'result',\n                  id: data.id,\n                  error: String(error)\n                });\n              }\n            }\n          };\n\n          const api = Object.freeze({\n            commands: Object.freeze({\n              async register(definition) {\n                commands.set(definition.id, definition.run);\n                await request('command', {\n                  command: definition.id,\n                  title: definition.title\n                });\n              },\n              execute(command, ...args) {\n                return request('execute', { command, args });\n              }\n            }),\n            document: Object.freeze({\n              getDocument() {\n                return request('document:get');\n              }\n            }),\n          });\n\n          try {\n            const module = await import(event.data.url);\n            await (module.default ?? module.setup)(api);\n            port.postMessage({ type: 'ready' });\n          } catch (error) {\n            port.postMessage({ type: 'failed', error: String(error) });\n          }\n        });<\/script>", r.addEventListener("load", () => {
				r.contentWindow?.postMessage({ url: t.href }, "*", [i.port2]);
			}, { once: !0 }), document.body.appendChild(r), await l;
		}
	};
}
// dist/lib/core.js
var I = [
	{
		height: 297,
		get label() {
			return r("core.types.a4Portrait");
		},
		width: 210
	},
	{
		height: 210,
		get label() {
			return r("core.types.a4Landscape");
		},
		width: 297
	},
	{
		height: 210,
		get label() {
			return r("core.types.a5Portrait");
		},
		width: 148
	},
	{
		height: 279.4,
		get label() {
			return r("core.types.letter");
		},
		width: 215.9
	},
	{
		height: 200,
		get label() {
			return r("core.types.receipt80mm");
		},
		width: 80
	},
	{
		height: 160,
		get label() {
			return r("core.types.receipt58mm");
		},
		width: 58
	}
];
// dist/lib/presets-D3WhkbZK.js
function L(e = {}) {
	return {
		dataSources: t(e.dataSources ?? []),
		name: r("core.documentModel.defaultDocumentName"),
		pages: [h()],
		templates: [s()],
		version: "1.0"
	};
}
// dist/lib/mount-print-designer-DkJVR0xD.js
var R = /* @__PURE__ */ n({ n: () => z }), z = /* @__PURE__ */ _({ mountPrintDesigner: () => V }), B = /* @__PURE__ */ new WeakMap();
function V(e, t = {}) {
	if (B.has(e)) throw Error("A designer is already mounted in this container");
	if (typeof document > "u" || !(e instanceof HTMLElement)) throw Error("A designer requires an HTML container in a browser");
	if (t.studio && u(t.studio).root) throw Error("A designer is already mounted for this studio");
	let n = t.studio ?? c({
		...t,
		createDocument: t.createDocument ?? (() => L(t.presets))
	}), r = !1, a, o = !1, s, l, d = new Promise((e, t) => {
		s = e, l = t;
	}), f = n.errors.subscribe((e) => {
		r || t.onError?.(e.error);
	}), m = {
		ready: d,
		studio: n,
		unmount: y
	}, h = i(n, y), g = u(n);
	function _() {
		r || (o = !0, s());
	}
	function v(e) {
		o || l(e), n.errors.capture(e, { source: "designer.mount" });
	}
	function y() {
		r || (r = !0, f(), h(), o || l(new DOMException("Designer unmounted before ready", "AbortError")), a?.(), B.delete(e), t.studio || n.dispose());
	}
	d.catch(() => {}), B.set(e, m);
	try {
		return a = p(e, {
			context: g,
			"onDirty-change": t.onDirtyChange,
			onDispose: y,
			onError: v,
			onReady: _,
			plugins: t.plugins,
			presets: t.presets,
			settings: t.settings,
			ui: t.ui,
			zIndex: t.zIndex
		}), m;
	} catch (e) {
		throw y(), e;
	}
}
// dist/lib/designer.js
function H(t) {
	let n = t.fetcher ?? ((e, t) => fetch(e, t));
	function i(t, n) {
		return new e(r("designer.templateLibrary.remoteFailed", { url: t }), {
			cause: n,
			code: "template-library.remote-failed"
		});
	}
	async function a(e) {
		try {
			let r = await n(e, { headers: t.headers });
			if (!r.ok) throw Error(`HTTP ${r.status}`);
			return await r.json();
		} catch (t) {
			throw i(e, t);
		}
	}
	function o(e) {
		return {
			category: e.category,
			description: e.description,
			id: e.id,
			async load() {
				if (e.document) return e.document;
				if (!e.url) throw i(e.id);
				let n = new URL(t.manifestUrl, location.href);
				return await a(new URL(e.url, n).href);
			},
			name: e.name
		};
	}
	return {
		id: t.id,
		async list() {
			let e = await a(t.manifestUrl);
			if (!Array.isArray(e?.templates)) throw i(t.manifestUrl);
			return e.templates.map(o);
		},
		title: t.title
	};
}
// dist/lib/runtime.js
function U(e = {}) {
	let n = m(e), r = e.errors ?? d(), i = l(e), s = a({
		...i,
		config: () => n.rendering,
		snapshot: t
	}), c = f(), u = !1, p = o(s, c, () => {
		if (u) throw Error("Print renderer has been disposed");
	});
	async function h(e, t) {
		if (u) throw Error("Print renderer has been disposed");
		try {
			return await t();
		} catch (t) {
			throw await r.capture(t, { source: e }), t;
		}
	}
	function g(e, n, r, i) {
		return h("runtime.html", () => p.toHTML(t(e), t(n), r, i));
	}
	function _(e, n, r, i) {
		return h("runtime.pdf", () => p.toPDF(t(e), t(n), r, i));
	}
	function v(e, n, r) {
		return h("runtime.preview", () => p.preview(t(e), t(n), r));
	}
	function y(e, n, r) {
		return h("runtime.print", () => p.print(t(e), t(n), r));
	}
	function b() {
		u || (u = !0, s.dispose(), c.dispose());
	}
	return {
		dispose: b,
		errors: r,
		...i,
		preview: v,
		print: y,
		toHTML: g,
		toPDF: _
	};
}
export { I as a, j as c, v as d, R as i, y as l, H as n, F as o, V as r, C as s, U as t, P as u };
