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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/editor.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/editor.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-form .qubely-form .qubely-form-group {\n  border: 1px solid #fff; }\n  .qubely-block-form .qubely-form .qubely-form-group .qubely-form-group-option {\n    display: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 14px; }\n    .qubely-block-form .qubely-form .qubely-form-group .qubely-form-group-option span {\n      margin-right: 5px; }\n      .qubely-block-form .qubely-form .qubely-form-group .qubely-form-group-option span.qubely-option-disable {\n        cursor: not-allowed;\n        pointer-events: none;\n        opacity: 0.5; }\n  .qubely-block-form .qubely-form .qubely-form-group:hover {\n    cursor: pointer;\n    border: 1px dashed #ddd; }\n    .qubely-block-form .qubely-form .qubely-form-group:hover .qubely-form-group-option {\n      display: block; }\n\n.qubely-block-form .qubely-form .qubely-form-group-active {\n  background-color: #f6f9fc;\n  border: 1px solid #eee; }\n  .qubely-block-form .qubely-form .qubely-form-group-active .qubely-form-group-option {\n    display: block; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/style.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-form .qubely-form {\n  display: flex;\n  flex-wrap: wrap; }\n  .qubely-block-form .qubely-form .qubely-form-group {\n    position: relative; }\n    .qubely-block-form .qubely-form .qubely-form-group .qubely-form-label {\n      display: flex;\n      padding: 5px 0px; }\n      .qubely-block-form .qubely-form .qubely-form-group .qubely-form-label .qubely-form-field-label {\n        padding-right: 20px; }\n    .qubely-block-form .qubely-form .qubely-form-group .qubely-form-control {\n      display: block;\n      width: 100%;\n      background-clip: padding-box;\n      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n      .qubely-block-form .qubely-form .qubely-form-group .qubely-form-control.is-small {\n        padding: 6px 8px; }\n      .qubely-block-form .qubely-form .qubely-form-group .qubely-form-control.is-medium {\n        padding: 8.5px 12px; }\n      .qubely-block-form .qubely-form .qubely-form-group .qubely-form-control.is-large {\n        padding: 14.5px 16px; }\n    .qubely-block-form .qubely-form .qubely-form-group textarea.qubely-form-control {\n      resize: none; }\n    .qubely-block-form .qubely-form .qubely-form-group .qubely-form-control:focus {\n      outline: 0; }\n    .qubely-block-form .qubely-form .qubely-form-group p.qubely-form-required-field {\n      font-size: 14px;\n      color: red;\n      margin: 0; }\n\n.qubely-block-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-group-inner {\n  position: relative; }\n\n.qubely-block-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-label {\n  position: absolute;\n  pointer-events: none;\n  top: 0px;\n  transition: 0.2s ease all; }\n\n.qubely-block-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control {\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0; }\n  .qubely-block-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control:focus, .qubely-block-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control:valid {\n    outline: none;\n    color: #333; }\n  .qubely-block-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control::placeholder {\n    opacity: 0;\n    transition: 400ms; }\n  .qubely-block-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control:focus::placeholder {\n    opacity: 1; }\n\n.qubely-block-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control:focus ~ .qubely-form-label,\n.qubely-block-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control:valid ~ .qubely-form-label {\n  top: -20px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/gallery/style.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/gallery/style.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-gallery .qubely-gallery-item {\n  position: relative; }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-repeatable-action-remove {\n    display: block; }\n\n.qubely-block-gallery.qubely-gallery-item .qubely-repeatable-action-remove {\n  top: -10px;\n  right: -10px; }\n\n.qubely-block-gallery .qubely-gallery-image-container {\n  position: relative;\n  overflow: hidden;\n  line-height: 0; }\n  .qubely-block-gallery .qubely-gallery-image-container:before {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 1;\n    -webkit-transition: 400ms;\n    transition: 400ms; }\n  .qubely-block-gallery .qubely-gallery-image-container:after {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 1;\n    opacity: 0;\n    -webkit-transition: 400ms;\n    transition: 400ms; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-empty-image {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    background: #f5f5f5;\n    border: 2px dashed #e5e5e5;\n    padding: 30px;\n    border-radius: 5px;\n    min-height: 200px; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-insert-image {\n    text-align: center;\n    display: inline-block;\n    color: #fff;\n    text-decoration: none;\n    line-height: 1;\n    position: relative;\n    z-index: 4; }\n    .qubely-block-gallery .qubely-gallery-image-container .qubely-insert-image span {\n      margin-top: 0px;\n      display: block;\n      font-size: 14px; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-content-image-editor {\n    position: relative;\n    display: inline-block; }\n    .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-content-image-editor .qubely-media-actions {\n      bottom: 10px;\n      right: 10px;\n      position: absolute;\n      z-index: 4; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-caption-wrapper {\n    display: flex;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 3;\n    line-height: normal; }\n    .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-caption-wrapper.qubely-gallery-caption-onHover .qubely-gallery-caption {\n      opacity: 0;\n      -webkit-transform: translate3d(0, 40px, 0);\n      transform: translate3d(0, 40px, 0);\n      -webkit-transition: -webkit-transform 400ms;\n      transition: -webkit-transform 400ms;\n      transition: transform 400ms;\n      transition: transform 400ms,-webkit-transform 400ms; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-zoom-in img {\n    -webkit-transition: -webkit-transform 400ms;\n    transition: -webkit-transform 400ms;\n    transition: transform 400ms;\n    transition: transform 400ms,-webkit-transform 400ms;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-zoom-out img {\n    -webkit-transition: -webkit-transform 400ms;\n    transition: -webkit-transform 400ms;\n    transition: transform 400ms;\n    transition: transform 400ms,-webkit-transform 400ms;\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2); }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-scale img {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transition: -webkit-transform 400ms;\n    transition: -webkit-transform 400ms;\n    transition: transform 400ms;\n    transition: transform 400ms,-webkit-transform 400ms; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-slide-left img {\n    max-width: initial;\n    max-height: 100%;\n    width: calc(100% + 50px);\n    -webkit-transition: opacity 400ms,-webkit-transform 400ms;\n    transition: opacity 400ms,-webkit-transform 400ms;\n    transition: opacity 400ms,transform 400ms;\n    transition: opacity 400ms,transform 400ms,-webkit-transform 400ms;\n    -webkit-transform: translate3d(-40px, 0, 0);\n    transform: translate3d(-40px, 0, 0); }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-slide-right img {\n    max-width: initial;\n    max-height: 100%;\n    width: calc(100% + 50px);\n    -webkit-transition: opacity 400ms,-webkit-transform 400ms;\n    transition: opacity 400ms,-webkit-transform 400ms;\n    transition: opacity 400ms,transform 400ms;\n    transition: opacity 400ms,transform 400ms,-webkit-transform 400ms;\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-slide-bottom img {\n    -webkit-transform: translate3d(0, 20px, 0) scale3d(1.2, 1.2, 1);\n    transform: translate3d(0, 20px, 0) scale3d(1.2, 1.2, 1);\n    -webkit-transition: -webkit-transform 400ms;\n    transition: -webkit-transform 400ms;\n    transition: transform 400ms;\n    transition: transform 400ms,-webkit-transform 400ms; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-slide-top img {\n    -webkit-transform: translate3d(0, -20px, 0) scale3d(1.2, 1.2, 1);\n    transform: translate3d(0, -20px, 0) scale3d(1.2, 1.2, 1);\n    -webkit-transition: -webkit-transform 400ms;\n    transition: -webkit-transform 400ms;\n    transition: transform 400ms;\n    transition: transform 400ms,-webkit-transform 400ms; }\n\n.qubely-block-gallery .qubely-gallery-item {\n  -webkit-transition: 400ms;\n  transition: 400ms; }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-caption-onHover .qubely-gallery-caption {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-zoom-in img {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-zoom-out img {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-scale img {\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-slide-left img {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-slide-right img {\n    -webkit-transform: translate3d(-40px, 0, 0);\n    transform: translate3d(-40px, 0, 0); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-slide-bottom img {\n    -webkit-transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1);\n    transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-slide-top img {\n    -webkit-transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1);\n    transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-container:after {\n    opacity: 1;\n    -webkit-transition: 400ms;\n    transition: 400ms; }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-container:before {\n    -webkit-transition: 400ms;\n    transition: 400ms; }\n\n.qubely-column-grid {\n  display: grid;\n  grid-column-gap: 30px;\n  grid-row-gap: 30px; }\n\n.qubely-gallery-item-2 .qubely-column-grid {\n  display: block;\n  column-fill: initial; }\n  .qubely-gallery-item-2 .qubely-column-grid .qubely-gallery-item {\n    display: inline-block;\n    vertical-align: top;\n    width: 100%; }\n\n.qubely-column-grid-xs1 {\n  grid-template-columns: 1fr; }\n\n.qubely-column-grid-xs2 {\n  grid-template-columns: 1fr 1fr; }\n\n.qubely-column-grid-xs3 {\n  grid-template-columns: 1fr 1fr 1fr; }\n\n@media (min-width: 767px) {\n  .qubely-column-grid-sm1 {\n    grid-template-columns: 1fr; }\n  .qubely-column-grid-sm2 {\n    grid-template-columns: 1fr 1fr; }\n  .qubely-column-grid-sm3 {\n    grid-template-columns: 1fr 1fr 1fr; }\n  .qubely-gallery-item-2 .qubely-column-grid-sm1 {\n    column-count: 1; }\n  .qubely-gallery-item-2 .qubely-column-grid-sm2 {\n    column-count: 2; }\n  .qubely-gallery-item-2 .qubely-column-grid-sm3 {\n    column-count: 3; } }\n\n@media (min-width: 992px) {\n  .qubely-column-grid-md1 {\n    grid-template-columns: 1fr; }\n  .qubely-column-grid-md2 {\n    grid-template-columns: 1fr 1fr; }\n  .qubely-column-grid-md3 {\n    grid-template-columns: 1fr 1fr 1fr; }\n  .qubely-column-grid-md4 {\n    grid-template-columns: 1fr 1fr 1fr; }\n  .qubely-column-grid-md5 {\n    grid-template-columns: 1fr 1fr 1fr; }\n  .qubely-column-grid-md6 {\n    grid-template-columns: 1fr 1fr 1fr; }\n  .qubely-gallery-item-2 .qubely-column-grid-md1 {\n    column-count: 1; }\n  .qubely-gallery-item-2 .qubely-column-grid-md2 {\n    column-count: 2; }\n  .qubely-gallery-item-2 .qubely-column-grid-md3 {\n    column-count: 3; }\n  .qubely-gallery-item-2 .qubely-column-grid-md4 {\n    column-count: 3; }\n  .qubely-gallery-item-2 .qubely-column-grid-md5 {\n    column-count: 3; }\n  .qubely-gallery-item-2 .qubely-column-grid-md6 {\n    column-count: 3; } }\n\n@media (min-width: 1299px) {\n  .qubely-column-grid-md4 {\n    grid-template-columns: 1fr 1fr 1fr 1fr; }\n  .qubely-column-grid-md5 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }\n  .qubely-column-grid-md6 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; }\n  .qubely-gallery-item-2 .qubely-column-grid-md4 {\n    column-count: 4; }\n  .qubely-gallery-item-2 .qubely-column-grid-md5 {\n    column-count: 5; }\n  .qubely-gallery-item-2 .qubely-column-grid-md6 {\n    column-count: 6; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/imagecarousel/style.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/imagecarousel/style.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-image-carousel {\n  transition: all 400ms; }\n  .qubely-block-image-carousel .editor-rich-text .editor-rich-text__tinymce {\n    line-height: inherit; }\n  .qubely-block-image-carousel .qubely-image-quote .qubely-quote-icon {\n    line-height: 1;\n    width: auto;\n    height: auto; }\n  .qubely-block-image-carousel .qubely-image-quote.qubely-position-bottom .qubely-quote-icon {\n    transform: scaleY(-1); }\n  .qubely-block-image-carousel .qubely-single-img.qubely-backend .qubely-image-sliderimage {\n    cursor: pointer;\n    display: block; }\n  .qubely-block-image-carousel .qubely-image-placeholder.qubely-image-sliderimage i {\n    padding: 120px;\n    width: inherit;\n    height: inherit; }\n  .qubely-block-image-carousel .qubely-image-subtitle div {\n    font-size: 24px; }\n  .qubely-block-image-carousel .qubely-carousel-item.qubely-carousel-item {\n    transition: .4s; }\n  .qubely-block-image-carousel .qubely-image-item span.qubely-slider-description {\n    display: block; }\n  .qubely-block-image-carousel .qubely-image-sliderimage.qubely-image-placeholder i {\n    font-size: 52px;\n    background: #f7f7f7; }\n  .qubely-block-image-carousel .qubely-image-placeholder {\n    width: 100%;\n    height: 100%; }\n  .qubely-block-image-carousel .qubely-image-sliderimage-layout-left,\n  .qubely-block-image-carousel .qubely-image-sliderimage-layout-right {\n    display: inline-flex;\n    align-items: center; }\n    .qubely-block-image-carousel .qubely-image-sliderimage-layout-left .qubely-image-slidertitle-info,\n    .qubely-block-image-carousel .qubely-image-sliderimage-layout-right .qubely-image-slidertitle-info {\n      text-align: left; }\n  .qubely-block-image-carousel .qubely-image-sliderimage-layout-right .qubely-image-slidertitle-info {\n    text-align: right; }\n  .qubely-block-image-carousel .qubely-image-ratings {\n    unicode-bidi: bidi-override;\n    display: inline-block;\n    position: relative;\n    letter-spacing: 5px; }\n    .qubely-block-image-carousel .qubely-image-ratings:before, .qubely-block-image-carousel .qubely-image-ratings:after {\n      content: \"\\f005\\f005\\f005\\f005\\f005\";\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 400;\n      display: block;\n      white-space: nowrap; }\n    .qubely-block-image-carousel .qubely-image-ratings:before {\n      position: absolute;\n      z-index: 1;\n      left: 0px;\n      overflow: hidden;\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 900;\n      content: \"\\f005\\f005\\f005\\f005\\f005\"; }\n    .qubely-block-image-carousel .qubely-image-ratings:after {\n      z-index: 0; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"1\"]:before {\n      width: 20%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"1.5\"]:before {\n      width: 29%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"2\"]:before {\n      width: 40%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"2.5\"]:before {\n      width: 49%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"3\"]:before {\n      width: 60%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"3.5\"]:before {\n      width: 69%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"4\"]:before {\n      width: 80%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"4.5\"]:before {\n      width: 89%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"5\"]:before {\n      width: 100%; }\n  .qubely-block-image-carousel .qubely-image-carousel-arrow-down {\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-top: 15px solid #d6d9dd; }\n\n.qubely-image-carousel-content-wrapper {\n  position: relative; }\n\n.layout-3 .qubely-image-carousel-content-wrapper {\n  padding: 20px;\n  border-radius: 10px;\n  background: #f4f4f4; }\n  .layout-3 .qubely-image-carousel-content-wrapper:before {\n    content: \" \";\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    transform: translate(-50%, 50%);\n    border-width: 15px;\n    z-index: 1;\n    border-color: #f4f4f4 transparent transparent transparent;\n    left: 50%;\n    bottom: -15px; }\n\n.layout-3 .qubely-image-slidertitle {\n  margin-top: 40px;\n  text-align: center; }\n\n.layout-3 .qubely-image-sliderimage {\n  margin-right: 0px; }\n\n.layout-3 .qubely-image-sliderimage-layout-left .qubely-image-slidertitle-info {\n  text-align: center; }\n\n.layout-1 .qubely-image-sliderimage {\n  margin-right: 20px; }\n\n.layout-2 .qubely-image-sliderimage {\n  margin-right: 20px; }\n\n.qubely-carousel.qubely-carousel-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-extended-list {\n    position: relative;\n    overflow: hidden; }\n  .qubely-carousel.qubely-carousel-wrapper .js-indicator {\n    position: absolute;\n    z-index: 9;\n    -webkit-perspective: 1000px;\n    perspective: 1000px;\n    transform-style: preserve-3d;\n    transition-property: transform, -webkit-transform, width;\n    -webkit-transition-property: transform, -webkit-transform, width;\n    transition-timing-function: linear;\n    -webkit-transition-timing-function: linear; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item {\n    position: relative;\n    float: left;\n    overflow: hidden;\n    transition-property: transform;\n    transition-duration: 300ms;\n    transition-timing-function: ease-in-out;\n    transition-delay: 0s; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.active {\n    visibility: visible;\n    transform-style: preserve-3d; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.dragenable {\n    visibility: visible;\n    transform-style: preserve-3d; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.prev-item {\n    z-index: 1;\n    visibility: visible; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control {\n    height: 50px;\n    width: 100%;\n    margin-top: 5px;\n    z-index: 3; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control {\n      display: inline-block;\n      padding: 10px;\n      border: 1px solid #e2e2e2;\n      position: absolute;\n      cursor: pointer;\n      text-align: center;\n      bottom: 49%;\n      background: rgba(255, 255, 255, 0.4);\n      transition: .3s; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .next-control.nav-control.buttom {\n      bottom: 0; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .prev-control.nav-control.buttom {\n      bottom: 0; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control {\n      right: 0; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control {\n      left: 0; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots {\n    margin-top: 16px;\n    height: 50px;\n    width: 100%;\n    bottom: 0px;\n    z-index: 3;\n    left: 50%;\n    transform: translateX(-50%); }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul {\n      margin: 10px 0 0;\n      padding: 0;\n      list-style: none;\n      text-align: center; }\n      .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator {\n        width: 100%;\n        height: 100%; }\n      .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {\n        display: inline-block;\n        height: 4px;\n        width: 30px;\n        margin: 5px;\n        border: 0;\n        background: #f4f4f4;\n        border-radius: 2px;\n        cursor: pointer;\n        position: relative; }\n        .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator {\n          position: absolute;\n          -webkit-perspective: 1000px;\n          perspective: 1000px;\n          transform-style: preserve-3d;\n          transition-property: transform, -webkit-transform, width;\n          -webkit-transition-property: transform, -webkit-transform, width;\n          transition-timing-function: linear;\n          -webkit-transition-timing-function: linear;\n          width: 0;\n          left: 0;\n          top: 0;\n          height: 4px;\n          border-radius: 2px; }\n        .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator.active {\n          background: #2084f9;\n          width: 100%;\n          top: 0;\n          border-radius: 2px; }\n\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s; }\n\n.qubely-carousel-nav-control .nav-control .dashicons {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.qubely-image-item.layout-3 .qubely-image-sliderimage {\n  margin-right: 0; }\n\n.qubely-image-carousel-content-wrapper {\n  position: relative; }\n\n.qubely-carousel {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .qubely-carousel .qubely-carousel-extended-list {\n    position: relative;\n    overflow: hidden; }\n  .qubely-carousel .js-indicator {\n    position: absolute;\n    z-index: 9;\n    -webkit-perspective: 1000px;\n    perspective: 1000px;\n    transform-style: preserve-3d;\n    transition-property: transform, -webkit-transform, width;\n    -webkit-transition-property: transform, -webkit-transform, width;\n    transition-timing-function: linear;\n    -webkit-transition-timing-function: linear; }\n  .qubely-carousel .qubely-carousel-item {\n    position: relative;\n    float: left; }\n  .qubely-carousel .qubely-carousel-item.active {\n    visibility: visible;\n    transform-style: preserve-3d; }\n  .qubely-carousel .qubely-carousel-item.dragenable {\n    visibility: visible;\n    transform-style: preserve-3d; }\n  .qubely-carousel .qubely-carousel-item.prev-item {\n    z-index: 1;\n    visibility: visible; }\n  .qubely-carousel .qubely-carousel-extended-nav-control {\n    position: relative;\n    height: 20px;\n    width: 100%;\n    margin-top: 5px;\n    z-index: 3; }\n    .qubely-carousel .qubely-carousel-extended-nav-control .nav-control {\n      display: inline-block;\n      height: 40px;\n      width: 40px;\n      padding: 10px;\n      border: 1px solid #ababab;\n      position: absolute;\n      cursor: pointer;\n      text-align: center;\n      bottom: 100px;\n      background: rgba(255, 255, 255, 0.4); }\n    .qubely-carousel .qubely-carousel-extended-nav-control .nav-control.next-control {\n      right: 0; }\n    .qubely-carousel .qubely-carousel-extended-nav-control .nav-control.prev-control {\n      left: 0; }\n  .qubely-carousel .qubely-carousel-extended-dots {\n    position: relative;\n    height: 20px;\n    width: 100%;\n    margin-top: 5px;\n    z-index: 3;\n    position: absolute;\n    bottom: 50px;\n    left: 50%;\n    transform: translateX(-50%); }\n    .qubely-carousel .qubely-carousel-extended-dots ul {\n      margin: -4px;\n      padding: 0;\n      list-style: none;\n      text-align: center; }\n      .qubely-carousel .qubely-carousel-extended-dots ul li {\n        display: inline-block;\n        height: 4px;\n        width: 30px;\n        margin: 5px;\n        border: 0;\n        background: rgba(218, 92, 92, 0.4);\n        border-radius: 2px;\n        cursor: pointer;\n        position: relative; }\n        .qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator {\n          position: absolute;\n          -webkit-perspective: 1000px;\n          perspective: 1000px;\n          transform-style: preserve-3d;\n          transition-property: transform, -webkit-transform, width;\n          -webkit-transition-property: transform, -webkit-transform, width;\n          transition-timing-function: linear;\n          -webkit-transition-timing-function: linear;\n          width: 0;\n          left: 0;\n          top: 0;\n          height: 4px;\n          border-radius: 2px; }\n        .qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator.active {\n          background: #ffffff;\n          width: 100%;\n          top: 0;\n          border-radius: 2px; }\n      .qubely-carousel .qubely-carousel-extended-dots ul li.active {\n        width: 80px; }\n\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s;\n  display: flex; }\n\n.qubely-carousel.qubely-carousel-wrapper.is-faded .qubely-carousel-extended-list .qubely-carousel-extended-outer-stage .qubely-carousel-item:not(.active) {\n  opacity: 0.1; }\n\n.qubely-block-image-carousel.qubely-layout-3 .qubely-carousel-item {\n  opacity: .35; }\n\n.qubely-block-image-carousel.qubely-layout-3 .qubely-carousel-item.active {\n  opacity: 1; }\n\n.qubely-block-image-carousel.qubely-layout-3 {\n  overflow: hidden; }\n\n.qubely-block-image-carousel.qubely-layout-3 .qubely-carousel.qubely-carousel-wrapper {\n  padding: 30px 0; }\n\n.qubely-block-image-carousel.qubely-layout-3 .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-extended-list,\n.qubely-block-image-carousel.qubely-layout-3 .qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: inherit; }\n\n.qubely-layout-3 .qubely-carousel .qubely-carousel-extended-list .qubely-carousel-item {\n  padding: 0 15px; }\n\n.qubely-block-image-carousel.qubely-layout-3 .qubely-carousel-item {\n  transform: scale(1); }\n\n.qubely-block-image-carousel.qubely-layout-3 .qubely-carousel-item.active {\n  transform: scale(1.1); }\n\n.qubely-layout-3 .qubely-carousel .qubely-carousel-extended-list .qubely-carousel-item {\n  padding: 0 22px; }\n\n.qubely-layout-4 .qubely-carousel .qubely-carousel-extended-list .qubely-carousel-item {\n  padding: 0 10px; }\n\n.layout-2 .qubely-image-slider-text,\n.layout-3 .qubely-image-slider-text,\n.layout-4 .qubely-image-slider-text,\n.layout-5 .qubely-image-slider-text,\n.layout-6 .qubely-image-slider-text {\n  display: flex;\n  position: absolute;\n  padding: 30px;\n  height: 100%;\n  width: 100%;\n  bottom: 0;\n  transition: .3s; }\n\n.layout-2 .qubely-image-slider-text:before,\n.layout-3 .qubely-image-slider-text:before,\n.layout-4 .qubely-image-slider-text:before,\n.layout-5 .qubely-image-slider-text:before,\n.layout-6 .qubely-image-slider-text:before {\n  content: '';\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: .3s; }\n\n.qubely-image-slider {\n  position: relative;\n  height: 100%; }\n\n.qubely-image-content {\n  position: absolute;\n  padding: 0 50px;\n  color: #fff;\n  width: 100%;\n  bottom: 0;\n  left: 0; }\n\n.qubely-block-image-carousel .qubely-image-item.layout-5 .qubely-image-placeholder.qubely-image-sliderimage i {\n  padding: 56px; }\n\n.qubely-image-item {\n  height: 100%; }\n  .qubely-image-item .qubely-image-sliderimage {\n    min-height: 100%; }\n\n.qubely-block-image-carousel.qubely-layout-5 .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control {\n  height: 8px;\n  margin-top: 0px; }\n\n.item-layout5 .qubely-image-slider-text {\n  display: none; }\n\n.qubely-single-img {\n  height: 100%;\n  line-height: 0; }\n\n.qubely-slider-image-container.qubely-empty-image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f5f5;\n  border: 2px dashed #e5e5e5;\n  padding: 30px;\n  border-radius: 5px;\n  min-height: 330px; }\n\n.qubely-insert-image svg.dashicon.dashicons-insert {\n  fill: currentColor;\n  outline: none; }\n\n.qubely-insert-image span {\n  margin-top: 5px;\n  display: block;\n  line-height: 20px; }\n\n.qubely-block-image-carousel .qubely-media-actions.qubely-field-button-list {\n  top: 10px;\n  left: 10px;\n  position: absolute;\n  z-index: 2; }\n\n.qubely-block-image-carousel .qubely-carousel .qubely-carousel-item {\n  position: relative;\n  float: left;\n  overflow: hidden; }\n  .qubely-block-image-carousel .qubely-carousel .qubely-carousel-item:hover .qubely-repeatable-action-remove {\n    display: block; }\n\n.qubely-block-image-carousel span.dashicons.dashicons-dismiss {\n  font-size: 24px; }\n\n.qubely-repeatable-action-remove {\n  display: none;\n  font-size: 10px;\n  width: 20px;\n  height: 20px;\n  line-height: 18px;\n  text-align: center;\n  background: transparent;\n  color: #e11d0f;\n  position: absolute;\n  right: 10px;\n  border-radius: 50%;\n  z-index: 4;\n  cursor: pointer;\n  top: 10px;\n  padding: 0px;\n  border: 1px solid #e11d0f;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);\n  transition: 400ms; }\n  .qubely-repeatable-action-remove:hover {\n    color: #fff;\n    background: #e11d0f; }\n\n.qubely-block-image-carousel.qubely-layout-3 .qubely-carousel-item .qubely-repeatable-action-remove {\n  right: 35px; }\n\n.qubely-block-image-carousel.qubely-layout-4 .qubely-carousel-item .qubely-repeatable-action-remove {\n  right: 25px; }\n\n.qubely-field-button-list .qubely-button {\n  font-size: 14px; }\n\n.qubely-image-item a.qubely-insert-image {\n  color: #ababab;\n  position: absolute;\n  z-index: 9999;\n  text-decoration: none;\n  text-align: center; }\n  .qubely-image-item a.qubely-insert-image:hover {\n    color: #2184f9; }\n\n.qubely-image-item .qubely-image-title {\n  line-height: 38px; }\n\n.align-top .qubely-image-content {\n  bottom: initial;\n  top: 0; }\n\n.align-center .qubely-image-content {\n  bottom: 34%; }\n\n.align-bottom .qubely-image-content {\n  bottom: 0; }\n\n.qubely-postcarousel-category {\n  line-height: 20px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/postcarousel/style.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/postcarousel/style.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".editor-styles-wrapper .wp-block h1.qubely-postcarousel-title,\n.editor-styles-wrapper .wp-block h2.qubely-postcarousel-title,\n.editor-styles-wrapper .wp-block h3.qubely-postcarousel-title,\n.editor-styles-wrapper .wp-block h4.qubely-postcarousel-title,\n.editor-styles-wrapper .wp-block h5.qubely-postcarousel-title,\n.editor-styles-wrapper .wp-block h6.qubely-postcarousel-title {\n  margin: 0; }\n\n.qubely-postcarousel-is-loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px; }\n\n.qubely-post-list-wrapper {\n  display: block;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n  .qubely-post-list-wrapper .qubely-post-list-img {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    overflow: hidden; }\n  .qubely-post-list-wrapper .qubely-post-list-content {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    padding-left: 20px; }\n\n@media screen and (min-width: 767px) {\n  .qubely-post-list-wrapper {\n    display: -ms-flexbox;\n    display: flex; }\n    .qubely-post-list-wrapper .qubely-post-list-img {\n      -ms-flex: 0 0 40%;\n      flex: 0 0 40%;\n      max-width: 40%; }\n    .qubely-post-list-wrapper .qubely-post-list-img + .qubely-post-list-content {\n      -ms-flex: 0 0 60%;\n      flex: 0 0 60%;\n      max-width: 60%; } }\n\n.qubely-carousel-item {\n  position: relative; }\n  .qubely-carousel-item img {\n    display: block; }\n  .qubely-carousel-item .qubely-postcarousel-title {\n    margin: 0;\n    line-height: 28px; }\n    .qubely-carousel-item .qubely-postcarousel-title a {\n      text-decoration: none !important; }\n      .qubely-carousel-item .qubely-postcarousel-title a:hover {\n        text-decoration: none; }\n  .qubely-carousel-item .qubely-postcarousel-intro,\n  .qubely-carousel-item .qubely-postcarousel-intro p {\n    font-size: 15px;\n    line-height: 24px;\n    margin: 0; }\n  .qubely-carousel-item .qubely-postcarousel-meta {\n    font-size: 14px;\n    line-height: 22px; }\n  .qubely-carousel-item .qubely-postcarousel-btn {\n    display: inline-block;\n    text-decoration: none !important; }\n    .qubely-carousel-item .qubely-postcarousel-btn:hover {\n      text-decoration: none !important; }\n  .qubely-carousel-item .qubely-button-fill.is-small {\n    padding: 5px 10px;\n    font-size: 14px; }\n  .qubely-carousel-item .qubely-button-fill.is-medium {\n    padding: 8px 15px;\n    font-size: 16px; }\n  .qubely-carousel-item .qubely-button-fill.is-large {\n    padding: 13px 20px;\n    font-size: 18px; }\n\n.qubely-post-img {\n  position: relative;\n  overflow: hidden; }\n  .qubely-post-img .qubely-postcarousel-cat-position {\n    position: absolute; }\n    .qubely-post-img .qubely-postcarousel-cat-position.qubely-postcarousel-cat-position-leftTop {\n      top: 20px;\n      left: 20px; }\n    .qubely-post-img .qubely-postcarousel-cat-position.qubely-postcarousel-cat-position-rightTop {\n      top: 20px;\n      right: 20px; }\n    .qubely-post-img .qubely-postcarousel-cat-position.qubely-postcarousel-cat-position-leftBottom {\n      bottom: 20px;\n      left: 20px; }\n    .qubely-post-img .qubely-postcarousel-cat-position.qubely-postcarousel-cat-position-rightBottom {\n      bottom: 20px;\n      right: 20px; }\n\n.qubely-postcarousel-category a {\n  transition: 400ms !important;\n  text-decoration: none !important; }\n  .qubely-postcarousel-category a:hover {\n    text-decoration: none !important; }\n\n.qubely-postcarousel-meta span {\n  padding-left: 12px;\n  position: relative;\n  padding-right: 12px; }\n  .qubely-postcarousel-meta span i {\n    margin-right: 3px; }\n  .qubely-postcarousel-meta span:before {\n    position: absolute;\n    content: \"\";\n    background: #d8d8d8;\n    left: -1px;\n    top: 50%;\n    width: 2px;\n    height: 2px;\n    border-radius: 20px;\n    margin-top: -1px; }\n  .qubely-postcarousel-meta span:first-child {\n    padding-left: 0; }\n    .qubely-postcarousel-meta span:first-child:before {\n      display: none; }\n\n.qubely-postcarousel-meta a {\n  text-decoration: none !important; }\n  .qubely-postcarousel-meta a:hover {\n    text-decoration: none !important; }\n\n.qubely-postcarousel-style-4 {\n  position: relative;\n  overflow: hidden; }\n  .qubely-postcarousel-style-4 .qubely-post-grid-img,\n  .qubely-postcarousel-style-4 .qubely-post-list-img {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    -webkit-background-size: cover;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    overflow: hidden; }\n    .qubely-postcarousel-style-4 .qubely-post-grid-img img,\n    .qubely-postcarousel-style-4 .qubely-post-list-img img {\n      position: absolute;\n      width: auto;\n      height: auto;\n      min-width: 100%;\n      max-width: none;\n      left: 50%;\n      top: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n      min-height: 100%; }\n  .qubely-postcarousel-style-4 .qubely-post-grid-content,\n  .qubely-postcarousel-style-4 .qubely-post-list-content {\n    opacity: 1;\n    position: relative;\n    z-index: 10;\n    overflow: hidden;\n    width: 100%;\n    max-width: 100%;\n    padding: 20px; }\n  .qubely-postcarousel-style-4 > div .qubely-post-grid-img,\n  .qubely-postcarousel-style-4 > div .qubely-post-list-img {\n    width: 100%;\n    max-width: 100%; }\n  .qubely-postcarousel-style-4:before {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 3;\n    opacity: 0.8;\n    transition: 400ms; }\n  .qubely-postcarousel-style-4 .qubely-post-grid-top .qubely-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: flex-start; }\n  .qubely-postcarousel-style-4 .qubely-post-grid-center .qubely-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: center; }\n  .qubely-postcarousel-style-4 .qubely-post-grid-bottom .qubely-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: flex-end; }\n\n.qubely-postcarousel:not(.qubely-postcarousel-style-4) .qubely-post-img.qubely-post-img-zoom-out .qubely-post-image {\n  transition: transform 0.35s;\n  transform: scale(1.2); }\n\n.qubely-postcarousel:not(.qubely-postcarousel-style-4) .qubely-post-img.qubely-post-img-zoom-in .qubely-post-image {\n  transition: transform 0.35s;\n  transform: scale(1); }\n\n.qubely-postcarousel:not(.qubely-postcarousel-style-4) .qubely-post-img.qubely-post-img-slide-bottom .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(0, 20px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel:not(.qubely-postcarousel-style-4) .qubely-post-img.qubely-post-img-slide-top .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(0, -20px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel:not(.qubely-postcarousel-style-4) .qubely-post-img.qubely-post-img-slide-right .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(20px, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel:not(.qubely-postcarousel-style-4) .qubely-post-img.qubely-post-img-slide-left .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(-20px, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel:hover:not(.qubely-postcarousel-style-4) .qubely-post-img-zoom-out .qubely-post-image {\n  transform: scale(1); }\n\n.qubely-postcarousel:hover:not(.qubely-postcarousel-style-4) .qubely-post-img-zoom-in .qubely-post-image {\n  transform: scale(1.2); }\n\n.qubely-postcarousel:hover:not(.qubely-postcarousel-style-4) .qubely-post-img-slide-bottom .qubely-post-image {\n  transform: translate3d(0, 0px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel:hover:not(.qubely-postcarousel-style-4) .qubely-post-img-slide-top .qubely-post-image {\n  transform: translate3d(0, 0px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel:hover:not(.qubely-postcarousel-style-4) .qubely-post-img-slide-right .qubely-post-image {\n  transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel:hover:not(.qubely-postcarousel-style-4) .qubely-post-img-slide-left .qubely-post-image {\n  transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-post-list-center.qubely-post-list-wrapper {\n  align-items: center; }\n\n.qubely-post-list-top.qubely-post-list-wrapper {\n  align-items: flex-start; }\n\n.qubely-post-list-bottom.qubely-post-list-wrapper {\n  align-items: flex-end; }\n\n.qubely-post-list-view.qubely-postcarousel-style-3 .qubely-post-list-wrapper .qubely-post-list-content {\n  background: #fff;\n  padding: 20px;\n  position: relative;\n  z-index: 1; }\n\n.qubely-post-list-view.qubely-postcarousel-style-3 .qubely-post-list-wrapper .qubely-post-list-img + .qubely-post-list-content {\n  margin-left: -40px; }\n\n.qubely-post-grid-view.qubely-postcarousel-style-3 .qubely-post-grid-content {\n  background: #fff;\n  position: relative;\n  z-index: 1;\n  padding: 20px; }\n\n.qubely-post-grid-view.qubely-postcarousel-style-3 .qubely-post-grid-img + .qubely-post-grid-content {\n  margin: -80px auto 0;\n  width: 90%; }\n\n.qubely-post-grid-view.qubely-postcarousel-style-3 .qubely-post-grid-left .qubely-post-grid-content {\n  float: left; }\n\n.qubely-post-grid-view.qubely-postcarousel-style-3 .qubely-post-grid-right .qubely-post-grid-content {\n  float: right; }\n\n.qubely-postcarousel-column {\n  display: grid;\n  grid-column-gap: 30px;\n  grid-row-gap: 30px; }\n  .qubely-postcarousel-column.qubely-postcarousel-layout-5 {\n    display: block;\n    column-fill: initial; }\n    .qubely-postcarousel-column.qubely-postcarousel-layout-5 > div {\n      margin-bottom: 30px; }\n\n.qubely-postcarousel-layout-3 .qubely-postcarousel:nth-child(1) {\n  grid-column-start: 1; }\n\n.qubely-postcarousel-layout-3.qubely-postcarousel-column-md2 .qubely-postcarousel:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postcarousel-layout-3.qubely-postcarousel-column-md3 .qubely-postcarousel:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postcarousel-layout-3.qubely-postcarousel-column-md4 .qubely-postcarousel:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postcarousel-layout-3.qubely-postcarousel-column-md5 .qubely-postcarousel:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postcarousel-layout-3.qubely-postcarousel-column-md6 .qubely-postcarousel:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column {\n  column-gap: 30px;\n  display: block; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column .qubely-postcarousel {\n    display: inline-block;\n    width: 100%;\n    height: auto;\n    margin-bottom: 30px; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column-md1 {\n  column-count: 1; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column-md2 {\n  column-count: 2; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column-md3 {\n  column-count: 1; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column-md4 {\n  column-count: 1; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column-md5 {\n  column-count: 1; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column-md6 {\n  column-count: 1; }\n\n@media screen and (max-width: 992px) {\n  .qubely-post-list-center.qubely-post-list-wrapper {\n    align-items: flex-start; }\n  .qubely-post-list-view.qubely-postcarousel-style-3\n.qubely-post-list-wrapper\n.qubely-post-list-img\n+ .qubely-post-list-content {\n    margin-left: 0; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md4 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 2; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column-sm1 {\n    column-count: 1; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column-sm2 {\n    column-count: 2; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column-sm3 {\n    column-count: 3; } }\n\n@media screen and (max-width: 768px) {\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column-xs1 {\n    column-count: 1; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column-xs2 {\n    column-count: 2; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column-xs3 {\n    column-count: 3; } }\n\n@media (min-width: 992px) {\n  .qubely-postcarousel-layout-3 .qubely-postcarousel:nth-child(1) {\n    grid-column-start: 1; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md2 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 3; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md3 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 4; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md4 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 4; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md5 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 4; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md6 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 4; } }\n\n@media (min-width: 1299px) {\n  .qubely-postcarousel-column-md4 {\n    grid-template-columns: 1fr 1fr 1fr 1fr; }\n    .qubely-postcarousel-column-md4.qubely-postcarousel-layout-5 {\n      column-count: 5; }\n  .qubely-postcarousel-column-md5 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }\n    .qubely-postcarousel-column-md5.qubely-postcarousel-layout-5 {\n      column-count: 6; }\n  .qubely-postcarousel-column-md6 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; }\n    .qubely-postcarousel-column-md6.qubely-postcarousel-layout-5 {\n      column-count: 7; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md4 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 5; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md5 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 6; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md6 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 7; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column.qubely-postcarousel-column-md3 {\n    column-count: 3; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column.qubely-postcarousel-column-md4 {\n    column-count: 4; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column.qubely-postcarousel-column-md5 {\n    column-count: 5; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column.qubely-postcarousel-column-md6 {\n    column-count: 6; } }\n\n.qubely-post-img {\n  margin-bottom: 10px; }\n\n.qubely-post-grid-content.align-center {\n  text-align: center; }\n\n.qubely-post-grid-content.align-right {\n  text-align: right; }\n\n.qubely-post-grid-content.align-left {\n  text-align: left; }\n\n.qubely-postgrid-style-3 .qubely-post-grid-wrapper.qubely-post-grid-center {\n  background-color: transparent;\n  padding: 10px 0; }\n\n.qubely-carousel-item.qubely-post-grid-view.qubely-postgrid-style-2 {\n  padding: 10px; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-content {\n  border-radius: 10px; }\n\n.qubely-postgrid-style-4 .qubely-post-grid-img img {\n  left: 0;\n  top: 0; }\n\n.layout-4 .clone.qubely-carousel-item .qubely-post-grid-content.align-top {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%; }\n\n.qubely-postcarousel-wrapper .qubely-carousel-item .qubely-post-img-zoom-out img {\n  transition: transform .35s,-webkit-transform .35s;\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2); }\n\n.qubely-postcarousel-wrapper .qubely-carousel-item:hover .qubely-post-img-zoom-out img {\n  -webkit-transform: scale(1);\n  transform: scale(1); }\n\n.qubely-postcarousel-wrapper .qubely-carousel-item:hover .qubely-post-img-zoom-in img {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1); }\n\n.qubely-postcarousel-wrapper .qubely-carousel-item:hover .qubely-post-img-slide-left img {\n  transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel-wrapper .qubely-carousel-item:hover .qubely-post-img-slide-right img {\n  transform: translate3d(-20px, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel-wrapper .qubely-carousel-item:hover .qubely-post-img-slide-bottom img {\n  transform: translate3d(0, 0px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel-wrapper .qubely-carousel-item:hover .qubely-post-img-slide-top img {\n  transform: translate3d(0, 0px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel-wrapper .qubely-carousel-item .qubely-post-img-zoom-in img {\n  transition: transform .35s,-webkit-transform .35s;\n  -webkit-transform: scale(1);\n  transform: scale(1); }\n\n.qubely-postcarousel-wrapper .qubely-carousel-item .qubely-post-img-slide-left img {\n  transition: transform 0.35s;\n  transform: translate3d(-20px, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel-wrapper .qubely-carousel-item .qubely-post-img-slide-right img {\n  transition: transform 0.35s;\n  transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel-wrapper .qubely-carousel-item .qubely-post-img-slide-bottom img {\n  transition: transform 0.35s;\n  transform: translate3d(0, 20px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postcarousel-wrapper .qubely-carousel-item .qubely-post-img-slide-top img {\n  transition: transform 0.35s;\n  transform: translate3d(0, -20px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-block-image-carousel .qubely-postgrid-style-4 .qubely-post-grid-img img {\n  left: 0;\n  top: 0; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/postgrid/style.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/postgrid/style.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".editor-styles-wrapper .wp-block h1.qubely-postgrid-title,\n.editor-styles-wrapper .wp-block h2.qubely-postgrid-title,\n.editor-styles-wrapper .wp-block h3.qubely-postgrid-title,\n.editor-styles-wrapper .wp-block h4.qubely-postgrid-title,\n.editor-styles-wrapper .wp-block h5.qubely-postgrid-title,\n.editor-styles-wrapper .wp-block h6.qubely-postgrid-title {\n  margin: 0; }\n\n.qubely-postgrid-is-loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px; }\n\n.qubely-post-list-wrapper {\n  display: block;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n  .qubely-post-list-wrapper .qubely-post-list-img {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    overflow: hidden; }\n  .qubely-post-list-wrapper .qubely-post-list-content {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    padding-left: 20px; }\n\n@media screen and (min-width: 767px) {\n  .qubely-post-list-wrapper {\n    display: -ms-flexbox;\n    display: flex; }\n    .qubely-post-list-wrapper .qubely-post-list-img {\n      -ms-flex: 0 0 40%;\n      flex: 0 0 40%;\n      max-width: 40%; }\n    .qubely-post-list-wrapper .qubely-post-list-img + .qubely-post-list-content {\n      -ms-flex: 0 0 60%;\n      flex: 0 0 60%;\n      max-width: 60%; } }\n\n.qubely-postgrid {\n  position: relative; }\n  .qubely-postgrid img {\n    display: block; }\n  .qubely-postgrid .qubely-postgrid-title {\n    margin: 0;\n    line-height: 1; }\n    .qubely-postgrid .qubely-postgrid-title a {\n      text-decoration: none !important; }\n      .qubely-postgrid .qubely-postgrid-title a:hover {\n        text-decoration: none; }\n  .qubely-postgrid .qubely-postgrid-intro,\n  .qubely-postgrid .qubely-postgrid-intro p {\n    font-size: 15px;\n    line-height: 24px;\n    margin: 0; }\n  .qubely-postgrid .qubely-postgrid-meta {\n    font-size: 14px;\n    line-height: 22px; }\n  .qubely-postgrid .qubely-postgrid-btn {\n    display: inline-block;\n    text-decoration: none !important; }\n    .qubely-postgrid .qubely-postgrid-btn:hover {\n      text-decoration: none !important; }\n  .qubely-postgrid .qubely-button-fill.is-small {\n    padding: 5px 10px;\n    font-size: 14px; }\n  .qubely-postgrid .qubely-button-fill.is-medium {\n    padding: 8px 15px;\n    font-size: 16px; }\n  .qubely-postgrid .qubely-button-fill.is-large {\n    padding: 13px 20px;\n    font-size: 18px; }\n\n.qubely-post-img {\n  position: relative;\n  overflow: hidden; }\n  .qubely-post-img .qubely-postgrid-cat-position {\n    position: absolute; }\n    .qubely-post-img .qubely-postgrid-cat-position.qubely-postgrid-cat-position-leftTop {\n      top: 20px;\n      left: 20px; }\n    .qubely-post-img .qubely-postgrid-cat-position.qubely-postgrid-cat-position-rightTop {\n      top: 20px;\n      right: 20px; }\n    .qubely-post-img .qubely-postgrid-cat-position.qubely-postgrid-cat-position-leftBottom {\n      bottom: 20px;\n      left: 20px; }\n    .qubely-post-img .qubely-postgrid-cat-position.qubely-postgrid-cat-position-rightBottom {\n      bottom: 20px;\n      right: 20px; }\n\n.qubely-postgrid-category a {\n  transition: 400ms !important;\n  text-decoration: none !important; }\n  .qubely-postgrid-category a:hover {\n    text-decoration: none !important; }\n\n.qubely-postgrid-meta span {\n  padding-left: 12px;\n  position: relative;\n  padding-right: 12px; }\n  .qubely-postgrid-meta span i {\n    margin-right: 3px; }\n  .qubely-postgrid-meta span:before {\n    position: absolute;\n    content: \"\";\n    background: #d8d8d8;\n    left: -1px;\n    top: 50%;\n    width: 2px;\n    height: 2px;\n    border-radius: 20px;\n    margin-top: -1px; }\n  .qubely-postgrid-meta span:first-child {\n    padding-left: 0; }\n    .qubely-postgrid-meta span:first-child:before {\n      display: none; }\n\n.qubely-postgrid-meta a {\n  text-decoration: none !important; }\n  .qubely-postgrid-meta a:hover {\n    text-decoration: none !important; }\n\n.qubely-postgrid-style-4 {\n  position: relative;\n  overflow: hidden; }\n  .qubely-postgrid-style-4 .qubely-post-grid-img,\n  .qubely-postgrid-style-4 .qubely-post-list-img {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    -webkit-background-size: cover;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    overflow: hidden; }\n    .qubely-postgrid-style-4 .qubely-post-grid-img img,\n    .qubely-postgrid-style-4 .qubely-post-list-img img {\n      position: absolute;\n      width: auto;\n      height: auto;\n      min-width: 100%;\n      max-width: none;\n      left: 50%;\n      top: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n      min-height: 100%; }\n  .qubely-postgrid-style-4 .qubely-post-grid-content,\n  .qubely-postgrid-style-4 .qubely-post-list-content {\n    opacity: 1;\n    position: relative;\n    z-index: 10;\n    overflow: hidden;\n    width: 100%;\n    max-width: 100%;\n    padding: 20px; }\n  .qubely-postgrid-style-4 > div .qubely-post-grid-img,\n  .qubely-postgrid-style-4 > div .qubely-post-list-img {\n    width: 100%;\n    max-width: 100%; }\n  .qubely-postgrid-style-4:before {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 3;\n    opacity: 0.8;\n    transition: 400ms; }\n  .qubely-postgrid-style-4 .qubely-post-list-top .qubely-post-list-content,\n  .qubely-postgrid-style-4 .qubely-post-list-top .qubely-post-grid-content,\n  .qubely-postgrid-style-4 .qubely-post-grid-top .qubely-post-list-content,\n  .qubely-postgrid-style-4 .qubely-post-grid-top .qubely-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: flex-start; }\n  .qubely-postgrid-style-4 .qubely-post-list-center .qubely-post-list-content,\n  .qubely-postgrid-style-4 .qubely-post-list-center .qubely-post-grid-content,\n  .qubely-postgrid-style-4 .qubely-post-grid-center .qubely-post-list-content,\n  .qubely-postgrid-style-4 .qubely-post-grid-center .qubely-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: center; }\n  .qubely-postgrid-style-4 .qubely-post-list-bottom .qubely-post-list-content,\n  .qubely-postgrid-style-4 .qubely-post-list-bottom .qubely-post-grid-content,\n  .qubely-postgrid-style-4 .qubely-post-grid-bottom .qubely-post-list-content,\n  .qubely-postgrid-style-4 .qubely-post-grid-bottom .qubely-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: flex-end; }\n\n.qubely-postgrid:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-zoom-out .qubely-post-image {\n  transition: transform 0.35s;\n  transform: scale(1.2); }\n\n.qubely-postgrid:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-zoom-in .qubely-post-image {\n  transition: transform 0.35s;\n  transform: scale(1); }\n\n.qubely-postgrid:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-slide-bottom .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(0, 20px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-slide-top .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(0, -20px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-slide-right .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(20px, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-slide-left .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(-20px, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:hover:not(.qubely-postgrid-style-4) .qubely-post-img-zoom-out .qubely-post-image {\n  transform: scale(1); }\n\n.qubely-postgrid:hover:not(.qubely-postgrid-style-4) .qubely-post-img-zoom-in .qubely-post-image {\n  transform: scale(1.2); }\n\n.qubely-postgrid:hover:not(.qubely-postgrid-style-4) .qubely-post-img-slide-bottom .qubely-post-image {\n  transform: translate3d(0, 0px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:hover:not(.qubely-postgrid-style-4) .qubely-post-img-slide-top .qubely-post-image {\n  transform: translate3d(0, 0px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:hover:not(.qubely-postgrid-style-4) .qubely-post-img-slide-right .qubely-post-image {\n  transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:hover:not(.qubely-postgrid-style-4) .qubely-post-img-slide-left .qubely-post-image {\n  transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-post-list-center.qubely-post-list-wrapper {\n  align-items: center; }\n\n.qubely-post-list-top.qubely-post-list-wrapper {\n  align-items: flex-start; }\n\n.qubely-post-list-bottom.qubely-post-list-wrapper {\n  align-items: flex-end; }\n\n.qubely-post-list-view.qubely-postgrid-style-3 .qubely-post-list-wrapper .qubely-post-list-content {\n  background: #fff;\n  padding: 20px;\n  position: relative;\n  z-index: 1; }\n\n.qubely-post-list-view.qubely-postgrid-style-3 .qubely-post-list-wrapper .qubely-post-list-img + .qubely-post-list-content {\n  margin-left: -40px; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-content {\n  background: #fff;\n  position: relative;\n  z-index: 1;\n  padding: 20px; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-img + .qubely-post-grid-content {\n  margin: -80px auto 0;\n  width: 90%; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-left .qubely-post-grid-content {\n  float: left; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-right .qubely-post-grid-content {\n  float: right; }\n\n.qubely-postgrid-column {\n  display: grid;\n  grid-column-gap: 30px;\n  grid-row-gap: 30px; }\n  .qubely-postgrid-column.qubely-postgrid-layout-5 {\n    display: block;\n    column-fill: initial; }\n    .qubely-postgrid-column.qubely-postgrid-layout-5 > div {\n      margin-bottom: 30px; }\n\n.qubely-postgrid-layout-3 .qubely-postgrid:nth-child(1) {\n  grid-column-start: 1; }\n\n.qubely-postgrid-layout-3.qubely-postgrid-column-md2 .qubely-postgrid:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postgrid-layout-3.qubely-postgrid-column-md3 .qubely-postgrid:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postgrid-layout-3.qubely-postgrid-column-md4 .qubely-postgrid:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postgrid-layout-3.qubely-postgrid-column-md5 .qubely-postgrid:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postgrid-layout-3.qubely-postgrid-column-md6 .qubely-postgrid:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column {\n  column-gap: 30px;\n  display: block; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column .qubely-postgrid {\n    display: inline-block;\n    width: 100%;\n    height: auto;\n    margin-bottom: 30px; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column-md1 {\n  column-count: 1; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column-md2 {\n  column-count: 2; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column-md3 {\n  column-count: 1; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column-md4 {\n  column-count: 1; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column-md5 {\n  column-count: 1; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column-md6 {\n  column-count: 1; }\n\n@media screen and (max-width: 992px) {\n  .qubely-post-list-center.qubely-post-list-wrapper {\n    align-items: flex-start; }\n  .qubely-post-list-view.qubely-postgrid-style-3\n.qubely-post-list-wrapper\n.qubely-post-list-img\n+ .qubely-post-list-content {\n    margin-left: 0; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md4 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 2; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column-sm1 {\n    column-count: 1; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column-sm2 {\n    column-count: 2; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column-sm3 {\n    column-count: 3; } }\n\n@media screen and (max-width: 768px) {\n  .qubely-postgrid-layout-4.qubely-postgrid-column-xs1 {\n    column-count: 1; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column-xs2 {\n    column-count: 2; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column-xs3 {\n    column-count: 3; } }\n\n@media (min-width: 992px) {\n  .qubely-postgrid-layout-3 .qubely-postgrid:nth-child(1) {\n    grid-column-start: 1; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md2 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 3; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md3 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 4; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md4 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 4; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md5 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 4; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md6 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 4; } }\n\n@media (min-width: 1299px) {\n  .qubely-postgrid-column-md4 {\n    grid-template-columns: 1fr 1fr 1fr 1fr; }\n    .qubely-postgrid-column-md4.qubely-postgrid-layout-5 {\n      column-count: 5; }\n  .qubely-postgrid-column-md5 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }\n    .qubely-postgrid-column-md5.qubely-postgrid-layout-5 {\n      column-count: 6; }\n  .qubely-postgrid-column-md6 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; }\n    .qubely-postgrid-column-md6.qubely-postgrid-layout-5 {\n      column-count: 7; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md4 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 5; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md5 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 6; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md6 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 7; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column.qubely-postgrid-column-md3 {\n    column-count: 3; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column.qubely-postgrid-column-md4 {\n    column-count: 4; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column.qubely-postgrid-column-md5 {\n    column-count: 5; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column.qubely-postgrid-column-md6 {\n    column-count: 6; } }\n\n.qubely-postgrid-layout-5 .blog-feature-image {\n  width: 50%;\n  float: left;\n  position: relative;\n  display: inline-block; }\n\n.qubely-postgrid-layout-5 .qubely-post-list-view {\n  width: calc(50% - 30px);\n  display: inline-block;\n  position: relative;\n  margin-left: 30px; }\n\n.qubely-postgrid-layout-5 .qubely-post-list-view .qubely-post-img {\n  width: 200px;\n  float: left; }\n\n.qubely-postgrid-layout-5 h3.qubely-postgrid-title {\n  line-height: 28px;\n  margin: 0; }\n\n.qubely-postgrid-layout-5 h3.qubely-postgrid-title a {\n  font-size: 24px;\n  line-height: 4px;\n  text-decoration: none; }\n\n.qubely-postgrid-layout-5 .blog-feature-image .qubely-post-grid-content {\n  width: 87%;\n  position: absolute;\n  bottom: 0;\n  background: #fff;\n  margin: 0 auto;\n  transform: translate(-50%, 40%);\n  left: 50%;\n  box-shadow: 0 34px 28px -20px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  padding: 30px; }\n\n.qubely-postgrid-layout-5 .blog-feature-image .qubely-post-img {\n  margin-bottom: 0;\n  line-height: 0; }\n\n.qubely-postgrid-layout-5 .qubely-post-img {\n  padding-bottom: 0;\n  margin: 0;\n  line-height: 0; }\n\n.qubely-postgrid-wrapper.qubely-postgrid-layout-5 .blog-feature-image img.qubely-post-image,\n.qubely-post-list-view.layout-5 img.qubely-post-image {\n  border-radius: 10px;\n  width: 100%; }\n\n.qubely-postgrid-layout-5 .qubely-postgrid-category {\n  display: block;\n  padding-bottom: 12px;\n  line-height: 16px; }\n\n.qubely-postgrid-wrapper.qubely-postgrid-layout-5 .qubely-postgrid-intro p {\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  line-height: 20px; }\n\n.qubely-postgrid-layout-5 .qubely-post-list-view.layout-5 .qubely-post-grid-content {\n  width: calc(100% - 140px);\n  position: absolute;\n  background: #fff;\n  right: 0;\n  box-shadow: 0 34px 28px -20px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  padding: 20px 10px 20px 24px;\n  left: auto;\n  transform: translate(0%, -50%);\n  top: 48%;\n  display: block; }\n\n.qubely-post-list-view.layout-5 .qubely-postgrid-category {\n  display: block; }\n\n.qubely-post-list-view.layout-5 .qubely-postgrid-intro,\n.qubely-post-list-view.layout-5 .qubely-postgrid-meta,\n.qubely-post-list-view.layout-5 .layout-5 .qubely-postgrid-category,\n.qubely-postgrid-wrapper.qubely-postgrid-layout-5 .blog-feature-image .qubely-postgrid-intro {\n  padding-bottom: 0; }\n\n.qubely-postgrid-layout-5 .blog-feature-image .qubely-postgrid-category {\n  display: block; }\n\n.qubely-postgrid-layout-5 .qubely-postgrid-meta span a {\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 1.75px;\n  line-height: 18px; }\n\n.qubely-postgrid-layout-5 .layout-5 h3.qubely-postgrid-title {\n  line-height: 22px;\n  margin: 0; }\n\n.qubely-postgrid-layout-5 .layout-5 h3.qubely-postgrid-title a {\n  font-size: 18px;\n  line-height: 12px;\n  text-decoration: none; }\n\n.qubely-postgrid-layout-5 .layout-5 .qubely-postgrid-category {\n  display: block; }\n\n.qubely-postgrid-layout-5 .layout-5 .qubely-postgrid-meta {\n  margin-bottom: 5px; }\n\n.layout-5 .qubely-postgrid-meta span {\n  padding-right: 8px; }\n\n.qubely-postgrid-layout-5 .style-4.qubely-post-list-view .qubely-post-grid-img {\n  width: 100%;\n  padding: 0;\n  height: 200px; }\n\n.qubely-postgrid-layout-5 .qubely-post-list-view.layout-5.style-4 .qubely-post-grid-content {\n  width: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.45);\n  right: 0;\n  box-shadow: 0 34px 28px -20px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  padding: 20px 10px 20px 24px;\n  left: auto;\n  transform: translate(0%, 0%);\n  top: 0;\n  display: block;\n  height: 100%; }\n\n.qubely-postgrid-layout-5 .blog-feature-image.style-4 .qubely-post-grid-content {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.45);\n  margin: 0 auto;\n  transform: translate(0%, 0%);\n  left: 0;\n  box-shadow: 0 34px 28px -20px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  padding: 30px;\n  height: 100%; }\n\n.qubely-postgrid-layout-5 .blog-feature-image.style-4 .qubely-post-img {\n  padding: 0; }\n\n.blog-feature-image.style-4 .qubely-post-grid-content .qubely-postgrid-meta,\n.qubely-post-list-view.layout-5.style-4 .qubely-postgrid-meta {\n  position: absolute;\n  bottom: 50px; }\n\n.blog-feature-image.style-4 .qubely-post-grid-content h3.qubely-postgrid-title,\n.qubely-post-list-view.layout-5.style-4 h3.qubely-postgrid-title {\n  bottom: 16px;\n  position: absolute; }\n\n.qubely-postgrid-wrapper.qubely-postgrid-layout-5 .blog-feature-image.style-4 img.qubely-post-image {\n  object-fit: cover;\n  height: 626px; }\n\n.qubely-post-list-view.layout-5.style-4 .qubely-postgrid-category a,\n.qubely-postgrid-layout-5 .blog-feature-image.style-4 .qubely-postgrid-category a {\n  padding: 5px 10px 4px;\n  border-radius: 10px;\n  line-height: 1; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/pricelist/style.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/pricelist/style.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-pricelist .qubely-pricelist-item {\n  position: relative; }\n  .qubely-block-pricelist .qubely-pricelist-item:hover .qubely-repeatable-action-remove {\n    display: block; }\n\n.qubely-block-pricelist.qubely-pricelist-item-1 .qubely-repeatable-action-remove {\n  top: -10px;\n  right: -10px; }\n\n.qubely-block-pricelist:not(.qubely-pricelist-item-3) .qubely-pricelist-image-container {\n  position: relative; }\n\n.qubely-block-pricelist .qubely-pricelist-image-container .qubely-pricelist-badge {\n  position: absolute;\n  left: 15px;\n  top: 15px;\n  z-index: 3; }\n\n.qubely-block-pricelist .qubely-pricelist-image-container .qubely-empty-image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f5f5;\n  border: 2px dashed #e5e5e5;\n  padding: 30px;\n  border-radius: 5px;\n  min-height: 100px; }\n\n.qubely-block-pricelist .qubely-pricelist-image-container .qubely-insert-image {\n  text-align: center;\n  display: inline-block;\n  color: #2184F9;\n  text-decoration: none;\n  line-height: 1;\n  position: relative;\n  z-index: 3; }\n  .qubely-block-pricelist .qubely-pricelist-image-container .qubely-insert-image span {\n    margin-top: 0px;\n    display: block;\n    font-size: 14px; }\n\n.qubely-block-pricelist .qubely-pricelist-image-container .qubely-pricelist-content-image-editor {\n  position: relative;\n  display: inline-block; }\n  .qubely-block-pricelist .qubely-pricelist-image-container .qubely-pricelist-content-image-editor .qubely-media-actions {\n    bottom: 10px;\n    right: 10px;\n    position: absolute;\n    z-index: 4; }\n\n.qubely-block-pricelist .qubely-pricelist-line {\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  -moz-box-flex: 1;\n  flex-grow: 1;\n  margin: 0 20px; }\n\n.qubely-block-pricelist .qubely-pricelist-title-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -moz-box-align: center;\n  align-items: center; }\n  .qubely-block-pricelist .qubely-pricelist-title-wrapper > div:first-child,\n  .qubely-block-pricelist .qubely-pricelist-title-wrapper .qubely-pricelist-title {\n    margin-right: auto; }\n\n.qubely-block-pricelist .qubely-pricelist-price-wrapper > div {\n  display: inline-block; }\n\n.qubely-block-pricelist .qubely-pricelist-price-wrapper .qubely-pricelist-discount {\n  text-decoration: line-through;\n  margin-right: 10px; }\n\n.qubely-block-pricelist .qubely-pricelist-description-wrapper {\n  flex: 1; }\n  .qubely-block-pricelist .qubely-pricelist-description-wrapper .qubely-pricelist-description {\n    width: 100%; }\n\n.qubely-block-pricelist .qubely-pricelist-content {\n  overflow: hidden; }\n\n.qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container {\n  width: 100%;\n  height: 100%; }\n\n.qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-content {\n  position: relative;\n  min-height: 200px; }\n  .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-content .qubely-pricelist-description-wrapper {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    z-index: 2; }\n\n.qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container .qubely-pricelist-content-image-editor {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-background-size: cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  overflow: hidden; }\n  .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container .qubely-pricelist-content-image-editor img {\n    position: absolute;\n    width: auto;\n    height: auto;\n    min-width: 100%;\n    max-width: none;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    min-height: 100%; }\n  .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container .qubely-pricelist-content-image-editor:before {\n    content: \"\";\n    left: 0;\n    top: 0;\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    z-index: 1;\n    width: 100%;\n    height: 100%; }\n\n.qubely-block-pricelist .qubely-pricelist-item-center .qubely-pricelist-image-container {\n  margin-left: auto;\n  margin-right: auto; }\n\n.qubely-block-pricelist .qubely-pricelist-item-center .qubely-pricelist-description-wrapper {\n  text-align: center; }\n  .qubely-block-pricelist .qubely-pricelist-item-center .qubely-pricelist-description-wrapper .qubely-pricelist-price-wrapper {\n    display: inline-block; }\n\n.qubely-block-pricelist .qubely-pricelist-item-right .qubely-pricelist-description-wrapper {\n  text-align: right; }\n\n.qubely-block-pricelist .qubely-pricelist-item-right .qubely-pricelist-image-container {\n  margin-left: auto; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/teamcarousel/style.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/teamcarousel/style.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-team-carousel {\n  transition: all 400ms; }\n  .qubely-block-team-carousel .editor-rich-text .editor-rich-text__tinymce {\n    line-height: inherit; }\n  .qubely-block-team-carousel .qubely-team-quote .qubely-quote-icon {\n    line-height: 1;\n    width: auto;\n    height: auto; }\n  .qubely-block-team-carousel .qubely-team-quote.qubely-position-bottom .qubely-quote-icon {\n    transform: scaleY(-1); }\n  .qubely-block-team-carousel .qubely-single-img.qubely-backend .qubely-team-avatar {\n    cursor: pointer; }\n  .qubely-block-team-carousel .qubely-team-avatar.qubely-image-placeholder i {\n    font-size: 80px; }\n  .qubely-block-team-carousel .qubely-image-placeholder {\n    width: 100%;\n    height: 230px; }\n  .qubely-block-team-carousel .qubely-team-avatar-layout-left,\n  .qubely-block-team-carousel .qubely-team-avatar-layout-right {\n    display: inline-flex;\n    align-items: center; }\n    .qubely-block-team-carousel .qubely-team-avatar-layout-left .qubely-team-author-info,\n    .qubely-block-team-carousel .qubely-team-avatar-layout-right .qubely-team-author-info {\n      text-align: left; }\n  .qubely-block-team-carousel .qubely-team-avatar-layout-right .qubely-team-author-info {\n    text-align: right; }\n  .qubely-block-team-carousel .qubely-team-ratings {\n    unicode-bidi: bidi-override;\n    display: inline-block;\n    position: relative;\n    letter-spacing: 5px; }\n    .qubely-block-team-carousel .qubely-team-ratings:before, .qubely-block-team-carousel .qubely-team-ratings:after {\n      content: \"\\f005\\f005\\f005\\f005\\f005\";\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 400;\n      display: block;\n      white-space: nowrap; }\n    .qubely-block-team-carousel .qubely-team-ratings:before {\n      position: absolute;\n      z-index: 1;\n      left: 0px;\n      overflow: hidden;\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 900;\n      content: \"\\f005\\f005\\f005\\f005\\f005\"; }\n    .qubely-block-team-carousel .qubely-team-ratings:after {\n      z-index: 0; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"1\"]:before {\n      width: 20%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"1.5\"]:before {\n      width: 29%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"2\"]:before {\n      width: 40%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"2.5\"]:before {\n      width: 49%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"3\"]:before {\n      width: 60%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"3.5\"]:before {\n      width: 69%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"4\"]:before {\n      width: 80%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"4.5\"]:before {\n      width: 89%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"5\"]:before {\n      width: 100%; }\n  .qubely-block-team-carousel .qubely-team-carousel-arrow-down {\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-top: 15px solid #d6d9dd; }\n\n.qubely-team-carousel-content-wrapper {\n  position: relative; }\n\n.layout-3 .qubely-team-carousel-content-wrapper {\n  padding: 20px;\n  border-radius: 10px;\n  background: #f4f4f4; }\n\n.layout-3 .qubely-team-carousel-content-wrapper:before {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  transform: translate(-50%, 50%);\n  border-width: 15px;\n  z-index: 1;\n  border-color: #f4f4f4 transparent transparent transparent;\n  left: 50%;\n  bottom: -15px; }\n\n.layout-3 .qubely-team-author {\n  margin-top: 40px;\n  text-align: center; }\n\n.layout-3 .qubely-team-avatar {\n  margin-right: 0px; }\n\n.layout-3 .qubely-team-avatar-layout-left .qubely-team-author-info {\n  text-align: center; }\n\n.layout-1 .qubely-team-avatar,\n.layout-2 .qubely-team-avatar {\n  margin-right: 20px; }\n\n.qubely-carousel.qubely-carousel-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-extended-list,\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden; }\n\n.qubely-carousel-extended-outer-stage {\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s; }\n\n.qubely-carousel.qubely-carousel-wrapper .js-indicator {\n  position: absolute;\n  z-index: 9;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item {\n  position: relative;\n  float: left;\n  overflow: hidden; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.active,\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.dragenable {\n  visibility: visible;\n  transform-style: preserve-3d; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.prev-item {\n  z-index: 1;\n  visibility: visible; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots,\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control {\n  height: 50px;\n  width: 100%;\n  margin-top: 5px;\n  z-index: 3; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots {\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control {\n  display: inline-block;\n  padding: 10px;\n  border: 1px solid #e2e2e2;\n  position: absolute;\n  cursor: pointer;\n  text-align: center;\n  bottom: 49%;\n  background: rgba(255, 255, 255, 0.4);\n  transition: .3s; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator {\n  width: 100%;\n  height: 100%; }\n\n.qubely-carousel-nav-control .nav-control .dashicons {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .next-control.nav-control.buttom,\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .prev-control.nav-control.buttom {\n  bottom: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control {\n  right: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control {\n  left: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul {\n  margin: 15px;\n  padding: 0;\n  list-style: none;\n  text-align: center; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {\n  display: inline-block;\n  height: 4px;\n  width: 30px;\n  margin: 5px;\n  border: 0;\n  background: #f4f4f4;\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active {\n  width: 55px; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator {\n  position: absolute;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear;\n  width: 0;\n  left: 0;\n  top: 0;\n  height: 4px;\n  border-radius: 2px; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator.active {\n  background: #2084f9;\n  width: 100%;\n  top: 0;\n  border-radius: 2px; }\n\n.qubely-tesitmonial-item.layout-3 .qubely-team-avatar {\n  margin-right: 0; }\n\n.qubely-team-carousel-content-wrapper {\n  position: relative; }\n\n.qubely-carousel {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.qubely-carousel .qubely-carousel-extended-list {\n  position: relative;\n  overflow: hidden; }\n\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s;\n  display: flex; }\n\n.qubely-carousel .js-indicator {\n  position: absolute;\n  z-index: 9;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear; }\n\n.qubely-carousel .qubely-carousel-item {\n  position: relative;\n  float: left;\n  /* overflow: hidden; */ }\n\n.qubely-carousel .qubely-carousel-item.active,\n.qubely-carousel .qubely-carousel-item.dragenable {\n  visibility: visible;\n  transform-style: preserve-3d; }\n\n.qubely-carousel .qubely-carousel-item.prev-item {\n  z-index: 1;\n  visibility: visible; }\n\n.qubely-carousel .qubely-carousel-extended-nav-control,\n.qubely-carousel .qubely-carousel-extended-dots {\n  position: relative;\n  height: 20px;\n  width: 100%;\n  margin-top: 5px;\n  z-index: 3; }\n\n.qubely-carousel .qubely-carousel-extended-nav-control .nav-control {\n  display: inline-block;\n  height: 40px;\n  width: 40px;\n  padding: 10px;\n  border: 1px solid #ababab;\n  position: absolute;\n  cursor: pointer;\n  text-align: center;\n  bottom: 100px;\n  background: rgba(255, 255, 255, 0.4); }\n\n.qubely-carousel .qubely-carousel-extended-nav-control .nav-control.next-control {\n  right: 0; }\n\n.qubely-carousel .qubely-carousel-extended-nav-control .nav-control.prev-control {\n  left: 0; }\n\n.qubely-carousel .qubely-carousel-extended-dots {\n  position: absolute;\n  bottom: 50px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.qubely-carousel .qubely-carousel-extended-dots ul {\n  margin: -4px;\n  padding: 0;\n  list-style: none;\n  text-align: center; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li {\n  display: inline-block;\n  height: 4px;\n  width: 30px;\n  margin: 5px;\n  border: 0;\n  background: rgba(218, 92, 92, 0.4);\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li.active {\n  width: 80px; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator {\n  position: absolute;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear;\n  width: 0;\n  left: 0;\n  top: 0;\n  height: 4px;\n  border-radius: 2px; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover {\n  border: 1px solid #1066cc; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator.active {\n  background: #ffffff;\n  width: 100%;\n  top: 0;\n  border-radius: 2px; }\n\n.qubely-carousel.qubely-carousel-wrapper.is-faded .qubely-carousel-extended-list .qubely-carousel-extended-outer-stage .qubely-carousel-item:not(.active) {\n  opacity: 0.1; }\n\n.qubely-team-1 .qubely-team-author-info {\n  width: 100%;\n  padding: 30px;\n  background: #fafafa; }\n\n.qubely-team-2 {\n  position: relative; }\n\n.qubely-team-2 .qubely-team-author-info {\n  background: rgba(0, 0, 0, 0.65);\n  position: absolute;\n  line-height: 30px;\n  transition: .3s;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  z-index: 1;\n  top: 0;\n  color: #fff; }\n\n.qubely-team-2:hover .qubely-team-author-info {\n  opacity: 1; }\n\n.qubely-team-2 .qubely-team-author-info {\n  transform: translate(0%, 0%);\n  width: 100%;\n  padding: 70px; }\n\n.qubely-team-carousel-item .qubely-single-img {\n  line-height: 0; }\n\n.qubely-team-3 .qubely-single-img {\n  width: 50%;\n  float: left;\n  display: inline-block; }\n\n.qubely-team-3 .qubely-team-author-info {\n  padding: 70px 20px 70px 20px; }\n\n.qubely-team-author-info {\n  width: 50%;\n  display: inline-block; }\n\n.editor-styles-wrapper .qubely-team-2 {\n  line-height: 0; }\n\n.qubely-team-3 .qubely-team-author-info {\n  height: 230px;\n  background: #fafafa; }\n\n.qubely-team-carousel-item {\n  overflow: hidden; }\n\n.qubely-team-3 {\n  height: 230px;\n  overflow: hidden; }\n\n.qubely-block-team-carousel .qubely-image-placeholder {\n  width: 100%;\n  height: 230px;\n  transform: scale(1);\n  transition: .3s; }\n\n.qubely-team-1 .qubely-single-img img.qubely-team-avatar {\n  transition: .3s; }\n\n.qubely-team-1:hover .qubely-image-placeholder,\n.qubely-team-1:hover .qubely-single-img img.qubely-team-avatar {\n  transform: scale(1.1); }\n\n.qubely-single-img {\n  overflow: hidden; }\n\n.qubely-team-social-links {\n  font-size: 0; }\n  .qubely-team-social-links a {\n    display: inline-block;\n    text-decoration: none !important;\n    transition: color 300ms, background-color 300ms; }\n  .qubely-team-social-links.qubely-team-icon-layout-fill a {\n    padding: 10px; }\n    .qubely-team-social-links.qubely-team-icon-layout-fill a i {\n      width: 1em;\n      height: 1em;\n      display: block;\n      text-align: center; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-facebook {\n    color: #3b5998; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-facebook:hover {\n      color: #2f477c; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-twitter {\n    color: #1da1f2; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-twitter:hover {\n      color: #1a93df; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-instagram {\n    color: #e1306c; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-instagram:hover {\n      color: #c0275a; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-linkedin {\n    color: #0077b5; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-linkedin:hover {\n      color: #005f92; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-youtube {\n    color: #ff0000; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-youtube:hover {\n      color: #e40000; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-github {\n    color: #333; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-github:hover {\n      color: #181818; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-flickr {\n    color: #ff0084; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-flickr:hover {\n      color: #e60077; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-pinterest {\n    color: #bd081c; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-pinterest:hover {\n      color: #9c0718; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-dribbble {\n    color: #ea4c89; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-dribbble:hover {\n      color: #d3437a; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-behance {\n    color: #1769ff; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-behance:hover {\n      color: #135add; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill a {\n    color: #fff; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill a:hover {\n      color: #fff; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-facebook {\n    background-color: #3b5998; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-facebook:hover {\n      background-color: #2f477c; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-twitter {\n    background-color: #1da1f2; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-twitter:hover {\n      background-color: #1a93df; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-instagram {\n    background-color: #e1306c; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-instagram:hover {\n      background-color: #c0275a; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-linkedin {\n    background-color: #0077b5; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-linkedin:hover {\n      background-color: #005f92; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-youtube {\n    background-color: #ff0000; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-youtube:hover {\n      background-color: #e40000; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-github {\n    background-color: #333; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-github:hover {\n      background-color: #181818; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-flickr {\n    background-color: #ff0084; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-flickr:hover {\n      background-color: #e60077; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-pinterest {\n    background-color: #bd081c; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-pinterest:hover {\n      background-color: #9c0718; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-dribbble {\n    background-color: #ea4c89; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-dribbble:hover {\n      background-color: #d3437a; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-behance {\n    background-color: #1769ff; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-behance:hover {\n      background-color: #135add; }\n\n.social-share .qubely-team-social-links a {\n  margin-bottom: 8px;\n  display: inline-block; }\n\n.qubely-team-2 .qubely-team-author-info .layout-2 {\n  transform: translate(0%, 20%);\n  transition: .3s; }\n\n.qubely-team-2:hover .qubely-team-author-info .layout-2 {\n  transform: translate(0%, 0%); }\n\n.qubely-team-3 .qubely-single-img img {\n  min-height: 230px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/testimonialcarousel/style.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/testimonialcarousel/style.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-testimonial-carousel {\n  transition: all 400ms; }\n  .qubely-block-testimonial-carousel .editor-rich-text .editor-rich-text__tinymce {\n    line-height: inherit; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-quote .qubely-quote-icon {\n    line-height: 1;\n    width: auto;\n    height: auto; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-quote.qubely-position-bottom .qubely-quote-icon {\n    transform: scaleY(-1); }\n  .qubely-block-testimonial-carousel .qubely-single-img.qubely-backend .qubely-testimonial-avatar {\n    cursor: pointer; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-avatar {\n    display: inline; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-avatar.qubely-image-placeholder i {\n      font-size: 0.5em; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-left,\n  .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-right {\n    display: inline-flex;\n    align-items: center; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-left .qubely-testimonial-author-info,\n    .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-right .qubely-testimonial-author-info {\n      text-align: left; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-right .qubely-testimonial-author-info {\n    text-align: right; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-ratings {\n    unicode-bidi: bidi-override;\n    display: inline-block;\n    position: relative;\n    letter-spacing: 5px; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings:before, .qubely-block-testimonial-carousel .qubely-testimonial-ratings:after {\n      content: \"\\f005\\f005\\f005\\f005\\f005\";\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 400;\n      display: block;\n      white-space: nowrap; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings:before {\n      position: absolute;\n      z-index: 1;\n      left: 0px;\n      overflow: hidden;\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 900;\n      content: \"\\f005\\f005\\f005\\f005\\f005\"; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings:after {\n      z-index: 0; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"1\"]:before {\n      width: 20%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"1.5\"]:before {\n      width: 29%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"2\"]:before {\n      width: 40%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"2.5\"]:before {\n      width: 49%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"3\"]:before {\n      width: 60%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"3.5\"]:before {\n      width: 69%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"4\"]:before {\n      width: 80%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"4.5\"]:before {\n      width: 89%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"5\"]:before {\n      width: 100%; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-carousel-arrow-down {\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-top: 15px solid #d6d9dd; }\n\n.qubely-testimonial-carousel-content-wrapper {\n  position: relative; }\n\n.layout-3 .qubely-testimonial-carousel-content-wrapper {\n  padding: 20px;\n  border-radius: 10px;\n  background: #f4f4f4; }\n\n.layout-3 .qubely-testimonial-carousel-content-wrapper:before {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  transform: translate(-50%, 50%);\n  border-width: 15px;\n  z-index: 1;\n  border-color: #f4f4f4 transparent transparent transparent;\n  left: 50%;\n  bottom: -15px; }\n\n.layout-3 .qubely-testimonial-author {\n  margin-top: 40px;\n  text-align: center; }\n\n.layout-3 .qubely-testimonial-avatar {\n  margin-right: 0px; }\n\n.layout-3 .qubely-testimonial-avatar-layout-left .qubely-testimonial-author-info {\n  text-align: center; }\n\n.layout-1 .qubely-testimonial-avatar,\n.layout-2 .qubely-testimonial-avatar {\n  margin-right: 20px; }\n\n.qubely-carousel.qubely-carousel-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-extended-list,\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden; }\n\n.qubely-carousel-extended-outer-stage {\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s; }\n\n.qubely-carousel.qubely-carousel-wrapper .js-indicator {\n  position: absolute;\n  z-index: 9;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item {\n  position: relative;\n  float: left;\n  overflow: hidden; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item:hover .qubely-repeatable-action-remove {\n    display: block; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.active,\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.dragenable {\n  visibility: visible;\n  transform-style: preserve-3d; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.prev-item {\n  z-index: 1;\n  visibility: visible; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots,\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control {\n  height: 50px;\n  width: 100%;\n  margin-top: 5px;\n  z-index: 3; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots {\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control {\n  display: inline-block;\n  padding: 10px;\n  border: 1px solid #e2e2e2;\n  position: absolute;\n  cursor: pointer;\n  text-align: center;\n  bottom: 49%;\n  background: rgba(255, 255, 255, 0.4);\n  transition: .3s; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator {\n  width: 100%;\n  height: 100%; }\n\n.qubely-carousel-nav-control .nav-control .dashicons {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .next-control.nav-control.buttom,\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .prev-control.nav-control.buttom {\n  bottom: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control {\n  right: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control {\n  left: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul {\n  margin: 15px;\n  padding: 0;\n  list-style: none;\n  text-align: center; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {\n  display: inline-block;\n  height: 4px;\n  width: 30px;\n  margin: 5px;\n  border: 0;\n  background: #f4f4f4;\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active {\n  width: 55px; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator {\n  position: absolute;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear;\n  width: 0;\n  left: 0;\n  top: 0;\n  height: 4px;\n  border-radius: 2px; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator.active {\n  background: #2084f9;\n  width: 100%;\n  top: 0;\n  border-radius: 2px; }\n\n.qubely-tesitmonial-item.layout-3 .qubely-testimonial-avatar {\n  margin-right: 0; }\n\n.qubely-testimonial-carousel-content-wrapper {\n  position: relative; }\n\n.qubely-carousel {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.qubely-carousel .qubely-carousel-extended-list {\n  position: relative;\n  overflow: hidden; }\n\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s;\n  display: flex; }\n\n.qubely-carousel .js-indicator {\n  position: absolute;\n  z-index: 9;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear; }\n\n.qubely-carousel .qubely-carousel-item {\n  position: relative;\n  float: left;\n  /* overflow: hidden; */ }\n\n.qubely-carousel .qubely-carousel-item.active,\n.qubely-carousel .qubely-carousel-item.dragenable {\n  visibility: visible;\n  transform-style: preserve-3d; }\n\n.qubely-carousel .qubely-carousel-item.prev-item {\n  z-index: 1;\n  visibility: visible; }\n\n.qubely-carousel .qubely-carousel-extended-nav-control,\n.qubely-carousel .qubely-carousel-extended-dots {\n  position: relative;\n  height: 20px;\n  width: 100%;\n  margin-top: 5px;\n  z-index: 3; }\n\n.qubely-carousel .qubely-carousel-extended-nav-control .nav-control {\n  display: inline-block;\n  height: 40px;\n  width: 40px;\n  padding: 10px;\n  border: 1px solid #ababab;\n  position: absolute;\n  cursor: pointer;\n  text-align: center;\n  bottom: 100px;\n  background: rgba(255, 255, 255, 0.4); }\n\n.qubely-carousel .qubely-carousel-extended-nav-control .nav-control.next-control {\n  right: 0; }\n\n.qubely-carousel .qubely-carousel-extended-nav-control .nav-control.prev-control {\n  left: 0; }\n\n.qubely-carousel .qubely-carousel-extended-dots {\n  position: absolute;\n  bottom: 50px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.qubely-carousel .qubely-carousel-extended-dots ul {\n  margin: -4px;\n  padding: 0;\n  list-style: none;\n  text-align: center; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li {\n  display: inline-block;\n  height: 4px;\n  width: 30px;\n  margin: 5px;\n  border: 0;\n  background: rgba(218, 92, 92, 0.4);\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li.active {\n  width: 80px; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator {\n  position: absolute;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear;\n  width: 0;\n  left: 0;\n  top: 0;\n  height: 4px;\n  border-radius: 2px; }\n\n.qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator.active {\n  background: #ffffff;\n  width: 100%;\n  top: 0;\n  border-radius: 2px; }\n\n.qubely-carousel.qubely-carousel-wrapper.is-faded .qubely-carousel-extended-list .qubely-carousel-extended-outer-stage .qubely-carousel-item:not(.active) {\n  opacity: 0.1; }\n", ""]);



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

/***/ "./src/blocks/form/Edit.js":
/*!*********************************!*\
  !*** ./src/blocks/form/Edit.js ***!
  \*********************************/
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    RichText = _wp$editor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$qubelyComponents = wp.qubelyComponents,
    Styles = _wp$qubelyComponents.Styles,
    Wrapper = _wp$qubelyComponents.Wrapper,
    Range = _wp$qubelyComponents.Range,
    Toggle = _wp$qubelyComponents.Toggle,
    Typography = _wp$qubelyComponents.Typography,
    Color = _wp$qubelyComponents.Color,
    Tabs = _wp$qubelyComponents.Tabs,
    Tab = _wp$qubelyComponents.Tab,
    Border = _wp$qubelyComponents.Border,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    QubelyButtonEdit = _wp$qubelyComponents.QubelyButtonEdit,
    InlineToolbar = _wp$qubelyComponents.Inline.InlineToolbar,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator,
    buttonSettings = _wp$qubelyComponents.QubelyButton.buttonSettings,
    globalSettingsPanel = _wp$qubelyComponents.gloalSettings.globalSettingsPanel;


var itemTypes = [{ label: 'Text', value: 'text' }, { label: 'Email', value: 'email' }, { label: 'Radio', value: 'radio' }, { label: 'Checkbox', value: 'checkbox' }, { label: 'Textarea', value: 'textarea' }, { label: 'Dropdown', value: 'dropdown' }];

var Edit = function (_Component) {
    _inherits(Edit, _Component);

    function Edit(props) {
        _classCallCheck(this, Edit);

        var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

        _this.renderLabel = function (index, isRequired) {
            var formItems = _this.props.attributes.formItems;

            return React.createElement(
                'label',
                { className: 'qubely-form-label' },
                React.createElement(RichText, {
                    tagName: 'label',
                    className: 'qubely-form-field-label',
                    value: formItems[index].label,
                    onChange: function onChange(val) {
                        return _this.setSettings('label', val, index);
                    }
                }),
                isRequired && '*'
            );
        };

        _this.state = {
            spacer: true,
            selectedItem: -1,
            dropdownOpen: -1,
            newItemType: 'text',
            device: 'md'
        };
        _this.removeItem = _this.removeItem.bind(_this);
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
        key: 'setSettings',
        value: function setSettings(type, val) {
            var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

            var selectedItem = index !== -1 ? index : this.state.selectedItem;
            var _props2 = this.props,
                attributes = _props2.attributes,
                setAttributes = _props2.setAttributes;

            var formItems = [].concat(_toConsumableArray(attributes.formItems));
            formItems[selectedItem][type] = val;
            setAttributes({ formItems: formItems });
        }
    }, {
        key: 'setOptionSettings',
        value: function setOptionSettings(selectedItem, index, val) {
            var _props3 = this.props,
                attributes = _props3.attributes,
                setAttributes = _props3.setAttributes;

            var formItems = [].concat(_toConsumableArray(attributes.formItems));
            formItems[selectedItem].options[index] = val;
            setAttributes({ formItems: formItems });
        }
    }, {
        key: 'insertItem',
        value: function insertItem() {
            var newItemType = this.state.newItemType;
            var _props4 = this.props,
                attributes = _props4.attributes,
                setAttributes = _props4.setAttributes;

            var formItems = [].concat(_toConsumableArray(attributes.formItems));
            var newItem = { type: newItemType, label: 'Label', placeholder: '', width: { md: 100 }, required: true, hideLabel: false };
            if (newItemType == 'radio' || newItemType == 'checkbox' || newItemType == 'dropdown') {
                newItem.options = ['Option 1', 'Option 2'];
            }
            formItems.push(newItem);
            this.setState({ newItemWrapper: false });
            setAttributes({ formItems: formItems });
        }
    }, {
        key: 'insertOption',
        value: function insertOption(index) {
            var _props5 = this.props,
                attributes = _props5.attributes,
                setAttributes = _props5.setAttributes;

            var formItems = [].concat(_toConsumableArray(attributes.formItems));
            var activeItem = formItems[index];
            activeItem.options.push('Option ' + (activeItem.options.length + 1));
            formItems[index] = activeItem;
            setAttributes({ formItems: formItems });
        }
    }, {
        key: 'moveItem',
        value: function moveItem(index, moveTo) {
            var _props6 = this.props,
                attributes = _props6.attributes,
                setAttributes = _props6.setAttributes;

            var formItems = [].concat(_toConsumableArray(attributes.formItems));
            var moveIndex = moveTo == 'left' ? index - 1 : index + 1;
            var movableItem = formItems[index];
            formItems[index] = formItems[moveIndex];
            formItems[moveIndex] = movableItem;
            this.setState({ selectedItem: moveIndex });
            setAttributes({ formItems: formItems });
        }
    }, {
        key: 'cloneItem',
        value: function cloneItem(index) {
            var _props7 = this.props,
                attributes = _props7.attributes,
                setAttributes = _props7.setAttributes;

            var formItems = [].concat(_toConsumableArray(attributes.formItems));
            var clonedItem = JSON.parse(JSON.stringify(formItems[index]));
            formItems.splice(index + 1, 0, clonedItem);
            setAttributes({ formItems: formItems });
        }
    }, {
        key: 'removeItem',
        value: function removeItem(index) {
            var selectedItem = this.state.selectedItem;
            var _props8 = this.props,
                attributes = _props8.attributes,
                setAttributes = _props8.setAttributes;

            var formItems = [].concat(_toConsumableArray(attributes.formItems));
            formItems.splice(index, 1);
            setAttributes({ formItems: formItems });
            if (selectedItem == index) ;
            this.setState({ selectedItem: -1 });
        }
    }, {
        key: 'removeOption',
        value: function removeOption(item, option) {
            var _props9 = this.props,
                attributes = _props9.attributes,
                setAttributes = _props9.setAttributes;

            var formItems = [].concat(_toConsumableArray(attributes.formItems));
            formItems[item].options.splice(option, 1);
            setAttributes({ formItems: formItems });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props10 = this.props,
                attributes = _props10.attributes,
                setAttributes = _props10.setAttributes,
                _props10$attributes = _props10.attributes,
                uniqueId = _props10$attributes.uniqueId,
                layout = _props10$attributes.layout,
                formItems = _props10$attributes.formItems,
                labelTypography = _props10$attributes.labelTypography,
                labelColor = _props10$attributes.labelColor,
                labelColorFocus = _props10$attributes.labelColorFocus,
                inputTypography = _props10$attributes.inputTypography,
                inputColor = _props10$attributes.inputColor,
                inputColorFocus = _props10$attributes.inputColorFocus,
                inputColorHover = _props10$attributes.inputColorHover,
                inputBg = _props10$attributes.inputBg,
                inputBgFocus = _props10$attributes.inputBgFocus,
                inputBgHover = _props10$attributes.inputBgHover,
                inputBorder = _props10$attributes.inputBorder,
                inputBorderMaterial = _props10$attributes.inputBorderMaterial,
                inputBorderColorFocus = _props10$attributes.inputBorderColorFocus,
                inputBorderColorHover = _props10$attributes.inputBorderColorHover,
                inputCorner = _props10$attributes.inputCorner,
                inputCornerRadius = _props10$attributes.inputCornerRadius,
                inputSize = _props10$attributes.inputSize,
                inputPaddingX = _props10$attributes.inputPaddingX,
                inputPaddingY = _props10$attributes.inputPaddingY,
                textareaHeight = _props10$attributes.textareaHeight,
                placeholderColor = _props10$attributes.placeholderColor,
                placeholderColorFocus = _props10$attributes.placeholderColorFocus,
                placeholderColorHover = _props10$attributes.placeholderColorHover,
                enableButton = _props10$attributes.enableButton,
                buttonTag = _props10$attributes.buttonTag,
                buttonSize = _props10$attributes.buttonSize,
                buttonFillType = _props10$attributes.buttonFillType,
                buttonText = _props10$attributes.buttonText,
                buttonIconName = _props10$attributes.buttonIconName,
                buttonIconPosition = _props10$attributes.buttonIconPosition,
                spacing = _props10$attributes.spacing,
                gutter = _props10$attributes.gutter,
                fieldErrorMessage = _props10$attributes.fieldErrorMessage,
                formSuccessMessage = _props10$attributes.formSuccessMessage,
                formErrorMessage = _props10$attributes.formErrorMessage,
                reCaptcha = _props10$attributes.reCaptcha,
                reCaptchaSiteKey = _props10$attributes.reCaptchaSiteKey,
                reCaptchaSecretKey = _props10$attributes.reCaptchaSecretKey,
                policyCheckbox = _props10$attributes.policyCheckbox,
                policyCheckboxText = _props10$attributes.policyCheckboxText,
                emailReceiver = _props10$attributes.emailReceiver,
                emailHeaders = _props10$attributes.emailHeaders,
                emailFrom = _props10$attributes.emailFrom,
                emailSubject = _props10$attributes.emailSubject,
                emailBody = _props10$attributes.emailBody,
                globalZindex = _props10$attributes.globalZindex,
                hideTablet = _props10$attributes.hideTablet,
                hideMobile = _props10$attributes.hideMobile,
                globalCss = _props10$attributes.globalCss;
            var _state = this.state,
                device = _state.device,
                selectedItem = _state.selectedItem,
                dropdownOpen = _state.dropdownOpen;


            if (uniqueId) {
                CssGenerator(attributes, 'form', uniqueId);
            }

            return React.createElement(
                Fragment,
                null,
                React.createElement(
                    InspectorControls,
                    { key: 'inspector' },
                    React.createElement(
                        PanelBody,
                        { title: __(''), opened: true },
                        React.createElement(Styles, {
                            value: layout,
                            onChange: function onChange(val) {
                                return setAttributes({ layout: val });
                            },
                            options: [{ value: 'classic', img: _icons2.default.form_classic, label: __('Classic') }, { value: 'material', img: _icons2.default.form_material, label: __('Material') }]
                        })
                    ),
                    selectedItem >= 0 && React.createElement(
                        PanelBody,
                        { title: formItems[selectedItem].label ? formItems[selectedItem].label : __('Input Settings') },
                        React.createElement(TextControl, {
                            label: __('Label'),
                            value: formItems[selectedItem].label,
                            onChange: function onChange(val) {
                                return _this2.setSettings('label', val);
                            },
                            placeholder: __('Enter Label')
                        }),
                        React.createElement(TextControl, {
                            label: __('Name'),
                            value: formItems[selectedItem].name,
                            onChange: function onChange(val) {
                                return _this2.setSettings('name', val);
                            },
                            placeholder: __('Enter Name'),
                            help: __('You must write field name with hyphen(-) with lowercase. No space, UPPERCASE, Capitalize is not allowed. This name should match with Form template value. Never keep empty this name.')
                        }),
                        formItems[selectedItem].type == 'checkbox' || formItems[selectedItem].type == 'radio' ? '' : React.createElement(TextControl, {
                            label: __('Placeholder'),
                            value: formItems[selectedItem].placeholder,
                            onChange: function onChange(val) {
                                return _this2.setSettings('placeholder', val);
                            },
                            placeholder: __('Enter Placeholder')
                        }),
                        React.createElement(Range, {
                            label: __('Width'),
                            value: formItems[selectedItem].width,
                            onChange: function onChange(val) {
                                return _this2.setSettings('width', val);
                            },
                            max: 100,
                            min: 33,
                            responsive: true
                        }),
                        React.createElement(Toggle, {
                            label: __('Required'),
                            value: formItems[selectedItem].required,
                            onChange: function onChange(val) {
                                return _this2.setSettings('required', val);
                            }
                        }),
                        layout == 'classic' && React.createElement(Toggle, {
                            label: __('Hide Label'),
                            value: formItems[selectedItem].hideLabel,
                            onChange: function onChange(val) {
                                return _this2.setSettings('hideLabel', val);
                            }
                        })
                    ),
                    React.createElement(
                        PanelBody,
                        { title: __('Label'), initialOpen: false },
                        React.createElement(Typography, {
                            value: labelTypography,
                            onChange: function onChange(val) {
                                return setAttributes({ labelTypography: val });
                            }
                        }),
                        React.createElement(Color, {
                            label: __('Color'),
                            value: labelColor,
                            onChange: function onChange(val) {
                                return setAttributes({ labelColor: val });
                            }
                        }),
                        layout == 'material' && React.createElement(Color, {
                            label: __('Focus Color'),
                            value: labelColorFocus,
                            onChange: function onChange(val) {
                                return setAttributes({ labelColorFocus: val });
                            }
                        })
                    ),
                    React.createElement(
                        PanelBody,
                        { title: __('Input'), initialOpen: false },
                        React.createElement(
                            Wrapper,
                            { label: __('Size') },
                            React.createElement(RadioAdvanced, {
                                label: __('Input Size'),
                                options: [{ label: 'S', value: 'small', title: 'Small' }, { label: 'M', value: 'medium', title: 'Medium' }, { label: 'L', value: 'large', title: 'Large' }, { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }],
                                value: inputSize,
                                onChange: function onChange(value) {
                                    return setAttributes({ inputSize: value });
                                } }),
                            inputSize == 'custom' && React.createElement(
                                Fragment,
                                null,
                                React.createElement(Range, {
                                    label: React.createElement('span', { className: 'dashicons dashicons-sort', title: 'Padding Y' }),
                                    value: inputPaddingY,
                                    onChange: function onChange(value) {
                                        return setAttributes({ inputPaddingY: value });
                                    },
                                    unit: ['px', 'em', '%'],
                                    min: 0,
                                    max: 50,
                                    responsive: true
                                }),
                                layout == 'classic' && React.createElement(Range, {
                                    label: React.createElement('span', { className: 'dashicons dashicons-leftright', title: 'X Padding' }),
                                    value: inputPaddingX,
                                    onChange: function onChange(value) {
                                        return setAttributes({ inputPaddingX: value });
                                    },
                                    unit: ['px', 'em', '%'],
                                    min: 0,
                                    max: 50,
                                    responsive: true
                                })
                            ),
                            React.createElement(Range, {
                                label: __('Textarea Height'),
                                value: textareaHeight,
                                onChange: function onChange(value) {
                                    return setAttributes({ textareaHeight: value });
                                },
                                unit: ['px', 'em', '%'],
                                min: 100,
                                max: 500,
                                responsive: true
                            }),
                            React.createElement(Range, {
                                label: __('Spacing'),
                                value: spacing,
                                onChange: function onChange(value) {
                                    return setAttributes({ spacing: value });
                                },
                                unit: ['px', 'em', '%'],
                                min: 0,
                                max: 60,
                                responsive: true
                            }),
                            React.createElement(Range, {
                                label: __('Gutter'),
                                value: gutter,
                                onChange: function onChange(value) {
                                    return setAttributes({ gutter: value });
                                },
                                unit: ['px', 'em', '%'],
                                min: 0,
                                max: 60,
                                responsive: true
                            })
                        ),
                        React.createElement(
                            Tabs,
                            null,
                            React.createElement(
                                Tab,
                                { tabTitle: __('Normal') },
                                React.createElement(Color, { label: __('Color'), value: inputColor, onChange: function onChange(val) {
                                        return setAttributes({ inputColor: val });
                                    } }),
                                React.createElement(Color, { label: __('Background Color'), value: inputBg, onChange: function onChange(val) {
                                        return setAttributes({ inputBg: val });
                                    } }),
                                layout == 'classic' && React.createElement(Border, { label: __('Border'), value: inputBorder, onChange: function onChange(val) {
                                        return setAttributes({ inputBorder: val });
                                    }, min: 0, max: 10 }),
                                layout == 'material' && React.createElement(Border, { label: __('Border'), value: inputBorderMaterial, onChange: function onChange(val) {
                                        return setAttributes({ inputBorderMaterial: val });
                                    }, min: 0, max: 10 }),
                                React.createElement(Color, { label: __('Placeholder Color'), value: placeholderColor, onChange: function onChange(val) {
                                        return setAttributes({ placeholderColor: val });
                                    } })
                            ),
                            React.createElement(
                                Tab,
                                { tabTitle: __('Focus') },
                                React.createElement(Color, { label: __('Color'), value: inputColorFocus, onChange: function onChange(val) {
                                        return setAttributes({ inputColorFocus: val });
                                    } }),
                                React.createElement(Color, { label: __('Background Color'), value: inputBgFocus, onChange: function onChange(val) {
                                        return setAttributes({ inputBgFocus: val });
                                    } }),
                                React.createElement(Color, { label: __('Border Color'), value: inputBorderColorFocus, onChange: function onChange(value) {
                                        return setAttributes({ inputBorderColorFocus: value });
                                    } }),
                                React.createElement(Color, { label: __('Placeholder Color'), value: placeholderColorFocus, onChange: function onChange(val) {
                                        return setAttributes({ placeholderColorFocus: val });
                                    } })
                            ),
                            React.createElement(
                                Tab,
                                { tabTitle: __('Hover') },
                                React.createElement(Color, { label: __('Color'), value: inputColorHover, onChange: function onChange(val) {
                                        return setAttributes({ inputColorHover: val });
                                    } }),
                                React.createElement(Color, { label: __('Background Color'), value: inputBgHover, onChange: function onChange(val) {
                                        return setAttributes({ inputBgHover: val });
                                    } }),
                                React.createElement(Color, { label: __('Border Color'), value: inputBorderColorHover, onChange: function onChange(value) {
                                        return setAttributes({ inputBorderColorHover: value });
                                    } }),
                                React.createElement(Color, { label: __('Placeholder Color'), value: placeholderColorHover, onChange: function onChange(val) {
                                        return setAttributes({ placeholderColorHover: val });
                                    } })
                            )
                        ),
                        React.createElement(RadioAdvanced, {
                            label: __('Corner'),
                            options: [{ svg: _icons2.default.corner_square, value: '0px', title: __('Square') }, { svg: _icons2.default.corner_rounded, value: '4px', title: __('Rounded') }, { svg: _icons2.default.corner_round, value: '50px', title: __('Round') }, { icon: 'fas fa-cog', value: 'custom', title: __('Custom') }],
                            value: inputCorner,
                            onChange: function onChange(val) {
                                return setAttributes({ inputCorner: val });
                            }
                        }),
                        inputCorner == 'custom' && React.createElement(Range, {
                            label: __('Corner Radius'),
                            value: inputCornerRadius,
                            onChange: function onChange(value) {
                                return setAttributes({ inputCornerRadius: value });
                            },
                            min: 0,
                            max: 100, unit: ['px', 'em', '%'],
                            responsive: true
                        }),
                        React.createElement(Typography, { value: inputTypography, onChange: function onChange(val) {
                                return setAttributes({ inputTypography: val });
                            } })
                    ),
                    React.createElement(
                        PanelBody,
                        { title: __('Settings'), initialOpen: false },
                        React.createElement(
                            Tabs,
                            null,
                            React.createElement(
                                Tab,
                                { tabTitle: __('Form') },
                                React.createElement(TextControl, {
                                    label: __('Required Field Error Message'),
                                    value: fieldErrorMessage,
                                    onChange: function onChange(val) {
                                        return setAttributes({ fieldErrorMessage: val });
                                    }
                                }),
                                React.createElement(TextareaControl, {
                                    label: __('Form Submit Success Message'),
                                    value: formSuccessMessage,
                                    onChange: function onChange(val) {
                                        return setAttributes({ formSuccessMessage: val });
                                    },
                                    help: __('Set your desired message after successful form submission. Leave blank for default.')
                                }),
                                React.createElement(TextareaControl, {
                                    label: __('Form Submit Failed Message'),
                                    value: formErrorMessage,
                                    onChange: function onChange(val) {
                                        return setAttributes({ formErrorMessage: val });
                                    },
                                    help: __('Set your desired message for form submission error. Leave blank for default.')
                                }),
                                React.createElement(Toggle, { label: __('Enable Captcha'), value: reCaptcha, onChange: function onChange(val) {
                                        return setAttributes({ reCaptcha: val });
                                    } }),
                                reCaptcha && React.createElement(
                                    'div',
                                    null,
                                    React.createElement(TextControl, {
                                        label: __('Site Key '),
                                        value: reCaptchaSiteKey,
                                        onChange: function onChange(val) {
                                            return setAttributes({ reCaptchaSiteKey: val });
                                        },
                                        placeholder: __('Enter Google Site Key')
                                    }),
                                    React.createElement(TextControl, {
                                        label: __('Secret Key '),
                                        value: reCaptchaSecretKey,
                                        onChange: function onChange(val) {
                                            return setAttributes({ reCaptchaSecretKey: val });
                                        },
                                        placeholder: __('Enter Google Secret Key')
                                    })
                                ),
                                React.createElement(Toggle, { label: __('Enable Policy Checkbox'), value: policyCheckbox, onChange: function onChange(val) {
                                        return setAttributes({ policyCheckbox: val });
                                    } })
                            ),
                            React.createElement(
                                Tab,
                                { tabTitle: __('Email') },
                                React.createElement(TextControl, {
                                    label: __('Recipient Email'),
                                    value: emailReceiver,
                                    onChange: function onChange(val) {
                                        return setAttributes({ emailReceiver: val });
                                    },
                                    placeholder: __('Enter Recipient Email'),
                                    help: __('Enter the recipient email address. This field is mandatory. Without a recipient email, contact form will not work.')
                                }),
                                React.createElement(TextareaControl, {
                                    label: __('Email Headers'),
                                    value: emailHeaders,
                                    onChange: function onChange(val) {
                                        return setAttributes({ emailHeaders: val });
                                    }
                                }),
                                React.createElement(TextControl, {
                                    label: __('From Email'),
                                    value: emailFrom,
                                    onChange: function onChange(val) {
                                        return setAttributes({ emailFrom: val });
                                    },
                                    placeholder: __('Your Name: admin@example.com')
                                }),
                                React.createElement(TextControl, {
                                    label: __('Subject'),
                                    value: emailSubject,
                                    onChange: function onChange(val) {
                                        return setAttributes({ emailSubject: val });
                                    },
                                    placeholder: __('Enter Subject')
                                }),
                                React.createElement(TextareaControl, {
                                    label: __('Email Body'),
                                    value: emailBody,
                                    onChange: function onChange(val) {
                                        return setAttributes({ emailBody: val });
                                    },
                                    help: __("Set your form email body here. In editor don't add any CSS style or others option just add your form field name between double curly braces {{field-name}} as you set in 'Field Name'.")
                                })
                            )
                        )
                    ),
                    buttonSettings(this.props.attributes, device, setAttributes, function (key, value) {
                        _this2.setState(_defineProperty({}, key, value));
                    })
                ),
                React.createElement(
                    BlockControls,
                    null,
                    React.createElement(
                        Toolbar,
                        null,
                        React.createElement(InlineToolbar, _extends({
                            data: [{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]
                        }, this.props, {
                            prevState: this.state
                        }))
                    )
                ),
                globalSettingsPanel(globalZindex, hideTablet, hideMobile, globalCss, setAttributes),
                React.createElement(
                    'div',
                    { className: 'qubely-block-' + uniqueId },
                    React.createElement(
                        'div',
                        { className: 'qubely-block-form qubely-layout-' + layout },
                        React.createElement(
                            'form',
                            { className: 'qubely-form' },
                            formItems.map(function (item, index) {
                                return React.createElement(
                                    'div',
                                    { key: index, className: 'qubely-form-group qubely-form-group-index-' + index + ' ' + (selectedItem == index ? 'qubely-form-group-active' : ''), style: { width: item.width.md + '%' }, onClick: function onClick() {
                                            return _this2.setState({ selectedItem: index });
                                        } },
                                    React.createElement(
                                        'div',
                                        { className: 'qubely-form-group-inner' },
                                        !item.hideLabel && layout == 'classic' && _this2.renderLabel(index, item.required),
                                        (item.type == 'text' || item.type == 'email') && React.createElement('input', { className: 'qubely-form-control is-' + inputSize, type: item.type, placeholder: __(item.placeholder), required: item.required, disabled: true }),
                                        (item.type == 'radio' || item.type == 'checkbox') && React.createElement(
                                            'div',
                                            null,
                                            item.options && item.options.map(function (option, i) {
                                                return React.createElement(
                                                    'div',
                                                    { className: 'qubely-radio-control' },
                                                    React.createElement('input', { type: item.type, name: 'option' + index, value: option }),
                                                    React.createElement(
                                                        'label',
                                                        { contenteditable: 'true', onBlur: function onBlur(e) {
                                                                return _this2.setOptionSettings(index, i, e.target.innerText);
                                                            } },
                                                        ' ',
                                                        option,
                                                        ' '
                                                    ),
                                                    React.createElement(
                                                        'span',
                                                        { className: 'qubely-form-option-remove', onClick: function onClick(e) {
                                                                _this2.removeOption(index, i);
                                                            } },
                                                        React.createElement('i', { className: 'fa fa-times' })
                                                    )
                                                );
                                            }),
                                            selectedItem >= 0 && selectedItem == index && React.createElement(
                                                'span',
                                                { onClick: function onClick() {
                                                        return _this2.insertOption(index);
                                                    } },
                                                React.createElement('i', { className: 'fa fa-plus' })
                                            )
                                        ),
                                        item.type == 'textarea' && React.createElement('textarea', { className: 'qubely-form-control', placeholder: __(item.placeholder), required: item.required, disabled: true }),
                                        item.type == 'dropdown' && React.createElement(
                                            'div',
                                            { 'class': 'qubely-dropdown-control' },
                                            React.createElement('input', { type: 'text', onClick: function onClick(e) {
                                                    e.stopPropagation();_this2.setState({ dropdownOpen: dropdownOpen == index ? -1 : index });
                                                } }),
                                            dropdownOpen == index && React.createElement(
                                                'ul',
                                                { 'class': 'qubely-dropdown-content' },
                                                item.options && item.options.map(function (option, i) {
                                                    return React.createElement(
                                                        'li',
                                                        null,
                                                        React.createElement(
                                                            'span',
                                                            { contenteditable: 'true', onBlur: function onBlur(e) {
                                                                    return _this2.setOptionSettings(index, i, e.target.innerText);
                                                                } },
                                                            option
                                                        ),
                                                        React.createElement('i', { className: 'fa fa-times', onClick: function onClick(e) {
                                                                _this2.removeOption(index, i);
                                                            } })
                                                    );
                                                }),
                                                React.createElement(
                                                    'span',
                                                    { onClick: function onClick() {
                                                            return _this2.insertOption(index);
                                                        } },
                                                    React.createElement('i', { className: 'fa fa-plus' })
                                                )
                                            )
                                        ),
                                        !item.hideLabel && layout == 'material' && _this2.renderLabel(index, item.required)
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'qubely-form-group-option' },
                                        React.createElement(
                                            'span',
                                            { onClick: function onClick(e) {
                                                    e.stopPropagation();_this2.moveItem(index, 'left');
                                                }, className: index == 0 && 'qubely-option-disable' },
                                            React.createElement('i', { 'class': 'fa fa-long-arrow-alt-up' })
                                        ),
                                        React.createElement(
                                            'span',
                                            { onClick: function onClick(e) {
                                                    e.stopPropagation();_this2.moveItem(index, 'right');
                                                }, className: index == formItems.length - 1 && 'qubely-option-disable' },
                                            React.createElement('i', { 'class': 'fa fa-long-arrow-alt-down' })
                                        ),
                                        React.createElement(
                                            'span',
                                            { onClick: function onClick(e) {
                                                    e.stopPropagation();_this2.cloneItem(index);
                                                } },
                                            React.createElement('i', { 'class': 'fa fa-copy' })
                                        ),
                                        React.createElement(
                                            'span',
                                            { onClick: function onClick(e) {
                                                    e.stopPropagation();_this2.removeItem(index);
                                                } },
                                            React.createElement('i', { 'class': 'fa fa-times-circle' })
                                        )
                                    )
                                );
                            }),
                            policyCheckbox && React.createElement(
                                'div',
                                { className: 'qubely-form-group', style: { width: '100%' } },
                                React.createElement('input', { className: '', type: 'checkbox', name: 'policy', id: 'qubely-form-policy-checkbox', value: 'Yes' }),
                                React.createElement(RichText, {
                                    tagName: 'label',
                                    className: '',
                                    value: policyCheckboxText,
                                    onChange: function onChange(val) {
                                        return setAttributes({ policyCheckboxText: val });
                                    }
                                })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'qubely-accordion-add-item' },
                            React.createElement(SelectControl, {
                                label: '',
                                value: this.state.newItemType,
                                options: itemTypes,
                                onChange: function onChange(val) {
                                    return _this2.setState({ newItemType: val });
                                }
                            }),
                            React.createElement(
                                IconButton,
                                {
                                    icon: 'insert',
                                    onClick: function onClick() {
                                        return _this2.insertItem();
                                    } },
                                __('Add New Item')
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'qubely-form-group qubely-form-button' },
                            React.createElement(QubelyButtonEdit, {
                                enableButton: enableButton,
                                buttonFillType: buttonFillType,
                                buttonSize: buttonSize,
                                buttonText: buttonText,
                                buttonIconName: buttonIconName,
                                buttonIconPosition: buttonIconPosition,
                                buttonTag: buttonTag,
                                onTextChange: function onTextChange(value) {
                                    return setAttributes({ buttonText: value });
                                }
                            })
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

/***/ "./src/blocks/form/Save.js":
/*!*********************************!*\
  !*** ./src/blocks/form/Save.js ***!
  \*********************************/
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

var __ = wp.i18n.__;
var Component = wp.element.Component;
var RichText = wp.editor.RichText;
var _wp$qubelyComponents = wp.qubelyComponents,
    QubelyButtonSave = _wp$qubelyComponents.QubelyButtonSave,
    animationAttr = _wp$qubelyComponents.HelperFunction.animationAttr;

var Save = function (_Component) {
    _inherits(Save, _Component);

    function Save() {
        _classCallCheck(this, Save);

        return _possibleConstructorReturn(this, (Save.__proto__ || Object.getPrototypeOf(Save)).apply(this, arguments));
    }

    _createClass(Save, [{
        key: '_encrypt',
        value: function _encrypt(str) {
            return window.btoa(str);
        }
    }, {
        key: '_renderField',
        value: function _renderField(item, index, inputSize) {
            var fieldID = 'qubely-form-input-' + index;
            var fieldName = 'qubely-form-input[' + item.name + (item.required ? '*' : '') + ']';
            var fieldClass = 'qubely-form-control is-' + inputSize;
            switch (item.type) {
                case 'text':
                case 'email':
                    return React.createElement('input', { id: fieldID, name: fieldName, className: fieldClass, type: item.type, placeholder: __(item.placeholder), required: item.required });
                case 'textarea':
                    return React.createElement('textarea', { id: fieldID, name: fieldName, className: fieldClass, placeholder: __(item.placeholder), required: item.required });
                case 'dropdown':
                    return React.createElement(
                        'div',
                        { 'class': 'qubely-dropdown-control' },
                        React.createElement(
                            'select',
                            { id: fieldID, name: fieldName, required: item.required },
                            item.placeholder && React.createElement(
                                'option',
                                { value: '' },
                                __(item.placeholder)
                            ),
                            item.options && item.options.map(function (option, i) {
                                return React.createElement(
                                    'option',
                                    { value: option },
                                    __(option)
                                );
                            })
                        )
                    );
                case 'radio':
                case 'checkbox':
                    return React.createElement(
                        'div',
                        { className: 'qubely-form-group-radio', 'data-required': item.required ? 'true' : '' },
                        item.options && item.options.map(function (option, i) {
                            return React.createElement(
                                'div',
                                { className: 'qubely-radio-control' },
                                React.createElement('input', { id: 'qubely-form-input-' + index + '-' + i, type: item.type, name: item.type == 'checkbox' ? fieldName + '[' + i + ']' : fieldName, value: option }),
                                React.createElement(
                                    'label',
                                    { 'for': 'qubely-form-input-' + index + '-' + i },
                                    __(option)
                                )
                            );
                        })
                    );
                default:
                    return '';
            }
        }
    }, {
        key: '_renderFormGroupCss',
        value: function _renderFormGroupCss() {
            var formItems = this.props.attributes.formItems;

            var formGroupCss = '';
            formItems.forEach(function (item, index) {
                formGroupCss += (item.width.md ? '.qubely-form-group.qubely-form-group-index-' + index + ' { width: ' + item.width.md + '% }' : '') + '\n                ' + (item.width.sm ? '@media (max-width: 991px) { .qubely-form-group.qubely-form-group-index-' + index + ' { width: ' + item.width.sm + '% } }' : '') + '\n                ' + (item.width.xs ? '@media (max-width: 767px) { .qubely-form-group.qubely-form-group-index-' + index + ' { width: ' + item.width.xs + '% } }' : '');
            });
            return formGroupCss;
        }
    }, {
        key: 'render',
        value: function render() {
            var _encrypt = this._encrypt,
                _renderField = this._renderField;
            var _props$attributes = this.props.attributes,
                uniqueId = _props$attributes.uniqueId,
                formItems = _props$attributes.formItems,
                inputSize = _props$attributes.inputSize,
                fieldErrorMessage = _props$attributes.fieldErrorMessage,
                formSuccessMessage = _props$attributes.formSuccessMessage,
                formErrorMessage = _props$attributes.formErrorMessage,
                reCaptcha = _props$attributes.reCaptcha,
                reCaptchaSiteKey = _props$attributes.reCaptchaSiteKey,
                reCaptchaSecretKey = _props$attributes.reCaptchaSecretKey,
                policyCheckbox = _props$attributes.policyCheckbox,
                policyCheckboxText = _props$attributes.policyCheckboxText,
                emailReceiver = _props$attributes.emailReceiver,
                emailHeaders = _props$attributes.emailHeaders,
                emailFrom = _props$attributes.emailFrom,
                emailSubject = _props$attributes.emailSubject,
                emailBody = _props$attributes.emailBody,
                layout = _props$attributes.layout,
                buttonFillType = _props$attributes.buttonFillType,
                buttonSize = _props$attributes.buttonSize,
                buttonText = _props$attributes.buttonText,
                buttonIconName = _props$attributes.buttonIconName,
                buttonIconPosition = _props$attributes.buttonIconPosition,
                buttonTag = _props$attributes.buttonTag,
                animation = _props$attributes.animation;

            return React.createElement(
                'div',
                _extends({ className: 'qubely-block-' + uniqueId }, animationAttr(animation)),
                React.createElement(
                    'style',
                    null,
                    this._renderFormGroupCss()
                ),
                React.createElement(
                    'div',
                    { className: 'qubely-block-form qubely-layout-' + layout },
                    React.createElement(
                        'form',
                        { className: 'qubely-form' },
                        formItems.map(function (item, index) {
                            return React.createElement(
                                'div',
                                { key: index, className: 'qubely-form-group qubely-form-group-index-' + index },
                                React.createElement(
                                    'div',
                                    { className: 'qubely-form-group-inner' },
                                    !item.hideLabel && layout == 'classic' && React.createElement(
                                        'label',
                                        { 'for': 'qubely-form-input-' + index, className: 'qubely-form-label' },
                                        ' ',
                                        __(item.label),
                                        ' ',
                                        item.required && '*'
                                    ),
                                    _renderField(item, index, inputSize),
                                    layout == 'material' && React.createElement(
                                        'label',
                                        { className: 'qubely-form-label' },
                                        ' ',
                                        __(item.label),
                                        ' ',
                                        item.required && '*'
                                    )
                                )
                            );
                        }),
                        reCaptcha && React.createElement(
                            'div',
                            { className: 'qubely-form-group' },
                            React.createElement('div', { className: 'qubely-google-recaptcha' })
                        ),
                        policyCheckbox && React.createElement(
                            'div',
                            { className: 'qubely-form-group', style: { width: '100%' } },
                            React.createElement('input', { className: '', type: 'checkbox', name: 'qubely-form-has-policy', id: 'qubely-form-policy-checkbox', value: 'Yes', required: true }),
                            React.createElement(
                                'label',
                                { 'for': 'qubely-form-policy-checkbox' },
                                React.createElement(RichText.Content, { value: policyCheckboxText })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'qubely-form-group', style: { width: '100%' } },
                            React.createElement(QubelyButtonSave, {
                                buttonFillType: buttonFillType,
                                buttonSize: buttonSize,
                                buttonText: buttonText,
                                buttonIconName: buttonIconName,
                                buttonIconPosition: buttonIconPosition,
                                buttonTag: buttonTag
                            }),
                            React.createElement('input', { type: 'hidden', name: 'field-error-message', value: _encrypt(fieldErrorMessage) }),
                            React.createElement('input', { type: 'hidden', name: 'form-success-message', value: _encrypt(formSuccessMessage) }),
                            React.createElement('input', { type: 'hidden', name: 'form-error-message', value: _encrypt(formErrorMessage) }),
                            React.createElement('input', { type: 'hidden', name: 'recaptcha', value: reCaptcha ? 'true' : 'false' }),
                            React.createElement('input', { type: 'hidden', name: 'recaptcha-site-key', value: reCaptchaSiteKey }),
                            React.createElement('input', { type: 'hidden', name: 'recaptcha-secret-key', value: reCaptchaSecretKey }),
                            React.createElement('input', { type: 'hidden', name: 'email-receiver', value: _encrypt(emailReceiver) }),
                            React.createElement('input', { type: 'hidden', name: 'email-headers', value: _encrypt(emailHeaders) }),
                            React.createElement('input', { type: 'hidden', name: 'email-from', value: _encrypt(emailFrom) }),
                            React.createElement('input', { type: 'hidden', name: 'email-subject', value: _encrypt(emailSubject) }),
                            React.createElement('input', { type: 'hidden', name: 'email-body', value: _encrypt(emailBody) })
                        ),
                        React.createElement(
                            'div',
                            { className: 'qubely-form-group' },
                            React.createElement(
                                'div',
                                { className: 'qubely-form-group-inner' },
                                React.createElement('div', { className: 'qubely-form-message' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Save;
}(Component);

exports.default = Save;

/***/ }),

/***/ "./src/blocks/form/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/form/editor.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/editor.scss");

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

/***/ "./src/blocks/form/index.js":
/*!**********************************!*\
  !*** ./src/blocks/form/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! ./editor.scss */ "./src/blocks/form/editor.scss");

__webpack_require__(/*! ./style.scss */ "./src/blocks/form/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/form/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/form/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$qubelyComponents = wp.qubelyComponents,
    globalAttributes = _wp$qubelyComponents.gloalSettings.globalAttributes,
    buttonAttributes = _wp$qubelyComponents.QubelyButton.buttonAttributes;


var defaultFormItems = [{ type: 'text', label: 'First Name', name: 'first-name', placeholder: 'First Name', width: { md: 50 }, required: true, hideLabel: false }, { type: 'text', label: 'Last Name', name: 'last-name', placeholder: 'Last Name', width: { md: 50 }, required: true, hideLabel: false }, { type: 'email', label: 'Email', name: 'email', placeholder: 'Email', width: { md: 50 }, required: true, hideLabel: false }, { type: 'text', label: 'Subject', name: 'subject', placeholder: 'Subject', width: { md: 50 }, required: true, hideLabel: false }, { type: 'textarea', label: 'Message', name: 'message', placeholder: 'Message', width: { md: 100 }, required: true, hideLabel: false }];

registerBlockType('qubely/form', {
    title: __('Form'),
    category: 'qubely',
    icon: React.createElement('img', { src: qubely_admin.plugin + 'assets/img/blocks/block-form.svg', alt: __('Form') }),
    description: 'Create functional Form using this block.',
    keywords: [__('Form')],
    supports: { align: ['full'] },
    attributes: _extends({
        uniqueId: { type: 'string', default: '' }
    }, globalAttributes, buttonAttributes, (_extends2 = {
        enableButtonAlignment: { type: 'boolean', default: true },
        layout: { type: 'string', default: 'classic' },
        useDefaultStyle: { type: 'boolean', default: true },
        spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },
        buttonComponent: { type: 'boolean', default: true },
        enableButton: { type: 'boolean', default: true },
        buttonTag: { type: 'string', default: 'button' },
        buttonText: { type: 'string', default: 'Submit' },
        formItems: { type: 'array', default: defaultFormItems },
        showPlaceholder: { type: 'boolean', default: true },

        spacing: {
            type: 'object', default: { md: 30, unit: 'px' },
            style: [{
                selector: '{{QUBELY}} .qubely-form .qubely-form-group:not(:last-child) {margin-bottom: {{spacing}};}'
            }]
        },

        gutter: {
            type: 'object', default: { md: 30, unit: 'px' },
            style: [{
                selector: '{{QUBELY}} .qubely-form {margin: 0 calc(-{{gutter}}/2);} {{QUBELY}} .qubely-form .qubely-form-group {padding: 0 calc({{gutter}}/2);}'
            }]
        },

        labelTypography: {
            type: 'obejct', default: { openTypography: 1, size: { md: 16, unit: 'px' } },
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'classic' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-label'
            }, {
                condition: [{ key: 'layout', relation: '==', value: 'material' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-label'
            }]
        },

        labelColor: {
            type: 'string', default: "",
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'classic' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-label {color: {{labelColor}};}'
            }, {
                condition: [{ key: 'layout', relation: '==', value: 'material' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-label {color: {{labelColor}};}'
            }]
        },

        labelColorFocus: {
            type: 'string', default: "",
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'material' }],
                selector: '{{QUBELY}} .qubely-form-control:focus ~ .qubely-form-label, {{QUBELY}} .qubely-form-control:valid ~ .qubely-form-label {color: {{labelColorFocus}};}'
            }]
        },

        inputTypography: {
            type: 'obejct', default: { openTypography: 1, size: { md: 14, unit: 'px' } },
            style: [{
                selector: '{{QUBELY}} .qubely-form .qubely-form-control, {{QUBELY}} .qubely-form .qubely-form-control::placeholder'
            }]
        },

        inputColor: { type: 'string', default: "#495057", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-control {color: {{inputColor}};}' }] },
        inputColorHover: { type: 'string', default: "#495057", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-control:Hover {color: {{inputColorHover}};}' }] },
        inputColorFocus: { type: 'string', default: "#495057", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-control:focus {color: {{inputColorFocus}};}' }] },

        placeholderColor: { type: 'string', default: "#818181", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-control::placeholder {color: {{placeholderColor}};}' }] },
        placeholderColorHover: { type: 'string', default: "", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-control::placeholder:Hover {color: {{placeholderColorHover}};}' }] },
        placeholderColorFocus: { type: 'string', default: "", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-control::placeholder:focus {color: {{placeholderColorFocus}};}' }] },

        inputBg: {
            type: 'string', default: "#fff",
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'classic' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-control {background-color: {{inputBg}};}'
            }]
        },

        inputBgHover: {
            type: 'string', default: '',
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'classic' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-control:hover {background-color: {{inputBgHover}};}'
            }]
        },

        inputBgFocus: {
            type: 'string', default: "#fff",
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'classic' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-control:focus {background-color: {{inputBgFocus}};}'
            }]
        },

        inputBorder: {
            type: 'object', default: { openBorder: 1, type: 'solid', widthType: 'all', width: { all: 1 }, color: '#ced4da' },
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'classic' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-control'
            }]
        },

        inputBorderMaterial: {
            type: 'object', default: { openBorder: 1, type: 'solid', widthType: 'custom', width: { bottom: 2 }, color: '#ced4da' },
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'material' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-control'
            }]
        },

        inputBorderColorHover: {
            type: 'string', default: '',
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'classic' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-control:hover {border-color: {{inputBorderColorHover}};}'
            }, {
                condition: [{ key: 'layout', relation: '==', value: 'material' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-control:hover {border-bottom-color: {{inputBorderColorHover}};}'
            }]
        },

        inputBorderColorFocus: {
            type: 'string', default: '',
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'classic' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-control:focus {border-color: {{inputBorderColorFocus}}; box-shadow: 0 0 0 2px {{inputBorderColorFocus}};}'
            }, {
                condition: [{ key: 'layout', relation: '==', value: 'material' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-control:focus {border-bottom-color: {{inputBorderColorFocus}};}'
            }]
        }

    }, _defineProperty(_extends2, 'inputColorHover', {
        type: 'string', default: '',
        style: [{
            selector: '{{QUBELY}} .qubely-form .qubely-form-control:hover {color: {{inputColorHover}};}'
        }]
    }), _defineProperty(_extends2, 'inputCorner', {
        type: 'string', default: '4px',
        style: [{
            condition: [{ key: 'layout', relation: '==', value: 'classic' }, { key: 'inputCorner', relation: '!=', value: 'custom' }],
            selector: '{{QUBELY}} .qubely-form .qubely-form-control {border-radius: {{inputCorner}};}'
        }]
    }), _defineProperty(_extends2, 'inputCornerRadius', {
        type: 'object', default: { md: 5, unit: 'px' },
        style: [{
            condition: [{ key: 'layout', relation: '==', value: 'classic' }, { key: 'inputCorner', relation: '==', value: 'custom' }],
            selector: '{{QUBELY}} .qubely-form .qubely-form-control {border-radius: {{inputCornerRadius}};}'
        }]
    }), _defineProperty(_extends2, 'inputSize', { type: 'string', default: 'medium' }), _defineProperty(_extends2, 'inputPaddingY', {
        type: 'object', default: { md: 10, unit: 'px' },
        style: [{
            condition: [{ key: 'layout', relation: '==', value: 'classic' }, { key: 'inputSize', relation: '==', value: 'custom' }],
            selector: '{{QUBELY}} .qubely-form .qubely-form-control {padding-top: {{inputPaddingY}}; padding-bottom: {{inputPaddingY}};}'
        }, {
            condition: [{ key: 'layout', relation: '==', value: 'material' }, { key: 'inputSize', relation: '==', value: 'custom' }],
            selector: '{{QUBELY}} .qubely-form .qubely-form-control {padding-top: {{inputPaddingY}}; padding-bottom: {{inputPaddingY}};}'
        }]
    }), _defineProperty(_extends2, 'inputPaddingX', {
        type: 'object', default: { md: 15, unit: 'px' },
        style: [{
            condition: [{ key: 'layout', relation: '==', value: 'classic' }, { key: 'inputSize', relation: '==', value: 'custom' }],
            selector: '{{QUBELY}} .qubely-form .qubely-form-control {padding-left: {{inputPaddingX}}; padding-right: {{inputPaddingX}};}'
        }]
    }), _defineProperty(_extends2, 'textareaHeight', {
        type: 'object', default: { md: 200, unit: 'px' },
        style: [{
            selector: '{{QUBELY}} .qubely-form .qubely-form-group textarea.qubely-form-control {height: {{textareaHeight}};}'
        }]
    }), _defineProperty(_extends2, 'fieldErrorMessage', { type: 'string', default: 'Please fill the required field.' }), _defineProperty(_extends2, 'formSuccessMessage', { type: 'string', default: 'Email successfully sent!' }), _defineProperty(_extends2, 'formErrorMessage', { type: 'string', default: 'Email sent failed, fill required field and try again!' }), _defineProperty(_extends2, 'reCaptcha', { type: 'boolean', default: false }), _defineProperty(_extends2, 'reCaptchaSiteKey', { type: 'string', default: '' }), _defineProperty(_extends2, 'reCaptchaSecretKey', { type: 'string', default: '' }), _defineProperty(_extends2, 'policyCheckbox', { type: 'boolean', default: false }), _defineProperty(_extends2, 'policyCheckboxText', { type: 'string', default: 'I agree with the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a> and I declare that I have read the information that is required in accordance with <a href="http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.119.01.0001.01.ENG&amp;toc=OJ:L:2016:119:TOC" target="_blank">Article 13 of GDPR.</a>' }), _defineProperty(_extends2, 'emailReceiver', { type: 'string', default: '' }), _defineProperty(_extends2, 'emailHeaders', { type: 'string', default: 'Reply-To: {{email}}\nReply-name: {{first-name}} {{last-name}}\nCc: {{email}}\nBcc: admin@yourcompany.com' }), _defineProperty(_extends2, 'emailFrom', { type: 'string', default: 'Your Name: admin@example.com' }), _defineProperty(_extends2, 'emailSubject', { type: 'string', default: '{{subject}} | {{email}} | {{site-name}}' }), _defineProperty(_extends2, 'emailBody', { type: 'string', default: '<p><strong>From:</strong> {{first-name}} {{last-name}}</p><strong>Email:</strong> {{email}}</p>\n<p><strong>Subject:</strong> {{subject}}</p>\n<p><strong>Message:</strong> {{message}}</p>' }), _defineProperty(_extends2, 'showGlobalSettings', { type: 'boolean', default: true }), _extends2)),
    edit: _Edit2.default,
    save: _Save2.default
});

/***/ }),

/***/ "./src/blocks/form/style.scss":
/*!************************************!*\
  !*** ./src/blocks/form/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/style.scss");

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

/***/ "./src/blocks/gallery/Edit.js":
/*!************************************!*\
  !*** ./src/blocks/gallery/Edit.js ***!
  \************************************/
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Tooltip = _wp$components.Tooltip,
    Toolbar = _wp$components.Toolbar;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    BlockControls = _wp$editor.BlockControls,
    MediaUpload = _wp$editor.MediaUpload,
    SelectControl = _wp$editor.SelectControl;
var _wp$qubelyComponents = wp.qubelyComponents,
    IconList = _wp$qubelyComponents.IconList,
    InlineToolbar = _wp$qubelyComponents.Inline.InlineToolbar,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    ColorAdvanced = _wp$qubelyComponents.ColorAdvanced,
    Select = _wp$qubelyComponents.Select,
    Tabs = _wp$qubelyComponents.Tabs,
    Tab = _wp$qubelyComponents.Tab,
    Range = _wp$qubelyComponents.Range,
    Color = _wp$qubelyComponents.Color,
    Styles = _wp$qubelyComponents.Styles,
    Typography = _wp$qubelyComponents.Typography,
    Toggle = _wp$qubelyComponents.Toggle,
    Separator = _wp$qubelyComponents.Separator,
    Border = _wp$qubelyComponents.Border,
    BorderRadius = _wp$qubelyComponents.BorderRadius,
    BoxShadow = _wp$qubelyComponents.BoxShadow,
    Alignment = _wp$qubelyComponents.Alignment,
    Padding = _wp$qubelyComponents.Padding,
    Headings = _wp$qubelyComponents.Headings,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator;

var Edit = function (_Component) {
  _inherits(Edit, _Component);

  function Edit(props) {
    _classCallCheck(this, Edit);

    var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

    _this.updateGalleryImage = function (key, value, index) {
      var _this$props = _this.props,
          setAttributes = _this$props.setAttributes,
          _this$props$attribute = _this$props.attributes,
          galleryItems = _this$props$attribute.galleryItems,
          galleryContents = _this$props$attribute.galleryContents;

      if (key === 'add' || key === 'delete') {
        var updatedAttributes = key === 'add' ? [].concat(_toConsumableArray(galleryContents), [{ title: 'Best Gutenberg Plugin' }]) : galleryContents.slice(0, galleryItems - 1);
        setAttributes({
          galleryContents: updatedAttributes,
          galleryItems: key === 'add' ? galleryItems + 1 : galleryItems - 1
        });
      } else {
        var _updatedAttributes = galleryContents.map(function (data, itemIndex) {
          if (index === itemIndex) {
            return _extends({}, data, _defineProperty({}, key, value));
          } else {
            return data;
          }
        });
        setAttributes({ galleryContents: _updatedAttributes });
      }
    };

    _this.removePricelistItem = function (index) {
      var _this$props2 = _this.props,
          setAttributes = _this$props2.setAttributes,
          galleryContents = _this$props2.attributes.galleryContents;

      var newgalleryItems = JSON.parse(JSON.stringify(galleryContents));
      newgalleryItems.splice(index, 1);
      setAttributes({ galleryContents: newgalleryItems });
    };

    _this.renderGalleryItem = function () {
      var _this$props$attribute2 = _this.props.attributes,
          galleryContents = _this$props$attribute2.galleryContents,
          enableCaption = _this$props$attribute2.enableCaption,
          showCaption = _this$props$attribute2.showCaption,
          imageAnimation = _this$props$attribute2.imageAnimation;

      return galleryContents.map(function (_ref, index) {
        var title = _ref.title,
            image = _ref.image;

        return React.createElement(
          'div',
          { key: index, className: 'qubely-gallery-item' },
          React.createElement(
            Tooltip,
            { text: __('Delete this item') },
            React.createElement(
              'span',
              { className: 'qubely-repeatable-action-remove', role: 'button', onClick: function onClick() {
                  return _this.removePricelistItem(index);
                } },
              React.createElement('i', { 'class': 'fas fa-close' })
            )
          ),
          React.createElement(
            'div',
            { className: 'qubely-gallery-content' },
            React.createElement(
              'div',
              { className: 'qubely-gallery-image-container' },
              React.createElement(
                'div',
                { className: 'qubely-gallery-content-image' + (image != undefined && image.url != undefined ? '' : ' qubely-empty-image') + ' qubely-gallery-image-' + imageAnimation },
                React.createElement(MediaUpload, {
                  onSelect: function onSelect(value) {
                    return _this.updateGalleryImage('image', value, index);
                  },
                  allowedTypes: ['image'],
                  multiple: false,
                  value: image,
                  render: function render(_ref2) {
                    var open = _ref2.open;
                    return React.createElement(
                      Fragment,
                      null,
                      image != undefined && image.url != undefined ? React.createElement(
                        'div',
                        { className: 'qubely-gallery-content-image-editor' },
                        React.createElement('img', { src: image.url, alt: __('image') }),
                        React.createElement(
                          'div',
                          { className: 'qubely-media-actions qubely-field-button-list' },
                          React.createElement(
                            Tooltip,
                            { text: __('Edit') },
                            React.createElement(
                              'button',
                              { className: 'qubely-button', 'aria-label': __('Edit'), onClick: open, role: 'button' },
                              React.createElement('span', { 'aria-label': __('Edit'), className: 'fas fa-pencil-alt fa-fw' })
                            )
                          ),
                          React.createElement(
                            Tooltip,
                            { text: __('Remove') },
                            React.createElement(
                              'button',
                              { className: 'qubely-button', 'aria-label': __('Remove'), onClick: function onClick() {
                                  return _this.updateGalleryImage('image', '', index);
                                }, role: 'button' },
                              React.createElement('span', { 'aria-label': __('Close'), className: 'far fa-trash-alt fa-fw' })
                            )
                          )
                        )
                      ) : React.createElement(
                        'a',
                        { className: 'qubely-insert-image', href: '#', onClick: open },
                        React.createElement(
                          'svg',
                          { 'aria-hidden': 'true', role: 'img', focusable: 'false', 'class': 'dashicon dashicons-insert', xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 20 20' },
                          React.createElement('path', { d: 'M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z' })
                        ),
                        React.createElement(
                          'span',
                          null,
                          __('Insert')
                        )
                      )
                    );
                  }
                })
              ),
              enableCaption == 1 && React.createElement(
                'div',
                { className: 'qubely-gallery-caption-wrapper ' + (showCaption === 'onHover' ? 'qubely-gallery-caption-onHover' : '') },
                React.createElement(RichText, {
                  placeholder: __('Add title'),
                  tagName: 'div',
                  className: 'qubely-gallery-caption',
                  value: title,
                  onChange: function onChange(value) {
                    return _this.updateGalleryImage('title', value, index);
                  },
                  keepPlaceholderOnFocus: true
                })
              )
            )
          )
        );
      });
    };

    _this.state = {
      device: 'md',
      spacer: true
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
          _React$createElement;

      var _props2 = this.props,
          setAttributes = _props2.setAttributes,
          _props2$attributes = _props2.attributes,
          uniqueId = _props2$attributes.uniqueId,
          galleryItems = _props2$attributes.galleryItems,
          style = _props2$attributes.style,
          column = _props2$attributes.column,
          gutter = _props2$attributes.gutter,
          imgSize = _props2$attributes.imgSize,
          imgBorderRadius = _props2$attributes.imgBorderRadius,
          imgBoxShadow = _props2$attributes.imgBoxShadow,
          enableImgFixedHeight = _props2$attributes.enableImgFixedHeight,
          imgFixedHeight = _props2$attributes.imgFixedHeight,
          imageAnimation = _props2$attributes.imageAnimation,
          enableCaption = _props2$attributes.enableCaption,
          captionPadding = _props2$attributes.captionPadding,
          captionVerticalAlign = _props2$attributes.captionVerticalAlign,
          captionAlignment = _props2$attributes.captionAlignment,
          showCaption = _props2$attributes.showCaption,
          captionTypography = _props2$attributes.captionTypography,
          captionColor = _props2$attributes.captionColor,
          enableOverlay = _props2$attributes.enableOverlay,
          overlayBg = _props2$attributes.overlayBg,
          overlayHoverBg = _props2$attributes.overlayHoverBg,
          overlayBlend = _props2$attributes.overlayBlend;
      var device = this.state.device;


      if (uniqueId) {
        CssGenerator(this.props.attributes, 'gallery', uniqueId);
      }

      return React.createElement(
        Fragment,
        null,
        React.createElement(
          InspectorControls,
          { key: 'inspector' },
          React.createElement(
            PanelBody,
            { title: __('General Settings') },
            React.createElement(Styles, { columns: 2, value: style, onChange: function onChange(val) {
                return setAttributes({ style: val });
              },
              options: [{ value: 1, svg: _icons2.default.postgrid_design_1 }, { value: 2, svg: _icons2.default.postgrid_design_3 }]
            }),
            React.createElement(Range, {
              min: 2,
              max: 100,
              label: __('Number of Items'),
              value: galleryItems,
              onChange: function onChange(value) {
                return _this2.updateGalleryImage(value > galleryItems ? 'add' : 'delete');
              }
            }),
            React.createElement(Range, { label: __('Select Column'), value: column, onChange: function onChange(value) {
                return setAttributes({ column: value });
              }, min: 1, step: 1, max: 6, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                return _this2.setState({ device: value });
              } }),
            React.createElement(Range, { label: __('Gutter'), value: gutter, onChange: function onChange(val) {
                return setAttributes({ gutter: val });
              }, min: 0, max: 50, responsive: true, unit: ['px', 'em', '%'], device: device, onDeviceChange: function onDeviceChange(value) {
                return _this2.setState({ device: value });
              } })
          ),
          React.createElement(
            PanelBody,
            { title: __('Image'), initialOpen: false },
            style === 1 && React.createElement(
              Fragment,
              null,
              React.createElement(Toggle, { label: __('Fixed Image Height'), value: enableImgFixedHeight, onChange: function onChange(value) {
                  return setAttributes({ enableImgFixedHeight: value });
                } }),
              enableImgFixedHeight && React.createElement(Range, { label: __(''), value: imgFixedHeight, onChange: function onChange(value) {
                  return setAttributes({ imgFixedHeight: value });
                }, unit: ['px', 'em', '%'], min: 10, max: 600, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } })
            ),
            React.createElement(BorderRadius, { label: __('Radius'), value: imgBorderRadius, onChange: function onChange(val) {
                return setAttributes({ imgBorderRadius: val });
              }, min: 0, max: 100, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                return _this2.setState({ device: value });
              } }),
            React.createElement(BoxShadow, { label: __('Box-Shadow'), value: imgBoxShadow, onChange: function onChange(val) {
                return setAttributes({ imgBoxShadow: val });
              }, disableInset: true }),
            React.createElement(Select, { label: __('Image Animation'), options: [['none', __('No Animation')], ['slide-top', __('Slide From Top')], ['slide-right', __('Slide From Right')], ['slide-bottom', __('Slide From Bottom')], ['slide-left', __('Slide From Left')], ['zoom-in', __('Zoom In')], ['zoom-out', __('Zoom Out')], ['scale', __('Scale')]], value: imageAnimation, onChange: function onChange(val) {
                return setAttributes({ imageAnimation: val });
              } })
          ),
          React.createElement(
            PanelBody,
            { title: __('Caption'), initialOpen: false },
            React.createElement(Toggle, { label: __('Enable Caption'), value: enableCaption, onChange: function onChange(val) {
                return setAttributes({ enableCaption: val });
              } }),
            enableCaption == 1 && React.createElement(
              Fragment,
              null,
              React.createElement(Padding, { label: __('Padding'), value: captionPadding, onChange: function onChange(val) {
                  return setAttributes({ captionPadding: val });
                }, min: 0, max: 200, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } }),
              React.createElement(RadioAdvanced, { label: __('Show'), value: showCaption, onChange: function onChange(value) {
                  return setAttributes({ showCaption: value });
                },
                options: [{ label: __('On Hover'), value: 'onHover', title: __('On Hover') }, { label: __('Always'), value: 'always', title: __('Always') }]
              }),
              React.createElement(RadioAdvanced, { label: __('Vertical Align'), value: captionVerticalAlign, onChange: function onChange(value) {
                  return setAttributes({ captionVerticalAlign: value });
                },
                options: [{ label: __('Top'), value: 'top', title: __('Top') }, { label: __('Middle'), value: 'center', title: __('Middle') }, { label: __('Bottom'), value: 'bottom', title: __('Bottom') }]
              }),
              React.createElement(Alignment, (_React$createElement = { label: __('Horizontal Alignment'), value: captionAlignment, alignmentType: 'content', onChange: function onChange(val) {
                  return setAttributes({ captionAlignment: val });
                } }, _defineProperty(_React$createElement, 'alignmentType', 'content'), _defineProperty(_React$createElement, 'disableJustify', true), _React$createElement)),
              React.createElement(Typography, { label: __('Caption Typography'), value: captionTypography, onChange: function onChange(val) {
                  return setAttributes({ captionTypography: val });
                }, device: device, onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } }),
              React.createElement(Color, { label: __('Caption Color'), value: captionColor, onChange: function onChange(value) {
                  return setAttributes({ captionColor: value });
                } })
            )
          ),
          React.createElement(
            PanelBody,
            { title: __('Overlay'), initialOpen: false },
            React.createElement(Toggle, { label: __('Enable'), value: enableOverlay, onChange: function onChange(val) {
                return setAttributes({ enableOverlay: val });
              } }),
            enableOverlay == 1 && React.createElement(
              Fragment,
              null,
              React.createElement(
                Tabs,
                null,
                React.createElement(
                  Tab,
                  { tabTitle: __('Normal') },
                  React.createElement(ColorAdvanced, { label: __('Background'), value: overlayBg, onChange: function onChange(value) {
                      return setAttributes({ overlayBg: value });
                    } })
                ),
                React.createElement(
                  Tab,
                  { tabTitle: __('Hover') },
                  React.createElement(ColorAdvanced, { label: __('Background'), value: overlayHoverBg, onChange: function onChange(value) {
                      return setAttributes({ overlayHoverBg: value });
                    } })
                )
              ),
              React.createElement(Select, { label: __('Blend Mode'), options: [['normal', __('Normal')], ['multiply', __('Multiply')], ['screen', __('Screen')], ['overlay', __('Overlay')], ['darken', __('Darken')], ['lighten', __('Lighten')], ['color-dodge', __('Color Dodge')], ['saturation', __('Saturation')], ['luminosity', __('Luminosity')], ['color', __('Color')], ['color-burn', __('Color Burn')], ['exclusion', __('Exclusion')], ['hue', __('Hue')]], value: overlayBlend, onChange: function onChange(val) {
                  return setAttributes({ overlayBlend: val });
                } })
            )
          )
        ),
        React.createElement(
          BlockControls,
          null,
          React.createElement(
            Toolbar,
            null,
            React.createElement(InlineToolbar, _extends({
              data: [{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]
            }, this.props, {
              prevState: this.state
            }))
          )
        ),
        React.createElement(
          'div',
          { className: 'qubely-block-' + uniqueId },
          React.createElement(
            'div',
            { className: 'qubely-block-gallery qubely-gallery-item-' + style },
            React.createElement(
              'div',
              { className: 'qubely-gallery-items ' + ('qubely-column-grid qubely-column-grid-md' + column.md + ' ' + 'qubely-column-grid-sm' + column.sm + ' ' + 'qubely-column-grid-xs' + column.xs) },
              this.renderGalleryItem()
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

/***/ "./src/blocks/gallery/Save.js":
/*!************************************!*\
  !*** ./src/blocks/gallery/Save.js ***!
  \************************************/
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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Save.__proto__ || Object.getPrototypeOf(Save)).call.apply(_ref, [this].concat(args))), _this), _this.renderPricelist = function () {
            var _this$props$attribute = _this.props.attributes,
                galleryContents = _this$props$attribute.galleryContents,
                imageAnimation = _this$props$attribute.imageAnimation,
                showCaption = _this$props$attribute.showCaption,
                enableCaption = _this$props$attribute.enableCaption;


            return galleryContents.map(function (_ref2, index) {
                var title = _ref2.title,
                    image = _ref2.image;

                return React.createElement(
                    'div',
                    { key: index, className: 'qubely-gallery-item' },
                    React.createElement(
                        'div',
                        { className: 'qubely-gallery-content' },
                        image != undefined && image.url != undefined && React.createElement(
                            'div',
                            { className: 'qubely-gallery-image-container' },
                            React.createElement(
                                'div',
                                { className: 'qubely-gallery-content-image qubely-gallery-image-' + imageAnimation },
                                React.createElement('img', { src: image.url, alt: title })
                            ),
                            enableCaption == 1 && React.createElement(
                                'div',
                                { className: 'qubely-gallery-caption-wrapper ' + (showCaption === 'onHover' ? 'qubely-gallery-caption-onHover' : '') },
                                React.createElement(RichText.Content, { tagName: 'div', className: 'qubely-gallery-caption', value: title })
                            )
                        )
                    )
                );
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Save, [{
        key: 'render',
        value: function render() {
            var _props$attributes = this.props.attributes,
                uniqueId = _props$attributes.uniqueId,
                animation = _props$attributes.animation,
                style = _props$attributes.style,
                column = _props$attributes.column;

            return React.createElement(
                'div',
                _extends({ className: 'qubely-block-' + uniqueId }, animationAttr(animation)),
                React.createElement(
                    'div',
                    { className: 'qubely-block-gallery qubely-gallery-item-' + style },
                    React.createElement(
                        'div',
                        { className: 'qubely-gallery-items ' + ('qubely-column-grid qubely-column-grid-md' + column.md + ' ' + 'qubely-column-grid-sm' + column.sm + ' ' + 'qubely-column-grid-xs' + column.xs) },
                        this.renderPricelist()
                    )
                )
            );
        }
    }]);

    return Save;
}(Component);

exports.default = Save;

/***/ }),

/***/ "./src/blocks/gallery/index.js":
/*!*************************************!*\
  !*** ./src/blocks/gallery/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./src/blocks/gallery/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/gallery/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/gallery/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('qubely/gallery', {
    title: __('Gallery'),
    category: 'qubely',
    description: 'Showcase detailed with Qubely Gallery',
    icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/block-testimonial-carousel.svg', alt: __('Gallery') }),
    keywords: [__('Gallery'), __('Image')],
    attributes: {
        uniqueId: { type: 'string', default: '' },
        spacer: {
            type: 'object',
            default: {
                spaceTop: {
                    md: '10',
                    unit: "px"
                },
                spaceBottom: {
                    md: '10',
                    unit: "px"
                }
            },
            style: [{ selector: '{{QUBELY}}' }]
        },
        galleryContents: {
            type: 'Array',
            default: [{ title: 'Best Gutenberg Plugin' }, { title: 'Pre-made Sections' }, { title: 'Rich Blocks Collection' }, { title: 'Layout Packs' }, { title: 'Smart Layout Builder' }]
        },

        //gallery settings
        style: {
            type: 'number',
            default: 1
        },
        galleryItems: {
            type: 'number',
            default: 5
        },
        gutter: {
            type: 'object',
            default: {
                md: '10',
                unit: 'px'
            },
            style: [{
                condition: [{ key: 'style', relation: '===', value: '1' }],
                selector: '{{QUBELY}} .qubely-column-grid {grid-gap: {{gutter}};}'
            }, {
                condition: [{ key: 'style', relation: '!=', value: '1' }],
                selector: '{{QUBELY}} .qubely-column-grid {column-gap: {{gutter}};} {{QUBELY}} .qubely-block-gallery .qubely-gallery-item {padding-bottom: {{gutter}};}'
            }]
        },
        column: _defineProperty({
            type: 'object',
            default: 2
        }, 'default', { md: 2, sm: 1, xs: 1, unit: 'px' }),
        imgSize: {
            type: 'string',
            default: 'full'
        },

        //image
        imageAnimation: {
            type: 'string',
            default: 'slide-top'
        },
        enableImgFixedHeight: {
            type: 'boolean',
            default: true
        },
        imgFixedHeight: {
            type: 'object',
            default: {
                md: '200',
                unit: 'px'
            },
            style: [{
                condition: [{ key: 'enableImgFixedHeight', relation: '==', value: true }, { key: 'style', relation: '!=', value: '2' }],
                selector: '{{QUBELY}} .qubely-gallery-content-image img {width: 100%;object-fit: cover; height: {{imgFixedHeight}};}'
            }]
        },
        imgBorderRadius: {
            type: 'object',
            default: {
                openBorderRadius: 1,
                radiusType: 'global',
                global: {
                    md: 5
                },
                unit: 'px'
            },
            style: [{
                selector: '{{QUBELY}} .qubely-gallery-image-container'
            }]
        },
        imgBoxShadow: {
            type: 'object',
            default: {
                openShadow: true,
                vertical: 3,
                horizontal: 0,
                blur: 6,
                spread: 0,
                color: 'rgba(0,0,0,0.1)'
            },
            style: [{
                selector: '{{QUBELY}} .qubely-gallery-image-container'
            }]
        },

        // Caption
        enableCaption: {
            type: 'boolean',
            default: false
        },
        captionTypography: {
            type: 'object',
            default: {},
            style: [{
                condition: [{ key: 'enableCaption', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-gallery-caption'
            }]
        },
        captionColor: {
            type: 'string',
            default: '#fff',
            style: [{
                condition: [{ key: 'enableCaption', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-gallery-caption {color: {{captionColor}};}'
            }]
        },
        captionPadding: {
            type: 'object',
            default: {
                openPadding: 1,
                paddingType: 'global',
                global: {
                    md: 30
                },
                unit: 'px'
            },
            style: [{
                condition: [{ key: 'enableCaption', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-gallery-caption-wrapper'
            }]
        },

        captionVerticalAlign: {
            type: 'string',
            default: 'center',
            style: [{
                condition: [{ key: 'enableCaption', relation: '==', value: true }, { key: 'captionVerticalAlign', relation: '==', value: 'top' }],
                selector: '{{QUBELY}} .qubely-gallery-caption-wrapper {-webkit-box-align: start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start;}'
            }, {
                condition: [{ key: 'enableCaption', relation: '==', value: true }, { key: 'captionVerticalAlign', relation: '==', value: 'center' }],
                selector: '{{QUBELY}} .qubely-gallery-caption-wrapper {-webkit-box-align: center; -ms-flex-align: center; -ms-grid-row-align: center; align-items: center;}'
            }, {
                condition: [{ key: 'enableCaption', relation: '==', value: true }, { key: 'captionVerticalAlign', relation: '==', value: 'bottom' }],
                selector: '{{QUBELY}} .qubely-gallery-caption-wrapper {-webkit-box-align: end; -ms-flex-align: end; -ms-grid-row-align: flex-end; align-items: flex-end;}'
            }]
        },

        captionAlignment: {
            type: 'string',
            default: 'center',
            style: [{
                condition: [{ key: 'enableCaption', relation: '==', value: true }, { key: 'captionAlignment', relation: '==', value: 'left' }],
                selector: '{{QUBELY}} .qubely-gallery-caption-wrapper {-webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; text-align: left;}'
            }, {
                condition: [{ key: 'enableCaption', relation: '==', value: true }, { key: 'captionAlignment', relation: '==', value: 'center' }],
                selector: '{{QUBELY}} .qubely-gallery-caption-wrapper {-webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; text-align: center;}'
            }, {
                condition: [{ key: 'enableCaption', relation: '==', value: true }, { key: 'captionAlignment', relation: '==', value: 'right' }],
                selector: '{{QUBELY}} .qubely-gallery-caption-wrapper {-webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; text-align: right;}'
            }]
        },
        showCaption: {
            type: 'string',
            default: 'onHover',
            style: [{
                condition: [{ key: 'enableCaption', relation: '==', value: true }, { key: 'showCaption', relation: '==', value: 'onHover' }],
                selector: '{{QUBELY}} .qubely-pricelist-content {display: -webkit-box; display: -ms-flexbox; display: flex;}'
            }]
        },

        // Overlay
        enableOverlay: {
            type: 'boolean',
            default: true
        },
        overlayBg: {
            type: 'object',
            default: {
                openColor: 1,
                type: 'gradient',
                color: 'rgba(6, 80, 183, 0.7)',
                gradient: {
                    color1: 'rgba(6, 80, 183, 0.7)',
                    color2: 'rgba(96, 10, 255, 0.7)',
                    direction: 45,
                    start: 0,
                    stop: 100,
                    type: 'linear'
                }
            },
            style: [{
                condition: [{ key: 'enableOverlay', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-gallery-image-container:before'
            }]
        },
        overlayHoverBg: {
            type: 'object',
            default: {
                type: 'gradient',
                openColor: 1,
                color: 'rgba(6, 80, 183, 0.85)',
                gradient: {
                    color1: 'rgba(6, 80, 183, 0.85)',
                    color2: 'rgba(96, 10, 255, 0.85)',
                    direction: 45,
                    start: 0,
                    stop: 100,
                    type: 'linear'
                }
            },
            style: [{
                condition: [{ key: 'enableOverlay', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-gallery-item:hover .qubely-gallery-image-container:after'
            }]
        },
        overlayBlend: {
            type: 'string',
            default: '',
            style: [{
                condition: [{ key: 'enableOverlay', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-gallery-image-container:before {mix-blend-mode: {{overlayBlend}};} {{QUBELY}} .qubely-gallery-item:hover .qubely-gallery-image-container:after {mix-blend-mode: {{overlayBlend}};}'
            }]
        },

        //global
        showGlobalSettings: { type: 'boolean', default: true }, // Global Settings
        showContextMenu: { type: 'boolean', default: true }
    },
    edit: _Edit2.default,
    save: _Save2.default
});

/***/ }),

/***/ "./src/blocks/gallery/style.scss":
/*!***************************************!*\
  !*** ./src/blocks/gallery/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/gallery/style.scss");

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

/***/ "./src/blocks/imagecarousel/Edit.js":
/*!******************************************!*\
  !*** ./src/blocks/imagecarousel/Edit.js ***!
  \******************************************/
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
    Tooltip = _wp$components.Tooltip;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload;
var _wp$qubelyComponents = wp.qubelyComponents,
    Range = _wp$qubelyComponents.Range,
    Color = _wp$qubelyComponents.Color,
    Typography = _wp$qubelyComponents.Typography,
    Toggle = _wp$qubelyComponents.Toggle,
    Separator = _wp$qubelyComponents.Separator,
    ColorAdvanced = _wp$qubelyComponents.ColorAdvanced,
    Border = _wp$qubelyComponents.Border,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    BorderRadius = _wp$qubelyComponents.BorderRadius,
    BoxShadow = _wp$qubelyComponents.BoxShadow,
    Select = _wp$qubelyComponents.Select,
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
					return _this.updateAtrributes('slidertitle', value, index);
				},
				value: name
			});
		};

		_this.renderDesignation = function (subtitle, index) {
			return React.createElement(RichText, {
				key: 'editable',
				placeholder: __('Add subtitle...'),
				formattingControls: ['bold', 'italic', 'link', 'strikethrough'],
				keepPlaceholderOnFocus: true,
				onChange: function onChange(value) {
					return _this.updateAtrributes('subtitle', value, index);
				},
				value: subtitle
			});
		};

		_this.renderSlider = function (sliderimage, index) {
			return React.createElement(
				'div',
				{ className: 'qubely-single-img qubely-slider-image-container ' + (sliderimage != undefined && sliderimage.url != undefined ? '' : ' qubely-empty-image') },
				React.createElement(MediaUpload, {
					onSelect: function onSelect(value) {
						return _this.updateAtrributes('sliderimage', value, index);
					},
					allowedTypes: ['image'],
					multiple: false,
					value: sliderimage,
					render: function render(_ref) {
						var open = _ref.open;
						return React.createElement(
							Fragment,
							null,
							sliderimage && sliderimage.url ? React.createElement(
								'div',
								{ className: 'qubely-slider-content-sliderimage-editor' },
								React.createElement('img', { src: sliderimage.url, alt: __('Slider Image') }),
								React.createElement(
									'div',
									{ className: 'qubely-media-actions qubely-field-button-list' },
									React.createElement(
										Tooltip,
										{ text: __('Edit') },
										React.createElement(
											'button',
											{ className: 'qubely-button', 'aria-label': __('Edit'), onClick: open, role: 'button' },
											React.createElement('span', { 'aria-label': __('Edit'), className: 'fas fa-pencil-alt fa-fw' })
										)
									),
									React.createElement(
										Tooltip,
										{ text: __('Remove') },
										React.createElement(
											'button',
											{ className: 'qubely-button', 'aria-label': __('Remove'), onClick: function onClick() {
													return _this.updateAtrributes('sliderimage', '', index);
												}, role: 'button' },
											React.createElement('span', { 'aria-label': __('Close'), className: 'far fa-trash-alt fa-fw' })
										)
									)
								)
							) : React.createElement(
								'a',
								{ className: 'qubely-insert-image', href: '#', onClick: open },
								React.createElement(
									'svg',
									{ 'aria-hidden': 'true', role: 'img', focusable: 'false', 'class': 'dashicon dashicons-insert', xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 20 20' },
									React.createElement('path', { d: 'M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z' })
								),
								React.createElement(
									'span',
									null,
									__('Insert')
								)
							)
						);
					}
				})
			);
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

		_this.renderSliderInfo = function (item, index) {
			var _this$props$attribute = _this.props.attributes,
			    layout = _this$props$attribute.layout,
			    sliderContent = _this$props$attribute.sliderContent,
			    activeDescription = _this$props$attribute.activeDescription;
			var slidertitle = item.slidertitle,
			    subtitle = item.subtitle,
			    sliderimage = item.sliderimage,
			    message = item.message;


			return React.createElement(
				'div',
				{ className: 'qubely-image-slider' },
				_this.renderSlider(sliderimage, index),
				layout != 1 && React.createElement(
					'div',
					null,
					(sliderContent || layout === 6) && React.createElement(
						'div',
						{ className: 'qubely-image-slider-text' },
						React.createElement(
							'div',
							{ className: 'qubely-image-content' },
							React.createElement(
								'div',
								{ className: 'qubely-image-title' },
								_this.renderName(slidertitle, index)
							),
							React.createElement(
								'div',
								{ className: 'qubely-image-subtitle' },
								_this.renderDesignation(subtitle, index)
							),
							activeDescription && React.createElement(
								'span',
								{ className: 'qubely-slider-description' },
								_this.renderMessage(message, index),
								' '
							)
						)
					)
				)
			);
		};

		_this.removeCrouselItem = function (index) {
			var _this$props2 = _this.props,
			    setAttributes = _this$props2.setAttributes,
			    carouselItems = _this$props2.attributes.carouselItems;

			var newCarouselItems = JSON.parse(JSON.stringify(carouselItems));
			newCarouselItems.splice(index, 1);
			setAttributes({ carouselItems: newCarouselItems });
		};

		_this.renderImages = function () {
			var _this$props$attribute2 = _this.props.attributes,
			    layout = _this$props$attribute2.layout,
			    items = _this$props$attribute2.items,
			    carouselItems = _this$props$attribute2.carouselItems,
			    contentVerticalAlign = _this$props$attribute2.contentVerticalAlign;

			return carouselItems.map(function (item, index) {
				return React.createElement(
					'div',
					{ key: index, className: 'qubely-carousel-item item-layout' + layout + ' align-' + contentVerticalAlign },
					React.createElement(
						Tooltip,
						{ text: __('Delete this item') },
						React.createElement(
							'span',
							{ className: 'qubely-repeatable-action-remove', role: 'button', onClick: function onClick() {
									return _this.removeCrouselItem(index);
								} },
							React.createElement('span', { className: 'fas fa-close' })
						)
					),
					React.createElement(
						'div',
						{ className: 'qubely-image-item layout-' + layout },
						_this.renderSliderInfo(item, index)
					)
				);
			});
		};

		_this.renderLayoutFive = function () {
			var _this$props$attribute3 = _this.props.attributes,
			    layout = _this$props$attribute3.layout,
			    items = _this$props$attribute3.items,
			    carouselItems = _this$props$attribute3.carouselItems;

			return carouselItems.map(function (item, index) {
				return React.createElement(
					'div',
					{ key: index, className: 'qubely-carousel-item layout5 active ' },
					React.createElement(
						'div',
						{ className: 'qubely-image-item layout-' + layout },
						_this.renderSliderInfo(item, index)
					)
				);
			});
		};

		_this.setCarouselLength = function (newLength) {
			var _this$props3 = _this.props,
			    setAttributes = _this$props3.setAttributes,
			    _this$props3$attribut = _this$props3.attributes,
			    carouselItems = _this$props3$attribut.carouselItems,
			    items = _this$props3$attribut.items;

			var newCarouselItems = JSON.parse(JSON.stringify(carouselItems));
			var defaultItem = {
				slidertitle: 'Wordcamp Dhaka 2019',
				subtitle: '28 September 2019',
				message: '“Instantly raise your website appearance with this stylish new plugin.”',
				ratings: '5',
				sliderimage: {}
			};
			if (newLength > carouselItems.length) {
				newCarouselItems.push(defaultItem);
			} else {
				newLength >= items.md && newLength >= items.sm && newLength >= items.sm && newCarouselItems.pop();
			}
			setAttributes({ carouselItems: newCarouselItems });
		};

		_this.parseResponsiveViewPort = function () {
			var _this$props$attribute4 = _this.props.attributes,
			    layout = _this$props$attribute4.layout,
			    items = _this$props$attribute4.items,
			    itemthree = _this$props$attribute4.itemthree,
			    itemfive = _this$props$attribute4.itemfive;

			var responsive = [{ viewport: 1170, items: layout != 2 ? layout == 5 ? itemfive.md : items.md : itemthree.md }, { viewport: 980, items: layout != 2 ? layout == 5 ? itemfive.sm : items.sm : itemthree.sm }, { viewport: 580, items: layout != 2 ? layout == 5 ? itemfive.xs : items.xs : itemthree.xs }];

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
			    _React$createElement2,
			    _React$createElement3;

			var _props2 = this.props,
			    setAttributes = _props2.setAttributes,
			    _props2$attributes = _props2.attributes,
			    uniqueId = _props2$attributes.uniqueId,
			    layout = _props2$attributes.layout,
			    alignment = _props2$attributes.alignment,
			    carouselItems = _props2$attributes.carouselItems,
			    items = _props2$attributes.items,
			    itemthree = _props2$attributes.itemthree,
			    itemfive = _props2$attributes.itemfive,
			    sliderContent = _props2$attributes.sliderContent,
			    autoPlay = _props2$attributes.autoPlay,
			    speed = _props2$attributes.speed,
			    interval = _props2$attributes.interval,
			    dragable = _props2$attributes.dragable,
			    isCentered = _props2$attributes.isCentered,
			    notCentered = _props2$attributes.notCentered,
			    activeFade = _props2$attributes.activeFade,
			    centerPadding = _props2$attributes.centerPadding,
			    nav = _props2$attributes.nav,
			    arrowStyle = _props2$attributes.arrowStyle,
			    horizontalScroll = _props2$attributes.horizontalScroll,
			    arrowPosition = _props2$attributes.arrowPosition,
			    sizeWidth = _props2$attributes.sizeWidth,
			    arrowSize = _props2$attributes.arrowSize,
			    arrowColor = _props2$attributes.arrowColor,
			    arrowShapeColor = _props2$attributes.arrowShapeColor,
			    arrowBorderColor = _props2$attributes.arrowBorderColor,
			    cornerRadius = _props2$attributes.cornerRadius,
			    arrowHoverColor = _props2$attributes.arrowHoverColor,
			    arrowShapeHoverColor = _props2$attributes.arrowShapeHoverColor,
			    arrowBorderHoverColor = _props2$attributes.arrowBorderHoverColor,
			    cornerHoverRadius = _props2$attributes.cornerHoverRadius,
			    dots = _props2$attributes.dots,
			    dotIndicator = _props2$attributes.dotIndicator,
			    dotwidth = _props2$attributes.dotwidth,
			    dotHeight = _props2$attributes.dotHeight,
			    dotBorderRadius = _props2$attributes.dotBorderRadius,
			    dotColor = _props2$attributes.dotColor,
			    dotActiveColor = _props2$attributes.dotActiveColor,
			    nameSpacing = _props2$attributes.nameSpacing,
			    nameColor = _props2$attributes.nameColor,
			    nameTypo = _props2$attributes.nameTypo,
			    subtitleColor = _props2$attributes.subtitleColor,
			    subtitleTypo = _props2$attributes.subtitleTypo,
			    activeDescription = _props2$attributes.activeDescription,
			    descriptionColor = _props2$attributes.descriptionColor,
			    messageTypo = _props2$attributes.messageTypo,
			    messageSpacingTop = _props2$attributes.messageSpacingTop,
			    messageSpacingBottom = _props2$attributes.messageSpacingBottom,
			    contentPadding = _props2$attributes.contentPadding,
			    contentVerticalAlign = _props2$attributes.contentVerticalAlign,
			    contentAlignment = _props2$attributes.contentAlignment,
			    animateOnHover = _props2$attributes.animateOnHover,
			    enableOverlay = _props2$attributes.enableOverlay,
			    overlayBg = _props2$attributes.overlayBg,
			    overlayHoverBg = _props2$attributes.overlayHoverBg,
			    overlayBlend = _props2$attributes.overlayBlend;
			var device = this.state.device;


			var carouselSettings = {
				autoplay: autoPlay,
				items: layout != 2 ? layout == 5 ? itemfive : items : itemthree,
				center: layout == 3 || layout == 4 ? isCentered : notCentered,
				nav: nav,
				dots: dots,
				margin: 10,
				speed: speed,
				interval: interval,
				arrowStyle: arrowStyle,
				dot_indicator: dotIndicator,
				centerPadding: centerPadding,
				arrowPosition: arrowPosition,
				responsive: [{
					viewport: 1170,
					items: layout != 2 ? layout == 5 ? itemfive.md : items.md : itemthree.md
				}, {
					viewport: 980,
					items: layout != 2 ? layout == 5 ? itemfive.sm : items.sm : itemthree.sm
				}, {
					viewport: 580,
					items: layout != 2 ? layout == 5 ? itemfive.xs : items.xs : itemthree.xs
				}]
			};

			// Item Five.
			var carouselFiveSettings = {
				autoplay: autoPlay,
				items: items,
				nav: nav,
				margin: 10,
				dots: false,
				speed: speed,
				center: false,
				interval: interval,
				arrowStyle: arrowStyle,
				dot_indicator: dotIndicator,
				arrowPosition: arrowPosition,
				responsive: [{
					viewport: 1170,
					items: 1
				}]
			};

			if (uniqueId) {
				CssGenerator(this.props.attributes, 'imagecarousel', uniqueId);
			}

			return React.createElement(
				Fragment,
				null,
				React.createElement(
					InspectorControls,
					{ key: 'inspector' },
					React.createElement(
						PanelBody,
						{ title: '', initialOpen: true },
						React.createElement(Styles, {
							options: [{ value: 1, svg: _icons2.default.imagecarousel_1, label: __('Layout 1') }, { value: 2, svg: _icons2.default.imagecarousel_2, label: __('Layout 2') }, { value: 3, svg: _icons2.default.imagecarousel_3, label: __('Layout 3') }, { value: 4, svg: _icons2.default.imagecarousel_4, label: __('Layout 4') },
							// { value: 5, svg: icons.imagecarousel_5, label: __('Layout 6') },
							{ value: 6, svg: _icons2.default.imagecarousel_6, label: __('Layout 5') }],
							value: layout, onChange: function onChange(val) {
								return setAttributes({ layout: val });
							}
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
						React.createElement(Range, { label: __('Number of Carousels'),
							min: 3,
							max: 20,
							value: carouselItems.length,
							onChange: function onChange(val) {
								return _this2.setCarouselLength(val);
							}
						}),
						layout == 2 && React.createElement(Range, (_React$createElement2 = {
							label: __('Number of Columns'),
							min: 1, max: 20, responsive: true, device: device
						}, _defineProperty(_React$createElement2, 'device', this.state.device), _defineProperty(_React$createElement2, 'value', layout != 2 ? layout == 5 ? itemfive : items : itemthree), _defineProperty(_React$createElement2, 'onChange', function onChange(value) {
							return setAttributes(layout != 2 ? layout == 5 ? { itemfive: value } : { items: value } : { itemthree: value });
						}), _defineProperty(_React$createElement2, 'onDeviceChange', function onDeviceChange(value) {
							return _this2.setState({ device: value });
						}), _React$createElement2)),
						layout != 6 && layout != 1 && React.createElement(Toggle, { label: __('Slider Content'), value: sliderContent, onChange: function onChange(value) {
								return setAttributes({ sliderContent: value });
							} })
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
						layout != 1 && React.createElement(
							Fragment,
							null,
							React.createElement(Toggle, {
								label: __('Centered Slides'),
								value: layout == 3 || layout == 4 ? isCentered : notCentered,
								onChange: function onChange(value) {
									return setAttributes(layout == 3 || layout == 4 ? { isCentered: value } : { notCentered: value });
								}
							}),
							isCentered && React.createElement(Range, { label: __('Center Padding'), value: centerPadding, onChange: function onChange(value) {
									return setAttributes({ centerPadding: parseInt(value) });
								}, min: 100, max: 5000 }),
							isCentered && React.createElement(Toggle, { label: __('Fade Deactivated Items'), value: activeFade, onChange: function onChange(value) {
									return setAttributes({ activeFade: value });
								} })
						)
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
					(sliderContent || layout === 6) && React.createElement(
						Fragment,
						null,
						layout != 1 && React.createElement(
							Fragment,
							null,
							React.createElement(
								PanelBody,
								{ title: __('Title'), initialOpen: false },
								React.createElement(Range, {
									label: __('Spacing'),
									value: nameSpacing, onChange: function onChange(value) {
										return setAttributes({ nameSpacing: value });
									},
									unit: ['px', 'em', '%'],
									max: 300, min: 0, responsive: true,
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
								{ title: __('Subtitle'), initialOpen: false },
								React.createElement(Color, {
									label: __('Color'),
									value: subtitleColor, onChange: function onChange(value) {
										return setAttributes({ subtitleColor: value });
									}
								}),
								React.createElement(Typography, {
									label: __('Typography'),
									value: subtitleTypo,
									onChange: function onChange(value) {
										return setAttributes({ subtitleTypo: value });
									},
									device: device, onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									} })
							),
							React.createElement(
								PanelBody,
								{ title: __('Description'), initialOpen: false },
								React.createElement(Toggle, { label: __('Hide Description'), value: activeDescription, onChange: function onChange(value) {
										return setAttributes({ activeDescription: value });
									} }),
								activeDescription && React.createElement(
									Fragment,
									null,
									React.createElement(Color, {
										label: __('Color'),
										value: descriptionColor, onChange: function onChange(value) {
											return setAttributes({ descriptionColor: value });
										}
									}),
									React.createElement(Typography, {
										label: __('Typography'),
										value: messageTypo,
										onChange: function onChange(value) {
											return setAttributes({ messageTypo: value });
										},
										device: device, onDeviceChange: function onDeviceChange(value) {
											return _this2.setState({ device: value });
										} }),
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
										} })
								)
							),
							React.createElement(
								PanelBody,
								{ title: __('Content'), initialOpen: false },
								React.createElement(Padding, { label: __('Padding'), value: contentPadding, onChange: function onChange(val) {
										return setAttributes({ contentPadding: val });
									}, min: 0, max: 200, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
										return _this2.setState({ device: value });
									} }),
								React.createElement(RadioAdvanced, { label: __('Vertical Align'), value: contentVerticalAlign, onChange: function onChange(value) {
										return setAttributes({ contentVerticalAlign: value });
									},
									options: [{ label: __('Top'), value: 'top', title: __('Top') }, { label: __('Middle'), value: 'center', title: __('Middle') }, { label: __('Bottom'), value: 'bottom', title: __('Bottom') }]
								}),
								React.createElement(Alignment, (_React$createElement3 = { label: __('Horizontal Alignment'), value: contentAlignment, alignmentType: 'content', onChange: function onChange(val) {
										return setAttributes({ contentAlignment: val });
									} }, _defineProperty(_React$createElement3, 'alignmentType', 'content'), _defineProperty(_React$createElement3, 'disableJustify', true), _React$createElement3))
							),
							React.createElement(
								PanelBody,
								{ title: __('Overlay'), initialOpen: false },
								React.createElement(Toggle, { label: __('Animate on Hover'), value: animateOnHover, onChange: function onChange(val) {
										return setAttributes({ animateOnHover: val });
									} }),
								React.createElement(Toggle, { label: __('Enable'), value: enableOverlay, onChange: function onChange(val) {
										return setAttributes({ enableOverlay: val });
									} }),
								enableOverlay == 1 && React.createElement(
									Fragment,
									null,
									animateOnHover == 1 ? React.createElement(
										Tabs,
										null,
										React.createElement(
											Tab,
											{ tabTitle: __('Normal') },
											React.createElement(ColorAdvanced, { label: __('Background'), value: overlayBg, onChange: function onChange(value) {
													return setAttributes({ overlayBg: value });
												} })
										),
										React.createElement(
											Tab,
											{ tabTitle: __('Hover') },
											React.createElement(ColorAdvanced, { label: __('Background'), value: overlayHoverBg, onChange: function onChange(value) {
													return setAttributes({ overlayHoverBg: value });
												} })
										)
									) : React.createElement(
										Fragment,
										null,
										React.createElement(ColorAdvanced, { label: __('Background'), value: overlayBg, onChange: function onChange(value) {
												return setAttributes({ overlayBg: value });
											} }),
										React.createElement(Separator, null)
									),
									React.createElement(Select, { label: __('Blend Mode'), options: [['normal', __('Normal')], ['multiply', __('Multiply')], ['screen', __('Screen')], ['overlay', __('Overlay')], ['darken', __('Darken')], ['lighten', __('Lighten')], ['color-dodge', __('Color Dodge')], ['saturation', __('Saturation')], ['luminosity', __('Luminosity')], ['color', __('Color')], ['color-burn', __('Color Burn')], ['exclusion', __('Exclusion')], ['hue', __('Hue')]], value: overlayBlend, onChange: function onChange(val) {
											return setAttributes({ overlayBlend: val });
										} })
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'qubely-block-' + uniqueId },
					React.createElement(
						'div',
						{ className: 'qubely-block-image-carousel qubely-layout-' + layout },
						layout == 5 && React.createElement(
							Carousel,
							{ options: carouselFiveSettings },
							this.renderLayoutFive()
						),
						React.createElement(
							Carousel,
							{ options: carouselSettings },
							this.renderImages()
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

/***/ "./src/blocks/imagecarousel/Save.js":
/*!******************************************!*\
  !*** ./src/blocks/imagecarousel/Save.js ***!
  \******************************************/
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Save.__proto__ || Object.getPrototypeOf(Save)).call.apply(_ref, [this].concat(args))), _this), _this.renderSlider = function (sliderimage, sliderimageAlt) {
      return React.createElement(
        "div",
        { className: "qubely-single-img" },
        sliderimage.url != undefined ? React.createElement("img", { className: "qubely-image-sliderimage", src: sliderimage.url, alt: sliderimageAlt }) : React.createElement(
          "div",
          { className: "qubely-image-placeholder qubely-image-sliderimage" },
          React.createElement("i", { className: "dashicons dashicons-format-image" })
        )
      );
    }, _this.renderSliderInfo = function (item, index) {
      var _this$props$attribute = _this.props.attributes,
          layout = _this$props$attribute.layout,
          sliderContent = _this$props$attribute.sliderContent,
          activeDescription = _this$props$attribute.activeDescription;
      var slidertitle = item.slidertitle,
          subtitle = item.subtitle,
          sliderimage = item.sliderimage,
          message = item.message;


      return React.createElement(
        "div",
        { className: "qubely-image-slider" },
        _this.renderSlider(sliderimage, index),
        layout != 1 && React.createElement(
          "div",
          null,
          (sliderContent || layout === 6) && React.createElement(
            "div",
            { className: "qubely-image-slider-text" },
            React.createElement(
              "div",
              { className: "qubely-image-content" },
              React.createElement(
                "div",
                { className: "qubely-image-title" },
                React.createElement(RichText.Content, { value: slidertitle })
              ),
              React.createElement(
                "div",
                { className: "qubely-image-subtitle" },
                React.createElement(RichText.Content, { value: subtitle })
              ),
              activeDescription && React.createElement(
                "span",
                { className: "qubely-slider-description" },
                React.createElement(RichText.Content, { value: message })
              )
            )
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Save, [{
    key: "renderImage",
    value: function renderImage() {
      var _this2 = this;

      var _props$attributes = this.props.attributes,
          carouselItems = _props$attributes.carouselItems,
          layout = _props$attributes.layout,
          contentVerticalAlign = _props$attributes.contentVerticalAlign;

      return carouselItems.map(function (item, index) {
        return React.createElement(
          "div",
          { key: index, className: "qubely-carousel-item qubely-carousel-item" },
          React.createElement(
            "div",
            { className: "qubely-image-item layout-" + layout + " align-" + contentVerticalAlign },
            _this2.renderSliderInfo(item)
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
          itemthree = _props$attributes2.itemthree,
          itemfive = _props$attributes2.itemfive,
          autoPlay = _props$attributes2.autoPlay,
          speed = _props$attributes2.speed,
          interval = _props$attributes2.interval,
          animation = _props$attributes2.animation,
          dragable = _props$attributes2.dragable,
          isCentered = _props$attributes2.isCentered,
          notCentered = _props$attributes2.notCentered,
          centerPadding = _props$attributes2.centerPadding,
          nav = _props$attributes2.nav,
          arrowStyle = _props$attributes2.arrowStyle,
          infiniteLoop = _props$attributes2.infiniteLoop,
          activeFade = _props$attributes2.activeFade,
          dots = _props$attributes2.dots,
          dotIndicator = _props$attributes2.dotIndicator;


      var options = JSON.stringify({
        autoplay: autoPlay,
        items: layout != 2 ? layout == 5 ? itemfive.md : items.md : itemthree.md,
        margin: 10,
        center: layout == 3 || layout == 4 ? isCentered : notCentered,
        dots: dots,
        dot_indicator: dotIndicator,
        centerPadding: centerPadding,
        nav: nav,
        speed: speed,
        interval: interval,
        dragable: dragable,
        infiniteLoop: infiniteLoop,
        activeFade: activeFade,
        arrowStyle: arrowStyle,
        responsive: [{
          viewport: 1170,
          items: layout != 2 ? layout == 5 ? itemfive.md : items.md : itemthree.md
        }, {
          viewport: 980,
          items: layout != 2 ? layout == 5 ? itemfive.sm : items.sm : itemthree.sm
        }, {
          viewport: 580,
          items: layout != 2 ? layout == 5 ? itemfive.xs : items.xs : itemthree.xs
        }]
      });

      return React.createElement(
        "div",
        _extends({ className: "qubely-block-" + uniqueId }, animationAttr(animation)),
        React.createElement(
          "div",
          { className: "qubely-block-image-carousel qubely-layout-" + layout },
          React.createElement(
            "div",
            { className: "qubely-carousel qubely-carousel-wrapper" + (isCentered && activeFade ? ' is-faded' : ' '), "data-options": options, id: "qubelyCarousel1" },
            this.renderImage()
          )
        )
      );
    }
  }]);

  return Save;
}(Component);

exports.default = Save;

/***/ }),

/***/ "./src/blocks/imagecarousel/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/imagecarousel/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./src/blocks/imagecarousel/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/imagecarousel/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/imagecarousel/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('qubely/imagecarousel', {
	title: __('Image Carousel'),
	description: __('Insert images and beautify them with Qubely Image Carousel Block'),
	icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/imagecarousel/image-carousel.svg', alt: __('Image Carousel Block') }),
	category: 'qubely',
	keywords: [__('Image'), __('Carousel')],
	attributes: {
		uniqueId: { type: 'string', default: '' },
		layout: { type: 'number', default: 1 },
		items: {
			type: 'object',
			default: { md: '1', sm: '1', xs: '1' }
		},
		itemthree: {
			type: 'object',
			default: { md: '3', sm: '3', xs: '1' }
		},
		itemfive: {
			type: 'object',
			default: { md: '4', sm: '3', xs: '3' }
		},
		autoPlay: { type: 'boolean', default: false },
		dragable: { type: 'boolean', default: true },
		dotIndicator: { type: 'boolean', default: true },
		interval: { type: 'number', default: 3000 },
		speed: { type: 'number', default: 800 },

		nav: { type: 'boolean', default: true },
		dots: { type: 'boolean', default: false },
		centerPadding: { type: 'number', default: 210 },

		carouselItems: {
			type: 'array',
			default: [{
				slidertitle: 'Wordcamp Dhaka',
				subtitle: '28 September 2019',
				message: '“Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit.”',
				ratings: '5',
				sliderimage: {}
			}, {
				slidertitle: 'Welcome to Themeum',
				subtitle: 'Everything related to WordPress',
				message: '“WordCamp Dhaka is officially on the calendar!”',
				ratings: '4.5',
				sliderimage: {}
			}, {
				slidertitle: 'Accommodation to Dhaka',
				subtitle: 'Dhaka being a crowded city',
				message: '“Dhaka Regency Hotel & Resort Limited”',
				ratings: '4.5',
				sliderimage: {}
			}, {
				slidertitle: 'ICCB Center Dhaka',
				subtitle: 'Including speaker submissions',
				message: '““Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit.””',
				ratings: '5',
				sliderimage: {}
			}, {
				slidertitle: 'Mark Your Calendar',
				subtitle: 'WordCamp Dhaka will be happening on 28th September',
				message: '“Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit.”',
				ratings: '5',
				sliderimage: {}
			}, {
				slidertitle: 'Wordcamp Sponsor?',
				subtitle: 'WordCamp Dhaka will be happening',
				message: '“Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit.”',
				ratings: '5',
				sliderimage: {}
			}]
		},

		/*---------------------------------------------------
  * 	Image Layouts:  common/style attributes
  * --------------------------------------------------- */
		alignment: { type: 'object', default: { md: 'center' }, style: [{ selector: '{{QUBELY}} .qubely-image-item {text-align: {{alignment}};}' }] },
		spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },
		sliderNumber: { type: 'number', default: 5 },
		itemPerSlides: { type: 'string', default: '2' },
		infiniteLoop: { type: 'boolean', default: true },
		isCentered: { type: 'boolean', default: true },
		notCentered: { type: 'boolean', default: false },
		activeFade: { type: 'boolean', default: false },
		activeDescription: { type: 'boolean', default: false },
		sliderContent: { type: 'boolean', default: false },
		sliderOffContent: { type: 'boolean', default: false },

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
			type: 'object',
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
			style: [{ selector: '{{QUBELY}} .qubely-block-image-carousel .nav-control .dashicons { color:{{arrowColor}}; }' }]
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

		/*------------------------------------
  * 			Title 
  * ------------------------------------ */
		nameColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-image-title { color:{{nameColor}}; }' }] },
		nameTypo: { type: 'object', default: { openTypography: 1, weight: 700, size: { md: 34, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-image-title' }] },
		nameSpacing: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-image-title {margin-bottom: {{nameSpacing}};}' }] },

		/*------------------------------------
  * 			Subtitle 
  * ------------------------------------ */
		subtitleColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-image-subtitle { color:{{subtitleColor}}; }' }] },
		subtitleTypo: { type: 'object', default: { openTypography: 1, size: { md: 22, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-image-subtitle, {{QUBELY}} .qubely-image-subtitle div' }] },

		/*------------------------------------
  * 			Descriptions 
  * ------------------------------------ */
		descriptionColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-slider-description { color:{{descriptionColor}}; }' }] },
		messagePosition: { type: 'string', default: 'top' },
		messageTypo: {
			type: 'object',
			default: {
				openTypography: 1,
				size: { md: 18, unit: 'px' }
			},
			style: [{ selector: '{{QUBELY}} .qubely-slider-description' }]
		},
		messageSpacingTop: { type: 'object', default: { md: 0, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-slider-description {margin-top: {{messageSpacingTop}};}' }] },
		messageSpacingBottom: { type: 'object', default: { md: 5, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-slider-description {margin-bottom: {{messageSpacingBottom}};}' }] },

		/* ----------------------------------
  * 			Content
  ------------------------------------- */
		contentPadding: {
			type: 'object',
			default: {
				openPadding: 1,
				paddingType: 'global',
				global: {
					md: 30
				},
				unit: 'px'
			},
			style: [{ selector: '{{QUBELY}} .qubely-image-slider .qubely-image-content' }]
		},
		contentVerticalAlign: {
			type: 'string',
			default: 'bottom',
			style: [{
				selector: '{{QUBELY}} .qubely-image-content {-webkit-box-align: start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start;}'
			}]
		},
		contentAlignment: {
			type: 'string',
			default: 'center',
			style: [{
				condition: [{ key: 'layout', relation: '!=', value: '1' }, { key: 'contentAlignment', relation: '==', value: 'left' }],
				selector: '{{QUBELY}} .qubely-image-content {-webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; text-align: left;}'
			}, {
				condition: [{ key: 'layout', relation: '!=', value: '1' }, { key: 'contentAlignment', relation: '==', value: 'center' }],
				selector: '{{QUBELY}} .qubely-image-content {-webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; text-align: center;}'
			}, {
				condition: [{ key: 'layout', relation: '!=', value: '1' }, { key: 'contentAlignment', relation: '==', value: 'right' }],
				selector: '{{QUBELY}} .qubely-image-content {-webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; text-align: right;}'
			}]
		},

		/* ------------------------------------
  * 			Overlay 
  * ------------------------------------- */
		enableOverlay: {
			type: 'boolean',
			default: true
		},

		overlayBg: {
			type: 'object',
			default: {
				openColor: 1,
				type: 'gradient',
				color: 'rgba(6, 80, 183, 0.7)',
				gradient: {
					color1: 'rgba(0, 0, 0, 0.5)',
					color2: 'rgba(6, 1, 14, 0.6)',
					direction: 45,
					start: 0,
					stop: 100,
					type: 'linear'
				}
			},
			style: [{
				selector: '{{QUBELY}} .layout-2 .qubely-image-slider-text:before, {{QUBELY}} .layout-3 .qubely-image-slider-text:before, {{QUBELY}} .layout-4 .qubely-image-slider-text:before, {{QUBELY}} .layout-5 .qubely-image-slider-text:before, {{QUBELY}} .layout-6 .qubely-image-slider-text:before'
			}]
		},

		overlayHoverBg: {
			type: 'object',
			default: {
				type: 'gradient',
				openColor: 1,
				color: 'rgba(6, 80, 183, 0.85)',
				gradient: {
					color1: 'rgba(0, 0, 0, 0.85)',
					color2: 'rgba(72, 6, 196, 0.85)',
					direction: 45,
					start: 0,
					stop: 100,
					type: 'linear'
				}
			},
			style: [{
				condition: [{ key: 'layout', relation: '==', value: '2' }, { key: 'enableOverlay', relation: '==', value: true }, { key: 'animateOnHover', relation: '==', value: true }],
				selector: '{{QUBELY}} .layout-2 .qubely-image-slider-text:hover:before'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '3' }, { key: 'enableOverlay', relation: '==', value: true }, { key: 'animateOnHover', relation: '==', value: true }],
				selector: '{{QUBELY}} .layout-3 .qubely-image-slider-text:hover:before'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '4' }, { key: 'enableOverlay', relation: '==', value: true }, { key: 'animateOnHover', relation: '==', value: true }],
				selector: '{{QUBELY}} .layout-4 .qubely-image-slider-text:hover:before'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '5' }, { key: 'enableOverlay', relation: '==', value: true }, { key: 'animateOnHover', relation: '==', value: true }],
				selector: '{{QUBELY}} .layout-5 .qubely-image-slider-text:hover:before'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '6' }, { key: 'enableOverlay', relation: '==', value: true }, { key: 'animateOnHover', relation: '==', value: true }],
				selector: '{{QUBELY}} .layout-6 .qubely-image-slider-text:hover:before'
			}]
		},

		overlayBlend: {
			type: 'string',
			default: '',
			style: [{
				condition: [{ key: 'layout', relation: '==', value: '6' }, { key: 'enableOverlay', relation: '==', value: true }, { key: 'overlayBlend', relation: '!=', value: 'normal' }],
				selector: '{{QUBELY}} .layout-6 .qubely-image-slider-text {mix-blend-mode: {{overlayBlend}};} {{QUBELY}} .layout-4 .qubely-image-slider-text {mix-blend-mode: {{overlayBlend}};}'
			}]
		},
		animateOnHover: {
			type: 'boolean',
			default: true
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
			style: [{ selector: '{{QUBELY}} .qubely-layout-1 .qubely-image-item, {{QUBELY}} .qubely-layout-2 .qubely-image-item, {{QUBELY}} .qubely-layout-3 .qubely-image-carousel-content-wrapper' }]
		},
		border: {
			type: 'object',
			default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-image-item.layout-1, {{QUBELY}} .qubely-image-item.layout-2, {{QUBELY}} .qubely-image-item.layout-3 .qubely-image-carousel-content-wrapper' }]
		},
		boxShadow: {
			type: 'object', default: {},
			style: [{ selector: '{{QUBELY}} .qubely-image-item.layout-1, {{QUBELY}} .qubely-image-item.layout-2, {{QUBELY}} .qubely-image-item.layout-3 .qubely-image-carousel-content-wrapper' }]
		},
		boxShadowHover: {
			type: 'object', default: {},
			style: [{ selector: '{{QUBELY}} .qubely-image-item.layout-1:hover, {{QUBELY}} .qubely-image-item.layout-2:hover, {{QUBELY}} .qubely-image-item.layout-3 .qubely-image-carousel-content-wrapper:hover' }]
		},
		showGlobalSettings: { type: 'boolean', default: true } // Global Settings
	},

	edit: _Edit2.default,
	save: _Save2.default
});

/***/ }),

/***/ "./src/blocks/imagecarousel/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/imagecarousel/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/imagecarousel/style.scss");

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

/***/ "./src/blocks/postcarousel/Edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/postcarousel/Edit.js ***!
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var withSelect = wp.data.withSelect;
var _wp$date = wp.date,
    dateI18n = _wp$date.dateI18n,
    __experimentalGetSettings = _wp$date.__experimentalGetSettings;
var addQueryArgs = wp.url.addQueryArgs;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    PanelBody = _wp$components.PanelBody,
    Toolbar = _wp$components.Toolbar,
    Spinner = _wp$components.Spinner,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls;
var _wp$qubelyComponents = wp.qubelyComponents,
    Range = _wp$qubelyComponents.Range,
    ButtonGroup = _wp$qubelyComponents.ButtonGroup,
    InlineToolbar = _wp$qubelyComponents.Inline.InlineToolbar,
    Toggle = _wp$qubelyComponents.Toggle,
    Dropdown = _wp$qubelyComponents.Dropdown,
    Select = _wp$qubelyComponents.Select,
    Separator = _wp$qubelyComponents.Separator,
    ColorAdvanced = _wp$qubelyComponents.ColorAdvanced,
    Carousel = _wp$qubelyComponents.Carousel,
    Typography = _wp$qubelyComponents.Typography,
    Color = _wp$qubelyComponents.Color,
    Border = _wp$qubelyComponents.Border,
    BorderRadius = _wp$qubelyComponents.BorderRadius,
    Padding = _wp$qubelyComponents.Padding,
    BoxShadow = _wp$qubelyComponents.BoxShadow,
    Styles = _wp$qubelyComponents.Styles,
    Tabs = _wp$qubelyComponents.Tabs,
    Tab = _wp$qubelyComponents.Tab,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    _wp$qubelyComponents$ = _wp$qubelyComponents.gloalSettings,
    globalSettingsPanel = _wp$qubelyComponents$.globalSettingsPanel,
    animationSettings = _wp$qubelyComponents$.animationSettings,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator,
    _wp$qubelyComponents$2 = _wp$qubelyComponents.ContextMenu,
    ContextMenu = _wp$qubelyComponents$2.ContextMenu,
    handleContextMenu = _wp$qubelyComponents$2.handleContextMenu;


var CATEGORIES_LIST_QUERY = { per_page: -1 };

var Edit = function (_Component) {
	_inherits(Edit, _Component);

	function Edit() {
		_classCallCheck(this, Edit);

		var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));

		_this.renderFeaturedImage = function (post) {
			var _this$props$attribute = _this.props.attributes,
			    layout = _this$props$attribute.layout,
			    style = _this$props$attribute.style,
			    imgSize = _this$props$attribute.imgSize,
			    imageAnimation = _this$props$attribute.imageAnimation,
			    showCategory = _this$props$attribute.showCategory,
			    categoryPosition = _this$props$attribute.categoryPosition;

			return React.createElement(
				'div',
				{ className: (layout === 1 ? 'qubely-post-list-img' : 'qubely-post-grid-img') + ' qubely-post-img qubely-post-img-' + imageAnimation },
				React.createElement('img', { className: 'qubely-post-image', src: post.qubely_featured_image_url && post.qubely_featured_image_url[imgSize][0] }),
				showCategory == 'badge' && style !== 4 && React.createElement(
					'div',
					{ className: 'qubely-postcarousel-cat-position qubely-postcarousel-cat-position-' + categoryPosition },
					React.createElement('span', { className: 'qubely-postcarousel-category qubely-backend', dangerouslySetInnerHTML: { __html: post.qubely_category } })
				)
			);
		};

		_this.renderCardContent = function (post) {
			var _this$props$attribute2 = _this.props.attributes,
			    contentPosition = _this$props$attribute2.contentPosition,
			    style = _this$props$attribute2.style,
			    readmoreStyle = _this$props$attribute2.readmoreStyle,
			    showCategory = _this$props$attribute2.showCategory,
			    categoryPosition = _this$props$attribute2.categoryPosition,
			    showTitle = _this$props$attribute2.showTitle,
			    titlePosition = _this$props$attribute2.titlePosition,
			    showAuthor = _this$props$attribute2.showAuthor,
			    showDates = _this$props$attribute2.showDates,
			    showComment = _this$props$attribute2.showComment,
			    showExcerpt = _this$props$attribute2.showExcerpt,
			    excerptLimit = _this$props$attribute2.excerptLimit,
			    showReadMore = _this$props$attribute2.showReadMore,
			    buttonText = _this$props$attribute2.buttonText,
			    readmoreSize = _this$props$attribute2.readmoreSize;

			var title = React.createElement(
				'h3',
				{ className: 'qubely-postcarousel-title' },
				React.createElement(
					'a',
					null,
					post.title.rendered
				)
			);

			return React.createElement(
				'div',
				{ className: 'qubely-post-grid-content align-' + contentPosition },
				showCategory === 'default' && React.createElement('span', { className: 'qubely-postcarousel-category qubely-backend', dangerouslySetInnerHTML: { __html: post.qubely_category } }),
				showCategory == 'badge' && style === 4 && React.createElement(
					'div',
					{ className: 'qubely-postcarousel-cat-position qubely-postcarousel-cat-position-' + categoryPosition },
					React.createElement('span', { className: 'qubely-postcarousel-category qubely-backend', dangerouslySetInnerHTML: { __html: post.qubely_category } })
				),
				showTitle && titlePosition == true && title,
				(showAuthor || showDates || showComment) && React.createElement(
					'div',
					{ className: 'qubely-postcarousel-meta' },
					showAuthor && React.createElement(
						'span',
						null,
						React.createElement('i', { className: 'fas fa-user' }),
						' ',
						__('By'),
						' ',
						React.createElement(
							'a',
							null,
							post.qubely_author.display_name
						)
					),
					showDates && React.createElement(
						'span',
						null,
						React.createElement('i', { className: 'far fa-calendar-alt' }),
						' ',
						dateI18n(__experimentalGetSettings().formats.date, post.date_gmt)
					),
					showComment && React.createElement(
						'span',
						null,
						React.createElement('i', { className: 'fas fa-comment' }),
						' ',
						post.qubely_comment ? post.qubely_comment : '0'
					)
				),
				showTitle && titlePosition == false && title,
				showExcerpt && React.createElement('div', { className: 'qubely-postcarousel-intro', dangerouslySetInnerHTML: { __html: _this.truncate(post.excerpt.rendered, excerptLimit) } }),
				showReadMore && React.createElement(
					'div',
					{ className: 'qubely-postcarousel-btn-wrapper' },
					React.createElement(
						'a',
						{ className: 'qubely-postcarousel-btn qubely-button-' + readmoreStyle + ' is-' + readmoreSize },
						buttonText
					)
				)
			);
		};

		_this.parseResponsiveViewPort = function () {
			var postitems = _this.props.attributes.postitems;

			var responsive = [{ viewport: 1170, items: postitems.md }, { viewport: 980, items: postitems.sm }, { viewport: 580, items: postitems.xs }];

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
			categoriesList: []
		};
		return _this;
	}

	_createClass(Edit, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var _props = this.props,
			    setAttributes = _props.setAttributes,
			    clientId = _props.clientId,
			    uniqueId = _props.attributes.uniqueId;

			this.isStillMounted = true;
			this.fetchRequest = wp.apiFetch({
				path: addQueryArgs('/wp/v2/categories', CATEGORIES_LIST_QUERY)
			}).then(function (categoriesList) {
				if (_this2.isStillMounted) {
					_this2.setState({ categoriesList: categoriesList });
				}
			}).catch(function () {
				if (_this2.isStillMounted) {
					_this2.setState({ categoriesList: [] });
				}
			});
			var _client = clientId.substr(0, 6);
			if (!uniqueId) {
				setAttributes({ uniqueId: _client });
			} else if (uniqueId && uniqueId != _client) {
				setAttributes({ uniqueId: _client });
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.isStillMounted = false;
		}
	}, {
		key: 'truncate',
		value: function truncate(value, limit) {
			return value.split(' ').splice(0, limit).join(' ');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this,
			    _React$createElement;

			var _props2 = this.props,
			    name = _props2.name,
			    clientId = _props2.clientId,
			    attributes = _props2.attributes,
			    setAttributes = _props2.setAttributes,
			    posts = _props2.posts,
			    taxonomyList = _props2.taxonomyList,
			    _props2$attributes = _props2.attributes,
			    uniqueId = _props2$attributes.uniqueId,
			    taxonomy = _props2$attributes.taxonomy,
			    categories = _props2$attributes.categories,
			    tags = _props2$attributes.tags,
			    order = _props2$attributes.order,
			    orderBy = _props2$attributes.orderBy,
			    postsToShow = _props2$attributes.postsToShow,
			    showImages = _props2$attributes.showImages,
			    imgSize = _props2$attributes.imgSize,
			    enableFixedHeight = _props2$attributes.enableFixedHeight,
			    fixedHeight = _props2$attributes.fixedHeight,
			    imageRadius = _props2$attributes.imageRadius,
			    imageAnimation = _props2$attributes.imageAnimation,
			    cardBackground = _props2$attributes.cardBackground,
			    cardBorder = _props2$attributes.cardBorder,
			    cardBorderRadius = _props2$attributes.cardBorderRadius,
			    cardPadding = _props2$attributes.cardPadding,
			    cardSpace = _props2$attributes.cardSpace,
			    stackBg = _props2$attributes.stackBg,
			    stackWidth = _props2$attributes.stackWidth,
			    stackSpace = _props2$attributes.stackSpace,
			    stackBorderRadius = _props2$attributes.stackBorderRadius,
			    stackPadding = _props2$attributes.stackPadding,
			    stackBoxShadow = _props2$attributes.stackBoxShadow,
			    readmoreStyle = _props2$attributes.readmoreStyle,
			    buttonText = _props2$attributes.buttonText,
			    readmoreSize = _props2$attributes.readmoreSize,
			    readmoreCustomSize = _props2$attributes.readmoreCustomSize,
			    readmoreTypography = _props2$attributes.readmoreTypography,
			    readmoreBg = _props2$attributes.readmoreBg,
			    readmoreHoverBg = _props2$attributes.readmoreHoverBg,
			    readmoreBorder = _props2$attributes.readmoreBorder,
			    readmoreBorderRadius = _props2$attributes.readmoreBorderRadius,
			    readmoreBoxShadow = _props2$attributes.readmoreBoxShadow,
			    readmoreColor = _props2$attributes.readmoreColor,
			    readmoreColor2 = _props2$attributes.readmoreColor2,
			    readmoreHoverColor = _props2$attributes.readmoreHoverColor,
			    style = _props2$attributes.style,
			    showDates = _props2$attributes.showDates,
			    showComment = _props2$attributes.showComment,
			    showAuthor = _props2$attributes.showAuthor,
			    showCategory = _props2$attributes.showCategory,
			    categoryPosition = _props2$attributes.categoryPosition,
			    showExcerpt = _props2$attributes.showExcerpt,
			    excerptLimit = _props2$attributes.excerptLimit,
			    showReadMore = _props2$attributes.showReadMore,
			    showTitle = _props2$attributes.showTitle,
			    titlePosition = _props2$attributes.titlePosition,
			    titleTypography = _props2$attributes.titleTypography,
			    metaTypography = _props2$attributes.metaTypography,
			    excerptTypography = _props2$attributes.excerptTypography,
			    categoryTypography = _props2$attributes.categoryTypography,
			    titleColor = _props2$attributes.titleColor,
			    titleOverlayColor = _props2$attributes.titleOverlayColor,
			    metaColor = _props2$attributes.metaColor,
			    metaOverlayColor = _props2$attributes.metaOverlayColor,
			    titleHoverColor = _props2$attributes.titleHoverColor,
			    excerptColor = _props2$attributes.excerptColor,
			    excerptColor2 = _props2$attributes.excerptColor2,
			    categoryColor = _props2$attributes.categoryColor,
			    categoryColor2 = _props2$attributes.categoryColor2,
			    categoryHoverColor = _props2$attributes.categoryHoverColor,
			    categoryHoverColor2 = _props2$attributes.categoryHoverColor2,
			    categoryBackground = _props2$attributes.categoryBackground,
			    categoryHoverBackground = _props2$attributes.categoryHoverBackground,
			    categoryRadius = _props2$attributes.categoryRadius,
			    categoryPadding = _props2$attributes.categoryPadding,
			    badgePosition = _props2$attributes.badgePosition,
			    badgePadding = _props2$attributes.badgePadding,
			    bgColor = _props2$attributes.bgColor,
			    border = _props2$attributes.border,
			    borderRadius = _props2$attributes.borderRadius,
			    boxShadow = _props2$attributes.boxShadow,
			    contentPosition = _props2$attributes.contentPosition,
			    girdContentPosition = _props2$attributes.girdContentPosition,
			    overlayBg = _props2$attributes.overlayBg,
			    overlayHoverBg = _props2$attributes.overlayHoverBg,
			    overlayBlend = _props2$attributes.overlayBlend,
			    overlayHeight = _props2$attributes.overlayHeight,
			    overlaySpace = _props2$attributes.overlaySpace,
			    overlayBorderRadius = _props2$attributes.overlayBorderRadius,
			    contentPadding = _props2$attributes.contentPadding,
			    titleSpace = _props2$attributes.titleSpace,
			    categorySpace = _props2$attributes.categorySpace,
			    metaSpace = _props2$attributes.metaSpace,
			    excerptSpace = _props2$attributes.excerptSpace,
			    animation = _props2$attributes.animation,
			    globalZindex = _props2$attributes.globalZindex,
			    hideTablet = _props2$attributes.hideTablet,
			    hideMobile = _props2$attributes.hideMobile,
			    globalCss = _props2$attributes.globalCss,
			    autoPlay = _props2$attributes.autoPlay,
			    postitems = _props2$attributes.postitems,
			    isCentered = _props2$attributes.isCentered,
			    speed = _props2$attributes.speed,
			    interval = _props2$attributes.interval,
			    dragable = _props2$attributes.dragable,
			    activeFade = _props2$attributes.activeFade,
			    nav = _props2$attributes.nav,
			    arrowStyle = _props2$attributes.arrowStyle,
			    horizontalPosition = _props2$attributes.horizontalPosition,
			    verticalPosition = _props2$attributes.verticalPosition,
			    shapeWidth = _props2$attributes.shapeWidth,
			    navSize = _props2$attributes.navSize,
			    navColor = _props2$attributes.navColor,
			    navShapeColor = _props2$attributes.navShapeColor,
			    navBorderColor = _props2$attributes.navBorderColor,
			    navigationRadius = _props2$attributes.navigationRadius,
			    navHoverColor = _props2$attributes.navHoverColor,
			    navShapeHoverColor = _props2$attributes.navShapeHoverColor,
			    navBorderHoverColor = _props2$attributes.navBorderHoverColor,
			    navHoverRadius = _props2$attributes.navHoverRadius,
			    dots = _props2$attributes.dots,
			    dotwidth = _props2$attributes.dotwidth,
			    dotHeight = _props2$attributes.dotHeight,
			    dotBorderRadius = _props2$attributes.dotBorderRadius,
			    dotColor = _props2$attributes.dotColor,
			    dotActiveColor = _props2$attributes.dotActiveColor,
			    gutterspace = _props2$attributes.gutterspace;
			var device = this.state.device;


			if (uniqueId) {
				CssGenerator(this.props.attributes, 'postcarousel', uniqueId);
			}

			var carouselSettings = {
				nav: nav,
				dots: dots,
				margin: 15,
				speed: speed,
				items: postitems,
				autoplay: autoPlay,
				interval: interval,
				center: isCentered,
				arrowStyle: arrowStyle,
				arrowPosition: verticalPosition,
				responsive: [{
					viewport: 1170,
					items: postitems.md
				}, {
					viewport: 980,
					items: postitems.sm
				}, {
					viewport: 580,
					items: postitems.xs
				}]
			};

			return React.createElement(
				Fragment,
				null,
				React.createElement(
					InspectorControls,
					{ key: 'inspector' },
					React.createElement(
						PanelBody,
						{ title: __('Carousel Settings'), initialOpen: true },
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
						React.createElement(Toggle, {
							label: __('Centered Slides'),
							value: isCentered,
							onChange: function onChange(value) {
								return setAttributes({ isCentered: value });
							}
						}),
						isCentered && React.createElement(Toggle, { label: __('Fade Deactivated Items'), value: activeFade, onChange: function onChange(value) {
								return setAttributes({ activeFade: value });
							} }),
						React.createElement(Range, (_React$createElement = {
							label: __('Number of Columns'),
							min: 1, max: 20, responsive: true, device: device
						}, _defineProperty(_React$createElement, 'device', this.state.device), _defineProperty(_React$createElement, 'value', postitems), _defineProperty(_React$createElement, 'onChange', function onChange(value) {
							return setAttributes({ postitems: value });
						}), _defineProperty(_React$createElement, 'onDeviceChange', function onDeviceChange(value) {
							return _this3.setState({ device: value });
						}), _React$createElement))
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
								label: __('Navigation Style'),
								options: [[React.createElement('span', { className: 'dashicons dashicons-arrow-right-alt' }), 'arrowright'], [React.createElement('span', { className: 'dashicons dashicons-arrow-right-alt2' }), 'arrowright2']],
								value: arrowStyle,
								onChange: function onChange(value) {
									return setAttributes({ arrowStyle: value });
								}
							}),
							React.createElement(Range, {
								label: __('Horizontal Position'),
								value: horizontalPosition, onChange: function onChange(value) {
									return setAttributes({ horizontalPosition: value });
								},
								min: -100, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Vertical Position'),
								value: verticalPosition, onChange: function onChange(value) {
									return setAttributes({ verticalPosition: value });
								},
								min: 1, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Shape Size'),
								value: shapeWidth, onChange: function onChange(value) {
									return setAttributes({ shapeWidth: value });
								},
								min: 1, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								}
							}),
							React.createElement(Range, {
								label: __('Arrow Size'),
								value: navSize, onChange: function onChange(value) {
									return setAttributes({ navSize: value });
								},
								min: 0, max: 100,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								}
							}),
							React.createElement(
								Tabs,
								null,
								React.createElement(
									Tab,
									{ tabTitle: __('Normal') },
									React.createElement(Color, { label: __('Navigation Color'), value: navColor, onChange: function onChange(value) {
											return setAttributes({ navColor: value });
										} }),
									React.createElement(Color, { label: __('Navigation Shape Color'), value: navShapeColor, onChange: function onChange(val) {
											return setAttributes({ navShapeColor: val });
										} }),
									React.createElement(Border, { label: __('Navigation Border'), value: navBorderColor, onChange: function onChange(val) {
											return setAttributes({ navBorderColor: val });
										} }),
									React.createElement(BorderRadius, {
										min: 0,
										max: 100,
										responsive: true,
										device: device,
										label: __('Navigation Corner'),
										value: navigationRadius,
										unit: ['px', 'em', '%'],
										onChange: function onChange(value) {
											return setAttributes({ navigationRadius: value });
										},
										onDeviceChange: function onDeviceChange(value) {
											return _this3.setState({ device: value });
										}
									})
								),
								React.createElement(
									Tab,
									{ tabTitle: __('Hover') },
									React.createElement(Color, { label: __('Navigation Hover Color'), value: navHoverColor, onChange: function onChange(value) {
											return setAttributes({ navHoverColor: value });
										} }),
									React.createElement(Color, { label: __('Shape Hover Color'), value: navShapeHoverColor, onChange: function onChange(val) {
											return setAttributes({ navShapeHoverColor: val });
										} }),
									React.createElement(Border, { label: __('Border Hover Color'), value: navBorderHoverColor, onChange: function onChange(val) {
											return setAttributes({ navBorderHoverColor: val });
										} }),
									React.createElement(BorderRadius, {
										label: __('Corner Hover Radius'),
										value: navHoverRadius, onChange: function onChange(value) {
											return setAttributes({ navHoverRadius: value });
										},
										min: 1, max: 100,
										responsive: true, unit: ['px', 'em', '%'],
										device: device,
										onDeviceChange: function onDeviceChange(value) {
											return _this3.setState({ device: value });
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
									return _this3.setState({ device: value });
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
									return _this3.setState({ device: value });
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
									return _this3.setState({ device: value });
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
						{ title: __('Blog Post Design'), initialOpen: false },
						React.createElement(Styles, { columns: 4, value: style, onChange: function onChange(val) {
								return setAttributes({ style: val });
							},
							options: [{ value: 1, svg: _icons2.default.postgrid_design_1 }, { value: 2, svg: _icons2.default.postgrid_design_2 }, { value: 3, svg: _icons2.default.postgrid_design_4 }, { value: 4, svg: _icons2.default.postgrid_design_6 }]
						}),
						React.createElement(ButtonGroup, {
							label: __('Content Align'),
							options: [[__('Left'), 'left'], [__('Middle'), 'center'], [__('Right'), 'right']],
							value: contentPosition,
							onChange: function onChange(value) {
								return setAttributes({ contentPosition: value });
							}
						}),
						style != 2 && React.createElement(Range, {
							label: __('Gutter Space'),
							value: gutterspace,
							onChange: function onChange(value) {
								return setAttributes({ gutterspace: value });
							},
							unit: ['px', 'em', '%'], min: 10, max: 100,
							responsive: true, device: device,
							onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							}
						}),
						React.createElement(Padding, {
							label: __('Content Padding'),
							value: contentPadding,
							onChange: function onChange(val) {
								return setAttributes({ contentPadding: val });
							},
							min: 0, max: 100,
							unit: ['px', 'em', '%'],
							responsive: true, device: device,
							onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							}
						}),
						React.createElement(Separator, null),
						style != 4 || style != 2 && React.createElement(
							Fragment,
							null,
							React.createElement(ColorAdvanced, { label: __('Background'), value: bgColor, onChange: function onChange(value) {
									return setAttributes({ bgColor: value });
								} }),
							React.createElement(Border, {
								label: __('Border'),
								value: border,
								onChange: function onChange(val) {
									return setAttributes({ border: val });
								},
								min: 0, max: 10, unit: ['px', 'em', '%'],
								responsive: true, device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								}
							}),
							style != 2 && React.createElement(BorderRadius, { min: 0, max: 100, responsive: true, device: device, label: __('Corner'), value: borderRadius, unit: ['px', 'em', '%'], onChange: function onChange(value) {
									return setAttributes({ borderRadius: value });
								}, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							style != 1 && React.createElement(BoxShadow, { label: __('Box-Shadow'), value: boxShadow, onChange: function onChange(value) {
									return setAttributes({ boxShadow: value });
								} })
						),
						style === 2 && React.createElement(
							Fragment,
							null,
							React.createElement(ColorAdvanced, { label: __('Card Background'), value: cardBackground, onChange: function onChange(value) {
									return setAttributes({ cardBackground: value });
								} }),
							React.createElement(Border, { label: __('Card Border'), value: cardBorder, onChange: function onChange(val) {
									return setAttributes({ cardBorder: val });
								}, min: 0, max: 10, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(BorderRadius, { min: 0, max: 100, responsive: true, device: device, label: __('Card Corner'), value: cardBorderRadius, unit: ['px', 'em', '%'], onChange: function onChange(value) {
									return setAttributes({ cardBorderRadius: value });
								}, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(Range, { label: __('Card Space'), value: cardSpace, onChange: function onChange(value) {
									return setAttributes({ cardSpace: value });
								}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(Padding, { label: __('Card Padding'), value: cardPadding, onChange: function onChange(val) {
									return setAttributes({ cardPadding: val });
								}, min: 0, max: 100, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} })
						),
						style === 4 && React.createElement(
							Fragment,
							null,
							React.createElement(Range, { label: __('Overlay Height'), value: overlayHeight, onChange: function onChange(value) {
									return setAttributes({ overlayHeight: value });
								}, unit: ['px', 'em', '%'], min: 50, max: 700, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(BorderRadius, { min: 0, max: 100, responsive: true, device: device, label: __('Overlay Corner'), value: overlayBorderRadius, unit: ['px', 'em', '%'], onChange: function onChange(value) {
									return setAttributes({ overlayBorderRadius: value });
								}, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(
								Tabs,
								null,
								React.createElement(
									Tab,
									{ tabTitle: __('Normal') },
									React.createElement(ColorAdvanced, { label: __('Overlay'), value: overlayBg, onChange: function onChange(value) {
											return setAttributes({ overlayBg: value });
										} })
								),
								React.createElement(
									Tab,
									{ tabTitle: __('Hover') },
									React.createElement(ColorAdvanced, { label: __('Hover Overlay'), value: overlayHoverBg, onChange: function onChange(value) {
											return setAttributes({ overlayHoverBg: value });
										} })
								)
							),
							React.createElement(Select, { label: __('Blend Mode'), options: [['normal', __('Normal')], ['multiply', __('Multiply')], ['screen', __('Screen')], ['overlay', __('Overlay')], ['darken', __('Darken')], ['lighten', __('Lighten')], ['color-dodge', __('Color Dodge')], ['saturation', __('Saturation')], ['luminosity', __('Luminosity')], ['color', __('Color')], ['color-burn', __('Color Burn')], ['exclusion', __('Exclusion')], ['hue', __('Hue')]], value: overlayBlend, onChange: function onChange(val) {
									return setAttributes({ overlayBlend: val });
								} })
						),
						style === 3 && React.createElement(
							Fragment,
							null,
							React.createElement(ColorAdvanced, { label: __('Stack Background'), value: stackBg, onChange: function onChange(value) {
									return setAttributes({ stackBg: value });
								} }),
							React.createElement(BorderRadius, { min: 0, max: 100, responsive: true, device: device, label: __('Stack Corner'), value: stackBorderRadius, unit: ['px', 'em', '%'], onChange: function onChange(value) {
									return setAttributes({ stackBorderRadius: value });
								}, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(BoxShadow, { label: __('Stack Box Shadow'), value: stackBoxShadow, onChange: function onChange(value) {
									return setAttributes({ stackBoxShadow: value });
								} })
						)
					),
					React.createElement(
						PanelBody,
						{ title: __('Post Query'), initialOpen: false },
						React.createElement(ButtonGroup, {
							label: __('Taxonomy'),
							options: [[__('Categories'), 'categories'], [__('Tags'), 'tags']],
							value: taxonomy,
							onChange: function onChange(value) {
								return setAttributes({ taxonomy: value });
							}
						}),
						React.createElement(Dropdown, {
							label: taxonomy === 'categories' ? __('Categories') : __('Tags'),
							enableSearch: true,
							defaultOptionsLabel: 'All',
							options: [{ value: 'all', label: __('All') }].concat(_toConsumableArray(taxonomyList)),
							value: taxonomy === 'categories' ? categories : tags,
							onChange: function onChange(value) {
								return setAttributes(taxonomy === 'categories' ? { categories: value.length && value[value.length - 1].label === 'All' ? [] : value } : { tags: value.length && value[value.length - 1].label === 'All' ? [] : value });
							}
						}),
						React.createElement(Range, { label: __('Number of Items'), value: postsToShow, onChange: function onChange(value) {
								return setAttributes({ postsToShow: parseInt(value) });
							}, min: 0, max: 15 }),
						React.createElement(SelectControl, {
							label: __("Order By"),
							value: orderBy,
							options: [{ label: __('Date'), value: 'date' }, { label: __('Title'), value: 'title' }, { label: __('Random'), value: 'rand' }, { label: __('Menu Order'), value: 'menu_order' }],
							onChange: function onChange(value) {
								return setAttributes({ orderBy: value });
							}
						}),
						React.createElement(ButtonGroup, {
							label: __('Order'),
							options: [[__('Ascending'), 'asc'], [__('Descending'), 'desc']],
							value: order,
							onChange: function onChange(value) {
								return setAttributes({ order: value });
							}
						})
					),
					React.createElement(
						PanelBody,
						{ title: __('Image Settings'), initialOpen: false },
						React.createElement(Toggle, { label: __('Show Featured Image'), value: showImages, onChange: function onChange(value) {
								return setAttributes({ showImages: value });
							} }),
						React.createElement(Toggle, { label: __('Fixed Image Height'), value: enableFixedHeight, onChange: function onChange(value) {
								return setAttributes({ enableFixedHeight: value });
							} }),
						enableFixedHeight && React.createElement(Range, { label: __(''), value: fixedHeight, onChange: function onChange(value) {
								return setAttributes({ fixedHeight: value });
							}, unit: ['px', 'em', '%'], min: 10, max: 600, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(SelectControl, {
							label: __("Image Sizes"),
							value: imgSize,
							onChange: function onChange(value) {
								return setAttributes({ imgSize: value });
							},
							options: qubely_admin.image_sizes
						}),
						React.createElement(BorderRadius, {
							min: 0,
							max: 100,
							responsive: true,
							device: device,
							label: __('Image Corner'),
							value: imageRadius,
							unit: ['px', 'em', '%'],
							onChange: function onChange(value) {
								return setAttributes({ imageRadius: value });
							},
							onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Select, { label: __('Hover Effect'), options: [['none', __('No Animation')], ['slide-top', __('Slide From Top')], ['slide-right', __('Slide From Right')], ['slide-bottom', __('Slide From Bottom')], ['slide-left', __('Slide From Left')], ['zoom-in', __('Zoom In')], ['zoom-out', __('Zoom Out')]], value: imageAnimation, onChange: function onChange(val) {
								return setAttributes({ imageAnimation: val });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: __('Title Settings'), initialOpen: false },
						React.createElement(Typography, { label: __('Title'), value: titleTypography, onChange: function onChange(value) {
								return setAttributes({ titleTypography: value });
							}, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Separator, null),
						React.createElement(Typography, { label: __('Meta'), value: metaTypography, onChange: function onChange(value) {
								return setAttributes({ metaTypography: value });
							}, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Separator, null),
						React.createElement(Typography, { label: __('Excerpt'), value: excerptTypography, onChange: function onChange(value) {
								return setAttributes({ excerptTypography: value });
							}, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: 'Content Settings', initialOpen: false },
						React.createElement(Toggle, { label: __('Show Title'), value: showTitle, onChange: function onChange(value) {
								return setAttributes({ showTitle: value });
							} }),
						React.createElement(Toggle, { label: __('Show Excerpt'), value: showExcerpt, onChange: function onChange(value) {
								return setAttributes({ showExcerpt: value });
							} }),
						React.createElement(RangeControl, { label: __('Excerpt Limit'), min: 1, max: 100, step: 1, value: excerptLimit, onChange: function onChange(val) {
								return setAttributes({ excerptLimit: val });
							} }),
						React.createElement(Separator, null),
						React.createElement(Toggle, { label: __('Title Below Meta'), value: titlePosition, onChange: function onChange(value) {
								return setAttributes({ titlePosition: value });
							} }),
						React.createElement(Toggle, { label: __('Show date'), value: showDates, onChange: function onChange(value) {
								return setAttributes({ showDates: value });
							} }),
						React.createElement(Toggle, { label: __('Show Comment'), value: showComment, onChange: function onChange(value) {
								return setAttributes({ showComment: value });
							} }),
						React.createElement(Toggle, { label: __('Show Author'), value: showAuthor, onChange: function onChange(value) {
								return setAttributes({ showAuthor: value });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: __('Category settings'), initialOpen: false },
						React.createElement(RadioAdvanced, {
							label: __('Category'),
							options: [{ icon: 'fas fa-ban', value: 'none', label: __('None') }, { value: 'default', label: __('Default') }, { value: 'badge', label: __('Badge') }],
							value: showCategory,
							onChange: function onChange(val) {
								return setAttributes({ showCategory: val });
							}
						}),
						showCategory !== 'none' && React.createElement(
							Fragment,
							null,
							showCategory == 'badge' && React.createElement(
								Fragment,
								null,
								React.createElement(Select, {
									label: __("Badge Position"),
									options: [['leftTop', __('Left Top')], ['rightTop', __('Right Top')], ['leftBottom', __('Left Bottom')], ['rightBottom', __('Right Bottom')]],
									value: categoryPosition,
									onChange: function onChange(value) {
										return setAttributes({ categoryPosition: value });
									}
								}),
								React.createElement(Padding, { label: __('Advanced'), value: badgePadding, onChange: function onChange(val) {
										return setAttributes({ badgePadding: val });
									}, min: 0, max: 60, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
										return _this3.setState({ device: value });
									} })
							),
							React.createElement(Typography, { label: __('Typography'), value: categoryTypography, onChange: function onChange(value) {
									return setAttributes({ categoryTypography: value });
								}, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(
								Tabs,
								null,
								React.createElement(
									Tab,
									{ tabTitle: __('Normal') },
									React.createElement(Color, { label: __('Category Color'), value: showCategory == 'badge' ? categoryColor2 : categoryColor, onChange: function onChange(value) {
											return setAttributes(showCategory == 'badge' ? { categoryColor2: value } : { categoryColor: value });
										} }),
									showCategory == 'badge' && React.createElement(Color, { label: __('Category Background'), value: categoryBackground, onChange: function onChange(value) {
											return setAttributes({ categoryBackground: value });
										} })
								),
								React.createElement(
									Tab,
									{ tabTitle: __('Hover') },
									React.createElement(Color, { label: __('Category Hover Color'), value: showCategory == 'badge' ? categoryHoverColor2 : categoryHoverColor, onChange: function onChange(value) {
											return setAttributes(showCategory == 'badge' ? { categoryHoverColor2: value } : { categoryHoverColor: value });
										} }),
									showCategory == 'badge' && React.createElement(Color, { label: __('Category Background'), value: categoryHoverBackground, onChange: function onChange(value) {
											return setAttributes({ categoryHoverBackground: value });
										} })
								)
							),
							React.createElement(BorderRadius, {
								min: 0,
								max: 100,
								responsive: true,
								device: device,
								label: __('Corner'),
								value: categoryRadius,
								unit: ['px', 'em', '%'],
								onChange: function onChange(value) {
									return setAttributes({ categoryRadius: value });
								},
								onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								}
							}),
							showCategory == 'badge' && React.createElement(Padding, { label: __('Padding'), value: categoryPadding, onChange: function onChange(val) {
									return setAttributes({ categoryPadding: val });
								}, min: 0, max: 60, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} })
						)
					),
					React.createElement(
						PanelBody,
						{ title: __('Read More Link'), initialOpen: false },
						React.createElement(Toggle, { label: __('Show Read More Link'), value: showReadMore, onChange: function onChange(value) {
								return setAttributes({ showReadMore: value });
							} }),
						showReadMore && React.createElement(
							Fragment,
							null,
							React.createElement(Styles, {
								options: [{ value: 'fill', svg: _icons2.default.btn_fill, label: __('Fill') }, { value: 'outline', svg: _icons2.default.btn_outline, label: __('Outline') }],
								value: readmoreStyle,
								onChange: function onChange(val) {
									return setAttributes({ readmoreStyle: val });
								}
							}),
							React.createElement(TextControl, { label: __('Button Text'), value: buttonText, onChange: function onChange(val) {
									return setAttributes({ buttonText: val });
								} }),
							React.createElement(Typography, { label: __('Typography'), value: readmoreTypography, onChange: function onChange(value) {
									return setAttributes({ readmoreTypography: value });
								}, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							readmoreStyle === 'fill' && React.createElement(
								Fragment,
								null,
								React.createElement(RadioAdvanced, {
									label: __('Button Size'),
									options: [{ label: 'S', value: 'small', title: 'Small' }, { label: 'M', value: 'medium', title: 'Medium' }, { label: 'L', value: 'large', title: 'Large' }, { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }],
									value: readmoreSize,
									onChange: function onChange(value) {
										return setAttributes({ readmoreSize: value });
									} }),
								readmoreSize == 'custom' && React.createElement(Padding, {
									label: __('Custom Size'),
									value: readmoreCustomSize,
									onChange: function onChange(value) {
										return setAttributes({ readmoreCustomSize: value });
									},
									unit: ['px', 'em', '%'],
									max: 150,
									min: 0,
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this3.setState({ device: value });
									} }),
								React.createElement(Border, { label: __('Border'), value: readmoreBorder, onChange: function onChange(val) {
										return setAttributes({ readmoreBorder: val });
									}, min: 0, max: 10, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
										return _this3.setState({ device: value });
									} }),
								(readmoreBorder.openBorder || readmoreStyle === 'fill') && React.createElement(BorderRadius, {
									min: 0,
									max: 100,
									responsive: true,
									device: device,
									label: __('Corner'),
									value: readmoreBorderRadius,
									unit: ['px', 'em', '%'],
									onChange: function onChange(value) {
										return setAttributes({ readmoreBorderRadius: value });
									},
									onDeviceChange: function onDeviceChange(value) {
										return _this3.setState({ device: value });
									}
								}),
								React.createElement(BoxShadow, { label: __('Box-Shadow'), value: readmoreBoxShadow, onChange: function onChange(value) {
										return setAttributes({ readmoreBoxShadow: value });
									} })
							),
							React.createElement(
								Tabs,
								null,
								React.createElement(
									Tab,
									{ tabTitle: __('Normal') },
									React.createElement(Color, { label: __('Text Color'), value: readmoreStyle === 'fill' ? readmoreColor : readmoreColor2, onChange: function onChange(value) {
											return setAttributes(readmoreStyle === 'fill' ? { readmoreColor: value } : { readmoreColor2: value });
										} }),
									readmoreStyle === 'fill' && React.createElement(ColorAdvanced, { label: __('Background'), value: readmoreBg, onChange: function onChange(value) {
											return setAttributes({ readmoreBg: value });
										} })
								),
								React.createElement(
									Tab,
									{ tabTitle: __('Hover') },
									React.createElement(Color, { label: __('Text Color'), value: readmoreHoverColor, onChange: function onChange(value) {
											return setAttributes({ readmoreHoverColor: value });
										} }),
									readmoreStyle === 'fill' && React.createElement(ColorAdvanced, { label: __('Background'), value: readmoreHoverBg, onChange: function onChange(value) {
											return setAttributes({ readmoreHoverBg: value });
										} })
								)
							)
						)
					),
					React.createElement(
						PanelBody,
						{ title: __('Spacing'), initialOpen: false },
						showCategory == 'default' && React.createElement(Range, { label: __('Category'), value: categorySpace, onChange: function onChange(value) {
								return setAttributes({ categorySpace: value });
							}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Range, { label: __('Title'), value: titleSpace, onChange: function onChange(value) {
								return setAttributes({ titleSpace: value });
							}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Range, { label: __('Meta'), value: metaSpace, onChange: function onChange(value) {
								return setAttributes({ metaSpace: value });
							}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Range, { label: __('Excerpt'), value: excerptSpace, onChange: function onChange(value) {
								return setAttributes({ excerptSpace: value });
							}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: __('Colors'), initialOpen: false },
						React.createElement(Color, { label: __('Title'), value: style !== 4 ? titleColor : titleOverlayColor, onChange: function onChange(value) {
								return setAttributes(style !== 4 ? { titleColor: value } : { titleOverlayColor: value });
							} }),
						React.createElement(Color, { label: __('Title Hover'), value: titleHoverColor, onChange: function onChange(value) {
								return setAttributes({ titleHoverColor: value });
							} }),
						React.createElement(Color, { label: __('Meta'), value: style !== 4 ? metaColor : metaOverlayColor, onChange: function onChange(value) {
								return setAttributes(style !== 4 ? { metaColor: value } : { metaOverlayColor: value });
							} }),
						React.createElement(Color, { label: __('Excerpt'), value: style !== 4 ? excerptColor : excerptColor2, onChange: function onChange(value) {
								return setAttributes(style !== 4 ? { excerptColor: value } : { excerptColor2: value });
							} })
					)
				),
				React.createElement(
					BlockControls,
					null,
					React.createElement(
						Toolbar,
						null,
						React.createElement(InlineToolbar, _extends({
							data: [{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]
						}, this.props, {
							prevState: this.state
						}))
					)
				),
				globalSettingsPanel(globalZindex, hideTablet, hideMobile, globalCss, setAttributes),
				React.createElement(
					'div',
					{ className: 'qubely-block-' + uniqueId },
					posts && posts.length ? React.createElement(
						'div',
						{ className: 'qubely-block-image-carousel qubely-postcarousel-wrapper layout-' + style },
						React.createElement(
							Carousel,
							{ options: carouselSettings },
							posts && posts.map(function (post) {
								return React.createElement(
									'div',
									{ className: 'qubely-carousel-item' },
									React.createElement(
										'div',
										{ className: 'qubely-post-grid-view qubely-postgrid-style-' + style },
										React.createElement(
											'div',
											{ className: 'qubely-post-grid-wrapper qubely-post-grid-center' },
											showImages && post.qubely_featured_image_url && _this3.renderFeaturedImage(post),
											_this3.renderCardContent(post)
										)
									)
								);
							})
						)
					) : React.createElement(
						'div',
						{ className: 'qubely-postcarousel-is-loading' },
						React.createElement(Spinner, null)
					)
				)
			);
		}
	}]);

	return Edit;
}(Component);

exports.default = withSelect(function (select, props) {
	var _select = select('core'),
	    getEntityRecords = _select.getEntityRecords;

	var _props$attributes = props.attributes,
	    taxonomy = _props$attributes.taxonomy,
	    order = _props$attributes.order,
	    orderBy = _props$attributes.orderBy,
	    categories = _props$attributes.categories,
	    tags = _props$attributes.tags,
	    postsToShow = _props$attributes.postsToShow;


	var allTaxonomy = qubely_admin.all_taxonomy;
	var seletedTaxonomy = taxonomy === 'categories' ? 'categories' : 'tags';
	var activeTaxes = taxonomy === 'categories' ? categories : tags;

	var query = _defineProperty({
		order: order,
		orderby: orderBy,
		per_page: postsToShow
	}, seletedTaxonomy, activeTaxes.map(function (_ref) {
		var value = _ref.value,
		    label = _ref.label;
		return value;
	}));

	return {
		posts: getEntityRecords('postType', 'post', query),
		taxonomyList: allTaxonomy.post.terms ? allTaxonomy.post.terms[taxonomy === 'categories' ? 'category' : 'post_tag'] ? allTaxonomy.post.terms[taxonomy === 'categories' ? 'category' : 'post_tag'] : [] : []
	};
})(Edit);

/***/ }),

/***/ "./src/blocks/postcarousel/index.js":
/*!******************************************!*\
  !*** ./src/blocks/postcarousel/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./src/blocks/postcarousel/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/postcarousel/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('qubely/postcarousel', {
	title: __('Post Carousel'),
	description: 'Blog post carousel',
	icon: 'image-flip-horizontal',
	category: 'qubely',
	keywords: [__('Post'), __('Blog Post Carousel')],
	edit: _Edit2.default,

	save: function save(props) {
		return null;
	}

});

/***/ }),

/***/ "./src/blocks/postcarousel/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/postcarousel/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/postcarousel/style.scss");

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

/***/ "./src/blocks/postgrid/Edit.js":
/*!*************************************!*\
  !*** ./src/blocks/postgrid/Edit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _icons = __webpack_require__(/*! ../../helpers/icons */ "./src/helpers/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var withSelect = wp.data.withSelect;
var _wp$date = wp.date,
    dateI18n = _wp$date.dateI18n,
    __experimentalGetSettings = _wp$date.__experimentalGetSettings;
var addQueryArgs = wp.url.addQueryArgs;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    PanelBody = _wp$components.PanelBody,
    Toolbar = _wp$components.Toolbar,
    Spinner = _wp$components.Spinner,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls;
var _wp$qubelyComponents = wp.qubelyComponents,
    Range = _wp$qubelyComponents.Range,
    ButtonGroup = _wp$qubelyComponents.ButtonGroup,
    Toggle = _wp$qubelyComponents.Toggle,
    Dropdown = _wp$qubelyComponents.Dropdown,
    Select = _wp$qubelyComponents.Select,
    Separator = _wp$qubelyComponents.Separator,
    ColorAdvanced = _wp$qubelyComponents.ColorAdvanced,
    Typography = _wp$qubelyComponents.Typography,
    Color = _wp$qubelyComponents.Color,
    Border = _wp$qubelyComponents.Border,
    BorderRadius = _wp$qubelyComponents.BorderRadius,
    Padding = _wp$qubelyComponents.Padding,
    BoxShadow = _wp$qubelyComponents.BoxShadow,
    Styles = _wp$qubelyComponents.Styles,
    Tabs = _wp$qubelyComponents.Tabs,
    Tab = _wp$qubelyComponents.Tab,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator;


var CATEGORIES_LIST_QUERY = { per_page: -1 };

var Edit = function (_Component) {
	_inherits(Edit, _Component);

	function Edit() {
		_classCallCheck(this, Edit);

		var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));

		_this.renderFeaturedImage = function (post) {
			var _this$props$attribute = _this.props.attributes,
			    layout = _this$props$attribute.layout,
			    style = _this$props$attribute.style,
			    imgSize = _this$props$attribute.imgSize,
			    imageAnimation = _this$props$attribute.imageAnimation,
			    showCategory = _this$props$attribute.showCategory,
			    categoryPosition = _this$props$attribute.categoryPosition;

			return React.createElement(
				'div',
				{ className: (layout === 1 ? 'qubely-post-list-img' : 'qubely-post-grid-img') + ' qubely-post-img qubely-post-img-' + imageAnimation },
				React.createElement('img', { className: 'qubely-post-image', src: post.qubely_featured_image_url && post.qubely_featured_image_url[imgSize][0] }),
				showCategory == 'badge' && style !== 4 && React.createElement(
					'div',
					{ className: 'qubely-postgrid-cat-position qubely-postgrid-cat-position-' + categoryPosition },
					React.createElement('span', { className: 'qubely-postgrid-category', dangerouslySetInnerHTML: { __html: post.qubely_category } })
				)
			);
		};

		_this.renderCardContent = function (post) {
			var _this$props$attribute2 = _this.props.attributes,
			    layout = _this$props$attribute2.layout,
			    style = _this$props$attribute2.style,
			    style5 = _this$props$attribute2.style5,
			    readmoreStyle = _this$props$attribute2.readmoreStyle,
			    showCategory = _this$props$attribute2.showCategory,
			    showCategory5 = _this$props$attribute2.showCategory5,
			    categoryPosition = _this$props$attribute2.categoryPosition,
			    showTitle = _this$props$attribute2.showTitle,
			    titlePosition = _this$props$attribute2.titlePosition,
			    showAuthor = _this$props$attribute2.showAuthor,
			    showDates = _this$props$attribute2.showDates,
			    showComment = _this$props$attribute2.showComment,
			    showExcerpt = _this$props$attribute2.showExcerpt,
			    excerptLimit = _this$props$attribute2.excerptLimit,
			    excerptLimit5 = _this$props$attribute2.excerptLimit5,
			    showReadMore = _this$props$attribute2.showReadMore,
			    buttonText = _this$props$attribute2.buttonText,
			    readmoreSize = _this$props$attribute2.readmoreSize;

			var title = React.createElement(
				'h3',
				{ className: 'qubely-postgrid-title' },
				React.createElement(
					'a',
					null,
					post.title.rendered
				)
			);

			return React.createElement(
				'div',
				{ className: '' + (layout === 1 ? 'qubely-post-list-content' : 'qubely-post-grid-content') },
				layout != 5 && showCategory == 'default' && React.createElement('span', { className: 'qubely-postgrid-category', dangerouslySetInnerHTML: { __html: post.qubely_category } }),
				layout == 5 && showCategory5 != 'none' && React.createElement('span', { className: 'qubely-postgrid-category', dangerouslySetInnerHTML: { __html: post.qubely_category } }),
				layout == 5 && style5 == 4 && showCategory == 'default' && React.createElement('span', { className: 'qubely-postgrid-category', dangerouslySetInnerHTML: { __html: post.qubely_category } }),
				showCategory == 'badge' && style === 4 && React.createElement(
					'div',
					{ className: 'qubely-postgrid-cat-position qubely-postgrid-cat-position-' + categoryPosition },
					React.createElement('span', { className: 'qubely-postgrid-category', dangerouslySetInnerHTML: { __html: post.qubely_category } })
				),
				layout == 5 && style5 == 4 && (showAuthor || showDates || showComment) && React.createElement(
					'div',
					{ className: 'qubely-postgrid-meta' },
					showAuthor && React.createElement(
						'span',
						null,
						React.createElement('i', { className: 'fas fa-user' }),
						' ',
						__('By'),
						' ',
						React.createElement(
							'a',
							null,
							post.qubely_author.display_name
						)
					),
					showDates && React.createElement(
						'span',
						null,
						React.createElement('i', { className: 'far fa-calendar-alt' }),
						' ',
						dateI18n(__experimentalGetSettings().formats.date, post.date_gmt)
					),
					showComment && React.createElement(
						'span',
						null,
						React.createElement('i', { className: 'fas fa-comment' }),
						' ',
						post.qubely_comment ? post.qubely_comment : '0'
					)
				),
				showTitle && titlePosition == true && title,
				layout == 5 && style5 != 4 && (showAuthor || showDates || showComment) && React.createElement(
					'div',
					{ className: 'qubely-postgrid-meta' },
					showAuthor && React.createElement(
						'span',
						null,
						React.createElement('i', { className: 'fas fa-user' }),
						' ',
						__('By'),
						' ',
						React.createElement(
							'a',
							null,
							post.qubely_author.display_name
						)
					),
					showDates && React.createElement(
						'span',
						null,
						React.createElement('i', { className: 'far fa-calendar-alt' }),
						' ',
						dateI18n(__experimentalGetSettings().formats.date, post.date_gmt)
					),
					showComment && React.createElement(
						'span',
						null,
						React.createElement('i', { className: 'fas fa-comment' }),
						' ',
						post.qubely_comment ? post.qubely_comment : '0'
					)
				),
				showTitle && titlePosition == false && title,
				style5 != 4 && React.createElement(
					'div',
					null,
					layout != 5 && showExcerpt && React.createElement('div', { className: 'qubely-postgrid-intro', dangerouslySetInnerHTML: { __html: _this.truncate(post.excerpt.rendered, excerptLimit) } }),
					layout == 5 && showExcerpt && React.createElement('div', { className: 'qubely-postgrid-intro', dangerouslySetInnerHTML: { __html: _this.truncate(post.excerpt.rendered, excerptLimit5) } }),
					showReadMore && React.createElement(
						'div',
						{ className: 'qubely-postgrid-btn-wrapper' },
						React.createElement(
							'a',
							{ className: 'qubely-postgrid-btn qubely-button-' + readmoreStyle + ' is-' + readmoreSize },
							buttonText
						)
					)
				)
			);
		};

		_this.state = {
			device: 'md',
			spacer: true,
			categoriesList: []
		};
		return _this;
	}

	_createClass(Edit, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var _props = this.props,
			    setAttributes = _props.setAttributes,
			    clientId = _props.clientId,
			    uniqueId = _props.attributes.uniqueId;

			this.isStillMounted = true;
			this.fetchRequest = wp.apiFetch({
				path: addQueryArgs('/wp/v2/categories', CATEGORIES_LIST_QUERY)
			}).then(function (categoriesList) {
				if (_this2.isStillMounted) {
					_this2.setState({ categoriesList: categoriesList });
				}
			}).catch(function () {
				if (_this2.isStillMounted) {
					_this2.setState({ categoriesList: [] });
				}
			});
			var _client = clientId.substr(0, 6);
			if (!uniqueId) {
				setAttributes({ uniqueId: _client });
			} else if (uniqueId && uniqueId != _client) {
				setAttributes({ uniqueId: _client });
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.isStillMounted = false;
		}
	}, {
		key: 'truncate',
		value: function truncate(value, limit) {
			return value.split(' ').splice(0, limit).join(' ');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props2 = this.props,
			    setAttributes = _props2.setAttributes,
			    posts = _props2.posts,
			    taxonomyList = _props2.taxonomyList,
			    _props2$attributes = _props2.attributes,
			    uniqueId = _props2$attributes.uniqueId,
			    taxonomy = _props2$attributes.taxonomy,
			    categories = _props2$attributes.categories,
			    tags = _props2$attributes.tags,
			    order = _props2$attributes.order,
			    orderBy = _props2$attributes.orderBy,
			    postsToShow = _props2$attributes.postsToShow,
			    showImages = _props2$attributes.showImages,
			    imgSize = _props2$attributes.imgSize,
			    enableFixedHeight = _props2$attributes.enableFixedHeight,
			    fixedHeight = _props2$attributes.fixedHeight,
			    fixedHeight5 = _props2$attributes.fixedHeight5,
			    imageRadius = _props2$attributes.imageRadius,
			    imageAnimation = _props2$attributes.imageAnimation,
			    cardBackground = _props2$attributes.cardBackground,
			    cardBorder = _props2$attributes.cardBorder,
			    cardBorderRadius = _props2$attributes.cardBorderRadius,
			    cardPadding = _props2$attributes.cardPadding,
			    cardBoxShadow = _props2$attributes.cardBoxShadow,
			    cardSpace = _props2$attributes.cardSpace,
			    stackBg = _props2$attributes.stackBg,
			    stackWidth = _props2$attributes.stackWidth,
			    stackSpace = _props2$attributes.stackSpace,
			    stackBorderRadius = _props2$attributes.stackBorderRadius,
			    stackPadding = _props2$attributes.stackPadding,
			    stackBoxShadow = _props2$attributes.stackBoxShadow,
			    readmoreStyle = _props2$attributes.readmoreStyle,
			    buttonText = _props2$attributes.buttonText,
			    readmoreSize = _props2$attributes.readmoreSize,
			    readmoreCustomSize = _props2$attributes.readmoreCustomSize,
			    readmoreTypography = _props2$attributes.readmoreTypography,
			    readmoreBg = _props2$attributes.readmoreBg,
			    readmoreHoverBg = _props2$attributes.readmoreHoverBg,
			    readmoreBorder = _props2$attributes.readmoreBorder,
			    readmoreBorderRadius = _props2$attributes.readmoreBorderRadius,
			    readmoreBoxShadow = _props2$attributes.readmoreBoxShadow,
			    readmoreColor = _props2$attributes.readmoreColor,
			    readmoreColor2 = _props2$attributes.readmoreColor2,
			    readmoreHoverColor = _props2$attributes.readmoreHoverColor,
			    layout = _props2$attributes.layout,
			    style = _props2$attributes.style,
			    column = _props2$attributes.column,
			    showDates = _props2$attributes.showDates,
			    showComment = _props2$attributes.showComment,
			    showAuthor = _props2$attributes.showAuthor,
			    showCategory = _props2$attributes.showCategory,
			    showCategory5 = _props2$attributes.showCategory5,
			    categoryPosition = _props2$attributes.categoryPosition,
			    showExcerpt = _props2$attributes.showExcerpt,
			    excerptLimit = _props2$attributes.excerptLimit,
			    excerptLimit5 = _props2$attributes.excerptLimit5,
			    showReadMore = _props2$attributes.showReadMore,
			    showTitle = _props2$attributes.showTitle,
			    titlePosition = _props2$attributes.titlePosition,
			    showSeparator = _props2$attributes.showSeparator,
			    separatorColor = _props2$attributes.separatorColor,
			    separatorHeight = _props2$attributes.separatorHeight,
			    separatorSpace = _props2$attributes.separatorSpace,
			    titleTypography = _props2$attributes.titleTypography,
			    metaTypography = _props2$attributes.metaTypography,
			    excerptTypography = _props2$attributes.excerptTypography,
			    categoryTypography = _props2$attributes.categoryTypography,
			    excerptTypography5 = _props2$attributes.excerptTypography5,
			    titleColor = _props2$attributes.titleColor,
			    titleOverlayColor = _props2$attributes.titleOverlayColor,
			    metaColor = _props2$attributes.metaColor,
			    metaOverlayColor = _props2$attributes.metaOverlayColor,
			    titleHoverColor = _props2$attributes.titleHoverColor,
			    excerptColor = _props2$attributes.excerptColor,
			    excerptColor2 = _props2$attributes.excerptColor2,
			    categoryColor = _props2$attributes.categoryColor,
			    categoryColor2 = _props2$attributes.categoryColor2,
			    categoryHoverColor = _props2$attributes.categoryHoverColor,
			    categoryHoverColor2 = _props2$attributes.categoryHoverColor2,
			    categoryBackground = _props2$attributes.categoryBackground,
			    categoryHoverBackground = _props2$attributes.categoryHoverBackground,
			    categoryRadius = _props2$attributes.categoryRadius,
			    categoryPadding = _props2$attributes.categoryPadding,
			    badgePosition = _props2$attributes.badgePosition,
			    badgePadding = _props2$attributes.badgePadding,
			    bgColor = _props2$attributes.bgColor,
			    border = _props2$attributes.border,
			    borderRadius = _props2$attributes.borderRadius,
			    padding = _props2$attributes.padding,
			    boxShadow = _props2$attributes.boxShadow,
			    contentPosition = _props2$attributes.contentPosition,
			    girdContentPosition = _props2$attributes.girdContentPosition,
			    overlayBg = _props2$attributes.overlayBg,
			    overlayHoverBg = _props2$attributes.overlayHoverBg,
			    overlayBlend = _props2$attributes.overlayBlend,
			    overlayHeight = _props2$attributes.overlayHeight,
			    overlaySpace = _props2$attributes.overlaySpace,
			    overlayBorderRadius = _props2$attributes.overlayBorderRadius,
			    columnGap = _props2$attributes.columnGap,
			    contentPadding = _props2$attributes.contentPadding,
			    titleSpace = _props2$attributes.titleSpace,
			    imageSpace = _props2$attributes.imageSpace,
			    categorySpace = _props2$attributes.categorySpace,
			    metaSpace = _props2$attributes.metaSpace,
			    excerptSpace = _props2$attributes.excerptSpace,
			    style5 = _props2$attributes.style5,
			    imageOverlayBackground = _props2$attributes.imageOverlayBackground,
			    fixedHeight5b = _props2$attributes.fixedHeight5b,
			    titleColor5 = _props2$attributes.titleColor5;
			var device = this.state.device;


			if (uniqueId) {
				CssGenerator(this.props.attributes, 'postgrid', uniqueId);
			}

			var counts = 0;
			var output = '';
			return React.createElement(
				Fragment,
				null,
				React.createElement(
					InspectorControls,
					{ key: 'inspector' },
					React.createElement(
						PanelBody,
						{ title: '', initialOpen: true },
						React.createElement(Styles, {
							options: [{ value: 1, svg: _icons2.default.postgrid_1, label: __('') }, { value: 2, svg: _icons2.default.postgrid_2, label: __('') }, { value: 3, svg: _icons2.default.postgrid_3, label: __('') }, { value: 4, svg: _icons2.default.postgrid_4, label: __('') }, { value: 5, svg: _icons2.default.postgrid_5, label: __('Layout 5') }],
							value: layout,
							onChange: function onChange(val) {
								return setAttributes({ layout: val });
							}
						})
					),
					layout != 5 && React.createElement(
						PanelBody,
						{ title: __('Post Design'), initialOpen: true },
						React.createElement(Styles, { columns: 4, value: style, onChange: function onChange(val) {
								return setAttributes({ style: val });
							},
							options: [{ value: 1, svg: _icons2.default.postgrid_design_1 }, { value: 2, svg: layout === 1 ? _icons2.default.postgrid_design_3 : _icons2.default.postgrid_design_2 }, { value: 3, svg: layout === 1 ? _icons2.default.postgrid_design_5 : _icons2.default.postgrid_design_4 }, { value: 4, svg: _icons2.default.postgrid_design_6 }]
						}),
						(layout === 2 || layout === 3 || layout === 4) && React.createElement(Range, { label: __('Select Column'), value: column, onChange: function onChange(value) {
								return setAttributes({ column: value });
							}, min: 1, step: 1, max: 6, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						(layout === 1 || layout === 2 && (style === 3 || style === 4)) && React.createElement(ButtonGroup, {
							label: __('Content Align'),
							options: layout === 2 && style === 3 ? [[__('Left'), 'left'], [__('Middle'), 'center'], [__('Right'), 'right']] : [[__('Top'), 'top'], [__('Middle'), 'center'], [__('Bottom'), 'bottom']],
							value: layout === 2 && style === 3 ? contentPosition : girdContentPosition,
							onChange: function onChange(value) {
								return setAttributes(layout === 2 && style === 3 ? { contentPosition: value } : { girdContentPosition: value });
							}
						}),
						(layout === 1 && style != 3 || layout === 2 && style != 3 || layout === 4 && style != 3) && React.createElement(Padding, { label: __('Content Padding'), value: contentPadding, onChange: function onChange(val) {
								return setAttributes({ contentPadding: val });
							}, min: 0, max: 100, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Separator, null),
						(layout === 1 && style === 1 || layout === 2 && style === 1) && React.createElement(
							Fragment,
							null,
							React.createElement(ColorAdvanced, { label: __('Background'), value: bgColor, onChange: function onChange(value) {
									return setAttributes({ bgColor: value });
								} }),
							React.createElement(Border, { label: __('Border'), value: border, onChange: function onChange(val) {
									return setAttributes({ border: val });
								}, min: 0, max: 10, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(BorderRadius, { min: 0, max: 100, responsive: true, device: device, label: __('Corner'), value: borderRadius, unit: ['px', 'em', '%'], onChange: function onChange(value) {
									return setAttributes({ borderRadius: value });
								}, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(Padding, { label: __('Padding'), value: padding, onChange: function onChange(val) {
									return setAttributes({ padding: val });
								}, min: 0, max: 60, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(BoxShadow, { label: __('Box-Shadow'), value: boxShadow, onChange: function onChange(value) {
									return setAttributes({ boxShadow: value });
								} })
						),
						style === 2 && React.createElement(
							Fragment,
							null,
							React.createElement(ColorAdvanced, { label: __('Card Background'), value: cardBackground, onChange: function onChange(value) {
									return setAttributes({ cardBackground: value });
								} }),
							React.createElement(Border, { label: __('Card Border'), value: cardBorder, onChange: function onChange(val) {
									return setAttributes({ cardBorder: val });
								}, min: 0, max: 10, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(BorderRadius, { min: 0, max: 100, responsive: true, device: device, label: __('Card Corner'), value: cardBorderRadius, unit: ['px', 'em', '%'], onChange: function onChange(value) {
									return setAttributes({ cardBorderRadius: value });
								}, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							layout === 1 && React.createElement(Range, { label: __('Card Space'), value: cardSpace, onChange: function onChange(value) {
									return setAttributes({ cardSpace: value });
								}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(Padding, { label: __('Card Padding'), value: cardPadding, onChange: function onChange(val) {
									return setAttributes({ cardPadding: val });
								}, min: 0, max: 100, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(BoxShadow, { label: __('Card Box Shadow'), value: cardBoxShadow, onChange: function onChange(value) {
									return setAttributes({ cardBoxShadow: value });
								} })
						),
						style === 4 && React.createElement(
							Fragment,
							null,
							React.createElement(Range, { label: __('Overlay Height'), value: overlayHeight, onChange: function onChange(value) {
									return setAttributes({ overlayHeight: value });
								}, unit: ['px', 'em', '%'], min: 50, max: 700, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							layout === 1 && React.createElement(Range, { label: __('Overlay Space'), value: overlaySpace, onChange: function onChange(value) {
									return setAttributes({ overlaySpace: value });
								}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(BorderRadius, { min: 0, max: 100, responsive: true, device: device, label: __('Overlay Corner'), value: overlayBorderRadius, unit: ['px', 'em', '%'], onChange: function onChange(value) {
									return setAttributes({ overlayBorderRadius: value });
								}, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(
								Tabs,
								null,
								React.createElement(
									Tab,
									{ tabTitle: __('Normal') },
									React.createElement(ColorAdvanced, { label: __('Overlay'), value: overlayBg, onChange: function onChange(value) {
											return setAttributes({ overlayBg: value });
										} })
								),
								React.createElement(
									Tab,
									{ tabTitle: __('Hover') },
									React.createElement(ColorAdvanced, { label: __('Hover Overlay'), value: overlayHoverBg, onChange: function onChange(value) {
											return setAttributes({ overlayHoverBg: value });
										} })
								)
							),
							React.createElement(Select, { label: __('Blend Mode'), options: [['normal', __('Normal')], ['multiply', __('Multiply')], ['screen', __('Screen')], ['overlay', __('Overlay')], ['darken', __('Darken')], ['lighten', __('Lighten')], ['color-dodge', __('Color Dodge')], ['saturation', __('Saturation')], ['luminosity', __('Luminosity')], ['color', __('Color')], ['color-burn', __('Color Burn')], ['exclusion', __('Exclusion')], ['hue', __('Hue')]], value: overlayBlend, onChange: function onChange(val) {
									return setAttributes({ overlayBlend: val });
								} })
						),
						style === 3 && React.createElement(
							Fragment,
							null,
							React.createElement(ColorAdvanced, { label: __('Stack Background'), value: stackBg, onChange: function onChange(value) {
									return setAttributes({ stackBg: value });
								} }),
							layout === 2 && React.createElement(Range, { label: __('Stack Size'), value: stackWidth, onChange: function onChange(value) {
									return setAttributes({ stackWidth: value });
								}, unit: ['px', 'em', '%'], min: 50, max: 600, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							layout === 1 && React.createElement(Range, { label: __('Stack Space'), value: stackSpace, onChange: function onChange(value) {
									return setAttributes({ stackSpace: value });
								}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(BorderRadius, { min: 0, max: 100, responsive: true, device: device, label: __('Stack Corner'), value: stackBorderRadius, unit: ['px', 'em', '%'], onChange: function onChange(value) {
									return setAttributes({ stackBorderRadius: value });
								}, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(Padding, { label: __('Stack Padding'), value: stackPadding, onChange: function onChange(val) {
									return setAttributes({ stackPadding: val });
								}, min: 0, max: 60, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(BoxShadow, { label: __('Stack Box Shadow'), value: stackBoxShadow, onChange: function onChange(value) {
									return setAttributes({ stackBoxShadow: value });
								} })
						),
						layout === 1 && style === 1 && React.createElement(
							Fragment,
							null,
							React.createElement(Separator, null),
							React.createElement(Toggle, { label: __('Enable Separator'), value: showSeparator, onChange: function onChange(value) {
									return setAttributes({ showSeparator: value });
								} })
						),
						layout === 1 && style === 1 && showSeparator === true && React.createElement(
							Fragment,
							null,
							React.createElement(Color, { label: __('Separator Color'), value: separatorColor, onChange: function onChange(value) {
									return setAttributes({ separatorColor: value });
								} }),
							React.createElement(Range, { label: __('Separator Height'), value: separatorHeight, onChange: function onChange(value) {
									return setAttributes({ separatorHeight: value });
								}, unit: ['px', 'em', '%'], min: 0, max: 30, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(Range, { label: __('Separator Spacing'), value: separatorSpace, onChange: function onChange(value) {
									return setAttributes({ separatorSpace: value });
								}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} })
						)
					),
					layout == 5 && React.createElement(
						PanelBody,
						{ title: __('Post Design'), initialOpen: true },
						React.createElement(Styles, { columns: 2, value: style5, onChange: function onChange(val) {
								return setAttributes({ style5: val });
							},
							options: [{ value: 1, svg: _icons2.default.postgrid_design_1 }, { value: 4, svg: _icons2.default.postgrid_design_6 }]
						})
					),
					React.createElement(
						PanelBody,
						{ title: __('Query'), initialOpen: false },
						React.createElement(ButtonGroup, {
							label: __('Taxonomy'),
							options: [[__('Categories'), 'categories'], [__('Tags'), 'tags']],
							value: taxonomy,
							onChange: function onChange(value) {
								return setAttributes({ taxonomy: value });
							}
						}),
						React.createElement(Dropdown, {
							label: taxonomy === 'categories' ? __('Categories') : __('Tags'),
							enableSearch: true,
							defaultOptionsLabel: 'All',
							options: [{ value: 'all', label: __('All') }].concat(_toConsumableArray(taxonomyList)),
							value: taxonomy === 'categories' ? categories : tags,
							onChange: function onChange(value) {
								return setAttributes(taxonomy === 'categories' ? { categories: value.length && value[value.length - 1].label === 'All' ? [] : value } : { tags: value.length && value[value.length - 1].label === 'All' ? [] : value });
							}
						}),
						React.createElement(Range, { label: __('Number of Items'), value: postsToShow, onChange: function onChange(value) {
								return setAttributes({ postsToShow: parseInt(value) });
							}, min: 0, max: 15 }),
						React.createElement(SelectControl, {
							label: __("Order By"),
							value: orderBy,
							options: [{ label: __('Date'), value: 'date' }, { label: __('Title'), value: 'title' }, { label: __('Random'), value: 'rand' }, { label: __('Menu Order'), value: 'menu_order' }],
							onChange: function onChange(value) {
								return setAttributes({ orderBy: value });
							}
						}),
						React.createElement(ButtonGroup, {
							label: __('Order'),
							options: [[__('Ascending'), 'asc'], [__('Descending'), 'desc']],
							value: order,
							onChange: function onChange(value) {
								return setAttributes({ order: value });
							}
						})
					),
					React.createElement(
						PanelBody,
						{ title: __('Image Settings'), initialOpen: false },
						React.createElement(Toggle, { label: __('Show Featured Image'), value: showImages, onChange: function onChange(value) {
								return setAttributes({ showImages: value });
							} }),
						React.createElement(Toggle, {
							label: __('Fixed Image Height'),
							value: enableFixedHeight,
							onChange: function onChange(value) {
								return setAttributes({ enableFixedHeight: value });
							}
						}),
						enableFixedHeight && React.createElement(Range, {
							label: __(''),
							responsive: true,
							min: 10, max: 900,
							unit: ['px', 'em', '%'],
							device: device,
							value: layout != 5 ? fixedHeight : style5 == 4 ? fixedHeight5b : fixedHeight5,
							onChange: function onChange(value) {
								return setAttributes(layout != 5 ? { fixedHeight: value } : style5 == 4 ? { fixedHeight5b: value } : { fixedHeight5: value });
							},
							onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(SelectControl, {
							label: __("Image Sizes"),
							value: imgSize,
							onChange: function onChange(value) {
								return setAttributes({ imgSize: value });
							},
							options: qubely_admin.image_sizes
						}),
						React.createElement(BorderRadius, {
							min: 0,
							max: 100,
							responsive: true,
							device: device,
							label: __('Image Corner'),
							value: imageRadius,
							unit: ['px', 'em', '%'],
							onChange: function onChange(value) {
								return setAttributes({ imageRadius: value });
							},
							onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Select, { label: __('Hover Effect'), options: [['none', __('No Animation')], ['slide-top', __('Slide From Top')], ['slide-right', __('Slide From Right')], ['slide-bottom', __('Slide From Bottom')], ['slide-left', __('Slide From Left')], ['zoom-in', __('Zoom In')], ['zoom-out', __('Zoom Out')]], value: imageAnimation, onChange: function onChange(val) {
								return setAttributes({ imageAnimation: val });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: 'Content', initialOpen: false },
						React.createElement(Toggle, { label: __('Show Title'), value: showTitle, onChange: function onChange(value) {
								return setAttributes({ showTitle: value });
							} }),
						React.createElement(Toggle, { label: __('Show Excerpt'), value: showExcerpt, onChange: function onChange(value) {
								return setAttributes({ showExcerpt: value });
							} }),
						React.createElement(RangeControl, {
							label: __('Excerpt Limit'),
							min: 1, max: 100, step: 1,
							value: layout != 5 ? excerptLimit : excerptLimit5,
							onChange: function onChange(value) {
								return setAttributes(layout != 5 ? { excerptLimit: value } : { excerptLimit5: value });
							}
						}),
						React.createElement(Separator, null),
						React.createElement(Toggle, { label: __('Title Below Meta'), value: titlePosition, onChange: function onChange(value) {
								return setAttributes({ titlePosition: value });
							} }),
						React.createElement(Toggle, { label: __('Show date'), value: showDates, onChange: function onChange(value) {
								return setAttributes({ showDates: value });
							} }),
						React.createElement(Toggle, { label: __('Show Comment'), value: showComment, onChange: function onChange(value) {
								return setAttributes({ showComment: value });
							} }),
						React.createElement(Toggle, { label: __('Show Author'), value: showAuthor, onChange: function onChange(value) {
								return setAttributes({ showAuthor: value });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: __('Category'), initialOpen: false },
						React.createElement(RadioAdvanced, {
							label: __('Category'),
							options: [{ icon: 'fas fa-ban', value: 'none', label: __('None') }, { value: 'default', label: __('Default') }, { value: 'badge', label: __('Badge') }],
							value: layout != 5 ? showCategory : showCategory5,
							onChange: function onChange(value) {
								return setAttributes(layout != 5 ? { showCategory: value } : { showCategory5: value });
							}

						}),
						showCategory !== 'none' && React.createElement(
							Fragment,
							null,
							layout !== 2 && showCategory == 'badge' && style != 4 && React.createElement(Select, {
								label: __("Badge Position"),
								options: [['leftTop', __('Left Top')], ['rightTop', __('Right Top')], ['leftBottom', __('Left Bottom')], ['rightBottom', __('Right Bottom')]],
								value: categoryPosition,
								onChange: function onChange(value) {
									return setAttributes({ categoryPosition: value });
								}
							}),
							layout === 2 && showCategory == 'badge' && style != 4 && React.createElement(
								Fragment,
								null,
								React.createElement(RadioAdvanced, {
									label: __('Badge Position'),
									options: [{ value: 'default', label: __('default'), title: __('Pre-defined') }, { icon: 'fas fa-cog', value: 'none', title: __('Advanced') }],
									value: badgePosition,
									onChange: function onChange(val) {
										return setAttributes({ badgePosition: val });
									}
								}),
								badgePosition === 'default' ? React.createElement(Select, {
									label: __(""),
									options: [['leftTop', __('Left Top')], ['rightTop', __('Right Top')], ['leftBottom', __('Left Bottom')], ['rightBottom', __('Right Bottom')]],
									value: categoryPosition,
									onChange: function onChange(value) {
										return setAttributes({ categoryPosition: value });
									}
								}) : React.createElement(Padding, { label: __('Advanced'), value: badgePadding, onChange: function onChange(val) {
										return setAttributes({ badgePadding: val });
									}, min: 0, max: 60, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
										return _this3.setState({ device: value });
									} }),
								React.createElement(Separator, null)
							),
							React.createElement(Typography, { label: __('Typography'), value: categoryTypography, onChange: function onChange(value) {
									return setAttributes({ categoryTypography: value });
								}, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							React.createElement(
								Tabs,
								null,
								React.createElement(
									Tab,
									{ tabTitle: __('Normal') },
									React.createElement(Color, {
										label: __('Category Color'),
										value: showCategory === 'badge' || style5 === 4 ? categoryColor2 : categoryColor,
										onChange: function onChange(value) {
											return setAttributes(showCategory == 'badge' ? { categoryColor2: value } : { categoryColor: value });
										} }),
									showCategory == 'badge' || style5 == 4 && React.createElement(Color, { label: __('Category Background'), value: categoryBackground, onChange: function onChange(value) {
											return setAttributes({ categoryBackground: value });
										} })
								),
								React.createElement(
									Tab,
									{ tabTitle: __('Hover') },
									React.createElement(Color, { label: __('Category Hover Color'), value: showCategory == 'badge' ? categoryHoverColor2 : categoryHoverColor, onChange: function onChange(value) {
											return setAttributes(showCategory == 'badge' ? { categoryHoverColor2: value } : { categoryHoverColor: value });
										} }),
									showCategory == 'badge' && React.createElement(Color, { label: __('Category Background'), value: categoryHoverBackground, onChange: function onChange(value) {
											return setAttributes({ categoryHoverBackground: value });
										} })
								)
							),
							React.createElement(BorderRadius, {
								min: 0,
								max: 100,
								responsive: true,
								device: device,
								label: __('Corner'),
								value: categoryRadius,
								unit: ['px', 'em', '%'],
								onChange: function onChange(value) {
									return setAttributes({ categoryRadius: value });
								},
								onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								}
							}),
							showCategory == 'badge' && React.createElement(Padding, { label: __('Padding'), value: categoryPadding, onChange: function onChange(val) {
									return setAttributes({ categoryPadding: val });
								}, min: 0, max: 60, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} })
						)
					),
					layout != 5 && React.createElement(
						PanelBody,
						{ title: __('Read More Link'), initialOpen: false },
						React.createElement(Toggle, { label: __('Show Read More Link'), value: showReadMore, onChange: function onChange(value) {
								return setAttributes({ showReadMore: value });
							} }),
						showReadMore && React.createElement(
							Fragment,
							null,
							React.createElement(Styles, {
								options: [{ value: 'fill', svg: _icons2.default.btn_fill, label: __('Fill') }, { value: 'outline', svg: _icons2.default.btn_outline, label: __('Outline') }],
								value: readmoreStyle,
								onChange: function onChange(val) {
									return setAttributes({ readmoreStyle: val });
								}
							}),
							React.createElement(TextControl, { label: __('Button Text'), value: buttonText, onChange: function onChange(val) {
									return setAttributes({ buttonText: val });
								} }),
							React.createElement(Typography, { label: __('Typography'), value: readmoreTypography, onChange: function onChange(value) {
									return setAttributes({ readmoreTypography: value });
								}, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							readmoreStyle === 'fill' && React.createElement(
								Fragment,
								null,
								React.createElement(RadioAdvanced, {
									label: __('Button Size'),
									options: [{ label: 'S', value: 'small', title: 'Small' }, { label: 'M', value: 'medium', title: 'Medium' }, { label: 'L', value: 'large', title: 'Large' }, { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }],
									value: readmoreSize,
									onChange: function onChange(value) {
										return setAttributes({ readmoreSize: value });
									} }),
								readmoreSize == 'custom' && React.createElement(Padding, {
									label: __('Custom Size'),
									value: readmoreCustomSize,
									onChange: function onChange(value) {
										return setAttributes({ readmoreCustomSize: value });
									},
									unit: ['px', 'em', '%'],
									max: 150,
									min: 0,
									responsive: true,
									device: device,
									onDeviceChange: function onDeviceChange(value) {
										return _this3.setState({ device: value });
									} }),
								React.createElement(Border, { label: __('Border'), value: readmoreBorder, onChange: function onChange(val) {
										return setAttributes({ readmoreBorder: val });
									}, min: 0, max: 10, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
										return _this3.setState({ device: value });
									} }),
								(readmoreBorder.openBorder || readmoreStyle === 'fill') && React.createElement(BorderRadius, {
									min: 0,
									max: 100,
									responsive: true,
									device: device,
									label: __('Corner'),
									value: readmoreBorderRadius,
									unit: ['px', 'em', '%'],
									onChange: function onChange(value) {
										return setAttributes({ readmoreBorderRadius: value });
									},
									onDeviceChange: function onDeviceChange(value) {
										return _this3.setState({ device: value });
									}
								}),
								React.createElement(BoxShadow, { label: __('Box-Shadow'), value: readmoreBoxShadow, onChange: function onChange(value) {
										return setAttributes({ readmoreBoxShadow: value });
									} })
							),
							React.createElement(
								Tabs,
								null,
								React.createElement(
									Tab,
									{ tabTitle: __('Normal') },
									React.createElement(Color, { label: __('Text Color'), value: readmoreStyle === 'fill' ? readmoreColor : readmoreColor2, onChange: function onChange(value) {
											return setAttributes(readmoreStyle === 'fill' ? { readmoreColor: value } : { readmoreColor2: value });
										} }),
									readmoreStyle === 'fill' && React.createElement(ColorAdvanced, { label: __('Background'), value: readmoreBg, onChange: function onChange(value) {
											return setAttributes({ readmoreBg: value });
										} })
								),
								React.createElement(
									Tab,
									{ tabTitle: __('Hover') },
									React.createElement(Color, { label: __('Text Color'), value: readmoreHoverColor, onChange: function onChange(value) {
											return setAttributes({ readmoreHoverColor: value });
										} }),
									readmoreStyle === 'fill' && React.createElement(ColorAdvanced, { label: __('Background'), value: readmoreHoverBg, onChange: function onChange(value) {
											return setAttributes({ readmoreHoverBg: value });
										} })
								)
							)
						)
					),
					React.createElement(
						PanelBody,
						{ title: __('Spacing'), initialOpen: false },
						layout === 2 && React.createElement(Range, { label: __('Column Gap'), value: columnGap, onChange: function onChange(value) {
								return setAttributes({ columnGap: value });
							}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						showCategory == 'default' && React.createElement(Range, { label: __('Category'), value: categorySpace, onChange: function onChange(value) {
								return setAttributes({ categorySpace: value });
							}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Range, { label: __('Image'), value: imageSpace, onChange: function onChange(value) {
								return setAttributes({ imageSpace: value });
							}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Range, { label: __('Title'), value: titleSpace, onChange: function onChange(value) {
								return setAttributes({ titleSpace: value });
							}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Range, { label: __('Meta'), value: metaSpace, onChange: function onChange(value) {
								return setAttributes({ metaSpace: value });
							}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Range, { label: __('Excerpt'), value: excerptSpace, onChange: function onChange(value) {
								return setAttributes({ excerptSpace: value });
							}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} })
					),
					React.createElement(
						PanelBody,
						{ title: __('Typography'), initialOpen: false },
						React.createElement(Typography, { label: __('Title'), value: titleTypography, onChange: function onChange(value) {
								return setAttributes({ titleTypography: value });
							}, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Separator, null),
						React.createElement(Typography, { label: __('Meta'), value: metaTypography, onChange: function onChange(value) {
								return setAttributes({ metaTypography: value });
							}, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						React.createElement(Separator, null),
						React.createElement(Typography, {
							label: __('Excerpt'),
							device: device,
							value: layout != 5 ? excerptTypography : excerptTypography5,
							onChange: function onChange(value) {
								return setAttributes(layout != 5 ? { excerptTypography: value } : { excerptTypography5: value });
							},
							onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							}
						})
					),
					React.createElement(
						PanelBody,
						{ title: __('Colors'), initialOpen: false },
						style5 === 4 && React.createElement(ColorAdvanced, { label: __('Image Overlay'), value: imageOverlayBackground, onChange: function onChange(value) {
								return setAttributes({ imageOverlayBackground: value });
							} }),
						style5 != 4 && React.createElement(Color, {
							label: __('Title'),
							value: style !== 4 ? titleColor : titleOverlayColor,
							onChange: function onChange(value) {
								return setAttributes(style !== 4 ? { titleColor: value } : { titleOverlayColor: value });
							}

						}),
						style5 === 4 && React.createElement(Color, {
							label: __('Title'),
							value: titleColor5,
							onChange: function onChange(value) {
								return setAttributes({ titleColor5: value });
							}
						}),
						React.createElement(Color, { label: __('Title Hover'), value: titleHoverColor, onChange: function onChange(value) {
								return setAttributes({ titleHoverColor: value });
							} }),
						React.createElement(Color, { label: __('Meta'), value: style !== 4 ? metaColor : metaOverlayColor, onChange: function onChange(value) {
								return setAttributes(style !== 4 ? { metaColor: value } : { metaOverlayColor: value });
							} }),
						layout != 5 && React.createElement(Color, { label: __('Excerpt'), value: style !== 4 ? excerptColor : excerptColor2, onChange: function onChange(value) {
								return setAttributes(style !== 4 ? { excerptColor: value } : { excerptColor2: value });
							} })
					)
				),
				React.createElement(
					'div',
					{ className: 'qubely-block-' + uniqueId },
					posts && posts.length ? React.createElement(
						'div',
						{ className: 'qubely-postgrid-wrapper qubely-postgrid-layout-' + layout + ' ' + (layout === 2 || layout === 3 || layout === 4 ? 'qubely-postgrid-column qubely-postgrid-column-md' + column.md + ' ' + 'qubely-postgrid-column-sm' + column.sm + ' ' + 'qubely-postgrid-column-xs' + column.xs : '') },
						posts && posts.map(function (post) {
							if (layout == 5) {
								output = counts == 0 ? React.createElement(
									'div',
									{ className: 'blog-feature-image style-' + style5 },
									_this3.renderFeaturedImage(post),
									_this3.renderCardContent(post)
								) : React.createElement(
									'div',
									{ className: 'qubely-post-list-view layout-' + layout + ' style-' + style5 },
									showImages && post.qubely_featured_image_url && _this3.renderFeaturedImage(post),
									_this3.renderCardContent(post)
								);
								counts++;
								return output;
							} else {
								return React.createElement(
									'div',
									{ className: 'qubely-postgrid ' + (layout === 1 ? 'qubely-post-list-view' : 'qubely-post-grid-view') + ' qubely-postgrid-style-' + style },
									React.createElement(
										'div',
										{ className: '' + (layout === 1 ? 'qubely-post-list-wrapper qubely-post-list-' + (layout === 2 && style === 3 ? contentPosition : girdContentPosition) : 'qubely-post-grid-wrapper qubely-post-grid-' + (layout === 2 && style === 3 ? contentPosition : girdContentPosition)) },
										showImages && post.qubely_featured_image_url && _this3.renderFeaturedImage(post),
										_this3.renderCardContent(post)
									)
								);
							}
						})
					) : React.createElement(
						'div',
						{ className: 'qubely-postgrid-is-loading' },
						React.createElement(Spinner, null)
					)
				)
			);
		}
	}]);

	return Edit;
}(Component);

exports.default = withSelect(function (select, props) {
	var _select = select('core'),
	    getEntityRecords = _select.getEntityRecords;

	var _props$attributes = props.attributes,
	    taxonomy = _props$attributes.taxonomy,
	    order = _props$attributes.order,
	    orderBy = _props$attributes.orderBy,
	    categories = _props$attributes.categories,
	    tags = _props$attributes.tags,
	    postsToShow = _props$attributes.postsToShow;


	var allTaxonomy = qubely_admin.all_taxonomy;

	var seletedTaxonomy = taxonomy === 'categories' ? 'categories' : 'tags';
	var activeTaxes = taxonomy === 'categories' ? categories : tags;

	var query = _defineProperty({
		order: order,
		orderby: orderBy,
		per_page: postsToShow
	}, seletedTaxonomy, activeTaxes.map(function (_ref) {
		var value = _ref.value,
		    label = _ref.label;
		return value;
	}));
	return {
		posts: getEntityRecords('postType', 'post', query),
		taxonomyList: allTaxonomy.post.terms ? allTaxonomy.post.terms[taxonomy === 'categories' ? 'category' : 'post_tag'] ? allTaxonomy.post.terms[taxonomy === 'categories' ? 'category' : 'post_tag'] : [] : []
	};
})(Edit);

/***/ }),

/***/ "./src/blocks/postgrid/index.js":
/*!**************************************!*\
  !*** ./src/blocks/postgrid/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./src/blocks/postgrid/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/postgrid/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('qubely/postgrid', {
	title: __('Post Grid'),
	description: 'Fetch blog posts and display them beautifully in grid or list views with Qubely Postgrid Block.',
	icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/block-testimonial-carousel.svg', alt: __('Post Grid Block') }),
	category: 'qubely',
	keywords: [__('Post'), __('Post Grid')],
	edit: _Edit2.default,
	save: function save(props) {
		return null;
	}
});

/***/ }),

/***/ "./src/blocks/postgrid/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/postgrid/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/postgrid/style.scss");

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

/***/ "./src/blocks/pricelist/Edit.js":
/*!**************************************!*\
  !*** ./src/blocks/pricelist/Edit.js ***!
  \**************************************/
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Tooltip = _wp$components.Tooltip,
    Toolbar = _wp$components.Toolbar;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    BlockControls = _wp$editor.BlockControls,
    MediaUpload = _wp$editor.MediaUpload;
var _wp$qubelyComponents = wp.qubelyComponents,
    IconList = _wp$qubelyComponents.IconList,
    InlineToolbar = _wp$qubelyComponents.Inline.InlineToolbar,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    ColorAdvanced = _wp$qubelyComponents.ColorAdvanced,
    Select = _wp$qubelyComponents.Select,
    Tabs = _wp$qubelyComponents.Tabs,
    Tab = _wp$qubelyComponents.Tab,
    Range = _wp$qubelyComponents.Range,
    Color = _wp$qubelyComponents.Color,
    Styles = _wp$qubelyComponents.Styles,
    Typography = _wp$qubelyComponents.Typography,
    Toggle = _wp$qubelyComponents.Toggle,
    Separator = _wp$qubelyComponents.Separator,
    Border = _wp$qubelyComponents.Border,
    BorderRadius = _wp$qubelyComponents.BorderRadius,
    BoxShadow = _wp$qubelyComponents.BoxShadow,
    Alignment = _wp$qubelyComponents.Alignment,
    Padding = _wp$qubelyComponents.Padding,
    Headings = _wp$qubelyComponents.Headings,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator;

var Edit = function (_Component) {
  _inherits(Edit, _Component);

  function Edit(props) {
    _classCallCheck(this, Edit);

    var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

    _this.updatePricelistContent = function (key, value, index) {
      var _this$props = _this.props,
          setAttributes = _this$props.setAttributes,
          _this$props$attribute = _this$props.attributes,
          pricelistItems = _this$props$attribute.pricelistItems,
          pricelistContents = _this$props$attribute.pricelistContents;

      if (key === 'add' || key === 'delete') {
        var updatedAttributes = key === 'add' ? [].concat(_toConsumableArray(pricelistContents), [{ title: 'Pricelist Block', date: 'January 1, 2021', description: 'Include detailed for your products, company, etc with Qubely Pricelist.' }]) : pricelistContents.slice(0, pricelistItems - 1);
        setAttributes({
          pricelistContents: updatedAttributes,
          pricelistItems: key === 'add' ? pricelistItems + 1 : pricelistItems - 1
        });
      } else {
        var _updatedAttributes = pricelistContents.map(function (data, itemIndex) {
          if (index === itemIndex) {
            return _extends({}, data, _defineProperty({}, key, value));
          } else {
            return data;
          }
        });
        setAttributes({ pricelistContents: _updatedAttributes });
      }
    };

    _this.removePricelistItem = function (index) {
      var _this$props2 = _this.props,
          setAttributes = _this$props2.setAttributes,
          pricelistContents = _this$props2.attributes.pricelistContents;

      var newPricelistItems = JSON.parse(JSON.stringify(pricelistContents));
      newPricelistItems.splice(index, 1);
      setAttributes({ pricelistContents: newPricelistItems });
    };

    _this.renderPricelist = function () {
      var _this$props$attribute2 = _this.props.attributes,
          pricelistContents = _this$props$attribute2.pricelistContents,
          contentAlign = _this$props$attribute2.contentAlign,
          headingLevel = _this$props$attribute2.headingLevel,
          enableImage = _this$props$attribute2.enableImage,
          enableBadge = _this$props$attribute2.enableBadge,
          enablePrice = _this$props$attribute2.enablePrice,
          enableDiscount = _this$props$attribute2.enableDiscount,
          enableDescription = _this$props$attribute2.enableDescription,
          enableLine = _this$props$attribute2.enableLine,
          priceAfterTitle = _this$props$attribute2.priceAfterTitle;

      var titleTagName = 'h' + headingLevel;
      return pricelistContents.map(function (_ref, index) {
        var title = _ref.title,
            description = _ref.description,
            image = _ref.image,
            price = _ref.price,
            discount = _ref.discount,
            badge = _ref.badge;


        return React.createElement(
          'div',
          { key: index, className: 'qubely-pricelist-item qubely-pricelist-item-' + contentAlign },
          React.createElement(
            Tooltip,
            { text: __('Delete this item') },
            React.createElement(
              'span',
              { className: 'qubely-repeatable-action-remove', role: 'button', onClick: function onClick() {
                  return _this.removePricelistItem(index);
                } },
              React.createElement('i', { 'class': 'fas fa-close' })
            )
          ),
          React.createElement(
            'div',
            { className: 'qubely-pricelist-content' },
            enableImage == 1 && React.createElement(
              'div',
              { className: 'qubely-pricelist-image-container' },
              React.createElement(
                'div',
                { className: 'qubely-pricelist-content-image' + (image != undefined && image.url != undefined ? '' : ' qubely-empty-image') },
                React.createElement(MediaUpload, {
                  onSelect: function onSelect(value) {
                    return _this.updatePricelistContent('image', value, index);
                  },
                  allowedTypes: ['image'],
                  multiple: false,
                  value: image,
                  render: function render(_ref2) {
                    var open = _ref2.open;
                    return React.createElement(
                      Fragment,
                      null,
                      image != undefined && image.url != undefined ? React.createElement(
                        'div',
                        { className: 'qubely-pricelist-content-image-editor' },
                        React.createElement('img', { src: image.url, alt: __('image') }),
                        React.createElement(
                          'div',
                          { className: 'qubely-media-actions qubely-field-button-list' },
                          React.createElement(
                            Tooltip,
                            { text: __('Edit') },
                            React.createElement(
                              'button',
                              { className: 'qubely-button', 'aria-label': __('Edit'), onClick: open, role: 'button' },
                              React.createElement('span', { 'aria-label': __('Edit'), className: 'fas fa-pencil-alt fa-fw' })
                            )
                          ),
                          React.createElement(
                            Tooltip,
                            { text: __('Remove') },
                            React.createElement(
                              'button',
                              { className: 'qubely-button', 'aria-label': __('Remove'), onClick: function onClick() {
                                  return _this.updatePricelistContent('image', '', index);
                                }, role: 'button' },
                              React.createElement('span', { 'aria-label': __('Close'), className: 'far fa-trash-alt fa-fw' })
                            )
                          )
                        )
                      ) : React.createElement(
                        'a',
                        { className: 'qubely-insert-image', href: '#', onClick: open },
                        React.createElement(
                          'svg',
                          { 'aria-hidden': 'true', role: 'img', focusable: 'false', 'class': 'dashicon dashicons-insert', xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 20 20' },
                          React.createElement('path', { d: 'M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z' })
                        ),
                        React.createElement(
                          'span',
                          null,
                          __('Insert')
                        )
                      )
                    );
                  }
                }),
                enableBadge && React.createElement(
                  'div',
                  { className: 'qubely-pricelist-badge' },
                  React.createElement(RichText, {
                    placeholder: __('Badge'),
                    tagName: 'div',
                    value: badge,
                    onChange: function onChange(value) {
                      return _this.updatePricelistContent('badge', value, index);
                    },
                    keepPlaceholderOnFocus: true
                  })
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'qubely-pricelist-description-wrapper' },
              React.createElement(
                'div',
                { className: 'qubely-pricelist-description' },
                React.createElement(
                  'div',
                  { className: 'qubely-pricelist-title-wrapper' },
                  React.createElement(RichText, {
                    placeholder: __('Add title'),
                    tagName: titleTagName,
                    className: 'qubely-pricelist-title',
                    value: title,
                    onChange: function onChange(value) {
                      return _this.updatePricelistContent('title', value, index);
                    },
                    keepPlaceholderOnFocus: true
                  }),
                  enableLine && priceAfterTitle == 0 && React.createElement('span', { className: 'qubely-pricelist-line' }),
                  React.createElement(
                    'div',
                    { className: 'qubely-pricelist-price-wrapper' },
                    enableDiscount && React.createElement(RichText, {
                      placeholder: __('Discount Price'),
                      tagName: 'div',
                      className: 'qubely-pricelist-discount',
                      value: discount,
                      onChange: function onChange(value) {
                        return _this.updatePricelistContent('discount', value, index);
                      },
                      keepPlaceholderOnFocus: true
                    }),
                    enablePrice && React.createElement(RichText, {
                      placeholder: __('Add Price'),
                      tagName: 'div',
                      className: 'qubely-pricelist-price',
                      value: price,
                      onChange: function onChange(value) {
                        return _this.updatePricelistContent('price', value, index);
                      },
                      keepPlaceholderOnFocus: true
                    })
                  )
                ),
                enableDescription && React.createElement(RichText, {
                  placeholder: __('Add description'),
                  tagName: 'div',
                  className: 'qubely-pricelist-introtext',
                  value: description,
                  onChange: function onChange(value) {
                    return _this.updatePricelistContent('description', value, index);
                  },
                  keepPlaceholderOnFocus: true
                })
              )
            )
          )
        );
      });
    };

    _this.state = {
      device: 'md',
      spacer: true
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
      var _this2 = this;

      var _props2 = this.props,
          setAttributes = _props2.setAttributes,
          _props2$attributes = _props2.attributes,
          uniqueId = _props2$attributes.uniqueId,
          pricelistItems = _props2$attributes.pricelistItems,
          style = _props2$attributes.style,
          headingLevel = _props2$attributes.headingLevel,
          priceAfterTitle = _props2$attributes.priceAfterTitle,
          headingTypography = _props2$attributes.headingTypography,
          headingColor = _props2$attributes.headingColor,
          headingSpacing = _props2$attributes.headingSpacing,
          contentBg = _props2$attributes.contentBg,
          enableContentBorder = _props2$attributes.enableContentBorder,
          contentBorderWidth = _props2$attributes.contentBorderWidth,
          contentBorderColor = _props2$attributes.contentBorderColor,
          contentPadding = _props2$attributes.contentPadding,
          contentBorderRadius = _props2$attributes.contentBorderRadius,
          contentBoxShadow = _props2$attributes.contentBoxShadow,
          contentSpacing = _props2$attributes.contentSpacing,
          contentAlign = _props2$attributes.contentAlign,
          overlayHoverBg = _props2$attributes.overlayHoverBg,
          overlayBg = _props2$attributes.overlayBg,
          height = _props2$attributes.height,
          enableLine = _props2$attributes.enableLine,
          lineBorderWidth = _props2$attributes.lineBorderWidth,
          lineBorderColor = _props2$attributes.lineBorderColor,
          lineBorderStyle = _props2$attributes.lineBorderStyle,
          badgePosition = _props2$attributes.badgePosition,
          enableImage = _props2$attributes.enableImage,
          imagePosition = _props2$attributes.imagePosition,
          imageBorderRadius = _props2$attributes.imageBorderRadius,
          imageSize = _props2$attributes.imageSize,
          imageSpacing = _props2$attributes.imageSpacing,
          enableBadge = _props2$attributes.enableBadge,
          badgePadding = _props2$attributes.badgePadding,
          badgeBorderRadius = _props2$attributes.badgeBorderRadius,
          badgeTypography = _props2$attributes.badgeTypography,
          badgeBg = _props2$attributes.badgeBg,
          badgeColor = _props2$attributes.badgeColor,
          enablePrice = _props2$attributes.enablePrice,
          priceTypography = _props2$attributes.priceTypography,
          priceColor = _props2$attributes.priceColor,
          enableDescription = _props2$attributes.enableDescription,
          descriptionTypography = _props2$attributes.descriptionTypography,
          descriptionColor = _props2$attributes.descriptionColor,
          enableDiscount = _props2$attributes.enableDiscount,
          discountTypography = _props2$attributes.discountTypography,
          discountColor = _props2$attributes.discountColor;
      var device = this.state.device;


      if (uniqueId) {
        CssGenerator(this.props.attributes, 'pricelist', uniqueId);
      }

      return React.createElement(
        Fragment,
        null,
        React.createElement(
          InspectorControls,
          { key: 'inspector' },
          React.createElement(
            PanelBody,
            { title: __('General Settings') },
            React.createElement(Range, {
              min: 2,
              max: 100,
              label: __('Number of Items'),
              value: pricelistItems,
              onChange: function onChange(value) {
                return _this2.updatePricelistContent(value > pricelistItems ? 'add' : 'delete');
              }
            }),
            React.createElement(Toggle, { label: __('Price After Title'), value: priceAfterTitle, onChange: function onChange(val) {
                return setAttributes({ priceAfterTitle: val });
              } })
          ),
          React.createElement(
            PanelBody,
            { title: __('Price List Layouts'), initialOpen: false },
            React.createElement(Styles, { columns: 3, value: style, onChange: function onChange(val) {
                return setAttributes({ style: val });
              },
              options: [{ value: 1, svg: _icons2.default.postgrid_design_1 }, { value: 2, svg: _icons2.default.postgrid_design_3 }, { value: 3, svg: _icons2.default.postgrid_design_6 }]
            }),
            React.createElement(Alignment, { label: __('Alignment'), value: contentAlign, onChange: function onChange(val) {
                return setAttributes({ contentAlign: val });
              }, alignmentType: 'content', disableJustify: true }),
            style != 3 && React.createElement(
              Fragment,
              null,
              React.createElement(Color, { label: __('Background Color'), value: contentBg, onChange: function onChange(value) {
                  return setAttributes({ contentBg: value });
                } }),
              React.createElement(Toggle, { label: __('Enable Border'), value: enableContentBorder, onChange: function onChange(val) {
                  return setAttributes({ enableContentBorder: val });
                } }),
              enableContentBorder == 1 && React.createElement(
                Fragment,
                null,
                React.createElement(Range, { label: __('Border Width'), value: contentBorderWidth, onChange: function onChange(val) {
                    return setAttributes({ contentBorderWidth: val });
                  }, min: 1, max: 5, responsive: true, device: device, unit: ['px'], onDeviceChange: function onDeviceChange(value) {
                    return _this2.setState({ device: value });
                  } }),
                React.createElement(Color, { label: __('Border Color'), value: contentBorderColor, onChange: function onChange(value) {
                    return setAttributes({ contentBorderColor: value });
                  } }),
                React.createElement(Separator, null)
              )
            ),
            style === 3 && React.createElement(
              Tabs,
              null,
              React.createElement(
                Tab,
                { tabTitle: __('Normal') },
                React.createElement(ColorAdvanced, { label: __('Overlay'), value: overlayBg, onChange: function onChange(value) {
                    return setAttributes({ overlayBg: value });
                  } })
              ),
              React.createElement(
                Tab,
                { tabTitle: __('Hover') },
                React.createElement(ColorAdvanced, { label: __('Hover Overlay'), value: overlayHoverBg, onChange: function onChange(value) {
                    return setAttributes({ overlayHoverBg: value });
                  } })
              )
            ),
            style === 3 && React.createElement(Range, { label: __('Height'), value: height, onChange: function onChange(val) {
                return setAttributes({ height: val });
              }, min: 0, max: 500, responsive: true, unit: ['px', 'em', '%'], device: device, onDeviceChange: function onDeviceChange(value) {
                return _this2.setState({ device: value });
              } }),
            React.createElement(BorderRadius, { label: __('Radius'), value: contentBorderRadius, onChange: function onChange(val) {
                return setAttributes({ contentBorderRadius: val });
              }, min: 0, max: 100, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                return _this2.setState({ device: value });
              } }),
            React.createElement(BoxShadow, { label: __('Box-Shadow'), value: contentBoxShadow, onChange: function onChange(val) {
                return setAttributes({ contentBoxShadow: val });
              }, disableInset: true }),
            React.createElement(Range, { label: __('Spacing'), value: contentSpacing, onChange: function onChange(val) {
                return setAttributes({ contentSpacing: val });
              }, min: 0, max: 100, responsive: true, unit: ['px', 'em', '%'], device: device, onDeviceChange: function onDeviceChange(value) {
                return _this2.setState({ device: value });
              } }),
            React.createElement(Padding, { label: __('Padding'), value: contentPadding, onChange: function onChange(val) {
                return setAttributes({ contentPadding: val });
              }, min: 0, max: 200, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                return _this2.setState({ device: value });
              } })
          ),
          priceAfterTitle == 0 && React.createElement(
            PanelBody,
            { title: __('Line Style'), initialOpen: false },
            React.createElement(Toggle, { label: __('Enable Line'), value: enableLine, onChange: function onChange(val) {
                return setAttributes({ enableLine: val });
              } }),
            enableLine == 1 && React.createElement(
              Fragment,
              null,
              React.createElement(Range, { label: __('Border Width'), value: lineBorderWidth, onChange: function onChange(val) {
                  return setAttributes({ lineBorderWidth: val });
                }, min: 1, max: 5, responsive: true, device: device, unit: ['px'], onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } }),
              React.createElement(Color, { label: __('Border Color'), value: lineBorderColor, onChange: function onChange(value) {
                  return setAttributes({ lineBorderColor: value });
                } }),
              React.createElement(Select, {
                label: __('Position'),
                options: ['solid', 'dotted', 'dashed'],
                value: lineBorderStyle,
                onChange: function onChange(value) {
                  return setAttributes({ lineBorderStyle: value });
                }
              })
            )
          ),
          React.createElement(
            PanelBody,
            { title: __('Content'), initialOpen: false },
            React.createElement(Headings, { label: __('Heading Tag'), selectedLevel: headingLevel, onChange: function onChange(value) {
                return setAttributes({ headingLevel: value });
              } }),
            React.createElement(Typography, { label: __('Heading Typography'), value: headingTypography, onChange: function onChange(val) {
                return setAttributes({ headingTypography: val });
              }, device: device, onDeviceChange: function onDeviceChange(value) {
                return _this2.setState({ device: value });
              } }),
            React.createElement(Color, { label: __('Heading Color'), value: headingColor, onChange: function onChange(value) {
                return setAttributes({ headingColor: value });
              } }),
            React.createElement(Range, { label: __('Heading Spacing'), value: headingSpacing, onChange: function onChange(val) {
                return setAttributes({ headingSpacing: val });
              }, min: 0, max: 100, responsive: true, unit: ['px', 'em', '%'], device: device, onDeviceChange: function onDeviceChange(value) {
                return _this2.setState({ device: value });
              } }),
            React.createElement(Separator, null),
            React.createElement(Toggle, { label: __('Enable Description'), value: enableDescription, onChange: function onChange(val) {
                return setAttributes({ enableDescription: val });
              } }),
            enableDescription == 1 && React.createElement(
              Fragment,
              null,
              React.createElement(Typography, { label: __('Description Typography'), value: descriptionTypography, onChange: function onChange(val) {
                  return setAttributes({ descriptionTypography: val });
                }, device: device, onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } }),
              React.createElement(Color, { label: __('Description Color'), value: descriptionColor, onChange: function onChange(value) {
                  return setAttributes({ descriptionColor: value });
                } })
            ),
            React.createElement(Separator, null),
            React.createElement(Toggle, { label: __('Enable Price'), value: enablePrice, onChange: function onChange(val) {
                return setAttributes({ enablePrice: val });
              } }),
            enablePrice == 1 && React.createElement(
              Fragment,
              null,
              React.createElement(Typography, { label: __('Price Typography'), value: priceTypography, onChange: function onChange(val) {
                  return setAttributes({ priceTypography: val });
                }, device: device, onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } }),
              React.createElement(Color, { label: __('Price Color'), value: priceColor, onChange: function onChange(value) {
                  return setAttributes({ priceColor: value });
                } })
            ),
            React.createElement(Toggle, { label: __('Enable Discount'), value: enableDiscount, onChange: function onChange(val) {
                return setAttributes({ enableDiscount: val });
              } }),
            enableDiscount == 1 && React.createElement(
              Fragment,
              null,
              React.createElement(Typography, { label: __('Discount Typography'), value: discountTypography, onChange: function onChange(val) {
                  return setAttributes({ discountTypography: val });
                }, device: device, onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } }),
              React.createElement(Color, { label: __('Discount Color'), value: discountColor, onChange: function onChange(value) {
                  return setAttributes({ discountColor: value });
                } })
            )
          ),
          React.createElement(
            PanelBody,
            { title: __('Image'), initialOpen: false },
            React.createElement(Toggle, { label: __('Enable'), value: enableImage, onChange: function onChange(val) {
                return setAttributes({ enableImage: val });
              } }),
            enableImage == 1 && style != 3 && React.createElement(
              Fragment,
              null,
              React.createElement(RadioAdvanced, { label: __('Position'), value: imagePosition, onChange: function onChange(value) {
                  return setAttributes({ imagePosition: value });
                },
                options: [{ label: __('Left'), value: 'left', title: __('Left') }, { label: __('Top'), value: 'top', title: __('Top') }]
              }),
              React.createElement(Range, { label: __('Size'), value: imageSize, onChange: function onChange(val) {
                  return setAttributes({ imageSize: val });
                }, min: 0, max: 500, responsive: true, unit: ['px', 'em', '%'], device: device, onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } }),
              React.createElement(BorderRadius, { label: __('Radius'), value: imageBorderRadius, onChange: function onChange(val) {
                  return setAttributes({ imageBorderRadius: val });
                }, min: 0, max: 100, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } }),
              React.createElement(Range, { label: __('Spacing'), value: imageSpacing, onChange: function onChange(val) {
                  return setAttributes({ imageSpacing: val });
                }, min: 0, max: 100, responsive: true, unit: ['px', 'em', '%'], device: device, onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } })
            )
          ),
          React.createElement(
            PanelBody,
            { title: __('Badge'), initialOpen: false },
            React.createElement(Toggle, { label: __('Enable'), value: enableBadge, onChange: function onChange(val) {
                return setAttributes({ enableBadge: val });
              } }),
            enableBadge == 1 && React.createElement(
              Fragment,
              null,
              React.createElement(RadioAdvanced, { label: __('Position'), value: badgePosition, onChange: function onChange(value) {
                  return setAttributes({ badgePosition: value });
                },
                options: [{ label: __('Left Top'), value: 'left', title: __('Left Top') }, { label: __('Right Top'), value: 'right', title: __('Right Top') }]
              }),
              React.createElement(Typography, { label: __('Typography'), value: badgeTypography, onChange: function onChange(val) {
                  return setAttributes({ badgeTypography: val });
                }, device: device, onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } }),
              React.createElement(Color, { label: __('Color'), value: badgeColor, onChange: function onChange(value) {
                  return setAttributes({ badgeColor: value });
                } }),
              React.createElement(Color, { label: __('Background Color'), value: badgeBg, onChange: function onChange(value) {
                  return setAttributes({ badgeBg: value });
                } }),
              React.createElement(BorderRadius, { label: __('Radius'), value: badgeBorderRadius, onChange: function onChange(val) {
                  return setAttributes({ badgeBorderRadius: val });
                }, min: 0, max: 100, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } }),
              React.createElement(Padding, { label: __('Padding'), value: badgePadding, onChange: function onChange(val) {
                  return setAttributes({ badgePadding: val });
                }, min: 0, max: 200, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                  return _this2.setState({ device: value });
                } })
            )
          )
        ),
        React.createElement(
          BlockControls,
          null,
          React.createElement(
            Toolbar,
            null,
            React.createElement(InlineToolbar, _extends({
              data: [{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]
            }, this.props, {
              prevState: this.state
            }))
          )
        ),
        React.createElement(
          'div',
          { className: 'qubely-block-' + uniqueId },
          React.createElement(
            'div',
            { className: 'qubely-block-pricelist qubely-pricelist-item-' + style },
            React.createElement(
              'div',
              { className: 'qubely-pricelist-items' },
              this.renderPricelist()
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

/***/ "./src/blocks/pricelist/Save.js":
/*!**************************************!*\
  !*** ./src/blocks/pricelist/Save.js ***!
  \**************************************/
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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Save.__proto__ || Object.getPrototypeOf(Save)).call.apply(_ref, [this].concat(args))), _this), _this.renderPricelist = function () {
            var _this$props$attribute = _this.props.attributes,
                pricelistContents = _this$props$attribute.pricelistContents,
                enableLine = _this$props$attribute.enableLine,
                headingLevel = _this$props$attribute.headingLevel,
                enableImage = _this$props$attribute.enableImage,
                contentAlign = _this$props$attribute.contentAlign,
                enableBadge = _this$props$attribute.enableBadge,
                enableDiscount = _this$props$attribute.enableDiscount,
                enablePrice = _this$props$attribute.enablePrice,
                enableDescription = _this$props$attribute.enableDescription,
                priceAfterTitle = _this$props$attribute.priceAfterTitle;


            var titleTagName = 'h' + headingLevel;

            return pricelistContents.map(function (_ref2, index) {
                var title = _ref2.title,
                    description = _ref2.description,
                    image = _ref2.image,
                    badge = _ref2.badge,
                    discount = _ref2.discount,
                    price = _ref2.price;

                return React.createElement(
                    'div',
                    { key: index, className: 'qubely-pricelist-item qubely-pricelist-item-' + contentAlign },
                    React.createElement(
                        'div',
                        { className: 'qubely-pricelist-content' },
                        enableImage == 1 && image != undefined && image.url != undefined && React.createElement(
                            'div',
                            { className: 'qubely-pricelist-image-container' },
                            React.createElement('img', { src: image.url, alt: title }),
                            enableBadge && React.createElement(RichText.Content, { tagName: 'div', className: 'qubely-pricelist-badge', value: badge })
                        ),
                        React.createElement(
                            'div',
                            { className: 'qubely-pricelist-description-wrapper' },
                            React.createElement(
                                'div',
                                { className: 'qubely-pricelist-description' },
                                React.createElement(
                                    'div',
                                    { className: 'qubely-pricelist-title-wrapper' },
                                    React.createElement(RichText.Content, { tagName: titleTagName, className: 'qubely-pricelist-title', value: title }),
                                    enableLine && priceAfterTitle == 0 && React.createElement('span', { className: 'qubely-pricelist-line' }),
                                    React.createElement(
                                        'div',
                                        { className: 'qubely-pricelist-price-wrapper' },
                                        enableDiscount && React.createElement(RichText.Content, { tagName: 'div', className: 'qubely-pricelist-discount', value: discount }),
                                        enablePrice && React.createElement(RichText.Content, { tagName: 'div', className: 'qubely-pricelist-price', value: price })
                                    )
                                ),
                                enableDescription && React.createElement(RichText.Content, { tagName: 'div', className: 'qubely-pricelist-introtext', value: description })
                            )
                        )
                    )
                );
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Save, [{
        key: 'render',
        value: function render() {
            var _props$attributes = this.props.attributes,
                uniqueId = _props$attributes.uniqueId,
                animation = _props$attributes.animation,
                style = _props$attributes.style;

            return React.createElement(
                'div',
                _extends({ className: 'qubely-block-' + uniqueId }, animationAttr(animation)),
                React.createElement(
                    'div',
                    { className: 'qubely-block-pricelist qubely-pricelist-item-' + style },
                    React.createElement(
                        'div',
                        { className: 'qubely-pricelist-items' },
                        this.renderPricelist()
                    )
                )
            );
        }
    }]);

    return Save;
}(Component);

exports.default = Save;

/***/ }),

/***/ "./src/blocks/pricelist/index.js":
/*!***************************************!*\
  !*** ./src/blocks/pricelist/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./src/blocks/pricelist/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/pricelist/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/pricelist/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('qubely/pricelist', {
				title: __('Price List'),
				category: 'qubely',
				description: 'Showcase detailed with Qubely Price List.',
				icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/block-testimonial-carousel.svg', alt: __('Price List') }),
				keywords: [__('Price List'), __('Pricing')],
				attributes: {
								uniqueId: { type: 'string', default: '' },
								spacer: {
												type: 'object',
												default: {
																spaceTop: {
																				md: '10',
																				unit: "px"
																},
																spaceBottom: {
																				md: '10',
																				unit: "px"
																}
												},
												style: [{ selector: '{{QUBELY}}' }]
								},
								pricelistContents: {
												type: 'Array',
												default: [{ title: 'Qubely Blocks', badge: 'Hot', price: '$20', discount: '$10', description: 'Qubely offers a rich collection of highly customizable dedicated Gutenberg blocks.' }, { title: 'Pre-made Sections', badge: 'Hot', price: '$30', discount: '$15', description: 'Qubely has a rich library of ready sections that can be imported and used as blocks on the Gutenberg editor.' }, { title: 'Rich Blocks Collection', badge: 'Hot', price: '$40', discount: '$25', description: 'Get a rich collection of blocks that are highly customizable and easy to use even for the beginners.' }, { title: 'Layout Packs', badge: 'Hot', price: '$50', discount: '$35', description: 'Qubely gives you many beautiful template layouts completely free of cost. These can also be customized and styled your way.' }, { title: 'Smart Layout Builder', badge: 'Hot', price: '$60', discount: '$45', description: 'Its row-column structure lets you take 1 to as many as 6 columns in a single row.' }]
								},

								// Content
								style: {
												type: 'number',
												default: 1
								},
								contentAlign: {
												type: 'string',
												default: 'left'
								},
								enableContentBorder: {
												type: 'boolean',
												default: false
								},
								contentBorderWidth: {
												type: 'object',
												default: {
																md: 1,
																unit: 'px'
												},
												style: [{
																condition: [{ key: 'style', relation: '===', value: '1' }, { key: 'style', relation: '!=', value: '3' }, { key: 'enableContentBorder', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1 {border-style: solid; border-width: {{contentBorderWidth}};}'
												}, {
																condition: [{ key: 'style', relation: '===', value: '2' }, { key: 'style', relation: '!=', value: '3' }, { key: 'enableContentBorder', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content {border-style: solid; border-width: {{contentBorderWidth}};}'
												}]
								},
								contentBorderColor: {
												type: 'string',
												default: '#F6F7FB',
												style: [{
																condition: [{ key: 'style', relation: '===', value: '1' }, { key: 'style', relation: '!=', value: '3' }, { key: 'enableContentBorder', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1 {border-color: {{contentBorderColor}};}'
												}, {
																condition: [{ key: 'style', relation: '===', value: '2' }, { key: 'style', relation: '!=', value: '3' }, { key: 'enableContentBorder', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content {border-color: {{contentBorderColor}};}'
												}]
								},
								contentBg: {
												type: 'string',
												default: '#F9F9F9',
												style: [{
																condition: [{ key: 'style', relation: '===', value: '1' }],
																selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1 {background-color: {{contentBg}};}'
												}, {
																condition: [{ key: 'style', relation: '===', value: '2' }],
																selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content {background-color: {{contentBg}};}'
												}]
								},
								height: {
												type: 'object',
												default: {
																md: '200',
																unit: 'px'
												},
												style: [{
																condition: [{ key: 'enableImage', relation: '==', value: true }, { key: 'style', relation: '===', value: '3' }],
																selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-content, {{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container .qubely-empty-image {height: {{height}};}'
												}]
								},
								contentSpacing: {
												type: 'object',
												default: {
																md: 30,
																unit: 'px'
												},
												style: [{ selector: '{{QUBELY}} .qubely-pricelist-item {margin-bottom: {{contentSpacing}};}' }]
								},
								contentPadding: {
												type: 'object',
												default: {
																openPadding: 1,
																paddingType: 'global',
																unit: 'px',
																global: {
																				md: 30
																}
												},
												style: [{
																condition: [{ key: 'style', relation: '===', value: '1' }],
																selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1'
												}, {
																condition: [{ key: 'style', relation: '===', value: '2' }],
																selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content'
												}, {
																condition: [{ key: 'style', relation: '==', value: '3' }],
																selector: '{{QUBELY}} .qubely-pricelist-item-3 .qubely-pricelist-content .qubely-pricelist-description'
												}]
								},
								contentBorderRadius: {
												type: 'object',
												default: {
																openBorderRadius: 1,
																radiusType: 'global',
																global: {
																				md: 5
																},
																unit: 'px'
												},
												style: [{
																condition: [{ key: 'style', relation: '===', value: '1' }],
																selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1'
												}, {
																condition: [{ key: 'style', relation: '===', value: '2' }],
																selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content'
												}, {
																condition: [{ key: 'style', relation: '===', value: '3' }],
																selector: '{{QUBELY}} .qubely-pricelist-item-3 .qubely-pricelist-content'
												}]
								},
								contentBoxShadow: {
												type: 'object',
												default: {
																openShadow: true,
																vertical: 3,
																horizontal: 0,
																blur: 6,
																spread: 0,
																color: 'rgba(0,0,0,0.1)'
												},
												style: [{
																condition: [{ key: 'style', relation: '===', value: '1' }],
																selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1'
												}, {
																condition: [{ key: 'style', relation: '===', value: '2' }],
																selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content'
												}, {
																condition: [{ key: 'style', relation: '===', value: '3' }],
																selector: '{{QUBELY}} .qubely-pricelist-item-3 .qubely-pricelist-content'
												}]
								},
								overlayBg: {
												type: 'object', default: {
																type: 'color',
																openColor: 0,
																color: 'rgba(6, 80, 183, 0.7)',
																gradient: { color1: '#1066CC', color2: '#2184F9', direction: 0, start: 0, stop: 100 }
												},
												style: [{
																condition: [{ key: 'style', relation: '==', value: '3' }],
																selector: '{{QUBELY}} .qubely-block-pricelist .qubely-pricelist-image-container .qubely-pricelist-content-image-editor:before'
												}]
								},
								overlayHoverBg: {
												type: 'object', default: {
																type: 'color',
																openColor: 0,
																color: 'rgba(6, 80, 183, 0.8)',
																gradient: { color1: '#1066CC', color2: '#2184F9', direction: 0, start: 0, stop: 100 }
												},
												style: [{
																condition: [{ key: 'style', relation: '==', value: '3' }],
																selector: '{{QUBELY}} .qubely-block-pricelist:hover .qubely-pricelist-image-container .qubely-pricelist-content-image-editor:before'
												}]
								},

								//line
								enableLine: {
												type: 'boolean',
												default: false
								},
								lineBorderStyle: {
												type: 'string',
												default: 'solid',
												style: [{
																condition: [{ key: 'enableLine', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-line {border-bottom-style: {{lineBorderStyle}};}'
												}]
								},
								lineBorderWidth: {
												type: 'object',
												default: {
																md: 1,
																unit: 'px'
												},
												style: [{
																condition: [{ key: 'enableLine', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-line {border-bottom-width: {{lineBorderWidth}};}'
												}]
								},
								lineBorderColor: {
												type: 'string',
												default: '#F6F7FB',
												style: [{
																condition: [{ key: 'enableLine', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-line {border-bottom-color: {{lineBorderColor}};}'
												}]
								},

								// Heading
								headingLevel: {
												type: 'number',
												default: 4
								},
								headingTypography: {
												type: 'object',
												default: {},
												style: [{
																selector: '{{QUBELY}} .qubely-pricelist-title'
												}]
								},
								headingColor: {
												type: 'string',
												default: '',
												style: [{ selector: '{{QUBELY}} .qubely-pricelist-title {color: {{headingColor}};}' }]
								},
								headingSpacing: {
												type: 'object',
												default: {
																md: 10,
																unit: 'px'
												},
												style: [{ selector: '{{QUBELY}} .qubely-pricelist-title {margin: 0 0 {{headingSpacing}} 0;}' }]
								},

								// Discount Price
								enableDescription: {
												type: 'boolean',
												default: true
								},
								descriptionTypography: {
												type: 'object',
												default: {},
												style: [{
																condition: [{ key: 'enableDescription', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-introtext'
												}]
								},
								descriptionColor: {
												type: 'string',
												default: '',
												style: [{
																condition: [{ key: 'enableDescription', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-introtext {color: {{descriptionColor}};}'
												}]
								},

								// Discount Price
								enableDiscount: {
												type: 'boolean',
												default: false
								},
								discountTypography: {
												type: 'object',
												default: {},
												style: [{
																condition: [{ key: 'enableDiscount', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-discount'
												}]
								},
								discountColor: {
												type: 'string',
												default: '',
												style: [{
																condition: [{ key: 'enableDiscount', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-discount {color: {{discountColor}};}'
												}]
								},

								//Price
								priceAfterTitle: {
												type: 'boolean',
												default: false,
												style: [{
																condition: [{ key: 'priceAfterTitle', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-title-wrapper {display: block;}'
												}]
								},
								enablePrice: {
												type: 'boolean',
												default: true
								},
								priceTypography: {
												type: 'object',
												default: {},
												style: [{
																condition: [{ key: 'enablePrice', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-price'
												}]
								},
								priceColor: {
												type: 'string',
												default: '',
												style: [{
																condition: [{ key: 'enablePrice', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-price {color: {{priceColor}};}'
												}]
								},

								//Badge
								enableBadge: {
												type: 'boolean',
												default: true
								},
								badgePosition: {
												type: 'string',
												default: 'before',
												style: [{
																condition: [{ key: 'enableBadge', relation: '==', value: true }, { key: 'badgePosition', relation: '==', value: 'right' }],
																selector: '{{QUBELY}} .qubely-pricelist-image-container .qubely-pricelist-badge {left: auto; right: 15px;}'
												}]
								},
								badgeTypography: {
												type: 'object',
												default: { openTypography: 1, size: { md: 12, unit: 'px' }, height: { md: 15, unit: 'px' } },
												style: [{
																condition: [{ key: 'enableBadge', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-badge'
												}]
								},
								badgeColor: {
												type: 'string',
												default: '#fff',
												style: [{
																condition: [{ key: 'enableBadge', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-badge {color: {{badgeColor}};}'
												}]
								},
								badgeBg: {
												type: 'string',
												default: '#2184F9',
												style: [{
																condition: [{ key: 'enableBadge', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-badge {background: {{badgeBg}};}'
												}]
								},
								badgeBorderRadius: {
												type: 'object',
												default: {
																openBorderRadius: 1,
																radiusType: 'global',
																global: { md: 2 },
																unit: 'px'

												},
												style: [{
																condition: [{ key: 'enableBadge', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-badge'
												}]
								},
								badgePadding: {
												type: 'object',
												// default: {
												// 	openPadding: 1,
												// 	paddingType: 'global',
												// 	unit: 'px',
												// 	global: {
												// 		md: 30
												// 	}
												// },

												default: {
																openPadding: 1,
																paddingType: 'custom',
																custom: {
																				md: '2 6 3 6'
																},
																unit: 'px'
												},

												style: [{
																condition: [{ key: 'enableBadge', relation: '==', value: true }],
																selector: '{{QUBELY}} .qubely-pricelist-badge'
												}]
								},

								//image
								enableImage: {
												type: 'boolean',
												default: true
								},
								imagePosition: {
												type: 'string',
												default: 'left',
												style: [{
																condition: [{ key: 'enableImage', relation: '==', value: true }, { key: 'imagePosition', relation: '==', value: 'left' }, { key: 'style', relation: '!=', value: '3' }],
																selector: '{{QUBELY}} .qubely-pricelist-content {display: -webkit-box; display: -ms-flexbox; display: flex;}'
												}]
								},
								imageBorderRadius: {
												type: 'object',
												default: {},
												style: [{
																condition: [{ key: 'enableImage', relation: '==', value: true }, { key: 'style', relation: '!=', value: '3' }],
																selector: '{{QUBELY}} .qubely-pricelist-image-container img'
												}]
								},
								imageSize: {
												type: 'object',
												default: {
																md: '100',
																unit: 'px'
												},
												style: [{
																condition: [{ key: 'enableImage', relation: '==', value: true }, { key: 'style', relation: '!=', value: '3' }],
																selector: '{{QUBELY}} .qubely-pricelist-image-container {width: {{imageSize}};}'
												}]
								},
								imageSpacing: {
												type: 'object',
												default: {
																md: 20,
																unit: 'px'
												},
												style: [{
																condition: [{ key: 'enableImage', relation: '==', value: true }, { key: 'imagePosition', relation: '==', value: 'left' }, { key: 'style', relation: '!=', value: '3' }],
																selector: '{{QUBELY}} .qubely-pricelist-image-container {margin-right: {{imageSpacing}};}'
												}, {
																condition: [{ key: 'enableImage', relation: '==', value: true }, { key: 'imagePosition', relation: '==', value: 'top' }, { key: 'style', relation: '!=', value: '3' }],
																selector: '{{QUBELY}} .qubely-pricelist-image-container {margin-bottom: {{imageSpacing}};}'
												}]
								},

								//
								pricelistItems: { type: 'number', default: 5 },
								showGlobalSettings: { type: 'boolean', default: true }, // Global Settings
								showContextMenu: { type: 'boolean', default: true }
				},
				edit: _Edit2.default,
				save: _Save2.default
});

/***/ }),

/***/ "./src/blocks/pricelist/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/pricelist/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/pricelist/style.scss");

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
    TextControl = _wp$components.TextControl,
    Tooltip = _wp$components.Tooltip;
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
			    iconStyle = _this$props$attribute.iconStyle,
			    iconUseDefaultStyle = _this$props$attribute.iconUseDefaultStyle,
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
					{ className: 'qubely-team-social-links qubely-team-icon-layout-' + iconStyle + ' qubely-team-icon-style-' + (iconUseDefaultStyle == 1 ? 'default' : 'custom'),
						onClick: function onClick() {
							return _this.handlePanelOpenings('Social');
						} },
					facebook && React.createElement(
						'a',
						{ className: 'qubely-team-social-facebook' },
						React.createElement('i', { 'class': 'fab fa-facebook-f' })
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

		_this.removeCrouselItem = function (index) {
			var _this$props2 = _this.props,
			    setAttributes = _this$props2.setAttributes,
			    carouselItems = _this$props2.attributes.carouselItems;

			var newCarouselItems = JSON.parse(JSON.stringify(carouselItems));
			newCarouselItems.splice(index, 1);
			setAttributes({ carouselItems: newCarouselItems });
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
			var _this$props3 = _this.props,
			    setAttributes = _this$props3.setAttributes,
			    _this$props3$attribut = _this$props3.attributes,
			    carouselItems = _this$props3$attribut.carouselItems,
			    items = _this$props3$attribut.items;

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
          iconStyle = _this$props$attribute.iconStyle,
          iconUseDefaultStyle = _this$props$attribute.iconUseDefaultStyle,
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
          { className: "qubely-team-social-links qubely-team-icon-layout-" + iconStyle + " qubely-team-icon-style-" + (iconUseDefaultStyle == 1 ? 'default' : 'custom'),
            onClick: function onClick() {
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
          { key: index, className: "qubely-carousel-item" },
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
			default: '#3373dc',
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
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Tooltip = _wp$components.Tooltip;
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

		_this.removeCrouselItem = function (index) {
			var _this$props2 = _this.props,
			    setAttributes = _this$props2.setAttributes,
			    carouselItems = _this$props2.attributes.carouselItems;

			var newCarouselItems = JSON.parse(JSON.stringify(carouselItems));
			newCarouselItems.splice(index, 1);
			setAttributes({ carouselItems: newCarouselItems });
		};

		_this.renderTestimonials = function () {
			var _this$props$attribute2 = _this.props.attributes,
			    layout = _this$props$attribute2.layout,
			    showRatings = _this$props$attribute2.showRatings,
			    carouselItems = _this$props$attribute2.carouselItems,
			    quoteIcon = _this$props$attribute2.quoteIcon,
			    ratings = _this$props$attribute2.ratings;


			return carouselItems.map(function (item, index) {
				var message = item.message;

				return React.createElement(
					'div',
					{ key: index, className: 'qubely-carousel-item' },
					React.createElement(
						Tooltip,
						{ text: __('Delete this item') },
						React.createElement(
							'span',
							{ className: 'qubely-repeatable-action-remove', role: 'button', onClick: function onClick() {
									return _this.removeCrouselItem(index);
								} },
							React.createElement('i', { 'class': 'fas fa-close' })
						)
					),
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
			var _this$props3 = _this.props,
			    setAttributes = _this$props3.setAttributes,
			    _this$props3$attribut = _this$props3.attributes,
			    carouselItems = _this$props3$attribut.carouselItems,
			    items = _this$props3$attribut.items;

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
          { key: index, className: "qubely-carousel-item" },
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

    //form 
    form_classic: React.createElement('img', { src: img_path + '/form/classic.svg', alt: __('Classic') }),
    form_material: React.createElement('img', { src: img_path + '/form/material.svg', alt: __('Material') }),
    // Testimonial Carousel icon.
    testimonial_1: React.createElement('img', { src: img_path + '/testimonial/1.svg', alt: __('Testimonial 1') }),
    testimonial_2: React.createElement('img', { src: img_path + '/testimonial/2.svg', alt: __('Testimonial 2') }),
    testimonial_3: React.createElement('img', { src: img_path + '/testimonial/3.svg', alt: __('Testimonial 3') }),

    // Team Carousel Icon
    teamcarousel_1: React.createElement('img', { src: img_path + '/teamcarousel/1.svg', alt: __('Team Carousel 1') }),
    teamcarousel_2: React.createElement('img', { src: img_path + '/teamcarousel/2.svg', alt: __('Team Carousel 2') }),
    teamcarousel_3: React.createElement('img', { src: img_path + '/teamcarousel/3.svg', alt: __('Team Carousel 3') }),

    // Social Share Icons Style.
    social_normal: React.createElement('img', { src: img_path + '/socialicon/normal.svg', alt: __('Normal') }),
    social_fill: React.createElement('img', { src: img_path + '/socialicon/fill.svg', alt: __('Fill') }),

    // PostGrid Icon
    postgrid_1: React.createElement('img', { src: img_path + '/postgrid/1.svg', alt: __('Layout 1') }),
    postgrid_2: React.createElement('img', { src: img_path + '/postgrid/2.svg', alt: __('Layout 2') }),
    postgrid_3: React.createElement('img', { src: img_path + '/postgrid/pro1.svg', alt: __('Layout 3') }),
    postgrid_4: React.createElement('img', { src: img_path + '/postgrid/pro2.svg', alt: __('Layout 4') }),
    postgrid_5: React.createElement('img', { src: img_path + '/postgrid/pro3.svg', alt: __('Layout 4') }),

    // Postgrid design 
    postgrid_design_1: React.createElement('img', { src: img_path + '/postgrid/11.svg', alt: __('Design 1') }),
    postgrid_design_2: React.createElement('img', { src: img_path + '/postgrid/12.svg', alt: __('Design 2') }),
    postgrid_design_3: React.createElement('img', { src: img_path + '/postgrid/13.svg', alt: __('Design 3') }),
    postgrid_design_4: React.createElement('img', { src: img_path + '/postgrid/14.svg', alt: __('Design 4') }),
    postgrid_design_5: React.createElement('img', { src: img_path + '/postgrid/15.svg', alt: __('Design 5') }),
    postgrid_design_6: React.createElement('img', { src: img_path + '/postgrid/16.svg', alt: __('Design 6') }),

    // Image Carousel
    imagecarousel_1: React.createElement('img', { src: img_path + '/imagecarousel/layout1.svg', alt: __('Design 1') }),
    imagecarousel_2: React.createElement('img', { src: img_path + '/imagecarousel/layout2.svg', alt: __('Design 2') }),
    imagecarousel_3: React.createElement('img', { src: img_path + '/imagecarousel/layout3.svg', alt: __('Design 3') }),
    imagecarousel_4: React.createElement('img', { src: img_path + '/imagecarousel/layout4.svg', alt: __('Design 4') }),
    imagecarousel_5: React.createElement('img', { src: img_path + '/imagecarousel/layout5.svg', alt: __('Design 5') }),
    imagecarousel_6: React.createElement('img', { src: img_path + '/imagecarousel/layout6.svg', alt: __('Design 6') })

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


__webpack_require__(/*! ./blocks/form */ "./src/blocks/form/index.js");

__webpack_require__(/*! ./blocks/postgrid */ "./src/blocks/postgrid/index.js");

__webpack_require__(/*! ./blocks/testimonialcarousel */ "./src/blocks/testimonialcarousel/index.js");

__webpack_require__(/*! ./blocks/teamcarousel */ "./src/blocks/teamcarousel/index.js");

__webpack_require__(/*! ./blocks/pricelist */ "./src/blocks/pricelist/index.js");

__webpack_require__(/*! ./blocks/imagecarousel */ "./src/blocks/imagecarousel/index.js");

__webpack_require__(/*! ./blocks/postcarousel */ "./src/blocks/postcarousel/index.js");

__webpack_require__(/*! ./blocks/gallery */ "./src/blocks/gallery/index.js");

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