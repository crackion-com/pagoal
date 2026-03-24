(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('src/api/index'), require('src/core/index'), require('src/types/index'), require('src/utils/index')) :
	typeof define === 'function' && define.amd ? define(['exports', 'src/api/index', 'src/core/index', 'src/types/index', 'src/utils/index'], factory) :
	(global = global || self, factory(global.PDFLib = {}, global.index, global.index$1, global.index$2, global.index$3));
}(this, (function (exports, index, index$1, index$2, index$3) { 'use strict';

	Object.keys(index).forEach(function (k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return index[k];
			}
		});
	});
	Object.keys(index$1).forEach(function (k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return index$1[k];
			}
		});
	});
	Object.keys(index$2).forEach(function (k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return index$2[k];
			}
		});
	});
	Object.keys(index$3).forEach(function (k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return index$3[k];
			}
		});
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pdf-lib.js.map
