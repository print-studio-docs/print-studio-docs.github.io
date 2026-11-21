import { r as e } from "./rolldown-runtime-QGRDbDUS-C6PacCL3.js";
import { $o as t, Bo as n, Ca as r, Ci as i, Co as a, Ea as o, Ei as s, Fa as c, Go as l, Ho as u, Io as d, Ji as f, Jo as p, Ko as m, Li as h, Ni as ee, No as g, Oa as te, Oo as _, Qa as v, Qo as ne, Ra as re, Ro as ie, Sa as ae, Uo as y, Vo as b, Wo as x, Xi as oe, Xo as se, Ya as ce, Yo as le, Zo as ue, as as S, cs as de, da as fe, di as pe, es as C, fi as me, gi as he, ha as ge, ia as _e, is as w, ji as ve, ns as T, os as E, ps as ye, qi as D, qo as be, rs as xe, ts as Se, va as Ce, vi as we, zi as Te, zo as Ee } from "./create-designer-JVbDIHeY-DuIqFk48.js";
// ../../node_modules/.pnpm/@vue+runtime-dom@3.5.45/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var De = void 0, Oe = typeof window < "u" && window.trustedTypes;
if (Oe) try {
	De = /* @__PURE__ */ Oe.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ke = De ? (e) => De.createHTML(e) : (e) => e, Ae = "http://www.w3.org/2000/svg", je = "http://www.w3.org/1998/Math/MathML", O = typeof document < "u" ? document : null, Me = O && /* @__PURE__ */ O.createElement("template"), Ne = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? O.createElementNS(Ae, e) : t === "mathml" ? O.createElementNS(je, e) : n ? O.createElement(e, { is: n }) : O.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => O.createTextNode(e),
	createComment: (e) => O.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => O.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Me.innerHTML = ke(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Me.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, k = "transition", A = "animation", j = /* @__PURE__ */ Symbol("_vtc"), Pe = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, Fe = /* @__PURE__ */ y({}, me, Pe), Ie = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = Fe, e))((e, { slots: t }) => oe(pe, Re(e), t)), M = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, Le = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function Re(e) {
	let t = {};
	for (let n in e) n in Pe || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: l = o, appearToClass: u = s, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: p = `${n}-leave-to` } = e, m = ze(i), h = m && m[0], ee = m && m[1], { onBeforeEnter: g, onEnter: te, onEnterCancelled: _, onLeave: v, onLeaveCancelled: ne, onBeforeAppear: re = g, onAppear: ie = te, onAppearCancelled: ae = _ } = t, b = (e, t, n, r) => {
		e._enterCancelled = r, F(e, t ? u : s), F(e, t ? l : o), n && n();
	}, x = (e, t) => {
		e._isLeaving = !1, F(e, d), F(e, p), F(e, f), t && t();
	}, oe = (e) => (t, n) => {
		let i = e ? ie : te, o = () => b(t, e, n);
		M(i, [t, o]), Be(() => {
			F(t, e ? c : a), P(t, e ? u : s), Le(i) || He(t, r, h, o);
		});
	};
	return y(t, {
		onBeforeEnter(e) {
			M(g, [e]), P(e, a), P(e, o);
		},
		onBeforeAppear(e) {
			M(re, [e]), P(e, c), P(e, l);
		},
		onEnter: oe(!1),
		onAppear: oe(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => x(e, t);
			P(e, d), e._enterCancelled ? (P(e, f), I(e)) : (I(e), P(e, f)), Be(() => {
				e._isLeaving && (F(e, d), P(e, p), Le(v) || He(e, r, ee, n));
			}), M(v, [e, n]);
		},
		onEnterCancelled(e) {
			b(e, !1, void 0, !0), M(_, [e]);
		},
		onAppearCancelled(e) {
			b(e, !0, void 0, !0), M(ae, [e]);
		},
		onLeaveCancelled(e) {
			x(e), M(ne, [e]);
		}
	});
}
function ze(e) {
	if (e == null) return null;
	if (ue(e)) return [N(e.enter), N(e.leave)];
	{
		let t = N(e);
		return [t, t];
	}
}
function N(e) {
	return ye(e);
}
function P(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[j] || (e[j] = /* @__PURE__ */ new Set())).add(t);
}
function F(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[j];
	n && (n.delete(t), n.size || (e[j] = void 0));
}
function Be(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var Ve = 0;
function He(e, t, n, r) {
	let i = e._endId = ++Ve, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = Ue(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function Ue(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${k}Delay`), a = r(`${k}Duration`), o = We(i, a), s = r(`${A}Delay`), c = r(`${A}Duration`), l = We(s, c), u = null, d = 0, f = 0;
	t === k ? o > 0 && (u = k, d = o, f = a.length) : t === A ? l > 0 && (u = A, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? k : A : null, f = u ? u === k ? a.length : c.length : 0);
	let p = u === k && /\b(?:transform|all)(?:,|$)/.test(r(`${k}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function We(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => Ge(t) + Ge(e[n])));
}
function Ge(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function I(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ke(e, t, n) {
	let r = e[j];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var L = /* @__PURE__ */ Symbol("_vod"), qe = /* @__PURE__ */ Symbol("_vsh"), Je = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[L] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : R(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), R(e, !0), r.enter(e)) : r.leave(e, () => {
			R(e, !1);
		}) : R(e, t));
	},
	beforeUnmount(e, { value: t }) {
		R(e, t);
	}
};
function R(e, t) {
	e.style.display = t ? e[L] : "none", e[qe] = !t;
}
function Ye() {
	Je.getSSRProps = ({ value: e }) => {
		if (!e) return { style: { display: "none" } };
	};
}
var Xe = /* @__PURE__ */ Symbol("");
function Ze(e) {
	let t = D();
	if (!t) return;
	let r = t.ut = (n = e(t.proxy)) => {
		Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e) => z(e, n));
	}, i = () => {
		let n = e(t.proxy);
		t.ce ? z(t.ce, n) : Qe(t.subTree, n), r(n);
	};
	ge(() => {
		te(i);
	}), Ce(() => {
		v(i, n, { flush: "post" });
		let e = new MutationObserver(i);
		e.observe(t.subTree.el.parentNode, { childList: !0 }), ae(() => e.disconnect());
	});
}
function Qe(e, t) {
	if (e.shapeFlag & 128) {
		let n = e.suspense;
		e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
			Qe(n.activeBranch, t);
		});
	}
	for (; e.component;) e = e.component.subTree;
	if (e.shapeFlag & 1 && e.el) z(e.el, t);
	else if (e.type === he) e.children.forEach((e) => Qe(e, t));
	else if (e.type === we) {
		let { el: n, anchor: r } = e;
		for (; n && (z(n, t), n !== r);) n = n.nextSibling;
	}
}
function z(e, t) {
	if (e.nodeType === 1) {
		let n = e.style, r = "";
		for (let e in t) {
			let i = de(t[e]);
			n.setProperty(`--${e}`, i), r += `--${e}: ${i};`;
		}
		n[Xe] = r;
	}
}
var $e = /(?:^|;)\s*display\s*:/;
function et(e, t, n) {
	let r = e.style, i = T(n), a = !1;
	if (n && !i) {
		if (t) {
			if (T(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? V(r, t, "");
			}
			else for (let e in t) n[e] ?? V(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? V(r, i, "") : rt(e, i, !T(t) && t ? t[i] : void 0, o) || V(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Xe];
			e && (n += ";" + e), r.cssText = n, a = $e.test(n);
		}
	} else t && e.removeAttribute("style");
	L in e && (i && t === n || (e[L] = a ? r.display : ""), e[qe] && (r.display = "none"));
}
var B = /\s*!important$/;
function V(e, t, n) {
	if (p(n)) n.forEach((n) => V(e, t, n));
	else if (n ??= "", t.startsWith("--")) B.test(n) ? e.setProperty(t, n.replace(B, ""), "important") : e.setProperty(t, n);
	else {
		let r = nt(e, t);
		B.test(n) ? e.setProperty(l(r), n.replace(B, ""), "important") : e[r] = n;
	}
}
var tt = [
	"Webkit",
	"Moz",
	"ms"
], H = {};
function nt(e, t) {
	let n = H[t];
	if (n) return n;
	let r = b(t);
	if (r !== "filter" && r in e) return H[t] = r;
	r = u(r);
	for (let n = 0; n < tt.length; n++) {
		let i = tt[n] + r;
		if (i in e) return H[t] = i;
	}
	return t;
}
function rt(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && T(r) && n === r;
}
var it = "http://www.w3.org/1999/xlink";
function at(e, t, n, r, i, a = Se(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(it, t.slice(6, t.length)) : e.setAttributeNS(it, t, n) : n == null || a && !m(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : xe(n) ? String(n) : n);
}
function ot(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ke(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = m(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function U(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function st(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var ct = /* @__PURE__ */ Symbol("_vei");
function lt(e, t, n, r, i = null) {
	let a = e[ct] || (e[ct] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = ft(t);
		r ? U(e, n, a[t] = gt(r, i), s) : o && (st(e, n, o, s), a[t] = void 0);
	}
}
var ut = /(Once|Passive|Capture)$/, dt = /^on:?(?:Once|Passive|Capture)$/;
function ft(e) {
	let t, n;
	for (; (n = e.match(ut)) && !dt.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : l(e.slice(2)), t];
}
var pt = 0, mt = /* @__PURE__ */ Promise.resolve(), ht = () => pt ||= (mt.then(() => pt = 0), Date.now());
function gt(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (p(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let a = r.slice(), o = [e];
			for (let n = 0; n < a.length && !e._stopped; n++) {
				let e = a[n];
				e && i(e, t, 5, o);
			}
		} else i(r, t, 5, [e]);
	};
	return n.value = e, n.attached = ht(), n;
}
var _t = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, vt = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Ke(e, r, o) : t === "style" ? et(e, n, r) : ne(t) ? se(t) || lt(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : yt(e, t, r, o)) ? (ot(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || at(e, t, r, o, a, t !== "value")) : e._isVueCE && (bt(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !T(r))) ? ot(e, b(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), at(e, t, r, o));
};
function yt(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && _t(t) && le(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return _t(t) && T(n) ? !1 : t in e;
}
function bt(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = b(t);
	return Array.isArray(n) ? n.some((e) => b(e) === r) : Object.keys(n).some((e) => b(e) === r);
}
var xt = {};
// @__NO_SIDE_EFFECTS__
function St(e, n, r) {
	let i = Te(e, n);
	t(i) && (i = y({}, i, n));
	class a extends Tt {
		constructor(e) {
			super(i, e, r);
		}
	}
	return a.def = i, a;
}
var Ct = /* @__NO_SIDE_EFFECTS__ */ ((e, t) => /* @__PURE__ */ St(e, t, pn)), wt = typeof HTMLElement < "u" ? HTMLElement : class {}, Tt = class e extends wt {
	constructor(e, t = {}, n = fn) {
		super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== fn ? this._root = this.shadowRoot : e.shadowRoot === !1 ? this._root = this : (this.attachShadow(y({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot);
	}
	connectedCallback() {
		if (!this.isConnected) return;
		!this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
		let t = this;
		for (; t &&= t.assignedSlot || t.parentNode || t.host;) if (t instanceof e) {
			this._parent = t;
			break;
		}
		this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
			if (this._pendingResolve = void 0, this.isConnected) return this._resolveDef();
		}) : this._resolveDef());
	}
	_setParent(e = this._parent) {
		e && (this._instance.parent = e._instance, this._inheritParentContext(e));
	}
	_inheritParentContext(e = this._parent) {
		e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
	}
	disconnectedCallback() {
		this._connected = !1, fe(() => {
			this._connected || (this._ob &&= (this._ob.disconnect(), null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets &&= (this._teleportTargets.clear(), void 0));
		});
	}
	_processMutations(e) {
		for (let t of e) this._setAttr(t.attributeName);
	}
	_resolveDef() {
		if (this._pendingResolve) return this._pendingResolve;
		for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
		this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
		let e = (e, t = !1) => {
			this._resolved = !0, this._pendingResolve = void 0;
			let { props: n, styles: r } = e, i;
			if (n && !p(n)) for (let e in n) {
				let t = n[e];
				(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = ye(this._props[e])), (i ||= /* @__PURE__ */ Object.create(null))[b(e)] = !0);
			}
			this._numberProps = i, this._resolveProps(e), this.shadowRoot && this._applyStyles(r), this._connected && this._mount(e);
		}, t = this._def.__asyncLoader;
		if (t) return this._pendingResolve = t().then((t) => {
			t.configureApp = this._def.configureApp, e(this._def = t, !0);
		}), this._pendingResolve;
		e(this._def);
	}
	_mount(e) {
		__VUE_PROD_DEVTOOLS__ && !e.name && (e.name = "VueElement"), this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
		let t = this._instance && this._instance.exposed;
		if (t) for (let e in t) x(this, e) || Object.defineProperty(this, e, { get: () => ie(t[e]) });
	}
	_resolveProps(e) {
		let { props: t } = e, n = p(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(b)) Object.defineProperty(this, e, {
			get() {
				return this._getProp(e);
			},
			set(t) {
				this._setProp(e, t, !0, !this._patching);
			}
		});
	}
	_setAttr(e) {
		if (e.startsWith("data-v-")) return;
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : xt, r = b(e);
		t && this._numberProps && this._numberProps[r] && (n = ye(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === xt ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(l(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(l(e), t + "") : t || this.removeAttribute(l(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_update() {
		let e = this._createVNode();
		this._app && (e.appContext = this._app._context), un(e, this._root);
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let n = h(this._def, y(e, this._props));
		return this._instance || (n.ce = (e) => {
			this._instance = e, e.ce = this, e.isCE = !0;
			let n = (e, n) => {
				this.dispatchEvent(new CustomEvent(e, t(n[0]) ? y({ detail: n }, n[0]) : { detail: n }));
			};
			e.emit = (e, ...t) => {
				n(e, t), l(e) !== e && n(l(e), t);
			}, this._setParent();
		}), n;
	}
	_applyStyles(e, t, n) {
		if (!e) return;
		if (t) {
			if (t === this._def || this._styleChildren.has(t)) return;
			this._styleChildren.add(t);
		}
		let r = this._nonce, i = this.shadowRoot, a = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), o = null;
		for (let s = e.length - 1; s >= 0; s--) {
			let c = document.createElement("style");
			r && c.setAttribute("nonce", r), c.textContent = e[s], i.insertBefore(c, o || a), o = c, s === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
		}
	}
	_getStyleAnchor(e) {
		if (!e) return null;
		let t = this._styleAnchors.get(e);
		return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
	}
	_getRootStyleInsertionAnchor(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (!(n instanceof HTMLStyleElement)) return n;
		}
		return null;
	}
	_parseSlots() {
		let e = this._slots = {}, t;
		for (; t = this.firstChild;) {
			let n = t.nodeType === 1 && t.getAttribute("slot") || "default";
			(e[n] || (e[n] = [])).push(t), this.removeChild(t);
		}
	}
	_renderSlots() {
		let e = this._getSlots(), t = this._instance.type.__scopeId;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.getAttribute("name") || "default", a = this._slots[i], o = r.parentNode;
			if (a) for (let e of a) {
				if (t && e.nodeType === 1) {
					let n = t + "-s", r = document.createTreeWalker(e, 1);
					e.setAttribute(n, "");
					let i;
					for (; i = r.nextNode();) i.setAttribute(n, "");
				}
				o.insertBefore(e, r);
			}
			else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
			o.removeChild(r);
		}
	}
	_getSlots() {
		let e = [this];
		this._teleportTargets && e.push(...this._teleportTargets);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.querySelectorAll("slot");
			for (let n = 0; n < e.length; n++) t.add(e[n]);
		}
		return Array.from(t);
	}
	_injectChildStyle(e, t) {
		this._applyStyles(e.styles, e, t);
	}
	_beginPatch() {
		this._patching = !0, this._dirty = !1;
	}
	_endPatch() {
		this._patching = !1, this._dirty && this._instance && this._update();
	}
	_hasShadowRoot() {
		return this._def.shadowRoot !== !1;
	}
	_removeChildStyle(e) {}
};
function Et(e) {
	let t = D();
	return t && t.ce || null;
}
function Dt() {
	let e = Et();
	return e && e.shadowRoot;
}
function Ot(e = "$style") {
	{
		let t = D();
		if (!t) return Ee;
		let n = t.type.__cssModules;
		return n && n[e] || Ee;
	}
}
var kt = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ Symbol("_moveCb"), jt = /* @__PURE__ */ Symbol("_enterCb"), G = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ ((e) => (delete e.props.mode, e))({
	name: "TransitionGroup",
	props: /* @__PURE__ */ y({}, Fe, {
		tag: String,
		moveClass: String
	}),
	setup(e, { slots: t }) {
		let n = D(), i = ce(), a, o, s, l, u = () => (l === void 0 && (l = a.length > 0 && Bt(a[0].el, n.vnode.el, Pt(e))), l);
		return r(() => {
			if (G.delete(n), !u()) {
				a = [], s = void 0;
				return;
			}
			let t = Pt(e);
			a.forEach(Nt);
			let r = s && zt(s, n.vnode.el);
			s = void 0, a.forEach((e) => Ft(e, r));
			let i = a.filter(It);
			I(n.vnode.el), i.forEach((e) => {
				let n = e.el, r = n.style;
				P(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
				let i = n[W] = (e) => {
					e && e.target !== n || (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[W] = null, F(n, t));
				};
				n.addEventListener("transitionend", i);
			}), a = [];
		}), () => {
			let r = g(e), d = Re(r), p = r.tag || he;
			if (a = [], l = void 0, o) for (let e = 0; e < o.length; e++) {
				let t = o[e];
				t.el && t.el instanceof Element && !t.el[qe] && (a.push(t), re(t, c(t, d, i, n)), kt.set(t, K(t.el)));
			}
			o = t.default ? f(t.default()) : [];
			for (let e = 0; e < o.length; e++) {
				let t = o[e];
				t.key != null && re(t, c(t, d, i, n));
			}
			return a.length && (s = Lt(n), G.set(n, u)), h(p, null, o);
		};
	}
});
function Nt(e) {
	let t = e.el;
	t[W] && t[W](), t[jt] && t[jt]();
}
function Pt(e) {
	return e.moveClass || `${e.name || "v"}-move`;
}
function Ft(e, t) {
	At.set(e, K(e.el, t));
}
function It(e) {
	let t = kt.get(e), n = At.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, a = t.getBoundingClientRect(), o = 1, s = 1;
		return t.offsetWidth && (o = a.width / t.offsetWidth), t.offsetHeight && (s = a.height / t.offsetHeight), Number.isFinite(o) && o !== 0 || (o = 1), Number.isFinite(s) && s !== 0 || (s = 1), Math.abs(o - 1) < .01 && (o = 1), Math.abs(s - 1) < .01 && (s = 1), n.transform = n.webkitTransform = `translate(${r / o}px,${i / s}px)`, n.transitionDuration = "0s", e;
	}
}
function K(e, t) {
	let n = e.getBoundingClientRect();
	return {
		left: n.left - (t ? t.left : 0),
		top: n.top - (t ? t.top : 0)
	};
}
function Lt(e) {
	let t;
	for (let n = e.parent; n; n = n.parent) {
		let r = G.get(n);
		if (r) {
			let i = Rt(n.vnode.el, e.vnode.el);
			i && (t ||= []).push(y(K(i), {
				item: i,
				willMove: r
			}));
		}
	}
	return t;
}
function Rt(e, t) {
	let n = e.nodeType === 1 ? e : e.parentNode;
	for (; t && t.parentNode !== n;) t = t.parentNode;
	if (t && t.nodeType === 1) return t;
}
function zt(e, t) {
	let n = e.find((e) => e.willMove() && e.item.contains(t));
	return n && K(n.item, n);
}
function Bt(e, t, n) {
	let r = e.cloneNode(), i = e[j];
	i && i.forEach((e) => {
		e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
	}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
	let a = t.nodeType === 1 ? t : t.parentNode;
	a.appendChild(r);
	let { hasTransform: o } = Ue(r);
	return a.removeChild(r), o;
}
var q = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => be(t, e) : t;
};
function Vt(e) {
	e.target.composing = !0;
}
function Ht(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var J = /* @__PURE__ */ Symbol("_assign"), Y = /* @__PURE__ */ Symbol("_initialValue");
function Ut(e, t, n) {
	return t && (e = e.trim()), n && (e = E(e)), e;
}
var X = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Y] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Y] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[J] = q(i);
		let a = r || i.props && i.props.type === "number";
		U(e, t ? "change" : "input", (t) => {
			t.target.composing || e[J](Ut(e.value, n, a));
		}), (n || a) && U(e, "change", () => {
			e.value = Ut(e.value, n, a);
		}), t || (U(e, "compositionstart", Vt), U(e, "compositionend", Ht), U(e, "change", Ht));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Y];
		delete e[Y], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[J](Ut(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[J] = q(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? E(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Wt = {
	deep: !0,
	created(e, t, n) {
		e[J] = q(n), U(e, "change", () => {
			let t = e._modelValue, n = Z(e), r = e.checked, i = e[J];
			if (p(t)) {
				let e = S(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (C(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Xt(e, r));
		});
	},
	mounted: Gt,
	beforeUpdate(e, t, n) {
		e[J] = q(n), Gt(e, t, n);
	}
};
function Gt(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (p(t)) i = S(t, r.props.value) > -1;
	else if (C(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = w(t, Xt(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Kt = {
	created(e, { value: t }, n) {
		e.checked = w(t, n.props.value), e[J] = q(n), U(e, "change", () => {
			e[J](Z(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[J] = q(r), t !== n && (e.checked = w(t, r.props.value));
	}
}, qt = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, U(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? E(Z(e)) : Z(e)), r = e.multiple, i = r ? C(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? p(i) ? t.slice() : t : i];
			try {
				e[J](i);
			} finally {
				fe(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[J] = q(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		Yt(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[J] = q(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && Jt(t, r[1], r[0]) || Yt(e, t, n);
	}
};
function Jt(e, t, n) {
	if (!n || p(e)) return w(e, t);
	if (C(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function Yt(e, t, n = !1) {
	let r = e.multiple, i = p(t);
	if (!r || i || C(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = Z(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : S(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(E(s));
			} else if (w(Z(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Z(e) {
	return "_value" in e ? e._value : e.value;
}
function Xt(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Zt = {
	created(e, t, n) {
		Q(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		Q(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		Q(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		Q(e, t, n, r, "updated");
	}
};
function Qt(e, t) {
	switch (e) {
		case "SELECT": return qt;
		case "TEXTAREA": return X;
		default: switch (t) {
			case "checkbox": return Wt;
			case "radio": return Kt;
			default: return X;
		}
	}
}
function Q(e, t, n, r, i) {
	let a = Qt(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
function $t() {
	X.getSSRProps = ({ value: e }) => ({ value: e }), Kt.getSSRProps = ({ value: e }, t) => {
		if (t.props && w(t.props.value, e)) return { checked: !0 };
	}, Wt.getSSRProps = ({ value: e }, t) => {
		if (p(e)) {
			if (t.props && S(e, t.props.value) > -1) return { checked: !0 };
		} else if (C(e)) {
			if (t.props && e.has(t.props.value)) return { checked: !0 };
		} else if (e) return { checked: !0 };
	}, Zt.getSSRProps = (e, t) => {
		if (typeof t.type != "string") return;
		let n = Qt(t.type.toUpperCase(), t.props && t.props.type);
		if (n.getSSRProps) return n.getSSRProps(e, t);
	};
}
var en = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], tn = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => en.some((n) => e[`${n}Key`] && !t.includes(n))
}, nn = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = tn[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, rn = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, an = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = l(n.key);
		if (t.some((e) => e === r || rn[e] === r)) return e(n);
	}));
}, on = /* @__PURE__ */ y({ patchProp: vt }, Ne), $, sn = !1;
function cn() {
	return $ ||= ee(on);
}
function ln() {
	return $ = sn ? $ : ve(on), sn = !0, $;
}
var un = ((...e) => {
	cn().render(...e);
}), dn = ((...e) => {
	ln().hydrate(...e);
}), fn = ((...e) => {
	let t = cn().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = hn(e);
		if (!r) return;
		let i = t._component;
		le(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, mn(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
}), pn = ((...e) => {
	let t = ln().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let t = hn(e);
		if (t) return n(t, !0, mn(t));
	}, t;
});
function mn(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function hn(e) {
	return T(e) ? document.querySelector(e) : e;
}
var gn = !1, _n = () => {
	gn || (gn = !0, $t(), Ye());
}, vn = /* @__PURE__ */ e({
	ZIndexKey: () => yn,
	useZIndex: () => bn
}), yn = Symbol("z-index-manager");
function bn(e, t = {}, n) {
	let r = n ?? _e(yn);
	if (!r) throw Error("ZIndexService must be provided before using useZIndex");
	let i = r, o = _(), c = _(), l = s(() => o.value === void 0 ? c.value : i.get(o.value)?.zIndex), u = s(() => o.value !== void 0 && i.isTop(o.value));
	function f() {
		o.value !== void 0 && (c.value = i.get(o.value)?.zIndex, i.close(o.value), o.value = void 0);
	}
	function p() {
		o.value !== void 0 && i.bringToFront(o.value);
	}
	return v([
		() => d(e),
		() => d(t).zIndex,
		() => d(t).interactive
	], ([e, t, n]) => {
		f(), e && (o.value = i.open({
			interactive: n,
			zIndex: t
		}));
	}, {
		flush: "sync",
		immediate: !0
	}), a(f), {
		bringToFront: p,
		close: f,
		isTop: u,
		zIndex: l
	};
}
var xn = /* @__PURE__ */ e({ PopupContainerKey: () => Sn }), Sn = Symbol("popup-container"), Cn = /* @__PURE__ */ e({ SFormContextKey: () => wn }), wn = Symbol("s-form-context"), Tn = /* @__PURE__ */ e({
	SFormFieldContextKey: () => En,
	useSFormFieldStatus: () => On
}), En = Symbol("s-form-field-status"), Dn = {
	errors: s(() => []),
	status: s(() => void 0),
	touched: s(() => !1),
	warnings: s(() => [])
};
function On() {
	return _e(En, Dn);
}
var kn = /* @__PURE__ */ e({
	provideInspectorLayout: () => jn,
	useInspectorLayout: () => Mn
}), An = Symbol("inspector-layout");
function jn(e) {
	o(An, e);
}
function Mn(e = "panel") {
	return _e(An, e);
}
export { Zt as A, vt as C, Et as D, Ze as E, an as F, nn as I, qt as M, X as N, Dt as O, Je as P, Ne as S, Ot as T, pn as _, En as a, dn as b, wn as c, jn as d, kn as f, fn as g, Tt as h, Sn as i, Kt as j, Wt as k, Cn as l, Mt as m, vn as n, Tn as o, Ie as p, xn as r, yn as s, Mn as t, bn as u, St as v, un as w, _n as x, Ct as y };
