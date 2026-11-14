import { E as e, f as t, t as n, w as r } from "./host-DXVDlMXd-CN7n8Uqw.js";
// dist/lib/mount-print-preview-BIpugDvU.js
function i(i, a, o = {}) {
	return t(async (t) => {
		let s = i.store(), c = o.container ?? document.body, l = c.ownerDocument.createElement("div");
		l.className = "print-studio-preview", l.style.cssText = o.container ? "width:100%;height:100%;position:relative" : "position:fixed;inset:0;z-index:2147483647";
		let u = !1, d, f, p = [], m = () => {}, h;
		function g() {
			u || (u = !0, t.removeEventListener("abort", g), m(t.reason ?? new DOMException("Preview closed before ready", "AbortError")), d?.(), l.remove());
		}
		let _ = {
			close: g,
			get element() {
				if (!f) throw Error("Preview is not ready");
				return f;
			},
			get warnings() {
				return p;
			}
		}, v = {
			capture(e) {
				return i.errors.capture(e, { source: "preview.render" });
			},
			close: g,
			getSampleInput() {
				return r(a.document);
			},
			name: a.document.name,
			print(e) {
				i.commands.dispatch("preview.print", e);
			},
			render(t, n) {
				return s.rendering.html(e(a.document), e(t), void 0, n);
			},
			request: { previewInput: a.input },
			revision: 0
		};
		try {
			return h = i.output?.track(_) ?? _, t.addEventListener("abort", g, { once: !0 }), t.throwIfAborted(), c.append(l), await new Promise((e, t) => {
				m = t, d = n(l, {
					onDispose: g,
					onError(e) {
						t(e), i.errors.capture(e, { source: "preview.mount" });
					},
					onReady() {},
					preview: {
						onError: t,
						onReady(t, n) {
							f = t, p = n, e();
						},
						source: v,
						timeoutMs: o.timeoutMs
					}
				});
			}), t.throwIfAborted(), h;
		} catch (e) {
			throw g(), e;
		} finally {
			t.removeEventListener("abort", g);
		}
	}, o);
}
export { i as mountPrintPreview };
