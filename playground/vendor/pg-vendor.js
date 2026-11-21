import { An as e, At as t, Br as n, Cn as r, D as i, Er as a, F as o, It as s, Jn as c, Jt as l, Mr as u, Mt as d, On as f, Ot as p, Pt as m, R as h, Rt as ee, S as g, St as te, T as _, Ur as v, X as ne, Zt as re, _r as ie, ar as y, at as b, br as ae, ci as oe, da as se, dn as ce, f as x, ft as le, g as S, gn as C, hn as ue, lr as de, lt as fe, mt as pe, ni as me, pr as w, pt as he, rr as ge, s as _e, sr as T, vn as ve, xt as E } from "./create-designer-JVbDIHeY-DuIqFk48.js";
import { i as ye, n as be, r as xe } from "./presets-5cFlqlla-DU2Ixy-q.js";
// ../../packages/print-studio/dist/hiprint.js
var Se = {
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
}, D = y();
function O(e) {
	return e && typeof e == "object" && !Array.isArray(e) ? e : {};
}
function k(e, t) {
	if (e && Object.hasOwn(e, t)) return e[t];
}
function A(e, t) {
	if (typeof e != "number" && (typeof e != "string" || !e.trim())) return t;
	let n = Number(e);
	return Number.isFinite(n) ? n : t;
}
function j(e, t = "") {
	return typeof e == "string" ? e : t;
}
function M(e) {
	return j(e.options.field).trim() || j(e.type.field).trim();
}
function N(e) {
	return `{{ ${e} }}`;
}
function Ce(e) {
	let t = M(e);
	return t ? N(t) : j(e.options.title || e.type.title || e.type.data);
}
function P(t) {
	let n = t.options, r = Math.max(.01, e(A(n.width, 100)));
	return {
		height: Math.max(.01, e(A(n.height, 20))),
		locked: n.draggable === !1,
		name: j(n.title || t.type.title, t.sourceType),
		rotation: A(n.rotate, 0),
		width: r,
		x: e(A(n.left, 0)),
		y: e(A(n.top, 0))
	};
}
function F(e, t, n, i = "string") {
	let a = M(e);
	a && e.collectField(a, i, e.path);
	let o = P(e), s = r(t, {
		...o,
		props: n
	}, D);
	return s.height = o.height, s;
}
function I(e) {
	let t = e.options, n = M(e), r = j(t.title || e.type.title || e.type.data), i = n && !t.hideTitle && r ? `${r}：` : "", o = Math.max(1, A(t.fontSize, 10.5)), s = {
		fontSize: o,
		text: n ? i + N(n) : r
	};
	for (let e of [
		"fontFamily",
		"fontWeight",
		"fontStyle",
		"color",
		"textAlign",
		"textDecoration"
	]) typeof t[e] == "string" && (s[e] = t[e]);
	typeof t.backgroundColor == "string" && (s.background = t.backgroundColor), typeof t.textContentVerticalAlign == "string" && (s.verticalAlign = t.textContentVerticalAlign);
	let c = A(t.lineHeight, 0);
	return c > 0 && (s.lineHeight = c / o), t.letterSpacing !== void 0 && (s.letterSpacing = A(t.letterSpacing, 0)), e.sourceType === "longText" && e.warn("long-text-pagination", e.path, a("core.hiprint.longTextPagination")), F(e, "text", s);
}
function L(e, t) {
	let n = e.options, r = { value: Ce(e) };
	if ((n.color || n.barColor) && (r.color = j(n.color || n.barColor, "#000000")), t === "barcode") {
		r.displayValue = !n.hideTitle;
		let t = j(n.barcodeMode || n.barcodeType);
		t && (r.format = t.toUpperCase()), e.warn("barcode-rendering", e.path, a("core.hiprint.barcodeRendering"));
	} else n.hideTitle || e.warn("qrcode-label", e.path, a("core.hiprint.qrCodeLabel"));
	return F(e, t, r);
}
function we(e) {
	let t = M(e);
	return F(e, "image", {
		fit: j(e.options.fit, "contain"),
		src: t ? N(t) : j(e.options.src || e.type.data)
	});
}
function R(t, n) {
	let r = t.options, i = {
		fill: "transparent",
		stroke: j(r.borderColor, "#000000"),
		strokeWidth: e(.75)
	};
	return (r.borderStyle === "dotted" || r.borderStyle === "dashed") && (i.dash = r.borderStyle), r.borderWidth !== void 0 && (i.strokeWidth = e(A(r.borderWidth, .75))), F(t, n, i);
}
function z(t, n) {
	let r = t.options, i = P(t), { x: o, y: s } = i, c = n ? i.height : i.width, l = {
		color: j(r.borderColor, "#000000"),
		strokeWidth: e(A(r.borderWidth, .75))
	};
	(r.borderStyle === "dotted" || r.borderStyle === "dashed") && (l.dash = r.borderStyle);
	let u = F(t, "line", l);
	return u.points = n ? [{
		x: o,
		y: s
	}, {
		x: o,
		y: s + c
	}] : [{
		x: o,
		y: s
	}, {
		x: o + c,
		y: s
	}], u.x = o, u.y = s, u.width = n ? 0 : c, u.height = n ? c : 0, u.rotation &&= (t.warn("line-rotation", t.path, a("core.hiprint.lineRotation")), 0), u;
}
var Te = 128, B = 256;
function Ee(e) {
	if (e.length > Te) return;
	let t = e.map(() => []);
	for (let [n, r] of e.entries()) {
		if (!Array.isArray(r)) return;
		let i = 0;
		for (let a of r) {
			for (; t[n][i];) i++;
			let r = O(a), o = A(r.rowspan, 1), s = A(r.colspan, 1);
			if (!Number.isInteger(o) || !Number.isInteger(s) || o < 1 || s < 1 || n + o > e.length || i + s > B) return;
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
function De(e) {
	let t = [];
	return {
		headerMerges: t,
		headerRows: e.map((e, n) => e.map((e, r) => n !== e.row || r !== e.col ? "" : ((e.rowspan > 1 || e.colspan > 1) && t.push({
			col: r,
			colspan: e.colspan,
			row: n,
			rowspan: e.rowspan
		}), j(e.source.title))))
	};
}
function Oe(t) {
	let n = t.options, r = Array.isArray(n.columns) ? n.columns : t.type.columns, i = Array.isArray(r) ? r : [], o = Ee(i), s = i.at(-1), c = o?.at(-1)?.map((e) => e.source) ?? (Array.isArray(s) ? s.slice(0, B).map(O) : []), l = c.filter((e) => e.checked !== !1).map((t) => {
		let n = A(t.width, 0), r = t.align === "right" || t.align === "center" ? t.align : "left";
		return {
			align: r,
			bind: j(t.field).trim(),
			bodyStyle: r === "left" ? void 0 : { align: r },
			title: j(t.title),
			width: n > 0 ? e(n) : 1,
			widthMode: n > 0 ? "fixed" : "weight"
		};
	});
	if (!l.length && Array.isArray(n.fields)) for (let e of n.fields) {
		let t = O(e);
		l.push({
			align: "left",
			bind: j(t.field).trim(),
			bodyStyle: void 0,
			title: j(t.text || t.title || t.field),
			width: 1,
			widthMode: "weight"
		});
	}
	l.length || t.warn("table-no-columns", t.path, a("core.hiprint.tableNoColumns"));
	let u = Math.max(0, Math.trunc(A(n.maxRows, 0))), d = {
		columns: l,
		headerBackground: "transparent",
		headerVisible: n.tableHeaderRepeat !== "none",
		pagination: {
			crossPage: !0,
			fillEmptyRows: !!n.autoCompletion,
			fixedRows: u > 0,
			positionMode: "fixed",
			repeatHeader: n.tableHeaderRepeat !== "first" && n.tableHeaderRepeat !== "none",
			rowsPerPage: u
		},
		rows: []
	};
	o ? i.length > 1 && c.every((e) => e.checked !== !1) ? Object.assign(d, De(o)) : i.length > 1 && t.warn("table-multilevel-header", `${t.path}.options.columns`, a("core.hiprint.tableMultilevelHeader")) : t.warn("table-invalid-header", `${t.path}.options.columns`, a("core.hiprint.tableInvalidHeader")), n.fontSize !== void 0 && (d.fontSize = A(n.fontSize, 9)), typeof n.fontFamily == "string" && (d.fontFamily = n.fontFamily), n.tableBodyRowHeight !== void 0 && (d.minRowHeightMm = e(A(n.tableBodyRowHeight, 0)));
	let f = F(t, "table", d, "array"), p = M(t);
	if (p) {
		f.bindings = { rows: p };
		for (let e of l) e.bind && t.collectField(`${p}[0].${e.bind}`, "string", t.path);
	}
	return t.warn("table-layout", t.path, a("core.hiprint.tableLayout")), f;
}
var ke = {
	barcode: (e) => L(e, "barcode"),
	hline: (e) => z(e, !1),
	image: we,
	longText: I,
	oval: (e) => R(e, "ellipse"),
	qrcode: (e) => L(e, "qrcode"),
	rect: (e) => R(e, "rect"),
	table: Oe,
	text: (e) => {
		let t = j(e.options.textType, "text");
		return t === "barcode" || t === "qrcode" ? L(e, t) : (t !== "text" && e.warn("unsupported-text-type", e.path, a("core.hiprint.unsupportedTextType", { type: t })), I(e));
	},
	vline: (e) => z(e, !0)
}, Ae = /* @__PURE__ */ new Set(/* @__PURE__ */ "backgroundImage.barAutoWidth.barTextMode.barWidth.borderBottom.borderLeft.borderRadius.borderRight.borderTop.content.contentPaddingBottom.contentPaddingLeft.contentPaddingRight.contentPaddingTop.dataType.evenPaperFooter.firstPaperFooter.fixed.footerFormatter.format.formatter.gridColumns.gridColumnsDirection.groupFields.groupFieldsFormatter.groupFooterFormatter.groupFormatter.lastPaperFooter.leftOffset.oddPaperFooter.orient.pageBreak.panelLayoutOptions.panelPaperRule.qrCodeLevel.rotate.rowsColumnsMerge.rowsColumnsMergeClean.rowStyler.scale.showInPage.style.styler.tableFooterRepeat.tableHeaderRowHeight.tableSummary.tableTextType.textContentWrap.topOffset.transform.unShowInPage.upperCase.watermark.watermarkOptions.zIndex".split("."));
function V(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	function i(e, t, o) {
		if (e && typeof e == "object") {
			if (o >= 64 || r.has(e)) n("unsupported-behavior", t, a("core.hiprint.skippedConfig"));
			else {
				if (r.add(e), Array.isArray(e)) e.forEach((e, n) => i(e, `${t}[${n}]`, o + 1));
				else for (let [r, s] of Object.entries(e)) {
					let e = `${t}.${r}`;
					typeof s == "function" || Ae.has(r) && s != null && s !== "" && s !== !1 && s !== 0 ? n("unsupported-behavior", e, a("core.hiprint.unsupportedBehavior", { property: r })) : i(s, e, o + 1);
				}
				r.delete(e);
			}
		}
	}
	i(e, t, 0);
}
function je(e, t) {
	return e === t ? e : e === "array" || t === "array" ? "array" : e === "object" || t === "object" ? "object" : t;
}
function Me(e) {
	let t = /* @__PURE__ */ new Map();
	function n(n, r, i) {
		if (n.startsWith("$document.") || n === "$index") return;
		let o = re(n);
		if (!o.length || !m(o[0]) || /[{}|]/.test(n)) {
			e("invalid-field-path", i, a("core.hiprint.invalidFieldPath", { field: n }));
			return;
		}
		let s;
		for (let e = 0; e < o.length; e++) {
			let n = o[e], i = o[e + 1], a = r;
			i !== void 0 && (a = "object", /^\d+$/.test(i) && (a = "array", e++));
			let c = s ? s.children?.find((e) => e.name === n) : t.get(n);
			c ? c.type = je(c.type, a) : (c = {
				name: n,
				type: a
			}, s ? (s.children ??= [], s.children.push(c)) : t.set(n, c)), s = c;
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
function Ne(t, n, i, o) {
	if (t.paperNumberDisabled) return;
	let s = (j(t.paperNumberFormat) || "${paperNo}-${paperCount}").replace(/\$\{([^}]+)\}/g, (e, t) => t === "paperNo" ? N("$document.pageNumber") : t === "paperCount" ? N("$document.pageCount") : (o("page-number-format", `${i}.paperNumberFormat`, a("core.hiprint.pageNumberFormat", { variable: e })), e)), c = A(t.paperNumberLeft, 0) || Math.trunc(n.width / .35277777777777775 - 30), l = A(t.paperNumberTop, 0) || Math.trunc(n.height / .35277777777777775 - 22), u = r("text", {
		height: e(14),
		name: a("core.hiprint.pageNumberName"),
		props: {
			fontSize: 9,
			text: s
		},
		width: e(100),
		x: e(c),
		y: e(l)
	}, D);
	return o("page-number-pagination", i, a("core.hiprint.pageNumberPagination")), u;
}
function Pe(e, t, n, r, i) {
	let o = O(e), s = j(o.tid), c = O(o.printElementType), l = s.startsWith("defaultModule.") ? k(Se, s.slice(14)) : void 0, u = k(n, s), d = {
		...l ? { type: l } : {},
		...O(u),
		...c
	};
	u && V(u, `${t}.provider`, r);
	let f = j(d.type), p = k(ke, f);
	if (!p) r("unsupported-element", t, a("core.hiprint.unsupportedElement", { type: f || s || a("core.hiprint.missingType") }));
	else return p({
		collectField: i,
		options: {
			...O(d.options),
			...O(o.options)
		},
		path: t,
		sourceType: f,
		type: d,
		warn: r
	});
}
function Fe(e, t, n, r, i) {
	return e.map((e, o) => {
		let s = O(e), u = `panels[${o}]`, d = A(s.width, 0), f = A(s.height, 0);
		if (d <= 0 || f <= 0) throw new C(a("core.hiprint.invalidPanel", { path: u }), { code: "hiprint.invalid-panel" });
		let m = p(d, f, j(s.name) || a("core.hiprint.panelName", { number: o + 1 }));
		m.templateId = l, V(s, u, r), r("panel-pagination", u, a("core.hiprint.panelPagination")), s.fontFamily && r("panel-font", `${u}.fontFamily`, a("core.hiprint.panelFont"));
		let h = Ne(s, m, u, r);
		if (h) {
			let e = c(a("core.hiprint.pageTemplateName", { name: m.name }), m);
			e.page.elements.push(h), m.templateId = e.id, t.push(e);
		}
		return Array.isArray(s.printElements) ? (s.printElements.forEach((e, t) => {
			let a = Pe(e, `${u}.printElements[${t}]`, n.types, r, i);
			a && m.elements.push(a);
		}), m) : (r("missing-elements", `${u}.printElements`, a("core.hiprint.missingElements")), m);
	});
}
function Ie(e, t = {}) {
	let n = e;
	if (typeof e == "string") try {
		n = JSON.parse(e);
	} catch {
		throw new C(a("core.hiprint.invalidJson"), { code: "hiprint.invalid-json" });
	}
	let r = O(n);
	if (!Array.isArray(r.panels) || r.panels.length === 0) throw new C(a("core.hiprint.invalidTemplate"), { code: "hiprint.invalid-template" });
	let i = [];
	function o(e, t, n) {
		i.push({
			code: e,
			message: n,
			path: t
		});
	}
	let s = Me(o), c = [], l = Fe(r.panels, c, t, o, s.add);
	return {
		document: {
			dataSources: s.toDataSources(),
			name: t.name || a("core.hiprint.importedName"),
			pages: l,
			templates: c,
			version: "1.0"
		},
		warnings: i
	};
}
// ../../packages/print-studio/dist/types-Vh_6jhVV.js
function Le(e) {
	return e;
}
// ../../packages/print-studio/dist/runtime.js
function Re(e = {}) {
	let t = me(e), n = e.errors ?? E(), { elements: r, parsers: i } = pe({
		...e,
		builtinElements: e.elements ? [] : v
	}), a = he({
		config: () => t.rendering,
		elements: r,
		parsers: i,
		snapshot: s
	}), o = te(() => t.rendering.imageLoadTimeoutMs), c = !1, l = le(a, o, () => {
		if (c) throw Error("Print renderer has been disposed");
	});
	async function u(e, t) {
		if (c) throw Error("Print renderer has been disposed");
		try {
			return await t();
		} catch (t) {
			throw await n.capture(t, { source: e }), t;
		}
	}
	function d(e, t, n, r) {
		return u("runtime.html", () => l.toHTML(s(e), s(t), n, r));
	}
	function f(e, t, n, r) {
		return u("runtime.pdf", () => l.toPDF(s(e), s(t), n, r));
	}
	function p(e, t, n) {
		return u("runtime.preview", () => l.preview(s(e), s(t), n));
	}
	function m(e, t, n) {
		return u("runtime.print", () => l.print(s(e), s(t), n));
	}
	function h() {
		c || (c = !0, a.dispose(), o.dispose());
	}
	return {
		dispose: h,
		elements: r,
		errors: n,
		parsers: i,
		preview: p,
		print: m,
		toHTML: d,
		toPDF: f
	};
}
// ../../packages/print-studio/dist/index.js
function ze(e) {
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
function H() {
	let e = /* #__PURE__ */ Object.assign({});
	return async function(t) {
		if (!i(t)) throw Error(`Invalid locale: ${t}`);
		if (t === "zh-CN") return S([w]);
		let n = `../translations/${t}/`, r = await Promise.all(Object.entries(e).filter(([e]) => e.startsWith(n)).map(async ([e, t]) => {
			let r = await t();
			if (!x(r.default)) throw Error(`Invalid translations: ${e}`);
			return { [e.slice(n.length, -5)]: r.default };
		}));
		return S(r);
	};
}
function Be(e) {
	return async function(t) {
		if (!i(t)) throw Error(`Invalid locale: ${t}`);
		let n = await e(t);
		if (!x(n)) throw Error(`Invalid remote translations: ${t}`);
		return n;
	};
}
var U, W, G = [H()], K = 0, q = /* @__PURE__ */ new Set([T]), J = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map([[T, w]]), X = [];
function Z(e, t) {
	return S([t, ...X.flatMap((t) => t[e] ? [t[e]] : [])]);
}
function Q(e) {
	for (let t of e) {
		let e = Y.get(t) ?? (t === "zh-CN" ? w : {});
		u.global.setLocaleMessage(t, h(t, Z(t, e)));
	}
}
function Ve(e) {
	"storage" in e && (U = e.storage), "onError" in e && (W = e.onError), "loaders" in e && (K++, G = e.loaders ? [...e.loaders] : [H()], q.clear(), J.clear(), e.loaders || (Y.set("zh-CN", w), Q(["zh-CN"]), q.add("zh-CN")));
}
function He(e) {
	let t = Object.entries(e), n = {};
	for (let [e, r] of t) {
		if (!i(e) || !x(r)) throw Error(`Invalid locale messages: ${e}`);
		n[e] = S([r]);
	}
	X.push(n);
	let r = Object.keys(n);
	Q(r);
	let a = !0;
	return () => {
		a && (a = !1, X.splice(X.indexOf(n), 1), Q(r));
	};
}
function Ue(e, t) {
	if (t) for (let n of e) t(n);
	else {
		if (e.length === 1) throw e[0];
		if (e.length > 1) throw AggregateError(e, "Locale operation failed");
	}
}
function We(e) {
	let t = J.get(e);
	if (t) return t;
	let n = Promise.allSettled(G.map(async (t) => {
		let n = await t(e);
		if (!x(n)) throw Error(`Invalid translations: ${e}`);
		return n;
	})).then((e) => {
		let t = [], n = [];
		for (let r of e) r.status === "fulfilled" ? t.push(r.value) : n.push(r.reason);
		return {
			failures: n,
			messages: S(t)
		};
	}).finally(() => {
		J.get(e) === n && J.delete(e);
	});
	return J.set(e, n), n;
}
async function $(e, t = {
	onError: W,
	storage: U
}) {
	let n = ++K, r = e, a = !0, o = [];
	try {
		if (!i(e)) throw Error(`Invalid locale: ${e}`);
		if (!q.has(e) || !g(u.global.getLocaleMessage(e))) {
			q.delete(e);
			let t = await We(e);
			if (n !== K) return !1;
			let r = e === "zh-CN" ? S([w, t.messages]) : t.messages, i = h(e, Z(e, r));
			if (!g(i)) throw t.failures.length === 1 ? t.failures[0] : t.failures.length > 1 ? AggregateError(t.failures, `Failed to load locale: ${e}`) : Error(`No locale messages found for ${e}`);
			Y.set(e, r), u.global.setLocaleMessage(e, i), o.push(...t.failures), t.failures.length === 0 && q.add(e);
		}
	} catch (e) {
		if (n !== K) return !1;
		r = T, a = !1, o.push(e);
	}
	if (n !== K) return !1;
	u.global.locale.value = r;
	try {
		t.storage?.set(r);
	} catch (e) {
		o.push(e);
	}
	return await se(), Ue(o, t.onError), a;
}
function Ge(e) {
	return $(e);
}
async function Ke(e = T) {
	let t = {
		onError: W,
		storage: U
	}, n;
	try {
		n = t.storage?.get();
	} catch (e) {
		Ue([e], t.onError);
	}
	return $(i(n) ? n : e, t);
}
// ../../packages/print-studio/dist/designer.js
function qe(e, t = {}) {
	if (t.studio) return b(t.studio, e, t);
	let n = _({
		...t,
		createDocument: t.createDocument ?? (t.presets ? () => be(t.presets) : void 0)
	});
	try {
		return b(n, e, t, n.dispose);
	} catch (e) {
		throw n.dispose(), e;
	}
}
function Je(e) {
	let t = e.fetcher ?? ((e, t) => fetch(e, t));
	function n(e, t) {
		return new C(a("designer.templateLibrary.remoteFailed", { url: e }), {
			cause: t,
			code: "template-library.remote-failed"
		});
	}
	async function r(r) {
		try {
			let n = await t(r, { headers: e.headers });
			if (!n.ok) throw Error(`HTTP ${n.status}`);
			return await n.json();
		} catch (e) {
			throw n(r, e);
		}
	}
	function i(t) {
		return {
			category: t.category,
			description: t.description,
			id: t.id,
			async load() {
				if (t.document) return t.document;
				if (!t.url) throw n(t.id);
				let i = new URL(e.manifestUrl, location.href);
				return await r(new URL(t.url, i).href);
			},
			name: t.name
		};
	}
	return {
		id: e.id,
		async list() {
			let t = await r(e.manifestUrl);
			if (!Array.isArray(t?.templates)) throw n(e.manifestUrl);
			return t.templates.map(i);
		},
		title: e.title
	};
}
export { ge as DEFAULT_IMAGE_LOAD_TIMEOUT_MS, T as DEFAULT_LOCALE, oe as DOCUMENT_VERSION, C as DesignerException, ue as ElementRegistry, ce as INITIAL_PARSER_VERSION, ie as PAGE_PRESETS, ne as PLUGIN_API_VERSION, ae as SCHEMA_FIELD_TYPES, qe as attachDesigner, t as buildSampleInput, v as builtinElements, Ve as configureAppI18n, Ie as convertHiprintTemplate, y as createBuiltinElementRegistry, _ as createDesigner, r as createElement, E as createErrorRuntime, H as createLocalLocaleLoader, fe as createLocalPreferenceStorage, p as createPage, _e as createPluginLocale, Re as createPrinter, Be as createRemoteLocaleLoader, Je as createRemoteTemplateProvider, ze as createSandboxedPlugin, c as createTemplate, ee as defineElement, Le as definePlugin, de as deserializeDocument, ve as elementRegistry, d as imageToDataUrl, ye as installBrowserErrors, xe as installVueErrors, f as loadImageElement, n as penElement, He as registerLocaleMessages, o as registerPluginLocale, Ke as restoreLocale, Ge as setLocale, a as trans };
