/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/teamcarousel/style.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/teamcarousel/style.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-team-carousel {\n  transition: all 400ms; }\n  .qubely-block-team-carousel .editor-rich-text .editor-rich-text__tinymce {\n    line-height: inherit; }\n  .qubely-block-team-carousel .qubely-team-quote .qubely-quote-icon {\n    line-height: 1;\n    width: auto;\n    height: auto; }\n  .qubely-block-team-carousel .qubely-team-quote.qubely-position-bottom .qubely-quote-icon {\n    transform: scaleY(-1); }\n  .qubely-block-team-carousel .qubely-single-img.qubely-backend .qubely-team-avatar {\n    cursor: pointer; }\n  .qubely-block-team-carousel .qubely-team-avatar.qubely-image-placeholder i {\n    font-size: 80px; }\n  .qubely-block-team-carousel .qubely-image-placeholder {\n    width: 100%;\n    height: 230px; }\n  .qubely-block-team-carousel .qubely-team-avatar-layout-left,\n  .qubely-block-team-carousel .qubely-team-avatar-layout-right {\n    display: inline-flex;\n    align-items: center; }\n    .qubely-block-team-carousel .qubely-team-avatar-layout-left .qubely-team-author-info,\n    .qubely-block-team-carousel .qubely-team-avatar-layout-right .qubely-team-author-info {\n      text-align: left; }\n  .qubely-block-team-carousel .qubely-team-avatar-layout-right .qubely-team-author-info {\n    text-align: right; }\n  .qubely-block-team-carousel .qubely-team-ratings {\n    unicode-bidi: bidi-override;\n    display: inline-block;\n    position: relative;\n    letter-spacing: 5px; }\n    .qubely-block-team-carousel .qubely-team-ratings:before, .qubely-block-team-carousel .qubely-team-ratings:after {\n      content: \"\\f005\\f005\\f005\\f005\\f005\";\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 400;\n      display: block;\n      white-space: nowrap; }\n    .qubely-block-team-carousel .qubely-team-ratings:before {\n      position: absolute;\n      z-index: 1;\n      left: 0px;\n      overflow: hidden;\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 900;\n      content: \"\\f005\\f005\\f005\\f005\\f005\"; }\n    .qubely-block-team-carousel .qubely-team-ratings:after {\n      z-index: 0; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"1\"]:before {\n      width: 20%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"1.5\"]:before {\n      width: 29%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"2\"]:before {\n      width: 40%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"2.5\"]:before {\n      width: 49%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"3\"]:before {\n      width: 60%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"3.5\"]:before {\n      width: 69%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"4\"]:before {\n      width: 80%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"4.5\"]:before {\n      width: 89%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"5\"]:before {\n      width: 100%; }\n  .qubely-block-team-carousel .qubely-team-carousel-arrow-down {\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-top: 15px solid #d6d9dd; }\n\n.qubely-team-carousel-content-wrapper {\n  position: relative; }\n\n.layout-3 .qubely-team-carousel-content-wrapper {\n  padding: 20px;\n  border-radius: 10px;\n  background: #f4f4f4; }\n\n.layout-3 .qubely-team-carousel-content-wrapper:before {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  transform: translate(-50%, 50%);\n  border-width: 15px;\n  z-index: 1;\n  border-color: #f4f4f4 transparent transparent transparent;\n  left: 50%;\n  bottom: -15px; }\n\n.layout-3 .qubely-team-author {\n  margin-top: 40px;\n  text-align: center; }\n\n.layout-3 .qubely-team-avatar {\n  margin-right: 0px; }\n\n.layout-3 .qubely-team-avatar-layout-left .qubely-team-author-info {\n  text-align: center; }\n\n.layout-1 .qubely-team-avatar,\n.layout-2 .qubely-team-avatar {\n  margin-right: 20px; }\n\n.qubely-carousel.qubely-carousel-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-extended-list,\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden; }\n\n.qubely-carousel-extended-outer-stage {\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s; }\n\n.qubely-carousel.qubely-carousel-wrapper .js-indicator {\n  position: absolute;\n  z-index: 9;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item {\n  position: relative;\n  float: left;\n  overflow: hidden; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.active,\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.dragenable {\n  visibility: visible;\n  transform-style: preserve-3d; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.prev-item {\n  z-index: 1;\n  visibility: visible; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots,\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control {\n  height: 50px;\n  width: 100%;\n  margin-top: 5px;\n  z-index: 3; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots {\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control {\n  display: inline-block;\n  padding: 10px;\n  border: 1px solid #e2e2e2;\n  position: absolute;\n  cursor: pointer;\n  text-align: center;\n  bottom: 49%;\n  background: rgba(255, 255, 255, 0.4);\n  transition: .3s; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator {\n  width: 100%;\n  height: 100%; }\n\n.qubely-carousel-nav-control .nav-control .dashicons {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .next-control.nav-control.buttom,\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .prev-control.nav-control.buttom {\n  bottom: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control {\n  right: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control {\n  left: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul {\n  margin: 15px;\n  padding: 0;\n  list-style: none;\n  text-align: center; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {\n  display: inline-block;\n  height: 4px;\n  width: 30px;\n  margin: 5px;\n  border: 0;\n  background: #f4f4f4;\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active {\n  width: 55px; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator {\n  position: absolute;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear;\n  width: 0;\n  left: 0;\n  top: 0;\n  height: 4px;\n  border-radius: 2px; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator.active {\n  background: #2084f9;\n  width: 100%;\n  top: 0;\n  border-radius: 2px; }\n\n.qubely-tesitmonial-item.layout-3 .qubely-team-avatar {\n  margin-right: 0; }\n\n.qubely-team-carousel-content-wrapper {\n  position: relative; }\n\n.qubely-carousel {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.qubely-carousel .qubely-carousel-extended-list {\n  position: relative;\n  overflow: hidden; }\n\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s;\n  display: flex; }\n\n.qubely-carousel .js-indicator {\n  position: absolute;\n  z-index: 9;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear; }\n\n.qubely-carousel .qubely-carousel-extended-item {\n  position: relative;\n  float: left;\n  /* overflow: hidden; */ }\n\n.qubely-carousel .qubely-carousel-extended-item.active,\n.qubely-carousel .qubely-carousel-extended-item.dragenable {\n  visibility: visible;\n  transform-style: preserve-3d; }\n\n.qubely-carousel .qubely-carousel-extended-item.prev-item {\n  z-index: 1;\n  visibility: visible; }\n\n.qubely-carousel .qubely-carousel-extended-nav-control,\n.qubely-carousel .qubely-carousel-extended-dots {\n  position: relative;\n  height: 20px;\n  width: 100%;\n  margin-top: 5px;\n  z-index: 3; }\n\n.qubely-carousel .qubely-carousel-extended-nav-control .nav-control {\n  display: inline-block;\n  height: 40px;\n  width: 40px;\n  padding: 10px;\n  border: 1px solid #ababab;\n  position: absolute;\n  cursor: pointer;\n  text-align: center;\n  bottom: 100px;\n  background: rgba(255, 255, 255, 0.4); }\n\n.qubely-carousel .qubely-carousel-extended-nav-control .nav-control.next-control {\n  right: 0; }\n\n.qubely-carousel .qubely-carousel-extended-nav-control .nav-control.prev-control {\n  left: 0; }\n\n.qubely-carousel .qubely-carousel-extended-dots {\n  position: absolute;\n  bottom: 50px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.qubely-carousel .qubely-carousel-extended-dots ul {\n  margin: -4px;\n  padding: 0;\n  list-style: none;\n  text-align: center; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li {\n  display: inline-block;\n  height: 4px;\n  width: 30px;\n  margin: 5px;\n  border: 0;\n  background: rgba(218, 92, 92, 0.4);\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li.active {\n  width: 80px; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator {\n  position: absolute;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear;\n  width: 0;\n  left: 0;\n  top: 0;\n  height: 4px;\n  border-radius: 2px; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator.active {\n  background: #ffffff;\n  width: 100%;\n  top: 0;\n  border-radius: 2px; }\n\n.qubely-carousel.qubely-carousel-wrapper.is-faded .qubely-carousel-extended-list .qubely-carousel-extended-outer-stage .qubely-carousel-extended-item:not(.active) {\n  opacity: 0.1; }\n\n.qubely-team-1 .qubely-team-author-info {\n  width: 100%;\n  padding: 30px;\n  background: #fafafa; }\n\n.qubely-team-2 {\n  position: relative; }\n\n.qubely-team-2 .qubely-team-author-info {\n  background: rgba(244, 244, 244, 0.85);\n  position: absolute;\n  line-height: 30px;\n  transition: .3s;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  z-index: 1;\n  top: 0; }\n\n.qubely-team-2:hover .qubely-team-author-info {\n  opacity: 1; }\n\n.qubely-team-2 .qubely-team-author-info {\n  transform: translate(0%, 0%);\n  width: 100%;\n  padding: 70px; }\n\n.qubely-team-3 .qubely-single-img {\n  width: 50%;\n  float: left;\n  display: inline-block; }\n\n.qubely-team-3 .qubely-team-author-info {\n  padding: 70px 20px 70px 20px; }\n\n.qubely-team-author-info {\n  width: 50%;\n  display: inline-block; }\n\n.editor-styles-wrapper .qubely-team-2 {\n  line-height: 0; }\n\n.qubely-team-3 .qubely-team-author-info {\n  height: 230px;\n  background: #fafafa; }\n\n.qubely-team-carousel-item {\n  overflow: hidden; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/testimonialcarousel/style.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/testimonialcarousel/style.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-testimonial-carousel {\n  transition: all 400ms; }\n  .qubely-block-testimonial-carousel .editor-rich-text .editor-rich-text__tinymce {\n    line-height: inherit; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-quote .qubely-quote-icon {\n    line-height: 1;\n    width: auto;\n    height: auto; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-quote.qubely-position-bottom .qubely-quote-icon {\n    transform: scaleY(-1); }\n  .qubely-block-testimonial-carousel .qubely-single-img.qubely-backend .qubely-testimonial-avatar {\n    cursor: pointer; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-avatar.qubely-image-placeholder i {\n    font-size: 0.5em; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-left,\n  .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-right {\n    display: inline-flex;\n    align-items: center; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-left .qubely-testimonial-author-info,\n    .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-right .qubely-testimonial-author-info {\n      text-align: left; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-right .qubely-testimonial-author-info {\n    text-align: right; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-ratings {\n    unicode-bidi: bidi-override;\n    display: inline-block;\n    position: relative;\n    letter-spacing: 5px; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings:before, .qubely-block-testimonial-carousel .qubely-testimonial-ratings:after {\n      content: \"\\f005\\f005\\f005\\f005\\f005\";\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 400;\n      display: block;\n      white-space: nowrap; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings:before {\n      position: absolute;\n      z-index: 1;\n      left: 0px;\n      overflow: hidden;\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 900;\n      content: \"\\f005\\f005\\f005\\f005\\f005\"; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings:after {\n      z-index: 0; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"1\"]:before {\n      width: 20%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"1.5\"]:before {\n      width: 29%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"2\"]:before {\n      width: 40%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"2.5\"]:before {\n      width: 49%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"3\"]:before {\n      width: 60%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"3.5\"]:before {\n      width: 69%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"4\"]:before {\n      width: 80%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"4.5\"]:before {\n      width: 89%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"5\"]:before {\n      width: 100%; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-carousel-arrow-down {\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-top: 15px solid #d6d9dd; }\n\n.qubely-testimonial-carousel-content-wrapper {\n  position: relative; }\n\n.layout-3 .qubely-testimonial-carousel-content-wrapper {\n  padding: 20px;\n  border-radius: 10px;\n  background: #f4f4f4; }\n\n.layout-3 .qubely-testimonial-carousel-content-wrapper:before {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  transform: translate(-50%, 50%);\n  border-width: 15px;\n  z-index: 1;\n  border-color: #f4f4f4 transparent transparent transparent;\n  left: 50%;\n  bottom: -15px; }\n\n.layout-3 .qubely-testimonial-author {\n  margin-top: 40px;\n  text-align: center; }\n\n.layout-3 .qubely-testimonial-avatar {\n  margin-right: 0px; }\n\n.layout-3 .qubely-testimonial-avatar-layout-left .qubely-testimonial-author-info {\n  text-align: center; }\n\n.layout-1 .qubely-testimonial-avatar,\n.layout-2 .qubely-testimonial-avatar {\n  margin-right: 20px; }\n\n.qubely-carousel.qubely-carousel-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-extended-list,\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden; }\n\n.qubely-carousel-extended-outer-stage {\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s; }\n\n.qubely-carousel.qubely-carousel-wrapper .js-indicator {\n  position: absolute;\n  z-index: 9;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item {\n  position: relative;\n  float: left;\n  overflow: hidden; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.active,\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.dragenable {\n  visibility: visible;\n  transform-style: preserve-3d; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.prev-item {\n  z-index: 1;\n  visibility: visible; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots,\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control {\n  height: 50px;\n  width: 100%;\n  margin-top: 5px;\n  z-index: 3; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots {\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control {\n  display: inline-block;\n  padding: 10px;\n  border: 1px solid #e2e2e2;\n  position: absolute;\n  cursor: pointer;\n  text-align: center;\n  bottom: 49%;\n  background: rgba(255, 255, 255, 0.4);\n  transition: .3s; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator {\n  width: 100%;\n  height: 100%; }\n\n.qubely-carousel-nav-control .nav-control .dashicons {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .next-control.nav-control.buttom,\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .prev-control.nav-control.buttom {\n  bottom: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control {\n  right: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control {\n  left: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul {\n  margin: 15px;\n  padding: 0;\n  list-style: none;\n  text-align: center; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {\n  display: inline-block;\n  height: 4px;\n  width: 30px;\n  margin: 5px;\n  border: 0;\n  background: #f4f4f4;\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active {\n  width: 55px; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator {\n  position: absolute;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear;\n  width: 0;\n  left: 0;\n  top: 0;\n  height: 4px;\n  border-radius: 2px; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator.active {\n  background: #2084f9;\n  width: 100%;\n  top: 0;\n  border-radius: 2px; }\n\n.qubely-tesitmonial-item.layout-3 .qubely-testimonial-avatar {\n  margin-right: 0; }\n\n.qubely-testimonial-carousel-content-wrapper {\n  position: relative; }\n\n.qubely-carousel {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.qubely-carousel .qubely-carousel-extended-list {\n  position: relative;\n  overflow: hidden; }\n\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s;\n  display: flex; }\n\n.qubely-carousel .js-indicator {\n  position: absolute;\n  z-index: 9;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear; }\n\n.qubely-carousel .qubely-carousel-extended-item {\n  position: relative;\n  float: left;\n  /* overflow: hidden; */ }\n\n.qubely-carousel .qubely-carousel-extended-item.active,\n.qubely-carousel .qubely-carousel-extended-item.dragenable {\n  visibility: visible;\n  transform-style: preserve-3d; }\n\n.qubely-carousel .qubely-carousel-extended-item.prev-item {\n  z-index: 1;\n  visibility: visible; }\n\n.qubely-carousel .qubely-carousel-extended-nav-control,\n.qubely-carousel .qubely-carousel-extended-dots {\n  position: relative;\n  height: 20px;\n  width: 100%;\n  margin-top: 5px;\n  z-index: 3; }\n\n.qubely-carousel .qubely-carousel-extended-nav-control .nav-control {\n  display: inline-block;\n  height: 40px;\n  width: 40px;\n  padding: 10px;\n  border: 1px solid #ababab;\n  position: absolute;\n  cursor: pointer;\n  text-align: center;\n  bottom: 100px;\n  background: rgba(255, 255, 255, 0.4); }\n\n.qubely-carousel .qubely-carousel-extended-nav-control .nav-control.next-control {\n  right: 0; }\n\n.qubely-carousel .qubely-carousel-extended-nav-control .nav-control.prev-control {\n  left: 0; }\n\n.qubely-carousel .qubely-carousel-extended-dots {\n  position: absolute;\n  bottom: 50px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.qubely-carousel .qubely-carousel-extended-dots ul {\n  margin: -4px;\n  padding: 0;\n  list-style: none;\n  text-align: center; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li {\n  display: inline-block;\n  height: 4px;\n  width: 30px;\n  margin: 5px;\n  border: 0;\n  background: rgba(218, 92, 92, 0.4);\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li.active {\n  width: 80px; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator {\n  position: absolute;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear;\n  width: 0;\n  left: 0;\n  top: 0;\n  height: 4px;\n  border-radius: 2px; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator.active {\n  background: #ffffff;\n  width: 100%;\n  top: 0;\n  border-radius: 2px; }\n\n.qubely-carousel.qubely-carousel-wrapper.is-faded .qubely-carousel-extended-list .qubely-carousel-extended-outer-stage .qubely-carousel-extended-item:not(.active) {\n  opacity: 0.1; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/tests/style.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/tests/style.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".test-block {\n  margin: 100px;\n  padding: 100px;\n  background: red; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/blocks/teamcarousel/Edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/teamcarousel/Edit.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _icons = __webpack_require__(/*! ../../helpers/icons */ "./src/helpers/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload;
var _wp$qubelyComponents = wp.qubelyComponents,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    Range = _wp$qubelyComponents.Range,
    Color = _wp$qubelyComponents.Color,
    Typography = _wp$qubelyComponents.Typography,
    Toggle = _wp$qubelyComponents.Toggle,
    Separator = _wp$qubelyComponents.Separator,
    ColorAdvanced = _wp$qubelyComponents.ColorAdvanced,
    Border = _wp$qubelyComponents.Border,
    BorderRadius = _wp$qubelyComponents.BorderRadius,
    BoxShadow = _wp$qubelyComponents.BoxShadow,
    Styles = _wp$qubelyComponents.Styles,
    Alignment = _wp$qubelyComponents.Alignment,
    Padding = _wp$qubelyComponents.Padding,
    Tabs = _wp$qubelyComponents.Tabs,
    Tab = _wp$qubelyComponents.Tab,
    Carousel = _wp$qubelyComponents.Carousel,
    ButtonGroup = _wp$qubelyComponents.ButtonGroup,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator;

var Edit = function (_Component) {
	_inherits(Edit, _Component);

	function Edit(props) {
		_classCallCheck(this, Edit);

		var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

		_this.changePluginAttribute = function (key, value) {
			_this.setState({
				key: key,
				value: value
			});
			_this.props.setAttributes(_defineProperty({}, key, value));
		};

		_this.updateAtrributes = function (name, value, index) {
			var _this$props = _this.props,
			    setAttributes = _this$props.setAttributes,
			    carouselItems = _this$props.attributes.carouselItems;

			var updatedAttributes = carouselItems.map(function (data, itemIndex) {
				if (index === itemIndex) {
					return _extends({}, data, _defineProperty({}, name, value));
				} else {
					return data;
				}
			});
			setAttributes({ carouselItems: updatedAttributes });
		};

		_this.renderName = function (name, index) {
			return React.createElement(RichText, {
				key: 'editable',
				keepPlaceholderOnFocus: true,
				placeholder: __('Add Name...'),
				formattingControls: ['bold', 'italic', 'link', 'strikethrough'],
				onChange: function onChange(value) {
					return _this.updateAtrributes('author', value, index);
				},
				value: name
			});
		};

		_this.renderDesignation = function (designation, index) {
			return React.createElement(RichText, {
				key: 'editable',
				placeholder: __('Add designation...'),
				formattingControls: ['bold', 'italic', 'link', 'strikethrough'],
				keepPlaceholderOnFocus: true,
				onChange: function onChange(value) {
					return _this.updateAtrributes('designation', value, index);
				},
				value: designation
			});
		};

		_this.renderAvatar = function (avatar, index) {
			return React.createElement(MediaUpload, {
				onSelect: function onSelect(val) {
					return _this.updateAtrributes('avatar', val, index);
				},
				allowedTypes: ['image'],
				multiple: false,
				value: avatar,
				render: function render(_ref) {
					var open = _ref.open;
					return React.createElement(
						'div',
						{ className: 'qubely-single-img qubely-backend' },
						avatar && avatar.url ? React.createElement('img', { onClick: open, className: 'qubely-team-avatar', src: avatar.url }) : React.createElement(
							'div',
							{ onClick: open, className: 'qubely-image-placeholder qubely-team-avatar' },
							React.createElement('i', { className: 'far fa-image' })
						)
					);
				}
			});
		};

		_this.renderSocialShare = function () {
			var _this$props$attribute = _this.props.attributes,
			    showSociallinks = _this$props$attribute.showSociallinks,
			    facebook = _this$props$attribute.facebook,
			    twitter = _this$props$attribute.twitter,
			    instagram = _this$props$attribute.instagram,
			    linkedin = _this$props$attribute.linkedin,
			    youtube = _this$props$attribute.youtube,
			    github = _this$props$attribute.github,
			    flickr = _this$props$attribute.flickr,
			    pinterest = _this$props$attribute.pinterest,
			    dribbble = _this$props$attribute.dribbble,
			    behance = _this$props$attribute.behance;

			return React.createElement(
				'div',
				{ className: 'social-share' },
				showSociallinks && (facebook || twitter || instagram || linkedin || youtube || github || flickr || pinterest || dribbble || behance) && React.createElement(
					'div',
					{ className: 'qubely-team-social-links', onClick: function onClick() {
							return _this.handlePanelOpenings('Social');
						} },
					facebook && React.createElement(
						'a',
						{ className: 'qubely-team-social-facebook' },
						React.createElement('i', { className: 'fab fa-facebook' })
					),
					twitter && React.createElement(
						'a',
						{ className: 'qubely-team-social-twitter' },
						React.createElement('i', { className: 'fab fa-twitter' })
					),
					instagram && React.createElement(
						'a',
						{ className: 'qubely-team-social-instagram' },
						React.createElement('i', { className: 'fab fa-instagram' })
					),
					linkedin && React.createElement(
						'a',
						{ className: 'qubely-team-social-linkedin' },
						React.createElement('i', { className: 'fab fa-linkedin' })
					),
					youtube && React.createElement(
						'a',
						{ className: 'qubely-team-social-youtube' },
						React.createElement('i', { className: 'fab fa-youtube' })
					),
					github && React.createElement(
						'a',
						{ className: 'qubely-team-social-github' },
						React.createElement('i', { className: 'fab fa-github' })
					),
					flickr && React.createElement(
						'a',
						{ className: 'qubely-team-social-flickr' },
						React.createElement('i', { className: 'fab fa-flickr' })
					),
					pinterest && React.createElement(
						'a',
						{ className: 'qubely-team-social-pinterest' },
						React.createElement('i', { className: 'fab fa-pinterest' })
					),
					dribbble && React.createElement(
						'a',
						{ className: 'qubely-team-social-dribbble' },
						React.createElement('i', { className: 'fab fa-dribbble' })
					),
					behance && React.createElement(
						'a',
						{ className: 'qubely-team-social-behance' },
						React.createElement('i', { className: 'fab fa-behance' })
					)
				)
			);
		};

		_this.renderAuthorInfo = function (item, index) {
			var _this$props$attribute2 = _this.props.attributes,
			    layout = _this$props$attribute2.layout,
			    showAvatar = _this$props$attribute2.showAvatar;
			var author = item.author,
			    designation = item.designation,
			    avatar = item.avatar;


			return React.createElement(
				'div',
				{ className: 'qubely-team-author' },
				showAvatar && _this.renderAvatar(avatar, index) /* Author avater callback function */,
				React.createElement(
					'div',
					{ className: 'qubely-team-author-info' },
					React.createElement(
						'div',
						{ className: 'layout-' + layout },
						React.createElement(
							'div',
							{ className: 'qubely-team-author-name' },
							_this.renderName(author, index)
						),
						React.createElement(
							'div',
							{ className: 'qubely-team-author-designation' },
							_this.renderDesignation(designation, index)
						),
						_this.renderSocialShare() /* Social share callback function */
					)
				)
			);
		};

		_this.renderTeams = function () {
			var _this$props$attribute3 = _this.props.attributes,
			    items = _this$props$attribute3.items,
			    layout = _this$props$attribute3.layout,
			    carouselItems = _this$props$attribute3.carouselItems;

			return carouselItems.map(function (item, index) {
				return React.createElement(
					'div',
					{ key: index, className: 'qubely-carousel-item ' + (index < items[_this.parseResponsiveViewPort()] ? 'active' : '') },
					React.createElement(
						'div',
						{ className: 'qubely-team-carousel-item' },
						React.createElement(
							'div',
							{ className: 'qubely-team-' + layout },
							_this.renderAuthorInfo(item, index)
						)
					)
				);
			});
		};

		_this.setCarouselLength = function (newLength) {
			var _this$props2 = _this.props,
			    setAttributes = _this$props2.setAttributes,
			    _this$props2$attribut = _this$props2.attributes,
			    carouselItems = _this$props2$attribut.carouselItems,
			    items = _this$props2$attribut.items;

			var newCarouselItems = JSON.parse(JSON.stringify(carouselItems));
			var defaultItem = {
				author: 'James Moriarty',
				designation: 'Web WordPress Developer',
				message: '“Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '5',
				avatar: {}
			};
			if (newLength > carouselItems.length) {
				newCarouselItems.push(defaultItem);
			} else {
				newLength >= items.md && newLength >= items.sm && newLength >= items.sm && newCarouselItems.pop();
			}
			setAttributes({ carouselItems: newCarouselItems });
		};

		_this.parseResponsiveViewPort = function () {
			var items = _this.props.attributes.items;

			var responsive = [{ viewport: 1170, items: items.md }, { viewport: 980, items: items.sm }, { viewport: 580, items: items.xs }];
			if (typeof responsive === 'undefined') return;
			var activeView = null;

			for (var i = 0; i < responsive.length; i++) {
				if (window.innerWidth > responsive[i].viewport) {
					activeView = responsive[i];
					break;
				}
			}
			if (activeView === null) {
				activeView = responsive[responsive.length - 1];
			}
			return activeView.viewport <= 1199 ? activeView.viewport <= 991 ? 'xs' : 'sm' : 'md';
		};

		_this.state = {
			device: 'md',
			spacer: true,
			openPanelSetting: ''
		};
		return _this;
	}

	_createClass(Edit, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    setAttributes = _props.setAttributes,
			    clientId = _props.clientId,
			    uniqueId = _props.attributes.uniqueId;

			var _client = clientId.substr(0, 6);
			if (!uniqueId) {
				setAttributes({ uniqueId: _client });
			} else if (uniqueId && uniqueId != _client) {
				setAttributes({ uniqueId: _client });
			}
		}
		/** 
   *  Author Avatar*/


		/** 
   *  Social Share callback function. */


		/** 
   *  Author information. */


		/** 
   *  Render author informations. */

	}, {
		key: 'render',
		value: function render() {
			var _this2 = this,
			    _React$createElement,
			    _React$createElement2;

			var _props2 = this.props,
			    setAttributes = _props2.setAttributes,
			    _props2$attributes = _props2.attributes,
			    uniqueId = _props2$attributes.uniqueId,
			    items = _props2$attributes.items,
			    autoPlay = _props2$attributes.autoPlay,
			    interval = _props2$attributes.interval,
			    speed = _props2$attributes.speed,
			    nav = _props2$attributes.nav,
			    carouselItems = _props2$attributes.carouselItems,
			    dragable = _props2$attributes.dragable,
			    layout = _props2$attributes.layout,
			    nameColor = _props2$attributes.nameColor,
			    alignment = _props2$attributes.alignment,
			    designationColor = _props2$attributes.designationColor,
			    showAvatar = _props2$attributes.showAvatar,
			    avatarBorderRadius = _props2$attributes.avatarBorderRadius,
			    avatarSize = _props2$attributes.avatarSize,
			    avatarWidth = _props2$attributes.avatarWidth,
			    avatarHeight = _props2$attributes.avatarHeight,
			    avatarBorder = _props2$attributes.avatarBorder,
			    avatarSpacing = _props2$attributes.avatarSpacing,
			    nameTypo = _props2$attributes.nameTypo,
			    nameSpacing = _props2$attributes.nameSpacing,
			    designationTypo = _props2$attributes.designationTypo,
			    bgPadding = _props2$attributes.bgPadding,
			    textColor = _props2$attributes.textColor,
			    bgColor = _props2$attributes.bgColor,
			    bgBorderRadius = _props2$attributes.bgBorderRadius,
			    border = _props2$attributes.border,
			    boxShadow = _props2$attributes.boxShadow,
			    boxShadowHover = _props2$attributes.boxShadowHover,
			    sliderItemsSpace = _props2$attributes.sliderItemsSpace,
			    isCentered = _props2$attributes.isCentered,
			    activeFade = _props2$attributes.activeFade,
			    arrowStyle = _props2$attributes.arrowStyle,
			    arrowPosition = _props2$attributes.arrowPosition,
			    cornerRadius = _props2$attributes.cornerRadius,
			    cornerHoverRadius = _props2$attributes.cornerHoverRadius,
			    arrowSize = _props2$attributes.arrowSize,
			    sizeWidth = _props2$attributes.sizeWidth,
			    arrowColor = _props2$attributes.arrowColor,
			    arrowShapeColor = _props2$attributes.arrowShapeColor,
			    arrowBorderColor = _props2$attributes.arrowBorderColor,
			    arrowHoverColor = _props2$attributes.arrowHoverColor,
			    arrowShapeHoverColor = _props2$attributes.arrowShapeHoverColor,
			    arrowBorderHoverColor = _props2$attributes.arrowBorderHoverColor,
			    dots = _props2$attributes.dots,
			    dotIndicator = _props2$attributes.dotIndicator,
			    dotwidth = _props2$attributes.dotwidth,
			    dotHeight = _props2$attributes.dotHeight,
			    dotBorderRadius = _props2$attributes.dotBorderRadius,
			    dotColor = _props2$attributes.dotColor,
			    dotActiveColor = _props2$attributes.dotActiveColor,
			    horizontalScroll = _props2$attributes.horizontalScroll,
			    showSociallinks = _props2$attributes.showSociallinks,
			    facebook = _props2$attributes.facebook,
			    twitter = _props2$attributes.twitter,
			    instagram = _props2$attributes.instagram,
			    linkedin = _props2$attributes.linkedin,
			    youtube = _props2$attributes.youtube,
			    github = _props2$attributes.github,
			    flickr = _props2$attributes.flickr,
			    pinterest = _props2$attributes.pinterest,
			    dribbble = _props2$attributes.dribbble,
			    behance = _props2$attributes.behance,
			    iconSize = _props2$attributes.iconSize,
			    iconSizeCustom = _props2$attributes.iconSizeCustom,
			    iconGutter = _props2$attributes.iconGutter,
			    iconSpacing = _props2$attributes.iconSpacing,
			    iconStyle = _props2$attributes.iconStyle,
			    iconUseDefaultStyle = _props2$attributes.iconUseDefaultStyle,
			    iconBorderRadius = _props2$attributes.iconBorderRadius,
			    iconColor = _props2$attributes.iconColor,
			    iconBackground = _props2$attributes.iconBackground,
			    iconBorder = _props2$attributes.iconBorder,
			    iconColorHover = _props2$attributes.iconColorHover,
			    iconBackgroundHover = _props2$attributes.iconBackgroundHover,
			    iconBorderColorHover = _props2$attributes.iconBorderColorHover;
			var device = this.state.device;


			var carouselSettings = {
				autoplay: autoPlay,
				items: items,
				margin: 10,
				center: isCentered,
				dots: dots,
				dot_indicator: dotIndicator,
				nav: nav,
				arrowStyle: arrowStyle,
				arrowPosition: arrowPosition,
				speed: speed,
				interval: interval,
				responsive: [{
					viewport: 1170,
					items: items.md
				}, {
					viewport: 980,
					items: items.sm
				}, {
					viewport: 580,
					items: items.xs
				}]
			};

			if (uniqueId) {
				CssGenerator(this.props.attributes, 'teamcarousel', uniqueId);
			}

			console.log('ID', _icons2.default.teamcarousel_1);

			return React.createElement(
				Fragment,
				null,
				React.createElement(
					InspectorControls,
					{ key: 'inspector' },
					React.createElement(
						PanelBody,
						{ title: 'Team Carousel', initialOpen: false },
						React.createElement(Styles, { value: layout, onChange: function onChange(val) {
								return setAttributes({ layout: val });
							},
							options: [{ value: 1, svg: _icons2.default.teamcarousel_1, label: __('Layout 1') }, { value: 2, svg: _icons2.default.teamcarousel_2, label: __('Layout 2') }, { value: 3, svg: _icons2.default.teamcarousel_3, label: __('Layout 3') }]
						}),
						React.createElement(Alignment, (_React$createElement = {
							label: __('Alignment'),
							value: alignment,
							alignmentType: 'content',
							onChange: function onChange(val) {
								return setAttributes({ alignment: val });
							}
						}, _defineProperty(_React$createElement, 'alignmentType', 'content'), _defineProperty(_React$createElement, 'disableJustify', true), _defineProperty(_React$createElement, 'responsive', true), _defineProperty(_React$createElement, 'device', device), _defineProperty(_React$createElement, 'onDeviceChange', function onDeviceChange(value) {
							return _this2.setState({ device: value });
						}), _React$createElement)),
						React.createElement(Range, {
							label: __('Number of Carousels'),
							min: 1,
							max: 20,
							value: carouselItems.length,
							onChange: function onChange(val) {
								return _this2.setCarouselLength(val);
							}
						}),
						React.createElement(Range, (_React$createElement2 = {
							label: __('Number of Columns'),
							min: 1,
							max: 20,
							device: device,
							responsive: true,
							value: items,
							onChange: function onChange(val) {
								return setAttributes({ items: val });
							}
						}, _defineProperty(_React$createElement2, 'device', this.state.device), _defineProperty(_React$createElement2, 'onDeviceChange', function onDeviceChange(value) {
							return _this2.setState({ device: value });
						}), _React$createElement2)),
						React.createElement(Range, {
							label: __('Padding'),
							min: 1,
							max: 80,
							responsive: true,
							unit: ['px', 'em', '%'],
							value: sliderItemsSpace,
							onChange: function onChange(value) {
								return setAttributes({ sliderItemsSpace: value });
							},
							device: device,
							onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							}
						})
					),
					React.createElement(
						PanelBody,
						{ title: __('Carousel Settings'), initialOpen: false },
						React.createElement(Toggle, { label: __('Autoplay'), value: autoPlay, onChange: function onChange(value) {
								return setAttributes({ autoPlay: value });
							} }),
						autoPlay && React.createElement(
							Fragment,
							null,
							React.createElement(Range, { label: __('Speed (ms)'), value: speed, onChange: function onChange(value) {
									return setAttributes({ speed: parseInt(value) });
								}, min: 500, max: 5000 }),
							React.createElement(Range, { label: __('Interval (ms)'), value: interval, onChange: function onChange(value) {
									return setAttributes({ interval: parseInt(value) });
								}, min: 500, max: 5000 })
						),
						React.createElement(Toggle, { label: __('Draggable'), value: dragable, onChange: function onChange(value) {
								return setAttributes({ dragable: value });
							} }),
						React.createElement(Toggle, { label: __('Centered Slides'), value: isCentered, onChange: function onChange(value) {
								return setAttributes({ isCentered: value });
							} }),
						isCentered && React.createElement(Toggle, { label: __('Fade Deactivated Items'), value: activeFade, onChange: function onChange(value) {
								return setAttributes({ activeFade: value });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: __('Slider Settings'), initialOpen: false },
						React.createElement(Toggle, { label: __('Show Arrow Navigation'), value: nav, onChange: function onChange(value) {
								return setAttributes({ nav: value });
							} }),
						nav && React.createElement(
							Fragment,
							null,
							React.createElement(ButtonGroup, {
								label: __('Arrow Style'),
								options: [[React.createElement('span', { className: 'dashicons dashicons-arrow-right-alt' }), 'arrowright'], [React.createElement('span', { className: 'dashicons dashicons-arrow-right-alt2' }), 'arrowright2']],
								value: arrowStyle,
								onChange: function onChange(value) {
									return setAttributes({ arrowStyle: value });
								}
							}),
							React.createElement(Range, {
								label: __('Horizontal Position'),
								value: horizontalScroll, onChange: function onChange(value) {
									return setAttributes({ horizontalScroll: value });
								},
								min: -100, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Vertical Position'),
								value: arrowPosition, onChange: function onChange(value) {
									return setAttributes({ arrowPosition: value });
								},
								min: 1, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Shape Size'),
								value: sizeWidth, onChange: function onChange(value) {
									return setAttributes({ sizeWidth: value });
								},
								min: 1, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Arrow Size'),
								value: arrowSize, onChange: function onChange(value) {
									return setAttributes({ arrowSize: value });
								},
								min: 0, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(
								Tabs,
								null,
								React.createElement(
									Tab,
									{ tabTitle: __('Normal') },
									React.createElement(Color, { label: __('Arrow Color'), value: arrowColor, onChange: function onChange(value) {
											return setAttributes({ arrowColor: value });
										} }),
									React.createElement(ColorAdvanced, { label: __('Shape Color'), value: arrowShapeColor, onChange: function onChange(val) {
											return setAttributes({ arrowShapeColor: val });
										} }),
									React.createElement(Border, { label: __('Border'), value: arrowBorderColor, onChange: function onChange(val) {
											return setAttributes({ arrowBorderColor: val });
										} }),
									React.createElement(Range, {
										label: __('Corner Radius'),
										value: cornerRadius, onChange: function onChange(value) {
											return setAttributes({ cornerRadius: value });
										},
										min: 1, max: 100,
										responsive: true, unit: ['px', 'em', '%'],
										device: device,
										onDeviceChange: function onDeviceChange(value) {
											return _this2.setState({ device: value });
										}
									})
								),
								React.createElement(
									Tab,
									{ tabTitle: __('Hover') },
									React.createElement(Color, { label: __('Arrow Hover Color'), value: arrowHoverColor, onChange: function onChange(value) {
											return setAttributes({ arrowHoverColor: value });
										} }),
									React.createElement(ColorAdvanced, { label: __('Shape Hover Color'), value: arrowShapeHoverColor, onChange: function onChange(val) {
											return setAttributes({ arrowShapeHoverColor: val });
										} }),
									React.createElement(Border, { label: __('Border Hover Color'), value: arrowBorderHoverColor, onChange: function onChange(val) {
											return setAttributes({ arrowBorderHoverColor: val });
										} }),
									React.createElement(Range, {
										label: __('Corner Hover Radius'),
										value: cornerHoverRadius, onChange: function onChange(value) {
											return setAttributes({ cornerHoverRadius: value });
										},
										min: 1, max: 100,
										responsive: true, unit: ['px', 'em', '%'],
										device: device,
										onDeviceChange: function onDeviceChange(value) {
											return _this2.setState({ device: value });
										}
									})
								)
							)
						),
						React.createElement(Toggle, { label: __('Show Dot Navigation'), value: dots, onChange: function onChange(value) {
								return setAttributes({ dots: value });
							} }),
						dots && React.createElement(
							Fragment,
							null,
							React.createElement(Range, {
								label: __('Dot Width'),
								value: dotwidth, onChange: function onChange(value) {
									return setAttributes({ dotwidth: value });
								},
								min: 1, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Dot Height'),
								value: dotHeight, onChange: function onChange(value) {
									return setAttributes({ dotHeight: value });
								},
								min: 1, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Dot Border Radius'),
								value: dotBorderRadius, onChange: function onChange(value) {
									return setAttributes({ dotBorderRadius: value });
								},
								min: 1, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(
								Tabs,
								null,
								React.createElement(
									Tab,
									{ tabTitle: __('Normal') },
									React.createElement(ColorAdvanced, { label: __('Dot Color'), value: dotColor, onChange: function onChange(val) {
											return setAttributes({ dotColor: val });
										} })
								),
								React.createElement(
									Tab,
									{ tabTitle: __('Active') },
									React.createElement(ColorAdvanced, { label: __('Dot Active Color'), value: dotActiveColor, onChange: function onChange(val) {
											return setAttributes({ dotActiveColor: val });
										} })
								)
							)
						)
					),
					React.createElement(
						PanelBody,
						{ title: __('Avatar'), initialOpen: false },
						React.createElement(Toggle, { label: __('Show Avatar'), value: showAvatar, onChange: function onChange(val) {
								return setAttributes({ showAvatar: val });
							} }),
						showAvatar && React.createElement(
							Fragment,
							null,
							React.createElement(RadioAdvanced, {
								label: __('Avatar Size'),
								options: [{ label: 'S', value: '48px', title: 'Small' }, { label: 'M', value: '64px', title: 'Medium' }, { label: 'L', value: '96px', title: 'Large' }, { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }],
								value: avatarSize,
								onChange: function onChange(value) {
									return setAttributes({ avatarSize: value });
								}
							}),
							avatarSize == 'custom' && React.createElement(
								Fragment,
								null,
								React.createElement(Range, {
									label: __('Avatar Width'),
									value: avatarWidth,
									onChange: function onChange(value) {
										return setAttributes({ avatarWidth: value });
									},
									unit: ['px', 'em', '%'],
									max: 300, min: 0, responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									}
								}),
								React.createElement(Range, {
									label: __('Avatar Height'),
									value: avatarHeight,
									onChange: function onChange(value) {
										return setAttributes({ avatarHeight: value });
									},
									unit: ['px', 'em', '%'],
									max: 300,
									min: 0,
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									}
								})
							),
							React.createElement(
								Fragment,
								null,
								React.createElement(BorderRadius, {
									label: __('Radius'),
									value: avatarBorderRadius, onChange: function onChange(value) {
										return setAttributes({ avatarBorderRadius: value });
									},
									min: 0,
									max: 100,
									unit: ['px', 'em', '%'],
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									} }),
								React.createElement(Border, {
									label: __('Border'),
									value: avatarBorder,
									onChange: function onChange(value) {
										return setAttributes({ avatarBorder: value });
									},
									unit: ['px', 'em', '%'],
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									}
								}),
								React.createElement(Range, {
									label: __('Spacing'),
									value: avatarSpacing,
									onChange: function onChange(value) {
										return setAttributes({ avatarSpacing: value });
									},
									min: 0,
									max: 200,
									unit: ['px', 'em', '%'],
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									} })
							)
						)
					),
					React.createElement(
						PanelBody,
						{ title: __('Name'), initialOpen: false },
						React.createElement(Range, {
							label: __('Spacing'),
							value: nameSpacing, onChange: function onChange(value) {
								return setAttributes({ nameSpacing: value });
							},
							unit: ['px', 'em', '%'], max: 300,
							min: 0,
							responsive: true,
							device: device,
							onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} }),
						React.createElement(Color, {
							label: __('Color'),
							value: nameColor, onChange: function onChange(value) {
								return setAttributes({ nameColor: value });
							}
						}),
						React.createElement(Typography, {
							label: __('Typography'),
							value: nameTypo,
							onChange: function onChange(value) {
								return setAttributes({ nameTypo: value });
							},
							device: device, onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: __('Designation'), initialOpen: false },
						React.createElement(Color, {
							label: __('Color'),
							value: designationColor, onChange: function onChange(value) {
								return setAttributes({ designationColor: value });
							}
						}),
						React.createElement(Typography, {
							label: __('Typography'),
							value: designationTypo,
							onChange: function onChange(value) {
								return setAttributes({ designationTypo: value });
							},
							device: device, onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: __('Social'), initialOpen: false },
						React.createElement(Toggle, { label: __('Show Social-links'), value: showSociallinks, onChange: function onChange(val) {
								return setAttributes({ showSociallinks: val });
							} }),
						showSociallinks && React.createElement(
							Fragment,
							null,
							React.createElement(TextControl, { label: __('Facebook'), value: facebook, onChange: function onChange(val) {
									return setAttributes({ facebook: val });
								} }),
							React.createElement(TextControl, { label: __('Twitter'), value: twitter, onChange: function onChange(val) {
									return setAttributes({ twitter: val });
								} }),
							React.createElement(TextControl, { label: __('Instagram'), value: instagram, onChange: function onChange(val) {
									return setAttributes({ instagram: val });
								} }),
							React.createElement(TextControl, { label: __('Linkedin'), value: linkedin, onChange: function onChange(val) {
									return setAttributes({ linkedin: val });
								} }),
							React.createElement(TextControl, { label: __('Youtube'), value: youtube, onChange: function onChange(val) {
									return setAttributes({ youtube: val });
								} }),
							React.createElement(TextControl, { label: __('Github'), value: github, onChange: function onChange(val) {
									return setAttributes({ github: val });
								} }),
							React.createElement(TextControl, { label: __('Flickr'), value: flickr, onChange: function onChange(val) {
									return setAttributes({ flickr: val });
								} }),
							React.createElement(TextControl, { label: __('Pinterest'), value: pinterest, onChange: function onChange(val) {
									return setAttributes({ pinterest: val });
								} }),
							React.createElement(TextControl, { label: __('Dribbble'), value: dribbble, onChange: function onChange(val) {
									return setAttributes({ dribbble: val });
								} }),
							React.createElement(TextControl, { label: __('Behance'), value: behance, onChange: function onChange(val) {
									return setAttributes({ behance: val });
								} }),
							React.createElement(Separator, null),
							React.createElement(Styles, { label: __('Icon Style'), value: iconStyle, onChange: function onChange(val) {
									return setAttributes({ iconStyle: val });
								},
								options: [{ value: 'fill', svg: _icons2.default.social_fill, label: __('Fill') }, { value: 'normal', svg: _icons2.default.social_normal, label: __('Normal') }]
							}),
							React.createElement(RadioAdvanced, { label: __('Icon Size'), value: iconSize, onChange: function onChange(value) {
									return setAttributes({ iconSize: value });
								},
								options: [{ label: 'S', value: '14px', title: 'Small' }, { label: 'M', value: '18px', title: 'Medium' }, { label: 'L', value: '24px', title: 'Large' }, { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }]
							}),
							iconSize == 'custom' && React.createElement(Range, { label: __('Custom Size'), value: iconSizeCustom, onChange: function onChange(val) {
									return setAttributes({ iconSizeCustom: val });
								}, min: 12, max: 300, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								} }),
							iconStyle == 'fill' && React.createElement(BorderRadius, {
								label: __('Corner Radius'),
								value: iconBorderRadius,
								onChange: function onChange(value) {
									return setAttributes({ iconBorderRadius: value });
								},
								min: 0,
								max: 100, unit: ['px', 'em', '%'],
								responsive: true,
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								} }),
							React.createElement(Range, { label: __('Gutter'), value: iconGutter, onChange: function onChange(val) {
									return setAttributes({ iconGutter: val });
								}, min: 0, max: 40, unit: ['px', 'em'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								} }),
							React.createElement(Range, { label: __('Spacing'), value: iconSpacing, onChange: function onChange(val) {
									return setAttributes({ iconSpacing: val });
								}, min: 0, max: 60, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								} }),
							React.createElement(Toggle, { label: __('Default Styles'), value: iconUseDefaultStyle, onChange: function onChange(val) {
									return setAttributes({ iconUseDefaultStyle: val });
								} }),
							!iconUseDefaultStyle && React.createElement(
								Tabs,
								null,
								React.createElement(
									Tab,
									{ tabTitle: __('Normal') },
									React.createElement(Color, { label: __('Color'), value: iconColor, onChange: function onChange(value) {
											return setAttributes({ iconColor: value });
										} }),
									iconStyle == 'fill' && React.createElement(
										Fragment,
										null,
										React.createElement(Color, { label: __('Background Color'), value: iconBackground, onChange: function onChange(value) {
												return setAttributes({ iconBackground: value });
											} }),
										React.createElement(Border, { label: __('Border'), value: iconBorder, onChange: function onChange(value) {
												return setAttributes({ iconBorder: value });
											} })
									)
								),
								React.createElement(
									Tab,
									{ tabTitle: __('Hover') },
									React.createElement(Color, { label: __('Color'), value: iconColorHover, onChange: function onChange(value) {
											return setAttributes({ iconColorHover: value });
										} }),
									iconStyle == 'fill' && React.createElement(
										Fragment,
										null,
										React.createElement(Color, { label: __('Background Color'), value: iconBackgroundHover, onChange: function onChange(value) {
												return setAttributes({ iconBackgroundHover: value });
											} }),
										React.createElement(Color, { label: __('Border Color'), value: iconBorderColorHover, onChange: function onChange(value) {
												return setAttributes({ iconBorderColorHover: value });
											} })
									)
								)
							)
						)
					),
					React.createElement(
						PanelBody,
						{ title: __('Design'), initialOpen: false },
						React.createElement(Color, {
							label: __('Text Color'),
							value: textColor,
							onChange: function onChange(val) {
								return setAttributes({ textColor: val });
							} }),
						React.createElement(Color, {
							label: __('Background'),
							value: bgColor,
							onChange: function onChange(val) {
								return setAttributes({ bgColor: val });
							} }),
						React.createElement(Separator, null),
						React.createElement(Border, {
							label: __('Border'),
							value: border,
							onChange: function onChange(val) {
								return setAttributes({ border: val });
							} }),
						React.createElement(Padding, {
							label: __('Padding'),
							value: bgPadding, onChange: function onChange(value) {
								return setAttributes({ bgPadding: value });
							},
							unit: ['px', 'em', '%'],
							min: 0,
							max: 100,
							responsive: true,
							device: device,
							onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} }),
						React.createElement(BorderRadius, {
							label: __('Border Radius'),
							value: bgBorderRadius,
							onChange: function onChange(val) {
								return setAttributes({ bgBorderRadius: val });
							},
							min: 0,
							max: 100,
							unit: ['px', 'em', '%'],
							responsive: true,
							device: device,
							onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} }),
						React.createElement(
							Tabs,
							null,
							React.createElement(
								Tab,
								{ tabTitle: __('Normal') },
								React.createElement(BoxShadow, {
									label: __('Box Shadow'),
									value: boxShadow, onChange: function onChange(val) {
										return setAttributes({ boxShadow: val });
									}
								})
							),
							React.createElement(
								Tab,
								{ tabTitle: __('Hover') },
								React.createElement(BoxShadow, {
									label: __('Box Shadow'),
									value: boxShadowHover, onChange: function onChange(val) {
										return setAttributes({ boxShadowHover: val });
									}
								})
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'qubely-block-' + uniqueId },
					React.createElement(
						'div',
						{ className: 'qubely-block-team-carousel qubely-layout-style' },
						React.createElement(
							Carousel,
							{ options: carouselSettings },
							this.renderTeams()
						)
					)
				)
			);
		}
	}]);

	return Edit;
}(Component);

