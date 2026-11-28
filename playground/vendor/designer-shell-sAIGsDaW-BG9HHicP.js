import { $ as e, $t as t, A as n, Bt as r, C as i, Cn as a, Ct as o, D as s, Dt as c, E as l, Et as u, F as d, Ft as f, G as p, Gt as m, H as h, Ht as g, I as _, J as v, Jt as y, K as b, Kt as x, L as S, Lt as C, M as w, Mt as T, N as E, Nt as D, O, Ot as ee, Pt as k, Q as A, Qt as te, R as j, Sn as ne, St as re, Tn as ie, Tt as ae, U as oe, Ut as se, V as ce, Vt as le, W as ue, Xt as de, Y as fe, Yt as pe, Z as me, Zt as he, _t as ge, a as _e, an as ve, at as ye, b as be, bt as xe, c as Se, cn as Ce, ct as we, d as Te, dn as Ee, dt as M, en as De, et as Oe, f as ke, fn as Ae, ft as je, g as N, gn as Me, gt as Ne, h as Pe, hn as Fe, ht as Ie, in as Le, it as Re, j as ze, jt as Be, k as Ve, kt as He, l as Ue, ln as We, lt as Ge, m as Ke, mn as qe, mt as Je, nn as Ye, nt as Xe, o as Ze, on as Qe, ot as $e, p as et, pn as tt, pt as nt, q as rt, qt as it, r as at, rn as ot, rt as st, s as ct, sn as lt, st as ut, tn as dt, tt as ft, u as pt, un as mt, ut as ht, v as gt, vn as _t, vt, w as yt, wn as bt, wt as xt, x as St, xn as Ct, xt as wt, y as Tt, yn as Et, yt as Dt, z as Ot, zt as kt } from "./presets-EnVfxsea-CWOy8cuS.js";
import { a as At, i as jt, n as Mt, o as Nt, r as Pt, s as Ft, t as It } from "./standalone-_sW4GIDq-BM9OCUYV.js";
import { $ as Lt, $n as Rt, An as zt, Ao as Bt, Ar as Vt, As as Ht, B as Ut, Bi as Wt, Bs as P, C as Gt, Co as F, Ct as Kt, Da as I, Dn as qt, Ds as L, E as Jt, Ea as R, Fa as z, Fn as Yt, Ft as Xt, Gr as Zt, Hs as B, Ia as V, Ii as Qt, In as $t, Jn as en, Jr as tn, Jt as nn, Ka as rn, Li as H, Ln as an, Lr as on, Ls as U, Mn as sn, No as cn, Oa as W, Oi as ln, Or as un, Os as dn, Ot as fn, P as pn, Ps as mn, Q as hn, Qo as gn, Qr as _n, R as vn, Ra as G, Rr as yn, Rt as bn, So as xn, Ss as Sn, T as Cn, Ta as K, Ti as wn, Tn, To as En, Tr as Dn, Ts as On, Uo as kn, Us as q, Vi as An, Vr as jn, Wn as Mn, Wo as Nn, X as Pn, Xr as Fn, Ya as In, Yt as Ln, Zn as Rn, Zo as J, Zr as zn, _o as Bn, _r as Vn, aa as Hn, an as Un, at as Wn, bi as Gn, bn as Kn, bt as qn, c as Jn, ci as Yn, co as Xn, di as Zn, dn as Qn, dr as $n, ei as er, et as tr, fi as nr, fn as rr, fo as ir, fr as ar, gn as or, gr as sr, ha as Y, hi as cr, ii as lr, is as ur, ji as dr, jo as fr, jr as pr, ka as X, ko as Z, kt as mr, la as Q, li as hr, ln as gr, lo as _r, lt as vr, nn as yr, ns as $, o as br, oa as xr, on as Sr, oo as Cr, p as wr, pn as Tr, po as Er, ro as Dr, sa as Or, si as kr, sn as Ar, sr as jr, st as Mr, t as Nr, ti as Pr, tn as Fr, tr as Ir, uo as Lr, vn as Rr, vr as zr, wn as Br, wr as Vr, xn as Hr, ya as Ur, yn as Wr, ys as Gr, zn as Kr, zr as qr } from "./inspector-layout-cGpQdLuc-D-IjKeo4.js";
import { t as Jr } from "./document-unload-guard-DiyKeiVr-B4K5PY0m.js";
// ../node_modules/.pnpm/tdesign-icons-vue-next@0.4.12_vue@3.5.45_typescript@5.9.3_/node_modules/tdesign-icons-vue-next/esm/components/caret-right-small.js
function Yr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Xr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Yr(Object(n), !0).forEach(function(t) {
			ie(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Zr = {
	tag: "svg",
	attrs: {
		fill: "none",
		viewBox: "0 0 24 24",
		width: "1em",
		height: "1em"
	},
	children: [{
		tag: "path",
		attrs: {
			id: "caret-right-small",
			fill: "props.strokeColor1",
			d: "M14.9999 12L9.49988 6.5L9.49988 17.5L14.9999 12Z"
		}
	}]
}, Qr = G({
	name: "CaretRightSmallIcon",
	props: {
		size: { type: String },
		onClick: { type: Function },
		fillColor: { type: [Array, String] },
		strokeColor: { type: [Array, String] },
		strokeWidth: { type: Number }
	},
	setup(e, t) {
		var { attrs: n } = t, r = kn, i = (r ? r() : `${rn()?.uid ?? "unknown"}`).replace(/[^a-zA-Z0-9_]/g, ""), o = K(() => e.size), s = K(() => e.strokeColor ? Array.isArray(e.strokeColor) ? e.strokeColor[0] : e.strokeColor : "currentColor"), c = K(() => e.strokeColor ? Array.isArray(e.strokeColor) ? e.strokeColor[1] ?? e.strokeColor[0] : e.strokeColor : "currentColor"), l = K(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[0] : e.fillColor : "transparent"), u = K(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[1] ?? e.fillColor[0] : e.fillColor : "transparent"), d = K(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[0] : e.fillColor : "currentColor"), { className: f, style: p } = a(o), m = K(() => [
			"t-icon",
			"t-icon-caret-right-small",
			f.value
		]), h = K(() => Xr(Xr({ fill: "none" }, p.value), n.style)), g = K(() => ({
			class: m.value,
			style: h.value,
			onClick: (t) => e.onClick?.call(e, { e: t }),
			strokeColor1: s.value,
			strokeColor2: c.value,
			fillColor1: l.value,
			fillColor2: u.value,
			strokeWidth: e.strokeWidth || 2,
			filledColor: d.value,
			iconId: "caret-right-small",
			overlapMaskInstanceId: i
		}));
		return () => bt(Zr, g.value);
	}
}), $r = 200;
function ei(e, t, n, r) {
	var i = -1, a = Re, o = !0, s = e.length, c = [], l = t.length;
	if (!s) return c;
	n && (t = ge(t, ae(n))), r ? (a = y, o = !1) : t.length >= $r && (a = ee, o = !1, t = new dt(t));
	outer: for (; ++i < s;) {
		var u = e[i], d = n == null ? u : n(u);
		if (u = r || u !== 0 ? u : 0, o && d === d) {
			for (var f = l; f--;) if (t[f] === d) continue outer;
			c.push(u);
		} else a(t, d, r) || c.push(u);
	}
	return c;
}
var ti = He(function(e, t) {
	return m(e) ? ei(e, T(t, 1, m, !0)) : [];
}), ni = 0;
function ri(e) {
	var t = ++ni;
	return oe(e) + t;
}
var ii = {
	closeBtn: {
		type: [
			String,
			Boolean,
			Function
		],
		default: void 0
	},
	content: { type: [String, Function] },
	duration: {
		type: Number,
		default: 3e3
	},
	icon: {
		type: [Boolean, Function],
		default: !0
	},
	theme: {
		type: String,
		default: "info",
		validator: function(e) {
			return !e || [
				"info",
				"success",
				"warning",
				"error",
				"question",
				"loading"
			].includes(e);
		}
	},
	onClose: Function,
	onCloseBtnClick: Function,
	onDurationEnd: Function
}, ai = "32px", oi = [
	"info",
	"success",
	"warning",
	"error",
	"question",
	"loading"
], si = Object.keys({
	center: {
		left: "50%",
		top: "50%",
		transform: "translateX(-50%) translateY(-50%)"
	},
	left: {
		left: ai,
		top: "50%",
		transform: "translateY(-50%)"
	},
	bottom: {
		bottom: ai,
		left: "50%",
		transform: "translateX(-50%)"
	},
	right: {
		right: ai,
		top: "50%",
		transform: "translateY(-50%)"
	},
	top: {
		top: ai,
		left: "50%",
		transform: "translateX(-50%)"
	},
	"top-left": {
		left: ai,
		top: ai
	},
	"top-right": {
		right: ai,
		top: ai
	},
	"bottom-left": {
		left: ai,
		bottom: ai
	},
	"bottom-right": {
		right: ai,
		bottom: ai
	}
}), ci = {
	duration: 200,
	easing: "linear"
};
function li(e, t) {
	for (var n = Object.keys(t), r = 0; r < n.length; r += 1) {
		var i = n[r];
		e.style[i] = t[i];
	}
}
function ui(e, t, n) {
	return si.includes(e) ? [
		"top-left",
		"left",
		"bottom-left"
	].includes(e) ? [{
		opacity: 0,
		marginLeft: `-${t}px`
	}, {
		opacity: 1,
		marginLeft: "0"
	}] : [
		"top-right",
		"right",
		"bottom-right"
	].includes(e) ? [{
		opacity: 0,
		marginRight: `-${t}px`
	}, {
		opacity: 1,
		marginRight: "0"
	}] : ["top", "center"].includes(e) ? [{
		opacity: 0,
		marginTop: `-${n}px`
	}, {
		opacity: 1,
		marginTop: "0"
	}] : ["bottom"].includes(e) ? [{
		opacity: 0,
		transform: `translate3d(0, ${n}px, 0)`
	}, {
		opacity: 1,
		transform: "translate3d(0, 0, 0)"
	}] : null : null;
}
function di(e, t) {
	return si.includes(e) ? [
		"bottom-left",
		"bottom",
		"bottom-right"
	].includes(e) ? [{
		opacity: 1,
		marginTop: "0px"
	}, {
		opacity: 0,
		marginTop: `${t}px`
	}] : [{
		opacity: 1,
		marginTop: "0px"
	}, {
		opacity: 0,
		marginTop: `-${t}px`
	}] : null;
}
function fi(e, t) {
	var n;
	if (e) {
		var r = ui(t, e?.offsetWidth || 0, e?.offsetHeight || 0);
		if (r) {
			var i = r[r.length - 1];
			li(e, i), (n = e.animate) == null || n.call(e, r, ci);
		}
	}
}
function pi(e, t, n) {
	if (e) {
		var r = di(t, e.offsetHeight || 0);
		if (!r) n();
		else {
			var i = r[r.length - 1];
			li(e, i);
			var a = e.animate && e.animate(r, ci);
			a ? a.onfinish = function() {
				e.style.display = "none", n();
			} : (e.style.display = "none", n());
		}
	}
}
function mi(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function hi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? mi(Object(n), !0).forEach(function(t) {
			M(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mi(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var gi = G({
	name: "TMessage",
	props: hi(hi({}, ii), {}, {
		placement: String,
		className: String
	}),
	setup: function(e, t) {
		var n = t.slots, r = t.expose, i = Dt("message"), a = Be({
			InfoCircleFilledIcon: tt,
			CheckCircleFilledIcon: Ct,
			ErrorCircleFilledIcon: Fe,
			HelpCircleFilledIcon: qe,
			CloseIcon: Me
		}), o = a.InfoCircleFilledIcon, s = a.CheckCircleFilledIcon, c = a.ErrorCircleFilledIcon, l = a.HelpCircleFilledIcon, u = a.CloseIcon, d = Dt(), f = de(), p = D(), m = L(null), h = L(null), g = K(function() {
			var t = {};
			return oi.forEach(function(n) {
				return t[`${d.value}-is-${n}`] = e.theme === n;
			}), [
				i.value,
				t,
				M({}, `${d.value}-is-closable`, e.closeBtn || n.closeBtn),
				e.className
			];
		}), _ = function(t) {
			var n, r;
			(n = e.onClose) == null || n.call(e, {
				trigger: "close-click",
				e: t
			}), (r = e.onCloseBtnClick) == null || r.call(e, { e: t });
		}, v = function() {
			e.duration && clearTimeout(h.value);
		}, y = function() {
			e.duration && (h.value = Number(setTimeout(function() {
				v();
				var t = m.value;
				pi(t, e.placement, function() {
					var t, n;
					(t = e.onClose) == null || t.call(e, { trigger: "duration-end" }), (n = e.onDurationEnd) == null || n.call(e);
				});
			}, e.duration)));
		}, b = function() {
			var e = V(u, null, null);
			return V("span", {
				class: `${i.value}__close`,
				onClick: _
			}, [f("closeBtn", e)]);
		}, x = function() {
			if (e.icon !== !1) {
				if (ye(e.icon)) return e.icon(In);
				if (n.icon) return n.icon(null);
				var t = {
					info: o,
					success: s,
					warning: c,
					error: c,
					question: l,
					loading: ut
				}[e.theme];
				return V(t, null, null);
			}
		};
		return ir(function() {
			e.duration && y();
		}), Bn(function() {
			var t = m.value;
			fi(t, e.placement);
		}), r({ close: _ }), function() {
			return V("div", {
				ref: m,
				class: g.value,
				onMouseenter: v,
				onMouseleave: y
			}, [
				x(),
				p("content", "default"),
				b()
			]);
		};
	}
}), _i = {
	default: { type: Function },
	destroyOnHide: {
		type: Boolean,
		default: !0
	},
	disabled: Boolean,
	draggable: {
		type: Boolean,
		default: !0
	},
	label: { type: [String, Function] },
	lazy: Boolean,
	panel: { type: [String, Function] },
	removable: Boolean,
	value: { type: [String, Number] },
	onRemove: Function
}, vi = G({
	name: "TTabPanel",
	props: _i,
	setup: function(e) {
		var t = Dt("tab-panel"), n = C().STATUS, r = D();
		kt();
		var i = Dr("tabs"), a = K(function() {
			return e.value === i.value.value;
		}), o = L(!e.lazy || a.value);
		J(a, function() {
			a.value ? o.value ||= !0 : e.destroyOnHide && (o.value = !1);
		}, { immediate: !0 });
		var s = K(function() {
			return [t.value, M({}, n.value.hidden, !a.value)];
		});
		return function() {
			return o.value ? V("div", {
				key: e.value,
				class: s.value
			}, [r("default", "panel")]) : null;
		};
	}
}), yi = {
	action: { type: [String, Function] },
	addable: Boolean,
	disabled: Boolean,
	dragSort: Boolean,
	list: { type: Array },
	placement: {
		type: String,
		default: "top",
		validator: function(e) {
			return !e || [
				"left",
				"top",
				"bottom",
				"right"
			].includes(e);
		}
	},
	scrollPosition: {
		type: String,
		default: "auto",
		validator: function(e) {
			return !e || [
				"auto",
				"start",
				"center",
				"end"
			].includes(e);
		}
	},
	size: {
		type: String,
		default: "medium",
		validator: function(e) {
			return !e || ["medium", "large"].includes(e);
		}
	},
	theme: {
		type: String,
		default: "normal",
		validator: function(e) {
			return !e || ["normal", "card"].includes(e);
		}
	},
	value: {
		type: [String, Number],
		default: void 0
	},
	modelValue: {
		type: [String, Number],
		default: void 0
	},
	defaultValue: { type: [String, Number] },
	onAdd: Function,
	onChange: Function,
	onDragSort: Function,
	onRemove: Function
}, bi = G({
	name: "TTabNavItem",
	props: {
		index: Number,
		active: { type: Boolean },
		theme: yi.theme,
		size: yi.size,
		placement: yi.placement,
		label: { type: null },
		disabled: _i.disabled,
		removable: _i.removable,
		value: _i.value,
		draggable: _i.draggable,
		onClick: Function,
		onTabRemove: Function,
		onTabPanelRemove: Function
	},
	setup: function(e) {
		var t = L();
		wt(t);
		var n = Dt("tabs__nav-item"), r = Be({ CloseIcon: Me }).CloseIcon, i = Dt(), a = C(), o = a.STATUS, s = a.SIZE, c = function(t) {
			var n, r = t.e;
			r && r.stopPropagation(), e.onTabRemove({
				e: r,
				value: e.value,
				index: e.index
			}), (n = e.onTabPanelRemove) == null || n.call(e, {
				e: r,
				value: e.value
			});
		}, l = function(t) {
			e.disabled || e.onClick(t);
		}, u = K(function() {
			return M(M(M(M(M(M(M(M({}, n.value, !0), `${i.value}-tabs__nav--card`, e.theme === "card"), o.value.disabled, e.disabled), o.value.active, e.active), `${i.value}-is-left`, e.placement === "left"), `${i.value}-is-right`, e.placement === "right"), s.value.medium, e.size === "medium"), s.value.large, e.size === "large");
		}), d = function() {
			return e.removable && !e.disabled ? V("span", {
				onClick: function(e) {
					return c({ e });
				},
				class: "remove-btn"
			}, [V(r, null, null)]) : null;
		}, f = function() {
			return V("div", {
				class: u.value,
				onClick: l,
				ref: t,
				draggable: e.draggable
			}, [V("span", { class: `${n.value}-text-wrapper` }, [e.label]), d()]);
		}, p = function() {
			return V("div", {
				class: u.value,
				onClick: l,
				draggable: e.draggable
			}, [V("div", {
				class: [`${n.value}-wrapper`, M(M({}, o.value.disabled, e.disabled), o.value.active, e.active)],
				ref: t
			}, [V("span", { class: `${n.value}-text-wrapper` }, [e.label])]), d()]);
		};
		return function() {
			return e.theme === "card" ? f() : p();
		};
	}
}), xi = G({
	props: {
		navs: { type: Array },
		placement: yi.placement,
		value: yi.value
	},
	setup: function(e) {
		var n = Dt("tabs"), r = Dt(), i = L(), a = K(function() {
			return [`${n.value}__bar`, `${r.value}-is-${e.placement}`];
		}), o = L(null), s = function() {
			for (var n = ["left", "right"].includes(e.placement.toLowerCase()) ? ["height", "top"] : ["width", "left"], r = t(n, 2), i = r[0], a = r[1], o = 0, s = 0; s < e.navs.length; s++) {
				var c;
				if (e.navs[s].props.value === e.value) break;
				if ((c = e.navs[s]) != null && c.el) {
					var l = getComputedStyle(e.navs[s].el)[i];
					o += parseFloat(l);
				}
			}
			return e.navs[s] ? M(M({}, a, `${o}px`), i, e.navs[s].el ? getComputedStyle(e.navs[s].el)[i] : "0px") : {};
		}, c = function() {
			return o.value = s();
		};
		return Bn(function() {
			Lr(function() {
				c();
			});
		}), J([
			function() {
				return e.navs;
			},
			function() {
				return e.value;
			},
			function() {
				return e.placement;
			}
		], function() {
			Lr(function() {
				c();
			});
		}), fe(i, ot(function() {
			c();
		}, 35)), function() {
			return V("div", {
				class: a.value,
				style: o.value,
				ref: i
			}, null);
		};
	}
}), Si = function(e) {
	return e?.offsetWidth || 0;
}, Ci = function(e) {
	return e?.offsetLeft || 0;
};
function wi(e, t, n) {
	var r = e.navsContainer, i = e.activeTab, a = e.rightOperations, o = e.leftOperations, s = Si(i), c = Si(r), l = Ci(i), u = Si(a), d = Si(o);
	if (n === "auto") {
		if (l - d < t) return l - d;
		if (l + s > t + c - u) return l + s - c + u;
	} else if (n === "start") return l - d;
	else if (n === "center") return l + (s - c) / 2;
	else if (n === "end") return l + s - c + u;
	return t;
}
function Ti(e, t, n) {
	var r = e.navsContainer, i = e.activeTab, a = Si(r), o = Si(i), s = Math.abs(a - o);
	return n === "next" ? t + s : t - s;
}
function Ei(e) {
	var t = e.navsWrap, n = e.navsContainer, r = e.rightOperations, i = e.toRightBtn, a = Si(t), o = Si(n), s = Si(r), c = Si(i);
	return a - o + s - c;
}
function Di(e, t) {
	return Math.max(0, Math.min(e, t));
}
function Oi(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ki(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Oi(Object(n), !0).forEach(function(t) {
			M(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oi(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Ai = G({
	name: "TTabNav",
	resizeObserver: null,
	props: {
		theme: yi.theme,
		panels: {
			type: Array,
			default: function() {
				return [];
			}
		},
		action: [
			String,
			Object,
			Array,
			Boolean
		],
		value: yi.value,
		placement: yi.placement,
		scrollPosition: yi.scrollPosition,
		size: yi.size,
		disabled: yi.disabled,
		addable: yi.addable,
		onChange: yi.onChange,
		onAdd: yi.onAdd,
		onRemove: yi.onRemove,
		dragSort: yi.dragSort,
		onDragSort: yi.onDragSort
	},
	setup: function(e) {
		var t = Dt("tabs"), n = Be({
			ChevronLeftIcon: Et,
			ChevronRightIcon: _t,
			AddIcon: ne
		}), r = n.ChevronLeftIcon, i = n.ChevronRightIcon, a = n.AddIcon, o = Dt(), s = C().SIZE, c = L(0), l = L(), u = L(), d = L(), f = L(), p = L(), m = L(), h = L(0), g = K(function() {
			var t;
			return ["top", "bottom"].includes(e == null || (t = e.placement) == null ? void 0 : t.toLowerCase());
		}), _ = function() {
			return {
				navsContainer: l.value,
				navsWrap: u.value,
				leftOperations: d.value,
				rightOperations: f.value,
				toRightBtn: p.value,
				activeTab: m.value
			};
		}, v = K(function() {
			return ["left", "right"].includes(e.placement.toLowerCase());
		}), y = K(function() {
			return c.value > 1;
		}), b = K(function() {
			return c.value < h.value - 1;
		}), x = K(function() {
			return v.value ? {} : { transform: `translate3d(${-c.value}px, 0, 0)` };
		}), S = K(function() {
			return e.addable ? { "min-height": "48px" } : null;
		}), w = K(function() {
			return M(M(M({}, `${t.value}__btn`, !0), s.value.medium, e.size === "medium"), s.value.large, e.size === "large");
		}), T = K(function() {
			return ki(M({}, `${t.value}__btn--left`, !0), w.value);
		}), E = K(function() {
			return ki(M({}, `${t.value}__btn--right`, !0), w.value);
		}), D = K(function() {
			return ki(M({}, `${t.value}__add-btn`, !0), w.value);
		}), O = K(function() {
			return M(M(M(M({}, `${t.value}__nav-container`, !0), `${t.value}__nav--card`, e.theme === "card"), `${o.value}-is-${e.placement}`, !0), `${o.value}-is-addable`, e.addable);
		}), ee = K(function() {
			return M(M({}, `${t.value}__nav-scroll`, !0), `${o.value}-is-scrollable`, y.value || b.value);
		}), k = K(function() {
			return [
				`${t.value}__nav-wrap`,
				`${o.value}-is-smooth`,
				M({}, `${o.value}-is-vertical`, v.value)
			];
		}), A = function(e) {
			c.value = Di(e, h.value);
		}, te = function(e) {
			A(Ti(_(), c.value, e));
		}, j = function(e) {
			if (y.value || b.value) {
				e.preventDefault();
				var t = e.deltaX, n = e.deltaY;
				A(Math.abs(t) > Math.abs(n) ? c.value + t : c.value + n);
			}
		}, re = function() {
			setTimeout(function() {
				A(wi(_(), c.value, e.scrollPosition));
			}, 0);
		}, ie = function() {
			Lr(function() {
				h.value = Ei(_()), h.value - c.value <= 0 && A(h.value);
			});
		};
		J([function() {
			return e.placement;
		}, function() {
			return e.panels;
		}], ie), J([function() {
			return e.scrollPosition;
		}], re), rt(ot(ie), l.value);
		var ae = function(t) {
			var n;
			(n = e.onAdd) == null || n.call(e, { e: t });
		}, oe = function(t, n) {
			var r = n.value;
			if (n.disabled || e.value === r) return !1;
			e.onChange(r);
		}, se = function(t) {
			var n = t.e, r = t.value, i = t.index;
			e.onRemove({
				e: n,
				value: r,
				index: i
			});
		}, ce = function(t) {
			t != null && t.$el && t?.value === e.value && m.value !== t.$el && (m.value = t.$el, re());
		}, le = mt(e).setNavsWrap;
		Bn(function() {
			le(u.value), ie(), re();
		});
		var ue = function() {
			return e.panels.map(function(t, n) {
				var r, i = t != null && (r = t.children) != null && r.label ? t.children.label() : ye(t.label) ? t.label(In) : t.label || `选项卡${n + 1}`, a = e.dragSort;
				return a && t.draggable === !1 && (a = t.draggable), V(bi, {
					ref: ce,
					draggable: a,
					key: t.value,
					index: n,
					theme: e.theme,
					size: e.size,
					placement: e.placement,
					label: i,
					active: t.value === e.value,
					disabled: e.disabled || t.disabled,
					removable: t.removable,
					value: t.value,
					onClick: function(e) {
						return oe(e, t);
					},
					onTabRemove: se,
					onTabPanelRemove: t.onRemove
				}, null);
			});
		}, de = function() {
			return [V("div", {
				ref: d,
				class: [`${t.value}__operations`, `${t.value}__operations--left`]
			}, [V(Wt, {
				name: "fade",
				mode: "out-in",
				appear: !0
			}, { default: function() {
				return [y.value ? V("div", {
					class: T.value,
					onClick: function() {
						return te("prev");
					}
				}, [V(r, null, null)]) : null];
			} })]), V("div", {
				ref: f,
				class: [`${t.value}__operations`, `${t.value}__operations--right`]
			}, [
				V(Wt, {
					name: "fade",
					mode: "out-in",
					appear: !0
				}, { default: function() {
					return [b.value ? V("div", {
						ref: p,
						class: E.value,
						onClick: function() {
							return te("next");
						}
					}, [V(i, null, null)]) : null];
				} }),
				e.addable ? V("div", {
					class: D.value,
					onClick: ae
				}, [V(a, null, null)]) : null,
				g.value && e.action
			])];
		}, fe = function() {
			var t = ue();
			return V("div", { class: O.value }, [V("div", {
				class: ee.value,
				onWheel: j
			}, [V("div", {
				ref: u,
				class: k.value,
				style: x.value
			}, [e.theme !== "card" && V(xi, {
				placement: e.placement,
				value: e.value,
				navs: t
			}, null), t])])]);
		};
		return function() {
			return V("div", {
				ref: l,
				class: [`${t.value}__nav`],
				style: S.value
			}, [de(), fe()]);
		};
	}
}), ji = G({
	name: "TTabs",
	props: yi,
	setup: function(e) {
		var n = Dt("tabs"), r = Dt(), i = de(), a = mn(e), o = a.value, s = a.modelValue, c = a.onChange, l = xt(o, s, e.defaultValue ?? "", c), u = t(l, 2), d = u[0], f = u[1];
		En("tabs", { value: d });
		var p = function(t) {
			var n;
			(n = e.onAdd) == null || n.call(e, { e: t.e });
		}, m = function(e) {
			f(e);
		}, h = function(t) {
			var n, r = t.e, i = t.value, a = t.index;
			(n = e.onRemove) == null || n.call(e, {
				value: i,
				index: a,
				e: r
			});
		}, g = function() {
			var e = i("default");
			if (!e) return [];
			var t = function(e) {
				return e.map(function(e) {
					return e.children && Je(e.children) ? t(e.children) : e;
				}).flat().filter(function(e) {
					return e.type.name === "TTabPanel";
				});
			};
			return t(e);
		}, _ = function() {
			var t, n = ((t = e.list) != null && t.length ? e.list : g()) || [], a = i("action"), o = n.map(function(e) {
				var t = e;
				return e.props && Object.keys(e.props).forEach(function(n) {
					t[n] = e.props[n];
				}), t;
			}), s = {
				theme: e.theme,
				value: d.value,
				size: e.size,
				disabled: e.disabled,
				placement: e.placement,
				scrollPosition: e.scrollPosition,
				addable: e.addable,
				panels: o,
				dragSort: e.dragSort,
				action: a
			};
			return V("div", { class: M(M({}, `${r.value}-tabs__header`, !0), `${r.value}-is-${e.placement}`, !0) }, [V(Ai, _r(s, {
				onDragSort: e.onDragSort,
				onChange: m,
				onAdd: p,
				onRemove: h
			}), null)]);
		}, v = function() {
			var t, n = g();
			if ((t = e.list) != null && t.length) return e.list.map(function(e) {
				return V(vi, _r(e, { onRemove: h }), null);
			});
			if (n && n.length) return V("div", { class: [`${r.value}-tabs__content`] }, [n]);
		};
		return function() {
			return V("div", { class: [n.value] }, [e.placement === "bottom" ? [v(), _()] : [_(), v()]]);
		};
	}
}), Mi = Xe(ji), Ni = Xe(vi), Pi = "__tdesign_tree-node__", Fi = /*#__PURE__*/ function() {
	function e(t) {
		st(this, e), M(this, Pi, void 0), this[Pi] = t;
	}
	return De(e, [
		{
			key: "value",
			get: function() {
				return this[Pi].value;
			}
		},
		{
			key: "label",
			get: function() {
				return this[Pi].label;
			}
		},
		{
			key: "data",
			get: function() {
				return this[Pi].data;
			}
		},
		{
			key: "actived",
			get: function() {
				return this[Pi].actived;
			}
		},
		{
			key: "expanded",
			get: function() {
				return this[Pi].expanded;
			}
		},
		{
			key: "checked",
			get: function() {
				return this[Pi].checked;
			}
		},
		{
			key: "indeterminate",
			get: function() {
				return this[Pi].indeterminate;
			}
		},
		{
			key: "loading",
			get: function() {
				return this[Pi].loading;
			}
		},
		{
			key: "disabled",
			get: function() {
				return this[Pi].isDisabled();
			}
		},
		{
			key: "level",
			get: function() {
				return this.getLevel();
			}
		},
		{
			key: "getLevel",
			value: function() {
				return this[Pi].getLevel();
			}
		},
		{
			key: "getIndex",
			value: function() {
				return this[Pi].getIndex();
			}
		},
		{
			key: "isFirst",
			value: function() {
				return this[Pi].isFirst();
			}
		},
		{
			key: "isLast",
			value: function() {
				return this[Pi].isLast();
			}
		},
		{
			key: "isLeaf",
			value: function() {
				return this[Pi].isLeaf();
			}
		},
		{
			key: "insertBefore",
			value: function(e) {
				return this[Pi].insertBefore(e);
			}
		},
		{
			key: "insertAfter",
			value: function(e) {
				return this[Pi].insertAfter(e);
			}
		},
		{
			key: "appendData",
			value: function(e) {
				return this[Pi].append(e);
			}
		},
		{
			key: "getPath",
			value: function() {
				return this[Pi].getPath().map(function(e) {
					return e.getModel();
				});
			}
		},
		{
			key: "getParent",
			value: function() {
				return this[Pi].parent?.getModel();
			}
		},
		{
			key: "getParents",
			value: function() {
				return this[Pi].getParents().map(function(e) {
					return e.getModel();
				});
			}
		},
		{
			key: "getRoot",
			value: function() {
				return this[Pi].getRoot()?.getModel();
			}
		},
		{
			key: "getSiblings",
			value: function() {
				return this[Pi].getSiblings().map(function(e) {
					return e.getModel();
				});
			}
		},
		{
			key: "getChildren",
			value: function(e) {
				var t = this[Pi], n = !1, r = t.children;
				if (Array.isArray(r)) {
					if (r.length > 0) {
						if (e) {
							var i = t.walk();
							i.shift(), n = i.map(function(e) {
								return e.getModel();
							});
						} else n = r.map(function(e) {
							return e.getModel();
						});
					} else n = !1;
				} else se(r) && (n = r);
				return n;
			}
		},
		{
			key: "remove",
			value: function(e) {
				var t = this[Pi];
				if (vt(e)) t.remove();
				else {
					var n = t.tree.getNode(e);
					n ? n.getParents().map(function(e) {
						return e.value;
					}).indexOf(t.value) < 0 ? me.warnOnce("Tree", `\`${e}\` is not a childNode of current node`) : n.remove() : me.warnOnce("Tree", `\`${e}\` is not exist`);
				}
			}
		},
		{
			key: "setData",
			value: function(e) {
				var t = this[Pi], n = [
					"value",
					"label",
					"disabled"
				], r = c(e, ["children"].concat(n)), i = t.tree.config.keys;
				n.forEach(function(t) {
					var n = le(e, i?.[t] || t);
					vt(n) || (r[t] = n);
				}), Object.assign(t.data, r), Object.assign(t, r), t.update();
			}
		}
	]);
}();
function Ii(e) {
	return new Fi(e);
}
function Li(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ri(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Li(Object(n), !0).forEach(function(t) {
			M(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Li(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var zi = Object.prototype.hasOwnProperty, Bi = {
	expandMutex: null,
	activable: null,
	checkable: null,
	draggable: null,
	loading: !1
}, Vi = Object.keys(Bi), Hi = [].concat(Vi, [
	"actived",
	"expanded",
	"checked"
]), Ui = "__tdesign_id__", Wi = /*#__PURE__*/ function() {
	function e(t, n, r) {
		var i = this;
		st(this, e), M(this, "tree", void 0), M(this, Ui, void 0), M(this, "value", void 0), M(this, "label", void 0), M(this, "data", void 0), M(this, "parent", void 0), M(this, "children", void 0), M(this, "model", void 0), M(this, "vmIsLeaf", void 0), M(this, "vmIsFirst", void 0), M(this, "vmIsLast", void 0), M(this, "vmIsRest", void 0), M(this, "vmIsLocked", void 0), M(this, "expanded", void 0), M(this, "expandMutex", void 0), M(this, "actived", void 0), M(this, "activable", void 0), M(this, "checkable", void 0), M(this, "vmCheckable", void 0), M(this, "checked", void 0), M(this, "indeterminate", void 0), M(this, "disabled", void 0), M(this, "disableManually", void 0), M(this, "draggable", void 0), M(this, "visible", void 0), M(this, "level", void 0), M(this, "loading", void 0), this.data = n, this.tree = t;
		var a = t.config || {}, o = a.prefix || "t", s = a.keys || {}, c = s.children || "children", l = s.label || "label", u = s.value || "value";
		this.model = null, this.children = null, this.level = 0, this.vmCheckable = !1, this.vmIsLeaf = !1, this.vmIsFirst = !1, this.vmIsLast = !1, this.vmIsRest = !1, this.vmIsLocked = !1, this.visible = !1, this.actived = !1, this.checked = !1, this.indeterminate = !1, this.loading = !1, this.expanded = a.expandAll, this.activable = null, this.checkable = null, this.expandMutex = null, this.draggable = null, this.disableManually = null, this[Ui] = ri(o), this.value = ft(le(n, u)) ? this[Ui] : le(n, u);
		var d = t.nodeMap, f = t.privateMap;
		d.get(this.value) && me.warn("Tree", `Dulplicate value: ${this.value}`), d.set(this.value, this), f.set(this[Ui], this), this.label = le(n, l) || "";
		var p = n[c];
		p === !0 && (this.children = p), this.parent = r && r instanceof e ? r : null, Hi.forEach(function(e) {
			n[e] !== void 0 && (i[e] = n[e]);
		}), this.initActived(), this.initExpanded(), Array.isArray(p) ? this.append(p) : p === !0 && !a.lazy && this.loadChildren(), this.isLeaf() && (this.expanded = !1, this.tree.expandedMap.delete(this.value)), this.initChecked(), this.updateChecked(), this.update(), t.reflow(this);
	}
	return De(e, [
		{
			key: "initChecked",
			value: function() {
				var e = this.tree, t = this.value, n = this.parent, r = e.checkedMap, i = e.config.checkStrictly;
				this.checked && r.set(t, !0), !i && n != null && n.checked && !this.isDisabled() && r.set(t, !0);
			}
		},
		{
			key: "initExpanded",
			value: function() {
				var e = this.tree, t = this.expanded, n = e.config;
				p(n.expandLevel) && this.getLevel() < n.expandLevel && (e.expandedMap.set(this.value, !0), t = !0), this.children === !0 && n.lazy && (t = !1), t ? e.expandedMap.set(this.value, !0) : e.expandedMap.delete(this.value), this.expanded = t;
			}
		},
		{
			key: "initActived",
			value: function() {
				var e = this.tree;
				this.actived && this.isActivable() && e.activedMap.set(this.value, !0);
			}
		},
		{
			key: "append",
			value: function(t) {
				var n = this, r = [];
				if (Array.isArray(t) ? r.push.apply(r, A(t)) : r.push(t), !(r.length <= 0)) {
					var i = this.isLeaf();
					Array.isArray(this.children) || (this.children = []);
					var a = this.children, o = this.tree;
					r.forEach(function(t) {
						var r = null;
						t instanceof e ? (r = t, r.appendTo(n.tree, n)) : (r = new e(n.tree, t, n), a.push(r));
					}), i && o.config.expandAll && !this.isLeaf() && (o.expandedMap.set(this.value, !0), this.expanded = !0), o.reflow(this), this.updateRelated();
				}
			}
		},
		{
			key: "appendTo",
			value: function(t, n, r) {
				var i = this, a = n, o = -1;
				if (p(r) && (o = r), (a?.getParents() || []).some(function(e) {
					return e === i;
				})) throw Error("无法将父节点插入到子节点");
				if (a === this) throw Error("无法将节点插入到本节点");
				if (Array.isArray(a?.children)) {
					var s = a?.children[o];
					if (s && s === this) return;
				}
				var c = null;
				if (a instanceof e ? (Array.isArray(a?.children) || (a.children = []), c = n.children) : c = t.children, !Array.isArray(c)) throw Error("无法插入到目标位置，可插入的节点列表不存在");
				var l = c.length, u = this.getIndex();
				if (this.remove(), p(r)) {
					var d = r;
					a === this.parent && c.length < l && u <= d && --d, c.splice(d, 0, this);
				} else c.push(this);
				this.parent = a, this.walk().forEach(function(e) {
					var n = e;
					n.tree = t, t.nodeMap.set(n.value, n), t.privateMap.set(n[Ui], n), n.expanded && t.expandedMap.set(n.value, !0);
				}), (a?.walk() || t.children.map(function(e) {
					return e.walk();
				}).flat()).forEach(function(e) {
					e.update(), e.updateChecked();
				}), t.reflow();
			}
		},
		{
			key: "insert",
			value: function(t, n) {
				var r = this.tree, i = this.parent, a = this.getSiblings(), o = null;
				t instanceof e ? (o = t, o.appendTo(r, i, n)) : t && (o = new e(r, t, i), p(n) && a.splice(n, 0, o), a.forEach(function(e) {
					e.update();
				})), r.reflow();
			}
		},
		{
			key: "insertBefore",
			value: function(e) {
				var t = this.getIndex();
				this.insert(e, t);
			}
		},
		{
			key: "insertAfter",
			value: function(e) {
				var t = this.getIndex();
				this.insert(e, t + 1);
			}
		},
		{
			key: "remove",
			value: function() {
				var e = this.tree, t = this.walk(), n = this.getSiblings(), r = this.getIndex();
				Array.isArray(n) && n.splice(r, 1), t.forEach(function(e) {
					e.clean();
				}), n.forEach(function(e) {
					e.update();
				}), this.updateParents(), e.reflow();
			}
		},
		{
			key: "clean",
			value: function() {
				var e = this.tree, t = this.value;
				e.activedMap.delete(t), e.checkedMap.delete(t), e.expandedMap.delete(t), e.nodeMap.delete(t), e.filterMap.delete(t), e.privateMap.delete(this[Ui]);
			}
		},
		{
			key: "loadChildren",
			value: function() {
				var e = Oe(/*#__PURE__*/ f.mark(function e() {
					var t, n;
					return f.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (t = le(this, "tree.config") || {}, this.children !== !0 || this.loading || !ye(t.load)) {
									e.next = 2;
									break;
								}
								return this.loading = !0, this.update(), n = [], e.next = 1, t.load(this);
							case 1: n = e.sent, this.tree.emit("load", {
								node: this,
								data: n
							}), this.loading = !1, Array.isArray(n) && n.length > 0 ? this.append(n) : this.children = !1, this.update();
							case 2:
							case "end": return e.stop();
						}
					}, e, this);
				}));
				function t() {
					return e.apply(this, arguments);
				}
				return t;
			}()
		},
		{
			key: "set",
			value: function(e) {
				var t = this, n = this.tree;
				Object.keys(e).forEach(function(n) {
					(zi.call(Bi, n) || n === "label") && (t[n] = e[n]), n === "disabled" && t.setDisabled(e[n]);
				}), n.updated(this);
			}
		},
		{
			key: "getParent",
			value: function() {
				return this.parent;
			}
		},
		{
			key: "getParents",
			value: function() {
				for (var e = [], t = this.parent; t;) e.push(t), t = t.parent;
				return e;
			}
		},
		{
			key: "getSiblings",
			value: function() {
				var e = this.parent, t = this.tree, n = [];
				return e ? Array.isArray(e.children) && (n = e.children) : t && (n = t.children), n;
			}
		},
		{
			key: "getChildren",
			value: function(e) {
				var t = !1, n = this.children;
				if (Array.isArray(n)) {
					if (n.length > 0) {
						if (e) {
							var r = this.walk();
							r.shift(), t = r.map(function(e) {
								return e.getModel();
							});
						} else t = n.map(function(e) {
							return e.getModel();
						});
					} else t = !1;
				} else se(n) && (t = n);
				return t;
			}
		},
		{
			key: "getRoot",
			value: function() {
				var e = this.getParents();
				return e[e.length - 1] || null;
			}
		},
		{
			key: "getIndex",
			value: function() {
				return this.getSiblings().indexOf(this);
			}
		},
		{
			key: "getPath",
			value: function() {
				var e = this.getParents();
				return e.unshift(this), e.reverse();
			}
		},
		{
			key: "getLevel",
			value: function() {
				return this.getParents().length;
			}
		},
		{
			key: "isRest",
			value: function() {
				var e = this.tree, t = e.config, n = e.filterMap, r = e.hasFilter, i = !1;
				if (r) {
					var a = this.getModel();
					i = t.filter(a);
				}
				return i ? n.set(this.value, !0) : n.get(this.value) && n.delete(this.value), i;
			}
		},
		{
			key: "isVisible",
			value: function() {
				var e = this.tree, t = e.nodeMap, n = e.hasFilter, r = e.config.allowFoldNodeOnFilter, i = !0;
				if (!t.get(this.value)) return !1;
				if (n && !r) return i = this.vmIsLocked || this.vmIsRest, i;
				var a = !0, o = this.getParents();
				return o.length > 0 && (a = o.every(function(e) {
					return e.expanded;
				})), i = n ? a && (this.vmIsRest || this.vmIsLocked) : a, i;
			}
		},
		{
			key: "isDisabledState",
			value: function() {
				var e = this.tree, t = this.parent, n = e.config, r = n.checkStrictly, i = n.disabled, a = n.disableCheck, o = n.keys, s = o === void 0 ? {} : o;
				if (i || !r && t != null && t.isDisabled() && !this.vmIsRest) return !0;
				if (typeof this.disableManually == "boolean") return this.disableManually;
				var c = s.disabled || "disabled", l = le(this.data, c);
				if (typeof l == "boolean") return l;
				if (a === !0) return !0;
				if (typeof a == "function") {
					var u = a(this.getModel());
					if (typeof u == "boolean") return u;
				}
				return !1;
			}
		},
		{
			key: "isDisabled",
			value: function() {
				var e = this.tree, t = e.hasFilter, n = e.config.allowFoldNodeOnFilter;
				return t && !n && this.vmIsLocked && !this.vmIsRest ? !0 : this.isDisabledState();
			}
		},
		{
			key: "isDraggable",
			value: function() {
				var e = !!le(this, "tree.config.draggable");
				return typeof this.draggable == "boolean" && (e = this.draggable), e;
			}
		},
		{
			key: "isExpandMutex",
			value: function() {
				var e = !!le(this, "tree.config.expandMutex");
				return typeof this.expandMutex == "boolean" && (e = this.expandMutex), e;
			}
		},
		{
			key: "isActivable",
			value: function() {
				var e = !!le(this, "tree.config.activable");
				return typeof this.activable == "boolean" && (e = this.activable), e;
			}
		},
		{
			key: "isCheckable",
			value: function() {
				var e = !!le(this, "tree.config.checkable");
				return typeof this.checkable == "boolean" && (e = this.checkable), e;
			}
		},
		{
			key: "isActived",
			value: function(e) {
				var t = this.tree, n = this.value, r = e || t.activedMap;
				return !!(t.nodeMap.get(n) && r.get(n));
			}
		},
		{
			key: "isExpanded",
			value: function(e) {
				var t = this.tree, n = this.value, r = this.vmIsLocked, i = t.hasFilter, a = t.config.allowFoldNodeOnFilter;
				if (i && !a && r) return !0;
				var o = e || t.expandedMap;
				return !!(t.nodeMap.get(n) && o.get(n));
			}
		},
		{
			key: "isChecked",
			value: function(e) {
				var t = this.children, n = this.tree, r = this.value, i = n.config, a = i.checkStrictly, o = i.valueMode, s = i.checkAllAffectedBy;
				if (!n.nodeMap.get(r) || !this.isCheckable()) return !1;
				var c = e || n.checkedMap;
				if (a) return !!c.get(r);
				var l = !1, u = s === "all" && Array.isArray(t) && !this.isDisabled();
				if (c.get(r) && (this.isLeaf() || o !== "onlyLeaf" && !u)) return !0;
				if (Array.isArray(t) && t.length > 0) {
					var d = s === "all" ? t : t.filter(function(e) {
						return !e.isDisabled();
					});
					l = d.length > 0 && d.every(function(e) {
						return e.isChecked(c);
					});
				} else {
					var f = this.getParents();
					l = !this.isDisabled() && f.some(function(e) {
						return c.get(e.value);
					});
				}
				return l;
			}
		},
		{
			key: "isIndeterminate",
			value: function() {
				var e = this.children, t = this.tree, n = this.value, r = t.config, i = r.checkStrictly, a = r.checkAllAffectedBy;
				if (!t.nodeMap.get(n) || !this.isCheckable() || i || !Array.isArray(e)) return !1;
				var o = null;
				return e.some(function(e) {
					return a !== "all" && e.isDisabled() ? !1 : !!(e.isIndeterminate() || (nt(o) && (o = e.isChecked()), o !== e.isChecked()));
				});
			}
		},
		{
			key: "isFirst",
			value: function() {
				return this.getSiblings()[0] === this;
			}
		},
		{
			key: "isLast",
			value: function() {
				var e = this.getSiblings();
				return e[e.length - 1] === this;
			}
		},
		{
			key: "isLeaf",
			value: function() {
				var e = !1;
				return e = Array.isArray(this.children) ? this.children.length <= 0 : !this.children, e;
			}
		},
		{
			key: "lock",
			value: function(e) {
				this.vmIsLocked = e, this.expanded = this.isExpanded(), this.visible = this.isVisible();
			}
		},
		{
			key: "afterExpanded",
			value: function() {
				this.update(), this.expanded && this.children === !0 && this.loadChildren(), this.updateChildren();
			}
		},
		{
			key: "toggleExpanded",
			value: function(e) {
				return this.setExpanded(!this.isExpanded(), e);
			}
		},
		{
			key: "setExpanded",
			value: function(e, t) {
				var n = this.tree, r = n.config, i = Ri({ directly: !1 }, t), a = n.expandedMap;
				if (i.directly || (a = new Map(n.expandedMap)), e) {
					var o = [];
					o.push(this), r.expandParent && this.getParents().forEach(function(e) {
						o.push(e);
					}), o.forEach(function(e) {
						var t = !1;
						if (e.parent) t = e.parent.isExpandMutex();
						else {
							var r;
							t = n == null || (r = n.config) == null ? void 0 : r.expandMutex;
						}
						t && e.getSiblings().forEach(function(e) {
							a.delete(e.value), e.update(), e.updateChildren();
						}), a.set(e.value, !0), e.update(), e.updateChildren();
					});
				} else a.delete(this.value);
				return i.directly && this.afterExpanded(), n.getExpanded(a);
			}
		},
		{
			key: "toggleActived",
			value: function(e) {
				return this.setActived(!this.isActived(), e);
			}
		},
		{
			key: "setActived",
			value: function(e, t) {
				var n = this.tree, r = Ri({
					isAction: !0,
					directly: !1
				}, t), i = n.config || {}, a = n.activedMap;
				if (r.directly || (a = new Map(n.activedMap)), r.isAction && this.isDisabledState()) return n.getActived(a);
				if (this.isActivable()) {
					if (e) {
						var o = Array.from(a.keys());
						i.activeMultiple || a.clear(), o.forEach(function(e) {
							n.getNode(e)?.update();
						}), a.set(this.value, !0);
					} else a.delete(this.value);
				}
				return this.update(), n.getActived(a);
			}
		},
		{
			key: "hasEnableUnCheckedChild",
			value: function() {
				var e = this.children;
				if (!Array.isArray(e) || e.length <= 0) return !1;
				var t = !1;
				return e.some(function(e) {
					return e.isDisabledState() || e.isChecked() ? !1 : e.isIndeterminate() ? e.hasEnableUnCheckedChild() ? (t = !0, !0) : !1 : (t = !0, !0);
				}), t;
			}
		},
		{
			key: "toggleChecked",
			value: function(e) {
				if (this.isIndeterminate()) {
					var t = this.hasEnableUnCheckedChild();
					return this.setChecked(t, e);
				}
				return this.setChecked(!this.isChecked(), e);
			}
		},
		{
			key: "setChecked",
			value: function(e, t) {
				var n = this.tree, r = n.config || {}, i = Ri({
					isAction: !0,
					directly: !1
				}, t), a = n.checkedMap;
				return i.directly || (a = new Map(n.checkedMap)), !this.isCheckable() || i.isAction && this.isDisabledState() || e === this.isChecked() && (!this.isIndeterminate() || this.hasEnableUnCheckedChild()) || (e ? a.set(this.value, !0) : a.delete(this.value), r.checkStrictly ? i.directly && this.updateChecked() : (this.spreadChildrenChecked(e, a, i), this.spreadParentChecked(e, a, i), i.directly && n.getRelatedNodes([this.value], { reverse: !0 }).forEach(function(e) {
					e.updateChecked();
				}))), n.getChecked(a);
			}
		},
		{
			key: "spreadParentChecked",
			value: function(e, t, n) {
				var r = Ri({
					isAction: !0,
					directly: !1
				}, n);
				if (this.isCheckable()) {
					var i = this.children;
					Array.isArray(i) && i.length > 0 && t.delete(this.value);
					var a = this.parent;
					a && a.spreadParentChecked(e, t, r);
				}
			}
		},
		{
			key: "spreadChildrenChecked",
			value: function(e, t, n) {
				var r = Ri({
					isAction: !0,
					directly: !1
				}, n);
				if (this.isCheckable() && !(r.isAction && this.isDisabledState())) {
					var i = this.children;
					Array.isArray(i) && (i.length <= 0 || (t.delete(this.value), i.forEach(function(n) {
						r.isAction && n.isDisabledState() || (e ? t.set(n.value, !0) : t.delete(n.value), n.spreadChildrenChecked(e, t, r));
					})));
				}
			}
		},
		{
			key: "setDisabled",
			value: function(e) {
				var t, n = this;
				(this.tree.config.checkStrictly || (t = this.parent) == null || !t.isDisabled()) && (this.disableManually = e, this.tree.config.checkStrictly || this.getParents().forEach(function(e) {
					return n.tree.checkedMap.delete(e.value);
				}), this.update(), this.updateChildren(), this.updateParents());
			}
		},
		{
			key: "update",
			value: function() {
				this.level = this.getLevel(), this.vmIsFirst = this.isFirst(), this.vmIsLast = this.isLast(), this.vmIsLeaf = this.isLeaf(), this.vmCheckable = this.isCheckable(), this.vmIsRest = this.isRest(), this.actived = this.isActived(), this.expanded = this.isExpanded(), this.visible = this.isVisible(), this.disabled = this.isDisabled(), this.tree.updated(this);
			}
		},
		{
			key: "updateChecked",
			value: function() {
				var e = this.tree, t = this.value, n = e.checkedMap;
				this.checked = this.isChecked(), this.indeterminate = this.isIndeterminate(), this.checked && n.set(t, !0), e.updated(this);
			}
		},
		{
			key: "updateChildren",
			value: function() {
				var e = this;
				this.spreadChildren(function(t) {
					t !== e && (t.update(), t.updateChecked());
				});
			}
		},
		{
			key: "updateParents",
			value: function() {
				var e = this;
				this.spreadParents(function(t) {
					t !== e && (t.update(), t.updateChecked());
				});
			}
		},
		{
			key: "updateRelated",
			value: function() {
				this.tree.getRelatedNodes([this.value]).forEach(function(e) {
					e.update(), e.updateChecked();
				});
			}
		},
		{
			key: "walk",
			value: function() {
				var e = [];
				return this.spreadChildren(function(t) {
					e.push(t);
				}), e;
			}
		},
		{
			key: "spreadChildren",
			value: function(e) {
				e(this);
				var t = this.children;
				Array.isArray(t) && t.length > 0 && t.forEach(function(t) {
					t?.spreadChildren(e);
				});
			}
		},
		{
			key: "spreadParents",
			value: function(e) {
				e(this);
				var t = this.parent;
				t && t?.spreadParents(e);
			}
		},
		{
			key: "getModel",
			value: function() {
				var e = this.model;
				return e || (e = Ii(this), this.model = e), e;
			}
		}
	]);
}();
function Gi(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ki(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Gi(Object(n), !0).forEach(function(t) {
			M(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gi(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function qi(e) {
	var t = Promise.resolve();
	return t.then(e), t;
}
function Ji(e) {
	return we(e) || p(e) || typeof e == "bigint";
}
var Yi = /*#__PURE__*/ function() {
	function e(t) {
		st(this, e), M(this, "children", void 0), M(this, "nodes", void 0), M(this, "nodeMap", void 0), M(this, "privateMap", void 0), M(this, "config", void 0), M(this, "activedMap", void 0), M(this, "updatedMap", void 0), M(this, "checkedMap", void 0), M(this, "expandedMap", void 0), M(this, "filterMap", void 0), M(this, "hasFilter", void 0), M(this, "emitter", void 0), M(this, "updateTick", void 0), M(this, "shouldReflow", void 0), M(this, "prevFilter", void 0);
		var n = Ki({
			prefix: "t",
			keys: {},
			expandAll: !1,
			expandLevel: 0,
			expandMutex: !1,
			expandParent: !1,
			activable: !1,
			activeMultiple: !1,
			checkable: !1,
			checkStrictly: !1,
			checkAllAffectedBy: "onlyEnabled",
			disabled: !1,
			disableCheck: !1,
			draggable: !1,
			load: null,
			lazy: !1,
			valueMode: "onlyLeaf",
			filter: null,
			allowFoldNodeOnFilter: !1,
			onLoad: null,
			onReflow: null,
			onUpdate: null
		}, t);
		this.config = n, this.nodes = [], this.children = [], this.nodeMap = /* @__PURE__ */ new Map(), this.privateMap = /* @__PURE__ */ new Map(), this.activedMap = /* @__PURE__ */ new Map(), this.expandedMap = /* @__PURE__ */ new Map(), this.checkedMap = /* @__PURE__ */ new Map(), this.updatedMap = /* @__PURE__ */ new Map(), this.filterMap = /* @__PURE__ */ new Map(), this.prevFilter = null, this.updateTick = null, this.shouldReflow = !1, this.hasFilter = ye(n.filter), this.emitter = Lt();
	}
	return De(e, [
		{
			key: "setConfig",
			value: function(e) {
				var t = this, n = this.config, r = e.checkAllAffectedBy !== void 0 && e.checkAllAffectedBy !== n.checkAllAffectedBy, i = !1;
				Object.keys(e).forEach(function(t) {
					var r = e[t];
					r !== n[t] && (i = !0, n[t] = r);
				}), this.hasFilter = ye(n.filter), i && (r && !n.checkStrictly && (this.nodeMap.forEach(function(e) {
					!e.isLeaf() && !e.isDisabled() && t.checkedMap.delete(e.value);
				}), this.nodeMap.forEach(function(e) {
					return e.updateChecked();
				})), this.refreshState());
			}
		},
		{
			key: "getChildren",
			value: function() {
				return this.children;
			}
		},
		{
			key: "getNode",
			value: function(e) {
				var t = null;
				return Ji(e) ? t = this.nodeMap.get(e) : e instanceof Wi && (t = this.nodeMap.get(e.value)), t ||= null, t;
			}
		},
		{
			key: "getIndex",
			value: function(e) {
				return this.nodes.indexOf(e);
			}
		},
		{
			key: "getParent",
			value: function(e) {
				var t = null, n = this.getNode(e);
				return n && (t = n.getParent()), t;
			}
		},
		{
			key: "getParents",
			value: function(e) {
				var t = this.getNode(e), n = [];
				return t && (n = t.getParents()), n;
			}
		},
		{
			key: "getNodeIndex",
			value: function(e) {
				var t = this.getNode(e), n = -1;
				return t && (n = t.getIndex()), n;
			}
		},
		{
			key: "getNodes",
			value: function(e, t) {
				var n = [], r = "";
				if (Ji(e) ? r = e : e instanceof Wi && (r = e.value), !r && r !== 0 && typeof r != "bigint") n = this.nodes.slice(0);
				else {
					var i = this.getNode(r);
					i && (n = i.walk());
				}
				if (t) {
					var a = Ki({
						filter: null,
						level: Infinity
					}, t);
					p(a.level) && a.level !== Infinity && (n = n.filter(function(e) {
						return e.level <= a.level;
					})), ye(a.filter) && (n = n.filter(function(e) {
						var t = e.getModel();
						return a.filter(t);
					})), Ce(a.props) && (n = n.filter(function(e) {
						return Object.keys(a.props).every(function(t) {
							return e[t] === a.props[t];
						});
					}));
				}
				return n;
			}
		},
		{
			key: "append",
			value: function(e) {
				var t = this;
				e.forEach(function(e) {
					var n = new Wi(t, e);
					t.children.push(n);
				}), this.reflow();
			}
		},
		{
			key: "reload",
			value: function(e) {
				this.removeAll(), this.append(e);
			}
		},
		{
			key: "parseNodeData",
			value: function(e, t) {
				var n = "", r = null, i = null;
				return Ji(e) ? (n = e, r = this.getNode(n), i = t) : e instanceof Wi && t ? (r = e, i = t) : i = e, {
					node: r,
					data: i
				};
			}
		},
		{
			key: "appendNodes",
			value: function(e, t) {
				var n = this.parseNodeData(e, t);
				n.data && (n.node ? (n.data instanceof Wi ? n.data.appendTo(this, n.node) : Je(n.data) ? n.node.append(n.data) : n.node.append([n.data]), n.node.updateRelated()) : n.data instanceof Wi ? n.data.appendTo(this) : Array.isArray(n.data) ? this.append(n.data) : this.append([n.data]));
			}
		},
		{
			key: "insertBefore",
			value: function(e, t) {
				var n = this.getNode(e);
				n && n.insertBefore(t);
			}
		},
		{
			key: "insertAfter",
			value: function(e, t) {
				var n = this.getNode(e);
				n && n.insertAfter(t);
			}
		},
		{
			key: "refreshNodes",
			value: function() {
				var e = this.children, t = this.nodes;
				t.length = 0, e.forEach(function(e) {
					var n = e.walk();
					Array.prototype.push.apply(t, n);
				});
			}
		},
		{
			key: "reflow",
			value: function(e) {
				this.shouldReflow = !0, this.updated(e);
			}
		},
		{
			key: "updated",
			value: function(e) {
				var t = this, n = this.updatedMap;
				e ? n.set(e[Ui], "changed") : this.getNodes().forEach(function(e) {
					n.set(e[Ui], "changed");
				}), this.updateTick ||= qi(function() {
					t.updateTick = null, t.shouldReflow && (t.refreshNodes(), t.emit("reflow")), t.lockFilterPathNodes();
					var e = `t${(/* @__PURE__ */ new Date()).getTime()}`, r = Array.from(n.keys()).map(function(r) {
						return n.set(r, e), t.privateMap.get(r);
					});
					t.emit("update", {
						nodes: r,
						map: n
					}), t.shouldReflow = !1, n.clear();
				});
			}
		},
		{
			key: "getActived",
			value: function(e) {
				var t = e || this.activedMap;
				return Array.from(t.keys());
			}
		},
		{
			key: "getActivedNodes",
			value: function(e) {
				var t = this.getNodes(e);
				return t = t.filter(function(e) {
					return e.isActived();
				}), t;
			}
		},
		{
			key: "replaceActived",
			value: function(e) {
				this.resetActived(), this.setActived(e);
			}
		},
		{
			key: "setActived",
			value: function(e) {
				var t = this, n = this.config.activeMultiple, r = e.slice(0);
				n || (r.length = 1), r.forEach(function(e) {
					t.activedMap.set(e, !0);
					var n = t.getNode(e);
					n && n.update();
				});
			}
		},
		{
			key: "resetActived",
			value: function() {
				var e = this.getActived();
				this.activedMap.clear(), this.getRelatedNodes(e).forEach(function(e) {
					e.update();
				});
			}
		},
		{
			key: "getExpanded",
			value: function(e) {
				var t = e || this.expandedMap;
				return Array.from(t.keys());
			}
		},
		{
			key: "replaceExpanded",
			value: function(e) {
				var t = this.getExpanded(), n = ti(e, t), r = ti(t, e);
				this.setExpandedDirectly(r, !1), this.updateExpanded(r), this.setExpanded(n);
			}
		},
		{
			key: "setExpanded",
			value: function(e) {
				this.setExpandedDirectly(e), this.updateExpanded(e);
			}
		},
		{
			key: "setExpandedDirectly",
			value: function(e) {
				var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
				e.forEach(function(e) {
					var r = t.getNode(e);
					!(r != null && r.isLeaf()) && n ? t.expandedMap.set(e, !0) : t.expandedMap.delete(e), r?.afterExpanded();
				});
			}
		},
		{
			key: "resetExpanded",
			value: function() {
				var e = this.getExpanded();
				this.expandedMap.clear(), this.updateExpanded(e);
			}
		},
		{
			key: "updateExpanded",
			value: function(e) {
				this.getRelatedNodes(e, { withParents: !1 }).forEach(function(e) {
					e.update();
				});
			}
		},
		{
			key: "getChecked",
			value: function(e) {
				var t = this.nodeMap, n = this.config, r = n.valueMode, i = n.checkStrictly, a = [], o = e || this.checkedMap;
				return t.forEach(function(e) {
					e.isChecked(o) && (r === "parentFirst" && !i ? !e.isDisabled() && e.parent && e.parent.isChecked(o) || a.push(e.value) : r === "onlyLeaf" && !i ? e.isLeaf() && a.push(e.value) : a.push(e.value));
				}), a;
			}
		},
		{
			key: "getCheckedNodes",
			value: function(e) {
				var t = this.getNodes(e);
				return t = t.filter(function(e) {
					return e.isChecked();
				}), t;
			}
		},
		{
			key: "replaceChecked",
			value: function(e) {
				this.resetChecked(), this.setChecked(e);
			}
		},
		{
			key: "setChecked",
			value: function(e) {
				var t = this, n = this.config, r = n.checkStrictly;
				if (n.checkable && (e.forEach(function(e) {
					var n = t.getNode(e);
					n && (r ? (t.checkedMap.set(e, !0), n.updateChecked()) : n.walk().forEach(function(e) {
						e !== n && e.isDisabled() || t.checkedMap.set(e.value, !0);
					}));
				}), !r)) {
					var i = this.getChecked();
					this.getRelatedNodes(i).forEach(function(e) {
						e.updateChecked();
					});
				}
			}
		},
		{
			key: "resetChecked",
			value: function() {
				var e = this.getChecked(), t = this.getRelatedNodes(e);
				this.checkedMap.clear(), t.forEach(function(e) {
					e.updateChecked();
				});
			}
		},
		{
			key: "refreshState",
			value: function() {
				this.nodeMap.forEach(function(e) {
					e.update();
				});
			}
		},
		{
			key: "updateAll",
			value: function() {
				this.nodeMap.forEach(function(e) {
					e.update(), e.updateChecked();
				});
			}
		},
		{
			key: "remove",
			value: function(e) {
				var t = this.getNode(e);
				t && t.remove();
			}
		},
		{
			key: "removeAll",
			value: function() {
				this.expandedMap.clear(), this.checkedMap.clear(), this.activedMap.clear(), this.filterMap.clear(), this.nodeMap.clear(), this.privateMap.clear(), this.updatedMap.clear(), this.nodes = [], this.children = [], this.reflow();
			}
		},
		{
			key: "getRelatedNodes",
			value: function(e, t) {
				var n = this, r = Ki({
					reverse: !1,
					withParents: !0
				}, t), i = /* @__PURE__ */ new Map();
				e.forEach(function(e) {
					if (!i.get(e)) {
						var t = n.getNode(e);
						if (t) {
							var a = t.getParents().reverse(), o = t.walk(), s = [];
							s = r.withParents ? a.concat(o) : o, s.forEach(function(e) {
								i.set(e.value, e);
							});
						}
					}
				});
				var a = Array.from(i.values());
				return r.reverse && (a = a.reverse()), a;
			}
		},
		{
			key: "emit",
			value: function(e, t) {
				var n = this.config, r = this.emitter, i = n[je(`on-${e}`)];
				ye(i) && i(t), r.emit(e, t);
			}
		},
		{
			key: "lockFilterPathNodes",
			value: function() {
				var e = this.config, t = this.getNodes();
				this.prevFilter && t.forEach(function(e) {
					e.vmIsLocked && e.lock(!1);
				});
				var n = e.filter;
				n && ye(n) && (this.prevFilter = e.filter, t.reverse().forEach(function(e) {
					var t = e.getParent();
					t && (e.vmIsRest || e.vmIsLocked) && (t.vmIsLocked || t.lock(!0));
				}));
			}
		}
	]);
}(), Xi = {
	name: "TTreeNode",
	inject: { onDrag: { default: void 0 } }
};
function Zi(e) {
	return Xe(e);
}
function Qi(e) {
	return In;
}
function $i(e) {
	return e.$slots;
}
function ea(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "value", r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "defaultValue", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "onChange";
	!(arguments.length > 5 && arguments[5] !== void 0) || arguments[5];
	var a = t.modelValue;
	return n === "value" ? xt(t[n], a, e[r], t[i], n) : te(t[n], e[r], t[i], n);
}
var ta = /* @__PURE__ */ function(e) {
	return e[e.Before = -1] = "Before", e[e.Inside = 0] = "Inside", e[e.After = 1] = "After", e;
}(ta || {});
function na(e) {
	var t = e.treeItemRef, n = On({
		isDragOver: !1,
		isDragging: !1,
		dropPosition: 0
	}), r = function(e) {
		var r, i = t.value;
		if (i) {
			var a = i == null || (r = i.getBoundingClientRect) == null ? void 0 : r.call(i), o = window.scrollY + a.top, s = e.pageY, c = a.height / 4, l = s - o;
			n.dropPosition = l < c ? -1 : l < a.height - c ? 0 : 1;
		}
	}, i = function(t, r) {
		var i, a, o, s, c, l = e.node, d = e.treeScope.drag;
		if (d) switch (t) {
			case "dragStart":
				n.isDragging = !0, n.dropPosition = 0, (i = d.handleDragStart) == null || i.call(d, {
					node: l,
					dragEvent: r
				});
				break;
			case "dragEnd":
				n.isDragging = !1, n.isDragOver = !1, n.dropPosition = 0, u.cancel(), (a = d.handleDragEnd) == null || a.call(d, {
					node: l,
					dragEvent: r
				});
				break;
			case "dragOver":
				n.isDragOver = !0, u(r), (o = d.handleDragOver) == null || o.call(d, {
					node: l,
					dragEvent: r
				});
				break;
			case "dragLeave":
				n.isDragOver = !1, n.dropPosition = 0, u.cancel(), (s = d.handleDragLeave) == null || s.call(d, {
					node: l,
					dragEvent: r
				});
				break;
			case "drop": (c = d.handleDrop) == null || c.call(d, {
				node: l,
				dropPosition: n.dropPosition,
				dragEvent: r
			}), n.isDragOver = !1, u.cancel();
		}
	}, a = function(t) {
		if (e.node.isDraggable()) {
			t.stopPropagation(), i("dragStart", t);
			try {
				var n;
				(n = t.dataTransfer) == null || n.setData("text/plain", "");
			} catch {}
		}
	}, o = function(t) {
		e.node.isDraggable() && (t.stopPropagation(), i("dragEnd", t));
	}, s = function(t) {
		e.node.isDraggable() && (t.stopPropagation(), t.preventDefault(), i("dragOver", t));
	}, c = function(t) {
		e.node.isDraggable() && (t.stopPropagation(), i("dragLeave", t));
	}, l = function(t) {
		e.node.isDraggable() && (t.stopPropagation(), t.preventDefault(), i("drop", t));
	}, u = Ne(function(e) {
		r(e);
	});
	return {
		dragStates: n,
		handleDragStart: a,
		handleDragEnd: o,
		handleDragOver: s,
		handleDragLeave: c,
		handleDrop: l
	};
}
function ra(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ia(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ra(Object(n), !0).forEach(function(t) {
			M(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ra(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function aa(e, t, n) {
	var r = je(`on-${n}`);
	n.replace(/^on/, "").toLowerCase();
	var i = [...arguments].slice(3);
	typeof e[r] == "function" && e[r].apply(e, i);
}
function oa(e, t) {
	for (var n = [], r = e; r && r.parentNode && (n.push(r), r !== t);) r = r.parentNode;
	return n;
}
function sa(e, t, n) {
	return oa(t, n).map(function(t) {
		return {
			name: e,
			value: t?.getAttribute(e) || "",
			el: t
		};
	}).filter(function(e) {
		return e.value;
	});
}
function ca(e, t, n) {
	return sa(e, t, n).pop() || null;
}
function la(e, t, n) {
	return oa(t, n).some(function(t) {
		return t.classList.contains(e);
	});
}
function ua(e, t) {
	var n = null, r = null, i = ia({}, t);
	return typeof e == "function" ? r = e(i.createElement, i.node?.getModel()) : typeof e == "string" && (r = e), (typeof r == "string" || r) && (n = r), n;
}
function da(e) {
	return [
		"string",
		"number",
		"bigint"
	].includes(b(e));
}
function fa(e, t) {
	var n = null, r = null;
	return da(t) ? r = t : t && da(t.value) && (r = t.value), n = e.getNode(r), n;
}
function pa(e) {
	var t = e.props, n = e.context, r = e.scope, i = e.store, a = null, o = {
		handleDragStart: function(e) {
			var r = e.dragEvent, i = e.node;
			a = i, aa(t, n, "drag-start", {
				node: i.getModel(),
				e: r
			});
		},
		handleDragEnd: function(e) {
			var r = e.dragEvent, i = e.node;
			a = i, aa(t, n, "drag-end", {
				node: i.getModel(),
				e: r
			});
		},
		handleDragOver: function(e) {
			var r = e.dragEvent;
			aa(t, n, "drag-over", {
				node: e.node.getModel(),
				e: r
			});
		},
		handleDragLeave: function(e) {
			var r = e.dragEvent;
			aa(t, n, "drag-leave", {
				node: e.node.getModel(),
				e: r
			});
		},
		handleDrop: function(e) {
			var r = e.dragEvent, o = e.node, s = e.dropPosition;
			if (!(o.value === a.value || o.getParents().some(function(e) {
				return e.value === a.value;
			}))) {
				var c = {
					dropNode: o.getModel(),
					dragNode: a.getModel(),
					dropPosition: s,
					e: r
				};
				t.allowDrop?.call(t, c) !== !1 && (i.getNodes().some(function(e) {
					return e.value === o.value && (s === ta.Inside ? a.appendTo(i, e) : s === ta.Before ? o.insertBefore(a) : o.insertAfter(a), !0);
				}), aa(t, n, "drop", c));
			}
		}
	};
	return r.drag = o, { drag: o };
}
function ma(e) {
	var n = e, r = n.store, i = Dt("tree").value, a = t(e.vmValue, 2), o = a[0], s = a[1], c = t(e.vmActived, 2), l = c[0], u = c[1], d = t(e.vmExpanded, 2), f = d[0], p = d[1], m = function(e, t) {
		var a = fa(r, e), o = n.mouseEvent, s = {
			node: a.getModel(),
			e: o,
			trigger: "setItem"
		};
		if (o) {
			s.trigger = "node-click";
			var c = o.target, l = o.currentTarget;
			la(`${i}__icon`, c, l) && (s.trigger = "icon-click");
		}
		var u = a.setExpanded(t, { directly: !0 });
		return p(u, s), s.trigger !== "setItem" && r.replaceExpanded(f.value || []), u;
	}, h = function(e) {
		var t = fa(r, e);
		if (t.children) return m(t, !t.isExpanded());
	}, g = function(e, t) {
		var i = fa(r, e), a = n.mouseEvent, o = {
			node: i.getModel(),
			e: a,
			trigger: "setItem"
		};
		a && (o.trigger = "node-click");
		var s = i.setActived(t, {
			isAction: o.trigger === "node-click",
			directly: !0
		});
		return u(s, o), o.trigger !== "setItem" && r.replaceActived(l.value || []), s;
	}, _ = function(e) {
		var t = fa(r, e);
		return g(t, !t.isActived());
	}, v = function(e, t, n) {
		var i = fa(r, e), a = n?.e, c = {
			node: i.getModel(),
			e: a,
			trigger: "setItem"
		};
		a && (c.trigger = "node-click");
		var l = i.setChecked(t, {
			isAction: c.trigger === "node-click",
			directly: !0
		});
		return s(l, c), c.trigger !== "setItem" && r.replaceChecked(o.value || []), l;
	};
	return {
		setExpanded: m,
		toggleExpanded: h,
		setActived: g,
		toggleActived: _,
		setChecked: v,
		toggleChecked: function(e, t) {
			var n = fa(r, e);
			return n.isIndeterminate() ? v(n, n.hasEnableUnCheckedChild(), t) : v(n, !n.isChecked(), t);
		}
	};
}
function ha(e, t) {
	var n = mn(e), r = L(null), i = e.treeScope, a = i.store.privateMap.get(e.itemKey);
	return { state: {
		stateId: e.stateId,
		props: e,
		context: t,
		treeScope: i,
		refProps: n,
		node: a,
		treeItemRef: r
	} };
}
function ga(e) {
	var t = e.context, n = Dt().value, r = function(n, r) {
		var i = e.node, a = {
			event: new Event("change"),
			node: i
		};
		t.emit("change", a, r);
	}, i = !1;
	return {
		handleChange: r,
		handleClick: function(r) {
			var a, o, s = e.node, c = e.treeScope.treeProps, l = (c === void 0 ? {} : c).expandOnClickNode, u = r.target, d = s.children && l && (u.className === `${n}-checkbox__input` || u.tagName.toLowerCase() === "input");
			if (!(i || d)) {
				i = !0, setTimeout(function() {
					i = !1;
				}), l && s.children && ((a = u.className) == null || (o = a.indexOf) == null ? void 0 : o.call(a, `${n}-tree__label`)) !== -1 && r.preventDefault();
				var f = {
					mouseEvent: r,
					event: r,
					node: s,
					path: s.getPath()
				};
				t.emit("click", f);
			}
		}
	};
}
function _a(e) {
	var t = Dt().value, n = Dt("tree").value, r = function(e) {
		var t = Be({ CaretRightSmallIcon: Qr }).CaretRightSmallIcon;
		return V(t, null, null);
	}, i = function(e) {
		e.preventDefault();
	};
	return { renderIcon: function(a) {
		var o = e.node, s = e.treeScope, c = s.scopedSlots, l = (s?.treeProps || {}).icon, u = !1, d = null;
		return l === !0 ? c != null && c.icon ? d = c.icon({ node: o?.getModel() }) : o.vmIsLeaf ? d = "" : (u = !0, d = r(a), o.loading && o.expanded && (d = V(ut, null, null))) : l && (d = ua(l, {
			createElement: a,
			node: o
		})), V("span", {
			class: [
				`${n}__icon`,
				`${t}-folder-icon`,
				u ? `${n}__icon--default` : ""
			],
			trigger: "expand",
			ignore: "active",
			onmousedown: i
		}, [d]);
	} };
}
function va(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Cr(e);
}
function ya(e) {
	var t = Dt().value, n = Dt("tree").value, r = ga(e).handleChange;
	return { renderLabel: function(i) {
		var a = e.node, o = e.treeScope, s = o.scopedSlots, c = o.treeProps, l = c === void 0 ? {} : c, u = l.label, d = l.expandOnClickNode, f = l?.checkProps || {}, p = null;
		p = u === !0 ? s != null && s.label ? s.label({ node: a?.getModel() }) : a.label || "" : ua(u, {
			createElement: i,
			node: a
		});
		var m = [`${n}__label`, M({}, `${t}-is-active`, a.isActivable() ? a.actived : !1)], h = K(function() {
			var e = Array.isArray(a.children) && a.children?.length > 0, t = se(a.children) && a.children;
			return d && (e || t);
		});
		if (a.vmCheckable) {
			var g = !1;
			a.vmIsLocked && !a.vmIsRest && (g = !0), a.isDisabled() && (g = !0);
			var _ = function() {
				return p;
			}();
			p = V($e, _r({
				class: m,
				checked: a.checked,
				indeterminate: a.indeterminate,
				name: String(a.value),
				onChange: r,
				stopLabelTrigger: h.value
			}, f, {
				disabled: g,
				title: a.label
			}), va(p) ? p : { default: function() {
				return [_];
			} });
		} else {
			var v = V("span", { style: "position: relative" }, [p]);
			p = a.isActivable() ? V("span", {
				key: "1",
				ref: "label",
				class: m,
				title: a.label
			}, [v]) : V("span", {
				key: "2",
				class: m,
				title: a.label
			}, [v]);
		}
		return p;
	} };
}
function ba(e) {
	var t = Dt("tree").value;
	return { renderLine: function(n) {
		var r = e.node, i = e.treeScope, a = i.scopedSlots, o = i?.treeProps || {}, s = o.line, c = !!o.icon, l = null;
		if (s === !0) {
			if (a != null && a.line) l = a.line({ node: r?.getModel() });
			else if (r.parent && r.tree) {
				var u = r.vmIsLeaf, d = r.vmIsFirst, f = r.level, p = [];
				p.push(`${t}__line`), (u || !c) && p.push(`${t}__line--leaf`), d && c && p.push(`${t}__line--first`);
				var m = [], h = r.getParents();
				h.pop(), h.forEach(function(e, t) {
					e.vmIsLast || m.push(`calc(-${t + 1} * var(--space)) 0 var(--color)`);
				});
				var g = {
					"--level": f ? String(f) : void 0,
					"box-shadow": m.join(",")
				};
				l = V("span", {
					class: p,
					style: g
				}, null);
			}
		} else l = ua(s, {
			createElement: n,
			node: r
		});
		return l;
	} };
}
function xa(e) {
	var t = Dt("tree").value;
	return { renderOperations: function(n) {
		var r = e.node, i = e.treeScope, a = i.scopedSlots, o = (i?.treeProps || {}).operations, s = null;
		return s = a != null && a.operations ? a.operations({ node: r?.getModel() }) : ua(o, {
			createElement: n,
			node: r
		}), s &&= V("span", {
			class: `${t}__operations`,
			ignore: "active,expand"
		}, [s]), s;
	} };
}
function Sa(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ca(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Sa(Object(n), !0).forEach(function(t) {
			M(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sa(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function wa(e) {
	var t = e.treeScope, n = e.treeItemRef, r = t.virtualConfig, i = t.treeContentRef, a = t.scrollProps, o = Dt().value, s = Dt("tree").value, c = ga(e).handleClick, l = _a(e).renderIcon, u = ya(e).renderLabel, d = ba(e).renderLine, f = xa(e).renderOperations, p = na(e), m = p.dragStates, h = p.handleDragStart, g = p.handleDragEnd, _ = p.handleDragOver, v = p.handleDragLeave, y = p.handleDrop, b = ht(i, n, On(Ca({}, a?.value))), x = b.hasLazyLoadHolder, S = b.tRowHeight;
	function C() {
		var t = e.node;
		if (r?.isVirtualScroll.value) var i = setTimeout(function() {
			r.handleRowMounted({
				ref: n,
				data: t
			}), clearTimeout(i);
		}, 100);
	}
	Bn(function() {
		C();
	}), xn(function() {
		C();
	});
	var w = function() {
		return `${`--level: ${e.node.level};`}`;
	}, T = function() {
		var t = e.node, n = m.isDragOver, r = m.isDragging, i = m.dropPosition, a = [];
		return a.push(`${s}__item`), a.push(M(M(M({}, `${s}__item--open`, t.expanded), `${o}-is-active`, t.isActivable() ? t.actived : !1), `${o}-is-disabled`, t.isDisabled())), a.push(M({}, `${s}__item--draggable`, !t.isDisabled() && t.isDraggable())), t.visible ? a.push(`${s}__item--visible`) : a.push(`${s}__item--hidden`), t.vmIsLocked && a.push(`${s}__item--locked`), t.vmIsRest && a.push(`${s}__item--matched`), a.push(M(M(M(M({}, `${s}__item--dragging`, r), `${s}__item--tip-top`, n && i < 0), `${s}__item--tip-bottom`, n && i > 0), `${s}__item--tip-highlight`, !r && n && i === 0)), a;
	}, E = function(e) {
		var t = [], n = l(e), r = d(e);
		r && t.push(r), n && t.push(n);
		var i = u(e);
		i && t.push(i);
		var a = f(e);
		return a && t.push(a), t;
	};
	return {
		hasLazyLoadHolder: x,
		tRowHeight: S,
		renderItemNode: function(t) {
			var n = e.node, r = e.props;
			if (!n) return null;
			var i = n.level, a = n.value, o = w(), s = T(), l = e;
			return l.stateId = r.stateId, V("div", {
				ref: "treeItemRef",
				class: s,
				"data-value": a,
				"data-level": i,
				style: o,
				onClick: function(e) {
					return c(e);
				},
				draggable: !n.isDisabled() && n.isDraggable(),
				onDragstart: function(e) {
					return h(e);
				},
				onDragend: function(e) {
					return g(e);
				},
				onDragover: function(e) {
					return _(e);
				},
				onDragleave: function(e) {
					return v(e);
				},
				onDrop: function(e) {
					return y(e);
				}
			}, [x.value ? [V("div", null, null)] : E(t)]);
		}
	};
}
function Ta(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ea(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ta(Object(n), !0).forEach(function(t) {
			M(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ta(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Da = G(Ea(Ea({ props: {
	stateId: { type: String },
	itemKey: { type: String },
	rowIndex: { type: Number },
	treeScope: { type: Object }
} }, Xi), {}, {
	setup: function(e, t) {
		var n = ha(e, t).state, r = n.treeItemRef;
		return L(), {
			treeItemRef: r,
			renderItemNode: wa(n).renderItemNode
		};
	},
	render: function(e) {
		var t = Qi(e);
		return typeof this.renderItemNode == "function" ? this.renderItemNode(t) : null;
	}
}));
function Oa(e) {
	var t = e, n = t.props, r = t.context, i = ma(e), a = i.toggleExpanded, o = i.toggleActived, s = i.toggleChecked;
	return {
		handleChange: function(e, t) {
			var r = n.disabled, i = e.node;
			i && !r && !i.disabled && i.isCheckable() && s(i, t);
		},
		handleClick: function(e) {
			var i = e.mouseEvent, s = e.event, c = e.node;
			if (c && i) {
				t.mouseEvent = i;
				var l = n.expandOnClickNode, u = !n.disabled && !c.disabled && c.isActivable(), d = !1;
				["trigger", "ignore"].forEach(function(e) {
					var t = ca(e, s.target, s.currentTarget)?.value || "";
					t.indexOf("expand") >= 0 && (e === "trigger" ? (l = !0, d = !0) : e === "ignore" && (l = !1)), t.indexOf("active") >= 0 && e === "ignore" && (u = !1);
				}), l && (a(c), d) || (u && o(c), aa(n, r, "click", {
					node: c.getModel(),
					e: i
				}), t.mouseEvent = null);
			}
		}
	};
}
function ka(e) {
	var t = e.store, n = e.scope, r = e.allNodes, i = e.nodes, a = e.virtualConfig, o = Oa(e), s = o.handleClick, c = o.handleChange, l = L(!1), u = /* @__PURE__ */ new Map(), d = function() {
		r.value = t.getNodes();
	}, f = function() {
		if (!a?.isVirtualScroll.value) {
			var e = [], n = !1;
			r.value.forEach(function(t) {
				t.visible && (n = !0, u.set(t.value, t.value)), u.has(t.value) && e.push(t);
			}), u.forEach(function(e) {
				t.getNode(e) || u.delete(e);
			}), i.value = e, l.value = !n;
		}
	}, p = function() {
		if (a?.isVirtualScroll.value) {
			var e = a.visibleData.value;
			i.value = e, l.value = e.length <= 0;
		}
	}, m = function(e, t, r, i) {
		var a = t.VIRTUAL_SCROLL_INDEX || r, o = t[Ui];
		return V(Da, {
			key: o,
			rowIndex: a,
			stateId: i,
			itemKey: o,
			treeScope: n,
			onClick: s,
			onChange: c
		}, null);
	};
	return J(r, f), J(a.visibleData, p), d(), f(), p(), t.emitter.on("update", d), {
		nodesEmpty: l,
		renderTreeNodes: function(e) {
			var t = `render-${(/* @__PURE__ */ new Date()).getTime()}`;
			return i.value.map(function(n, r) {
				return m(e, n, r, t);
			});
		}
	};
}
function Aa(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ja(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Aa(Object(n), !0).forEach(function(t) {
			M(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Aa(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ma(e) {
	var t = e, n = t.props, r = t.context, i = t.allNodes, a = t.nodes, o = t.scope, s = t.treeContentRef, c = t.isScrolling, l = K(function() {
		return ja({ rowHeight: 34 }, n.scroll);
	});
	o.scrollProps = l;
	var u = K(function() {
		return {
			data: i.value.filter(function(e) {
				return e.visible;
			}),
			scroll: l.value,
			preventResizeRefresh: !0
		};
	}), d = Le(s, u);
	o.virtualConfig = d, t.virtualConfig = d, Bn(function() {
		d?.isVirtualScroll.value && d.handleScroll();
	});
	var f = function(e) {
		var t;
		(t = n.onScroll) == null || t.call(n, { e }), r.emit("scroll", { e });
	}, p = null, m = function() {
		c.value = !0, p &&= (clearTimeout(p), null), p = setTimeout(function() {
			p = null, c.value = !1;
		}, 100);
	}, h = 0;
	return {
		treeContentRef: s,
		onInnerVirtualScroll: function(e) {
			m();
			var t = d?.isVirtualScroll.value, n = (e.target || e.srcElement).scrollTop;
			h === n ? h = 0 : t && (d.handleScroll(), a.value = d.visibleData.value), h = n, f(e);
		},
		virtualConfig: d,
		scrollToElement: function(e) {
			var t = e.index;
			if (!t && t !== 0) {
				if (e.key == null) {
					me.error("Tree", "scrollToElement: one of `index` or `key` must exist.");
					return;
				}
				if (t = i.value?.findIndex(function(t) {
					return [le(t.data, "key"), le(t.data, n.keys?.value || "value")].includes(e.key);
				}), t < 0) {
					me.error("Tree", `${e.key} does not exist in data, check \`key\` or \`data\` please.`);
					return;
				}
			}
			d.scrollToElement(ja(ja({}, e), {}, { index: t - 1 }));
		}
	};
}
function Na(e, t) {
	var n = L(), r = L([]), i = L([]), a = L(!1), o = mn(e), s = ea(e, o, "value", "defaultValue", "onChange", "change"), c = ea(e, o, "actived", "defaultActived", "onActive", "active"), l = ea(e, o, "expanded", "defaultExpanded", "onExpand", "expand");
	function u(e) {
		d.store = e, d.scope.store = e, i.value = e.getNodes();
	}
	var d = {
		props: e,
		context: t,
		store: null,
		treeContentRef: n,
		nodes: r,
		allNodes: i,
		isScrolling: a,
		mouseEvent: null,
		virtualConfig: null,
		scope: {
			store: null,
			treeContentRef: n,
			treeProps: e,
			scopedSlots: {},
			virtualConfig: null
		},
		setStore: u,
		refProps: o,
		vmValue: s,
		vmActived: c,
		vmExpanded: l
	};
	return { state: d };
}
function Pa(e) {
	var t = e.props, n = e.context, r = e.refProps, i = t.valueMode, a = t.filter, o = t.keys, s = t.checkAllAffectedBy, c = new Yi({
		valueMode: i,
		checkAllAffectedBy: s,
		filter: a
	}), l = e.vmValue[0], u = e.vmActived[0], d = e.vmExpanded[0], f = function() {
		var e = v(t, [
			"expandAll",
			"expandLevel",
			"expandMutex",
			"expandParent",
			"activable",
			"activeMultiple",
			"disabled",
			"disableCheck",
			"checkable",
			"draggable",
			"checkStrictly",
			"checkAllAffectedBy",
			"load",
			"lazy",
			"valueMode",
			"filter",
			"allowFoldNodeOnFilter"
		]);
		c.setConfig(e);
	}, p = function() {
		var e = t.expandParent;
		if (Array.isArray(d.value)) {
			var n = /* @__PURE__ */ new Map();
			d.value.forEach(function(t) {
				if (n.set(t, !0), e) {
					var r = c.getNode(t);
					r && r.getModel().getParents().forEach(function(e) {
						n.set(e.value, !0);
					});
				}
			});
			var r = Array.from(n.keys());
			c.setExpanded(r);
		}
	}, m = !1, h = null, g = function() {
		if (t.allowFoldNodeOnFilter && m) {
			if (m = !1, t.filter) {
				h ||= c.getExpanded();
				var e = [];
				c.getNodes().forEach(function(t) {
					t.vmIsLocked && e.push(t.value);
				}), c.setExpanded(e);
			} else h &&= (c.replaceExpanded(h), null);
		}
	}, _ = function(e, n) {
		t.allowFoldNodeOnFilter && (m = e !== n);
	}, y = function(e) {
		var r = { node: e.node.getModel() };
		Array.isArray(l.value) && l.value.length > 0 && c.replaceChecked(l.value), Array.isArray(d.value) && d.value.length > 0 && c.replaceExpanded(d.value), Array.isArray(u.value) && u.value.length > 0 && c.replaceActived(u.value), t != null && t.onLoad && t?.onLoad(r), n.emit("load", r);
	}, b = function(e) {
		c.reload(e || []), c.refreshNodes(), Array.isArray(l.value) && c.setChecked(l.value), p(), Array.isArray(u.value) && c.setActived(u.value), c.refreshState();
	};
	function x() {
		c.setConfig({ keys: o }), f(), c.append(t.data || []), c.refreshNodes(), Array.isArray(l.value) && c.setChecked(l.value), p(), Array.isArray(u.value) && c.setActived(u.value), c.emitter.on("load", y), c.emitter.on("update", g);
	}
	return x(), e.setStore(c), J(function() {
		return A(l.value || []);
	}, function(e) {
		c.replaceChecked(e);
	}), J(function() {
		return A(d.value || []);
	}, function(e) {
		c.replaceExpanded(e);
	}), J(function() {
		return A(u.value || []);
	}, function(e) {
		c.replaceActived(e);
	}), J(r.filter, function(e, t) {
		_(e, t);
	}), J(r.keys, function(e) {
		c.setConfig({ keys: e });
	}), J(r.expandAll, function(e) {
		if (e) {
			var t = c.getNodes().filter(function(e) {
				return Array.isArray(e.children) && e.children.length;
			}).map(function(e) {
				return e.value;
			});
			c.setExpanded(t);
		} else c.replaceExpanded(h), h = null;
	}), {
		store: c,
		rebuild: b,
		checkFilterExpand: _,
		updateStoreConfig: f,
		updateExpanded: p,
		expandFilterPath: g
	};
}
function Fa(e) {
	return e && (isNaN(Number(e)) ? e : `${e}px`);
}
function Ia(e) {
	var t = e.props, n = Dt("tree").value, r = Dt().value, i = e.virtualConfig, a = e.isScrolling, o = e.refProps, s = o.height, c = o.maxHeight;
	return {
		treeClasses: K(function() {
			var e = [n], o = t.disabled, s = t.hover, c = t.transition, l = t.checkable, u = t.draggable, d = t.expandOnClickNode, f = t.scroll;
			return o && e.push(`${r}-is-disabled`), s && e.push(`${n}--hoverable`), l && e.push(`${n}--checkable`), u && e.push(`${n}--draggable`), c && e.push(`${n}--transition`), d && e.push(`${n}--block-node`), i?.isVirtualScroll.value ? (e.push(`${n}__vscroll`), a.value && e.push(`${n}--scrolling`)) : f && f.type === "lazy" && e.push(`${n}__lazyload`), e;
		}),
		treeContentStyles: K(function() {
			return {
				height: Fa(s.value),
				maxHeight: Fa(c.value),
				overflowY: Fa(s.value) || Fa(c.value) ? "auto" : void 0
			};
		}),
		scrollStyles: K(function() {
			var e = `translateY(${i?.isVirtualScroll.value ? i?.translateY.value : 0}px)`;
			return {
				transform: e,
				"-ms-transform": e,
				"-moz-transform": e,
				"-webkit-transform": e
			};
		}),
		cursorStyles: K(function() {
			var e = `translate(0, ${i?.isVirtualScroll.value ? i?.translateY.value : 0}px)`;
			return {
				transform: e,
				"-ms-transform": e,
				"-moz-transform": e,
				"-webkit-transform": e
			};
		})
	};
}
var La = {
	activable: Boolean,
	activeMultiple: Boolean,
	actived: {
		type: Array,
		default: void 0
	},
	defaultActived: { type: Array },
	allowDrop: { type: Function },
	allowFoldNodeOnFilter: Boolean,
	checkAllAffectedBy: {
		type: String,
		default: "all",
		validator: function(e) {
			return !e || ["all", "onlyEnabled"].includes(e);
		}
	},
	checkProps: { type: Object },
	checkStrictly: Boolean,
	checkable: Boolean,
	data: {
		type: Array,
		default: function() {
			return [];
		}
	},
	disableCheck: {
		type: [Boolean, Function],
		default: !1
	},
	disabled: Boolean,
	draggable: Boolean,
	empty: {
		type: [String, Function],
		default: ""
	},
	expandAll: Boolean,
	expandLevel: {
		type: Number,
		default: 0
	},
	expandMutex: Boolean,
	expandOnClickNode: Boolean,
	expandParent: Boolean,
	expanded: {
		type: Array,
		default: void 0
	},
	defaultExpanded: {
		type: Array,
		default: function() {
			return [];
		}
	},
	filter: { type: Function },
	height: { type: [String, Number] },
	hover: Boolean,
	icon: {
		type: [Boolean, Function],
		default: !0
	},
	keys: { type: Object },
	label: {
		type: [
			String,
			Boolean,
			Function
		],
		default: !0
	},
	lazy: {
		type: Boolean,
		default: !0
	},
	line: {
		type: [Boolean, Function],
		default: !1
	},
	load: { type: Function },
	maxHeight: { type: [String, Number] },
	operations: { type: Function },
	scroll: { type: Object },
	transition: {
		type: Boolean,
		default: !0
	},
	value: {
		type: Array,
		default: void 0
	},
	modelValue: {
		type: Array,
		default: void 0
	},
	defaultValue: {
		type: Array,
		default: function() {
			return [];
		}
	},
	valueMode: {
		type: String,
		default: "onlyLeaf",
		validator: function(e) {
			return !e || [
				"onlyLeaf",
				"parentFirst",
				"all"
			].includes(e);
		}
	},
	onActive: Function,
	onChange: Function,
	onClick: Function,
	onDragEnd: Function,
	onDragLeave: Function,
	onDragOver: Function,
	onDragStart: Function,
	onDrop: Function,
	onExpand: Function,
	onLoad: Function,
	onScroll: Function
};
function Ra(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function za(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ra(Object(n), !0).forEach(function(t) {
			M(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ra(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ba(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Cr(e);
}
var Va = Zi(G({
	name: "TTree",
	model: {
		prop: "value",
		event: "change"
	},
	props: La,
	setup: function(t, n) {
		var r = e("tree"), i = r.t, a = r.global, o = Dt(), s = Dt("tree"), c = de(), l = We().keepExpand, u = Na(t, n).state, d = u.treeContentRef, f = u.isScrolling, p = Pa(u), m = p.store, h = p.updateStoreConfig, g = p.rebuild;
		pa(u);
		var _ = ma(u), v = _.setActived, y = _.setExpanded, b = _.setChecked, x = Ma(u), S = x.onInnerVirtualScroll, C = x.virtualConfig, w = x.scrollToElement, T = ka(u), E = T.renderTreeNodes, D = T.nodesEmpty, O = Ia(u);
		return {
			t: i,
			global: a,
			classPrefix: o,
			componentName: s,
			state: u,
			store: m,
			treeClasses: O.treeClasses,
			treeContentRef: d,
			renderTNodeJSX: c,
			keepExpand: l,
			rebuild: g,
			updateStoreConfig: h,
			setActived: v,
			setExpanded: y,
			setChecked: b,
			renderTreeNodes: E,
			nodesEmpty: D,
			isScrolling: f,
			onInnerVirtualScroll: S,
			treeContentStyles: O.treeContentStyles,
			scrollStyles: O.scrollStyles,
			cursorStyles: O.cursorStyles,
			virtualConfig: C,
			scrollToElement: w,
			scrollTo: w
		};
	},
	watch: { data: function(e) {
		this.rebuild(e);
	} },
	methods: {
		refresh: function() {
			this.store.refreshState();
		},
		setItem: function(e, t) {
			var n = this, r = this.store.getNode(e), i = t, a = Object.keys(i);
			r && i && ([
				"expanded",
				"actived",
				"checked"
			].forEach(function(e) {
				if (a.includes(e)) {
					var t = i[e];
					delete i[e];
					var o = n[`set${Ie(e)}`];
					ye(o) && o.call(n, r, t);
				}
			}), r.set(i));
		},
		getItem: function(e) {
			return this.store.getNode(e)?.getModel();
		},
		getItems: function(e) {
			return this.store.getNodes(e).map(function(e) {
				return e.getModel();
			});
		},
		appendTo: function(e, t) {
			var n = this.store, r = [];
			r = Array.isArray(t) ? t : [t], r.forEach(function(t) {
				var r = fa(n, t?.value ?? "");
				r ? n.appendNodes(e, r) : n.appendNodes(e, t);
			});
		},
		insertBefore: function(e, t) {
			var n = this.store, r = fa(n, t?.value ?? "");
			r ? n.insertBefore(e, r) : n.insertBefore(e, t);
		},
		insertAfter: function(e, t) {
			var n = this.store, r = fa(n, t?.value ?? "");
			r ? n.insertAfter(e, r) : n.insertAfter(e, t);
		},
		remove: function(e) {
			return this.store.remove(e);
		},
		getIndex: function(e) {
			return this.store.getNodeIndex(e);
		},
		getParent: function(e) {
			return this.store.getParent(e)?.getModel();
		},
		getParents: function(e) {
			return this.store.getParents(e).map(function(e) {
				return e.getModel();
			});
		},
		getPath: function(e) {
			var t = this.store.getNode(e), n = [];
			return t && (n = t.getPath().map(function(e) {
				return e.getModel();
			})), n;
		},
		getTreeData: function(e) {
			var t = [];
			if (e != null) {
				var n = this.store.getNode(e);
				if (!n) return [];
				t = n.walk();
			} else t = this.store.getNodes();
			var r = /* @__PURE__ */ new Map(), i = [];
			return t.forEach(function(e) {
				var t = e.value, n = za(za({}, e.data), {}, { value: t });
				n.children !== !0 && delete n.children, r.set(t, n);
				var a = e.getParent();
				if (!a) i.push(n);
				else {
					var o = r.get(a.value);
					o ? (Array.isArray(o.children) || (o.children = []), o.children.push(n)) : i.push(n);
				}
			}), i;
		}
	},
	render: function(e) {
		var t = this.state, n = this.treeClasses, r = this.updateStoreConfig, i = this.renderTreeNodes, a = this.nodesEmpty, o = this.isScrolling, s = this.virtualConfig, c = this.treeContentStyles, l = this.scrollStyles, u = this.cursorStyles, d = Qi(e), f = t.scope, p = t.allNodes, m = t.refProps;
		f.scopedSlots = $i(this), r();
		var h = i(d), g = this.componentName, _ = s.isVirtualScroll.value, v = null;
		if (a) {
			var y = !this.empty && !this.$slots.empty ? this.t(this.global.empty) : this.renderTNodeJSX("empty");
			v = V("div", { class: `${g}__empty` }, [y]);
		} else h.length <= 0 && (v = V("div", null, null));
		var b = this.$props.transition, x = null;
		x = !b || !this.keepExpand || _ && o ? V("div", {
			class: `${g}__list`,
			style: l
		}, [h]) : V(An, {
			tag: "div",
			class: `${g}__list`,
			"enter-active-class": `${g}__item--enter-active`,
			"leave-active-class": `${g}__item--leave-active`,
			style: l
		}, Ba(h) ? h : { default: function() {
			return [h];
		} });
		var S = {
			width: "1px",
			height: "1px",
			opacity: 0,
			pointerEvents: "none",
			position: "absolute",
			left: 0,
			top: `${(p.value?.filter(function(e) {
				return e.visible;
			}).length ?? 0) * (m.scroll.value?.rowHeight ?? 34)}px`
		}, C = V("div", { style: S }, null);
		return V("div", {
			class: n,
			ref: "treeContentRef",
			onScroll: this.onInnerVirtualScroll,
			style: c
		}, [
			_ && V("div", {
				class: `${g}__vscroll-cursor`,
				style: u
			}, null),
			v || x,
			_ && C
		]);
	}
})), Ha = Xe(gi), Ua = {
	closeBtn: {
		type: [
			String,
			Boolean,
			Function
		],
		default: void 0
	},
	content: { type: [String, Function] },
	default: { type: [String, Function] },
	duration: {
		type: Number,
		default: 3e3
	},
	footer: { type: [String, Function] },
	icon: {
		type: [Boolean, Function],
		default: !0
	},
	theme: {
		type: String,
		default: "info",
		validator: function(e) {
			return !e || [
				"info",
				"success",
				"warning",
				"error"
			].includes(e);
		}
	},
	title: { type: [String, Function] },
	onClose: Function,
	onCloseBtnClick: Function,
	onDurationEnd: Function
}, Wa = "16px", Ga = Object.keys({
	"top-left": {
		left: Wa,
		top: Wa
	},
	"top-right": {
		right: Wa,
		top: Wa
	},
	"bottom-right": {
		right: Wa,
		bottom: Wa
	},
	"bottom-left": {
		left: Wa,
		bottom: Wa
	}
}), Ka = {
	duration: 200,
	easing: "linear"
}, qa = function(e, t, n) {
	if (!Ga.includes(e)) return null;
	if (e === "top-right") return [{
		opacity: 0,
		transform: `translateX(${t}px)`
	}, {
		opacity: 1,
		transform: "translateX(0px)"
	}];
	if (e === "bottom-right") return [{
		opacity: 0,
		transform: `translateX(${t}px)`,
		marginBottom: `-${n}px`
	}, {
		opacity: 1,
		transform: "translateX(0px)"
	}];
	if (e === "top-left") return [{
		opacity: 0,
		transform: `translateX(-${t}px)`
	}, {
		opacity: 1,
		transform: "translateX(0px)"
	}];
	if (e === "bottom-left") return [{
		opacity: 0,
		transform: `translateX(-${t}px)`,
		marginBottom: `-${n}px`
	}, {
		opacity: 1,
		transform: "translateX(0px)"
	}];
}, Ja = function(e, t, n) {
	if (!Ga.includes(e)) return null;
	if (e === "top-right") return [{
		opacity: 1,
		transform: "translateX(0px)"
	}, {
		opacity: 0,
		transform: `translateX(${t}px)`,
		marginBottom: `-${n}px`
	}];
	if (e === "bottom-right") return [{
		opacity: 1,
		transform: "translateX(0px)"
	}, {
		opacity: 0,
		transform: `translateX(${t}px)`
	}];
	if (e === "top-left") return [{
		opacity: 1,
		transform: "translateX(0px)"
	}, {
		opacity: 0,
		transform: `translateX(-${t}px)`,
		marginBottom: `-${n}px`
	}];
	if (e === "bottom-left") return [{
		opacity: 1,
		transform: "translateX(0px)"
	}, {
		opacity: 0,
		transform: `translateX(-${t}px)`
	}];
}, Ya = function(e, t) {
	if (e) {
		var n = e?.offsetHeight || 0, r = qa(t, e?.offsetWidth || 0, n);
		r && e.animate && e.animate(r, Ka);
	}
}, Xa = function(e, t, n) {
	if (e) {
		var r = e?.offsetHeight || 0, i = Ja(t, e?.offsetWidth || 0, r);
		if (!i) return n();
		var a = e.animate && e.animate(i, Ka);
		a ? a.onfinish = function() {
			n();
		} : (e.style.display = "none", n());
	}
};
function Za(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Qa(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Za(Object(n), !0).forEach(function(t) {
			M(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Za(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var $a = G({
	name: "TNotification",
	props: Qa(Qa({}, Ua), {}, {
		placement: String,
		className: String
	}),
	setup: function(t, n) {
		var r = n.slots, i = n.expose, a = Dt("notification"), o = e("classPrefix").classPrefix, s = Be({
			InfoCircleFilledIcon: tt,
			CheckCircleFilledIcon: Ct,
			CloseIcon: Me
		}), c = s.InfoCircleFilledIcon, l = s.CheckCircleFilledIcon, u = s.CloseIcon, d = de(), f = D(), p = L(null), m = L(null), h = function(e) {
			var n = m.value;
			Xa(n, t.placement, function() {
				var n;
				(n = t.onCloseBtnClick) == null || n.call(t, { e });
			});
		}, g = function() {
			var e = m.value;
			Xa(e, t.placement, function() {
				var e;
				(e = t.onClose) == null || e.call(t);
			});
		}, _ = function() {
			var e;
			if (t.icon === !1) return null;
			if (ye(t.icon)) e = t.icon(In);
			else if (r.icon) e = r.icon(null);
			else if (t.theme) {
				var n = t.theme === "success" ? V(l, { class: `${o.value}-is-${t.theme}` }, null) : V(c, { class: `${o.value}-is-${t.theme}` }, null);
				e = V("div", { class: `${o.value}-notification__icon` }, [n]);
			}
			return e;
		}, v = function() {
			var e = V(u, null, null);
			return V("span", {
				class: `${o.value}-message__close`,
				onClick: h
			}, [d("closeBtn", e)]);
		}, y = function() {
			return V("div", { class: `${a.value}__content` }, [f("default", "content")]);
		}, b = function() {
			t.duration && clearTimeout(p.value);
		}, x = function() {
			t.duration && (p.value = Number(setTimeout(function() {
				b();
				var e = m.value;
				Xa(e, t.placement, function() {
					var e;
					(e = t.onDurationEnd) == null || e.call(t);
				});
			}, t.duration)));
		};
		return ir(function() {
			t.duration && x();
		}), Bn(function() {
			var e = m.value;
			Ya(e, t.placement);
		}), i({ close: g }), function() {
			return V("div", {
				ref: m,
				class: [a.value, t.className],
				onMouseenter: b,
				onMouseleave: x
			}, [_(), V("div", { class: `${a.value}__main` }, [
				V("div", { class: `${a.value}__title__wrap` }, [V("span", { class: `${a.value}__title` }, [d("title")]), v()]),
				y(),
				d("footer")
			])]);
		};
	}
}), eo = Xe($a), to = {
	get data() {
		return H("designer.types.data");
	},
	get edit() {
		return H("designer.types.edit");
	},
	get export() {
		return H("designer.types.export");
	},
	get file() {
		return H("designer.types.file");
	},
	get help() {
		return H("designer.types.help");
	},
	get layout() {
		return H("designer.types.layout");
	},
	get page() {
		return H("designer.types.page");
	},
	get view() {
		return H("designer.types.view");
	}
};
function no(e) {
	let t = e.store(), n = K(() => [{
		exact: !1,
		run: () => t.view.setSpacePanning(!0),
		shortcut: "Space"
	}, ...e.commands.list().map((t) => ({
		preventDefault: t.preventDefault,
		run: (n) => {
			e.commands.dispatch(t.id, n);
		},
		shortcut: t.shortcut ?? []
	}))]), { space: r } = re(n, { filter: i });
	function i(n) {
		if (t.tutorial.phase === "running") return !1;
		let r = n.target, i = e.root?.();
		return i && (!(r instanceof Node) || !i.contains(r)) ? !1 : !(r instanceof HTMLElement && ([
			"INPUT",
			"SELECT",
			"TEXTAREA"
		].includes(r.tagName) || r.isContentEditable || r.closest("[contenteditable]:not([contenteditable=\"false\"])") !== null) || Array.from((i ?? document).querySelectorAll("[data-dialog-host]")).some((e) => e.getClientRects().length > 0));
	}
	J(r, (e) => {
		e || t.view.setSpacePanning(!1);
	}, { flush: "sync" }), Sn(() => t.view.setSpacePanning(!1));
}
var ro = "data:image/png;base64,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";
function io(e) {
	return e.composedPath().some((e) => e instanceof Element && e.hasAttribute("data-menu-keep-open"));
}
var ao = {
	key: 0,
	class: "my-1 h-px bg-edge"
}, oo = ["aria-label"], so = [
	"data-checked",
	"data-command",
	"disabled",
	"aria-pressed",
	"onClick"
], co = [
	"data-command",
	"title",
	"disabled",
	"onClick"
], lo = { class: "flex-1" }, uo = {
	key: 3,
	class: "group/menu relative"
}, fo = {
	class: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs text-ink hover:bg-menu-hover hover:text-menu-foreground",
	"aria-haspopup": "true"
}, po = { class: "flex-1" }, mo = { class: "invisible absolute left-full top-0 z-10 min-w-48 rounded-(--studio-menu-radius) border border-edge bg-menu-surface py-1 [box-shadow:var(--td-shadow-2)] group-hover/menu:visible group-has-[:focus-visible]/menu:visible" }, ho = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "menu-items",
	props: { items: {} },
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = u(), r = t;
		function i(e) {
			return e.disabled ? "cursor-not-allowed text-(--td-text-color-disabled)" : e.danger ? "text-danger hover:bg-menu-danger-hover hover:text-menu-danger-ink" : "text-ink hover:bg-menu-hover hover:text-menu-foreground";
		}
		function a(e) {
			e.disabled || r("select", e);
		}
		return (t, r) => {
			let o = fr("menu-items", !0);
			return F(!0), X(Y, null, Z(e.items, (e, t) => (F(), X(Y, { key: t }, [e.type === "divider" ? (F(), X("div", ao)) : e.type === "segment" ? (F(), X("div", {
				key: 1,
				class: P(["flex items-center gap-2 px-2 py-2 whitespace-nowrap", U(n)("menu-items__segment")]),
				"data-menu-keep-open": ""
			}, [
				V(N, {
					name: e.icon ?? "dots",
					class: "h-3.5 w-3.5 shrink-0"
				}, null, 8, ["name"]),
				R("span", null, q(e.label), 1),
				R("div", {
					class: P(["inline-flex ml-auto p-0.5 border border-edge bg-panel-2 rounded", U(n)("menu-items__segments")]),
					role: "group",
					"aria-label": e.label
				}, [(F(!0), X(Y, null, Z(e.items, (e) => (F(), X("button", {
					key: e.commandId,
					"data-component": "menu-items__option",
					"data-checked": e.checked,
					type: "button",
					"data-command": e.commandId,
					disabled: e.disabled,
					"aria-pressed": e.checked,
					class: P(["rounded-xs text-ink-dim disabled:text-ink-disabled [padding:3px_7px] focus-visible:[outline:2px_solid_var(--color-accent)] focus-visible:[outline-offset:2px] hover:bg-panel-3 hover:text-ink", [U(n)("menu-items__option"), { [U(n)("menu-items__option--checked")]: e.checked }]]),
					onClick: (t) => a(e)
				}, q(e.label), 11, so))), 128))], 10, oo)
			], 2)) : e.type === "item" ? (F(), X("button", {
				key: 2,
				"data-component": "menu-items__item",
				"data-command": e.commandId,
				class: P(["flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs", [U(n)("menu-items__item"), i(e)]]),
				title: e.help,
				disabled: e.disabled,
				onClick: (t) => a(e)
			}, [
				V(N, {
					name: e.icon ?? "dots",
					class: "h-3.5 w-3.5 shrink-0"
				}, null, 8, ["name"]),
				R("span", lo, q(e.label), 1),
				e.checked === void 0 ? e.shortcut ? (F(), X("span", {
					key: 1,
					"data-component": "menu-items__shortcut",
					class: P(["text-caption text-ink-muted", U(n)("menu-items__shortcut")])
				}, q(e.shortcut), 3)) : W("", !0) : (F(), X("span", {
					key: 0,
					"data-component": "menu-items__check",
					class: P(["text-caption text-accent", U(n)("menu-items__check")])
				}, q(e.checked ? U(H)("designer.menuBar.checkedIndicator") : ""), 3))
			], 10, co)) : (F(), X("div", uo, [R("button", fo, [
				V(N, {
					name: e.icon ?? "dots",
					class: "h-3.5 w-3.5 shrink-0"
				}, null, 8, ["name"]),
				R("span", po, q(e.label), 1),
				r[0] ||= R("span", { "aria-hidden": "true" }, "›", -1)
			]), R("div", mo, [V(o, {
				items: e.items,
				onSelect: a
			}, null, 8, ["items"])])]))], 64))), 128);
		};
	}
}), [["__scopeId", "data-v-8a88fa6c"]]), go = ["aria-label", "aria-expanded"], _o = ["aria-label"], vo = [
	"data-command",
	"aria-checked",
	"disabled",
	"onClick"
], yo = { class: "flex-1" }, bo = /* @__PURE__ */ G({
	__name: "theme-selector",
	setup(e) {
		let t = E(), n = L(), r = L(), i = L(), a = L(!1), { isTop: o, zIndex: s } = Kt(a), c = K(() => d.flatMap(({ mode: e }) => {
			let n = t.commands.get(l(e));
			return n ? [ce(n, (e, ...n) => {
				t.commands.dispatch(e, ...n);
			})] : [];
		})), u = K(() => c.value.find((e) => e.checked)), f = K(() => H("designer.theme.groupLabel")), p = K(() => u.value ? `${f.value}: ${u.value.label}` : f.value);
		function m() {
			a.value = !1;
		}
		function h() {
			m(), r.value?.focus();
		}
		async function g(e = "first") {
			a.value = !0, await Lr(), v(e);
		}
		function _() {
			a.value ? h() : g();
		}
		function v(e) {
			let t = i.value?.querySelectorAll("[role=\"menuitemradio\"]:not(:disabled)");
			if (!t?.length) return;
			let n = [...t].findIndex((e) => e === document.activeElement);
			switch (e) {
				case "first":
					t[0].focus();
					break;
				case "last":
					t[t.length - 1].focus();
					break;
				case "next":
					t[(n + 1) % t.length].focus();
					break;
				case "previous": t[(Math.max(n, 0) - 1 + t.length) % t.length].focus();
			}
		}
		function y(e) {
			e.disabled || (h(), e.action());
		}
		function b(e) {
			e.stopPropagation();
		}
		function x(e) {
			e.relatedTarget instanceof Node && n.value?.contains(e.relatedTarget) || m();
		}
		function S(e) {
			n.value && !e.composedPath().includes(n.value) && m();
		}
		return re([
			{
				run: () => void g("first"),
				shortcut: "ArrowDown"
			},
			{
				run: () => void g("last"),
				shortcut: "ArrowUp"
			},
			{
				preventDefault: !1,
				run: b,
				shortcut: "Space"
			}
		], { target: r }), re([
			{
				run: () => v("next"),
				shortcut: "ArrowDown"
			},
			{
				run: () => v("previous"),
				shortcut: "ArrowUp"
			},
			{
				run: () => v("first"),
				shortcut: "Home"
			},
			{
				run: () => v("last"),
				shortcut: "End"
			},
			{
				preventDefault: !1,
				run: b,
				shortcut: "Space"
			}
		], { target: i }), re([{
			run: h,
			shortcut: "Escape"
		}], {
			enabled: () => a.value && o.value,
			target: () => document
		}), xe(window, "click", S, { capture: !0 }), (e, t) => c.value.length ? (F(), X("div", {
			key: 0,
			ref_key: "root",
			ref: n,
			class: "relative shrink-0",
			onFocusout: x
		}, [R("button", {
			ref_key: "trigger",
			ref: r,
			type: "button",
			class: "flex h-7 items-center gap-1.5 rounded-sm border border-edge px-2 text-xs text-ink-dim hover:bg-edge hover:text-ink focus-visible:outline-2 focus-visible:outline-accent",
			"aria-label": p.value,
			"aria-expanded": a.value,
			"aria-haspopup": "menu",
			onClick: _
		}, [
			V(N, {
				name: u.value?.icon ?? "palette",
				class: "h-4 w-4"
			}, null, 8, ["name"]),
			R("span", null, q(u.value?.label ?? f.value), 1),
			V(N, {
				name: "chevron-down",
				class: "h-3 w-3"
			})
		], 8, go), a.value ? (F(), X("div", {
			key: 0,
			ref_key: "menu",
			ref: i,
			role: "menu",
			"aria-label": f.value,
			style: B({ zIndex: U(s) }),
			class: "absolute right-0 top-full mt-1 min-w-32 rounded-(--studio-menu-radius) border border-edge bg-menu-surface py-1 [box-shadow:var(--td-shadow-2)]"
		}, [(F(!0), X(Y, null, Z(c.value, (e) => (F(), X("button", {
			key: e.commandId,
			type: "button",
			role: "menuitemradio",
			tabindex: "-1",
			"data-command": e.commandId,
			"aria-checked": e.checked ?? !1,
			class: P([{ "bg-menu-selected text-menu-selected-ink": e.checked }, "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs text-ink enabled:hover:bg-menu-hover enabled:hover:text-menu-foreground focus-visible:bg-menu-hover focus-visible:text-menu-foreground disabled:cursor-not-allowed disabled:text-ink-disabled"]),
			disabled: e.disabled,
			onClick: (t) => y(e)
		}, [
			V(N, {
				name: e.icon ?? "palette",
				class: "h-4 w-4"
			}, null, 8, ["name"]),
			R("span", yo, q(e.label), 1),
			e.checked ? (F(), I(N, {
				key: 0,
				name: "check",
				class: "h-3.5 w-3.5"
			})) : W("", !0)
		], 10, vo))), 128))], 12, _o)) : W("", !0)], 544)) : W("", !0);
	}
}), xo = { class: "relative flex h-9 shrink-0 items-center gap-1 border-b border-edge bg-app px-2" }, So = ["src", "alt"], Co = {
	key: 1,
	class: "mr-2 shrink-0 select-none text-xs font-semibold tracking-wide text-ink"
}, wo = { class: "flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-hidden" }, To = [
	"data-menu-label",
	"onClick",
	"onMouseenter"
], Eo = ["title"], Do = "Print Studio", Oo = /* @__PURE__ */ G({
	__name: "menu-bar",
	props: { menus: {} },
	setup(e) {
		let t = e, n = K(() => H("designer.menuBar.brandName") !== Do), r = E().store(), i = L([]), a = L(null), { isTop: o, zIndex: s } = Kt(() => a.value !== null), c = L([]), l = L({
			left: "0px",
			top: "0px"
		});
		function u() {
			a.value = null;
		}
		function d(e, t) {
			c.value[e] = t;
		}
		function f(e) {
			let t = c.value[e];
			if (!t) return;
			let n = t.getBoundingClientRect();
			l.value = {
				left: `${Math.round(n.left)}px`,
				top: `${Math.round(n.bottom) + 4}px`
			};
		}
		function p(e) {
			a.value === e ? a.value = null : (a.value = e, f(e));
		}
		function m(e) {
			a.value !== null && a.value !== e && (a.value = e, f(e));
		}
		function h(e) {
			e.disabled || (e.keepOpen || (a.value = null), e.action());
		}
		function g(e) {
			if (io(e)) return;
			let t = e.composedPath();
			i.value.some((e) => t.includes(e)) || u();
		}
		return ke("menu", (e) => {
			let n = t.menus.findIndex((t) => t.label === e);
			a.value = n < 0 ? null : n, n >= 0 && f(n);
		}), re([{
			run: u,
			shortcut: "Escape"
		}], {
			enabled: () => a.value !== null && o.value,
			target: () => document
		}), xe(window, "click", g, { capture: !0 }), (t, o) => (F(), X("div", xo, [
			n.value ? (F(), X("span", Co, q(U(H)("designer.menuBar.brandName")), 1)) : (F(), X("img", {
				key: 0,
				"data-brand-logo": "",
				src: U(ro),
				alt: U(H)("app.app.logoAccessibleLabel"),
				class: "mr-2 h-5.5 w-5.5 shrink-0 self-center rounded-sm"
			}, null, 8, So)),
			R("div", wo, [(F(!0), X(Y, null, Z(e.menus, (e, t) => (F(), X("div", {
				key: e.label,
				ref_for: !0,
				ref_key: "menuGroupEls",
				ref: i,
				class: "relative shrink-0"
			}, [R("button", {
				ref_for: !0,
				ref: (e) => d(t, e),
				"data-menu-label": e.label,
				class: P(["flex items-center gap-1.5 rounded-sm px-2 py-1 text-xs", a.value === t ? "bg-selected text-on-selected" : "text-ink-dim hover:bg-panel-3 hover:text-ink"]),
				onClick: (e) => p(t),
				onMouseenter: (e) => m(t)
			}, [V(N, {
				name: e.icon ?? "dots",
				class: "h-3.5 w-3.5 shrink-0"
			}, null, 8, ["name"]), z(" " + q(e.label), 1)], 42, To), a.value === t ? (F(), X("div", {
				key: 0,
				class: "fixed min-w-48 rounded-(--studio-menu-radius) border border-edge bg-menu-surface py-1 [box-shadow:var(--td-shadow-2)]",
				style: B({
					...l.value,
					zIndex: U(s)
				})
			}, [V(ho, {
				items: e.items,
				onSelect: h
			}, null, 8, ["items"])], 4)) : W("", !0)]))), 128))]),
			R("span", {
				class: "max-w-48 shrink truncate select-none text-compact text-ink-dim/60",
				title: U(r).document.data.name
			}, q(U(r).document.data.name), 9, Eo),
			V(bo, { class: "ml-2" })
		]));
	}
}), ko = [
	"data-measuring",
	"inert",
	"aria-hidden"
], Ao = [
	"data-measuring",
	"inert",
	"aria-hidden"
], jo = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "overflow-row",
	props: {
		items: {},
		moreLabel: {}
	},
	setup(e) {
		let t = u(), n = e, r = L(), i = L(), a = dn(/* @__PURE__ */ new Map()), o = dn(/* @__PURE__ */ new Map()), s = L({}), c = L(0), l = L(0), d = L(!1), { popupProps: f } = ue({ onVisibleChange: g }, "popupProps", d), p = K(() => [
			r.value,
			i.value,
			...o.values()
		].filter((e) => !!e)), m = K(() => {
			let e = n.items.map((e) => s.value[e.key]);
			if (e.some((e) => e === void 0)) return n.items.length;
			if (e.reduce((e, t) => e + t, 0) + Math.max(0, e.length - 1) * 8 <= c.value) return e.length;
			let t = l.value, r = 0;
			for (let n of e) {
				if (t += n + 8, t > c.value) break;
				r++;
			}
			return r;
		});
		function h(e, t) {
			t instanceof HTMLElement ? o.set(e, t) : o.delete(e);
		}
		function g(e) {
			d.value = e;
		}
		function _(e, t) {
			t instanceof HTMLElement ? a.set(e, t) : a.delete(e);
		}
		function v() {
			c.value = r.value?.clientWidth ?? 0, l.value = i.value?.getBoundingClientRect().width ?? 0;
			let e = { ...s.value };
			for (let [t, n] of o) {
				let r = n.getBoundingClientRect().width;
				r > 0 && (e[t] = r);
			}
			s.value = e;
		}
		return J(m, (e) => {
			e === n.items.length && (d.value = !1);
		}), he(p, v), (n, o) => {
			let s = Ee, c = Ge;
			return F(), X("div", {
				ref_key: "root",
				ref: r,
				"data-component": "overflow-row",
				class: P(U(t)("overflow-row"))
			}, [(F(!0), X(Y, null, Z(e.items, (e, i) => (F(), I(Ur, {
				key: e.key,
				to: U(a).get(e.key) ?? r.value ?? "body",
				disabled: i < m.value || !U(a).has(e.key)
			}, [R("div", {
				ref_for: !0,
				ref: (t) => h(e.key, t),
				"data-component": "overflow-row__item",
				"data-measuring": i >= m.value && !U(a).has(e.key),
				class: P([U(t)("overflow-row__item"), { [U(t)("overflow-row__item--measuring")]: i >= m.value && !U(a).has(e.key) }]),
				inert: i >= m.value && !U(a).has(e.key),
				"aria-hidden": i >= m.value && !U(a).has(e.key) || void 0
			}, [Bt(n.$slots, "default", { item: e }, void 0, !0)], 10, ko)], 8, ["to", "disabled"]))), 128)), R("div", {
				ref_key: "trigger",
				ref: i,
				"data-component": "overflow-row__trigger",
				"data-measuring": m.value === e.items.length,
				class: P([U(t)("overflow-row__trigger"), { [U(t)("overflow-row__trigger--measuring")]: m.value === e.items.length }]),
				inert: m.value === e.items.length,
				"aria-hidden": m.value === e.items.length || void 0
			}, [V(c, _r(U(f), {
				visible: d.value,
				"destroy-on-close": !1,
				trigger: "click",
				placement: "bottom-left"
			}), {
				content: $(() => [R("div", {
					"data-component": "overflow-row__popup",
					class: P(["flex flex-col items-start gap-3 overflow-auto p-2", U(t)("overflow-row__popup")])
				}, [(F(!0), X(Y, null, Z(e.items, (e) => (F(), X("div", {
					key: e.key,
					ref_for: !0,
					ref: (t) => _(e.key, t),
					"data-component": "overflow-row__host",
					class: P(U(t)("overflow-row__host"))
				}, null, 2))), 128))], 2)]),
				default: $(() => [V(s, {
					variant: "outline",
					"aria-label": e.moreLabel
				}, {
					default: $(() => [z(q(e.moreLabel), 1)]),
					_: 1
				}, 8, ["aria-label"])]),
				_: 1
			}, 16, ["visible"])], 10, Ao)], 2);
		};
	}
}), [["__scopeId", "data-v-8574aa0a"]]), Mo = /* @__PURE__ */ G({
	__name: "check-toggle",
	props: /*@__PURE__*/ Xn({ label: {} }, {
		modelValue: { type: Boolean },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = Nn(e, "modelValue");
		return (n, r) => {
			let i = $e;
			return F(), I(i, {
				modelValue: t.value,
				"onUpdate:modelValue": r[0] ||= (e) => t.value = e
			}, {
				default: $(() => [z(q(e.label), 1)]),
				_: 1
			}, 8, ["modelValue"]);
		};
	}
}), No = [
	"data-type",
	"data-disabled",
	"data-tool-option",
	"inert"
], Po = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "tool-option-field",
	props: {
		defaults: { type: Boolean },
		field: {},
		node: {},
		nodes: {}
	},
	setup(e) {
		let t = u(), r = e, a = E(), o = a.store(), s = { labelWidth: 0 }, c = !1, l = K(() => [r.node, ...r.nodes].some((e) => e.locked || r.field.disabledIf?.(e.props))), d = K(() => r.nodes.some((e) => !n(yn(e, r.field), yn(r.node, r.field)))), f = K({
			get() {
				return { value: d.value ? void 0 : yn(r.node, r.field) };
			},
			set(e) {
				if (!(l.value || e.value === void 0 || e.value === null || r.field.type === "number" && e.value === "")) {
					if (r.defaults) o.element.updateToolProps(r.node.type, r.field.value?.set(r.node, e.value).props ?? Pr(r.node.props, r.field.key, e.value));
					else {
						c = !0;
						for (let t of r.nodes) t.locked || r.field.disabledIf?.(t.props) || (r.field.value ? o.element.update(t.id, r.field.value.set(t, e.value), { transient: !0 }) : o.element.updateProps(t.id, Pr(t.props, r.field.key, e.value), { transient: !0 }));
					}
				}
			}
		}), p = K(() => {
			let e = r.field.type === "image" ? {
				...r.field,
				controlProps: {
					...r.field.controlProps,
					compact: !0
				}
			} : r.field;
			return Pe(e, m, r.node, a.elements, {
				mixed: d.value,
				nodes: r.nodes
			}).map((e) => Object.assign({}, e, { props: {
				...e.props,
				"aria-label": r.field.label,
				disabled: l.value || (e.props && "disabled" in e.props ? e.props.disabled : !1)
			} }));
		});
		function m() {
			c &&= (o.history.commit(), !1);
		}
		return Er(m), (n, r) => (F(), X("div", {
			"data-component": "tool-option-field",
			"data-type": e.field.type,
			"data-disabled": l.value,
			class: P(["flex shrink-0 items-center gap-2", [U(t)("tool-option-field"), {
				[U(t)("tool-option-field--image")]: e.field.type === "image",
				[U(t)("tool-option-field--disabled")]: l.value
			}]]),
			"data-tool-option": e.field.key,
			inert: l.value
		}, [R("span", { class: P(["text-compact text-ink-dim", U(t)("tool-option-field__label")]) }, q(e.field.label), 3), V(i, {
			modelValue: f.value,
			"onUpdate:modelValue": r[0] ||= (e) => f.value = e,
			"data-part": "tool-option-field__control",
			class: P(U(t)("tool-option-field__control")),
			schema: p.value,
			"form-props": s
		}, null, 8, [
			"modelValue",
			"class",
			"schema"
		])], 10, No));
	}
}), [["__scopeId", "data-v-ec7f5795"]]), Fo = ["title"], Io = { class: "flex min-w-0 flex-1 items-center gap-2" }, Lo = { class: "w-60 max-w-[calc(100vw-32px)] whitespace-normal" }, Ro = { class: "flex w-60 max-w-[calc(100vw-32px)] flex-col gap-3 p-2" }, zo = /* @__PURE__ */ G({
	__name: "options-bar",
	setup(e) {
		let t = u(), n = { labelWidth: 36 }, r = E(), a = r.store(), { commands: o } = r, { popupProps: s } = ue(), { popupProps: c } = ue(), l = j("snapToGrid"), d = j("snapToGuides"), f = j("snapToMargins"), p = j("snapToElements"), m = j("guidesLocked"), h = j("previewWithData"), g = j("clickToCreate"), _ = K({
			get() {
				return { gridSize: a.view.settings.gridSize };
			},
			set(e) {
				a.view.updateSettings({ gridSize: Number(e.gridSize) || 1 });
			}
		}), v = K(() => [{
			field: "gridSize",
			label: H("designer.optionsBar.gridLabel"),
			props: {
				max: 50,
				min: 1,
				suffix: H("designer.optionsBar.distanceUnit"),
				theme: "normal"
			},
			type: "inputNumber"
		}]), y = K(() => o.get(`tool.use.${a.view.activeTool}`) ? hn(a.view.activeTool, r.elements) : void 0), b = K(() => {
			if (y.value?.kind === "element") return y.value.elementType;
			if (y.value?.kind === "select" && a.selection.sameType) return a.selection.primary?.type;
		}), x = O(() => b.value), S = K(() => !b.value || !a.selection.sameType || a.selection.primary?.type !== b.value ? [] : a.selection.nodes.map((e) => Mn(a.document.data, e, r.elements))), C = K(() => {
			if (S.value.length) return S.value[0];
			let e = x.value;
			return e ? hr(e.type, { props: a.element.getToolProps(e.type) }, r.elements) : void 0;
		}), w = K(() => {
			let e = x.value, t = C.value;
			if (!e || !t) return [];
			let n = (S.value.length ? Dn(e.inspectorSections, a.document.data, t, r.elements) : e.inspectorSections).flatMap((e) => e.fields);
			return (e.toolOptions ?? n.filter((e) => [
				"boolean",
				"color",
				"number",
				"select"
			].includes(e.type)).slice(0, 3).map((e) => e.key)).flatMap((e) => {
				let r = n.find((t) => t.key === e);
				return !r || S.value.length > 1 && !r.batchEditable || ![t, ...S.value].every((e) => r.showIf?.(e.props) ?? !0) ? [] : [r];
			});
		}), T = K(() => x.value ? H(S.value.length ? "designer.optionsBar.selectionContext" : "designer.optionsBar.creationContext", {
			count: S.value.length,
			name: x.value.label
		}) : y.value?.kind === "select" && !a.selection.isEmpty ? H("designer.controlPanel.selectionSummary", { count: a.selection.nodes.length }) : y.value?.label ?? ""), D = K(() => S.value.length ? S.value.map((e) => e.id).join(",") : a.view.activeTool), ee = K({
			get() {
				return { zoom: Math.round(a.view.zoom * 100) };
			},
			set(e) {
				if (typeof e.zoom == "number") {
					let t = e.zoom / 100, n = Jn(a).getStageController();
					n?.zoomTo ? n.zoomTo(t) : a.view.setZoom(t);
				}
			}
		}), k = K(() => [{
			field: "zoom",
			label: H("designer.optionsBar.zoomLabel"),
			props: {
				max: 800,
				min: 5,
				suffix: "%",
				theme: "normal"
			},
			type: "inputNumber"
		}]), A = K(() => [{
			"aria-label": H("designer.optionsBar.undoTitle"),
			disabled: !a.history.canUndo,
			id: "undo",
			onClick: function() {
				te("edit.undo");
			},
			shape: "square",
			slots: { icon: () => [In(N, {
				class: "h-4 w-4",
				name: "undo"
			})] },
			title: H("designer.optionsBar.undoTitle"),
			variant: "outline"
		}, {
			"aria-label": H("designer.optionsBar.redoTitle"),
			disabled: !a.history.canRedo,
			id: "redo",
			onClick: function() {
				te("edit.redo");
			},
			shape: "square",
			slots: { icon: () => [In(N, {
				class: "h-4 w-4",
				name: "redo"
			})] },
			title: H("designer.optionsBar.redoTitle"),
			variant: "outline"
		}]);
		function te(e) {
			o.dispatch(e);
		}
		function j(e) {
			return K({
				get: function() {
					return a.view.settings[e];
				},
				set: function(t) {
					a.view.updateSettings({ [e]: t });
				}
			});
		}
		return (e, r) => {
			let o = Ge;
			return F(), X("div", {
				"data-test-part": "options-bar",
				class: P(["flex h-10 min-w-0 shrink-0 items-center gap-2 border-b border-edge bg-panel pl-3 pr-2", U(t)("options-bar")])
			}, [
				R("span", {
					"data-test-part": "options-bar__context",
					class: P(["max-w-44 shrink truncate text-compact text-ink-dim min-w-0", U(t)("options-bar__context")]),
					title: T.value
				}, q(T.value), 11, Fo),
				R("div", Io, [C.value && w.value.length ? (F(), I(jo, {
					key: D.value,
					class: "flex-1",
					items: w.value,
					"more-label": U(H)("designer.optionsBar.morePropertiesLabel")
				}, {
					default: $(({ item: e }) => [V(Po, {
						defaults: S.value.length === 0,
						field: e,
						node: C.value,
						nodes: S.value
					}, null, 8, [
						"defaults",
						"field",
						"node",
						"nodes"
					])]),
					_: 1
				}, 8, ["items", "more-label"])) : y.value?.kind === "hand" ? (F(), I(i, {
					key: 1,
					modelValue: ee.value,
					"onUpdate:modelValue": r[0] ||= (e) => ee.value = e,
					class: "!w-48 shrink-0",
					schema: k.value,
					"form-props": n
				}, null, 8, ["modelValue", "schema"])) : W("", !0)]),
				R("div", { class: P(["flex shrink-0 items-center gap-2", U(t)("options-bar__actions")]) }, [
					y.value?.kind === "select" && !U(a).selection.isEmpty ? (F(), I(o, _r({ key: 0 }, U(s), {
						trigger: "click",
						placement: "bottom-left"
					}), {
						content: $(() => [R("div", Lo, [
							V(gt, { title: U(H)("designer.controlPanel.alignObjectsSection") }, {
								default: $(() => [V(_e)]),
								_: 1
							}, 8, ["title"]),
							V(gt, { title: U(H)("designer.controlPanel.distributeObjectsSection") }, {
								default: $(() => [V(_e, { kind: "distribute" })]),
								_: 1
							}, 8, ["title"]),
							V(gt, { title: U(H)("designer.controlPanel.distributeSpacingSection") }, {
								default: $(() => [V(_e, { kind: "spacing" })]),
								_: 1
							}, 8, ["title"]),
							V(gt, { title: U(H)("designer.controlPanel.alignToSection") }, {
								default: $(() => [V(Ue)]),
								_: 1
							}, 8, ["title"])
						])]),
						default: $(() => [V(ct, {
							icon: "align-left",
							label: U(H)("designer.optionsBar.moreAlignLabel")
						}, null, 8, ["label"])]),
						_: 1
					}, 16)) : W("", !0),
					V(o, _r(U(c), {
						trigger: "click",
						placement: "bottom-right"
					}), {
						content: $(() => [R("div", Ro, [
							V(Mo, {
								modelValue: U(l),
								"onUpdate:modelValue": r[1] ||= (e) => Gr(l) ? l.value = e : null,
								label: U(H)("designer.optionsBar.snapToGridLabel")
							}, null, 8, ["modelValue", "label"]),
							V(Mo, {
								modelValue: U(d),
								"onUpdate:modelValue": r[2] ||= (e) => Gr(d) ? d.value = e : null,
								label: U(H)("designer.optionsBar.snapToGuidesLabel")
							}, null, 8, ["modelValue", "label"]),
							V(Mo, {
								modelValue: U(p),
								"onUpdate:modelValue": r[3] ||= (e) => Gr(p) ? p.value = e : null,
								label: U(H)("designer.optionsBar.snapToElementsLabel")
							}, null, 8, ["modelValue", "label"]),
							V(Mo, {
								modelValue: U(f),
								"onUpdate:modelValue": r[4] ||= (e) => Gr(f) ? f.value = e : null,
								label: U(H)("designer.optionsBar.snapToMarginsLabel")
							}, null, 8, ["modelValue", "label"]),
							V(Mo, {
								modelValue: U(m),
								"onUpdate:modelValue": r[5] ||= (e) => Gr(m) ? m.value = e : null,
								label: U(H)("designer.optionsBar.lockGuidesLabel")
							}, null, 8, ["modelValue", "label"]),
							V(i, {
								modelValue: _.value,
								"onUpdate:modelValue": r[6] ||= (e) => _.value = e,
								class: "shrink-0",
								schema: v.value,
								"form-props": n
							}, null, 8, ["modelValue", "schema"])
						])]),
						default: $(() => [V(ct, {
							icon: "sliders",
							label: U(H)("designer.optionsBar.assistLabel")
						}, null, 8, ["label"])]),
						_: 1
					}, 16),
					V(Mo, {
						modelValue: U(h),
						"onUpdate:modelValue": r[7] ||= (e) => Gr(h) ? h.value = e : null,
						label: U(H)("designer.optionsBar.dataPreviewLabel"),
						title: U(H)("designer.optionsBar.dataPreviewHint")
					}, null, 8, [
						"modelValue",
						"label",
						"title"
					]),
					y.value?.kind === "element" ? (F(), I(Mo, {
						key: 1,
						modelValue: U(g),
						"onUpdate:modelValue": r[8] ||= (e) => Gr(g) ? g.value = e : null,
						label: U(H)("designer.optionsBar.continuousPlacementLabel")
					}, null, 8, ["modelValue", "label"])) : W("", !0)
				], 2),
				V(U(pe), {
					class: "ml-2 shrink-0",
					actions: A.value,
					wrap: !1
				}, null, 8, ["actions"])
			], 2);
		};
	}
}), Bo = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	focusable: "false"
}, Vo = ["d"], Ho = /* @__PURE__ */ G({
	__name: "tool-icon",
	props: { name: {} },
	setup(e) {
		let t = e, n = {
			barcode: "M3 4h1v16H3zm3 0h2v16H6zm4 0h1v16h-1zm3 0h3v16h-3zm5 0h1v16h-1zm3 0h1v16h-1z",
			ellipse: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z",
			hand: "M8 11V5.5a1 1 0 0 1 2 0V10h.75V3.5a1 1 0 0 1 2 0V10h.75V4.5a1 1 0 0 1 2 0V11h.75V7a1 1 0 0 1 2 0v7c0 4-2.25 6.5-6 6.5H11c-2 0-3.25-1.25-4.5-3L3 12.5a1.2 1.2 0 0 1 1.8-1.6l2.45 2.6H8z",
			image: "M3 4h18v16H3zm1.5 1.5v13h15v-13zM6 16l4-5 3 3 2-2 3 4zm10-9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z",
			line: "M4 19 19 4l1 1L5 20z",
			qrcode: "M3 3h7v7H3zm1.5 1.5v4h4v-4zM5.5 5.5h2v2h-2zM14 3h7v7h-7zm1.5 1.5v4h4v-4zm1 1h2v2h-2zM3 14h7v7H3zm1.5 1.5v4h4v-4zm1 1h2v2h-2zM12 12h4v2h-2v3h-2zm5 0h4v5h-2v-3h-2zm-2 4h2v3h4v2h-6zm-3 3h2v2h-2z",
			rect: "M3 4h18v16H3zm1.5 1.5v13h15v-13z",
			select: "M7 2 3.5 5.5H6V10H1.5L4 7.5 3 6.5 0 10.5l3 4 1-1L1.5 11H6v4.5H3.5L7 19l3.5-3.5H8V11h4.5L10 13.5l1 1 3-4-3-4-1 1 2.5 2.5H8V5.5h2.5zM15 13v9l2.5-2.5 2 3 1.5-1-2-3H23z",
			table: "M3 4h18v16H3zm1.5 1.5V9h15V5.5zm0 5v3h4v-3zm5.5 0v3h4v-3zm5.5 0v3h4v-3zm-11 4.5v3.5h4V15zm5.5 0v3.5h4V15zm5.5 0v3.5h4V15z",
			text: "M4 4h16v5h-1.5l-.75-3.5h-4.5V19l2.75.5V21H8v-1.5l2.75-.5V5.5h-4.5L5.5 9H4z"
		}, r = K(() => n[t.name]);
		return (t, n) => r.value ? (F(), X("svg", Bo, [R("path", {
			d: r.value,
			"fill-rule": "evenodd"
		}, null, 8, Vo)])) : (F(), I(N, {
			key: 1,
			name: e.name
		}, null, 8, ["name"]));
	}
}), Uo = { class: "flex w-11 shrink-0 flex-nowrap flex-col items-center gap-0.5 overflow-hidden border-r border-edge bg-panel py-1.5" }, Wo = [
	"data-active",
	"data-tutorial",
	"title",
	"aria-label",
	"aria-pressed",
	"onClick"
], Go = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "tool-bar",
	setup(e) {
		let t = u(), n = E(), r = n.store(), { commands: i } = n, a = ze((e) => {
			let t = vr(e), n = t.flatMap((e) => {
				let t = i.get(`tool.use.${e.id}`);
				return t ? [{
					command: t,
					tool: e
				}] : [];
			}), r = new Set(t.map((e) => e.id)), a = new Set(n.map(({ command: e }) => e.id)), o = i.list().flatMap((e) => e.tool && !a.has(e.id) && (e.tool.kind !== "element" || r.has(e.tool.id)) ? [{
				command: e,
				tool: e.tool
			}] : []);
			return [...n, ...o];
		});
		return (e, n) => (F(), X("aside", Uo, [(F(!0), X(Y, null, Z(U(a), ({ command: e, tool: n }) => (F(), X("button", {
			key: e.id,
			"data-component": "tool-bar__tool",
			"data-active": U(r).view.activeTool === n.id,
			"data-tutorial": `tool-${n.id}`,
			type: "button",
			class: P(["flex items-center justify-center rounded-xs bg-transparent text-ink cursor-pointer [flex:0_0_auto] w-8 h-8 p-0 [border:1px_solid_transparent] focus-visible:[outline:1px_solid_var(--color-ink-dim)] focus-visible:[outline-offset:1px] hover:bg-edge hover:text-ink", [U(t)("tool-bar__tool"), { [U(t)("tool-bar__tool--active")]: U(r).view.activeTool === n.id }]]),
			title: n.label,
			"aria-label": n.label,
			"aria-pressed": U(r).view.activeTool === n.id,
			onClick: (t) => U(i).dispatch(e.id)
		}, [V(Ho, {
			"data-component": "tool-bar__icon",
			name: n.icon,
			class: P(U(t)("tool-bar__icon"))
		}, null, 8, ["name", "class"])], 10, Wo))), 128))]));
	}
}), [["__scopeId", "data-v-3de1ae30"]]), Ko = /* @__PURE__ */ G({
	__name: "apply-template-dialog",
	setup(e) {
		let t = E(), n = t.store(), r = L({
			endPage: 1,
			startPage: 1,
			templateId: rr
		}), a = L(!1), o = K(() => n.page.list.length), s = K(() => {
			let e = f();
			return n.page.list.filter((t, n) => n >= e.from && n <= e.to);
		}), c = K(() => [{
			label: H("designer.templateBanner.noTemplateLabel"),
			value: Rr
		}, ...n.template.list.map((e) => ({
			label: e.name,
			value: e.id
		}))]), l = K(() => s.value.filter((e) => n.template.effectiveTemplate(e) && e.templateId !== r.value.templateId).length), u = K(() => [
			{
				field: "startPage",
				label: H("designer.applyTemplateDialog.startPageLabel"),
				props: {
					max: o.value,
					min: 1,
					step: 1,
					theme: "normal"
				},
				type: "inputNumber"
			},
			{
				field: "endPage",
				label: H("designer.applyTemplateDialog.endPageLabel"),
				props: {
					max: o.value,
					min: 1,
					step: 1,
					theme: "normal"
				},
				type: "inputNumber"
			},
			{
				field: "templateId",
				label: H("designer.applyTemplateDialog.templateLabel"),
				props: { options: c.value },
				type: "select"
			}
		]), d = K(() => {
			let e = l.value > 0;
			return [{
				id: "cancel",
				slots: { icon: () => [In(N, {
					class: "h-3.5 w-3.5",
					name: "close"
				})] },
				text: H("designer.applyTemplateDialog.cancelButton"),
				theme: "default",
				variant: "outline"
			}, {
				id: "apply",
				slots: { icon: () => [In(N, {
					class: "h-3.5 w-3.5",
					name: "check"
				})] },
				text: e ? H("designer.applyTemplateDialog.confirmOverwriteButton", { count: l.value }) : H("designer.applyTemplateDialog.applyButton"),
				theme: e ? "danger" : "primary",
				variant: "base"
			}];
		});
		function f() {
			let e = Math.max(1, o.value), t = p(Number(r.value.startPage) || 1, e), n = p(Number(r.value.endPage) || 1, e);
			return {
				from: Math.min(t, n) - 1,
				to: Math.max(t, n) - 1
			};
		}
		function p(e, t) {
			return Math.min(t, Math.max(1, Math.trunc(e)));
		}
		function m(e) {
			e.id === "cancel" ? n.ui.closeDialog() : e.id === "apply" && h();
		}
		function h() {
			let e = s.value.length;
			if (e === 0) {
				n.ui.toast(H("designer.applyTemplateDialog.emptySelectionHint"));
				return;
			}
			if (l.value > 0 && !a.value) {
				a.value = !0;
				return;
			}
			let i = s.value.map((e) => e.id);
			t.commands.invoke("template.apply", i, String(r.value.templateId)), n.ui.toast(H("designer.applyTemplateDialog.appliedMessage", { count: e }), "success"), n.ui.closeDialog();
		}
		return ke("values", (e) => {
			e && n.ui.activeDialog.name === "apply-template" && (r.value = {
				...r.value,
				...e
			});
		}), J(() => n.ui.activeDialog.name, (e) => {
			if (e !== "apply-template") return;
			let t = n.ui.activeDialog.pageId, i = t ? n.page.getIndex(t) : n.page.activeIndex, s = i >= 0 ? i + 1 : 1, c = n.ui.activeDialog.applyTemplateTemplateId;
			r.value = {
				endPage: c ? o.value : s,
				startPage: s,
				templateId: c ?? "template-blank"
			}, a.value = !1;
		}, { immediate: !0 }), J(r, () => {
			a.value = !1;
		}, { deep: !0 }), (e, t) => (F(), I(U(be), {
			key: U(n).ui.restoreRevision,
			visible: U(n).ui.activeDialog.name === "apply-template",
			title: U(H)("designer.applyTemplateDialog.dialogTitle"),
			width: 320,
			onClose: t[1] ||= (e) => U(n).ui.closeDialog()
		}, {
			footer: $(() => [V(U(pe), {
				actions: d.value,
				onClick: m
			}, null, 8, ["actions"])]),
			default: $(() => [V(i, {
				modelValue: r.value,
				"onUpdate:modelValue": t[0] ||= (e) => r.value = e,
				schema: u.value
			}, null, 8, ["modelValue", "schema"]), l.value > 0 ? (F(), X("p", {
				key: 0,
				class: P(["px-3 pt-1 text-compact leading-5", a.value ? "font-medium text-danger" : "text-danger/90"])
			}, q(a.value ? U(H)("designer.applyTemplateDialog.overwriteArmedHint") : U(H)("designer.applyTemplateDialog.overwriteWarning", { count: l.value })), 3)) : W("", !0)]),
			_: 1
		}, 8, ["visible", "title"]));
	}
}), qo = /* @__PURE__ */ G({
	__name: "canvas-color-dialog",
	setup(e) {
		let t = E(), n = t.store(), r = L({ color: Pn }), a = K(() => [{
			field: "color",
			help: H("designer.canvasColorDialog.backgroundHint"),
			label: H("designer.canvasColorDialog.colorLabel"),
			props: { resetValue: Pn },
			type: "colorField"
		}]);
		function o() {
			let e = String(r.value.color ?? "").trim();
			e === "" || t.commands.invoke("canvas.setBackground", "custom", e), n.ui.closeDialog();
		}
		return J(() => n.ui.activeDialog.name, (e) => {
			if (e !== "canvas-color") return;
			if (n.view.canvasBackgroundPreset === "custom") {
				r.value.color = n.view.customCanvasColor;
				return;
			}
			let t = n.view.canvasBackground;
			r.value.color = t.startsWith("var(") ? Pn : t;
		}, { immediate: !0 }), (e, t) => (F(), I(U(be), {
			visible: U(n).ui.activeDialog.name === "canvas-color",
			title: U(H)("designer.canvasColorDialog.dialogTitle"),
			width: 300,
			"confirm-on-enter": !0,
			onClose: t[1] ||= (e) => U(n).ui.closeDialog(),
			onConfirm: o
		}, {
			default: $(() => [V(i, {
				modelValue: r.value,
				"onUpdate:modelValue": t[0] ||= (e) => r.value = e,
				schema: a.value
			}, null, 8, ["modelValue", "schema"])]),
			_: 1
		}, 8, ["visible", "title"]));
	}
}), Jo = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "schema-tree-editor",
	props: { fields: {} },
	emits: ["change", "update:fields"],
	setup(e, { emit: t }) {
		let r = u(), i = e, a = t, { onVisibleChange: o, popupProps: s } = ue({}, "popup"), c = K(() => on.map((e) => ({
			label: H(`designer.schemaTreeEditor.${e}Type`),
			value: e
		}))), l = K(() => {
			let e = /* @__PURE__ */ new Map();
			function t(n, r = "") {
				n.forEach((n, i) => {
					let a = r ? `${r}.${i}` : String(i);
					e.set(a, n), t(n.children ?? [], a);
				});
			}
			return t(i.fields), e;
		}), d = K((e) => {
			let t = f(i.fields);
			return e && n(e, t) ? e : t;
		});
		function f(e, t = "") {
			return e.map((e, n) => {
				let r = t ? `${t}.${n}` : String(n);
				return {
					children: e.children?.length ? f(e.children, r) : void 0,
					value: r
				};
			});
		}
		function p(e) {
			a("update:fields", e), a("change");
		}
		function m(e, t) {
			let n = sr(i.fields), r = e.split(".").map(Number), a = n;
			for (let [e, n] of r.entries()) {
				let i = a[n];
				if (!i) return;
				e === r.length - 1 ? t(i, a, n) : a = i.children ?? [];
			}
			p(n);
		}
		function h(e, t, n) {
			m(e, (e) => {
				e[t] = n;
			});
		}
		function g(e, t) {
			m(e, (e) => {
				e.type = t, er(t) ? e.children ??= [{
					name: "name",
					type: "string"
				}] : delete e.children;
			});
		}
		function _(e) {
			let t = e.length + 1;
			for (; e.some((e) => e.name === `field${t}`);) t += 1;
			e.push({
				name: `field${t}`,
				type: "string"
			});
		}
		function v(e) {
			m(e, (e) => {
				e.children ??= [], _(e.children);
			});
		}
		function y(e) {
			m(e, (e, t, n) => {
				t.splice(n, 1);
			});
		}
		function b() {
			let e = sr(i.fields);
			_(e), p(e);
		}
		return (e, t) => {
			let n = x, i = lt, a = Ee, u = Va;
			return F(), X("div", {
				"data-component": "schema-tree-editor",
				class: P(["flex min-w-0 flex-col gap-2", U(r)("schema-tree-editor")])
			}, [R("div", { class: P(["overflow-x-auto", U(r)("schema-tree-editor__scroll")]) }, [V(u, {
				data: d.value,
				"expand-on-click-node": !1,
				transition: !1,
				"expand-all": "",
				line: ""
			}, {
				label: $(({ node: e }) => [R("div", {
					class: P(["grid items-center gap-2 py-2 [grid-template-columns:minmax(100px,_1fr)_minmax(90px,_1fr)_90px]", U(r)("schema-tree-editor__node")]),
					onClick: t[0] ||= Q(() => {}, ["stop"])
				}, [
					V(n, {
						"model-value": l.value.get(String(e.value))?.name,
						"aria-label": U(H)("designer.schemaTreeEditor.fieldNamePlaceholder"),
						placeholder: U(H)("designer.schemaTreeEditor.fieldNamePlaceholder"),
						spellcheck: !1,
						onChange: (t) => h(String(e.value), "name", t)
					}, null, 8, [
						"model-value",
						"aria-label",
						"placeholder",
						"onChange"
					]),
					V(n, {
						"model-value": l.value.get(String(e.value))?.label,
						"aria-label": U(H)("designer.schemaTreeEditor.displayNamePlaceholder"),
						placeholder: U(H)("designer.schemaTreeEditor.displayNamePlaceholder"),
						onChange: (t) => h(String(e.value), "label", t)
					}, null, 8, [
						"model-value",
						"aria-label",
						"placeholder",
						"onChange"
					]),
					V(i, {
						"model-value": l.value.get(String(e.value))?.type,
						"aria-label": U(H)("designer.schemaTreeEditor.fieldTypeTitle"),
						"popup-props": U(s),
						options: c.value,
						onPopupVisibleChange: U(o),
						onChange: (t) => g(String(e.value), t)
					}, null, 8, [
						"model-value",
						"aria-label",
						"popup-props",
						"options",
						"onPopupVisibleChange",
						"onChange"
					])
				], 2)]),
				operations: $(({ node: e }) => [R("div", {
					class: P(["flex items-center justify-end w-16 ml-2", U(r)("schema-tree-editor__actions")]),
					onClick: t[1] ||= Q(() => {}, ["stop"])
				}, [l.value.get(String(e.value))?.type === "object" || l.value.get(String(e.value))?.type === "array" ? (F(), I(a, {
					key: 0,
					variant: "text",
					shape: "square",
					title: U(H)(l.value.get(String(e.value))?.type === "array" ? "designer.schemaTreeEditor.addItemFieldTitle" : "designer.schemaTreeEditor.addChildFieldTitle"),
					"aria-label": U(H)(l.value.get(String(e.value))?.type === "array" ? "designer.schemaTreeEditor.addItemFieldTitle" : "designer.schemaTreeEditor.addChildFieldTitle"),
					onClick: (t) => v(String(e.value))
				}, {
					default: $(() => [V(N, {
						name: "plus",
						class: "h-3.5 w-3.5"
					})]),
					_: 1
				}, 8, [
					"title",
					"aria-label",
					"onClick"
				])) : W("", !0), V(a, {
					variant: "text",
					theme: "danger",
					shape: "square",
					title: U(H)("designer.schemaTreeEditor.deleteFieldTitle"),
					"aria-label": U(H)("designer.schemaTreeEditor.deleteFieldTitle"),
					onClick: (t) => y(String(e.value))
				}, {
					default: $(() => [V(N, {
						name: "trash",
						class: "h-3.5 w-3.5"
					})]),
					_: 1
				}, 8, [
					"title",
					"aria-label",
					"onClick"
				])], 2)]),
				_: 1
			}, 8, ["data"])], 2), V(a, {
				variant: "outline",
				block: "",
				onClick: b
			}, {
				icon: $(() => [V(N, {
					name: "plus",
					class: "h-3.5 w-3.5"
				})]),
				default: $(() => [z(" " + q(U(H)("designer.schemaTreeEditor.addFieldButton")), 1)]),
				_: 1
			})], 2);
		};
	}
}), [["__scopeId", "data-v-c91d14fb"]]), Yo = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "dialog-tabs",
	setup(e) {
		let t = u();
		return (e, n) => {
			let r = Mi;
			return F(), I(r, {
				"data-component": "dialog-tabs",
				class: P(["flex flex-col", U(t)("dialog-tabs")])
			}, {
				default: $(() => [Bt(e.$slots, "default", {}, void 0, !0)]),
				_: 3
			}, 8, ["class"]);
		};
	}
}), [["__scopeId", "data-v-6d72d022"]]), Xo = {
	class: "flex flex-col items-center justify-center gap-2 px-3 py-8 text-center text-xs text-ink-dim",
	role: "status"
}, Zo = /* @__PURE__ */ G({
	__name: "empty-state",
	props: {
		icon: {},
		message: {}
	},
	setup(e) {
		return (t, n) => (F(), X("div", Xo, [V(N, {
			name: e.icon,
			class: "h-8 w-8 opacity-50"
		}, null, 8, ["name"]), R("span", null, q(e.message), 1)]));
	}
});
function Qo(e) {
	let t = L(""), n = L(""), r = L(""), i = L(""), a = K(() => {
		let n = e.source(), r;
		if (t.value.trim()) try {
			r = JSON.parse(t.value);
		} catch {
			return H("designer.dataSourceDialog.previewInvalidHint");
		}
		else r = n ? lr(n) : {};
		return JSON.stringify({ [n?.key.trim() || "data"]: r }, null, 2);
	});
	function o() {
		n.value = "", r.value = "", i.value = "";
	}
	function s(e) {
		t.value = e === void 0 ? "" : JSON.stringify(e, null, 2), o();
	}
	function c() {
		o();
		let e = t.value.trim();
		if (!e) return n.value = "designer.dataSourceDialog.emptySampleMessage", null;
		try {
			return { value: JSON.parse(e) };
		} catch (e) {
			return n.value = "designer.dataSourceDialog.jsonParseFailedMessage", r.value = e instanceof Error ? e.message : "", null;
		}
	}
	function l(e) {
		let n = c();
		n && (e && (t.value = JSON.stringify(n.value, null, 2)), i.value = "designer.dataSourceDialog.sampleValidHint");
	}
	function u() {
		let t = e.source();
		t && (s(lr(t)), i.value = "designer.dataSourceDialog.sampleGeneratedHint");
	}
	return {
		clearSampleFeedback: o,
		generateSample: u,
		parseSample: c,
		previewJson: a,
		resetSample: s,
		sampleErrorDetail: r,
		sampleErrorKey: n,
		sampleFeedback: i,
		sampleJson: t,
		validateSample: l
	};
}
var $o = { class: "text-xs text-ink" }, es = { class: "flex w-60 shrink-0 flex-col border-r border-edge bg-panel-2" }, ts = { class: "space-y-3 border-b border-edge p-3" }, ns = { class: "flex items-center justify-between gap-2" }, rs = { class: "text-xs font-medium text-ink" }, is = { class: "min-h-0 flex-1 overflow-y-auto p-2" }, as = { class: "flex w-full min-w-0 items-center gap-1.5 text-xs" }, os = { class: "min-w-0 flex-1 truncate" }, ss = { class: "shrink-0 rounded bg-accent/10 px-1 text-caption" }, cs = { class: "flex w-full min-w-0 items-center gap-2 pl-5 text-caption text-ink-dim" }, ls = { class: "min-w-0 flex-1 truncate font-mono" }, us = { class: "shrink-0" }, ds = ["aria-pressed", "onClick"], fs = { class: "flex w-full items-center gap-1.5 text-xs" }, ps = { class: "truncate" }, ms = ["title"], hs = { class: "flex w-full min-w-0 items-center gap-2 pl-5 text-caption text-ink-dim" }, gs = ["title"], _s = { class: "shrink-0" }, vs = {
	key: 0,
	class: "shrink-0 text-accent/80"
}, ys = {
	key: 0,
	class: "flex min-w-0 flex-1 flex-col"
}, bs = { class: "flex items-center gap-2 px-3 pt-3 pb-2" }, xs = { class: "min-w-0 flex-1" }, Ss = { class: "mb-1 text-caption text-ink-dim" }, Cs = { class: "truncate text-base font-semibold text-ink" }, ws = {
	key: 0,
	class: "px-3 pb-2"
}, Ts = { role: "status" }, Es = { "data-dialog-tab": "" }, Ds = { class: "flex h-full flex-col gap-4 overflow-y-auto px-3 py-3" }, Os = { class: "flex items-start gap-2" }, ks = { class: "rounded-md border border-accent/30 bg-accent/5 p-3" }, As = { class: "flex items-start gap-2" }, js = { class: "min-w-0 flex-1" }, Ms = { class: "text-xs font-medium text-ink" }, Ns = { class: "mt-1 text-xs leading-relaxed text-ink-dim" }, Ps = { "data-dialog-tab": "" }, Fs = { class: "h-full overflow-y-auto" }, Is = { "data-dialog-tab": "" }, Ls = { class: "h-full overflow-y-auto" }, Rs = { class: "mb-2 flex flex-wrap items-center gap-2" }, zs = {
	key: 0,
	class: "mt-2 text-xs text-accent",
	"aria-live": "polite"
}, Bs = { "data-dialog-tab": "" }, Vs = { class: "h-full overflow-y-auto text-xs" }, Hs = { class: "px-3 py-2 leading-relaxed text-ink-dim" }, Us = { class: "overflow-auto rounded-md border border-edge bg-panel-2 p-3 text-compact leading-relaxed text-ink" }, Ws = {
	key: 1,
	class: "flex min-w-0 flex-1 flex-col items-center justify-center gap-4 px-12 text-center text-xs text-ink-dim"
}, Gs = { class: "rounded-2xl bg-accent/10 p-5 text-accent" }, Ks = { class: "text-lg font-semibold text-ink" }, qs = { class: "max-w-85 leading-relaxed" }, Js = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "data-source-dialog",
	setup(e) {
		let t = u(), n = {
			maxRows: 12,
			minRows: 6
		}, r = E(), a = r.store(), o = K(() => a.dataSource.list), s = L("basic"), c = L(null), l = L(null), { clearSampleFeedback: d, generateSample: f, parseSample: p, previewJson: m, resetSample: h, sampleErrorDetail: v, sampleErrorKey: y, sampleFeedback: b, sampleJson: C, validateSample: T } = Qo({ source: () => l.value }), D = L(!0), O = L(!1), ee = L(""), k = L(null), A = L(!1), te = L(""), j = L(null), ne = L(null), re = K(() => {
			let e = te.value.trim().toLocaleLowerCase();
			return o.value.filter((t) => `${t.label} ${t.key} ${t.description ?? ""}`.toLocaleLowerCase().includes(e));
		}), ie = K(() => a.dataSource.get(c.value ?? "")), ae = K(() => JSON.stringify([l.value, C.value])), oe = K(() => l.value !== null && ae.value !== ee.value), se = K(() => l.value !== null && er(l.value.type)), ce = K({
			get() {
				return l.value?.schema ?? [];
			},
			set(e) {
				l.value && se.value && (l.value.schema = e);
			}
		}), le = K(() => {
			if (l.value) return {
				...l.value,
				key: l.value.key.trim() || "data"
			};
		}), ue = K(() => c.value === null ? {
			messageKey: "designer.dataSourceDialog.newDraftHint",
			theme: "info"
		} : oe.value ? {
			messageKey: "designer.dataSourceDialog.unsavedHint",
			theme: "warning"
		} : {
			messageKey: "designer.dataSourceDialog.savedHint",
			theme: "success"
		}), de = K(() => {
			let e = l.value?.key?.trim() ?? "";
			return e ? pr(e) ? e !== c.value && a.dataSource.has(e) ? "designer.dataSourceDialog.duplicateKeyError" : "" : "designer.dataSourceDialog.invalidKeyError" : "designer.dataSourceDialog.keyRequiredError";
		}), fe = K({
			get() {
				return {
					description: l.value?.description,
					key: l.value?.key,
					label: l.value?.label,
					type: l.value?.type
				};
			},
			set(e) {
				if (!l.value) return;
				l.value.key = String(e.key ?? ""), l.value.label = String(e.label ?? ""), l.value.description = String(e.description ?? "");
				let t = on.find((t) => t === e.type);
				t && (l.value.type = t);
			}
		}), me = K(() => on.map((e) => ({
			label: H(`designer.schemaTreeEditor.${e}Type`),
			value: e
		}))), he = K(() => [
			{
				field: "type",
				label: H("designer.dataSourceDialog.typeLabel"),
				props: { options: me.value },
				type: "select"
			},
			{
				field: "key",
				itemProps: { tips: O.value && de.value ? H(de.value, { sourceKey: l.value?.key.trim() }) : "" },
				label: H("designer.dataSourceDialog.keyLabel"),
				props: {
					onBlur: () => {
						O.value = !0;
					},
					placeholder: H("designer.dataSourceDialog.keyPlaceholder"),
					spellcheck: !1
				},
				status: O.value && de.value ? "error" : void 0,
				type: "input"
			},
			{
				field: "label",
				label: H("designer.dataSourceDialog.nameLabel"),
				props: { placeholder: H("designer.dataSourceDialog.namePlaceholder") },
				type: "input"
			},
			{
				field: "description",
				label: H("designer.dataSourceDialog.descriptionLabel"),
				props: { placeholder: H("designer.dataSourceDialog.descriptionPlaceholder") },
				type: "input"
			}
		]), ge = K(() => {
			let e = [{
				id: "close",
				slots: { icon: () => [In(N, {
					class: "h-3.5 w-3.5",
					name: "close"
				})] },
				text: H("designer.dataSourceDialog.closeButton"),
				theme: "default",
				variant: "outline"
			}];
			return l.value && e.push({
				disabled: !l.value || c.value !== null && ae.value === ee.value,
				id: "save",
				slots: { icon: () => [In(N, {
					class: "h-3.5 w-3.5",
					name: c.value === null ? "plus" : "check"
				})] },
				text: H(c.value === null ? "designer.dataSourceDialog.createButton" : "designer.dataSourceDialog.saveButton"),
				theme: "primary"
			}), e;
		});
		function _e(e) {
			oe.value ? j.value = e : e();
		}
		function ve(e) {
			let t = j.value;
			j.value = null, (!e || Fe()) && t?.();
		}
		function ye() {
			_e(() => a.ui.closeDialog());
		}
		function xe() {
			return !oe.value || (ye(), !1);
		}
		function Se(e) {
			c.value !== e && _e(() => M(e));
		}
		function Ce() {
			_e(De);
		}
		function we() {
			_e(() => {
				let e = ie.value;
				if (!e) return;
				let t = 1, n = `${e.key}_copy`;
				for (; a.dataSource.has(n);) n = `${e.key}_copy${t++}`;
				De(), l.value = JSON.parse(JSON.stringify(e)), l.value.key = n, l.value.label = H("designer.dataSourceDialog.copyName", { sourceName: e.label || e.key }), h(e.sampleData);
			});
		}
		function Te() {
			let e = c.value;
			e === null ? De() : M(e), A.value = !1;
		}
		function M(e) {
			let t = a.dataSource.get(e);
			t && (D.value = !0, s.value = "basic", c.value = e, l.value = JSON.parse(JSON.stringify(t)), h(t.sampleData), O.value = !1, ee.value = ae.value);
		}
		function De() {
			D.value = !0, s.value = "basic", c.value = null, l.value = {
				description: "",
				key: "",
				label: "",
				schema: [{
					name: "field1",
					type: "string"
				}],
				type: "object"
			}, h(), O.value = !1, ee.value = ae.value;
		}
		function Oe(e, t) {
			t ? ne.value = e : e();
		}
		function Ae() {
			let e = ne.value;
			ne.value = null, e?.();
		}
		function je() {
			let e = p();
			if (!l.value || !e) return;
			let t = zr(e.value);
			Oe(() => Me(t), !!l.value.schema?.length || t.type !== l.value.type);
		}
		function Me(e) {
			l.value && (Object.assign(l.value, e), s.value = se.value ? "schema" : "basic", a.ui.toast(H("designer.dataSourceDialog.schemaGeneratedMessage"), "success"));
		}
		function Ne() {
			let e = p();
			e && Me(zr(e.value));
		}
		function Pe() {
			Oe(f, !!C.value.trim());
		}
		function Fe() {
			if (!l.value) return !1;
			if (O.value = !0, de.value) return s.value = "basic", !1;
			let e;
			if (C.value.trim()) {
				let t = p();
				if (!t) return y.value = "designer.dataSourceDialog.invalidSampleMessage", s.value = "sample", !1;
				e = t.value;
			}
			let t = {
				description: l.value.description?.trim() || void 0,
				key: l.value.key.trim(),
				label: l.value.label.trim() || l.value.key.trim(),
				sampleData: e,
				type: l.value.type
			};
			se.value && l.value.schema && (t.schema = sr(l.value.schema));
			let n = c.value === null;
			return r.commands.invoke("dataSource.upsert", t, c.value ?? t.key), c.value = t.key, l.value = sr(t), ee.value = ae.value, a.ui.toast(H(n ? "designer.dataSourceDialog.sourceCreatedMessage" : "designer.dataSourceDialog.sourceSavedMessage", { sourceName: t.label }), "success"), !0;
		}
		function Ie() {
			k.value && (r.commands.invoke("dataSource.remove", k.value.key), k.value = null, c.value = null, l.value = null, C.value = "", o.value.length > 0 && M(o.value[0].key), a.ui.toast(H("designer.dataSourceDialog.sourceDeletedMessage"), "success"));
		}
		function Le(e) {
			e.id === "close" ? ye() : e.id === "save" && Fe();
		}
		return ke("dataSource", (e) => {
			e && a.ui.activeDialog.name === "datasource" && (De(), l.value = sr(e.draft), C.value = e.sampleJson, s.value = e.tab, e.saved && (c.value = e.draft.key, ee.value = ae.value), ne.value = e.replacement ? Ne : null);
		}), J(() => ue.value.messageKey, () => {
			D.value = !0;
		}), J(() => a.ui.activeDialog.name, (e) => {
			k.value = null, A.value = !1, j.value = null, ne.value = null, e === "datasource" && (c.value = null, te.value = "", l.value = null, C.value = "", y.value = "", o.value.length > 0 && M(o.value[0].key));
		}, { immediate: !0 }), (e, r) => {
			let u = Ee, f = x, p = _, h = Ni, E = g;
			return F(), X(Y, null, [
				(F(), I(U(be), {
					key: U(a).ui.restoreRevision,
					visible: U(a).ui.activeDialog.name === "datasource",
					title: U(H)("designer.dataSourceDialog.dialogTitle"),
					width: 960,
					height: 660,
					"body-padding": !1,
					"before-close": xe,
					onClose: ye
				}, {
					header: $(() => [V(N, {
						name: "database",
						class: "h-4 w-4 text-accent"
					}), R("span", $o, q(U(H)("designer.dataSourceDialog.dialogTitle")), 1)]),
					footer: $(() => [V(U(pe), {
						actions: ge.value,
						onClick: Le
					}, null, 8, ["actions"])]),
					default: $(() => [R("div", { class: P(["flex min-h-0 flex-1", U(t)("data-source-manager")]) }, [R("div", es, [R("div", ts, [R("div", ns, [R("span", rs, q(U(H)("designer.dataSourceDialog.sourceCount", { count: o.value.length })), 1), V(u, {
						variant: l.value && c.value === null ? "base" : "outline",
						onClick: Ce
					}, {
						icon: $(() => [V(N, {
							name: "plus",
							class: "h-3.5 w-3.5"
						})]),
						default: $(() => [z(" " + q(U(H)("designer.dataSourceDialog.createSourceButton")), 1)]),
						_: 1
					}, 8, ["variant"])]), V(f, {
						modelValue: te.value,
						"onUpdate:modelValue": r[0] ||= (e) => te.value = e,
						clearable: "",
						"aria-label": U(H)("designer.dataSourceDialog.searchPlaceholder"),
						placeholder: U(H)("designer.dataSourceDialog.searchPlaceholder")
					}, null, 8, [
						"modelValue",
						"aria-label",
						"placeholder"
					])]), R("div", is, [
						l.value && c.value === null ? (F(), X("div", {
							key: 0,
							"data-test-part": "data-source-manager__draft",
							class: P(["mb-1 flex w-full flex-col items-start gap-0.5 rounded-md border border-dashed border-accent/50 bg-accent/10 px-2 py-2 text-left text-accent", U(t)("data-source-manager__draft")])
						}, [R("span", as, [
							V(N, {
								name: "database",
								class: "h-3.5 w-3.5 shrink-0"
							}),
							R("span", os, q(l.value.label || l.value.key || U(H)("designer.dataSourceDialog.untitledSource")), 1),
							R("span", ss, q(U(H)("designer.dataSourceDialog.draftBadge")), 1)
						]), R("span", cs, [R("span", ls, q(l.value.key || "—"), 1), R("span", us, q(U(H)(`designer.fieldTree.${l.value.type}`)), 1)])], 2)) : W("", !0),
						(F(!0), X(Y, null, Z(re.value, (e) => (F(), X("button", {
							key: e.key,
							"data-component": "data-source-manager__source",
							type: "button",
							class: P(["mb-1 flex w-full flex-col items-start gap-0.5 rounded-md border px-2 py-2 text-left focus-visible:[outline:2px_solid_var(--color-accent)] focus-visible:[outline-offset:-2px]", [U(t)("data-source-manager__source"), c.value === e.key ? "border-accent/40 bg-accent/10 text-accent" : "border-transparent text-ink hover:bg-panel-3"]]),
							"aria-pressed": c.value === e.key,
							onClick: (t) => Se(e.key)
						}, [R("span", fs, [
							V(N, {
								name: "database",
								class: "h-3.5 w-3.5 shrink-0"
							}),
							R("span", ps, q(e.label || e.key), 1),
							c.value === e.key && oe.value ? (F(), X("span", {
								key: 0,
								class: "ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-accent",
								title: U(H)("designer.dataSourceDialog.unsavedHint")
							}, null, 8, ms)) : W("", !0)
						]), R("span", hs, [
							R("span", {
								class: "min-w-0 flex-1 truncate font-mono",
								title: e.key
							}, q(e.key), 9, gs),
							R("span", _s, q(U(H)(`designer.fieldTree.${e.type}`)), 1),
							e.type === "object" && U(S)(e) ? (F(), X("span", vs, q(U(H)("designer.dataSourceDialog.containsArrayBadge")), 1)) : W("", !0)
						])], 10, ds))), 128)),
						o.value.length === 0 && !l.value ? (F(), I(Zo, {
							key: 1,
							icon: "database",
							message: U(H)("designer.dataSourceDialog.noSourcesMessage")
						}, null, 8, ["message"])) : o.value.length > 0 && re.value.length === 0 ? (F(), I(Zo, {
							key: 2,
							icon: "database",
							message: U(H)("designer.dataSourceDialog.noSearchResults")
						}, null, 8, ["message"])) : W("", !0)
					])]), l.value ? (F(), X("div", ys, [
						R("div", bs, [
							R("div", xs, [R("div", Ss, q(U(H)(c.value === null ? "designer.dataSourceDialog.createSourceTitle" : "designer.dataSourceDialog.editSourceTitle")), 1), R("div", Cs, q(l.value.label || l.value.key || U(H)(c.value === null ? "designer.dataSourceDialog.createSourceTitle" : "designer.dataSourceDialog.untitledSource")), 1)]),
							V(u, {
								disabled: !oe.value,
								variant: "text",
								onClick: r[1] ||= (e) => A.value = !0
							}, {
								default: $(() => [z(q(U(H)("designer.dataSourceDialog.resetButton")), 1)]),
								_: 1
							}, 8, ["disabled"]),
							ie.value ? (F(), I(u, {
								key: 0,
								variant: "outline",
								onClick: we
							}, {
								icon: $(() => [V(N, {
									name: "copy",
									class: "h-3.5 w-3.5"
								})]),
								default: $(() => [z(" " + q(U(H)("designer.dataSourceDialog.duplicateButton")), 1)]),
								_: 1
							})) : W("", !0),
							ie.value ? (F(), I(u, {
								key: 1,
								theme: "danger",
								variant: "text",
								shape: "square",
								"aria-label": U(H)("designer.dataSourceDialog.deleteSourceLabel", { sourceName: ie.value.label || ie.value.key }),
								title: U(H)("designer.dataSourceDialog.deleteSourceLabel", { sourceName: ie.value.label || ie.value.key }),
								onClick: r[2] ||= (e) => k.value = ie.value
							}, {
								icon: $(() => [V(N, {
									name: "trash",
									class: "h-3.5 w-3.5"
								})]),
								_: 1
							}, 8, ["aria-label", "title"])) : W("", !0)
						]),
						D.value ? (F(), X("div", ws, [V(p, { theme: ue.value.theme }, {
							operation: $(() => [V(u, {
								"aria-label": U(H)("designer.dataSourceDialog.dismissStatusButton"),
								shape: "square",
								size: "small",
								variant: "text",
								onClick: r[3] ||= (e) => D.value = !1
							}, {
								icon: $(() => [V(N, { name: "close" })]),
								_: 1
							}, 8, ["aria-label"])]),
							default: $(() => [R("span", Ts, q(U(H)(ue.value.messageKey)), 1)]),
							_: 1
						}, 8, ["theme"])])) : W("", !0),
						V(Yo, {
							modelValue: s.value,
							"onUpdate:modelValue": r[11] ||= (e) => s.value = e,
							class: "min-h-0 flex-1"
						}, {
							default: $(() => [
								V(h, {
									value: "basic",
									label: U(H)("designer.dataSourceDialog.basicInfoTab")
								}, {
									label: $(() => [R("span", Es, q(U(H)("designer.dataSourceDialog.basicInfoTab")), 1)]),
									default: $(() => [R("div", Ds, [
										V(et, { class: "shrink-0" }, {
											default: $(() => [z(q(U(H)("designer.dataSourceDialog.basicInfoHint")), 1)]),
											_: 1
										}),
										R("div", Os, [V(i, {
											modelValue: fe.value,
											"onUpdate:modelValue": r[4] ||= (e) => fe.value = e,
											class: "min-w-0 flex-1",
											schema: he.value
										}, null, 8, ["modelValue", "schema"]), se.value ? (F(), I(u, {
											key: 0,
											class: "mt-1 shrink-0",
											variant: "outline",
											size: "small",
											onClick: r[5] ||= (e) => s.value = "schema"
										}, {
											default: $(() => [z(q(U(H)("designer.dataSourceDialog.editSchemaButton")), 1)]),
											_: 1
										})) : W("", !0)]),
										R("div", ks, [R("div", As, [V(N, {
											name: "file",
											class: "mt-0.5 h-4 w-4 shrink-0 text-accent"
										}), R("div", js, [
											R("div", Ms, q(U(H)("designer.dataSourceDialog.sampleEntryTitle")), 1),
											R("p", Ns, q(U(H)("designer.dataSourceDialog.sampleDataPurpose")), 1),
											V(u, {
												class: "mt-2",
												variant: "outline",
												size: "small",
												onClick: r[6] ||= (e) => s.value = "sample"
											}, {
												default: $(() => [z(q(U(H)("designer.dataSourceDialog.pasteSampleButton")), 1)]),
												_: 1
											})
										])])])
									])]),
									_: 1
								}, 8, ["label"]),
								se.value ? (F(), I(h, {
									key: 0,
									value: "schema",
									label: U(H)("designer.dataSourceDialog.schemaTab")
								}, {
									label: $(() => [R("span", Ps, q(U(H)("designer.dataSourceDialog.schemaTab")), 1)]),
									default: $(() => [R("div", Fs, [V(gt, { title: U(H)("designer.dataSourceDialog.schemaLabel") }, {
										default: $(() => [V(Jo, {
											fields: ce.value,
											"onUpdate:fields": r[7] ||= (e) => ce.value = e
										}, null, 8, ["fields"])]),
										_: 1
									}, 8, ["title"])])]),
									_: 1
								}, 8, ["label"])) : W("", !0),
								V(h, {
									value: "sample",
									label: U(H)("designer.dataSourceDialog.sampleTab")
								}, {
									label: $(() => [R("span", Is, q(U(H)("designer.dataSourceDialog.sampleTab")), 1)]),
									default: $(() => [R("div", Ls, [V(gt, { title: U(H)("designer.dataSourceDialog.sampleDataLabel") }, {
										default: $(() => [
											V(et, { class: "mb-2" }, {
												default: $(() => [z(q(U(H)("designer.dataSourceDialog.sampleDataPurpose")), 1)]),
												_: 1
											}),
											R("div", Rs, [
												V(u, {
													variant: "outline",
													onClick: r[8] ||= (e) => U(T)(!1)
												}, {
													default: $(() => [z(q(U(H)("designer.dataSourceDialog.validateButton")), 1)]),
													_: 1
												}),
												V(u, {
													variant: "outline",
													onClick: r[9] ||= (e) => U(T)(!0)
												}, {
													default: $(() => [z(q(U(H)("designer.dataSourceDialog.formatButton")), 1)]),
													_: 1
												}),
												V(u, {
													variant: "text",
													onClick: Pe
												}, {
													default: $(() => [z(q(U(H)("designer.dataSourceDialog.generateSampleButton")), 1)]),
													_: 1
												}),
												V(u, {
													variant: "outline",
													onClick: je
												}, {
													icon: $(() => [V(N, {
														name: "table",
														class: "h-3.5 w-3.5"
													})]),
													default: $(() => [z(" " + q(U(H)("designer.dataSourceDialog.generateSchemaButton")), 1)]),
													_: 1
												})
											]),
											V(at, {
												"label-width": 0,
												tips: U(y) ? U(H)(U(y), { errorMessage: U(v) || U(H)("designer.dataSourceDialog.invalidFormatMessage") }) : ""
											}, {
												default: $(() => [V(E, {
													modelValue: U(C),
													"onUpdate:modelValue": r[10] ||= (e) => Gr(C) ? C.value = e : null,
													status: U(y) ? "error" : void 0,
													"aria-label": U(H)("designer.dataSourceDialog.sampleDataLabel"),
													autosize: n,
													placeholder: U(H)("designer.dataSourceDialog.sampleDataPlaceholder"),
													spellcheck: !1,
													onChange: U(d)
												}, null, 8, [
													"modelValue",
													"status",
													"aria-label",
													"placeholder",
													"onChange"
												])]),
												_: 1
											}, 8, ["tips"]),
											U(b) ? (F(), X("p", zs, q(U(H)(U(b))), 1)) : W("", !0)
										]),
										_: 1
									}, 8, ["title"])])]),
									_: 1
								}, 8, ["label"]),
								V(h, {
									value: "preview",
									label: U(H)("designer.dataSourceDialog.previewTab")
								}, {
									label: $(() => [R("span", Bs, q(U(H)("designer.dataSourceDialog.previewTab")), 1)]),
									default: $(() => [R("div", Vs, [
										R("p", Hs, q(U(H)("designer.dataSourceDialog.previewHint")), 1),
										V(gt, { title: U(H)("designer.dataSourceDialog.bindingPathsLabel") }, {
											default: $(() => [l.value.type !== "object" || ce.value.length ? (F(), I(w, {
												key: c.value ?? "new",
												source: le.value,
												compact: ""
											}, null, 8, ["source"])) : (F(), I(et, { key: 1 }, {
												default: $(() => [z(q(U(H)("designer.dataSourceDialog.noFieldsHint")), 1)]),
												_: 1
											}))]),
											_: 1
										}, 8, ["title"]),
										V(gt, { title: U(H)("designer.dataSourceDialog.inputPreviewLabel") }, {
											default: $(() => [R("pre", Us, q(U(m)), 1)]),
											_: 1
										}, 8, ["title"])
									])]),
									_: 1
								}, 8, ["label"])
							]),
							_: 1
						}, 8, ["modelValue"])
					])) : (F(), X("div", Ws, [
						R("div", Gs, [V(N, {
							name: "database",
							class: "h-8 w-8"
						})]),
						R("div", Ks, q(U(H)("designer.dataSourceDialog.welcomeTitle")), 1),
						R("p", qs, q(U(H)("designer.dataSourceDialog.welcomeHint")), 1),
						V(u, { onClick: Ce }, {
							icon: $(() => [V(N, {
								name: "plus",
								class: "h-3.5 w-3.5"
							})]),
							default: $(() => [z(" " + q(U(H)("designer.dataSourceDialog.createSourceTitle")), 1)]),
							_: 1
						})
					]))], 2)]),
					_: 1
				}, 8, ["visible", "title"])),
				A.value ? (F(), I(U(be), {
					key: 0,
					visible: !0,
					title: U(H)("designer.dataSourceDialog.resetButton"),
					width: 400,
					onConfirm: Te,
					onCancel: r[12] ||= (e) => A.value = !1,
					onClose: r[13] ||= (e) => A.value = !1
				}, {
					default: $(() => [z(q(U(H)("designer.dataSourceDialog.resetMessage")), 1)]),
					_: 1
				}, 8, ["title"])) : W("", !0),
				j.value ? (F(), I(U(be), {
					key: 1,
					visible: !0,
					title: U(H)("designer.dataSourceDialog.unsavedTitle"),
					width: 440,
					onClose: r[17] ||= (e) => j.value = null
				}, {
					footer: $(() => [
						V(u, {
							variant: "text",
							onClick: r[14] ||= (e) => j.value = null
						}, {
							default: $(() => [z(q(U(H)("designer.dataSourceDialog.keepEditingButton")), 1)]),
							_: 1
						}),
						V(u, {
							variant: "outline",
							onClick: r[15] ||= (e) => ve(!1)
						}, {
							default: $(() => [z(q(U(H)("designer.dataSourceDialog.discardButton")), 1)]),
							_: 1
						}),
						V(u, { onClick: r[16] ||= (e) => ve(!0) }, {
							default: $(() => [z(q(U(H)("designer.dataSourceDialog.saveContinueButton")), 1)]),
							_: 1
						})
					]),
					default: $(() => [z(q(U(H)("designer.dataSourceDialog.unsavedMessage")) + " ", 1)]),
					_: 1
				}, 8, ["title"])) : W("", !0),
				ne.value ? (F(), I(U(be), {
					key: 2,
					visible: !0,
					title: U(H)("designer.dataSourceDialog.replaceTitle"),
					width: 400,
					onConfirm: Ae,
					onCancel: r[18] ||= (e) => ne.value = null,
					onClose: r[19] ||= (e) => ne.value = null
				}, {
					default: $(() => [z(q(U(H)("designer.dataSourceDialog.replaceMessage")), 1)]),
					_: 1
				}, 8, ["title"])) : W("", !0),
				k.value ? (F(), I(U(be), {
					key: 3,
					visible: !0,
					title: U(H)("designer.dataSourceDialog.deleteConfirmTitle"),
					width: 380,
					"confirm-btn": {
						content: U(H)("designer.dataSourceDialog.deleteButton"),
						theme: "danger"
					},
					onConfirm: Ie,
					onClose: r[20] ||= (e) => k.value = null,
					onCancel: r[21] ||= (e) => k.value = null
				}, {
					default: $(() => [z(q(U(H)("designer.dataSourceDialog.deleteConfirmMessage", { sourceName: k.value.label || k.value.key })), 1)]),
					_: 1
				}, 8, ["title", "confirm-btn"])) : W("", !0)
			], 64);
		};
	}
}), [["__scopeId", "data-v-c897d16a"]]), Ys = /* @__PURE__ */ G({
	__name: "dialog-session-host",
	props: { name: {} },
	setup(e) {
		let t = e, n = E().store();
		return (e, r) => (F(!0), X(Y, null, Z(U(n).ui.dialogSessions(t.name), (t) => Bt(e.$slots, "default", { session: t }, void 0, void 0, t.id)), 128));
	}
});
function Xs(e, t) {
	let n = E().store().ui, r = K(() => t()?.dialog ?? n.activeDialog), i = K(() => t()?.id ?? n.dialogSessionId), a = K(() => {
		let t = n.activeDialog.name;
		return t !== null && (typeof e == "string" ? t === e : e.includes(t)) && i.value === n.dialogSessionId;
	});
	function o() {
		a.value && n.dialogs.cancel(i.value);
	}
	function s(e) {
		a.value && n.dialogs.confirm(i.value, e);
	}
	return {
		cancel: o,
		confirm: s,
		dialog: r,
		isActive: a,
		sessionId: i
	};
}
var Zs = "__basic__";
function Qs(e) {
	return e.tab ?? e.title;
}
function $s(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Qs(n), r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	return [...t].map(([e, t]) => ({
		name: e,
		sections: t
	}));
}
var ec = ["aria-label"], tc = [
	"data-active",
	"data-settings-group",
	"aria-current"
], nc = [
	"data-active",
	"data-settings-group",
	"aria-current",
	"onClick"
], rc = ["aria-label"], ic = ["data-active", "aria-current"], ac = [
	"data-active",
	"data-settings-section",
	"aria-current",
	"onClick"
], oc = ["innerHTML"], sc = "__overview__", cc = "flex items-center justify-between rounded-md p-3 text-left text-ink-dim", lc = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "element-settings-workspace",
	props: /*@__PURE__*/ Xn({
		basicTab: {},
		node: {},
		sections: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = u(), n = e, r = Nn(e, "modelValue"), i = E(), a = i.store(), o = O(() => n.node.type), s = L(""), c = L(""), l = L(100), d = [
			50,
			80,
			100,
			125
		].map((e) => ({
			label: `${e}%`,
			value: e
		})), f = K(() => $s(n.sections)), p = K(() => n.basicTab ?? H("designer.elementDialog.basicTab")), m = K(() => {
			let e = r.value === "__basic__" ? n.basicTab : r.value;
			return f.value.find((t) => t.name === e);
		}), h = K(() => {
			let e = m.value?.sections ?? [];
			return r.value === "__basic__" && (!c.value || c.value === sc) ? sc : e.some((e) => e.title === c.value) ? c.value : e[0]?.title;
		}), g = K(() => {
			let e = s.value.trim().toLocaleLowerCase();
			return e ? n.sections.filter((t) => `${t.tab ?? ""} ${t.title} ${t.fields.map((e) => e.label).join(" ")}`.toLocaleLowerCase().includes(e)) : m.value?.sections.filter((e) => e.title === h.value) ?? [];
		}), _ = K(() => {
			let e = new Wr(), t = Ar(n.node, {
				...Vn(un(a.document.data)),
				elements: i.elements
			}, e), r = an(a.document.data).find((e) => e.elements.some((e) => e.id === t.id)), s = "";
			return r && t.visible && o.value && (s = o.value.toHtml({
				document: a.document.data,
				node: t,
				onWarning: (t) => e.add(t),
				page: r,
				props: t.props
			})), {
				height: t.height,
				html: s,
				warnings: e.list(),
				width: t.width
			};
		});
		function v(e) {
			let t = n.node.id, r = a.template.editingTemplate?.id, o = a.scope.active?.id;
			i.commands.invoke(`edit.${e}`), r && a.template.enterEdit(r), o && a.scope.activate(o), a.element.find(t) && a.selection.set([t]);
		}
		function y(e) {
			s.value = "", r.value = e, c.value = "";
		}
		function b(e) {
			s.value = "", c.value = e;
		}
		return ke("section", (e) => {
			c.value = e ?? "";
		}), (i, o) => {
			let c = x, u = Ee, S = lt;
			return F(), X("div", {
				"data-component": "settings-workspace",
				class: P(["grid flex-1 min-h-0 [grid-template-columns:140px_150px_minmax(320px,_1fr)_minmax(200px,_0.57fr)]", U(t)("settings-workspace")])
			}, [
				R("aside", {
					"data-component": "settings-workspace__navigation",
					class: P(["flex flex-col gap-2 border-r border-edge overflow-y-auto", U(t)("settings-workspace__navigation")]),
					"aria-label": U(H)("designer.elementDialog.defaultTitle")
				}, [R("button", {
					"data-component": "settings-workspace__navigation-button",
					"data-active": r.value === U("__basic__") && !s.value,
					"data-settings-group": p.value,
					class: P([U(t)("settings-workspace__navigation-button"), [cc, { [U(t)("settings-workspace__navigation-button--active")]: r.value === U("__basic__") && !s.value }]]),
					"aria-current": r.value === U("__basic__") && !s.value ? "page" : void 0,
					type: "button",
					onClick: o[0] ||= (e) => y(U("__basic__"))
				}, q(p.value), 11, tc), (F(!0), X(Y, null, Z(f.value.filter((e) => !n.basicTab || e.name !== p.value), (e) => (F(), X("button", {
					key: e.name,
					"data-component": "settings-workspace__navigation-button",
					"data-active": r.value === e.name && !s.value,
					"data-settings-group": e.name,
					class: P([U(t)("settings-workspace__navigation-button"), [cc, { [U(t)("settings-workspace__navigation-button--active")]: r.value === e.name && !s.value }]]),
					"aria-current": r.value === e.name && !s.value ? "page" : void 0,
					type: "button",
					onClick: (t) => y(e.name)
				}, q(e.name), 11, nc))), 128))], 10, ec),
				R("nav", {
					"data-component": "settings-workspace__secondary",
					class: P(["bg-(--td-bg-color-secondarycontainer) flex flex-col gap-2 border-r border-edge overflow-y-auto", U(t)("settings-workspace__secondary")]),
					"aria-label": U(H)("designer.elementWorkspace.categories")
				}, [r.value === U("__basic__") ? (F(), X("button", {
					key: 0,
					"data-component": "settings-workspace__navigation-button",
					"data-active": h.value === sc && !s.value,
					class: P([U(t)("settings-workspace__navigation-button"), [cc, { [U(t)("settings-workspace__navigation-button--active")]: h.value === sc && !s.value }]]),
					"aria-current": h.value === sc && !s.value ? "page" : void 0,
					type: "button",
					onClick: o[1] ||= (e) => b(sc)
				}, q(U(H)("designer.elementDialog.basicTab")), 11, ic)) : W("", !0), (F(!0), X(Y, null, Z(m.value?.sections ?? [], (e) => (F(), X("button", {
					key: e.title,
					"data-component": "settings-workspace__navigation-button",
					"data-active": h.value === e.title && !s.value,
					"data-settings-section": e.title,
					class: P([U(t)("settings-workspace__navigation-button"), [cc, { [U(t)("settings-workspace__navigation-button--active")]: h.value === e.title && !s.value }]]),
					"aria-current": h.value === e.title && !s.value ? "page" : void 0,
					type: "button",
					onClick: (t) => b(e.title)
				}, q(e.title), 11, ac))), 128))], 10, rc),
				R("main", { class: P(["flex flex-col min-w-0 min-h-0", U(t)("settings-workspace__editor")]) }, [
					R("div", {
						"data-component": "settings-workspace__toolbar",
						class: P(["flex items-center justify-between gap-2 border-b border-edge min-h-14 [padding:10px_16px]", U(t)("settings-workspace__toolbar")])
					}, [V(c, {
						modelValue: s.value,
						"onUpdate:modelValue": o[2] ||= (e) => s.value = e,
						clearable: "",
						placeholder: U(H)("designer.elementWorkspace.search"),
						"aria-label": U(H)("designer.elementWorkspace.search")
					}, null, 8, [
						"modelValue",
						"placeholder",
						"aria-label"
					])], 2),
					R("div", {
						"data-test-part": "settings-workspace__scroll",
						class: P(["flex-1 min-h-0 overflow-auto [padding:6px_12px_24px]", U(t)("settings-workspace__scroll")])
					}, [r.value === U("__basic__") && h.value === sc && !s.value ? Bt(i.$slots, "default", {}, void 0, !0, 0) : (F(), X(Y, { key: 1 }, [(F(!0), X(Y, null, Z(g.value, (n) => (F(), I(gt, {
						key: JSON.stringify([U(Qs)(n), n.title]),
						"data-part": "settings-workspace__section",
						class: P(U(t)("settings-workspace__section")),
						title: n.title,
						hint: n.hint?.(e.node)
					}, {
						default: $(() => [(F(!0), X(Y, null, Z(n.fields, (t) => (F(), I(pt, {
							key: t.key,
							field: t,
							node: e.node,
							onCommit: o[3] ||= (e) => U(a).history.commit()
						}, null, 8, ["field", "node"]))), 128))]),
						_: 2
					}, 1032, [
						"class",
						"title",
						"hint"
					]))), 128)), g.value.length ? W("", !0) : (F(), X("p", {
						key: 0,
						class: P(["p-6 text-ink-dim", U(t)("settings-workspace__empty")])
					}, q(U(H)("designer.elementWorkspace.empty")), 3))], 64))], 2),
					R("div", {
						"data-component": "settings-workspace__feedback",
						class: P(["flex items-center gap-2 border-t border-edge text-ink-dim text-compact [padding:10px_16px]", U(t)("settings-workspace__feedback")]),
						role: "status"
					}, [
						R("span", null, q(U(H)("designer.elementWorkspace.applied")), 1),
						V(u, {
							size: "small",
							variant: "text",
							disabled: !U(a).history.canUndo,
							onClick: o[4] ||= (e) => v("undo")
						}, {
							default: $(() => [z(q(U(H)("designer.elementWorkspace.undo")), 1)]),
							_: 1
						}, 8, ["disabled"]),
						V(u, {
							size: "small",
							variant: "text",
							disabled: !U(a).history.canRedo,
							onClick: o[5] ||= (e) => v("redo")
						}, {
							default: $(() => [z(q(U(H)("designer.elementWorkspace.redo")), 1)]),
							_: 1
						}, 8, ["disabled"])
					], 2)
				], 2),
				R("aside", {
					"data-component": "settings-workspace__preview",
					class: P(["border-l border-edge flex flex-col min-w-0 min-h-0", U(t)("settings-workspace__preview")])
				}, [
					R("div", {
						"data-component": "settings-workspace__toolbar",
						class: P(["flex items-center justify-between gap-2 border-b border-edge min-h-14 [padding:10px_16px]", U(t)("settings-workspace__toolbar")])
					}, [R("strong", null, q(U(H)("designer.elementWorkspace.preview")), 1), V(S, {
						modelValue: l.value,
						"onUpdate:modelValue": o[6] ||= (e) => l.value = e,
						options: U(d),
						"aria-label": U(H)("designer.elementWorkspace.preview")
					}, null, 8, [
						"modelValue",
						"options",
						"aria-label"
					])], 2),
					R("p", { class: P(["text-ink-dim text-compact [padding:12px_16px] [line-height:1.7]", U(t)("settings-workspace__hint")]) }, q(U(H)("designer.elementWorkspace.previewHint")), 3),
					R("div", { class: P(["flex-1 min-h-0 overflow-auto p-6 bg-(--td-bg-color-secondarycontainer)", U(t)("settings-workspace__canvas")]) }, [R("div", {
						"data-test-part": "settings-workspace__paper",
						class: P(["bg-paper text-paper-ink [box-shadow:0_2px_12px_var(--color-shadow-soft)]", U(t)("settings-workspace__paper")]),
						style: B({
							width: `${_.value.width * U(Kn)}px`,
							minHeight: `${_.value.height * U(Kn)}px`,
							zoom: l.value / 100
						}),
						innerHTML: _.value.html
					}, null, 14, oc)], 2),
					_.value.warnings.length ? (F(), X("ul", {
						key: 0,
						"data-test-part": "settings-workspace__warnings",
						class: P(["max-h-35 overflow-auto text-compact [padding:12px_20px] [color:var(--td-warning-color)]", U(t)("settings-workspace__warnings")]),
						role: "status"
					}, [(F(!0), X(Y, null, Z(_.value.warnings, (e) => (F(), X("li", { key: e }, q(e), 1))), 128))], 2)) : W("", !0)
				], 2)
			], 2);
		};
	}
}), [["__scopeId", "data-v-bfce84c9"]]), uc = { class: "flex w-full items-center gap-2" }, dc = ["title"], fc = { class: "text-caption text-ink-dim/70" }, pc = { class: "flex min-h-0 flex-1 flex-col" }, mc = { class: "h-full overflow-y-auto" }, hc = { "data-dialog-tab": "" }, gc = { class: "h-full overflow-y-auto" }, _c = { "data-dialog-tab": "" }, vc = { class: "h-full overflow-y-auto" }, yc = /* @__PURE__ */ G({
	__name: "element-dialog",
	props: { session: {} },
	setup(e) {
		let t = e, r = E(), a = r.store(), { cancel: o, confirm: s, isActive: c } = Xs("element", () => t.session), l = K(() => {
			if (!t.session && !c.value) return [];
			let e = a.selection.ids;
			return t.session?.elementIds?.length ? e = t.session.elementIds : t.session?.elementId && (e = [t.session.elementId]), a.element.getMany(e).map((e) => Mn(a.document.data, e, r.elements));
		}), u = K(() => l.value[0] ?? null), d = K(() => l.value.length > 1), f = O(() => u.value?.type), p = K(() => !d.value && f.value?.settingsDialog?.layout === "workspace"), m = L({ name: "" }), h = L(Zs), g = K(() => [{
			field: "name",
			label: H("designer.elementDialog.nameLabel"),
			props: { placeholder: H("designer.elementDialog.namePlaceholder") },
			type: "input"
		}]), _ = !1, v = K(() => Tt(f.value).filter((e) => !d.value || e.batchEditable)), y = K((e) => {
			if (!u.value) return [];
			let t = l.value.map((e) => {
				let t = Dn(f.value?.inspectorSections ?? [], a.document.data, e, r.elements);
				return d.value ? _n(t, e) : nr(t, e);
			}), i = t[0].map((e) => ({
				...e,
				fields: e.fields.filter((n) => t.every((t) => t.some((t) => Qs(t) === Qs(e) && t.title === e.title && t.fields.some((e) => e.key === n.key && e.type === n.type))))
			})).filter((e) => e.fields.length > 0);
			return e && n(e, i) ? e : i;
		}), b = K(() => $s(y.value));
		function x(e) {
			m.value = e, u.value && r.commands.invoke("element.setName", u.value.id, String(e.name ?? ""));
		}
		function S(e) {
			_ && (_ = !1, a.document.finishPreview(e));
		}
		function C() {
			a.document.resetPreview();
		}
		function w() {
			c.value && (S(!1), o());
		}
		function T() {
			c.value && (a.history.commit(), S(!0), s());
		}
		return Nr("wide"), ke("tab", (e) => {
			c.value && e !== void 0 && (h.value = e);
		}), J(() => t.session ? a.ui.dialogSessions("element").some((e) => e.id === t.session?.id) : c.value, (e) => {
			e && !_ ? (a.document.beginPreview(), _ = !0) : e || S(!1);
		}, {
			flush: "sync",
			immediate: !0
		}), J(() => u.value?.name, (e) => {
			m.value = { name: e ?? "" };
		}, { immediate: !0 }), J([
			l,
			c,
			() => a.selection.ids
		], ([e, t]) => {
			t && (!e.length || !a.selection.sameType || e.length !== a.selection.nodes.length || e.some((e) => !a.selection.has(e.id))) && o();
		}, { immediate: !0 }), Er(() => {
			S(!1);
		}), (t, n) => {
			let r = Ee, o = Ni;
			return F(), I(U(be), {
				key: U(a).ui.restoreRevision,
				visible: U(c) && !!u.value,
				title: d.value ? U(H)("designer.elementDialog.defaultTitle") : u.value?.name,
				width: p.value ? "94vw" : 720,
				height: p.value ? "92%" : 640,
				"body-padding": !1,
				"destroy-on-close": !e.session,
				onCancel: w,
				onClose: w,
				onConfirm: T
			}, {
				footer: $(() => [R("div", uc, [
					V(r, {
						variant: "outline",
						onClick: C
					}, {
						default: $(() => [z(q(U(H)("designer.elementDialog.resetButton")), 1)]),
						_: 1
					}),
					n[5] ||= R("div", { class: "flex-1" }, null, -1),
					V(r, {
						variant: "outline",
						onClick: w
					}, {
						default: $(() => [z(q(U(H)("components.baseDialog.cancelButton")), 1)]),
						_: 1
					}),
					V(r, {
						theme: "primary",
						onClick: T
					}, {
						default: $(() => [z(q(U(H)("designer.elementDialog.confirmButton")), 1)]),
						_: 1
					})
				])]),
				header: $(() => [
					V(N, {
						name: U(f)?.icon ?? "dots",
						class: "h-4 w-4 text-accent"
					}, null, 8, ["name"]),
					R("span", {
						class: "max-w-55 truncate text-xs text-ink",
						title: u.value?.name
					}, q(d.value ? U(H)("designer.controlPanel.selectionSummary", { count: l.value.length }) : u.value?.name), 9, dc),
					R("span", fc, q(U(f)?.label ?? u.value?.type), 1)
				]),
				default: $(() => [ur(R("div", pc, [u.value && p.value ? (F(), I(lc, {
					key: 0,
					modelValue: h.value,
					"onUpdate:modelValue": n[1] ||= (e) => h.value = e,
					node: u.value,
					"basic-tab": U(f)?.settingsDialog?.basicTab,
					sections: y.value
				}, {
					default: $(() => [R("div", mc, [d.value ? W("", !0) : (F(), I(gt, {
						key: 0,
						title: U(H)("designer.elementDialog.nameSection")
					}, {
						default: $(() => [V(i, {
							"model-value": m.value,
							schema: g.value,
							"onUpdate:modelValue": x
						}, null, 8, ["model-value", "schema"])]),
						_: 1
					}, 8, ["title"])), V(gt, { title: U(H)("designer.elementDialog.transformSection") }, {
						default: $(() => [(F(!0), X(Y, null, Z(v.value, (e) => (F(), I(pt, {
							key: e.key,
							field: e,
							node: u.value,
							nodes: l.value,
							onCommit: n[0] ||= (e) => U(a).history.commit()
						}, null, 8, [
							"field",
							"node",
							"nodes"
						]))), 128))]),
						_: 1
					}, 8, ["title"])])]),
					_: 1
				}, 8, [
					"modelValue",
					"node",
					"basic-tab",
					"sections"
				])) : W("", !0), u.value && !p.value ? (F(), I(Yo, {
					key: 1,
					modelValue: h.value,
					"onUpdate:modelValue": n[4] ||= (e) => h.value = e,
					class: "min-h-0 flex-1"
				}, {
					default: $(() => [V(o, {
						value: U(Zs),
						label: U(H)("designer.elementDialog.basicTab")
					}, {
						label: $(() => [R("span", hc, q(U(H)("designer.elementDialog.basicTab")), 1)]),
						default: $(() => [R("div", gc, [d.value ? W("", !0) : (F(), I(gt, {
							key: 0,
							title: U(H)("designer.elementDialog.nameSection")
						}, {
							default: $(() => [V(i, {
								"model-value": m.value,
								schema: g.value,
								"onUpdate:modelValue": x
							}, null, 8, ["model-value", "schema"])]),
							_: 1
						}, 8, ["title"])), V(gt, { title: U(H)("designer.elementDialog.transformSection") }, {
							default: $(() => [(F(!0), X(Y, null, Z(v.value, (e) => (F(), I(pt, {
								key: e.key,
								field: e,
								node: u.value,
								nodes: l.value,
								onCommit: n[2] ||= (e) => U(a).history.commit()
							}, null, 8, [
								"field",
								"node",
								"nodes"
							]))), 128))]),
							_: 1
						}, 8, ["title"])])]),
						_: 1
					}, 8, ["value", "label"]), (F(!0), X(Y, null, Z(b.value, (e) => (F(), I(o, {
						key: e.name,
						value: e.name,
						label: e.name
					}, {
						label: $(() => [R("span", _c, q(e.name), 1)]),
						default: $(() => [R("div", vc, [(F(!0), X(Y, null, Z(e.sections, (e) => (F(), I(gt, {
							key: e.title,
							title: e.title,
							hint: e.hint?.(u.value)
						}, {
							default: $(() => [(F(!0), X(Y, null, Z(e.fields, (e) => (F(), I(pt, {
								key: e.key,
								field: e,
								node: u.value,
								nodes: l.value,
								onCommit: n[3] ||= (e) => U(a).history.commit()
							}, null, 8, [
								"field",
								"node",
								"nodes"
							]))), 128))]),
							_: 2
						}, 1032, ["title", "hint"]))), 128))])]),
						_: 2
					}, 1032, ["value", "label"]))), 128))]),
					_: 1
				}, 8, ["modelValue"])) : W("", !0)], 512), [[Or, u.value]])]),
				_: 1
			}, 8, [
				"visible",
				"title",
				"width",
				"height",
				"destroy-on-close"
			]);
		};
	}
}), bc = ["aria-label"], xc = ["title"], Sc = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "export-progress-dialog",
	setup(e) {
		let t = u(), n = E(), r = n.store(), i = K(() => H("designer.exportProgressDialog.exportTitle", { format: r.ui.exportDialog?.format.toUpperCase() ?? "" })), a = K(() => r.rendering.progress), o = K(() => r.ui.exportDialog?.completed ?? !1), s = K(() => o.value ? 100 : a.value.stage !== "render" || a.value.total <= 0 ? 0 : Math.min(100, Math.round(a.value.completed / a.value.total * 100))), c = K(() => o.value ? H("designer.exportProgressDialog.completed") : r.rendering.paused ? H("designer.exportProgressDialog.paused") : H("designer.exportProgressDialog." + a.value.stage)), l = K(() => !o.value && a.value.stage === "render" ? H("designer.exportProgressDialog.pageProgress", a.value) : "");
		function d() {
			r.ui.minimizeExportDialog(!0);
		}
		function f() {
			r.ui.minimizeExportDialog(!1);
		}
		function p() {
			let e = r.rendering.paused ? "export.resume" : "export.pause";
			n.commands.dispatch(e);
		}
		function m() {
			n.commands.dispatch("export.cancel");
		}
		return (e, n) => {
			let u = Ee, h = Ft, g = ut;
			return F(), X(Y, null, [V(U(be), {
				visible: !(!U(r).ui.exportDialog || U(r).ui.exportDialog.minimized),
				title: i.value,
				width: 460,
				footer: !1,
				closable: !1,
				"close-on-esc-keydown": !1,
				"close-on-overlay-click": !1
			}, {
				"header-actions": $(() => [V(u, {
					variant: "text",
					size: "small",
					onClick: d
				}, {
					default: $(() => [z(q(U(H)("designer.exportProgressDialog.minimize")), 1)]),
					_: 1
				})]),
				default: $(() => [R("div", { class: P(["grid gap-2", U(t)("export-progress-dialog")]) }, [
					R("div", {
						class: P(U(t)("export-progress-dialog__status")),
						role: "status",
						"aria-live": "polite"
					}, q(c.value), 3),
					o.value || a.value.stage === "render" ? (F(), I(h, {
						key: 0,
						percentage: s.value,
						label: o.value
					}, null, 8, ["percentage", "label"])) : (F(), I(g, {
						key: 1,
						loading: !U(r).rendering.paused,
						size: "small"
					}, null, 8, ["loading"])),
					l.value ? (F(), X("div", {
						key: 2,
						"data-component": "export-progress-dialog__detail",
						class: P(["text-ink-dim", U(t)("export-progress-dialog__detail")])
					}, q(l.value), 3)) : W("", !0),
					R("p", {
						"data-component": "export-progress-dialog__hint",
						class: P(["text-ink-dim m-0", U(t)("export-progress-dialog__hint")])
					}, q(U(H)("designer.exportProgressDialog.hint")), 3),
					R("div", { class: P(["flex gap-2 justify-end", U(t)("export-progress-dialog__actions")]) }, [V(u, {
						theme: "default",
						variant: "outline",
						disabled: !U(r).rendering.active || !U(r).rendering.pausable,
						onClick: p
					}, {
						default: $(() => [z(q(U(r).rendering.paused ? U(H)("designer.exportProgressDialog.resume") : U(H)("designer.exportProgressDialog.pause")), 1)]),
						_: 1
					}, 8, ["disabled"]), V(u, {
						theme: "danger",
						variant: "outline",
						disabled: !U(r).rendering.active,
						onClick: m
					}, {
						default: $(() => [z(q(U(H)("designer.exportProgressDialog.cancel")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2)
				], 2)]),
				_: 1
			}, 8, ["visible", "title"]), U(r).ui.exportDialog?.minimized ? (F(), X("aside", {
				key: 0,
				class: P(["fixed right-5 bottom-12 flex items-center gap-3 p-3.5 border border-edge bg-panel text-ink rounded-lg [z-index:var(--z-index-context-menu,_2000)] [box-shadow:0_6px_24px_var(--color-shadow)]", U(t)("export-progress-dialog__minimized")]),
				"aria-label": i.value
			}, [
				R("button", {
					"data-component": "export-progress-dialog__restore",
					type: "button",
					class: P(["grid gap-2 border-0 bg-transparent text-left cursor-pointer p-0 [color:inherit]", U(t)("export-progress-dialog__restore")]),
					title: U(H)("designer.exportProgressDialog.expand"),
					onClick: f
				}, [
					R("strong", null, q(i.value), 1),
					R("span", null, [z(q(c.value) + " " + q(l.value) + " ", 1), o.value ? (F(), X(Y, { key: 0 }, [z(q(s.value) + "%", 1)], 64)) : W("", !0)]),
					R("span", null, q(U(H)("designer.exportProgressDialog.expand")), 1)
				], 10, xc),
				V(u, {
					size: "small",
					variant: "outline",
					disabled: !U(r).rendering.active || !U(r).rendering.pausable,
					onClick: p
				}, {
					default: $(() => [z(q(U(r).rendering.paused ? U(H)("designer.exportProgressDialog.resume") : U(H)("designer.exportProgressDialog.pause")), 1)]),
					_: 1
				}, 8, ["disabled"]),
				V(u, {
					size: "small",
					theme: "danger",
					variant: "outline",
					disabled: !U(r).rendering.active,
					onClick: m
				}, {
					default: $(() => [z(q(U(H)("designer.exportProgressDialog.cancel")), 1)]),
					_: 1
				}, 8, ["disabled"])
			], 10, bc)) : W("", !0)], 64);
		};
	}
}), [["__scopeId", "data-v-dfa7f302"]]), Cc = {
	key: 1,
	class: "break-words text-xs leading-4.5"
}, wc = /* @__PURE__ */ G({
	__name: "follow-dialog",
	props: { session: {} },
	setup(e) {
		let t = e, n = E(), r = n.store(), { cancel: a, confirm: o, dialog: s, isActive: c, sessionId: l } = Xs(["follow", "follow-join"], () => t.session), u = L({
			gap: 2,
			name: "",
			target: ""
		}), d = L({
			elementIds: [],
			id: "",
			pageId: ""
		}), f = L(!1), p = K(() => b(d.value.pageId).map((e) => ({
			label: e.name,
			value: e.id
		}))), m = K(() => s.value.name === "follow-join"), h = K(() => r.followBlock.getJoinable(d.value.elementIds)), g = K(() => m.value ? H("designer.followBlock.joinTitle") : H(d.value.id ? "designer.followBlock.settingsTitle" : "designer.followBlock.createTitle")), _ = K(() => {
			let e = r.document.data, t = r.page.get(d.value.pageId), n = /* @__PURE__ */ new Set([
				...(e.repeatGroups ?? []).flatMap((e) => e.elementIds),
				...(e.followBlocks ?? []).flatMap((e) => e.elementIds),
				...d.value.elementIds
			]);
			return [
				...(t?.elements ?? []).filter((e) => !n.has(e.id)).map((e) => ({
					label: e.name,
					target: {
						id: e.id,
						kind: "element"
					}
				})),
				...r.repeatGroup.getByPage(d.value.pageId).map((e) => ({
					label: `${H("designer.followBlock.repeatTarget")} · ${e.name}`,
					target: {
						id: e.id,
						kind: "repeatGroup"
					}
				})),
				...r.followBlock.getByPage(d.value.pageId).map((e) => ({
					label: `${H("designer.followBlock.defaultName")} · ${e.name}`,
					target: {
						id: e.id,
						kind: "followBlock"
					}
				}))
			].filter((t) => {
				let n = {
					...d.value,
					gap: 2,
					id: d.value.id || "__candidate__",
					name: "",
					target: t.target
				};
				return !Un(e, n);
			});
		}), v = K(() => m.value ? [{
			field: "group",
			label: H("designer.followBlock.joinGroupLabel"),
			props: { options: h.value.map((e) => ({
				label: e.name,
				value: e.id
			})) },
			type: "select"
		}] : [
			{
				field: "name",
				label: H("designer.followBlock.nameLabel"),
				type: "input"
			},
			{
				field: "target",
				label: H("designer.followBlock.targetLabel"),
				props: {
					onPopupVisibleChange: (e) => {
						f.value = e;
					},
					options: _.value.map((e) => ({
						"data-select-option": "",
						label: e.label,
						value: qt(e.target)
					})),
					popupVisible: f.value
				},
				type: "select"
			},
			{
				field: "gap",
				label: H("designer.followBlock.gapLabel"),
				props: {
					placeholder: "",
					step: .5,
					suffix: "mm",
					theme: "normal"
				},
				type: "inputNumber"
			}
		]), y = K(() => [
			{
				id: "remove",
				slots: { icon: () => [In(N, { name: "unlink" })] },
				text: H("designer.followBlock.removeGroupTitle"),
				theme: "danger",
				variant: "outline",
				visible: !!d.value.id
			},
			{
				id: "cancel",
				slots: { icon: () => [In(N, { name: "close" })] },
				text: H("designer.repeatDialog.cancelButton"),
				theme: "default",
				variant: "outline"
			},
			{
				id: "confirm",
				slots: { icon: () => [In(N, { name: "check" })] },
				text: H("designer.repeatDialog.confirmButton"),
				theme: "primary"
			}
		]);
		function b(e) {
			let t = /* @__PURE__ */ new Set([...r.repeatGroup.list.flatMap((e) => e.elementIds), ...r.followBlock.list.flatMap((e) => e.elementIds)]);
			return (r.page.get(e)?.elements ?? []).filter((e) => !t.has(e.id) && !e.locked);
		}
		function x() {
			let e = h.value.find((e) => e.id === u.value.group);
			e ? n.commands.invoke("followBlock.addMembers", e.id, d.value.elementIds) && o({
				groupId: e.id,
				operation: "saved"
			}) : r.ui.toast(H("designer.followBlock.joinGroupRequired"), "error");
		}
		function S() {
			let e = h.value, t = r.followBlock.getByElements(d.value.elementIds), n = e.find((e) => t.some((t) => t.id === e.id));
			return n ? n.id : e.length === 1 ? e[0]?.id ?? "" : "";
		}
		async function C(e) {
			if (!c.value) return;
			if (e.id === "cancel" || d.value.id && !r.followBlock.find(d.value.id)) {
				a();
				return;
			}
			if (e.id === "remove") {
				let e = l.value, t = d.value.id;
				await n.commands.execute("data.removeFollow", t), r.ui.dialogs.confirm(e, {
					groupId: t,
					operation: "removed"
				});
				return;
			}
			if (m.value) {
				x();
				return;
			}
			if (!d.value.elementIds.length) {
				r.ui.toast(H("designer.followBlock.membersRequired"), "error");
				return;
			}
			let t = _.value.find((e) => qt(e.target) === u.value.target);
			if (!t) {
				r.ui.toast(H("designer.followBlock.targetRequired"), "error");
				return;
			}
			let i = {
				gap: u.value.gap === "" || u.value.gap == null ? null : Number(u.value.gap),
				name: String(u.value.name ?? "").trim() || H("designer.followBlock.defaultName"),
				target: t.target
			}, s = d.value.id;
			if (s) {
				n.commands.invoke("followBlock.update", s, {
					...i,
					gap: i.gap ?? r.followBlock.find(s)?.gap ?? 0
				}) && o({
					groupId: s,
					operation: "saved"
				});
				return;
			}
			let f = n.commands.invoke("followBlock.create", d.value.pageId, d.value.elementIds, i.target, i.gap, i.name);
			f && o({
				groupId: f.id,
				operation: "saved"
			});
		}
		return ke("values", (e) => {
			e && c.value && (u.value = {
				...u.value,
				...e
			});
		}), ke("select", (e) => {
			f.value = c.value && !m.value && e === "target";
		}), J([() => s.value.name, () => s.value.groupId], () => {
			if (s.value.name !== "follow" && !m.value) return;
			let { groupId: e } = s.value, t = r.followBlock.find(e ?? "");
			if (e && !t) {
				a();
				return;
			}
			let n = new Set(b(r.scope.active.id).map((e) => e.id));
			d.value = t ? {
				elementIds: [...t.elementIds],
				id: t.id,
				pageId: t.pageId
			} : {
				elementIds: m.value ? [...r.selection.ids] : r.selection.ids.filter((e) => n.has(e)),
				id: "",
				pageId: r.scope.active.id
			}, u.value = {
				gap: t?.gap ?? (d.value.elementIds.length > 1 ? void 0 : 2),
				name: t?.name ?? H("designer.followBlock.defaultName"),
				target: t ? qt(t.target) : ""
			}, m.value && (u.value = { group: S() });
		}, { immediate: !0 }), J(() => d.value.elementIds.length, (e) => {
			!d.value.id && e > 1 && u.value.gap !== void 0 && (u.value = {
				...u.value,
				gap: void 0
			});
		}), (e, t) => {
			let n = lt;
			return F(), I(U(be), {
				key: U(r).ui.restoreRevision,
				visible: U(c),
				title: g.value,
				width: 430,
				onClose: U(a)
			}, {
				footer: $(() => [V(U(pe), {
					actions: y.value,
					onClick: C
				}, null, 8, ["actions"])]),
				default: $(() => [m.value ? W("", !0) : (F(), I(at, {
					key: 0,
					label: U(H)("designer.followBlock.membersLabel")
				}, {
					default: $(() => [d.value.id ? (F(), X("div", Cc, q(U(r).element.getMany(d.value.elementIds).map((e) => e.name).join("、")), 1)) : (F(), I(n, {
						key: 0,
						modelValue: d.value.elementIds,
						"onUpdate:modelValue": t[0] ||= (e) => d.value.elementIds = e,
						multiple: "",
						options: p.value,
						"aria-label": U(H)("designer.followBlock.membersLabel")
					}, null, 8, [
						"modelValue",
						"options",
						"aria-label"
					]))]),
					_: 1
				}, 8, ["label"])), V(i, {
					modelValue: u.value,
					"onUpdate:modelValue": t[1] ||= (e) => u.value = e,
					schema: v.value
				}, null, 8, ["modelValue", "schema"])]),
				_: 1
			}, 8, [
				"visible",
				"title",
				"onClose"
			]);
		};
	}
}), Tc = { class: "flex min-h-0 flex-1 flex-col" }, Ec = { class: "flex shrink-0 flex-wrap gap-3 border-b border-edge p-3" }, Dc = { class: "min-w-55 flex-1" }, Oc = { class: "mb-1 text-xs text-ink-dim" }, kc = { class: "w-45 max-w-full shrink-0" }, Ac = { class: "mb-1 text-xs text-ink-dim" }, jc = { class: "shrink-0 px-3 py-2 text-xs text-ink-dim" }, Mc = { class: "min-h-0 flex-1 overflow-auto" }, Nc = { class: "sticky top-0 z-10 bg-panel-2 text-ink-dim" }, Pc = { class: "px-3 py-2 font-normal" }, Fc = { class: "w-68 px-3 py-2 font-normal" }, Ic = { class: "flex items-center gap-2" }, Lc = { class: "w-28 px-3 py-2 font-normal" }, Rc = { class: "w-19 px-3 py-2 font-normal" }, zc = { class: "w-32 px-3 py-2 font-normal" }, Bc = { class: "px-3 py-2" }, Vc = ["title"], Hc = ["title"], Uc = { class: "px-3 py-2" }, Wc = { class: "flex flex-col" }, Gc = { class: "flex min-w-0 items-center gap-2 rounded border border-edge bg-panel px-2 py-1.5" }, Kc = { class: "min-w-0 flex-1" }, qc = { class: "flex items-center gap-1 text-caption text-ink-dim" }, Jc = { class: "rounded bg-panel-2 px-1" }, Yc = ["title", "onClick"], Xc = { class: "flex min-w-0 items-center gap-2 rounded border border-accent/30 bg-accent/5 px-2 py-1.5" }, Zc = { class: "min-w-0 flex-1" }, Qc = { class: "text-caption text-ink-dim" }, $c = ["title"], el = { key: 0 }, tl = ["onClick"], nl = ["title"], rl = ["title"], il = { class: "px-3 py-2" }, al = { class: "px-3 py-2" }, ol = { class: "flex gap-1" }, sl = { class: "mr-auto text-xs text-ink-dim" }, cl = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "follow-manager-dialog",
	props: { session: {} },
	setup(e) {
		let t = u(), n = e, r = E(), i = r.store(), { cancel: a, isActive: o, sessionId: s } = Xs("follow-manager", () => n.session), c = L(""), l = L(""), d = K(() => [{
			label: H("designer.repeatManager.allPagesLabel"),
			value: ""
		}, ...i.page.list.map((e) => ({
			label: e.name,
			value: e.id
		}))]), f = K(() => {
			let e = c.value.trim().toLocaleLowerCase();
			return i.followBlock.list.map((e) => ({
				...e,
				targetDisplay: m(e)
			})).filter((t) => (!l.value || t.pageId === l.value) && `${t.name} ${p(t)} ${t.targetDisplay.kind} ${t.targetDisplay.name}`.toLocaleLowerCase().includes(e));
		});
		function p(e) {
			return i.element.getMany(e.elementIds).map((e) => e.name).join("、");
		}
		function m(e) {
			let t = e.target, n = Yt(i.document.data, e.pageId, t), r = {
				element: () => ({
					icon: "select",
					kind: H("designer.followManager.elementTarget"),
					name: n?.name
				}),
				followBlock: () => ({
					icon: "link",
					kind: H("designer.followBlock.defaultName"),
					name: n?.name
				}),
				repeatGroup: () => ({
					icon: "loop",
					kind: H("designer.followBlock.repeatTarget"),
					name: n?.name
				})
			}[t.kind]();
			return {
				...r,
				name: r.name ?? H("designer.followManager.missingTarget")
			};
		}
		function h(e) {
			let t = Yt(i.document.data, e.pageId, e.target)?.elementIds ?? [];
			g("data.locateFollowElements", e.pageId, t);
		}
		function g(e, ...t) {
			r.commands.dispatch(e, ...t);
		}
		return (e, n) => {
			let r = x, u = lt, m = Ee;
			return F(), I(U(be), {
				visible: U(o),
				title: U(H)("designer.followManager.dialogTitle"),
				width: 900,
				height: 540,
				"body-padding": !1,
				onClose: n[4] ||= (e) => U(a)()
			}, {
				footer: $(() => [
					R("span", sl, q(U(H)("designer.followManager.countLabel", { count: f.value.length })), 1),
					V(m, { onClick: n[2] ||= (e) => g("data.createFollow", U(s)) }, {
						default: $(() => [z(q(U(H)("designer.followBlock.createTitle")), 1)]),
						_: 1
					}),
					V(m, {
						variant: "outline",
						onClick: n[3] ||= (e) => U(a)()
					}, {
						default: $(() => [z(q(U(H)("designer.repeatManager.closeButton")), 1)]),
						_: 1
					})
				]),
				default: $(() => [R("div", Tc, [
					R("div", Ec, [R("div", Dc, [R("div", Oc, q(U(H)("designer.followManager.searchLabel")), 1), V(r, {
						modelValue: c.value,
						"onUpdate:modelValue": n[0] ||= (e) => c.value = e,
						clearable: "",
						"aria-label": U(H)("designer.followManager.searchPlaceholder"),
						placeholder: U(H)("designer.followManager.searchPlaceholder")
					}, null, 8, [
						"modelValue",
						"aria-label",
						"placeholder"
					])]), R("div", kc, [R("div", Ac, q(U(H)("designer.repeatManager.pageLabel")), 1), V(u, {
						modelValue: l.value,
						"onUpdate:modelValue": n[1] ||= (e) => l.value = e,
						"aria-label": U(H)("designer.repeatManager.pageLabel"),
						options: d.value
					}, null, 8, [
						"modelValue",
						"aria-label",
						"options"
					])])]),
					R("p", jc, q(U(H)("designer.followManager.createHint")), 1),
					R("div", Mc, [R("table", {
						"data-component": "block-manager",
						class: P(["w-full table-fixed text-left text-xs", U(t)("block-manager")])
					}, [R("thead", Nc, [R("tr", null, [
						R("th", Pc, q(U(H)("designer.followManager.nameLabel")), 1),
						R("th", Fc, [R("div", Ic, [
							R("span", null, q(U(H)("designer.followManager.targetLabel")), 1),
							V(N, {
								name: "arrow-right",
								class: "h-4 w-4 shrink-0 text-accent"
							}),
							R("span", null, q(U(H)("designer.followManager.blockLabel")), 1)
						])]),
						R("th", Lc, q(U(H)("designer.repeatManager.pageLabel")), 1),
						R("th", Rc, q(U(H)("designer.followManager.gapLabel")), 1),
						R("th", zc, q(U(H)("designer.repeatManager.actionsLabel")), 1)
					])]), R("tbody", null, [(F(!0), X(Y, null, Z(f.value, (e) => (F(), X("tr", {
						key: e.id,
						class: "border-b border-edge hover:bg-panel-2"
					}, [
						R("td", Bc, [R("div", {
							class: "truncate",
							title: e.name
						}, q(e.name), 9, Vc), R("div", {
							class: "truncate text-ink-dim",
							title: p(e)
						}, q(p(e)), 9, Hc)]),
						R("td", Uc, [R("div", Wc, [
							R("div", Gc, [V(N, {
								name: e.targetDisplay.icon,
								class: "h-4 w-4 shrink-0 text-ink-dim"
							}, null, 8, ["name"]), R("div", Kc, [R("div", qc, [R("span", null, q(U(H)("designer.followManager.targetRoleLabel")), 1), R("span", Jc, q(e.targetDisplay.kind), 1)]), R("button", {
								type: "button",
								class: "block truncate text-left text-accent hover:underline",
								title: e.targetDisplay.name,
								onClick: (t) => h(e)
							}, q(e.targetDisplay.name), 9, Yc)])]),
							V(N, {
								name: "layer-down",
								class: "my-0.5 ml-2 h-4 w-4 shrink-0 text-accent"
							}),
							R("div", Xc, [V(N, {
								name: "link",
								class: "h-4 w-4 shrink-0 text-accent"
							}), R("div", Zc, [
								R("div", Qc, q(U(H)("designer.followManager.followerRoleLabel")), 1),
								R("div", {
									class: "break-words font-medium text-ink",
									title: p(e)
								}, [(F(!0), X(Y, null, Z(U(i).element.getMany(e.elementIds), (t, n) => (F(), X(Y, { key: t.id }, [n ? (F(), X("span", el, "、")) : W("", !0), R("button", {
									type: "button",
									class: "text-accent hover:underline",
									onClick: (n) => g("data.locateFollowElements", e.pageId, [t.id])
								}, q(t.name), 9, tl)], 64))), 128))], 8, $c),
								R("div", {
									class: "mt-0.5 truncate text-caption text-ink-dim",
									title: e.name
								}, q(U(H)("designer.followManager.blockNameLabel", { name: e.name })), 9, nl)
							])])
						])]),
						R("td", {
							class: "truncate px-3 py-2",
							title: U(i).page.get(e.pageId)?.name
						}, q(U(i).page.get(e.pageId)?.name), 9, rl),
						R("td", il, q(e.gap) + " mm", 1),
						R("td", al, [R("div", ol, [V(m, {
							shape: "square",
							variant: "text",
							title: U(H)("designer.repeatManager.locateLabel"),
							"aria-label": U(H)("designer.repeatManager.locateLabel"),
							onClick: (t) => g("data.locateFollow", e.id)
						}, {
							icon: $(() => [V(N, {
								name: "locate",
								class: "h-4 w-4"
							})]),
							_: 1
						}, 8, [
							"title",
							"aria-label",
							"onClick"
						]), V(m, {
							shape: "square",
							variant: "text",
							title: U(H)("designer.followBlock.settingsTitle"),
							"aria-label": U(H)("designer.followBlock.settingsTitle"),
							onClick: (t) => g("data.editFollow", e.id, U(s))
						}, {
							icon: $(() => [V(N, {
								name: "sliders",
								class: "h-4 w-4"
							})]),
							_: 1
						}, 8, [
							"title",
							"aria-label",
							"onClick"
						])])])
					]))), 128))])], 2), f.value.length === 0 ? (F(), I(Zo, {
						key: 0,
						icon: "link",
						message: U(H)(U(i).followBlock.list.length ? "designer.followManager.noResultsMessage" : "designer.followManager.emptyMessage")
					}, null, 8, ["message"])) : W("", !0)])
				])]),
				_: 1
			}, 8, ["visible", "title"]);
		};
	}
}), [["__scopeId", "data-v-b5cbb79e"]]), ll = /* @__PURE__ */ G({
	__name: "guide-dialog",
	setup(e) {
		let t = E(), n = t.store(), r = L({
			orientation: "horizontal",
			position: 0
		}), a = K(() => {
			let { guideId: e, pageId: t } = n.ui.activeDialog;
			return !e || !t ? null : n.guide.get(t, e) ?? null;
		}), o = K(() => {
			let e = n.ui.activeDialog.pageId;
			return e ? n.scope.get(e) : n.scope.active;
		}), s = K(() => {
			let e = o.value;
			return e ? r.value.orientation === "horizontal" ? e.height : e.width : 0;
		}), c = K(() => [{
			field: "orientation",
			label: H("designer.guideDialog.orientationLabel"),
			props: {
				disabled: !!a.value,
				options: [{
					label: H("designer.guideDialog.horizontalOption"),
					value: "horizontal"
				}, {
					label: H("designer.guideDialog.verticalOption"),
					value: "vertical"
				}]
			},
			type: "select"
		}, {
			field: "position",
			help: H("designer.guideDialog.positionHint", {
				edge: H(r.value.orientation === "horizontal" ? "designer.guideDialog.topEdge" : "designer.guideDialog.leftEdge"),
				maxExtent: s.value
			}),
			label: H("designer.guideDialog.positionLabel"),
			props: {
				max: s.value,
				min: 0,
				step: .5,
				suffix: H("designer.guideDialog.distanceUnit"),
				theme: "normal"
			},
			type: "inputNumber"
		}]);
		function l() {
			let e = o.value;
			if (!e) {
				n.ui.closeDialog();
				return;
			}
			let i = r.value.orientation === "horizontal" ? e.height : e.width, s = Math.min(i, Math.max(0, Number(r.value.position) || 0)), c = a.value;
			c ? t.commands.invoke("guide.move", e.id, c.id, s) : t.commands.invoke("guide.create", e.id, r.value.orientation, s), n.ui.closeDialog();
		}
		return J(() => n.ui.activeDialog.name, (e) => {
			if (e !== "guide") return;
			let t = a.value;
			t ? (r.value.orientation = t.orientation, r.value.position = t.position) : (r.value.orientation = "horizontal", r.value.position = Math.round(s.value / 2 * 2) / 2);
		}, { immediate: !0 }), (e, t) => (F(), I(U(be), {
			visible: U(n).ui.activeDialog.name === "guide",
			title: a.value ? U(H)("designer.guideDialog.editTitle") : U(H)("designer.guideDialog.createTitle"),
			width: 300,
			"confirm-on-enter": !0,
			"confirm-btn": a.value ? U(H)("designer.guideDialog.applyButton") : U(H)("designer.guideDialog.addButton"),
			onClose: t[1] ||= (e) => U(n).ui.closeDialog(),
			onConfirm: l
		}, {
			default: $(() => [V(i, {
				modelValue: r.value,
				"onUpdate:modelValue": t[0] ||= (e) => r.value = e,
				schema: c.value
			}, null, 8, ["modelValue", "schema"])]),
			_: 1
		}, 8, [
			"visible",
			"title",
			"confirm-btn"
		]));
	}
}), ul = /* @__PURE__ */ G({
	__name: "new-document-dialog",
	setup(e) {
		let t = E(), n = t.store();
		function r() {
			n.ui.closeDialog();
		}
		function i() {
			t.commands.dispatch("document.create");
		}
		return (e, t) => (F(), I(U(be), {
			visible: U(n).ui.activeDialog.name === "new-document",
			title: U(H)("designer.builtins.newDocumentTitle"),
			width: 400,
			"confirm-btn": {
				content: U(H)("designer.newDocumentDialog.confirmButton"),
				theme: "danger"
			},
			onConfirm: i,
			onClose: r
		}, {
			default: $(() => [z(q(U(H)("designer.newDocumentDialog.confirmMessage")), 1)]),
			_: 1
		}, 8, [
			"visible",
			"title",
			"confirm-btn"
		]));
	}
}), dl = /* @__PURE__ */ G({
	__name: "page-dialog",
	props: { session: {} },
	setup(e) {
		let t = u(), n = e, r = E(), a = r.store(), { cancel: o, confirm: s, dialog: c, isActive: l } = Xs("page", () => n.session), d = L(!1), f = L({
			background: "#ffffff",
			height: 297,
			marginBottom: 0,
			marginLeft: 0,
			marginRight: 0,
			marginTop: 0,
			name: "",
			preset: "",
			templateMode: Rr,
			width: 210
		}), p = K(() => [
			{
				field: "name",
				label: H("designer.pageDialog.nameLabel"),
				type: "input"
			},
			...h.value ? [] : [v.value],
			{
				field: "preset",
				label: H("designer.pageDialog.presetLabel"),
				props: {
					disabled: y.value !== void 0,
					onChange: O,
					options: [{
						label: H("designer.pageDialog.customPresetOption"),
						value: ""
					}, ...ar.map((e) => ({
						label: `${e.label}（${e.width} × ${e.height} mm）`,
						value: w(e.width, e.height)
					}))]
				},
				type: "select"
			},
			{
				field: "width",
				label: H("designer.pageDialog.widthLabel"),
				props: {
					disabled: y.value !== void 0,
					max: 2e3,
					min: 10,
					onChange: function(e) {
						return D(Number(e) || 210, f.value.height);
					},
					step: 1,
					suffix: H("designer.pageDialog.distanceUnit"),
					theme: "normal"
				},
				type: "inputNumber"
			},
			{
				field: "height",
				label: H("designer.pageDialog.heightLabel"),
				props: {
					disabled: y.value !== void 0,
					max: 2e3,
					min: 10,
					onChange: function(e) {
						return D(f.value.width, Number(e) || 297);
					},
					step: 1,
					suffix: H("designer.pageDialog.distanceUnit"),
					theme: "normal"
				},
				type: "inputNumber"
			},
			{
				field: "background",
				label: H("designer.pageDialog.backgroundLabel"),
				props: {
					disabled: y.value !== void 0,
					resetValue: "#ffffff"
				},
				type: "colorField"
			},
			...[
				"top",
				"right",
				"bottom",
				"left"
			].map((e) => ({
				field: `margin${e[0].toUpperCase()}${e.slice(1)}`,
				label: H(`designer.pageDialog.margin${e[0].toUpperCase()}${e.slice(1)}Label`),
				props: {
					disabled: y.value !== void 0,
					min: 0,
					step: .5,
					suffix: H("designer.pageDialog.distanceUnit"),
					theme: "normal"
				},
				type: "inputNumber"
			}))
		]), m = K(() => {
			let e = c.value.pageId;
			return e ? a.scope.get(e) ?? a.page.get(e) ?? null : null;
		}), h = K(() => !!m.value && a.template.isContainer(m.value.id)), g = K(() => m.value && !h.value ? a.template.resolveFor(m.value) : void 0), _ = K(() => {
			if (!h.value) return g.value ?? a.template.resolveFor({ id: m.value?.id }, m.value ? void 0 : a.document.data.pages.length + 1);
		}), v = K(() => ({
			field: "templateMode",
			label: H("designer.applyTemplateDialog.templateLabel"),
			props: { options: [..._.value ? [{
				label: _.value.name,
				value: _.value.id
			}] : [], {
				label: H("designer.pageDialog.noTemplateOption"),
				value: Rr
			}] },
			type: "select"
		})), y = K(() => f.value.templateMode === _.value?.id ? _.value : void 0), b = K({
			get() {
				let e = y.value;
				if (!e) return f.value;
				let { height: t, width: n } = e.page, r = nn(e.page.margins);
				return {
					...f.value,
					background: gr(e),
					height: t,
					marginBottom: r.bottom,
					marginLeft: r.left,
					marginRight: r.right,
					marginTop: r.top,
					preset: T(n, t),
					width: n
				};
			},
			set(e) {
				y.value ? f.value = {
					...f.value,
					name: e.name,
					templateMode: e.templateMode
				} : f.value = e;
			}
		}), x = K(() => {
			let e = y.value;
			return {
				height: e?.page.height ?? Math.min(2e3, Math.max(10, Number(f.value.height) || 297)),
				margins: e ? e.page.margins : {
					bottom: Number(f.value.marginBottom ?? 0),
					left: Number(f.value.marginLeft ?? 0),
					right: Number(f.value.marginRight ?? 0),
					top: Number(f.value.marginTop ?? 0)
				},
				width: e?.page.width ?? Math.min(2e3, Math.max(10, Number(f.value.width) || 210))
			};
		}), S = K(() => {
			try {
				return jn(x.value), "";
			} catch (e) {
				if (!(e instanceof zt)) throw e;
				return e.userMessage;
			}
		}), C = K(() => [{
			id: "cancel",
			slots: { icon: () => [In(N, {
				class: "h-3.5 w-3.5",
				name: "close"
			})] },
			text: H("designer.pageDialog.cancelButton"),
			theme: "default",
			variant: "outline"
		}, {
			id: "apply",
			slots: { icon: () => [In(N, {
				class: "h-3.5 w-3.5",
				name: m.value ? "check" : "plus"
			})] },
			text: m.value ? H("designer.pageDialog.applyButton") : H("designer.pageDialog.addButton"),
			theme: "primary",
			variant: "base"
		}]);
		function w(e, t) {
			return `${Number(e) || 0}x${Number(t) || 0}`;
		}
		function T(e, t) {
			let n = w(e, t);
			return ar.some((e) => w(e.width, e.height) === n) ? n : "";
		}
		function D(e, t) {
			f.value = {
				...f.value,
				preset: T(e, t)
			};
		}
		function O(e) {
			let t = ar.find((t) => w(t.width, t.height) === e);
			t && (f.value = {
				...f.value,
				height: t.height,
				width: t.width
			});
		}
		function ee(e) {
			e.id === "cancel" ? o() : e.id === "apply" && A();
		}
		function k() {
			let e = y.value;
			e && r.commands.dispatch("template.pageSetup", e.page.id);
		}
		function A() {
			if (!l.value) return;
			let e = m.value;
			if (c.value.pageId !== void 0 && !e) {
				o();
				return;
			}
			if (d.value = !0, S.value) return;
			let { height: t, margins: n, width: i } = x.value, u = String(f.value.name ?? "").trim() || H("designer.pageDialog.defaultPageName"), p = y.value ? {} : { background: String(f.value.background || "#ffffff") }, _ = {
				...p,
				height: t,
				margins: n,
				name: u,
				width: i
			};
			e ? !h.value && y.value?.id !== g.value?.id ? r.commands.invoke("page.update", e.id, {
				..._,
				templateId: y.value ? void 0 : Rr
			}) : a.scope.get(e.id) ? r.commands.invoke("scope.updatePage", e.id, _) : r.commands.invoke("page.update", e.id, _) : r.commands.invoke("page.create", i, t, u, {
				...p,
				margins: n,
				templateId: y.value ? void 0 : Rr
			}), s();
		}
		return ke("values", (e) => {
			e && l.value && (f.value = {
				...f.value,
				...e
			}, D(f.value.width, f.value.height));
		}), J([() => c.value.name, () => c.value.pageId], ([e]) => {
			if (e !== "page") return;
			d.value = !1;
			let t = m.value, n = g.value?.page ?? t, r = n ? n.width : 210, i = n ? n.height : 297, o = nn(n?.margins);
			f.value = {
				background: g.value ? gr(g.value) : t?.background ?? "#ffffff",
				height: i,
				marginBottom: o.bottom,
				marginLeft: o.left,
				marginRight: o.right,
				marginTop: o.top,
				name: t ? t.name : H("designer.pageDialog.numberedPageName", { pageNumber: a.document.data.pages.length + 1 }),
				preset: T(r, i),
				templateMode: (t ? g.value?.id : _.value?.id) ?? "template-none",
				width: r
			};
		}, { immediate: !0 }), J([
			l,
			() => c.value.pageId,
			m
		], ([e, t, n]) => {
			e && t !== void 0 && !n && o();
		}, { immediate: !0 }), (e, n) => {
			let r = Ee;
			return F(), I(U(be), {
				key: U(a).ui.restoreRevision,
				visible: U(l),
				title: m.value ? U(H)("designer.pageDialog.editTitle") : U(H)("designer.pageDialog.createTitle"),
				width: 320,
				onClose: U(o)
			}, {
				footer: $(() => [V(U(pe), {
					actions: C.value,
					onClick: ee
				}, null, 8, ["actions"])]),
				default: $(() => [
					y.value ? (F(), I(at, {
						key: 0,
						"data-test-part": "page-dialog__inheritance",
						class: P(U(t)("page-dialog__inheritance")),
						help: U(H)("designer.pageDialog.inheritedLayoutMessage", { templateName: y.value.name })
					}, {
						default: $(() => [V(r, {
							variant: "outline",
							theme: "primary",
							onClick: k
						}, {
							icon: $(() => [V(N, {
								name: "template",
								class: "h-3.5 w-3.5"
							})]),
							default: $(() => [z(" " + q(U(H)("designer.pageDialog.editTemplateButton")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["class", "help"])) : W("", !0),
					V(i, {
						modelValue: b.value,
						"onUpdate:modelValue": n[0] ||= (e) => b.value = e,
						schema: p.value
					}, null, 8, ["modelValue", "schema"]),
					d.value && S.value ? (F(), I(et, {
						key: 1,
						class: P(["mt-2", U(t)("page-dialog__validation")]),
						role: "alert",
						variant: "danger",
						text: S.value
					}, null, 8, ["class", "text"])) : W("", !0)
				]),
				_: 1
			}, 8, [
				"visible",
				"title",
				"onClose"
			]);
		};
	}
});
function fl(e) {
	let t = e.store(), { renderPreviewHtml: n } = s(e);
	return {
		capture(t) {
			return e.errors.capture(t, { source: "preview.render" });
		},
		close() {
			t.ui.closeDialog();
		},
		getSampleInput() {
			return un(t.document.data);
		},
		get imageLoadTimeoutMs() {
			return t.config.data.rendering.imageLoadTimeoutMs;
		},
		get name() {
			return t.document.data.name;
		},
		print(t) {
			e.commands.dispatch("preview.print", t);
		},
		render: n,
		get request() {
			if (t.ui.activeDialog.name === "preview") return t.ui.activeDialog;
		},
		get revision() {
			return t.ui.restoreRevision;
		}
	};
}
var pl = /* @__PURE__ */ G({
	__name: "preview-dialog",
	props: { timeoutMs: {} },
	emits: ["error", "ready"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = fl(E());
		return (e, t) => (F(), I(Mt, {
			source: U(i),
			"timeout-ms": n.timeoutMs,
			onError: t[0] ||= (e) => r("error", e),
			onReady: t[1] ||= (e, t) => r("ready", e, t)
		}, null, 8, ["source", "timeout-ms"]));
	}
}), ml = { class: "ml-1 text-xs text-ink" }, hl = {
	key: 0,
	class: "flex flex-col gap-2.5"
}, gl = /* @__PURE__ */ G({
	__name: "repeat-dialog",
	props: { session: {} },
	setup(e) {
		let t = e, n = E(), r = n.store(), { cancel: a, confirm: o, dialog: s, isActive: c } = Xs("repeat", () => t.session), l = L(!1), u = L(!1), d = L({
			collection: "",
			columns: 2,
			direction: "vertical",
			gapX: 2,
			gapY: 2,
			name: "",
			positionMode: "fixed"
		}), f = L({
			elementIds: [],
			id: null
		}), p = K(() => [
			{
				label: H("designer.repeatDialog.verticalLayoutOption"),
				value: "vertical"
			},
			{
				label: H("designer.repeatDialog.gridLayoutOption"),
				value: "grid"
			},
			{
				label: H("designer.repeatDialog.pageLayoutOption"),
				value: "page"
			}
		]), m = K(() => [
			{
				field: "name",
				label: H("designer.repeatDialog.nameLabel"),
				type: "input"
			},
			{
				field: "collection",
				label: H("designer.repeatDialog.collectionLabel"),
				props: { onOpen: function() {
					S(!0);
				} },
				type: "collectionPicker"
			},
			{
				field: "direction",
				label: H("designer.repeatDialog.layoutLabel"),
				props: { options: p.value },
				type: "select"
			},
			{
				field: "positionMode",
				hidden: x,
				label: H("designer.repeatDialog.positionModeLabel"),
				props: { options: [{
					label: H("designer.repeatDialog.fixedPositionOption"),
					value: "fixed"
				}, {
					label: H("designer.repeatDialog.flowPositionOption"),
					value: "flow"
				}] },
				type: "select"
			},
			{
				field: "gapX",
				hidden: b,
				label: H("designer.repeatDialog.columnGapLabel"),
				props: {
					max: 200,
					min: 0,
					step: .5,
					suffix: H("designer.repeatDialog.distanceUnit"),
					theme: "normal"
				},
				type: "inputNumber"
			},
			{
				field: "gapY",
				hidden: x,
				label: H("designer.repeatDialog.verticalGapLabel"),
				props: {
					max: 200,
					min: 0,
					step: .5,
					suffix: H("designer.repeatDialog.distanceUnit"),
					theme: "normal"
				},
				type: "inputNumber"
			},
			{
				field: "columns",
				help: H("designer.repeatDialog.columnsHint"),
				hidden: b,
				label: H("designer.repeatDialog.columnsLabel"),
				props: {
					max: 20,
					min: 1,
					step: 1,
					suffix: H("designer.repeatDialog.columnUnit"),
					theme: "normal"
				},
				type: "inputNumber"
			}
		]), h = K(() => f.value.id === null), g = K(() => r.repeatGroup.getApplyTarget(r.page.activeId, f.value.elementIds)), _ = K(() => h.value ? g.value.groups.length > 0 ? H("designer.repeatDialog.batchTitle") : H("designer.repeatDialog.createTitle") : H("designer.repeatDialog.editTitle")), v = K(() => {
			let e = s.value.groupId;
			return e ? r.repeatGroup.find(e) ?? null : null;
		}), y = K(() => [
			{
				id: "ungroup",
				slots: { icon: () => [In(N, {
					class: "h-3.5 w-3.5",
					name: "unlink"
				})] },
				text: H("designer.repeatDialog.ungroupButton"),
				theme: "danger",
				variant: "outline",
				visible: !h.value
			},
			{
				id: "cancel",
				slots: { icon: () => [In(N, {
					class: "h-3.5 w-3.5",
					name: "close"
				})] },
				text: H("designer.repeatDialog.cancelButton"),
				theme: "default",
				variant: "outline"
			},
			{
				id: "confirm",
				slots: { icon: () => [In(N, {
					class: "h-3.5 w-3.5",
					name: "check"
				})] },
				text: H("designer.repeatDialog.confirmButton"),
				theme: "primary",
				variant: "base"
			}
		]);
		function b({ values: e }) {
			return e.direction !== "grid";
		}
		function x({ values: e }) {
			return e.direction === "page";
		}
		function S(e) {
			l.value = e;
		}
		function C(e) {
			d.value = {
				...d.value,
				collection: e
			}, S(!1);
		}
		function w() {
			if (!String(d.value.collection ?? "").trim()) {
				r.ui.toast(H("designer.repeatDialog.collectionRequiredMessage"), "error");
				return;
			}
			let e = {
				collection: String(d.value.collection ?? "").trim(),
				columns: Math.max(1, Math.trunc(Number(d.value.columns) || 1)),
				direction: d.value.direction,
				gapX: Math.max(0, Number(d.value.gapX) || 0),
				gapY: Math.max(0, Number(d.value.gapY) || 0),
				name: String(d.value.name ?? "").trim() || H("designer.repeatDialog.defaultGroupName"),
				positionMode: d.value.positionMode === "flow" ? "flow" : "fixed"
			}, t = f.value.id;
			if (t) n.commands.invoke("repeatGroup.update", t, e);
			else {
				let i = n.commands.invoke("repeatGroup.applyToSelection", r.page.activeId, f.value.elementIds, e);
				if (!i) return;
				t = i.id;
			}
			r.ui.toast(H("designer.repeatDialog.groupSavedMessage", { groupName: e.name }), "success"), o({
				groupId: t,
				operation: "saved"
			});
		}
		function T(e) {
			if (c.value) {
				if (f.value.id && !v.value) a();
				else if (e.id === "ungroup") {
					let e = f.value.id;
					e && (n.commands.invoke("repeatGroup.remove", e), r.ui.toast(H("designer.repeatDialog.ungroupedMessage"), "success"), o({
						groupId: e,
						operation: "removed"
					}));
				} else e.id === "cancel" ? a() : e.id === "confirm" && w();
			}
		}
		return J([() => s.value.name, () => s.value.groupId], ([e, t]) => {
			if (e !== "repeat") return;
			let n = v.value;
			if (t && !n) a();
			else {
				if (n) d.value = {
					collection: n.collection,
					columns: n.columns,
					direction: n.direction,
					gapX: n.gapX,
					gapY: n.gapY,
					name: n.name,
					positionMode: n.positionMode ?? "fixed"
				}, f.value = {
					elementIds: [...n.elementIds],
					id: n.id
				};
				else if (r.selection.ids.length > 0 && r.page.active) d.value = {
					collection: "",
					columns: 2,
					direction: "vertical",
					gapX: 2,
					gapY: 2,
					name: H("designer.repeatDialog.numberedGroupName", { groupNumber: r.repeatGroup.list.length + 1 }),
					positionMode: "fixed"
				}, f.value = {
					elementIds: [...r.selection.ids],
					id: null
				};
				else {
					u.value = !1, r.ui.toast(H("designer.repeatDialog.selectMembersMessage"), "error"), a();
					return;
				}
				u.value = !0;
			}
		}, { immediate: !0 }), (e, t) => (F(), X(Y, null, [V(U(be), {
			visible: U(c),
			title: _.value,
			width: 430,
			onClose: U(a)
		}, {
			header: $(() => [V(N, {
				name: "loop",
				class: "h-4 w-4 text-accent"
			}), R("span", ml, q(_.value), 1)]),
			footer: $(() => [V(U(pe), {
				actions: y.value,
				onClick: T
			}, null, 8, ["actions"])]),
			default: $(() => [u.value ? (F(), X("div", hl, [
				V(i, {
					modelValue: d.value,
					"onUpdate:modelValue": t[0] ||= (e) => d.value = e,
					schema: m.value
				}, null, 8, ["modelValue", "schema"]),
				V(et, { text: U(H)("designer.collectionPickerField.relativeBindingHint") }, null, 8, ["text"]),
				V(et, { text: U(H)("designer.repeatDialog.memberCount", { count: h.value ? g.value.elementIds.length : f.value.elementIds.length }) }, null, 8, ["text"]),
				h.value && g.value.groups.length > 0 ? (F(), I(et, {
					key: 0,
					variant: "danger"
				}, {
					default: $(() => [z(q(U(H)("designer.repeatDialog.mergeHint", { groupNames: g.value.groups.map((e) => e.name).join("、") })), 1)]),
					_: 1
				})) : W("", !0),
				h.value && g.value.elementIds.length > f.value.elementIds.length ? (F(), I(et, { key: 1 }, {
					default: $(() => [z(q(U(H)("designer.repeatDialog.expandedHint", {
						selectedCount: f.value.elementIds.length,
						count: g.value.elementIds.length
					})), 1)]),
					_: 1
				})) : W("", !0)
			])) : W("", !0)]),
			_: 1
		}, 8, [
			"visible",
			"title",
			"onClose"
		]), l.value ? (F(), I(Se, {
			key: 0,
			sources: U(r).dataSource.list,
			mode: "collection",
			"initial-path": String(d.value.collection ?? ""),
			title: U(H)("designer.repeatDialog.collectionPickerTitle"),
			onApply: C,
			onClose: t[1] ||= (e) => S(!1)
		}, null, 8, [
			"sources",
			"initial-path",
			"title"
		])) : W("", !0)], 64));
	}
}), _l = { class: "flex min-h-0 flex-1 flex-col" }, vl = { class: "flex gap-2 border-b border-edge p-3" }, yl = { class: "min-w-0 flex-1" }, bl = { class: "w-45 shrink-0" }, xl = { class: "min-h-0 flex-1 overflow-auto" }, Sl = { class: "sticky top-0 z-10 bg-panel-2 text-ink-dim" }, Cl = { class: "px-3 py-2 font-normal" }, wl = { class: "w-35 px-3 py-2 font-normal" }, Tl = { class: "w-18 px-3 py-2 font-normal" }, El = { class: "w-32 px-3 py-2 font-normal" }, Dl = { class: "px-3 py-2" }, Ol = ["title"], kl = ["title"], Al = ["title"], jl = { class: "px-3 py-2" }, Ml = { class: "px-3 py-2" }, Nl = { class: "flex gap-1" }, Pl = { class: "mr-auto text-xs text-ink-dim" }, Fl = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "repeat-manager-dialog",
	props: { session: {} },
	setup(e) {
		let t = u(), n = e, r = E(), i = r.store(), { cancel: a, isActive: o, sessionId: s } = Xs("repeat-manager", () => n.session), c = L(""), l = L(""), d = L(null), f = L(!1), p = K(() => [{
			label: H("designer.repeatManager.allPagesLabel"),
			value: ""
		}, ...i.page.list.map((e) => ({
			label: e.name,
			value: e.id
		}))]), m = K(() => {
			let e = c.value.trim().toLocaleLowerCase();
			return i.repeatGroup.list.filter((t) => (!l.value || t.pageId === l.value) && (!e || `${t.name} ${t.collection}`.toLocaleLowerCase().includes(e)));
		}), h = K(() => i.repeatGroup.find(d.value ?? ""));
		function g(e, ...t) {
			r.commands.dispatch(e, ...t);
		}
		async function _() {
			h.value && await r.commands.execute("data.removeRepeatGroup", h.value.id), d.value = null;
		}
		async function v() {
			await r.commands.execute("data.removePageGroups"), f.value = !1;
		}
		return (e, n) => {
			let r = x, u = lt, y = Ee;
			return F(), X(Y, null, [
				V(U(be), {
					visible: U(o),
					title: U(H)("designer.repeatManager.dialogTitle"),
					width: 760,
					height: 540,
					"body-padding": !1,
					onClose: n[4] ||= (e) => U(a)()
				}, {
					footer: $(() => [
						R("span", Pl, q(U(H)("designer.repeatManager.countLabel", { count: m.value.length })), 1),
						V(y, {
							theme: "danger",
							variant: "outline",
							disabled: U(i).repeatGroup.activePageGroups.length === 0,
							onClick: n[2] ||= (e) => f.value = !0
						}, {
							default: $(() => [z(q(U(H)("designer.builtins.deletePageRepeatGroupsTitle")), 1)]),
							_: 1
						}, 8, ["disabled"]),
						V(y, {
							variant: "outline",
							onClick: n[3] ||= (e) => U(a)()
						}, {
							icon: $(() => [V(N, {
								name: "close",
								class: "h-3.5 w-3.5"
							})]),
							default: $(() => [z(" " + q(U(H)("designer.repeatManager.closeButton")), 1)]),
							_: 1
						})
					]),
					default: $(() => [R("div", _l, [R("div", vl, [R("div", yl, [V(r, {
						modelValue: c.value,
						"onUpdate:modelValue": n[0] ||= (e) => c.value = e,
						clearable: "",
						"aria-label": U(H)("designer.repeatManager.searchPlaceholder"),
						placeholder: U(H)("designer.repeatManager.searchPlaceholder")
					}, null, 8, [
						"modelValue",
						"aria-label",
						"placeholder"
					])]), R("div", bl, [V(u, {
						modelValue: l.value,
						"onUpdate:modelValue": n[1] ||= (e) => l.value = e,
						"aria-label": U(H)("designer.repeatManager.pageLabel"),
						options: p.value
					}, null, 8, [
						"modelValue",
						"aria-label",
						"options"
					])])]), R("div", xl, [R("table", {
						"data-component": "block-manager",
						class: P(["w-full table-fixed text-left text-xs", U(t)("block-manager")])
					}, [R("thead", Sl, [R("tr", null, [
						R("th", Cl, q(U(H)("designer.repeatManager.nameLabel")), 1),
						R("th", wl, q(U(H)("designer.repeatManager.pageLabel")), 1),
						R("th", Tl, q(U(H)("designer.repeatManager.membersLabel")), 1),
						R("th", El, q(U(H)("designer.repeatManager.actionsLabel")), 1)
					])]), R("tbody", null, [(F(!0), X(Y, null, Z(m.value, (e) => (F(), X("tr", {
						key: e.id,
						class: "border-b border-edge hover:bg-panel-2"
					}, [
						R("td", Dl, [R("div", {
							class: "truncate text-ink",
							title: e.name
						}, q(e.name), 9, Ol), R("div", {
							class: "truncate text-ink-dim",
							title: e.collection
						}, q(e.collection || U(H)("designer.repeatManager.unboundLabel")), 9, kl)]),
						R("td", {
							class: "truncate px-3 py-2",
							title: U(i).page.get(e.pageId)?.name
						}, q(U(i).page.get(e.pageId)?.name), 9, Al),
						R("td", jl, q(e.elementIds.length), 1),
						R("td", Ml, [R("div", Nl, [
							V(y, {
								shape: "square",
								variant: "text",
								title: U(H)("designer.repeatManager.locateLabel"),
								"aria-label": U(H)("designer.repeatManager.locateLabel"),
								onClick: (t) => g("data.locateRepeatGroup", e.id)
							}, {
								icon: $(() => [V(N, {
									name: "locate",
									class: "h-4 w-4"
								})]),
								_: 1
							}, 8, [
								"title",
								"aria-label",
								"onClick"
							]),
							V(y, {
								shape: "square",
								variant: "text",
								title: U(H)("designer.repeatManager.editLabel"),
								"aria-label": U(H)("designer.repeatManager.editLabel"),
								onClick: (t) => g("data.editRepeatGroup", e.id, U(s))
							}, {
								icon: $(() => [V(N, {
									name: "sliders",
									class: "h-4 w-4"
								})]),
								_: 1
							}, 8, [
								"title",
								"aria-label",
								"onClick"
							]),
							V(y, {
								shape: "square",
								theme: "danger",
								variant: "text",
								title: U(H)("designer.repeatManager.ungroupLabel"),
								"aria-label": U(H)("designer.repeatManager.ungroupLabel"),
								onClick: (t) => d.value = e.id
							}, {
								icon: $(() => [V(N, {
									name: "close",
									class: "h-4 w-4"
								})]),
								_: 1
							}, 8, [
								"title",
								"aria-label",
								"onClick"
							])
						])])
					]))), 128))])], 2), m.value.length === 0 ? (F(), I(Zo, {
						key: 0,
						icon: "loop",
						message: U(H)(U(i).repeatGroup.list.length ? "designer.repeatManager.noResultsMessage" : "designer.repeatManager.emptyMessage")
					}, null, 8, ["message"])) : W("", !0)])])]),
					_: 1
				}, 8, ["visible", "title"]),
				h.value ? (F(), I(U(be), {
					key: 0,
					visible: !0,
					title: U(H)("designer.repeatManager.ungroupTitle"),
					width: 380,
					"confirm-btn": {
						content: U(H)("designer.repeatManager.ungroupLabel"),
						theme: "danger"
					},
					onConfirm: _,
					onCancel: n[5] ||= (e) => d.value = null,
					onClose: n[6] ||= (e) => d.value = null
				}, {
					default: $(() => [z(q(U(H)("designer.repeatManager.ungroupMessage", { groupName: h.value.name })), 1)]),
					_: 1
				}, 8, ["title", "confirm-btn"])) : W("", !0),
				V(U(be), {
					visible: f.value,
					title: U(H)("designer.builtins.deletePageRepeatGroupsTitle"),
					width: 420,
					"confirm-btn": {
						content: U(H)("designer.builtins.deletePageRepeatGroupsTitle"),
						theme: "danger"
					},
					onConfirm: v,
					onCancel: n[7] ||= (e) => f.value = !1,
					onClose: n[8] ||= (e) => f.value = !1
				}, {
					default: $(() => [z(q(U(H)("designer.repeatManager.removePageMessage", {
						pageName: U(i).page.get(U(i).page.activeId)?.name,
						count: U(i).repeatGroup.activePageGroups.length
					})), 1)]),
					_: 1
				}, 8, [
					"visible",
					"title",
					"confirm-btn"
				])
			], 64);
		};
	}
}), [["__scopeId", "data-v-9d38e819"]]), Il = ["aria-label"], Ll = [
	"data-active",
	"aria-pressed",
	"onClick"
], Rl = ["data-active", "aria-pressed"], zl = [
	"data-active",
	"aria-pressed",
	"onClick"
], Bl = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "template-library-filters",
	props: {
		categoryFilter: {},
		categoryOptions: {},
		providerFilter: {},
		providerOptions: {},
		totalCount: {}
	},
	emits: ["update:categoryFilter", "update:providerFilter"],
	setup(e, { emit: t }) {
		let n = t, r = u();
		return (t, i) => (F(), X("aside", {
			"data-component": "template-library__filters",
			class: P(["overflow-auto border-r border-edge bg-panel-2 [flex:0_0_190px] [padding:20px_12px]", U(r)("template-library__filters")]),
			"aria-label": U(H)("designer.templateLibrary.filtersTitle")
		}, [
			R("h3", null, q(U(H)("designer.templateLibrary.filtersTitle")), 1),
			R("div", {
				"data-component": "template-library__filter-group",
				class: P(["mb-6", U(r)("template-library__filter-group")])
			}, [R("h4", null, q(U(H)("designer.templateLibrary.sourcesTitle")), 1), (F(!0), X(Y, null, Z(e.providerOptions, (t) => (F(), X("button", {
				key: t.value,
				"data-component": "template-library__filter",
				"data-active": e.providerFilter === t.value,
				type: "button",
				class: P(["flex items-center justify-between gap-2 w-full border-0 rounded-md bg-transparent text-ink-dim text-left cursor-pointer p-2", [U(r)("template-library__filter"), { [U(r)("template-library__filter--active")]: e.providerFilter === t.value }]]),
				"aria-pressed": e.providerFilter === t.value,
				onClick: (e) => n("update:providerFilter", t.value)
			}, [R("span", null, q(t.label), 1), R("span", null, q(t.count), 1)], 10, Ll))), 128))], 2),
			e.categoryOptions.length ? (F(), X("div", {
				key: 0,
				"data-component": "template-library__filter-group",
				class: P(["mb-6", U(r)("template-library__filter-group")])
			}, [
				R("h4", null, q(U(H)("designer.templateLibrary.categoriesTitle")), 1),
				R("button", {
					"data-component": "template-library__filter",
					"data-active": e.categoryFilter === null,
					type: "button",
					class: P(["flex items-center justify-between gap-2 w-full border-0 rounded-md bg-transparent text-ink-dim text-left cursor-pointer p-2", [U(r)("template-library__filter"), { [U(r)("template-library__filter--active")]: e.categoryFilter === null }]]),
					"aria-pressed": e.categoryFilter === null,
					onClick: i[0] ||= (e) => n("update:categoryFilter", null)
				}, [R("span", null, q(U(H)("designer.templateLibrary.filterAll")), 1), R("span", null, q(e.totalCount), 1)], 10, Rl),
				(F(!0), X(Y, null, Z(e.categoryOptions, (t) => (F(), X("button", {
					key: t.label,
					"data-component": "template-library__filter",
					"data-active": e.categoryFilter === t.label,
					type: "button",
					class: P(["flex items-center justify-between gap-2 w-full border-0 rounded-md bg-transparent text-ink-dim text-left cursor-pointer p-2", [U(r)("template-library__filter"), { [U(r)("template-library__filter--active")]: e.categoryFilter === t.label }]]),
					"aria-pressed": e.categoryFilter === t.label,
					onClick: (e) => n("update:categoryFilter", t.label)
				}, [R("span", null, q(t.label), 1), R("span", null, q(t.count), 1)], 10, zl))), 128))
			], 2)) : W("", !0)
		], 10, Il));
	}
}), [["__scopeId", "data-v-d5174913"]]), Vl = { key: 0 }, Hl = { key: 1 }, Ul = { key: 2 }, Wl = ["data-view"], Gl = [
	"data-active",
	"aria-pressed",
	"onClick"
], Kl = { key: 0 }, ql = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "template-library-results",
	props: {
		failures: {},
		filtering: { type: Boolean },
		loading: { type: Boolean },
		query: {},
		sections: {},
		selectedEntry: {},
		viewMode: {}
	},
	emits: [
		"clear",
		"refresh",
		"select"
	],
	setup(e, { emit: t }) {
		let n = t, r = u();
		return (t, i) => {
			let a = Ee;
			return F(), X("div", { class: P(["flex-1 min-h-0 overflow-auto", U(r)("template-library__items")]) }, [e.loading ? (F(), X("div", {
				key: 0,
				"data-component": "template-library__loading",
				class: P(["flex flex-1 flex-col items-center justify-center gap-2 text-center", U(r)("template-library__loading")]),
				role: "status"
			}, [V(N, {
				"data-component": "template-library__spinner",
				name: "loop",
				class: P(U(r)("template-library__spinner"))
			}, null, 8, ["class"]), z(" " + q(U(H)("designer.templateLibrary.loading")), 1)], 2)) : (F(), X(Y, { key: 1 }, [
				e.sections.length === 0 ? (F(), X("div", {
					key: 0,
					"data-component": "template-library__empty",
					class: P(["flex flex-1 flex-col items-center justify-center gap-2 text-center", U(r)("template-library__empty")])
				}, [
					V(N, {
						name: "template",
						class: P(["w-9 h-9 opacity-50", U(r)("template-library__empty-icon")])
					}, null, 8, ["class"]),
					e.filtering && e.query.trim() ? (F(), X("p", Vl, q(U(H)("designer.templateLibrary.emptyFiltered", { query: e.query.trim() })), 1)) : e.filtering ? (F(), X("p", Hl, q(U(H)("designer.templateLibrary.emptyFilters")), 1)) : (F(), X("p", Ul, q(U(H)("designer.templateLibrary.empty")), 1)),
					e.filtering ? (F(), I(a, {
						key: 3,
						variant: "text",
						theme: "primary",
						size: "small",
						onClick: i[0] ||= (e) => n("clear")
					}, {
						default: $(() => [z(q(U(H)("designer.templateLibrary.clearFilter")), 1)]),
						_: 1
					})) : W("", !0)
				], 2)) : W("", !0),
				(F(!0), X(Y, null, Z(e.sections, (t) => (F(), X("div", {
					key: t.providerId,
					class: P(["mb-6", U(r)("template-library__section")])
				}, [R("h4", {
					"data-component": "template-library__section-title",
					class: P(["flex gap-2 items-center [margin:4px_0_10px] [font-size:13px]", U(r)("template-library__section-title")])
				}, [z(q(t.title) + " ", 1), R("span", null, q(t.entries.length), 1)], 2), R("div", {
					"data-component": "template-library__cards",
					"data-view": e.viewMode,
					class: P(["grid gap-2 [grid-template-columns:repeat(auto-fill,_minmax(170px,_1fr))]", [U(r)("template-library__cards"), { [U(r)("template-library__cards--list")]: e.viewMode === "list" }]])
				}, [(F(!0), X(Y, null, Z(t.entries, (i) => (F(), X("button", {
					key: `${t.providerId}:${i.id}`,
					"data-component": "template-library__card",
					"data-active": e.selectedEntry === i,
					type: "button",
					class: P(["relative flex flex-col min-w-0 overflow-hidden border border-edge rounded-lg bg-panel text-ink text-left cursor-pointer p-0 hover:[border-color:var(--td-brand-color)] hover:[transform:translateY(-2px)] hover:[box-shadow:0_5px_16px_var(--color-shadow-soft)]", [U(r)("template-library__card"), { [U(r)("template-library__card--active")]: e.selectedEntry === i }]]),
					"aria-pressed": e.selectedEntry === i,
					onClick: (e) => n("select", i)
				}, [
					R("span", {
						"data-component": "template-library__card-art",
						class: P(["grid w-full [place-items:center] h-26.5 [color:var(--td-brand-color)]", U(r)("template-library__card-art")])
					}, [V(N, { name: "template" })], 2),
					R("span", {
						"data-component": "template-library__card-body",
						class: P(["flex flex-1 flex-col min-w-0 gap-1.75 p-3", U(r)("template-library__card-body")])
					}, [
						R("span", { class: P(["font-semibold wrap-anywhere", U(r)("template-library__card-name")]) }, q(i.name), 3),
						i.description ? (F(), X("span", {
							key: 0,
							"data-component": "template-library__card-description",
							class: P(["overflow-hidden text-ink-dim text-compact [display:-webkit-box]", U(r)("template-library__card-description")])
						}, q(i.description), 3)) : W("", !0),
						R("span", {
							"data-component": "template-library__card-meta",
							class: P(["flex flex-wrap gap-2 text-ink-dim text-caption [margin-top:auto]", U(r)("template-library__card-meta")])
						}, [i.category ? (F(), X("span", Kl, q(i.category), 1)) : W("", !0), R("span", null, q(t.title), 1)], 2)
					], 2),
					e.selectedEntry === i ? (F(), X("span", {
						key: 0,
						class: P(["absolute top-2 right-2 text-caption rounded text-on-accent [padding:3px_6px] bg-accent-solid", U(r)("template-library__selected")])
					}, q(U(H)("designer.templateLibrary.selected")), 3)) : W("", !0)
				], 10, Gl))), 128))], 10, Wl)], 2))), 128)),
				(F(!0), X(Y, null, Z(e.failures, (e) => (F(), X("div", {
					key: e.providerId,
					class: P(["flex items-center justify-between gap-2 text-danger rounded-md [margin:8px_0] [padding:8px_12px] [border:1px_solid_var(--color-danger)]", U(r)("template-library__failure")]),
					role: "alert"
				}, [R("span", null, q(U(H)("designer.templateLibrary.providerFailed", { title: e.title })), 1), V(a, {
					variant: "text",
					theme: "primary",
					size: "small",
					onClick: i[1] ||= (e) => n("refresh")
				}, {
					default: $(() => [z(q(U(H)("designer.templateLibrary.retryLabel")), 1)]),
					_: 1
				})], 2))), 128))
			], 64))], 2);
		};
	}
}), [["__scopeId", "data-v-03db3234"]]);
function Jl(e) {
	let t = L({
		failures: [],
		sections: []
	}), n = L(!1), r = 0;
	async function i() {
		r += 1;
		let i = r;
		n.value = !0;
		try {
			let n = await e.templateLibrary.collect();
			if (i !== r) return;
			t.value = n;
			for (let t of n.failures) e.errors.capture(t.error, { source: "templateLibrary" });
		} catch (t) {
			i === r && e.errors.capture(t, { source: "templateLibrary" });
		} finally {
			i === r && (n.value = !1);
		}
	}
	function a() {
		r += 1;
	}
	return Sn(a), {
		catalog: t,
		invalidate: a,
		load: i,
		loading: n
	};
}
function Yl(e) {
	let t = L(null), n = L(), r = L(), i = /* @__PURE__ */ new WeakMap(), a = Pt({
		capture(t) {
			return e.errors.capture(t, { source: "templateLibrary.preview" });
		},
		frame: t,
		render: c
	}), o = jt(t);
	async function s(e) {
		let t = i.get(e);
		if (t) return t;
		let n = await e.load();
		return i.set(e, n), n;
	}
	async function c(t, i) {
		let a = n.value;
		if (!a) return {
			html: "",
			warnings: []
		};
		let o = await s(a);
		return i?.signal?.aborted || n.value !== a ? {
			html: "",
			warnings: []
		} : (r.value = o, e.store().rendering.html(o, un(o), void 0, i));
	}
	function l() {
		a.invalidate(), o.reset(), a.renderPreview({});
	}
	function u(e) {
		n.value !== e && (n.value = e, r.value = void 0, l());
	}
	function d() {
		n.value && l();
	}
	function f() {
		n.value = void 0, r.value = void 0, a.invalidate(), o.reset();
	}
	return J(a.loading, async (t) => {
		if (t) o.ready.value = !1;
		else if (!a.renderError.value && n.value) try {
			await Lr(), !a.loading.value && n.value && o.onFrameLoad();
		} catch (t) {
			await e.errors.capture(t, { source: "templateLibrary.preview" });
		}
	}), {
		currentPage: o.currentPage,
		fitMode: o.fitMode,
		frameRef: t,
		loadedDocument: r,
		loading: a.loading,
		pageCount: K(() => o.pages.value.length),
		ready: o.ready,
		renderError: a.renderError,
		reset: f,
		retry: d,
		select: u,
		selectedEntry: n,
		selectPage: o.selectPage,
		setFitMode: o.setFitMode,
		setZoom: o.setZoom,
		zoom: o.zoom
	};
}
var Xl = ["data-mobile-preview"], Zl = ["aria-label"], Ql = ["value"], $l = ["aria-label"], eu = { value: null }, tu = ["value"], nu = { role: "status" }, ru = ["aria-label"], iu = ["data-active", "aria-pressed"], au = ["data-active", "aria-pressed"], ou = ["aria-label"], su = { key: 0 }, cu = { key: 1 }, lu = { key: 2 }, uu = { key: 3 }, du = ["title"], fu = ["disabled"], pu = ["disabled"], mu = ["aria-label"], hu = ["aria-label"], gu = ["aria-pressed"], _u = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "template-library-dialog",
	setup(e) {
		let t = u(), n = E(), r = n.store(), { catalog: i, invalidate: a, load: o, loading: s } = Jl(n), { currentPage: c, fitMode: l, frameRef: d, loadedDocument: f, loading: p, pageCount: m, renderError: h, reset: g, retry: _, select: v, selectedEntry: y, selectPage: b, setFitMode: S, setZoom: C, zoom: w } = Yl(n), T = L(""), D = L("all"), O = L(null), ee = L("grid"), k = L(!1), A = L(!1), te = L(!1), j = n.templateLibrary.list(), ne = L(j.find((e) => e.create)?.id), re = n.events.on("plugin:registered", Ce), ie = n.events.on("plugin:disposed", Ce), ae = n.events.on("plugin:state-changed", ({ status: e }) => {
			(e === "enabled" || e === "disabled" || e === "failed") && Ce();
		}), oe = K(() => [{
			count: ce.value,
			label: H("designer.templateLibrary.filterAll"),
			value: "all"
		}, ...i.value.sections.map((e) => ({
			count: e.entries.length,
			label: e.title,
			value: e.providerId
		}))]), se = K(() => {
			let e = T.value.trim().toLowerCase();
			return i.value.sections.filter((e) => D.value === "all" || e.providerId === D.value).map((t) => ({
				entries: t.entries.filter((t) => (!e || t.name.toLowerCase().includes(e) || (t.description ?? "").toLowerCase().includes(e) || (t.category ?? "").toLowerCase().includes(e)) && (O.value === null || t.category === O.value)),
				providerId: t.providerId,
				title: t.title
			})).filter((e) => e.entries.length > 0);
		}), ce = K(() => i.value.sections.reduce((e, t) => e + t.entries.length, 0)), le = K(() => {
			let e = /* @__PURE__ */ new Map();
			for (let t of i.value.sections) for (let n of t.entries) n.category && e.set(n.category, (e.get(n.category) ?? 0) + 1);
			return [...e].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => ({
				count: t,
				label: e
			}));
		}), ue = K(() => se.value.reduce((e, t) => e + t.entries.length, 0)), de = K(() => T.value.trim() !== "" || D.value !== "all" || O.value !== null), fe = K(() => {
			let e = y.value;
			if (e && !te.value) return i.value.sections.find((t) => t.entries.includes(e))?.title;
		}), me = K(() => {
			let e = f.value;
			if (!e || e.pages.length === 0) return;
			let t = e.pages[0];
			return {
				pageCount: e.pages.length,
				pageSize: {
					height: t.height,
					width: t.width
				}
			};
		}), he = K(() => [{
			id: "cancel",
			slots: { icon: () => [In(N, {
				class: "h-3.5 w-3.5",
				name: "close"
			})] },
			text: H("components.baseDialog.cancelButton"),
			theme: "default",
			variant: "outline"
		}, {
			disabled: !y.value,
			id: "apply",
			loading: te.value,
			slots: { icon: () => [In(N, {
				class: "h-3.5 w-3.5",
				name: "check"
			})] },
			text: H("designer.templateLibrary.applyButton"),
			theme: "primary",
			variant: "base"
		}]);
		function ge(e) {
			A.value = !1, v(e), k.value = !0;
		}
		function _e() {
			y.value && !te.value && (A.value = !0);
		}
		async function ve() {
			let e = y.value;
			if (e && !te.value) {
				A.value = !1, te.value = !0;
				try {
					await n.commands.dispatch("templateLibrary.apply", e);
				} finally {
					te.value = !1;
				}
				r.ui.activeDialog.name !== "template-library" && r.ui.toast(H("designer.templateLibrary.appliedMessage", { name: e.name }), "success");
			}
		}
		function ye(e) {
			e.id === "cancel" ? r.ui.closeDialog() : e.id === "apply" && _e();
		}
		function xe() {
			let e = n.templateLibrary.list();
			return e.length === j.length && e.every((e, t) => e === j[t]) ? !1 : (j = e, ne.value = e.find((e) => e.create)?.id, !0);
		}
		function Se() {
			xe(), g(), A.value = !1, o();
		}
		function Ce() {
			xe() && r.ui.activeDialog.name === "template-library" && Se();
		}
		async function we(e) {
			if (e === "templateLibrary.delete" && !window.confirm(H("designer.templateLibrary.confirmDelete"))) return;
			let t = e === "templateLibrary.create" || e === "templateLibrary.upload" ? ne.value : y.value;
			await n.commands.dispatch(e, t), Se();
		}
		function Te() {
			T.value = "", D.value = "all", O.value = null;
		}
		return J(se, (e) => {
			let t = y.value;
			t && !e.some((e) => e.entries.includes(t)) && (g(), A.value = !1, k.value = !1);
		}), J([() => r.ui.activeDialog.name, Qt.global.locale], ([e], t, n) => {
			n(a), e === "template-library" && (xe(), A.value = !1, g(), k.value = !1, o());
		}, { immediate: !0 }), J(le, (e) => {
			O.value !== null && !e.some((e) => e.label === O.value) && (O.value = null);
		}), J(oe, (e) => {
			e.some((e) => e.value === D.value) || (D.value = "all");
		}), J(() => r.ui.activeDialog.name, (e, t) => {
			t === "template-library" && e !== "template-library" && (A.value = !1, g());
		}), Sn(() => {
			re(), ie(), ae();
		}), (e, n) => {
			let a = Ee, o = x;
			return F(), X(Y, null, [V(U(be), {
				visible: U(r).ui.activeDialog.name === "template-library",
				title: U(H)("designer.templateLibrary.dialogTitle"),
				width: "94vw",
				height: "92%",
				"body-padding": !1,
				onClose: n[17] ||= (e) => U(r).ui.closeDialog()
			}, {
				"header-actions": $(() => [
					ne.value ? (F(), I(a, {
						key: 0,
						size: "small",
						variant: "outline",
						onClick: n[0] ||= (e) => we("templateLibrary.create")
					}, {
						default: $(() => [z(q(U(H)("designer.templateLibrary.createTemplate")), 1)]),
						_: 1
					})) : W("", !0),
					ne.value ? (F(), I(a, {
						key: 1,
						size: "small",
						variant: "outline",
						onClick: n[1] ||= (e) => we("templateLibrary.upload")
					}, {
						default: $(() => [z(q(U(H)("designer.templateLibrary.uploadTemplate")), 1)]),
						_: 1
					})) : W("", !0),
					U(y)?.update ? (F(), I(a, {
						key: 2,
						size: "small",
						variant: "outline",
						onClick: n[2] ||= (e) => we("templateLibrary.update")
					}, {
						default: $(() => [z(q(U(H)("designer.templateLibrary.updateTemplate")), 1)]),
						_: 1
					})) : W("", !0),
					U(y)?.remove ? (F(), I(a, {
						key: 3,
						size: "small",
						variant: "outline",
						theme: "danger",
						onClick: n[3] ||= (e) => we("templateLibrary.delete")
					}, {
						default: $(() => [z(q(U(H)("designer.templateLibrary.deleteTemplate")), 1)]),
						_: 1
					})) : W("", !0),
					V(a, {
						variant: "outline",
						theme: "default",
						shape: "square",
						size: "small",
						title: U(H)("designer.templateLibrary.refreshTitle"),
						"aria-label": U(H)("designer.templateLibrary.refreshTitle"),
						disabled: U(s),
						onClick: Se
					}, {
						icon: $(() => [V(N, {
							"data-component": "template-library__spin",
							"data-spinning": U(s),
							name: "loop",
							class: P(["h-3.5 w-3.5", { [U(t)("template-library__spin")]: U(s) }])
						}, null, 8, ["data-spinning", "class"])]),
						_: 1
					}, 8, [
						"title",
						"aria-label",
						"disabled"
					])
				]),
				footer: $(() => [V(U(pe), {
					actions: he.value,
					onClick: ye
				}, null, 8, ["actions"])]),
				default: $(() => [R("div", {
					"data-component": "template-library",
					"data-mobile-preview": k.value,
					class: P(["flex flex-1 min-h-0 overflow-hidden", [U(t)("template-library"), { [U(t)("template-library--mobile-preview")]: k.value }]])
				}, [
					V(Bl, {
						"category-filter": O.value,
						"onUpdate:categoryFilter": n[4] ||= (e) => O.value = e,
						"provider-filter": D.value,
						"onUpdate:providerFilter": n[5] ||= (e) => D.value = e,
						"category-options": le.value,
						"provider-options": oe.value,
						"total-count": ce.value
					}, null, 8, [
						"category-filter",
						"provider-filter",
						"category-options",
						"provider-options",
						"total-count"
					]),
					R("section", {
						"data-component": "template-library__browse",
						class: P(["flex flex-col min-w-0 min-h-0 p-5 [flex:1_1_480px]", U(t)("template-library__browse")])
					}, [
						R("div", { class: P(["flex-none", U(t)("template-library__toolbar")]) }, [
							V(o, {
								modelValue: T.value,
								"onUpdate:modelValue": n[6] ||= (e) => T.value = e,
								clearable: "",
								placeholder: U(H)("designer.templateLibrary.searchPlaceholder"),
								"aria-label": U(H)("designer.templateLibrary.searchPlaceholder")
							}, {
								"prefix-icon": $(() => [V(U(Ae), {
									"data-component": "template-library__search-icon",
									class: P(U(t)("template-library__search-icon"))
								}, null, 8, ["class"])]),
								_: 1
							}, 8, [
								"modelValue",
								"placeholder",
								"aria-label"
							]),
							R("div", {
								"data-component": "template-library__compact-filters",
								class: P(["hidden gap-2 mt-2.5", U(t)("template-library__compact-filters")])
							}, [ur(R("select", {
								"onUpdate:modelValue": n[7] ||= (e) => D.value = e,
								"aria-label": U(H)("designer.templateLibrary.sourcesTitle")
							}, [(F(!0), X(Y, null, Z(oe.value, (e) => (F(), X("option", {
								key: e.value,
								value: e.value
							}, q(e.label) + " (" + q(e.count) + ") ", 9, Ql))), 128))], 8, Zl), [[Hn, D.value]]), ur(R("select", {
								"onUpdate:modelValue": n[8] ||= (e) => O.value = e,
								"aria-label": U(H)("designer.templateLibrary.categoriesTitle")
							}, [R("option", eu, q(U(H)("designer.templateLibrary.allCategories")), 1), (F(!0), X(Y, null, Z(le.value, (e) => (F(), X("option", {
								key: e.label,
								value: e.label
							}, q(e.label) + " (" + q(e.count) + ") ", 9, tu))), 128))], 8, $l), [[Hn, O.value]])], 2),
							R("div", { class: P(["flex items-center gap-3 min-h-12.5 text-ink-dim text-xs", U(t)("template-library__result-bar")]) }, [
								R("span", nu, q(U(H)("designer.templateLibrary.resultsCount", { count: ue.value })), 1),
								de.value ? (F(), X("button", {
									key: 0,
									type: "button",
									class: P(["p-0 border-0 bg-transparent cursor-pointer [color:var(--td-brand-color)]", U(t)("template-library__text-button")]),
									onClick: Te
								}, q(U(H)("designer.templateLibrary.clearFilter")), 3)) : W("", !0),
								R("div", {
									"data-component": "template-library__view-switch",
									class: P(["flex border border-edge [margin-left:auto] p-0.75 [border-radius:7px]", U(t)("template-library__view-switch")]),
									"aria-label": U(H)("designer.templateLibrary.viewLabel")
								}, [R("button", {
									"data-component": "template-library__view",
									"data-active": ee.value === "grid",
									type: "button",
									"aria-pressed": ee.value === "grid",
									class: P([U(t)("template-library__view"), { [U(t)("template-library__view--active")]: ee.value === "grid" }]),
									onClick: n[9] ||= (e) => ee.value = "grid"
								}, q(U(H)("designer.templateLibrary.gridView")), 11, iu), R("button", {
									"data-component": "template-library__view",
									"data-active": ee.value === "list",
									type: "button",
									"aria-pressed": ee.value === "list",
									class: P([U(t)("template-library__view"), { [U(t)("template-library__view--active")]: ee.value === "list" }]),
									onClick: n[10] ||= (e) => ee.value = "list"
								}, q(U(H)("designer.templateLibrary.listView")), 11, au)], 10, ru)
							], 2)
						], 2),
						V(ql, {
							failures: U(i).failures,
							filtering: de.value,
							loading: U(s),
							query: T.value,
							sections: se.value,
							"selected-entry": U(y),
							"view-mode": ee.value,
							onClear: Te,
							onRefresh: Se,
							onSelect: ge
						}, null, 8, [
							"failures",
							"filtering",
							"loading",
							"query",
							"sections",
							"selected-entry",
							"view-mode"
						]),
						!U(s) && ce.value > 0 ? (F(), X("p", {
							key: 0,
							"data-component": "template-library__summary",
							class: P(U(t)("template-library__summary"))
						}, q(U(H)("designer.templateLibrary.summary", {
							count: ce.value,
							sources: U(i).sections.length
						})), 3)) : W("", !0)
					], 2),
					R("section", {
						"data-component": "template-library__preview",
						class: P(["flex flex-col gap-2 min-h-0 border-l border-edge bg-panel-2 [flex:0_1_42%] min-w-75 p-5", U(t)("template-library__preview")]),
						"aria-label": U(H)("designer.templateLibrary.previewTitle")
					}, [R("button", {
						"data-component": "template-library__back",
						type: "button",
						class: P(["border-0 bg-transparent cursor-pointer hidden [align-self:flex-start] [padding:5px_0] [color:var(--td-brand-color)]", U(t)("template-library__back")]),
						onClick: n[11] ||= (e) => k.value = !1
					}, q(U(H)("designer.templateLibrary.backToResults")), 3), U(y) ? (F(), X(Y, { key: 0 }, [
						R("header", { class: P(["flex-none overflow-auto [max-height:35%]", U(t)("template-library__preview-header")]) }, [
							R("span", { class: P(["text-ink-dim text-compact", U(t)("template-library__eyebrow")]) }, q(U(H)("designer.templateLibrary.previewTitle")), 3),
							R("h4", { class: P(["wrap-anywhere [margin:6px_0] [font-size:17px]", U(t)("template-library__preview-name")]) }, q(U(y).name), 3),
							U(y).description ? (F(), X("p", {
								key: 0,
								class: P(["text-ink-dim text-xs [margin:0_0_10px]", U(t)("template-library__preview-description")])
							}, q(U(y).description), 3)) : W("", !0),
							R("div", {
								"data-component": "template-library__preview-meta",
								class: P(["flex flex-wrap gap-2 text-ink-dim text-compact", U(t)("template-library__preview-meta")])
							}, [
								fe.value ? (F(), X("span", su, q(fe.value), 1)) : W("", !0),
								U(y).category ? (F(), X("span", cu, q(U(y).category), 1)) : W("", !0),
								me.value ? (F(), X("span", lu, q(U(H)("designer.templateLibrary.pageCount", { count: me.value.pageCount })), 1)) : W("", !0),
								me.value ? (F(), X("span", uu, q(U(H)("designer.templateLibrary.pageSize", {
									height: me.value.pageSize.height,
									width: me.value.pageSize.width
								})), 1)) : W("", !0)
							], 2)
						], 2),
						R("div", { class: P(["relative flex flex-1 min-h-0 overflow-hidden border border-edge bg-panel rounded-lg", U(t)("template-library__viewport")]) }, [ur(R("iframe", {
							ref_key: "frameRef",
							ref: d,
							title: U(y).name,
							class: P(["w-full h-full border-0 [background:var(--color-canvas)]", U(t)("template-library__frame")]),
							tabindex: "-1",
							sandbox: "allow-same-origin allow-modals"
						}, null, 10, du), [[Or, !U(p) && !U(h)]]), U(p) ? (F(), X("div", {
							key: 0,
							"data-component": "template-library__state",
							class: P(["flex flex-1 flex-col items-center justify-center gap-2 text-center", U(t)("template-library__state")]),
							role: "status"
						}, [V(N, {
							"data-component": "template-library__spinner",
							name: "loop",
							class: P(U(t)("template-library__spinner"))
						}, null, 8, ["class"]), R("span", null, q(U(H)("designer.templateLibrary.previewLoading")), 1)], 2)) : U(h) ? (F(), X("div", {
							key: 1,
							"data-component": "template-library__state",
							class: P(["text-danger flex flex-1 flex-col items-center justify-center gap-2 text-center", [U(t)("template-library__state"), U(t)("template-library__state--error")]]),
							role: "alert"
						}, [R("span", null, q(U(H)("designer.templateLibrary.previewFailed")), 1), V(a, {
							variant: "outline",
							size: "small",
							onClick: U(_)
						}, {
							default: $(() => [z(q(U(H)("designer.templateLibrary.previewRetry")), 1)]),
							_: 1
						}, 8, ["onClick"])], 2)) : W("", !0)], 2),
						!U(p) && !U(h) && U(m) ? (F(), X("div", {
							key: 0,
							"data-component": "template-library__preview-controls",
							class: P(["flex flex-wrap items-center gap-2 text-ink-dim text-compact", U(t)("template-library__preview-controls")])
						}, [
							R("button", {
								type: "button",
								disabled: U(c) <= 1,
								onClick: n[12] ||= (e) => U(b)(U(c) - 1)
							}, q(U(H)("designer.templateLibrary.previousPage")), 9, fu),
							R("span", null, q(U(c)) + " / " + q(U(m)), 1),
							R("button", {
								type: "button",
								disabled: U(c) >= U(m),
								onClick: n[13] ||= (e) => U(b)(U(c) + 1)
							}, q(U(H)("designer.templateLibrary.nextPage")), 9, pu),
							R("span", { class: P(["flex-1", U(t)("template-library__control-spacer")]) }, null, 2),
							R("button", {
								type: "button",
								"aria-label": U(H)("designer.templateLibrary.zoomOut"),
								onClick: n[14] ||= (e) => U(C)(U(w) / 1.2)
							}, " − ", 8, mu),
							R("span", null, q(Math.round(U(w) * 100)) + "%", 1),
							R("button", {
								type: "button",
								"aria-label": U(H)("designer.templateLibrary.zoomIn"),
								onClick: n[15] ||= (e) => U(C)(U(w) * 1.2)
							}, " + ", 8, hu),
							R("button", {
								type: "button",
								"aria-pressed": U(l) === "page",
								onClick: n[16] ||= (e) => U(S)("page")
							}, q(U(H)("designer.templateLibrary.fitPage")), 9, gu)
						], 2)) : W("", !0)
					], 64)) : (F(), X("div", {
						key: 1,
						"data-component": "template-library__state",
						class: P(["flex flex-1 flex-col items-center justify-center gap-2 text-center", U(t)("template-library__state")])
					}, [V(N, {
						name: "template",
						class: P(["w-9 h-9 opacity-50", U(t)("template-library__empty-icon")])
					}, null, 8, ["class"]), R("p", null, q(U(H)("designer.templateLibrary.previewEmptyHint")), 1)], 2))], 10, ou)
				], 10, Xl)]),
				_: 1
			}, 8, ["visible", "title"]), A.value ? (F(), I(U(be), {
				key: 0,
				visible: !0,
				title: U(H)("designer.templateLibrary.applyConfirmButton"),
				width: 400,
				"confirm-btn": {
					content: U(H)("designer.templateLibrary.applyConfirmButton"),
					theme: "danger"
				},
				onConfirm: ve,
				onCancel: n[18] ||= (e) => A.value = !1,
				onClose: n[19] ||= (e) => A.value = !1
			}, {
				default: $(() => [z(q(U(H)("designer.templateLibrary.dirtyWarning")), 1)]),
				_: 1
			}, 8, ["title", "confirm-btn"])) : W("", !0)], 64);
		};
	}
}), [["__scopeId", "data-v-6936abeb"]]);
function vu(e, t, n, r) {
	let i = n.id ? e.guides.get(n.id) : void 0;
	if (!i) return null;
	let a = {
		editor: e,
		params: n.params ?? {},
		root: t,
		signal: r
	};
	return i.getElement ? i.getElement(a) : i.selector ? t.querySelector(i.selector) : null;
}
function yu(e, t, n) {
	if (n.id) {
		let r = vu(e, t, n, new AbortController().signal), i = n.input && r ? Ke(r)?.element : r;
		return i && bu(i) ? i : void 0;
	}
	let r = t.ownerDocument, i = e.store(), a = n.selector;
	if (!a) return;
	let o = t;
	if (a.startsWith("$dialog")) {
		let e = [...r.querySelectorAll("[data-dialog-host][data-dialog-active=\"true\"] [data-dialog-panel]")].filter(bu).at(-1);
		if (!e) return;
		if (a = a.slice(7).trim(), !a) return e;
		o = e;
	} else a === "$page" ? a = `[data-page-surface="${i.scope.active.id}"]` : a === "$pageRow" ? a = `[data-page-row="${i.page.activeId}"]` : a === "$templateRow" ? a = `[data-template-id="${i.template.list.find((e) => !e.builtin)?.id}"]` : a === "$evenPage" ? a = `[data-page-surface="${i.template.editingTemplate?.evenPage?.id}"]` : (a.startsWith("[data-select-option]") || a.startsWith("[data-context-menu]") || a.startsWith("[data-command=")) && (o = r);
	let s = [...o.querySelectorAll(a)];
	return o === t && t.matches(a) && s.unshift(t), (n.input ? s.flatMap((e) => Ke(e)?.element ?? []) : s).find((e) => bu(e) && (!n.text || e.textContent?.trim() === n.text));
}
function bu(e) {
	return e instanceof Element && e.isConnected && !e.closest("[data-dialog-host][data-dialog-active=\"false\"]") && e.getClientRects().length > 0 && getComputedStyle(e).visibility !== "hidden";
}
function xu(e, t) {
	return new Promise((n) => {
		if (t.aborted) {
			n();
			return;
		}
		let r = setTimeout(i, e);
		function i() {
			clearTimeout(r), t.removeEventListener("abort", i), n();
		}
		t.addEventListener("abort", i, { once: !0 });
	});
}
async function Su(e, t, n, r, i = 60) {
	let a = n.target.id ? e.guides.get(n.target.id) : void 0, o = {
		editor: e,
		params: n.target.params ?? {},
		root: t,
		signal: r
	};
	if (a && !yu(e, t, n.target)) {
		let s = a.ensureMounted;
		if (!vu(e, t, n.target, r)?.isConnected && s && await Cu((e) => s({
			...o,
			signal: e
		}), r, i * 50) === void 0 && !r.aborted) throw new zt(H("designer.tutorialPlayback.targetUnavailable", { action: n.title }), { code: "tutorial.target-unavailable" });
		let c = a.ensureVisible;
		if (!r.aborted && !yu(e, t, n.target) && c && await Cu((e) => c({
			...o,
			signal: e
		}), r, i * 50) === void 0 && !r.aborted) throw new zt(H("designer.tutorialPlayback.targetUnavailable", { action: n.title }), { code: "tutorial.target-unavailable" });
		if (!r.aborted) {
			await Lr();
			let s = a.waitForElement;
			if (!yu(e, t, n.target) && s) {
				let e = await Cu((e) => s({
					...o,
					signal: e
				}), r, i * 50), t = n.target.input && e ? Ke(e)?.element : e;
				if (t && bu(t)) return t.scrollIntoView({
					block: "nearest",
					inline: "nearest"
				}), t;
			}
		}
	}
	for (let a = 0; a < i; a += 1) {
		if (r.aborted) return;
		let i = yu(e, t, n.target);
		if (i) return i.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		}), i;
		await xu(50, r);
	}
	throw new zt(H("designer.tutorialPlayback.targetUnavailable", { action: n.title }), { code: "tutorial.target-unavailable" });
}
async function Cu(e, t, n) {
	if (t.aborted) return;
	let r = new AbortController(), i, a = !1;
	return new Promise((o, s) => {
		function c() {
			i !== void 0 && clearTimeout(i), t.removeEventListener("abort", d);
		}
		function l(e) {
			a || (a = !0, c(), o(e));
		}
		function u(e) {
			a || (a = !0, c(), s(e));
		}
		function d() {
			r.abort(), l(void 0);
		}
		function f() {
			r.abort(), l(void 0);
		}
		t.addEventListener("abort", d, { once: !0 }), i = setTimeout(f, n);
		try {
			e(r.signal).then(l, u);
		} catch (e) {
			u(e);
		}
	});
}
async function wu(e, t = "") {
	let n = Ke(e);
	if (!n || !n.editable()) throw new zt(H("designer.tutorialPlayback.inputUnavailable"), { code: "tutorial.input-unavailable" });
	let r = n.element;
	Tu(r, !0), n.write(t), r.dispatchEvent(new Event("input", { bubbles: !0 })), r.dispatchEvent(new Event("change", { bubbles: !0 })), await Lr(), Tu(r, !1);
}
function Tu(e, t) {
	let [n, r] = t ? ["focus", "focusin"] : ["blur", "focusout"], i = !1, a = () => {
		i = !0;
	};
	e.addEventListener(n, a, { once: !0 }), t ? e.focus() : e.blur(), e.removeEventListener(n, a), i || (e.dispatchEvent(new FocusEvent(n)), e.dispatchEvent(new FocusEvent(r, { bubbles: !0 })));
}
function Eu(e) {
	if (e.matches(":disabled, [aria-disabled=\"true\"]")) throw new zt(H("designer.tutorialPlayback.inputUnavailable"), { code: "tutorial.control-disabled" });
	let t = e.querySelector("input[type=\"checkbox\"]");
	t ? t.click() : e.click();
}
async function Du(e, t, n, r, i) {
	for (let a of n.inputs ?? []) {
		let o = await Su(e, t, {
			...n,
			target: a.target
		}, r, i);
		if (!o || r.aborted) return;
		a.value === void 0 ? (Eu(o), await Lr()) : await wu(o, a.value);
	}
}
function Ou(e, t) {
	return e.store().element.find(t) !== null;
}
async function ku(e, t) {
	let { elementId: n } = t;
	if (t.command && !(n && Ou(e, n)) && await e.commands.execute(t.command, ...t.args?.(e) ?? []), n && Ou(e, n)) {
		await e.commands.execute("selection.set", [n]);
		let t = e.store().element.get(n);
		t && Wn(e.store(), t.type);
	}
}
async function Au(e, t, n, r, i = {}) {
	let a = i.replay === !0, o = (e) => a ? Promise.resolve() : xu(e, r), s = await Su(e, t, n, r, a ? 20 : 60);
	if (s && !r.aborted && (await o(350), !r.aborted)) {
		if (n.action === "input") n.inputs ? await Du(e, t, n, r, a ? 20 : 60) : await wu(s, n.value);
		else if (n.action === "contextmenu") {
			let e = s.getBoundingClientRect();
			s.dispatchEvent(new MouseEvent("contextmenu", {
				bubbles: !0,
				button: 2,
				cancelable: !0,
				clientX: e.left + Math.min(e.width / 2, 50),
				clientY: e.top + Math.min(e.height / 2, 20)
			}));
		} else n.action === "click" ? Eu(s) : n.action === "draw" ? (await o(650), r.aborted || await ku(e, n)) : n.action === "command" && !r.aborted && n.command && await e.commands.execute(n.command, ...n.args?.(e) ?? []);
		await Lr(), await o(300);
	}
}
async function ju(e, t, n, r, i) {
	let a = n[r];
	if (!a) return;
	let o = e.store().ui;
	async function s(r, a) {
		for (let o = r; o < a && !i.aborted; o += 1) {
			let r = n[o];
			r.action !== "inspect" && await Au(e, t, r, i, { replay: !0 });
		}
	}
	async function c() {
		o.closeDialog(), o.closeContextMenu(), await Lr();
	}
	async function l() {
		if (!(a.requires !== "template-edit" || e.store().template.editingTemplate)) {
			for (let [e, t] of n.entries()) t.provides === a.requires && await s(e, e + 1);
			await c();
		}
	}
	let u = n.findIndex((e) => e.group === a.group), d = a.target.id === "canvas.element" ? String(a.target.params?.id ?? "") : void 0, f = d ? n.findIndex((e) => e.elementId === d) : -1;
	if (await c(), await l(), d && f >= 0 && f < u && !Ou(e, d)) {
		let e = n[f].group, t = n.findIndex((t) => t.group === e), r = t;
		for (; n[r + 1]?.group === e;) r += 1;
		await s(t, r + 1), await c();
	}
	await s(u, r);
}
var Mu = "[data-tutorial-transport], [data-tutorial-popup]", Nu = /* @__PURE__ */ "auxclick.click.dblclick.mousedown.mousemove.mouseup.pointerdown.pointermove.pointerup.touchend.touchmove.touchstart.beforeinput.compositionstart.compositionupdate.compositionend.input.change.copy.cut.keydown.keypress.keyup.paste.contextmenu.drag.dragstart.dragover.drop.selectstart.wheel".split(".");
function Pu(e) {
	return e.composedPath().some((e) => e instanceof Element && e.closest(Mu) !== null);
}
function Fu(e, t) {
	let n = e.store().tutorial, r;
	function i(e) {
		if (n.phase !== "running") return;
		let t = (e.type === "input" || e.type === "change") && e.target instanceof Element && e.target.matches("input[type=\"checkbox\"], input[type=\"radio\"]");
		n.executing && (!e.isTrusted || t) || Pu(e) || (e.preventDefault(), e.stopImmediatePropagation());
	}
	function a(e) {
		let t = e.defaultView;
		if (t && r !== t) {
			o(), r = t;
			for (let e of Nu) t.addEventListener(e, i, {
				capture: !0,
				passive: !1
			});
		}
	}
	function o() {
		for (let e of Nu) r?.removeEventListener(e, i, !0);
		r = void 0;
	}
	J(() => ({
		phase: n.phase,
		root: t()
	}), ({ phase: e, root: t }) => {
		e === "running" && t ? a(t.ownerDocument) : o();
	}, {
		flush: "sync",
		immediate: !0
	}), Er(o);
}
function Iu(e, t) {
	let n = e.store().tutorial, r = L(), i = L({
		height: 0,
		left: 0,
		top: 0,
		width: 0
	}), a = new AbortController(), o = 0, s, c = 0, l = !1, u = {
		attempts: 0,
		index: -1
	}, d = K(() => ({
		height: `${i.value.height}px`,
		left: `${i.value.left}px`,
		top: `${i.value.top}px`,
		width: `${i.value.width}px`
	})), f = K(() => {
		let t = n.operation?.drawing, r = e.store().scope.active, a = i.value.width / r.width;
		return t ? {
			"--tutorial-drag-x": `${t.width * a}px`,
			"--tutorial-drag-y": `${t.height * a}px`,
			height: `${t.height * a}px`,
			left: `${i.value.left + t.x * a}px`,
			top: `${i.value.top + t.y * a}px`,
			width: `${t.width * a}px`
		} : {};
	});
	function p() {
		let a = t(), o = n.operation;
		if (!a || !o || n.phase !== "running") {
			r.value = void 0;
			return;
		}
		let s = yu(e, a, o.target), u = s?.getBoundingClientRect();
		if (!s || !u || u.width <= 0 || u.height <= 0) {
			r.value = void 0, m();
			return;
		}
		c = 0, l = !1, n.setUnavailable(null), r.value !== s && (r.value = s, s.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		}), u = s.getBoundingClientRect());
		let d = {
			height: u.height,
			left: u.left,
			top: u.top,
			width: u.width
		};
		JSON.stringify(d) !== JSON.stringify(i.value) && (i.value = d);
	}
	function m() {
		if (n.executing || n.transition !== "idle" || n.phase !== "running" || n.unavailable) {
			c = 0;
			return;
		}
		let e = performance.now();
		c ? e - c > 1200 && (c = 0, h().catch(T)) : c = e;
	}
	async function h() {
		let r = t();
		if (!r || n.executing || n.transition !== "idle" || n.phase !== "running") return;
		let i = n.current;
		if (u.index !== i && (u = {
			attempts: 0,
			index: i
		}), u.attempts += 1, u.attempts > 3) {
			if (!l) {
				l = !0;
				let e = n.operation;
				await T(new zt(H("designer.tutorialPlayback.targetUnavailable", { action: e?.title ?? "" }), { code: "tutorial.target-unavailable" }));
			}
		} else await _(async (t) => {
			let a = n.operations[i];
			try {
				await Su(e, r, a, t, 20);
				return;
			} catch (e) {
				if (t.aborted || !(e instanceof zt) || e.code !== "tutorial.target-unavailable") throw e;
			}
			a.restore ? await g(t) : await ju(e, r, n.operations, i, t), await Su(e, r, a, t, 20);
		});
	}
	async function g(t) {
		let r = n.operation;
		if (!r?.restore || t.aborted) return;
		let i = n.playing;
		n.setExecuting(!1), n.seek(n.current, !0), n.setExecuting(!0), await Lr(), t.aborted || n.phase !== "running" || (r.restore(e), await Lr(), n.setPlaying(i));
	}
	function _(e) {
		let t = a.signal;
		n.setExecuting(!0);
		let r = e(t).catch(async (e) => {
			t.aborted || await T(e);
		}).finally(() => {
			s === r && (s = void 0, n.setExecuting(!1));
		});
		return s = r, r;
	}
	async function v() {
		let r = t(), i = n.operation;
		if (!r || !i || n.executing || n.transition !== "idle" || n.phase !== "running") return;
		let a = n.current;
		await _(async (t) => {
			try {
				await Au(e, r, i, t);
			} catch (a) {
				if (t.aborted || !(a instanceof zt) || a.code !== "tutorial.target-unavailable") throw a;
				i.restore ? await g(t) : await ju(e, r, n.operations, n.current, t), await Au(e, r, i, t);
			}
			!t.aborted && n.phase === "running" && n.current === a && n.next();
		});
	}
	async function y() {
		let e = ++o, t = a.signal;
		for (; n.playing && n.phase === "running" && !t.aborted && e === o && (await xu(n.interval, t), n.playing && !t.aborted && e === o);) await v();
	}
	function b(e) {
		n.transition === e && n.setTransition("idle");
	}
	async function x(r) {
		let i = t();
		if (!i || n.transition === "seeking" || n.phase !== "running" || !Number.isInteger(r) || r < 0 || r >= n.operations.length || r === n.current) return;
		n.setTransition("seeking"), n.setPlaying(!1), o += 1;
		let c = a.signal;
		a.abort();
		try {
			if (await s, a.signal !== c || n.phase !== "running" || (a = new AbortController(), n.seek(r), n.phase !== "running")) return;
			await _(async (t) => {
				if (await Lr(), t.aborted || n.phase !== "running") return;
				let a = n.operation;
				if (a?.restore) a.restore(e), await Lr();
				else for (let a of n.operations.slice(0, r)) {
					if (t.aborted) return;
					a.action !== "inspect" && (await Au(e, i, a, t, { replay: !0 }), await xu(350, t));
				}
			});
		} catch (e) {
			await T(e);
		} finally {
			b("seeking");
		}
	}
	async function S() {
		if (n.setPlaying(!1), o += 1, s && n.transition === "idle") {
			n.setTransition("stopping");
			try {
				await s;
			} finally {
				b("stopping");
			}
		}
	}
	function C() {
		n.playing ? S().catch(T) : n.transition === "idle" && n.setPlaying(!0);
	}
	async function w() {
		await x(n.current - 1);
	}
	async function T(t) {
		n.setPlaying(!1), t instanceof zt && t.code === "tutorial.target-unavailable" && n.setUnavailable(n.operation?.title ?? ""), await e.errors.capture(t, { source: "tutorial.playback" });
	}
	return Fu(e, t), ve(p), J(() => n.current, () => {
		r.value = void 0;
	}, { flush: "sync" }), J(() => n.playing, (e) => {
		e ? y().catch(T) : o += 1;
	}, { immediate: !0 }), J(() => n.phase, (e) => {
		a.abort(), a = new AbortController(), o += 1, e !== "running" && (n.setPlaying(!1), n.setTransition("idle"));
	}, { flush: "sync" }), Er(() => {
		a.abort(), n.setPlaying(!1);
	}), {
		demonstrate: v,
		drawingStyle: f,
		pause: S,
		previous: w,
		ringStyle: d,
		seek: x,
		target: r,
		togglePlaying: C
	};
}
var Lu = ["data-right"], Ru = ["data-active"], zu = ["aria-busy", "aria-label"], Bu = {
	key: 0,
	role: "alert"
}, Vu = /* @__PURE__ */ G({
	__name: "tutorial-dialog",
	setup(e) {
		let t = u(), n = Dr(qn, void 0), i = E(), a = i.store().tutorial, o = L(), s = L(), c = L(), l = Ye(c), d = r(), f = Iu(i, () => o.value?.closest("[data-designer-shell]") ?? void 0), p = K(() => {
			let e = {
				bottom: c.value ? d.height.value - l.top.value + 12 : 12,
				left: 12,
				right: 12,
				top: 12
			};
			return {
				modifiers: [{
					name: "flip",
					options: { padding: e }
				}, {
					name: "preventOverflow",
					options: {
						altAxis: !0,
						padding: e,
						tether: !1
					}
				}],
				strategy: "fixed"
			};
		}), m = K(() => a.operations.map((e, t) => ({
			label: H("designer.tutorialPlayback.stepOption", {
				description: e.body,
				number: t + 1,
				title: e.title
			}),
			value: t
		}))), h = K(() => [
			{
				label: H("designer.tutorialPlayback.slow"),
				value: 2400
			},
			{
				label: H("designer.tutorialPlayback.normal"),
				value: 1200
			},
			{
				label: H("designer.tutorialPlayback.fast"),
				value: 200
			}
		]), g = {
			attach: () => c.value ?? document.body,
			zIndex: 20004
		}, _ = {
			...g,
			attach: () => c.value?.querySelector("[data-tutorial-step-options]") ?? document.body,
			overlayInnerStyle: {
				maxWidth: "calc(100vw - 48px)",
				width: "360px"
			}
		};
		function v(e, ...t) {
			i.commands.dispatch(e, ...t);
		}
		function y() {
			v("tutorial.exit");
		}
		function b(e) {
			typeof e == "number" && a.setInterval(e);
		}
		function x(e) {
			typeof e == "number" && f.seek(e);
		}
		return J([
			f.ringStyle,
			p,
			() => f.target.value
		], async () => {
			await Lr(), s.value?.getPopper?.()?.setOptions({ modifiers: p.value.modifiers }), s.value?.update?.();
		}, { flush: "post" }), (e, r) => {
			let i = Ee, l = Ge, u = lt, d = ut;
			return F(), X("div", {
				ref_key: "host",
				ref: o,
				class: P(U(t)("tutorial-guide"))
			}, [
				V(U(be), {
					visible: U(a).phase === "list",
					title: U(H)("designer.tutorial.menuItem"),
					width: 520,
					"confirm-btn": U(H)("designer.tutorial.start"),
					onConfirm: r[0] ||= (e) => v("tutorial.start", "delivery"),
					onCancel: r[1] ||= (e) => U(a).close(),
					onClose: r[2] ||= (e) => U(a).close()
				}, {
					default: $(() => [R("p", {
						"data-component": "tutorial-guide__intro",
						class: P(U(t)("tutorial-guide__intro"))
					}, q(U(H)("designer.tutorial.intro")), 3)]),
					_: 1
				}, 8, [
					"visible",
					"title",
					"confirm-btn"
				]),
				U(a).phase === "running" && U(a).transition !== "seeking" && U(f).target.value ? (F(), I(l, {
					key: U(a).current,
					ref_key: "popup",
					ref: s,
					visible: !0,
					"trigger-element": "[data-tutorial-focus]",
					placement: "bottom-left",
					attach: U(n) ?? "body",
					"overlay-class-name": U(t)("tutorial-guide__popup"),
					"popper-options": p.value,
					"z-index": 20003
				}, {
					content: $(() => [R("div", {
						"data-component": "tutorial-guide__popup",
						"data-part": "tutorial-guide__content",
						class: P(U(t)("tutorial-guide__content")),
						"data-tutorial-popup": "",
						"data-menu-keep-open": "",
						onKeydown: r[6] ||= Q(() => {}, ["stop"]),
						onKeypress: r[7] ||= Q(() => {}, ["stop"]),
						onKeyup: r[8] ||= Q(() => {}, ["stop"])
					}, [
						R("strong", null, q(U(a).operation?.title), 1),
						R("p", null, q(U(a).operation?.body), 1),
						R("div", {
							"data-component": "tutorial-guide__actions",
							class: P(U(t)("tutorial-guide__actions"))
						}, [
							V(i, {
								variant: "text",
								onClick: y
							}, {
								default: $(() => [z(q(U(H)("designer.tutorial.exit")), 1)]),
								_: 1
							}),
							V(i, {
								variant: "outline",
								"aria-pressed": U(a).playing,
								loading: U(a).transition === "stopping",
								disabled: U(a).transition !== "idle",
								onClick: r[3] ||= (e) => U(f).togglePlaying()
							}, {
								default: $(() => [z(q(U(H)(U(a).playing ? "designer.tutorialPlayback.pause" : "designer.tutorialPlayback.play")), 1)]),
								_: 1
							}, 8, [
								"aria-pressed",
								"loading",
								"disabled"
							]),
							V(i, {
								variant: "outline",
								disabled: U(a).current === 0 || U(a).transition !== "idle",
								onClick: r[4] ||= (e) => U(f).previous()
							}, {
								default: $(() => [z(q(U(H)("designer.tutorialPlayback.previous")), 1)]),
								_: 1
							}, 8, ["disabled"]),
							V(i, {
								loading: U(a).executing || U(a).transition !== "idle",
								onClick: r[5] ||= (e) => U(f).demonstrate()
							}, {
								default: $(() => [z(q(U(H)("designer.tutorialPlayback.demonstrate")), 1)]),
								_: 1
							}, 8, ["loading"])
						], 2)
					], 34)]),
					_: 1
				}, 8, [
					"attach",
					"overlay-class-name",
					"popper-options"
				])) : W("", !0),
				(F(), I(Ur, { to: U(n)?.() ?? "body" }, [U(a).phase === "running" ? (F(), X(Y, { key: 0 }, [
					R("div", {
						"data-component": "tutorial-guide__shield",
						class: P(U(t)("tutorial-guide__shield")),
						"data-menu-keep-open": "",
						"aria-hidden": "true"
					}, null, 2),
					U(f).target.value ? (F(), X("div", {
						key: U(a).current,
						"data-component": "tutorial-guide__focus",
						class: P(U(t)("tutorial-guide__focus")),
						"data-tutorial-focus": "",
						style: B(U(f).ringStyle.value),
						"aria-hidden": "true"
					}, [R("span", {
						"data-component": "tutorial-guide__pulse",
						"data-right": U(a).operation?.action === "contextmenu",
						class: P([U(t)("tutorial-guide__pulse"), { [U(t)("tutorial-guide__pulse--right")]: U(a).operation?.action === "contextmenu" }])
					}, null, 10, Lu), R("span", {
						"data-component": "tutorial-guide__gesture",
						class: P(U(t)("tutorial-guide__gesture"))
					}, q(U(H)(`designer.tutorialPlayback.${U(a).operation?.action}Gesture`)), 3)], 6)) : W("", !0),
					U(a).operation?.drawing && U(f).target.value ? (F(), X("div", {
						key: 1,
						"data-component": "tutorial-guide__drawing",
						"data-active": U(a).executing,
						class: P([U(t)("tutorial-guide__drawing"), { [U(t)("tutorial-guide__drawing--active")]: U(a).executing }]),
						style: B(U(f).drawingStyle.value),
						"aria-hidden": "true"
					}, [(F(), X("svg", {
						"data-component": "tutorial-guide__cursor",
						class: P(U(t)("tutorial-guide__cursor")),
						width: "24",
						height: "28",
						viewBox: "0 0 24 28"
					}, [...r[18] ||= [R("path", {
						d: "M2 2 21 17 12 18 8 26Z",
						fill: "currentColor",
						stroke: "var(--color-handle)",
						"stroke-width": "2"
					}, null, -1)]], 2))], 14, Ru)) : W("", !0),
					R("div", {
						ref_key: "transport",
						ref: c,
						"data-component": "tutorial-guide__transport",
						class: P(U(t)("tutorial-guide__transport")),
						"data-tutorial-transport": "",
						"data-menu-keep-open": "",
						role: "region",
						"aria-busy": U(a).executing || U(a).transition !== "idle",
						"aria-label": U(H)("designer.tutorialPlayback.transportLabel"),
						onKeydown: r[13] ||= Q(() => {}, ["stop"]),
						onKeypress: r[14] ||= Q(() => {}, ["stop"]),
						onKeyup: r[15] ||= Q(() => {}, ["stop"])
					}, [
						U(a).unavailable ? (F(), X("span", Bu, q(U(H)("designer.tutorialPlayback.targetUnavailable", { action: U(a).unavailable })), 1)) : W("", !0),
						R("strong", null, q(U(a).course ? U(pn)(U(a).course.id, "title") : ""), 1),
						R("span", null, q(U(H)("designer.tutorialPlayback.progress", {
							current: U(a).current + 1,
							total: U(a).operations.length
						})), 1),
						r[19] ||= R("div", { "data-tutorial-step-options": "" }, null, -1),
						V(d, {
							loading: U(a).transition === "seeking",
							size: "small"
						}, {
							default: $(() => [V(u, {
								"data-component": "tutorial-guide__step-select",
								class: P(U(t)("tutorial-guide__step-select")),
								value: U(a).current,
								options: m.value,
								"popup-props": _,
								"data-tutorial-step-select": "",
								disabled: U(a).transition === "seeking",
								"aria-label": U(H)("designer.tutorialPlayback.jumpToStep"),
								onFocus: r[9] ||= (e) => U(f).pause(),
								onChange: x
							}, null, 8, [
								"class",
								"value",
								"options",
								"disabled",
								"aria-label"
							])]),
							_: 1
						}, 8, ["loading"]),
						V(i, {
							variant: "outline",
							"aria-pressed": U(a).playing,
							loading: U(a).transition === "stopping",
							disabled: U(a).transition === "seeking",
							onClick: r[10] ||= (e) => U(f).togglePlaying()
						}, {
							default: $(() => [z(q(U(H)(U(a).playing ? "designer.tutorialPlayback.pause" : "designer.tutorialPlayback.play")), 1)]),
							_: 1
						}, 8, [
							"aria-pressed",
							"loading",
							"disabled"
						]),
						V(i, {
							variant: "outline",
							disabled: U(a).current === 0 || U(a).transition !== "idle",
							onClick: r[11] ||= (e) => U(f).previous()
						}, {
							default: $(() => [z(q(U(H)("designer.tutorialPlayback.previous")), 1)]),
							_: 1
						}, 8, ["disabled"]),
						V(i, {
							variant: "outline",
							loading: U(a).executing || U(a).transition !== "idle",
							onClick: r[12] ||= (e) => U(f).demonstrate()
						}, {
							default: $(() => [z(q(U(H)(U(a).unavailable ? "designer.tutorialPlayback.retry" : "designer.tutorialPlayback.demonstrate")), 1)]),
							_: 1
						}, 8, ["loading"]),
						V(u, {
							"data-component": "tutorial-guide__speed-select",
							class: P(U(t)("tutorial-guide__speed-select")),
							value: U(a).interval,
							options: h.value,
							"popup-props": g,
							"aria-label": U(H)("designer.tutorialPlayback.speed"),
							onChange: b
						}, null, 8, [
							"class",
							"value",
							"options",
							"aria-label"
						]),
						R("button", { onClick: y }, q(U(H)("designer.tutorial.exit")), 1)
					], 42, zu)
				], 64)) : W("", !0)], 8, ["to"])),
				V(U(be), {
					visible: U(a).phase === "finish",
					title: U(H)("designer.tutorial.resultTitle"),
					"close-on-esc-keydown": !1,
					"before-close": () => !1,
					"confirm-btn": U(H)("designer.tutorial.keep"),
					"cancel-btn": U(H)("designer.tutorial.restore"),
					onConfirm: r[16] ||= (e) => v("tutorial.finish", !0),
					onCancel: r[17] ||= (e) => v("tutorial.finish", !1)
				}, {
					default: $(() => [R("p", null, q(U(H)("designer.tutorial.resultBody")), 1)]),
					_: 1
				}, 8, [
					"visible",
					"title",
					"confirm-btn",
					"cancel-btn"
				])
			], 2);
		};
	}
}), Hu = { class: "flex h-7 shrink-0 flex-nowrap items-center border-t border-edge bg-panel pl-3 pr-2 text-compact text-ink-dim" }, Uu = { class: "flex min-w-0 flex-1 flex-nowrap items-center gap-4 overflow-hidden whitespace-nowrap" }, Wu = { class: "flex shrink-0 items-center gap-2" }, Gu = { class: "text-ink-dim/70" }, Ku = { class: "w-14 tabular-nums" }, qu = { class: "text-ink-dim/70" }, Ju = { class: "w-14 tabular-nums" }, Yu = { class: "text-ink-dim/60" }, Xu = ["title"], Zu = { class: "w-16 tabular-nums" }, Qu = { class: "flex shrink-0 items-center gap-1" }, $u = { class: "text-accent" }, ed = { key: 1 }, td = ["title"], nd = { class: "text-ink-dim/70" }, rd = /* @__PURE__ */ G({
	__name: "info-bar",
	emits: ["fit"],
	setup(e, { emit: t }) {
		let n = t, { onVisibleChange: r, popupProps: i } = ue({}, "popup"), a = E().store(), { commands: o } = E(), s = K({
			get: function() {
				return a.view.settings.pageLayoutMode;
			},
			set: function(e) {
				o.dispatch(`view.pageLayout.${e}`);
			}
		}), c = K(() => a.page.activeIndex), l = K(() => {
			let e = a.view.cursorContent, t = e && a.view.toLocal(a.page.activeId, e);
			return t ? {
				x: t.x,
				y: t.y
			} : {
				x: null,
				y: null
			};
		}), u = K(() => {
			let e = a.selection.bounds;
			if (!e || a.selection.nodes.length === 0) return {
				key: "designer.infoBar.unavailableValue",
				parameters: {}
			};
			if (a.selection.nodes.length === 1) {
				let e = a.selection.nodes[0];
				return Vr(e) && e.points && e.points.length >= 2 ? {
					key: "designer.infoBar.lineLength",
					parameters: { length: jr(e.points).toFixed(1) }
				} : {
					key: "designer.infoBar.dimensions",
					parameters: {
						height: e.height.toFixed(1),
						width: e.width.toFixed(1)
					}
				};
			}
			return {
				key: "designer.infoBar.selectionDimensions",
				parameters: {
					count: a.selection.nodes.length,
					height: e.height.toFixed(0),
					width: e.width.toFixed(0)
				}
			};
		}), d = K(() => [
			{
				label: H("designer.infoBar.verticalLayoutOption"),
				value: "vertical"
			},
			{
				label: H("designer.infoBar.horizontalLayoutOption"),
				value: "horizontal"
			},
			{
				label: H("designer.infoBar.gridLayoutOption"),
				value: "grid"
			}
		]), f = K(() => [
			{
				id: "zoom-out",
				onClick: m,
				shape: "square",
				slots: { icon: () => [In(N, {
					class: "h-3.5 w-3.5",
					name: "minus"
				})] },
				title: H("designer.infoBar.zoomOutTitle"),
				variant: "outline"
			},
			{
				class: "min-w-20 tabular-nums text-center hover:text-ink",
				id: "zoom-reset",
				onClick: h,
				slots: { icon: () => [In(N, {
					class: "h-3.5 w-3.5",
					name: "zoom"
				})] },
				text: H("designer.infoBar.zoomPercentage", { percent: Math.round(a.view.zoom * 100) }),
				title: H("designer.infoBar.resetZoomTitle"),
				variant: "outline"
			},
			{
				id: "zoom-in",
				onClick: p,
				shape: "square",
				slots: { icon: () => [In(N, {
					class: "h-3.5 w-3.5",
					name: "plus"
				})] },
				title: H("designer.infoBar.zoomInTitle"),
				variant: "outline"
			},
			{
				id: "zoom-fit",
				onClick: function() {
					n("fit");
				},
				slots: { icon: () => [In(N, {
					class: "h-3.5 w-3.5",
					name: "fit"
				})] },
				text: H("designer.infoBar.fitToWindowButton"),
				title: H("designer.infoBar.fitToWindowTitle"),
				variant: "outline"
			},
			{
				id: "zoom-actual",
				onClick: h,
				slots: { icon: () => [In(N, {
					class: "h-3.5 w-3.5",
					name: "zoom"
				})] },
				text: H("designer.infoBar.actualSizeButton"),
				title: H("designer.infoBar.actualSizeTitle"),
				variant: "outline"
			}
		]);
		function p() {
			o.dispatch("view.zoomIn");
		}
		function m() {
			o.dispatch("view.zoomOut");
		}
		function h() {
			o.dispatch("view.zoomActual");
		}
		return (e, t) => {
			let n = lt;
			return F(), X("footer", Hu, [
				R("div", Uu, [
					R("div", Wu, [
						R("span", Gu, q(U(H)("designer.infoBar.xLabel")), 1),
						R("span", Ku, q(l.value.x === null ? U(H)("designer.infoBar.unavailableValue") : l.value.x.toFixed(1)), 1),
						R("span", qu, q(U(H)("designer.infoBar.yLabel")), 1),
						R("span", Ju, q(l.value.y === null ? U(H)("designer.infoBar.unavailableValue") : l.value.y.toFixed(1)), 1),
						R("span", Yu, q(U(H)("designer.infoBar.distanceUnit")), 1)
					]),
					t[1] ||= R("div", { class: "h-3.5 w-px shrink-0 bg-edge" }, null, -1),
					R("div", {
						class: "flex shrink-0 items-center gap-2",
						title: U(H)("designer.infoBar.selectionDimensionsTitle")
					}, [R("span", Zu, q(U(H)(u.value.key, u.value.parameters)), 1)], 8, Xu),
					t[2] ||= R("div", { class: "h-3.5 w-px shrink-0 bg-edge" }, null, -1),
					R("div", Qu, [U(a).template.editingTemplate ? (F(), X(Y, { key: 0 }, [V(N, {
						name: "template",
						class: "h-3.5 w-3.5 text-accent"
					}), R("span", $u, q(U(H)("designer.infoBar.templateEditing", { templateName: U(a).template.editingTemplate.name })), 1)], 64)) : (F(), X("span", ed, q(U(H)("designer.infoBar.pageProgress", {
						pageNumber: c.value + 1,
						pageCount: U(a).document.data.pages.length
					})), 1))])
				]),
				R("label", {
					class: "ml-2 flex shrink-0 items-center gap-1.5",
					title: U(H)("designer.infoBar.pageLayoutTitle")
				}, [R("span", nd, q(U(H)("designer.infoBar.pageLayoutLabel")), 1), V(n, {
					modelValue: s.value,
					"onUpdate:modelValue": t[0] ||= (e) => s.value = e,
					"popup-props": U(i),
					class: "!w-20",
					options: d.value,
					onPopupVisibleChange: U(r)
				}, null, 8, [
					"modelValue",
					"popup-props",
					"options",
					"onPopupVisibleChange"
				])], 8, td),
				t[3] ||= R("div", { class: "mx-2 h-3.5 w-px shrink-0 bg-edge" }, null, -1),
				V(U(pe), {
					class: "shrink-0",
					actions: f.value,
					gap: 1,
					wrap: !1,
					size: "small"
				}, null, 8, ["actions"])
			]);
		};
	}
}), id = ["data-collapsed", "data-dock-group"], ad = [
	"data-active",
	"data-dock-tab",
	"title",
	"aria-label",
	"aria-selected",
	"aria-expanded",
	"tabindex",
	"onPointerdown",
	"onClick"
], od = ["data-panel-popout"], sd = ["role"], cd = [
	"id",
	"data-active",
	"role",
	"aria-expanded",
	"data-dock-tab",
	"title",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"onPointerdown",
	"onClick"
], ld = ["title"], ud = [
	"id",
	"role",
	"aria-labelledby"
], dd = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	inheritAttrs: !1,
	__name: "panel-group",
	props: {
		collapsed: { type: Boolean },
		column: {},
		group: {},
		iconsOnly: { type: Boolean },
		interactions: {}
	},
	setup(e) {
		let t = u(), n = e, i = E(), a = i.store().panel, o = L(null), { height: s, width: c } = r(), l = K(() => n.group.panelIds.flatMap((e) => {
			let t = a.definitions[e];
			return t ? [t] : [];
		})), d = K(() => l.value.some((e) => e.id === n.group.activeId) ? n.group.activeId : l.value[0]?.id), f = K(() => !n.collapsed && n.group.collapsed === !0), p = K(() => l.value.find((e) => e.id === d.value)?.sectionTitle?.()), m = K(() => n.collapsed && a.openGroupId === n.group.id), h = K(() => {
			if (!m.value || !o.value) return {};
			let e = o.value.getBoundingClientRect(), t = Math.min(n.column.width, c.value - 16), r = Math.min(540, s.value - 48), i = e.left - t;
			return i < 8 && (i = Math.min(e.right, c.value - t - 8)), {
				height: `${r}px`,
				left: `${Math.max(8, i)}px`,
				top: `${Math.max(8, Math.min(e.top, s.value - r - 8))}px`,
				width: `${t}px`
			};
		});
		re([{
			run: g,
			shortcut: [
				"ArrowLeft",
				"ArrowRight",
				"ArrowUp",
				"ArrowDown",
				"Home",
				"End"
			]
		}], {
			filter: function(e) {
				return e.target instanceof HTMLElement && !!e.target.dataset.dockTab;
			},
			target: o
		});
		function g(e) {
			let t = l.value.findIndex((e) => e.id === d.value), r = t;
			r = e.key === "Home" ? 0 : e.key === "End" ? l.value.length - 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? (t + l.value.length - 1) % l.value.length : (t + 1) % l.value.length;
			let i = l.value[r];
			if (!i) return;
			a.activate(n.group.id, i.id, n.collapsed && !m.value);
			let s = o.value?.querySelectorAll("[role=\"tab\"][data-dock-tab]");
			Array.from(s ?? []).find((e) => e.dataset.dockTab === i.id && e.offsetParent !== null)?.focus();
		}
		function _(e) {
			a.activate(n.group.id, e, n.collapsed);
		}
		function v(e, t) {
			n.interactions.startDrag(e, {
				columnId: n.column.id,
				groupId: n.group.id,
				panelId: t
			});
		}
		function y(e) {
			n.interactions.startDrag(e, {
				columnId: n.column.id,
				groupId: n.group.id
			});
		}
		function b(e) {
			!n.collapsed && l.value.length === 1 ? a.toggleGroup(n.column.id, n.group.id) : a.activate(n.group.id, e);
		}
		function x() {
			a.movePanels({
				columnId: n.column.id,
				groupId: n.group.id
			}, { placement: "after" });
		}
		return (n, r) => l.value.length ? (F(), X("section", _r({ key: 0 }, n.$attrs, {
			ref_key: "root",
			ref: o,
			"data-component": "panel-group",
			"data-collapsed": e.collapsed,
			class: ["flex flex-col min-w-0 overflow-hidden", [U(t)("panel-group"), e.collapsed ? [U(t)("panel-group--collapsed")] : "min-h-9 rounded-md border border-edge"]],
			"data-dock-group": e.group.id
		}), [e.collapsed ? (F(), X("div", {
			key: 0,
			class: P(["flex flex-col", U(t)("panel-group__rail")]),
			role: "tablist",
			"aria-orientation": "vertical"
		}, [(F(!0), X(Y, null, Z(l.value, (n) => (F(), X("button", {
			key: n.id,
			"data-component": "panel-group__rail-tab",
			"data-active": m.value && d.value === n.id,
			class: P(["flex items-center gap-2 shrink-0 cursor-pointer text-left h-8.5 [padding:0_8px] [border-left:2px_solid_transparent] hover:bg-panel-3", [U(t)("panel-group__rail-tab"), { [U(t)("panel-group__rail-tab--active")]: m.value && d.value === n.id }]]),
			type: "button",
			role: "tab",
			"data-dock-tab": n.id,
			title: n.title(),
			"aria-label": n.title(),
			"aria-selected": m.value && d.value === n.id,
			"aria-expanded": m.value && d.value === n.id,
			tabindex: d.value === n.id ? 0 : -1,
			onPointerdown: Q((e) => v(e, n.id), ["stop"]),
			onClick: (e) => _(n.id)
		}, [V(N, {
			name: n.icon,
			class: "h-4 w-4 shrink-0"
		}, null, 8, ["name"]), e.iconsOnly ? W("", !0) : (F(), X("span", {
			key: 0,
			"data-test-part": "panel-group__label",
			class: P(["overflow-hidden whitespace-nowrap text-ellipsis", U(t)("panel-group__label")])
		}, q(n.title()), 3))], 42, ad))), 128))], 2)) : W("", !0), !e.collapsed || m.value ? (F(), X("div", {
			key: 1,
			"data-component": "panel-group__surface",
			class: P(["flex flex-1 flex-col min-w-0 min-h-0 overflow-hidden bg-panel", [U(t)("panel-group__surface"), { [U(t)("panel-group__surface--popout")]: e.collapsed }]]),
			style: B(e.collapsed ? h.value : void 0),
			"data-panel-surface": "",
			"data-panel-popout": e.collapsed
		}, [R("header", {
			"data-test-part": "panel-group__header",
			class: P(["flex items-center h-8.5 shrink-0 bg-panel-2 border-b border-edge cursor-move", U(t)("panel-group__header")]),
			"data-panel-header": "",
			onPointerdown: Q(y, ["self"])
		}, [
			R("div", {
				"data-component": "panel-group__tabs",
				class: P(["flex min-w-0 overflow-x-auto [align-self:stretch]", [U(t)("panel-group__tabs"), !e.collapsed && l.value.length === 1 ? "flex-1" : "gap-0.5 p-0.5"]]),
				role: e.collapsed || l.value.length > 1 ? "tablist" : void 0
			}, [(F(!0), X(Y, null, Z(l.value, (n) => (F(), X("button", {
				id: `panel-tab-${e.group.id}-${n.id}`,
				key: n.id,
				"data-component": "panel-group__tab",
				"data-active": d.value === n.id,
				type: "button",
				role: e.collapsed || l.value.length > 1 ? "tab" : void 0,
				class: P(["flex items-center gap-1.5 shrink-0 cursor-pointer px-2 text-xs text-ink-dim hover:bg-panel-3", [U(t)("panel-group__tab"), {
					[U(t)("panel-group__tab--active")]: d.value === n.id,
					"flex-1": !e.collapsed && l.value.length === 1,
					"rounded border border-transparent": e.collapsed || l.value.length > 1
				}]]),
				"aria-expanded": e.collapsed || l.value.length > 1 ? void 0 : !f.value,
				"data-dock-tab": n.id,
				title: !e.collapsed && l.value.length === 1 ? p.value ?? n.title() : n.title(),
				"aria-selected": e.collapsed || l.value.length > 1 ? d.value === n.id : void 0,
				"aria-controls": `panel-content-${e.group.id}-${n.id}`,
				tabindex: d.value === n.id ? 0 : -1,
				onPointerdown: Q((e) => v(e, n.id), ["stop"]),
				onClick: (e) => b(n.id)
			}, [
				!e.collapsed && l.value.length === 1 ? (F(), I(N, {
					key: 0,
					name: "chevron-down",
					class: P(["size-3 shrink-0 text-ink-dim", { "-rotate-90": f.value }])
				}, null, 8, ["class"])) : W("", !0),
				V(N, {
					name: n.icon,
					class: "size-4 shrink-0 text-ink-dim"
				}, null, 8, ["name"]),
				z(" " + q(!e.collapsed && l.value.length === 1 ? p.value ?? n.title() : n.title()), 1)
			], 42, cd))), 128))], 10, sd),
			R("div", {
				"data-test-part": "panel-group__grip",
				class: P(["flex items-center justify-end min-w-6 pr-1.5 h-full text-ink-dim", [U(t)("panel-group__grip"), { "flex-1": e.collapsed || l.value.length > 1 }]]),
				title: U(H)("designer.panelDock.moveGroupTitle"),
				onPointerdown: y
			}, [V(N, {
				name: "drag",
				class: "h-3 w-3"
			})], 42, ld),
			!e.collapsed && l.value.length > 1 ? (F(), I(Te, {
				key: 0,
				icon: f.value ? "chevron-right" : "chevron-down",
				label: U(H)(f.value ? "designer.panelFrame.expandTitle" : "designer.panelFrame.collapseTitle"),
				"aria-expanded": !f.value,
				onClick: r[0] ||= (t) => U(a).toggleGroup(e.column.id, e.group.id)
			}, null, 8, [
				"icon",
				"label",
				"aria-expanded"
			])) : W("", !0),
			e.column.floating ? (F(), I(Te, {
				key: 1,
				icon: "panel-dock",
				label: U(H)("designer.panelFrame.dockTitle"),
				onClick: x
			}, null, 8, ["label"])) : W("", !0),
			e.collapsed ? (F(), I(Te, {
				key: 2,
				icon: "close",
				label: U(H)("designer.panelDock.closeTitle"),
				onClick: U(a).closePopout
			}, null, 8, ["label", "onClick"])) : W("", !0)
		], 34), (F(!0), X(Y, null, Z(l.value, (n) => ur((F(), X("div", {
			key: n.id,
			id: `panel-content-${e.group.id}-${n.id}`,
			class: P(["flex flex-1 min-h-0 min-w-0 overflow-hidden", U(t)("panel-group__content")]),
			role: e.collapsed || l.value.length > 1 ? "tabpanel" : "region",
			"aria-labelledby": `panel-tab-${e.group.id}-${n.id}`
		}, [V(U(Nt), { runtime: U(i).errors }, {
			fallback: $(({ error: e, reset: t }) => [V(It, {
				detail: U($n)(e),
				title: U(H)("designer.designerShell.panelRenderFailed"),
				onRetry: t
			}, null, 8, [
				"detail",
				"title",
				"onRetry"
			])]),
			default: $(() => [(F(), I(cn(n.component)))]),
			_: 2
		}, 1032, ["runtime"])], 10, ud)), [[Or, !f.value && d.value === n.id]])), 128))], 14, od)) : W("", !0)], 16, id)) : W("", !0);
	}
}), [["__scopeId", "data-v-afa8940b"]]), fd = [
	"data-floating",
	"data-dock-column",
	"data-dock-collapsed"
], pd = ["title"], md = { class: "ml-2 truncate text-xs font-semibold text-ink" }, hd = [
	"title",
	"aria-label",
	"aria-expanded"
], gd = [
	"aria-label",
	"title",
	"onPointerdown",
	"onDblclick"
], _d = ["aria-label", "title"], vd = ["title"], yd = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	inheritAttrs: !1,
	__name: "panel-column",
	props: {
		collapsed: { type: Boolean },
		column: {},
		interactions: {},
		sectionPreview: { type: Boolean },
		width: {}
	},
	setup(e) {
		let t = u(), n = e, { commands: r, store: i } = E(), { panel: a } = i(), o = K(() => n.column.groups.filter((e) => e.panelIds.some((e) => !!a.definitions[e]))), s = K(() => o.value.filter((e) => !e.collapsed)), c = K(() => s.value.some((e) => e.height === void 0 && !d(e))), l = K(() => s.value.every(d));
		function d(e) {
			return !n.sectionPreview && e.height === void 0 && o.value.length > 1 && e.panelIds.every((e) => {
				let t = a.definitions[e];
				return !t || t.sizing === "content";
			});
		}
		function f(e) {
			if (!n.collapsed) return e.collapsed ? "0 0 auto" : n.sectionPreview || s.value.length === 1 ? "1 0 0px" : e.height === void 0 ? d(e) ? l.value ? "1 1 auto" : "0 1 auto" : `${e.weight} 1 0px` : `${+!c.value} 1 ${e.height}px`;
		}
		function p(e) {
			n.interactions.startDrag(e, { columnId: n.column.id });
		}
		function m(e) {
			let t = e.clientX, r = n.width;
			n.interactions.startResize(e, (e) => {
				a.resizeColumn(n.column.id, r + t - e.clientX, n.collapsed);
			});
		}
		function h() {
			a.resizeColumn(n.column.id, n.collapsed ? 112 : 320, n.collapsed), a.persist();
		}
		function g(e, t) {
			let r = e.currentTarget, i = r.previousElementSibling?.getBoundingClientRect(), o = _(t);
			if (!i || !o) return;
			let s = Array.from(r.parentElement?.children ?? []).find((e) => e.getAttribute("data-dock-group") === o.id)?.getBoundingClientRect();
			if (!s) return;
			let c = e.clientY, l = Math.round(i.height + s.height), u = Math.min(120, Math.floor(i.height)), d = Math.min(120, Math.floor(s.height));
			n.interactions.startResize(e, (e) => {
				let r = i.height + e.clientY - c, s = Tn(Math.round(r), u, l - d);
				a.resizeGroups(n.column.id, {
					[t.id]: s,
					[o.id]: l - s
				});
			});
		}
		function _(e) {
			let t = s.value.indexOf(e);
			return s.value[t + 1] ?? s.value[t - 1];
		}
		function v(e) {
			let t = _(e), r = { [e.id]: null };
			t && (r[t.id] = null), a.resizeGroups(n.column.id, r), a.persist();
		}
		function y(e) {
			let t = e.clientX, r = e.clientY, i = n.column.width, o = n.column.height;
			n.interactions.startResize(e, (e) => {
				a.resizeFloating(n.column.id, i + e.clientX - t, o + e.clientY - r);
			});
		}
		function b() {
			a.toggleColumn(n.column.id);
		}
		function x() {
			n.column.floating && a.bringToFront(n.column.id);
		}
		return (n, i) => o.value.length ? (F(), X("aside", _r({
			key: 0,
			"data-test-part": "panel-column"
		}, n.$attrs, {
			"data-component": "panel-column",
			"data-floating": e.column.floating,
			class: ["relative flex flex-col shrink-0 min-h-0 h-full border-l border-edge bg-panel", [U(t)("panel-column"), {
				[U(t)("panel-column--collapsed")]: e.collapsed,
				[U(t)("panel-column--floating")]: e.column.floating
			}]],
			style: { width: `${e.width}px` },
			"data-dock-column": e.column.id,
			"data-dock-collapsed": e.collapsed,
			onPointerdownCapture: x
		}), [
			e.sectionPreview ? W("", !0) : (F(), X("div", {
				key: 0,
				"data-test-part": "panel-column__bar",
				class: P(["flex items-center shrink-0 bg-panel border-b border-edge cursor-move", [U(t)("panel-column__bar"), e.collapsed ? "h-4.5" : "h-10 px-2 gap-1"]]),
				onPointerdown: Q(p, ["self"])
			}, [
				R("div", {
					"data-test-part": "panel-column__grip",
					class: P(["flex items-center flex-1 h-full min-w-0 text-ink-dim pl-1.5", U(t)("panel-column__grip")]),
					title: U(H)("designer.panelDock.moveColumnTitle"),
					onPointerdown: p
				}, [e.collapsed ? (F(), I(N, {
					key: 1,
					name: "drag",
					class: "h-3 w-3"
				})) : (F(), X(Y, { key: 0 }, [V(N, {
					name: "grid",
					class: "h-4 w-4 shrink-0 text-accent"
				}), R("span", md, q(U(H)("designer.controlPanel.panelTitle")), 1)], 64))], 42, pd),
				e.collapsed ? W("", !0) : ur((F(), I(Te, {
					key: 0,
					icon: "template",
					label: U(H)("designer.templateLibrary.menuItem"),
					onClick: i[0] ||= (e) => U(r).dispatch("file.templateLibrary")
				}, null, 8, ["label"])), [[Or, U(r).has("file.templateLibrary")]]),
				R("button", {
					"data-component": "panel-column__toggle",
					class: P(["flex items-center justify-center shrink-0 cursor-pointer rounded-sm hover:bg-panel-3", [U(t)("panel-column__toggle"), e.collapsed ? "h-4.25 w-6.25" : "size-7 text-ink-dim"]]),
					type: "button",
					title: e.collapsed ? U(H)("designer.panelDock.expandColumnTitle") : U(H)("designer.panelDock.collapseColumnTitle"),
					"aria-label": e.collapsed ? U(H)("designer.panelDock.expandColumnTitle") : U(H)("designer.panelDock.collapseColumnTitle"),
					"aria-expanded": !e.collapsed,
					onClick: b
				}, [V(N, {
					name: "chevron-right",
					class: P(["h-3 w-3", { "rotate-180": e.collapsed }])
				}, null, 8, ["class"]), V(N, {
					name: "chevron-right",
					class: P(["-ml-2 h-3 w-3", { "rotate-180": e.collapsed }])
				}, null, 8, ["class"])], 10, hd)
			], 34)),
			R("div", {
				"data-component": "panel-column__groups",
				class: P(["flex flex-col flex-1 min-h-0 overflow-y-auto", [U(t)("panel-column__groups"), { "gap-0.5 bg-app p-1.5": !e.collapsed && !e.sectionPreview }]])
			}, [(F(!0), X(Y, null, Z(o.value, (n) => (F(), X(Y, { key: n.id }, [V(dd, {
				"data-content-sized": !e.collapsed && !n.collapsed && s.value.length > 1 && d(n) && !l.value,
				column: e.column,
				group: n,
				collapsed: e.collapsed,
				"icons-only": e.width < 76,
				interactions: e.interactions,
				class: P({ [U(t)("panel-column__content-sized")]: !e.collapsed && !n.collapsed && s.value.length > 1 && d(n) && !l.value }),
				style: B({ flex: f(n) })
			}, null, 8, [
				"data-content-sized",
				"column",
				"group",
				"collapsed",
				"icons-only",
				"interactions",
				"class",
				"style"
			]), !e.collapsed && !e.sectionPreview && !n.collapsed && s.value.length > 1 ? (F(), X("div", {
				key: 0,
				"data-test-part": "panel-column__row-resize",
				class: P(["flex h-1.5 shrink-0 cursor-row-resize touch-none items-center justify-center before:h-px before:w-6 before:rounded-full before:bg-edge-2 hover:bg-accent-soft hover:before:bg-accent", U(t)("panel-column__row-resize")]),
				role: "separator",
				"aria-orientation": "horizontal",
				"aria-label": U(H)("designer.panelDock.resizeGroupTitle"),
				title: U(H)("designer.panelDock.resizeGroupTitle"),
				onPointerdown: (e) => g(e, n),
				onDblclick: (e) => v(n)
			}, null, 42, gd)) : W("", !0)], 64))), 128))], 2),
			e.column.floating ? W("", !0) : (F(), X("div", {
				key: 1,
				class: P(["absolute [z-index:var(--z-index-panel-handle)] top-0 bottom-0 -left-0.75 w-1.5 cursor-col-resize hover:bg-accent", U(t)("panel-column__resize")]),
				role: "separator",
				"aria-orientation": "vertical",
				"aria-label": U(H)("designer.designerShell.resizePanelTitle"),
				title: U(H)("designer.designerShell.resizePanelTitle"),
				onPointerdown: m,
				onDblclick: h
			}, null, 42, _d)),
			e.column.floating && !e.collapsed && !e.sectionPreview ? (F(), X("div", {
				key: 2,
				"data-test-part": "panel-column__corner",
				class: P(["absolute right-0 bottom-0 w-3.5 h-3.5 [cursor:nwse-resize] [background:linear-gradient(135deg,_transparent_60%,_var(--color-edge-2)_60%)]", U(t)("panel-column__corner")]),
				title: U(H)("designer.panelDock.resizeFloatingTitle"),
				onPointerdown: y
			}, null, 42, vd)) : W("", !0)
		], 16, fd)) : W("", !0);
	}
}), [["__scopeId", "data-v-22f0e75f"]]);
function bd(e, t, n, r) {
	let i = e.getBoundingClientRect(), a = e.dataset.dockColumn, o = t.closest("[data-dock-group]"), s = Math.min(18, i.width / 4);
	if (n - i.left < s || i.right - n < s || !o) {
		let e = n < i.left + i.width / 2 ? "left" : "right";
		return {
			preview: {
				height: i.height,
				insertion: !0,
				left: e === "left" ? i.left : i.right - 4,
				top: i.top,
				width: 4
			},
			target: {
				columnId: a,
				placement: e
			}
		};
	}
	let c = t.closest("[data-dock-tab]"), l = t.closest("[data-panel-header]"), u = o.getBoundingClientRect(), d = r - u.top, f = Math.min(42, u.height / 2), p = e.dataset.dockCollapsed === "true", m = !p && d < Math.min(8, f), h = "tab";
	m || !c && !l && d < f ? h = "top" : !c && u.bottom - r < 42 && (h = "bottom");
	let g = {
		height: u.height,
		insertion: !1,
		left: u.left,
		top: u.top,
		width: u.width
	};
	if (h === "top" || h === "bottom") g.height = 4, g.top = h === "top" ? u.top : u.bottom - 4, g.insertion = !0;
	else if (c) {
		let e = c.getBoundingClientRect();
		g.left = e.left, g.top = e.top, g.width = p ? e.width : 4, g.height = p ? 4 : e.height, g.insertion = !0;
	}
	return {
		preview: g,
		target: {
			columnId: a,
			groupId: o.dataset.dockGroup,
			panelId: c?.dataset.dockTab,
			placement: h
		}
	};
}
function xd(e) {
	let t = L(null);
	function n(n, r, i, a) {
		let o = document.elementFromPoint(n, r), s = o?.closest("[data-dock-column]"), c = s?.dataset.dockColumn === e() ? null : o;
		if (s && c) {
			let e = bd(s, c, n, r);
			return t.value = e.preview, e.target;
		}
		let l = (c?.closest("[data-panel-workspace]"))?.getBoundingClientRect();
		return l && n >= l.right - 30 ? (t.value = {
			height: l.height,
			insertion: !0,
			left: l.right - 4,
			top: l.top,
			width: 4
		}, { placement: "after" }) : (t.value = null, {
			placement: "float",
			x: i,
			y: a
		});
	}
	return {
		preview: t,
		resolveTarget: n
	};
}
function Sd(e) {
	let { preview: t, resolveTarget: n } = xd(() => e.panel.drag?.columnId), r = null, i = !1;
	function a() {
		let n = r;
		r = null, n?.(), t.value = null, e.panel.cancelDrag();
	}
	function o(n, i, o, s = 0, c = "panel-resize") {
		a(), r = Ot({
			cancelOnBlur: !0,
			onCancel() {
				r = null, t.value = null, e.panel.cancelDrag();
			},
			onEnd() {
				r = null, o();
			},
			onMove(e) {
				i(e.event);
			},
			pointerId: n.pointerId,
			startPoint: {
				x: n.clientX,
				y: n.clientY
			},
			tag: c,
			target: n.currentTarget,
			threshold: s
		}).cancel;
	}
	function s(r, a) {
		if (r.button !== 0) return;
		let s = r.clientX, c = r.clientY, l = r.currentTarget, u = l.closest("[data-dock-column]"), d = l.closest("[data-dock-group]"), f = l.closest("[data-panel-surface]"), p = !a.groupId, m = f?.dataset.panelPopout === "true", h = u?.dataset.dockCollapsed === "true" && !f, g = m ? f : d;
		p ? g = u : h && a.panelId && (g = l);
		let _ = g?.getBoundingClientRect();
		if (!_) return;
		let v = _.width, y = _.height, b = Math.min(s - _.left, v), x = c - _.top;
		r.preventDefault();
		let S = !1;
		o(r, (t) => {
			S || (S = !0, e.panel.beginDrag({
				...a,
				sectionHeight: p ? void 0 : y,
				x: s,
				y: c
			}, {
				collapsed: h,
				fromPopout: m,
				height: y,
				width: v,
				x: _.left,
				y: _.top
			})), t.preventDefault();
			let r = Math.max(0, Math.min(t.clientX - b, window.innerWidth - v)), i = Math.max(0, Math.min(t.clientY - x, window.innerHeight - 180));
			e.panel.moveDrag(r, i), e.panel.updateDrag(t.clientX, t.clientY, n(t.clientX, t.clientY, r, i));
		}, () => {
			S && (i = !0, e.panel.finishDrag()), t.value = null;
		}, 5, "panel-drag");
	}
	function c(t, n) {
		t.button === 0 && (t.preventDefault(), o(t, n, () => {
			e.panel.persist();
		}));
	}
	function l(e) {
		i &&= (e.stopPropagation(), e.preventDefault(), !1);
	}
	function u() {
		i = !1;
	}
	return xe(window, "pointerdown", u, { capture: !0 }), Er(a), {
		cancel: a,
		captureClick: l,
		preview: t,
		startDrag: s,
		startResize: c
	};
}
var Cd = ["data-insertion"], wd = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "panel-dock",
	setup(e) {
		let t = u(), n = E().store().panel, i = Dr(qn, void 0), a = Sd(E().store()), { height: o, width: s } = r(), c = K(() => {
			let e = Math.max(36, s.value - 460);
			return [...n.dockedColumns].reverse().map((t) => {
				let r = t.groups.some((e) => e.panelIds.some((e) => !!n.definitions[e])), i = t.collapsed || t.width > e, a = t.width;
				return i && (a = s.value < 1100 ? 36 : t.railWidth), r && (e -= a), {
					collapsed: i,
					column: t,
					width: a
				};
			}).reverse();
		});
		function l(e) {
			let t = e.collapsed ? e.railWidth : e.width, r = n.drag?.columnId === e.id ? n.drag.sectionHeight : void 0;
			return {
				height: e.collapsed ? "auto" : `${Math.min(r ?? e.height, o.value - 32)}px`,
				left: `${Math.max(0, Math.min(e.x, s.value - t))}px`,
				top: `${Math.max(0, Math.min(e.y, o.value - 180))}px`
			};
		}
		function d(e) {
			e.target instanceof Element && !e.target.closest("[data-panel-surface], [data-dock-tab]") && n.closePopout();
		}
		function f() {
			a.cancel(), n.closePopout();
		}
		return it(K(() => n.drag ? "body, body * { cursor: grabbing !important; }" : "")), re([{
			run: f,
			shortcut: "Escape"
		}], { enabled: () => !!(n.drag || n.openGroupId) }), xe(window, "pointerdown", d, { capture: !0 }), xe(window, "blur", f), xe(window, "resize", n.closePopout), xe(window, "click", a.captureClick, { capture: !0 }), (e, r) => (F(), X("div", {
			class: P(["relative flex shrink-0 min-h-0 h-full [z-index:var(--z-index-panel-dock)] min-w-1.5", U(t)("panel-dock")]),
			"data-panel-workspace": ""
		}, [(F(!0), X(Y, null, Z(c.value, (e) => (F(), I(yd, {
			key: e.column.id,
			column: e.column,
			collapsed: e.collapsed,
			width: e.width,
			interactions: U(a)
		}, null, 8, [
			"column",
			"collapsed",
			"width",
			"interactions"
		]))), 128)), (F(), I(Ur, { to: U(i)?.() ?? "body" }, [R("div", { class: P(["fixed pointer-events-none [inset:0] [z-index:var(--z-index-panel-float)]", U(t)("panel-dock__floating-layer")]) }, [(F(!0), X(Y, null, Z(U(n).floatingColumns, (e) => (F(), I(yd, {
			key: e.id,
			"data-part": "panel-dock__floating",
			"data-dragging": U(n).drag?.columnId === e.id,
			class: P([U(t)("panel-dock__floating"), { [U(t)("panel-dock__floating--dragging")]: U(n).drag?.columnId === e.id }]),
			style: B(l(e)),
			column: e,
			collapsed: e.collapsed,
			width: e.collapsed ? e.railWidth : e.width,
			"section-preview": U(n).drag?.columnId === e.id && U(n).drag.sectionHeight !== void 0,
			interactions: U(a)
		}, null, 8, [
			"data-dragging",
			"class",
			"style",
			"column",
			"collapsed",
			"width",
			"section-preview",
			"interactions"
		]))), 128)), U(a).preview.value ? (F(), X("div", {
			key: 0,
			"data-component": "panel-dock__preview",
			"data-insertion": U(a).preview.value.insertion,
			class: P(["fixed pointer-events-none", [U(t)("panel-dock__preview"), { [U(t)("panel-dock__preview--insertion")]: U(a).preview.value.insertion }]]),
			style: B({
				left: `${U(a).preview.value.left}px`,
				top: `${U(a).preview.value.top}px`,
				width: `${U(a).preview.value.width}px`,
				height: `${U(a).preview.value.height}px`
			})
		}, null, 14, Cd)) : W("", !0)], 2)], 8, ["to"]))], 2));
	}
}), [["__scopeId", "data-v-edc1dd67"]]), Td = ["title"], Ed = /* @__PURE__ */ G({
	__name: "status-hints",
	setup(e) {
		let t = E(), n = t.store(), r = K(() => hn(n.view.activeTool, t.elements)), i = K(() => {
			for (let e of t.extensions.list("designer.tool.hint")) {
				let t = e.value();
				if (t !== void 0) return t;
			}
			if (r.value?.kind === "hand" || n.view.spacePanning) return H("designer.optionsBar.panHint");
			if (r.value?.kind === "element") {
				let e = r.value;
				return e.hints?.create ?? H(n.view.settings.clickToCreate ? "designer.optionsBar.continuousPlacementHint" : "designer.optionsBar.drawingHint", { toolName: t.elements.get(e.elementType ?? "")?.label ?? e.label });
			}
			return r.value?.kind === "select" ? a() : "";
		});
		function a() {
			let e = n.selection.nodes;
			if (e.length === 0) return "";
			if (e.every((e) => e.locked)) return H("designer.statusHints.lockedSelection");
			if (e.length > 1) return H("designer.statusHints.multipleSelection");
			let r = e[0], i = t.elements.get(r.type), a = hn(`element:${r.type}`, t.elements)?.hints?.edit;
			if (a !== void 0 && r.visible && !n.view.settings.previewWithData) return a;
			let o = H(Vr(r) ? "designer.statusHints.pointSelection" : "designer.statusHints.selection");
			return i?.inlineEditable && i.inlineEditable.enabled?.(r) !== !1 && !n.view.settings.previewWithData ? `${o} ${H("designer.statusHints.inlineEdit")}` : o;
		}
		return (e, t) => i.value ? (F(), X("span", {
			key: 0,
			class: "min-w-0 truncate",
			title: i.value
		}, q(i.value), 9, Td)) : W("", !0);
	}
});
function Dd(e, t) {
	let n, r, i = 0, a = !1, o = t.onShiftChange, s = o ? xe(window, ["keydown", "keyup"], (e) => {
		e.key !== "Shift" || e.repeat || a || (l(), o(e.shiftKey), n && (r = n, l()));
	}) : void 0, c = J(() => [
		e.view.zoom,
		e.view.scrollPos.left,
		e.view.scrollPos.top
	], async () => {
		await Lr(), !a && n && (r = n, l("drag.viewport"));
	}, { flush: "post" });
	function l(n = "drag.move") {
		i &&= (cancelAnimationFrame(i), 0);
		let o = r;
		if (r = void 0, o && !a) try {
			t.onMove?.(o);
		} catch (r) {
			Jt(e).capture(r, {
				metadata: { tag: t.tag },
				source: n
			});
		}
	}
	function u() {
		l(), a = !0, c(), s?.();
	}
	return Ot({
		...t,
		onCancel(e, n) {
			u(), t.onCancel ? t.onCancel(e, n) : t.onEnd?.(e, n);
		},
		onEnd(e, n) {
			u(), t.onEnd?.(e, n);
		},
		onMove(e) {
			n = e, r = e, i ||= requestAnimationFrame(() => {
				i = 0, l();
			});
		}
	});
}
function Od(e, t) {
	return [...e.view.pageLayouts].reverse().find((e) => or({
		height: e.page.height,
		width: e.page.width,
		x: e.x,
		y: e.y
	}, t))?.page;
}
function kd(e, t, n) {
	let r = t.shiftKey;
	r || e.selection.clear();
	let i = r ? [...e.selection.ids] : [], a = t.currentTarget, o = e.view.zoom, s = Jn(e).contentMmFromClient(t.clientX, t.clientY, o), c = n, l, u = /* @__PURE__ */ new Set();
	Dd(e, {
		onEnd(t, n) {
			e.view.setMarquee(null), !n && !r && e.selection.clear(), c && e.scope.activate(c.id);
		},
		onMove(t) {
			let n = Jn(e).contentMmFromClient(t.event.clientX, t.event.clientY, e.view.zoom);
			if (c ||= Od(e, n), !c) return;
			let a = e.view.originOf(c.id);
			if (!a) return;
			if (!l) {
				let t = Gt(a, s);
				l = {
					x: Tn(t.x, 0, c.width),
					y: Tn(t.y, 0, c.height)
				};
				for (let t of e.element.getByPage(c.id, {
					locked: !1,
					visible: !0
				})) u.add(t.id);
			}
			let o = Gt(a, n), d = Tn(o.x, 0, c.width), f = Tn(o.y, 0, c.height), p = {
				height: Math.abs(f - l.y),
				width: Math.abs(d - l.x),
				x: Math.min(l.x, d),
				y: Math.min(l.y, f)
			};
			e.view.setMarquee({
				pageId: c.id,
				rect: p
			});
			let m = (e.canvas.getPage(c.id) ?? c).elements.filter((e) => {
				if (!u.has(e.id)) return !1;
				if (Vr(e)) return tn(e.points, p);
				let t = dr({
					height: e.height,
					width: e.width,
					x: e.x,
					y: e.y
				}, e.rotation);
				return Qn(p, t);
			}).map((e) => e.id);
			e.selection.set(r ? [.../* @__PURE__ */ new Set([...i, ...m])] : m);
		},
		pointerId: t.pointerId,
		startClient: {
			x: t.clientX,
			y: t.clientY
		},
		startPoint: s,
		tag: "marquee",
		target: a,
		threshold: 3
	});
}
var Ad = {
	key: 0,
	class: "pointer-events-none absolute inset-0 z-canvas-guide overflow-hidden"
}, jd = /* @__PURE__ */ G({
	__name: "guides-drag-layer",
	setup(e) {
		let t = E().store(), n = K(() => {
			let e = t.view.draggingGuide;
			if (!e || !t.view.settings.showGuides) return null;
			let n = t.view.getLayout(e.pageId), r = t.guide.get(e.pageId, e.guideId);
			return !r || !n ? null : {
				guide: r,
				layout: n
			};
		}), r = K(() => {
			let e = n.value;
			return e ? e.guide.orientation === "horizontal" ? {
				height: "1px",
				left: "0",
				right: "0",
				top: `${(e.layout.y + e.guide.position) * t.view.pxPerMm}px`
			} : {
				bottom: "0",
				left: `${(e.layout.x + e.guide.position) * t.view.pxPerMm}px`,
				top: "0",
				width: "1px"
			} : {};
		});
		return (e, t) => n.value ? (F(), X("div", Ad, [R("div", {
			class: "absolute bg-guide/80",
			style: B(r.value)
		}, null, 4)])) : W("", !0);
	}
});
function Md(e) {
	return 4 / (96 / 25.4 * e);
}
function Nd(e, t, n) {
	let r = [
		0,
		e.width / 2,
		e.width
	], i = [
		0,
		e.height / 2,
		e.height
	];
	if (n.snapMargins) {
		let t = jn(e);
		r.push(t.x, t.x + t.width), i.push(t.y, t.y + t.height);
	}
	if (n.snapElements) for (let a of e.elements) {
		if (t.has(a.id) || !a.visible) continue;
		let e = fn(a, n.elements);
		r.push(e.x, e.x + e.width / 2, e.x + e.width), i.push(e.y, e.y + e.height / 2, e.y + e.height);
	}
	if (n.snapGuides) for (let t of e.guides) t.orientation === "vertical" ? r.push(t.position) : i.push(t.position);
	return {
		h: i,
		v: r
	};
}
function Pd(e, t, n) {
	let r = null;
	for (let i of e) for (let e of t) {
		let t = Math.abs(e - i);
		t <= n && (!r || t < r.dist) && (r = {
			delta: e - i,
			dist: t,
			line: e
		});
	}
	return r;
}
function Fd(e, t) {
	return !t.snapGrid || t.gridSize <= 0 ? 0 : Math.round(e / t.gridSize) * t.gridSize - e;
}
function Id(e, t, n, r) {
	let { h: i, v: a } = Nd(t, n, r), o = Pd([
		e.x,
		e.x + e.width / 2,
		e.x + e.width
	], a, r.threshold), s = Pd([
		e.y,
		e.y + e.height / 2,
		e.y + e.height
	], i, r.threshold), c = o?.delta ?? 0, l = s?.delta ?? 0, u = o ? [o.line] : [], d = s ? [s.line] : [];
	return o || (c = Fd(e.x, r)), s || (l = Fd(e.y, r)), {
		dx: c,
		dy: l,
		hLines: d,
		vLines: u
	};
}
function Ld(e, t, n, r, i) {
	let { h: a, v: o } = Nd(n, r, i), s = e === null ? null : Pd([e], o, i.threshold), c = t === null ? null : Pd([t], a, i.threshold);
	return {
		dx: s?.delta ?? (e === null ? 0 : Fd(e, i)),
		dy: c?.delta ?? (t === null ? 0 : Fd(t, i)),
		hLines: c ? [c.line] : [],
		vLines: s ? [s.line] : []
	};
}
function Rd(e, t, n, r) {
	let { h: i, v: a } = Nd(t, n, r), o = Pd([e.x], a, r.threshold), s = Pd([e.y], i, r.threshold);
	return {
		hLines: s ? [s.line] : [],
		vLines: o ? [o.line] : [],
		x: Br(e.x + (o?.delta ?? Fd(e.x, r))),
		y: Br(e.y + (s?.delta ?? Fd(e.y, r)))
	};
}
function zd(e, t) {
	let n = /* @__PURE__ */ new Set();
	function r(r) {
		return Rd(r, e.canvas.getPage(t.id) ?? t, n, {
			elements: br(e),
			gridSize: e.view.settings.gridSize,
			snapElements: e.view.settings.snapToElements,
			snapGrid: e.view.settings.snapToGrid,
			snapGuides: e.view.settings.snapToGuides,
			snapMargins: e.view.settings.snapToMargins,
			threshold: Md(e.view.zoom)
		});
	}
	function i(n) {
		let i = r(n), a = {
			x: Tn(i.x, 0, t.width),
			y: Tn(i.y, 0, t.height)
		};
		return e.view.setSnapLines({
			h: a.y === i.y ? i.hLines : [],
			pageId: t.id,
			v: a.x === i.x ? i.vLines : []
		}), a;
	}
	function a() {
		e.view.setSnapLines({
			h: [],
			pageId: "",
			v: []
		});
	}
	return {
		clearSnapLines: a,
		snapEnd: i,
		snapPoint: r
	};
}
function Bd(e, t, n, r, i) {
	let a = i.elements, o = a.getCreatable(n);
	if (!o) return;
	let s = t.currentTarget, c = e.view.originOf(r.id);
	if (!c) return;
	let l = (e) => Gt(c, e), u = e.view.zoom, d = Jn(e).contentMmFromClient(t.clientX, t.clientY, u), { clearSnapLines: f, snapEnd: p, snapPoint: m } = zd(e, r), h = m({
		x: Tn(l(d).x, 0, r.width),
		y: Tn(l(d).y, 0, r.height)
	}), g = Tn(h.x, 0, r.width), _ = Tn(h.y, 0, r.height), v = {
		x: g,
		y: _
	}, y = !1, b = () => {};
	function x() {
		y = !0, b(), f(), e.element.cancelDraft();
	}
	function S(t) {
		let r = Dd(e, t);
		function o() {
			a.getCreatable(n) || (y = !0, r.cancel());
		}
		b = i.events.on("elements:changed", o), o();
	}
	let C = o.pointBased;
	if (C) {
		let i = (t) => {
			e.element.draftElement || e.element.setDraft(e.element.createToolElement(n), r.id);
			let i = e.element.draftElement;
			i && e.element.updateDraft(Vt(i, t));
		};
		S({
			onCancel: x,
			onEnd(t, r) {
				if (b(), !y) {
					if (f(), !r) {
						if (!e.view.settings.clickToCreate) return;
						let t = {
							x: g + o.defaultSize.width,
							y: _
						};
						i(C.createPoints(v, t));
					}
					e.element.commitDraft() && Wn(e, n);
				}
			},
			onMove(t) {
				if (y) return;
				let n = Jn(e).contentMmFromClient(t.event.clientX, t.event.clientY, e.view.zoom), a = {
					x: Tn(l(n).x, 0, r.width),
					y: Tn(l(n).y, 0, r.height)
				};
				a = p(a), a = t.event.shiftKey ? cr(v, a, 45) : qr(v, a, Md(e.view.zoom)), e.view.setSnapLines({
					h: e.view.snapLines.h.filter((e) => e === a.y),
					pageId: r.id,
					v: e.view.snapLines.v.filter((e) => e === a.x)
				}), i(C.createPoints(v, a));
			},
			pointerId: t.pointerId,
			startClient: {
				x: t.clientX,
				y: t.clientY
			},
			startPoint: d,
			tag: "create",
			target: s,
			threshold: 3
		});
		return;
	}
	let w = (t, i, a, o) => {
		if (e.element.draftElement) e.element.updateDraft({
			height: Br(Math.max(o, 1)),
			width: Br(Math.max(a, 1)),
			x: Br(t),
			y: Br(i)
		});
		else {
			let s = e.element.createToolElement(n);
			Object.assign(s, {
				height: Br(Math.max(o, 1)),
				width: Br(Math.max(a, 1)),
				x: Br(t),
				y: Br(i)
			}), e.element.setDraft(s, r.id);
		}
	};
	S({
		onCancel: x,
		onEnd(t, i) {
			if (b(), !y) {
				if (f(), !i) {
					if (!e.view.settings.clickToCreate) return;
					let t = e.element.createToolElement(n);
					t.x = Br(Tn(g - t.width / 2, 0, Math.max(0, r.width - t.width))), t.y = Br(Tn(_ - t.height / 2, 0, Math.max(0, r.height - t.height))), e.element.setDraft(t, r.id);
				}
				e.element.commitDraft(i ? v : void 0) && Wn(e, n);
			}
		},
		onMove(t) {
			if (y) return;
			let n = Jn(e).contentMmFromClient(t.event.clientX, t.event.clientY, e.view.zoom), i = p({
				x: Tn(l(n).x, 0, r.width),
				y: Tn(l(n).y, 0, r.height)
			});
			w(Math.min(g, i.x), Math.min(_, i.y), Math.abs(i.x - g), Math.abs(i.y - _));
		},
		pointerId: t.pointerId,
		startClient: {
			x: t.clientX,
			y: t.clientY
		},
		startPoint: d,
		tag: "create",
		target: s,
		threshold: 3
	});
}
function Vd(e, t) {
	let n = new Map(t.elements.map((e) => [e.id, wn(e)])), r = /* @__PURE__ */ new Set();
	return (t) => {
		let i = [];
		for (let e of r) {
			let t = n.get(e);
			t && i.push({
				geometry: t,
				id: e
			});
		}
		let a = e.element.updateMany(t, { transient: !0 }, i);
		return r = new Set(a.map((e) => e.id)), a;
	};
}
function Hd(e, t, n, r, i = {}) {
	let a = t.shiftKey, o = e.selection.has(n), s = i.selectKeyObject !== !1 && o && !a && !t.altKey && e.selection.ids.length > 1;
	o || e.selection.set([n], a && e.selection.ids.length > 0);
	let c = t.currentTarget, l = Jn(e).contentMmFromClient(t.clientX, t.clientY, e.view.zoom), u = e.selection.unlockedNodes, d = u.map((e) => ({
		geometry: wn(e),
		id: e.id
	}));
	if (d.length === 0) return;
	let f = d, p = br(e), m = f.map((e) => e.id), h = new Map((e.canvas.getPage(r.id) ?? r).elements.map((e) => [e.id, e])), g = [], _ = Xt(u.map((e) => h.get(e.id) ?? e), p);
	if (!_) return;
	let v = new Set(d.map((e) => e.id)), y = Vd(e, r);
	function b(t, n) {
		if (g.length > 0 && !t.event.altKey) {
			let t = g.flatMap((t, n) => {
				let r = e.element.get(t), i = f[n];
				return !r || !i ? [] : [{
					id: i.id,
					patch: wn(r)
				}];
			});
			e.element.removeIds(g, { transient: !0 }), y(t), e.selection.set(m);
		}
		n && (e.view.setSnapLines({
			h: [],
			pageId: "",
			v: []
		}), e.history.commit());
	}
	Dd(e, {
		onCancel: b,
		onEnd(t, r) {
			b(t, r), !r && s && (e.selection.setKeyId(n), e.view.updateAlignPanel({ target: "key" })), r || i.onClick?.();
		},
		onMove(t) {
			if (t.event.altKey && g.length === 0) {
				y(f.map(({ geometry: e, id: t }) => ({
					id: t,
					patch: e
				}))), e.element.duplicate(m, 0, { transient: !0 }), g = [...e.selection.ids], d = g.flatMap((e, t) => {
					let n = f[t];
					return n ? [{
						geometry: n.geometry,
						id: e
					}] : [];
				});
				for (let e of g) v.add(e);
				y = Vd(e, r);
			}
			let n = Jn(e).contentMmFromClient(t.event.clientX, t.event.clientY, e.view.zoom), i = n.x - t.startPoint.x, a = n.y - t.startPoint.y, o = {
				height: _.height,
				width: _.width,
				x: _.x + i,
				y: _.y + a
			}, s = Id(o, e.canvas.getPage(r.id) ?? r, v, {
				elements: p,
				gridSize: e.view.settings.gridSize,
				snapElements: e.view.settings.snapToElements,
				snapGrid: e.view.settings.snapToGrid,
				snapGuides: e.view.settings.snapToGuides,
				snapMargins: e.view.settings.snapToMargins,
				threshold: Md(e.view.zoom)
			}), c = i + s.dx, l = a + s.dy;
			y(d.map((e) => ({
				id: e.id,
				patch: kr(e.geometry, c, l)
			})));
			let u = e.canvas.getPage(r.id), h = Xt(e.selection.unlockedNodes.map((e) => u?.elements.find((t) => t.id === e.id) ?? e), p);
			e.view.setSnapLines({
				h: h && Math.abs(h.y - (o.y + s.dy)) < .02 ? s.hLines : [],
				pageId: r.id,
				v: h && Math.abs(h.x - (o.x + s.dx)) < .02 ? s.vLines : []
			});
		},
		pointerId: t.pointerId,
		startClient: {
			x: t.clientX,
			y: t.clientY
		},
		startPoint: l,
		tag: "move",
		target: c,
		threshold: 2
	});
}
async function Ud(e, t, n, r) {
	let i = e.elements.list().find((e) => e.fileDrop?.accepts(t));
	if (!i?.fileDrop) return;
	let a = e.store(), o = a.document.data, s = await i.fileDrop.create({
		file: t,
		imageLoadTimeoutMs: a.config.data.rendering.imageLoadTimeoutMs,
		page: n,
		point: r
	}), c = a.page.has(n.id) || a.template.isContainer(n.id);
	a.document.data === o && c && e.elements.get(i.type) === i && a.element.add(i.type, {
		...s,
		props: {
			...i.createProps(),
			...s.props
		}
	}, n.id);
}
function Wd(e, t, n = 0) {
	return {
		transform: `scale(${e / Kn}) translateY(calc(-100% - ${n}px))`,
		transformOrigin: `top ${t}`
	};
}
var Gd = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "variable-text-canvas-editor",
	props: /*@__PURE__*/ Xn({ pxPerMm: {} }, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ Xn(["leave"], ["update:modelValue"]),
	setup(e, { expose: t, emit: n }) {
		let r = u(), i = n, a = Nn(e, "modelValue"), o = L();
		function s() {
			o.value?.focusEnd();
		}
		return t({ focusEnd: s }), (t, n) => (F(), I(St, {
			ref_key: "fieldRef",
			ref: o,
			modelValue: a.value,
			"onUpdate:modelValue": n[0] ||= (e) => a.value = e,
			"data-part": "variable-text-canvas-editor",
			"actions-style": U(Wd)(e.pxPerMm, "right"),
			class: P(U(r)("variable-text-canvas-editor")),
			inline: "",
			multiline: "",
			onLeave: n[1] ||= (e) => i("leave")
		}, null, 8, [
			"modelValue",
			"actions-style",
			"class"
		]));
	}
}), [["__scopeId", "data-v-d3a59a3e"]]), Kd = /* @__PURE__ */ G({
	__name: "inline-text-editor",
	props: /*@__PURE__*/ Xn({
		pxPerMm: {},
		variableText: { type: Boolean }
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ Xn(["leave"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let n = t, r = Nn(e, "modelValue"), i = L(), a = L();
		function o() {
			let e = i.value;
			if (e) {
				e.focus();
				let t = e.value.length;
				e.setSelectionRange(t, t), e.scrollTop = e.scrollHeight;
			} else a.value?.focusEnd();
		}
		return Bn(o), (t, o) => e.variableText ? (F(), I(Gd, {
			key: 0,
			ref_key: "variableRef",
			ref: a,
			modelValue: r.value,
			"onUpdate:modelValue": o[0] ||= (e) => r.value = e,
			"px-per-mm": e.pxPerMm,
			onLeave: o[1] ||= (e) => n("leave")
		}, null, 8, ["modelValue", "px-per-mm"])) : ur((F(), X("textarea", {
			key: 1,
			ref_key: "textareaRef",
			ref: i,
			"onUpdate:modelValue": o[2] ||= (e) => r.value = e,
			class: "absolute inset-0 h-full w-full resize-none overflow-hidden border border-dashed border-accent bg-transparent outline-none",
			spellcheck: "false",
			onBlur: o[3] ||= (e) => n("leave")
		}, null, 544)), [[xr, r.value]]);
	}
});
function qd(e, t) {
	let n = {
		height: `${e.height * t}px`,
		left: "0px",
		top: "0px",
		transform: `translate3d(${e.x * t}px, ${e.y * t}px, 0)`,
		width: `${e.width * t}px`
	};
	return e.rotation && (n.transform += ` rotate(${e.rotation}deg)`), n;
}
var Jd = [
	"data-element-id",
	"data-draft-frame",
	"data-interaction-disabled"
], Yd = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "element-renderer",
	props: {
		index: {},
		isDraft: { type: Boolean },
		node: {},
		page: {},
		pxPerMm: {},
		readOnly: { type: Boolean }
	},
	setup(e) {
		let t = u(), n = e, r = E(), i = r.store(), a = O(() => n.node.type), o = K(() => a.value?.previewComponent), s = K(() => i.selection.editingId === n.node.id), c = K(() => Array.isArray(n.node.points) && n.node.points.length > 0), l = K(() => !n.node.locked && !n.isDraft && !n.readOnly && (i.view.activeTool === "select" || i.selection.has(n.node.id) || vn(i.view.activeTool, n.node.type, i.view.settings.previewWithData, r.elements))), d = K(() => l.value && i.selection.hoverId === n.node.id && i.view.activeTool === "select"), f = K(() => i.selection.has(n.node.id)), p = ze((e) => {
			let t = bn(n.node, e);
			return {
				height: `${t.height * n.pxPerMm}px`,
				left: `${(t.x - n.node.x) * n.pxPerMm}px`,
				top: `${(t.y - n.node.y) * n.pxPerMm}px`,
				width: `${t.width * n.pxPerMm}px`
			};
		}), m = K(() => {
			let e = {
				...qd(n.node, n.pxPerMm),
				zIndex: n.isDraft ? "var(--z-index-canvas-draft)" : String(n.index + 1)
			};
			return n.node.opacity < 1 && (e.opacity = String(n.node.opacity)), e;
		}), h = K(() => {
			let e = [];
			return n.isDraft && !c.value && e.push(t("element-draft-frame")), l.value ? c.value ? e.push("pointer-events-none") : e.push(i.view.activeTool === "hand" ? "cursor-grab" : "cursor-move") : e.push(t("element-interaction-disabled"), "pointer-events-none"), e;
		}), g = L(), _ = L(""), v = "", y, b = K(() => ({
			...a.value?.inlineEditable?.style?.(n.node, n.pxPerMm),
			background: "transparent"
		}));
		function x(e) {
			l.value && e.button === 0 && !s.value && i.view.activeTool !== "hand" && (e.stopPropagation(), i.scope.activate(n.page.id), Hd(i, e, n.node.id, n.page));
		}
		function S() {
			l.value && (i.view.activeTool === "select" || vn(i.view.activeTool, n.node.type, i.view.settings.previewWithData, r.elements)) && a.value?.inlineEditable && !i.view.settings.previewWithData && D();
		}
		function C(e) {
			l.value && (i.selection.has(n.node.id) || i.selection.set([n.node.id]), i.scope.activate(n.page.id), i.ui.openContextMenu(e.clientX, e.clientY, te()));
		}
		function w() {
			l.value && i.view.activeTool === "select" && i.selection.setHoverId(n.node.id);
		}
		function T() {
			i.selection.hoverId === n.node.id && i.selection.setHoverId(null);
		}
		function D() {
			let e = a.value?.inlineEditable, t = i.element.get(n.node.id);
			e && t && e.enabled?.(t) !== !1 && (y = t, v = e.read(t), _.value = v, i.selection.setEditingId(n.node.id));
		}
		function ee() {
			y = void 0, _.value = v, i.selection.setEditingId(null);
		}
		function k() {
			let e = y;
			if (y = void 0, !e || i.element.get(e.id) !== e) return;
			let t = _.value;
			if (t === v) return;
			let n = a.value?.inlineEditable;
			n && i.element.update(e.id, n.write(e, t));
		}
		function A() {
			k(), s.value && i.selection.setEditingId(null);
		}
		function te() {
			function e(e, ...t) {
				r.commands.dispatch(e, ...t);
			}
			let t = i.selection.ids.length > 1 ? [Ve(), ...yt(r.commands, [{
				args: [n.node.id],
				id: "element.setKeyObject"
			}, "element.clearKeyObject"], e)] : [];
			return [
				...yt(r.commands, [
					"element.openSettings",
					"edit.copy",
					"edit.cut",
					"edit.delete"
				], e),
				...t,
				Ve(),
				...j(),
				Ve(),
				...yt(r.commands, [
					"element.bringFront",
					"element.bringForward",
					"element.sendBackward",
					"element.sendBack"
				], e),
				Ve(),
				...yt(r.commands, [
					"element.toggleLock",
					"element.toggleVisibility",
					"edit.duplicate"
				], e)
			];
		}
		function j() {
			function e(e, ...t) {
				r.commands.dispatch(e, ...t);
			}
			let t = i.followBlock.selected;
			if (t) return yt(r.commands, [{
				args: [t.id],
				id: "data.editFollow"
			}, { id: "data.removeFollowMembers" }], e);
			if (i.followBlock.getByElements(i.selection.ids).length > 0) return yt(r.commands, ["data.removeFollowMembers", "data.joinFollow"], e);
			let n = i.repeatGroup.selected;
			if (n) return yt(r.commands, [{
				args: [n.id],
				id: "data.editRepeatGroup",
				label: H("designer.elementRenderer.repeatGroupSettingsLabel", { groupName: n.name })
			}, {
				args: [n.id],
				id: "data.removeRepeatGroup"
			}], e);
			let a = i.repeatGroup.getByElements(i.selection.ids)[0];
			return a && i.selection.ids.length === 1 ? yt(r.commands, [{
				args: [a.id],
				id: "data.editRepeatGroup",
				label: H("designer.elementRenderer.memberGroupSettingsLabel", { groupName: a.name })
			}, {
				args: [a.id],
				id: "data.removeRepeatGroup"
			}], e) : yt(r.commands, [
				"data.createRepeat",
				"data.createFollow",
				"data.joinFollow"
			], e);
		}
		return re([{
			run: ee,
			shortcut: "Escape"
		}, {
			run: A,
			shortcut: "Ctrl+Enter"
		}], {
			enabled: s,
			isolate: !0,
			target: g
		}), J(s, (e) => {
			e ? D() : k();
		}), (n, r) => e.node.visible ? (F(), X("div", {
			key: 0,
			"data-element-id": e.node.id,
			"data-component": "element-renderer",
			"data-draft-frame": e.isDraft && !c.value,
			"data-interaction-disabled": !l.value,
			class: P(["absolute", h.value]),
			style: B(m.value),
			onPointerdown: x,
			onDblclick: Q(S, ["stop"]),
			onContextmenu: Q(C, ["stop", "prevent"]),
			onPointerenter: w,
			onPointerleave: T
		}, [
			o.value && !s.value ? (F(), I(cn(o.value), {
				key: 0,
				node: e.node,
				page: e.page,
				"px-per-mm": e.pxPerMm,
				hovered: d.value,
				selected: f.value
			}, null, 8, [
				"node",
				"page",
				"px-per-mm",
				"hovered",
				"selected"
			])) : W("", !0),
			s.value ? (F(), X("div", {
				key: 1,
				ref_key: "editHostRef",
				ref: g,
				class: "absolute inset-0",
				onPointerdown: r[1] ||= Q(() => {}, ["stop"]),
				onDblclick: r[2] ||= Q(() => {}, ["stop"])
			}, [V(Kd, {
				modelValue: _.value,
				"onUpdate:modelValue": r[0] ||= (e) => _.value = e,
				"variable-text": U(a)?.inlineEditable?.variableText,
				"px-per-mm": e.pxPerMm,
				style: B(b.value),
				onLeave: A
			}, null, 8, [
				"modelValue",
				"variable-text",
				"px-per-mm",
				"style"
			])], 544)) : W("", !0),
			d.value && !c.value && !f.value ? (F(), X("div", {
				key: 2,
				"data-test-part": "element-renderer__hover",
				class: P(["pointer-events-none absolute outline outline-1 outline-accent/60 -outline-offset-1", U(t)("element-renderer__hover")]),
				style: B(U(p))
			}, null, 6)) : W("", !0)
		], 46, Jd)) : W("", !0);
	}
}), [["__scopeId", "data-v-2dd9f1e1"]]);
function Xd(e, t) {
	return {
		left: `${e.x * t}px`,
		top: `${e.y * t}px`,
		...Wd(t, "left", 2)
	};
}
var Zd = [
	"title",
	"onPointerdown",
	"onContextmenu"
], Qd = { class: "min-w-0 truncate whitespace-nowrap" }, $d = /* @__PURE__ */ G({
	__name: "follow-overlay",
	props: {
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = u(), n = e, r = E(), i = ze((e) => r.store().followBlock.getByPage(n.page.id).map((t) => ({
			block: t,
			bounds: Xt(n.page.elements.filter((e) => t.elementIds.includes(e.id)), e)
		})));
		function a(e) {
			let t = Yt(r.store().document.data, e.pageId, e.target), i = new Set(t?.elementIds ?? []);
			return n.page.elements.filter((e) => i.has(e.id));
		}
		function o(e) {
			return Yt(r.store().document.data, e.pageId, e.target)?.name ?? H("designer.followBlock.missingTarget");
		}
		function s(e) {
			return e.elementIds.some((e) => r.store().selection.has(e));
		}
		function c(e) {
			function t(e, ...t) {
				r.commands.dispatch(e, ...t);
			}
			return yt(r.commands, [{
				args: [e.id],
				id: "data.editFollow",
				label: H("designer.followBlock.groupSettingsTitle")
			}, {
				args: [e.id],
				id: "data.removeFollow",
				label: H("designer.followBlock.cancelGroupTitle")
			}], t);
		}
		function l(e, t) {
			e.preventDefault(), e.stopPropagation(), r.store().ui.openContextMenu(e.clientX, e.clientY, c(t));
		}
		function d(e, t) {
			if (e.button !== 0 || r.store().view.activeTool !== "select") return;
			let i = r.store();
			if (i.element.getMany(t.elementIds).some((e) => e.locked)) return;
			i.scope.activate(n.page.id), i.selection.set([...t.elementIds]);
			let a = t.elementIds[0];
			a && Hd(i, e, a, n.page, { selectKeyObject: !1 });
		}
		return (n, r) => (F(!0), X(Y, null, Z(U(i), ({ block: n, bounds: i }) => (F(), X(Y, { key: n.id }, [
			i ? (F(), X("div", {
				key: 0,
				class: P(["pointer-events-none absolute border-dashed", [U(t)("follow-overlay__bounds"), s(n) ? "z-canvas-selection-member border-2 border-accent" : "z-canvas-repeat border border-follow/60"]]),
				style: B({
					left: `${i.x * e.pxPerMm}px`,
					top: `${i.y * e.pxPerMm}px`,
					width: `${i.width * e.pxPerMm}px`,
					height: `${i.height * e.pxPerMm}px`
				})
			}, null, 6)) : W("", !0),
			(F(!0), X(Y, null, Z(s(n) ? a(n) : [], (t) => (F(), X("div", {
				key: t.id,
				class: "pointer-events-none absolute z-canvas-repeat outline outline-2 outline-warning",
				style: B({
					left: `${t.x * e.pxPerMm}px`,
					top: `${t.y * e.pxPerMm}px`,
					width: `${t.width * e.pxPerMm}px`,
					height: `${t.height * e.pxPerMm}px`,
					transform: `rotate(${t.rotation}deg)`
				})
			}, null, 4))), 128)),
			i ? (F(), X("div", {
				key: 1,
				class: P(["cursor-move absolute z-canvas-repeat-label flex h-4.5 max-w-90 items-center gap-1 rounded-sm bg-follow px-1.5 text-caption text-on-follow", U(t)("follow-overlay__badge")]),
				style: B(U(Xd)(i, e.pxPerMm)),
				title: `${n.name} · ${U(H)("designer.followBlock.targetBadge", { name: o(n) })} — ${U(H)("designer.followBlock.selectGroupTitle")}`,
				onPointerdown: Q((e) => d(e, n), ["stop"]),
				onClick: r[0] ||= Q(() => {}, ["stop"]),
				onContextmenu: Q((e) => l(e, n), ["stop", "prevent"])
			}, [V(N, {
				name: "link",
				class: "h-3 w-3 shrink-0"
			}), R("span", Qd, q(U(H)("designer.followBlock.groupBadge", {
				group: n.name,
				target: o(n)
			})), 1)], 46, Zd)) : W("", !0)
		], 64))), 128));
	}
});
function ef(e, t, n, r, i = {}) {
	if (e.view.settings.guidesLocked) return;
	let a = t.currentTarget, o = e.view.originOf(n.id);
	if (!o) return;
	let s = e.view.zoom, c = r.orientation === "horizontal", l = c ? n.height : n.width;
	e.view.setDraggingGuide({
		guideId: r.id,
		pageId: n.id
	}), Dd(e, {
		onEnd(t, a) {
			if (e.view.setDraggingGuide(null), i.discardIfUnmoved && !a) {
				e.guide.remove(n.id, r.id, { transient: !0 });
				return;
			}
			let o = e.guide.get(n.id, r.id);
			o && (o.position < 0 || o.position > l) ? e.guide.remove(n.id, r.id, { transient: !0 }) : o && e.guide.move(n.id, r.id, Tn(o.position, 0, l), { transient: !0 }), e.history.commit();
		},
		onMove(t) {
			let i = Jn(e).contentMmFromClient(t.event.clientX, t.event.clientY, e.view.zoom), a = Gt(o, i), s = c ? a.y : a.x;
			t.event.shiftKey && e.view.settings.gridSize > 0 && (s = Math.round(s / e.view.settings.gridSize) * e.view.settings.gridSize), e.guide.move(n.id, r.id, s, { transient: !0 });
		},
		pointerId: t.pointerId,
		startClient: {
			x: t.clientX,
			y: t.clientY
		},
		startPoint: Jn(e).contentMmFromClient(t.clientX, t.clientY, s),
		tag: "guide",
		target: a,
		threshold: 1
	});
}
var tf = {
	key: 0,
	class: "pointer-events-none absolute inset-0 z-canvas-guide overflow-hidden"
}, nf = [
	"data-guide-id",
	"title",
	"onPointerdown",
	"onDblclick",
	"onContextmenu"
], rf = /* @__PURE__ */ G({
	__name: "guides-layer",
	props: {
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = e, n = E().store(), { commands: r } = E();
		function i(e) {
			let r = n.view.draggingGuide, i = n.view.settings.guidesLocked;
			return {
				"cursor-default": i,
				"cursor-ew-resize": !i && e.orientation === "vertical",
				"cursor-ns-resize": !i && e.orientation === "horizontal",
				invisible: r?.pageId === t.page.id && r.guideId === e.id
			};
		}
		function a(e, r) {
			n.view.activeTool === "hand" || n.view.settings.guidesLocked || e.button === 0 && (e.preventDefault(), e.stopPropagation(), n.scope.activate(t.page.id), n.selection.selectGuide(r.id), ef(n, e, t.page, r));
		}
		function o(e) {
			c("guide.edit", t.page.id, e.id);
		}
		function s(e, i) {
			n.view.settings.guidesLocked || (e.preventDefault(), e.stopPropagation(), n.scope.activate(t.page.id), n.selection.selectGuide(i.id), n.ui.openContextMenu(e.clientX, e.clientY, yt(r, [{
				args: [t.page.id, i.id],
				id: "guide.edit"
			}, {
				args: [t.page.id, i.id],
				id: "guide.delete"
			}], c)));
		}
		function c(e, ...t) {
			r.dispatch(e, ...t);
		}
		function l(e) {
			return e.orientation === "horizontal" ? {
				height: "7px",
				left: "0",
				right: "0",
				top: `${e.position * t.pxPerMm - 3}px`
			} : {
				bottom: "0",
				left: `${e.position * t.pxPerMm - 3}px`,
				top: "0",
				width: "7px"
			};
		}
		function u(e) {
			return e.orientation === "horizontal" ? {
				height: "1px",
				left: "0",
				right: "0",
				top: "3px"
			} : {
				bottom: "0",
				left: "3px",
				top: "0",
				width: "1px"
			};
		}
		return (t, r) => U(n).view.settings.showGuides ? (F(), X("div", tf, [(F(!0), X(Y, null, Z(e.page.guides, (e) => (F(), X("div", {
			key: e.id,
			"data-guide-id": e.id,
			class: P(["pointer-events-auto absolute", i(e)]),
			style: B(l(e)),
			title: U(n).view.settings.guidesLocked ? U(H)("designer.guidesLayer.lockedHint") : U(H)("designer.guidesLayer.interactionHint"),
			onPointerdown: (t) => a(t, e),
			onDblclick: (t) => o(e),
			onContextmenu: (t) => s(t, e)
		}, [R("div", {
			class: P(["absolute", U(n).selection.selectedGuideId === e.id ? "bg-accent" : "bg-guide/80"]),
			style: B(u(e))
		}, null, 6)], 46, nf))), 128))])) : W("", !0);
	}
}), af = /* @__PURE__ */ G({
	__name: "marquee-overlay",
	props: {
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = e, n = E().store(), r = K(() => {
			let e = n.view.marquee;
			return e && e.pageId === t.page.id ? e.rect : null;
		});
		return (t, n) => r.value ? (F(), X("div", {
			key: 0,
			class: "pointer-events-none absolute z-canvas-marquee border border-accent bg-accent/10",
			style: B({
				left: `${r.value.x * e.pxPerMm}px`,
				top: `${r.value.y * e.pxPerMm}px`,
				width: `${r.value.width * e.pxPerMm}px`,
				height: `${r.value.height * e.pxPerMm}px`
			})
		}, null, 4)) : W("", !0);
	}
}), of = [
	"data-selected",
	"title",
	"onPointerdown",
	"onClick"
], sf = { class: "max-w-40 truncate" }, cf = /* @__PURE__ */ G({
	__name: "repeat-overlay",
	props: {
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = u(), n = e, r = E().store(), i = ze((e) => r.repeatGroup.getByPage(n.page.id).map((t) => ({
			bounds: Xt(r.repeatGroup.getMembers(t.id), e),
			group: t
		})));
		function a(e) {
			return e ? {
				height: `${e.height * n.pxPerMm}px`,
				left: `${e.x * n.pxPerMm}px`,
				top: `${e.y * n.pxPerMm}px`,
				width: `${e.width * n.pxPerMm}px`
			} : { display: "none" };
		}
		function o(e) {
			return e ? Xd(e, n.pxPerMm) : { display: "none" };
		}
		function s(e) {
			return r.repeatGroup.selected?.id === e.id;
		}
		function c(e) {
			r.selection.set([...e.elementIds]);
		}
		function l(e, t) {
			if (e.button !== 0 || r.view.activeTool !== "select" || r.repeatGroup.getMembers(t.id).some((e) => e.locked)) return;
			r.scope.activate(n.page.id), r.selection.set([...t.elementIds]);
			let i = t.elementIds[0];
			i && Hd(r, e, i, n.page, { selectKeyObject: !1 });
		}
		return (e, n) => (F(!0), X(Y, null, Z(U(i), ({ bounds: e, group: n }) => (F(), X(Y, { key: n.id }, [R("div", {
			class: P(["pointer-events-none absolute z-canvas-repeat rounded-sm border border-dashed", s(n) ? "border-accent bg-accent/5" : "border-accent/40"]),
			style: B(a(e))
		}, null, 6), R("button", {
			"data-component": "repeat-overlay__label",
			"data-selected": s(n),
			type: "button",
			class: P(["absolute z-canvas-repeat-label flex h-4.5 cursor-move items-center gap-1 rounded-sm px-1.5 text-caption shadow-sm", [U(t)("repeat-overlay__label"), s(n) ? "repeat-overlay__label--selected bg-accent text-on-accent" : "bg-accent/85 text-on-accent hover:bg-accent"]]),
			style: B(o(e)),
			title: U(H)("designer.repeatOverlay.moveMembersTitle"),
			onPointerdown: Q((e) => l(e, n), ["stop"]),
			onClick: Q((e) => c(n), ["stop"])
		}, [
			V(N, {
				name: "loop",
				class: "h-3 w-3"
			}),
			R("span", sf, q(n.name), 1),
			R("span", {
				"data-component": "repeat-overlay__collection",
				class: P(["max-w-30 truncate opacity-80", U(t)("repeat-overlay__collection")])
			}, q(n.collection || U(H)("designer.repeatOverlay.unboundCollection")), 3)
		], 46, of)], 64))), 128));
	}
});
function lf(e, t, n, r, i) {
	let a = e.element.find(n), o = a?.node.points;
	if (!a || a.node.locked || !o) return;
	let s = a.node, c = t.currentTarget, l = e.view.originOf(i.id);
	if (!l) return;
	let u = e.view.zoom, d = Jn(e).contentMmFromClient(t.clientX, t.clientY, u), f = o.map((e) => ({
		x: e.x,
		y: e.y
	})), p = Vd(e, i), m = f[+(r === 0)] ?? f[r], h = /* @__PURE__ */ new Set([n]), g = {
		elements: br(e),
		gridSize: e.view.settings.gridSize,
		snapElements: e.view.settings.snapToElements,
		snapGrid: e.view.settings.snapToGrid,
		snapGuides: e.view.settings.snapToGuides,
		snapMargins: e.view.settings.snapToMargins,
		get threshold() {
			return Md(e.view.zoom);
		}
	}, _ = (e) => f.map((t, n) => n === r ? e : t);
	Dd(e, {
		onEnd(t, n) {
			e.view.setSnapLines({
				h: [],
				pageId: "",
				v: []
			}), n && e.history.commit();
		},
		onMove(r) {
			let a = Jn(e).contentMmFromClient(r.event.clientX, r.event.clientY, e.view.zoom), o = Gt(l, a);
			t.shiftKey && m && (o = cr(m, o, 45));
			let c = Rd(o, e.canvas.getPage(i.id) ?? i, h, g), u = p([{
				id: n,
				patch: Vt(s, _(c))
			}]).some((e) => e.id === n);
			e.view.setSnapLines({
				h: u ? [] : c.hLines,
				pageId: i.id,
				v: u ? [] : c.vLines
			});
		},
		pointerId: t.pointerId,
		startClient: {
			x: t.clientX,
			y: t.clientY
		},
		startPoint: d,
		tag: "point-drag",
		target: c,
		threshold: 1
	});
}
function uf(e, t, n) {
	let r = yr[t.handle], i = null, a = null;
	r.u !== 0 && (i = r.u === 1 ? e.x + e.width : e.x), r.v !== 0 && (a = r.v === 1 ? e.y + e.height : e.y);
	let o = Ld(i, a, t.page, t.excludeIds, {
		...t.snap,
		elements: t.elements ?? t.snap.elements
	}), s = e;
	if (i !== null && o.dx !== 0) {
		let t = r.u === 1 ? e.x : e.x + e.width, a = r.u === 1 ? Math.max(i + o.dx, t + n.width) : Math.min(i + o.dx, t - n.width);
		s = {
			...s,
			width: Math.abs(a - t),
			x: r.u === 1 ? t : a
		};
	}
	if (a !== null && o.dy !== 0) {
		let t = r.v === 1 ? e.y : e.y + e.height, i = r.v === 1 ? Math.max(a + o.dy, t + n.height) : Math.min(a + o.dy, t - n.height);
		s = {
			...s,
			height: Math.abs(i - t),
			y: r.v === 1 ? t : i
		};
	}
	return {
		hasVerticalSnap: a !== null && (o.hLines.length > 0 || t.snap.snapGrid && t.snap.gridSize > 0),
		hLines: o.hLines,
		rect: {
			height: Br(s.height),
			width: Br(s.width),
			x: Br(s.x),
			y: Br(s.y)
		},
		vLines: o.vLines
	};
}
function df(e, t) {
	let n = Tr(e), r = Tr(t), i = Yn({
		x: n.x - r.x,
		y: n.y - r.y
	}, -e.rotation), a = t.width / e.width, o = t.height / e.height;
	function s(n) {
		let r = Tr(n), s = n.width / a, c = n.height / o, l = Yn({
			x: i.x * (n.width / t.width),
			y: i.y * (n.height / t.height)
		}, e.rotation);
		return {
			height: c,
			width: s,
			x: r.x + l.x - s / 2,
			y: r.y + l.y - c / 2
		};
	}
	return {
		heightFactor: o,
		toNodeRect: s,
		widthFactor: a
	};
}
function ff(e, t) {
	let n = Zt(e, t.elements), r = (t.elements ?? ln).get(e.type), i = mr(e, t.elements), a = i === e ? void 0 : df(e, i), o = a?.widthFactor ?? 1, s = a?.heightFactor ?? 1, c = r?.aspectRatio && r.aspectRatio * o / s, l = {
		height: n.height * s,
		width: n.width * o
	};
	return function(n, u, d = t.keepRatio) {
		let f = Rn(i, e.rotation, t.handle, n, u, {
			aspectRatio: c,
			keepRatio: d,
			minHeight: l.height,
			minWidth: l.width
		}), p = e.rotation === 0 ? uf(f, t, l) : {
			hasVerticalSnap: !1,
			hLines: [],
			rect: f,
			vLines: []
		};
		if (e.rotation === 0 && yr[t.handle].v === 1 && !c && !d && !p.hasVerticalSnap && r?.snapResizeHeight) {
			let n = t.snap.threshold, i = r.snapResizeHeight({
				height: f.height / s,
				node: e,
				page: t.page,
				threshold: n,
				width: p.rect.width / o
			});
			if (i !== void 0) {
				let e = Br(i) * s;
				Number.isFinite(e) && e >= l.height && Math.abs(e - f.height) <= n && (p.rect.height = e);
			}
		}
		if ((c || d) && e.rotation === 0) {
			let e = yr[t.handle];
			p.rect = Rn(i, 0, t.handle, {
				x: u.x + e.u * (p.rect.width - i.width),
				y: u.y + e.v * (p.rect.height - i.height)
			}, u, {
				aspectRatio: c,
				keepRatio: d,
				minHeight: l.height,
				minWidth: l.width
			});
		}
		let m = a?.toNodeRect(p.rect) ?? p.rect, h = Ln(e, { ...m }, t.elements), g = yr[t.handle];
		if (a) {
			let t = (h.width ?? m.width) - m.width, n = (h.height ?? m.height) - m.height, r = Yn({
				x: g.u * t * o / 2,
				y: g.v * n * s / 2
			}, e.rotation), i = a.toNodeRect({
				height: p.rect.height + n * s,
				width: p.rect.width + t * o,
				x: p.rect.x + r.x - t * o / 2,
				y: p.rect.y + r.y - n * s / 2
			});
			h.x = i.x, h.y = i.y;
		} else if (g.v === -1 && typeof h.height == "number") {
			let t = h.height - m.height, n = Yn({
				x: 0,
				y: -t / 2
			}, e.rotation);
			h.x = m.x + n.x, h.y = m.y + n.y - t / 2;
		}
		return {
			hLines: p.hLines,
			patches: [{
				id: e.id,
				patch: h
			}],
			vLines: p.vLines
		};
	};
}
function pf(e, t) {
	let n = e.map((e) => ({
		geometry: wn(e),
		node: e
	})), r = Xt(e, t.elements);
	if (!r) return;
	let i = yr[t.handle], a = {
		x: r.x + (1 - i.u) / 2 * r.width,
		y: r.y + (1 - i.v) / 2 * r.height
	}, o = hf(e, t.elements);
	return function(e, i, s = t.keepRatio) {
		let c = uf(Rn(r, 0, t.handle, e, i, { minSize: 2 }), t, {
			height: 2,
			width: 2
		}), l = mf(c.rect.width, r.width, o.x), u = mf(c.rect.height, r.height, o.y);
		if (s) {
			let e = Math.max(l, u);
			l = Math.max(e, o.x), u = Math.max(e, o.y);
		}
		return {
			hLines: c.hLines,
			patches: n.map(({ geometry: e, node: n }) => ({
				id: n.id,
				patch: Ln(n, Fn(e, a, l, u), t.elements)
			})),
			vLines: c.vLines
		};
	};
}
function mf(e, t, n) {
	return Math.max(t > 0 ? e / t : 1, n);
}
function hf(e, t = ln) {
	let n = 0, r = 0;
	for (let i of e) {
		let e = Zt(i, t);
		n = Math.max(n, i.width > 0 ? e.width / i.width : 0), r = Math.max(r, i.height > 0 ? e.height / i.height : 0);
	}
	return {
		x: n,
		y: r
	};
}
function gf(e, t) {
	return e.length === 1 ? ff(e[0], t) : pf(e, t);
}
function _f(e, t, n, r) {
	return vf(t, e.event.clientX, e.event.clientY, n, r);
}
function vf(e, t, n, r, i) {
	let a = Jn(e).contentMmFromClient(t, n, i);
	return Gt(r, a);
}
function yf(e, t, n, r) {
	let i = e.canvas.getPage(r.id) ?? r, a = new Map(i.elements.map((e) => [e.id, e])), o = e.selection.unlockedNodes.map((e) => a.get(e.id) ?? e), s = e.view.originOf(r.id);
	if (o.length === 0 || !s) return;
	let c = e.view.zoom, l = gf(o, {
		elements: br(e),
		excludeIds: new Set(e.selection.ids),
		handle: n,
		keepRatio: t.shiftKey,
		page: i,
		snap: {
			gridSize: e.view.settings.gridSize,
			snapElements: e.view.settings.snapToElements,
			snapGrid: e.view.settings.snapToGrid,
			snapGuides: e.view.settings.snapToGuides,
			snapMargins: e.view.settings.snapToMargins,
			get threshold() {
				return Md(e.view.zoom);
			}
		}
	});
	if (!l) return;
	let u = Vd(e, r);
	Dd(e, {
		onEnd(t, n) {
			e.view.setSnapLines({
				h: [],
				pageId: "",
				v: []
			}), n && e.history.commit();
		},
		onMove(t) {
			let n = _f(t, e, s, e.view.zoom), i = l(n, t.startPoint, t.event.shiftKey), a = u(i.patches).some((e) => i.patches.some((t) => t.id === e.id));
			e.view.setSnapLines({
				h: a ? [] : i.hLines,
				pageId: r.id,
				v: a ? [] : i.vLines
			});
		},
		pointerId: t.pointerId,
		startClient: {
			x: t.clientX,
			y: t.clientY
		},
		startPoint: vf(e, t.clientX, t.clientY, s, c),
		tag: "resize",
		target: t.currentTarget,
		threshold: 1
	});
}
function bf(e, t, n, r) {
	let i = e.element.find(n);
	if (!i || i.node.locked) return;
	let a = e.canvas.getPage(r.id)?.elements.find((e) => e.id === n) ?? i.node, o = t.currentTarget, s = e.view.originOf(r.id);
	if (!s) return;
	let c = e.view.zoom, l = vf(e, t.clientX, t.clientY, s, c), u = mr(a, br(e)), d = Tr(u), f = Math.atan2(l.y - d.y, l.x - d.x), p = a.rotation, m = Tr(a), h = a.width, g = a.height, _ = {
		x: m.x - d.x,
		y: m.y - d.y
	}, v = Vd(e, r), y = t.shiftKey, b;
	Dd(e, {
		onEnd(t, n) {
			n && e.history.commit();
		},
		onMove(t) {
			t.event !== b && (b = t.event, y = t.event.shiftKey);
			let r = _f(t, e, s, e.view.zoom), i = Math.atan2(r.y - d.y, r.x - d.x), a = p + (i - f) * 180 / Math.PI;
			y && (a = Math.round(a / 15) * 15);
			let o = Br(Kr(a), 1), c = { rotation: o };
			if (_.x !== 0 || _.y !== 0) {
				let e = Yn(_, o - p);
				c.x = Br(d.x + e.x - h / 2), c.y = Br(d.y + e.y - g / 2);
			}
			v([{
				id: n,
				patch: c
			}]);
		},
		onShiftChange(e) {
			y = e;
		},
		pointerId: t.pointerId,
		startClient: {
			x: t.clientX,
			y: t.clientY
		},
		startPoint: l,
		tag: "rotate",
		target: o,
		threshold: 1
	});
}
var xf = [
	"x1",
	"y1",
	"x2",
	"y2"
], Sf = /* @__PURE__ */ G({
	__name: "selection-member",
	props: {
		isKey: { type: Boolean },
		node: {},
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = e, n = ze((e) => mr(t.node, e)), r = K(() => ({
			height: `${t.page.height * t.pxPerMm}px`,
			left: "0px",
			top: "0px",
			width: `${t.page.width * t.pxPerMm}px`
		}));
		function i(e) {
			return qd({
				...n.value,
				rotation: e.rotation
			}, t.pxPerMm);
		}
		return (t, n) => U(Vr)(e.node) && e.node.points ? (F(), X("svg", {
			key: 0,
			class: "pointer-events-none absolute z-canvas-selection-member overflow-visible",
			style: B(r.value)
		}, [R("line", {
			x1: e.node.points[0].x * e.pxPerMm,
			y1: e.node.points[0].y * e.pxPerMm,
			x2: e.node.points[1].x * e.pxPerMm,
			y2: e.node.points[1].y * e.pxPerMm,
			stroke: "var(--color-accent)",
			"stroke-opacity": "0.5",
			"stroke-width": "1.5"
		}, null, 8, xf)], 4)) : (F(), X("div", {
			key: 1,
			class: P(["pointer-events-none absolute z-canvas-selection-member", e.isKey ? "border-2 border-accent" : "border border-accent/50"]),
			style: B(i(e.node))
		}, null, 6));
	}
}), Cf = [
	"x1",
	"y1",
	"x2",
	"y2",
	"pointer-events"
], wf = ["title", "onPointerdown"], Tf = { class: "absolute inset-0 h-full w-full overflow-visible" }, Ef = ["pointer-events"], Df = ["onPointerdown"], Of = {
	class: "pointer-events-none absolute left-1/2 h-px w-px",
	style: {
		top: 0,
		marginLeft: "-0.5px"
	}
}, kf = ["title"], Af = { class: "absolute inset-0 h-full w-full overflow-visible" }, jf = ["pointer-events"], Mf = ["onPointerdown"], Nf = /* @__PURE__ */ G({
	__name: "selection-overlay",
	props: {
		displayNodes: {},
		layer: {},
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = u(), n = e, r = E().store(), i = sn, a = [
			"nw",
			"ne",
			"se",
			"sw"
		], o = K(() => r.view.activeTool === "hand"), s = K(() => {
			let e = r.selection.getNodesOnPage(n.page.id, { visible: !0 });
			if (!n.displayNodes) return e;
			let t = new Map(n.displayNodes.map((e) => [e.id, e]));
			return e.map((e) => t.get(e.id) ?? e).filter((e) => e.visible);
		}), c = ze((e) => {
			let [t] = s.value;
			return s.value.length !== 1 || !t ? {} : qd({
				...mr(t, e),
				rotation: t.rotation
			}, n.pxPerMm);
		}), l = K(() => r.selection.keyId), d = K(() => s.value.find((e) => !e.locked)), f = K(() => {
			let e = s.value[0];
			return e && Vr(e) ? e : null;
		}), p = K(() => f.value?.points ?? null), m = K(() => ({
			height: `${n.page.height * n.pxPerMm}px`,
			left: "0px",
			top: "0px",
			width: `${n.page.width * n.pxPerMm}px`
		})), h = ze((e) => {
			if (s.value.length < 2) return {};
			let t = Xt(s.value, e);
			return t ? qd(t, n.pxPerMm) : {};
		}), g = {
			e: {
				cursor: "ew-resize",
				left: "100%",
				top: "50%"
			},
			n: {
				cursor: "ns-resize",
				left: "50%",
				top: "0%"
			},
			ne: {
				cursor: "nesw-resize",
				left: "100%",
				top: "0%"
			},
			nw: {
				cursor: "nwse-resize",
				left: "0%",
				top: "0%"
			},
			s: {
				cursor: "ns-resize",
				left: "50%",
				top: "100%"
			},
			se: {
				cursor: "nwse-resize",
				left: "100%",
				top: "100%"
			},
			sw: {
				cursor: "nesw-resize",
				left: "0%",
				top: "100%"
			},
			w: {
				cursor: "ew-resize",
				left: "0%",
				top: "50%"
			}
		};
		function _(e) {
			return {
				cursor: "move",
				left: `${e.x * n.pxPerMm}px`,
				top: `${e.y * n.pxPerMm}px`,
				transform: "translate(-50%, -50%)"
			};
		}
		function v(e, t) {
			let i = f.value;
			i && lf(r, e, i.id, t, n.page);
		}
		function y(e) {
			if (e.button !== 0 || o.value || r.view.spacePanning) return;
			let t = d.value;
			t && (e.stopPropagation(), e.preventDefault(), r.scope.activate(n.page.id), Hd(r, e, t.id, n.page, { selectKeyObject: !1 }));
		}
		function b(e) {
			let t = g[e];
			return {
				cursor: t.cursor,
				left: t.left,
				top: t.top,
				transform: "translate(-50%, -50%)"
			};
		}
		function x(e, t) {
			yf(r, e, t, n.page);
		}
		function S(e) {
			let t = s.value[0];
			t && bf(r, e, t.id, n.page);
		}
		return (n, u) => e.layer === "move" ? (F(), X(Y, { key: 0 }, [d.value && !o.value && !U(r).view.spacePanning && (s.value.length > 1 || !f.value) ? (F(), X("div", {
			key: 0,
			"data-test-part": "selection-overlay__move",
			class: P(["absolute -z-1 cursor-move", U(t)("selection-overlay__move")]),
			style: B(s.value.length > 1 ? U(h) : U(c)),
			onPointerdown: y
		}, null, 38)) : W("", !0)], 64)) : s.value.length === 1 && s.value[0] ? (F(), X(Y, { key: 1 }, [f.value && p.value ? (F(), X(Y, { key: 0 }, [(F(), X("svg", {
			class: "pointer-events-none absolute z-canvas-selection overflow-visible",
			style: B(m.value)
		}, [R("line", {
			x1: p.value[0].x * e.pxPerMm,
			y1: p.value[0].y * e.pxPerMm,
			x2: p.value[1].x * e.pxPerMm,
			y2: p.value[1].y * e.pxPerMm,
			stroke: "var(--color-accent)",
			"stroke-width": "1.5",
			class: "cursor-move",
			"pointer-events": f.value.locked || o.value ? "none" : "stroke",
			onPointerdown: y
		}, null, 40, Cf)], 4)), !f.value.locked && U(r).view.activeTool !== "hand" ? (F(!0), X(Y, { key: 0 }, Z(p.value, (e, t) => (F(), X("div", {
			key: t,
			class: "pointer-events-auto absolute z-canvas-selection-handle h-2.5 w-2.5 border border-accent bg-handle hover:bg-accent/20",
			style: B(_(e)),
			title: U(H)("designer.selectionOverlay.dragEndpointTitle"),
			onPointerdown: Q((e) => v(e, t), ["stop", "prevent"])
		}, null, 44, wf))), 128)) : W("", !0)], 64)) : (F(), X("div", {
			key: 1,
			class: "pointer-events-none absolute z-canvas-selection",
			style: B(U(c))
		}, [(F(), X("svg", Tf, [R("rect", {
			width: "100%",
			height: "100%",
			fill: "none",
			stroke: "var(--color-accent)",
			class: "cursor-move",
			"pointer-events": s.value[0].locked || o.value ? "none" : "stroke",
			onPointerdown: y
		}, null, 40, Ef)])), !s.value[0].locked && U(r).view.activeTool !== "hand" ? (F(), X(Y, { key: 0 }, [(F(!0), X(Y, null, Z(U(i), (e) => (F(), X("div", {
			key: e,
			class: "pointer-events-auto absolute h-2 w-2 border border-accent bg-handle",
			style: B(b(e)),
			onPointerdown: Q((t) => x(t, e), ["stop", "prevent"])
		}, null, 44, Df))), 128)), R("div", Of, [R("div", {
			class: "pointer-events-auto absolute h-4 w-4 -translate-x-1/2 -translate-y-6 cursor-grab rounded-full border border-accent bg-handle hover:bg-accent/20",
			style: {
				left: 0,
				top: 0
			},
			title: U(H)("designer.selectionOverlay.rotateTitle"),
			onPointerdown: Q(S, ["stop", "prevent"])
		}, null, 40, kf)])], 64)) : W("", !0)], 4))], 64)) : s.value.length > 1 ? (F(), X(Y, { key: 2 }, [(F(!0), X(Y, null, Z(s.value, (t) => (F(), I(Sf, {
			key: t.id,
			"is-key": t.id === l.value,
			node: t,
			page: e.page,
			"px-per-mm": e.pxPerMm
		}, null, 8, [
			"is-key",
			"node",
			"page",
			"px-per-mm"
		]))), 128)), R("div", {
			class: "pointer-events-none absolute z-canvas-selection",
			style: B(U(h))
		}, [(F(), X("svg", Af, [R("rect", {
			width: "100%",
			height: "100%",
			fill: "none",
			stroke: "var(--color-accent)",
			"stroke-dasharray": "4 3",
			class: "cursor-move",
			"pointer-events": o.value ? "none" : "stroke",
			onPointerdown: y
		}, null, 40, jf)])), (F(!0), X(Y, null, Z(o.value ? [] : a, (e) => (F(), X("div", {
			key: e,
			class: "pointer-events-auto absolute h-2 w-2 border border-accent bg-handle",
			style: B(b(e)),
			onPointerdown: Q((t) => x(t, e), ["stop", "prevent"])
		}, null, 44, Mf))), 128))], 4)], 64)) : W("", !0);
	}
});
function Pf(e, t, n) {
	return {
		x: e.x + (t.x - e.x) * n,
		y: e.y + (t.y - e.y) * n
	};
}
function Ff(e, t, n) {
	let r = Pf(e.point, e.outgoing, n), i = Pf(e.outgoing, t.incoming, n), a = Pf(t.incoming, t.point, n);
	return Pf(Pf(r, i, n), Pf(i, a, n), n);
}
function If(e, t, n) {
	let r, i = Infinity, a = t ? e.length : e.length - 1;
	for (let t = 0; t < a; t++) {
		let a = e[t], o = e[(t + 1) % e.length];
		if ([
			a.outgoing,
			o.incoming,
			o.point
		].every((e) => e.x === a.point.x && e.y === a.point.y)) continue;
		function s(e) {
			let t = Ff(a, o, e);
			return (t.x - n.x) ** 2 + (t.y - n.y) ** 2;
		}
		function c(e, n) {
			n < i && (i = n, r = {
				index: t,
				point: Ff(a, o, e),
				t: e
			});
		}
		let l = Array.from({ length: 41 }, (e, t) => s(t / 40));
		c(0, l[0]), c(1, l[40]);
		for (let e = 0; e <= 40; e++) {
			if (l[e] > (l[e - 1] ?? Infinity) || l[e] > (l[e + 1] ?? Infinity)) continue;
			let t = Math.max(0, (e - 1) / 40), n = Math.min(1, (e + 1) / 40);
			for (let e = 0; e < 24; e++) {
				let e = t + (n - t) / 3, r = n - (n - t) / 3;
				s(e) < s(r) ? n = r : t = e;
			}
			let r = (t + n) / 2;
			c(r, s(r));
		}
	}
	return r;
}
function Lf(e, t, n) {
	let r = (t + 1) % e.length, i = e[t], a = e[r], o = Pf(i.point, i.outgoing, n), s = Pf(i.outgoing, a.incoming, n), c = Pf(a.incoming, a.point, n), l = Pf(o, s, n), u = Pf(s, c, n), d = Pf(l, u, n), f = [...e];
	return f[t] = {
		...i,
		outgoing: o
	}, f[r] = {
		...a,
		incoming: c
	}, f.splice(t + 1, 0, {
		incoming: l,
		outgoing: u,
		point: d
	}), f;
}
function Rf(e, t) {
	let n = Sr(e.props), r = e.rotation * Math.PI / 180, i = t.x - e.x - e.width / 2, a = t.y - e.y - e.height / 2;
	return {
		x: ((i * Math.cos(r) + a * Math.sin(r)) / e.width + .5) * n.viewWidth,
		y: ((-i * Math.sin(r) + a * Math.cos(r)) / e.height + .5) * n.viewHeight
	};
}
function zf(e, t, n, r) {
	let i = {
		incoming: { ...e.incoming },
		outgoing: { ...e.outgoing },
		point: { ...e.point }
	};
	if (i[t] = n, t === "point") for (let t of ["incoming", "outgoing"]) i[t] = {
		x: e[t].x + n.x - e.point.x,
		y: e[t].y + n.y - e.point.y
	};
	else if (!r) {
		let r = t === "incoming" ? "outgoing" : "incoming";
		i[r] = {
			x: 2 * e.point.x - n.x,
			y: 2 * e.point.y - n.y
		};
	}
	return i;
}
function Bf(e) {
	let { incoming: t, outgoing: n, point: r } = e;
	return t.x === r.x && t.y === r.y && n.x === r.x && n.y === r.y ? e : en(r);
}
function Vf(e, t) {
	let n = Sr(e.props), r = Gn(t, n.closed), { toPage: i } = $t(e, n), a = i({
		x: r.x + r.width / 2,
		y: r.y + r.height / 2
	}), o = r.width / n.viewWidth * e.width, s = r.height / n.viewHeight * e.height;
	return {
		height: s,
		props: {
			...e.props,
			anchors: r.props.anchors,
			viewHeight: r.height,
			viewWidth: r.width
		},
		width: o,
		x: a.x - o / 2,
		y: a.y - s / 2
	};
}
function Hf(e) {
	return H(`elements.penElement.${e}`);
}
var Uf = ["data-dragging", "aria-label"], Wf = ["transform"], Gf = ["d", "stroke-width"], Kf = ["d", "stroke-width"], qf = [
	"cx",
	"cy",
	"r",
	"stroke-width"
], Jf = [
	"x1",
	"y1",
	"x2",
	"y2",
	"stroke-width"
], Yf = [
	"x1",
	"y1",
	"x2",
	"y2",
	"stroke-width"
], Xf = [
	"data-pen-control",
	"data-anchor-index",
	"cx",
	"cy",
	"r",
	"stroke-width",
	"onPointerdown"
], Zf = [
	"x",
	"y",
	"width",
	"height",
	"stroke-width"
], Qf = [
	"data-anchor-index",
	"data-selected",
	"x",
	"y",
	"width",
	"height",
	"fill",
	"stroke",
	"stroke-width",
	"onDblclick",
	"onPointerdown"
], $f = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "pen-edit-surface",
	props: {
		node: {},
		surface: {}
	},
	setup(e) {
		let t = u(), n = e, r = E(), i = r.store(), { alt: a } = Qe(), o = L(), s = L(), c = Ht(), l = Ht(), d = K(() => i.view.pxPerMm), f = K(() => {
			if (l.value) return l.value.pullHandles ? "cell" : l.value.control === "point" ? "move" : a.value ? "crosshair" : "grabbing";
		}), p = K(() => Sr(n.node.props)), m = K(() => {
			let e = p.value, { toPage: t } = $t(n.node, e);
			return e.anchors.map((e) => ({
				incoming: t(e.incoming),
				outgoing: t(e.outgoing),
				point: t(e.point)
			}));
		}), h = K(() => Ir(m.value, p.value.closed)), g = `pen.edit.${n.node.id}`, _;
		re([
			{
				run: () => v("cancel"),
				shortcut: "Escape"
			},
			{
				run: () => v("finish"),
				shortcut: "Enter"
			},
			{
				run: () => v("deleteAnchor"),
				shortcut: ["Delete", "Backspace"]
			}
		], {
			enabled: () => !!l.value || s.value !== void 0,
			target: o
		});
		function v(e) {
			r.commands.dispatch(`${g}.${e}`);
		}
		function y(e) {
			return f.value ? f.value : e === "point" ? a.value ? "cell" : "move" : a.value ? "crosshair" : "grab";
		}
		function b(e) {
			return wr(n.surface.getBoundingClientRect(), {
				x: e.clientX,
				y: e.clientY
			}, d.value);
		}
		function x(e) {
			let t = l.value;
			if (t) {
				l.value = void 0;
				try {
					e ? t.edit.finish() : t.edit.cancel();
				} finally {
					t.captureTarget.hasPointerCapture(t.pointerId) && t.captureTarget.releasePointerCapture(t.pointerId);
				}
			}
		}
		function S(e, t, r) {
			let a = e.currentTarget;
			if (e.button !== 0 || !(a instanceof SVGElement) || i.view.spacePanning || l.value) return;
			e.preventDefault(), e.stopPropagation(), r === "point" && (s.value = t), c.value = void 0;
			let u = Mr(i, n.node.id);
			if (!u) return;
			let d = r === "point" && e.altKey;
			l.value = {
				anchors: Sr(n.node.props).anchors,
				captureTarget: a,
				control: d ? "outgoing" : r,
				edit: u,
				index: t,
				node: sr(n.node),
				origin: Rf(n.node, b(e)),
				pointerId: e.pointerId,
				pullHandles: d
			}, o.value?.focus({ preventScroll: !0 }), a.setPointerCapture(e.pointerId);
		}
		function C(e) {
			let t = If(m.value, p.value.closed, b(e));
			if (t && t.t > 0 && t.t < 1) return t;
		}
		function w(e) {
			!l.value && !i.view.spacePanning && (c.value = C(e));
		}
		function T(e) {
			if (e.button !== 0 || i.view.spacePanning || l.value) return;
			let t = i.element.find(n.node.id)?.page;
			if (!t) return;
			let r = p.value, a = m.value, o = e.altKey || e.shiftKey || e.ctrlKey || e.metaKey ? void 0 : C(e);
			e.stopPropagation(), c.value = void 0, Hd(i, e, n.node.id, t, { onClick: () => {
				o && m.value === a && j(() => D(r.anchors, o));
			} });
		}
		function D(e, { index: t, t: r }) {
			let a = Mr(i, n.node.id);
			if (a) try {
				a.update(Vf(n.node, Lf(e, t, r))) && (a.finish(), s.value = t + 1, o.value?.focus({ preventScroll: !0 }));
			} finally {
				a.cancel();
			}
		}
		function O() {
			let e = s.value, t = Sr(n.node.props);
			if (e === void 0 || !t.anchors[e] || l.value) return;
			if (t.anchors.length <= (t.closed ? 3 : 2)) {
				i.ui.toast(Hf(t.closed ? "closedAnchorMinimum" : "openAnchorMinimum"));
				return;
			}
			let r = Mr(i, n.node.id);
			if (r) try {
				let i = t.anchors.filter((t, n) => n !== e);
				r.update(Vf(n.node, i)) && (r.finish(), s.value = void 0);
			} finally {
				r.cancel();
			}
		}
		function ee(e) {
			if (l.value || i.view.spacePanning) return;
			let { anchors: t } = Sr(n.node.props), r = t[e];
			if (!r) return;
			let a = Bf(r);
			if (a === r) return;
			let o = Mr(i, n.node.id);
			if (o) try {
				if (t[e] = a, !o.update(Vf(n.node, t))) return;
				o.finish();
			} finally {
				o.cancel();
			}
		}
		function k(e) {
			let t = l.value;
			if (!t || e.pointerId !== t.pointerId || i.view.spacePanning) return;
			let n = Rf(t.node, b(e)), r = t.anchors[t.index], a = {
				x: r[t.control].x + n.x - t.origin.x,
				y: r[t.control].y + n.y - t.origin.y
			}, o = t.anchors.map((n, r) => r === t.index ? zf(n, t.control, a, e.altKey && !t.pullHandles) : n);
			t.edit.update(Vf(t.node, o)) || x(!1);
		}
		function A(e) {
			e.pointerId === l.value?.pointerId && j(() => x(!0));
		}
		function te(e) {
			e.pointerId === l.value?.pointerId && j(() => x(!1));
		}
		function j(e) {
			try {
				e();
			} catch (e) {
				try {
					x(!1);
				} finally {
					r.errors.capture(e, { source: "canvas.pen.edit" });
				}
			}
		}
		return Bn(() => {
			_ = r.commands.registerScoped([
				{
					id: `${g}.cancel`,
					run: () => {
						l.value ? x(!1) : s.value = void 0;
					},
					get title() {
						return Hf("cancelEdit");
					}
				},
				{
					id: `${g}.deleteAnchor`,
					run: O,
					get title() {
						return Hf("deleteAnchor");
					}
				},
				{
					id: `${g}.finish`,
					run: () => x(!0),
					get title() {
						return Hf("finishEdit");
					}
				}
			]);
		}), Er(() => {
			try {
				x(!1);
			} finally {
				_?.();
			}
		}), (e, n) => (F(), X("svg", {
			ref_key: "svg",
			ref: o,
			"data-component": "pen-edit-surface",
			"data-dragging": !!l.value,
			"data-pen-edit-overlay": "",
			class: P([U(t)("pen-edit-surface"), { [U(t)("pen-edit-surface--dragging")]: l.value }]),
			style: B({ cursor: f.value }),
			width: "100%",
			height: "100%",
			tabindex: "-1",
			"aria-label": U(Hf)("editHelp"),
			onBlur: n[1] ||= (e) => s.value = void 0,
			onPointermove: n[2] ||= (e) => j(() => k(e)),
			onPointerup: A,
			onPointercancel: te,
			onLostpointercapture: te
		}, [R("title", null, q(U(Hf)("editHelp")), 1), R("g", { transform: `scale(${d.value})` }, [
			R("path", {
				d: h.value,
				fill: "none",
				stroke: "var(--color-pen-control)",
				"stroke-width": 1 / d.value
			}, null, 8, Gf),
			R("path", {
				"data-test-part": "pen-path-hit",
				class: "touch-none cursor-crosshair [pointer-events:stroke]",
				d: h.value,
				fill: "none",
				stroke: "transparent",
				"stroke-width": 14 / d.value,
				onPointermove: w,
				onPointerleave: n[0] ||= (e) => c.value = void 0,
				onPointerdown: T
			}, null, 40, Kf),
			c.value ? (F(), X("circle", {
				key: 0,
				cx: c.value.point.x,
				cy: c.value.point.y,
				r: 4 / d.value,
				fill: "var(--color-handle)",
				stroke: "var(--color-pen-control)",
				"stroke-width": 1 / d.value,
				class: "pointer-events-none"
			}, null, 8, qf)) : W("", !0),
			(F(!0), X(Y, null, Z(m.value, (e, n) => (F(), X("g", { key: n }, [
				R("line", {
					x1: e.incoming.x,
					y1: e.incoming.y,
					x2: e.point.x,
					y2: e.point.y,
					stroke: "var(--color-pen-control)",
					"stroke-width": 1 / d.value
				}, null, 8, Jf),
				R("line", {
					x1: e.point.x,
					y1: e.point.y,
					x2: e.outgoing.x,
					y2: e.outgoing.y,
					stroke: "var(--color-pen-control)",
					"stroke-width": 1 / d.value
				}, null, 8, Yf),
				(F(), X(Y, null, Z(["incoming", "outgoing"], (r) => R("circle", {
					key: r,
					"data-component": "pen-edit-surface__control",
					"data-pen-control": r,
					"data-anchor-index": n,
					class: P(U(t)("pen-edit-surface__control")),
					style: B({ cursor: y(r) }),
					cx: e[r].x,
					cy: e[r].y,
					r: 4 / d.value,
					fill: "var(--color-handle)",
					stroke: "var(--color-pen-control)",
					"stroke-width": 1 / d.value,
					onPointerdown: (e) => j(() => S(e, n, r))
				}, null, 46, Xf)), 64)),
				s.value === n ? (F(), X("rect", {
					key: 0,
					class: "pointer-events-none",
					x: e.point.x - 7 / d.value,
					y: e.point.y - 7 / d.value,
					width: 14 / d.value,
					height: 14 / d.value,
					fill: "none",
					stroke: "var(--color-pen-anchor-selected)",
					"stroke-width": 2 / d.value
				}, null, 8, Zf)) : W("", !0),
				R("rect", {
					"data-component": "pen-edit-surface__control",
					"data-pen-control": "point",
					"data-anchor-index": n,
					"data-selected": s.value === n,
					class: P(U(t)("pen-edit-surface__control")),
					style: B({ cursor: y("point") }),
					x: e.point.x - 4 / d.value,
					y: e.point.y - 4 / d.value,
					width: 8 / d.value,
					height: 8 / d.value,
					fill: s.value === n ? "var(--color-pen-anchor-selected)" : "var(--color-pen-control)",
					stroke: s.value === n ? "var(--color-pen-anchor-selected-border)" : "var(--color-handle)",
					"stroke-width": (s.value === n ? 2 : 1) / d.value,
					onDblclick: Q((e) => j(() => ee(n)), ["stop", "prevent"]),
					onPointerdown: (e) => j(() => S(e, n, "point"))
				}, null, 46, Qf)
			]))), 128))
		], 8, Wf)], 46, Uf));
	}
}), [["__scopeId", "data-v-3d39e467"]]), ep = [
	"data-panning",
	"data-closing",
	"aria-label"
], tp = ["transform"], np = [
	"d",
	"stroke",
	"stroke-width"
], rp = [
	"x1",
	"y1",
	"x2",
	"y2",
	"stroke-width"
], ip = [
	"cx",
	"cy",
	"r"
], ap = [
	"cx",
	"cy",
	"r"
], op = [
	"x",
	"y",
	"width",
	"height",
	"stroke-width"
], sp = /* @__PURE__ */ new Map([[Zn, {
	create: /* @__PURE__ */ Ze(/* @__PURE__ */ G({
		__name: "pen-surface",
		props: {
			pageId: {},
			surface: {}
		},
		setup(e) {
			let t = u(), n = e, r = E(), i = r.store(), a = L(), o = L([]), s = L(), c = L(), l = L(), d = L(!1), f = K(() => i.view.pxPerMm), p = K(() => i.view.spacePanning), m = K(() => i.element.getToolProps(Zn)), h = K(() => {
				let e = [...o.value];
				return s.value && c.value === void 0 && !d.value && e.push(en(s.value)), Ir(e, d.value);
			}), g = `pen.${n.pageId}`, _;
			re([
				{
					run: () => v("finish"),
					shortcut: "Enter"
				},
				{
					run: () => v("cancel"),
					shortcut: "Escape"
				},
				{
					run: () => v("removeAnchor"),
					shortcut: [
						"Backspace",
						"Delete",
						"Ctrl+z"
					]
				}
			], {
				enabled: () => o.value.length > 0,
				target: a
			});
			function v(e) {
				r.commands.dispatch(`${g}.${e}`);
			}
			function y(e) {
				return wr(n.surface.getBoundingClientRect(), {
					x: e.clientX,
					y: e.clientY
				}, f.value);
			}
			function b(e) {
				let t = o.value[0]?.point;
				return o.value.length >= 3 && !!t && Math.hypot(e.x - t.x, e.y - t.y) * f.value <= 8;
			}
			function x() {
				let e = l.value;
				l.value = void 0, c.value = void 0, e !== void 0 && a.value?.hasPointerCapture(e) && a.value.releasePointerCapture(e);
			}
			function S() {
				x(), o.value = [], s.value = void 0, d.value = !1;
			}
			function C(e = !1) {
				if (o.value.length < 2) S();
				else try {
					tr(i, Zn, Gn(o.value, e, m.value), n.pageId);
				} finally {
					S();
				}
			}
			function w() {
				x(), o.value.pop(), d.value = !1, o.value.length === 0 && S();
			}
			function T(e) {
				if (e.button !== 0 || p.value || l.value !== void 0) return;
				e.preventDefault(), e.stopPropagation(), a.value?.focus({ preventScroll: !0 }), i.scope.activate(n.pageId), i.ui.closeContextMenu();
				let t = y(e);
				if (b(t)) {
					C(!0);
					return;
				}
				let r = o.value.at(-1)?.point;
				r && Math.hypot(t.x - r.x, t.y - r.y) * f.value < 2 || (o.value.push(en(t)), c.value = o.value.length - 1, l.value = e.pointerId, a.value?.setPointerCapture(e.pointerId), s.value = void 0);
			}
			function D(e) {
				if (p.value) return;
				let t = y(e);
				if (c.value !== void 0) {
					if (e.pointerId !== l.value) return;
					let n = o.value[c.value];
					Math.hypot(t.x - n.point.x, t.y - n.point.y) * f.value >= 3 && (n.outgoing = t, n.incoming = {
						x: 2 * n.point.x - t.x,
						y: 2 * n.point.y - t.y
					});
				} else s.value = t, d.value = b(t);
			}
			function O(e) {
				e.pointerId === l.value && x();
			}
			function ee(e) {
				e.pointerId === l.value && S();
			}
			function k() {
				c.value === void 0 && (s.value = void 0, d.value = !1);
			}
			function A(e) {
				r.errors.capture(e, { source: "canvas.pen" });
			}
			function te(e) {
				try {
					e();
				} catch (e) {
					S(), A(e);
				}
			}
			return Bn(() => {
				_ = r.commands.registerScoped([
					{
						id: `${g}.finish`,
						run: () => C(),
						get title() {
							return Hf("finish");
						}
					},
					{
						id: `${g}.cancel`,
						run: () => S(),
						get title() {
							return Hf("cancel");
						}
					},
					{
						id: `${g}.removeAnchor`,
						run: () => w(),
						get title() {
							return Hf("removeAnchor");
						}
					}
				]);
			}), Er(() => {
				S(), _?.();
			}), (e, n) => (F(), X("svg", {
				ref_key: "svg",
				ref: a,
				"data-component": "pen-surface",
				"data-panning": p.value,
				"data-closing": d.value,
				"data-pen-overlay": "",
				class: P([U(t)("pen-surface"), {
					[U(t)("pen-surface--panning")]: p.value,
					[U(t)("pen-surface--closing")]: d.value
				}]),
				width: "100%",
				height: "100%",
				tabindex: "-1",
				"aria-label": U(Hf)("help"),
				onPointerdown: n[0] ||= (e) => te(() => T(e)),
				onPointermove: D,
				onPointerup: O,
				onPointercancel: ee,
				onLostpointercapture: ee,
				onPointerleave: k,
				onDblclick: n[1] ||= Q((e) => v("finish"), ["stop", "prevent"]),
				onContextmenu: n[2] ||= Q((e) => v("cancel"), ["stop", "prevent"])
			}, [R("title", null, q(U(Hf)("help")), 1), R("g", {
				transform: `scale(${f.value})`,
				"pointer-events": "none"
			}, [R("path", {
				d: h.value,
				fill: "none",
				stroke: String(m.value.stroke ?? "#333333"),
				"stroke-width": U(zn)(m.value)
			}, null, 8, np), (F(!0), X(Y, null, Z(o.value, (e, t) => (F(), X("g", { key: t }, [
				R("line", {
					x1: e.incoming.x,
					y1: e.incoming.y,
					x2: e.outgoing.x,
					y2: e.outgoing.y,
					stroke: "var(--color-pen-control)",
					"stroke-width": 1 / f.value
				}, null, 8, rp),
				R("circle", {
					cx: e.incoming.x,
					cy: e.incoming.y,
					r: 2 / f.value,
					fill: "var(--color-pen-control)"
				}, null, 8, ip),
				R("circle", {
					cx: e.outgoing.x,
					cy: e.outgoing.y,
					r: 2 / f.value,
					fill: "var(--color-pen-control)"
				}, null, 8, ap),
				R("rect", {
					x: e.point.x - 3 / f.value,
					y: e.point.y - 3 / f.value,
					width: 6 / f.value,
					height: 6 / f.value,
					fill: "var(--color-handle)",
					stroke: "var(--color-pen-control)",
					"stroke-width": 1 / f.value
				}, null, 8, op)
			]))), 128))], 8, tp)], 42, ep));
		}
	}), [["__scopeId", "data-v-d1fc0383"]]),
	edit: $f
}]]);
function cp(e) {
	let t = E(), n = t.store();
	return {
		creationSurface: ze((e) => {
			let t = n.view.activeTool;
			if (!t.startsWith("element:")) return;
			let r = t.slice(8), i = sp.get(r)?.create;
			if (i && e.getCreatable(r)) return {
				component: i,
				type: r
			};
		}),
		editSurface: K(() => {
			if (n.view.activeTool !== "select" || n.view.settings.previewWithData || n.view.spacePanning) return;
			let { nodes: r } = t.getSelection(), i = r.length === 1 ? r[0] : void 0;
			if (!i?.visible || i.locked) return;
			let a = sp.get(i.type)?.edit;
			if (a && n.element.find(i.id)?.page.id === e().id) return {
				component: a,
				node: i
			};
		})
	};
}
var lp = ["title"], up = {
	key: 0,
	class: "shrink-0 whitespace-nowrap text-accent"
}, dp = ["data-page-surface"], fp = {
	key: 1,
	class: "pointer-events-none absolute inset-0 isolate"
}, pp = { class: "absolute inset-0 isolate z-canvas-content" }, mp = 17, hp = 2, gp = /* @__PURE__ */ G({
	__name: "page-view",
	props: {
		offsetX: {},
		offsetY: {},
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = u(), n = e, r = E(), i = r.store(), { commands: a } = r, o = L(), { creationSurface: s, editSurface: c } = cp(() => n.page), l = {
			bottom: `calc(100% + ${hp}px)`,
			height: `${mp}px`,
			lineHeight: `${mp}px`
		}, d = K(() => {
			let { offsetX: e, offsetY: t, page: r } = n, a = t;
			for (let n of i.view.pageLayouts) n.y >= t || n.x >= e + r.width || n.x + n.page.width <= e || (a = Math.min(a, t - n.y - n.page.height));
			return a;
		}), f = K(() => d.value * n.pxPerMm >= 21), p = K(() => i.canvas.getPage(n.page.id)?.elements ?? i.canvas.resolve(n.page, n.page.elements)), m = K(() => i.template.editingId !== null), h = K(() => n.page.id === i.template.editingTemplate?.evenPage?.id ? 2 : 1), g = K(() => {
			if (i.template.editingTemplate?.facingPages) {
				let e = h.value === 2 ? "evenPages" : "oddPages";
				return `${n.page.name} · ${H(`designer.templateBanner.${e}`)}`;
			}
			return n.page.name;
		}), _ = K(() => {
			let e = i.template.resolveFor(n.page);
			if (m.value) {
				let t = i.template.editingTemplate;
				e = t ? Rt(i.document.data, t, h.value) : void 0;
			}
			return !e || e.page.elements.length === 0 ? [] : i.canvas.resolve(n.page, e.page.elements);
		}), v = K(() => {
			let e = i.template.resolveEditingPage(n.page.id);
			return e ? gr(e) : i.template.effectiveBackground(n.page) || "#ffffff";
		}), y = K(() => i.scope.active?.id === n.page.id), b = K(() => i.element.draftPageId === n.page.id ? i.element.draftElement : null), x = K(() => i.view.snapLines.pageId === n.page.id ? i.view.snapLines : null), S = K(() => {
			let e = i.view.settings.gridSize * n.pxPerMm;
			return {
				backgroundImage: "linear-gradient(to right, var(--color-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--color-grid) 1px, transparent 1px)",
				backgroundSize: `${e}px ${e}px`
			};
		}), C = K(() => {
			let e = jn(n.page);
			return {
				height: `${e.height * n.pxPerMm}px`,
				left: `${e.x * n.pxPerMm}px`,
				top: `${e.y * n.pxPerMm}px`,
				width: `${e.width * n.pxPerMm}px`
			};
		});
		function w(e) {
			return Math.round(e * 100) / 100;
		}
		function T(e) {
			if (e.button === 1 || i.view.spacePanning || (i.scope.activate(n.page.id), i.ui.closeContextMenu(), e.button !== 0)) return;
			if (i.view.activeTool === "select") {
				kd(i, e, n.page);
				return;
			}
			let t = hn(i.view.activeTool, r.elements);
			if (t?.kind === "element" && t.elementType) {
				if (s.value) return;
				let a = D().find((t) => Fr(t, O(e), r.elements));
				if (a) {
					Hd(i, e, a.id, n.page);
					return;
				}
				Bd(i, e, t.elementType, n.page, r);
			}
		}
		function D() {
			return p.value.filter((e) => e.visible && i.selection.has(e.id));
		}
		function O(e) {
			let t = e.currentTarget.getBoundingClientRect();
			return wr(t, {
				x: e.clientX,
				y: e.clientY
			}, n.pxPerMm);
		}
		function ee(e) {
			i.scope.activate(n.page.id);
			let t = Jn(i).contentMmFromClient(e.clientX, e.clientY, i.view.zoom), r = yt(a, [...Ut(t), "edit.selectAll"], k);
			i.template.isContainer(n.page.id) ? i.ui.openContextMenu(e.clientX, e.clientY, [
				...r,
				{ type: "divider" },
				...yt(a, [{
					args: [n.page.id],
					id: "template.pageSetup"
				}], k)
			]) : i.ui.openContextMenu(e.clientX, e.clientY, [
				...r,
				{ type: "divider" },
				...yt(a, [
					{
						args: [n.page.id],
						id: "file.pageSetup"
					},
					{
						args: [n.page.id],
						id: "page.applyTemplate"
					},
					{
						args: [n.page.id],
						id: "page.copy"
					},
					{
						args: [n.page.id],
						id: "page.remove"
					}
				], k)
			]);
		}
		function k(e, ...t) {
			a.dispatch(e, ...t);
		}
		function A(e) {
			e.button === 0 && !i.view.spacePanning && i.view.activeTool !== "hand" && e.stopPropagation();
		}
		async function te(e) {
			let t = e.dataTransfer?.files?.[0];
			t && (e.preventDefault(), await Ud(r, t, n.page, O(e)));
		}
		return (n, r) => (F(), X("div", {
			class: "absolute",
			style: B({
				left: `${e.offsetX * e.pxPerMm}px`,
				top: `${e.offsetY * e.pxPerMm}px`,
				width: `${e.page.width * e.pxPerMm}px`,
				height: `${e.page.height * e.pxPerMm}px`
			})
		}, [f.value ? (F(), X("div", {
			key: 0,
			class: "absolute inset-x-0 flex cursor-pointer items-center justify-between gap-2 overflow-hidden px-0.5 text-[14px] text-ink-dim select-none",
			style: l,
			title: g.value,
			onPointerdown: A,
			onDblclick: r[0] ||= Q((t) => k(m.value ? "template.pageSetup" : "file.pageSetup", e.page.id), ["stop"])
		}, [R("span", { class: P(["min-w-0 truncate", { "text-accent": y.value }]) }, q(U(H)("designer.pageView.pageSummary", {
			pageName: g.value,
			width: w(e.page.width),
			height: w(e.page.height)
		})), 3), m.value ? (F(), X("span", up, q(U(H)("designer.pageView.templateEditingBadge")), 1)) : W("", !0)], 40, lp)) : W("", !0), R("div", {
			ref_key: "surface",
			ref: o,
			"data-test-part": "page-surface",
			class: P(["absolute inset-0 isolate [box-shadow:0_2px_18px_var(--color-shadow)]", [U(t)("page-surface"), { "outline outline-1 outline-selection-border": y.value }]]),
			"data-page-surface": e.page.id,
			style: B({ background: U(Hr)(v.value) }),
			onPointerdown: T,
			onContextmenu: Q(ee, ["prevent"]),
			onDragover: r[1] ||= Q(() => {}, ["prevent"]),
			onDrop: te
		}, [
			V(Nf, {
				layer: "move",
				"display-nodes": p.value,
				page: e.page,
				"px-per-mm": e.pxPerMm
			}, null, 8, [
				"display-nodes",
				"page",
				"px-per-mm"
			]),
			R("div", {
				"data-test-part": "page-view__content",
				class: P(["absolute inset-0 overflow-hidden", U(t)("page-view__content")])
			}, [
				U(i).view.settings.showGrid ? (F(), X("div", {
					key: 0,
					class: "pointer-events-none absolute inset-0",
					style: B(S.value)
				}, null, 4)) : W("", !0),
				_.value.length > 0 ? (F(), X("div", fp, [(F(!0), X(Y, null, Z(_.value, (t, n) => (F(), I(Yd, {
					key: `template-${t.id}`,
					"read-only": "",
					node: t,
					index: n,
					page: e.page,
					"px-per-mm": e.pxPerMm
				}, null, 8, [
					"node",
					"index",
					"page",
					"px-per-mm"
				]))), 128))])) : W("", !0),
				R("div", pp, [(F(!0), X(Y, null, Z(p.value, (t, n) => (F(), I(Yd, {
					key: t.id,
					node: t,
					index: n,
					page: e.page,
					"px-per-mm": e.pxPerMm
				}, null, 8, [
					"node",
					"index",
					"page",
					"px-per-mm"
				]))), 128))]),
				b.value ? (F(), I(Yd, {
					key: 2,
					node: b.value,
					index: -1,
					page: e.page,
					"px-per-mm": e.pxPerMm,
					"is-draft": ""
				}, null, 8, [
					"node",
					"page",
					"px-per-mm"
				])) : W("", !0),
				V(rf, {
					page: e.page,
					"px-per-mm": e.pxPerMm
				}, null, 8, ["page", "px-per-mm"]),
				U(i).view.settings.showMargins && e.page.margins ? (F(), X("div", {
					key: 3,
					"data-test-part": "page-view__margins",
					class: P(["pointer-events-none absolute z-canvas-guide border border-dashed border-accent/60", U(t)("page-view__margins")]),
					style: B(C.value)
				}, null, 6)) : W("", !0),
				V(cf, {
					page: e.page,
					"px-per-mm": e.pxPerMm
				}, null, 8, ["page", "px-per-mm"]),
				V($d, {
					page: e.page,
					"px-per-mm": e.pxPerMm
				}, null, 8, ["page", "px-per-mm"]),
				x.value ? (F(), X(Y, { key: 4 }, [(F(!0), X(Y, null, Z(x.value.v, (t, n) => (F(), X("div", {
					key: `v-${n}`,
					class: "pointer-events-none absolute z-canvas-snap",
					style: B({
						left: `${t * e.pxPerMm}px`,
						top: 0,
						bottom: 0,
						width: "1px",
						background: "var(--color-snap)"
					})
				}, null, 4))), 128)), (F(!0), X(Y, null, Z(x.value.h, (t, n) => (F(), X("div", {
					key: `h-${n}`,
					class: "pointer-events-none absolute z-canvas-snap",
					style: B({
						top: `${t * e.pxPerMm}px`,
						left: 0,
						right: 0,
						height: "1px",
						background: "var(--color-snap)"
					})
				}, null, 4))), 128))], 64)) : W("", !0),
				V(af, {
					page: e.page,
					"px-per-mm": e.pxPerMm
				}, null, 8, ["page", "px-per-mm"])
			], 2),
			V(Nf, {
				"display-nodes": p.value,
				page: e.page,
				"px-per-mm": e.pxPerMm
			}, null, 8, [
				"display-nodes",
				"page",
				"px-per-mm"
			]),
			o.value ? (F(), X(Y, { key: 0 }, [U(s) ? (F(), I(cn(U(s).component), {
				key: U(s).type,
				"page-id": e.page.id,
				surface: o.value
			}, null, 8, ["page-id", "surface"])) : U(c) ? (F(), I(cn(U(c).component), {
				key: U(c).node.id,
				node: U(c).node,
				surface: o.value
			}, null, 8, ["node", "surface"])) : W("", !0)], 64)) : W("", !0)
		], 46, dp)], 4));
	}
}), _p = /* @__PURE__ */ G({
	__name: "ruler",
	props: { orientation: {} },
	setup(e) {
		let t = e, n = E().store(), r = L(null), i = null, a = null;
		function o() {
			let e = r.value;
			if (!e) return;
			let i = window.devicePixelRatio || 1, a = e.clientWidth, o = e.clientHeight;
			(e.width !== Math.round(a * i) || e.height !== Math.round(o * i)) && (e.width = Math.round(a * i), e.height = Math.round(o * i));
			let s = e.getContext("2d");
			if (!s) return;
			s.setTransform(i, 0, 0, i, 0, 0), s.clearRect(0, 0, a, o);
			let c = getComputedStyle(e);
			s.fillStyle = c.getPropertyValue("--color-panel").trim(), s.fillRect(0, 0, a, o);
			let l = t.orientation === "horizontal", u = 96 / 25.4 * n.view.zoom, d = l ? n.view.scrollPos.left : n.view.scrollPos.top, f = l ? a : o, p = [
				1,
				2,
				5,
				10,
				20,
				50,
				100,
				200,
				500,
				1e3
			].find((e) => e * u >= 7) ?? 2e3, m = p * 5 * u >= 34 ? p * 5 : p * 10, h = n.view.originOf(n.scope.active?.id ?? n.page.activeId), g = 0;
			h && (g = l ? h.x : h.y);
			let _ = (d - 20) / u - g, v = (d + f - 20) / u - g, y = Math.floor(_ / p) * p;
			s.strokeStyle = c.getPropertyValue("--color-edge-2").trim(), s.fillStyle = c.getPropertyValue("--color-ink-dim").trim(), s.lineWidth = 1, s.font = "9px \"Segoe UI\", sans-serif", s.textBaseline = "top";
			for (let e = y; e <= v + p; e += p) {
				let t = (e + g) * u - d + 20, n = Math.abs(e % m) < 1e-6, r = n ? 9 : 5;
				if (s.beginPath(), l) {
					let e = Math.round(t) + .5;
					s.moveTo(e, 20 - r), s.lineTo(e, 20);
				} else {
					let e = Math.round(t) + .5;
					s.moveTo(20 - r, e), s.lineTo(20, e);
				}
				if (s.stroke(), n) {
					let n = String(Math.round(e));
					l ? (s.textAlign = "left", s.fillText(n, t + 3, 3)) : (s.save(), s.translate(3, t + 2), s.rotate(-Math.PI / 2), s.textAlign = "right", s.fillText(n, 0, 0), s.restore());
				}
			}
			let b = n.view.cursorContent;
			if (b) {
				let e = (l ? b.x : b.y) * u - d + 20;
				e >= 0 && e <= f && (s.strokeStyle = c.getPropertyValue("--color-accent").trim(), s.beginPath(), l ? (s.moveTo(e + .5, 0), s.lineTo(e + .5, 20)) : (s.moveTo(0, e + .5), s.lineTo(20, e + .5)), s.stroke());
			}
		}
		function s(e) {
			if (e.button !== 0 || n.view.settings.guidesLocked) return;
			let r = Jn(n).contentMmFromClient(e.clientX, e.clientY, n.view.zoom), i = t.orientation === "horizontal", a = n.view.pageLayouts.find((e) => i ? r.x >= e.x && r.x <= e.x + e.page.width : r.y >= e.y && r.y <= e.y + e.page.height) ?? n.view.getLayout(n.scope.active?.id ?? "");
			if (!a) return;
			let o = n.view.toLocal(a.page.id, r);
			if (!o) return;
			let s = i ? o.y : o.x, c = n.guide.add(a.page.id, i ? "horizontal" : "vertical", s, { transient: !0 });
			c && (n.scope.activate(a.page.id), ef(n, e, a.page, c, { discardIfUnmoved: !0 }));
		}
		return gn(() => {
			n.view.scrollPos.left, n.view.scrollPos.top, n.view.zoom, n.view.cursorContent?.x, n.view.cursorContent?.y, o();
		}), Bn(() => {
			a = new MutationObserver(o), a.observe(document.documentElement, {
				attributeFilter: ["theme-mode"],
				attributes: !0
			});
			let e = r.value;
			e && (i = new ResizeObserver(() => {
				o();
			}), i.observe(e));
		}), Er(() => {
			a?.disconnect(), a = null, i?.disconnect(), i = null;
		}), (t, n) => (F(), X("canvas", {
			ref_key: "canvasRef",
			ref: r,
			class: P(["block bg-panel", e.orientation === "horizontal" ? "h-5 w-full" : "h-full w-5"]),
			onPointerdown: s
		}, null, 34));
	}
}), vp = { class: "flex w-full items-center gap-3" }, yp = { class: "shrink-0 text-compact text-ink-dim" }, bp = { class: "min-w-0 flex-1" }, xp = { class: "flex w-full flex-wrap items-center gap-x-3 gap-y-2" }, Sp = ["title"], Cp = { class: "flex shrink-0 items-center gap-1 text-compact text-ink-dim" }, wp = { class: "w-32 shrink-0" }, Tp = /* @__PURE__ */ G({
	__name: "template-editing-banner",
	setup(e) {
		let t = E(), n = t.store(), r = L(""), i = K({
			get() {
				let e = n.template.editingPage?.id, t = e ? n.template.resolveEditingPage(e) : void 0;
				return t ? gr(t) : "#ffffff";
			},
			set(e) {
				let r = n.template.editingId;
				r && t.commands.invoke("template.update", r, { background: e }, { transient: !0 });
			}
		}), a = K(() => [{
			label: H("designer.templateBanner.noTemplateLabel"),
			value: ""
		}, ...n.template.list.filter((e) => e.id !== n.template.editingId).map((e) => ({
			label: e.name,
			value: e.id
		}))]);
		function o() {
			t.commands.dispatch("template.pageSetup");
		}
		function s() {
			let e = n.template.editingId;
			e && r.value.trim() && t.commands.invoke("template.rename", e, r.value);
		}
		function c() {
			n.history.commit();
		}
		function l(e) {
			let r = n.template.editingId;
			r && t.commands.invoke("template.update", r, { facingPages: e });
		}
		function u(e) {
			let r = n.template.editingId;
			r && typeof e == "string" && t.commands.invoke("template.update", r, { baseTemplateId: e });
		}
		return J(() => n.template.editingTemplate?.name ?? "", (e) => {
			r.value = e;
		}, { immediate: !0 }), (e, d) => {
			let f = x, p = Ee, m = $e, h = lt;
			return F(), X(Y, null, [R("div", vp, [
				V(N, {
					name: "template",
					class: "h-4 w-4 shrink-0 text-accent"
				}),
				R("span", yp, q(U(H)("designer.templateBanner.editingLabel")), 1),
				R("div", bp, [V(f, {
					modelValue: r.value,
					"onUpdate:modelValue": d[0] ||= (e) => r.value = e,
					"data-tutorial-control": "template-name",
					size: "small",
					"aria-label": U(H)("designer.templateBanner.nameLabel"),
					onBlur: s,
					onEnter: s
				}, null, 8, ["modelValue", "aria-label"])]),
				V(p, {
					"data-tutorial-control": "template-settings",
					size: "small",
					variant: "outline",
					onClick: o
				}, {
					icon: $(() => [V(N, {
						name: "sliders",
						class: "h-3.5 w-3.5"
					})]),
					default: $(() => [z(" " + q(U(H)("designer.pageView.pageSettingsLabel")), 1)]),
					_: 1
				}),
				V(p, {
					"data-tutorial-control": "template-done",
					size: "small",
					theme: "primary",
					variant: "base",
					onClick: d[1] ||= (e) => U(t).commands.dispatch("template.exitEdit")
				}, {
					icon: $(() => [V(N, {
						name: "check",
						class: "h-3.5 w-3.5"
					})]),
					default: $(() => [z(" " + q(U(H)("designer.templateBanner.doneButton")), 1)]),
					_: 1
				})
			]), R("div", xp, [
				R("div", {
					class: "flex shrink-0 items-center gap-1 text-compact text-ink-dim",
					title: U(H)("designer.templateBanner.backgroundHint")
				}, [z(q(U(H)("designer.templateBanner.backgroundLabel")) + " ", 1), V(j, {
					modelValue: i.value,
					"onUpdate:modelValue": d[2] ||= (e) => i.value = e,
					"reset-value": "",
					onCommit: c
				}, null, 8, ["modelValue"])], 8, Sp),
				U(n).template.editingTemplate?.owner ? W("", !0) : (F(), I(m, {
					key: 0,
					"data-tutorial-control": "facing-pages",
					checked: U(n).template.editingTemplate?.facingPages === !0,
					onChange: d[3] ||= (e) => l(!!e)
				}, {
					default: $(() => [z(q(U(H)("designer.templateBanner.facingPages")), 1)]),
					_: 1
				}, 8, ["checked"])),
				R("label", Cp, [z(q(U(H)("designer.templateBanner.baseTemplateLabel")) + " ", 1), R("div", wp, [V(h, {
					size: "small",
					value: U(n).template.editingTemplate?.baseTemplateId ?? "",
					options: a.value,
					"aria-label": U(H)("designer.templateBanner.baseTemplateLabel"),
					onChange: u
				}, null, 8, [
					"value",
					"options",
					"aria-label"
				])])])
			])], 64);
		};
	}
});
function Ep(e, t) {
	let n = L(!1), r, i = K(() => n.value ? "cursor-grabbing select-none" : e.spacePanning || e.activeTool === "hand" ? "cursor-grab" : "");
	function a(i) {
		if (!e.spacePanning && e.activeTool !== "hand" && i.button !== 1) return;
		i.preventDefault(), i.stopPropagation();
		let a = t.value;
		if (!a) return;
		r?.(), n.value = !0;
		let o = i.clientX, s = i.clientY, c = a.scrollLeft, l = a.scrollTop;
		r = Ot({
			onEnd() {
				n.value = !1, r = void 0;
			},
			onMove(e) {
				a.scrollLeft = c - (e.event.clientX - o), a.scrollTop = l - (e.event.clientY - s);
			},
			pointerId: i.pointerId,
			startPoint: {
				x: o,
				y: s
			},
			tag: "pan",
			target: a
		});
	}
	return Er(() => r?.()), {
		onStagePointerDown: a,
		panningClass: i
	};
}
function Dp(e) {
	let { bannerHeight: t, contentEl: n, isTemplateEditing: r, scrollEl: i, store: a } = e, o = null;
	he(i, () => {
		i.value && a.view.setViewportSize({
			height: i.value.clientHeight,
			width: i.value.clientWidth
		});
	});
	function s() {
		return a.view.settings.showRulers ? 20 : 0;
	}
	function c() {
		return r.value ? t.value + 40 : 0;
	}
	function l() {
		let e = i.value;
		e && (a.view.setScrollPos({
			left: e.scrollLeft,
			top: e.scrollTop
		}), g());
	}
	function u(e) {
		if (!(e.ctrlKey || e.metaKey)) return;
		e.preventDefault();
		let t = i.value;
		if (!t) return;
		let n = t.getBoundingClientRect(), r = e.clientX - n.left, o = e.clientY - n.top;
		d(a.view.zoom * Math.exp(-e.deltaY * .0018), {
			x: r,
			y: o
		});
	}
	function d(e, t) {
		let r = i.value;
		if (!r || !n.value) {
			a.view.setZoom(e);
			return;
		}
		let o = s(), l = o + c(), u = r.getBoundingClientRect(), d = Jn(a), f = (e) => d.contentMmFromClient(u.left + e.x, u.top + e.y, a.view.zoom), p = t ?? {
			x: (o + r.clientWidth) / 2,
			y: (l + r.clientHeight) / 2
		}, m = f(p);
		if (!t) {
			let e = a.view.pageLayouts, t = a.view.getLayout(a.page.activeId) ?? e[0];
			if (!e.some(({ page: e, x: t, y: n }) => m.x >= t && m.x <= t + e.width && m.y >= n && m.y <= n + e.height) && t) {
				let n = f({
					x: o,
					y: l
				}), i = f({
					x: r.clientWidth,
					y: r.clientHeight
				}), s = [t, ...e].find(({ page: e, x: t, y: r }) => t < i.x && t + e.width > n.x && r < i.y && r + e.height > n.y);
				if (s) {
					let { page: e, x: t, y: r } = s, o = {
						x: (Math.max(t, n.x) + Math.min(t + e.width, i.x)) / 2,
						y: (Math.max(r, n.y) + Math.min(r + e.height, i.y)) / 2
					};
					p = {
						x: p.x + (o.x - m.x) * a.view.pxPerMm,
						y: p.y + (o.y - m.y) * a.view.pxPerMm
					}, m = o;
				} else m = {
					x: t.x + t.page.width / 2,
					y: t.y + t.page.height / 2
				};
			}
		}
		let h = a.view.zoom;
		a.view.setZoom(e), h !== a.view.zoom && Lr(() => d.scrollToContentPoint(m, p.x, p.y, a.view.zoom));
	}
	function f() {
		let e = i.value, t = a.view.pagesBoundsMm;
		if (!e || !t) return;
		let n = (t.width + 80) * Kn, r = (t.height + 80) * Kn, o = e.clientWidth - s(), l = e.clientHeight - s() - c();
		a.view.setZoom(Tn(Math.min(o / n, l / r), .05, 4)), Lr(() => {
			let n = a.view.pxPerMm;
			e.scrollLeft = (t.x + t.width / 2) * n + s() - e.clientWidth / 2, e.scrollTop = (t.y + t.height / 2) * n + s() - (e.clientHeight + c()) / 2;
		});
	}
	function p() {
		a.view.setZoom(1), Lr(() => m(a.page.active, "instant"));
	}
	function m(e, t = "smooth") {
		let n = i.value, r = e ? a.view.getLayout(e.id) : null, o = r ? {
			...r,
			height: r.page.height,
			width: r.page.width
		} : a.view.pagesBoundsMm;
		n && o && n.scrollTo({
			behavior: t,
			left: (o.x + o.width / 2) * a.view.pxPerMm + s() - n.clientWidth / 2,
			top: (o.y + o.height / 2) * a.view.pxPerMm + s() - n.clientHeight / 2
		});
	}
	function h(e) {
		let t = a.view.getLayout(e.id);
		t && i.value && i.value.scrollTo({
			behavior: "smooth",
			left: (t.x - 10) * a.view.pxPerMm,
			top: (t.y - 10) * a.view.pxPerMm
		});
	}
	function g() {
		o && a.view.setCursorContent(Jn(a).contentMmFromClient(o.x, o.y, a.view.zoom));
	}
	function _(e) {
		o = {
			x: e.clientX,
			y: e.clientY
		}, g();
	}
	function v() {
		o = null, a.view.setCursorContent(null);
	}
	return J(() => [a.view.zoom, a.view.settings.showRulers], g, { flush: "post" }), J(() => [
		a.scope.id,
		a.template.editingTemplate?.facingPages,
		t.value
	], () => {
		Lr(f);
	}), Bn(() => {
		Jn(a).registerStageElements(i.value, n.value), Jn(a).registerStageController({
			centerPages: m,
			fitToViewport: f,
			scrollToPage: h,
			zoomReset: p,
			zoomTo: d
		});
		let e = i.value;
		e && a.view.setViewportSize({
			height: e.clientHeight,
			width: e.clientWidth
		});
	}), Er(() => {
		a.view.setViewportSize({
			height: 0,
			width: 0
		}), v(), Jn(a).registerStageElements(null, null), Jn(a).registerStageController(null);
	}), {
		onScroll: l,
		onStagePointerLeave: v,
		onStagePointerMove: _,
		onWheel: u
	};
}
var Op = ["title"], kp = ["title"], Ap = ["onClick"], jp = { class: "flex-1 truncate text-left" }, Mp = {
	key: 0,
	class: "text-caption text-accent"
}, Np = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "canvas-stage",
	setup(e) {
		let t = u(), n = E().store(), { commands: r } = E(), i = L(null), a = L(null), s = L(null), c = L(!1), l = L(null), { height: d } = k(l);
		re([{
			run: w,
			shortcut: "Escape"
		}], {
			enabled: () => c.value,
			target: () => document
		});
		let f = K(() => ({
			height: `${n.view.contentSizeMm.height * n.view.pxPerMm}px`,
			width: `${n.view.contentSizeMm.width * n.view.pxPerMm}px`
		})), p = K(() => n.template.editingTemplate !== void 0), { onStagePointerDown: m, panningClass: h } = Ep(n.view, i), { onScroll: g, onStagePointerLeave: _, onStagePointerMove: v, onWheel: y } = Dp({
			bannerHeight: d,
			contentEl: a,
			isTemplateEditing: p,
			scrollEl: i,
			store: n
		}), b = K(() => n.view.settings.showRulers ? "pt-5 pl-5" : "");
		o(s, w);
		function x(e, ...t) {
			r.dispatch(e, ...t);
		}
		function S(e) {
			C(!1), x("view.centerPages", e.id);
		}
		function C(e) {
			c.value = e;
		}
		function w() {
			C(!1);
		}
		function T(e) {
			e.button !== 0 || n.view.spacePanning || n.view.activeTool === "hand" || e.target instanceof Element && e.target.closest("[data-page-surface]") || (n.view.activeTool === "select" ? (n.ui.closeContextMenu(), kd(n, e)) : n.selection.clear()), m(e);
		}
		function D(e) {
			e.target instanceof Element && e.target.closest("[data-page-surface]") || (e.preventDefault(), n.ui.openContextMenu(e.clientX, e.clientY, O()));
		}
		function O() {
			return [
				...yt(r, Cn.map((e) => `canvas.background.${e.id}`), x),
				Ve(),
				...yt(r, ["canvas.background.custom"], x)
			];
		}
		return (e, r) => (F(), X("div", {
			class: "relative flex-1 overflow-hidden",
			style: B({ background: U(n).view.canvasBackground })
		}, [
			U(n).view.settings.showRulers ? (F(), I(_p, {
				key: 0,
				orientation: "horizontal",
				class: "absolute inset-x-0 top-0 z-canvas-tools"
			})) : W("", !0),
			U(n).view.settings.showRulers ? (F(), I(_p, {
				key: 1,
				orientation: "vertical",
				class: "absolute inset-y-0 left-0 z-canvas-tools"
			})) : W("", !0),
			p.value ? (F(), X("div", {
				key: 2,
				ref_key: "bannerRef",
				ref: l,
				class: "absolute left-8 top-7 z-canvas-tools flex w-120 max-w-[calc(100%-44px)] flex-wrap items-center gap-x-3 gap-y-2 rounded border border-edge bg-panel-2 px-3 py-2 [box-shadow:0_6px_20px_var(--color-shadow)]"
			}, [V(Tp)], 512)) : W("", !0),
			p.value ? W("", !0) : (F(), X("div", {
				key: 3,
				ref_key: "locateGroupRef",
				ref: s,
				"data-component": "canvas-locator",
				class: P(["absolute bottom-3 right-3 z-canvas-tools flex items-stretch [border-radius:3px] border border-edge bg-floating-panel", U(t)("canvas-locator")])
			}, [
				R("button", {
					"data-test-part": "canvas-locator__button",
					type: "button",
					class: P(["flex h-7 w-7 items-center justify-center text-ink-dim hover:bg-panel-3 hover:text-ink", U(t)("canvas-locator__button")]),
					title: U(H)("designer.canvasStage.locateCurrentPageTitle"),
					onClick: r[0] ||= (e) => x("view.centerPages")
				}, [V(N, {
					name: "locate",
					class: "h-4 w-4"
				})], 10, Op),
				R("div", { class: P(["w-px [margin:5px_0] [background:var(--color-edge)]", U(t)("canvas-locator__divider")]) }, null, 2),
				R("button", {
					"data-test-part": "canvas-locator__button",
					type: "button",
					class: P(["flex h-7 w-7 items-center justify-center text-ink-dim hover:bg-panel-3 hover:text-ink", U(t)("canvas-locator__button")]),
					title: U(H)("designer.canvasStage.selectPageTitle"),
					onClick: r[1] ||= (e) => C(!c.value)
				}, [V(N, {
					name: "chevron-down",
					class: "h-3.5 w-3.5"
				})], 10, kp),
				c.value ? (F(), X("div", {
					key: 0,
					class: P(["absolute right-0 min-w-52.5 max-h-60 overflow-y-auto border border-edge bg-panel-2 [bottom:calc(100%_+_6px)] [padding:4px_0] [border-radius:3px] [box-shadow:0_8px_24px_var(--color-shadow)]", U(t)("canvas-locator__menu")])
				}, [(F(!0), X(Y, null, Z(U(n).view.pageLayouts, (e, r) => (F(), X("button", {
					key: e.page.id,
					"data-component": "canvas-locator__item",
					type: "button",
					class: P(["flex w-full items-center gap-1.5 [padding:5px_10px] text-xs text-left text-ink whitespace-nowrap hover:bg-menu-hover hover:text-menu-foreground", U(t)("canvas-locator__item")]),
					onClick: (t) => S(e.page)
				}, [
					V(N, {
						name: "locate",
						class: "h-3.5 w-3.5 shrink-0"
					}),
					R("span", jp, q(U(H)("designer.canvasStage.pageSummary", {
						pageName: e.page.name || U(H)("designer.canvasStage.numberedPageName", { pageNumber: r + 1 }),
						width: e.page.width,
						height: e.page.height
					})), 1),
					e.page.id === U(n).page.activeId ? (F(), X("span", Mp, q(U(H)("designer.canvasStage.currentPageIndicator")), 1)) : W("", !0)
				], 10, Ap))), 128))], 2)) : W("", !0)
			], 2)),
			R("div", {
				ref_key: "scrollEl",
				ref: i,
				"data-tutorial-control": "canvas-background",
				class: P(["absolute inset-0 overflow-auto", [U(h), b.value]]),
				onScroll: r[2] ||= (...e) => U(g) && U(g)(...e),
				onWheel: r[3] ||= (...e) => U(y) && U(y)(...e),
				onPointerdown: T,
				onPointermove: r[4] ||= (...e) => U(v) && U(v)(...e),
				onPointerleave: r[5] ||= (...e) => U(_) && U(_)(...e),
				onContextmenu: D
			}, [R("div", {
				ref_key: "contentEl",
				ref: a,
				class: "relative",
				style: B(f.value)
			}, [(F(!0), X(Y, null, Z(U(n).view.pageLayouts, (e) => (F(), I(gp, {
				key: e.page.id,
				page: e.page,
				"offset-x": e.x,
				"offset-y": e.y,
				"px-per-mm": U(n).view.pxPerMm
			}, null, 8, [
				"page",
				"offset-x",
				"offset-y",
				"px-per-mm"
			]))), 128)), V(jd)], 4)], 34)
		], 4));
	}
}), [["__scopeId", "data-v-44cbb159"]]), Pp = 8, Fp = /* @__PURE__ */ G({
	__name: "context-menu",
	setup(e) {
		let t = E().store(), n = Dr(qn, void 0), { isTop: r, zIndex: i } = Kt(() => t.ui.contextMenu.open), a = L(null);
		re([{
			run: t.ui.closeContextMenu,
			shortcut: "Escape"
		}], {
			enabled: () => t.ui.contextMenu.open && r.value,
			target: () => document
		});
		let o = K(() => {
			let e = t.ui.contextMenu.items.length * 30 + 10, n = t.ui.contextMenu.x, r = t.ui.contextMenu.y;
			return n + 200 > window.innerWidth && (n = window.innerWidth - 200 - Pp), r + e > window.innerHeight && (r = window.innerHeight - e - Pp), {
				x: Math.max(Pp, n),
				y: Math.max(Pp, r)
			};
		});
		function s(e) {
			e.disabled || (e.keepOpen || t.ui.closeContextMenu(), e.action());
		}
		function c(e) {
			if (io(e)) return;
			let n = a.value;
			n && e.target instanceof Node && n.contains(e.target) || t.ui.contextMenu.open && t.ui.closeContextMenu();
		}
		return Bn(() => {
			window.addEventListener("pointerdown", c, !0);
		}), Er(() => {
			window.removeEventListener("pointerdown", c, !0);
		}), (e, r) => (F(), I(Ur, { to: U(n)?.() ?? "body" }, [U(t).ui.contextMenu.open ? (F(), X("div", {
			key: 0,
			ref_key: "menuRef",
			ref: a,
			"data-context-menu": "",
			class: "fixed min-w-45 rounded-(--studio-menu-radius) border border-edge bg-menu-surface py-1 [box-shadow:var(--td-shadow-2)]",
			style: B({
				left: `${o.value.x}px`,
				top: `${o.value.y}px`,
				zIndex: U(i)
			}),
			onPointerdown: r[0] ||= Q(() => {}, ["stop"]),
			onContextmenu: r[1] ||= Q(() => {}, ["prevent"])
		}, [V(ho, {
			items: U(t).ui.contextMenu.items,
			onSelect: s
		}, null, 8, ["items"])], 36)) : W("", !0)], 8, ["to"]));
	}
}), Ip = /* @__PURE__ */ G({
	__name: "extension-slot",
	props: { name: {} },
	setup(e) {
		let t = e, n = E(), r = K(() => n.extensions.list(t.name));
		return (e, t) => (F(!0), X(Y, null, Z(r.value, (e) => (F(), I(U(Nt), {
			key: `${e.pluginId}:${e.id}`,
			runtime: U(n).errors
		}, {
			default: $(() => [(F(), I(cn(e.value.component), _r({ ref_for: !0 }, e.value.props), null, 16))]),
			_: 2
		}, 1032, ["runtime"]))), 128));
	}
}), Lp = [
	"data-kind",
	"onMouseenter",
	"onMouseleave",
	"onFocusin",
	"onFocusout"
], Rp = ["aria-label"], zp = ["aria-label"], Bp = /*#__PURE__*/ Ze(/* @__PURE__ */ G({
	__name: "toast-host",
	setup(e) {
		let t = u(), n = Dr(qn, void 0), r = E(), i = r.store(), a = K(() => r.zIndex.currentZIndex + 1);
		function o(e, t) {
			let n = t.currentTarget;
			n instanceof HTMLElement && n.matches(":hover, :focus-within") || i.ui.resumeToast(e);
		}
		return (e, r) => {
			let s = eo, c = Ha;
			return F(), I(Ur, { to: U(n)?.() ?? "body" }, [ur(R("div", {
				"data-component": "designer-feedback",
				class: P(["fixed inset-0 flex items-start justify-center box-border overflow-hidden pointer-events-none px-4 py-6", U(t)("designer-feedback")]),
				style: B({ zIndex: a.value })
			}, [V(An, {
				name: "designer-feedback",
				tag: "div",
				class: P(["flex flex-col items-center gap-2 box-border w-full max-w-110 max-h-full overflow-y-auto p-2 pointer-events-auto", U(t)("designer-feedback__list")])
			}, {
				default: $(() => [(F(!0), X(Y, null, Z(U(i).ui.toasts, (e) => (F(), X("div", {
					key: e.id,
					"data-component": "designer-feedback__item",
					"data-kind": e.kind,
					class: P(["shrink-0 max-w-full", [U(t)("designer-feedback__item"), U(t)(`designer-feedback__item--${e.kind}`)]]),
					onMouseenter: (t) => U(i).ui.pauseToast(e.id),
					onMouseleave: (t) => o(e.id, t),
					onFocusin: (t) => U(i).ui.pauseToast(e.id),
					onFocusout: (t) => o(e.id, t)
				}, [e.kind === "error" ? (F(), I(s, {
					key: 0,
					"data-component": "designer-feedback__notification",
					class: P(U(t)("designer-feedback__notification")),
					theme: "error",
					title: U(H)("designer.toastHost.errorTitle"),
					content: e.text,
					duration: 0,
					role: "alert",
					onCloseBtnClick: (t) => U(i).ui.dismissToast(e.id)
				}, {
					"close-btn": $(() => [R("button", {
						type: "button",
						class: P(["inline-flex items-center justify-center border-0 rounded-[var(--td-radius-default)] bg-transparent text-ink-dim cursor-pointer w-5.5 h-5.5 p-0 focus-visible:[outline:1px_solid_var(--color-accent)] hover:bg-panel-3 hover:text-ink", U(t)("designer-feedback__close")]),
						"aria-label": U(H)("components.baseDialog.closeLabel")
					}, [V(U(Me))], 10, Rp)]),
					_: 1
				}, 8, [
					"class",
					"title",
					"content",
					"onCloseBtnClick"
				])) : (F(), I(c, {
					key: 1,
					"data-component": "designer-feedback__message",
					class: P(U(t)("designer-feedback__message")),
					theme: e.kind,
					content: e.text,
					duration: 0,
					"close-btn": "",
					role: "status",
					onCloseBtnClick: (t) => U(i).ui.dismissToast(e.id)
				}, {
					"close-btn": $(() => [R("button", {
						type: "button",
						class: P(["inline-flex items-center justify-center border-0 rounded-[var(--td-radius-default)] bg-transparent text-ink-dim cursor-pointer w-5.5 h-5.5 p-0 focus-visible:[outline:1px_solid_var(--color-accent)] hover:bg-panel-3 hover:text-ink", U(t)("designer-feedback__close")]),
						"aria-label": U(H)("components.baseDialog.closeLabel")
					}, [V(U(Me))], 10, zp)]),
					_: 1
				}, 8, [
					"class",
					"theme",
					"content",
					"onCloseBtnClick"
				]))], 42, Lp))), 128))]),
				_: 1
			}, 8, ["class"])], 6), [[Or, U(i).ui.toasts.length > 0]])], 8, ["to"]);
		};
	}
}), [["__scopeId", "data-v-60ec0673"]]), Vp = {
	"data-designer-shell": "",
	class: "flex h-full flex-col overflow-hidden bg-app text-ink",
	style: {
		minWidth: "var(--designer-min-width)",
		minHeight: "var(--designer-min-height)"
	}
}, Hp = { class: "flex min-h-0 flex-1 flex-nowrap" }, Up = { class: "flex min-w-0 flex-1 flex-col" }, Wp = { class: "flex h-7 shrink-0 items-center overflow-hidden border-t border-edge bg-panel px-3 text-compact text-ink-dim" }, Gp = /* @__PURE__ */ G({
	__name: "designer-shell",
	props: {
		infoBar: {
			type: Boolean,
			default: !0
		},
		menuBar: {
			type: Boolean,
			default: !0
		},
		optionsBar: {
			type: Boolean,
			default: !0
		},
		panels: {
			type: Boolean,
			default: !0
		},
		toolBar: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = E(), n = e, { commands: r, errors: i } = t, a = [
			"file",
			"edit",
			"page",
			"layout",
			"data",
			"view",
			"export",
			"help"
		], o = {
			data: "database",
			edit: "rename",
			export: "download",
			file: "file",
			help: "help",
			layout: "align-left",
			page: "layers",
			view: "eye"
		}, s = K(() => a.map((e) => ({
			icon: o[e],
			items: h(r.byGroup(e), l),
			label: to[e]
		})));
		function c(e) {
			(e.ctrlKey || e.metaKey) && e.preventDefault();
		}
		function l(e, ...t) {
			r.dispatch(e, ...t);
		}
		function u() {
			l("view.zoomFit");
		}
		return At(() => t.store().ui.themeMode, (e) => t.errors.capture(e, { source: "theme.transition" })), no(t), xe(window, "wheel", c, {
			capture: !0,
			passive: !1
		}), Bn(() => {
			if (window === window.top) {
				let e = Jr(window, () => t.store().document.dirty);
				Sn(e);
			}
			requestAnimationFrame(() => {
				u();
			});
		}), (e, t) => (F(), X("div", Vp, [
			n.menuBar ? (F(), I(Oo, {
				key: 0,
				"data-tutorial": "menu",
				menus: s.value
			}, null, 8, ["menus"])) : W("", !0),
			V(Ip, { name: "designer.shell.before" }),
			R("div", Hp, [
				n.toolBar ? (F(), I(Go, { key: 0 })) : W("", !0),
				R("div", Up, [n.optionsBar ? (F(), I(zo, { key: 0 })) : W("", !0), V(U(Nt), { runtime: U(i) }, {
					fallback: $(({ error: e, reset: t }) => [V(It, {
						detail: U($n)(e),
						class: "min-h-0 flex-1",
						title: U(H)("designer.designerShell.canvasRenderFailed"),
						onRetry: t
					}, null, 8, [
						"detail",
						"title",
						"onRetry"
					])]),
					default: $(() => [V(Np, { "data-tutorial": "canvas" })]),
					_: 1
				}, 8, ["runtime"])]),
				n.panels ? (F(), I(wd, { key: 1 })) : W("", !0)
			]),
			R("div", Wp, [V(Ed)]),
			n.infoBar ? (F(), I(rd, {
				key: 1,
				onFit: u
			})) : W("", !0),
			V(Ip, { name: "designer.shell.after" }),
			V(Fp),
			V(Bp),
			V(pl),
			V(Ys, { name: "page" }, {
				default: $(({ session: e }) => [V(dl, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			V(Ko),
			V(ul),
			V(Js),
			V(Sc),
			V(Ys, { name: "repeat" }, {
				default: $(({ session: e }) => [V(gl, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			V(Ys, { name: "follow" }, {
				default: $(({ session: e }) => [V(wc, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			V(Ys, { name: "follow-join" }, {
				default: $(({ session: e }) => [V(wc, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			V(Ys, { name: "follow-manager" }, {
				default: $(({ session: e }) => [V(cl, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			V(Ys, { name: "repeat-manager" }, {
				default: $(({ session: e }) => [V(Fl, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			V(Ys, { name: "element" }, {
				default: $(({ session: e }) => [V(yc, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			V(ll),
			V(qo),
			V(_u),
			V(Vu)
		]));
	}
});
export { Gp as default };
