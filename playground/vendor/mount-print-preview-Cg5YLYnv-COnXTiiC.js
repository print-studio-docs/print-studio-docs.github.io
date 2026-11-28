import { N as e, Or as t, Ut as n, _t as r, gr as i } from "./inspector-layout-cGpQdLuc-D-IjKeo4.js";
import { t as a } from "./host-Z-ZoPrck-BLQFBQJy.js";
// ../packages/print-studio/dist/mount-print-preview-Cg5YLYnv.js
function o(o, s, c) {
	return n(async (n) => {
		let l = o.store(), u = e(o) ?? o.classPrefix, d = c.container ?? document.body, f = d.ownerDocument.createElement("div");
		f.className = r("print-studio-preview", u), f.dataset.printStudioPreview = "", f.style.cssText = c.container ? "width:100%;height:100%;position:relative" : "position:fixed;inset:0;z-index:2147483647";
		let p = !1, m, h, g = [], _ = () => {}, v;
		function y() {
			p || (p = !0, n.removeEventListener("abort", y), _(n.reason ?? new DOMException("Preview closed before ready", "AbortError")), m?.(), f.remove());
		}
		let b = {
			close: y,
			get element() {
				if (!h) throw Error("Preview is not ready");
				return h;
			},
			get warnings() {
				return g;
			}
		}, x = {
			capture(e) {
				return o.errors.capture(e, { source: "preview.render" });
			},
			close: y,
			getSampleInput() {
				return t(s.document);
			},
			get imageLoadTimeoutMs() {
				return l.config.data.rendering.imageLoadTimeoutMs;
			},
			name: s.document.name,
			print(e) {
				o.commands.dispatch("preview.print", e);
			},
			render(e, t) {
				return l.rendering.html(i(s.document), i(e), void 0, t);
			},
			request: { previewInput: s.input },
			revision: 0,
			showPrintData: c.designer?.showPrintData ?? !1
		};
		try {
			return v = o.output?.track(b) ?? b, n.addEventListener("abort", y, { once: !0 }), n.throwIfAborted(), d.append(f), await new Promise((e, t) => {
				_ = t, m = a(f, {
					classPrefix: u,
					onDispose: y,
					onError(e) {
						t(e), o.errors.capture(e, { source: "preview.mount" });
					},
					onReady() {},
					preview: {
						onError: t,
						onReady(t, n) {
							h = t, g = n, e();
						},
						source: x,
						themeMode: c.designer?.themeMode ?? l.ui.themeMode,
						timeoutMs: c.timeoutMs
					}
				});
			}), n.throwIfAborted(), v;
		} catch (e) {
			throw y(), e;
		} finally {
			n.removeEventListener("abort", y);
		}
	}, c);
}
export { o as mountPrintPreview };