exports.default = Edit;

/***/ }),

/***/ "./src/blocks/teamcarousel/Save.js":
/*!*****************************************!*\
  !*** ./src/blocks/teamcarousel/Save.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;
var RichText = wp.editor.RichText;
var animationAttr = wp.qubelyComponents.HelperFunction.animationAttr;

var Save = function (_Component) {
  _inherits(Save, _Component);

  function Save() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Save);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Save.__proto__ || Object.getPrototypeOf(Save)).call.apply(_ref, [this].concat(args))), _this), _this.renderAvatar = function (avatar, avatarAlt) {
      return React.createElement(
        "div",
        { className: "qubely-single-img" },
        avatar.url != undefined ? React.createElement("img", { className: "qubely-team-avatar", src: avatar.url, alt: avatarAlt }) : React.createElement(
          "div",
          { className: "qubely-image-placeholder qubely-team-avatar" },
          React.createElement("i", { className: "far fa-user" })
        )
      );
    }, _this.renderSocialShare = function () {
      var _this$props$attribute = _this.props.attributes,
          showSociallinks = _this$props$attribute.showSociallinks,
          facebook = _this$props$attribute.facebook,
          twitter = _this$props$attribute.twitter,
          instagram = _this$props$attribute.instagram,
          linkedin = _this$props$attribute.linkedin,
          youtube = _this$props$attribute.youtube,
          github = _this$props$attribute.github,
          flickr = _this$props$attribute.flickr,
          pinterest = _this$props$attribute.pinterest,
          dribbble = _this$props$attribute.dribbble,
          behance = _this$props$attribute.behance;

      return React.createElement(
        "div",
        { className: "social-share" },
        showSociallinks && (facebook || twitter || instagram || linkedin || youtube || github || flickr || pinterest || dribbble || behance) && React.createElement(
          "div",
          { className: "qubely-team-social-links", onClick: function onClick() {
              return _this.handlePanelOpenings('Social');
            } },
          facebook && React.createElement(
            "a",
            { className: "qubely-team-social-facebook" },
            React.createElement("i", { className: "fab fa-facebook" })
          ),
          twitter && React.createElement(
            "a",
            { className: "qubely-team-social-twitter" },
            React.createElement("i", { className: "fab fa-twitter" })
          ),
          instagram && React.createElement(
            "a",
            { className: "qubely-team-social-instagram" },
            React.createElement("i", { className: "fab fa-instagram" })
          ),
          linkedin && React.createElement(
            "a",
            { className: "qubely-team-social-linkedin" },
            React.createElement("i", { className: "fab fa-linkedin" })
          ),
          youtube && React.createElement(
            "a",
            { className: "qubely-team-social-youtube" },
            React.createElement("i", { className: "fab fa-youtube" })
          ),
          github && React.createElement(
            "a",
            { className: "qubely-team-social-github" },
            React.createElement("i", { className: "fab fa-github" })
          ),
          flickr && React.createElement(
            "a",
            { className: "qubely-team-social-flickr" },
            React.createElement("i", { className: "fab fa-flickr" })
          ),
          pinterest && React.createElement(
            "a",
            { className: "qubely-team-social-pinterest" },
            React.createElement("i", { className: "fab fa-pinterest" })
          ),
          dribbble && React.createElement(
            "a",
            { className: "qubely-team-social-dribbble" },
            React.createElement("i", { className: "fab fa-dribbble" })
          ),
          behance && React.createElement(
            "a",
            { className: "qubely-team-social-behance" },
            React.createElement("i", { className: "fab fa-behance" })
          )
        )
      );
    }, _this.renderAuthorInfo = function (item, index) {
      var _this$props$attribute2 = _this.props.attributes,
          layout = _this$props$attribute2.layout,
          showAvatar = _this$props$attribute2.showAvatar;
      var author = item.author,
          designation = item.designation,
          avatar = item.avatar;

      return React.createElement(
        "div",
        { className: "qubely-team-author" },
        showAvatar && _this.renderAvatar(avatar, index) /* Author avater callback function */,
        React.createElement(
          "div",
          { className: "qubely-team-author-info" },
          React.createElement(
            "div",
            { className: "layout-" + layout },
            React.createElement(
              "div",
              { className: "qubely-team-author-name" },
              React.createElement(RichText.Content, { value: author })
            ),
            React.createElement(
              "div",
              { className: "qubely-team-author-designation" },
              React.createElement(RichText.Content, { value: designation })
            ),
            _this.renderSocialShare() /* Social share callback function */
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /** 
  *  Author Avatar*/


  /** 
  *  Team Social Share. */


  /** 
  *  Author information. */


  _createClass(Save, [{
    key: "renderTeam",

    /** 
    *  Render Team informations. */
    value: function renderTeam() {
      var _this2 = this;

      var _props$attributes = this.props.attributes,
          carouselItems = _props$attributes.carouselItems,
          layout = _props$attributes.layout;

      return carouselItems.map(function (item, index) {
        return React.createElement(
          "div",
          { key: index, className: "qubely-carousel-extended-item" + (index === 0 ? ' active' : '') },
          React.createElement(
            "div",
            { className: "qubely-team-carousel-item" },
            React.createElement(
              "div",
              { className: "qubely-team-" + layout },
              _this2.renderAuthorInfo(item)
            )
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props$attributes2 = this.props.attributes,
          uniqueId = _props$attributes2.uniqueId,
          items = _props$attributes2.items,
          autoPlay = _props$attributes2.autoPlay,
          arrowStyle = _props$attributes2.arrowStyle,
          infiniteLoop = _props$attributes2.infiniteLoop,
          activeFade = _props$attributes2.activeFade,
          isCentered = _props$attributes2.isCentered,
          dragable = _props$attributes2.dragable,
          nav = _props$attributes2.nav,
          dots = _props$attributes2.dots,
          dotIndicator = _props$attributes2.dotIndicator,
          interval = _props$attributes2.interval,
          speed = _props$attributes2.speed,
          animation = _props$attributes2.animation;

      var options = JSON.stringify({
        autoplay: autoPlay,
        items: items,
        margin: 10,
        center: isCentered,
        dots: dots,
        dot_indicator: dotIndicator,
        nav: nav,
        speed: speed,
        interval: interval,
        dragable: dragable,
        infiniteLoop: infiniteLoop,
        activeFade: activeFade,
        arrowStyle: arrowStyle,
        responsive: [{
          viewport: 1170,
          items: items.md
        }, {
          viewport: 980,
          items: items.sm
        }, {
          viewport: 580,
          items: items.xs
        }]
      });
      return React.createElement(
        "div",
        _extends({ className: "qubely-block-" + uniqueId }, animationAttr(animation)),
        React.createElement(
          "div",
          { className: "qubely-block-team-carousel qubely-layout-style" },
          React.createElement(
            "div",
            { className: "qubely-carousel qubely-carousel-wrapper" + (isCentered && activeFade ? ' is-faded' : ''), "data-options": options, id: "qubelyCarousel1" },
            this.renderTeam()
          )
        )
      );
    }
  }]);

  return Save;
}(Component);

exports.default = Save;

/***/ }),

/***/ "./src/blocks/teamcarousel/index.js":
/*!******************************************!*\
  !*** ./src/blocks/teamcarousel/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./src/blocks/teamcarousel/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/teamcarousel/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/teamcarousel/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('qubely/teamcarousel', {
	title: __('Team Carousel'),
	description: __('Design and showcase Qubely Team Carousel block'),
	icon: 'groups',
	category: 'qubely',
	keywords: [__('Team'), __('Carousel')],
	attributes: {
		uniqueId: { type: 'string', default: '' },
		items: { type: 'object', default: { md: '2', sm: '2', xs: '1' } },
		columns: { type: 'number', default: 2 },
		autoPlay: { type: 'boolean', default: false },
		dots: { type: 'boolean', default: true },
		dragable: { type: 'boolean', default: true },
		dotIndicator: { type: 'boolean', default: true },
		nav: { type: 'boolean', default: true },
		interval: { type: 'number', default: 3000 },
		speed: { type: 'number', default: 800 },
		carouselItems: {
			type: 'array',
			default: [{
				author: 'James Moriarty',
				designation: 'Web WordPress Developer',
				message: '“Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '5',
				avatar: {}
			}, {
				author: 'Julia Toufis',
				designation: 'WordPress Developer',
				message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '4.5',
				avatar: {}
			}, {
				author: 'Mila Kunis',
				designation: 'WordPress Developer',
				message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '4.5',
				avatar: {}
			}, {
				author: 'Arthur Conan Doyle',
				designation: 'Writer',
				message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '5',
				avatar: {}
			}, {
				author: 'John Deo',
				designation: 'WordPress Developer',
				message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '5',
				avatar: {}
			}, {
				author: 'Alex Fera',
				designation: 'WordPress Developer',
				message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '5',
				avatar: {}
			}]
		},

		/*---------------------------------------------------
  * 	Team Layouts:  common/style attributes
  * --------------------------------------------------- */
		layout: { type: 'number', default: 1 },
		alignment: {
			type: 'object',
			default: { md: 'left' },
			style: [{ selector: '{{QUBELY}} .qubely-team-author-info {text-align: {{alignment}};} {{QUBELY}} .qubely-single-img {text-align: {{alignment}};}' }]
		},
		spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },

		// Number of slider.
		sliderNumber: { type: 'number', default: 5 },
		// Item per Slider  
		itemPerSlides: { type: 'string', default: '2' },
		// Space Between Two item.
		sliderItemsSpace: {
			type: 'objext',
			default: {},
			style: [{
				selector: '{{QUBELY}} .qubely-carousel .qubely-carousel-extended-list .qubely-carousel-item { padding: 0 {{sliderItemsSpace}}; }'
			}]
		},
		// Infinite Loop
		infiniteLoop: { type: 'boolean', default: true },
		isCentered: { type: 'boolean', default: false },
		activeFade: { type: 'boolean', default: false },

		/*------------------------------------
  * 			Slider Settings 			
  -------------------------------------- */
		arrowStyle: { type: 'string', default: 'arrowright' },
		horizontalScroll: {
			type: 'object',
			default: { md: 0, unit: '%' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control { right: {{horizontalScroll}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control { left: {{horizontalScroll}} }  ' }]
		},
		arrowPosition: {
			type: 'object',
			default: { md: 49, unit: '%' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control { bottom: {{arrowPosition}}; } ' }]
		},
		cornerRadius: {
			type: 'object',
			default: { md: 10, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control { border-radius: {{cornerRadius}}; } ' }]
		},
		cornerHoverRadius: {
			type: 'object',
			default: { md: 50, unit: '%' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control:hover { border-radius: {{cornerHoverRadius}}; } ' }]
		},
		sizeWidth: {
			type: 'string',
			default: { md: 12, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control { padding: {{sizeWidth}}; } ' }]
		},
		arrowSize: {
			type: 'object',
			default: { md: 20, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control .dashicons { font-size: {{arrowSize}}; } ' }]
		},
		// Section Arrow 
		arrowColor: {
			type: 'string',
			default: '#1066CC',
			style: [{ selector: '{{QUBELY}} .qubely-block-team-carousel .nav-control .dashicons { color:{{arrowColor}}; }' }]
		},
		// Arrow background color
		arrowShapeColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#fafafa' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control' }]
		},
		// Arrow Border Color
		arrowBorderColor: {
			type: 'object',
			default: {},
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control' }]
		},
		// Arrow Hover Color.
		arrowHoverColor: {
			type: 'string', default: '#ffffff',
			style: [{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control:hover .dashicons { color:{{arrowHoverColor}}; }' }]
		},
		// Arrow background Hover Color.
		arrowShapeHoverColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#1066CC' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover ' }]
		},
		// Arroe Border Hover Color.
		arrowBorderHoverColor: {
			type: 'object',
			default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover' }]
		},
		// Dot Navigation.
		dotwidth: {
			type: 'string',
			default: { md: 30, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { width: {{dotwidth}} }' }]
		},
		dotHeight: {
			type: 'string',
			default: { md: 4, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { height: {{dotHeight}} }' }]
		},
		dotBorderRadius: {
			type: 'string',
			default: { md: 4, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { border-radius: {{dotBorderRadius}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator { border-radius: {{dotBorderRadius}} }' }]
		},
		// Dot
		dotColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#f4f4f4' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li' }]
		},
		// Dot Active Color
		dotActiveColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#1066CC' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator' }]
		},
		//Name
		nameColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-team-author-name { color:{{nameColor}}; }' }] },
		nameTypo: { type: 'object', default: { openTypography: 1, weight: 700, size: { md: 16, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-team-author-name' }] },
		nameSpacing: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-team-author-name {margin-bottom: {{nameSpacing}};}' }] },

		//Designation
		designationColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-team-author-designation { color:{{designationColor}}; }' }] },
		designationTypo: { type: 'object', default: { openTypography: 1, size: { md: 14, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-team-author-designation' }] },

		/*------------------------------------
  * 			Avatar 
  * ------------------------------------ */
		showAvatar: { type: 'boolean', default: true },
		avatarAlt: { type: 'string', default: '' },
		avatarSize: {
			type: 'string',
			default: '',
			style: [{ selector: '{{QUBELY}} .qubely-team-avatar { width: {{avatarSize}}; height: {{avatarSize}}; font-size: {{avatarSize}}; }' }]
		},
		avatarWidth: {
			type: 'object',
			default: { md: 100, unit: '%' },
			style: [{ condition: [{ key: 'avatarSize', relation: '==', value: 'custom' }],
				selector: '{{QUBELY}} .qubely-team-avatar {width: {{avatarWidth}}; font-size: {{avatarWidth}};}' }]
		},
		avatarHeight: {
			type: 'object',
			default: { md: 100, unit: '%' },
			style: [{
				condition: [{ key: 'avatarSize', relation: '==', value: 'custom' }],
				selector: '{{QUBELY}} .qubely-team-avatar {height: {{avatarHeight}};}'
			}]
		},
		avatarSpacing: {
			type: 'object',
			default: {
				md: 20,
				unit: 'px'
			},
			style: [{
				condition: [{ key: 'avatarLayout', relation: '==', value: 'left' }],
				selector: '{{QUBELY}} .qubely-team-avatar {margin-right: {{avatarSpacing}}; }'
			}, {
				condition: [{ key: 'avatarLayout', relation: '==', value: 'right' }],
				selector: '{{QUBELY}} .qubely-team-avatar {margin: 0px 0px 0px {{avatarSpacing}};}'
			}, {
				condition: [{ key: 'avatarLayout', relation: '==', value: 'top' }],
				selector: '{{QUBELY}} .qubely-team-avatar {margin: 0px 0px {{avatarSpacing}};}'
			}, {
				condition: [{ key: 'avatarLayout', relation: '==', value: 'bottom' }],
				selector: '{{QUBELY}} .qubely-team-avatar{margin: {{avatarSpacing}} 0px 0px;}'
			}]
		},
		avatarBorderRadius: {
			type: 'object',
			default: {
				openBorderRadius: 1,
				radiusType: 'global',
				global: { md: '' },
				unit: '%'
			},
			style: [{ selector: '{{QUBELY}} .qubely-team-avatar' }]
		},
		avatarBorder: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-team-avatar' }] },

		/* ------------------------------------
  * 			Design 
  * ------------------------------------- */
		textColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-team-author-info { color:{{textColor}}; }' }] },
		// Background Color
		bgColor: {
			type: 'string',
			default: '',
			style: [{
				selector: '{{QUBELY}} .qubely-team-author-info {background-color: {{bgColor}};} {{QUBELY}} .qubely-tesitmonial-item.layout-2 {background-color: {{bgColor}};}'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '3' }],
				selector: '{{QUBELY}} .layout-3 .qubely-team-carousel-content-wrapper {background-color: {{bgColor}};} {{QUBELY}} .layout-3 .qubely-team-carousel-content-wrapper:before {border-color: {{bgColor}} transparent transparent transparent;}'
			}]
		},
		// Content padding.
		bgPadding: {
			type: 'object',
			default: {},
			style: [{
				condition: [{ key: 'layout', relation: '==', value: '1' }],
				selector: '{{QUBELY}} .layout-1'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '2' }],
				selector: '{{QUBELY}} .qubely-layout-2 .qubely-tesitmonial-item, {{QUBELY}} .qubely-team-2 .qubely-team-author-info'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '3' }],
				selector: '{{QUBELY}} .qubely-team-3 .qubely-team-author-info'
			}]
		},
		// Border radius
		bgBorderRadius: {
			type: 'object',
			default: {
				openBorderRadius: 1,
				radiusType: 'global',
				global: { md: 5 },
				unit: 'px'
			},
			style: [{ selector: '{{QUBELY}} .qubely-team-carousel-item' }]
		},
		border: {
			type: 'object',
			default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-team-carousel-item' }]
		},
		boxShadow: {
			type: 'object', default: {},
			style: [{ selector: '{{QUBELY}} .qubely-team-carousel-itemAA' }]
		},
		boxShadowHover: {
			type: 'object', default: {},
			style: [{ selector: '{{QUBELY}} .qubely-team-carousel-itemAA:hover' }]
		},
		showGlobalSettings: { type: 'boolean', default: true },

		/**
   *  Social Share */
		showSociallinks: { type: 'boolean', default: true },
		facebook: { type: 'string', default: 'https://facebook.com/themeum' },
		twitter: { type: 'string', default: 'https://twitter.com/themeum' },
		instagram: { type: 'string', default: '' },
		linkedin: { type: 'string', default: '' },
		youtube: { type: 'string', default: 'https://youtube.com/user/themeumwp' },
		github: { type: 'string', default: '' },
		flickr: { type: 'string', default: '' },
		pinterest: { type: 'string', default: '' },
		dribbble: { type: 'string', default: '' },
		behance: { type: 'string', default: '' },
		iconStyle: { type: 'string', default: 'normal' },
		iconUseDefaultStyle: { type: 'boolean', default: true },
		iconSize: {
			type: 'string', default: '14px',
			style: [{
				condition: [{ key: 'iconSize', relation: '!=', value: 'custom' }],
				selector: '{{QUBELY}} .qubely-team-social-links>a {font-size: {{iconSize}};}'
			}]
		},
		iconSizeCustom: {
			type: 'object', default: { md: 18, unit: 'px' },
			style: [{
				condition: [{ key: 'iconSize', relation: '==', value: 'custom' }],
				selector: '{{QUBELY}} .qubely-team-social-links>a {font-size: {{iconSizeCustom}};}'
			}]
		},
		iconGutter: {
			type: 'object', default: { md: 10, unit: 'px' },
			style: [{
				selector: '{{QUBELY}} .qubely-team-social-links > a {margin: 0 calc({{iconGutter}}/2);}'
			}]
		},
		iconSpacing: {
			type: 'object', default: {},
			style: [{
				selector: '{{QUBELY}} .qubely-team-social-links {margin-top: {{iconSpacing}};}'
			}]
		},

		iconBorderRadius: {
			type: 'object',
			default: {
				openBorderRadius: 1,
				radiusType: 'global',
				global: { md: 4 },
				unit: 'px'
			},
			style: [{
				condition: [{ key: 'iconStyle', relation: '==', value: 'fill' }],
				selector: '{{QUBELY}} .qubely-team-social-links>a'
			}]
		},

		iconColor: {
			type: 'string', default: '',
			style: [{
				condition: [{ key: 'iconUseDefaultStyle', relation: '==', value: false }],
				selector: '{{QUBELY}} .qubely-team-social-links>a {color: {{iconColor}};}'
			}]
		},
		iconColorHover: {
			type: 'string', default: '',
			style: [{
				condition: [{ key: 'iconUseDefaultStyle', relation: '==', value: false }],
				selector: '{{QUBELY}} .qubely-team-social-links>a:hover {color: {{iconColorHover}};}'
			}]
		},
		iconBackground: {
			type: 'string', default: '',
			style: [{
				condition: [{ key: 'iconUseDefaultStyle', relation: '==', value: false }, { key: 'iconStyle', relation: '==', value: 'fill' }],
				selector: '{{QUBELY}} .qubely-team-social-links>a {background-color: {{iconBackground}};}'
			}]
		},
		iconBackgroundHover: {
			type: 'string', default: '',
			style: [{
				condition: [{ key: 'iconUseDefaultStyle', relation: '==', value: false }, { key: 'iconStyle', relation: '==', value: 'fill' }],
				selector: '{{QUBELY}} .qubely-team-social-links>a:hover {background-color: {{iconBackgroundHover}};}'
			}]
		},
		iconBorder: {
			type: 'object', default: {},
			style: [{
				condition: [{ key: 'iconUseDefaultStyle', relation: '==', value: false }, { key: 'iconStyle', relation: '==', value: 'fill' }],
				selector: '{{QUBELY}} .qubely-team-social-links>a'
			}]
		},
		iconBorderColorHover: {
			type: 'string', default: '',
			style: [{
				condition: [{ key: 'iconUseDefaultStyle', relation: '==', value: false }, { key: 'iconStyle', relation: '==', value: 'fill' }],
				selector: '{{QUBELY}} .qubely-team-social-links>a:hover {border-color: {{iconBorderColorHover}};}'
			}]
		}

	},
	edit: _Edit2.default,
	save: _Save2.default
});

/***/ }),

/***/ "./src/blocks/teamcarousel/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/teamcarousel/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/teamcarousel/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/blocks/testimonialcarousel/Edit.js":
/*!************************************************!*\
  !*** ./src/blocks/testimonialcarousel/Edit.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _icons = __webpack_require__(/*! ../../helpers/icons */ "./src/helpers/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var PanelBody = wp.components.PanelBody;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload;
var _wp$qubelyComponents = wp.qubelyComponents,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    Range = _wp$qubelyComponents.Range,
    Color = _wp$qubelyComponents.Color,
    Typography = _wp$qubelyComponents.Typography,
    Toggle = _wp$qubelyComponents.Toggle,
    Separator = _wp$qubelyComponents.Separator,
    ColorAdvanced = _wp$qubelyComponents.ColorAdvanced,
    Border = _wp$qubelyComponents.Border,
    BorderRadius = _wp$qubelyComponents.BorderRadius,
    BoxShadow = _wp$qubelyComponents.BoxShadow,
    Styles = _wp$qubelyComponents.Styles,
    Alignment = _wp$qubelyComponents.Alignment,
    Padding = _wp$qubelyComponents.Padding,
    Tabs = _wp$qubelyComponents.Tabs,
    Tab = _wp$qubelyComponents.Tab,
    Carousel = _wp$qubelyComponents.Carousel,
    ButtonGroup = _wp$qubelyComponents.ButtonGroup,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator;

var Edit = function (_Component) {
	_inherits(Edit, _Component);

	function Edit(props) {
		_classCallCheck(this, Edit);

		var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

		_this.changePluginAttribute = function (key, value) {
			_this.setState({
				key: key,
				value: value
			});
			_this.props.setAttributes(_defineProperty({}, key, value));
		};

		_this.updateAtrributes = function (name, value, index) {
			var _this$props = _this.props,
			    setAttributes = _this$props.setAttributes,
			    carouselItems = _this$props.attributes.carouselItems;

			var updatedAttributes = carouselItems.map(function (data, itemIndex) {
				if (index === itemIndex) {
					return _extends({}, data, _defineProperty({}, name, value));
				} else {
					return data;
				}
			});
			setAttributes({ carouselItems: updatedAttributes });
		};

		_this.renderName = function (name, index) {
			return React.createElement(RichText, {
				key: 'editable',
				keepPlaceholderOnFocus: true,
				placeholder: __('Add Name...'),
				formattingControls: ['bold', 'italic', 'link', 'strikethrough'],
				onChange: function onChange(value) {
					return _this.updateAtrributes('author', value, index);
				},
				value: name
			});
		};

		_this.renderDesignation = function (designation, index) {
			return React.createElement(RichText, {
				key: 'editable',
				placeholder: __('Add designation...'),
				formattingControls: ['bold', 'italic', 'link', 'strikethrough'],
				keepPlaceholderOnFocus: true,
				onChange: function onChange(value) {
					return _this.updateAtrributes('designation', value, index);
				},
				value: designation
			});
		};

		_this.renderAvatar = function (avatar, index) {
			var avatarAlt = _this.props.attributes.avatarAlt;

			return React.createElement(MediaUpload, {
				onSelect: function onSelect(val) {
					return _this.updateAtrributes('avatar', val, index);
				},
				allowedTypes: ['image'],
				multiple: false,
				value: avatar,
				render: function render(_ref) {
					var open = _ref.open;
					return React.createElement(
						'div',
						{ className: 'qubely-single-img qubely-backend' },
						avatar && avatar.url ? React.createElement('img', { onClick: open, className: 'qubely-testimonial-avatar', src: avatar.url, alt: avatarAlt }) : React.createElement(
							'div',
							{ onClick: open, className: 'qubely-image-placeholder qubely-testimonial-avatar' },
							React.createElement('i', { className: 'far fa-user' })
						)
					);
				}
			});
		};

		_this.renderMessage = function (message, index) {
			return React.createElement(RichText, {
				key: 'editable',
				placeholder: __('Add Message...'),
				formattingControls: ['bold', 'italic', 'link', 'strikethrough'],
				keepPlaceholderOnFocus: true,
				onChange: function onChange(value) {
					return _this.updateAtrributes('message', value, index);
				},
				value: message
			});
		};

		_this.renderAuthorInfo = function (item, index) {
			var _this$props$attribute = _this.props.attributes,
			    layout = _this$props$attribute.layout,
			    showAvatar = _this$props$attribute.showAvatar,
			    avatarLayout = _this$props$attribute.avatarLayout;
			var author = item.author,
			    designation = item.designation,
			    avatar = item.avatar;

			return React.createElement(
				'div',
				{ className: 'qubely-testimonial-author' },
				layout === 3 && showAvatar && _this.renderAvatar(avatar, index),
				React.createElement(
					'div',
					{ className: showAvatar ? 'qubely-testimonial-avatar-layout-' + avatarLayout : '' },
					layout !== 3 && showAvatar && (avatarLayout == 'left' || avatarLayout == 'top') && _this.renderAvatar(avatar, index),
					React.createElement(
						'div',
						{ className: 'qubely-testimonial-author-info' },
						React.createElement(
							'div',
							{ className: 'qubely-testimonial-author-name' },
							_this.renderName(author, index)
						),
						React.createElement(
							'div',
							{ className: 'qubely-testimonial-author-designation' },
							_this.renderDesignation(designation, index)
						)
					),
					layout !== 3 && showAvatar && (avatarLayout == 'right' || avatarLayout == 'bottom') && _this.renderAvatar(avatar, index)
				)
			);
		};

		_this.renderTestimonials = function () {
			var _this$props$attribute2 = _this.props.attributes,
			    layout = _this$props$attribute2.layout,
			    items = _this$props$attribute2.items,
			    showRatings = _this$props$attribute2.showRatings,
			    carouselItems = _this$props$attribute2.carouselItems,
			    quoteIcon = _this$props$attribute2.quoteIcon,
			    ratings = _this$props$attribute2.ratings;

			return carouselItems.map(function (item, index) {
				var message = item.message;


				return React.createElement(
					'div',
					{ key: index, className: 'qubely-carousel-item ' + (index < items[_this.parseResponsiveViewPort()] ? 'active' : '') },
					React.createElement(
						'div',
						{ className: 'qubely-tesitmonial-item layout-' + layout },
						layout === 2 && _this.renderAuthorInfo(item, index),
						quoteIcon && layout === 1 && React.createElement(
							'div',
							{ className: 'qubely-testimonial-quote' },
							React.createElement('span', { className: 'qubely-quote-icon ' + quoteIcon })
						),
						React.createElement(
							'div',
							{ className: 'qubely-testimonial-carousel-content-wrapper' },
							showRatings && ratings > 0 && layout !== 1 && React.createElement('div', { className: 'qubely-testimonial-ratings', 'data-qubelyrating': ratings }),
							React.createElement(
								'div',
								{ className: 'qubely-testimonial-content' },
								_this.renderMessage(message, index)
							),
							showRatings && ratings > 0 && layout == 1 && React.createElement('div', { className: 'qubely-testimonial-ratings', 'data-qubelyrating': ratings })
						),
						layout !== 2 && _this.renderAuthorInfo(item, index),
						quoteIcon && layout == 2 && React.createElement(
							'div',
							{ className: 'qubely-testimonial-quote qubely-position-bottom' },
							React.createElement('span', { className: 'qubely-quote-icon ' + quoteIcon })
						)
					)
				);
			});
		};

		_this.setCarouselLength = function (newLength) {
			var _this$props2 = _this.props,
			    setAttributes = _this$props2.setAttributes,
			    _this$props2$attribut = _this$props2.attributes,
			    carouselItems = _this$props2$attribut.carouselItems,
			    items = _this$props2$attribut.items;

			var newCarouselItems = JSON.parse(JSON.stringify(carouselItems));
			var defaultItem = {
				author: 'James Moriarty',
				designation: 'Web WordPress Developer',
				message: '“Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '5',
				avatar: {}
			};
			if (newLength > carouselItems.length) {
				newCarouselItems.push(defaultItem);
			} else {
				newLength >= items.md && newLength >= items.sm && newLength >= items.sm && newCarouselItems.pop();
			}
			setAttributes({ carouselItems: newCarouselItems });
		};

		_this.parseResponsiveViewPort = function () {
			var items = _this.props.attributes.items;

			var responsive = [{ viewport: 1170, items: items.md }, { viewport: 980, items: items.sm }, { viewport: 580, items: items.xs }];
			if (typeof responsive === 'undefined') return;
			var activeView = null;

			for (var i = 0; i < responsive.length; i++) {
				if (window.innerWidth > responsive[i].viewport) {
					activeView = responsive[i];
					break;
				}
			}
			if (activeView === null) {
				activeView = responsive[responsive.length - 1];
			}
			return activeView.viewport <= 1199 ? activeView.viewport <= 991 ? 'xs' : 'sm' : 'md';
		};

		_this.state = {
			device: 'md',
			spacer: true,
			openPanelSetting: ''
		};
		return _this;
	}

	_createClass(Edit, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    setAttributes = _props.setAttributes,
			    clientId = _props.clientId,
			    uniqueId = _props.attributes.uniqueId;

			var _client = clientId.substr(0, 6);
			if (!uniqueId) {
				setAttributes({ uniqueId: _client });
			} else if (uniqueId && uniqueId != _client) {
				setAttributes({ uniqueId: _client });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this,
			    _React$createElement,
			    _React$createElement2;

			var _props2 = this.props,
			    setAttributes = _props2.setAttributes,
			    _props2$attributes = _props2.attributes,
			    uniqueId = _props2$attributes.uniqueId,
			    items = _props2$attributes.items,
			    autoPlay = _props2$attributes.autoPlay,
			    interval = _props2$attributes.interval,
			    speed = _props2$attributes.speed,
			    nav = _props2$attributes.nav,
			    carouselItems = _props2$attributes.carouselItems,
			    dragable = _props2$attributes.dragable,
			    layout = _props2$attributes.layout,
			    messageSpacingTop = _props2$attributes.messageSpacingTop,
			    messageSpacingBottom = _props2$attributes.messageSpacingBottom,
			    nameColor = _props2$attributes.nameColor,
			    alignment = _props2$attributes.alignment,
			    designationColor = _props2$attributes.designationColor,
			    showAvatar = _props2$attributes.showAvatar,
			    avatar = _props2$attributes.avatar,
			    avatarAlt = _props2$attributes.avatarAlt,
			    avatarBorderRadius = _props2$attributes.avatarBorderRadius,
			    avatarSize = _props2$attributes.avatarSize,
			    avatarWidth = _props2$attributes.avatarWidth,
			    avatarHeight = _props2$attributes.avatarHeight,
			    avatarBorder = _props2$attributes.avatarBorder,
			    avatarSpacing = _props2$attributes.avatarSpacing,
			    avatarLayout = _props2$attributes.avatarLayout,
			    quoteIconColor = _props2$attributes.quoteIconColor,
			    quoteIconSize = _props2$attributes.quoteIconSize,
			    quoteIconSpacing = _props2$attributes.quoteIconSpacing,
			    nameTypo = _props2$attributes.nameTypo,
			    nameSpacing = _props2$attributes.nameSpacing,
			    messageTypo = _props2$attributes.messageTypo,
			    designationTypo = _props2$attributes.designationTypo,
			    starsSize = _props2$attributes.starsSize,
			    ratingsColor = _props2$attributes.ratingsColor,
			    quoteIcon = _props2$attributes.quoteIcon,
			    ratings = _props2$attributes.ratings,
			    showRatings = _props2$attributes.showRatings,
			    ratingsSpacing = _props2$attributes.ratingsSpacing,
			    bgPadding = _props2$attributes.bgPadding,
			    textColor = _props2$attributes.textColor,
			    bgColor = _props2$attributes.bgColor,
			    bgBorderRadius = _props2$attributes.bgBorderRadius,
			    border = _props2$attributes.border,
			    boxShadow = _props2$attributes.boxShadow,
			    boxShadowHover = _props2$attributes.boxShadowHover,
			    sliderNumber = _props2$attributes.sliderNumber,
			    itemPerSlides = _props2$attributes.itemPerSlides,
			    sliderItemsSpace = _props2$attributes.sliderItemsSpace,
			    infiniteLoop = _props2$attributes.infiniteLoop,
			    isCentered = _props2$attributes.isCentered,
			    activeFade = _props2$attributes.activeFade,
			    arrowStyle = _props2$attributes.arrowStyle,
			    arrowPosition = _props2$attributes.arrowPosition,
			    cornerRadius = _props2$attributes.cornerRadius,
			    cornerHoverRadius = _props2$attributes.cornerHoverRadius,
			    arrowSize = _props2$attributes.arrowSize,
			    sizeWidth = _props2$attributes.sizeWidth,
			    arrowColor = _props2$attributes.arrowColor,
			    arrowShapeColor = _props2$attributes.arrowShapeColor,
			    arrowBorderColor = _props2$attributes.arrowBorderColor,
			    arrowHoverColor = _props2$attributes.arrowHoverColor,
			    arrowShapeHoverColor = _props2$attributes.arrowShapeHoverColor,
			    arrowBorderHoverColor = _props2$attributes.arrowBorderHoverColor,
			    dots = _props2$attributes.dots,
			    dotIndicator = _props2$attributes.dotIndicator,
			    dotwidth = _props2$attributes.dotwidth,
			    dotHeight = _props2$attributes.dotHeight,
			    dotBorderRadius = _props2$attributes.dotBorderRadius,
			    dotColor = _props2$attributes.dotColor,
			    dotActiveColor = _props2$attributes.dotActiveColor,
			    horizontalScroll = _props2$attributes.horizontalScroll;
			var device = this.state.device;


			var carouselSettings = {
				autoplay: autoPlay,
				items: items,
				margin: 10,
				center: isCentered,
				dots: dots,
				dot_indicator: dotIndicator,
				nav: nav,
				arrowStyle: arrowStyle,
				arrowPosition: arrowPosition,
				speed: speed,
				interval: interval,
				responsive: [{
					viewport: 1170,
					items: items.md
				}, {
					viewport: 980,
					items: items.sm
				}, {
					viewport: 580,
					items: items.xs
				}]
			};

			if (uniqueId) {
				CssGenerator(this.props.attributes, 'testimonialcarousel', uniqueId);
			}

			return React.createElement(
				Fragment,
				null,
				React.createElement(
					InspectorControls,
					{ key: 'inspector' },
					React.createElement(
						PanelBody,
						{ title: '', opened: true },
						React.createElement(Styles, { value: layout, onChange: function onChange(val) {
								return setAttributes({ layout: val });
							},
							options: [{ value: 1, svg: _icons2.default.testimonial_1, label: __('Layout 1') }, { value: 2, svg: _icons2.default.testimonial_2, label: __('Layout 2') }, { value: 3, svg: _icons2.default.testimonial_3, label: __('Layout 3') }]
						}),
						React.createElement(Alignment, (_React$createElement = {
							label: __('Alignment'),
							value: alignment,
							alignmentType: 'content',
							onChange: function onChange(val) {
								return setAttributes({ alignment: val });
							}
						}, _defineProperty(_React$createElement, 'alignmentType', 'content'), _defineProperty(_React$createElement, 'disableJustify', true), _defineProperty(_React$createElement, 'responsive', true), _defineProperty(_React$createElement, 'device', device), _defineProperty(_React$createElement, 'onDeviceChange', function onDeviceChange(value) {
							return _this2.setState({ device: value });
						}), _React$createElement)),
						React.createElement(Range, {
							label: __('Number of Carousels'),
							min: 1,
							max: 20,
							value: carouselItems.length,
							onChange: function onChange(val) {
								return _this2.setCarouselLength(val);
							}
						}),
						React.createElement(Range, (_React$createElement2 = {
							label: __('Number of Columns'),
							min: 1,
							max: 20,
							device: device,
							responsive: true,
							value: items,
							onChange: function onChange(val) {
								return setAttributes({ items: val });
							}
						}, _defineProperty(_React$createElement2, 'device', this.state.device), _defineProperty(_React$createElement2, 'onDeviceChange', function onDeviceChange(value) {
							return _this2.setState({ device: value });
						}), _React$createElement2)),
						React.createElement(Range, {
							label: __('Padding'),
							min: 1,
							max: 80,
							responsive: true,
							unit: ['px', 'em', '%'],
							value: sliderItemsSpace,
							onChange: function onChange(value) {
								return setAttributes({ sliderItemsSpace: value });
							},
							device: device,
							onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							}
						})
					),
					React.createElement(
						PanelBody,
						{ title: __('Carousel Settings'), initialOpen: false },
						React.createElement(Toggle, { label: __('Autoplay'), value: autoPlay, onChange: function onChange(value) {
								return setAttributes({ autoPlay: value });
							} }),
						autoPlay && React.createElement(
							Fragment,
							null,
							React.createElement(Range, { label: __('Speed (ms)'), value: speed, onChange: function onChange(value) {
									return setAttributes({ speed: parseInt(value) });
								}, min: 500, max: 5000 }),
							React.createElement(Range, { label: __('Interval (ms)'), value: interval, onChange: function onChange(value) {
									return setAttributes({ interval: parseInt(value) });
								}, min: 500, max: 5000 })
						),
						React.createElement(Toggle, { label: __('Draggable'), value: dragable, onChange: function onChange(value) {
								return setAttributes({ dragable: value });
							} }),
						React.createElement(Toggle, { label: __('Centered Slides'), value: isCentered, onChange: function onChange(value) {
								return setAttributes({ isCentered: value });
							} }),
						isCentered && React.createElement(Toggle, { label: __('Fade Deactivated Items'), value: activeFade, onChange: function onChange(value) {
								return setAttributes({ activeFade: value });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: __('Slider Settings'), initialOpen: false },
						React.createElement(Toggle, { label: __('Show Arrow Navigation'), value: nav, onChange: function onChange(value) {
								return setAttributes({ nav: value });
							} }),
						nav && React.createElement(
							Fragment,
							null,
							React.createElement(ButtonGroup, {
								label: __('Arrow Style'),
								options: [[React.createElement('span', { className: 'dashicons dashicons-arrow-right-alt' }), 'arrowright'], [React.createElement('span', { className: 'dashicons dashicons-arrow-right-alt2' }), 'arrowright2']],
								value: arrowStyle,
								onChange: function onChange(value) {
									return setAttributes({ arrowStyle: value });
								}
							}),
							React.createElement(Range, {
								label: __('Horizontal Position'),
								value: horizontalScroll, onChange: function onChange(value) {
									return setAttributes({ horizontalScroll: value });
								},
								min: -100, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Vertical Position'),
								value: arrowPosition, onChange: function onChange(value) {
									return setAttributes({ arrowPosition: value });
								},
								min: 1, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Shape Size'),
								value: sizeWidth, onChange: function onChange(value) {
									return setAttributes({ sizeWidth: value });
								},
								min: 1, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Arrow Size'),
								value: arrowSize, onChange: function onChange(value) {
									return setAttributes({ arrowSize: value });
								},
								min: 0, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(
								Tabs,
								null,
								React.createElement(
									Tab,
									{ tabTitle: __('Normal') },
									React.createElement(Color, { label: __('Arrow Color'), value: arrowColor, onChange: function onChange(value) {
											return setAttributes({ arrowColor: value });
										} }),
									React.createElement(ColorAdvanced, { label: __('Shape Color'), value: arrowShapeColor, onChange: function onChange(val) {
											return setAttributes({ arrowShapeColor: val });
										} }),
									React.createElement(Border, { label: __('Border'), value: arrowBorderColor, onChange: function onChange(val) {
											return setAttributes({ arrowBorderColor: val });
										} }),
									React.createElement(Range, {
										label: __('Corner Radius'),
										value: cornerRadius, onChange: function onChange(value) {
											return setAttributes({ cornerRadius: value });
										},
										min: 1, max: 100,
										responsive: true, unit: ['px', 'em', '%'],
										device: device,
										onDeviceChange: function onDeviceChange(value) {
											return _this2.setState({ device: value });
										}
									})
								),
								React.createElement(
									Tab,
									{ tabTitle: __('Hover') },
									React.createElement(Color, { label: __('Arrow Hover Color'), value: arrowHoverColor, onChange: function onChange(value) {
											return setAttributes({ arrowHoverColor: value });
										} }),
									React.createElement(ColorAdvanced, { label: __('Shape Hover Color'), value: arrowShapeHoverColor, onChange: function onChange(val) {
											return setAttributes({ arrowShapeHoverColor: val });
										} }),
									React.createElement(Border, { label: __('Border Hover Color'), value: arrowBorderHoverColor, onChange: function onChange(val) {
											return setAttributes({ arrowBorderHoverColor: val });
										} }),
									React.createElement(Range, {
										label: __('Corner Hover Radius'),
										value: cornerHoverRadius, onChange: function onChange(value) {
											return setAttributes({ cornerHoverRadius: value });
										},
										min: 1, max: 100,
										responsive: true, unit: ['px', 'em', '%'],
										device: device,
										onDeviceChange: function onDeviceChange(value) {
											return _this2.setState({ device: value });
										}
									})
								)
							)
						),
						React.createElement(Toggle, { label: __('Show Dot Navigation'), value: dots, onChange: function onChange(value) {
								return setAttributes({ dots: value });
							} }),
						dots && React.createElement(
							Fragment,
							null,
							React.createElement(Range, {
								label: __('Dot Width'),
								value: dotwidth, onChange: function onChange(value) {
									return setAttributes({ dotwidth: value });
								},
								min: 1, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Dot Height'),
								value: dotHeight, onChange: function onChange(value) {
									return setAttributes({ dotHeight: value });
								},
								min: 1, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Dot Border Radius'),
								value: dotBorderRadius, onChange: function onChange(value) {
									return setAttributes({ dotBorderRadius: value });
								},
								min: 1, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(
								Tabs,
								null,
								React.createElement(
									Tab,
									{ tabTitle: __('Normal') },
									React.createElement(ColorAdvanced, { label: __('Dot Color'), value: dotColor, onChange: function onChange(val) {
											return setAttributes({ dotColor: val });
										} })
								),
								React.createElement(
									Tab,
									{ tabTitle: __('Active') },
									React.createElement(ColorAdvanced, { label: __('Dot Active Color'), value: dotActiveColor, onChange: function onChange(val) {
											return setAttributes({ dotActiveColor: val });
										} })
								)
							)
						)
					),
					React.createElement(
						PanelBody,
						{ title: __('Message'), initialOpen: false },
						React.createElement(Range, {
							label: __('Top Spacing'),
							value: messageSpacingTop, onChange: function onChange(value) {
								return setAttributes({ messageSpacingTop: value });
							},
							unit: ['px', 'em', '%'], max: 300,
							min: 0,
							responsive: true,
							device: device,
							onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} }),
						React.createElement(Range, {
							label: __('Bottom Spacing'),
							value: messageSpacingBottom, onChange: function onChange(value) {
								return setAttributes({ messageSpacingBottom: value });
							},
							unit: ['px', 'em', '%'], max: 300,
							min: 0,
							responsive: true,
							device: device,
							onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} }),
						React.createElement(Typography, {
							label: __('Typography'),
							value: messageTypo,
							onChange: function onChange(value) {
								return setAttributes({ messageTypo: value });
							},
							device: device, onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: __('Name'), initialOpen: false },
						React.createElement(Range, {
							label: __('Spacing'),
							value: nameSpacing, onChange: function onChange(value) {
								return setAttributes({ nameSpacing: value });
							},
							unit: ['px', 'em', '%'], max: 300,
							min: 0,
							responsive: true,
							device: device,
							onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} }),
						React.createElement(Color, {
							label: __('Color'),
							value: nameColor, onChange: function onChange(value) {
								return setAttributes({ nameColor: value });
							}
						}),
						React.createElement(Typography, {
							label: __('Typography'),
							value: nameTypo,
							onChange: function onChange(value) {
								return setAttributes({ nameTypo: value });
							},
							device: device, onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: __('Designation'), initialOpen: false },
						React.createElement(Color, {
							label: __('Color'),
							value: designationColor, onChange: function onChange(value) {
								return setAttributes({ designationColor: value });
							}
						}),
						React.createElement(Typography, {
							label: __('Typography'),
							value: designationTypo,
							onChange: function onChange(value) {
								return setAttributes({ designationTypo: value });
							},
							device: device, onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: __('Avatar'), initialOpen: false },
						React.createElement(Toggle, { label: __('Show Avatar'), value: showAvatar, onChange: function onChange(val) {
								return setAttributes({ showAvatar: val });
							} }),
						showAvatar && React.createElement(
							Fragment,
							null,
							layout != 3 && React.createElement(
								Fragment,
								null,
								React.createElement(Styles, { label: __('Avatar Layout'), value: avatarLayout, onChange: function onChange(val) {
										return setAttributes({ avatarLayout: val });
									},
									options: [{ value: 'left', svg: _icons2.default.avatar_left, label: __('Left') }, { value: 'right', svg: _icons2.default.avatar_right, label: __('Right') }, { value: 'top', svg: _icons2.default.avatar_top, label: __('Top') }, { value: 'bottom', svg: _icons2.default.avatar_bottom, label: __('Bottom') }]
								}),
								React.createElement(Separator, null)
							),
							React.createElement(RadioAdvanced, {
								label: __('Avatar Size'),
								options: [{ label: 'S', value: '48px', title: 'Small' }, { label: 'M', value: '64px', title: 'Medium' }, { label: 'L', value: '96px', title: 'Large' }, { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }],
								value: avatarSize,
								onChange: function onChange(value) {
									return setAttributes({ avatarSize: value });
								}
							}),
							avatarSize == 'custom' && React.createElement(
								Fragment,
								null,
								React.createElement(Range, {
									label: React.createElement('span', { className: 'dashicons dashicons-leftright', title: 'Width' }),
									value: avatarWidth,
									onChange: function onChange(value) {
										return setAttributes({ avatarWidth: value });
									},
									unit: ['px', 'em', '%'],
									max: 300,
									min: 0,
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									}
								}),
								React.createElement(Range, {
									label: React.createElement('span', { className: 'dashicons dashicons-sort', title: 'Height' }),
									value: avatarHeight,
									onChange: function onChange(value) {
										return setAttributes({ avatarHeight: value });
									},
									unit: ['px', 'em', '%'],
									max: 300,
									min: 0,
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									}
								})
							),
							React.createElement(
								Fragment,
								null,
								React.createElement(BorderRadius, {
									label: __('Radius'),
									value: avatarBorderRadius, onChange: function onChange(value) {
										return setAttributes({ avatarBorderRadius: value });
									},
									min: 0,
									max: 100,
									unit: ['px', 'em', '%'],
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									} }),
								React.createElement(Border, {
									label: __('Border'),
									value: avatarBorder,
									onChange: function onChange(value) {
										return setAttributes({ avatarBorder: value });
									},
									unit: ['px', 'em', '%'],
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									}
								}),
								React.createElement(Range, {
									label: __('Spacing'),
									value: avatarSpacing,
									onChange: function onChange(value) {
										return setAttributes({ avatarSpacing: value });
									},
									min: 0,
									max: 200,
									unit: ['px', 'em', '%'],
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									} })
							)
						)
					),
					layout != 3 && React.createElement(
						PanelBody,
						{ title: __('Quote Icon'), initialOpen: false },
						React.createElement(RadioAdvanced, {
							label: __('Icon'),
							options: [{ icon: 'fas fa-ban', value: '' }, { icon: 'fas fa-quote-left', value: 'fas fa-quote-left' }],
							value: quoteIcon,
							onChange: function onChange(val) {
								return setAttributes({ quoteIcon: val });
							} }),
						quoteIcon && React.createElement(
							Fragment,
							null,
							React.createElement(Color, {
								label: __('Color'),
								value: quoteIconColor, onChange: function onChange(value) {
									return setAttributes({ quoteIconColor: value });
								} }),
							React.createElement(Range, {
								label: __('Size'),
								value: quoteIconSize, onChange: function onChange(value) {
									return setAttributes({ quoteIconSize: value });
								},
								min: 10,
								max: 150,
								unit: ['px', 'em', '%'],
								responsive: true,
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Spacing'),
								value: quoteIconSpacing, onChange: function onChange(value) {
									return setAttributes({ quoteIconSpacing: value });
								},
								min: 0,
								max: 100,
								unit: ['px', 'em', '%'],
								responsive: true,
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								} })
						)
					),
					React.createElement(
						PanelBody,
						{ title: __('Ratings'), initialOpen: false },
						React.createElement(Toggle, { label: __('Show Ratings'), value: showRatings, onChange: function onChange(val) {
								return setAttributes({ showRatings: val });
							} }),
						showRatings && React.createElement(
							Fragment,
							null,
							React.createElement(Range, { label: __('Ratings'), value: ratings, onChange: function onChange(value) {
									return setAttributes({ ratings: value });
								}, min: 0, max: 5, step: .5 }),
							ratings != 0 && React.createElement(
								Fragment,
								null,
								React.createElement(Color, {
									label: __('Color'),
									value: ratingsColor,
									onChange: function onChange(value) {
										return setAttributes({ ratingsColor: value });
									} }),
								React.createElement(Range, {
									label: __('Stars Size'),
									value: starsSize, onChange: function onChange(value) {
										return setAttributes({ starsSize: value });
									},
									unit: ['px', 'em', '%'],
									min: 10,
									max: 48,
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									} }),
								React.createElement(Range, {
									label: __('Spacing'),
									value: ratingsSpacing, onChange: function onChange(value) {
										return setAttributes({ ratingsSpacing: value });
									},
									unit: ['px', 'em', '%'],
									min: 0,
									max: 200,
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									} })
							)
						)
					),
					React.createElement(
						PanelBody,
						{ title: __('Design'), initialOpen: false },
						React.createElement(Color, {
							label: __('Text Color'),
							value: textColor,
							onChange: function onChange(val) {
								return setAttributes({ textColor: val });
							} }),
						React.createElement(Color, {
							label: __('Background'),
							value: bgColor,
							onChange: function onChange(val) {
								return setAttributes({ bgColor: val });
							} }),
						React.createElement(Separator, null),
						React.createElement(Border, {
							label: __('Border'),
							value: border,
							onChange: function onChange(val) {
								return setAttributes({ border: val });
							} }),
						React.createElement(Padding, {
							label: __('Padding'),
							value: bgPadding, onChange: function onChange(value) {
								return setAttributes({ bgPadding: value });
							},
							unit: ['px', 'em', '%'],
							min: 0,
							max: 100,
							responsive: true,
							device: device,
							onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} }),
						React.createElement(BorderRadius, {
							label: __('Border Radius'),
							value: bgBorderRadius,
							onChange: function onChange(val) {
								return setAttributes({ bgBorderRadius: val });
							},
							min: 0,
							max: 100,
							unit: ['px', 'em', '%'],
							responsive: true,
							device: device,
							onDeviceChange: function onDeviceChange(value) {
								return _this2.setState({ device: value });
							} }),
						React.createElement(
							Tabs,
							null,
							React.createElement(
								Tab,
								{ tabTitle: __('Normal') },
								React.createElement(BoxShadow, {
									label: __('Box Shadow'),
									value: boxShadow, onChange: function onChange(val) {
										return setAttributes({ boxShadow: val });
									}
								})
							),
							React.createElement(
								Tab,
								{ tabTitle: __('Hover') },
								React.createElement(BoxShadow, {
									label: __('Box Shadow'),
									value: boxShadowHover, onChange: function onChange(val) {
										return setAttributes({ boxShadowHover: val });
									}
								})
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'qubely-block-' + uniqueId },
					React.createElement(
						'div',
						{ className: 'qubely-block-testimonial-carousel qubely-layout-' + layout },
						React.createElement(
							Carousel,
							{ options: carouselSettings },
							this.renderTestimonials()
						)
					)
				)
			);
		}
	}]);

	return Edit;
}(Component);

exports.default = Edit;

/***/ }),

/***/ "./src/blocks/testimonialcarousel/Save.js":
/*!************************************************!*\
  !*** ./src/blocks/testimonialcarousel/Save.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var RichText = wp.editor.RichText;
var animationAttr = wp.qubelyComponents.HelperFunction.animationAttr;

var Save = function (_Component) {
  _inherits(Save, _Component);

  function Save() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Save);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Save.__proto__ || Object.getPrototypeOf(Save)).call.apply(_ref, [this].concat(args))), _this), _this.renderAvatar = function (avatar, avatarAlt) {
      return React.createElement(
        "div",
        { className: "qubely-single-img" },
        avatar.url != undefined ? React.createElement("img", { className: "qubely-testimonial-avatar", src: avatar.url, alt: avatarAlt }) : React.createElement(
          "div",
          { className: "qubely-image-placeholder qubely-testimonial-avatar" },
          React.createElement("i", { className: "far fa-user" })
        )
      );
    }, _this.renderAuthorInfo = function (item) {
      var _this$props$attribute = _this.props.attributes,
          layout = _this$props$attribute.layout,
          showAvatar = _this$props$attribute.showAvatar,
          avatarAlt = _this$props$attribute.avatarAlt,
          avatarLayout = _this$props$attribute.avatarLayout;
      var author = item.author,
          designation = item.designation,
          avatar = item.avatar;


      return React.createElement(
        "div",
        { className: "qubely-testimonial-author" },
        layout === 3 && showAvatar && _this.renderAvatar(avatar, avatarAlt),
        React.createElement(
          "div",
          { className: showAvatar ? "qubely-testimonial-avatar-layout-" + avatarLayout : "" },
          layout !== 3 && showAvatar && (avatarLayout == 'left' || avatarLayout == 'top') && _this.renderAvatar(avatar, avatarAlt),
          React.createElement(
            "div",
            { className: "qubely-testimonial-author-info" },
            React.createElement(
              "div",
              { className: "qubely-testimonial-author-name" },
              React.createElement(RichText.Content, { value: author })
            ),
            React.createElement(
              "div",
              { className: "qubely-testimonial-author-designation" },
              React.createElement(RichText.Content, { value: designation })
            )
          ),
          layout !== 3 && showAvatar && (avatarLayout == 'right' || avatarLayout == 'bottom') && _this.renderAvatar(avatar, avatarAlt)
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Save, [{
    key: "renderTestimonial",
    value: function renderTestimonial() {
      var _this2 = this;

      var _props$attributes = this.props.attributes,
          carouselItems = _props$attributes.carouselItems,
          showRatings = _props$attributes.showRatings,
          layout = _props$attributes.layout,
          ratings = _props$attributes.ratings,
          quoteIcon = _props$attributes.quoteIcon;


      return carouselItems.map(function (item, index) {
        var message = item.message;

        return React.createElement(
          "div",
          { key: index, className: "qubely-carousel-extended-item" + (index === 0 ? ' active' : '') },
          React.createElement(
            "div",
            { className: "qubely-tesitmonial-item layout-" + layout },
            layout == 2 && _this2.renderAuthorInfo(item),
            quoteIcon && layout == 1 && React.createElement(
              "div",
              { className: "qubely-testimonial-quote" },
              React.createElement("span", { className: "qubely-quote-icon " + quoteIcon })
            ),
            React.createElement(
              "div",
              { className: "qubely-testimonial-carousel-content-wrapper" },
              showRatings && ratings > 0 && layout !== 1 && React.createElement("div", { className: "qubely-testimonial-ratings", "data-qubelyrating": ratings }),
              React.createElement(
                "div",
                { className: "qubely-testimonial-content" },
                " ",
                React.createElement(RichText.Content, { value: message })
              ),
              showRatings && ratings > 0 && layout == 1 && React.createElement("div", { className: "qubely-testimonial-ratings", "data-qubelyrating": ratings })
            ),
            layout !== 2 && _this2.renderAuthorInfo(item),
            quoteIcon && layout == 2 && React.createElement(
              "div",
              { className: "qubely-testimonial-quote qubely-position-bottom" },
              React.createElement("span", { className: "qubely-quote-icon " + quoteIcon })
            )
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props$attributes2 = this.props.attributes,
          uniqueId = _props$attributes2.uniqueId,
          layout = _props$attributes2.layout,
          items = _props$attributes2.items,
          autoPlay = _props$attributes2.autoPlay,
          arrowStyle = _props$attributes2.arrowStyle,
          infiniteLoop = _props$attributes2.infiniteLoop,
          activeFade = _props$attributes2.activeFade,
          isCentered = _props$attributes2.isCentered,
          dragable = _props$attributes2.dragable,
          nav = _props$attributes2.nav,
          dots = _props$attributes2.dots,
          dotIndicator = _props$attributes2.dotIndicator,
          interval = _props$attributes2.interval,
          speed = _props$attributes2.speed,
          animation = _props$attributes2.animation;

      var options = JSON.stringify({
        autoplay: autoPlay,
        items: items,
        margin: 10,
        center: isCentered,
        dots: dots,
        dot_indicator: dotIndicator,
        nav: nav,
        speed: speed,
        interval: interval,
        dragable: dragable,
        infiniteLoop: infiniteLoop,
        activeFade: activeFade,
        arrowStyle: arrowStyle,
        responsive: [{
          viewport: 1170,
          items: items.md
        }, {
          viewport: 980,
          items: items.sm
        }, {
          viewport: 580,
          items: items.xs
        }]
      });
      return React.createElement(
        "div",
        _extends({ className: "qubely-block-" + uniqueId }, animationAttr(animation)),
        React.createElement(
          "div",
          { className: "qubely-block-testimonial-carousel qubely-layout-" + layout },
          React.createElement(
            "div",
            { className: "qubely-carousel qubely-carousel-wrapper" + (isCentered && activeFade ? ' is-faded' : ''), "data-options": options, id: "qubelyCarousel1" },
            this.renderTestimonial()
          )
        )
      );
    }
  }]);

  return Save;
}(Component);

exports.default = Save;

/***/ }),

