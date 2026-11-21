import { $ as e, $t as t, A as n, At as r, B as i, Bt as a, C as o, Ct as s, D as c, Dt as l, E as u, Et as d, F as f, Ft as p, G as m, Gt as h, H as g, Ht as _, I as v, It as y, J as b, Jt as x, K as S, Kt as C, L as w, Lt as T, M as E, Mt as D, N as O, Nt as ee, O as te, Ot as ne, P as re, Pt as ie, Q as ae, Qt as oe, R as se, Rt as ce, S as le, St as ue, T as de, Tt as fe, U as pe, Ut as me, V as he, Vt as ge, W as _e, Wt as ve, X as ye, Xt as be, Y as xe, Yt as Se, Z as Ce, Zt as k, _ as we, _t as Te, a as Ee, an as De, at as Oe, b as ke, bt as Ae, c as je, cn as Me, ct as Ne, d as Pe, dn as Fe, dt as Ie, en as Le, et as A, f as Re, fn as ze, ft as Be, g as Ve, gt as He, h as Ue, hn as We, ht as Ge, i as Ke, in as qe, it as Je, j, jt as Ye, k as Xe, kt as Ze, l as Qe, ln as $e, lt as et, m as tt, mn as nt, mt as rt, n as it, nn as at, nt as ot, o as st, on as ct, ot as lt, p as ut, pn as dt, pt as ft, q as pt, qt as mt, r as ht, rn as gt, rt as _t, s as vt, sn as yt, st as bt, t as xt, tn as St, tt as Ct, u as wt, un as Tt, ut as Et, v as Dt, vt as Ot, w as kt, wt as At, x as jt, xt as Mt, y as Nt, yt as Pt, z as Ft, zt as It } from "./standalone-D0ZB5b5j-CIx9yDH9.js";
import { $a as Lt, $r as Rt, $t as zt, Aa as M, Ai as N, At as Bt, B as Vt, Ca as Ht, Cn as Ut, Co as Wt, Ct as Gt, Di as P, Ea as Kt, Ei as F, Eo as qt, Er as I, Et as Jt, Fn as Yt, Fo as Xt, Fr as Zt, G as Qt, Ga as $t, Gn as en, Gr as tn, Gt as nn, H as rn, Hr as an, Ii as L, In as on, Ir as sn, It as cn, Jt as ln, Kr as un, Li as R, Lr as dn, Lt as fn, Ma as pn, Mr as mn, N as hn, Nt as gn, Oi as z, Oo as B, Or as _n, Pa as vn, Pr as yn, Pt as bn, Qa as V, Qn as xn, Ro as H, Rr as Sn, Sn as Cn, Sr as wn, V as Tn, Vn as En, Wa as Dn, Wt as On, Xi as U, Xn as kn, Xt as An, Yr as jn, _n as Mn, _r as Nn, _t as Pn, an as Fn, ao as In, b as Ln, bi as Rn, bn as zn, bo as Bn, br as Vn, c as Hn, da as Un, ds as W, fn as Wn, gi as G, gn as Gn, ia as Kn, ii as qn, ir as Jn, it as Yn, ja as Xn, jo as Zn, ki as K, kn as Qn, ko as $n, kr as er, kt as tr, la as nr, ln as rr, m as ir, ma as ar, nt as or, o as sr, on as cr, ot as lr, pa as ur, pn as dr, qi as fr, qn as pr, r as mr, ri as hr, rn as gr, ro as q, sa as _r, si as vr, sn as yr, ss as J, st as br, tn as xr, tr as Sr, tt as Cr, ua as wr, ur as Tr, us as Y, ut as Er, va as Dr, vn as Or, wa as X, wr as kr, wt as Ar, xn as jr, y as Mr, yn as Nr, zi as Z, zr as Pr } from "./create-designer-JVbDIHeY-DuIqFk48.js";
import { t as Fr } from "./document-unload-guard-DiyKeiVr-tVm2qmFE.js";
import { I as Q, M as Ir, N as Lr, P as Rr, d as zr, i as Br, m as Vr, p as Hr, u as Ur } from "./inspector-layout-rrNchbrl-ickgJHk1.js";
// ../../node_modules/.pnpm/tdesign-icons-vue-next@0.4.12_vue@3.5.45_typescript@5.9.3_/node_modules/tdesign-icons-vue-next/esm/components/caret-right-small.js
function Wr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Gr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Wr(Object(n), !0).forEach(function(t) {
			We(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Kr = {
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
}, qr = Z({
	name: "CaretRightSmallIcon",
	props: {
		size: { type: String },
		onClick: { type: Function },
		fillColor: { type: [Array, String] },
		strokeColor: { type: [Array, String] },
		strokeWidth: { type: Number }
	},
	setup(e, t) {
		var { attrs: n } = t, r = Dn, i = (r ? r() : `${fr()?.uid ?? "unknown"}`).replace(/[^a-zA-Z0-9_]/g, ""), a = F(() => e.size), o = F(() => e.strokeColor ? Array.isArray(e.strokeColor) ? e.strokeColor[0] : e.strokeColor : "currentColor"), s = F(() => e.strokeColor ? Array.isArray(e.strokeColor) ? e.strokeColor[1] ?? e.strokeColor[0] : e.strokeColor : "currentColor"), c = F(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[0] : e.fillColor : "transparent"), l = F(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[1] ?? e.fillColor[0] : e.fillColor : "transparent"), u = F(() => e.fillColor ? Array.isArray(e.fillColor) ? e.fillColor[0] : e.fillColor : "currentColor"), { className: d, style: f } = dt(a), p = F(() => [
			"t-icon",
			"t-icon-caret-right-small",
			d.value
		]), m = F(() => Gr(Gr({ fill: "none" }, f.value), n.style)), h = F(() => ({
			class: p.value,
			style: m.value,
			onClick: (t) => e.onClick?.call(e, { e: t }),
			strokeColor1: o.value,
			strokeColor2: s.value,
			fillColor1: c.value,
			fillColor2: l.value,
			strokeWidth: e.strokeWidth || 2,
			filledColor: u.value,
			iconId: "caret-right-small",
			overlapMaskInstanceId: i
		}));
		return () => nt(Kr, h.value);
	}
}), Jr = 200;
function Yr(e, t, n, r) {
	var i = -1, a = Qe, o = !0, s = e.length, c = [], l = t.length;
	if (!s) return c;
	n && (t = ae(t, fe(n))), r ? (a = Le, o = !1) : t.length >= Jr && (a = C, o = !1, t = new bt(t));
	outer: for (; ++i < s;) {
		var u = e[i], d = n == null ? u : n(u);
		if (u = r || u !== 0 ? u : 0, o && d === d) {
			for (var f = l; f--;) if (t[f] === d) continue outer;
			c.push(u);
		} else a(t, d, r) || c.push(u);
	}
	return c;
}
var Xr = ve(function(e, t) {
	return ue(e) ? Yr(e, l(t, 1, ue, !0)) : [];
}), Zr = 0;
function Qr(e) {
	var t = ++Zr;
	return Ge(e) + t;
}
var $r = {
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
}, ei = "32px", ti = [
	"info",
	"success",
	"warning",
	"error",
	"question",
	"loading"
], ni = Object.keys({
	center: {
		left: "50%",
		top: "50%",
		transform: "translateX(-50%) translateY(-50%)"
	},
	left: {
		left: ei,
		top: "50%",
		transform: "translateY(-50%)"
	},
	bottom: {
		bottom: ei,
		left: "50%",
		transform: "translateX(-50%)"
	},
	right: {
		right: ei,
		top: "50%",
		transform: "translateY(-50%)"
	},
	top: {
		top: ei,
		left: "50%",
		transform: "translateX(-50%)"
	},
	"top-left": {
		left: ei,
		top: ei
	},
	"top-right": {
		right: ei,
		top: ei
	},
	"bottom-left": {
		left: ei,
		bottom: ei
	},
	"bottom-right": {
		right: ei,
		bottom: ei
	}
}), ri = {
	duration: 200,
	easing: "linear"
};
function ii(e, t) {
	for (var n = Object.keys(t), r = 0; r < n.length; r += 1) {
		var i = n[r];
		e.style[i] = t[i];
	}
}
function ai(e, t, n) {
	return ni.includes(e) ? [
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
function oi(e, t) {
	return ni.includes(e) ? [
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
function si(e, t) {
	var n;
	if (e) {
		var r = ai(t, e?.offsetWidth || 0, e?.offsetHeight || 0);
		if (r) {
			var i = r[r.length - 1];
			ii(e, i), (n = e.animate) == null || n.call(e, r, ri);
		}
	}
}
function ci(e, t, n) {
	if (e) {
		var r = oi(t, e.offsetHeight || 0);
		if (!r) n();
		else {
			var i = r[r.length - 1];
			ii(e, i);
			var a = e.animate && e.animate(r, ri);
			a ? a.onfinish = function() {
				e.style.display = "none", n();
			} : (e.style.display = "none", n());
		}
	}
}
function li(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ui(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? li(Object(n), !0).forEach(function(t) {
			j(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : li(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var di = Z({
	name: "TMessage",
	props: ui(ui({}, $r), {}, {
		placement: String,
		className: String
	}),
	setup: function(e, t) {
		var n = t.slots, r = t.expose, i = A("message"), a = we({
			InfoCircleFilledIcon: De,
			CheckCircleFilledIcon: Fe,
			ErrorCircleFilledIcon: yt,
			HelpCircleFilledIcon: ct,
			CloseIcon: Me
		}), o = a.InfoCircleFilledIcon, c = a.CheckCircleFilledIcon, l = a.ErrorCircleFilledIcon, d = a.HelpCircleFilledIcon, f = a.CloseIcon, p = A(), m = Be(), h = s(), g = B(null), _ = B(null), v = F(function() {
			var t = {};
			return ti.forEach(function(n) {
				return t[`${p.value}-is-${n}`] = e.theme === n;
			}), [
				i.value,
				t,
				j({}, `${p.value}-is-closable`, e.closeBtn || n.closeBtn),
				e.className
			];
		}), y = function(t) {
			var n, r;
			(n = e.onClose) == null || n.call(e, {
				trigger: "close-click",
				e: t
			}), (r = e.onCloseBtnClick) == null || r.call(e, { e: t });
		}, b = function() {
			e.duration && clearTimeout(_.value);
		}, x = function() {
			e.duration && (_.value = Number(setTimeout(function() {
				b();
				var t = g.value;
				ci(t, e.placement, function() {
					var t, n;
					(t = e.onClose) == null || t.call(e, { trigger: "duration-end" }), (n = e.onDurationEnd) == null || n.call(e);
				});
			}, e.duration)));
		}, S = function() {
			var e = R(f, null, null);
			return R("span", {
				class: `${i.value}__close`,
				onClick: y
			}, [m("closeBtn", e)]);
		}, C = function() {
			if (e.icon !== !1) {
				if (u(e.icon)) return e.icon(U);
				if (n.icon) return n.icon(null);
				var t = {
					info: o,
					success: c,
					warning: l,
					error: l,
					question: d,
					loading: Re
				}[e.theme];
				return R(t, null, null);
			}
		};
		return ur(function() {
			e.duration && x();
		}), Dr(function() {
			var t = g.value;
			si(t, e.placement);
		}), r({ close: y }), function() {
			return R("div", {
				ref: g,
				class: v.value,
				onMouseenter: b,
				onMouseleave: x
			}, [
				C(),
				h("content", "default"),
				S()
			]);
		};
	}
}), fi = {
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
}, pi = Z({
	name: "TTabPanel",
	props: fi,
	setup: function(e) {
		var t = A("tab-panel"), n = mt().STATUS, r = s();
		be();
		var i = Kn("tabs"), a = F(function() {
			return e.value === i.value.value;
		}), o = B(!e.lazy || a.value);
		V(a, function() {
			a.value ? o.value ||= !0 : e.destroyOnHide && (o.value = !1);
		}, { immediate: !0 });
		var c = F(function() {
			return [t.value, j({}, n.value.hidden, !a.value)];
		});
		return function() {
			return o.value ? R("div", {
				key: e.value,
				class: c.value
			}, [r("default", "panel")]) : null;
		};
	}
}), mi = {
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
}, hi = Z({
	name: "TTabNavItem",
	props: {
		index: Number,
		active: { type: Boolean },
		theme: mi.theme,
		size: mi.size,
		placement: mi.placement,
		label: { type: null },
		disabled: fi.disabled,
		removable: fi.removable,
		value: fi.value,
		draggable: fi.draggable,
		onClick: Function,
		onTabRemove: Function,
		onTabPanelRemove: Function
	},
	setup: function(e) {
		var t = B();
		a(t);
		var n = A("tabs__nav-item"), r = we({ CloseIcon: Me }).CloseIcon, i = A(), o = mt(), s = o.STATUS, c = o.SIZE, l = function(t) {
			var n, r = t.e;
			r && r.stopPropagation(), e.onTabRemove({
				e: r,
				value: e.value,
				index: e.index
			}), (n = e.onTabPanelRemove) == null || n.call(e, {
				e: r,
				value: e.value
			});
		}, u = function(t) {
			e.disabled || e.onClick(t);
		}, d = F(function() {
			return j(j(j(j(j(j(j(j({}, n.value, !0), `${i.value}-tabs__nav--card`, e.theme === "card"), s.value.disabled, e.disabled), s.value.active, e.active), `${i.value}-is-left`, e.placement === "left"), `${i.value}-is-right`, e.placement === "right"), c.value.medium, e.size === "medium"), c.value.large, e.size === "large");
		}), f = function() {
			return e.removable && !e.disabled ? R("span", {
				onClick: function(e) {
					return l({ e });
				},
				class: "remove-btn"
			}, [R(r, null, null)]) : null;
		}, p = function() {
			return R("div", {
				class: d.value,
				onClick: u,
				ref: t,
				draggable: e.draggable
			}, [R("span", { class: `${n.value}-text-wrapper` }, [e.label]), f()]);
		}, m = function() {
			return R("div", {
				class: d.value,
				onClick: u,
				draggable: e.draggable
			}, [R("div", {
				class: [`${n.value}-wrapper`, j(j({}, s.value.disabled, e.disabled), s.value.active, e.active)],
				ref: t
			}, [R("span", { class: `${n.value}-text-wrapper` }, [e.label])]), f()]);
		};
		return function() {
			return e.theme === "card" ? p() : m();
		};
	}
}), gi = Z({
	props: {
		navs: { type: Array },
		placement: mi.placement,
		value: mi.value
	},
	setup: function(e) {
		var t = A("tabs"), n = A(), r = B(), i = F(function() {
			return [`${t.value}__bar`, `${n.value}-is-${e.placement}`];
		}), a = B(null), o = function() {
			for (var t = ["left", "right"].includes(e.placement.toLowerCase()) ? ["height", "top"] : ["width", "left"], n = xe(t, 2), r = n[0], i = n[1], a = 0, o = 0; o < e.navs.length; o++) {
				var s;
				if (e.navs[o].props.value === e.value) break;
				if ((s = e.navs[o]) != null && s.el) {
					var c = getComputedStyle(e.navs[o].el)[r];
					a += parseFloat(c);
				}
			}
			return e.navs[o] ? j(j({}, i, `${a}px`), r, e.navs[o].el ? getComputedStyle(e.navs[o].el)[r] : "0px") : {};
		}, s = function() {
			return a.value = o();
		};
		return Dr(function() {
			Un(function() {
				s();
			});
		}), V([
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
			Un(function() {
				s();
			});
		}), m(r, Ie(function() {
			s();
		}, 35)), function() {
			return R("div", {
				class: i.value,
				style: a.value,
				ref: r
			}, null);
		};
	}
}), _i = function(e) {
	return e?.offsetWidth || 0;
}, vi = function(e) {
	return e?.offsetLeft || 0;
};
function yi(e, t, n) {
	var r = e.navsContainer, i = e.activeTab, a = e.rightOperations, o = e.leftOperations, s = _i(i), c = _i(r), l = vi(i), u = _i(a), d = _i(o);
	if (n === "auto") {
		if (l - d < t) return l - d;
		if (l + s > t + c - u) return l + s - c + u;
	} else if (n === "start") return l - d;
	else if (n === "center") return l + (s - c) / 2;
	else if (n === "end") return l + s - c + u;
	return t;
}
function bi(e, t, n) {
	var r = e.navsContainer, i = e.activeTab, a = _i(r), o = _i(i), s = Math.abs(a - o);
	return n === "next" ? t + s : t - s;
}
function xi(e) {
	var t = e.navsWrap, n = e.navsContainer, r = e.rightOperations, i = e.toRightBtn, a = _i(t), o = _i(n), s = _i(r), c = _i(i);
	return a - o + s - c;
}
function Si(e, t) {
	return Math.max(0, Math.min(e, t));
}
function Ci(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function wi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ci(Object(n), !0).forEach(function(t) {
			j(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ci(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Ti = Z({
	name: "TTabNav",
	resizeObserver: null,
	props: {
		theme: mi.theme,
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
		value: mi.value,
		placement: mi.placement,
		scrollPosition: mi.scrollPosition,
		size: mi.size,
		disabled: mi.disabled,
		addable: mi.addable,
		onChange: mi.onChange,
		onAdd: mi.onAdd,
		onRemove: mi.onRemove,
		dragSort: mi.dragSort,
		onDragSort: mi.onDragSort
	},
	setup: function(e) {
		var t = A("tabs"), n = we({
			ChevronLeftIcon: Tt,
			ChevronRightIcon: $e,
			AddIcon: ze
		}), r = n.ChevronLeftIcon, i = n.ChevronRightIcon, a = n.AddIcon, o = A(), s = mt().SIZE, c = B(0), l = B(), d = B(), p = B(), m = B(), h = B(), g = B(), _ = B(0), v = F(function() {
			var t;
			return ["top", "bottom"].includes(e == null || (t = e.placement) == null ? void 0 : t.toLowerCase());
		}), y = function() {
			return {
				navsContainer: l.value,
				navsWrap: d.value,
				leftOperations: p.value,
				rightOperations: m.value,
				toRightBtn: h.value,
				activeTab: g.value
			};
		}, b = F(function() {
			return ["left", "right"].includes(e.placement.toLowerCase());
		}), x = F(function() {
			return c.value > 1;
		}), S = F(function() {
			return c.value < _.value - 1;
		}), C = F(function() {
			return b.value ? {} : { transform: `translate3d(${-c.value}px, 0, 0)` };
		}), w = F(function() {
			return e.addable ? { "min-height": "48px" } : null;
		}), T = F(function() {
			return j(j(j({}, `${t.value}__btn`, !0), s.value.medium, e.size === "medium"), s.value.large, e.size === "large");
		}), E = F(function() {
			return wi(j({}, `${t.value}__btn--left`, !0), T.value);
		}), D = F(function() {
			return wi(j({}, `${t.value}__btn--right`, !0), T.value);
		}), O = F(function() {
			return wi(j({}, `${t.value}__add-btn`, !0), T.value);
		}), ee = F(function() {
			return j(j(j(j({}, `${t.value}__nav-container`, !0), `${t.value}__nav--card`, e.theme === "card"), `${o.value}-is-${e.placement}`, !0), `${o.value}-is-addable`, e.addable);
		}), te = F(function() {
			return j(j({}, `${t.value}__nav-scroll`, !0), `${o.value}-is-scrollable`, x.value || S.value);
		}), ne = F(function() {
			return [
				`${t.value}__nav-wrap`,
				`${o.value}-is-smooth`,
				j({}, `${o.value}-is-vertical`, b.value)
			];
		}), re = function(e) {
			c.value = Si(e, _.value);
		}, ie = function(e) {
			re(bi(y(), c.value, e));
		}, ae = function(e) {
			if (x.value || S.value) {
				e.preventDefault();
				var t = e.deltaX, n = e.deltaY;
				re(Math.abs(t) > Math.abs(n) ? c.value + t : c.value + n);
			}
		}, oe = function() {
			setTimeout(function() {
				re(yi(y(), c.value, e.scrollPosition));
			}, 0);
		}, se = function() {
			Un(function() {
				_.value = xi(y()), _.value - c.value <= 0 && re(_.value);
			});
		};
		V([function() {
			return e.placement;
		}, function() {
			return e.panels;
		}], se), V([function() {
			return e.scrollPosition;
		}], oe), f(Ie(se), l.value);
		var ce = function(t) {
			var n;
			(n = e.onAdd) == null || n.call(e, { e: t });
		}, le = function(t, n) {
			var r = n.value;
			if (n.disabled || e.value === r) return !1;
			e.onChange(r);
		}, ue = function(t) {
			var n = t.e, r = t.value, i = t.index;
			e.onRemove({
				e: n,
				value: r,
				index: i
			});
		}, de = function(t) {
			t != null && t.$el && t?.value === e.value && g.value !== t.$el && (g.value = t.$el, oe());
		}, fe = pe(e).setNavsWrap;
		Dr(function() {
			fe(d.value), se(), oe();
		});
		var me = function() {
			return e.panels.map(function(t, n) {
				var r, i = t != null && (r = t.children) != null && r.label ? t.children.label() : u(t.label) ? t.label(U) : t.label || `选项卡${n + 1}`, a = e.dragSort;
				return a && t.draggable === !1 && (a = t.draggable), R(hi, {
					ref: de,
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
						return le(e, t);
					},
					onTabRemove: ue,
					onTabPanelRemove: t.onRemove
				}, null);
			});
		}, he = function() {
			return [R("div", {
				ref: p,
				class: [`${t.value}__operations`, `${t.value}__operations--left`]
			}, [R(Hr, {
				name: "fade",
				mode: "out-in",
				appear: !0
			}, { default: function() {
				return [x.value ? R("div", {
					class: E.value,
					onClick: function() {
						return ie("prev");
					}
				}, [R(r, null, null)]) : null];
			} })]), R("div", {
				ref: m,
				class: [`${t.value}__operations`, `${t.value}__operations--right`]
			}, [
				R(Hr, {
					name: "fade",
					mode: "out-in",
					appear: !0
				}, { default: function() {
					return [S.value ? R("div", {
						ref: h,
						class: D.value,
						onClick: function() {
							return ie("next");
						}
					}, [R(i, null, null)]) : null];
				} }),
				e.addable ? R("div", {
					class: O.value,
					onClick: ce
				}, [R(a, null, null)]) : null,
				v.value && e.action
			])];
		}, ge = function() {
			var t = me();
			return R("div", { class: ee.value }, [R("div", {
				class: te.value,
				onWheel: ae
			}, [R("div", {
				ref: d,
				class: ne.value,
				style: C.value
			}, [e.theme !== "card" && R(gi, {
				placement: e.placement,
				value: e.value,
				navs: t
			}, null), t])])]);
		};
		return function() {
			return R("div", {
				ref: l,
				class: [`${t.value}__nav`],
				style: w.value
			}, [he(), ge()]);
		};
	}
}), Ei = Z({
	name: "TTabs",
	props: mi,
	setup: function(e) {
		var t = A("tabs"), n = A(), r = Be(), i = Xt(e), a = i.value, o = i.modelValue, s = i.onChange, c = ee(a, o, e.defaultValue ?? "", s), l = xe(c, 2), u = l[0], d = l[1];
		Kt("tabs", { value: u });
		var f = function(t) {
			var n;
			(n = e.onAdd) == null || n.call(e, { e: t.e });
		}, p = function(e) {
			d(e);
		}, m = function(t) {
			var n, r = t.e, i = t.value, a = t.index;
			(n = e.onRemove) == null || n.call(e, {
				value: i,
				index: a,
				e: r
			});
		}, h = function() {
			var e = r("default");
			if (!e) return [];
			var t = function(e) {
				return e.map(function(e) {
					return e.children && ne(e.children) ? t(e.children) : e;
				}).flat().filter(function(e) {
					return e.type.name === "TTabPanel";
				});
			};
			return t(e);
		}, g = function() {
			var t, i = ((t = e.list) != null && t.length ? e.list : h()) || [], a = r("action"), o = i.map(function(e) {
				var t = e;
				return e.props && Object.keys(e.props).forEach(function(n) {
					t[n] = e.props[n];
				}), t;
			}), s = {
				theme: e.theme,
				value: u.value,
				size: e.size,
				disabled: e.disabled,
				placement: e.placement,
				scrollPosition: e.scrollPosition,
				addable: e.addable,
				panels: o,
				dragSort: e.dragSort,
				action: a
			};
			return R("div", { class: j(j({}, `${n.value}-tabs__header`, !0), `${n.value}-is-${e.placement}`, !0) }, [R(Ti, wr(s, {
				onDragSort: e.onDragSort,
				onChange: p,
				onAdd: f,
				onRemove: m
			}), null)]);
		}, _ = function() {
			var t, r = h();
			if ((t = e.list) != null && t.length) return e.list.map(function(e) {
				return R(pi, wr(e, { onRemove: m }), null);
			});
			if (r && r.length) return R("div", { class: [`${n.value}-tabs__content`] }, [r]);
		};
		return function() {
			return R("div", { class: [t.value] }, [e.placement === "bottom" ? [_(), g()] : [g(), _()]]);
		};
	}
}), Di = Ot(Ei), Oi = Ot(pi), $ = "__tdesign_tree-node__", ki = /*#__PURE__*/ function() {
	function e(t) {
		Ne(this, e), j(this, $, void 0), this[$] = t;
	}
	return je(e, [
		{
			key: "value",
			get: function() {
				return this[$].value;
			}
		},
		{
			key: "label",
			get: function() {
				return this[$].label;
			}
		},
		{
			key: "data",
			get: function() {
				return this[$].data;
			}
		},
		{
			key: "actived",
			get: function() {
				return this[$].actived;
			}
		},
		{
			key: "expanded",
			get: function() {
				return this[$].expanded;
			}
		},
		{
			key: "checked",
			get: function() {
				return this[$].checked;
			}
		},
		{
			key: "indeterminate",
			get: function() {
				return this[$].indeterminate;
			}
		},
		{
			key: "loading",
			get: function() {
				return this[$].loading;
			}
		},
		{
			key: "disabled",
			get: function() {
				return this[$].isDisabled();
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
				return this[$].getLevel();
			}
		},
		{
			key: "getIndex",
			value: function() {
				return this[$].getIndex();
			}
		},
		{
			key: "isFirst",
			value: function() {
				return this[$].isFirst();
			}
		},
		{
			key: "isLast",
			value: function() {
				return this[$].isLast();
			}
		},
		{
			key: "isLeaf",
			value: function() {
				return this[$].isLeaf();
			}
		},
		{
			key: "insertBefore",
			value: function(e) {
				return this[$].insertBefore(e);
			}
		},
		{
			key: "insertAfter",
			value: function(e) {
				return this[$].insertAfter(e);
			}
		},
		{
			key: "appendData",
			value: function(e) {
				return this[$].append(e);
			}
		},
		{
			key: "getPath",
			value: function() {
				return this[$].getPath().map(function(e) {
					return e.getModel();
				});
			}
		},
		{
			key: "getParent",
			value: function() {
				return this[$].parent?.getModel();
			}
		},
		{
			key: "getParents",
			value: function() {
				return this[$].getParents().map(function(e) {
					return e.getModel();
				});
			}
		},
		{
			key: "getRoot",
			value: function() {
				return this[$].getRoot()?.getModel();
			}
		},
		{
			key: "getSiblings",
			value: function() {
				return this[$].getSiblings().map(function(e) {
					return e.getModel();
				});
			}
		},
		{
			key: "getChildren",
			value: function(e) {
				var t = this[$], n = !1, r = t.children;
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
				} else Ft(r) && (n = r);
				return n;
			}
		},
		{
			key: "remove",
			value: function(e) {
				var t = this[$];
				if (Ce(e)) t.remove();
				else {
					var n = t.tree.getNode(e);
					n ? n.getParents().map(function(e) {
						return e.value;
					}).indexOf(t.value) < 0 ? ot.warnOnce("Tree", `\`${e}\` is not a childNode of current node`) : n.remove() : ot.warnOnce("Tree", `\`${e}\` is not exist`);
				}
			}
		},
		{
			key: "setData",
			value: function(e) {
				var t = this[$], n = [
					"value",
					"label",
					"disabled"
				], r = h(e, ["children"].concat(n)), i = t.tree.config.keys;
				n.forEach(function(t) {
					var n = Ae(e, i?.[t] || t);
					Ce(n) || (r[t] = n);
				}), Object.assign(t.data, r), Object.assign(t, r), t.update();
			}
		}
	]);
}();
function Ai(e) {
	return new ki(e);
}
function ji(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Mi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ji(Object(n), !0).forEach(function(t) {
			j(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ji(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var Ni = Object.prototype.hasOwnProperty, Pi = {
	expandMutex: null,
	activable: null,
	checkable: null,
	draggable: null,
	loading: !1
}, Fi = Object.keys(Pi), Ii = [].concat(Fi, [
	"actived",
	"expanded",
	"checked"
]), Li = "__tdesign_id__", Ri = /*#__PURE__*/ function() {
	function e(t, n, r) {
		var i = this;
		Ne(this, e), j(this, "tree", void 0), j(this, Li, void 0), j(this, "value", void 0), j(this, "label", void 0), j(this, "data", void 0), j(this, "parent", void 0), j(this, "children", void 0), j(this, "model", void 0), j(this, "vmIsLeaf", void 0), j(this, "vmIsFirst", void 0), j(this, "vmIsLast", void 0), j(this, "vmIsRest", void 0), j(this, "vmIsLocked", void 0), j(this, "expanded", void 0), j(this, "expandMutex", void 0), j(this, "actived", void 0), j(this, "activable", void 0), j(this, "checkable", void 0), j(this, "vmCheckable", void 0), j(this, "checked", void 0), j(this, "indeterminate", void 0), j(this, "disabled", void 0), j(this, "disableManually", void 0), j(this, "draggable", void 0), j(this, "visible", void 0), j(this, "level", void 0), j(this, "loading", void 0), this.data = n, this.tree = t;
		var a = t.config || {}, o = a.prefix || "t", s = a.keys || {}, c = s.children || "children", l = s.label || "label", u = s.value || "value";
		this.model = null, this.children = null, this.level = 0, this.vmCheckable = !1, this.vmIsLeaf = !1, this.vmIsFirst = !1, this.vmIsLast = !1, this.vmIsRest = !1, this.vmIsLocked = !1, this.visible = !1, this.actived = !1, this.checked = !1, this.indeterminate = !1, this.loading = !1, this.expanded = a.expandAll, this.activable = null, this.checkable = null, this.expandMutex = null, this.draggable = null, this.disableManually = null, this[Li] = Qr(o), this.value = Ye(Ae(n, u)) ? this[Li] : Ae(n, u);
		var d = t.nodeMap, f = t.privateMap;
		d.get(this.value) && ot.warn("Tree", `Dulplicate value: ${this.value}`), d.set(this.value, this), f.set(this[Li], this), this.label = Ae(n, l) || "";
		var p = n[c];
		p === !0 && (this.children = p), this.parent = r && r instanceof e ? r : null, Ii.forEach(function(e) {
			n[e] !== void 0 && (i[e] = n[e]);
		}), this.initActived(), this.initExpanded(), Array.isArray(p) ? this.append(p) : p === !0 && !a.lazy && this.loadChildren(), this.isLeaf() && (this.expanded = !1, this.tree.expandedMap.delete(this.value)), this.initChecked(), this.updateChecked(), this.update(), t.reflow(this);
	}
	return je(e, [
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
				jt(n.expandLevel) && this.getLevel() < n.expandLevel && (e.expandedMap.set(this.value, !0), t = !0), this.children === !0 && n.lazy && (t = !1), t ? e.expandedMap.set(this.value, !0) : e.expandedMap.delete(this.value), this.expanded = t;
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
				if (Array.isArray(t) ? r.push.apply(r, Ue(t)) : r.push(t), !(r.length <= 0)) {
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
				if (jt(r) && (o = r), (a?.getParents() || []).some(function(e) {
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
				if (this.remove(), jt(r)) {
					var d = r;
					a === this.parent && c.length < l && u <= d && --d, c.splice(d, 0, this);
				} else c.push(this);
				this.parent = a, this.walk().forEach(function(e) {
					var n = e;
					n.tree = t, t.nodeMap.set(n.value, n), t.privateMap.set(n[Li], n), n.expanded && t.expandedMap.set(n.value, !0);
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
				t instanceof e ? (o = t, o.appendTo(r, i, n)) : t && (o = new e(r, t, i), jt(n) && a.splice(n, 0, o), a.forEach(function(e) {
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
				e.activedMap.delete(t), e.checkedMap.delete(t), e.expandedMap.delete(t), e.nodeMap.delete(t), e.filterMap.delete(t), e.privateMap.delete(this[Li]);
			}
		},
		{
			key: "loadChildren",
			value: function() {
				var e = n(/*#__PURE__*/ _t.mark(function e() {
					var t, n;
					return _t.wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (t = Ae(this, "tree.config") || {}, this.children !== !0 || this.loading || !u(t.load)) {
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
					(Ni.call(Pi, n) || n === "label") && (t[n] = e[n]), n === "disabled" && t.setDisabled(e[n]);
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
				} else Ft(n) && (t = n);
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
				var c = s.disabled || "disabled", l = Ae(this.data, c);
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
				var e = !!Ae(this, "tree.config.draggable");
				return typeof this.draggable == "boolean" && (e = this.draggable), e;
			}
		},
		{
			key: "isExpandMutex",
			value: function() {
				var e = !!Ae(this, "tree.config.expandMutex");
				return typeof this.expandMutex == "boolean" && (e = this.expandMutex), e;
			}
		},
		{
			key: "isActivable",
			value: function() {
				var e = !!Ae(this, "tree.config.activable");
				return typeof this.activable == "boolean" && (e = this.activable), e;
			}
		},
		{
			key: "isCheckable",
			value: function() {
				var e = !!Ae(this, "tree.config.checkable");
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
					return a !== "all" && e.isDisabled() ? !1 : !!(e.isIndeterminate() || (Xe(o) && (o = e.isChecked()), o !== e.isChecked()));
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
				var n = this.tree, r = n.config, i = Mi({ directly: !1 }, t), a = n.expandedMap;
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
				var n = this.tree, r = Mi({
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
				var n = this.tree, r = n.config || {}, i = Mi({
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
				var r = Mi({
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
				var r = Mi({
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
				return e || (e = Ai(this), this.model = e), e;
			}
		}
	]);
}();
function zi(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Bi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? zi(Object(n), !0).forEach(function(t) {
			j(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zi(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Vi(e) {
	var t = Promise.resolve();
	return t.then(e), t;
}
function Hi(e) {
	return tt(e) || jt(e) || typeof e == "bigint";
}
var Ui = /*#__PURE__*/ function() {
	function e(t) {
		Ne(this, e), j(this, "children", void 0), j(this, "nodes", void 0), j(this, "nodeMap", void 0), j(this, "privateMap", void 0), j(this, "config", void 0), j(this, "activedMap", void 0), j(this, "updatedMap", void 0), j(this, "checkedMap", void 0), j(this, "expandedMap", void 0), j(this, "filterMap", void 0), j(this, "hasFilter", void 0), j(this, "emitter", void 0), j(this, "updateTick", void 0), j(this, "shouldReflow", void 0), j(this, "prevFilter", void 0);
		var n = Bi({
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
		this.config = n, this.nodes = [], this.children = [], this.nodeMap = /* @__PURE__ */ new Map(), this.privateMap = /* @__PURE__ */ new Map(), this.activedMap = /* @__PURE__ */ new Map(), this.expandedMap = /* @__PURE__ */ new Map(), this.checkedMap = /* @__PURE__ */ new Map(), this.updatedMap = /* @__PURE__ */ new Map(), this.filterMap = /* @__PURE__ */ new Map(), this.prevFilter = null, this.updateTick = null, this.shouldReflow = !1, this.hasFilter = u(n.filter), this.emitter = Tn();
	}
	return je(e, [
		{
			key: "setConfig",
			value: function(e) {
				var t = this, n = this.config, r = e.checkAllAffectedBy !== void 0 && e.checkAllAffectedBy !== n.checkAllAffectedBy, i = !1;
				Object.keys(e).forEach(function(t) {
					var r = e[t];
					r !== n[t] && (i = !0, n[t] = r);
				}), this.hasFilter = u(n.filter), i && (r && !n.checkStrictly && (this.nodeMap.forEach(function(e) {
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
				return Hi(e) ? t = this.nodeMap.get(e) : e instanceof Ri && (t = this.nodeMap.get(e.value)), t ||= null, t;
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
				if (Hi(e) ? r = e : e instanceof Ri && (r = e.value), !r && r !== 0 && typeof r != "bigint") n = this.nodes.slice(0);
				else {
					var i = this.getNode(r);
					i && (n = i.walk());
				}
				if (t) {
					var a = Bi({
						filter: null,
						level: Infinity
					}, t);
					jt(a.level) && a.level !== Infinity && (n = n.filter(function(e) {
						return e.level <= a.level;
					})), u(a.filter) && (n = n.filter(function(e) {
						var t = e.getModel();
						return a.filter(t);
					})), ut(a.props) && (n = n.filter(function(e) {
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
					var n = new Ri(t, e);
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
				return Hi(e) ? (n = e, r = this.getNode(n), i = t) : e instanceof Ri && t ? (r = e, i = t) : i = e, {
					node: r,
					data: i
				};
			}
		},
		{
			key: "appendNodes",
			value: function(e, t) {
				var n = this.parseNodeData(e, t);
				n.data && (n.node ? (n.data instanceof Ri ? n.data.appendTo(this, n.node) : ne(n.data) ? n.node.append(n.data) : n.node.append([n.data]), n.node.updateRelated()) : n.data instanceof Ri ? n.data.appendTo(this) : Array.isArray(n.data) ? this.append(n.data) : this.append([n.data]));
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
				e ? n.set(e[Li], "changed") : this.getNodes().forEach(function(e) {
					n.set(e[Li], "changed");
				}), this.updateTick ||= Vi(function() {
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
				var t = this.getExpanded(), n = Xr(e, t), r = Xr(t, e);
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
				var n = this, r = Bi({
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
				var n = this.config, i = this.emitter, a = n[r(`on-${e}`)];
				u(a) && a(t), i.emit(e, t);
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
				n && u(n) && (this.prevFilter = e.filter, t.reverse().forEach(function(e) {
					var t = e.getParent();
					t && (e.vmIsRest || e.vmIsLocked) && (t.vmIsLocked || t.lock(!0));
				}));
			}
		}
	]);
}(), Wi = {
	name: "TTreeNode",
	inject: { onDrag: { default: void 0 } }
};
function Gi(e) {
	return Ot(e);
}
function Ki(e) {
	return U;
}
function qi(e) {
	return e.$slots;
}
function Ji(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "value", r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "defaultValue", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "onChange";
	!(arguments.length > 5 && arguments[5] !== void 0) || arguments[5];
	var a = t.modelValue;
	return n === "value" ? ee(t[n], a, e[r], t[i], n) : St(t[n], e[r], t[i], n);
}
var Yi = /* @__PURE__ */ function(e) {
	return e[e.Before = -1] = "Before", e[e.Inside = 0] = "Inside", e[e.After = 1] = "After", e;
}(Yi || {});
function Xi(e) {
	var t = e.treeItemRef, n = qt({
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
	}, u = b(function(e) {
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
function Zi(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Qi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Zi(Object(n), !0).forEach(function(t) {
			j(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zi(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function $i(e, t, n) {
	var i = r(`on-${n}`);
	n.replace(/^on/, "").toLowerCase();
	var a = [...arguments].slice(3);
	typeof e[i] == "function" && e[i].apply(e, a);
}
function ea(e, t) {
	for (var n = [], r = e; r && r.parentNode && (n.push(r), r !== t);) r = r.parentNode;
	return n;
}
function ta(e, t, n) {
	return ea(t, n).map(function(t) {
		return {
			name: e,
			value: t?.getAttribute(e) || "",
			el: t
		};
	}).filter(function(e) {
		return e.value;
	});
}
function na(e, t, n) {
	return ta(e, t, n).pop() || null;
}
function ra(e, t, n) {
	return ea(t, n).some(function(t) {
		return t.classList.contains(e);
	});
}
function ia(e, t) {
	var n = null, r = null, i = Qi({}, t);
	return typeof e == "function" ? r = e(i.createElement, i.node?.getModel()) : typeof e == "string" && (r = e), (typeof r == "string" || r) && (n = r), n;
}
function aa(e) {
	return [
		"string",
		"number",
		"bigint"
	].includes(w(e));
}
function oa(e, t) {
	var n = null, r = null;
	return aa(t) ? r = t : t && aa(t.value) && (r = t.value), n = e.getNode(r), n;
}
function sa(e) {
	var t = e.props, n = e.context, r = e.scope, i = e.store, a = null, o = {
		handleDragStart: function(e) {
			var r = e.dragEvent, i = e.node;
			a = i, $i(t, n, "drag-start", {
				node: i.getModel(),
				e: r
			});
		},
		handleDragEnd: function(e) {
			var r = e.dragEvent, i = e.node;
			a = i, $i(t, n, "drag-end", {
				node: i.getModel(),
				e: r
			});
		},
		handleDragOver: function(e) {
			var r = e.dragEvent;
			$i(t, n, "drag-over", {
				node: e.node.getModel(),
				e: r
			});
		},
		handleDragLeave: function(e) {
			var r = e.dragEvent;
			$i(t, n, "drag-leave", {
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
					return e.value === o.value && (s === Yi.Inside ? a.appendTo(i, e) : s === Yi.Before ? o.insertBefore(a) : o.insertAfter(a), !0);
				}), $i(t, n, "drop", c));
			}
		}
	};
	return r.drag = o, { drag: o };
}
function ca(e) {
	var t = e, n = t.store, r = A("tree").value, i = xe(e.vmValue, 2), a = i[0], o = i[1], s = xe(e.vmActived, 2), c = s[0], l = s[1], u = xe(e.vmExpanded, 2), d = u[0], f = u[1], p = function(e, i) {
		var a = oa(n, e), o = t.mouseEvent, s = {
			node: a.getModel(),
			e: o,
			trigger: "setItem"
		};
		if (o) {
			s.trigger = "node-click";
			var c = o.target, l = o.currentTarget;
			ra(`${r}__icon`, c, l) && (s.trigger = "icon-click");
		}
		var u = a.setExpanded(i, { directly: !0 });
		return f(u, s), s.trigger !== "setItem" && n.replaceExpanded(d.value || []), u;
	}, m = function(e) {
		var t = oa(n, e);
		if (t.children) return p(t, !t.isExpanded());
	}, h = function(e, r) {
		var i = oa(n, e), a = t.mouseEvent, o = {
			node: i.getModel(),
			e: a,
			trigger: "setItem"
		};
		a && (o.trigger = "node-click");
		var s = i.setActived(r, {
			isAction: o.trigger === "node-click",
			directly: !0
		});
		return l(s, o), o.trigger !== "setItem" && n.replaceActived(c.value || []), s;
	}, g = function(e) {
		var t = oa(n, e);
		return h(t, !t.isActived());
	}, _ = function(e, t, r) {
		var i = oa(n, e), s = r?.e, c = {
			node: i.getModel(),
			e: s,
			trigger: "setItem"
		};
		s && (c.trigger = "node-click");
		var l = i.setChecked(t, {
			isAction: c.trigger === "node-click",
			directly: !0
		});
		return o(l, c), c.trigger !== "setItem" && n.replaceChecked(a.value || []), l;
	};
	return {
		setExpanded: p,
		toggleExpanded: m,
		setActived: h,
		toggleActived: g,
		setChecked: _,
		toggleChecked: function(e, t) {
			var r = oa(n, e);
			return r.isIndeterminate() ? _(r, r.hasEnableUnCheckedChild(), t) : _(r, !r.isChecked(), t);
		}
	};
}
function la(e, t) {
	var n = Xt(e), r = B(null), i = e.treeScope, a = i.store.privateMap.get(e.itemKey);
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
function ua(e) {
	var t = e.context, n = A().value, r = function(n, r) {
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
function da(e) {
	var t = A().value, n = A("tree").value, r = function(e) {
		var t = we({ CaretRightSmallIcon: qr }).CaretRightSmallIcon;
		return R(t, null, null);
	}, i = function(e) {
		e.preventDefault();
	};
	return { renderIcon: function(a) {
		var o = e.node, s = e.treeScope, c = s.scopedSlots, l = (s?.treeProps || {}).icon, u = !1, d = null;
		return l === !0 ? c != null && c.icon ? d = c.icon({ node: o?.getModel() }) : o.vmIsLeaf ? d = "" : (u = !0, d = r(a), o.loading && o.expanded && (d = R(Re, null, null))) : l && (d = ia(l, {
			createElement: a,
			node: o
		})), R("span", {
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
function fa(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_r(e);
}
function pa(e) {
	var t = A().value, n = A("tree").value, r = ua(e).handleChange;
	return { renderLabel: function(i) {
		var a = e.node, o = e.treeScope, s = o.scopedSlots, c = o.treeProps, l = c === void 0 ? {} : c, u = l.label, d = l.expandOnClickNode, f = l?.checkProps || {}, p = null;
		p = u === !0 ? s != null && s.label ? s.label({ node: a?.getModel() }) : a.label || "" : ia(u, {
			createElement: i,
			node: a
		});
		var m = [`${n}__label`, j({}, `${t}-is-active`, a.isActivable() ? a.actived : !1)], h = F(function() {
			var e = Array.isArray(a.children) && a.children?.length > 0, t = Ft(a.children) && a.children;
			return d && (e || t);
		});
		if (a.vmCheckable) {
			var g = !1;
			a.vmIsLocked && !a.vmIsRest && (g = !0), a.isDisabled() && (g = !0);
			var _ = function() {
				return p;
			}();
			p = R(gt, wr({
				class: m,
				checked: a.checked,
				indeterminate: a.indeterminate,
				name: String(a.value),
				onChange: r,
				stopLabelTrigger: h.value
			}, f, {
				disabled: g,
				title: a.label
			}), fa(p) ? p : { default: function() {
				return [_];
			} });
		} else {
			var v = R("span", { style: "position: relative" }, [p]);
			p = a.isActivable() ? R("span", {
				key: "1",
				ref: "label",
				class: m,
				title: a.label
			}, [v]) : R("span", {
				key: "2",
				class: m,
				title: a.label
			}, [v]);
		}
		return p;
	} };
}
function ma(e) {
	var t = A("tree").value;
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
				l = R("span", {
					class: p,
					style: g
				}, null);
			}
		} else l = ia(s, {
			createElement: n,
			node: r
		});
		return l;
	} };
}
function ha(e) {
	var t = A("tree").value;
	return { renderOperations: function(n) {
		var r = e.node, i = e.treeScope, a = i.scopedSlots, o = (i?.treeProps || {}).operations, s = null;
		return s = a != null && a.operations ? a.operations({ node: r?.getModel() }) : ia(o, {
			createElement: n,
			node: r
		}), s &&= R("span", {
			class: `${t}__operations`,
			ignore: "active,expand"
		}, [s]), s;
	} };
}
function ga(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function _a(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ga(Object(n), !0).forEach(function(t) {
			j(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ga(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function va(e) {
	var t = e.treeScope, n = e.treeItemRef, r = t.virtualConfig, i = t.treeContentRef, a = t.scrollProps, o = A().value, s = A("tree").value, c = ua(e).handleClick, l = da(e).renderIcon, u = pa(e).renderLabel, d = ma(e).renderLine, f = ha(e).renderOperations, p = Xi(e), m = p.dragStates, h = p.handleDragStart, g = p.handleDragEnd, _ = p.handleDragOver, v = p.handleDragLeave, y = p.handleDrop, b = Pt(i, n, qt(_a({}, a?.value))), x = b.hasLazyLoadHolder, S = b.tRowHeight;
	function C() {
		var t = e.node;
		if (r?.isVirtualScroll.value) var i = setTimeout(function() {
			r.handleRowMounted({
				ref: n,
				data: t
			}), clearTimeout(i);
		}, 100);
	}
	Dr(function() {
		C();
	}), Ht(function() {
		C();
	});
	var w = function() {
		return `${`--level: ${e.node.level};`}`;
	}, T = function() {
		var t = e.node, n = m.isDragOver, r = m.isDragging, i = m.dropPosition, a = [];
		return a.push(`${s}__item`), a.push(j(j(j({}, `${s}__item--open`, t.expanded), `${o}-is-active`, t.isActivable() ? t.actived : !1), `${o}-is-disabled`, t.isDisabled())), a.push(j({}, `${s}__item--draggable`, !t.isDisabled() && t.isDraggable())), t.visible ? a.push(`${s}__item--visible`) : a.push(`${s}__item--hidden`), t.vmIsLocked && a.push(`${s}__item--locked`), t.vmIsRest && a.push(`${s}__item--matched`), a.push(j(j(j(j({}, `${s}__item--dragging`, r), `${s}__item--tip-top`, n && i < 0), `${s}__item--tip-bottom`, n && i > 0), `${s}__item--tip-highlight`, !r && n && i === 0)), a;
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
			return l.stateId = r.stateId, R("div", {
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
			}, [x.value ? [R("div", null, null)] : E(t)]);
		}
	};
}
function ya(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ba(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ya(Object(n), !0).forEach(function(t) {
			j(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ya(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var xa = Z(ba(ba({ props: {
	stateId: { type: String },
	itemKey: { type: String },
	rowIndex: { type: Number },
	treeScope: { type: Object }
} }, Wi), {}, {
	setup: function(e, t) {
		var n = la(e, t).state, r = n.treeItemRef;
		return B(), {
			treeItemRef: r,
			renderItemNode: va(n).renderItemNode
		};
	},
	render: function(e) {
		var t = Ki(e);
		return typeof this.renderItemNode == "function" ? this.renderItemNode(t) : null;
	}
}));
function Sa(e) {
	var t = e, n = t.props, r = t.context, i = ca(e), a = i.toggleExpanded, o = i.toggleActived, s = i.toggleChecked;
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
					var t = na(e, s.target, s.currentTarget)?.value || "";
					t.indexOf("expand") >= 0 && (e === "trigger" ? (l = !0, d = !0) : e === "ignore" && (l = !1)), t.indexOf("active") >= 0 && e === "ignore" && (u = !1);
				}), l && (a(c), d) || (u && o(c), $i(n, r, "click", {
					node: c.getModel(),
					e: i
				}), t.mouseEvent = null);
			}
		}
	};
}
function Ca(e) {
	var t = e.store, n = e.scope, r = e.allNodes, i = e.nodes, a = e.virtualConfig, o = Sa(e), s = o.handleClick, c = o.handleChange, l = B(!1), u = /* @__PURE__ */ new Map(), d = function() {
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
		var a = t.VIRTUAL_SCROLL_INDEX || r, o = t[Li];
		return R(xa, {
			key: o,
			rowIndex: a,
			stateId: i,
			itemKey: o,
			treeScope: n,
			onClick: s,
			onChange: c
		}, null);
	};
	return V(r, f), V(a.visibleData, p), d(), f(), p(), t.emitter.on("update", d), {
		nodesEmpty: l,
		renderTreeNodes: function(e) {
			var t = `render-${(/* @__PURE__ */ new Date()).getTime()}`;
			return i.value.map(function(n, r) {
				return m(e, n, r, t);
			});
		}
	};
}
function wa(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ta(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? wa(Object(n), !0).forEach(function(t) {
			j(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wa(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ea(e) {
	var t = e, n = t.props, r = t.context, i = t.allNodes, a = t.nodes, o = t.scope, s = t.treeContentRef, c = t.isScrolling, l = F(function() {
		return Ta({ rowHeight: 34 }, n.scroll);
	});
	o.scrollProps = l;
	var u = F(function() {
		return {
			data: i.value.filter(function(e) {
				return e.visible;
			}),
			scroll: l.value,
			preventResizeRefresh: !0
		};
	}), d = y(s, u);
	o.virtualConfig = d, t.virtualConfig = d, Dr(function() {
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
					ot.error("Tree", "scrollToElement: one of `index` or `key` must exist.");
					return;
				}
				if (t = i.value?.findIndex(function(t) {
					return [Ae(t.data, "key"), Ae(t.data, n.keys?.value || "value")].includes(e.key);
				}), t < 0) {
					ot.error("Tree", `${e.key} does not exist in data, check \`key\` or \`data\` please.`);
					return;
				}
			}
			d.scrollToElement(Ta(Ta({}, e), {}, { index: t - 1 }));
		}
	};
}
function Da(e, t) {
	var n = B(), r = B([]), i = B([]), a = B(!1), o = Xt(e), s = Ji(e, o, "value", "defaultValue", "onChange", "change"), c = Ji(e, o, "actived", "defaultActived", "onActive", "active"), l = Ji(e, o, "expanded", "defaultExpanded", "onExpand", "expand");
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
function Oa(e) {
	var t = e.props, n = e.context, r = e.refProps, i = t.valueMode, a = t.filter, o = t.keys, s = t.checkAllAffectedBy, c = new Ui({
		valueMode: i,
		checkAllAffectedBy: s,
		filter: a
	}), l = e.vmValue[0], u = e.vmActived[0], d = e.vmExpanded[0], f = function() {
		var e = _e(t, [
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
	}, v = function(e) {
		var r = { node: e.node.getModel() };
		Array.isArray(l.value) && l.value.length > 0 && c.replaceChecked(l.value), Array.isArray(d.value) && d.value.length > 0 && c.replaceExpanded(d.value), Array.isArray(u.value) && u.value.length > 0 && c.replaceActived(u.value), t != null && t.onLoad && t?.onLoad(r), n.emit("load", r);
	}, y = function(e) {
		c.reload(e || []), c.refreshNodes(), Array.isArray(l.value) && c.setChecked(l.value), p(), Array.isArray(u.value) && c.setActived(u.value), c.refreshState();
	};
	function b() {
		c.setConfig({ keys: o }), f(), c.append(t.data || []), c.refreshNodes(), Array.isArray(l.value) && c.setChecked(l.value), p(), Array.isArray(u.value) && c.setActived(u.value), c.emitter.on("load", v), c.emitter.on("update", g);
	}
	return b(), e.setStore(c), V(function() {
		return Ue(l.value || []);
	}, function(e) {
		c.replaceChecked(e);
	}), V(function() {
		return Ue(d.value || []);
	}, function(e) {
		c.replaceExpanded(e);
	}), V(function() {
		return Ue(u.value || []);
	}, function(e) {
		c.replaceActived(e);
	}), V(r.filter, function(e, t) {
		_(e, t);
	}), V(r.keys, function(e) {
		c.setConfig({ keys: e });
	}), V(r.expandAll, function(e) {
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
		rebuild: y,
		checkFilterExpand: _,
		updateStoreConfig: f,
		updateExpanded: p,
		expandFilterPath: g
	};
}
function ka(e) {
	return e && (isNaN(Number(e)) ? e : `${e}px`);
}
function Aa(e) {
	var t = e.props, n = A("tree").value, r = A().value, i = e.virtualConfig, a = e.isScrolling, o = e.refProps, s = o.height, c = o.maxHeight;
	return {
		treeClasses: F(function() {
			var e = [n], o = t.disabled, s = t.hover, c = t.transition, l = t.checkable, u = t.draggable, d = t.expandOnClickNode, f = t.scroll;
			return o && e.push(`${r}-is-disabled`), s && e.push(`${n}--hoverable`), l && e.push(`${n}--checkable`), u && e.push(`${n}--draggable`), c && e.push(`${n}--transition`), d && e.push(`${n}--block-node`), i?.isVirtualScroll.value ? (e.push(`${n}__vscroll`), a.value && e.push(`${n}--scrolling`)) : f && f.type === "lazy" && e.push(`${n}__lazyload`), e;
		}),
		treeContentStyles: F(function() {
			return {
				height: ka(s.value),
				maxHeight: ka(c.value),
				overflowY: ka(s.value) || ka(c.value) ? "auto" : void 0
			};
		}),
		scrollStyles: F(function() {
			var e = `translateY(${i?.isVirtualScroll.value ? i?.translateY.value : 0}px)`;
			return {
				transform: e,
				"-ms-transform": e,
				"-moz-transform": e,
				"-webkit-transform": e
			};
		}),
		cursorStyles: F(function() {
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
var ja = {
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
function Ma(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Na(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ma(Object(n), !0).forEach(function(t) {
			j(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ma(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Pa(e) {
	return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !_r(e);
}
var Fa = Gi(Z({
	name: "TTree",
	model: {
		prop: "value",
		event: "change"
	},
	props: ja,
	setup: function(e, t) {
		var n = te("tree"), r = n.t, i = n.global, a = A(), o = A("tree"), s = Be(), c = wt().keepExpand, l = Da(e, t).state, u = l.treeContentRef, d = l.isScrolling, f = Oa(l), p = f.store, m = f.updateStoreConfig, h = f.rebuild;
		sa(l);
		var g = ca(l), _ = g.setActived, v = g.setExpanded, y = g.setChecked, b = Ea(l), x = b.onInnerVirtualScroll, S = b.virtualConfig, C = b.scrollToElement, w = Ca(l), T = w.renderTreeNodes, E = w.nodesEmpty, D = Aa(l);
		return {
			t: r,
			global: i,
			classPrefix: a,
			componentName: o,
			state: l,
			store: p,
			treeClasses: D.treeClasses,
			treeContentRef: u,
			renderTNodeJSX: s,
			keepExpand: c,
			rebuild: h,
			updateStoreConfig: m,
			setActived: _,
			setExpanded: v,
			setChecked: y,
			renderTreeNodes: T,
			nodesEmpty: E,
			isScrolling: d,
			onInnerVirtualScroll: x,
			treeContentStyles: D.treeContentStyles,
			scrollStyles: D.scrollStyles,
			cursorStyles: D.cursorStyles,
			virtualConfig: S,
			scrollToElement: C,
			scrollTo: C
		};
	},
	watch: { data: function(e) {
		this.rebuild(e);
	} },
	methods: {
		refresh: function() {
			this.store.refreshState();
		},
		setItem: function(t, n) {
			var r = this, i = this.store.getNode(t), a = n, o = Object.keys(a);
			i && a && ([
				"expanded",
				"actived",
				"checked"
			].forEach(function(t) {
				if (o.includes(t)) {
					var n = a[t];
					delete a[t];
					var s = r[`set${e(t)}`];
					u(s) && s.call(r, i, n);
				}
			}), i.set(a));
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
				var r = oa(n, t?.value ?? "");
				r ? n.appendNodes(e, r) : n.appendNodes(e, t);
			});
		},
		insertBefore: function(e, t) {
			var n = this.store, r = oa(n, t?.value ?? "");
			r ? n.insertBefore(e, r) : n.insertBefore(e, t);
		},
		insertAfter: function(e, t) {
			var n = this.store, r = oa(n, t?.value ?? "");
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
				var t = e.value, n = Na(Na({}, e.data), {}, { value: t });
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
		var t = this.state, n = this.treeClasses, r = this.updateStoreConfig, i = this.renderTreeNodes, a = this.nodesEmpty, o = this.isScrolling, s = this.virtualConfig, c = this.treeContentStyles, l = this.scrollStyles, u = this.cursorStyles, d = Ki(e), f = t.scope, p = t.allNodes, m = t.refProps;
		f.scopedSlots = qi(this), r();
		var h = i(d), g = this.componentName, _ = s.isVirtualScroll.value, v = null;
		if (a) {
			var y = !this.empty && !this.$slots.empty ? this.t(this.global.empty) : this.renderTNodeJSX("empty");
			v = R("div", { class: `${g}__empty` }, [y]);
		} else h.length <= 0 && (v = R("div", null, null));
		var b = this.$props.transition, x = null;
		x = !b || !this.keepExpand || _ && o ? R("div", {
			class: `${g}__list`,
			style: l
		}, [h]) : R(Vr, {
			tag: "div",
			class: `${g}__list`,
			"enter-active-class": `${g}__item--enter-active`,
			"leave-active-class": `${g}__item--leave-active`,
			style: l
		}, Pa(h) ? h : { default: function() {
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
		}, C = R("div", { style: S }, null);
		return R("div", {
			class: n,
			ref: "treeContentRef",
			onScroll: this.onInnerVirtualScroll,
			style: c
		}, [
			_ && R("div", {
				class: `${g}__vscroll-cursor`,
				style: u
			}, null),
			v || x,
			_ && C
		]);
	}
})), Ia = Ot(di), La = {
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
}, Ra = "16px", za = Object.keys({
	"top-left": {
		left: Ra,
		top: Ra
	},
	"top-right": {
		right: Ra,
		top: Ra
	},
	"bottom-right": {
		right: Ra,
		bottom: Ra
	},
	"bottom-left": {
		left: Ra,
		bottom: Ra
	}
}), Ba = {
	duration: 200,
	easing: "linear"
}, Va = function(e, t, n) {
	if (!za.includes(e)) return null;
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
}, Ha = function(e, t, n) {
	if (!za.includes(e)) return null;
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
}, Ua = function(e, t) {
	if (e) {
		var n = e?.offsetHeight || 0, r = Va(t, e?.offsetWidth || 0, n);
		r && e.animate && e.animate(r, Ba);
	}
}, Wa = function(e, t, n) {
	if (e) {
		var r = e?.offsetHeight || 0, i = Ha(t, e?.offsetWidth || 0, r);
		if (!i) return n();
		var a = e.animate && e.animate(i, Ba);
		a ? a.onfinish = function() {
			n();
		} : (e.style.display = "none", n());
	}
};
function Ga(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ka(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ga(Object(n), !0).forEach(function(t) {
			j(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ga(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var qa = Z({
	name: "TNotification",
	props: Ka(Ka({}, La), {}, {
		placement: String,
		className: String
	}),
	setup: function(e, t) {
		var n = t.slots, r = t.expose, i = A("notification"), a = te("classPrefix").classPrefix, o = we({
			InfoCircleFilledIcon: De,
			CheckCircleFilledIcon: Fe,
			CloseIcon: Me
		}), c = o.InfoCircleFilledIcon, l = o.CheckCircleFilledIcon, d = o.CloseIcon, f = Be(), p = s(), m = B(null), h = B(null), g = function(t) {
			var n = h.value;
			Wa(n, e.placement, function() {
				var n;
				(n = e.onCloseBtnClick) == null || n.call(e, { e: t });
			});
		}, _ = function() {
			var t = h.value;
			Wa(t, e.placement, function() {
				var t;
				(t = e.onClose) == null || t.call(e);
			});
		}, v = function() {
			var t;
			if (e.icon === !1) return null;
			if (u(e.icon)) t = e.icon(U);
			else if (n.icon) t = n.icon(null);
			else if (e.theme) {
				var r = e.theme === "success" ? R(l, { class: `${a.value}-is-${e.theme}` }, null) : R(c, { class: `${a.value}-is-${e.theme}` }, null);
				t = R("div", { class: `${a.value}-notification__icon` }, [r]);
			}
			return t;
		}, y = function() {
			var e = R(d, null, null);
			return R("span", {
				class: `${a.value}-message__close`,
				onClick: g
			}, [f("closeBtn", e)]);
		}, b = function() {
			return R("div", { class: `${i.value}__content` }, [p("default", "content")]);
		}, x = function() {
			e.duration && clearTimeout(m.value);
		}, S = function() {
			e.duration && (m.value = Number(setTimeout(function() {
				x();
				var t = h.value;
				Wa(t, e.placement, function() {
					var t;
					(t = e.onDurationEnd) == null || t.call(e);
				});
			}, e.duration)));
		};
		return ur(function() {
			e.duration && S();
		}), Dr(function() {
			var t = h.value;
			Ua(t, e.placement);
		}), r({ close: _ }), function() {
			return R("div", {
				ref: h,
				class: [i.value, e.className],
				onMouseenter: x,
				onMouseleave: S
			}, [v(), R("div", { class: `${i.value}__main` }, [
				R("div", { class: `${i.value}__title__wrap` }, [R("span", { class: `${i.value}__title` }, [f("title")]), y()]),
				b(),
				f("footer")
			])]);
		};
	}
}), Ja = Ot(qa), Ya = {
	get data() {
		return I("designer.types.data");
	},
	get edit() {
		return I("designer.types.edit");
	},
	get export() {
		return I("designer.types.export");
	},
	get file() {
		return I("designer.types.file");
	},
	get help() {
		return I("designer.types.help");
	},
	get layout() {
		return I("designer.types.layout");
	},
	get page() {
		return I("designer.types.page");
	},
	get view() {
		return I("designer.types.view");
	}
};
function Xa(e) {
	let t = e.store(), n = F(() => [{
		exact: !1,
		run: () => t.view.setSpacePanning(!0),
		shortcut: "Space"
	}, ...e.commands.list().map((t) => ({
		preventDefault: t.preventDefault,
		run: (n) => {
			e.commands.dispatch(t.id, n);
		},
		shortcut: t.shortcut ?? []
	}))]), { space: r } = v(n, { filter: i });
	function i(n) {
		if (t.tutorial.phase === "running") return !1;
		let r = n.target, i = e.root?.();
		return i && (!(r instanceof Node) || !i.contains(r)) ? !1 : !(r instanceof HTMLElement && ([
			"INPUT",
			"SELECT",
			"TEXTAREA"
		].includes(r.tagName) || r.isContentEditable || r.closest("[contenteditable]:not([contenteditable=\"false\"])") !== null) || Array.from((i ?? document).querySelectorAll(".base-dialog-host")).some((e) => e.getClientRects().length > 0));
	}
	V(r, (e) => {
		e || t.view.setSpacePanning(!1);
	}, { flush: "sync" }), Wt(() => t.view.setSpacePanning(!1));
}
var Za = "data:image/png;base64,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", Qa = "menu-interaction--keep-open";
function $a(e) {
	return e.composedPath().some((e) => e instanceof Element && e.classList.contains("menu-interaction--keep-open"));
}
var eo = {
	key: 0,
	class: "my-1 h-px bg-edge"
}, to = ["aria-label"], no = [
	"data-command",
	"disabled",
	"aria-pressed",
	"onClick"
], ro = [
	"data-command",
	"title",
	"disabled",
	"onClick"
], io = { class: "flex-1" }, ao = {
	key: 0,
	class: "menu-items__check text-caption text-accent"
}, oo = {
	key: 1,
	class: "menu-items__shortcut text-caption text-ink-muted"
}, so = {
	key: 3,
	class: "group/menu relative"
}, co = {
	class: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs text-ink hover:bg-menu-hover hover:text-menu-foreground",
	"aria-haspopup": "true"
}, lo = { class: "flex-1" }, uo = { class: "invisible absolute left-full top-0 z-10 min-w-48 rounded-(--studio-menu-radius) border border-edge bg-menu-surface py-1 [box-shadow:var(--td-shadow-2)] group-hover/menu:visible group-has-[:focus-visible]/menu:visible" }, fo = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "menu-items",
	props: { items: {} },
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.disabled ? "cursor-not-allowed text-(--td-text-color-disabled)" : e.danger ? "text-danger hover:bg-menu-danger-hover hover:text-menu-danger-ink" : "text-ink hover:bg-menu-hover hover:text-menu-foreground";
		}
		function i(e) {
			e.disabled || n("select", e);
		}
		return (t, n) => {
			let a = pn("menu-items", !0);
			return X(!0), N(G, null, M(e.items, (e, t) => (X(), N(G, { key: t }, [e.type === "divider" ? (X(), N("div", eo)) : e.type === "segment" ? (X(), N("div", {
				key: 1,
				class: J(["menu-items__segment flex items-center gap-2 px-2 py-2 whitespace-nowrap", H(Qa)])
			}, [
				R(T, {
					name: e.icon ?? "dots",
					class: "h-3.5 w-3.5 shrink-0"
				}, null, 8, ["name"]),
				P("span", null, W(e.label), 1),
				P("div", {
					class: "menu-items__segments inline-flex ml-auto p-0.5 border border-edge bg-panel-3 rounded",
					role: "group",
					"aria-label": e.label
				}, [(X(!0), N(G, null, M(e.items, (e) => (X(), N("button", {
					key: e.commandId,
					type: "button",
					"data-command": e.commandId,
					disabled: e.disabled,
					"aria-pressed": e.checked,
					class: J(["menu-items__option rounded-xs text-ink-dim disabled:text-ink-disabled [padding:3px_7px] focus-visible:[outline:2px_solid_var(--color-accent)] focus-visible:[outline-offset:2px] hover:bg-panel-2 hover:text-ink", { "menu-items__option--checked": e.checked }]),
					onClick: (t) => i(e)
				}, W(e.label), 11, no))), 128))], 8, to)
			], 2)) : e.type === "item" ? (X(), N("button", {
				key: 2,
				"data-command": e.commandId,
				class: J(["menu-items__item flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs", r(e)]),
				title: e.help,
				disabled: e.disabled,
				onClick: (t) => i(e)
			}, [
				R(T, {
					name: e.icon ?? "dots",
					class: "h-3.5 w-3.5 shrink-0"
				}, null, 8, ["name"]),
				P("span", io, W(e.label), 1),
				e.checked === void 0 ? e.shortcut ? (X(), N("span", oo, W(e.shortcut), 1)) : K("", !0) : (X(), N("span", ao, W(e.checked ? H(I)("designer.menuBar.checkedIndicator") : ""), 1))
			], 10, ro)) : (X(), N("div", so, [P("button", co, [
				R(T, {
					name: e.icon ?? "dots",
					class: "h-3.5 w-3.5 shrink-0"
				}, null, 8, ["name"]),
				P("span", lo, W(e.label), 1),
				n[0] ||= P("span", { "aria-hidden": "true" }, "›", -1)
			]), P("div", uo, [R(a, {
				items: e.items,
				onSelect: i
			}, null, 8, ["items"])])]))], 64))), 128);
		};
	}
}), [["__scopeId", "data-v-c547d8e3"]]), po = ["aria-label", "aria-expanded"], mo = ["aria-label"], ho = [
	"data-command",
	"aria-checked",
	"disabled",
	"onClick"
], go = { class: "flex-1" }, _o = /* @__PURE__ */ Z({
	__name: "theme-selector",
	setup(e) {
		let t = k(), n = B(), r = B(), a = B(), o = B(!1), { isTop: s, zIndex: c } = Ur(o), l = F(() => Nt.flatMap(({ mode: e }) => {
			let n = t.commands.get(i(e));
			return n ? [Ze(n, (e, ...n) => {
				t.commands.dispatch(e, ...n);
			})] : [];
		})), u = F(() => l.value.find((e) => e.checked)), d = F(() => I("designer.theme.groupLabel")), f = F(() => u.value ? `${d.value}: ${u.value.label}` : d.value);
		function p() {
			o.value = !1;
		}
		function m() {
			p(), r.value?.focus();
		}
		async function h(e = "first") {
			o.value = !0, await Un(), _(e);
		}
		function g() {
			o.value ? m() : h();
		}
		function _(e) {
			let t = a.value?.querySelectorAll("[role=\"menuitemradio\"]:not(:disabled)");
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
			e.disabled || (m(), e.action());
		}
		function b(e) {
			e.stopPropagation();
		}
		function x(e) {
			e.relatedTarget instanceof Node && n.value?.contains(e.relatedTarget) || p();
		}
		function S(e) {
			n.value && !e.composedPath().includes(n.value) && p();
		}
		return v([
			{
				run: () => void h("first"),
				shortcut: "ArrowDown"
			},
			{
				run: () => void h("last"),
				shortcut: "ArrowUp"
			},
			{
				preventDefault: !1,
				run: b,
				shortcut: "Space"
			}
		], { target: r }), v([
			{
				run: () => _("next"),
				shortcut: "ArrowDown"
			},
			{
				run: () => _("previous"),
				shortcut: "ArrowUp"
			},
			{
				run: () => _("first"),
				shortcut: "Home"
			},
			{
				run: () => _("last"),
				shortcut: "End"
			},
			{
				preventDefault: !1,
				run: b,
				shortcut: "Space"
			}
		], { target: a }), v([{
			run: m,
			shortcut: "Escape"
		}], {
			enabled: () => o.value && s.value,
			target: () => document
		}), ce(window, "click", S, { capture: !0 }), (e, t) => l.value.length ? (X(), N("div", {
			key: 0,
			ref_key: "root",
			ref: n,
			class: "relative shrink-0",
			onFocusout: x
		}, [P("button", {
			ref_key: "trigger",
			ref: r,
			type: "button",
			class: "flex h-7 items-center gap-1.5 rounded-sm border border-edge px-2 text-xs text-ink-dim hover:bg-edge hover:text-ink focus-visible:outline-2 focus-visible:outline-accent",
			"aria-label": f.value,
			"aria-expanded": o.value,
			"aria-haspopup": "menu",
			onClick: g
		}, [
			R(T, {
				name: u.value?.icon ?? "palette",
				class: "h-4 w-4"
			}, null, 8, ["name"]),
			P("span", null, W(u.value?.label ?? d.value), 1),
			R(T, {
				name: "chevron-down",
				class: "h-3 w-3"
			})
		], 8, po), o.value ? (X(), N("div", {
			key: 0,
			ref_key: "menu",
			ref: a,
			role: "menu",
			"aria-label": d.value,
			style: Y({ zIndex: H(c) }),
			class: "absolute right-0 top-full mt-1 min-w-32 rounded-(--studio-menu-radius) border border-edge bg-menu-surface py-1 [box-shadow:var(--td-shadow-2)]"
		}, [(X(!0), N(G, null, M(l.value, (e) => (X(), N("button", {
			key: e.commandId,
			type: "button",
			role: "menuitemradio",
			tabindex: "-1",
			"data-command": e.commandId,
			"aria-checked": e.checked ?? !1,
			class: J([{ "bg-menu-selected text-menu-selected-ink": e.checked }, "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs text-ink enabled:hover:bg-menu-hover enabled:hover:text-menu-foreground focus-visible:bg-menu-hover focus-visible:text-menu-foreground disabled:cursor-not-allowed disabled:text-ink-disabled"]),
			disabled: e.disabled,
			onClick: (t) => y(e)
		}, [
			R(T, {
				name: e.icon ?? "palette",
				class: "h-4 w-4"
			}, null, 8, ["name"]),
			P("span", go, W(e.label), 1),
			e.checked ? (X(), z(T, {
				key: 0,
				name: "check",
				class: "h-3.5 w-3.5"
			})) : K("", !0)
		], 10, ho))), 128))], 12, mo)) : K("", !0)], 544)) : K("", !0);
	}
}), vo = { class: "relative flex h-9 shrink-0 items-center gap-1 border-b border-edge bg-app px-2" }, yo = ["src", "alt"], bo = {
	key: 1,
	class: "mr-2 shrink-0 select-none text-xs font-semibold tracking-wide text-ink"
}, xo = { class: "flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-hidden" }, So = [
	"data-menu-label",
	"onClick",
	"onMouseenter"
], Co = ["title"], wo = "Print Studio", To = /* @__PURE__ */ Z({
	__name: "menu-bar",
	props: { menus: {} },
	setup(e) {
		let t = e, n = F(() => I("designer.menuBar.brandName") !== wo), r = k().store(), i = B([]), a = B(null), { isTop: o, zIndex: s } = Ur(() => a.value !== null), c = B([]), l = B({
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
			if ($a(e)) return;
			let t = e.composedPath();
			i.value.some((e) => t.includes(e)) || u();
		}
		return Ve("menu", (e) => {
			let n = t.menus.findIndex((t) => t.label === e);
			a.value = n < 0 ? null : n, n >= 0 && f(n);
		}), v([{
			run: u,
			shortcut: "Escape"
		}], {
			enabled: () => a.value !== null && o.value,
			target: () => document
		}), ce(window, "click", g, { capture: !0 }), (t, o) => (X(), N("div", vo, [
			n.value ? (X(), N("span", bo, W(H(I)("designer.menuBar.brandName")), 1)) : (X(), N("img", {
				key: 0,
				"data-brand-logo": "",
				src: H(Za),
				alt: H(I)("app.app.logoAccessibleLabel"),
				class: "mr-2 h-5.5 w-5.5 shrink-0 self-center rounded-sm"
			}, null, 8, yo)),
			P("div", xo, [(X(!0), N(G, null, M(e.menus, (e, t) => (X(), N("div", {
				key: e.label,
				ref_for: !0,
				ref_key: "menuGroupEls",
				ref: i,
				class: "relative shrink-0"
			}, [P("button", {
				ref_for: !0,
				ref: (e) => d(t, e),
				"data-menu-label": e.label,
				class: J(["flex items-center gap-1.5 rounded-sm px-2 py-1 text-xs", a.value === t ? "bg-edge text-ink" : "text-ink-dim hover:bg-edge hover:text-ink"]),
				onClick: (e) => p(t),
				onMouseenter: (e) => m(t)
			}, [R(T, {
				name: e.icon ?? "dots",
				class: "h-3.5 w-3.5 shrink-0"
			}, null, 8, ["name"]), L(" " + W(e.label), 1)], 42, So), a.value === t ? (X(), N("div", {
				key: 0,
				class: "fixed min-w-48 rounded-(--studio-menu-radius) border border-edge bg-menu-surface py-1 [box-shadow:var(--td-shadow-2)]",
				style: Y({
					...l.value,
					zIndex: H(s)
				})
			}, [R(fo, {
				items: e.items,
				onSelect: h
			}, null, 8, ["items"])], 4)) : K("", !0)]))), 128))]),
			P("span", {
				class: "max-w-48 shrink truncate select-none text-compact text-ink-dim/60",
				title: H(r).document.data.name
			}, W(H(r).document.data.name), 9, Co),
			R(_o, { class: "ml-2" })
		]));
	}
}), Eo = ["inert", "aria-hidden"], Do = ["inert", "aria-hidden"], Oo = { class: "overflow-row__popup flex flex-col items-start gap-3 overflow-auto p-2" }, ko = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "overflow-row",
	props: {
		items: {},
		moreLabel: {}
	},
	setup(e) {
		let t = e, n = B(), r = B(), i = $n(/* @__PURE__ */ new Map()), a = $n(/* @__PURE__ */ new Map()), o = B({}), s = B(0), c = B(0), l = B(!1), { popupProps: u } = E({ onVisibleChange: m }, "popupProps", l), d = F(() => [
			n.value,
			r.value,
			...a.values()
		].filter((e) => !!e)), f = F(() => {
			let e = t.items.map((e) => o.value[e.key]);
			if (e.some((e) => e === void 0)) return t.items.length;
			if (e.reduce((e, t) => e + t, 0) + Math.max(0, e.length - 1) * 8 <= s.value) return e.length;
			let n = c.value, r = 0;
			for (let t of e) {
				if (n += t + 8, n > s.value) break;
				r++;
			}
			return r;
		});
		function p(e, t) {
			t instanceof HTMLElement ? a.set(e, t) : a.delete(e);
		}
		function m(e) {
			l.value = e;
		}
		function h(e, t) {
			t instanceof HTMLElement ? i.set(e, t) : i.delete(e);
		}
		function g() {
			s.value = n.value?.clientWidth ?? 0, c.value = r.value?.getBoundingClientRect().width ?? 0;
			let e = { ...o.value };
			for (let [t, n] of a) {
				let r = n.getBoundingClientRect().width;
				r > 0 && (e[t] = r);
			}
			o.value = e;
		}
		return V(f, (e) => {
			e === t.items.length && (l.value = !1);
		}), Et(d, g), (t, a) => {
			let o = le, s = Te;
			return X(), N("div", {
				ref_key: "root",
				ref: n,
				class: "overflow-row"
			}, [(X(!0), N(G, null, M(e.items, (e, r) => (X(), z(Rn, {
				key: e.key,
				to: H(i).get(e.key) ?? n.value ?? "body",
				disabled: r < f.value || !H(i).has(e.key)
			}, [P("div", {
				ref_for: !0,
				ref: (t) => p(e.key, t),
				class: J(["overflow-row__item", { "overflow-row__item--measuring": r >= f.value && !H(i).has(e.key) }]),
				inert: r >= f.value && !H(i).has(e.key),
				"aria-hidden": r >= f.value && !H(i).has(e.key) || void 0
			}, [Xn(t.$slots, "default", { item: e }, void 0, !0)], 10, Eo)], 8, ["to", "disabled"]))), 128)), P("div", {
				ref_key: "trigger",
				ref: r,
				class: J(["overflow-row__trigger", { "overflow-row__trigger--measuring": f.value === e.items.length }]),
				inert: f.value === e.items.length,
				"aria-hidden": f.value === e.items.length || void 0
			}, [R(s, wr(H(u), {
				visible: l.value,
				"destroy-on-close": !1,
				trigger: "click",
				placement: "bottom-left"
			}), {
				content: q(() => [P("div", Oo, [(X(!0), N(G, null, M(e.items, (e) => (X(), N("div", {
					key: e.key,
					ref_for: !0,
					ref: (t) => h(e.key, t),
					class: "overflow-row__host"
				}))), 128))])]),
				default: q(() => [R(o, {
					variant: "outline",
					"aria-label": e.moreLabel
				}, {
					default: q(() => [L(W(e.moreLabel), 1)]),
					_: 1
				}, 8, ["aria-label"])]),
				_: 1
			}, 16, ["visible"])], 10, Do)], 512);
		};
	}
}), [["__scopeId", "data-v-a6c9c82e"]]), Ao = /* @__PURE__ */ Z({
	__name: "check-toggle",
	props: /*@__PURE__*/ nr({ label: {} }, {
		modelValue: { type: Boolean },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = $t(e, "modelValue");
		return (n, r) => {
			let i = gt;
			return X(), z(i, {
				modelValue: t.value,
				"onUpdate:modelValue": r[0] ||= (e) => t.value = e
			}, {
				default: q(() => [L(W(e.label), 1)]),
				_: 1
			}, 8, ["modelValue"]);
		};
	}
}), jo = ["data-tool-option", "inert"], Mo = { class: "tool-option-field__label text-compact text-ink-dim" }, No = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "tool-option-field",
	props: {
		defaults: { type: Boolean },
		field: {},
		node: {},
		nodes: {}
	},
	setup(e) {
		let t = e, n = k(), r = n.store(), i = { labelWidth: 0 }, a = !1, o = F(() => [t.node, ...t.nodes].some((e) => e.locked || t.field.disabledIf?.(e.props))), s = F(() => t.nodes.some((e) => !re(wn(e, t.field), wn(t.node, t.field)))), c = F({
			get() {
				return { value: s.value ? void 0 : wn(t.node, t.field) };
			},
			set(e) {
				if (!(o.value || e.value === void 0 || e.value === null || t.field.type === "number" && e.value === "")) {
					if (t.defaults) r.element.updateToolProps(t.node.type, t.field.value?.set(t.node, e.value).props ?? xn(t.node.props, t.field.key, e.value));
					else {
						a = !0;
						for (let n of t.nodes) n.locked || t.field.disabledIf?.(n.props) || (t.field.value ? r.element.update(n.id, t.field.value.set(n, e.value), { transient: !0 }) : r.element.updateProps(n.id, xn(n.props, t.field.key, e.value), { transient: !0 }));
					}
				}
			}
		}), l = F(() => {
			let e = t.field.type === "image" ? {
				...t.field,
				controlProps: {
					...t.field.controlProps,
					compact: !0
				}
			} : t.field;
			return ie(e, u, t.node, n.elements, {
				mixed: s.value,
				nodes: t.nodes
			}).map((e) => Object.assign({}, e, { props: {
				...e.props,
				"aria-label": t.field.label,
				disabled: o.value || (e.props && "disabled" in e.props ? e.props.disabled : !1)
			} }));
		});
		function u() {
			a &&= (r.history.commit(), !1);
		}
		return ar(u), (t, n) => (X(), N("div", {
			class: J(["tool-option-field flex shrink-0 items-center gap-2", {
				"tool-option-field--image": e.field.type === "image",
				"tool-option-field--disabled": o.value
			}]),
			"data-tool-option": e.field.key,
			inert: o.value
		}, [P("span", Mo, W(e.field.label), 1), R(ke, {
			modelValue: c.value,
			"onUpdate:modelValue": n[0] ||= (e) => c.value = e,
			class: "tool-option-field__control",
			schema: l.value,
			"form-props": i
		}, null, 8, ["modelValue", "schema"])], 10, jo));
	}
}), [["__scopeId", "data-v-9fb0c288"]]), Po = { class: "options-bar flex h-10 min-w-0 shrink-0 items-center gap-2 border-b border-edge bg-panel pl-3 pr-2" }, Fo = ["title"], Io = { class: "flex min-w-0 flex-1 items-center gap-2" }, Lo = { class: "options-bar__actions flex shrink-0 items-center gap-2" }, Ro = { class: "w-60 max-w-[calc(100vw-32px)] whitespace-normal" }, zo = { class: "flex w-60 max-w-[calc(100vw-32px)] flex-col gap-3 p-2" }, Bo = /* @__PURE__ */ Z({
	__name: "options-bar",
	setup(e) {
		let t = { labelWidth: 36 }, n = k(), r = n.store(), { commands: i } = n, { popupProps: a } = E(), { popupProps: o } = E(), s = te("snapToGrid"), c = te("snapToGuides"), l = te("snapToMargins"), u = te("snapToElements"), d = te("guidesLocked"), f = te("previewWithData"), p = te("clickToCreate"), m = F({
			get() {
				return { gridSize: r.view.settings.gridSize };
			},
			set(e) {
				r.view.updateSettings({ gridSize: Number(e.gridSize) || 1 });
			}
		}), h = F(() => [{
			field: "gridSize",
			label: I("designer.optionsBar.gridLabel"),
			props: {
				max: 50,
				min: 1,
				suffix: I("designer.optionsBar.distanceUnit"),
				theme: "normal"
			},
			type: "inputNumber"
		}]), g = F(() => i.get(`tool.use.${r.view.activeTool}`) ? Ln(r.view.activeTool, n.elements) : void 0), _ = F(() => {
			if (g.value?.kind === "element") return g.value.elementType;
			if (g.value?.kind === "select" && r.selection.sameType) return r.selection.primary?.type;
		}), v = kt(() => _.value), y = F(() => !_.value || !r.selection.sameType || r.selection.primary?.type !== _.value ? [] : r.selection.nodes.map((e) => Mn(r.document.data, e, n.elements))), b = F(() => {
			if (y.value.length) return y.value[0];
			let e = v.value;
			return e ? Ut(e.type, { props: r.element.getToolProps(e.type) }, n.elements) : void 0;
		}), x = F(() => {
			let e = v.value, t = b.value;
			if (!e || !t) return [];
			let i = (y.value.length ? jn(e.inspectorSections, r.document.data, t, n.elements) : e.inspectorSections).flatMap((e) => e.fields);
			return (e.toolOptions ?? i.filter((e) => [
				"boolean",
				"color",
				"number",
				"select"
			].includes(e.type)).slice(0, 3).map((e) => e.key)).flatMap((e) => {
				let n = i.find((t) => t.key === e);
				return !n || y.value.length > 1 && !n.batchEditable || ![t, ...y.value].every((e) => n.showIf?.(e.props) ?? !0) ? [] : [n];
			});
		}), S = F(() => v.value ? I(y.value.length ? "designer.optionsBar.selectionContext" : "designer.optionsBar.creationContext", {
			count: y.value.length,
			name: v.value.label
		}) : g.value?.kind === "select" && !r.selection.isEmpty ? I("designer.controlPanel.selectionSummary", { count: r.selection.nodes.length }) : g.value?.label ?? ""), C = F(() => y.value.length ? y.value.map((e) => e.id).join(",") : r.view.activeTool), w = F({
			get() {
				return { zoom: Math.round(r.view.zoom * 100) };
			},
			set(e) {
				if (typeof e.zoom == "number") {
					let t = e.zoom / 100, n = mr(r).getStageController();
					n?.zoomTo ? n.zoomTo(t) : r.view.setZoom(t);
				}
			}
		}), D = F(() => [{
			field: "zoom",
			label: I("designer.optionsBar.zoomLabel"),
			props: {
				max: 800,
				min: 5,
				suffix: "%",
				theme: "normal"
			},
			type: "inputNumber"
		}]), O = F(() => [{
			"aria-label": I("designer.optionsBar.undoTitle"),
			disabled: !r.history.canUndo,
			id: "undo",
			onClick: function() {
				ee("edit.undo");
			},
			shape: "square",
			slots: { icon: () => [U(T, {
				class: "h-4 w-4",
				name: "undo"
			})] },
			title: I("designer.optionsBar.undoTitle"),
			variant: "outline"
		}, {
			"aria-label": I("designer.optionsBar.redoTitle"),
			disabled: !r.history.canRedo,
			id: "redo",
			onClick: function() {
				ee("edit.redo");
			},
			shape: "square",
			slots: { icon: () => [U(T, {
				class: "h-4 w-4",
				name: "redo"
			})] },
			title: I("designer.optionsBar.redoTitle"),
			variant: "outline"
		}]);
		function ee(e) {
			i.dispatch(e);
		}
		function te(e) {
			return F({
				get: function() {
					return r.view.settings[e];
				},
				set: function(t) {
					r.view.updateSettings({ [e]: t });
				}
			});
		}
		return (e, n) => {
			let i = Te;
			return X(), N("div", Po, [
				P("span", {
					class: "options-bar__context max-w-44 shrink truncate text-compact text-ink-dim min-w-0",
					title: S.value
				}, W(S.value), 9, Fo),
				P("div", Io, [b.value && x.value.length ? (X(), z(ko, {
					key: C.value,
					class: "flex-1",
					items: x.value,
					"more-label": H(I)("designer.optionsBar.morePropertiesLabel")
				}, {
					default: q(({ item: e }) => [R(No, {
						defaults: y.value.length === 0,
						field: e,
						node: b.value,
						nodes: y.value
					}, null, 8, [
						"defaults",
						"field",
						"node",
						"nodes"
					])]),
					_: 1
				}, 8, ["items", "more-label"])) : g.value?.kind === "hand" ? (X(), z(ke, {
					key: 1,
					modelValue: w.value,
					"onUpdate:modelValue": n[0] ||= (e) => w.value = e,
					class: "!w-48 shrink-0",
					schema: D.value,
					"form-props": t
				}, null, 8, ["modelValue", "schema"])) : K("", !0)]),
				P("div", Lo, [
					g.value?.kind === "select" && !H(r).selection.isEmpty ? (X(), z(i, wr({ key: 0 }, H(a), {
						trigger: "click",
						placement: "bottom-left"
					}), {
						content: q(() => [P("div", Ro, [
							R(Oe, { title: H(I)("designer.controlPanel.alignObjectsSection") }, {
								default: q(() => [R(Je)]),
								_: 1
							}, 8, ["title"]),
							R(Oe, { title: H(I)("designer.controlPanel.distributeObjectsSection") }, {
								default: q(() => [R(Je, { kind: "distribute" })]),
								_: 1
							}, 8, ["title"]),
							R(Oe, { title: H(I)("designer.controlPanel.distributeSpacingSection") }, {
								default: q(() => [R(Je, { kind: "spacing" })]),
								_: 1
							}, 8, ["title"]),
							R(Oe, { title: H(I)("designer.controlPanel.alignToSection") }, {
								default: q(() => [R(me)]),
								_: 1
							}, 8, ["title"])
						])]),
						default: q(() => [R(At, {
							icon: "align-left",
							label: H(I)("designer.optionsBar.moreAlignLabel")
						}, null, 8, ["label"])]),
						_: 1
					}, 16)) : K("", !0),
					R(i, wr(H(o), {
						trigger: "click",
						placement: "bottom-right"
					}), {
						content: q(() => [P("div", zo, [
							R(Ao, {
								modelValue: H(s),
								"onUpdate:modelValue": n[1] ||= (e) => Bn(s) ? s.value = e : null,
								label: H(I)("designer.optionsBar.snapToGridLabel")
							}, null, 8, ["modelValue", "label"]),
							R(Ao, {
								modelValue: H(c),
								"onUpdate:modelValue": n[2] ||= (e) => Bn(c) ? c.value = e : null,
								label: H(I)("designer.optionsBar.snapToGuidesLabel")
							}, null, 8, ["modelValue", "label"]),
							R(Ao, {
								modelValue: H(u),
								"onUpdate:modelValue": n[3] ||= (e) => Bn(u) ? u.value = e : null,
								label: H(I)("designer.optionsBar.snapToElementsLabel")
							}, null, 8, ["modelValue", "label"]),
							R(Ao, {
								modelValue: H(l),
								"onUpdate:modelValue": n[4] ||= (e) => Bn(l) ? l.value = e : null,
								label: H(I)("designer.optionsBar.snapToMarginsLabel")
							}, null, 8, ["modelValue", "label"]),
							R(Ao, {
								modelValue: H(d),
								"onUpdate:modelValue": n[5] ||= (e) => Bn(d) ? d.value = e : null,
								label: H(I)("designer.optionsBar.lockGuidesLabel")
							}, null, 8, ["modelValue", "label"]),
							R(ke, {
								modelValue: m.value,
								"onUpdate:modelValue": n[6] ||= (e) => m.value = e,
								class: "shrink-0",
								schema: h.value,
								"form-props": t
							}, null, 8, ["modelValue", "schema"])
						])]),
						default: q(() => [R(At, {
							icon: "sliders",
							label: H(I)("designer.optionsBar.assistLabel")
						}, null, 8, ["label"])]),
						_: 1
					}, 16),
					R(Ao, {
						modelValue: H(f),
						"onUpdate:modelValue": n[7] ||= (e) => Bn(f) ? f.value = e : null,
						label: H(I)("designer.optionsBar.dataPreviewLabel"),
						title: H(I)("designer.optionsBar.dataPreviewHint")
					}, null, 8, [
						"modelValue",
						"label",
						"title"
					]),
					g.value?.kind === "element" ? (X(), z(Ao, {
						key: 1,
						modelValue: H(p),
						"onUpdate:modelValue": n[8] ||= (e) => Bn(p) ? p.value = e : null,
						label: H(I)("designer.optionsBar.continuousPlacementLabel")
					}, null, 8, ["modelValue", "label"])) : K("", !0)
				]),
				R(H(de), {
					class: "ml-2 shrink-0",
					actions: O.value,
					wrap: !1
				}, null, 8, ["actions"])
			]);
		};
	}
}), Vo = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	focusable: "false"
}, Ho = ["d"], Uo = /* @__PURE__ */ Z({
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
		}, r = F(() => n[t.name]);
		return (t, n) => r.value ? (X(), N("svg", Vo, [P("path", {
			d: r.value,
			"fill-rule": "evenodd"
		}, null, 8, Ho)])) : (X(), z(T, {
			key: 1,
			name: e.name
		}, null, 8, ["name"]));
	}
}), Wo = { class: "flex w-11 shrink-0 flex-nowrap flex-col items-center gap-0.5 overflow-hidden border-r border-edge bg-panel py-1.5" }, Go = [
	"data-tutorial",
	"title",
	"aria-label",
	"aria-pressed",
	"onClick"
], Ko = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "tool-bar",
	setup(e) {
		let t = k(), n = t.store(), { commands: r } = t, i = Dt((e) => {
			let t = ir(e), n = t.flatMap((e) => {
				let t = r.get(`tool.use.${e.id}`);
				return t ? [{
					command: t,
					tool: e
				}] : [];
			}), i = new Set(t.map((e) => e.id)), a = new Set(n.map(({ command: e }) => e.id)), o = r.list().flatMap((e) => e.tool && !a.has(e.id) && (e.tool.kind !== "element" || i.has(e.tool.id)) ? [{
				command: e,
				tool: e.tool
			}] : []);
			return [...n, ...o];
		});
		return (e, t) => (X(), N("aside", Wo, [(X(!0), N(G, null, M(H(i), ({ command: e, tool: t }) => (X(), N("button", {
			key: e.id,
			"data-tutorial": `tool-${t.id}`,
			type: "button",
			class: J(["tool-bar__tool flex items-center justify-center rounded-xs bg-transparent text-ink cursor-pointer [flex:0_0_auto] w-8 h-8 p-0 [border:1px_solid_transparent] focus-visible:[outline:1px_solid_var(--color-ink-dim)] focus-visible:[outline-offset:1px] hover:bg-edge hover:text-ink", { "tool-bar__tool--active": H(n).view.activeTool === t.id }]),
			title: t.label,
			"aria-label": t.label,
			"aria-pressed": H(n).view.activeTool === t.id,
			onClick: (t) => H(r).dispatch(e.id)
		}, [R(Uo, {
			name: t.icon,
			class: "tool-bar__icon"
		}, null, 8, ["name"])], 10, Go))), 128))]));
	}
}), [["__scopeId", "data-v-50359584"]]), qo = /* @__PURE__ */ Z({
	__name: "apply-template-dialog",
	setup(e) {
		let t = k(), n = t.store(), r = B({
			endPage: 1,
			startPage: 1,
			templateId: Yt
		}), i = B(!1), a = F(() => n.page.list.length), o = F(() => {
			let e = d();
			return n.page.list.filter((t, n) => n >= e.from && n <= e.to);
		}), s = F(() => [{
			label: I("designer.templateBanner.noTemplateLabel"),
			value: ln
		}, ...n.template.list.map((e) => ({
			label: e.name,
			value: e.id
		}))]), c = F(() => o.value.filter((e) => n.template.effectiveTemplate(e) && e.templateId !== r.value.templateId).length), l = F(() => [
			{
				field: "startPage",
				label: I("designer.applyTemplateDialog.startPageLabel"),
				props: {
					max: a.value,
					min: 1,
					step: 1,
					theme: "normal"
				},
				type: "inputNumber"
			},
			{
				field: "endPage",
				label: I("designer.applyTemplateDialog.endPageLabel"),
				props: {
					max: a.value,
					min: 1,
					step: 1,
					theme: "normal"
				},
				type: "inputNumber"
			},
			{
				field: "templateId",
				label: I("designer.applyTemplateDialog.templateLabel"),
				props: { options: s.value },
				type: "select"
			}
		]), u = F(() => {
			let e = c.value > 0;
			return [{
				id: "cancel",
				slots: { icon: () => [U(T, {
					class: "h-3.5 w-3.5",
					name: "close"
				})] },
				text: I("designer.applyTemplateDialog.cancelButton"),
				theme: "default",
				variant: "outline"
			}, {
				id: "apply",
				slots: { icon: () => [U(T, {
					class: "h-3.5 w-3.5",
					name: "check"
				})] },
				text: e ? I("designer.applyTemplateDialog.confirmOverwriteButton", { count: c.value }) : I("designer.applyTemplateDialog.applyButton"),
				theme: e ? "danger" : "primary",
				variant: "base"
			}];
		});
		function d() {
			let e = Math.max(1, a.value), t = f(Number(r.value.startPage) || 1, e), n = f(Number(r.value.endPage) || 1, e);
			return {
				from: Math.min(t, n) - 1,
				to: Math.max(t, n) - 1
			};
		}
		function f(e, t) {
			return Math.min(t, Math.max(1, Math.trunc(e)));
		}
		function p(e) {
			e.id === "cancel" ? n.ui.closeDialog() : e.id === "apply" && m();
		}
		function m() {
			let e = o.value.length;
			if (e === 0) {
				n.ui.toast(I("designer.applyTemplateDialog.emptySelectionHint"));
				return;
			}
			if (c.value > 0 && !i.value) {
				i.value = !0;
				return;
			}
			let a = o.value.map((e) => e.id);
			t.commands.invoke("template.apply", a, String(r.value.templateId)), n.ui.toast(I("designer.applyTemplateDialog.appliedMessage", { count: e }), "success"), n.ui.closeDialog();
		}
		return Ve("values", (e) => {
			e && n.ui.activeDialog.name === "apply-template" && (r.value = {
				...r.value,
				...e
			});
		}), V(() => n.ui.activeDialog.name, (e) => {
			if (e !== "apply-template") return;
			let t = n.ui.activeDialog.pageId, o = t ? n.page.getIndex(t) : n.page.activeIndex, s = o >= 0 ? o + 1 : 1, c = n.ui.activeDialog.applyTemplateTemplateId;
			r.value = {
				endPage: c ? a.value : s,
				startPage: s,
				templateId: c ?? "template-blank"
			}, i.value = !1;
		}, { immediate: !0 }), V(r, () => {
			i.value = !1;
		}, { deep: !0 }), (e, t) => (X(), z(H(He), {
			key: H(n).ui.restoreRevision,
			visible: H(n).ui.activeDialog.name === "apply-template",
			title: H(I)("designer.applyTemplateDialog.dialogTitle"),
			width: 320,
			onClose: t[1] ||= (e) => H(n).ui.closeDialog()
		}, {
			footer: q(() => [R(H(de), {
				actions: u.value,
				onClick: p
			}, null, 8, ["actions"])]),
			default: q(() => [R(ke, {
				modelValue: r.value,
				"onUpdate:modelValue": t[0] ||= (e) => r.value = e,
				schema: l.value
			}, null, 8, ["modelValue", "schema"]), c.value > 0 ? (X(), N("p", {
				key: 0,
				class: J(["px-3 pt-1 text-compact leading-5", i.value ? "font-medium text-danger" : "text-danger/90"])
			}, W(i.value ? H(I)("designer.applyTemplateDialog.overwriteArmedHint") : H(I)("designer.applyTemplateDialog.overwriteWarning", { count: c.value })), 3)) : K("", !0)]),
			_: 1
		}, 8, ["visible", "title"]));
	}
}), Jo = /* @__PURE__ */ Z({
	__name: "canvas-color-dialog",
	setup(e) {
		let t = k(), n = t.store(), r = B({ color: Er }), i = F(() => [{
			field: "color",
			help: I("designer.canvasColorDialog.backgroundHint"),
			label: I("designer.canvasColorDialog.colorLabel"),
			props: { resetValue: Er },
			type: "colorField"
		}]);
		function a() {
			let e = String(r.value.color ?? "").trim();
			e === "" || t.commands.invoke("canvas.setBackground", "custom", e), n.ui.closeDialog();
		}
		return V(() => n.ui.activeDialog.name, (e) => {
			if (e !== "canvas-color") return;
			if (n.view.canvasBackgroundPreset === "custom") {
				r.value.color = n.view.customCanvasColor;
				return;
			}
			let t = n.view.canvasBackground;
			r.value.color = t.startsWith("var(") ? Er : t;
		}, { immediate: !0 }), (e, t) => (X(), z(H(He), {
			visible: H(n).ui.activeDialog.name === "canvas-color",
			title: H(I)("designer.canvasColorDialog.dialogTitle"),
			width: 300,
			"confirm-on-enter": !0,
			onClose: t[1] ||= (e) => H(n).ui.closeDialog(),
			onConfirm: a
		}, {
			default: q(() => [R(ke, {
				modelValue: r.value,
				"onUpdate:modelValue": t[0] ||= (e) => r.value = e,
				schema: i.value
			}, null, 8, ["modelValue", "schema"])]),
			_: 1
		}, 8, ["visible", "title"]));
	}
}), Yo = { class: "schema-tree-editor flex min-w-0 flex-col gap-2" }, Xo = { class: "schema-tree-editor__scroll overflow-x-auto" }, Zo = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "schema-tree-editor",
	props: { fields: {} },
	emits: ["change", "update:fields"],
	setup(e, { emit: t }) {
		let n = e, r = t, { onVisibleChange: i, popupProps: a } = E({}, "popup"), o = F(() => Vn.map((e) => ({
			label: I(`designer.schemaTreeEditor.${e}Type`),
			value: e
		}))), s = F(() => {
			let e = /* @__PURE__ */ new Map();
			function t(n, r = "") {
				n.forEach((n, i) => {
					let a = r ? `${r}.${i}` : String(i);
					e.set(a, n), t(n.children ?? [], a);
				});
			}
			return t(n.fields), e;
		}), c = F((e) => {
			let t = l(n.fields);
			return e && re(e, t) ? e : t;
		});
		function l(e, t = "") {
			return e.map((e, n) => {
				let r = t ? `${t}.${n}` : String(n);
				return {
					children: e.children?.length ? l(e.children, r) : void 0,
					value: r
				};
			});
		}
		function u(e) {
			r("update:fields", e), r("change");
		}
		function d(e, t) {
			let r = cn(n.fields), i = e.split(".").map(Number), a = r;
			for (let [e, n] of i.entries()) {
				let r = a[n];
				if (!r) return;
				e === i.length - 1 ? t(r, a, n) : a = r.children ?? [];
			}
			u(r);
		}
		function f(e, t, n) {
			d(e, (e) => {
				e[t] = n;
			});
		}
		function p(e, t) {
			d(e, (e) => {
				e.type = t, kn(t) ? e.children ??= [{
					name: "name",
					type: "string"
				}] : delete e.children;
			});
		}
		function m(e) {
			let t = e.length + 1;
			for (; e.some((e) => e.name === `field${t}`);) t += 1;
			e.push({
				name: `field${t}`,
				type: "string"
			});
		}
		function h(e) {
			d(e, (e) => {
				e.children ??= [], m(e.children);
			});
		}
		function g(e) {
			d(e, (e, t, n) => {
				t.splice(n, 1);
			});
		}
		function _() {
			let e = cn(n.fields);
			m(e), u(e);
		}
		return (e, t) => {
			let n = rt, r = ft, l = le, u = Fa;
			return X(), N("div", Yo, [P("div", Xo, [R(u, {
				data: c.value,
				"expand-on-click-node": !1,
				transition: !1,
				"expand-all": "",
				line: ""
			}, {
				label: q(({ node: e }) => [P("div", {
					class: "schema-tree-editor__node grid items-center gap-2 py-2 [grid-template-columns:minmax(100px,_1fr)_minmax(90px,_1fr)_90px]",
					onClick: t[0] ||= Q(() => {}, ["stop"])
				}, [
					R(n, {
						"model-value": s.value.get(String(e.value))?.name,
						"aria-label": H(I)("designer.schemaTreeEditor.fieldNamePlaceholder"),
						placeholder: H(I)("designer.schemaTreeEditor.fieldNamePlaceholder"),
						spellcheck: !1,
						onChange: (t) => f(String(e.value), "name", t)
					}, null, 8, [
						"model-value",
						"aria-label",
						"placeholder",
						"onChange"
					]),
					R(n, {
						"model-value": s.value.get(String(e.value))?.label,
						"aria-label": H(I)("designer.schemaTreeEditor.displayNamePlaceholder"),
						placeholder: H(I)("designer.schemaTreeEditor.displayNamePlaceholder"),
						onChange: (t) => f(String(e.value), "label", t)
					}, null, 8, [
						"model-value",
						"aria-label",
						"placeholder",
						"onChange"
					]),
					R(r, {
						"model-value": s.value.get(String(e.value))?.type,
						"aria-label": H(I)("designer.schemaTreeEditor.fieldTypeTitle"),
						"popup-props": H(a),
						options: o.value,
						onPopupVisibleChange: H(i),
						onChange: (t) => p(String(e.value), t)
					}, null, 8, [
						"model-value",
						"aria-label",
						"popup-props",
						"options",
						"onPopupVisibleChange",
						"onChange"
					])
				])]),
				operations: q(({ node: e }) => [P("div", {
					class: "schema-tree-editor__actions flex items-center justify-end w-16 ml-2",
					onClick: t[1] ||= Q(() => {}, ["stop"])
				}, [s.value.get(String(e.value))?.type === "object" || s.value.get(String(e.value))?.type === "array" ? (X(), z(l, {
					key: 0,
					variant: "text",
					shape: "square",
					title: H(I)(s.value.get(String(e.value))?.type === "array" ? "designer.schemaTreeEditor.addItemFieldTitle" : "designer.schemaTreeEditor.addChildFieldTitle"),
					"aria-label": H(I)(s.value.get(String(e.value))?.type === "array" ? "designer.schemaTreeEditor.addItemFieldTitle" : "designer.schemaTreeEditor.addChildFieldTitle"),
					onClick: (t) => h(String(e.value))
				}, {
					default: q(() => [R(T, {
						name: "plus",
						class: "h-3.5 w-3.5"
					})]),
					_: 1
				}, 8, [
					"title",
					"aria-label",
					"onClick"
				])) : K("", !0), R(l, {
					variant: "text",
					theme: "danger",
					shape: "square",
					title: H(I)("designer.schemaTreeEditor.deleteFieldTitle"),
					"aria-label": H(I)("designer.schemaTreeEditor.deleteFieldTitle"),
					onClick: (t) => g(String(e.value))
				}, {
					default: q(() => [R(T, {
						name: "trash",
						class: "h-3.5 w-3.5"
					})]),
					_: 1
				}, 8, [
					"title",
					"aria-label",
					"onClick"
				])])]),
				_: 1
			}, 8, ["data"])]), R(l, {
				variant: "outline",
				block: "",
				onClick: _
			}, {
				icon: q(() => [R(T, {
					name: "plus",
					class: "h-3.5 w-3.5"
				})]),
				default: q(() => [L(" " + W(H(I)("designer.schemaTreeEditor.addFieldButton")), 1)]),
				_: 1
			})]);
		};
	}
}), [["__scopeId", "data-v-98a8d805"]]), Qo = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "dialog-tabs",
	setup(e) {
		return (e, t) => {
			let n = Di;
			return X(), z(n, { class: "dialog-tabs" }, {
				default: q(() => [Xn(e.$slots, "default", {}, void 0, !0)]),
				_: 3
			});
		};
	}
}), [["__scopeId", "data-v-7e6fe290"]]), $o = {
	class: "flex flex-col items-center justify-center gap-2 px-3 py-8 text-center text-xs text-ink-dim",
	role: "status"
}, es = /* @__PURE__ */ Z({
	__name: "empty-state",
	props: {
		icon: {},
		message: {}
	},
	setup(e) {
		return (t, n) => (X(), N("div", $o, [R(T, {
			name: e.icon,
			class: "h-8 w-8 opacity-50"
		}, null, 8, ["name"]), P("span", null, W(e.message), 1)]));
	}
});
function ts(e) {
	let t = B(""), n = B(""), r = B(""), i = B(""), a = F(() => {
		let n = e.source(), r;
		if (t.value.trim()) try {
			r = JSON.parse(t.value);
		} catch {
			return I("designer.dataSourceDialog.previewInvalidHint");
		}
		else r = n ? Rt(n) : {};
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
		t && (s(Rt(t)), i.value = "designer.dataSourceDialog.sampleGeneratedHint");
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
var ns = { class: "text-xs text-ink" }, rs = { class: "data-source-manager flex min-h-0 flex-1" }, is = { class: "flex w-60 shrink-0 flex-col border-r border-edge bg-panel-2" }, as = { class: "space-y-3 border-b border-edge p-3" }, os = { class: "flex items-center justify-between gap-2" }, ss = { class: "text-xs font-medium text-ink" }, cs = { class: "min-h-0 flex-1 overflow-y-auto p-2" }, ls = {
	key: 0,
	class: "data-source-manager__draft mb-1 flex w-full flex-col items-start gap-0.5 rounded-md border border-dashed border-accent/50 bg-accent/10 px-2 py-2 text-left text-accent"
}, us = { class: "flex w-full min-w-0 items-center gap-1.5 text-xs" }, ds = { class: "min-w-0 flex-1 truncate" }, fs = { class: "shrink-0 rounded bg-accent/10 px-1 text-caption" }, ps = { class: "flex w-full min-w-0 items-center gap-2 pl-5 text-caption text-ink-dim" }, ms = { class: "min-w-0 flex-1 truncate font-mono" }, hs = { class: "shrink-0" }, gs = ["aria-pressed", "onClick"], _s = { class: "flex w-full items-center gap-1.5 text-xs" }, vs = { class: "truncate" }, ys = ["title"], bs = { class: "flex w-full min-w-0 items-center gap-2 pl-5 text-caption text-ink-dim" }, xs = ["title"], Ss = { class: "shrink-0" }, Cs = {
	key: 0,
	class: "shrink-0 text-accent/80"
}, ws = {
	key: 0,
	class: "flex min-w-0 flex-1 flex-col"
}, Ts = { class: "flex items-center gap-2 px-3 pt-3 pb-2" }, Es = { class: "min-w-0 flex-1" }, Ds = { class: "mb-1 text-caption text-ink-dim" }, Os = { class: "truncate text-base font-semibold text-ink" }, ks = {
	key: 0,
	class: "px-3 pb-2"
}, As = { role: "status" }, js = { class: "flex h-full flex-col gap-4 overflow-y-auto px-3 py-3" }, Ms = { class: "flex items-start gap-2" }, Ns = { class: "rounded-md border border-accent/30 bg-accent/5 p-3" }, Ps = { class: "flex items-start gap-2" }, Fs = { class: "min-w-0 flex-1" }, Is = { class: "text-xs font-medium text-ink" }, Ls = { class: "mt-1 text-xs leading-relaxed text-ink-dim" }, Rs = { class: "h-full overflow-y-auto" }, zs = { class: "h-full overflow-y-auto" }, Bs = { class: "mb-2 flex flex-wrap items-center gap-2" }, Vs = {
	key: 0,
	class: "mt-2 text-xs text-accent",
	"aria-live": "polite"
}, Hs = { class: "h-full overflow-y-auto text-xs" }, Us = { class: "px-3 py-2 leading-relaxed text-ink-dim" }, Ws = { class: "overflow-auto rounded-md border border-edge bg-panel-2 p-3 text-compact leading-relaxed text-ink" }, Gs = {
	key: 1,
	class: "flex min-w-0 flex-1 flex-col items-center justify-center gap-4 px-12 text-center text-xs text-ink-dim"
}, Ks = { class: "rounded-2xl bg-accent/10 p-5 text-accent" }, qs = { class: "text-lg font-semibold text-ink" }, Js = { class: "max-w-85 leading-relaxed" }, Ys = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "data-source-dialog",
	setup(e) {
		let t = {
			maxRows: 12,
			minRows: 6
		}, n = k(), r = n.store(), i = F(() => r.dataSource.list), a = B("basic"), s = B(null), c = B(null), { clearSampleFeedback: l, generateSample: u, parseSample: d, previewJson: f, resetSample: p, sampleErrorDetail: m, sampleErrorKey: h, sampleFeedback: g, sampleJson: _, validateSample: v } = ts({ source: () => c.value }), y = B(!0), b = B(!1), x = B(""), S = B(null), C = B(!1), w = B(""), E = B(null), D = B(null), O = F(() => {
			let e = w.value.trim().toLocaleLowerCase();
			return i.value.filter((t) => `${t.label} ${t.key} ${t.description ?? ""}`.toLocaleLowerCase().includes(e));
		}), ee = F(() => r.dataSource.get(s.value ?? "")), te = F(() => JSON.stringify([c.value, _.value])), ne = F(() => c.value !== null && te.value !== x.value), re = F(() => c.value !== null && kn(c.value.type)), ie = F({
			get() {
				return c.value?.schema ?? [];
			},
			set(e) {
				c.value && re.value && (c.value.schema = e);
			}
		}), ae = F(() => {
			if (c.value) return {
				...c.value,
				key: c.value.key.trim() || "data"
			};
		}), oe = F(() => s.value === null ? {
			messageKey: "designer.dataSourceDialog.newDraftHint",
			theme: "info"
		} : ne.value ? {
			messageKey: "designer.dataSourceDialog.unsavedHint",
			theme: "warning"
		} : {
			messageKey: "designer.dataSourceDialog.savedHint",
			theme: "success"
		}), ce = F(() => {
			let e = c.value?.key?.trim() ?? "";
			return e ? bn(e) ? e !== s.value && r.dataSource.has(e) ? "designer.dataSourceDialog.duplicateKeyError" : "" : "designer.dataSourceDialog.invalidKeyError" : "designer.dataSourceDialog.keyRequiredError";
		}), ue = F({
			get() {
				return {
					description: c.value?.description,
					key: c.value?.key,
					label: c.value?.label,
					type: c.value?.type
				};
			},
			set(e) {
				if (!c.value) return;
				c.value.key = String(e.key ?? ""), c.value.label = String(e.label ?? ""), c.value.description = String(e.description ?? "");
				let t = Vn.find((t) => t === e.type);
				t && (c.value.type = t);
			}
		}), fe = F(() => Vn.map((e) => ({
			label: I(`designer.schemaTreeEditor.${e}Type`),
			value: e
		}))), pe = F(() => [
			{
				field: "type",
				label: I("designer.dataSourceDialog.typeLabel"),
				props: { options: fe.value },
				type: "select"
			},
			{
				field: "key",
				itemProps: { tips: b.value && ce.value ? I(ce.value, { sourceKey: c.value?.key.trim() }) : "" },
				label: I("designer.dataSourceDialog.keyLabel"),
				props: {
					onBlur: () => {
						b.value = !0;
					},
					placeholder: I("designer.dataSourceDialog.keyPlaceholder"),
					spellcheck: !1
				},
				status: b.value && ce.value ? "error" : void 0,
				type: "input"
			},
			{
				field: "label",
				label: I("designer.dataSourceDialog.nameLabel"),
				props: { placeholder: I("designer.dataSourceDialog.namePlaceholder") },
				type: "input"
			},
			{
				field: "description",
				label: I("designer.dataSourceDialog.descriptionLabel"),
				props: { placeholder: I("designer.dataSourceDialog.descriptionPlaceholder") },
				type: "input"
			}
		]), me = F(() => {
			let e = [{
				id: "close",
				slots: { icon: () => [U(T, {
					class: "h-3.5 w-3.5",
					name: "close"
				})] },
				text: I("designer.dataSourceDialog.closeButton"),
				theme: "default",
				variant: "outline"
			}];
			return c.value && e.push({
				disabled: !c.value || s.value !== null && te.value === x.value,
				id: "save",
				slots: { icon: () => [U(T, {
					class: "h-3.5 w-3.5",
					name: s.value === null ? "plus" : "check"
				})] },
				text: I(s.value === null ? "designer.dataSourceDialog.createButton" : "designer.dataSourceDialog.saveButton"),
				theme: "primary"
			}), e;
		});
		function he(e) {
			ne.value ? E.value = e : e();
		}
		function ge(e) {
			let t = E.value;
			E.value = null, (!e || Ne()) && t?.();
		}
		function _e() {
			he(() => r.ui.closeDialog());
		}
		function ve() {
			return !ne.value || (_e(), !1);
		}
		function ye(e) {
			s.value !== e && he(() => Ce(e));
		}
		function be() {
			he(we);
		}
		function xe() {
			he(() => {
				let e = ee.value;
				if (!e) return;
				let t = 1, n = `${e.key}_copy`;
				for (; r.dataSource.has(n);) n = `${e.key}_copy${t++}`;
				we(), c.value = JSON.parse(JSON.stringify(e)), c.value.key = n, c.value.label = I("designer.dataSourceDialog.copyName", { sourceName: e.label || e.key }), p(e.sampleData);
			});
		}
		function Se() {
			let e = s.value;
			e === null ? we() : Ce(e), C.value = !1;
		}
		function Ce(e) {
			let t = r.dataSource.get(e);
			t && (y.value = !0, a.value = "basic", s.value = e, c.value = JSON.parse(JSON.stringify(t)), p(t.sampleData), b.value = !1, x.value = te.value);
		}
		function we() {
			y.value = !0, a.value = "basic", s.value = null, c.value = {
				description: "",
				key: "",
				label: "",
				schema: [{
					name: "field1",
					type: "string"
				}],
				type: "object"
			}, p(), b.value = !1, x.value = te.value;
		}
		function Te(e, t) {
			t ? D.value = e : e();
		}
		function Ee() {
			let e = D.value;
			D.value = null, e?.();
		}
		function De() {
			let e = d();
			if (!c.value || !e) return;
			let t = qn(e.value);
			Te(() => Ae(t), !!c.value.schema?.length || t.type !== c.value.type);
		}
		function Ae(e) {
			c.value && (Object.assign(c.value, e), a.value = re.value ? "schema" : "basic", r.ui.toast(I("designer.dataSourceDialog.schemaGeneratedMessage"), "success"));
		}
		function je() {
			let e = d();
			e && Ae(qn(e.value));
		}
		function Me() {
			Te(u, !!_.value.trim());
		}
		function Ne() {
			if (!c.value) return !1;
			if (b.value = !0, ce.value) return a.value = "basic", !1;
			let e;
			if (_.value.trim()) {
				let t = d();
				if (!t) return h.value = "designer.dataSourceDialog.invalidSampleMessage", a.value = "sample", !1;
				e = t.value;
			}
			let t = {
				description: c.value.description?.trim() || void 0,
				key: c.value.key.trim(),
				label: c.value.label.trim() || c.value.key.trim(),
				sampleData: e,
				type: c.value.type
			};
			re.value && c.value.schema && (t.schema = cn(c.value.schema));
			let i = s.value === null;
			return n.commands.invoke("dataSource.upsert", t, s.value ?? t.key), s.value = t.key, c.value = cn(t), x.value = te.value, r.ui.toast(I(i ? "designer.dataSourceDialog.sourceCreatedMessage" : "designer.dataSourceDialog.sourceSavedMessage", { sourceName: t.label }), "success"), !0;
		}
		function Fe() {
			S.value && (n.commands.invoke("dataSource.remove", S.value.key), S.value = null, s.value = null, c.value = null, _.value = "", i.value.length > 0 && Ce(i.value[0].key), r.ui.toast(I("designer.dataSourceDialog.sourceDeletedMessage"), "success"));
		}
		function Ie(e) {
			e.id === "close" ? _e() : e.id === "save" && Ne();
		}
		return Ve("dataSource", (e) => {
			e && r.ui.activeDialog.name === "datasource" && (we(), c.value = cn(e.draft), _.value = e.sampleJson, a.value = e.tab, e.saved && (s.value = e.draft.key, x.value = te.value), D.value = e.replacement ? je : null);
		}), V(() => oe.value.messageKey, () => {
			y.value = !0;
		}), V(() => r.ui.activeDialog.name, (e) => {
			S.value = null, C.value = !1, E.value = null, D.value = null, e === "datasource" && (s.value = null, w.value = "", c.value = null, _.value = "", h.value = "", i.value.length > 0 && Ce(i.value[0].key));
		}, { immediate: !0 }), (e, n) => {
			let u = le, d = rt, p = se, b = Oi, x = o;
			return X(), N(G, null, [
				(X(), z(H(He), {
					key: H(r).ui.restoreRevision,
					visible: H(r).ui.activeDialog.name === "datasource",
					title: H(I)("designer.dataSourceDialog.dialogTitle"),
					width: 960,
					height: 660,
					"body-padding": !1,
					"before-close": ve,
					onClose: _e
				}, {
					header: q(() => [R(T, {
						name: "database",
						class: "h-4 w-4 text-accent"
					}), P("span", ns, W(H(I)("designer.dataSourceDialog.dialogTitle")), 1)]),
					footer: q(() => [R(H(de), {
						actions: me.value,
						onClick: Ie
					}, null, 8, ["actions"])]),
					default: q(() => [P("div", rs, [P("div", is, [P("div", as, [P("div", os, [P("span", ss, W(H(I)("designer.dataSourceDialog.sourceCount", { count: i.value.length })), 1), R(u, {
						variant: c.value && s.value === null ? "base" : "outline",
						onClick: be
					}, {
						icon: q(() => [R(T, {
							name: "plus",
							class: "h-3.5 w-3.5"
						})]),
						default: q(() => [L(" " + W(H(I)("designer.dataSourceDialog.createSourceButton")), 1)]),
						_: 1
					}, 8, ["variant"])]), R(d, {
						modelValue: w.value,
						"onUpdate:modelValue": n[0] ||= (e) => w.value = e,
						clearable: "",
						"aria-label": H(I)("designer.dataSourceDialog.searchPlaceholder"),
						placeholder: H(I)("designer.dataSourceDialog.searchPlaceholder")
					}, null, 8, [
						"modelValue",
						"aria-label",
						"placeholder"
					])]), P("div", cs, [
						c.value && s.value === null ? (X(), N("div", ls, [P("span", us, [
							R(T, {
								name: "database",
								class: "h-3.5 w-3.5 shrink-0"
							}),
							P("span", ds, W(c.value.label || c.value.key || H(I)("designer.dataSourceDialog.untitledSource")), 1),
							P("span", fs, W(H(I)("designer.dataSourceDialog.draftBadge")), 1)
						]), P("span", ps, [P("span", ms, W(c.value.key || "—"), 1), P("span", hs, W(H(I)(`designer.fieldTree.${c.value.type}`)), 1)])])) : K("", !0),
						(X(!0), N(G, null, M(O.value, (e) => (X(), N("button", {
							key: e.key,
							type: "button",
							class: J(["data-source-manager__source mb-1 flex w-full flex-col items-start gap-0.5 rounded-md border px-2 py-2 text-left focus-visible:[outline:2px_solid_var(--color-accent)] focus-visible:[outline-offset:-2px]", s.value === e.key ? "border-accent/40 bg-accent/10 text-accent" : "border-transparent text-ink hover:bg-panel-3"]),
							"aria-pressed": s.value === e.key,
							onClick: (t) => ye(e.key)
						}, [P("span", _s, [
							R(T, {
								name: "database",
								class: "h-3.5 w-3.5 shrink-0"
							}),
							P("span", vs, W(e.label || e.key), 1),
							s.value === e.key && ne.value ? (X(), N("span", {
								key: 0,
								class: "ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-accent",
								title: H(I)("designer.dataSourceDialog.unsavedHint")
							}, null, 8, ys)) : K("", !0)
						]), P("span", bs, [
							P("span", {
								class: "min-w-0 flex-1 truncate font-mono",
								title: e.key
							}, W(e.key), 9, xs),
							P("span", Ss, W(H(I)(`designer.fieldTree.${e.type}`)), 1),
							e.type === "object" && H(It)(e) ? (X(), N("span", Cs, W(H(I)("designer.dataSourceDialog.containsArrayBadge")), 1)) : K("", !0)
						])], 10, gs))), 128)),
						i.value.length === 0 && !c.value ? (X(), z(es, {
							key: 1,
							icon: "database",
							message: H(I)("designer.dataSourceDialog.noSourcesMessage")
						}, null, 8, ["message"])) : i.value.length > 0 && O.value.length === 0 ? (X(), z(es, {
							key: 2,
							icon: "database",
							message: H(I)("designer.dataSourceDialog.noSearchResults")
						}, null, 8, ["message"])) : K("", !0)
					])]), c.value ? (X(), N("div", ws, [
						P("div", Ts, [
							P("div", Es, [P("div", Ds, W(H(I)(s.value === null ? "designer.dataSourceDialog.createSourceTitle" : "designer.dataSourceDialog.editSourceTitle")), 1), P("div", Os, W(c.value.label || c.value.key || H(I)(s.value === null ? "designer.dataSourceDialog.createSourceTitle" : "designer.dataSourceDialog.untitledSource")), 1)]),
							R(u, {
								disabled: !ne.value,
								variant: "text",
								onClick: n[1] ||= (e) => C.value = !0
							}, {
								default: q(() => [L(W(H(I)("designer.dataSourceDialog.resetButton")), 1)]),
								_: 1
							}, 8, ["disabled"]),
							ee.value ? (X(), z(u, {
								key: 0,
								variant: "outline",
								onClick: xe
							}, {
								icon: q(() => [R(T, {
									name: "copy",
									class: "h-3.5 w-3.5"
								})]),
								default: q(() => [L(" " + W(H(I)("designer.dataSourceDialog.duplicateButton")), 1)]),
								_: 1
							})) : K("", !0),
							ee.value ? (X(), z(u, {
								key: 1,
								theme: "danger",
								variant: "text",
								shape: "square",
								"aria-label": H(I)("designer.dataSourceDialog.deleteSourceLabel", { sourceName: ee.value.label || ee.value.key }),
								title: H(I)("designer.dataSourceDialog.deleteSourceLabel", { sourceName: ee.value.label || ee.value.key }),
								onClick: n[2] ||= (e) => S.value = ee.value
							}, {
								icon: q(() => [R(T, {
									name: "trash",
									class: "h-3.5 w-3.5"
								})]),
								_: 1
							}, 8, ["aria-label", "title"])) : K("", !0)
						]),
						y.value ? (X(), N("div", ks, [R(p, { theme: oe.value.theme }, {
							operation: q(() => [R(u, {
								"aria-label": H(I)("designer.dataSourceDialog.dismissStatusButton"),
								shape: "square",
								size: "small",
								variant: "text",
								onClick: n[3] ||= (e) => y.value = !1
							}, {
								icon: q(() => [R(T, { name: "close" })]),
								_: 1
							}, 8, ["aria-label"])]),
							default: q(() => [P("span", As, W(H(I)(oe.value.messageKey)), 1)]),
							_: 1
						}, 8, ["theme"])])) : K("", !0),
						R(Qo, {
							modelValue: a.value,
							"onUpdate:modelValue": n[11] ||= (e) => a.value = e,
							class: "min-h-0 flex-1"
						}, {
							default: q(() => [
								R(b, {
									value: "basic",
									label: H(I)("designer.dataSourceDialog.basicInfoTab")
								}, {
									default: q(() => [P("div", js, [
										R(et, { class: "shrink-0" }, {
											default: q(() => [L(W(H(I)("designer.dataSourceDialog.basicInfoHint")), 1)]),
											_: 1
										}),
										P("div", Ms, [R(ke, {
											modelValue: ue.value,
											"onUpdate:modelValue": n[4] ||= (e) => ue.value = e,
											class: "min-w-0 flex-1",
											schema: pe.value
										}, null, 8, ["modelValue", "schema"]), re.value ? (X(), z(u, {
											key: 0,
											class: "mt-1 shrink-0",
											variant: "outline",
											size: "small",
											onClick: n[5] ||= (e) => a.value = "schema"
										}, {
											default: q(() => [L(W(H(I)("designer.dataSourceDialog.editSchemaButton")), 1)]),
											_: 1
										})) : K("", !0)]),
										P("div", Ns, [P("div", Ps, [R(T, {
											name: "file",
											class: "mt-0.5 h-4 w-4 shrink-0 text-accent"
										}), P("div", Fs, [
											P("div", Is, W(H(I)("designer.dataSourceDialog.sampleEntryTitle")), 1),
											P("p", Ls, W(H(I)("designer.dataSourceDialog.sampleDataPurpose")), 1),
											R(u, {
												class: "mt-2",
												variant: "outline",
												size: "small",
												onClick: n[6] ||= (e) => a.value = "sample"
											}, {
												default: q(() => [L(W(H(I)("designer.dataSourceDialog.pasteSampleButton")), 1)]),
												_: 1
											})
										])])])
									])]),
									_: 1
								}, 8, ["label"]),
								re.value ? (X(), z(b, {
									key: 0,
									value: "schema",
									label: H(I)("designer.dataSourceDialog.schemaTab")
								}, {
									default: q(() => [P("div", Rs, [R(Oe, { title: H(I)("designer.dataSourceDialog.schemaLabel") }, {
										default: q(() => [R(Zo, {
											fields: ie.value,
											"onUpdate:fields": n[7] ||= (e) => ie.value = e
										}, null, 8, ["fields"])]),
										_: 1
									}, 8, ["title"])])]),
									_: 1
								}, 8, ["label"])) : K("", !0),
								R(b, {
									value: "sample",
									label: H(I)("designer.dataSourceDialog.sampleTab")
								}, {
									default: q(() => [P("div", zs, [R(Oe, { title: H(I)("designer.dataSourceDialog.sampleDataLabel") }, {
										default: q(() => [
											R(et, { class: "mb-2" }, {
												default: q(() => [L(W(H(I)("designer.dataSourceDialog.sampleDataPurpose")), 1)]),
												_: 1
											}),
											P("div", Bs, [
												R(u, {
													variant: "outline",
													onClick: n[8] ||= (e) => H(v)(!1)
												}, {
													default: q(() => [L(W(H(I)("designer.dataSourceDialog.validateButton")), 1)]),
													_: 1
												}),
												R(u, {
													variant: "outline",
													onClick: n[9] ||= (e) => H(v)(!0)
												}, {
													default: q(() => [L(W(H(I)("designer.dataSourceDialog.formatButton")), 1)]),
													_: 1
												}),
												R(u, {
													variant: "text",
													onClick: Me
												}, {
													default: q(() => [L(W(H(I)("designer.dataSourceDialog.generateSampleButton")), 1)]),
													_: 1
												}),
												R(u, {
													variant: "outline",
													onClick: De
												}, {
													icon: q(() => [R(T, {
														name: "table",
														class: "h-3.5 w-3.5"
													})]),
													default: q(() => [L(" " + W(H(I)("designer.dataSourceDialog.generateSchemaButton")), 1)]),
													_: 1
												})
											]),
											R(Pe, {
												"label-width": 0,
												tips: H(h) ? H(I)(H(h), { errorMessage: H(m) || H(I)("designer.dataSourceDialog.invalidFormatMessage") }) : ""
											}, {
												default: q(() => [R(x, {
													modelValue: H(_),
													"onUpdate:modelValue": n[10] ||= (e) => Bn(_) ? _.value = e : null,
													status: H(h) ? "error" : void 0,
													"aria-label": H(I)("designer.dataSourceDialog.sampleDataLabel"),
													autosize: t,
													placeholder: H(I)("designer.dataSourceDialog.sampleDataPlaceholder"),
													spellcheck: !1,
													onChange: H(l)
												}, null, 8, [
													"modelValue",
													"status",
													"aria-label",
													"placeholder",
													"onChange"
												])]),
												_: 1
											}, 8, ["tips"]),
											H(g) ? (X(), N("p", Vs, W(H(I)(H(g))), 1)) : K("", !0)
										]),
										_: 1
									}, 8, ["title"])])]),
									_: 1
								}, 8, ["label"]),
								R(b, {
									value: "preview",
									label: H(I)("designer.dataSourceDialog.previewTab")
								}, {
									default: q(() => [P("div", Hs, [
										P("p", Us, W(H(I)("designer.dataSourceDialog.previewHint")), 1),
										R(Oe, { title: H(I)("designer.dataSourceDialog.bindingPathsLabel") }, {
											default: q(() => [c.value.type !== "object" || ie.value.length ? (X(), z(Ct, {
												key: s.value ?? "new",
												source: ae.value,
												compact: ""
											}, null, 8, ["source"])) : (X(), z(et, { key: 1 }, {
												default: q(() => [L(W(H(I)("designer.dataSourceDialog.noFieldsHint")), 1)]),
												_: 1
											}))]),
											_: 1
										}, 8, ["title"]),
										R(Oe, { title: H(I)("designer.dataSourceDialog.inputPreviewLabel") }, {
											default: q(() => [P("pre", Ws, W(H(f)), 1)]),
											_: 1
										}, 8, ["title"])
									])]),
									_: 1
								}, 8, ["label"])
							]),
							_: 1
						}, 8, ["modelValue"])
					])) : (X(), N("div", Gs, [
						P("div", Ks, [R(T, {
							name: "database",
							class: "h-8 w-8"
						})]),
						P("div", qs, W(H(I)("designer.dataSourceDialog.welcomeTitle")), 1),
						P("p", Js, W(H(I)("designer.dataSourceDialog.welcomeHint")), 1),
						R(u, { onClick: be }, {
							icon: q(() => [R(T, {
								name: "plus",
								class: "h-3.5 w-3.5"
							})]),
							default: q(() => [L(" " + W(H(I)("designer.dataSourceDialog.createSourceTitle")), 1)]),
							_: 1
						})
					]))])]),
					_: 1
				}, 8, ["visible", "title"])),
				C.value ? (X(), z(H(He), {
					key: 0,
					visible: !0,
					title: H(I)("designer.dataSourceDialog.resetButton"),
					width: 400,
					onConfirm: Se,
					onCancel: n[12] ||= (e) => C.value = !1,
					onClose: n[13] ||= (e) => C.value = !1
				}, {
					default: q(() => [L(W(H(I)("designer.dataSourceDialog.resetMessage")), 1)]),
					_: 1
				}, 8, ["title"])) : K("", !0),
				E.value ? (X(), z(H(He), {
					key: 1,
					visible: !0,
					title: H(I)("designer.dataSourceDialog.unsavedTitle"),
					width: 440,
					onClose: n[17] ||= (e) => E.value = null
				}, {
					footer: q(() => [
						R(u, {
							variant: "text",
							onClick: n[14] ||= (e) => E.value = null
						}, {
							default: q(() => [L(W(H(I)("designer.dataSourceDialog.keepEditingButton")), 1)]),
							_: 1
						}),
						R(u, {
							variant: "outline",
							onClick: n[15] ||= (e) => ge(!1)
						}, {
							default: q(() => [L(W(H(I)("designer.dataSourceDialog.discardButton")), 1)]),
							_: 1
						}),
						R(u, { onClick: n[16] ||= (e) => ge(!0) }, {
							default: q(() => [L(W(H(I)("designer.dataSourceDialog.saveContinueButton")), 1)]),
							_: 1
						})
					]),
					default: q(() => [L(W(H(I)("designer.dataSourceDialog.unsavedMessage")) + " ", 1)]),
					_: 1
				}, 8, ["title"])) : K("", !0),
				D.value ? (X(), z(H(He), {
					key: 2,
					visible: !0,
					title: H(I)("designer.dataSourceDialog.replaceTitle"),
					width: 400,
					onConfirm: Ee,
					onCancel: n[18] ||= (e) => D.value = null,
					onClose: n[19] ||= (e) => D.value = null
				}, {
					default: q(() => [L(W(H(I)("designer.dataSourceDialog.replaceMessage")), 1)]),
					_: 1
				}, 8, ["title"])) : K("", !0),
				S.value ? (X(), z(H(He), {
					key: 3,
					visible: !0,
					title: H(I)("designer.dataSourceDialog.deleteConfirmTitle"),
					width: 380,
					"confirm-btn": {
						content: H(I)("designer.dataSourceDialog.deleteButton"),
						theme: "danger"
					},
					onConfirm: Fe,
					onClose: n[20] ||= (e) => S.value = null,
					onCancel: n[21] ||= (e) => S.value = null
				}, {
					default: q(() => [L(W(H(I)("designer.dataSourceDialog.deleteConfirmMessage", { sourceName: S.value.label || S.value.key })), 1)]),
					_: 1
				}, 8, ["title", "confirm-btn"])) : K("", !0)
			], 64);
		};
	}
}), [["__scopeId", "data-v-13fc3347"]]), Xs = /* @__PURE__ */ Z({
	__name: "dialog-session-host",
	props: { name: {} },
	setup(e) {
		let t = e, n = k().store();
		return (e, r) => (X(!0), N(G, null, M(H(n).ui.dialogSessions(t.name), (t) => Xn(e.$slots, "default", { session: t }, void 0, void 0, t.id)), 128));
	}
});
function Zs(e, t) {
	let n = k().store().ui, r = F(() => t()?.dialog ?? n.activeDialog), i = F(() => t()?.id ?? n.dialogSessionId), a = F(() => {
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
var Qs = { class: "settings-workspace grid flex-1 min-h-0 [grid-template-columns:140px_150px_minmax(320px,_1fr)_minmax(200px,_0.57fr)]" }, $s = ["aria-label"], ec = ["data-settings-group"], tc = [
	"data-settings-group",
	"aria-current",
	"onClick"
], nc = ["aria-label"], rc = ["aria-current"], ic = [
	"data-settings-section",
	"aria-current",
	"onClick"
], ac = { class: "settings-workspace__editor flex flex-col min-w-0 min-h-0" }, oc = { class: "settings-workspace__toolbar flex items-center justify-between gap-2 border-b border-edge min-h-14 [padding:10px_16px]" }, sc = { class: "settings-workspace__scroll flex-1 min-h-0 overflow-auto [padding:6px_12px_24px]" }, cc = {
	key: 0,
	class: "settings-workspace__empty p-6 text-ink-dim"
}, lc = {
	class: "settings-workspace__feedback flex items-center gap-2 border-t border-edge text-ink-dim text-compact [padding:10px_16px]",
	role: "status"
}, uc = { class: "settings-workspace__preview border-l border-edge flex flex-col min-w-0 min-h-0" }, dc = { class: "settings-workspace__toolbar flex items-center justify-between gap-2 border-b border-edge min-h-14 [padding:10px_16px]" }, fc = { class: "settings-workspace__hint text-ink-dim text-compact [padding:12px_16px] [line-height:1.7]" }, pc = { class: "settings-workspace__canvas flex-1 min-h-0 overflow-auto p-6 bg-(--td-bg-color-secondarycontainer)" }, mc = ["innerHTML"], hc = {
	key: 0,
	class: "settings-workspace__warnings max-h-35 overflow-auto text-compact [padding:12px_20px] [color:var(--td-warning-color)]",
	role: "status"
}, gc = "__basic__", _c = "__overview__", vc = "flex items-center justify-between rounded-md p-3 text-left text-ink-dim", yc = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "element-settings-workspace",
	props: /*@__PURE__*/ nr({
		basicTab: {},
		node: {},
		sections: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = e, n = $t(e, "modelValue"), r = k(), i = r.store(), a = B(""), o = B(""), s = B(100), c = [
			50,
			80,
			100,
			125
		].map((e) => ({
			label: `${e}%`,
			value: e
		})), l = F(() => [...new Set(t.sections.map((e) => e.tab ?? e.title))].map((e) => ({
			name: e,
			sections: t.sections.filter((t) => (t.tab ?? t.title) === e)
		}))), u = F(() => t.basicTab ?? I("designer.elementDialog.basicTab")), d = F(() => {
			let e = n.value === gc ? t.basicTab : n.value;
			return l.value.find((t) => t.name === e);
		}), f = F(() => {
			let e = d.value?.sections ?? [];
			return n.value === gc && (!o.value || o.value === _c) ? _c : e.some((e) => e.title === o.value) ? o.value : e[0]?.title;
		}), p = F(() => {
			let e = a.value.trim().toLocaleLowerCase();
			return e ? t.sections.filter((t) => `${t.tab ?? ""} ${t.title} ${t.fields.map((e) => e.label).join(" ")}`.toLocaleLowerCase().includes(e)) : d.value?.sections.filter((e) => e.title === f.value) ?? [];
		}), m = F(() => {
			let e = new sn(), n = un(t.node, {
				...Nr(Bt(i.document.data)),
				elements: r.elements
			}, e), a = an(i.document.data).find((e) => e.elements.some((e) => e.id === n.id)), o = r.elements.get(n.type), s = a && n.visible ? o?.toHtml({
				document: i.document.data,
				node: n,
				page: a,
				props: n.props
			}) ?? "" : "";
			return {
				height: n.height,
				html: s,
				warnings: e.list(),
				width: n.width
			};
		});
		function h(e) {
			let n = t.node.id, a = i.template.editingTemplate?.id, o = i.scope.active?.id;
			r.commands.invoke(`edit.${e}`), a && i.template.enterEdit(a), o && i.scope.activate(o), i.element.find(n) && i.selection.set([n]);
		}
		function g(e) {
			a.value = "", n.value = e, o.value = "";
		}
		function v(e) {
			a.value = "", o.value = e;
		}
		return Ve("section", (e) => {
			o.value = e ?? "";
		}), (r, o) => {
			let y = rt, b = le, x = ft;
			return X(), N("div", Qs, [
				P("aside", {
					class: "settings-workspace__navigation flex flex-col gap-2 border-r border-edge overflow-y-auto",
					"aria-label": H(I)("designer.elementDialog.defaultTitle")
				}, [P("button", {
					class: J(["settings-workspace__navigation-button", [vc, { "settings-workspace__navigation-button--active": n.value === gc && !a.value }]]),
					"data-settings-group": u.value,
					onClick: o[0] ||= (e) => g(gc)
				}, W(u.value), 11, ec), (X(!0), N(G, null, M(l.value.filter((e) => !t.basicTab || e.name !== u.value), (e) => (X(), N("button", {
					key: e.name,
					"data-settings-group": e.name,
					class: J(["settings-workspace__navigation-button", [vc, { "settings-workspace__navigation-button--active": n.value === e.name && !a.value }]]),
					"aria-current": n.value === e.name ? "page" : void 0,
					onClick: (t) => g(e.name)
				}, W(e.name), 11, tc))), 128))], 8, $s),
				P("nav", {
					class: "settings-workspace__secondary bg-(--td-bg-color-secondarycontainer) flex flex-col gap-2 border-r border-edge overflow-y-auto",
					"aria-label": H(I)("designer.elementWorkspace.categories")
				}, [n.value === gc ? (X(), N("button", {
					key: 0,
					class: J(["settings-workspace__navigation-button", [vc, { "settings-workspace__navigation-button--active": f.value === _c && !a.value }]]),
					"aria-current": f.value === _c && !a.value ? "page" : void 0,
					onClick: o[1] ||= (e) => v(_c)
				}, W(H(I)("designer.elementDialog.basicTab")), 11, rc)) : K("", !0), (X(!0), N(G, null, M(d.value?.sections ?? [], (e) => (X(), N("button", {
					key: e.title,
					"data-settings-section": e.title,
					class: J(["settings-workspace__navigation-button", [vc, { "settings-workspace__navigation-button--active": f.value === e.title && !a.value }]]),
					"aria-current": f.value === e.title && !a.value ? "page" : void 0,
					onClick: (t) => v(e.title)
				}, W(e.title), 11, ic))), 128))], 8, nc),
				P("main", ac, [
					P("div", oc, [R(y, {
						modelValue: a.value,
						"onUpdate:modelValue": o[2] ||= (e) => a.value = e,
						clearable: "",
						placeholder: H(I)("designer.elementWorkspace.search"),
						"aria-label": H(I)("designer.elementWorkspace.search")
					}, null, 8, [
						"modelValue",
						"placeholder",
						"aria-label"
					])]),
					P("div", sc, [n.value === gc && f.value === _c && !a.value ? Xn(r.$slots, "default", {}, void 0, !0, 0) : (X(), N(G, { key: 1 }, [(X(!0), N(G, null, M(p.value, (t) => (X(), z(Oe, {
						key: t.title,
						class: "settings-workspace__section",
						title: t.title,
						hint: t.hint?.(e.node)
					}, {
						default: q(() => [(X(!0), N(G, null, M(t.fields, (t) => (X(), z(_, {
							key: t.key,
							field: t,
							node: e.node,
							onCommit: o[3] ||= (e) => H(i).history.commit()
						}, null, 8, ["field", "node"]))), 128))]),
						_: 2
					}, 1032, ["title", "hint"]))), 128)), p.value.length ? K("", !0) : (X(), N("p", cc, W(H(I)("designer.elementWorkspace.empty")), 1))], 64))]),
					P("div", lc, [
						P("span", null, W(H(I)("designer.elementWorkspace.applied")), 1),
						R(b, {
							size: "small",
							variant: "text",
							disabled: !H(i).history.canUndo,
							onClick: o[4] ||= (e) => h("undo")
						}, {
							default: q(() => [L(W(H(I)("designer.elementWorkspace.undo")), 1)]),
							_: 1
						}, 8, ["disabled"]),
						R(b, {
							size: "small",
							variant: "text",
							disabled: !H(i).history.canRedo,
							onClick: o[5] ||= (e) => h("redo")
						}, {
							default: q(() => [L(W(H(I)("designer.elementWorkspace.redo")), 1)]),
							_: 1
						}, 8, ["disabled"])
					])
				]),
				P("aside", uc, [
					P("div", dc, [P("strong", null, W(H(I)("designer.elementWorkspace.preview")), 1), R(x, {
						modelValue: s.value,
						"onUpdate:modelValue": o[6] ||= (e) => s.value = e,
						options: H(c),
						"aria-label": H(I)("designer.elementWorkspace.preview")
					}, null, 8, [
						"modelValue",
						"options",
						"aria-label"
					])]),
					P("p", fc, W(H(I)("designer.elementWorkspace.previewHint")), 1),
					P("div", pc, [P("div", {
						class: "settings-workspace__paper bg-paper text-paper-ink [box-shadow:0_2px_12px_var(--color-shadow-soft)]",
						style: Y({
							width: `${m.value.width * H(Jt)}px`,
							minHeight: `${m.value.height * H(Jt)}px`,
							zoom: s.value / 100
						}),
						innerHTML: m.value.html
					}, null, 12, mc)]),
					m.value.warnings.length ? (X(), N("ul", hc, [(X(!0), N(G, null, M(m.value.warnings, (e) => (X(), N("li", { key: e }, W(e), 1))), 128))])) : K("", !0)
				])
			]);
		};
	}
}), [["__scopeId", "data-v-4673d0a1"]]), bc = { class: "flex w-full items-center gap-2" }, xc = ["title"], Sc = { class: "text-caption text-ink-dim/70" }, Cc = { class: "flex min-h-0 flex-1 flex-col" }, wc = { class: "h-full overflow-y-auto" }, Tc = { class: "h-full overflow-y-auto" }, Ec = { class: "h-full overflow-y-auto" }, Dc = "__basic__", Oc = /* @__PURE__ */ Z({
	__name: "element-dialog",
	props: { session: {} },
	setup(e) {
		let t = e, n = k(), r = n.store(), { cancel: i, confirm: a, isActive: o } = Zs("element", () => t.session), s = F(() => {
			if (!t.session && !o.value) return [];
			let e = r.selection.ids;
			return t.session?.elementIds?.length ? e = t.session.elementIds : t.session?.elementId && (e = [t.session.elementId]), r.element.getMany(e).map((e) => Mn(r.document.data, e, n.elements));
		}), c = F(() => s.value[0] ?? null), l = F(() => s.value.length > 1), u = F(() => !l.value && h.value?.settingsDialog?.layout === "workspace"), d = B({ name: "" }), f = B(Dc), p = F(() => [{
			field: "name",
			label: I("designer.elementDialog.nameLabel"),
			props: { placeholder: I("designer.elementDialog.namePlaceholder") },
			type: "input"
		}]), m = !1, h = kt(() => c.value?.type), g = F(() => oe(h.value).filter((e) => !l.value || e.batchEditable)), v = F((e) => {
			if (!c.value) return [];
			let t = s.value.map((e) => {
				let t = jn(h.value?.inspectorSections ?? [], r.document.data, e, n.elements);
				return l.value ? yn(t, e) : _n(t, e);
			}), i = t.map((e) => e.flatMap((e) => e.fields)), a = t[0].map((e) => ({
				...e,
				fields: e.fields.filter((e) => i.every((t) => t.some((t) => t.key === e.key && t.type === e.type)))
			})).filter((e) => e.fields.length > 0);
			return e && re(e, a) ? e : a;
		}), y = F(() => {
			let e = [];
			for (let t of v.value) {
				let n = t.tab ?? t.title, r = e.find((e) => e.name === n);
				r ? r.sections.push(t) : e.push({
					name: n,
					sections: [t]
				});
			}
			return e;
		});
		function b(e) {
			d.value = e, c.value && n.commands.invoke("element.setName", c.value.id, String(e.name ?? ""));
		}
		function x(e) {
			m && (m = !1, r.document.finishPreview(e));
		}
		function S() {
			r.document.resetPreview();
		}
		function C() {
			o.value && (x(!1), i());
		}
		function w() {
			o.value && (r.history.commit(), x(!0), a());
		}
		return zr("wide"), Ve("tab", (e) => {
			o.value && e !== void 0 && (f.value = e);
		}), V(() => t.session ? r.ui.dialogSessions("element").some((e) => e.id === t.session?.id) : o.value, (e) => {
			e && !m ? (r.document.beginPreview(), m = !0) : e || x(!1);
		}, {
			flush: "sync",
			immediate: !0
		}), V(() => c.value?.name, (e) => {
			d.value = { name: e ?? "" };
		}, { immediate: !0 }), V([
			s,
			o,
			() => r.selection.ids
		], ([e, t]) => {
			t && (!e.length || !r.selection.sameType || e.length !== r.selection.nodes.length || e.some((e) => !r.selection.has(e.id))) && i();
		}, { immediate: !0 }), ar(() => {
			x(!1);
		}), (t, n) => {
			let i = le, a = Oi;
			return X(), z(H(He), {
				key: H(r).ui.restoreRevision,
				visible: H(o) && !!c.value,
				title: l.value ? H(I)("designer.elementDialog.defaultTitle") : c.value?.name,
				width: u.value ? "94vw" : 720,
				height: u.value ? "92%" : 640,
				"body-padding": !1,
				"destroy-on-close": !e.session,
				onCancel: C,
				onClose: C,
				onConfirm: w
			}, {
				footer: q(() => [P("div", bc, [
					R(i, {
						variant: "outline",
						onClick: S
					}, {
						default: q(() => [L(W(H(I)("designer.elementDialog.resetButton")), 1)]),
						_: 1
					}),
					n[5] ||= P("div", { class: "flex-1" }, null, -1),
					R(i, {
						variant: "outline",
						onClick: C
					}, {
						default: q(() => [L(W(H(I)("components.baseDialog.cancelButton")), 1)]),
						_: 1
					}),
					R(i, {
						theme: "primary",
						onClick: w
					}, {
						default: q(() => [L(W(H(I)("designer.elementDialog.confirmButton")), 1)]),
						_: 1
					})
				])]),
				header: q(() => [
					R(T, {
						name: H(h)?.icon ?? "dots",
						class: "h-4 w-4 text-accent"
					}, null, 8, ["name"]),
					P("span", {
						class: "max-w-55 truncate text-xs text-ink",
						title: c.value?.name
					}, W(l.value ? H(I)("designer.controlPanel.selectionSummary", { count: s.value.length }) : c.value?.name), 9, xc),
					P("span", Sc, W(H(h)?.label ?? c.value?.type), 1)
				]),
				default: q(() => [In(P("div", Cc, [c.value && u.value ? (X(), z(yc, {
					key: 0,
					modelValue: f.value,
					"onUpdate:modelValue": n[1] ||= (e) => f.value = e,
					node: c.value,
					"basic-tab": H(h)?.settingsDialog?.basicTab,
					sections: v.value
				}, {
					default: q(() => [P("div", wc, [l.value ? K("", !0) : (X(), z(Oe, {
						key: 0,
						title: H(I)("designer.elementDialog.nameSection")
					}, {
						default: q(() => [R(ke, {
							"model-value": d.value,
							schema: p.value,
							"onUpdate:modelValue": b
						}, null, 8, ["model-value", "schema"])]),
						_: 1
					}, 8, ["title"])), R(Oe, { title: H(I)("designer.elementDialog.transformSection") }, {
						default: q(() => [(X(!0), N(G, null, M(g.value, (e) => (X(), z(_, {
							key: e.key,
							field: e,
							node: c.value,
							nodes: s.value,
							onCommit: n[0] ||= (e) => H(r).history.commit()
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
				])) : K("", !0), c.value && !u.value ? (X(), z(Qo, {
					key: 1,
					modelValue: f.value,
					"onUpdate:modelValue": n[4] ||= (e) => f.value = e,
					class: "min-h-0 flex-1"
				}, {
					default: q(() => [R(a, {
						value: Dc,
						label: H(I)("designer.elementDialog.basicTab")
					}, {
						default: q(() => [P("div", Tc, [l.value ? K("", !0) : (X(), z(Oe, {
							key: 0,
							title: H(I)("designer.elementDialog.nameSection")
						}, {
							default: q(() => [R(ke, {
								"model-value": d.value,
								schema: p.value,
								"onUpdate:modelValue": b
							}, null, 8, ["model-value", "schema"])]),
							_: 1
						}, 8, ["title"])), R(Oe, { title: H(I)("designer.elementDialog.transformSection") }, {
							default: q(() => [(X(!0), N(G, null, M(g.value, (e) => (X(), z(_, {
								key: e.key,
								field: e,
								node: c.value,
								nodes: s.value,
								onCommit: n[2] ||= (e) => H(r).history.commit()
							}, null, 8, [
								"field",
								"node",
								"nodes"
							]))), 128))]),
							_: 1
						}, 8, ["title"])])]),
						_: 1
					}, 8, ["label"]), (X(!0), N(G, null, M(y.value, (e) => (X(), z(a, {
						key: e.name,
						value: e.name,
						label: e.name
					}, {
						default: q(() => [P("div", Ec, [(X(!0), N(G, null, M(e.sections, (e) => (X(), z(Oe, {
							key: e.title,
							title: e.title,
							hint: e.hint?.(c.value)
						}, {
							default: q(() => [(X(!0), N(G, null, M(e.fields, (e) => (X(), z(_, {
								key: e.key,
								field: e,
								node: c.value,
								nodes: s.value,
								onCommit: n[3] ||= (e) => H(r).history.commit()
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
				}, 8, ["modelValue"])) : K("", !0)], 512), [[Rr, c.value]])]),
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
}), kc = { class: "export-progress-dialog grid gap-2" }, Ac = {
	class: "export-progress-dialog__status",
	role: "status",
	"aria-live": "polite"
}, jc = {
	key: 2,
	class: "export-progress-dialog__detail text-ink-dim"
}, Mc = { class: "export-progress-dialog__hint text-ink-dim m-0" }, Nc = { class: "export-progress-dialog__actions flex gap-2 justify-end" }, Pc = ["aria-label"], Fc = ["title"], Ic = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "export-progress-dialog",
	setup(e) {
		let t = k(), n = t.store(), r = F(() => I("designer.exportProgressDialog.exportTitle", { format: n.ui.exportDialog?.format.toUpperCase() ?? "" })), i = F(() => n.rendering.progress), a = F(() => n.ui.exportDialog?.completed ?? !1), o = F(() => a.value ? 100 : i.value.stage !== "render" || i.value.total <= 0 ? 0 : Math.min(100, Math.round(i.value.completed / i.value.total * 100))), s = F(() => a.value ? I("designer.exportProgressDialog.completed") : n.rendering.paused ? I("designer.exportProgressDialog.paused") : I("designer.exportProgressDialog." + i.value.stage)), c = F(() => !a.value && i.value.stage === "render" ? I("designer.exportProgressDialog.pageProgress", i.value) : "");
		function l() {
			n.ui.minimizeExportDialog(!0);
		}
		function u() {
			n.ui.minimizeExportDialog(!1);
		}
		function d() {
			let e = n.rendering.paused ? "export.resume" : "export.pause";
			t.commands.dispatch(e);
		}
		function f() {
			t.commands.dispatch("export.cancel");
		}
		return (e, t) => {
			let p = le, m = vt, h = Re;
			return X(), N(G, null, [R(H(He), {
				visible: !(!H(n).ui.exportDialog || H(n).ui.exportDialog.minimized),
				title: r.value,
				width: 460,
				footer: !1,
				closable: !1,
				"close-on-esc-keydown": !1,
				"close-on-overlay-click": !1
			}, {
				"header-actions": q(() => [R(p, {
					variant: "text",
					size: "small",
					onClick: l
				}, {
					default: q(() => [L(W(H(I)("designer.exportProgressDialog.minimize")), 1)]),
					_: 1
				})]),
				default: q(() => [P("div", kc, [
					P("div", Ac, W(s.value), 1),
					a.value || i.value.stage === "render" ? (X(), z(m, {
						key: 0,
						percentage: o.value,
						label: a.value
					}, null, 8, ["percentage", "label"])) : (X(), z(h, {
						key: 1,
						loading: !H(n).rendering.paused,
						size: "small"
					}, null, 8, ["loading"])),
					c.value ? (X(), N("div", jc, W(c.value), 1)) : K("", !0),
					P("p", Mc, W(H(I)("designer.exportProgressDialog.hint")), 1),
					P("div", Nc, [R(p, {
						theme: "default",
						variant: "outline",
						disabled: !H(n).rendering.active || !H(n).rendering.pausable,
						onClick: d
					}, {
						default: q(() => [L(W(H(n).rendering.paused ? H(I)("designer.exportProgressDialog.resume") : H(I)("designer.exportProgressDialog.pause")), 1)]),
						_: 1
					}, 8, ["disabled"]), R(p, {
						theme: "danger",
						variant: "outline",
						disabled: !H(n).rendering.active,
						onClick: f
					}, {
						default: q(() => [L(W(H(I)("designer.exportProgressDialog.cancel")), 1)]),
						_: 1
					}, 8, ["disabled"])])
				])]),
				_: 1
			}, 8, ["visible", "title"]), H(n).ui.exportDialog?.minimized ? (X(), N("aside", {
				key: 0,
				class: "export-progress-dialog__minimized fixed right-5 bottom-12 flex items-center gap-3 p-3.5 border border-edge bg-panel text-ink rounded-lg [z-index:var(--z-index-context-menu,_2000)] [box-shadow:0_6px_24px_var(--color-shadow)]",
				"aria-label": r.value
			}, [
				P("button", {
					type: "button",
					class: "export-progress-dialog__restore grid gap-2 border-0 bg-transparent text-left cursor-pointer p-0 [color:inherit]",
					title: H(I)("designer.exportProgressDialog.expand"),
					onClick: u
				}, [
					P("strong", null, W(r.value), 1),
					P("span", null, [L(W(s.value) + " " + W(c.value) + " ", 1), a.value ? (X(), N(G, { key: 0 }, [L(W(o.value) + "%", 1)], 64)) : K("", !0)]),
					P("span", null, W(H(I)("designer.exportProgressDialog.expand")), 1)
				], 8, Fc),
				R(p, {
					size: "small",
					variant: "outline",
					disabled: !H(n).rendering.active || !H(n).rendering.pausable,
					onClick: d
				}, {
					default: q(() => [L(W(H(n).rendering.paused ? H(I)("designer.exportProgressDialog.resume") : H(I)("designer.exportProgressDialog.pause")), 1)]),
					_: 1
				}, 8, ["disabled"]),
				R(p, {
					size: "small",
					theme: "danger",
					variant: "outline",
					disabled: !H(n).rendering.active,
					onClick: f
				}, {
					default: q(() => [L(W(H(I)("designer.exportProgressDialog.cancel")), 1)]),
					_: 1
				}, 8, ["disabled"])
			], 8, Pc)) : K("", !0)], 64);
		};
	}
}), [["__scopeId", "data-v-e4f08de3"]]), Lc = {
	key: 1,
	class: "break-words text-xs leading-4.5"
}, Rc = /* @__PURE__ */ Z({
	__name: "follow-dialog",
	props: { session: {} },
	setup(e) {
		let t = e, n = k(), r = n.store(), { cancel: i, confirm: a, dialog: o, isActive: s, sessionId: c } = Zs(["follow", "follow-join"], () => t.session), l = B({
			gap: 2,
			name: "",
			target: ""
		}), u = B({
			elementIds: [],
			id: "",
			pageId: ""
		}), d = B(!1), f = F(() => y(u.value.pageId).map((e) => ({
			label: e.name,
			value: e.id
		}))), p = F(() => o.value.name === "follow-join"), m = F(() => r.followBlock.getJoinable(u.value.elementIds)), h = F(() => p.value ? I("designer.followBlock.joinTitle") : I(u.value.id ? "designer.followBlock.settingsTitle" : "designer.followBlock.createTitle")), g = F(() => {
			let e = r.document.data, t = r.page.get(u.value.pageId), n = /* @__PURE__ */ new Set([
				...(e.repeatGroups ?? []).flatMap((e) => e.elementIds),
				...(e.followBlocks ?? []).flatMap((e) => e.elementIds),
				...u.value.elementIds
			]);
			return [
				...(t?.elements ?? []).filter((e) => !n.has(e.id)).map((e) => ({
					label: e.name,
					target: {
						id: e.id,
						kind: "element"
					}
				})),
				...r.repeatGroup.getByPage(u.value.pageId).map((e) => ({
					label: `${I("designer.followBlock.repeatTarget")} · ${e.name}`,
					target: {
						id: e.id,
						kind: "repeatGroup"
					}
				})),
				...r.followBlock.getByPage(u.value.pageId).map((e) => ({
					label: `${I("designer.followBlock.defaultName")} · ${e.name}`,
					target: {
						id: e.id,
						kind: "followBlock"
					}
				}))
			].filter((t) => {
				let n = {
					...u.value,
					gap: 2,
					id: u.value.id || "__candidate__",
					name: "",
					target: t.target
				};
				return !An(e, n);
			});
		}), _ = F(() => p.value ? [{
			field: "group",
			label: I("designer.followBlock.joinGroupLabel"),
			props: { options: m.value.map((e) => ({
				label: e.name,
				value: e.id
			})) },
			type: "select"
		}] : [
			{
				field: "name",
				label: I("designer.followBlock.nameLabel"),
				type: "input"
			},
			{
				field: "target",
				label: I("designer.followBlock.targetLabel"),
				props: {
					onPopupVisibleChange: (e) => {
						d.value = e;
					},
					options: g.value.map((e) => ({
						label: e.label,
						value: tr(e.target)
					})),
					popupVisible: d.value
				},
				type: "select"
			},
			{
				field: "gap",
				label: I("designer.followBlock.gapLabel"),
				props: {
					placeholder: "",
					step: .5,
					suffix: "mm",
					theme: "normal"
				},
				type: "inputNumber"
			}
		]), v = F(() => [
			{
				id: "remove",
				slots: { icon: () => [U(T, { name: "unlink" })] },
				text: I("designer.followBlock.removeGroupTitle"),
				theme: "danger",
				variant: "outline",
				visible: !!u.value.id
			},
			{
				id: "cancel",
				slots: { icon: () => [U(T, { name: "close" })] },
				text: I("designer.repeatDialog.cancelButton"),
				theme: "default",
				variant: "outline"
			},
			{
				id: "confirm",
				slots: { icon: () => [U(T, { name: "check" })] },
				text: I("designer.repeatDialog.confirmButton"),
				theme: "primary"
			}
		]);
		function y(e) {
			let t = /* @__PURE__ */ new Set([...r.repeatGroup.list.flatMap((e) => e.elementIds), ...r.followBlock.list.flatMap((e) => e.elementIds)]);
			return (r.page.get(e)?.elements ?? []).filter((e) => !t.has(e.id) && !e.locked);
		}
		function b() {
			let e = m.value.find((e) => e.id === l.value.group);
			e ? n.commands.invoke("followBlock.addMembers", e.id, u.value.elementIds) && a({
				groupId: e.id,
				operation: "saved"
			}) : r.ui.toast(I("designer.followBlock.joinGroupRequired"), "error");
		}
		function x() {
			let e = m.value, t = r.followBlock.getByElements(u.value.elementIds), n = e.find((e) => t.some((t) => t.id === e.id));
			return n ? n.id : e.length === 1 ? e[0]?.id ?? "" : "";
		}
		async function S(e) {
			if (!s.value) return;
			if (e.id === "cancel" || u.value.id && !r.followBlock.find(u.value.id)) {
				i();
				return;
			}
			if (e.id === "remove") {
				let e = c.value, t = u.value.id;
				await n.commands.execute("data.removeFollow", t), r.ui.dialogs.confirm(e, {
					groupId: t,
					operation: "removed"
				});
				return;
			}
			if (p.value) {
				b();
				return;
			}
			if (!u.value.elementIds.length) {
				r.ui.toast(I("designer.followBlock.membersRequired"), "error");
				return;
			}
			let t = g.value.find((e) => tr(e.target) === l.value.target);
			if (!t) {
				r.ui.toast(I("designer.followBlock.targetRequired"), "error");
				return;
			}
			let o = {
				gap: l.value.gap === "" || l.value.gap == null ? null : Number(l.value.gap),
				name: String(l.value.name ?? "").trim() || I("designer.followBlock.defaultName"),
				target: t.target
			}, d = u.value.id;
			if (d) {
				n.commands.invoke("followBlock.update", d, {
					...o,
					gap: o.gap ?? r.followBlock.find(d)?.gap ?? 0
				}) && a({
					groupId: d,
					operation: "saved"
				});
				return;
			}
			let f = n.commands.invoke("followBlock.create", u.value.pageId, u.value.elementIds, o.target, o.gap, o.name);
			f && a({
				groupId: f.id,
				operation: "saved"
			});
		}
		return Ve("values", (e) => {
			e && s.value && (l.value = {
				...l.value,
				...e
			});
		}), Ve("select", (e) => {
			d.value = s.value && !p.value && e === "target";
		}), V([() => o.value.name, () => o.value.groupId], () => {
			if (o.value.name !== "follow" && !p.value) return;
			let { groupId: e } = o.value, t = r.followBlock.find(e ?? "");
			if (e && !t) {
				i();
				return;
			}
			let n = new Set(y(r.scope.active.id).map((e) => e.id));
			u.value = t ? {
				elementIds: [...t.elementIds],
				id: t.id,
				pageId: t.pageId
			} : {
				elementIds: p.value ? [...r.selection.ids] : r.selection.ids.filter((e) => n.has(e)),
				id: "",
				pageId: r.scope.active.id
			}, l.value = {
				gap: t?.gap ?? (u.value.elementIds.length > 1 ? void 0 : 2),
				name: t?.name ?? I("designer.followBlock.defaultName"),
				target: t ? tr(t.target) : ""
			}, p.value && (l.value = { group: x() });
		}, { immediate: !0 }), V(() => u.value.elementIds.length, (e) => {
			!u.value.id && e > 1 && l.value.gap !== void 0 && (l.value = {
				...l.value,
				gap: void 0
			});
		}), (e, t) => {
			let n = ft;
			return X(), z(H(He), {
				key: H(r).ui.restoreRevision,
				visible: H(s),
				title: h.value,
				width: 430,
				onClose: H(i)
			}, {
				footer: q(() => [R(H(de), {
					actions: v.value,
					onClick: S
				}, null, 8, ["actions"])]),
				default: q(() => [p.value ? K("", !0) : (X(), z(Pe, {
					key: 0,
					label: H(I)("designer.followBlock.membersLabel")
				}, {
					default: q(() => [u.value.id ? (X(), N("div", Lc, W(H(r).element.getMany(u.value.elementIds).map((e) => e.name).join("、")), 1)) : (X(), z(n, {
						key: 0,
						modelValue: u.value.elementIds,
						"onUpdate:modelValue": t[0] ||= (e) => u.value.elementIds = e,
						multiple: "",
						options: f.value,
						"aria-label": H(I)("designer.followBlock.membersLabel")
					}, null, 8, [
						"modelValue",
						"options",
						"aria-label"
					]))]),
					_: 1
				}, 8, ["label"])), R(ke, {
					modelValue: l.value,
					"onUpdate:modelValue": t[1] ||= (e) => l.value = e,
					schema: _.value
				}, null, 8, ["modelValue", "schema"])]),
				_: 1
			}, 8, [
				"visible",
				"title",
				"onClose"
			]);
		};
	}
}), zc = { class: "flex min-h-0 flex-1 flex-col" }, Bc = { class: "flex shrink-0 flex-wrap gap-3 border-b border-edge p-3" }, Vc = { class: "min-w-55 flex-1" }, Hc = { class: "mb-1 text-xs text-ink-dim" }, Uc = { class: "w-45 max-w-full shrink-0" }, Wc = { class: "mb-1 text-xs text-ink-dim" }, Gc = { class: "shrink-0 px-3 py-2 text-xs text-ink-dim" }, Kc = { class: "min-h-0 flex-1 overflow-auto" }, qc = { class: "block-manager w-full table-fixed text-left text-xs" }, Jc = { class: "sticky top-0 z-10 bg-panel-2 text-ink-dim" }, Yc = { class: "px-3 py-2 font-normal" }, Xc = { class: "w-68 px-3 py-2 font-normal" }, Zc = { class: "flex items-center gap-2" }, Qc = { class: "w-28 px-3 py-2 font-normal" }, $c = { class: "w-19 px-3 py-2 font-normal" }, el = { class: "w-32 px-3 py-2 font-normal" }, tl = { class: "px-3 py-2" }, nl = ["title"], rl = ["title"], il = { class: "px-3 py-2" }, al = { class: "flex flex-col" }, ol = { class: "flex min-w-0 items-center gap-2 rounded border border-edge bg-panel px-2 py-1.5" }, sl = { class: "min-w-0 flex-1" }, cl = { class: "flex items-center gap-1 text-caption text-ink-dim" }, ll = { class: "rounded bg-panel-2 px-1" }, ul = ["title", "onClick"], dl = { class: "flex min-w-0 items-center gap-2 rounded border border-accent/30 bg-accent/5 px-2 py-1.5" }, fl = { class: "min-w-0 flex-1" }, pl = { class: "text-caption text-ink-dim" }, ml = ["title"], hl = { key: 0 }, gl = ["onClick"], _l = ["title"], vl = ["title"], yl = { class: "px-3 py-2" }, bl = { class: "px-3 py-2" }, xl = { class: "flex gap-1" }, Sl = { class: "mr-auto text-xs text-ink-dim" }, Cl = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "follow-manager-dialog",
	props: { session: {} },
	setup(e) {
		let t = e, n = k(), r = n.store(), { cancel: i, isActive: a, sessionId: o } = Zs("follow-manager", () => t.session), s = B(""), c = B(""), l = F(() => [{
			label: I("designer.repeatManager.allPagesLabel"),
			value: ""
		}, ...r.page.list.map((e) => ({
			label: e.name,
			value: e.id
		}))]), u = F(() => {
			let e = s.value.trim().toLocaleLowerCase();
			return r.followBlock.list.map((e) => ({
				...e,
				targetDisplay: f(e)
			})).filter((t) => (!c.value || t.pageId === c.value) && `${t.name} ${d(t)} ${t.targetDisplay.kind} ${t.targetDisplay.name}`.toLocaleLowerCase().includes(e));
		});
		function d(e) {
			return r.element.getMany(e.elementIds).map((e) => e.name).join("、");
		}
		function f(e) {
			let t = e.target, n = on(r.document.data, e.pageId, t), i = {
				element: () => ({
					icon: "select",
					kind: I("designer.followManager.elementTarget"),
					name: n?.name
				}),
				followBlock: () => ({
					icon: "link",
					kind: I("designer.followBlock.defaultName"),
					name: n?.name
				}),
				repeatGroup: () => ({
					icon: "loop",
					kind: I("designer.followBlock.repeatTarget"),
					name: n?.name
				})
			}[t.kind]();
			return {
				...i,
				name: i.name ?? I("designer.followManager.missingTarget")
			};
		}
		function p(e) {
			let t = on(r.document.data, e.pageId, e.target)?.elementIds ?? [];
			m("data.locateFollowElements", e.pageId, t);
		}
		function m(e, ...t) {
			n.commands.dispatch(e, ...t);
		}
		return (e, t) => {
			let n = rt, f = ft, h = le;
			return X(), z(H(He), {
				visible: H(a),
				title: H(I)("designer.followManager.dialogTitle"),
				width: 900,
				height: 540,
				"body-padding": !1,
				onClose: t[4] ||= (e) => H(i)()
			}, {
				footer: q(() => [
					P("span", Sl, W(H(I)("designer.followManager.countLabel", { count: u.value.length })), 1),
					R(h, { onClick: t[2] ||= (e) => m("data.createFollow", H(o)) }, {
						default: q(() => [L(W(H(I)("designer.followBlock.createTitle")), 1)]),
						_: 1
					}),
					R(h, {
						variant: "outline",
						onClick: t[3] ||= (e) => H(i)()
					}, {
						default: q(() => [L(W(H(I)("designer.repeatManager.closeButton")), 1)]),
						_: 1
					})
				]),
				default: q(() => [P("div", zc, [
					P("div", Bc, [P("div", Vc, [P("div", Hc, W(H(I)("designer.followManager.searchLabel")), 1), R(n, {
						modelValue: s.value,
						"onUpdate:modelValue": t[0] ||= (e) => s.value = e,
						clearable: "",
						"aria-label": H(I)("designer.followManager.searchPlaceholder"),
						placeholder: H(I)("designer.followManager.searchPlaceholder")
					}, null, 8, [
						"modelValue",
						"aria-label",
						"placeholder"
					])]), P("div", Uc, [P("div", Wc, W(H(I)("designer.repeatManager.pageLabel")), 1), R(f, {
						modelValue: c.value,
						"onUpdate:modelValue": t[1] ||= (e) => c.value = e,
						"aria-label": H(I)("designer.repeatManager.pageLabel"),
						options: l.value
					}, null, 8, [
						"modelValue",
						"aria-label",
						"options"
					])])]),
					P("p", Gc, W(H(I)("designer.followManager.createHint")), 1),
					P("div", Kc, [P("table", qc, [P("thead", Jc, [P("tr", null, [
						P("th", Yc, W(H(I)("designer.followManager.nameLabel")), 1),
						P("th", Xc, [P("div", Zc, [
							P("span", null, W(H(I)("designer.followManager.targetLabel")), 1),
							R(T, {
								name: "arrow-right",
								class: "h-4 w-4 shrink-0 text-accent"
							}),
							P("span", null, W(H(I)("designer.followManager.blockLabel")), 1)
						])]),
						P("th", Qc, W(H(I)("designer.repeatManager.pageLabel")), 1),
						P("th", $c, W(H(I)("designer.followManager.gapLabel")), 1),
						P("th", el, W(H(I)("designer.repeatManager.actionsLabel")), 1)
					])]), P("tbody", null, [(X(!0), N(G, null, M(u.value, (e) => (X(), N("tr", {
						key: e.id,
						class: "border-b border-edge hover:bg-panel-2"
					}, [
						P("td", tl, [P("div", {
							class: "truncate",
							title: e.name
						}, W(e.name), 9, nl), P("div", {
							class: "truncate text-ink-dim",
							title: d(e)
						}, W(d(e)), 9, rl)]),
						P("td", il, [P("div", al, [
							P("div", ol, [R(T, {
								name: e.targetDisplay.icon,
								class: "h-4 w-4 shrink-0 text-ink-dim"
							}, null, 8, ["name"]), P("div", sl, [P("div", cl, [P("span", null, W(H(I)("designer.followManager.targetRoleLabel")), 1), P("span", ll, W(e.targetDisplay.kind), 1)]), P("button", {
								type: "button",
								class: "block truncate text-left text-accent hover:underline",
								title: e.targetDisplay.name,
								onClick: (t) => p(e)
							}, W(e.targetDisplay.name), 9, ul)])]),
							R(T, {
								name: "layer-down",
								class: "my-0.5 ml-2 h-4 w-4 shrink-0 text-accent"
							}),
							P("div", dl, [R(T, {
								name: "link",
								class: "h-4 w-4 shrink-0 text-accent"
							}), P("div", fl, [
								P("div", pl, W(H(I)("designer.followManager.followerRoleLabel")), 1),
								P("div", {
									class: "break-words font-medium text-ink",
									title: d(e)
								}, [(X(!0), N(G, null, M(H(r).element.getMany(e.elementIds), (t, n) => (X(), N(G, { key: t.id }, [n ? (X(), N("span", hl, "、")) : K("", !0), P("button", {
									type: "button",
									class: "text-accent hover:underline",
									onClick: (n) => m("data.locateFollowElements", e.pageId, [t.id])
								}, W(t.name), 9, gl)], 64))), 128))], 8, ml),
								P("div", {
									class: "mt-0.5 truncate text-caption text-ink-dim",
									title: e.name
								}, W(H(I)("designer.followManager.blockNameLabel", { name: e.name })), 9, _l)
							])])
						])]),
						P("td", {
							class: "truncate px-3 py-2",
							title: H(r).page.get(e.pageId)?.name
						}, W(H(r).page.get(e.pageId)?.name), 9, vl),
						P("td", yl, W(e.gap) + " mm", 1),
						P("td", bl, [P("div", xl, [R(h, {
							shape: "square",
							variant: "text",
							title: H(I)("designer.repeatManager.locateLabel"),
							"aria-label": H(I)("designer.repeatManager.locateLabel"),
							onClick: (t) => m("data.locateFollow", e.id)
						}, {
							icon: q(() => [R(T, {
								name: "locate",
								class: "h-4 w-4"
							})]),
							_: 1
						}, 8, [
							"title",
							"aria-label",
							"onClick"
						]), R(h, {
							shape: "square",
							variant: "text",
							title: H(I)("designer.followBlock.settingsTitle"),
							"aria-label": H(I)("designer.followBlock.settingsTitle"),
							onClick: (t) => m("data.editFollow", e.id, H(o))
						}, {
							icon: q(() => [R(T, {
								name: "sliders",
								class: "h-4 w-4"
							})]),
							_: 1
						}, 8, [
							"title",
							"aria-label",
							"onClick"
						])])])
					]))), 128))])]), u.value.length === 0 ? (X(), z(es, {
						key: 0,
						icon: "link",
						message: H(I)(H(r).followBlock.list.length ? "designer.followManager.noResultsMessage" : "designer.followManager.emptyMessage")
					}, null, 8, ["message"])) : K("", !0)])
				])]),
				_: 1
			}, 8, ["visible", "title"]);
		};
	}
}), [["__scopeId", "data-v-d4bcc6cb"]]), wl = /* @__PURE__ */ Z({
	__name: "guide-dialog",
	setup(e) {
		let t = k(), n = t.store(), r = B({
			orientation: "horizontal",
			position: 0
		}), i = F(() => {
			let { guideId: e, pageId: t } = n.ui.activeDialog;
			return !e || !t ? null : n.guide.get(t, e) ?? null;
		}), a = F(() => {
			let e = n.ui.activeDialog.pageId;
			return e ? n.scope.get(e) : n.scope.active;
		}), o = F(() => {
			let e = a.value;
			return e ? r.value.orientation === "horizontal" ? e.height : e.width : 0;
		}), s = F(() => [{
			field: "orientation",
			label: I("designer.guideDialog.orientationLabel"),
			props: {
				disabled: !!i.value,
				options: [{
					label: I("designer.guideDialog.horizontalOption"),
					value: "horizontal"
				}, {
					label: I("designer.guideDialog.verticalOption"),
					value: "vertical"
				}]
			},
			type: "select"
		}, {
			field: "position",
			help: I("designer.guideDialog.positionHint", {
				edge: I(r.value.orientation === "horizontal" ? "designer.guideDialog.topEdge" : "designer.guideDialog.leftEdge"),
				maxExtent: o.value
			}),
			label: I("designer.guideDialog.positionLabel"),
			props: {
				max: o.value,
				min: 0,
				step: .5,
				suffix: I("designer.guideDialog.distanceUnit"),
				theme: "normal"
			},
			type: "inputNumber"
		}]);
		function c() {
			let e = a.value;
			if (!e) {
				n.ui.closeDialog();
				return;
			}
			let o = r.value.orientation === "horizontal" ? e.height : e.width, s = Math.min(o, Math.max(0, Number(r.value.position) || 0)), c = i.value;
			c ? t.commands.invoke("guide.move", e.id, c.id, s) : t.commands.invoke("guide.create", e.id, r.value.orientation, s), n.ui.closeDialog();
		}
		return V(() => n.ui.activeDialog.name, (e) => {
			if (e !== "guide") return;
			let t = i.value;
			t ? (r.value.orientation = t.orientation, r.value.position = t.position) : (r.value.orientation = "horizontal", r.value.position = Math.round(o.value / 2 * 2) / 2);
		}, { immediate: !0 }), (e, t) => (X(), z(H(He), {
			visible: H(n).ui.activeDialog.name === "guide",
			title: i.value ? H(I)("designer.guideDialog.editTitle") : H(I)("designer.guideDialog.createTitle"),
			width: 300,
			"confirm-on-enter": !0,
			"confirm-btn": i.value ? H(I)("designer.guideDialog.applyButton") : H(I)("designer.guideDialog.addButton"),
			onClose: t[1] ||= (e) => H(n).ui.closeDialog(),
			onConfirm: c
		}, {
			default: q(() => [R(ke, {
				modelValue: r.value,
				"onUpdate:modelValue": t[0] ||= (e) => r.value = e,
				schema: s.value
			}, null, 8, ["modelValue", "schema"])]),
			_: 1
		}, 8, [
			"visible",
			"title",
			"confirm-btn"
		]));
	}
}), Tl = /* @__PURE__ */ Z({
	__name: "new-document-dialog",
	setup(e) {
		let t = k(), n = t.store();
		function r() {
			n.ui.closeDialog();
		}
		function i() {
			t.commands.dispatch("document.create");
		}
		return (e, t) => (X(), z(H(He), {
			visible: H(n).ui.activeDialog.name === "new-document",
			title: H(I)("designer.builtins.newDocumentTitle"),
			width: 400,
			"confirm-btn": {
				content: H(I)("designer.newDocumentDialog.confirmButton"),
				theme: "danger"
			},
			onConfirm: i,
			onClose: r
		}, {
			default: q(() => [L(W(H(I)("designer.newDocumentDialog.confirmMessage")), 1)]),
			_: 1
		}, 8, [
			"visible",
			"title",
			"confirm-btn"
		]));
	}
}), El = /* @__PURE__ */ Z({
	__name: "page-dialog",
	props: { session: {} },
	setup(e) {
		let t = e, n = k(), r = n.store(), { cancel: i, confirm: a, dialog: o, isActive: s } = Zs("page", () => t.session), c = B(!1), l = B({
			background: "#ffffff",
			height: 297,
			marginBottom: 0,
			marginLeft: 0,
			marginRight: 0,
			marginTop: 0,
			name: "",
			preset: "",
			templateMode: ln,
			width: 210
		}), u = F(() => [
			{
				field: "name",
				label: I("designer.pageDialog.nameLabel"),
				type: "input"
			},
			...f.value ? [] : [h.value],
			{
				field: "preset",
				label: I("designer.pageDialog.presetLabel"),
				props: {
					disabled: g.value !== void 0,
					onChange: w,
					options: [{
						label: I("designer.pageDialog.customPresetOption"),
						value: ""
					}, ...Nn.map((e) => ({
						label: `${e.label}（${e.width} × ${e.height} mm）`,
						value: x(e.width, e.height)
					}))]
				},
				type: "select"
			},
			{
				field: "width",
				label: I("designer.pageDialog.widthLabel"),
				props: {
					disabled: g.value !== void 0,
					max: 2e3,
					min: 10,
					onChange: function(e) {
						return C(Number(e) || 210, l.value.height);
					},
					step: 1,
					suffix: I("designer.pageDialog.distanceUnit"),
					theme: "normal"
				},
				type: "inputNumber"
			},
			{
				field: "height",
				label: I("designer.pageDialog.heightLabel"),
				props: {
					disabled: g.value !== void 0,
					max: 2e3,
					min: 10,
					onChange: function(e) {
						return C(l.value.width, Number(e) || 297);
					},
					step: 1,
					suffix: I("designer.pageDialog.distanceUnit"),
					theme: "normal"
				},
				type: "inputNumber"
			},
			{
				field: "background",
				label: I("designer.pageDialog.backgroundLabel"),
				props: {
					disabled: g.value !== void 0,
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
				label: I(`designer.pageDialog.margin${e[0].toUpperCase()}${e.slice(1)}Label`),
				props: {
					disabled: g.value !== void 0,
					min: 0,
					step: .5,
					suffix: I("designer.pageDialog.distanceUnit"),
					theme: "normal"
				},
				type: "inputNumber"
			}))
		]), d = F(() => {
			let e = o.value.pageId;
			return e ? r.scope.get(e) ?? r.page.get(e) ?? null : null;
		}), f = F(() => !!d.value && r.template.isContainer(d.value.id)), p = F(() => d.value && !f.value ? r.template.resolveFor(d.value) : void 0), m = F(() => {
			if (!f.value) return p.value ?? r.template.resolveFor({ id: d.value?.id }, d.value ? void 0 : r.document.data.pages.length + 1);
		}), h = F(() => ({
			field: "templateMode",
			label: I("designer.applyTemplateDialog.templateLabel"),
			props: { options: [...m.value ? [{
				label: m.value.name,
				value: m.value.id
			}] : [], {
				label: I("designer.pageDialog.noTemplateOption"),
				value: ln
			}] },
			type: "select"
		})), g = F(() => l.value.templateMode === m.value?.id ? m.value : void 0), _ = F({
			get() {
				let e = g.value;
				if (!e) return l.value;
				let { height: t, width: n } = e.page, r = zt(e.page.margins);
				return {
					...l.value,
					background: Pr(e),
					height: t,
					marginBottom: r.bottom,
					marginLeft: r.left,
					marginRight: r.right,
					marginTop: r.top,
					preset: S(n, t),
					width: n
				};
			},
			set(e) {
				g.value ? l.value = {
					...l.value,
					name: e.name,
					templateMode: e.templateMode
				} : l.value = e;
			}
		}), v = F(() => {
			let e = g.value;
			return {
				height: e?.page.height ?? Math.min(2e3, Math.max(10, Number(l.value.height) || 297)),
				margins: e ? e.page.margins : {
					bottom: Number(l.value.marginBottom ?? 0),
					left: Number(l.value.marginLeft ?? 0),
					right: Number(l.value.marginRight ?? 0),
					top: Number(l.value.marginTop ?? 0)
				},
				width: e?.page.width ?? Math.min(2e3, Math.max(10, Number(l.value.width) || 210))
			};
		}), y = F(() => {
			try {
				return rr(v.value), "";
			} catch (e) {
				if (!(e instanceof Gn)) throw e;
				return e.userMessage;
			}
		}), b = F(() => [{
			id: "cancel",
			slots: { icon: () => [U(T, {
				class: "h-3.5 w-3.5",
				name: "close"
			})] },
			text: I("designer.pageDialog.cancelButton"),
			theme: "default",
			variant: "outline"
		}, {
			id: "apply",
			slots: { icon: () => [U(T, {
				class: "h-3.5 w-3.5",
				name: d.value ? "check" : "plus"
			})] },
			text: d.value ? I("designer.pageDialog.applyButton") : I("designer.pageDialog.addButton"),
			theme: "primary",
			variant: "base"
		}]);
		function x(e, t) {
			return `${Number(e) || 0}x${Number(t) || 0}`;
		}
		function S(e, t) {
			let n = x(e, t);
			return Nn.some((e) => x(e.width, e.height) === n) ? n : "";
		}
		function C(e, t) {
			l.value = {
				...l.value,
				preset: S(e, t)
			};
		}
		function w(e) {
			let t = Nn.find((t) => x(t.width, t.height) === e);
			t && (l.value = {
				...l.value,
				height: t.height,
				width: t.width
			});
		}
		function E(e) {
			e.id === "cancel" ? i() : e.id === "apply" && O();
		}
		function D() {
			let e = g.value;
			e && n.commands.dispatch("template.pageSetup", e.page.id);
		}
		function O() {
			if (!s.value) return;
			let e = d.value;
			if (o.value.pageId !== void 0 && !e) {
				i();
				return;
			}
			if (c.value = !0, y.value) return;
			let { height: t, margins: u, width: m } = v.value, h = String(l.value.name ?? "").trim() || I("designer.pageDialog.defaultPageName"), _ = g.value ? {} : { background: String(l.value.background || "#ffffff") }, b = {
				..._,
				height: t,
				margins: u,
				name: h,
				width: m
			};
			e ? !f.value && g.value?.id !== p.value?.id ? n.commands.invoke("page.update", e.id, {
				...b,
				templateId: g.value ? void 0 : ln
			}) : r.scope.get(e.id) ? n.commands.invoke("scope.updatePage", e.id, b) : n.commands.invoke("page.update", e.id, b) : n.commands.invoke("page.create", m, t, h, {
				..._,
				margins: u,
				templateId: g.value ? void 0 : ln
			}), a();
		}
		return Ve("values", (e) => {
			e && s.value && (l.value = {
				...l.value,
				...e
			}, C(l.value.width, l.value.height));
		}), V([() => o.value.name, () => o.value.pageId], ([e]) => {
			if (e !== "page") return;
			c.value = !1;
			let t = d.value, n = p.value?.page ?? t, i = n ? n.width : 210, a = n ? n.height : 297, o = zt(n?.margins);
			l.value = {
				background: p.value ? Pr(p.value) : t?.background ?? "#ffffff",
				height: a,
				marginBottom: o.bottom,
				marginLeft: o.left,
				marginRight: o.right,
				marginTop: o.top,
				name: t ? t.name : I("designer.pageDialog.numberedPageName", { pageNumber: r.document.data.pages.length + 1 }),
				preset: S(i, a),
				templateMode: (t ? p.value?.id : m.value?.id) ?? "template-none",
				width: i
			};
		}, { immediate: !0 }), V([
			s,
			() => o.value.pageId,
			d
		], ([e, t, n]) => {
			e && t !== void 0 && !n && i();
		}, { immediate: !0 }), (e, t) => {
			let n = le;
			return X(), z(H(He), {
				key: H(r).ui.restoreRevision,
				visible: H(s),
				title: d.value ? H(I)("designer.pageDialog.editTitle") : H(I)("designer.pageDialog.createTitle"),
				width: 320,
				onClose: H(i)
			}, {
				footer: q(() => [R(H(de), {
					actions: b.value,
					onClick: E
				}, null, 8, ["actions"])]),
				default: q(() => [
					g.value ? (X(), z(Pe, {
						key: 0,
						class: "page-dialog__inheritance",
						help: H(I)("designer.pageDialog.inheritedLayoutMessage", { templateName: g.value.name })
					}, {
						default: q(() => [R(n, {
							variant: "outline",
							theme: "primary",
							onClick: D
						}, {
							icon: q(() => [R(T, {
								name: "template",
								class: "h-3.5 w-3.5"
							})]),
							default: q(() => [L(" " + W(H(I)("designer.pageDialog.editTemplateButton")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["help"])) : K("", !0),
					R(ke, {
						modelValue: _.value,
						"onUpdate:modelValue": t[0] ||= (e) => _.value = e,
						schema: u.value
					}, null, 8, ["modelValue", "schema"]),
					c.value && y.value ? (X(), z(et, {
						key: 1,
						class: "page-dialog__validation mt-2",
						role: "alert",
						variant: "danger",
						text: y.value
					}, null, 8, ["text"])) : K("", !0)
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
function Dl(e) {
	let t = e.store(), { renderPreviewHtml: n } = x(e);
	return {
		capture(t) {
			return e.errors.capture(t, { source: "preview.render" });
		},
		close() {
			t.ui.closeDialog();
		},
		getSampleInput() {
			return Bt(t.document.data);
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
var Ol = /* @__PURE__ */ Z({
	__name: "preview-dialog",
	props: { timeoutMs: {} },
	emits: ["error", "ready"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Dl(k());
		return (e, t) => (X(), z(it, {
			source: H(i),
			"timeout-ms": n.timeoutMs,
			onError: t[0] ||= (e) => r("error", e),
			onReady: t[1] ||= (e, t) => r("ready", e, t)
		}, null, 8, ["source", "timeout-ms"]));
	}
}), kl = { class: "ml-1 text-xs text-ink" }, Al = {
	key: 0,
	class: "flex flex-col gap-2.5"
}, jl = /* @__PURE__ */ Z({
	__name: "repeat-dialog",
	props: { session: {} },
	setup(e) {
		let t = e, n = k(), r = n.store(), { cancel: i, confirm: a, dialog: o, isActive: s } = Zs("repeat", () => t.session), c = B(!1), l = B(!1), u = B({
			collection: "",
			columns: 2,
			direction: "vertical",
			gapX: 2,
			gapY: 2,
			name: "",
			positionMode: "fixed"
		}), d = B({
			elementIds: [],
			id: null
		}), f = F(() => [
			{
				label: I("designer.repeatDialog.verticalLayoutOption"),
				value: "vertical"
			},
			{
				label: I("designer.repeatDialog.gridLayoutOption"),
				value: "grid"
			},
			{
				label: I("designer.repeatDialog.pageLayoutOption"),
				value: "page"
			}
		]), p = F(() => [
			{
				field: "name",
				label: I("designer.repeatDialog.nameLabel"),
				type: "input"
			},
			{
				field: "collection",
				label: I("designer.repeatDialog.collectionLabel"),
				props: { onOpen: function() {
					x(!0);
				} },
				type: "collectionPicker"
			},
			{
				field: "direction",
				label: I("designer.repeatDialog.layoutLabel"),
				props: { options: f.value },
				type: "select"
			},
			{
				field: "positionMode",
				hidden: b,
				label: I("designer.repeatDialog.positionModeLabel"),
				props: { options: [{
					label: I("designer.repeatDialog.fixedPositionOption"),
					value: "fixed"
				}, {
					label: I("designer.repeatDialog.flowPositionOption"),
					value: "flow"
				}] },
				type: "select"
			},
			{
				field: "gapX",
				hidden: y,
				label: I("designer.repeatDialog.columnGapLabel"),
				props: {
					max: 200,
					min: 0,
					step: .5,
					suffix: I("designer.repeatDialog.distanceUnit"),
					theme: "normal"
				},
				type: "inputNumber"
			},
			{
				field: "gapY",
				hidden: b,
				label: I("designer.repeatDialog.verticalGapLabel"),
				props: {
					max: 200,
					min: 0,
					step: .5,
					suffix: I("designer.repeatDialog.distanceUnit"),
					theme: "normal"
				},
				type: "inputNumber"
			},
			{
				field: "columns",
				help: I("designer.repeatDialog.columnsHint"),
				hidden: y,
				label: I("designer.repeatDialog.columnsLabel"),
				props: {
					max: 20,
					min: 1,
					step: 1,
					suffix: I("designer.repeatDialog.columnUnit"),
					theme: "normal"
				},
				type: "inputNumber"
			}
		]), m = F(() => d.value.id === null), h = F(() => r.repeatGroup.getApplyTarget(r.page.activeId, d.value.elementIds)), g = F(() => m.value ? h.value.groups.length > 0 ? I("designer.repeatDialog.batchTitle") : I("designer.repeatDialog.createTitle") : I("designer.repeatDialog.editTitle")), _ = F(() => {
			let e = o.value.groupId;
			return e ? r.repeatGroup.find(e) ?? null : null;
		}), v = F(() => [
			{
				id: "ungroup",
				slots: { icon: () => [U(T, {
					class: "h-3.5 w-3.5",
					name: "unlink"
				})] },
				text: I("designer.repeatDialog.ungroupButton"),
				theme: "danger",
				variant: "outline",
				visible: !m.value
			},
			{
				id: "cancel",
				slots: { icon: () => [U(T, {
					class: "h-3.5 w-3.5",
					name: "close"
				})] },
				text: I("designer.repeatDialog.cancelButton"),
				theme: "default",
				variant: "outline"
			},
			{
				id: "confirm",
				slots: { icon: () => [U(T, {
					class: "h-3.5 w-3.5",
					name: "check"
				})] },
				text: I("designer.repeatDialog.confirmButton"),
				theme: "primary",
				variant: "base"
			}
		]);
		function y({ values: e }) {
			return e.direction !== "grid";
		}
		function b({ values: e }) {
			return e.direction === "page";
		}
		function x(e) {
			c.value = e;
		}
		function S(e) {
			u.value = {
				...u.value,
				collection: e
			}, x(!1);
		}
		function C() {
			if (!String(u.value.collection ?? "").trim()) {
				r.ui.toast(I("designer.repeatDialog.collectionRequiredMessage"), "error");
				return;
			}
			let e = {
				collection: String(u.value.collection ?? "").trim(),
				columns: Math.max(1, Math.trunc(Number(u.value.columns) || 1)),
				direction: u.value.direction,
				gapX: Math.max(0, Number(u.value.gapX) || 0),
				gapY: Math.max(0, Number(u.value.gapY) || 0),
				name: String(u.value.name ?? "").trim() || I("designer.repeatDialog.defaultGroupName"),
				positionMode: u.value.positionMode === "flow" ? "flow" : "fixed"
			}, t = d.value.id;
			if (t) n.commands.invoke("repeatGroup.update", t, e);
			else {
				let i = n.commands.invoke("repeatGroup.applyToSelection", r.page.activeId, d.value.elementIds, e);
				if (!i) return;
				t = i.id;
			}
			r.ui.toast(I("designer.repeatDialog.groupSavedMessage", { groupName: e.name }), "success"), a({
				groupId: t,
				operation: "saved"
			});
		}
		function w(e) {
			if (s.value) {
				if (d.value.id && !_.value) i();
				else if (e.id === "ungroup") {
					let e = d.value.id;
					e && (n.commands.invoke("repeatGroup.remove", e), r.ui.toast(I("designer.repeatDialog.ungroupedMessage"), "success"), a({
						groupId: e,
						operation: "removed"
					}));
				} else e.id === "cancel" ? i() : e.id === "confirm" && C();
			}
		}
		return V([() => o.value.name, () => o.value.groupId], ([e, t]) => {
			if (e !== "repeat") return;
			let n = _.value;
			if (t && !n) i();
			else {
				if (n) u.value = {
					collection: n.collection,
					columns: n.columns,
					direction: n.direction,
					gapX: n.gapX,
					gapY: n.gapY,
					name: n.name,
					positionMode: n.positionMode ?? "fixed"
				}, d.value = {
					elementIds: [...n.elementIds],
					id: n.id
				};
				else if (r.selection.ids.length > 0 && r.page.active) u.value = {
					collection: "",
					columns: 2,
					direction: "vertical",
					gapX: 2,
					gapY: 2,
					name: I("designer.repeatDialog.numberedGroupName", { groupNumber: r.repeatGroup.list.length + 1 }),
					positionMode: "fixed"
				}, d.value = {
					elementIds: [...r.selection.ids],
					id: null
				};
				else {
					l.value = !1, r.ui.toast(I("designer.repeatDialog.selectMembersMessage"), "error"), i();
					return;
				}
				l.value = !0;
			}
		}, { immediate: !0 }), (e, t) => (X(), N(G, null, [R(H(He), {
			visible: H(s),
			title: g.value,
			width: 430,
			onClose: H(i)
		}, {
			header: q(() => [R(T, {
				name: "loop",
				class: "h-4 w-4 text-accent"
			}), P("span", kl, W(g.value), 1)]),
			footer: q(() => [R(H(de), {
				actions: v.value,
				onClick: w
			}, null, 8, ["actions"])]),
			default: q(() => [l.value ? (X(), N("div", Al, [
				R(ke, {
					modelValue: u.value,
					"onUpdate:modelValue": t[0] ||= (e) => u.value = e,
					schema: p.value
				}, null, 8, ["modelValue", "schema"]),
				R(et, { text: H(I)("designer.collectionPickerField.relativeBindingHint") }, null, 8, ["text"]),
				R(et, { text: H(I)("designer.repeatDialog.memberCount", { count: m.value ? h.value.elementIds.length : d.value.elementIds.length }) }, null, 8, ["text"]),
				m.value && h.value.groups.length > 0 ? (X(), z(et, {
					key: 0,
					variant: "danger"
				}, {
					default: q(() => [L(W(H(I)("designer.repeatDialog.mergeHint", { groupNames: h.value.groups.map((e) => e.name).join("、") })), 1)]),
					_: 1
				})) : K("", !0),
				m.value && h.value.elementIds.length > d.value.elementIds.length ? (X(), z(et, { key: 1 }, {
					default: q(() => [L(W(H(I)("designer.repeatDialog.expandedHint", {
						selectedCount: d.value.elementIds.length,
						count: h.value.elementIds.length
					})), 1)]),
					_: 1
				})) : K("", !0)
			])) : K("", !0)]),
			_: 1
		}, 8, [
			"visible",
			"title",
			"onClose"
		]), c.value ? (X(), z(he, {
			key: 0,
			sources: H(r).dataSource.list,
			mode: "collection",
			"initial-path": String(u.value.collection ?? ""),
			title: H(I)("designer.repeatDialog.collectionPickerTitle"),
			onApply: S,
			onClose: t[1] ||= (e) => x(!1)
		}, null, 8, [
			"sources",
			"initial-path",
			"title"
		])) : K("", !0)], 64));
	}
}), Ml = { class: "flex min-h-0 flex-1 flex-col" }, Nl = { class: "flex gap-2 border-b border-edge p-3" }, Pl = { class: "min-w-0 flex-1" }, Fl = { class: "w-45 shrink-0" }, Il = { class: "min-h-0 flex-1 overflow-auto" }, Ll = { class: "block-manager w-full table-fixed text-left text-xs" }, Rl = { class: "sticky top-0 z-10 bg-panel-2 text-ink-dim" }, zl = { class: "px-3 py-2 font-normal" }, Bl = { class: "w-35 px-3 py-2 font-normal" }, Vl = { class: "w-18 px-3 py-2 font-normal" }, Hl = { class: "w-32 px-3 py-2 font-normal" }, Ul = { class: "px-3 py-2" }, Wl = ["title"], Gl = ["title"], Kl = ["title"], ql = { class: "px-3 py-2" }, Jl = { class: "px-3 py-2" }, Yl = { class: "flex gap-1" }, Xl = { class: "mr-auto text-xs text-ink-dim" }, Zl = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "repeat-manager-dialog",
	props: { session: {} },
	setup(e) {
		let t = e, n = k(), r = n.store(), { cancel: i, isActive: a, sessionId: o } = Zs("repeat-manager", () => t.session), s = B(""), c = B(""), l = B(null), u = B(!1), d = F(() => [{
			label: I("designer.repeatManager.allPagesLabel"),
			value: ""
		}, ...r.page.list.map((e) => ({
			label: e.name,
			value: e.id
		}))]), f = F(() => {
			let e = s.value.trim().toLocaleLowerCase();
			return r.repeatGroup.list.filter((t) => (!c.value || t.pageId === c.value) && (!e || `${t.name} ${t.collection}`.toLocaleLowerCase().includes(e)));
		}), p = F(() => r.repeatGroup.find(l.value ?? ""));
		function m(e, ...t) {
			n.commands.dispatch(e, ...t);
		}
		async function h() {
			p.value && await n.commands.execute("data.removeRepeatGroup", p.value.id), l.value = null;
		}
		async function g() {
			await n.commands.execute("data.removePageGroups"), u.value = !1;
		}
		return (e, t) => {
			let n = rt, _ = ft, v = le;
			return X(), N(G, null, [
				R(H(He), {
					visible: H(a),
					title: H(I)("designer.repeatManager.dialogTitle"),
					width: 760,
					height: 540,
					"body-padding": !1,
					onClose: t[4] ||= (e) => H(i)()
				}, {
					footer: q(() => [
						P("span", Xl, W(H(I)("designer.repeatManager.countLabel", { count: f.value.length })), 1),
						R(v, {
							theme: "danger",
							variant: "outline",
							disabled: H(r).repeatGroup.activePageGroups.length === 0,
							onClick: t[2] ||= (e) => u.value = !0
						}, {
							default: q(() => [L(W(H(I)("designer.builtins.deletePageRepeatGroupsTitle")), 1)]),
							_: 1
						}, 8, ["disabled"]),
						R(v, {
							variant: "outline",
							onClick: t[3] ||= (e) => H(i)()
						}, {
							icon: q(() => [R(T, {
								name: "close",
								class: "h-3.5 w-3.5"
							})]),
							default: q(() => [L(" " + W(H(I)("designer.repeatManager.closeButton")), 1)]),
							_: 1
						})
					]),
					default: q(() => [P("div", Ml, [P("div", Nl, [P("div", Pl, [R(n, {
						modelValue: s.value,
						"onUpdate:modelValue": t[0] ||= (e) => s.value = e,
						clearable: "",
						"aria-label": H(I)("designer.repeatManager.searchPlaceholder"),
						placeholder: H(I)("designer.repeatManager.searchPlaceholder")
					}, null, 8, [
						"modelValue",
						"aria-label",
						"placeholder"
					])]), P("div", Fl, [R(_, {
						modelValue: c.value,
						"onUpdate:modelValue": t[1] ||= (e) => c.value = e,
						"aria-label": H(I)("designer.repeatManager.pageLabel"),
						options: d.value
					}, null, 8, [
						"modelValue",
						"aria-label",
						"options"
					])])]), P("div", Il, [P("table", Ll, [P("thead", Rl, [P("tr", null, [
						P("th", zl, W(H(I)("designer.repeatManager.nameLabel")), 1),
						P("th", Bl, W(H(I)("designer.repeatManager.pageLabel")), 1),
						P("th", Vl, W(H(I)("designer.repeatManager.membersLabel")), 1),
						P("th", Hl, W(H(I)("designer.repeatManager.actionsLabel")), 1)
					])]), P("tbody", null, [(X(!0), N(G, null, M(f.value, (e) => (X(), N("tr", {
						key: e.id,
						class: "border-b border-edge hover:bg-panel-2"
					}, [
						P("td", Ul, [P("div", {
							class: "truncate text-ink",
							title: e.name
						}, W(e.name), 9, Wl), P("div", {
							class: "truncate text-ink-dim",
							title: e.collection
						}, W(e.collection || H(I)("designer.repeatManager.unboundLabel")), 9, Gl)]),
						P("td", {
							class: "truncate px-3 py-2",
							title: H(r).page.get(e.pageId)?.name
						}, W(H(r).page.get(e.pageId)?.name), 9, Kl),
						P("td", ql, W(e.elementIds.length), 1),
						P("td", Jl, [P("div", Yl, [
							R(v, {
								shape: "square",
								variant: "text",
								title: H(I)("designer.repeatManager.locateLabel"),
								"aria-label": H(I)("designer.repeatManager.locateLabel"),
								onClick: (t) => m("data.locateRepeatGroup", e.id)
							}, {
								icon: q(() => [R(T, {
									name: "locate",
									class: "h-4 w-4"
								})]),
								_: 1
							}, 8, [
								"title",
								"aria-label",
								"onClick"
							]),
							R(v, {
								shape: "square",
								variant: "text",
								title: H(I)("designer.repeatManager.editLabel"),
								"aria-label": H(I)("designer.repeatManager.editLabel"),
								onClick: (t) => m("data.editRepeatGroup", e.id, H(o))
							}, {
								icon: q(() => [R(T, {
									name: "sliders",
									class: "h-4 w-4"
								})]),
								_: 1
							}, 8, [
								"title",
								"aria-label",
								"onClick"
							]),
							R(v, {
								shape: "square",
								theme: "danger",
								variant: "text",
								title: H(I)("designer.repeatManager.ungroupLabel"),
								"aria-label": H(I)("designer.repeatManager.ungroupLabel"),
								onClick: (t) => l.value = e.id
							}, {
								icon: q(() => [R(T, {
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
					]))), 128))])]), f.value.length === 0 ? (X(), z(es, {
						key: 0,
						icon: "loop",
						message: H(I)(H(r).repeatGroup.list.length ? "designer.repeatManager.noResultsMessage" : "designer.repeatManager.emptyMessage")
					}, null, 8, ["message"])) : K("", !0)])])]),
					_: 1
				}, 8, ["visible", "title"]),
				p.value ? (X(), z(H(He), {
					key: 0,
					visible: !0,
					title: H(I)("designer.repeatManager.ungroupTitle"),
					width: 380,
					"confirm-btn": {
						content: H(I)("designer.repeatManager.ungroupLabel"),
						theme: "danger"
					},
					onConfirm: h,
					onCancel: t[5] ||= (e) => l.value = null,
					onClose: t[6] ||= (e) => l.value = null
				}, {
					default: q(() => [L(W(H(I)("designer.repeatManager.ungroupMessage", { groupName: p.value.name })), 1)]),
					_: 1
				}, 8, ["title", "confirm-btn"])) : K("", !0),
				R(H(He), {
					visible: u.value,
					title: H(I)("designer.builtins.deletePageRepeatGroupsTitle"),
					width: 420,
					"confirm-btn": {
						content: H(I)("designer.builtins.deletePageRepeatGroupsTitle"),
						theme: "danger"
					},
					onConfirm: g,
					onCancel: t[7] ||= (e) => u.value = !1,
					onClose: t[8] ||= (e) => u.value = !1
				}, {
					default: q(() => [L(W(H(I)("designer.repeatManager.removePageMessage", {
						pageName: H(r).page.get(H(r).page.activeId)?.name,
						count: H(r).repeatGroup.activePageGroups.length
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
}), [["__scopeId", "data-v-1c167232"]]);
function Ql(e) {
	let t = B({
		failures: [],
		sections: []
	}), n = B(!1), r = 0;
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
	return Wt(a), {
		catalog: t,
		invalidate: a,
		load: i,
		loading: n
	};
}
function $l(e) {
	let t = B(null), n = B(), r = B(), i = /* @__PURE__ */ new WeakMap(), a = ht({
		capture(t) {
			return e.errors.capture(t, { source: "templateLibrary.preview" });
		},
		frame: t,
		render: c
	}), o = Ke(t);
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
		} : (r.value = o, e.store().rendering.html(o, Bt(o), void 0, i));
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
	return V(a.loading, async (t) => {
		if (t) o.ready.value = !1;
		else if (!a.renderError.value && n.value) try {
			await Un(), !a.loading.value && n.value && o.onFrameLoad();
		} catch (t) {
			await e.errors.capture(t, { source: "templateLibrary.preview" });
		}
	}), {
		currentPage: o.currentPage,
		fitMode: o.fitMode,
		frameRef: t,
		loadedDocument: r,
		loading: a.loading,
		pageCount: F(() => o.pages.value.length),
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
var eu = ["aria-label"], tu = { class: "template-library__filter-group mb-6" }, nu = ["aria-pressed", "onClick"], ru = {
	key: 0,
	class: "template-library__filter-group mb-6"
}, iu = ["aria-pressed"], au = ["aria-pressed", "onClick"], ou = { class: "template-library__browse flex flex-col min-w-0 min-h-0 p-5 [flex:1_1_480px]" }, su = { class: "template-library__toolbar flex-none" }, cu = { class: "template-library__compact-filters hidden gap-2 mt-2.5" }, lu = ["aria-label"], uu = ["value"], du = ["aria-label"], fu = { value: null }, pu = ["value"], mu = { class: "template-library__result-bar flex items-center gap-3 min-h-12.5 text-ink-dim text-xs" }, hu = { role: "status" }, gu = ["aria-label"], _u = ["aria-pressed"], vu = ["aria-pressed"], yu = { class: "template-library__items flex-1 min-h-0 overflow-auto" }, bu = {
	key: 0,
	class: "template-library__loading flex flex-1 flex-col items-center justify-center gap-2 text-center",
	role: "status"
}, xu = {
	key: 0,
	class: "template-library__empty flex flex-1 flex-col items-center justify-center gap-2 text-center"
}, Su = { key: 0 }, Cu = { key: 1 }, wu = { key: 2 }, Tu = { class: "template-library__section-title flex gap-2 items-center [margin:4px_0_10px] [font-size:13px]" }, Eu = ["aria-pressed", "onClick"], Du = { class: "template-library__card-art grid w-full [place-items:center] h-26.5 [color:var(--td-brand-color)]" }, Ou = { class: "template-library__card-body flex flex-1 flex-col min-w-0 gap-1.75 p-3" }, ku = { class: "template-library__card-name font-semibold wrap-anywhere" }, Au = {
	key: 0,
	class: "template-library__card-description overflow-hidden text-ink-dim text-compact [display:-webkit-box]"
}, ju = { class: "template-library__card-meta flex flex-wrap gap-2 text-ink-dim text-caption [margin-top:auto]" }, Mu = { key: 0 }, Nu = {
	key: 0,
	class: "template-library__selected absolute top-2 right-2 text-caption rounded text-on-accent [padding:3px_6px] bg-accent-solid"
}, Pu = {
	key: 0,
	class: "template-library__summary"
}, Fu = ["aria-label"], Iu = { class: "template-library__preview-header flex-none overflow-auto [max-height:35%]" }, Lu = { class: "template-library__eyebrow text-ink-dim text-compact" }, Ru = { class: "template-library__preview-name wrap-anywhere [margin:6px_0] [font-size:17px]" }, zu = {
	key: 0,
	class: "template-library__preview-description text-ink-dim text-xs [margin:0_0_10px]"
}, Bu = { class: "template-library__preview-meta flex flex-wrap gap-2 text-ink-dim text-compact" }, Vu = { key: 0 }, Hu = { key: 1 }, Uu = { key: 2 }, Wu = { key: 3 }, Gu = { class: "template-library__viewport relative flex flex-1 min-h-0 overflow-hidden border border-edge bg-panel rounded-lg" }, Ku = ["title"], qu = {
	key: 0,
	class: "template-library__state flex flex-1 flex-col items-center justify-center gap-2 text-center",
	role: "status"
}, Ju = {
	key: 1,
	class: "template-library__state template-library__state--error text-danger flex flex-1 flex-col items-center justify-center gap-2 text-center",
	role: "alert"
}, Yu = {
	key: 0,
	class: "template-library__preview-controls flex flex-wrap items-center gap-2 text-ink-dim text-compact"
}, Xu = ["disabled"], Zu = ["disabled"], Qu = ["aria-label"], $u = ["aria-label"], ed = ["aria-pressed"], td = {
	key: 1,
	class: "template-library__state flex flex-1 flex-col items-center justify-center gap-2 text-center"
}, nd = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "template-library-dialog",
	setup(e) {
		let t = k(), n = t.store(), { catalog: r, invalidate: i, load: a, loading: o } = Ql(t), { currentPage: s, fitMode: c, frameRef: l, loadedDocument: u, loading: d, pageCount: f, renderError: p, reset: m, retry: h, select: g, selectedEntry: _, selectPage: v, setFitMode: y, setZoom: b, zoom: x } = $l(t), S = B(""), C = B("all"), w = B(null), E = B("grid"), D = B(!1), O = B(!1), ee = B(!1), te = t.templateLibrary.list(), ne = B(te.find((e) => e.create)?.id), re = t.events.on("plugin:registered", Ce), ie = t.events.on("plugin:disposed", Ce), ae = t.events.on("plugin:state-changed", ({ status: e }) => {
			(e === "enabled" || e === "disabled" || e === "failed") && Ce();
		}), oe = F(() => [{
			count: ce.value,
			label: I("designer.templateLibrary.filterAll"),
			value: "all"
		}, ...r.value.sections.map((e) => ({
			count: e.entries.length,
			label: e.title,
			value: e.providerId
		}))]), se = F(() => {
			let e = S.value.trim().toLowerCase();
			return r.value.sections.filter((e) => C.value === "all" || e.providerId === C.value).map((t) => ({
				entries: t.entries.filter((t) => (!e || t.name.toLowerCase().includes(e) || (t.description ?? "").toLowerCase().includes(e) || (t.category ?? "").toLowerCase().includes(e)) && (w.value === null || t.category === w.value)),
				providerId: t.providerId,
				title: t.title
			})).filter((e) => e.entries.length > 0);
		}), ce = F(() => r.value.sections.reduce((e, t) => e + t.entries.length, 0)), ue = F(() => {
			let e = /* @__PURE__ */ new Map();
			for (let t of r.value.sections) for (let n of t.entries) n.category && e.set(n.category, (e.get(n.category) ?? 0) + 1);
			return [...e].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => ({
				count: t,
				label: e
			}));
		}), fe = F(() => se.value.reduce((e, t) => e + t.entries.length, 0)), pe = F(() => S.value.trim() !== "" || C.value !== "all" || w.value !== null), me = F(() => {
			let e = _.value;
			if (e && !ee.value) return r.value.sections.find((t) => t.entries.includes(e))?.title;
		}), he = F(() => {
			let e = u.value;
			if (!e || e.pages.length === 0) return;
			let t = e.pages[0];
			return {
				pageCount: e.pages.length,
				pageSize: {
					height: t.height,
					width: t.width
				}
			};
		}), ge = F(() => [{
			id: "cancel",
			slots: { icon: () => [U(T, {
				class: "h-3.5 w-3.5",
				name: "close"
			})] },
			text: I("components.baseDialog.cancelButton"),
			theme: "default",
			variant: "outline"
		}, {
			disabled: !_.value,
			id: "apply",
			loading: ee.value,
			slots: { icon: () => [U(T, {
				class: "h-3.5 w-3.5",
				name: "check"
			})] },
			text: I("designer.templateLibrary.applyButton"),
			theme: "primary",
			variant: "base"
		}]);
		function _e(e) {
			O.value = !1, g(e), D.value = !0;
		}
		function ve() {
			_.value && !ee.value && (O.value = !0);
		}
		async function ye() {
			let e = _.value;
			if (e && !ee.value) {
				O.value = !1, ee.value = !0;
				try {
					await t.commands.dispatch("templateLibrary.apply", e);
				} finally {
					ee.value = !1;
				}
				n.ui.activeDialog.name !== "template-library" && n.ui.toast(I("designer.templateLibrary.appliedMessage", { name: e.name }), "success");
			}
		}
		function be(e) {
			e.id === "cancel" ? n.ui.closeDialog() : e.id === "apply" && ve();
		}
		function xe() {
			let e = t.templateLibrary.list();
			return e.length === te.length && e.every((e, t) => e === te[t]) ? !1 : (te = e, ne.value = e.find((e) => e.create)?.id, !0);
		}
		function Se() {
			xe(), m(), O.value = !1, a();
		}
		function Ce() {
			xe() && n.ui.activeDialog.name === "template-library" && Se();
		}
		async function we(e) {
			if (e === "templateLibrary.delete" && !window.confirm(I("designer.templateLibrary.confirmDelete"))) return;
			let n = e === "templateLibrary.create" || e === "templateLibrary.upload" ? ne.value : _.value;
			await t.commands.dispatch(e, n), Se();
		}
		function Te() {
			S.value = "", C.value = "all", w.value = null;
		}
		return V(se, (e) => {
			let t = _.value;
			t && !e.some((e) => e.entries.includes(t)) && (m(), O.value = !1, D.value = !1);
		}), V([() => n.ui.activeDialog.name, mn.global.locale], ([e], t, n) => {
			n(i), e === "template-library" && (xe(), O.value = !1, m(), D.value = !1, a());
		}, { immediate: !0 }), V(ue, (e) => {
			w.value !== null && !e.some((e) => e.label === w.value) && (w.value = null);
		}), V(oe, (e) => {
			e.some((e) => e.value === C.value) || (C.value = "all");
		}), V(() => n.ui.activeDialog.name, (e, t) => {
			t === "template-library" && e !== "template-library" && (O.value = !1, m());
		}), Wt(() => {
			re(), ie(), ae();
		}), (e, t) => {
			let i = le, a = rt;
			return X(), N(G, null, [R(H(He), {
				visible: H(n).ui.activeDialog.name === "template-library",
				title: H(I)("designer.templateLibrary.dialogTitle"),
				width: "94vw",
				height: "92%",
				"body-padding": !1,
				onClose: t[16] ||= (e) => H(n).ui.closeDialog()
			}, {
				"header-actions": q(() => [
					ne.value ? (X(), z(i, {
						key: 0,
						size: "small",
						variant: "outline",
						onClick: t[0] ||= (e) => we("templateLibrary.create")
					}, {
						default: q(() => [L(W(H(I)("designer.templateLibrary.createTemplate")), 1)]),
						_: 1
					})) : K("", !0),
					ne.value ? (X(), z(i, {
						key: 1,
						size: "small",
						variant: "outline",
						onClick: t[1] ||= (e) => we("templateLibrary.upload")
					}, {
						default: q(() => [L(W(H(I)("designer.templateLibrary.uploadTemplate")), 1)]),
						_: 1
					})) : K("", !0),
					H(_)?.update ? (X(), z(i, {
						key: 2,
						size: "small",
						variant: "outline",
						onClick: t[2] ||= (e) => we("templateLibrary.update")
					}, {
						default: q(() => [L(W(H(I)("designer.templateLibrary.updateTemplate")), 1)]),
						_: 1
					})) : K("", !0),
					H(_)?.remove ? (X(), z(i, {
						key: 3,
						size: "small",
						variant: "outline",
						theme: "danger",
						onClick: t[3] ||= (e) => we("templateLibrary.delete")
					}, {
						default: q(() => [L(W(H(I)("designer.templateLibrary.deleteTemplate")), 1)]),
						_: 1
					})) : K("", !0),
					R(i, {
						variant: "outline",
						theme: "default",
						shape: "square",
						size: "small",
						title: H(I)("designer.templateLibrary.refreshTitle"),
						"aria-label": H(I)("designer.templateLibrary.refreshTitle"),
						disabled: H(o),
						onClick: Se
					}, {
						icon: q(() => [R(T, {
							name: "loop",
							class: J(["h-3.5 w-3.5", { "template-library__spin": H(o) }])
						}, null, 8, ["class"])]),
						_: 1
					}, 8, [
						"title",
						"aria-label",
						"disabled"
					])
				]),
				footer: q(() => [R(H(de), {
					actions: ge.value,
					onClick: be
				}, null, 8, ["actions"])]),
				default: q(() => [P("div", { class: J(["template-library flex flex-1 min-h-0 overflow-hidden", { "template-library--mobile-preview": D.value }]) }, [
					P("aside", {
						class: "template-library__filters overflow-auto border-r border-edge bg-panel-2 [flex:0_0_190px] [padding:20px_12px]",
						"aria-label": H(I)("designer.templateLibrary.filtersTitle")
					}, [
						P("h3", null, W(H(I)("designer.templateLibrary.filtersTitle")), 1),
						P("div", tu, [P("h4", null, W(H(I)("designer.templateLibrary.sourcesTitle")), 1), (X(!0), N(G, null, M(oe.value, (e) => (X(), N("button", {
							key: e.value,
							type: "button",
							class: J(["template-library__filter flex items-center justify-between gap-2 w-full border-0 rounded-md bg-transparent text-ink-dim text-left cursor-pointer p-2", { "template-library__filter--active": C.value === e.value }]),
							"aria-pressed": C.value === e.value,
							onClick: (t) => C.value = e.value
						}, [P("span", null, W(e.label), 1), P("span", null, W(e.count), 1)], 10, nu))), 128))]),
						ue.value.length ? (X(), N("div", ru, [
							P("h4", null, W(H(I)("designer.templateLibrary.categoriesTitle")), 1),
							P("button", {
								type: "button",
								class: J(["template-library__filter flex items-center justify-between gap-2 w-full border-0 rounded-md bg-transparent text-ink-dim text-left cursor-pointer p-2", { "template-library__filter--active": w.value === null }]),
								"aria-pressed": w.value === null,
								onClick: t[4] ||= (e) => w.value = null
							}, [P("span", null, W(H(I)("designer.templateLibrary.filterAll")), 1), P("span", null, W(ce.value), 1)], 10, iu),
							(X(!0), N(G, null, M(ue.value, (e) => (X(), N("button", {
								key: e.label,
								type: "button",
								class: J(["template-library__filter flex items-center justify-between gap-2 w-full border-0 rounded-md bg-transparent text-ink-dim text-left cursor-pointer p-2", { "template-library__filter--active": w.value === e.label }]),
								"aria-pressed": w.value === e.label,
								onClick: (t) => w.value = e.label
							}, [P("span", null, W(e.label), 1), P("span", null, W(e.count), 1)], 10, au))), 128))
						])) : K("", !0)
					], 8, eu),
					P("section", ou, [
						P("div", su, [
							R(a, {
								modelValue: S.value,
								"onUpdate:modelValue": t[5] ||= (e) => S.value = e,
								clearable: "",
								placeholder: H(I)("designer.templateLibrary.searchPlaceholder"),
								"aria-label": H(I)("designer.templateLibrary.searchPlaceholder")
							}, {
								"prefix-icon": q(() => [R(H(qe), { class: "template-library__search-icon" })]),
								_: 1
							}, 8, [
								"modelValue",
								"placeholder",
								"aria-label"
							]),
							P("div", cu, [In(P("select", {
								"onUpdate:modelValue": t[6] ||= (e) => C.value = e,
								"aria-label": H(I)("designer.templateLibrary.sourcesTitle")
							}, [(X(!0), N(G, null, M(oe.value, (e) => (X(), N("option", {
								key: e.value,
								value: e.value
							}, W(e.label) + " (" + W(e.count) + ") ", 9, uu))), 128))], 8, lu), [[Ir, C.value]]), In(P("select", {
								"onUpdate:modelValue": t[7] ||= (e) => w.value = e,
								"aria-label": H(I)("designer.templateLibrary.categoriesTitle")
							}, [P("option", fu, W(H(I)("designer.templateLibrary.allCategories")), 1), (X(!0), N(G, null, M(ue.value, (e) => (X(), N("option", {
								key: e.label,
								value: e.label
							}, W(e.label) + " (" + W(e.count) + ") ", 9, pu))), 128))], 8, du), [[Ir, w.value]])]),
							P("div", mu, [
								P("span", hu, W(H(I)("designer.templateLibrary.resultsCount", { count: fe.value })), 1),
								pe.value ? (X(), N("button", {
									key: 0,
									type: "button",
									class: "template-library__text-button p-0 border-0 bg-transparent cursor-pointer [color:var(--td-brand-color)]",
									onClick: Te
								}, W(H(I)("designer.templateLibrary.clearFilter")), 1)) : K("", !0),
								P("div", {
									class: "template-library__view-switch flex border border-edge [margin-left:auto] p-0.75 [border-radius:7px]",
									"aria-label": H(I)("designer.templateLibrary.viewLabel")
								}, [P("button", {
									type: "button",
									class: J(["template-library__view", { "template-library__view--active": E.value === "grid" }]),
									"aria-pressed": E.value === "grid",
									onClick: t[8] ||= (e) => E.value = "grid"
								}, W(H(I)("designer.templateLibrary.gridView")), 11, _u), P("button", {
									type: "button",
									class: J(["template-library__view", { "template-library__view--active": E.value === "list" }]),
									"aria-pressed": E.value === "list",
									onClick: t[9] ||= (e) => E.value = "list"
								}, W(H(I)("designer.templateLibrary.listView")), 11, vu)], 8, gu)
							])
						]),
						P("div", yu, [H(o) ? (X(), N("div", bu, [R(T, {
							name: "loop",
							class: "template-library__spinner"
						}), L(" " + W(H(I)("designer.templateLibrary.loading")), 1)])) : (X(), N(G, { key: 1 }, [
							se.value.length === 0 ? (X(), N("div", xu, [
								R(T, {
									name: "template",
									class: "template-library__empty-icon w-9 h-9 opacity-50"
								}),
								pe.value && S.value.trim() ? (X(), N("p", Su, W(H(I)("designer.templateLibrary.emptyFiltered", { query: S.value.trim() })), 1)) : pe.value ? (X(), N("p", Cu, W(H(I)("designer.templateLibrary.emptyFilters")), 1)) : (X(), N("p", wu, W(H(I)("designer.templateLibrary.empty")), 1)),
								pe.value ? (X(), z(i, {
									key: 3,
									variant: "text",
									theme: "primary",
									size: "small",
									onClick: Te
								}, {
									default: q(() => [L(W(H(I)("designer.templateLibrary.clearFilter")), 1)]),
									_: 1
								})) : K("", !0)
							])) : K("", !0),
							(X(!0), N(G, null, M(se.value, (e) => (X(), N("div", {
								key: e.providerId,
								class: "template-library__section mb-6"
							}, [P("h4", Tu, [L(W(e.title) + " ", 1), P("span", null, W(e.entries.length), 1)]), P("div", { class: J(["template-library__cards grid gap-2 [grid-template-columns:repeat(auto-fill,_minmax(170px,_1fr))]", { "template-library__cards--list": E.value === "list" }]) }, [(X(!0), N(G, null, M(e.entries, (t) => (X(), N("button", {
								key: `${e.providerId}:${t.id}`,
								type: "button",
								class: J(["template-library__card relative flex flex-col min-w-0 overflow-hidden border border-edge rounded-lg bg-panel text-ink text-left cursor-pointer p-0 hover:[border-color:var(--td-brand-color)] hover:[transform:translateY(-2px)] hover:[box-shadow:0_5px_16px_var(--color-shadow-soft)]", { "template-library__card--active": H(_) === t }]),
								"aria-pressed": H(_) === t,
								onClick: (e) => _e(t)
							}, [
								P("span", Du, [R(T, { name: "template" })]),
								P("span", Ou, [
									P("span", ku, W(t.name), 1),
									t.description ? (X(), N("span", Au, W(t.description), 1)) : K("", !0),
									P("span", ju, [t.category ? (X(), N("span", Mu, W(t.category), 1)) : K("", !0), P("span", null, W(e.title), 1)])
								]),
								H(_) === t ? (X(), N("span", Nu, W(H(I)("designer.templateLibrary.selected")), 1)) : K("", !0)
							], 10, Eu))), 128))], 2)]))), 128)),
							(X(!0), N(G, null, M(H(r).failures, (e) => (X(), N("div", {
								key: e.providerId,
								class: "template-library__failure flex items-center justify-between gap-2 text-danger rounded-md [margin:8px_0] [padding:8px_12px] [border:1px_solid_var(--color-danger)]",
								role: "alert"
							}, [P("span", null, W(H(I)("designer.templateLibrary.providerFailed", { title: e.title })), 1), R(i, {
								variant: "text",
								theme: "primary",
								size: "small",
								onClick: Se
							}, {
								default: q(() => [L(W(H(I)("designer.templateLibrary.retryLabel")), 1)]),
								_: 1
							})]))), 128))
						], 64))]),
						!H(o) && ce.value > 0 ? (X(), N("p", Pu, W(H(I)("designer.templateLibrary.summary", {
							count: ce.value,
							sources: H(r).sections.length
						})), 1)) : K("", !0)
					]),
					P("section", {
						class: "template-library__preview flex flex-col gap-2 min-h-0 border-l border-edge bg-panel-2 [flex:0_1_42%] min-w-75 p-5",
						"aria-label": H(I)("designer.templateLibrary.previewTitle")
					}, [P("button", {
						type: "button",
						class: "template-library__back border-0 bg-transparent cursor-pointer hidden [align-self:flex-start] [padding:5px_0] [color:var(--td-brand-color)]",
						onClick: t[10] ||= (e) => D.value = !1
					}, W(H(I)("designer.templateLibrary.backToResults")), 1), H(_) ? (X(), N(G, { key: 0 }, [
						P("header", Iu, [
							P("span", Lu, W(H(I)("designer.templateLibrary.previewTitle")), 1),
							P("h4", Ru, W(H(_).name), 1),
							H(_).description ? (X(), N("p", zu, W(H(_).description), 1)) : K("", !0),
							P("div", Bu, [
								me.value ? (X(), N("span", Vu, W(me.value), 1)) : K("", !0),
								H(_).category ? (X(), N("span", Hu, W(H(_).category), 1)) : K("", !0),
								he.value ? (X(), N("span", Uu, W(H(I)("designer.templateLibrary.pageCount", { count: he.value.pageCount })), 1)) : K("", !0),
								he.value ? (X(), N("span", Wu, W(H(I)("designer.templateLibrary.pageSize", {
									height: he.value.pageSize.height,
									width: he.value.pageSize.width
								})), 1)) : K("", !0)
							])
						]),
						P("div", Gu, [In(P("iframe", {
							ref_key: "frameRef",
							ref: l,
							title: H(_).name,
							class: "template-library__frame w-full h-full border-0 [background:var(--color-canvas)]",
							tabindex: "-1",
							sandbox: "allow-same-origin allow-modals"
						}, null, 8, Ku), [[Rr, !H(d) && !H(p)]]), H(d) ? (X(), N("div", qu, [R(T, {
							name: "loop",
							class: "template-library__spinner"
						}), P("span", null, W(H(I)("designer.templateLibrary.previewLoading")), 1)])) : H(p) ? (X(), N("div", Ju, [P("span", null, W(H(I)("designer.templateLibrary.previewFailed")), 1), R(i, {
							variant: "outline",
							size: "small",
							onClick: H(h)
						}, {
							default: q(() => [L(W(H(I)("designer.templateLibrary.previewRetry")), 1)]),
							_: 1
						}, 8, ["onClick"])])) : K("", !0)]),
						!H(d) && !H(p) && H(f) ? (X(), N("div", Yu, [
							P("button", {
								type: "button",
								disabled: H(s) <= 1,
								onClick: t[11] ||= (e) => H(v)(H(s) - 1)
							}, W(H(I)("designer.templateLibrary.previousPage")), 9, Xu),
							P("span", null, W(H(s)) + " / " + W(H(f)), 1),
							P("button", {
								type: "button",
								disabled: H(s) >= H(f),
								onClick: t[12] ||= (e) => H(v)(H(s) + 1)
							}, W(H(I)("designer.templateLibrary.nextPage")), 9, Zu),
							t[19] ||= P("span", { class: "template-library__control-spacer flex-1" }, null, -1),
							P("button", {
								type: "button",
								"aria-label": H(I)("designer.templateLibrary.zoomOut"),
								onClick: t[13] ||= (e) => H(b)(H(x) / 1.2)
							}, " − ", 8, Qu),
							P("span", null, W(Math.round(H(x) * 100)) + "%", 1),
							P("button", {
								type: "button",
								"aria-label": H(I)("designer.templateLibrary.zoomIn"),
								onClick: t[14] ||= (e) => H(b)(H(x) * 1.2)
							}, " + ", 8, $u),
							P("button", {
								type: "button",
								"aria-pressed": H(c) === "page",
								onClick: t[15] ||= (e) => H(y)("page")
							}, W(H(I)("designer.templateLibrary.fitPage")), 9, ed)
						])) : K("", !0)
					], 64)) : (X(), N("div", td, [R(T, {
						name: "template",
						class: "template-library__empty-icon w-9 h-9 opacity-50"
					}), P("p", null, W(H(I)("designer.templateLibrary.previewEmptyHint")), 1)]))], 8, Fu)
				], 2)]),
				_: 1
			}, 8, ["visible", "title"]), O.value ? (X(), z(H(He), {
				key: 0,
				visible: !0,
				title: H(I)("designer.templateLibrary.applyConfirmButton"),
				width: 400,
				"confirm-btn": {
					content: H(I)("designer.templateLibrary.applyConfirmButton"),
					theme: "danger"
				},
				onConfirm: ye,
				onCancel: t[17] ||= (e) => O.value = !1,
				onClose: t[18] ||= (e) => O.value = !1
			}, {
				default: q(() => [L(W(H(I)("designer.templateLibrary.dirtyWarning")), 1)]),
				_: 1
			}, 8, ["title", "confirm-btn"])) : K("", !0)], 64);
		};
	}
}), [["__scopeId", "data-v-a6b4e438"]]);
function rd(e, t, n, r) {
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
function id(e, t, n) {
	if (n.id) {
		let r = rd(e, t, n, new AbortController().signal), i = n.input && r ? O(r)?.element : r;
		return i && ad(i) ? i : void 0;
	}
	let r = t.ownerDocument, i = e.store(), a = n.selector;
	if (!a) return;
	let o = t;
	if (a.startsWith("$dialog")) {
		let e = [...r.querySelectorAll(".base-dialog-host[data-dialog-active=\"true\"] .base-dialog")].filter(ad).at(-1);
		if (!e) return;
		if (a = a.slice(7).trim(), !a) return e;
		o = e;
	} else a === "$page" ? a = `[data-page-surface="${i.scope.active.id}"]` : a === "$pageRow" ? a = `[data-page-row="${i.page.activeId}"]` : a === "$templateRow" ? a = `[data-template-id="${i.template.list.find((e) => !e.builtin)?.id}"]` : a === "$evenPage" ? a = `[data-page-surface="${i.template.editingTemplate?.evenPage?.id}"]` : (a.startsWith(".t-select-option") || a.startsWith("[data-context-menu]") || a.startsWith("[data-command=")) && (o = r);
	let s = [...o.querySelectorAll(a)];
	return o === t && t.matches(a) && s.unshift(t), (n.input ? s.flatMap((e) => O(e)?.element ?? []) : s).find((e) => ad(e) && (!n.text || e.textContent?.trim() === n.text));
}
function ad(e) {
	return e instanceof Element && e.isConnected && !e.closest(".base-dialog-host[data-dialog-active=\"false\"]") && e.getClientRects().length > 0 && getComputedStyle(e).visibility !== "hidden";
}
function od(e, t) {
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
async function sd(e, t, n, r, i = 60) {
	let a = n.target.id ? e.guides.get(n.target.id) : void 0, o = {
		editor: e,
		params: n.target.params ?? {},
		root: t,
		signal: r
	};
	if (a && !id(e, t, n.target)) {
		let s = a.ensureMounted;
		if (!rd(e, t, n.target, r)?.isConnected && s && await cd((e) => s({
			...o,
			signal: e
		}), r, i * 50) === void 0 && !r.aborted) throw new Gn(I("designer.tutorialPlayback.targetUnavailable", { action: n.title }), { code: "tutorial.target-unavailable" });
		let c = a.ensureVisible;
		if (!r.aborted && !id(e, t, n.target) && c && await cd((e) => c({
			...o,
			signal: e
		}), r, i * 50) === void 0 && !r.aborted) throw new Gn(I("designer.tutorialPlayback.targetUnavailable", { action: n.title }), { code: "tutorial.target-unavailable" });
		if (!r.aborted) {
			await Un();
			let s = a.waitForElement;
			if (!id(e, t, n.target) && s) {
				let e = await cd((e) => s({
					...o,
					signal: e
				}), r, i * 50), t = n.target.input && e ? O(e)?.element : e;
				if (t && ad(t)) return t.scrollIntoView({
					block: "nearest",
					inline: "nearest"
				}), t;
			}
		}
	}
	for (let a = 0; a < i; a += 1) {
		if (r.aborted) return;
		let i = id(e, t, n.target);
		if (i) return i.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		}), i;
		await od(50, r);
	}
	throw new Gn(I("designer.tutorialPlayback.targetUnavailable", { action: n.title }), { code: "tutorial.target-unavailable" });
}
async function cd(e, t, n) {
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
async function ld(e, t = "") {
	let n = O(e);
	if (!n || !n.editable()) throw new Gn(I("designer.tutorialPlayback.inputUnavailable"), { code: "tutorial.input-unavailable" });
	let r = n.element;
	ud(r, !0), n.write(t), r.dispatchEvent(new Event("input", { bubbles: !0 })), r.dispatchEvent(new Event("change", { bubbles: !0 })), await Un(), ud(r, !1);
}
function ud(e, t) {
	let [n, r] = t ? ["focus", "focusin"] : ["blur", "focusout"], i = !1, a = () => {
		i = !0;
	};
	e.addEventListener(n, a, { once: !0 }), t ? e.focus() : e.blur(), e.removeEventListener(n, a), i || (e.dispatchEvent(new FocusEvent(n)), e.dispatchEvent(new FocusEvent(r, { bubbles: !0 })));
}
function dd(e) {
	if (e.matches(":disabled, [aria-disabled=\"true\"]")) throw new Gn(I("designer.tutorialPlayback.inputUnavailable"), { code: "tutorial.control-disabled" });
	let t = e.querySelector("input[type=\"checkbox\"]");
	t ? t.click() : e.click();
}
async function fd(e, t, n, r, i) {
	for (let a of n.inputs ?? []) {
		let o = await sd(e, t, {
			...n,
			target: a.target
		}, r, i);
		if (!o || r.aborted) return;
		a.value === void 0 ? (dd(o), await Un()) : await ld(o, a.value);
	}
}
function pd(e, t) {
	return e.store().element.find(t) !== null;
}
async function md(e, t) {
	let { elementId: n } = t;
	if (t.command && !(n && pd(e, n)) && await e.commands.execute(t.command, ...t.args?.(e) ?? []), n && pd(e, n)) {
		await e.commands.execute("selection.set", [n]);
		let t = e.store().element.get(n);
		t && or(e.store(), t.type);
	}
}
async function hd(e, t, n, r, i = {}) {
	let a = i.replay === !0, o = (e) => a ? Promise.resolve() : od(e, r), s = await sd(e, t, n, r, a ? 20 : 60);
	if (s && !r.aborted && (await o(350), !r.aborted)) {
		if (n.action === "input") n.inputs ? await fd(e, t, n, r, a ? 20 : 60) : await ld(s, n.value);
		else if (n.action === "contextmenu") {
			let e = s.getBoundingClientRect();
			s.dispatchEvent(new MouseEvent("contextmenu", {
				bubbles: !0,
				button: 2,
				cancelable: !0,
				clientX: e.left + Math.min(e.width / 2, 50),
				clientY: e.top + Math.min(e.height / 2, 20)
			}));
		} else n.action === "click" ? dd(s) : n.action === "draw" ? (await o(650), r.aborted || await md(e, n)) : n.action === "command" && !r.aborted && n.command && await e.commands.execute(n.command, ...n.args?.(e) ?? []);
		await Un(), await o(300);
	}
}
async function gd(e, t, n, r, i) {
	let a = n[r];
	if (!a) return;
	let o = e.store().ui;
	async function s(r, a) {
		for (let o = r; o < a && !i.aborted; o += 1) {
			let r = n[o];
			r.action !== "inspect" && await hd(e, t, r, i, { replay: !0 });
		}
	}
	async function c() {
		o.closeDialog(), o.closeContextMenu(), await Un();
	}
	async function l() {
		if (!(a.requires !== "template-edit" || e.store().template.editingTemplate)) {
			for (let [e, t] of n.entries()) t.provides === a.requires && await s(e, e + 1);
			await c();
		}
	}
	let u = n.findIndex((e) => e.group === a.group), d = a.target.id === "canvas.element" ? String(a.target.params?.id ?? "") : void 0, f = d ? n.findIndex((e) => e.elementId === d) : -1;
	if (await c(), await l(), d && f >= 0 && f < u && !pd(e, d)) {
		let e = n[f].group, t = n.findIndex((t) => t.group === e), r = t;
		for (; n[r + 1]?.group === e;) r += 1;
		await s(t, r + 1), await c();
	}
	await s(u, r);
}
var _d = ".tutorial-guide__transport, .tutorial-guide__popup", vd = /* @__PURE__ */ "auxclick.click.dblclick.mousedown.mousemove.mouseup.pointerdown.pointermove.pointerup.touchend.touchmove.touchstart.beforeinput.compositionstart.compositionupdate.compositionend.input.change.copy.cut.keydown.keypress.keyup.paste.contextmenu.drag.dragstart.dragover.drop.selectstart.wheel".split(".");
function yd(e) {
	return e.composedPath().some((e) => e instanceof Element && e.closest(_d) !== null);
}
function bd(e, t) {
	let n = e.store().tutorial, r;
	function i(e) {
		if (n.phase !== "running") return;
		let t = (e.type === "input" || e.type === "change") && e.target instanceof Element && e.target.matches("input[type=\"checkbox\"], input[type=\"radio\"]");
		n.executing && (!e.isTrusted || t) || yd(e) || (e.preventDefault(), e.stopImmediatePropagation());
	}
	function a(e) {
		let t = e.defaultView;
		if (t && r !== t) {
			o(), r = t;
			for (let e of vd) t.addEventListener(e, i, {
				capture: !0,
				passive: !1
			});
		}
	}
	function o() {
		for (let e of vd) r?.removeEventListener(e, i, !0);
		r = void 0;
	}
	V(() => ({
		phase: n.phase,
		root: t()
	}), ({ phase: e, root: t }) => {
		e === "running" && t ? a(t.ownerDocument) : o();
	}, {
		flush: "sync",
		immediate: !0
	}), ar(o);
}
function xd(e, t) {
	let n = e.store().tutorial, r = B(), i = B({
		height: 0,
		left: 0,
		top: 0,
		width: 0
	}), a = new AbortController(), o = 0, s, c = 0, l = !1, u = {
		attempts: 0,
		index: -1
	}, d = F(() => ({
		height: `${i.value.height}px`,
		left: `${i.value.left}px`,
		top: `${i.value.top}px`,
		width: `${i.value.width}px`
	})), f = F(() => {
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
	function m() {
		let a = t(), o = n.operation;
		if (!a || !o || n.phase !== "running") {
			r.value = void 0;
			return;
		}
		let s = id(e, a, o.target), u = s?.getBoundingClientRect();
		if (!s || !u || u.width <= 0 || u.height <= 0) {
			r.value = void 0, h();
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
	function h() {
		if (n.executing || n.transition !== "idle" || n.phase !== "running" || n.unavailable) {
			c = 0;
			return;
		}
		let e = performance.now();
		c ? e - c > 1200 && (c = 0, g().catch(E)) : c = e;
	}
	async function g() {
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
				await E(new Gn(I("designer.tutorialPlayback.targetUnavailable", { action: e?.title ?? "" }), { code: "tutorial.target-unavailable" }));
			}
		} else await v(async (t) => {
			let a = n.operations[i];
			try {
				await sd(e, r, a, t, 20);
				return;
			} catch (e) {
				if (t.aborted || !(e instanceof Gn) || e.code !== "tutorial.target-unavailable") throw e;
			}
			a.restore ? await _(t) : await gd(e, r, n.operations, i, t), await sd(e, r, a, t, 20);
		});
	}
	async function _(t) {
		let r = n.operation;
		if (!r?.restore || t.aborted) return;
		let i = n.playing;
		n.setExecuting(!1), n.seek(n.current, !0), n.setExecuting(!0), await Un(), t.aborted || n.phase !== "running" || (r.restore(e), await Un(), n.setPlaying(i));
	}
	function v(e) {
		let t = a.signal;
		n.setExecuting(!0);
		let r = e(t).catch(async (e) => {
			t.aborted || await E(e);
		}).finally(() => {
			s === r && (s = void 0, n.setExecuting(!1));
		});
		return s = r, r;
	}
	async function y() {
		let r = t(), i = n.operation;
		if (!r || !i || n.executing || n.transition !== "idle" || n.phase !== "running") return;
		let a = n.current;
		await v(async (t) => {
			try {
				await hd(e, r, i, t);
			} catch (a) {
				if (t.aborted || !(a instanceof Gn) || a.code !== "tutorial.target-unavailable") throw a;
				i.restore ? await _(t) : await gd(e, r, n.operations, n.current, t), await hd(e, r, i, t);
			}
			!t.aborted && n.phase === "running" && n.current === a && n.next();
		});
	}
	async function b() {
		let e = ++o, t = a.signal;
		for (; n.playing && n.phase === "running" && !t.aborted && e === o && (await od(n.interval, t), n.playing && !t.aborted && e === o);) await y();
	}
	function x(e) {
		n.transition === e && n.setTransition("idle");
	}
	async function S(r) {
		let i = t();
		if (!i || n.transition === "seeking" || n.phase !== "running" || !Number.isInteger(r) || r < 0 || r >= n.operations.length || r === n.current) return;
		n.setTransition("seeking"), n.setPlaying(!1), o += 1;
		let c = a.signal;
		a.abort();
		try {
			if (await s, a.signal !== c || n.phase !== "running" || (a = new AbortController(), n.seek(r), n.phase !== "running")) return;
			await v(async (t) => {
				if (await Un(), t.aborted || n.phase !== "running") return;
				let a = n.operation;
				if (a?.restore) a.restore(e), await Un();
				else for (let a of n.operations.slice(0, r)) {
					if (t.aborted) return;
					a.action !== "inspect" && (await hd(e, i, a, t, { replay: !0 }), await od(350, t));
				}
			});
		} catch (e) {
			await E(e);
		} finally {
			x("seeking");
		}
	}
	async function C() {
		if (n.setPlaying(!1), o += 1, s && n.transition === "idle") {
			n.setTransition("stopping");
			try {
				await s;
			} finally {
				x("stopping");
			}
		}
	}
	function w() {
		n.playing ? C().catch(E) : n.transition === "idle" && n.setPlaying(!0);
	}
	async function T() {
		await S(n.current - 1);
	}
	async function E(t) {
		n.setPlaying(!1), t instanceof Gn && t.code === "tutorial.target-unavailable" && n.setUnavailable(n.operation?.title ?? ""), await e.errors.capture(t, { source: "tutorial.playback" });
	}
	return bd(e, t), p(m), V(() => n.current, () => {
		r.value = void 0;
	}, { flush: "sync" }), V(() => n.playing, (e) => {
		e ? b().catch(E) : o += 1;
	}, { immediate: !0 }), V(() => n.phase, (e) => {
		a.abort(), a = new AbortController(), o += 1, e !== "running" && (n.setPlaying(!1), n.setTransition("idle"));
	}, { flush: "sync" }), ar(() => {
		a.abort(), n.setPlaying(!1);
	}), {
		demonstrate: y,
		drawingStyle: f,
		pause: C,
		previous: T,
		ringStyle: d,
		seek: S,
		target: r,
		togglePlaying: w
	};
}
var Sd = { class: "tutorial-guide__intro" }, Cd = { class: "tutorial-guide__actions" }, wd = { class: "tutorial-guide__gesture" }, Td = ["aria-busy", "aria-label"], Ed = {
	key: 0,
	role: "alert"
}, Dd = /* @__PURE__ */ Z({
	__name: "tutorial-dialog",
	setup(e) {
		let t = k(), n = t.store().tutorial, r = B(), i = B(), a = B(), o = d(a), s = Se(), c = xd(t, () => r.value?.closest("[data-designer-shell]") ?? void 0), l = F(() => {
			let e = {
				bottom: a.value ? s.height.value - o.top.value + 12 : 12,
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
		}), u = F(() => n.operations.map((e, t) => ({
			label: I("designer.tutorialPlayback.stepOption", {
				description: e.body,
				number: t + 1,
				title: e.title
			}),
			value: t
		}))), f = F(() => [
			{
				label: I("designer.tutorialPlayback.slow"),
				value: 2400
			},
			{
				label: I("designer.tutorialPlayback.normal"),
				value: 1200
			},
			{
				label: I("designer.tutorialPlayback.fast"),
				value: 200
			}
		]), p = {
			attach: ".tutorial-guide__transport",
			zIndex: 20004
		}, m = {
			...p,
			overlayInnerClassName: "tutorial-guide__step-options",
			overlayInnerStyle: {
				maxWidth: "calc(100vw - 48px)",
				width: "360px"
			}
		};
		function h(e, ...n) {
			t.commands.dispatch(e, ...n);
		}
		function g() {
			h("tutorial.exit");
		}
		function _(e) {
			typeof e == "number" && n.setInterval(e);
		}
		function v(e) {
			typeof e == "number" && c.seek(e);
		}
		return V([
			c.ringStyle,
			l,
			() => c.target.value
		], async () => {
			await Un(), i.value?.getPopper?.()?.setOptions({ modifiers: l.value.modifiers }), i.value?.update?.();
		}, { flush: "post" }), (e, t) => {
			let o = le, s = Te, d = ft, y = Re;
			return X(), N("div", {
				ref_key: "host",
				ref: r,
				class: "tutorial-guide"
			}, [
				R(H(He), {
					visible: H(n).phase === "list",
					title: H(I)("designer.tutorial.menuItem"),
					width: 520,
					"confirm-btn": H(I)("designer.tutorial.start"),
					onConfirm: t[0] ||= (e) => h("tutorial.start", "delivery"),
					onCancel: t[1] ||= (e) => H(n).close(),
					onClose: t[2] ||= (e) => H(n).close()
				}, {
					default: q(() => [P("p", Sd, W(H(I)("designer.tutorial.intro")), 1)]),
					_: 1
				}, 8, [
					"visible",
					"title",
					"confirm-btn"
				]),
				H(n).phase === "running" && H(n).transition !== "seeking" && H(c).target.value ? (X(), z(s, {
					key: H(n).current,
					ref_key: "popup",
					ref: i,
					visible: !0,
					"trigger-element": ".tutorial-guide__focus",
					placement: "bottom-left",
					"overlay-class-name": ["tutorial-guide__popup", H(Qa)],
					"popper-options": l.value,
					"z-index": 20003
				}, {
					content: q(() => [P("div", {
						class: "tutorial-guide__content",
						onKeydown: t[6] ||= Q(() => {}, ["stop"]),
						onKeypress: t[7] ||= Q(() => {}, ["stop"]),
						onKeyup: t[8] ||= Q(() => {}, ["stop"])
					}, [
						P("strong", null, W(H(n).operation?.title), 1),
						P("p", null, W(H(n).operation?.body), 1),
						P("div", Cd, [
							R(o, {
								variant: "text",
								onClick: g
							}, {
								default: q(() => [L(W(H(I)("designer.tutorial.exit")), 1)]),
								_: 1
							}),
							R(o, {
								variant: "outline",
								"aria-pressed": H(n).playing,
								loading: H(n).transition === "stopping",
								disabled: H(n).transition !== "idle",
								onClick: t[3] ||= (e) => H(c).togglePlaying()
							}, {
								default: q(() => [L(W(H(I)(H(n).playing ? "designer.tutorialPlayback.pause" : "designer.tutorialPlayback.play")), 1)]),
								_: 1
							}, 8, [
								"aria-pressed",
								"loading",
								"disabled"
							]),
							R(o, {
								variant: "outline",
								disabled: H(n).current === 0 || H(n).transition !== "idle",
								onClick: t[4] ||= (e) => H(c).previous()
							}, {
								default: q(() => [L(W(H(I)("designer.tutorialPlayback.previous")), 1)]),
								_: 1
							}, 8, ["disabled"]),
							R(o, {
								loading: H(n).executing || H(n).transition !== "idle",
								onClick: t[5] ||= (e) => H(c).demonstrate()
							}, {
								default: q(() => [L(W(H(I)("designer.tutorialPlayback.demonstrate")), 1)]),
								_: 1
							}, 8, ["loading"])
						])
					], 32)]),
					_: 1
				}, 8, ["overlay-class-name", "popper-options"])) : K("", !0),
				(X(), z(Rn, { to: "body" }, [H(n).phase === "running" ? (X(), N(G, { key: 0 }, [
					P("div", {
						class: J(["tutorial-guide__shield", H(Qa)]),
						"aria-hidden": "true"
					}, null, 2),
					H(c).target.value ? (X(), N("div", {
						key: H(n).current,
						class: "tutorial-guide__focus",
						style: Y(H(c).ringStyle.value),
						"aria-hidden": "true"
					}, [P("span", { class: J(["tutorial-guide__pulse", { "tutorial-guide__pulse--right": H(n).operation?.action === "contextmenu" }]) }, null, 2), P("span", wd, W(H(I)(`designer.tutorialPlayback.${H(n).operation?.action}Gesture`)), 1)], 4)) : K("", !0),
					H(n).operation?.drawing && H(c).target.value ? (X(), N("div", {
						key: 1,
						class: J(["tutorial-guide__drawing", { "tutorial-guide__drawing--active": H(n).executing }]),
						style: Y(H(c).drawingStyle.value),
						"aria-hidden": "true"
					}, [...t[18] ||= [P("svg", {
						class: "tutorial-guide__cursor",
						width: "24",
						height: "28",
						viewBox: "0 0 24 28"
					}, [P("path", {
						d: "M2 2 21 17 12 18 8 26Z",
						fill: "currentColor",
						stroke: "var(--color-handle)",
						"stroke-width": "2"
					})], -1)]], 6)) : K("", !0),
					P("div", {
						ref_key: "transport",
						ref: a,
						class: J(["tutorial-guide__transport", H(Qa)]),
						role: "region",
						"aria-busy": H(n).executing || H(n).transition !== "idle",
						"aria-label": H(I)("designer.tutorialPlayback.transportLabel"),
						onKeydown: t[13] ||= Q(() => {}, ["stop"]),
						onKeypress: t[14] ||= Q(() => {}, ["stop"]),
						onKeyup: t[15] ||= Q(() => {}, ["stop"])
					}, [
						H(n).unavailable ? (X(), N("span", Ed, W(H(I)("designer.tutorialPlayback.targetUnavailable", { action: H(n).unavailable })), 1)) : K("", !0),
						P("strong", null, W(H(n).course ? H(sr)(H(n).course.id, "title") : ""), 1),
						P("span", null, W(H(I)("designer.tutorialPlayback.progress", {
							current: H(n).current + 1,
							total: H(n).operations.length
						})), 1),
						R(y, {
							loading: H(n).transition === "seeking",
							size: "small"
						}, {
							default: q(() => [R(d, {
								class: "tutorial-guide__step-select",
								value: H(n).current,
								options: u.value,
								"popup-props": m,
								disabled: H(n).transition === "seeking",
								"aria-label": H(I)("designer.tutorialPlayback.jumpToStep"),
								onFocus: t[9] ||= (e) => H(c).pause(),
								onChange: v
							}, null, 8, [
								"value",
								"options",
								"disabled",
								"aria-label"
							])]),
							_: 1
						}, 8, ["loading"]),
						R(o, {
							variant: "outline",
							"aria-pressed": H(n).playing,
							loading: H(n).transition === "stopping",
							disabled: H(n).transition === "seeking",
							onClick: t[10] ||= (e) => H(c).togglePlaying()
						}, {
							default: q(() => [L(W(H(I)(H(n).playing ? "designer.tutorialPlayback.pause" : "designer.tutorialPlayback.play")), 1)]),
							_: 1
						}, 8, [
							"aria-pressed",
							"loading",
							"disabled"
						]),
						R(o, {
							variant: "outline",
							disabled: H(n).current === 0 || H(n).transition !== "idle",
							onClick: t[11] ||= (e) => H(c).previous()
						}, {
							default: q(() => [L(W(H(I)("designer.tutorialPlayback.previous")), 1)]),
							_: 1
						}, 8, ["disabled"]),
						R(o, {
							variant: "outline",
							loading: H(n).executing || H(n).transition !== "idle",
							onClick: t[12] ||= (e) => H(c).demonstrate()
						}, {
							default: q(() => [L(W(H(I)(H(n).unavailable ? "designer.tutorialPlayback.retry" : "designer.tutorialPlayback.demonstrate")), 1)]),
							_: 1
						}, 8, ["loading"]),
						R(d, {
							class: "tutorial-guide__speed-select",
							value: H(n).interval,
							options: f.value,
							"popup-props": p,
							"aria-label": H(I)("designer.tutorialPlayback.speed"),
							onChange: _
						}, null, 8, [
							"value",
							"options",
							"aria-label"
						]),
						P("button", { onClick: g }, W(H(I)("designer.tutorial.exit")), 1)
					], 42, Td)
				], 64)) : K("", !0)])),
				R(H(He), {
					visible: H(n).phase === "finish",
					title: H(I)("designer.tutorial.resultTitle"),
					"close-on-esc-keydown": !1,
					"before-close": () => !1,
					"confirm-btn": H(I)("designer.tutorial.keep"),
					"cancel-btn": H(I)("designer.tutorial.restore"),
					onConfirm: t[16] ||= (e) => h("tutorial.finish", !0),
					onCancel: t[17] ||= (e) => h("tutorial.finish", !1)
				}, {
					default: q(() => [P("p", null, W(H(I)("designer.tutorial.resultBody")), 1)]),
					_: 1
				}, 8, [
					"visible",
					"title",
					"confirm-btn",
					"cancel-btn"
				])
			], 512);
		};
	}
}), Od = { class: "flex h-7 shrink-0 flex-nowrap items-center border-t border-edge bg-panel pl-3 pr-2 text-compact text-ink-dim" }, kd = { class: "flex min-w-0 flex-1 flex-nowrap items-center gap-4 overflow-hidden whitespace-nowrap" }, Ad = { class: "flex shrink-0 items-center gap-2" }, jd = { class: "text-ink-dim/70" }, Md = { class: "w-14 tabular-nums" }, Nd = { class: "text-ink-dim/70" }, Pd = { class: "w-14 tabular-nums" }, Fd = { class: "text-ink-dim/60" }, Id = ["title"], Ld = { class: "w-16 tabular-nums" }, Rd = { class: "flex shrink-0 items-center gap-1" }, zd = { class: "text-accent" }, Bd = { key: 1 }, Vd = ["title"], Hd = { class: "text-ink-dim/70" }, Ud = /* @__PURE__ */ Z({
	__name: "info-bar",
	emits: ["fit"],
	setup(e, { emit: t }) {
		let n = t, { onVisibleChange: r, popupProps: i } = E({}, "popup"), a = k().store(), { commands: o } = k(), s = F({
			get: function() {
				return a.view.settings.pageLayoutMode;
			},
			set: function(e) {
				o.dispatch(`view.pageLayout.${e}`);
			}
		}), c = F(() => a.page.activeIndex), l = F(() => {
			let e = a.view.cursorContent, t = e && a.view.toLocal(a.page.activeId, e);
			return t ? {
				x: t.x,
				y: t.y
			} : {
				x: null,
				y: null
			};
		}), u = F(() => {
			let e = a.selection.bounds;
			if (!e || a.selection.nodes.length === 0) return {
				key: "designer.infoBar.unavailableValue",
				parameters: {}
			};
			if (a.selection.nodes.length === 1) {
				let e = a.selection.nodes[0];
				return hr(e) && e.points && e.points.length >= 2 ? {
					key: "designer.infoBar.lineLength",
					parameters: { length: Sr(e.points).toFixed(1) }
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
		}), d = F(() => [
			{
				label: I("designer.infoBar.verticalLayoutOption"),
				value: "vertical"
			},
			{
				label: I("designer.infoBar.horizontalLayoutOption"),
				value: "horizontal"
			},
			{
				label: I("designer.infoBar.gridLayoutOption"),
				value: "grid"
			}
		]), f = F(() => [
			{
				id: "zoom-out",
				onClick: m,
				shape: "square",
				slots: { icon: () => [U(T, {
					class: "h-3.5 w-3.5",
					name: "minus"
				})] },
				title: I("designer.infoBar.zoomOutTitle"),
				variant: "outline"
			},
			{
				class: "min-w-20 tabular-nums text-center hover:text-ink",
				id: "zoom-reset",
				onClick: h,
				slots: { icon: () => [U(T, {
					class: "h-3.5 w-3.5",
					name: "zoom"
				})] },
				text: I("designer.infoBar.zoomPercentage", { percent: Math.round(a.view.zoom * 100) }),
				title: I("designer.infoBar.resetZoomTitle"),
				variant: "outline"
			},
			{
				id: "zoom-in",
				onClick: p,
				shape: "square",
				slots: { icon: () => [U(T, {
					class: "h-3.5 w-3.5",
					name: "plus"
				})] },
				title: I("designer.infoBar.zoomInTitle"),
				variant: "outline"
			},
			{
				id: "zoom-fit",
				onClick: function() {
					n("fit");
				},
				slots: { icon: () => [U(T, {
					class: "h-3.5 w-3.5",
					name: "fit"
				})] },
				text: I("designer.infoBar.fitToWindowButton"),
				title: I("designer.infoBar.fitToWindowTitle"),
				variant: "outline"
			},
			{
				id: "zoom-actual",
				onClick: h,
				slots: { icon: () => [U(T, {
					class: "h-3.5 w-3.5",
					name: "zoom"
				})] },
				text: I("designer.infoBar.actualSizeButton"),
				title: I("designer.infoBar.actualSizeTitle"),
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
			let n = ft;
			return X(), N("footer", Od, [
				P("div", kd, [
					P("div", Ad, [
						P("span", jd, W(H(I)("designer.infoBar.xLabel")), 1),
						P("span", Md, W(l.value.x === null ? H(I)("designer.infoBar.unavailableValue") : l.value.x.toFixed(1)), 1),
						P("span", Nd, W(H(I)("designer.infoBar.yLabel")), 1),
						P("span", Pd, W(l.value.y === null ? H(I)("designer.infoBar.unavailableValue") : l.value.y.toFixed(1)), 1),
						P("span", Fd, W(H(I)("designer.infoBar.distanceUnit")), 1)
					]),
					t[1] ||= P("div", { class: "h-3.5 w-px shrink-0 bg-edge" }, null, -1),
					P("div", {
						class: "flex shrink-0 items-center gap-2",
						title: H(I)("designer.infoBar.selectionDimensionsTitle")
					}, [P("span", Ld, W(H(I)(u.value.key, u.value.parameters)), 1)], 8, Id),
					t[2] ||= P("div", { class: "h-3.5 w-px shrink-0 bg-edge" }, null, -1),
					P("div", Rd, [H(a).template.editingTemplate ? (X(), N(G, { key: 0 }, [R(T, {
						name: "template",
						class: "h-3.5 w-3.5 text-accent"
					}), P("span", zd, W(H(I)("designer.infoBar.templateEditing", { templateName: H(a).template.editingTemplate.name })), 1)], 64)) : (X(), N("span", Bd, W(H(I)("designer.infoBar.pageProgress", {
						pageNumber: c.value + 1,
						pageCount: H(a).document.data.pages.length
					})), 1))])
				]),
				P("label", {
					class: "ml-2 flex shrink-0 items-center gap-1.5",
					title: H(I)("designer.infoBar.pageLayoutTitle")
				}, [P("span", Hd, W(H(I)("designer.infoBar.pageLayoutLabel")), 1), R(n, {
					modelValue: s.value,
					"onUpdate:modelValue": t[0] ||= (e) => s.value = e,
					"popup-props": H(i),
					class: "!w-20",
					options: d.value,
					onPopupVisibleChange: H(r)
				}, null, 8, [
					"modelValue",
					"popup-props",
					"options",
					"onPopupVisibleChange"
				])], 8, Vd),
				t[3] ||= P("div", { class: "mx-2 h-3.5 w-px shrink-0 bg-edge" }, null, -1),
				R(H(de), {
					class: "shrink-0",
					actions: f.value,
					gap: 1,
					wrap: !1,
					size: "small"
				}, null, 8, ["actions"])
			]);
		};
	}
}), Wd = ["data-dock-group"], Gd = {
	key: 0,
	class: "panel-group__rail flex flex-col",
	role: "tablist",
	"aria-orientation": "vertical"
}, Kd = [
	"data-dock-tab",
	"title",
	"aria-label",
	"aria-selected",
	"aria-expanded",
	"tabindex",
	"onPointerdown",
	"onClick"
], qd = {
	key: 0,
	class: "panel-group__label overflow-hidden whitespace-nowrap text-ellipsis"
}, Jd = ["role"], Yd = [
	"id",
	"role",
	"aria-expanded",
	"data-dock-tab",
	"title",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"onPointerdown",
	"onClick"
], Xd = ["title"], Zd = [
	"id",
	"role",
	"aria-labelledby"
], Qd = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "panel-group",
	props: {
		collapsed: { type: Boolean },
		column: {},
		group: {},
		iconsOnly: { type: Boolean },
		interactions: {}
	},
	setup(e) {
		let t = e, n = k(), r = n.store().panel, i = B(null), { height: a, width: o } = Se(), s = F(() => t.group.panelIds.flatMap((e) => {
			let t = r.definitions[e];
			return t ? [t] : [];
		})), c = F(() => s.value.some((e) => e.id === t.group.activeId) ? t.group.activeId : s.value[0]?.id), l = F(() => !t.collapsed && t.group.collapsed === !0), u = F(() => s.value.find((e) => e.id === c.value)?.sectionTitle?.()), d = F(() => t.collapsed && r.openGroupId === t.group.id), f = F(() => {
			if (!d.value || !i.value) return {};
			let e = i.value.getBoundingClientRect(), n = Math.min(t.column.width, o.value - 16), r = Math.min(540, a.value - 48), s = e.left - n;
			return s < 8 && (s = Math.min(e.right, o.value - n - 8)), {
				height: `${r}px`,
				left: `${Math.max(8, s)}px`,
				top: `${Math.max(8, Math.min(e.top, a.value - r - 8))}px`,
				width: `${n}px`
			};
		});
		v([{
			run: p,
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
			target: i
		});
		function p(e) {
			let n = s.value.findIndex((e) => e.id === c.value), a = n;
			a = e.key === "Home" ? 0 : e.key === "End" ? s.value.length - 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? (n + s.value.length - 1) % s.value.length : (n + 1) % s.value.length;
			let o = s.value[a];
			if (!o) return;
			r.activate(t.group.id, o.id, t.collapsed && !d.value);
			let l = i.value?.querySelectorAll("[role=\"tab\"][data-dock-tab]");
			Array.from(l ?? []).find((e) => e.dataset.dockTab === o.id && e.offsetParent !== null)?.focus();
		}
		function m(e) {
			r.activate(t.group.id, e, t.collapsed);
		}
		function h(e, n) {
			t.interactions.startDrag(e, {
				columnId: t.column.id,
				groupId: t.group.id,
				panelId: n
			});
		}
		function _(e) {
			t.interactions.startDrag(e, {
				columnId: t.column.id,
				groupId: t.group.id
			});
		}
		function y(e) {
			!t.collapsed && s.value.length === 1 ? r.toggleGroup(t.column.id, t.group.id) : r.activate(t.group.id, e);
		}
		function b() {
			r.movePanels({
				columnId: t.column.id,
				groupId: t.group.id
			}, { placement: "after" });
		}
		return (t, a) => s.value.length ? (X(), N("section", {
			key: 0,
			ref_key: "root",
			ref: i,
			class: J(["panel-group flex flex-col min-w-0 overflow-hidden", e.collapsed ? "panel-group--collapsed" : "panel-group--section rounded-md border border-edge"]),
			"data-dock-group": e.group.id
		}, [e.collapsed ? (X(), N("div", Gd, [(X(!0), N(G, null, M(s.value, (t) => (X(), N("button", {
			key: t.id,
			class: J(["panel-group__rail-tab flex items-center gap-2 shrink-0 cursor-grab text-left h-8.5 [padding:0_8px] [border-left:2px_solid_transparent] hover:bg-panel-3", { "panel-group__rail-tab--active": d.value && c.value === t.id }]),
			type: "button",
			role: "tab",
			"data-dock-tab": t.id,
			title: t.title(),
			"aria-label": t.title(),
			"aria-selected": d.value && c.value === t.id,
			"aria-expanded": d.value && c.value === t.id,
			tabindex: c.value === t.id ? 0 : -1,
			onPointerdown: Q((e) => h(e, t.id), ["stop"]),
			onClick: (e) => m(t.id)
		}, [R(T, {
			name: t.icon,
			class: "h-4 w-4 shrink-0"
		}, null, 8, ["name"]), e.iconsOnly ? K("", !0) : (X(), N("span", qd, W(t.title()), 1))], 42, Kd))), 128))])) : K("", !0), !e.collapsed || d.value ? (X(), N("div", {
			key: 1,
			class: J(["panel-group__surface flex flex-1 flex-col min-w-0 min-h-0 overflow-hidden bg-panel", { "panel-group__surface--popout": e.collapsed }]),
			style: Y(e.collapsed ? f.value : void 0),
			"data-panel-surface": ""
		}, [P("header", {
			class: "panel-group__header flex items-center h-8.5 shrink-0 bg-panel-2 border-b border-edge cursor-move",
			onPointerdown: Q(_, ["self"])
		}, [
			P("div", {
				class: J(["panel-group__tabs flex min-w-0 overflow-x-auto [align-self:stretch]", !e.collapsed && s.value.length === 1 ? "flex-1" : "gap-0.5 p-0.5"]),
				role: e.collapsed || s.value.length > 1 ? "tablist" : void 0
			}, [(X(!0), N(G, null, M(s.value, (t) => (X(), N("button", {
				id: `panel-tab-${e.group.id}-${t.id}`,
				key: t.id,
				type: "button",
				role: e.collapsed || s.value.length > 1 ? "tab" : void 0,
				class: J(["panel-group__tab flex items-center gap-1.5 shrink-0 cursor-pointer px-2 text-xs text-ink-dim hover:bg-panel-3", {
					"panel-group__tab--active": c.value === t.id,
					"flex-1": !e.collapsed && s.value.length === 1,
					"rounded border border-transparent": e.collapsed || s.value.length > 1
				}]),
				"aria-expanded": e.collapsed || s.value.length > 1 ? void 0 : !l.value,
				"data-dock-tab": t.id,
				title: !e.collapsed && s.value.length === 1 ? u.value ?? t.title() : t.title(),
				"aria-selected": e.collapsed || s.value.length > 1 ? c.value === t.id : void 0,
				"aria-controls": `panel-content-${e.group.id}-${t.id}`,
				tabindex: c.value === t.id ? 0 : -1,
				onPointerdown: Q((e) => h(e, t.id), ["stop"]),
				onClick: (e) => y(t.id)
			}, [
				!e.collapsed && s.value.length === 1 ? (X(), z(T, {
					key: 0,
					name: "chevron-down",
					class: J(["size-3 shrink-0 text-ink-dim", { "-rotate-90": l.value }])
				}, null, 8, ["class"])) : K("", !0),
				R(T, {
					name: t.icon,
					class: "size-4 shrink-0 text-ink-dim"
				}, null, 8, ["name"]),
				L(" " + W(!e.collapsed && s.value.length === 1 ? u.value ?? t.title() : t.title()), 1)
			], 42, Yd))), 128))], 10, Jd),
			P("div", {
				class: J(["panel-group__grip flex items-center justify-end min-w-6 pr-1.5 h-full text-ink-dim", { "flex-1": e.collapsed || s.value.length > 1 }]),
				title: H(I)("designer.panelDock.moveGroupTitle"),
				onPointerdown: _
			}, [R(T, {
				name: "drag",
				class: "h-3 w-3"
			})], 42, Xd),
			!e.collapsed && s.value.length > 1 ? (X(), z(g, {
				key: 0,
				icon: l.value ? "chevron-right" : "chevron-down",
				label: H(I)(l.value ? "designer.panelFrame.expandTitle" : "designer.panelFrame.collapseTitle"),
				"aria-expanded": !l.value,
				onClick: a[0] ||= (t) => H(r).toggleGroup(e.column.id, e.group.id)
			}, null, 8, [
				"icon",
				"label",
				"aria-expanded"
			])) : K("", !0),
			e.column.floating ? (X(), z(g, {
				key: 1,
				icon: "panel-dock",
				label: H(I)("designer.panelFrame.dockTitle"),
				onClick: b
			}, null, 8, ["label"])) : K("", !0),
			e.collapsed ? (X(), z(g, {
				key: 2,
				icon: "close",
				label: H(I)("designer.panelDock.closeTitle"),
				onClick: H(r).closePopout
			}, null, 8, ["label", "onClick"])) : K("", !0)
		], 32), (X(!0), N(G, null, M(s.value, (t) => In((X(), N("div", {
			key: t.id,
			id: `panel-content-${e.group.id}-${t.id}`,
			class: "panel-group__content flex flex-1 min-h-0 min-w-0 overflow-hidden",
			role: e.collapsed || s.value.length > 1 ? "tabpanel" : "region",
			"aria-labelledby": `panel-tab-${e.group.id}-${t.id}`
		}, [R(H(st), { runtime: H(n).errors }, {
			fallback: q(({ error: e, reset: t }) => [R(xt, {
				detail: H(fn)(e),
				title: H(I)("designer.designerShell.panelRenderFailed"),
				onRetry: t
			}, null, 8, [
				"detail",
				"title",
				"onRetry"
			])]),
			default: q(() => [(X(), z(vn(t.component)))]),
			_: 2
		}, 1032, ["runtime"])], 8, Zd)), [[Rr, !l.value && c.value === t.id]])), 128))], 6)) : K("", !0)], 10, Wd)) : K("", !0);
	}
}), [["__scopeId", "data-v-35133625"]]), $d = ["data-dock-column"], ef = ["title"], tf = { class: "ml-2 truncate text-xs font-semibold text-ink" }, nf = [
	"title",
	"aria-label",
	"aria-expanded"
], rf = [
	"aria-label",
	"title",
	"onPointerdown",
	"onDblclick"
], af = ["aria-label", "title"], of = ["title"], sf = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "panel-column",
	props: {
		collapsed: { type: Boolean },
		column: {},
		interactions: {},
		sectionPreview: { type: Boolean },
		width: {}
	},
	setup(e) {
		let t = e, { commands: n, store: r } = k(), { panel: i } = r(), a = F(() => t.column.groups.filter((e) => e.panelIds.some((e) => !!i.definitions[e])));
		function o(e) {
			return !t.sectionPreview && e.height === void 0 && a.value.length > 1 && e.panelIds.every((e) => {
				let t = i.definitions[e];
				return !t || t.sizing === "content";
			});
		}
		function s(e) {
			if (!t.collapsed) return e.collapsed ? "0 0 auto" : t.sectionPreview ? "1 0 0px" : e.height === void 0 ? o(e) ? "0 1 auto" : `${e.weight} 1 0px` : `0 0 ${e.height}px`;
		}
		function c(e) {
			t.interactions.startDrag(e, { columnId: t.column.id });
		}
		function l(e) {
			let n = e.clientX, r = t.width;
			t.interactions.startResize(e, (e) => {
				i.resizeColumn(t.column.id, r + n - e.clientX, t.collapsed);
			});
		}
		function u() {
			i.resizeColumn(t.column.id, t.collapsed ? 112 : 320, t.collapsed), i.persist();
		}
		function d(e, n) {
			let r = e.currentTarget, a = r.previousElementSibling?.getBoundingClientRect();
			if (!a) return;
			let o = f(n), s = o && r.nextElementSibling?.getBoundingClientRect(), c = e.clientY;
			t.interactions.startResize(e, (e) => {
				let r = a.height + e.clientY - c;
				if (!o || !s) {
					i.resizeGroups(t.column.id, { [n.id]: r });
					return;
				}
				let l = Math.round(a.height + s.height), u = On(Math.round(r), Math.max(120, l - Cr), Math.min(Cr, l - 120));
				i.resizeGroups(t.column.id, {
					[n.id]: u,
					[o.id]: l - u
				});
			});
		}
		function f(e) {
			let t = a.value[a.value.indexOf(e) + 1];
			return t?.collapsed ? void 0 : t;
		}
		function p(e) {
			let n = f(e), r = { [e.id]: null };
			n && (r[n.id] = null), i.resizeGroups(t.column.id, r), i.persist();
		}
		function m(e) {
			let n = e.clientX, r = e.clientY, a = t.column.width, o = t.column.height;
			t.interactions.startResize(e, (e) => {
				i.resizeFloating(t.column.id, a + e.clientX - n, o + e.clientY - r);
			});
		}
		function h() {
			i.toggleColumn(t.column.id);
		}
		function _() {
			t.column.floating && i.bringToFront(t.column.id);
		}
		return (t, r) => a.value.length ? (X(), N("aside", {
			key: 0,
			class: J(["panel-column relative flex flex-col shrink-0 min-h-0 h-full border-l border-edge bg-panel", {
				"panel-column--collapsed": e.collapsed,
				"panel-column--floating": e.column.floating
			}]),
			style: Y({ width: `${e.width}px` }),
			"data-dock-column": e.column.id,
			onPointerdownCapture: _
		}, [
			e.sectionPreview ? K("", !0) : (X(), N("div", {
				key: 0,
				class: J(["panel-column__bar flex items-center shrink-0 bg-panel border-b border-edge cursor-move", e.collapsed ? "h-4.5" : "h-10 px-2 gap-1"]),
				onPointerdown: Q(c, ["self"])
			}, [
				P("div", {
					class: "panel-column__grip flex items-center flex-1 h-full min-w-0 text-ink-dim pl-1.5",
					title: H(I)("designer.panelDock.moveColumnTitle"),
					onPointerdown: c
				}, [e.collapsed ? (X(), z(T, {
					key: 1,
					name: "drag",
					class: "h-3 w-3"
				})) : (X(), N(G, { key: 0 }, [R(T, {
					name: "grid",
					class: "h-4 w-4 shrink-0 text-accent"
				}), P("span", tf, W(H(I)("designer.controlPanel.panelTitle")), 1)], 64))], 40, ef),
				e.collapsed ? K("", !0) : In((X(), z(g, {
					key: 0,
					icon: "template",
					label: H(I)("designer.templateLibrary.menuItem"),
					onClick: r[0] ||= (e) => H(n).dispatch("file.templateLibrary")
				}, null, 8, ["label"])), [[Rr, H(n).has("file.templateLibrary")]]),
				P("button", {
					class: J(["panel-column__toggle flex items-center justify-center shrink-0 cursor-pointer rounded-sm hover:bg-panel-3", e.collapsed ? "h-4.25 w-6.25" : "size-7 text-ink-dim"]),
					type: "button",
					title: e.collapsed ? H(I)("designer.panelDock.expandColumnTitle") : H(I)("designer.panelDock.collapseColumnTitle"),
					"aria-label": e.collapsed ? H(I)("designer.panelDock.expandColumnTitle") : H(I)("designer.panelDock.collapseColumnTitle"),
					"aria-expanded": !e.collapsed,
					onClick: h
				}, [R(T, {
					name: "chevron-right",
					class: J(["h-3 w-3", { "rotate-180": e.collapsed }])
				}, null, 8, ["class"]), R(T, {
					name: "chevron-right",
					class: J(["-ml-2 h-3 w-3", { "rotate-180": e.collapsed }])
				}, null, 8, ["class"])], 10, nf)
			], 34)),
			P("div", { class: J(["panel-column__groups flex flex-col flex-1 min-h-0 overflow-y-auto", { "gap-0.5 bg-app p-1.5": !e.collapsed && !e.sectionPreview }]) }, [(X(!0), N(G, null, M(a.value, (t) => (X(), N(G, { key: t.id }, [R(Qd, {
				column: e.column,
				group: t,
				collapsed: e.collapsed,
				"icons-only": e.width < 76,
				interactions: e.interactions,
				class: J({ "panel-column__content-sized": !e.collapsed && !t.collapsed && o(t) }),
				style: Y({
					flex: s(t),
					minHeight: !e.collapsed && !t.collapsed && !e.sectionPreview ? `${H(120)}px` : void 0
				})
			}, null, 8, [
				"column",
				"group",
				"collapsed",
				"icons-only",
				"interactions",
				"class",
				"style"
			]), !e.collapsed && !e.sectionPreview && !t.collapsed ? (X(), N("div", {
				key: 0,
				class: "panel-column__row-resize flex h-1.5 shrink-0 cursor-row-resize touch-none items-center justify-center before:h-px before:w-6 before:rounded-full before:bg-edge-2 hover:bg-accent-soft hover:before:bg-accent",
				role: "separator",
				"aria-orientation": "horizontal",
				"aria-label": H(I)("designer.panelDock.resizeGroupTitle"),
				title: H(I)("designer.panelDock.resizeGroupTitle"),
				onPointerdown: (e) => d(e, t),
				onDblclick: (e) => p(t)
			}, null, 40, rf)) : K("", !0)], 64))), 128))], 2),
			e.column.floating ? K("", !0) : (X(), N("div", {
				key: 1,
				class: "panel-column__resize absolute [z-index:var(--z-index-panel-handle)] top-0 bottom-0 -left-0.75 w-1.5 cursor-col-resize hover:bg-accent",
				role: "separator",
				"aria-orientation": "vertical",
				"aria-label": H(I)("designer.designerShell.resizePanelTitle"),
				title: H(I)("designer.designerShell.resizePanelTitle"),
				onPointerdown: l,
				onDblclick: u
			}, null, 40, af)),
			e.column.floating && !e.collapsed && !e.sectionPreview ? (X(), N("div", {
				key: 2,
				class: "panel-column__corner absolute right-0 bottom-0 w-3.5 h-3.5 [cursor:nwse-resize] [background:linear-gradient(135deg,_transparent_60%,_var(--color-edge-2)_60%)]",
				title: H(I)("designer.panelDock.resizeFloatingTitle"),
				onPointerdown: m
			}, null, 40, of)) : K("", !0)
		], 46, $d)) : K("", !0);
	}
}), [["__scopeId", "data-v-000e5918"]]);
function cf(e, t, n, r) {
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
	let c = t.closest("[data-dock-tab]"), l = t.closest(".panel-group__header"), u = o.getBoundingClientRect(), d = r - u.top, f = Math.min(42, u.height / 2), p = e.classList.contains("panel-column--collapsed"), m = !p && d < Math.min(8, f), h = "tab";
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
function lf(e) {
	let t = B(null);
	function n(n, r, i, a) {
		let o = document.elementFromPoint(n, r), s = o?.closest("[data-dock-column]"), c = s?.dataset.dockColumn === e() ? null : o;
		if (s && c) {
			let e = cf(s, c, n, r);
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
function uf(e) {
	let { preview: t, resolveTarget: n } = lf(() => e.panel.drag?.columnId), r = null, i = !1;
	function a() {
		let n = r;
		r = null, n?.(), t.value = null, e.panel.cancelDrag();
	}
	function o(n, i, o, s = 0, c = "panel-resize") {
		a(), r = ge({
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
		let s = r.clientX, c = r.clientY, l = r.currentTarget, u = l.closest("[data-dock-column]"), d = l.closest("[data-dock-group]"), f = l.closest("[data-panel-surface]"), p = !a.groupId, m = f?.classList.contains("panel-group__surface--popout"), h = !(!u?.classList.contains("panel-column--collapsed") || f), g = m ? f : d;
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
	return ce(window, "pointerdown", u, { capture: !0 }), ar(a), {
		cancel: a,
		captureClick: l,
		preview: t,
		startDrag: s,
		startResize: c
	};
}
var df = {
	class: "panel-dock relative flex shrink-0 min-h-0 h-full [z-index:var(--z-index-panel-dock)] min-w-1.5",
	"data-panel-workspace": ""
}, ff = { class: "panel-dock__floating-layer fixed pointer-events-none [inset:0] [z-index:var(--z-index-panel-float)]" }, pf = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "panel-dock",
	setup(e) {
		let t = k().store().panel, n = Kn(Br, void 0), r = uf(k().store()), { height: i, width: a } = Se(), o = F(() => {
			let e = Math.max(36, a.value - 460);
			return [...t.dockedColumns].reverse().map((n) => {
				let r = n.groups.some((e) => e.panelIds.some((e) => !!t.definitions[e])), i = n.collapsed || n.width > e, o = n.width;
				return i && (o = a.value < 1100 ? 36 : n.railWidth), r && (e -= o), {
					collapsed: i,
					column: n,
					width: o
				};
			}).reverse();
		});
		function s(e) {
			let n = e.collapsed ? e.railWidth : e.width, r = t.drag?.columnId === e.id ? t.drag.sectionHeight : void 0;
			return {
				height: e.collapsed ? "auto" : `${Math.min(r ?? e.height, i.value - 32)}px`,
				left: `${Math.max(0, Math.min(e.x, a.value - n))}px`,
				top: `${Math.max(0, Math.min(e.y, i.value - 180))}px`
			};
		}
		function c(e) {
			e.target instanceof Element && !e.target.closest("[data-panel-surface], [data-dock-tab]") && t.closePopout();
		}
		function l() {
			r.cancel(), t.closePopout();
		}
		return lt(F(() => t.drag ? "body, body * { cursor: grabbing !important; }" : "")), v([{
			run: l,
			shortcut: "Escape"
		}], { enabled: () => !!(t.drag || t.openGroupId) }), ce(window, "pointerdown", c, { capture: !0 }), ce(window, "blur", l), ce(window, "resize", t.closePopout), ce(window, "click", r.captureClick, { capture: !0 }), (e, i) => (X(), N("div", df, [(X(!0), N(G, null, M(o.value, (e) => (X(), z(sf, {
			key: e.column.id,
			column: e.column,
			collapsed: e.collapsed,
			width: e.width,
			interactions: H(r)
		}, null, 8, [
			"column",
			"collapsed",
			"width",
			"interactions"
		]))), 128)), (X(), z(Rn, { to: H(n)?.() ?? "body" }, [P("div", ff, [(X(!0), N(G, null, M(H(t).floatingColumns, (e) => (X(), z(sf, {
			key: e.id,
			class: J(["panel-dock__floating", { "panel-dock__floating--dragging": H(t).drag?.columnId === e.id }]),
			style: Y(s(e)),
			column: e,
			collapsed: e.collapsed,
			width: e.collapsed ? e.railWidth : e.width,
			"section-preview": H(t).drag?.columnId === e.id && H(t).drag.sectionHeight !== void 0,
			interactions: H(r)
		}, null, 8, [
			"class",
			"style",
			"column",
			"collapsed",
			"width",
			"section-preview",
			"interactions"
		]))), 128)), H(r).preview.value ? (X(), N("div", {
			key: 0,
			class: J(["panel-dock__preview fixed pointer-events-none", { "panel-dock__preview--insertion": H(r).preview.value.insertion }]),
			style: Y({
				left: `${H(r).preview.value.left}px`,
				top: `${H(r).preview.value.top}px`,
				width: `${H(r).preview.value.width}px`,
				height: `${H(r).preview.value.height}px`
			})
		}, null, 6)) : K("", !0)])], 8, ["to"]))]));
	}
}), [["__scopeId", "data-v-b97e45b2"]]), mf = ["title"], hf = /* @__PURE__ */ Z({
	__name: "status-hints",
	setup(e) {
		let t = k(), n = t.store(), r = F(() => Ln(n.view.activeTool, t.elements)), i = F(() => {
			for (let e of t.extensions.list("designer.tool.hint")) {
				let t = e.value();
				if (t !== void 0) return t;
			}
			if (r.value?.kind === "hand" || n.view.spacePanning) return I("designer.optionsBar.panHint");
			if (r.value?.kind === "element") {
				let e = r.value;
				return e.hints?.create ?? I(n.view.settings.clickToCreate ? "designer.optionsBar.continuousPlacementHint" : "designer.optionsBar.drawingHint", { toolName: t.elements.get(e.elementType ?? "")?.label ?? e.label });
			}
			return r.value?.kind === "select" ? a() : "";
		});
		function a() {
			let e = n.selection.nodes;
			if (e.length === 0) return "";
			if (e.every((e) => e.locked)) return I("designer.statusHints.lockedSelection");
			if (e.length > 1) return I("designer.statusHints.multipleSelection");
			let r = e[0], i = t.elements.get(r.type), a = Ln(`element:${r.type}`, t.elements)?.hints?.edit;
			if (a !== void 0 && r.visible && !n.view.settings.previewWithData) return a;
			let o = I(hr(r) ? "designer.statusHints.pointSelection" : "designer.statusHints.selection");
			return i?.inlineEditable && i.inlineEditable.enabled?.(r) !== !1 && !n.view.settings.previewWithData ? `${o} ${I("designer.statusHints.inlineEdit")}` : o;
		}
		return (e, t) => i.value ? (X(), N("span", {
			key: 0,
			class: "min-w-0 truncate",
			title: i.value
		}, W(i.value), 9, mf)) : K("", !0);
	}
});
function gf(e, t) {
	let n, r, i = 0, a = !1, o = V(() => [
		e.view.zoom,
		e.view.scrollPos.left,
		e.view.scrollPos.top
	], async () => {
		await Un(), !a && n && (r = n, s("drag.viewport"));
	}, { flush: "post" });
	function s(n = "drag.move") {
		i &&= (cancelAnimationFrame(i), 0);
		let o = r;
		if (r = void 0, o && !a) try {
			t.onMove?.(o);
		} catch (r) {
			br(e).capture(r, {
				metadata: { tag: t.tag },
				source: n
			});
		}
	}
	function c() {
		s(), a = !0, o();
	}
	return ge({
		...t,
		onCancel(e, n) {
			c(), t.onCancel ? t.onCancel(e, n) : t.onEnd?.(e, n);
		},
		onEnd(e, n) {
			c(), t.onEnd?.(e, n);
		},
		onMove(e) {
			n = e, r = e, i ||= requestAnimationFrame(() => {
				i = 0, s();
			});
		}
	});
}
function _f(e, t) {
	return [...e.view.pageLayouts].reverse().find((e) => en({
		height: e.page.height,
		width: e.page.width,
		x: e.x,
		y: e.y
	}, t))?.page;
}
function vf(e, t, n) {
	let r = t.shiftKey;
	r || e.selection.clear();
	let i = r ? [...e.selection.ids] : [], a = t.currentTarget, o = e.view.zoom, s = mr(e).contentMmFromClient(t.clientX, t.clientY, o), c = n, l, u = /* @__PURE__ */ new Set();
	gf(e, {
		onEnd(t, n) {
			e.view.setMarquee(null), !n && !r && e.selection.clear(), c && e.scope.activate(c.id);
		},
		onMove(t) {
			let n = mr(e).contentMmFromClient(t.event.clientX, t.event.clientY, e.view.zoom);
			if (c ||= _f(e, n), !c) return;
			let a = e.view.originOf(c.id);
			if (!a) return;
			if (!l) {
				let t = Hn(a, s);
				l = {
					x: On(t.x, 0, c.width),
					y: On(t.y, 0, c.height)
				};
				for (let t of e.element.getByPage(c.id, {
					locked: !1,
					visible: !0
				})) u.add(t.id);
			}
			let o = Hn(a, n), d = On(o.x, 0, c.width), f = On(o.y, 0, c.height), p = {
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
				if (hr(e)) return vr(e.points, p);
				let t = pr({
					height: e.height,
					width: e.width,
					x: e.x,
					y: e.y
				}, e.rotation);
				return gr(p, t);
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
var yf = {
	key: 0,
	class: "pointer-events-none absolute inset-0 z-canvas-guide overflow-hidden"
}, bf = /* @__PURE__ */ Z({
	__name: "guides-drag-layer",
	setup(e) {
		let t = k().store(), n = F(() => {
			let e = t.view.draggingGuide;
			if (!e || !t.view.settings.showGuides) return null;
			let n = t.view.getLayout(e.pageId), r = t.guide.get(e.pageId, e.guideId);
			return !r || !n ? null : {
				guide: r,
				layout: n
			};
		}), r = F(() => {
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
		return (e, t) => n.value ? (X(), N("div", yf, [P("div", {
			class: "absolute bg-guide/80",
			style: Y(r.value)
		}, null, 4)])) : K("", !0);
	}
});
function xf(e) {
	return 4 / (96 / 25.4 * e);
}
function Sf(e, t, n) {
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
		let t = rr(e);
		r.push(t.x, t.x + t.width), i.push(t.y, t.y + t.height);
	}
	if (n.snapElements) for (let n of e.elements) {
		if (t.has(n.id) || !n.visible) continue;
		let e = pr({
			height: n.height,
			width: n.width,
			x: n.x,
			y: n.y
		}, n.rotation);
		r.push(e.x, e.x + e.width / 2, e.x + e.width), i.push(e.y, e.y + e.height / 2, e.y + e.height);
	}
	if (n.snapGuides) for (let t of e.guides) t.orientation === "vertical" ? r.push(t.position) : i.push(t.position);
	return {
		h: i,
		v: r
	};
}
function Cf(e, t, n) {
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
function wf(e, t) {
	return !t.snapGrid || t.gridSize <= 0 ? 0 : Math.round(e / t.gridSize) * t.gridSize - e;
}
function Tf(e, t, n, r) {
	let { h: i, v: a } = Sf(t, n, r), o = Cf([
		e.x,
		e.x + e.width / 2,
		e.x + e.width
	], a, r.threshold), s = Cf([
		e.y,
		e.y + e.height / 2,
		e.y + e.height
	], i, r.threshold), c = o?.delta ?? 0, l = s?.delta ?? 0, u = o ? [o.line] : [], d = s ? [s.line] : [];
	return o || (c = wf(e.x, r)), s || (l = wf(e.y, r)), {
		dx: c,
		dy: l,
		hLines: d,
		vLines: u
	};
}
function Ef(e, t, n, r, i) {
	let { h: a, v: o } = Sf(n, r, i), s = e === null ? null : Cf([e], o, i.threshold), c = t === null ? null : Cf([t], a, i.threshold);
	return {
		dx: s?.delta ?? (e === null ? 0 : wf(e, i)),
		dy: c?.delta ?? (t === null ? 0 : wf(t, i)),
		hLines: c ? [c.line] : [],
		vLines: s ? [s.line] : []
	};
}
function Df(e, t, n, r) {
	let { h: i, v: a } = Sf(t, n, r), o = Cf([e.x], a, r.threshold), s = Cf([e.y], i, r.threshold);
	return {
		hLines: s ? [s.line] : [],
		vLines: o ? [o.line] : [],
		x: kr(e.x + (o?.delta ?? wf(e.x, r))),
		y: kr(e.y + (s?.delta ?? wf(e.y, r)))
	};
}
function Of(e, t) {
	let n = /* @__PURE__ */ new Set();
	function r(r) {
		return Df(r, e.canvas.getPage(t.id) ?? t, n, {
			gridSize: e.view.settings.gridSize,
			snapElements: e.view.settings.snapToElements,
			snapGrid: e.view.settings.snapToGrid,
			snapGuides: e.view.settings.snapToGuides,
			snapMargins: e.view.settings.snapToMargins,
			threshold: xf(e.view.zoom)
		});
	}
	function i(n) {
		let i = r(n), a = {
			x: On(i.x, 0, t.width),
			y: On(i.y, 0, t.height)
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
function kf(e, t, n, r, i) {
	let a = i.elements, o = a.getCreatable(n);
	if (!o) return;
	let s = t.currentTarget, c = e.view.originOf(r.id);
	if (!c) return;
	let l = (e) => Hn(c, e), u = e.view.zoom, d = mr(e).contentMmFromClient(t.clientX, t.clientY, u), { clearSnapLines: f, snapEnd: p, snapPoint: m } = Of(e, r), h = m({
		x: On(l(d).x, 0, r.width),
		y: On(l(d).y, 0, r.height)
	}), g = On(h.x, 0, r.width), _ = On(h.y, 0, r.height), v = {
		x: g,
		y: _
	}, y = !1, b = () => {};
	function x() {
		y = !0, b(), f(), e.element.cancelDraft();
	}
	function S(t) {
		let r = gf(e, t);
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
			i && e.element.updateDraft(dr(i, t));
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
					e.element.commitDraft() && or(e, n);
				}
			},
			onMove(t) {
				if (y) return;
				let n = mr(e).contentMmFromClient(t.event.clientX, t.event.clientY, e.view.zoom), a = {
					x: On(l(n).x, 0, r.width),
					y: On(l(n).y, 0, r.height)
				};
				a = p(a), a = t.event.shiftKey ? Zt(v, a, 45) : er(v, a, xf(e.view.zoom)), e.view.setSnapLines({
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
			height: kr(Math.max(o, 1)),
			width: kr(Math.max(a, 1)),
			x: kr(t),
			y: kr(i)
		});
		else {
			let s = e.element.createToolElement(n);
			Object.assign(s, {
				height: kr(Math.max(o, 1)),
				width: kr(Math.max(a, 1)),
				x: kr(t),
				y: kr(i)
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
					t.x = kr(On(g - t.width / 2, 0, Math.max(0, r.width - t.width))), t.y = kr(On(_ - t.height / 2, 0, Math.max(0, r.height - t.height))), e.element.setDraft(t, r.id);
				}
				e.element.commitDraft(i ? v : void 0) && or(e, n);
			}
		},
		onMove(t) {
			if (y) return;
			let n = mr(e).contentMmFromClient(t.event.clientX, t.event.clientY, e.view.zoom), i = p({
				x: On(l(n).x, 0, r.width),
				y: On(l(n).y, 0, r.height)
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
function Af(e, t) {
	let n = new Map(t.elements.map((e) => [e.id, Jn(e)])), r = /* @__PURE__ */ new Set();
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
function jf(e, t, n, r, i = {}) {
	let a = t.shiftKey, o = e.selection.has(n), s = i.selectKeyObject !== !1 && o && !a && !t.altKey && e.selection.ids.length > 1;
	o || e.selection.set([n], a && e.selection.ids.length > 0);
	let c = t.currentTarget, l = mr(e).contentMmFromClient(t.clientX, t.clientY, e.view.zoom), u = e.selection.unlockedNodes.map((e) => ({
		geometry: Jn(e),
		id: e.id
	}));
	if (u.length === 0) return;
	let d = u, f = d.map((e) => e.id), p = new Map((e.canvas.getPage(r.id) ?? r).elements.map((e) => [e.id, e])), m = [], h = Cn(u.map((e) => {
		let t = p.get(e.id) ?? e.geometry;
		return pr(t, t.rotation);
	}));
	if (!h) return;
	let g = new Set(u.map((e) => e.id)), _ = Af(e, r);
	function v(t, n) {
		if (m.length > 0 && !t.event.altKey) {
			let t = m.flatMap((t, n) => {
				let r = e.element.get(t), i = d[n];
				return !r || !i ? [] : [{
					id: i.id,
					patch: Jn(r)
				}];
			});
			e.element.removeIds(m, { transient: !0 }), _(t), e.selection.set(f);
		}
		n && (e.view.setSnapLines({
			h: [],
			pageId: "",
			v: []
		}), e.history.commit());
	}
	gf(e, {
		onCancel: v,
		onEnd(t, r) {
			v(t, r), !r && s && (e.selection.setKeyId(n), e.view.updateAlignPanel({ target: "key" }));
		},
		onMove(t) {
			if (t.event.altKey && m.length === 0) {
				_(d.map(({ geometry: e, id: t }) => ({
					id: t,
					patch: e
				}))), e.element.duplicate(f, 0, { transient: !0 }), m = [...e.selection.ids], u = m.flatMap((e, t) => {
					let n = d[t];
					return n ? [{
						geometry: n.geometry,
						id: e
					}] : [];
				});
				for (let e of m) g.add(e);
				_ = Af(e, r);
			}
			let n = mr(e).contentMmFromClient(t.event.clientX, t.event.clientY, e.view.zoom), i = n.x - t.startPoint.x, a = n.y - t.startPoint.y, o = {
				height: h.height,
				width: h.width,
				x: h.x + i,
				y: h.y + a
			}, s = Tf(o, e.canvas.getPage(r.id) ?? r, g, {
				gridSize: e.view.settings.gridSize,
				snapElements: e.view.settings.snapToElements,
				snapGrid: e.view.settings.snapToGrid,
				snapGuides: e.view.settings.snapToGuides,
				snapMargins: e.view.settings.snapToMargins,
				threshold: xf(e.view.zoom)
			}), c = i + s.dx, l = a + s.dy;
			_(u.map((e) => ({
				id: e.id,
				patch: Qn(e.geometry, c, l)
			})));
			let p = Cn(e.selection.unlockedNodes.map((t) => {
				let n = e.canvas.getPage(r.id)?.elements.find((e) => e.id === t.id) ?? t;
				return pr(n, n.rotation);
			}));
			e.view.setSnapLines({
				h: p && Math.abs(p.y - (o.y + s.dy)) < .02 ? s.hLines : [],
				pageId: r.id,
				v: p && Math.abs(p.x - (o.x + s.dx)) < .02 ? s.vLines : []
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
async function Mf(e, t, n, r) {
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
function Nf(e, t, n = 0) {
	return {
		transform: `scale(${e / Jt}) translateY(calc(-100% - ${n}px))`,
		transformOrigin: `top ${t}`
	};
}
var Pf = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "variable-text-canvas-editor",
	props: /*@__PURE__*/ nr({ pxPerMm: {} }, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ nr(["leave"], ["update:modelValue"]),
	setup(e, { expose: t, emit: n }) {
		let r = n, i = $t(e, "modelValue"), a = B();
		function o() {
			a.value?.focusEnd();
		}
		return t({ focusEnd: o }), (t, n) => (X(), z(c, {
			ref_key: "fieldRef",
			ref: a,
			modelValue: i.value,
			"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
			"actions-style": H(Nf)(e.pxPerMm, "right"),
			class: "variable-text-canvas-editor",
			inline: "",
			multiline: "",
			onLeave: n[1] ||= (e) => r("leave")
		}, null, 8, ["modelValue", "actions-style"]));
	}
}), [["__scopeId", "data-v-6b98aecf"]]), Ff = /* @__PURE__ */ Z({
	__name: "inline-text-editor",
	props: /*@__PURE__*/ nr({
		pxPerMm: {},
		variableText: { type: Boolean }
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ nr(["leave"], ["update:modelValue"]),
	setup(e, { emit: t }) {
		let n = t, r = $t(e, "modelValue"), i = B(), a = B();
		function o() {
			let e = i.value;
			if (e) {
				e.focus();
				let t = e.value.length;
				e.setSelectionRange(t, t), e.scrollTop = e.scrollHeight;
			} else a.value?.focusEnd();
		}
		return Dr(o), (t, o) => e.variableText ? (X(), z(Pf, {
			key: 0,
			ref_key: "variableRef",
			ref: a,
			modelValue: r.value,
			"onUpdate:modelValue": o[0] ||= (e) => r.value = e,
			"px-per-mm": e.pxPerMm,
			onLeave: o[1] ||= (e) => n("leave")
		}, null, 8, ["modelValue", "px-per-mm"])) : In((X(), N("textarea", {
			key: 1,
			ref_key: "textareaRef",
			ref: i,
			"onUpdate:modelValue": o[2] ||= (e) => r.value = e,
			class: "absolute inset-0 h-full w-full resize-none overflow-hidden border border-dashed border-accent bg-transparent outline-none",
			spellcheck: "false",
			onBlur: o[3] ||= (e) => n("leave")
		}, null, 544)), [[Lr, r.value]]);
	}
});
function If(e, t) {
	let n = {
		height: `${e.height * t}px`,
		left: "0px",
		top: "0px",
		transform: `translate3d(${e.x * t}px, ${e.y * t}px, 0)`,
		width: `${e.width * t}px`
	};
	return e.rotation && (n.transform += ` rotate(${e.rotation}deg)`), n;
}
var Lf = ["data-element-id"], Rf = /*#__PURE__*/ t(/* @__PURE__ */ Z({
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
		let t = e, n = k().store(), r = k(), i = kt(() => t.node.type), a = F(() => i.value?.previewComponent), o = F(() => n.selection.editingId === t.node.id), s = F(() => Array.isArray(t.node.points) && t.node.points.length > 0), c = F(() => !t.node.locked && !t.isDraft && !t.readOnly && (n.view.activeTool === "select" || n.selection.has(t.node.id) || Mr(n.view.activeTool, t.node.type, n.view.settings.previewWithData, r.elements))), l = F(() => c.value && n.selection.hoverId === t.node.id && n.view.activeTool === "select"), u = F(() => n.selection.has(t.node.id)), d = F(() => {
			let e = {
				...If(t.node, t.pxPerMm),
				zIndex: t.isDraft ? "var(--z-index-canvas-draft)" : String(t.index + 1)
			};
			return t.node.opacity < 1 && (e.opacity = String(t.node.opacity)), e;
		}), f = F(() => {
			let e = [];
			return t.isDraft && !s.value && e.push("element-draft-frame"), c.value ? s.value ? e.push("pointer-events-none") : e.push(n.view.activeTool === "hand" ? "cursor-grab" : "cursor-move") : e.push("element-interaction-disabled", "pointer-events-none"), l.value && !s.value && !n.selection.has(t.node.id) && e.push("outline outline-1 outline-accent/60 -outline-offset-1"), e;
		}), p = B(), m = B(""), h = "", g, _ = F(() => ({
			...i.value?.inlineEditable?.style?.(t.node, t.pxPerMm),
			background: "transparent"
		}));
		function y(e) {
			c.value && e.button === 0 && !o.value && n.view.activeTool !== "hand" && (e.stopPropagation(), n.scope.activate(t.page.id), jf(n, e, t.node.id, t.page));
		}
		function b() {
			c.value && (n.view.activeTool === "select" || Mr(n.view.activeTool, t.node.type, n.view.settings.previewWithData, r.elements)) && i.value?.inlineEditable && !n.view.settings.previewWithData && T();
		}
		function x(e) {
			c.value && (n.selection.has(t.node.id) || n.selection.set([t.node.id]), n.scope.activate(t.page.id), n.ui.openContextMenu(e.clientX, e.clientY, ee()));
		}
		function C() {
			c.value && n.view.activeTool === "select" && n.selection.setHoverId(t.node.id);
		}
		function w() {
			n.selection.hoverId === t.node.id && n.selection.setHoverId(null);
		}
		function T() {
			let e = i.value?.inlineEditable, r = n.element.get(t.node.id);
			e && r && e.enabled?.(r) !== !1 && (g = r, h = e.read(r), m.value = h, n.selection.setEditingId(t.node.id));
		}
		function E() {
			g = void 0, m.value = h, n.selection.setEditingId(null);
		}
		function D() {
			let e = g;
			if (g = void 0, !e || n.element.get(e.id) !== e) return;
			let t = m.value;
			if (t === h) return;
			let r = i.value?.inlineEditable;
			r && n.element.update(e.id, r.write(e, t));
		}
		function O() {
			D(), o.value && n.selection.setEditingId(null);
		}
		function ee() {
			function e(e, ...t) {
				r.commands.dispatch(e, ...t);
			}
			let i = n.selection.ids.length > 1 ? [S(), ...ye(r.commands, [{
				args: [t.node.id],
				id: "element.setKeyObject"
			}, "element.clearKeyObject"], e)] : [];
			return [
				...ye(r.commands, [
					"element.openSettings",
					"edit.copy",
					"edit.cut",
					"edit.delete"
				], e),
				...i,
				S(),
				...te(),
				S(),
				...ye(r.commands, [
					"element.bringFront",
					"element.bringForward",
					"element.sendBackward",
					"element.sendBack"
				], e),
				S(),
				...ye(r.commands, [
					"element.toggleLock",
					"element.toggleVisibility",
					"edit.duplicate"
				], e)
			];
		}
		function te() {
			function e(e, ...t) {
				r.commands.dispatch(e, ...t);
			}
			let t = n.followBlock.selected;
			if (t) return ye(r.commands, [{
				args: [t.id],
				id: "data.editFollow"
			}, { id: "data.removeFollowMembers" }], e);
			if (n.followBlock.getByElements(n.selection.ids).length > 0) return ye(r.commands, ["data.removeFollowMembers", "data.joinFollow"], e);
			let i = n.repeatGroup.selected;
			if (i) return ye(r.commands, [{
				args: [i.id],
				id: "data.editRepeatGroup",
				label: I("designer.elementRenderer.repeatGroupSettingsLabel", { groupName: i.name })
			}, {
				args: [i.id],
				id: "data.removeRepeatGroup"
			}], e);
			let a = n.repeatGroup.getByElements(n.selection.ids)[0];
			return a && n.selection.ids.length === 1 ? ye(r.commands, [{
				args: [a.id],
				id: "data.editRepeatGroup",
				label: I("designer.elementRenderer.memberGroupSettingsLabel", { groupName: a.name })
			}, {
				args: [a.id],
				id: "data.removeRepeatGroup"
			}], e) : ye(r.commands, [
				"data.createRepeat",
				"data.createFollow",
				"data.joinFollow"
			], e);
		}
		return v([{
			run: E,
			shortcut: "Escape"
		}, {
			run: O,
			shortcut: "Ctrl+Enter"
		}], {
			enabled: o,
			isolate: !0,
			target: p
		}), V(o, (e) => {
			e ? T() : D();
		}), (t, n) => e.node.visible ? (X(), N("div", {
			key: 0,
			"data-element-id": e.node.id,
			class: J(["absolute", f.value]),
			style: Y(d.value),
			onPointerdown: y,
			onDblclick: Q(b, ["stop"]),
			onContextmenu: Q(x, ["stop", "prevent"]),
			onPointerenter: C,
			onPointerleave: w
		}, [a.value && !o.value ? (X(), z(vn(a.value), {
			key: 0,
			node: e.node,
			page: e.page,
			"px-per-mm": e.pxPerMm,
			hovered: l.value,
			selected: u.value
		}, null, 8, [
			"node",
			"page",
			"px-per-mm",
			"hovered",
			"selected"
		])) : K("", !0), o.value ? (X(), N("div", {
			key: 1,
			ref_key: "editHostRef",
			ref: p,
			class: "absolute inset-0",
			onPointerdown: n[1] ||= Q(() => {}, ["stop"]),
			onDblclick: n[2] ||= Q(() => {}, ["stop"])
		}, [R(Ff, {
			modelValue: m.value,
			"onUpdate:modelValue": n[0] ||= (e) => m.value = e,
			"variable-text": H(i)?.inlineEditable?.variableText,
			"px-per-mm": e.pxPerMm,
			style: Y(_.value),
			onLeave: O
		}, null, 8, [
			"modelValue",
			"variable-text",
			"px-per-mm",
			"style"
		])], 544)) : K("", !0)], 46, Lf)) : K("", !0);
	}
}), [["__scopeId", "data-v-26f75d04"]]);
function zf(e, t) {
	return {
		left: `${e.x * t}px`,
		top: `${e.y * t}px`,
		...Nf(t, "left", 2)
	};
}
var Bf = [
	"title",
	"onPointerdown",
	"onContextmenu"
], Vf = { class: "min-w-0 truncate whitespace-nowrap" }, Hf = /* @__PURE__ */ Z({
	__name: "follow-overlay",
	props: {
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = e, n = k(), r = F(() => n.store().followBlock.getByPage(t.page.id).map((e) => ({
			block: e,
			bounds: Pn(t.page.elements.filter((t) => e.elementIds.includes(t.id)))
		})));
		function i(e) {
			let r = on(n.store().document.data, e.pageId, e.target), i = new Set(r?.elementIds ?? []);
			return t.page.elements.filter((e) => i.has(e.id));
		}
		function a(e) {
			return on(n.store().document.data, e.pageId, e.target)?.name ?? I("designer.followBlock.missingTarget");
		}
		function o(e) {
			return e.elementIds.some((e) => n.store().selection.has(e));
		}
		function s(e) {
			function t(e, ...t) {
				n.commands.dispatch(e, ...t);
			}
			return ye(n.commands, [{
				args: [e.id],
				id: "data.editFollow",
				label: I("designer.followBlock.groupSettingsTitle")
			}, {
				args: [e.id],
				id: "data.removeFollow",
				label: I("designer.followBlock.cancelGroupTitle")
			}], t);
		}
		function c(e, t) {
			e.preventDefault(), e.stopPropagation(), n.store().ui.openContextMenu(e.clientX, e.clientY, s(t));
		}
		function l(e, r) {
			if (e.button !== 0 || n.store().view.activeTool !== "select") return;
			let i = n.store();
			if (i.element.getMany(r.elementIds).some((e) => e.locked)) return;
			i.scope.activate(t.page.id), i.selection.set([...r.elementIds]);
			let a = r.elementIds[0];
			a && jf(i, e, a, t.page, { selectKeyObject: !1 });
		}
		return (t, n) => (X(!0), N(G, null, M(r.value, ({ block: t, bounds: r }) => (X(), N(G, { key: t.id }, [
			r ? (X(), N("div", {
				key: 0,
				class: J(["follow-overlay__bounds pointer-events-none absolute border-dashed", o(t) ? "z-canvas-selection-member border-2 border-accent" : "z-canvas-repeat border border-follow/60"]),
				style: Y({
					left: `${r.x * e.pxPerMm}px`,
					top: `${r.y * e.pxPerMm}px`,
					width: `${r.width * e.pxPerMm}px`,
					height: `${r.height * e.pxPerMm}px`
				})
			}, null, 6)) : K("", !0),
			(X(!0), N(G, null, M(o(t) ? i(t) : [], (t) => (X(), N("div", {
				key: t.id,
				class: "pointer-events-none absolute z-canvas-repeat outline outline-2 outline-warning",
				style: Y({
					left: `${t.x * e.pxPerMm}px`,
					top: `${t.y * e.pxPerMm}px`,
					width: `${t.width * e.pxPerMm}px`,
					height: `${t.height * e.pxPerMm}px`,
					transform: `rotate(${t.rotation}deg)`
				})
			}, null, 4))), 128)),
			r ? (X(), N("div", {
				key: 1,
				class: "follow-overlay__badge cursor-move absolute z-canvas-repeat-label flex h-4.5 max-w-90 items-center gap-1 rounded-sm bg-follow px-1.5 text-caption text-on-follow",
				style: Y(H(zf)(r, e.pxPerMm)),
				title: `${t.name} · ${H(I)("designer.followBlock.targetBadge", { name: a(t) })} — ${H(I)("designer.followBlock.selectGroupTitle")}`,
				onPointerdown: Q((e) => l(e, t), ["stop"]),
				onClick: n[0] ||= Q(() => {}, ["stop"]),
				onContextmenu: Q((e) => c(e, t), ["stop", "prevent"])
			}, [R(T, {
				name: "link",
				class: "h-3 w-3 shrink-0"
			}), P("span", Vf, W(H(I)("designer.followBlock.groupBadge", {
				group: t.name,
				target: a(t)
			})), 1)], 44, Bf)) : K("", !0)
		], 64))), 128));
	}
});
function Uf(e, t, n, r, i = {}) {
	if (e.view.settings.guidesLocked) return;
	let a = t.currentTarget, o = e.view.originOf(n.id);
	if (!o) return;
	let s = e.view.zoom, c = r.orientation === "horizontal", l = c ? n.height : n.width;
	e.view.setDraggingGuide({
		guideId: r.id,
		pageId: n.id
	}), gf(e, {
		onEnd(t, a) {
			if (e.view.setDraggingGuide(null), i.discardIfUnmoved && !a) {
				e.guide.remove(n.id, r.id, { transient: !0 });
				return;
			}
			let o = e.guide.get(n.id, r.id);
			o && (o.position < 0 || o.position > l) ? e.guide.remove(n.id, r.id, { transient: !0 }) : o && e.guide.move(n.id, r.id, On(o.position, 0, l), { transient: !0 }), e.history.commit();
		},
		onMove(t) {
			let i = mr(e).contentMmFromClient(t.event.clientX, t.event.clientY, e.view.zoom), a = Hn(o, i), s = c ? a.y : a.x;
			t.event.shiftKey && e.view.settings.gridSize > 0 && (s = Math.round(s / e.view.settings.gridSize) * e.view.settings.gridSize), e.guide.move(n.id, r.id, s, { transient: !0 });
		},
		pointerId: t.pointerId,
		startClient: {
			x: t.clientX,
			y: t.clientY
		},
		startPoint: mr(e).contentMmFromClient(t.clientX, t.clientY, s),
		tag: "guide",
		target: a,
		threshold: 1
	});
}
var Wf = {
	key: 0,
	class: "pointer-events-none absolute inset-0 z-canvas-guide overflow-hidden"
}, Gf = [
	"data-guide-id",
	"title",
	"onPointerdown",
	"onDblclick",
	"onContextmenu"
], Kf = /* @__PURE__ */ Z({
	__name: "guides-layer",
	props: {
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = e, n = k().store(), { commands: r } = k();
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
			n.view.activeTool === "hand" || n.view.settings.guidesLocked || e.button === 0 && (e.preventDefault(), e.stopPropagation(), n.scope.activate(t.page.id), n.selection.selectGuide(r.id), Uf(n, e, t.page, r));
		}
		function o(e) {
			c("guide.edit", t.page.id, e.id);
		}
		function s(e, i) {
			n.view.settings.guidesLocked || (e.preventDefault(), e.stopPropagation(), n.scope.activate(t.page.id), n.selection.selectGuide(i.id), n.ui.openContextMenu(e.clientX, e.clientY, ye(r, [{
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
		return (t, r) => H(n).view.settings.showGuides ? (X(), N("div", Wf, [(X(!0), N(G, null, M(e.page.guides, (e) => (X(), N("div", {
			key: e.id,
			"data-guide-id": e.id,
			class: J(["pointer-events-auto absolute", i(e)]),
			style: Y(l(e)),
			title: H(n).view.settings.guidesLocked ? H(I)("designer.guidesLayer.lockedHint") : H(I)("designer.guidesLayer.interactionHint"),
			onPointerdown: (t) => a(t, e),
			onDblclick: (t) => o(e),
			onContextmenu: (t) => s(t, e)
		}, [P("div", {
			class: J(["absolute", H(n).selection.selectedGuideId === e.id ? "bg-accent" : "bg-guide/80"]),
			style: Y(u(e))
		}, null, 6)], 46, Gf))), 128))])) : K("", !0);
	}
}), qf = /* @__PURE__ */ Z({
	__name: "marquee-overlay",
	props: {
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = e, n = k().store(), r = F(() => {
			let e = n.view.marquee;
			return e && e.pageId === t.page.id ? e.rect : null;
		});
		return (t, n) => r.value ? (X(), N("div", {
			key: 0,
			class: "pointer-events-none absolute z-canvas-marquee border border-accent bg-accent/10",
			style: Y({
				left: `${r.value.x * e.pxPerMm}px`,
				top: `${r.value.y * e.pxPerMm}px`,
				width: `${r.value.width * e.pxPerMm}px`,
				height: `${r.value.height * e.pxPerMm}px`
			})
		}, null, 4)) : K("", !0);
	}
}), Jf = [
	"title",
	"onPointerdown",
	"onClick"
], Yf = { class: "max-w-40 truncate" }, Xf = { class: "repeat-overlay__collection max-w-30 truncate opacity-80" }, Zf = /* @__PURE__ */ Z({
	__name: "repeat-overlay",
	props: {
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = e, n = k().store(), r = F(() => n.repeatGroup.getByPage(t.page.id));
		function i(e) {
			let t = n.repeatGroup.getMembers(e.id);
			return Cn(t.map((e) => ({
				height: e.height,
				width: e.width,
				x: e.x,
				y: e.y
			})));
		}
		function a(e) {
			let n = i(e);
			return n ? {
				height: `${n.height * t.pxPerMm}px`,
				left: `${n.x * t.pxPerMm}px`,
				top: `${n.y * t.pxPerMm}px`,
				width: `${n.width * t.pxPerMm}px`
			} : { display: "none" };
		}
		function o(e) {
			let n = i(e);
			return n ? zf(n, t.pxPerMm) : { display: "none" };
		}
		function s(e) {
			return n.repeatGroup.selected?.id === e.id;
		}
		function c(e) {
			n.selection.set([...e.elementIds]);
		}
		function l(e, r) {
			if (e.button !== 0 || n.view.activeTool !== "select" || n.repeatGroup.getMembers(r.id).some((e) => e.locked)) return;
			n.scope.activate(t.page.id), n.selection.set([...r.elementIds]);
			let i = r.elementIds[0];
			i && jf(n, e, i, t.page, { selectKeyObject: !1 });
		}
		return (e, t) => (X(!0), N(G, null, M(r.value, (e) => (X(), N(G, { key: e.id }, [P("div", {
			class: J(["pointer-events-none absolute z-canvas-repeat rounded-sm border border-dashed", s(e) ? "border-accent bg-accent/5" : "border-accent/40"]),
			style: Y(a(e))
		}, null, 6), P("button", {
			type: "button",
			class: J(["repeat-overlay__label absolute z-canvas-repeat-label flex h-4.5 cursor-move items-center gap-1 rounded-sm px-1.5 text-caption shadow-sm", s(e) ? "repeat-overlay__label--selected bg-accent text-on-accent" : "bg-accent/85 text-on-accent hover:bg-accent"]),
			style: Y(o(e)),
			title: H(I)("designer.repeatOverlay.moveMembersTitle"),
			onPointerdown: Q((t) => l(t, e), ["stop"]),
			onClick: Q((t) => c(e), ["stop"])
		}, [
			R(T, {
				name: "loop",
				class: "h-3 w-3"
			}),
			P("span", Yf, W(e.name), 1),
			P("span", Xf, W(e.collection || H(I)("designer.repeatOverlay.unboundCollection")), 1)
		], 46, Jf)], 64))), 128));
	}
});
function Qf(e, t, n, r, i) {
	let a = e.element.find(n), o = a?.node.points;
	if (!a || a.node.locked || !o) return;
	let s = a.node, c = t.currentTarget, l = e.view.originOf(i.id);
	if (!l) return;
	let u = e.view.zoom, d = mr(e).contentMmFromClient(t.clientX, t.clientY, u), f = o.map((e) => ({
		x: e.x,
		y: e.y
	})), p = Af(e, i), m = f[+(r === 0)] ?? f[r], h = /* @__PURE__ */ new Set([n]), g = {
		gridSize: e.view.settings.gridSize,
		snapElements: e.view.settings.snapToElements,
		snapGrid: e.view.settings.snapToGrid,
		snapGuides: e.view.settings.snapToGuides,
		snapMargins: e.view.settings.snapToMargins,
		get threshold() {
			return xf(e.view.zoom);
		}
	}, _ = (e) => f.map((t, n) => n === r ? e : t);
	gf(e, {
		onEnd(t, n) {
			e.view.setSnapLines({
				h: [],
				pageId: "",
				v: []
			}), n && e.history.commit();
		},
		onMove(r) {
			let a = mr(e).contentMmFromClient(r.event.clientX, r.event.clientY, e.view.zoom), o = Hn(l, a);
			t.shiftKey && m && (o = Zt(m, o, 45));
			let c = Df(o, e.canvas.getPage(i.id) ?? i, h, g), u = p([{
				id: n,
				patch: dr(s, _(c))
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
function $f(e, t, n) {
	let r = dn[t.handle], i = null, a = null;
	r.u !== 0 && (i = r.u === 1 ? e.x + e.width : e.x), r.v !== 0 && (a = r.v === 1 ? e.y + e.height : e.y);
	let o = Ef(i, a, t.page, t.excludeIds, t.snap), s = e;
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
			height: kr(s.height),
			width: kr(s.width),
			x: kr(s.x),
			y: kr(s.y)
		},
		vLines: o.vLines
	};
}
function ep(e, t) {
	let n = Jn(e), r = xr(e, t.elements), i = (t.elements ?? Or).get(e.type), a = i?.aspectRatio;
	return function(o, s, c = t.keepRatio) {
		let l = Gt(n, e.rotation, t.handle, o, s, {
			aspectRatio: a,
			keepRatio: c,
			minHeight: r.height,
			minWidth: r.width
		}), u = e.rotation === 0 ? $f(l, t, r) : {
			hasVerticalSnap: !1,
			hLines: [],
			rect: l,
			vLines: []
		};
		if (e.rotation === 0 && dn[t.handle].v === 1 && !a && !c && !u.hasVerticalSnap && i?.snapResizeHeight) {
			let n = t.snap.threshold, a = i.snapResizeHeight({
				height: l.height,
				node: e,
				page: t.page,
				threshold: n,
				width: u.rect.width
			});
			if (a !== void 0) {
				let e = kr(a);
				Number.isFinite(e) && e >= r.height && Math.abs(e - l.height) <= n && (u.rect.height = e);
			}
		}
		if ((a || c) && e.rotation === 0) {
			let e = dn[t.handle];
			u.rect = Gt(n, 0, t.handle, {
				x: s.x + e.u * (u.rect.width - n.width),
				y: s.y + e.v * (u.rect.height - n.height)
			}, s, {
				aspectRatio: a,
				keepRatio: c,
				minHeight: r.height,
				minWidth: r.width
			});
		}
		let d = Wn(e, u.rect, t.elements);
		if (dn[t.handle].v === -1 && typeof d.height == "number") {
			let t = d.height - u.rect.height, n = e.rotation * Math.PI / 180;
			d.x = u.rect.x + Math.sin(n) * t / 2, d.y = u.rect.y - (1 + Math.cos(n)) * t / 2;
		}
		return {
			hLines: u.hLines,
			patches: [{
				id: e.id,
				patch: d
			}],
			vLines: u.vLines
		};
	};
}
function tp(e, t) {
	let n = e.map((e) => ({
		geometry: Jn(e),
		node: e
	})), r = Cn(n.map((e) => e.geometry));
	if (!r) return;
	let i = dn[t.handle], a = {
		x: r.x + (1 - i.u) / 2 * r.width,
		y: r.y + (1 - i.v) / 2 * r.height
	}, o = np(e, t.elements);
	return function(e, i, s = t.keepRatio) {
		let c = $f(Gt(r, 0, t.handle, e, i, { minSize: 2 }), t, {
			height: 2,
			width: 2
		}), l = Math.max(c.rect.width / r.width, o.x), u = Math.max(c.rect.height / r.height, o.y);
		if (s) {
			let e = Math.max(l, u);
			l = Math.max(e, o.x), u = Math.max(e, o.y);
		}
		return {
			hLines: c.hLines,
			patches: n.map(({ geometry: e, node: n }) => ({
				id: n.id,
				patch: Wn(n, gn(e, a, l, u), t.elements)
			})),
			vLines: c.vLines
		};
	};
}
function np(e, t = Or) {
	let n = 0, r = 0;
	for (let i of e) {
		let e = xr(i, t);
		n = Math.max(n, i.width > 0 ? e.width / i.width : 0), r = Math.max(r, i.height > 0 ? e.height / i.height : 0);
	}
	return {
		x: n,
		y: r
	};
}
function rp(e, t) {
	return e.length === 1 ? ep(e[0], t) : tp(e, t);
}
function ip(e, t, n, r) {
	return ap(t, e.event.clientX, e.event.clientY, n, r);
}
function ap(e, t, n, r, i) {
	let a = mr(e).contentMmFromClient(t, n, i);
	return Hn(r, a);
}
function op(e, t, n, r) {
	let i = e.canvas.getPage(r.id) ?? r, a = new Map(i.elements.map((e) => [e.id, e])), o = e.selection.unlockedNodes.map((e) => a.get(e.id) ?? e), s = e.view.originOf(r.id);
	if (o.length === 0 || !s) return;
	let c = e.view.zoom, l = rp(o, {
		elements: Qt(e),
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
				return xf(e.view.zoom);
			}
		}
	});
	if (!l) return;
	let u = Af(e, r);
	gf(e, {
		onEnd(t, n) {
			e.view.setSnapLines({
				h: [],
				pageId: "",
				v: []
			}), n && e.history.commit();
		},
		onMove(t) {
			let n = ip(t, e, s, e.view.zoom), i = l(n, t.startPoint, t.event.shiftKey), a = u(i.patches).some((e) => i.patches.some((t) => t.id === e.id));
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
		startPoint: ap(e, t.clientX, t.clientY, s, c),
		tag: "resize",
		target: t.currentTarget,
		threshold: 1
	});
}
function sp(e, t, n, r) {
	let i = e.element.find(n);
	if (!i || i.node.locked) return;
	let a = e.canvas.getPage(r.id)?.elements.find((e) => e.id === n) ?? i.node, o = t.currentTarget, s = e.view.originOf(r.id);
	if (!s) return;
	let c = e.view.zoom, l = ap(e, t.clientX, t.clientY, s, c), u = {
		x: a.x + a.width / 2,
		y: a.y + a.height / 2
	}, d = Math.atan2(l.y - u.y, l.x - u.x), f = a.rotation, p = Af(e, r);
	gf(e, {
		onEnd(t, n) {
			n && e.history.commit();
		},
		onMove(n) {
			let r = ip(n, e, s, e.view.zoom), i = Math.atan2(r.y - u.y, r.x - u.x), o = f + (i - d) * 180 / Math.PI;
			t.shiftKey && (o = Math.round(o / 15) * 15), p([{
				id: a.id,
				patch: { rotation: kr(En(o), 1) }
			}]);
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
var cp = [
	"x1",
	"y1",
	"x2",
	"y2"
], lp = /* @__PURE__ */ Z({
	__name: "selection-member",
	props: {
		isKey: { type: Boolean },
		node: {},
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = e, n = F(() => ({
			height: `${t.page.height * t.pxPerMm}px`,
			left: "0px",
			top: "0px",
			width: `${t.page.width * t.pxPerMm}px`
		}));
		function r(e) {
			return If(e, t.pxPerMm);
		}
		return (t, i) => H(hr)(e.node) && e.node.points ? (X(), N("svg", {
			key: 0,
			class: "pointer-events-none absolute z-canvas-selection-member overflow-visible",
			style: Y(n.value)
		}, [P("line", {
			x1: e.node.points[0].x * e.pxPerMm,
			y1: e.node.points[0].y * e.pxPerMm,
			x2: e.node.points[1].x * e.pxPerMm,
			y2: e.node.points[1].y * e.pxPerMm,
			stroke: "var(--color-accent)",
			"stroke-opacity": "0.5",
			"stroke-width": "1.5"
		}, null, 8, cp)], 4)) : (X(), N("div", {
			key: 1,
			class: J(["pointer-events-none absolute z-canvas-selection-member", e.isKey ? "border-2 border-accent" : "border border-accent/50"]),
			style: Y(r(e.node))
		}, null, 6));
	}
}), up = [
	"x1",
	"y1",
	"x2",
	"y2",
	"pointer-events"
], dp = ["title", "onPointerdown"], fp = { class: "absolute inset-0 h-full w-full overflow-visible" }, pp = ["pointer-events"], mp = ["onPointerdown"], hp = {
	class: "pointer-events-none absolute left-1/2 h-px w-px",
	style: {
		top: 0,
		marginLeft: "-0.5px"
	}
}, gp = ["title"], _p = { class: "absolute inset-0 h-full w-full overflow-visible" }, vp = ["pointer-events"], yp = ["onPointerdown"], bp = /* @__PURE__ */ Z({
	__name: "selection-overlay",
	props: {
		displayNodes: {},
		layer: {},
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = e, n = k().store(), r = Fn, i = [
			"nw",
			"ne",
			"se",
			"sw"
		], a = F(() => n.view.activeTool === "hand"), o = F(() => {
			let e = n.selection.getNodesOnPage(t.page.id, { visible: !0 });
			if (!t.displayNodes) return e;
			let r = new Map(t.displayNodes.map((e) => [e.id, e]));
			return e.map((e) => r.get(e.id) ?? e).filter((e) => e.visible);
		}), s = F(() => n.selection.keyId), c = F(() => o.value.find((e) => !e.locked)), l = F(() => {
			let e = o.value[0];
			return e && hr(e) ? e : null;
		}), u = F(() => l.value?.points ?? null), d = F(() => ({
			height: `${t.page.height * t.pxPerMm}px`,
			left: "0px",
			top: "0px",
			width: `${t.page.width * t.pxPerMm}px`
		})), f = F(() => o.value.length < 2 ? null : Cn(o.value.map((e) => v(e)))), p = F(() => {
			let e = f.value;
			return e ? If(e, t.pxPerMm) : {};
		}), m = {
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
		function h(e) {
			return {
				cursor: "move",
				left: `${e.x * t.pxPerMm}px`,
				top: `${e.y * t.pxPerMm}px`,
				transform: "translate(-50%, -50%)"
			};
		}
		function g(e, r) {
			let i = l.value;
			i && Qf(n, e, i.id, r, t.page);
		}
		function _(e) {
			if (e.button !== 0 || a.value || n.view.spacePanning) return;
			let r = c.value;
			r && (e.stopPropagation(), e.preventDefault(), n.scope.activate(t.page.id), jf(n, e, r.id, t.page, { selectKeyObject: !1 }));
		}
		function v(e) {
			return pr({
				height: e.height,
				width: e.width,
				x: e.x,
				y: e.y
			}, e.rotation);
		}
		function y(e) {
			return If(e, t.pxPerMm);
		}
		function b(e) {
			let t = m[e];
			return {
				cursor: t.cursor,
				left: t.left,
				top: t.top,
				transform: "translate(-50%, -50%)"
			};
		}
		function x(e, r) {
			op(n, e, r, t.page);
		}
		function S(e) {
			let r = o.value[0];
			r && sp(n, e, r.id, t.page);
		}
		return (t, f) => e.layer === "move" ? (X(), N(G, { key: 0 }, [c.value && !a.value && !H(n).view.spacePanning && (o.value.length > 1 || !l.value) ? (X(), N("div", {
			key: 0,
			class: "selection-overlay__move absolute -z-1 cursor-move",
			style: Y(o.value.length > 1 ? p.value : y(c.value)),
			onPointerdown: _
		}, null, 36)) : K("", !0)], 64)) : o.value.length === 1 && o.value[0] ? (X(), N(G, { key: 1 }, [l.value && u.value ? (X(), N(G, { key: 0 }, [(X(), N("svg", {
			class: "pointer-events-none absolute z-canvas-selection overflow-visible",
			style: Y(d.value)
		}, [P("line", {
			x1: u.value[0].x * e.pxPerMm,
			y1: u.value[0].y * e.pxPerMm,
			x2: u.value[1].x * e.pxPerMm,
			y2: u.value[1].y * e.pxPerMm,
			stroke: "var(--color-accent)",
			"stroke-width": "1.5",
			class: "cursor-move",
			"pointer-events": l.value.locked || a.value ? "none" : "stroke",
			onPointerdown: _
		}, null, 40, up)], 4)), !l.value.locked && H(n).view.activeTool !== "hand" ? (X(!0), N(G, { key: 0 }, M(u.value, (e, t) => (X(), N("div", {
			key: t,
			class: "pointer-events-auto absolute z-canvas-selection-handle h-2.5 w-2.5 border border-accent bg-handle hover:bg-accent/20",
			style: Y(h(e)),
			title: H(I)("designer.selectionOverlay.dragEndpointTitle"),
			onPointerdown: Q((e) => g(e, t), ["stop", "prevent"])
		}, null, 44, dp))), 128)) : K("", !0)], 64)) : (X(), N("div", {
			key: 1,
			class: "pointer-events-none absolute z-canvas-selection",
			style: Y(y(o.value[0]))
		}, [(X(), N("svg", fp, [P("rect", {
			width: "100%",
			height: "100%",
			fill: "none",
			stroke: "var(--color-accent)",
			class: "cursor-move",
			"pointer-events": o.value[0].locked || a.value ? "none" : "stroke",
			onPointerdown: _
		}, null, 40, pp)])), !o.value[0].locked && H(n).view.activeTool !== "hand" ? (X(), N(G, { key: 0 }, [(X(!0), N(G, null, M(H(r), (e) => (X(), N("div", {
			key: e,
			class: "pointer-events-auto absolute h-2 w-2 border border-accent bg-handle",
			style: Y(b(e)),
			onPointerdown: Q((t) => x(t, e), ["stop", "prevent"])
		}, null, 44, mp))), 128)), P("div", hp, [P("div", {
			class: "pointer-events-auto absolute h-4 w-4 -translate-x-1/2 -translate-y-6 cursor-grab rounded-full border border-accent bg-handle hover:bg-accent/20",
			style: {
				left: 0,
				top: 0
			},
			title: H(I)("designer.selectionOverlay.rotateTitle"),
			onPointerdown: Q(S, ["stop", "prevent"])
		}, null, 40, gp)])], 64)) : K("", !0)], 4))], 64)) : o.value.length > 1 ? (X(), N(G, { key: 2 }, [(X(!0), N(G, null, M(o.value, (t) => (X(), z(lp, {
			key: t.id,
			"is-key": t.id === s.value,
			node: t,
			page: e.page,
			"px-per-mm": e.pxPerMm
		}, null, 8, [
			"is-key",
			"node",
			"page",
			"px-per-mm"
		]))), 128)), P("div", {
			class: "pointer-events-none absolute z-canvas-selection",
			style: Y(p.value)
		}, [(X(), N("svg", _p, [P("rect", {
			width: "100%",
			height: "100%",
			fill: "none",
			stroke: "var(--color-accent)",
			"stroke-dasharray": "4 3",
			class: "cursor-move",
			"pointer-events": a.value ? "none" : "stroke",
			onPointerdown: _
		}, null, 40, vp)])), (X(!0), N(G, null, M(a.value ? [] : i, (e) => (X(), N("div", {
			key: e,
			class: "pointer-events-auto absolute h-2 w-2 border border-accent bg-handle",
			style: Y(b(e)),
			onPointerdown: Q((t) => x(t, e), ["stop", "prevent"])
		}, null, 44, yp))), 128))], 4)], 64)) : K("", !0);
	}
});
function xp(e, t) {
	let n = Sn(e.props), r = e.rotation * Math.PI / 180, i = (t.x / n.viewWidth - .5) * e.width, a = (t.y / n.viewHeight - .5) * e.height;
	return {
		x: e.x + e.width / 2 + i * Math.cos(r) - a * Math.sin(r),
		y: e.y + e.height / 2 + i * Math.sin(r) + a * Math.cos(r)
	};
}
function Sp(e, t) {
	let n = Sn(e.props), r = e.rotation * Math.PI / 180, i = t.x - e.x - e.width / 2, a = t.y - e.y - e.height / 2;
	return {
		x: ((i * Math.cos(r) + a * Math.sin(r)) / e.width + .5) * n.viewWidth,
		y: ((-i * Math.sin(r) + a * Math.cos(r)) / e.height + .5) * n.viewHeight
	};
}
function Cp(e, t, n, r) {
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
function wp(e, t) {
	let n = Sn(e.props), r = Ar(t, n.closed), i = xp(e, {
		x: r.x + r.width / 2,
		y: r.y + r.height / 2
	}), a = r.width / n.viewWidth * e.width, o = r.height / n.viewHeight * e.height;
	return {
		height: o,
		props: {
			...e.props,
			anchors: r.props.anchors,
			viewHeight: r.height,
			viewWidth: r.width
		},
		width: a,
		x: i.x - a / 2,
		y: i.y - o / 2
	};
}
function Tp(e) {
	return I(`elements.penElement.${e}`);
}
var Ep = ["aria-label"], Dp = ["transform"], Op = ["d", "stroke-width"], kp = [
	"x1",
	"y1",
	"x2",
	"y2",
	"stroke-width"
], Ap = [
	"data-pen-control",
	"data-anchor-index",
	"cx",
	"cy",
	"r",
	"stroke-width",
	"onPointerdown"
], jp = [
	"data-anchor-index",
	"x",
	"y",
	"width",
	"height",
	"stroke-width",
	"onPointerdown"
], Mp = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "pen-edit-surface",
	props: {
		node: {},
		surface: {}
	},
	setup(e) {
		let t = e, n = k(), r = n.store(), i = B(), a = Zn(), o = F(() => r.view.pxPerMm), s = F(() => Sn(t.node.props).anchors.map((e) => ({
			incoming: xp(t.node, e.incoming),
			outgoing: xp(t.node, e.outgoing),
			point: xp(t.node, e.point)
		}))), c = `pen.edit.${t.node.id}`, l;
		v([{
			run: () => u("cancel"),
			shortcut: "Escape"
		}, {
			run: () => u("finish"),
			shortcut: "Enter"
		}], {
			enabled: () => !!a.value,
			target: i
		});
		function u(e) {
			n.commands.dispatch(`${c}.${e}`);
		}
		function d(e) {
			return hn(t.surface.getBoundingClientRect(), {
				x: e.clientX,
				y: e.clientY
			}, o.value);
		}
		function f(e) {
			i.value?.hasPointerCapture(e) && i.value.releasePointerCapture(e);
		}
		function p(e) {
			let t = a.value;
			if (t) {
				a.value = void 0;
				try {
					e ? t.edit.finish() : t.edit.cancel();
				} finally {
					f(t.pointerId);
				}
			}
		}
		function m(e, n, o) {
			if (e.button !== 0 || r.view.spacePanning || a.value) return;
			e.preventDefault(), e.stopPropagation();
			let s = Vt(r, t.node.id);
			if (!s) return;
			let c = o === "point" && e.altKey;
			a.value = {
				anchors: Sn(t.node.props).anchors,
				control: c ? "outgoing" : o,
				edit: s,
				index: n,
				node: cn(t.node),
				origin: Sp(t.node, d(e)),
				pointerId: e.pointerId,
				pullHandles: c
			}, i.value?.focus({ preventScroll: !0 }), i.value?.setPointerCapture(e.pointerId);
		}
		function h(e) {
			let t = a.value;
			if (!t || e.pointerId !== t.pointerId || r.view.spacePanning) return;
			let n = Sp(t.node, d(e)), i = t.anchors[t.index], o = {
				x: i[t.control].x + n.x - t.origin.x,
				y: i[t.control].y + n.y - t.origin.y
			}, s = t.anchors.map((n, r) => r === t.index ? Cp(n, t.control, o, e.altKey && !t.pullHandles) : n);
			t.edit.update(wp(t.node, s)) || p(!1);
		}
		function g(e) {
			e.pointerId === a.value?.pointerId && y(() => p(!0));
		}
		function _(e) {
			e.pointerId === a.value?.pointerId && p(!1);
		}
		function y(e) {
			try {
				e();
			} catch (e) {
				try {
					p(!1);
				} finally {
					n.errors.capture(e, { source: "canvas.pen.edit" });
				}
			}
		}
		return Dr(() => {
			l = n.commands.registerScoped([{
				id: `${c}.cancel`,
				run: () => p(!1),
				get title() {
					return Tp("cancelEdit");
				}
			}, {
				id: `${c}.finish`,
				run: () => p(!0),
				get title() {
					return Tp("finishEdit");
				}
			}]);
		}), ar(() => {
			try {
				p(!1);
			} finally {
				l?.();
			}
		}), (t, n) => (X(), N("svg", {
			ref_key: "svg",
			ref: i,
			"data-pen-edit-overlay": "",
			class: "pen-edit-surface",
			width: "100%",
			height: "100%",
			tabindex: "-1",
			"aria-label": H(Tp)("editHelp"),
			onPointermove: n[0] ||= (e) => y(() => h(e)),
			onPointerup: g,
			onPointercancel: _,
			onLostpointercapture: _
		}, [P("title", null, W(H(Tp)("editHelp")), 1), P("g", { transform: `scale(${o.value})` }, [P("path", {
			d: H(cr)(s.value, e.node.props.closed === !0),
			fill: "none",
			stroke: "var(--color-pen-control)",
			"stroke-width": 1 / o.value
		}, null, 8, Op), (X(!0), N(G, null, M(s.value, (e, t) => (X(), N("g", { key: t }, [
			P("line", {
				x1: e.incoming.x,
				y1: e.incoming.y,
				x2: e.outgoing.x,
				y2: e.outgoing.y,
				stroke: "var(--color-pen-control)",
				"stroke-width": 1 / o.value
			}, null, 8, kp),
			(X(), N(G, null, M(["incoming", "outgoing"], (n) => P("circle", {
				key: n,
				"data-pen-control": n,
				"data-anchor-index": t,
				class: "pen-edit-surface__control cursor-move",
				cx: e[n].x,
				cy: e[n].y,
				r: 4 / o.value,
				fill: "var(--color-handle)",
				stroke: "var(--color-pen-control)",
				"stroke-width": 1 / o.value,
				onPointerdown: (e) => y(() => m(e, t, n))
			}, null, 40, Ap)), 64)),
			P("rect", {
				"data-pen-control": "point",
				"data-anchor-index": t,
				class: "pen-edit-surface__control cursor-move",
				x: e.point.x - 4 / o.value,
				y: e.point.y - 4 / o.value,
				width: 8 / o.value,
				height: 8 / o.value,
				fill: "var(--color-pen-control)",
				stroke: "var(--color-handle)",
				"stroke-width": 1 / o.value,
				onPointerdown: (e) => y(() => m(e, t, "point"))
			}, null, 40, jp)
		]))), 128))], 8, Dp)], 40, Ep));
	}
}), [["__scopeId", "data-v-a86f5707"]]), Np = ["aria-label"], Pp = ["transform"], Fp = [
	"d",
	"stroke",
	"stroke-width"
], Ip = [
	"x1",
	"y1",
	"x2",
	"y2",
	"stroke-width"
], Lp = [
	"cx",
	"cy",
	"r"
], Rp = [
	"cx",
	"cy",
	"r"
], zp = [
	"x",
	"y",
	"width",
	"height",
	"stroke-width"
], Bp = /* @__PURE__ */ new Map([[tn, {
	create: /* @__PURE__ */ t(/* @__PURE__ */ Z({
		__name: "pen-surface",
		props: {
			pageId: {},
			surface: {}
		},
		setup(e) {
			let t = e, n = k(), r = n.store(), i = B(), a = B([]), o = B(), s = B(), c = B(), l = B(!1), u = F(() => r.view.pxPerMm), d = F(() => r.view.spacePanning), f = F(() => r.element.getToolProps(tn)), p = F(() => {
				let e = [...a.value];
				return o.value && s.value === void 0 && !l.value && e.push(nn(o.value)), cr(e, l.value);
			}), m = `pen.${t.pageId}`, h;
			v([
				{
					run: () => g("finish"),
					shortcut: "Enter"
				},
				{
					run: () => g("cancel"),
					shortcut: "Escape"
				},
				{
					run: () => g("removeAnchor"),
					shortcut: [
						"Backspace",
						"Delete",
						"Ctrl+z"
					]
				}
			], {
				enabled: () => a.value.length > 0,
				target: i
			});
			function g(e) {
				n.commands.dispatch(`${m}.${e}`);
			}
			function _(e) {
				return hn(t.surface.getBoundingClientRect(), {
					x: e.clientX,
					y: e.clientY
				}, u.value);
			}
			function y(e) {
				let t = a.value[0]?.point;
				return a.value.length >= 3 && !!t && Math.hypot(e.x - t.x, e.y - t.y) * u.value <= 8;
			}
			function b() {
				let e = c.value;
				c.value = void 0, s.value = void 0, e !== void 0 && i.value?.hasPointerCapture(e) && i.value.releasePointerCapture(e);
			}
			function x() {
				b(), a.value = [], o.value = void 0, l.value = !1;
			}
			function S(e = !1) {
				if (a.value.length < 2) x();
				else try {
					rn(r, tn, Ar(a.value, e, f.value), t.pageId);
				} finally {
					x();
				}
			}
			function C() {
				b(), a.value.pop(), l.value = !1, a.value.length === 0 && x();
			}
			function w(e) {
				if (e.button !== 0 || d.value || c.value !== void 0) return;
				e.preventDefault(), e.stopPropagation(), i.value?.focus({ preventScroll: !0 }), r.scope.activate(t.pageId), r.ui.closeContextMenu();
				let n = _(e);
				if (y(n)) {
					S(!0);
					return;
				}
				let l = a.value.at(-1)?.point;
				l && Math.hypot(n.x - l.x, n.y - l.y) * u.value < 2 || (a.value.push(nn(n)), s.value = a.value.length - 1, c.value = e.pointerId, i.value?.setPointerCapture(e.pointerId), o.value = void 0);
			}
			function T(e) {
				if (d.value) return;
				let t = _(e);
				if (s.value !== void 0) {
					if (e.pointerId !== c.value) return;
					let n = a.value[s.value];
					Math.hypot(t.x - n.point.x, t.y - n.point.y) * u.value >= 3 && (n.outgoing = t, n.incoming = {
						x: 2 * n.point.x - t.x,
						y: 2 * n.point.y - t.y
					});
				} else o.value = t, l.value = y(t);
			}
			function E(e) {
				e.pointerId === c.value && b();
			}
			function D(e) {
				e.pointerId === c.value && x();
			}
			function O() {
				s.value === void 0 && (o.value = void 0, l.value = !1);
			}
			function ee(e) {
				n.errors.capture(e, { source: "canvas.pen" });
			}
			function te(e) {
				try {
					e();
				} catch (e) {
					x(), ee(e);
				}
			}
			return Dr(() => {
				h = n.commands.registerScoped([
					{
						id: `${m}.finish`,
						run: () => S(),
						get title() {
							return Tp("finish");
						}
					},
					{
						id: `${m}.cancel`,
						run: () => x(),
						get title() {
							return Tp("cancel");
						}
					},
					{
						id: `${m}.removeAnchor`,
						run: () => C(),
						get title() {
							return Tp("removeAnchor");
						}
					}
				]);
			}), ar(() => {
				x(), h?.();
			}), (e, t) => (X(), N("svg", {
				ref_key: "svg",
				ref: i,
				"data-pen-overlay": "",
				class: J(["pen-surface", {
					"pen-surface--panning": d.value,
					"pen-surface--closing": l.value
				}]),
				width: "100%",
				height: "100%",
				tabindex: "-1",
				"aria-label": H(Tp)("help"),
				onPointerdown: t[0] ||= (e) => te(() => w(e)),
				onPointermove: T,
				onPointerup: E,
				onPointercancel: D,
				onLostpointercapture: D,
				onPointerleave: O,
				onDblclick: t[1] ||= Q((e) => g("finish"), ["stop", "prevent"]),
				onContextmenu: t[2] ||= Q((e) => g("cancel"), ["stop", "prevent"])
			}, [P("title", null, W(H(Tp)("help")), 1), P("g", {
				transform: `scale(${u.value})`,
				"pointer-events": "none"
			}, [P("path", {
				d: p.value,
				fill: "none",
				stroke: String(f.value.stroke ?? "#333333"),
				"stroke-width": H(Tr)(f.value)
			}, null, 8, Fp), (X(!0), N(G, null, M(a.value, (e, t) => (X(), N("g", { key: t }, [
				P("line", {
					x1: e.incoming.x,
					y1: e.incoming.y,
					x2: e.outgoing.x,
					y2: e.outgoing.y,
					stroke: "var(--color-pen-control)",
					"stroke-width": 1 / u.value
				}, null, 8, Ip),
				P("circle", {
					cx: e.incoming.x,
					cy: e.incoming.y,
					r: 2 / u.value,
					fill: "var(--color-pen-control)"
				}, null, 8, Lp),
				P("circle", {
					cx: e.outgoing.x,
					cy: e.outgoing.y,
					r: 2 / u.value,
					fill: "var(--color-pen-control)"
				}, null, 8, Rp),
				P("rect", {
					x: e.point.x - 3 / u.value,
					y: e.point.y - 3 / u.value,
					width: 6 / u.value,
					height: 6 / u.value,
					fill: "var(--color-handle)",
					stroke: "var(--color-pen-control)",
					"stroke-width": 1 / u.value
				}, null, 8, zp)
			]))), 128))], 8, Pp)], 42, Np));
		}
	}), [["__scopeId", "data-v-947b4ba9"]]),
	edit: Mp
}]]);
function Vp(e) {
	let t = k(), n = t.store();
	return {
		creationSurface: Dt((e) => {
			let t = n.view.activeTool;
			if (!t.startsWith("element:")) return;
			let r = t.slice(8), i = Bp.get(r)?.create;
			if (i && e.getCreatable(r)) return {
				component: i,
				type: r
			};
		}),
		editSurface: F(() => {
			if (n.view.activeTool !== "select" || n.view.settings.previewWithData || n.view.spacePanning) return;
			let { nodes: r } = t.getSelection(), i = r.length === 1 ? r[0] : void 0;
			if (!i?.visible || i.locked) return;
			let a = Bp.get(i.type)?.edit;
			if (a && n.element.find(i.id)?.page.id === e().id) return {
				component: a,
				node: i
			};
		})
	};
}
var Hp = ["title"], Up = {
	key: 0,
	class: "shrink-0 whitespace-nowrap text-accent"
}, Wp = ["data-page-surface"], Gp = { class: "page-view__content absolute inset-0 overflow-hidden" }, Kp = {
	key: 1,
	class: "pointer-events-none absolute inset-0 isolate"
}, qp = { class: "absolute inset-0 isolate z-canvas-content" }, Jp = 17, Yp = 2, Xp = /* @__PURE__ */ Z({
	__name: "page-view",
	props: {
		offsetX: {},
		offsetY: {},
		page: {},
		pxPerMm: {}
	},
	setup(e) {
		let t = e, n = k(), r = n.store(), { commands: i } = n, a = B(), { creationSurface: o, editSurface: s } = Vp(() => t.page), c = {
			bottom: `calc(100% + ${Yp}px)`,
			height: `${Jp}px`,
			lineHeight: `${Jp}px`
		}, l = F(() => {
			let { offsetX: e, offsetY: n, page: i } = t, a = n;
			for (let t of r.view.pageLayouts) t.y >= n || t.x >= e + i.width || t.x + t.page.width <= e || (a = Math.min(a, n - t.y - t.page.height));
			return a;
		}), u = F(() => l.value * t.pxPerMm >= 21), d = F(() => r.canvas.getPage(t.page.id)?.elements ?? r.canvas.resolve(t.page, t.page.elements)), f = F(() => r.template.editingId !== null), p = F(() => t.page.id === r.template.editingTemplate?.evenPage?.id ? 2 : 1), m = F(() => {
			if (r.template.editingTemplate?.facingPages) {
				let e = p.value === 2 ? "evenPages" : "oddPages";
				return `${t.page.name} · ${I(`designer.templateBanner.${e}`)}`;
			}
			return t.page.name;
		}), h = F(() => {
			let e = r.template.resolveFor(t.page);
			if (f.value) {
				let t = r.template.editingTemplate;
				e = t ? yr(r.document.data, t, p.value) : void 0;
			}
			return !e || e.page.elements.length === 0 ? [] : r.canvas.resolve(t.page, e.page.elements);
		}), g = F(() => {
			let e = r.template.resolveEditingPage(t.page.id);
			return e ? Pr(e) : r.template.effectiveBackground(t.page) || "#ffffff";
		}), _ = F(() => r.scope.active?.id === t.page.id), v = F(() => r.element.draftPageId === t.page.id ? r.element.draftElement : null), y = F(() => r.view.snapLines.pageId === t.page.id ? r.view.snapLines : null), b = F(() => {
			let e = r.view.settings.gridSize * t.pxPerMm;
			return {
				backgroundImage: "linear-gradient(to right, var(--color-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--color-grid) 1px, transparent 1px)",
				backgroundSize: `${e}px ${e}px`
			};
		}), x = F(() => {
			let e = rr(t.page);
			return {
				height: `${e.height * t.pxPerMm}px`,
				left: `${e.x * t.pxPerMm}px`,
				top: `${e.y * t.pxPerMm}px`,
				width: `${e.width * t.pxPerMm}px`
			};
		});
		function S(e) {
			return Math.round(e * 100) / 100;
		}
		function C(e) {
			if (e.button === 1 || r.view.spacePanning || (r.scope.activate(t.page.id), r.ui.closeContextMenu(), e.button !== 0)) return;
			if (r.view.activeTool === "select") {
				vf(r, e, t.page);
				return;
			}
			let i = Ln(r.view.activeTool, n.elements);
			if (i?.kind === "element" && i.elementType) {
				if (o.value) return;
				let a = w().find((t) => jr(t, T(e), n.elements));
				if (a) {
					jf(r, e, a.id, t.page);
					return;
				}
				kf(r, e, i.elementType, t.page, n);
			}
		}
		function w() {
			return d.value.filter((e) => e.visible && r.selection.has(e.id));
		}
		function T(e) {
			let n = e.currentTarget.getBoundingClientRect();
			return hn(n, {
				x: e.clientX,
				y: e.clientY
			}, t.pxPerMm);
		}
		function E(e) {
			r.scope.activate(t.page.id);
			let n = mr(r).contentMmFromClient(e.clientX, e.clientY, r.view.zoom), a = ye(i, [...Yn(n), "edit.selectAll"], D);
			r.template.isContainer(t.page.id) ? r.ui.openContextMenu(e.clientX, e.clientY, [
				...a,
				{ type: "divider" },
				...ye(i, [{
					args: [t.page.id],
					id: "template.pageSetup"
				}], D)
			]) : r.ui.openContextMenu(e.clientX, e.clientY, [
				...a,
				{ type: "divider" },
				...ye(i, [
					{
						args: [t.page.id],
						id: "file.pageSetup"
					},
					{
						args: [t.page.id],
						id: "page.applyTemplate"
					},
					{
						args: [t.page.id],
						id: "page.copy"
					},
					{
						args: [t.page.id],
						id: "page.remove"
					}
				], D)
			]);
		}
		function D(e, ...t) {
			i.dispatch(e, ...t);
		}
		function O(e) {
			e.button === 0 && !r.view.spacePanning && r.view.activeTool !== "hand" && e.stopPropagation();
		}
		async function ee(e) {
			let r = e.dataTransfer?.files?.[0];
			r && (e.preventDefault(), await Mf(n, r, t.page, T(e)));
		}
		return (t, n) => (X(), N("div", {
			class: "absolute",
			style: Y({
				left: `${e.offsetX * e.pxPerMm}px`,
				top: `${e.offsetY * e.pxPerMm}px`,
				width: `${e.page.width * e.pxPerMm}px`,
				height: `${e.page.height * e.pxPerMm}px`
			})
		}, [u.value ? (X(), N("div", {
			key: 0,
			class: "absolute inset-x-0 flex cursor-pointer items-center justify-between gap-2 overflow-hidden px-0.5 text-[14px] text-ink-dim select-none",
			style: c,
			title: m.value,
			onPointerdown: O,
			onDblclick: n[0] ||= Q((t) => D(f.value ? "template.pageSetup" : "file.pageSetup", e.page.id), ["stop"])
		}, [P("span", { class: J(["min-w-0 truncate", { "text-accent": _.value }]) }, W(H(I)("designer.pageView.pageSummary", {
			pageName: m.value,
			width: S(e.page.width),
			height: S(e.page.height)
		})), 3), f.value ? (X(), N("span", Up, W(H(I)("designer.pageView.templateEditingBadge")), 1)) : K("", !0)], 40, Hp)) : K("", !0), P("div", {
			ref_key: "surface",
			ref: a,
			class: J(["page-surface absolute inset-0 isolate [box-shadow:0_2px_18px_var(--color-shadow)]", { "outline outline-1 outline-selection-border": _.value }]),
			"data-page-surface": e.page.id,
			style: Y({ background: H(zn)(g.value) }),
			onPointerdown: C,
			onContextmenu: Q(E, ["prevent"]),
			onDragover: n[1] ||= Q(() => {}, ["prevent"]),
			onDrop: ee
		}, [
			R(bp, {
				layer: "move",
				"display-nodes": d.value,
				page: e.page,
				"px-per-mm": e.pxPerMm
			}, null, 8, [
				"display-nodes",
				"page",
				"px-per-mm"
			]),
			P("div", Gp, [
				H(r).view.settings.showGrid ? (X(), N("div", {
					key: 0,
					class: "pointer-events-none absolute inset-0",
					style: Y(b.value)
				}, null, 4)) : K("", !0),
				h.value.length > 0 ? (X(), N("div", Kp, [(X(!0), N(G, null, M(h.value, (t, n) => (X(), z(Rf, {
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
				]))), 128))])) : K("", !0),
				P("div", qp, [(X(!0), N(G, null, M(d.value, (t, n) => (X(), z(Rf, {
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
				v.value ? (X(), z(Rf, {
					key: 2,
					node: v.value,
					index: -1,
					page: e.page,
					"px-per-mm": e.pxPerMm,
					"is-draft": ""
				}, null, 8, [
					"node",
					"page",
					"px-per-mm"
				])) : K("", !0),
				R(Kf, {
					page: e.page,
					"px-per-mm": e.pxPerMm
				}, null, 8, ["page", "px-per-mm"]),
				H(r).view.settings.showMargins && e.page.margins ? (X(), N("div", {
					key: 3,
					class: "page-view__margins pointer-events-none absolute z-canvas-guide border border-dashed border-accent/60",
					style: Y(x.value)
				}, null, 4)) : K("", !0),
				R(Zf, {
					page: e.page,
					"px-per-mm": e.pxPerMm
				}, null, 8, ["page", "px-per-mm"]),
				R(Hf, {
					page: e.page,
					"px-per-mm": e.pxPerMm
				}, null, 8, ["page", "px-per-mm"]),
				y.value ? (X(), N(G, { key: 4 }, [(X(!0), N(G, null, M(y.value.v, (t, n) => (X(), N("div", {
					key: `v-${n}`,
					class: "pointer-events-none absolute z-canvas-snap",
					style: Y({
						left: `${t * e.pxPerMm}px`,
						top: 0,
						bottom: 0,
						width: "1px",
						background: "var(--color-snap)"
					})
				}, null, 4))), 128)), (X(!0), N(G, null, M(y.value.h, (t, n) => (X(), N("div", {
					key: `h-${n}`,
					class: "pointer-events-none absolute z-canvas-snap",
					style: Y({
						top: `${t * e.pxPerMm}px`,
						left: 0,
						right: 0,
						height: "1px",
						background: "var(--color-snap)"
					})
				}, null, 4))), 128))], 64)) : K("", !0),
				R(qf, {
					page: e.page,
					"px-per-mm": e.pxPerMm
				}, null, 8, ["page", "px-per-mm"])
			]),
			R(bp, {
				"display-nodes": d.value,
				page: e.page,
				"px-per-mm": e.pxPerMm
			}, null, 8, [
				"display-nodes",
				"page",
				"px-per-mm"
			]),
			a.value ? (X(), N(G, { key: 0 }, [H(o) ? (X(), z(vn(H(o).component), {
				key: H(o).type,
				"page-id": e.page.id,
				surface: a.value
			}, null, 8, ["page-id", "surface"])) : H(s) ? (X(), z(vn(H(s).component), {
				key: H(s).node.id,
				node: H(s).node,
				surface: a.value
			}, null, 8, ["node", "surface"])) : K("", !0)], 64)) : K("", !0)
		], 46, Wp)], 4));
	}
}), Zp = /* @__PURE__ */ Z({
	__name: "ruler",
	props: { orientation: {} },
	setup(e) {
		let t = e, n = k().store(), r = B(null), i = null, a = null;
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
			let r = mr(n).contentMmFromClient(e.clientX, e.clientY, n.view.zoom), i = t.orientation === "horizontal", a = n.view.pageLayouts.find((e) => i ? r.x >= e.x && r.x <= e.x + e.page.width : r.y >= e.y && r.y <= e.y + e.page.height) ?? n.view.getLayout(n.scope.active?.id ?? "");
			if (!a) return;
			let o = n.view.toLocal(a.page.id, r);
			if (!o) return;
			let s = i ? o.y : o.x, c = n.guide.add(a.page.id, i ? "horizontal" : "vertical", s, { transient: !0 });
			c && (n.scope.activate(a.page.id), Uf(n, e, a.page, c, { discardIfUnmoved: !0 }));
		}
		return Lt(() => {
			n.view.scrollPos.left, n.view.scrollPos.top, n.view.zoom, n.view.cursorContent?.x, n.view.cursorContent?.y, o();
		}), Dr(() => {
			a = new MutationObserver(o), a.observe(document.documentElement, {
				attributeFilter: ["theme-mode"],
				attributes: !0
			});
			let e = r.value;
			e && (i = new ResizeObserver(() => {
				o();
			}), i.observe(e));
		}), ar(() => {
			a?.disconnect(), a = null, i?.disconnect(), i = null;
		}), (t, n) => (X(), N("canvas", {
			ref_key: "canvasRef",
			ref: r,
			class: J(["block bg-panel", e.orientation === "horizontal" ? "h-5 w-full" : "h-full w-5"]),
			onPointerdown: s
		}, null, 34));
	}
}), Qp = { class: "flex w-full items-center gap-3" }, $p = { class: "shrink-0 text-compact text-ink-dim" }, em = { class: "min-w-0 flex-1" }, tm = { class: "flex w-full flex-wrap items-center gap-x-3 gap-y-2" }, nm = ["title"], rm = { class: "flex shrink-0 items-center gap-1 text-compact text-ink-dim" }, im = { class: "w-32 shrink-0" }, am = /* @__PURE__ */ Z({
	__name: "template-editing-banner",
	setup(e) {
		let t = k(), n = t.store(), r = B(""), i = F({
			get() {
				let e = n.template.editingPage?.id, t = e ? n.template.resolveEditingPage(e) : void 0;
				return t ? Pr(t) : "#ffffff";
			},
			set(e) {
				let r = n.template.editingId;
				r && t.commands.invoke("template.update", r, { background: e }, { transient: !0 });
			}
		}), a = F(() => [{
			label: I("designer.templateBanner.noTemplateLabel"),
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
		return V(() => n.template.editingTemplate?.name ?? "", (e) => {
			r.value = e;
		}, { immediate: !0 }), (e, d) => {
			let f = rt, p = le, m = gt, h = ft;
			return X(), N(G, null, [P("div", Qp, [
				R(T, {
					name: "template",
					class: "h-4 w-4 shrink-0 text-accent"
				}),
				P("span", $p, W(H(I)("designer.templateBanner.editingLabel")), 1),
				P("div", em, [R(f, {
					modelValue: r.value,
					"onUpdate:modelValue": d[0] ||= (e) => r.value = e,
					"data-tutorial-control": "template-name",
					size: "small",
					"aria-label": H(I)("designer.templateBanner.nameLabel"),
					onBlur: s,
					onEnter: s
				}, null, 8, ["modelValue", "aria-label"])]),
				R(p, {
					"data-tutorial-control": "template-settings",
					size: "small",
					variant: "outline",
					onClick: o
				}, {
					icon: q(() => [R(T, {
						name: "sliders",
						class: "h-3.5 w-3.5"
					})]),
					default: q(() => [L(" " + W(H(I)("designer.pageView.pageSettingsLabel")), 1)]),
					_: 1
				}),
				R(p, {
					"data-tutorial-control": "template-done",
					size: "small",
					theme: "primary",
					variant: "base",
					onClick: d[1] ||= (e) => H(t).commands.dispatch("template.exitEdit")
				}, {
					icon: q(() => [R(T, {
						name: "check",
						class: "h-3.5 w-3.5"
					})]),
					default: q(() => [L(" " + W(H(I)("designer.templateBanner.doneButton")), 1)]),
					_: 1
				})
			]), P("div", tm, [
				P("div", {
					class: "flex shrink-0 items-center gap-1 text-compact text-ink-dim",
					title: H(I)("designer.templateBanner.backgroundHint")
				}, [L(W(H(I)("designer.templateBanner.backgroundLabel")) + " ", 1), R(at, {
					modelValue: i.value,
					"onUpdate:modelValue": d[2] ||= (e) => i.value = e,
					"reset-value": "",
					onCommit: c
				}, null, 8, ["modelValue"])], 8, nm),
				H(n).template.editingTemplate?.owner ? K("", !0) : (X(), z(m, {
					key: 0,
					"data-tutorial-control": "facing-pages",
					checked: H(n).template.editingTemplate?.facingPages === !0,
					onChange: d[3] ||= (e) => l(!!e)
				}, {
					default: q(() => [L(W(H(I)("designer.templateBanner.facingPages")), 1)]),
					_: 1
				}, 8, ["checked"])),
				P("label", rm, [L(W(H(I)("designer.templateBanner.baseTemplateLabel")) + " ", 1), P("div", im, [R(h, {
					size: "small",
					value: H(n).template.editingTemplate?.baseTemplateId ?? "",
					options: a.value,
					"aria-label": H(I)("designer.templateBanner.baseTemplateLabel"),
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
function om(e, t) {
	let n = B(!1), r, i = F(() => n.value ? "cursor-grabbing select-none" : e.spacePanning || e.activeTool === "hand" ? "cursor-grab" : "");
	function a(i) {
		if (!e.spacePanning && e.activeTool !== "hand" && i.button !== 1) return;
		i.preventDefault(), i.stopPropagation();
		let a = t.value;
		if (!a) return;
		r?.(), n.value = !0;
		let o = i.clientX, s = i.clientY, c = a.scrollLeft, l = a.scrollTop;
		r = ge({
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
	return ar(() => r?.()), {
		onStagePointerDown: a,
		panningClass: i
	};
}
function sm(e) {
	let { bannerHeight: t, contentEl: n, isTemplateEditing: r, scrollEl: i, store: a } = e, o = null;
	Et(i, () => {
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
		let o = s(), l = o + c(), u = r.getBoundingClientRect(), d = mr(a), f = (e) => d.contentMmFromClient(u.left + e.x, u.top + e.y, a.view.zoom), p = t ?? {
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
		a.view.setZoom(e), h !== a.view.zoom && Un(() => d.scrollToContentPoint(m, p.x, p.y, a.view.zoom));
	}
	function f() {
		let e = i.value, t = a.view.pagesBoundsMm;
		if (!e || !t) return;
		let n = (t.width + 80) * Jt, r = (t.height + 80) * Jt, o = e.clientWidth - s(), l = e.clientHeight - s() - c();
		a.view.setZoom(On(Math.min(o / n, l / r), .05, 4)), Un(() => {
			let n = a.view.pxPerMm;
			e.scrollLeft = (t.x + t.width / 2) * n + s() - e.clientWidth / 2, e.scrollTop = (t.y + t.height / 2) * n + s() - (e.clientHeight + c()) / 2;
		});
	}
	function p() {
		a.view.setZoom(1), Un(() => m(a.page.active, "instant"));
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
		o && a.view.setCursorContent(mr(a).contentMmFromClient(o.x, o.y, a.view.zoom));
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
	return V(() => [a.view.zoom, a.view.settings.showRulers], g, { flush: "post" }), V(() => [
		a.scope.id,
		a.template.editingTemplate?.facingPages,
		t.value
	], () => {
		Un(f);
	}), Dr(() => {
		mr(a).registerStageElements(i.value, n.value), mr(a).registerStageController({
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
	}), ar(() => {
		a.view.setViewportSize({
			height: 0,
			width: 0
		}), v(), mr(a).registerStageElements(null, null), mr(a).registerStageController(null);
	}), {
		onScroll: l,
		onStagePointerLeave: v,
		onStagePointerMove: _,
		onWheel: u
	};
}
var cm = ["title"], lm = ["title"], um = {
	key: 0,
	class: "canvas-locator__menu absolute right-0 min-w-52.5 max-h-60 overflow-y-auto border border-edge bg-panel-2 [bottom:calc(100%_+_6px)] [padding:4px_0] [border-radius:3px] [box-shadow:0_8px_24px_var(--color-shadow)]"
}, dm = ["onClick"], fm = { class: "flex-1 truncate text-left" }, pm = {
	key: 0,
	class: "text-caption text-accent"
}, mm = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "canvas-stage",
	setup(e) {
		let t = k().store(), { commands: n } = k(), r = B(null), i = B(null), a = B(null), o = B(!1), s = B(null), { height: c } = Mt(s);
		v([{
			run: C,
			shortcut: "Escape"
		}], {
			enabled: () => o.value,
			target: () => document
		});
		let l = F(() => ({
			height: `${t.view.contentSizeMm.height * t.view.pxPerMm}px`,
			width: `${t.view.contentSizeMm.width * t.view.pxPerMm}px`
		})), u = F(() => t.template.editingTemplate !== void 0), { onStagePointerDown: d, panningClass: f } = om(t.view, r), { onScroll: p, onStagePointerLeave: m, onStagePointerMove: h, onWheel: g } = sm({
			bannerHeight: c,
			contentEl: i,
			isTemplateEditing: u,
			scrollEl: r,
			store: t
		}), _ = F(() => t.view.settings.showRulers ? "pt-5 pl-5" : "");
		D(a, C);
		function y(e, ...t) {
			n.dispatch(e, ...t);
		}
		function b(e) {
			x(!1), y("view.centerPages", e.id);
		}
		function x(e) {
			o.value = e;
		}
		function C() {
			x(!1);
		}
		function w(e) {
			e.button !== 0 || t.view.spacePanning || t.view.activeTool === "hand" || e.target instanceof Element && e.target.closest(".page-surface") || (t.view.activeTool === "select" ? (t.ui.closeContextMenu(), vf(t, e)) : t.selection.clear()), d(e);
		}
		function E(e) {
			e.target instanceof Element && e.target.closest(".page-surface") || (e.preventDefault(), t.ui.openContextMenu(e.clientX, e.clientY, O()));
		}
		function O() {
			return [
				...ye(n, lr.map((e) => `canvas.background.${e.id}`), y),
				S(),
				...ye(n, ["canvas.background.custom"], y)
			];
		}
		return (e, n) => (X(), N("div", {
			class: "relative flex-1 overflow-hidden",
			style: Y({ background: H(t).view.canvasBackground })
		}, [
			H(t).view.settings.showRulers ? (X(), z(Zp, {
				key: 0,
				orientation: "horizontal",
				class: "absolute inset-x-0 top-0 z-canvas-tools"
			})) : K("", !0),
			H(t).view.settings.showRulers ? (X(), z(Zp, {
				key: 1,
				orientation: "vertical",
				class: "absolute inset-y-0 left-0 z-canvas-tools"
			})) : K("", !0),
			u.value ? (X(), N("div", {
				key: 2,
				ref_key: "bannerRef",
				ref: s,
				class: "absolute left-8 top-7 z-canvas-tools flex w-120 max-w-[calc(100%-44px)] flex-wrap items-center gap-x-3 gap-y-2 rounded border border-edge bg-panel-2 px-3 py-2 [box-shadow:0_6px_20px_var(--color-shadow)]"
			}, [R(am)], 512)) : K("", !0),
			u.value ? K("", !0) : (X(), N("div", {
				key: 3,
				ref_key: "locateGroupRef",
				ref: a,
				class: "canvas-locator absolute bottom-3 right-3 z-canvas-tools flex items-stretch [border-radius:3px] border border-edge bg-floating-panel"
			}, [
				P("button", {
					type: "button",
					class: "canvas-locator__button flex h-7 w-7 items-center justify-center text-ink-dim hover:bg-panel-3 hover:text-ink",
					title: H(I)("designer.canvasStage.locateCurrentPageTitle"),
					onClick: n[0] ||= (e) => y("view.centerPages")
				}, [R(T, {
					name: "locate",
					class: "h-4 w-4"
				})], 8, cm),
				n[6] ||= P("div", { class: "canvas-locator__divider w-px [margin:5px_0] [background:var(--color-edge)]" }, null, -1),
				P("button", {
					type: "button",
					class: "canvas-locator__button flex h-7 w-7 items-center justify-center text-ink-dim hover:bg-panel-3 hover:text-ink",
					title: H(I)("designer.canvasStage.selectPageTitle"),
					onClick: n[1] ||= (e) => x(!o.value)
				}, [R(T, {
					name: "chevron-down",
					class: "h-3.5 w-3.5"
				})], 8, lm),
				o.value ? (X(), N("div", um, [(X(!0), N(G, null, M(H(t).view.pageLayouts, (e, n) => (X(), N("button", {
					key: e.page.id,
					type: "button",
					class: "canvas-locator__item flex w-full items-center gap-1.5 [padding:5px_10px] text-xs text-left text-ink whitespace-nowrap hover:bg-menu-hover hover:text-menu-foreground",
					onClick: (t) => b(e.page)
				}, [
					R(T, {
						name: "locate",
						class: "h-3.5 w-3.5 shrink-0"
					}),
					P("span", fm, W(H(I)("designer.canvasStage.pageSummary", {
						pageName: e.page.name || H(I)("designer.canvasStage.numberedPageName", { pageNumber: n + 1 }),
						width: e.page.width,
						height: e.page.height
					})), 1),
					e.page.id === H(t).page.activeId ? (X(), N("span", pm, W(H(I)("designer.canvasStage.currentPageIndicator")), 1)) : K("", !0)
				], 8, dm))), 128))])) : K("", !0)
			], 512)),
			P("div", {
				ref_key: "scrollEl",
				ref: r,
				"data-tutorial-control": "canvas-background",
				class: J(["absolute inset-0 overflow-auto", [H(f), _.value]]),
				onScroll: n[2] ||= (...e) => H(p) && H(p)(...e),
				onWheel: n[3] ||= (...e) => H(g) && H(g)(...e),
				onPointerdown: w,
				onPointermove: n[4] ||= (...e) => H(h) && H(h)(...e),
				onPointerleave: n[5] ||= (...e) => H(m) && H(m)(...e),
				onContextmenu: E
			}, [P("div", {
				ref_key: "contentEl",
				ref: i,
				class: "relative",
				style: Y(l.value)
			}, [(X(!0), N(G, null, M(H(t).view.pageLayouts, (e) => (X(), z(Xp, {
				key: e.page.id,
				page: e.page,
				"offset-x": e.x,
				"offset-y": e.y,
				"px-per-mm": H(t).view.pxPerMm
			}, null, 8, [
				"page",
				"offset-x",
				"offset-y",
				"px-per-mm"
			]))), 128)), R(bf)], 4)], 34)
		], 4));
	}
}), [["__scopeId", "data-v-b1475a20"]]), hm = 8, gm = /* @__PURE__ */ Z({
	__name: "context-menu",
	setup(e) {
		let t = k().store(), n = Kn(Br, void 0), { isTop: r, zIndex: i } = Ur(() => t.ui.contextMenu.open), a = B(null);
		v([{
			run: t.ui.closeContextMenu,
			shortcut: "Escape"
		}], {
			enabled: () => t.ui.contextMenu.open && r.value,
			target: () => document
		});
		let o = F(() => {
			let e = t.ui.contextMenu.items.length * 30 + 10, n = t.ui.contextMenu.x, r = t.ui.contextMenu.y;
			return n + 200 > window.innerWidth && (n = window.innerWidth - 200 - hm), r + e > window.innerHeight && (r = window.innerHeight - e - hm), {
				x: Math.max(hm, n),
				y: Math.max(hm, r)
			};
		});
		function s(e) {
			e.disabled || (e.keepOpen || t.ui.closeContextMenu(), e.action());
		}
		function c(e) {
			if ($a(e)) return;
			let n = a.value;
			n && e.target instanceof Node && n.contains(e.target) || t.ui.contextMenu.open && t.ui.closeContextMenu();
		}
		return Dr(() => {
			window.addEventListener("pointerdown", c, !0);
		}), ar(() => {
			window.removeEventListener("pointerdown", c, !0);
		}), (e, r) => (X(), z(Rn, { to: H(n)?.() ?? "body" }, [H(t).ui.contextMenu.open ? (X(), N("div", {
			key: 0,
			ref_key: "menuRef",
			ref: a,
			"data-context-menu": "",
			class: "fixed min-w-45 rounded-(--studio-menu-radius) border border-edge bg-menu-surface py-1 [box-shadow:var(--td-shadow-2)]",
			style: Y({
				left: `${o.value.x}px`,
				top: `${o.value.y}px`,
				zIndex: H(i)
			}),
			onPointerdown: r[0] ||= Q(() => {}, ["stop"]),
			onContextmenu: r[1] ||= Q(() => {}, ["prevent"])
		}, [R(fo, {
			items: H(t).ui.contextMenu.items,
			onSelect: s
		}, null, 8, ["items"])], 36)) : K("", !0)], 8, ["to"]));
	}
}), _m = /* @__PURE__ */ Z({
	__name: "extension-slot",
	props: { name: {} },
	setup(e) {
		let t = e, n = k(), r = F(() => n.extensions.list(t.name));
		return (e, t) => (X(!0), N(G, null, M(r.value, (e) => (X(), z(H(st), {
			key: `${e.pluginId}:${e.id}`,
			runtime: H(n).errors
		}, {
			default: q(() => [(X(), z(vn(e.value.component), wr({ ref_for: !0 }, e.value.props), null, 16))]),
			_: 2
		}, 1032, ["runtime"]))), 128));
	}
}), vm = [
	"onMouseenter",
	"onMouseleave",
	"onFocusin",
	"onFocusout"
], ym = ["aria-label"], bm = ["aria-label"], xm = /*#__PURE__*/ t(/* @__PURE__ */ Z({
	__name: "toast-host",
	setup(e) {
		let t = k(), n = t.store(), r = F(() => t.zIndex.currentZIndex + 1);
		function i(e, t) {
			let r = t.currentTarget;
			r instanceof HTMLElement && r.matches(":hover, :focus-within") || n.ui.resumeToast(e);
		}
		return (e, t) => {
			let a = Ja, o = Ia;
			return X(), z(Rn, { to: "body" }, [In(P("div", {
				class: "designer-feedback fixed inset-0 flex items-start justify-center box-border overflow-hidden pointer-events-none px-4 py-6",
				style: Y({ zIndex: r.value })
			}, [R(Vr, {
				name: "designer-feedback",
				tag: "div",
				class: "designer-feedback__list flex flex-col items-center gap-2 box-border w-full max-w-110 max-h-full overflow-y-auto p-2 pointer-events-auto"
			}, {
				default: q(() => [(X(!0), N(G, null, M(H(n).ui.toasts, (e) => (X(), N("div", {
					key: e.id,
					class: J(["designer-feedback__item shrink-0 max-w-full", `designer-feedback__item--${e.kind}`]),
					onMouseenter: (t) => H(n).ui.pauseToast(e.id),
					onMouseleave: (t) => i(e.id, t),
					onFocusin: (t) => H(n).ui.pauseToast(e.id),
					onFocusout: (t) => i(e.id, t)
				}, [e.kind === "error" ? (X(), z(a, {
					key: 0,
					class: "designer-feedback__notification",
					theme: "error",
					title: H(I)("designer.toastHost.errorTitle"),
					content: e.text,
					duration: 0,
					role: "alert",
					onCloseBtnClick: (t) => H(n).ui.dismissToast(e.id)
				}, {
					"close-btn": q(() => [P("button", {
						type: "button",
						class: "designer-feedback__close inline-flex items-center justify-center border-0 rounded-[var(--td-radius-default)] bg-transparent text-ink-dim cursor-pointer w-5.5 h-5.5 p-0 focus-visible:[outline:1px_solid_var(--color-accent)] hover:bg-panel-3 hover:text-ink",
						"aria-label": H(I)("components.baseDialog.closeLabel")
					}, [R(H(Me))], 8, ym)]),
					_: 1
				}, 8, [
					"title",
					"content",
					"onCloseBtnClick"
				])) : (X(), z(o, {
					key: 1,
					class: "designer-feedback__message",
					theme: e.kind,
					content: e.text,
					duration: 0,
					"close-btn": "",
					role: "status",
					onCloseBtnClick: (t) => H(n).ui.dismissToast(e.id)
				}, {
					"close-btn": q(() => [P("button", {
						type: "button",
						class: "designer-feedback__close inline-flex items-center justify-center border-0 rounded-[var(--td-radius-default)] bg-transparent text-ink-dim cursor-pointer w-5.5 h-5.5 p-0 focus-visible:[outline:1px_solid_var(--color-accent)] hover:bg-panel-3 hover:text-ink",
						"aria-label": H(I)("components.baseDialog.closeLabel")
					}, [R(H(Me))], 8, bm)]),
					_: 1
				}, 8, [
					"theme",
					"content",
					"onCloseBtnClick"
				]))], 42, vm))), 128))]),
				_: 1
			})], 4), [[Rr, H(n).ui.toasts.length > 0]])]);
		};
	}
}), [["__scopeId", "data-v-1b095350"]]), Sm = {
	"data-designer-shell": "",
	class: "flex h-full flex-col overflow-hidden bg-app text-ink",
	style: {
		minWidth: "var(--designer-min-width)",
		minHeight: "var(--designer-min-height)"
	}
}, Cm = { class: "flex min-h-0 flex-1 flex-nowrap" }, wm = { class: "flex min-w-0 flex-1 flex-col" }, Tm = { class: "flex h-7 shrink-0 items-center overflow-hidden border-t border-edge bg-panel px-3 text-compact text-ink-dim" }, Em = /* @__PURE__ */ Z({
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
		let t = k(), n = e, { commands: r, errors: i } = t, a = [
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
		}, s = F(() => a.map((e) => ({
			icon: o[e],
			items: pt(r.byGroup(e), l),
			label: Ya[e]
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
		return Ee(() => t.store().ui.themeMode, (e) => t.errors.capture(e, { source: "theme.transition" })), Xa(t), ce(window, "wheel", c, {
			capture: !0,
			passive: !1
		}), Dr(() => {
			if (window === window.top) {
				let e = Fr(window, () => t.store().document.dirty);
				Wt(e);
			}
			requestAnimationFrame(() => {
				u();
			});
		}), (e, t) => (X(), N("div", Sm, [
			n.menuBar ? (X(), z(To, {
				key: 0,
				"data-tutorial": "menu",
				menus: s.value
			}, null, 8, ["menus"])) : K("", !0),
			R(_m, { name: "designer.shell.before" }),
			P("div", Cm, [
				n.toolBar ? (X(), z(Ko, { key: 0 })) : K("", !0),
				P("div", wm, [n.optionsBar ? (X(), z(Bo, { key: 0 })) : K("", !0), R(H(st), { runtime: H(i) }, {
					fallback: q(({ error: e, reset: t }) => [R(xt, {
						detail: H(fn)(e),
						class: "min-h-0 flex-1",
						title: H(I)("designer.designerShell.canvasRenderFailed"),
						onRetry: t
					}, null, 8, [
						"detail",
						"title",
						"onRetry"
					])]),
					default: q(() => [R(mm, { "data-tutorial": "canvas" })]),
					_: 1
				}, 8, ["runtime"])]),
				n.panels ? (X(), z(pf, { key: 1 })) : K("", !0)
			]),
			P("div", Tm, [R(hf)]),
			n.infoBar ? (X(), z(Ud, {
				key: 1,
				onFit: u
			})) : K("", !0),
			R(_m, { name: "designer.shell.after" }),
			R(gm),
			R(xm),
			R(Ol),
			R(Xs, { name: "page" }, {
				default: q(({ session: e }) => [R(El, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			R(qo),
			R(Tl),
			R(Ys),
			R(Ic),
			R(Xs, { name: "repeat" }, {
				default: q(({ session: e }) => [R(jl, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			R(Xs, { name: "follow" }, {
				default: q(({ session: e }) => [R(Rc, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			R(Xs, { name: "follow-join" }, {
				default: q(({ session: e }) => [R(Rc, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			R(Xs, { name: "follow-manager" }, {
				default: q(({ session: e }) => [R(Cl, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			R(Xs, { name: "repeat-manager" }, {
				default: q(({ session: e }) => [R(Zl, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			R(Xs, { name: "element" }, {
				default: q(({ session: e }) => [R(Oc, { session: e }, null, 8, ["session"])]),
				_: 1
			}),
			R(wl),
			R(Jo),
			R(nd),
			R(Dd)
		]));
	}
});
export { Em as default };
