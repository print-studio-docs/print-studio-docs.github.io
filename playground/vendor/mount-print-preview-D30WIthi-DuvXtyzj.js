import { At as e, It as t, ht as n } from "./create-designer-JVbDIHeY-DuIqFk48.js";
import { t as r } from "./host-CPrc1W8K-0bl6Oo3c.js";
// ../../packages/print-studio/dist/mount-print-preview-D30WIthi.js
function i(i, a, o) {
	return n(async (n) => {
		let s = i.store(), c = o.container ?? document.body, l = c.ownerDocument.createElement("div");
		l.className = "print-studio-preview", l.style.cssText = o.container ? "width:100%;height:100%;position:relative" : "position:fixed;inset:0;z-index:2147483647";
		let u = !1, d, f, p = [], m = () => {}, h;
		function g() {
			u || (u = !0, n.removeEventListener("abort", g), m(n.reason ?? new DOMException("Preview closed before ready", "AbortError")), d?.(), l.remove());
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
				return e(a.document);
			},
			get imageLoadTimeoutMs() {
				return s.config.data.rendering.imageLoadTimeoutMs;
			},
			name: a.document.name,
			print(e) {
				i.commands.dispatch("preview.print", e);
			},
			render(e, n) {
				return s.rendering.html(t(a.document), t(e), void 0, n);
			},
			request: { previewInput: a.input },
			revision: 0,
			showPrintData: o.designer?.showPrintData ?? !1
		};
		try {
			return h = i.output?.track(_) ?? _, n.addEventListener("abort", g, { once: !0 }), n.throwIfAborted(), c.append(l), await new Promise((e, t) => {
				m = t, d = r(l, {
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
						themeMode: o.designer?.themeMode ?? s.ui.themeMode,
						timeoutMs: o.timeoutMs
					}
				});
			}), n.throwIfAborted(), h;
		} catch (e) {
			throw g(), e;
		} finally {
			n.removeEventListener("abort", g);
		}
	}, o);
}
export { i as mountPrintPreview };
