import { Zo as e } from "./inspector-layout-cGpQdLuc-D-IjKeo4.js";
// ../packages/print-studio/dist/document-unload-guard-DiyKeiVr.js
function t(t, n) {
	function r(e) {
		e.preventDefault(), e.returnValue = !0;
	}
	return e(n, (e, n, i) => {
		e && (t.addEventListener("beforeunload", r), i(() => t.removeEventListener("beforeunload", r)));
	}, {
		flush: "sync",
		immediate: !0
	});
}
export { t };