/***/ "./src/blocks/testimonialcarousel/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/testimonialcarousel/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./src/blocks/testimonialcarousel/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/testimonialcarousel/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/testimonialcarousel/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('qubely/testimonialcarousel', {
	title: __('Testimonial Carousel'),
	description: __('Design and showcase customer reviews, remarks as testimonials with Qubely Testimonial Carousel block'),
	icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/block-testimonial-carousel.svg', alt: __('Team Block') }),
	category: 'qubely',
	keywords: [__('Testimonial'), __('Carousel')],
	attributes: {
		uniqueId: { type: 'string', default: '' },
		items: { type: 'object', default: { md: '2', sm: '2', xs: '1' } },
		columns: { type: 'number', default: 2 },
		autoPlay: { type: 'boolean', default: false },
		dots: { type: 'boolean', default: true },
		dragable: { type: 'boolean', default: true },
		dotIndicator: { type: 'boolean', default: true },
		nav: { type: 'boolean', default: true },
		interval: { type: 'number', default: 3000 },
		speed: { type: 'number', default: 800 },
		carouselItems: {
			type: 'array',
			default: [{
				author: 'James Moriarty',
				designation: 'Web WordPress Developer',
				message: '“Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '5',
				avatar: {}
			}, {
				author: 'Julia Toufis',
				designation: 'WordPress Developer',
				message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '4.5',
				avatar: {}
			}, {
				author: 'Mila Kunis',
				designation: 'WordPress Developer',
				message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '4.5',
				avatar: {}
			}, {
				author: 'Arthur Conan Doyle',
				designation: 'Writer',
				message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '5',
				avatar: {}
			}, {
				author: 'John Deo',
				designation: 'WordPress Developer',
				message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '5',
				avatar: {}
			}, {
				author: 'Alex Fera',
				designation: 'WordPress Developer',
				message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '5',
				avatar: {}
			}]
		},

		/*---------------------------------------------------
  * 	Testimonial Layouts:  common/style attributes
  * --------------------------------------------------- */
		layout: { type: 'number', default: 3 },
		alignment: { type: 'object', default: { md: 'center' }, style: [{ selector: '{{QUBELY}} .qubely-tesitmonial-item {text-align: {{alignment}};}' }] },
		spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },

		// Number of slider.
		sliderNumber: { type: 'number', default: 5 },
		// Item per Slider  
		itemPerSlides: { type: 'string', default: '2' },
		// Space Between Two item.
		sliderItemsSpace: {
			type: 'objext',
			default: {},
			style: [{
				selector: '{{QUBELY}} .qubely-carousel .qubely-carousel-extended-list .qubely-carousel-item { padding: 0 {{sliderItemsSpace}}; }'
			}]
		},
		// Infinite Loop
		infiniteLoop: { type: 'boolean', default: true },
		isCentered: { type: 'boolean', default: false },
		activeFade: { type: 'boolean', default: false },

		/*------------------------------------
  * 			Slider Settings 			
  -------------------------------------- */
		arrowStyle: { type: 'string', default: 'arrowright' },
		horizontalScroll: {
			type: 'object',
			default: { md: 0, unit: '%' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control { right: {{horizontalScroll}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control { left: {{horizontalScroll}} }  ' }]
		},
		// arrowPosition: {type: 'string', default: 'center' },
		arrowPosition: {
			type: 'object',
			default: { md: 49, unit: '%' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control { bottom: {{arrowPosition}}; } ' }]
		},
		cornerRadius: {
			type: 'object',
			default: { md: 10, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control { border-radius: {{cornerRadius}}; } ' }]
		},
		cornerHoverRadius: {
			type: 'object',
			default: { md: 50, unit: '%' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control:hover { border-radius: {{cornerHoverRadius}}; } ' }]
		},
		sizeWidth: {
			type: 'string',
			default: { md: 12, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control { padding: {{sizeWidth}}; } ' }]
		},
		arrowSize: {
			type: 'object',
			default: { md: 20, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control .dashicons { font-size: {{arrowSize}}; } ' }]
		},
		// Section Arrow 
		arrowColor: {
			type: 'string',
			default: '#1066CC',
			style: [{ selector: '{{QUBELY}} .qubely-block-testimonial-carousel .nav-control .dashicons { color:{{arrowColor}}; }' }]
		},
		// Arrow background color
		arrowShapeColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#fafafa' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control' }]
		},
		// Arrow Border Color
		arrowBorderColor: {
			type: 'object',
			default: {},
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control' }]
		},
		// Arrow Hover Color.
		arrowHoverColor: {
			type: 'string', default: '#ffffff',
			style: [{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control:hover .dashicons { color:{{arrowHoverColor}}; }' }]
		},
		// Arrow background Hover Color.
		arrowShapeHoverColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#1066CC' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover ' }]
		},
		// Arroe Border Hover Color.
		arrowBorderHoverColor: {
			type: 'object',
			default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover' }]
		},
		// Dot Navigation.
		dotwidth: {
			type: 'string',
			default: { md: 30, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { width: {{dotwidth}} }' }]
		},
		dotHeight: {
			type: 'string',
			default: { md: 4, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { height: {{dotHeight}} }' }]
		},
		dotBorderRadius: {
			type: 'string',
			default: { md: 4, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li { border-radius: {{dotBorderRadius}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator { border-radius: {{dotBorderRadius}} }' }]
		},
		// Dot
		dotColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#f4f4f4' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li' }]
		},
		// Dot Active Color
		dotActiveColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#1066CC' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator' }]
		},
		//Name
		nameColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-name { color:{{nameColor}}; }' }] },
		nameTypo: { type: 'object', default: { openTypography: 1, weight: 700, size: { md: 16, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-name' }] },
		nameSpacing: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-name {margin-bottom: {{nameSpacing}};}' }] },

		//Designation
		designationColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-designation { color:{{designationColor}}; }' }] },
		designationTypo: { type: 'object', default: { openTypography: 1, size: { md: 14, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-designation' }] },

		/*------------------------------------
  * 			Messsage 
  * ------------------------------------ */
		messagePosition: { type: 'string', default: 'top' },
		messageTypo: {
			type: 'object',
			default: {
				openTypography: 1,
				size: { md: 16, unit: 'px' }
			},
			style: [{ selector: '{{QUBELY}} .qubely-testimonial-content' }]
		},
		messageSpacingTop: { type: 'object', default: { md: 0, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-content {margin-top: {{messageSpacingTop}};}' }] },
		messageSpacingBottom: { type: 'object', default: { md: 5, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-content {margin-bottom: {{messageSpacingBottom}};}' }] },

		/*------------------------------------
  * 			Avatar 
  * ------------------------------------ */
		showAvatar: { type: 'boolean', default: true },
		avatarLayout: { type: 'string', default: 'left' },
		avatarAlt: { type: 'string', default: '' },
		avatarSize: {
			type: 'string',
			default: '64px',
			style: [{
				condition: [{ key: 'avatarSize', relation: '!=', value: 'custom' }],
				selector: '{{QUBELY}} .qubely-testimonial-avatar { width: {{avatarSize}}; height: {{avatarSize}}; font-size: {{avatarSize}}; }'
			}]
		},
		avatarWidth: { type: 'object', default: { md: 120, unit: 'px' }, style: [{ condition: [{ key: 'avatarSize', relation: '==', value: 'custom' }], selector: '{{QUBELY}} .qubely-testimonial-avatar {width: {{avatarWidth}}; font-size: {{avatarWidth}};}' }] },
		avatarHeight: { type: 'object', default: { md: 120, unit: 'px' }, style: [{ condition: [{ key: 'avatarSize', relation: '==', value: 'custom' }], selector: '{{QUBELY}} .qubely-testimonial-avatar {height: {{avatarHeight}};}' }] },
		avatarSpacing: {
			type: 'object',
			default: {
				md: 20,
				unit: 'px'
			},
			style: [{
				condition: [{ key: 'avatarLayout', relation: '==', value: 'left' }],
				selector: '{{QUBELY}} .qubely-testimonial-avatar {margin-right: {{avatarSpacing}}; }'
			}, {
				condition: [{ key: 'avatarLayout', relation: '==', value: 'right' }],
				selector: '{{QUBELY}} .qubely-testimonial-avatar {margin: 0px 0px 0px {{avatarSpacing}};}'
			}, {
				condition: [{ key: 'avatarLayout', relation: '==', value: 'top' }],
				selector: '{{QUBELY}} .qubely-testimonial-avatar {margin: 0px 0px {{avatarSpacing}};}'
			}, {
				condition: [{ key: 'avatarLayout', relation: '==', value: 'bottom' }],
				selector: '{{QUBELY}} .qubely-testimonial-avatar{margin: {{avatarSpacing}} 0px 0px;}'
			}]
		},
		avatarBorderRadius: {
			type: 'object',
			default: {
				openBorderRadius: 1,
				radiusType: 'global',
				global: { md: 100 },
				unit: '%'
			},
			style: [{ selector: '{{QUBELY}} .qubely-testimonial-avatar' }]
		},
		avatarBorder: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-testimonial-avatar' }] },

		/*------------------------------------
  * 			Quote 
  * ------------------------------------ */
		quoteIcon: { type: 'string', default: 'fas fa-quote-left' },
		quoteIconPosition: { type: 'string', default: 'top' },
		quoteIconSize: { type: 'object', default: { md: 48, unit: 'px' }, style: [{ condition: [{ key: 'quoteIcon', relation: '!=', value: '' }], selector: '{{QUBELY}} .qubely-quote-icon {font-size: {{quoteIconSize}};}' }] },
		quoteIconColor: { type: 'string', default: '#E2E2E2', style: [{ condition: [{ key: 'quoteIcon', relation: '!=', value: '' }], selector: '{{QUBELY}} .qubely-quote-icon {color: {{quoteIconColor}};}' }] },
		quoteIconSpacing: {
			type: 'object',
			default: {
				md: 20, unit: 'px'
			},
			style: [{
				condition: [{ key: 'layout', relation: '==', value: '1' }, { key: 'quoteIcon', relation: '!=', value: '' }],
				selector: '{{QUBELY}} .qubely-testimonial-quote {margin-bottom: {{quoteIconSpacing}};}'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '2' }, { key: 'quoteIcon', relation: '!=', value: '' }],
				selector: '{{QUBELY}} .qubely-testimonial-quote {margin-top: {{quoteIconSpacing}};}'
			}]
		},

		/* ------------------------------------
  * 				Ratings 
  * ------------------------------------- */
		showRatings: { type: 'boolean', default: true },
		ratings: { type: 'string', default: 4.5 },
		ratingsPosition: { type: 'string', default: 'bottom' },
		ratingsColor: { type: 'string', default: '#FFB800', style: [{ condition: [{ key: 'ratings', relation: '!=', value: '0' }], selector: '{{QUBELY}} .qubely-testimonial-ratings:before {color: {{ratingsColor}};} {{QUBELY}} .qubely-testimonial-ratings {color: {{ratingsColor}};}' }] },
		starsSize: { type: 'object', default: { md: 16, unit: 'px' }, style: [{ condition: [{ key: 'ratings', relation: '!=', value: '0' }], selector: '{{QUBELY}} .qubely-testimonial-ratings {font-size:{{starsSize}};}' }] },
		ratingsSpacing: {
			type: 'object',
			default: {
				md: 12,
				unit: 'px'
			},
			style: [{
				condition: [{ key: 'layout', relation: '==', value: '1' }, { key: 'ratings', relation: '!=', value: '0' }],
				selector: '{{QUBELY}} .qubely-testimonial-ratings {margin-bottom: {{ratingsSpacing}};}'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '2' }, { key: 'ratings', relation: '!=', value: '0' }],
				selector: '{{QUBELY}} .qubely-testimonial-ratings {margin-top: {{ratingsSpacing}};}'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '3' }, { key: 'layout', relation: '!=', value: '0' }],
				selector: '{{QUBELY}} .qubely-testimonial-ratings {margin-bottom: {{ratingsSpacing}};}'
			}]
		},

		/* ------------------------------------
  * 			Design 
  * ------------------------------------- */
		textColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-testimonial-carousel-content-wrapper { color:{{textColor}}; }' }] },
		bgPadding: {
			type: 'object',
			default: {},
			style: [{
				condition: [{ key: 'layout', relation: '==', value: '1' }],
				selector: '{{QUBELY}} .qubely-layout-1 .qubely-tesitmonial-item'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '2' }],
				selector: '{{QUBELY}} .qubely-layout-2 .qubely-tesitmonial-item'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '3' }],
				selector: '{{QUBELY}} .qubely-layout-3 .qubely-testimonial-carousel-content-wrapper'
			}]
		},
		// Background Color
		bgColor: {
			type: 'string',
			default: '',
			style: [{
				selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1 {background-color: {{bgColor}};} {{QUBELY}} .qubely-tesitmonial-item.layout-2 {background-color: {{bgColor}};}'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '3' }],
				selector: '{{QUBELY}} .layout-3 .qubely-testimonial-carousel-content-wrapper {background-color: {{bgColor}};} {{QUBELY}} .layout-3 .qubely-testimonial-carousel-content-wrapper:before {border-color: {{bgColor}} transparent transparent transparent;}'
			}]
		},
		// Border radius
		bgBorderRadius: {
			type: 'object',
			default: {
				openBorderRadius: 1,
				radiusType: 'global',
				global: { md: 20 },
				unit: 'px'
			},
			style: [{ selector: '{{QUBELY}} .qubely-layout-1 .qubely-tesitmonial-item, {{QUBELY}} .qubely-layout-2 .qubely-tesitmonial-item, {{QUBELY}} .qubely-layout-3 .qubely-testimonial-carousel-content-wrapper' }]
		},
		border: {
			type: 'object',
			default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1, {{QUBELY}} .qubely-tesitmonial-item.layout-2, {{QUBELY}} .qubely-tesitmonial-item.layout-3 .qubely-testimonial-carousel-content-wrapper' }]
		},
		boxShadow: {
			type: 'object', default: {},
			style: [{ selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1, {{QUBELY}} .qubely-tesitmonial-item.layout-2, {{QUBELY}} .qubely-tesitmonial-item.layout-3 .qubely-testimonial-carousel-content-wrapper' }]
		},
		boxShadowHover: {
			type: 'object', default: {},
			style: [{ selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1:hover, {{QUBELY}} .qubely-tesitmonial-item.layout-2:hover, {{QUBELY}} .qubely-tesitmonial-item.layout-3 .qubely-testimonial-carousel-content-wrapper:hover' }]
		},
		showGlobalSettings: { type: 'boolean', default: true } // Global Settings
		//showContextMenu: { type: 'boolean', default: true }, 
	},
	edit: _Edit2.default,
	save: _Save2.default
});

/***/ }),

/***/ "./src/blocks/testimonialcarousel/style.scss":
/*!***************************************************!*\
  !*** ./src/blocks/testimonialcarousel/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/testimonialcarousel/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/blocks/tests/Edit.js":
/*!**********************************!*\
  !*** ./src/blocks/tests/Edit.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl;
var _wp$qubelyComponents = wp.qubelyComponents,
    Alignment = _wp$qubelyComponents.Alignment,
    Color = _wp$qubelyComponents.Color;
var InspectorControls = wp.editor.InspectorControls;

var Edit = function (_Component) {
    _inherits(Edit, _Component);

    function Edit() {
        _classCallCheck(this, Edit);

        return _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));
    }

    _createClass(Edit, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                setAttributes = _props.setAttributes,
                clientId = _props.clientId,
                uniqueId = _props.attributes.uniqueId;

            var _client = clientId.substr(0, 6);
            if (!uniqueId) {
                setAttributes({ uniqueId: _client });
            } else if (uniqueId && uniqueId != _client) {
                setAttributes({ uniqueId: _client });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$attributes = this.props.attributes,
                uniqueId = _props$attributes.uniqueId,
                text = _props$attributes.text,
                alignment = _props$attributes.alignment,
                testColor = _props$attributes.testColor,
                testBg = _props$attributes.testBg;
            var setAttributes = this.props.setAttributes;


            return React.createElement(
                Fragment,
                null,
                React.createElement(
                    InspectorControls,
                    { key: 'inspector' },
                    React.createElement(
                        PanelBody,
                        { initialOpen: true },
                        React.createElement(TextControl, {
                            label: __('Text'),
                            value: text,
                            onChange: function onChange(val) {
                                return setAttributes({ text: val });
                            },
                            placeholder: __('Input Text') }),
                        React.createElement(Alignment, {
                            label: __('Alignment'),
                            alignmentType: 'content',
                            value: alignment,
                            onChange: function onChange(val) {
                                return setAttributes({ alignment: val });
                            },
                            disableJustify: true,
                            disableToggle: true
                        }),
                        React.createElement(Color, { label: __('Color'), value: testColor, onChange: function onChange(value) {
                                return setAttributes({ testColor: value });
                            } }),
                        React.createElement(Color, { label: __('Background'), value: testBg, onChange: function onChange(value) {
                                return setAttributes({ testBg: value });
                            } })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'qubely-block-' + uniqueId },
                    React.createElement(
                        'div',
                        { className: 'test-block' },
                        text
                    )
                )
            );
        }
    }]);

    return Edit;
}(Component);

exports.default = Edit;

/***/ }),

/***/ "./src/blocks/tests/Save.js":
/*!**********************************!*\
  !*** ./src/blocks/tests/Save.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var Component = wp.element.Component;

var Save = function (_Component) {
    _inherits(Save, _Component);

    function Save() {
        _classCallCheck(this, Save);

        return _possibleConstructorReturn(this, (Save.__proto__ || Object.getPrototypeOf(Save)).apply(this, arguments));
    }

    _createClass(Save, [{
        key: "render",
        value: function render() {
            var _props$attributes = this.props.attributes,
                uniqueId = _props$attributes.uniqueId,
                text = _props$attributes.text;

            return React.createElement(
                "div",
                { className: "qubely-block-" + uniqueId },
                React.createElement(
                    "div",
                    { className: "test-block" },
                    text
                )
            );
        }
    }]);

    return Save;
}(Component);

exports.default = Save;

/***/ }),

/***/ "./src/blocks/tests/index.js":
/*!***********************************!*\
  !*** ./src/blocks/tests/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./src/blocks/tests/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/tests/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/tests/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('qubely/test', {
    title: __('TEST'),
    description: 'Apply texts and tweak designs with Qubely Advanced Text.',
    category: 'qubely',
    icon: 'universal-access-alt',
    supports: { align: false },
    keywords: [__('text'), __('paragraph'), __('heading')],
    attributes: {
        uniqueId: { type: 'string', default: '' },
        text: { type: 'string', default: 'This is Text' },
        alignment: { type: 'string', default: 'left', style: [{ selector: '{{QUBELY}} {text-align: {{alignment}};}' }] },
        testColor: {
            type: 'string', default: '',
            style: [{
                selector: '{{QUBELY}} {color: {{testColor}};}'
            }]
        },
        testBg: {
            type: 'string', default: '',
            style: [{
                selector: '{{QUBELY}} {background: {{testBg}};}'
            }]
        }
    },
    edit: _Edit2.default,
    save: _Save2.default
});

/***/ }),

/***/ "./src/blocks/tests/style.scss":
/*!*************************************!*\
  !*** ./src/blocks/tests/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/tests/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/helpers/icons.js":
/*!******************************!*\
  !*** ./src/helpers/icons.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var __ = wp.i18n.__;

var img_path = qubely_pro_admin.plugin + 'assets/img/blocks';

var icons = {
    // Testimonial Carousel icon.
    testimonial_1: React.createElement('img', { src: img_path + '/testimonial/1.svg', alt: __('Testimonial 1') }),
    testimonial_2: React.createElement('img', { src: img_path + '/testimonial/2.svg', alt: __('Testimonial 2') }),
    testimonial_3: React.createElement('img', { src: img_path + '/testimonial/3.svg', alt: __('Testimonial 3') }),

    // Team Carousel Icon
    teamcarousel_1: React.createElement('img', { src: img_path + '/teamcarousel/1.svg', alt: __('Team Carousel 1') }),
    teamcarousel_2: React.createElement('img', { src: img_path + '/teamcarousel/2.svg', alt: __('Team Carousel 2') }),
    teamcarousel_3: React.createElement('img', { src: img_path + '/teamcarousel/3.svg', alt: __('Team Carousel 3') })
};

exports.default = icons;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./blocks/tests/index.js */ "./src/blocks/tests/index.js");

__webpack_require__(/*! ./blocks/testimonialcarousel */ "./src/blocks/testimonialcarousel/index.js");

__webpack_require__(/*! ./blocks/teamcarousel */ "./src/blocks/teamcarousel/index.js");

// Team Carousel
var __ = wp.i18n.__; // Testimonial Carousel

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/plugin/qubely/wp-content/plugins/qubely-pro/assets/reactjs/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=qubely.pro.dev.js.map