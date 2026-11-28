import { Ai as e, An as t, At as n, Br as r, Bt as i, F as a, Fr as o, Gn as s, Gt as c, Ii as l, J as u, Li as d, Lr as f, M as p, Nn as m, Nr as ee, Nt as te, O as h, Oi as g, Or as _, Pt as ne, Ri as v, S as re, Sn as ie, U as y, Vt as ae, Wt as oe, Y as se, a as ce, ct as le, en as ue, fr as de, gi as b, gr as x, gt as fe, ht as pe, it as S, jr as me, li as C, m as w, mi as he, mn as T, mt as ge, on as _e, ot as ve, pr as ye, qn as be, qt as E, ri as xe, rn as D, uo as Se, ur as Ce, vn as we, y as O, zi as k, zt as Te } from "./inspector-layout-cGpQdLuc-D-IjKeo4.js";
import { B as Ee, T as De, _ as Oe, i as ke, n as Ae } from "./presets-EnVfxsea-CWOy8cuS.js";
// ../packages/print-studio/dist/hiprint.js
var je = {
	barcode: "barcode",
	customText: "text",
	emptyTable: "table",
	hline: "hline",
	html: "html",
	image: "image",
	longText: "longText",
	oval: "oval",
	qrcode: "qrcode",
	rect: "rect",
	table: "table",
	text: "text",
	vline: "vline"
}, A = r();
function j(e) {
	return e && typeof e == "object" && !Array.isArray(e) ? e : {};
}
function M(e, t) {
	if (e && Object.hasOwn(e, t)) return e[t];
}
function N(e, t) {
	if (typeof e != "number" && (typeof e != "string" || !e.trim())) return t;
	let n = Number(e);
	return Number.isFinite(n) ? n : t;
}
function P(e, t = "") {
	return typeof e == "string" ? e : t;
}
function F(e) {
	return P(e.options.field).trim() || P(e.type.field).trim();
}
function I(e) {
	return `{{ ${e} }}`;
}
function Me(e) {
	let t = F(e);
	return t ? I(t) : P(e.options.title || e.type.title || e.type.data);
}
function L(e) {
	let t = e.options, n = Math.max(.01, E(N(t.width, 100)));
	return {
		height: Math.max(.01, E(N(t.height, 20))),
		locked: t.draggable === !1,
		name: P(t.title || e.type.title, e.sourceType),
		rotation: N(t.rotate, 0),
		width: n,
		x: E(N(t.left, 0)),
		y: E(N(t.top, 0))
	};
}
function R(e, t, n, r = "string") {
	let i = F(e);
	i && e.collectField(i, r, e.path);
	let a = L(e), o = C(t, {
		...a,
		props: n
	}, A);
	return o.height = a.height, o;
}
function z(e) {
	let t = e.options, n = F(e), r = P(t.title || e.type.title || e.type.data), i = n && !t.hideTitle && r ? `${r}：` : "", a = Math.max(1, N(t.fontSize, 10.5)), o = {
		fontSize: a,
		text: n ? i + I(n) : r
	};
	for (let e of [
		"fontFamily",
		"fontWeight",
		"fontStyle",
		"color",
		"textAlign",
		"textDecoration"
	]) typeof t[e] == "string" && (o[e] = t[e]);
	typeof t.backgroundColor == "string" && (o.background = t.backgroundColor), typeof t.textContentVerticalAlign == "string" && (o.verticalAlign = t.textContentVerticalAlign);
	let s = N(t.lineHeight, 0);
	return s > 0 && (o.lineHeight = s / a), t.letterSpacing !== void 0 && (o.letterSpacing = N(t.letterSpacing, 0)), e.sourceType === "longText" && e.warn("long-text-pagination", e.path, d("core.hiprint.longTextPagination")), R(e, "text", o);
}
function B(e, t) {
	let n = e.options, r = { value: Me(e) };
	if ((n.color || n.barColor) && (r.color = P(n.color || n.barColor, "#000000")), t === "barcode") {
		r.displayValue = !n.hideTitle;
		let t = P(n.barcodeMode || n.barcodeType);
		t && (r.format = t.toUpperCase()), e.warn("barcode-rendering", e.path, d("core.hiprint.barcodeRendering"));
	} else n.hideTitle || e.warn("qrcode-label", e.path, d("core.hiprint.qrCodeLabel"));
	return R(e, t, r);
}
function Ne(e) {
	let t = F(e);
	return R(e, "image", {
		fit: P(e.options.fit, "contain"),
		src: t ? I(t) : P(e.options.src || e.type.data)
	});
}
function V(e, t) {
	let n = e.options, r = {
		fill: "transparent",
		stroke: P(n.borderColor, "#000000"),
		strokeWidth: E(.75)
	};
	return (n.borderStyle === "dotted" || n.borderStyle === "dashed") && (r.dash = n.borderStyle), n.borderWidth !== void 0 && (r.strokeWidth = E(N(n.borderWidth, .75))), R(e, t, r);
}
function H(e, t) {
	let n = e.options, r = L(e), { x: i, y: a } = r, o = t ? r.height : r.width, s = {
		color: P(n.borderColor, "#000000"),
		strokeWidth: E(N(n.borderWidth, .75))
	};
	(n.borderStyle === "dotted" || n.borderStyle === "dashed") && (s.dash = n.borderStyle);
	let c = R(e, "line", s);
	return c.points = t ? [{
		x: i,
		y: a
	}, {
		x: i,
		y: a + o
	}] : [{
		x: i,
		y: a
	}, {
		x: i + o,
		y: a
	}], c.x = i, c.y = a, c.width = t ? 0 : o, c.height = t ? o : 0, c.rotation &&= (e.warn("line-rotation", e.path, d("core.hiprint.lineRotation")), 0), c;
}
var Pe = 128, U = 256;
function Fe(e) {
	if (e.length > Pe) return;
	let t = e.map(() => []);
	for (let [n, r] of e.entries()) {
		if (!Array.isArray(r)) return;
		let i = 0;
		for (let a of r) {
			for (; t[n][i];) i++;
			let r = j(a), o = N(r.rowspan, 1), s = N(r.colspan, 1);
			if (!Number.isInteger(o) || !Number.isInteger(s) || o < 1 || s < 1 || n + o > e.length || i + s > U) return;
			let c = {
				col: i,
				colspan: s,
				row: n,
				rowspan: o,
				source: r
			};
			for (let e = n; e < n + o; e++) for (let n = i; n < i + s; n++) {
				if (t[e][n]) return;
				t[e][n] = c;
			}
			i += s;
		}
	}
	let n = t.at(-1) ?? [];
	if (!(n.some((e) => e.colspan !== 1) || t.some((e) => e.length !== n.length || Array.from(e).some((e) => e === void 0)))) return t;
}
function Ie(e) {
	let t = [];
	return {
		headerMerges: t,
		headerRows: e.map((e, n) => e.map((e, r) => n !== e.row || r !== e.col ? "" : ((e.rowspan > 1 || e.colspan > 1) && t.push({
			col: r,
			colspan: e.colspan,
			row: n,
			rowspan: e.rowspan
		}), P(e.source.title))))
	};
}
function Le(e) {
	let t = e.options, n = Array.isArray(t.columns) ? t.columns : e.type.columns, r = Array.isArray(n) ? n : [], i = Fe(r), a = r.at(-1), o = i?.at(-1)?.map((e) => e.source) ?? (Array.isArray(a) ? a.slice(0, U).map(j) : []), s = o.filter((e) => e.checked !== !1).map((e) => {
		let t = N(e.width, 0), n = e.align === "right" || e.align === "center" ? e.align : "left";
		return {
			align: n,
			bind: P(e.field).trim(),
			bodyStyle: n === "left" ? void 0 : { align: n },
			title: P(e.title),
			width: t > 0 ? E(t) : 1,
			widthMode: t > 0 ? "fixed" : "weight"
		};
	});
	if (!s.length && Array.isArray(t.fields)) for (let e of t.fields) {
		let t = j(e);
		s.push({
			align: "left",
			bind: P(t.field).trim(),
			bodyStyle: void 0,
			title: P(t.text || t.title || t.field),
			width: 1,
			widthMode: "weight"
		});
	}
	s.length || e.warn("table-no-columns", e.path, d("core.hiprint.tableNoColumns"));
	let c = Math.max(0, Math.trunc(N(t.maxRows, 0))), l = {
		columns: s,
		headerBackground: "transparent",
		headerVisible: t.tableHeaderRepeat !== "none",
		pagination: {
			crossPage: !0,
			fillEmptyRows: !!t.autoCompletion,
			fixedRows: c > 0,
			positionMode: "fixed",
			repeatHeader: t.tableHeaderRepeat !== "first" && t.tableHeaderRepeat !== "none",
			rowsPerPage: c
		},
		rows: []
	};
	i ? r.length > 1 && o.every((e) => e.checked !== !1) ? Object.assign(l, Ie(i)) : r.length > 1 && e.warn("table-multilevel-header", `${e.path}.options.columns`, d("core.hiprint.tableMultilevelHeader")) : e.warn("table-invalid-header", `${e.path}.options.columns`, d("core.hiprint.tableInvalidHeader")), t.fontSize !== void 0 && (l.fontSize = N(t.fontSize, 9)), typeof t.fontFamily == "string" && (l.fontFamily = t.fontFamily), t.tableBodyRowHeight !== void 0 && (l.minRowHeightMm = E(N(t.tableBodyRowHeight, 0)));
	let u = R(e, "table", l, "array"), f = F(e);
	if (f) {
		u.bindings = { rows: f };
		for (let t of s) t.bind && e.collectField(`${f}[0].${t.bind}`, "string", e.path);
	}
	return e.warn("table-layout", e.path, d("core.hiprint.tableLayout")), u;
}
var Re = {
	barcode: (e) => B(e, "barcode"),
	hline: (e) => H(e, !1),
	image: Ne,
	longText: z,
	oval: (e) => V(e, "ellipse"),
	qrcode: (e) => B(e, "qrcode"),
	rect: (e) => V(e, "rect"),
	table: Le,
	text: (e) => {
		let t = P(e.options.textType, "text");
		return t === "barcode" || t === "qrcode" ? B(e, t) : (t !== "text" && e.warn("unsupported-text-type", e.path, d("core.hiprint.unsupportedTextType", { type: t })), z(e));
	},
	vline: (e) => H(e, !0)
}, ze = /* @__PURE__ */ new Set(/* @__PURE__ */ "backgroundImage.barAutoWidth.barTextMode.barWidth.borderBottom.borderLeft.borderRadius.borderRight.borderTop.content.contentPaddingBottom.contentPaddingLeft.contentPaddingRight.contentPaddingTop.dataType.evenPaperFooter.firstPaperFooter.fixed.footerFormatter.format.formatter.gridColumns.gridColumnsDirection.groupFields.groupFieldsFormatter.groupFooterFormatter.groupFormatter.lastPaperFooter.leftOffset.oddPaperFooter.orient.pageBreak.panelLayoutOptions.panelPaperRule.qrCodeLevel.rotate.rowsColumnsMerge.rowsColumnsMergeClean.rowStyler.scale.showInPage.style.styler.tableFooterRepeat.tableHeaderRowHeight.tableSummary.tableTextType.textContentWrap.topOffset.transform.unShowInPage.upperCase.watermark.watermarkOptions.zIndex".split("."));
function W(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	function i(e, t, a) {
		if (e && typeof e == "object") {
			if (a >= 64 || r.has(e)) n("unsupported-behavior", t, d("core.hiprint.skippedConfig"));
			else {
				if (r.add(e), Array.isArray(e)) e.forEach((e, n) => i(e, `${t}[${n}]`, a + 1));
				else for (let [r, o] of Object.entries(e)) {
					let e = `${t}.${r}`;
					typeof o == "function" || ze.has(r) && o != null && o !== "" && o !== !1 && o !== 0 ? n("unsupported-behavior", e, d("core.hiprint.unsupportedBehavior", { property: r })) : i(o, e, a + 1);
				}
				r.delete(e);
			}
		}
	}
	i(e, t, 0);
}
function Be(e, t) {
	return e === t ? e : e === "array" || t === "array" ? "array" : e === "object" || t === "object" ? "object" : t;
}
function Ve(e) {
	let t = /* @__PURE__ */ new Map();
	function n(n, r, i) {
		if (n.startsWith("$document.") || n === "$index") return;
		let a = s(n);
		if (!a.length || !me(a[0]) || /[{}|]/.test(n)) {
			e("invalid-field-path", i, d("core.hiprint.invalidFieldPath", { field: n }));
			return;
		}
		let o;
		for (let e = 0; e < a.length; e++) {
			let n = a[e], i = a[e + 1], s = r;
			i !== void 0 && (s = "object", /^\d+$/.test(i) && (s = "array", e++));
			let c = o ? o.children?.find((e) => e.name === n) : t.get(n);
			c ? c.type = Be(c.type, s) : (c = {
				name: n,
				type: s
			}, o ? (o.children ??= [], o.children.push(c)) : t.set(n, c)), o = c;
		}
	}
	function r() {
		return Array.from(t, ([e, t]) => ({
			key: e,
			label: e,
			schema: t.children,
			type: t.type
		}));
	}
	return {
		add: n,
		toDataSources: r
	};
}
function He(e, t, n, r) {
	if (e.paperNumberDisabled) return;
	let i = (P(e.paperNumberFormat) || "${paperNo}-${paperCount}").replace(/\$\{([^}]+)\}/g, (e, t) => t === "paperNo" ? I("$document.pageNumber") : t === "paperCount" ? I("$document.pageCount") : (r("page-number-format", `${n}.paperNumberFormat`, d("core.hiprint.pageNumberFormat", { variable: e })), e)), a = N(e.paperNumberLeft, 0) || Math.trunc(t.width / .35277777777777775 - 30), o = N(e.paperNumberTop, 0) || Math.trunc(t.height / .35277777777777775 - 22), s = C("text", {
		height: E(14),
		name: d("core.hiprint.pageNumberName"),
		props: {
			fontSize: 9,
			text: i
		},
		width: E(100),
		x: E(a),
		y: E(o)
	}, A);
	return r("page-number-pagination", n, d("core.hiprint.pageNumberPagination")), s;
}
function Ue(e, t, n, r, i) {
	let a = j(e), o = P(a.tid), s = j(a.printElementType), c = o.startsWith("defaultModule.") ? M(je, o.slice(14)) : void 0, l = M(n, o), u = {
		...c ? { type: c } : {},
		...j(l),
		...s
	};
	l && W(l, `${t}.provider`, r);
	let f = P(u.type), p = M(Re, f);
	if (!p) r("unsupported-element", t, d("core.hiprint.unsupportedElement", { type: f || o || d("core.hiprint.missingType") }));
	else return p({
		collectField: i,
		options: {
			...j(u.options),
			...j(a.options)
		},
		path: t,
		sourceType: f,
		type: u,
		warn: r
	});
}
function We(e, n, r, i, a) {
	return e.map((e, o) => {
		let s = j(e), c = `panels[${o}]`, l = N(s.width, 0), u = N(s.height, 0);
		if (l <= 0 || u <= 0) throw new t(d("core.hiprint.invalidPanel", { path: c }), { code: "hiprint.invalid-panel" });
		let f = D(l, u, P(s.name) || d("core.hiprint.panelName", { number: o + 1 }));
		f.templateId = we, W(s, c, i), i("panel-pagination", c, d("core.hiprint.panelPagination")), s.fontFamily && i("panel-font", `${c}.fontFamily`, d("core.hiprint.panelFont"));
		let p = He(s, f, c, i);
		if (p) {
			let e = T(d("core.hiprint.pageTemplateName", { name: f.name }), f);
			e.page.elements.push(p), f.templateId = e.id, n.push(e);
		}
		return Array.isArray(s.printElements) ? (s.printElements.forEach((e, t) => {
			let n = Ue(e, `${c}.printElements[${t}]`, r.types, i, a);
			n && f.elements.push(n);
		}), f) : (i("missing-elements", `${c}.printElements`, d("core.hiprint.missingElements")), f);
	});
}
function Ge(e, n = {}) {
	let r = e;
	if (typeof e == "string") try {
		r = JSON.parse(e);
	} catch {
		throw new t(d("core.hiprint.invalidJson"), { code: "hiprint.invalid-json" });
	}
	let i = j(r);
	if (!Array.isArray(i.panels) || i.panels.length === 0) throw new t(d("core.hiprint.invalidTemplate"), { code: "hiprint.invalid-template" });
	let a = [];
	function o(e, t, n) {
		a.push({
			code: e,
			message: n,
			path: t
		});
	}
	let s = Ve(o), c = [], l = We(i.panels, c, n, o, s.add);
	return {
		document: {
			dataSources: s.toDataSources(),
			name: n.name || d("core.hiprint.importedName"),
			pages: l,
			templates: c,
			version: "1.0"
		},
		warnings: a
	};
}
// ../packages/print-studio/dist/types-Vh_6jhVV.js
function Ke(e) {
	return e;
}
// ../packages/print-studio/dist/runtime.js
function qe(e = {}) {
	let t = [...e.printTargets ?? []];
	n(t);
	let r = ee(e), a = e.errors ?? te(), { elements: o, parsers: s } = ae({
		...e,
		builtinElements: e.elements ? [] : b
	}), c = Te({
		config: () => r.rendering,
		elements: o,
		parsers: s,
		snapshot: x
	}), l = i(() => r.rendering.imageLoadTimeoutMs), u = !1, d = oe(c, l, () => {
		if (u) throw Error("Print renderer has been disposed");
	});
	async function f(e, t) {
		if (u) throw Error("Print renderer has been disposed");
		try {
			return await t();
		} catch (t) {
			throw await a.capture(t, { source: e }), t;
		}
	}
	function p(e, t, n, r) {
		return f("runtime.html", () => d.toHTML(x(e), x(t), n, r));
	}
	function m(e, t, n, r) {
		return f("runtime.pdf", () => d.toPDF(x(e), x(t), n, r));
	}
	function h(e, t, n) {
		return f("runtime.preview", () => d.preview(x(e), x(t), n));
	}
	function g(e, n, r) {
		return f("runtime.print", () => ne(t, e, n, r, (t) => d.print(x(e), x(n), t)));
	}
	function _() {
		u || (u = !0, c.dispose(), l.dispose());
	}
	return {
		dispose: _,
		elements: o,
		errors: a,
		parsers: s,
		preview: h,
		print: g,
		toHTML: p,
		toPDF: m
	};
}
// ../packages/print-studio/dist/index.js
function Je(e) {
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
function G() {
	let e = /* #__PURE__ */ Object.assign({});
	return async function(t) {
		if (!p(t)) throw Error(`Invalid locale: ${t}`);
		if (t === "zh-CN") return O([k]);
		let n = `../translations/${t}/`, r = await Promise.all(Object.entries(e).filter(([e]) => e.startsWith(n)).map(async ([e, t]) => {
			let r = await t();
			if (!w(r.default)) throw Error(`Invalid translations: ${e}`);
			return { [e.slice(n.length, -5)]: r.default };
		}));
		return O(r);
	};
}
function Ye(e) {
	return async function(t) {
		if (!p(t)) throw Error(`Invalid locale: ${t}`);
		let n = await e(t);
		if (!w(n)) throw Error(`Invalid remote translations: ${t}`);
		return n;
	};
}
var K, q, Xe = [G()], J = 0, Y = /* @__PURE__ */ new Set([v]), X = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map([[v, k]]), Q = [];
function Ze(e, t) {
	return O([t, ...Q.flatMap((t) => t[e] ? [t[e]] : [])]);
}
function $(e) {
	for (let t of e) {
		let e = Z.get(t) ?? (t === "zh-CN" ? k : {});
		l.global.setLocaleMessage(t, y(t, Ze(t, e)));
	}
}
function Qe(e) {
	"storage" in e && (K = e.storage), "onError" in e && (q = e.onError), "loaders" in e && (J++, Xe = e.loaders ? [...e.loaders] : [G()], Y.clear(), X.clear(), e.loaders || (Z.set("zh-CN", k), $(["zh-CN"]), Y.add("zh-CN")));
}
function $e(e) {
	let t = Object.entries(e), n = {};
	for (let [e, r] of t) {
		if (!p(e) || !w(r)) throw Error(`Invalid locale messages: ${e}`);
		n[e] = O([r]);
	}
	Q.push(n);
	let r = Object.keys(n);
	$(r);
	let i = !0;
	return () => {
		i && (i = !1, Q.splice(Q.indexOf(n), 1), $(r));
	};
}
function et(e, t) {
	if (t) for (let n of e) t(n);
	else {
		if (e.length === 1) throw e[0];
		if (e.length > 1) throw AggregateError(e, "Locale operation failed");
	}
}
function tt(e) {
	let t = X.get(e);
	if (t) return t;
	let n = Promise.allSettled(Xe.map(async (t) => {
		let n = await t(e);
		if (!w(n)) throw Error(`Invalid translations: ${e}`);
		return n;
	})).then((e) => {
		let t = [], n = [];
		for (let r of e) r.status === "fulfilled" ? t.push(r.value) : n.push(r.reason);
		return {
			failures: n,
			messages: O(t)
		};
	}).finally(() => {
		X.get(e) === n && X.delete(e);
	});
	return X.set(e, n), n;
}
async function nt(e, t = {
	onError: q,
	storage: K
}) {
	let n = ++J, r = e, i = !0, a = [];
	try {
		if (!p(e)) throw Error(`Invalid locale: ${e}`);
		if (!Y.has(e) || !S(l.global.getLocaleMessage(e))) {
			Y.delete(e);
			let t = await tt(e);
			if (n !== J) return !1;
			let r = e === "zh-CN" ? O([k, t.messages]) : t.messages, i = y(e, Ze(e, r));
			if (!S(i)) throw t.failures.length === 1 ? t.failures[0] : t.failures.length > 1 ? AggregateError(t.failures, `Failed to load locale: ${e}`) : Error(`No locale messages found for ${e}`);
			Z.set(e, r), l.global.setLocaleMessage(e, i), a.push(...t.failures), t.failures.length === 0 && Y.add(e);
		}
	} catch (e) {
		if (n !== J) return !1;
		r = v, i = !1, a.push(e);
	}
	if (n !== J) return !1;
	l.global.locale.value = r;
	try {
		t.storage?.set(r);
	} catch (e) {
		a.push(e);
	}
	return await Se(), et(a, t.onError), i;
}
function rt(e) {
	return nt(e);
}
async function it(e = v) {
	let t = {
		onError: q,
		storage: K
	}, n;
	try {
		n = t.storage?.get();
	} catch (e) {
		et([e], t.onError);
	}
	return nt(p(n) ? n : e, t);
}
// ../packages/print-studio/dist/designer.js
function at(e, t = {}) {
	if (t.studio) return se(t.studio, e, t);
	let n = h({
		...t,
		createDocument: t.createDocument ?? (t.presets ? () => Ae(t.presets) : void 0)
	});
	try {
		return se(n, e, t, n.dispose);
	} catch (e) {
		throw n.dispose(), e;
	}
}
function ot(e) {
	let n = e.fetcher ?? ((e, t) => fetch(e, t));
	function r(e, n) {
		return new t(d("designer.templateLibrary.remoteFailed", { url: e }), {
			cause: n,
			code: "template-library.remote-failed"
		});
	}
	async function i(t) {
		try {
			let r = await n(t, { headers: e.headers });
			if (!r.ok) throw Error(`HTTP ${r.status}`);
			return await r.json();
		} catch (e) {
			throw r(t, e);
		}
	}
	function a(t) {
		return {
			category: t.category,
			description: t.description,
			id: t.id,
			async load() {
				if (t.document) return t.document;
				if (!t.url) throw r(t.id);
				let n = new URL(e.manifestUrl, location.href);
				return await i(new URL(t.url, n).href);
			},
			name: t.name
		};
	}
	return {
		id: e.id,
		async list() {
			let t = await i(e.manifestUrl);
			if (!Array.isArray(t?.templates)) throw r(e.manifestUrl);
			return t.templates.map(a);
		},
		title: e.title
	};
}
export { pe as DEFAULT_CLASS_PREFIX, o as DEFAULT_IMAGE_LOAD_TIMEOUT_MS, v as DEFAULT_LOCALE, m as DOCUMENT_VERSION, t as DesignerException, ue as ElementRegistry, ie as INITIAL_PARSER_VERSION, de as PAGE_PRESETS, ge as PLUGIN_API_VERSION, f as SCHEMA_FIELD_TYPES, at as attachDesigner, _ as buildSampleInput, b as builtinElements, Qe as configureAppI18n, Ge as convertHiprintTemplate, fe as createBem, r as createBuiltinElementRegistry, h as createDesigner, ke as createEditorContext, le as createEditorRuntime, C as createElement, te as createErrorRuntime, G as createLocalLocaleLoader, u as createLocalPreferenceStorage, D as createPage, a as createPluginLocale, qe as createPrinter, Ye as createRemoteLocaleLoader, ot as createRemoteTemplateProvider, Je as createSandboxedPlugin, he as createSeedDocument, T as createTemplate, be as defineElement, Ke as definePlugin, xe as deserializeDocument, g as elementRegistry, ve as getDesignerContext, e as imageToDataUrl, Ee as installBrowserErrors, Oe as installBuiltinCommands, De as installVueErrors, re as loadBuiltinDocument, Ce as loadImageElement, ye as penElement, c as penPointToPage, _e as readPenPath, $e as registerLocaleMessages, ce as registerPluginLocale, it as restoreLocale, rt as setLocale, d as trans };
