webpackJsonp([0],{

/***/ 0:
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! /Users/allen79yu/Desktop/disaster-display/app/src/app.js */1);


/***/ }),

/***/ 1:
/*!************************!*\
  !*** ./app/src/app.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	
	__webpack_require__(/*! ./style/app.scss */ 2);
	
	var _vue = __webpack_require__(/*! vue */ 6);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(/*! vue-router */ 8);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _axios = __webpack_require__(/*! axios */ 9);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _App = __webpack_require__(/*! ./App.vue */ 34);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_axios2.default);
	
	//router setting
	var router = new _vueRouter2.default({
	    mode: "hash", //tmp
	    base: __dirname,
	    routes: [{
	        path: "/",
	        component: _App2.default
	    }]
	});
	
	var app = new _vue2.default({
	    router: router,
	    render: function render(h) {
	        return h(_App2.default);
	    }
	}).$mount("#app");
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** ./app/src/style/app.scss ***!
  \********************************/
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 34:
/*!*************************!*\
  !*** ./app/src/App.vue ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./App.vue */ 35)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-22806ebe!vue-loader/lib/selector?type=template&index=0!./App.vue */ 36)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),

/***/ 35:
/*!*************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./app/src/App.vue ***!
  \*************************************************************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	
	exports.default = {};

/***/ }),

/***/ 36:
/*!*****************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-22806ebe!./~/vue-loader/lib/selector.js?type=template&index=0!./app/src/App.vue ***!
  \*****************************************************************************************************************************************/
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "main"
	    }
	  }, [_vm._v("\n    yoyoyoyoyo\n")])
	},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=app.1eedfc34c18e9c43b501.js.map