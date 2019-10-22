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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/fields/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/fields/style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-form-field-wrapper .qubely-form-field {\n  width: 100%; }\n  .qubely-form-field-wrapper .qubely-form-field .qubely-form-date-picker {\n    width: fit-content; }\n  .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox, .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio {\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: -10px;\n    margin-right: -10px; }\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-checkbox-auto .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-checkbox-auto .qubely-form-field-radio-option, .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-radio-auto .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-radio-auto .qubely-form-field-radio-option, .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-checkbox-auto .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-checkbox-auto .qubely-form-field-radio-option, .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-radio-auto .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-radio-auto .qubely-form-field-radio-option {\n      width: auto;\n      padding-left: 10px;\n      padding-right: 10px; }\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-checkbox-1-column .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-checkbox-1-column .qubely-form-field-radio-option, .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-radio-1-column .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-radio-1-column .qubely-form-field-radio-option, .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-checkbox-1-column .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-checkbox-1-column .qubely-form-field-radio-option, .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-radio-1-column .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-radio-1-column .qubely-form-field-radio-option {\n      width: 100%;\n      padding-left: 10px;\n      padding-right: 10px; }\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-checkbox-2-column .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-checkbox-2-column .qubely-form-field-radio-option, .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-radio-2-column .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-radio-2-column .qubely-form-field-radio-option, .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-checkbox-2-column .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-checkbox-2-column .qubely-form-field-radio-option, .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-radio-2-column .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-radio-2-column .qubely-form-field-radio-option {\n      width: 50%;\n      padding-left: 10px;\n      padding-right: 10px; }\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-checkbox-3-column .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-checkbox-3-column .qubely-form-field-radio-option, .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-radio-3-column .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-checkbox.qubely-radio-3-column .qubely-form-field-radio-option, .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-checkbox-3-column .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-checkbox-3-column .qubely-form-field-radio-option, .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-radio-3-column .qubely-form-field-checkbox-option,\n    .qubely-form-field-wrapper .qubely-form-field.qubely-form-radio.qubely-radio-3-column .qubely-form-field-radio-option {\n      width: 33%;\n      padding-left: 10px;\n      padding-right: 10px; }\n  .qubely-form-field-wrapper .qubely-form-field .qubely-form-field-radio-option,\n  .qubely-form-field-wrapper .qubely-form-field .qubely-form-field-checkbox-option {\n    display: flex;\n    align-items: center; }\n    .qubely-form-field-wrapper .qubely-form-field .qubely-form-field-radio-option:hover .qubely-action-remove-option,\n    .qubely-form-field-wrapper .qubely-form-field .qubely-form-field-checkbox-option:hover .qubely-action-remove-option {\n      display: block; }\n    .qubely-form-field-wrapper .qubely-form-field .qubely-form-field-radio-option .qubely-action-remove-option,\n    .qubely-form-field-wrapper .qubely-form-field .qubely-form-field-checkbox-option .qubely-action-remove-option {\n      display: none;\n      font-size: 10px;\n      width: 18px;\n      height: 18px;\n      line-height: 18px;\n      text-align: center;\n      background: rgba(0, 0, 0, 0.8);\n      color: #fff;\n      margin-left: 10px;\n      border-radius: 10px;\n      z-index: 1;\n      cursor: pointer; }\n  .qubely-form-field-wrapper .qubely-form-field .qubely-action-add-option {\n    color: #2184f9;\n    cursor: pointer; }\n    .qubely-form-field-wrapper .qubely-form-field .qubely-action-add-option .qubely-option-add-icon {\n      margin-right: 5px;\n      -webkit-text-stroke: 2px white; }\n    .qubely-form-field-wrapper .qubely-form-field .qubely-action-add-option .qubely-action-add-text {\n      color: #2184f9; }\n\n.qubely-form-field-wrapper .qubely-form-timepicker {\n  opacity: 0;\n  height: auto;\n  min-width: 150px;\n  max-height: 0;\n  overflow: hidden;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: max-height 0.1s ease-in-out;\n  background: #ffffff;\n  border-radius: 4px;\n  border: none;\n  border-top: transparent;\n  -webkit-box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  text-align: center; }\n\n.qubely-form-field-wrapper .qubely-active {\n  opacity: 1;\n  max-height: 150px;\n  padding: 15px;\n  z-index: 100; }\n\n.qubely-form-field-wrapper .qubely-timePicker-button {\n  cursor: pointer;\n  color: #d7d7d7;\n  line-height: 1;\n  transition: 400ms; }\n  .qubely-form-field-wrapper .qubely-timePicker-button:hover {\n    color: #151515; }\n\n.wp-block-qubely-formfield-time .qubely-form-field-wrapper {\n  position: relative; }\n  .wp-block-qubely-formfield-time .qubely-form-field-wrapper .qubely-form-timepicker.qubely-active {\n    top: 100%; }\n\n.qubely-form-field.qubely-form-number {\n  height: auto; }\n\n.wp-admin .qubely-form-field-wrapper select {\n  height: auto;\n  line-height: inherit; }\n\n.qubely-form-dropdown {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-position: right 50%;\n  background-repeat: no-repeat;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);\n  border-radius: 0;\n  text-transform: capitalize;\n  padding: 5px 10px !important; }\n\n.ui-datepicker-title select {\n  border: 1px solid #ced4d9;\n  margin: 0 2px;\n  background: none; }\n\n.ui-datepicker-calendar tbody td a:hover {\n  background-color: #e3f0ff; }\n\n.qubely-dropdown-field-option,\n.qubely-dropdown-add-field-option {\n  padding: 10px 0px;\n  display: flex;\n  align-items: center; }\n  .qubely-dropdown-field-option .qubely-option-move-icon,\n  .qubely-dropdown-add-field-option .qubely-option-move-icon {\n    cursor: pointer;\n    padding: 0px 10px; }\n  .qubely-dropdown-field-option > div,\n  .qubely-dropdown-add-field-option > div {\n    width: 80%; }\n    .qubely-dropdown-field-option > div .qubely-option,\n    .qubely-dropdown-add-field-option > div .qubely-option {\n      cursor: text;\n      border: 1px solid #d6d6d6;\n      padding: 6px 8px;\n      box-shadow: none; }\n  .qubely-dropdown-field-option .qubely-action-add-option,\n  .qubely-dropdown-add-field-option .qubely-action-add-option {\n    padding: 8px 20px;\n    display: flex;\n    align-items: center;\n    background-color: #ccc;\n    border-radius: 5px;\n    cursor: pointer; }\n\n.qubely-dropdown-add-field-option .qubely-option-move-icon > i {\n  font-size: 15px; }\n\n.qubely-form-date-picker-format .qubely-field-group-btn {\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 15px; }\n  .qubely-form-date-picker-format .qubely-field-group-btn .qubley-group-button {\n    font-size: 11px;\n    padding: 10px 4px; }\n\n.qubely-form-time-picker-format .components-button-group {\n  min-width: 50%;\n  margin-bottom: 15px; }\n\n.qubely-form-time-picker-minute-interval {\n  margin-bottom: 15px; }\n  .qubely-form-time-picker-minute-interval .qubely-field-group-btn {\n    flex-direction: column;\n    align-items: flex-start; }\n    .qubely-form-time-picker-minute-interval .qubely-field-group-btn .qubley-group-button {\n      padding: 5px 10px; }\n\n#ui-datepicker-div {\n  display: none;\n  background-color: #fff;\n  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);\n  margin-top: 0.25rem;\n  border-radius: 0.5rem;\n  padding: 0.5rem; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.ui-datepicker-calendar thead th {\n  padding: 0.25rem 0;\n  text-align: center;\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: #78909c; }\n\n.ui-datepicker-calendar tbody td {\n  width: 2.5rem;\n  text-align: center;\n  padding: 0; }\n\n.ui-datepicker-calendar tbody td a {\n  display: block;\n  border-radius: 0.25rem;\n  line-height: 2rem;\n  transition: 0.3s all;\n  color: #546e7a;\n  font-size: 0.875rem;\n  text-decoration: none; }\n\n.ui-datepicker-calendar tbody td a:hover {\n  background-color: #e0f2f1; }\n\n.ui-datepicker-calendar tbody td a.ui-state-active {\n  background-color: #009688;\n  color: white; }\n\n.ui-datepicker-header a.ui-corner-all {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  width: 2rem;\n  height: 2rem;\n  margin: 0.5rem;\n  border-radius: 0.25rem;\n  transition: 0.3s all; }\n\n.ui-datepicker-header a.ui-corner-all:hover {\n  background-color: #eceff1; }\n\n.ui-datepicker-header a.ui-datepicker-prev {\n  left: 0;\n  background: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDEzIDEzIj48cGF0aCBmaWxsPSIjNDI0NzcwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjI4OCA2LjI5NkwzLjIwMiAyLjIxYS43MS43MSAwIDAgMSAuMDA3LS45OTljLjI4LS4yOC43MjUtLjI4Ljk5OS0uMDA3TDguODAzIDUuOGEuNjk1LjY5NSAwIDAgMSAuMjAyLjQ5Ni42OTUuNjk1IDAgMCAxLS4yMDIuNDk3bC00LjU5NSA0LjU5NWEuNzA0LjcwNCAwIDAgMS0xLS4wMDcuNzEuNzEgMCAwIDEtLjAwNi0uOTk5bDQuMDg2LTQuMDg2eiIvPjwvc3ZnPg==\");\n  background-repeat: no-repeat;\n  background-size: 0.5rem;\n  background-position: 50%;\n  transform: rotate(180deg); }\n\n.ui-datepicker-header a.ui-datepicker-next {\n  right: 0;\n  background: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDEzIDEzIj48cGF0aCBmaWxsPSIjNDI0NzcwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjI4OCA2LjI5NkwzLjIwMiAyLjIxYS43MS43MSAwIDAgMSAuMDA3LS45OTljLjI4LS4yOC43MjUtLjI4Ljk5OS0uMDA3TDguODAzIDUuOGEuNjk1LjY5NSAwIDAgMSAuMjAyLjQ5Ni42OTUuNjk1IDAgMCAxLS4yMDIuNDk3bC00LjU5NSA0LjU5NWEuNzA0LjcwNCAwIDAgMS0xLS4wMDcuNzEuNzEgMCAwIDEtLjAwNi0uOTk5bDQuMDg2LTQuMDg2eiIvPjwvc3ZnPg==\");\n  background-repeat: no-repeat;\n  background-size: 10px;\n  background-position: 50%; }\n\n.ui-datepicker-header a > span {\n  display: none; }\n\n.ui-datepicker-title {\n  text-align: center;\n  line-height: 2rem;\n  margin-bottom: 0.25rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding-bottom: 0.25rem; }\n\n.ui-datepicker-week-col {\n  color: #78909c;\n  font-weight: 400;\n  font-size: 0.75rem; }\n\n.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all table td,\n.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all table th {\n  border: none;\n  word-break: break-all; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/row/style.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/row/style.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-form-row.qubely-frontend,\n.qubely-form-row.qubely-backend > .editor-inner-blocks > .editor-block-list__layout {\n  display: flex; }\n\n.qubely-action-add-form-empty {\n  outline: 1px dashed #8d96a0;\n  width: 100%;\n  color: #555d66;\n  background: rgba(237, 239, 240, 0.8);\n  min-height: 60px;\n  text-align: center;\n  line-height: 60px; }\n  .qubely-action-add-form-empty svg {\n    position: relative;\n    top: 4px;\n    cursor: pointer; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/style.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-form .qubely-form .editor-inner-blocks.block-editor-inner-blocks > .editor-block-list__layout.block-editor-block-list__layout > div:last-child {\n  display: none; }\n\n.qubely-block-form .qubely-form-add-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 300px;\n  margin: 0 auto; }\n  .qubely-block-form .qubely-form-add-item .qubely-action-add-form-field {\n    background: #ffffff;\n    color: #2184f9;\n    border: 1px dashed #2184f9;\n    border-radius: 4px;\n    width: 100%;\n    text-align: center; }\n    .qubely-block-form .qubely-form-add-item .qubely-action-add-form-field .qubely-action-add-form-item {\n      padding: 10px 10px;\n      font-size: 16px; }\n      .qubely-block-form .qubely-form-add-item .qubely-action-add-form-field .qubely-action-add-form-item i {\n        padding: 0px 5px; }\n  .qubely-block-form .qubely-form-add-item .qubely-action-add-form-field:hover {\n    cursor: pointer;\n    background: rgba(33, 132, 249, 0.1);\n    color: #2184f9;\n    border-radius: 5px; }\n\n.qubely-block-form:not(.qubely-layout-material) .qubely-form.is-small .qubely-form-field {\n  padding: 6px 8px; }\n\n.qubely-block-form:not(.qubely-layout-material) .qubely-form.is-medium .qubely-form-field {\n  padding: 8.5px 12px; }\n\n.qubely-block-form:not(.qubely-layout-material) .qubely-form.is-large .qubely-form-field {\n  padding: 14.5px 16px; }\n\n.qubely-form-field-picker:before, .qubely-form-field-picker:after {\n  display: none; }\n\n.qubely-form-field-picker .components-popover__content {\n  box-shadow: 0 22px 54px -15px rgba(0, 0, 0, 0.15);\n  background: #F7F8FC;\n  border-radius: 4px;\n  width: 450px;\n  padding: 20px;\n  border: none;\n  margin-bottom: 10px;\n  margin-top: 10px; }\n\n.qubely-form-field-picker .qubely-form-field-types {\n  display: flex;\n  flex-wrap: wrap; }\n  .qubely-form-field-picker .qubely-form-field-types .qubely-form-field-tabs {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    padding: 5px 0px; }\n    .qubely-form-field-picker .qubely-form-field-types .qubely-form-field-tabs .qubely-form-field-tab {\n      width: 97%;\n      text-align: center;\n      background: #ffffff;\n      border: 1px solid #d6d9dd;\n      border-radius: 4px;\n      padding: 10px 30px;\n      display: flex;\n      align-items: center;\n      margin: 0 0 2px;\n      display: flex;\n      justify-content: center;\n      transition: 400ms; }\n      .qubely-form-field-picker .qubely-form-field-types .qubely-form-field-tabs .qubely-form-field-tab.qubely-active {\n        color: #fff;\n        background-color: #1066cc;\n        border-radius: 5px;\n        cursor: pointer; }\n      .qubely-form-field-picker .qubely-form-field-types .qubely-form-field-tabs .qubely-form-field-tab:hover {\n        background: #f5f5f5; }\n      .qubely-form-field-picker .qubely-form-field-types .qubely-form-field-tabs .qubely-form-field-tab img {\n        margin-right: 10px; }\n  .qubely-form-field-picker .qubely-form-field-types .qubely-form-field-type {\n    background: #fff;\n    border: 1px solid #D6D9DD;\n    border-radius: 4px;\n    padding: 12px 15px;\n    width: 47%;\n    display: flex;\n    align-items: center;\n    margin: 6px;\n    transition: 400ms;\n    justify-content: flex-start;\n    box-sizing: border-box; }\n    .qubely-form-field-picker .qubely-form-field-types .qubely-form-field-type img {\n      margin-right: 10px; }\n    .qubely-form-field-picker .qubely-form-field-types .qubely-form-field-type:hover {\n      background: #f5f5f5; }\n  .qubely-form-field-picker .qubely-form-field-types :hover {\n    cursor: pointer; }\n\n.qubely-form-field-picker .qubely-form-column-options {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap; }\n  .qubely-form-field-picker .qubely-form-column-options .qubely-form-column-option {\n    cursor: pointer;\n    width: 33.333333%;\n    background: transparent;\n    border: none;\n    height: 50px;\n    padding: 0 10px;\n    display: flex;\n    outline: 1px solid transparent;\n    transition: 300ms;\n    opacity: 1; }\n    .qubely-form-field-picker .qubely-form-column-options .qubely-form-column-option i {\n      height: 50px;\n      background: #e2e6ec;\n      border: 1px solid #e2e6ec;\n      border-radius: 3px;\n      display: inline-block;\n      position: relative;\n      transition: 300ms;\n      font-style: normal; }\n    .qubely-form-field-picker .qubely-form-column-options .qubely-form-column-option i:not(:last-of-type) {\n      margin-right: 2px; }\n\n.qubely-form-field-wrapper .qubely-form-field-label {\n  margin-bottom: 5px; }\n\n.qubely-form-field-checkbox-option {\n  margin-bottom: 5px; }\n  .qubely-form-field-checkbox-option .qubely-checkbox-option {\n    color: #535f6a;\n    text-transform: capitalize; }\n  .qubely-form-field-checkbox-option input[type=\"checkbox\"] {\n    margin-top: 3px;\n    border: 1px solid #8d96a0; }\n    .qubely-form-field-checkbox-option input[type=\"checkbox\"]:before {\n      margin: -1px 0 0 -1px !important;\n      font: normal 16px/1 dashicons !important; }\n    .qubely-form-field-checkbox-option input[type=\"checkbox\"]:checked:focus {\n      box-shadow: none; }\n  .qubely-form-field-checkbox-option::last-child {\n    margin-bottom: 0; }\n\n.qubely-form-checkbox {\n  margin-bottom: 5px; }\n  .qubely-form-checkbox .qubely-form-field-checkbox-option {\n    color: #535f6a;\n    text-transform: capitalize; }\n  .qubely-form-checkbox input[type=\"checkbox\"] {\n    margin-top: 2px;\n    border: 1px solid #8d96a0;\n    margin-right: 8px; }\n  .qubely-form-checkbox::last-child {\n    margin-bottom: 0; }\n\n.qubely-form-radio .qubely-form-field-radio-option {\n  margin-bottom: 5px;\n  color: #535f6a;\n  text-transform: capitalize; }\n  .qubely-form-radio .qubely-form-field-radio-option:last-child {\n    margin-bottom: 0; }\n\n.qubely-form-radio input[type=\"radio\"] {\n  margin-top: 0;\n  margin-right: 8px; }\n  .qubely-form-radio input[type=\"radio\"]:checked:focus {\n    box-shadow: none; }\n\n.block-editor-block-list__layout .block-editor-block-list__block.is-selected[data-type=\"qubely/formfield-text\"] > .block-editor-block-list__block-edit:before,\n.block-editor-block-list__layout .block-editor-block-list__block.is-selected[data-type=\"qubely/formfield-email\"] > .block-editor-block-list__block-edit:before,\n.block-editor-block-list__layout .block-editor-block-list__block.is-selected[data-type=\"qubely/formfield-number\"] > .block-editor-block-list__block-edit:before,\n.block-editor-block-list__layout .block-editor-block-list__block.is-selected[data-type=\"qubely/formfield-radio\"] > .block-editor-block-list__block-edit:before,\n.block-editor-block-list__layout .block-editor-block-list__block.is-selected[data-type=\"qubely/formfield-time\"] > .block-editor-block-list__block-edit:before,\n.block-editor-block-list__layout .block-editor-block-list__block.is-selected[data-type=\"qubely/formfield-date\"] > .block-editor-block-list__block-edit:before,\n.block-editor-block-list__layout .block-editor-block-list__block.is-selected[data-type=\"qubely/formfield-textarea\"] > .block-editor-block-list__block-edit:before,\n.block-editor-block-list__layout .block-editor-block-list__block.is-selected[data-type=\"qubely/formfield-dropdown\"] > .block-editor-block-list__block-edit:before,\n.block-editor-block-list__layout .block-editor-block-list__block.is-selected[data-type=\"qubely/formfield-checkbox\"] > .block-editor-block-list__block-edit:before {\n  outline: 1px dashed #9e9e9e;\n  border-color: transparent;\n  border: none;\n  box-shadow: -2px 0 0 0 #9e9e9e;\n  top: 0px;\n  right: 0px;\n  left: 0px;\n  bottom: 0px; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-checkbox\"] > .block-editor-block-list__block-edit > .block-editor-block-contextual-toolbar .block-editor-block-toolbar,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-email\"] > .block-editor-block-list__block-edit > .block-editor-block-contextual-toolbar .block-editor-block-toolbar,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-number\"] > .block-editor-block-list__block-edit > .block-editor-block-contextual-toolbar .block-editor-block-toolbar,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-radio\"] > .block-editor-block-list__block-edit > .block-editor-block-contextual-toolbar .block-editor-block-toolbar,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-date\"] > .block-editor-block-list__block-edit > .block-editor-block-contextual-toolbar .block-editor-block-toolbar,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-time\"] > .block-editor-block-list__block-edit > .block-editor-block-contextual-toolbar .block-editor-block-toolbar,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-textarea\"] > .block-editor-block-list__block-edit > .block-editor-block-contextual-toolbar .block-editor-block-toolbar,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-dropdown\"] > .block-editor-block-list__block-edit > .block-editor-block-contextual-toolbar .block-editor-block-toolbar,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-text\"] > .block-editor-block-list__block-edit > .block-editor-block-contextual-toolbar .block-editor-block-toolbar {\n  top: 14px;\n  left: 16px; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-text\"] > .editor-block-list__insertion-point,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-email\"] > .editor-block-list__insertion-point,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-number\"] > .editor-block-list__insertion-point,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-radio\"] > .editor-block-list__insertion-point,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-time\"] > .editor-block-list__insertion-point,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-date\"] > .editor-block-list__insertion-point,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-textarea\"] > .editor-block-list__insertion-point,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-dropdown\"] > .editor-block-list__insertion-point,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/formfield-checkbox\"] > .editor-block-list__insertion-point {\n  display: none; }\n\n[data-type=\"qubely/form-row\"]:hover .block-editor-block-list__block[data-type=\"qubely/form-column\"] > .block-editor-block-list__block-edit:before {\n  outline: 1px dashed #2184F9;\n  border-color: transparent;\n  border: none;\n  box-shadow: -2px 0 0 0 #2184F9;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0; }\n\n.block-editor-block-list__block[data-type=\"qubely/form-column\"] > .block-editor-block-list__block-edit > div:last-child {\n  border: 8px solid transparent; }\n\n.block-editor-block-list__block.is-selected[data-type=\"qubely/form-column\"] > .block-editor-block-list__block-edit > div:last-child {\n  border: 8px solid rgba(33, 132, 249, 0.1); }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/form-column\"] > .block-editor-block-list__block-edit > .block-editor-block-contextual-toolbar .block-editor-block-toolbar {\n  top: 14px;\n  left: 16px; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/form-column\"] > .editor-block-list__insertion-point {\n  display: none; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/form-row\"] .block-editor-block-list__block-edit {\n  margin: 0; }\n\n.block-editor-block-list__layout .block-editor-block-list__block.is-selected[data-type=\"qubely/form-row\"] > .block-editor-block-list__block-edit:before,\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/form-row\"]:hover > .block-editor-block-list__block-edit:before {\n  outline: 1px dashed green;\n  border-color: transparent;\n  border: none;\n  box-shadow: -2px 0 0 0 green;\n  top: 0px;\n  bottom: 0px;\n  right: 0;\n  left: 0; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/form-row\"] > .block-editor-block-list__block-edit > div:last-child {\n  border: 14px solid transparent; }\n\n.block-editor-block-list__layout .block-editor-block-list__block.is-selected[data-type=\"qubely/form-row\"] > .block-editor-block-list__block-edit > div:last-child {\n  border: 14px solid rgba(76, 175, 80, 0.1); }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/form-row\"] > .block-editor-block-list__block-edit > .block-editor-block-contextual-toolbar .block-editor-block-toolbar {\n  top: 14px;\n  left: 16px; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/form-row\"] > .block-editor-block-list__block-edit .block-editor-block-mover {\n  left: -30px; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/form-row\"] > .block-editor-block-list__block-edit [data-block] {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.block-editor-block-list__layout .block-editor-block-list__block[data-type=\"qubely/form-row\"] > .editor-block-list__insertion-point {\n  display: none; }\n\n.qubely-block-form .block-editor-inner-blocks [data-type=\"qubely/form-row\"] {\n  padding: 0; }\n\n.qubely-form-field-wrapper .qubely-form-label {\n  vertical-align: baseline; }\n  .qubely-form-field-wrapper .qubely-form-label .editor-rich-text {\n    display: inline-block; }\n  .qubely-form-field-wrapper .qubely-form-label .qubely-from-field-required-sign {\n    display: inline-block;\n    margin-left: 3px;\n    color: #e80d0d; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/gallery/style.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/gallery/style.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-gallery .qubely-gallery-item {\n  position: relative; }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-repeatable-action-remove {\n    display: block; }\n\n.qubely-block-gallery.qubely-gallery-item .qubely-repeatable-action-remove {\n  top: -10px;\n  right: -10px; }\n\n.qubely-block-gallery .qubely-gallery-image-container {\n  position: relative;\n  overflow: hidden;\n  line-height: 0; }\n  .qubely-block-gallery .qubely-gallery-image-container:before {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 1;\n    -webkit-transition: ease-in 300ms;\n    transition: ease-in 300ms; }\n  .qubely-block-gallery .qubely-gallery-image-container:after {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 1;\n    opacity: 0;\n    -webkit-transition: ease-in 300ms;\n    transition: ease-in 300ms; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-empty-image {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #f5f5f5;\n    border: 2px dashed #e5e5e5;\n    padding: 30px;\n    border-radius: 5px;\n    min-height: 200px; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-insert-image {\n    text-align: center;\n    display: inline-block;\n    color: #000;\n    text-decoration: none;\n    line-height: 1;\n    position: relative;\n    z-index: 4; }\n    .qubely-block-gallery .qubely-gallery-image-container .qubely-insert-image span {\n      margin-top: 0px;\n      display: block;\n      font-size: 14px; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-content-image-editor {\n    position: relative;\n    display: inline-block; }\n    .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-content-image-editor .qubely-media-actions {\n      bottom: 10px;\n      right: 10px;\n      position: absolute;\n      z-index: 4; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-caption-wrapper {\n    display: flex;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 3;\n    line-height: normal; }\n    .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-caption-wrapper.qubely-gallery-caption-onHover .qubely-gallery-caption {\n      opacity: 0;\n      -webkit-transform: translate3d(0, 40px, 0);\n      transform: translate3d(0, 40px, 0);\n      -webkit-transition: ease-in 300ms;\n      transition: ease-in 300ms; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-zoom-in img {\n    -webkit-transition: ease-in 300ms;\n    transition: ease-in 300ms;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-zoom-out img {\n    -webkit-transition: ease-in 300ms;\n    transition: ease-in 300ms;\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2); }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-scale img {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transition: ease-in 300ms;\n    transition: ease-in 300ms; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-slide-left img {\n    max-width: initial;\n    max-height: 100%;\n    width: calc(100% + 50px);\n    -webkit-transition: ease-in 300ms;\n    transition: ease-in 300ms;\n    -webkit-transform: translate3d(-40px, 0, 0);\n    transform: translate3d(-40px, 0, 0); }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-slide-right img {\n    max-width: initial;\n    max-height: 100%;\n    width: calc(100% + 50px);\n    -webkit-transition: ease-in 300ms;\n    transition: ease-in 300ms;\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-slide-bottom img {\n    -webkit-transform: translate3d(0, 20px, 0) scale3d(1.2, 1.2, 1);\n    transform: translate3d(0, 20px, 0) scale3d(1.2, 1.2, 1);\n    -webkit-transition: ease-in 300ms;\n    transition: ease-in 300ms; }\n  .qubely-block-gallery .qubely-gallery-image-container .qubely-gallery-image-slide-top img {\n    -webkit-transform: translate3d(0, -20px, 0) scale3d(1.2, 1.2, 1);\n    transform: translate3d(0, -20px, 0) scale3d(1.2, 1.2, 1);\n    -webkit-transition: ease-in 300ms;\n    transition: ease-in 300ms; }\n\n.qubely-block-gallery .qubely-gallery-item {\n  -webkit-transition: ease-in 300ms;\n  transition: ease-in 300ms; }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-caption-onHover .qubely-gallery-caption {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-zoom-in img {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-zoom-out img {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-scale img {\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-slide-left img {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-slide-right img {\n    -webkit-transform: translate3d(-40px, 0, 0);\n    transform: translate3d(-40px, 0, 0); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-slide-bottom img {\n    -webkit-transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1);\n    transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-slide-top img {\n    -webkit-transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1);\n    transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-container:after {\n    opacity: 1;\n    -webkit-transition: 400ms;\n    transition: 400ms; }\n  .qubely-block-gallery .qubely-gallery-item:hover .qubely-gallery-image-container:before {\n    -webkit-transition: 400ms;\n    transition: 400ms; }\n\n.qubely-column-grid {\n  display: grid;\n  grid-column-gap: 30px;\n  grid-row-gap: 30px; }\n\n.qubely-gallery-item-2 .qubely-column-grid {\n  display: block;\n  column-fill: initial; }\n  .qubely-gallery-item-2 .qubely-column-grid .qubely-gallery-item {\n    display: inline-block;\n    vertical-align: top;\n    width: 100%; }\n\n.qubely-column-grid-xs1 {\n  grid-template-columns: 1fr; }\n\n.qubely-column-grid-xs2 {\n  grid-template-columns: 1fr 1fr; }\n\n.qubely-column-grid-xs3 {\n  grid-template-columns: 1fr 1fr 1fr; }\n\n@media (min-width: 767px) {\n  .qubely-column-grid-sm1 {\n    grid-template-columns: 1fr; }\n  .qubely-column-grid-sm2 {\n    grid-template-columns: 1fr 1fr; }\n  .qubely-column-grid-sm3 {\n    grid-template-columns: 1fr 1fr 1fr; }\n  .qubely-gallery-item-2 .qubely-column-grid-sm1 {\n    column-count: 1; }\n  .qubely-gallery-item-2 .qubely-column-grid-sm2 {\n    column-count: 2; }\n  .qubely-gallery-item-2 .qubely-column-grid-sm3 {\n    column-count: 3; } }\n\n@media (min-width: 992px) {\n  .qubely-column-grid-md1 {\n    grid-template-columns: 1fr; }\n  .qubely-column-grid-md2 {\n    grid-template-columns: 1fr 1fr; }\n  .qubely-column-grid-md3 {\n    grid-template-columns: 1fr 1fr 1fr; }\n  .qubely-column-grid-md4 {\n    grid-template-columns: 1fr 1fr 1fr; }\n  .qubely-column-grid-md5 {\n    grid-template-columns: 1fr 1fr 1fr; }\n  .qubely-column-grid-md6 {\n    grid-template-columns: 1fr 1fr 1fr; }\n  .qubely-gallery-item-2 .qubely-column-grid-md1 {\n    column-count: 1; }\n  .qubely-gallery-item-2 .qubely-column-grid-md2 {\n    column-count: 2; }\n  .qubely-gallery-item-2 .qubely-column-grid-md3 {\n    column-count: 3; }\n  .qubely-gallery-item-2 .qubely-column-grid-md4 {\n    column-count: 3; }\n  .qubely-gallery-item-2 .qubely-column-grid-md5 {\n    column-count: 3; }\n  .qubely-gallery-item-2 .qubely-column-grid-md6 {\n    column-count: 3; } }\n\n@media (min-width: 1299px) {\n  .qubely-column-grid-md4 {\n    grid-template-columns: 1fr 1fr 1fr 1fr; }\n  .qubely-column-grid-md5 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }\n  .qubely-column-grid-md6 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; }\n  .qubely-gallery-item-2 .qubely-column-grid-md4 {\n    column-count: 4; }\n  .qubely-gallery-item-2 .qubely-column-grid-md5 {\n    column-count: 5; }\n  .qubely-gallery-item-2 .qubely-column-grid-md6 {\n    column-count: 6; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/imagecarousel/style.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/imagecarousel/style.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-image-carousel {\n  transition: all 400ms; }\n  .qubely-block-image-carousel .editor-rich-text .editor-rich-text__tinymce {\n    line-height: inherit; }\n  .qubely-block-image-carousel .qubely-image-quote .qubely-quote-icon {\n    line-height: 1;\n    width: auto;\n    height: auto; }\n  .qubely-block-image-carousel .qubely-image-quote.qubely-position-bottom .qubely-quote-icon {\n    transform: scaleY(-1); }\n  .qubely-block-image-carousel .qubely-single-img.qubely-backend .qubely-image-sliderimage {\n    cursor: pointer;\n    display: block; }\n  .qubely-block-image-carousel .qubely-image-placeholder.qubely-image-sliderimage i {\n    padding: 120px;\n    width: inherit;\n    height: inherit; }\n  .qubely-block-image-carousel .qubely-image-subtitle div {\n    font-size: 24px; }\n  .qubely-block-image-carousel .qubely-carousel-item.qubely-carousel-item {\n    transition: .4s; }\n  .qubely-block-image-carousel .qubely-image-item span.qubely-slider-description {\n    display: block; }\n  .qubely-block-image-carousel .qubely-image-sliderimage.qubely-image-placeholder i {\n    font-size: 52px;\n    background: #f7f7f7; }\n  .qubely-block-image-carousel .qubely-image-placeholder {\n    width: 100%;\n    height: 100%; }\n  .qubely-block-image-carousel .qubely-image-sliderimage-layout-left,\n  .qubely-block-image-carousel .qubely-image-sliderimage-layout-right {\n    display: inline-flex;\n    align-items: center; }\n    .qubely-block-image-carousel .qubely-image-sliderimage-layout-left .qubely-image-slidertitle-info,\n    .qubely-block-image-carousel .qubely-image-sliderimage-layout-right .qubely-image-slidertitle-info {\n      text-align: left; }\n  .qubely-block-image-carousel .qubely-image-sliderimage-layout-right .qubely-image-slidertitle-info {\n    text-align: right; }\n  .qubely-block-image-carousel .qubely-image-ratings {\n    unicode-bidi: bidi-override;\n    display: inline-block;\n    position: relative;\n    letter-spacing: 5px; }\n    .qubely-block-image-carousel .qubely-image-ratings:before, .qubely-block-image-carousel .qubely-image-ratings:after {\n      content: \"\\f005\\f005\\f005\\f005\\f005\";\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 400;\n      display: block;\n      white-space: nowrap; }\n    .qubely-block-image-carousel .qubely-image-ratings:before {\n      position: absolute;\n      z-index: 1;\n      left: 0px;\n      overflow: hidden;\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 900;\n      content: \"\\f005\\f005\\f005\\f005\\f005\"; }\n    .qubely-block-image-carousel .qubely-image-ratings:after {\n      z-index: 0; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"1\"]:before {\n      width: 20%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"1.5\"]:before {\n      width: 29%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"2\"]:before {\n      width: 40%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"2.5\"]:before {\n      width: 49%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"3\"]:before {\n      width: 60%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"3.5\"]:before {\n      width: 69%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"4\"]:before {\n      width: 80%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"4.5\"]:before {\n      width: 89%; }\n    .qubely-block-image-carousel .qubely-image-ratings[data-qubelyrating=\"5\"]:before {\n      width: 100%; }\n  .qubely-block-image-carousel .qubely-image-carousel-arrow-down {\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-top: 15px solid #d6d9dd; }\n\n.qubely-image-carousel-content-wrapper {\n  position: relative; }\n\n.layout-3 .qubely-image-carousel-content-wrapper {\n  padding: 20px;\n  border-radius: 10px;\n  background: #f4f4f4; }\n  .layout-3 .qubely-image-carousel-content-wrapper:before {\n    content: \" \";\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    transform: translate(-50%, 50%);\n    border-width: 15px;\n    z-index: 1;\n    border-color: #f4f4f4 transparent transparent transparent;\n    left: 50%;\n    bottom: -15px; }\n\n.layout-3 .qubely-image-slidertitle {\n  margin-top: 40px;\n  text-align: center; }\n\n.layout-3 .qubely-image-sliderimage {\n  margin-right: 0px; }\n\n.layout-3 .qubely-image-sliderimage-layout-left .qubely-image-slidertitle-info {\n  text-align: center; }\n\n.layout-1 .qubely-image-sliderimage {\n  margin-right: 20px; }\n\n.layout-2 .qubely-image-sliderimage {\n  margin-right: 20px; }\n\n.qubely-carousel.qubely-carousel-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-extended-list {\n    position: relative;\n    overflow: hidden; }\n  .qubely-carousel.qubely-carousel-wrapper .js-indicator {\n    position: absolute;\n    z-index: 9;\n    -webkit-perspective: 1000px;\n    perspective: 1000px;\n    transform-style: preserve-3d;\n    transition-property: transform, -webkit-transform, width;\n    -webkit-transition-property: transform, -webkit-transform, width;\n    transition-timing-function: linear;\n    -webkit-transition-timing-function: linear; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item {\n    position: relative;\n    float: left;\n    overflow: hidden;\n    transition-property: transform;\n    transition-duration: 300ms;\n    transition-timing-function: ease-in-out;\n    transition-delay: 0s; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.active {\n    visibility: visible;\n    transform-style: preserve-3d; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.dragenable {\n    visibility: visible;\n    transform-style: preserve-3d; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.prev-item {\n    z-index: 1;\n    visibility: visible; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control {\n    height: 50px;\n    width: 100%;\n    margin-top: 5px;\n    z-index: 3; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control {\n      display: inline-block;\n      padding: 10px;\n      border: 1px solid #e2e2e2;\n      position: absolute;\n      cursor: pointer;\n      text-align: center;\n      bottom: 49%;\n      background: rgba(255, 255, 255, 0.4);\n      transition: .3s; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .next-control.nav-control.buttom {\n      bottom: 0; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .prev-control.nav-control.buttom {\n      bottom: 0; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control {\n      right: 0; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control {\n      left: 0; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots {\n    margin-top: 16px;\n    height: 50px;\n    width: 100%;\n    bottom: 0px;\n    z-index: 3;\n    left: 50%;\n    transform: translateX(-50%); }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul {\n      margin: 10px 0 0;\n      padding: 0;\n      list-style: none;\n      text-align: center; }\n      .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator {\n        width: 100%;\n        height: 100%; }\n      .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {\n        display: inline-block;\n        height: 4px;\n        width: 30px;\n        margin: 5px;\n        border: 0;\n        background: #f4f4f4;\n        border-radius: 2px;\n        cursor: pointer;\n        position: relative; }\n        .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator {\n          position: absolute;\n          -webkit-perspective: 1000px;\n          perspective: 1000px;\n          transform-style: preserve-3d;\n          transition-property: transform, -webkit-transform, width;\n          -webkit-transition-property: transform, -webkit-transform, width;\n          transition-timing-function: linear;\n          -webkit-transition-timing-function: linear;\n          width: 0;\n          left: 0;\n          top: 0;\n          height: 4px;\n          border-radius: 2px; }\n        .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator.active {\n          background: #2084f9;\n          width: 100%;\n          top: 0;\n          border-radius: 2px; }\n\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s; }\n\n.qubely-carousel-nav-control .nav-control .dashicons {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.qubely-image-item.layout-3 .qubely-image-sliderimage {\n  margin-right: 0; }\n\n.qubely-image-carousel-content-wrapper {\n  position: relative; }\n\n.qubely-carousel {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .qubely-carousel .qubely-carousel-extended-list {\n    position: relative;\n    overflow: hidden; }\n  .qubely-carousel .js-indicator {\n    position: absolute;\n    z-index: 9;\n    -webkit-perspective: 1000px;\n    perspective: 1000px;\n    transform-style: preserve-3d;\n    transition-property: transform, -webkit-transform, width;\n    -webkit-transition-property: transform, -webkit-transform, width;\n    transition-timing-function: linear;\n    -webkit-transition-timing-function: linear; }\n  .qubely-carousel .qubely-carousel-item {\n    position: relative;\n    float: left; }\n  .qubely-carousel .qubely-carousel-item.active {\n    visibility: visible;\n    transform-style: preserve-3d; }\n  .qubely-carousel .qubely-carousel-item.dragenable {\n    visibility: visible;\n    transform-style: preserve-3d; }\n  .qubely-carousel .qubely-carousel-item.prev-item {\n    z-index: 1;\n    visibility: visible; }\n  .qubely-carousel .qubely-carousel-extended-nav-control {\n    position: relative;\n    height: 20px;\n    width: 100%;\n    margin-top: 5px;\n    z-index: 3; }\n    .qubely-carousel .qubely-carousel-extended-nav-control .nav-control {\n      display: inline-block;\n      height: 40px;\n      width: 40px;\n      padding: 10px;\n      border: 1px solid #ababab;\n      position: absolute;\n      cursor: pointer;\n      text-align: center;\n      bottom: 100px;\n      background: rgba(255, 255, 255, 0.4); }\n    .qubely-carousel .qubely-carousel-extended-nav-control .nav-control.next-control {\n      right: 0; }\n    .qubely-carousel .qubely-carousel-extended-nav-control .nav-control.prev-control {\n      left: 0; }\n  .qubely-carousel .qubely-carousel-extended-dots {\n    position: relative;\n    height: 20px;\n    width: 100%;\n    margin-top: 5px;\n    z-index: 3;\n    position: absolute;\n    bottom: 50px;\n    left: 50%;\n    transform: translateX(-50%); }\n    .qubely-carousel .qubely-carousel-extended-dots ul {\n      margin: -4px;\n      padding: 0;\n      list-style: none;\n      text-align: center; }\n      .qubely-carousel .qubely-carousel-extended-dots ul li {\n        display: inline-block;\n        height: 4px;\n        width: 30px;\n        margin: 5px;\n        border: 0;\n        background: rgba(218, 92, 92, 0.4);\n        border-radius: 2px;\n        cursor: pointer;\n        position: relative; }\n        .qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator {\n          position: absolute;\n          -webkit-perspective: 1000px;\n          perspective: 1000px;\n          transform-style: preserve-3d;\n          transition-property: transform, -webkit-transform, width;\n          -webkit-transition-property: transform, -webkit-transform, width;\n          transition-timing-function: linear;\n          -webkit-transition-timing-function: linear;\n          width: 0;\n          left: 0;\n          top: 0;\n          height: 4px;\n          border-radius: 2px; }\n        .qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator.active {\n          background: #ffffff;\n          width: 100%;\n          top: 0;\n          border-radius: 2px; }\n      .qubely-carousel .qubely-carousel-extended-dots ul li.active {\n        width: 80px; }\n\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s;\n  display: flex; }\n\n.qubely-carousel.qubely-carousel-wrapper.is-faded .qubely-carousel-extended-list .qubely-carousel-extended-outer-stage .qubely-carousel-item:not(.active) {\n  opacity: 0.1; }\n\n.qubely-block-image-carousel.qubely-layout-3 {\n  overflow: hidden; }\n  .qubely-block-image-carousel.qubely-layout-3 .qubely-carousel.qubely-carousel-wrapper {\n    padding: 30px 0 102px; }\n    .qubely-block-image-carousel.qubely-layout-3 .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-extended-list {\n      position: relative;\n      overflow: inherit; }\n  .qubely-block-image-carousel.qubely-layout-3 .qubely-carousel-extended-outer-stage {\n    position: relative;\n    overflow: inherit; }\n  .qubely-block-image-carousel.qubely-layout-3 .qubely-carousel-item {\n    transform: scale(1); }\n  .qubely-block-image-carousel.qubely-layout-3 .qubely-carousel-item.active {\n    transform: scale(1.1); }\n\n.qubely-layout-3 .qubely-carousel .qubely-carousel-extended-list .qubely-carousel-item {\n  padding: 0 15px;\n  padding: 0 22px; }\n\n.qubely-layout-4 .qubely-carousel .qubely-carousel-extended-list .qubely-carousel-item {\n  padding: 0 10px; }\n\n.layout-2 .qubely-image-slider-text {\n  display: flex;\n  position: absolute;\n  padding: 30px;\n  height: 100%;\n  width: 100%;\n  bottom: 0;\n  transition: .3s; }\n  .layout-2 .qubely-image-slider-text:before {\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    transition: .3s; }\n\n.layout-3 .qubely-image-slider-text {\n  display: flex;\n  position: absolute;\n  padding: 30px;\n  height: 100%;\n  width: 100%;\n  bottom: 0;\n  transition: .3s; }\n  .layout-3 .qubely-image-slider-text:before {\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    transition: .3s; }\n\n.layout-4 .qubely-image-slider-text {\n  display: flex;\n  position: absolute;\n  padding: 30px;\n  height: 100%;\n  width: 100%;\n  bottom: 0;\n  transition: .3s; }\n  .layout-4 .qubely-image-slider-text:before {\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    transition: .3s; }\n\n.layout-5 .qubely-image-slider-text {\n  display: flex;\n  position: absolute;\n  padding: 30px;\n  height: 100%;\n  width: 100%;\n  bottom: 0;\n  transition: .3s; }\n  .layout-5 .qubely-image-slider-text:before {\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    transition: .3s; }\n\n.layout-6 .qubely-image-slider-text {\n  display: flex;\n  position: absolute;\n  padding: 30px;\n  height: 100%;\n  width: 100%;\n  bottom: 0;\n  transition: .3s; }\n  .layout-6 .qubely-image-slider-text:before {\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    transition: .3s; }\n\n.qubely-image-slider {\n  position: relative;\n  height: 100%; }\n\n.qubely-image-content {\n  position: absolute;\n  padding: 0 50px;\n  color: #fff;\n  width: 100%;\n  bottom: 0;\n  left: 0; }\n\n.qubely-block-image-carousel .qubely-image-item.layout-5 .qubely-image-placeholder.qubely-image-sliderimage i {\n  padding: 56px; }\n\n.qubely-image-item {\n  height: 100%; }\n  .qubely-image-item .qubely-image-sliderimage {\n    min-height: 100%; }\n\n.qubely-block-image-carousel.qubely-layout-5 .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control {\n  height: 8px;\n  margin-top: 0px; }\n\n.item-layout5 .qubely-image-slider-text {\n  display: none; }\n\n.qubely-single-img {\n  height: 100%;\n  line-height: 0; }\n\n.qubely-slider-image-container.qubely-empty-image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f5f5;\n  border: 2px dashed #e5e5e5;\n  padding: 30px;\n  border-radius: 5px;\n  min-height: 330px; }\n\n.qubely-insert-image svg.dashicon.dashicons-insert {\n  fill: currentColor;\n  outline: none; }\n\n.qubely-insert-image span {\n  margin-top: 5px;\n  display: block;\n  line-height: 20px; }\n\n.qubely-block-image-carousel .qubely-media-actions.qubely-field-button-list {\n  top: 10px;\n  left: 10px;\n  position: absolute;\n  z-index: 2; }\n\n.qubely-block-image-carousel .qubely-carousel .qubely-carousel-item {\n  position: relative;\n  float: left;\n  overflow: hidden; }\n  .qubely-block-image-carousel .qubely-carousel .qubely-carousel-item:hover .qubely-repeatable-action-remove {\n    display: block; }\n\n.qubely-block-image-carousel span.dashicons.dashicons-dismiss {\n  font-size: 24px; }\n\n.qubely-repeatable-action-remove {\n  display: none;\n  font-size: 10px;\n  width: 20px;\n  height: 20px;\n  line-height: 18px;\n  text-align: center;\n  position: absolute;\n  right: 10px;\n  border-radius: 50%;\n  z-index: 4;\n  cursor: pointer;\n  top: 10px;\n  padding: 0px;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);\n  transition: 400ms;\n  color: #e11d0f; }\n  .qubely-repeatable-action-remove:hover {\n    color: #e11d0f;\n    background: #fafafa; }\n  .qubely-repeatable-action-remove span {\n    font-size: 16px;\n    line-height: 20px; }\n\n.qubely-block-image-carousel.qubely-layout-3 .qubely-carousel-item .qubely-repeatable-action-remove {\n  right: 35px; }\n\n.qubely-block-image-carousel.qubely-layout-4 .qubely-carousel-item .qubely-repeatable-action-remove {\n  right: 25px; }\n\n.qubely-field-button-list .qubely-button {\n  font-size: 14px; }\n\n.qubely-image-item a.qubely-insert-image {\n  color: #ababab;\n  position: absolute;\n  z-index: 9999;\n  text-decoration: none;\n  text-align: center; }\n  .qubely-image-item a.qubely-insert-image:hover {\n    color: #2184f9; }\n\n.qubely-image-item .qubely-image-title {\n  line-height: 38px; }\n\n.align-top .qubely-image-content {\n  bottom: initial;\n  top: 0; }\n\n.align-center .qubely-image-content {\n  bottom: 34%; }\n\n.align-bottom .qubely-image-content {\n  bottom: 0; }\n\n.qubely-postcarousel-category {\n  line-height: 20px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/postcarousel/style.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/postcarousel/style.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".editor-styles-wrapper .wp-block h1.qubely-postcarousel-title,\n.editor-styles-wrapper .wp-block h2.qubely-postcarousel-title,\n.editor-styles-wrapper .wp-block h3.qubely-postcarousel-title,\n.editor-styles-wrapper .wp-block h4.qubely-postcarousel-title,\n.editor-styles-wrapper .wp-block h5.qubely-postcarousel-title,\n.editor-styles-wrapper .wp-block h6.qubely-postcarousel-title {\n  margin: 0; }\n\n.qubely-postcarousel-is-loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px; }\n\n.qubely-post-list-wrapper {\n  display: block;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n  .qubely-post-list-wrapper .qubely-post-list-content {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    padding-left: 20px; }\n\n@media screen and (min-width: 767px) {\n  .qubely-post-list-wrapper {\n    display: -ms-flexbox;\n    display: flex; }\n    .qubely-post-list-wrapper .qubely-post-list-img {\n      -ms-flex: 0 0 40%;\n      flex: 0 0 40%;\n      max-width: 40%; }\n    .qubely-post-list-wrapper .qubely-post-list-img + .qubely-post-list-content {\n      -ms-flex: 0 0 60%;\n      flex: 0 0 60%;\n      max-width: 60%; } }\n\n.qubely-carousel-item {\n  position: relative; }\n  .qubely-carousel-item img {\n    display: block; }\n  .qubely-carousel-item .qubely-postcarousel-title {\n    margin: 0;\n    line-height: 28px; }\n    .qubely-carousel-item .qubely-postcarousel-title a {\n      text-decoration: none !important; }\n      .qubely-carousel-item .qubely-postcarousel-title a:hover {\n        text-decoration: none; }\n  .qubely-carousel-item .qubely-postcarousel-intro,\n  .qubely-carousel-item .qubely-postcarousel-intro p {\n    font-size: 15px;\n    line-height: 24px;\n    margin: 0; }\n  .qubely-carousel-item .qubely-postcarousel-meta {\n    font-size: 14px;\n    line-height: 22px; }\n  .qubely-carousel-item .qubely-postcarousel-btn {\n    display: inline-block;\n    text-decoration: none !important; }\n    .qubely-carousel-item .qubely-postcarousel-btn:hover {\n      text-decoration: none !important; }\n  .qubely-carousel-item .qubely-button-fill.is-small {\n    padding: 5px 10px;\n    font-size: 14px; }\n  .qubely-carousel-item .qubely-button-fill.is-medium {\n    padding: 8px 15px;\n    font-size: 16px; }\n  .qubely-carousel-item .qubely-button-fill.is-large {\n    padding: 13px 20px;\n    font-size: 18px; }\n\n.qubely-post-img .qubely-postcarousel-cat-position {\n  position: absolute; }\n  .qubely-post-img .qubely-postcarousel-cat-position.qubely-postcarousel-cat-position-leftTop {\n    top: 20px;\n    left: 20px; }\n  .qubely-post-img .qubely-postcarousel-cat-position.qubely-postcarousel-cat-position-rightTop {\n    top: 20px;\n    right: 20px; }\n  .qubely-post-img .qubely-postcarousel-cat-position.qubely-postcarousel-cat-position-leftBottom {\n    bottom: 20px;\n    left: 20px; }\n  .qubely-post-img .qubely-postcarousel-cat-position.qubely-postcarousel-cat-position-rightBottom {\n    bottom: 20px;\n    right: 20px; }\n\n.qubely-postcarousel-category a {\n  transition: 400ms !important;\n  text-decoration: none !important; }\n  .qubely-postcarousel-category a:hover {\n    text-decoration: none !important; }\n\n.qubely-postcarousel-meta span {\n  padding-left: 12px;\n  position: relative;\n  padding-right: 12px; }\n  .qubely-postcarousel-meta span i {\n    margin-right: 3px; }\n  .qubely-postcarousel-meta span:before {\n    position: absolute;\n    content: \"\";\n    background: #d8d8d8;\n    left: -1px;\n    top: 50%;\n    width: 2px;\n    height: 2px;\n    border-radius: 20px;\n    margin-top: -1px; }\n  .qubely-postcarousel-meta span:first-child {\n    padding-left: 0; }\n    .qubely-postcarousel-meta span:first-child:before {\n      display: none; }\n\n.qubely-postcarousel-meta a {\n  text-decoration: none !important; }\n  .qubely-postcarousel-meta a:hover {\n    text-decoration: none !important; }\n\n.qubely-postgrid-style-4 {\n  position: relative;\n  overflow: hidden; }\n  .qubely-postgrid-style-4 .qubely-post-grid-img,\n  .qubely-postgrid-style-4 .qubely-post-list-img {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    -webkit-background-size: cover;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    overflow: hidden; }\n    .qubely-postgrid-style-4 .qubely-post-grid-img img,\n    .qubely-postgrid-style-4 .qubely-post-list-img img {\n      position: absolute;\n      width: auto;\n      height: auto;\n      min-width: 100%;\n      max-width: none;\n      left: 50%;\n      top: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n      min-height: 100%; }\n  .qubely-postgrid-style-4 .qubely-post-grid-content,\n  .qubely-postgrid-style-4 .qubely-post-list-content {\n    opacity: 1;\n    position: relative;\n    z-index: 10;\n    overflow: hidden;\n    width: 100%;\n    max-width: 100%;\n    padding: 20px; }\n  .qubely-postgrid-style-4 > div .qubely-post-grid-img,\n  .qubely-postgrid-style-4 > div .qubely-post-list-img {\n    width: 100%;\n    max-width: 100%; }\n  .qubely-postgrid-style-4:before {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 3;\n    opacity: 0.8;\n    transition: 400ms; }\n  .qubely-postgrid-style-4 .qubely-post-grid-top .qubely-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: flex-start; }\n  .qubely-postgrid-style-4 .qubely-post-grid-center .qubely-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: center; }\n  .qubely-postgrid-style-4 .qubely-post-grid-bottom .qubely-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: flex-end; }\n\n.qubely-post-grid-view:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-zoom-out .qubely-post-image {\n  transition: transform 0.35s;\n  transform: scale(1.2); }\n\n.qubely-post-grid-view:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-zoom-in .qubely-post-image {\n  transition: transform 0.35s;\n  transform: scale(1); }\n\n.qubely-post-grid-view:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-slide-bottom .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(0, 20px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-post-grid-view:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-slide-top .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(0, -20px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-post-grid-view:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-slide-right .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(20px, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-post-grid-view:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-slide-left .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(-20px, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-post-grid-view:hover:not(.qubely-postgrid-style-4) .qubely-post-img-zoom-out .qubely-post-image {\n  transform: scale(1); }\n\n.qubely-post-grid-view:hover:not(.qubely-postgrid-style-4) .qubely-post-img-zoom-in .qubely-post-image {\n  transform: scale(1.2); }\n\n.qubely-post-grid-view:hover:not(.qubely-postgrid-style-4) .qubely-post-img-slide-bottom .qubely-post-image {\n  transform: translate3d(0, 0px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-post-grid-view:hover:not(.qubely-postgrid-style-4) .qubely-post-img-slide-top .qubely-post-image {\n  transform: translate3d(0, 0px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-post-grid-view:hover:not(.qubely-postgrid-style-4) .qubely-post-img-slide-right .qubely-post-image {\n  transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-post-grid-view:hover:not(.qubely-postgrid-style-4) .qubely-post-img-slide-left .qubely-post-image {\n  transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-post-list-center.qubely-post-list-wrapper {\n  align-items: center; }\n\n.qubely-post-list-top.qubely-post-list-wrapper {\n  align-items: flex-start; }\n\n.qubely-post-list-bottom.qubely-post-list-wrapper {\n  align-items: flex-end; }\n\n.qubely-post-list-view.qubely-postgrid-style-3 .qubely-post-list-wrapper .qubely-post-list-content {\n  background: #fff;\n  padding: 20px;\n  position: relative;\n  z-index: 1; }\n\n.qubely-post-list-view.qubely-postgrid-style-3 .qubely-post-list-wrapper .qubely-post-list-img + .qubely-post-list-content {\n  margin-left: -40px; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-content {\n  background: #fff;\n  position: relative;\n  z-index: 1;\n  padding: 20px; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-img + .qubely-post-grid-content {\n  margin: -80px auto 0;\n  width: 90%; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-left .qubely-post-grid-content {\n  float: left; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-right .qubely-post-grid-content {\n  float: right; }\n\n.qubely-postcarousel-column {\n  display: grid;\n  grid-column-gap: 30px;\n  grid-row-gap: 30px; }\n  .qubely-postcarousel-column.qubely-postcarousel-layout-5 {\n    display: block;\n    column-fill: initial; }\n    .qubely-postcarousel-column.qubely-postcarousel-layout-5 > div {\n      margin-bottom: 30px; }\n\n.qubely-postcarousel-layout-3 .qubely-postcarousel:nth-child(1) {\n  grid-column-start: 1; }\n\n.qubely-postcarousel-layout-3.qubely-postcarousel-column-md2 .qubely-postcarousel:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postcarousel-layout-3.qubely-postcarousel-column-md3 .qubely-postcarousel:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postcarousel-layout-3.qubely-postcarousel-column-md4 .qubely-postcarousel:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postcarousel-layout-3.qubely-postcarousel-column-md5 .qubely-postcarousel:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postcarousel-layout-3.qubely-postcarousel-column-md6 .qubely-postcarousel:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column {\n  column-gap: 30px;\n  display: block; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column .qubely-postcarousel {\n    display: inline-block;\n    width: 100%;\n    height: auto;\n    margin-bottom: 30px; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column-md1 {\n  column-count: 1; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column-md2 {\n  column-count: 2; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column-md3 {\n  column-count: 1; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column-md4 {\n  column-count: 1; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column-md5 {\n  column-count: 1; }\n\n.qubely-postcarousel-layout-4.qubely-postcarousel-column-md6 {\n  column-count: 1; }\n\n@media screen and (max-width: 992px) {\n  .qubely-post-list-center.qubely-post-list-wrapper {\n    align-items: flex-start; }\n  .qubely-post-list-view.qubely-postgrid-style-3\n.qubely-post-list-wrapper\n.qubely-post-list-img\n+ .qubely-post-list-content {\n    margin-left: 0; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md4 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 2; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column-sm1 {\n    column-count: 1; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column-sm2 {\n    column-count: 2; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column-sm3 {\n    column-count: 3; } }\n\n@media screen and (max-width: 768px) {\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column-xs1 {\n    column-count: 1; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column-xs2 {\n    column-count: 2; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column-xs3 {\n    column-count: 3; } }\n\n@media (min-width: 992px) {\n  .qubely-postcarousel-layout-3 .qubely-postcarousel:nth-child(1) {\n    grid-column-start: 1; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md2 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 3; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md3 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 4; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md4 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 4; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md5 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 4; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md6 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 4; } }\n\n@media (min-width: 1299px) {\n  .qubely-postcarousel-column-md4 {\n    grid-template-columns: 1fr 1fr 1fr 1fr; }\n    .qubely-postcarousel-column-md4.qubely-postcarousel-layout-5 {\n      column-count: 5; }\n  .qubely-postcarousel-column-md5 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }\n    .qubely-postcarousel-column-md5.qubely-postcarousel-layout-5 {\n      column-count: 6; }\n  .qubely-postcarousel-column-md6 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; }\n    .qubely-postcarousel-column-md6.qubely-postcarousel-layout-5 {\n      column-count: 7; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md4 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 5; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md5 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 6; }\n  .qubely-postcarousel-layout-3.qubely-postcarousel-column-md6 .qubely-postcarousel:nth-child(1) {\n    grid-column-end: 7; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column.qubely-postcarousel-column-md3 {\n    column-count: 3; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column.qubely-postcarousel-column-md4 {\n    column-count: 4; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column.qubely-postcarousel-column-md5 {\n    column-count: 5; }\n  .qubely-postcarousel-layout-4.qubely-postcarousel-column.qubely-postcarousel-column-md6 {\n    column-count: 6; } }\n\n.qubely-post-img {\n  margin-bottom: 10px; }\n\n.qubely-post-grid-content.align-center {\n  text-align: center; }\n\n.qubely-post-grid-content.align-right {\n  text-align: right; }\n\n.qubely-post-grid-content.align-left {\n  text-align: left; }\n\n.qubely-postgrid-style-3 .qubely-post-grid-wrapper.qubely-post-grid-center {\n  background-color: transparent;\n  padding: 10px 0; }\n\n.qubely-carousel-item.qubely-post-grid-view.qubely-postgrid-style-2 {\n  padding: 10px; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-content {\n  border-radius: 10px; }\n\n.layout-4 .clone.qubely-carousel-item .qubely-post-grid-content.align-top {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.active {\n  margin-left: 0px; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control {\n  border-color: #2084f9; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/postgrid/style.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/postgrid/style.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".editor-styles-wrapper .wp-block h1.qubely-postgrid-title,\n.editor-styles-wrapper .wp-block h2.qubely-postgrid-title,\n.editor-styles-wrapper .wp-block h3.qubely-postgrid-title,\n.editor-styles-wrapper .wp-block h4.qubely-postgrid-title,\n.editor-styles-wrapper .wp-block h5.qubely-postgrid-title,\n.editor-styles-wrapper .wp-block h6.qubely-postgrid-title {\n  margin: 0; }\n\n.qubely-postgrid-is-loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px; }\n\n.qubely-post-list-wrapper {\n  display: block;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n  .qubely-post-list-wrapper .qubely-post-list-img {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    overflow: hidden; }\n  .qubely-post-list-wrapper .qubely-post-list-content {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    padding-left: 20px; }\n\n@media screen and (min-width: 767px) {\n  .qubely-post-list-wrapper {\n    display: -ms-flexbox;\n    display: flex; }\n    .qubely-post-list-wrapper .qubely-post-list-img {\n      -ms-flex: 0 0 40%;\n      flex: 0 0 40%;\n      max-width: 40%; }\n    .qubely-post-list-wrapper .qubely-post-list-img + .qubely-post-list-content {\n      -ms-flex: 0 0 60%;\n      flex: 0 0 60%;\n      max-width: 60%; } }\n\n.qubely-postgrid-layout-1 .qubely-post-img {\n  margin-bottom: 0; }\n\n.qubely-postgrid-style-4 {\n  position: relative;\n  overflow: hidden; }\n  .qubely-postgrid-style-4 .qubely-post-grid-img,\n  .qubely-postgrid-style-4 .qubely-post-list-img {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    -webkit-background-size: cover;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    overflow: hidden; }\n    .qubely-postgrid-style-4 .qubely-post-grid-img img,\n    .qubely-postgrid-style-4 .qubely-post-list-img img {\n      position: absolute;\n      width: auto;\n      height: auto;\n      min-width: 100%;\n      max-width: none;\n      left: 50%;\n      top: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n      min-height: 100%; }\n  .qubely-postgrid-style-4 .qubely-post-grid-content,\n  .qubely-postgrid-style-4 .qubely-post-list-content {\n    opacity: 1;\n    position: relative;\n    z-index: 10;\n    overflow: hidden;\n    width: 100%;\n    max-width: 100%;\n    padding: 20px; }\n  .qubely-postgrid-style-4 > div .qubely-post-grid-img,\n  .qubely-postgrid-style-4 > div .qubely-post-list-img {\n    width: 100%;\n    max-width: 100%; }\n  .qubely-postgrid-style-4:before {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 3;\n    opacity: 0.8;\n    transition: 400ms; }\n  .qubely-postgrid-style-4 .qubely-post-list-top .qubely-post-list-content,\n  .qubely-postgrid-style-4 .qubely-post-list-top .qubely-post-grid-content,\n  .qubely-postgrid-style-4 .qubely-post-grid-top .qubely-post-list-content,\n  .qubely-postgrid-style-4 .qubely-post-grid-top .qubely-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: flex-start; }\n  .qubely-postgrid-style-4 .qubely-post-list-center .qubely-post-list-content,\n  .qubely-postgrid-style-4 .qubely-post-list-center .qubely-post-grid-content,\n  .qubely-postgrid-style-4 .qubely-post-grid-center .qubely-post-list-content,\n  .qubely-postgrid-style-4 .qubely-post-grid-center .qubely-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: center; }\n  .qubely-postgrid-style-4 .qubely-post-list-bottom .qubely-post-list-content,\n  .qubely-postgrid-style-4 .qubely-post-list-bottom .qubely-post-grid-content,\n  .qubely-postgrid-style-4 .qubely-post-grid-bottom .qubely-post-list-content,\n  .qubely-postgrid-style-4 .qubely-post-grid-bottom .qubely-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: flex-end; }\n\n.qubely-postgrid:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-zoom-out .qubely-post-image {\n  transition: transform 0.35s;\n  transform: scale(1.2); }\n\n.qubely-postgrid:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-zoom-in .qubely-post-image {\n  transition: transform 0.35s;\n  transform: scale(1); }\n\n.qubely-postgrid:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-slide-bottom .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(0, 20px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-slide-top .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(0, -20px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-slide-right .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(20px, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:not(.qubely-postgrid-style-4) .qubely-post-img.qubely-post-img-slide-left .qubely-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(-20px, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:hover:not(.qubely-postgrid-style-4) .qubely-post-img-zoom-out .qubely-post-image {\n  transform: scale(1); }\n\n.qubely-postgrid:hover:not(.qubely-postgrid-style-4) .qubely-post-img-zoom-in .qubely-post-image {\n  transform: scale(1.2); }\n\n.qubely-postgrid:hover:not(.qubely-postgrid-style-4) .qubely-post-img-slide-bottom .qubely-post-image {\n  transform: translate3d(0, 0px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:hover:not(.qubely-postgrid-style-4) .qubely-post-img-slide-top .qubely-post-image {\n  transform: translate3d(0, 0px, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:hover:not(.qubely-postgrid-style-4) .qubely-post-img-slide-right .qubely-post-image {\n  transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-postgrid:hover:not(.qubely-postgrid-style-4) .qubely-post-img-slide-left .qubely-post-image {\n  transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.qubely-post-list-center.qubely-post-list-wrapper {\n  align-items: center; }\n\n.qubely-post-list-top.qubely-post-list-wrapper {\n  align-items: flex-start; }\n\n.qubely-post-list-bottom.qubely-post-list-wrapper {\n  align-items: flex-end; }\n\n.qubely-post-list-view.qubely-postgrid-style-3 .qubely-post-list-wrapper .qubely-post-list-content {\n  background: #fff;\n  padding: 20px;\n  position: relative;\n  z-index: 1; }\n\n.qubely-post-list-view.qubely-postgrid-style-3 .qubely-post-list-wrapper .qubely-post-list-img + .qubely-post-list-content {\n  margin-left: -40px; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-content {\n  background: #fff;\n  position: relative;\n  z-index: 1;\n  padding: 20px; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-img + .qubely-post-grid-content {\n  margin: -80px auto 0;\n  width: 90%; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-left .qubely-post-grid-content {\n  float: left; }\n\n.qubely-post-grid-view.qubely-postgrid-style-3 .qubely-post-grid-right .qubely-post-grid-content {\n  float: right; }\n\n.qubely-postgrid-layout-5 {\n  display: grid;\n  grid-template-columns: 50% 1fr; }\n  .qubely-postgrid-layout-5 .qubely-post-large-view {\n    grid-row-start: 1;\n    grid-row-end: 4; }\n  .qubely-postgrid-layout-5 .qubely-post-small-view .qubely-post-grid-wrapper {\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap; }\n  .qubely-postgrid-layout-5 .qubely-post-small-view.qubely-postgrid-style-1 .qubely-post-img, .qubely-postgrid-layout-5 .qubely-post-small-view.qubely-postgrid-style-2 .qubely-post-img, .qubely-postgrid-layout-5 .qubely-post-small-view.qubely-postgrid-style-3 .qubely-post-img {\n    margin-bottom: 0 !important;\n    -ms-flex: 0 0 40%;\n    -webkit-box-flex: 0;\n    flex: 0 0 40%;\n    max-width: 40%; }\n  .qubely-postgrid-layout-5 .qubely-post-small-view.qubely-postgrid-style-1 .qubely-post-grid-content, .qubely-postgrid-layout-5 .qubely-post-small-view.qubely-postgrid-style-2 .qubely-post-grid-content, .qubely-postgrid-layout-5 .qubely-post-small-view.qubely-postgrid-style-3 .qubely-post-grid-content {\n    -ms-flex: 0 0 60%;\n    -webkit-box-flex: 0;\n    flex: 0 0 60%;\n    max-width: 60%; }\n  .qubely-postgrid-layout-5 .qubely-post-small-view.qubely-postgrid-style-1 .qubely-post-grid-content, .qubely-postgrid-layout-5 .qubely-post-small-view.qubely-postgrid-style-2 .qubely-post-grid-content {\n    padding-left: 20px; }\n  .qubely-postgrid-layout-5 .qubely-post-small-view.qubely-postgrid-style-3 .qubely-post-grid-img + .qubely-post-grid-content {\n    margin: 0 0 0 -40px; }\n\n.qubely-postgrid-layout-3 .qubely-postgrid:nth-child(1) {\n  grid-column-start: 1; }\n\n.qubely-postgrid-layout-3.qubely-postgrid-column-md2 .qubely-postgrid:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postgrid-layout-3.qubely-postgrid-column-md3 .qubely-postgrid:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postgrid-layout-3.qubely-postgrid-column-md4 .qubely-postgrid:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postgrid-layout-3.qubely-postgrid-column-md5 .qubely-postgrid:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postgrid-layout-3.qubely-postgrid-column-md6 .qubely-postgrid:nth-child(1) {\n  grid-column-end: 1; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column {\n  column-gap: 30px;\n  display: block; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column .qubely-postgrid {\n    display: inline-block;\n    width: 100%;\n    height: auto;\n    margin-bottom: 30px; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column-md1 {\n  column-count: 1; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column-md2 {\n  column-count: 2; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column-md3 {\n  column-count: 3; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column-md4 {\n  column-count: 4; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column-md5 {\n  column-count: 5; }\n\n.qubely-postgrid-layout-4.qubely-postgrid-column-md6 {\n  column-count: 6; }\n\n@media screen and (max-width: 992px) {\n  .qubely-post-list-center.qubely-post-list-wrapper {\n    align-items: flex-start; }\n  .qubely-post-list-view.qubely-postgrid-style-3\n.qubely-post-list-wrapper\n.qubely-post-list-img\n+ .qubely-post-list-content {\n    margin-left: 0; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md4 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 2; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column-sm1 {\n    column-count: 1; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column-sm2 {\n    column-count: 2; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column-sm3 {\n    column-count: 3; } }\n\n@media screen and (max-width: 768px) {\n  .qubely-postgrid-layout-4.qubely-postgrid-column-xs1 {\n    column-count: 1; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column-xs2 {\n    column-count: 2; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column-xs3 {\n    column-count: 3; } }\n\n@media (min-width: 992px) {\n  .qubely-postgrid-layout-3 .qubely-postgrid:nth-child(1) {\n    grid-column-start: 1; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md2 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 3; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md3 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 4; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md4 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 4; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md5 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 4; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md6 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 4; } }\n\n@media (min-width: 1299px) {\n  .qubely-postgrid-column-md4 {\n    grid-template-columns: 1fr 1fr 1fr 1fr; }\n  .qubely-postgrid-column-md5 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }\n  .qubely-postgrid-column-md6 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md4 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 5; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md5 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 6; }\n  .qubely-postgrid-layout-3.qubely-postgrid-column-md6 .qubely-postgrid:nth-child(1) {\n    grid-column-end: 7; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column.qubely-postgrid-column-md3 {\n    column-count: 3; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column.qubely-postgrid-column-md4 {\n    column-count: 4; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column.qubely-postgrid-column-md5 {\n    column-count: 5; }\n  .qubely-postgrid-layout-4.qubely-postgrid-column.qubely-postgrid-column-md6 {\n    column-count: 6; } }\n\n.qubely-postgrid-style-4 .qubely-post-grid-wrapper .qubely-postgrid-cat-position {\n  position: absolute;\n  z-index: 12; }\n  .qubely-postgrid-style-4 .qubely-post-grid-wrapper .qubely-postgrid-cat-position.qubely-postgrid-cat-position-leftTop {\n    top: 20px;\n    left: 20px; }\n  .qubely-postgrid-style-4 .qubely-post-grid-wrapper .qubely-postgrid-cat-position.qubely-postgrid-cat-position-rightTop {\n    top: 20px;\n    right: 20px; }\n  .qubely-postgrid-style-4 .qubely-post-grid-wrapper .qubely-postgrid-cat-position.qubely-postgrid-cat-position-leftBottom {\n    bottom: 20px;\n    left: 20px; }\n  .qubely-postgrid-style-4 .qubely-post-grid-wrapper .qubely-postgrid-cat-position.qubely-postgrid-cat-position-rightBottom {\n    bottom: 20px;\n    right: 20px; }\n\n@media (max-width: 992px) {\n  .qubely-postgrid-layout-5 {\n    grid-template-columns: 1fr; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/pricelist/style.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/pricelist/style.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-pricelist .qubely-pricelist-items {\n  display: grid; }\n\n.qubely-block-pricelist .qubely-pricelist-item {\n  position: relative; }\n  .qubely-block-pricelist .qubely-pricelist-item:hover .qubely-repeatable-action-remove {\n    display: block; }\n  .qubely-block-pricelist .qubely-pricelist-item .qubely-pricelist-digit {\n    margin-left: auto;\n    margin-right: auto; }\n\n.qubely-block-pricelist.qubely-pricelist-item-1 .qubely-repeatable-action-remove {\n  top: -10px;\n  right: -10px; }\n\n.qubely-block-pricelist:not(.qubely-pricelist-item-3) .qubely-pricelist-image-container {\n  position: relative; }\n\n.qubely-block-pricelist .qubely-pricelist-image-container .qubely-pricelist-badge {\n  position: absolute;\n  left: 15px;\n  top: 15px;\n  z-index: 3; }\n\n.qubely-block-pricelist .qubely-pricelist-image-container .qubely-empty-image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f5f5;\n  border: 2px dashed #e5e5e5;\n  padding: 30px;\n  border-radius: 5px;\n  min-height: 100px; }\n\n.qubely-block-pricelist .qubely-pricelist-image-container .qubely-insert-image {\n  text-align: center;\n  display: inline-block;\n  color: #2184F9;\n  text-decoration: none;\n  line-height: 1;\n  position: relative;\n  z-index: 3; }\n  .qubely-block-pricelist .qubely-pricelist-image-container .qubely-insert-image span {\n    margin-top: 0px;\n    display: block;\n    font-size: 14px; }\n\n.qubely-block-pricelist .qubely-pricelist-image-container .qubely-pricelist-content-image-editor {\n  position: relative;\n  display: inline-block; }\n  .qubely-block-pricelist .qubely-pricelist-image-container .qubely-pricelist-content-image-editor .qubely-media-actions {\n    bottom: 10px;\n    right: 10px;\n    position: absolute;\n    z-index: 4; }\n\n.qubely-block-pricelist .qubely-pricelist-line {\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  -moz-box-flex: 1;\n  flex-grow: 1;\n  margin: 0 20px; }\n\n.qubely-block-pricelist .qubely-pricelist-title-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -moz-box-align: center;\n  align-items: center; }\n\n.qubely-block-pricelist .qubely-pricelist-item-left .qubely-pricelist-title-wrapper > div:first-child,\n.qubely-block-pricelist .qubely-pricelist-item-left .qubely-pricelist-title-wrapper .qubely-pricelist-title {\n  margin-right: auto; }\n\n.qubely-block-pricelist .qubely-pricelist-item-right .qubely-pricelist-content {\n  flex-direction: row-reverse; }\n\n.qubely-block-pricelist .qubely-pricelist-item-right .qubely-pricelist-title-wrapper {\n  flex-direction: row-reverse; }\n\n.qubely-block-pricelist .qubely-pricelist-item-right .qubely-pricelist-price-wrapper {\n  margin-left: auto; }\n\n.qubely-block-pricelist .qubely-pricelist-item-center .qubely-pricelist-title-wrapper {\n  justify-content: center; }\n\n.qubely-block-pricelist .qubely-pricelist-item-center .qubely-pricelist-title-wrapper > div {\n  margin: 0 30px; }\n\n.qubely-block-pricelist .qubely-pricelist-price-wrapper > div {\n  display: inline-block; }\n\n.qubely-block-pricelist .qubely-pricelist-price-wrapper .qubely-pricelist-discount {\n  text-decoration: line-through;\n  margin-right: 10px; }\n\n.qubely-block-pricelist .qubely-pricelist-description-wrapper {\n  flex: 1;\n  align-self: center; }\n  .qubely-block-pricelist .qubely-pricelist-description-wrapper .qubely-pricelist-description {\n    width: 100%; }\n\n.qubely-block-pricelist .qubely-pricelist-content {\n  overflow: hidden;\n  position: relative; }\n  .qubely-block-pricelist .qubely-pricelist-content:before {\n    position: absolute;\n    left: 0;\n    top: 0;\n    content: \" \";\n    width: 100%;\n    height: 100%;\n    opacity: .8;\n    transition: 400ms; }\n\n.qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container {\n  width: 100%;\n  height: 100%; }\n  .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container:before {\n    content: \"\";\n    left: 0;\n    top: 0;\n    position: absolute;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    transition: ease-in 300ms; }\n  .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container img {\n    position: absolute;\n    width: auto;\n    height: auto;\n    min-width: 100%;\n    max-width: none;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    min-height: 100%; }\n\n.qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-content {\n  position: relative;\n  height: 150px; }\n  .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-content .qubely-pricelist-description-wrapper {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    z-index: 2; }\n\n.qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container .qubely-pricelist-content-image-editor {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-background-size: cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  overflow: hidden; }\n\n.qubely-block-pricelist .qubely-pricelist-item-center .qubely-pricelist-image-container {\n  margin-left: auto;\n  margin-right: auto; }\n\n.qubely-block-pricelist .qubely-pricelist-item-center .qubely-pricelist-description-wrapper {\n  text-align: center; }\n  .qubely-block-pricelist .qubely-pricelist-item-center .qubely-pricelist-description-wrapper .qubely-pricelist-price-wrapper {\n    display: inline-block; }\n\n.qubely-block-pricelist .qubely-pricelist-item-right .qubely-pricelist-description-wrapper {\n  text-align: right; }\n\n.qubely-block-pricelist .qubely-pricelist-item-right .qubely-pricelist-image-container {\n  margin-left: auto; }\n\n.qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container .qubely-insert-image {\n  background: rgba(0, 0, 0, 0.5);\n  padding: 8px 10px;\n  border-radius: 4px;\n  border: 1px dashed rgba(0, 0, 0, 0.7);\n  transition: 400ms; }\n  .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container .qubely-insert-image:hover {\n    background: rgba(0, 0, 0, 0.8);\n    border: 1px dashed rgba(0, 0, 0, 0.9); }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/teamcarousel/style.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/teamcarousel/style.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-team-carousel {\n  transition: all 400ms; }\n  .qubely-block-team-carousel .editor-rich-text .editor-rich-text__tinymce {\n    line-height: inherit; }\n  .qubely-block-team-carousel .qubely-team-quote .qubely-quote-icon {\n    line-height: 1;\n    width: auto;\n    height: auto; }\n  .qubely-block-team-carousel .qubely-team-quote.qubely-position-bottom .qubely-quote-icon {\n    transform: scaleY(-1); }\n  .qubely-block-team-carousel .qubely-single-img.qubely-backend .qubely-team-avatar {\n    cursor: pointer; }\n  .qubely-block-team-carousel .qubely-team-avatar.qubely-image-placeholder i {\n    font-size: 50px;\n    padding: 26px;\n    background: #fafafa; }\n  .qubely-block-team-carousel .qubely-image-placeholder {\n    width: 100%;\n    height: 230px; }\n  .qubely-block-team-carousel .qubely-single-img {\n    text-align: center; }\n  .qubely-block-team-carousel .qubely-team-author .qubely-single-img .qubely-team-avatar {\n    text-align: center; }\n  .qubely-block-team-carousel .qubely-team-avatar-layout-left,\n  .qubely-block-team-carousel .qubely-team-avatar-layout-right {\n    display: inline-flex;\n    align-items: center; }\n    .qubely-block-team-carousel .qubely-team-avatar-layout-left .qubely-team-author-info,\n    .qubely-block-team-carousel .qubely-team-avatar-layout-right .qubely-team-author-info {\n      text-align: left; }\n  .qubely-block-team-carousel .qubely-team-avatar-layout-right .qubely-team-author-info {\n    text-align: right; }\n  .qubely-block-team-carousel .qubely-team-ratings {\n    unicode-bidi: bidi-override;\n    display: inline-block;\n    position: relative;\n    letter-spacing: 5px; }\n    .qubely-block-team-carousel .qubely-team-ratings:before, .qubely-block-team-carousel .qubely-team-ratings:after {\n      content: \"\\f005\\f005\\f005\\f005\\f005\";\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 400;\n      display: block;\n      white-space: nowrap; }\n    .qubely-block-team-carousel .qubely-team-ratings:before {\n      position: absolute;\n      z-index: 1;\n      left: 0px;\n      overflow: hidden;\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 900;\n      content: \"\\f005\\f005\\f005\\f005\\f005\"; }\n    .qubely-block-team-carousel .qubely-team-ratings:after {\n      z-index: 0; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"1\"]:before {\n      width: 20%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"1.5\"]:before {\n      width: 29%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"2\"]:before {\n      width: 40%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"2.5\"]:before {\n      width: 49%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"3\"]:before {\n      width: 60%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"3.5\"]:before {\n      width: 69%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"4\"]:before {\n      width: 80%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"4.5\"]:before {\n      width: 89%; }\n    .qubely-block-team-carousel .qubely-team-ratings[data-qubelyrating=\"5\"]:before {\n      width: 100%; }\n  .qubely-block-team-carousel .qubely-team-carousel-arrow-down {\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-top: 15px solid #d6d9dd; }\n\n.qubely-team-carousel-content-wrapper {\n  position: relative;\n  position: relative; }\n\n.layout-3 .qubely-team-carousel-content-wrapper {\n  padding: 20px;\n  border-radius: 10px;\n  background: #f4f4f4; }\n  .layout-3 .qubely-team-carousel-content-wrapper:before {\n    content: \" \";\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    transform: translate(-50%, 50%);\n    border-width: 15px;\n    z-index: 1;\n    border-color: #f4f4f4 transparent transparent transparent;\n    left: 50%;\n    bottom: -15px; }\n\n.layout-3 .qubely-team-author {\n  margin-top: 40px;\n  text-align: center; }\n\n.layout-3 .qubely-team-avatar {\n  margin-right: 0px; }\n\n.layout-3 .qubely-team-avatar-layout-left .qubely-team-author-info {\n  text-align: center; }\n\n.layout-1 .qubely-team-avatar {\n  margin-right: 20px; }\n\n.layout-2 .qubely-team-avatar {\n  margin-right: 20px; }\n\n.qubely-carousel.qubely-carousel-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-extended-list {\n  position: relative;\n  overflow: hidden; }\n\n.qubely-carousel.qubely-carousel-wrapper .js-indicator {\n  position: absolute;\n  z-index: 9;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  transition-property: transform, -webkit-transform, width;\n  -webkit-transition-property: transform, -webkit-transform, width;\n  transition-timing-function: linear;\n  -webkit-transition-timing-function: linear; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item {\n  position: relative;\n  float: left;\n  overflow: hidden; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.active {\n  visibility: visible;\n  transform-style: preserve-3d; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.dragenable {\n  visibility: visible;\n  transform-style: preserve-3d; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.prev-item {\n  z-index: 1;\n  visibility: visible; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots {\n  height: 50px;\n  width: 100%;\n  margin-top: 5px;\n  z-index: 3;\n  margin-top: 0;\n  height: 50px;\n  width: 100%;\n  bottom: -40px;\n  z-index: 3;\n  left: 50%;\n  transform: translateX(-50%); }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul {\n    margin: 15px;\n    padding: 0;\n    list-style: none;\n    text-align: center; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active {\n      width: 55px; }\n      .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator {\n        width: 100%;\n        height: 100%; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {\n      display: inline-block;\n      height: 4px;\n      width: 30px;\n      margin: 5px;\n      border: 0;\n      background: #f4f4f4;\n      border-radius: 2px;\n      cursor: pointer;\n      position: relative; }\n      .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator {\n        position: absolute;\n        -webkit-perspective: 1000px;\n        perspective: 1000px;\n        transform-style: preserve-3d;\n        transition-property: transform, -webkit-transform, width;\n        -webkit-transition-property: transform, -webkit-transform, width;\n        transition-timing-function: linear;\n        -webkit-transition-timing-function: linear;\n        width: 0;\n        left: 0;\n        top: 0;\n        height: 4px;\n        border-radius: 2px; }\n      .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator.active {\n        background: #2084f9;\n        width: 100%;\n        top: 0;\n        border-radius: 2px; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control {\n  height: 50px;\n  width: 100%;\n  margin-top: 0px;\n  z-index: 3;\n  position: absolute;\n  top: 50%; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control {\n    display: inline-block;\n    padding: 10px;\n    border: 1px solid #e2e2e2;\n    position: absolute;\n    cursor: pointer;\n    text-align: center;\n    bottom: 49%;\n    background: rgba(255, 255, 255, 0.4);\n    transition: .3s; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control:hover {\n      border: 1px solid #1066cc; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .next-control.nav-control.buttom {\n    bottom: 0; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .prev-control.nav-control.buttom {\n    bottom: 0; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control {\n    right: 0; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control {\n    left: 0; }\n\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s;\n  position: relative;\n  overflow: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s;\n  display: flex; }\n\n.qubely-carousel-nav-control .nav-control .dashicons {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.qubely-carousel {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .qubely-carousel .qubely-carousel-extended-dots {\n    position: absolute;\n    bottom: 50px;\n    left: 50%;\n    transform: translateX(-50%);\n    position: relative;\n    height: 20px;\n    width: 100%;\n    margin-top: 5px;\n    z-index: 3; }\n    .qubely-carousel .qubely-carousel-extended-dots ul {\n      margin: -4px;\n      padding: 0;\n      list-style: none;\n      text-align: center; }\n      .qubely-carousel .qubely-carousel-extended-dots ul li {\n        display: inline-block;\n        height: 4px;\n        width: 30px;\n        margin: 5px;\n        border: 0;\n        background: rgba(218, 92, 92, 0.4);\n        border-radius: 2px;\n        cursor: pointer;\n        position: relative; }\n        .qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator {\n          position: absolute;\n          -webkit-perspective: 1000px;\n          perspective: 1000px;\n          transform-style: preserve-3d;\n          transition-property: transform, -webkit-transform, width;\n          -webkit-transition-property: transform, -webkit-transform, width;\n          transition-timing-function: linear;\n          -webkit-transition-timing-function: linear;\n          width: 0;\n          left: 0;\n          top: 0;\n          height: 4px;\n          border-radius: 2px; }\n        .qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator.active {\n          background: #ffffff;\n          width: 100%;\n          top: 0;\n          border-radius: 2px; }\n      .qubely-carousel .qubely-carousel-extended-dots ul li.active {\n        width: 80px; }\n  .qubely-carousel .qubely-carousel-extended-list {\n    position: relative;\n    overflow: hidden; }\n  .qubely-carousel .js-indicator {\n    position: absolute;\n    z-index: 9;\n    -webkit-perspective: 1000px;\n    perspective: 1000px;\n    transform-style: preserve-3d;\n    transition-property: transform, -webkit-transform, width;\n    -webkit-transition-property: transform, -webkit-transform, width;\n    transition-timing-function: linear;\n    -webkit-transition-timing-function: linear; }\n  .qubely-carousel .qubely-carousel-item {\n    position: relative;\n    float: left; }\n  .qubely-carousel .qubely-carousel-item.active {\n    visibility: visible;\n    transform-style: preserve-3d; }\n  .qubely-carousel .qubely-carousel-item.dragenable {\n    visibility: visible;\n    transform-style: preserve-3d; }\n  .qubely-carousel .qubely-carousel-item.prev-item {\n    z-index: 1;\n    visibility: visible; }\n  .qubely-carousel .qubely-carousel-extended-nav-control {\n    position: relative;\n    height: 20px;\n    width: 100%;\n    margin-top: 5px;\n    z-index: 3; }\n    .qubely-carousel .qubely-carousel-extended-nav-control .nav-control {\n      display: inline-block;\n      height: 40px;\n      width: 40px;\n      padding: 10px;\n      border: 1px solid #ababab;\n      position: absolute;\n      cursor: pointer;\n      text-align: center;\n      bottom: 100px;\n      background: rgba(255, 255, 255, 0.4); }\n    .qubely-carousel .qubely-carousel-extended-nav-control .nav-control.next-control {\n      right: 0; }\n    .qubely-carousel .qubely-carousel-extended-nav-control .nav-control.prev-control {\n      left: 0; }\n\n.qubely-tesitmonial-item.layout-3 .qubely-team-avatar {\n  margin-right: 0; }\n\n.qubely-carousel.qubely-carousel-wrapper.is-faded .qubely-carousel-extended-list .qubely-carousel-extended-outer-stage .qubely-carousel-item:not(.active) {\n  opacity: 0.1; }\n\n.qubely-team-1 .qubely-team-author-info {\n  width: 100%;\n  padding: 30px; }\n\n.qubely-team-1 .qubely-single-img img.qubely-team-avatar {\n  transition: .3s; }\n\n.qubely-team-1:hover .qubely-image-placeholder {\n  transform: scale(1.1); }\n\n.qubely-team-1:hover .qubely-single-img img.qubely-team-avatar {\n  transform: scale(1.1); }\n\n.qubely-team-2 {\n  position: relative; }\n  .qubely-team-2 .qubely-team-author-info {\n    background: rgba(0, 0, 0, 0.65);\n    position: absolute;\n    line-height: 30px;\n    transition: .3s;\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    z-index: 1;\n    top: 0;\n    color: #fff;\n    transform: translate(0%, 0%);\n    width: 100%;\n    padding: 70px; }\n  .qubely-team-2:hover .qubely-team-author-info {\n    opacity: 1; }\n\n.qubely-team-carousel-item {\n  overflow: hidden; }\n  .qubely-team-carousel-item .qubely-single-img {\n    line-height: 0; }\n\n.qubely-team-3 {\n  overflow: hidden; }\n  .qubely-team-3 .qubely-single-img {\n    width: calc(30% - 15px);\n    float: left;\n    display: inline-block;\n    margin-right: 15px; }\n  .qubely-team-3 .qubely-team-author {\n    display: inline-block;\n    width: 100%; }\n  .qubely-team-3 .qubely-team-author-info {\n    transform: translate(0px, 20%);\n    display: initial; }\n\n.qubely-block-team-carousel .qubely-team-3 .qubely-image-placeholder {\n  height: 100%; }\n\n.qubely-block-team-carousel .qubely-image-placeholder {\n  width: 100%;\n  height: 230px;\n  transform: scale(1);\n  transition: .3s; }\n\n.qubely-team-author-info {\n  width: 70%;\n  display: inline-block; }\n\n.qubely-carousel-item {\n  height: fit-content; }\n\n.editor-styles-wrapper .qubely-team-2 {\n  line-height: 0; }\n\n.qubely-single-img {\n  overflow: hidden; }\n\n.qubely-team-social-links {\n  font-size: 0; }\n  .qubely-team-social-links a {\n    display: inline-block;\n    text-decoration: none !important;\n    transition: color 300ms, background-color 300ms; }\n  .qubely-team-social-links.qubely-team-icon-layout-fill a {\n    padding: 10px; }\n    .qubely-team-social-links.qubely-team-icon-layout-fill a i {\n      width: 1em;\n      height: 1em;\n      display: block;\n      text-align: center; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-facebook {\n    color: #3b5998; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-facebook:hover {\n      color: #2f477c; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-twitter {\n    color: #1da1f2; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-twitter:hover {\n      color: #1a93df; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-instagram {\n    color: #e1306c; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-instagram:hover {\n      color: #c0275a; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-linkedin {\n    color: #0077b5; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-linkedin:hover {\n      color: #005f92; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-youtube {\n    color: #ff0000; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-youtube:hover {\n      color: #e40000; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-github {\n    color: #333; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-github:hover {\n      color: #181818; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-flickr {\n    color: #ff0084; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-flickr:hover {\n      color: #e60077; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-pinterest {\n    color: #bd081c; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-pinterest:hover {\n      color: #9c0718; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-dribbble {\n    color: #ea4c89; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-dribbble:hover {\n      color: #d3437a; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-behance {\n    color: #1769ff; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-normal .qubely-team-social-behance:hover {\n      color: #135add; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill a {\n    color: #fff; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill a:hover {\n      color: #fff; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-facebook {\n    background-color: #3b5998; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-facebook:hover {\n      background-color: #2f477c; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-twitter {\n    background-color: #1da1f2; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-twitter:hover {\n      background-color: #1a93df; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-instagram {\n    background-color: #e1306c; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-instagram:hover {\n      background-color: #c0275a; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-linkedin {\n    background-color: #0077b5; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-linkedin:hover {\n      background-color: #005f92; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-youtube {\n    background-color: #ff0000; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-youtube:hover {\n      background-color: #e40000; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-github {\n    background-color: #333; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-github:hover {\n      background-color: #181818; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-flickr {\n    background-color: #ff0084; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-flickr:hover {\n      background-color: #e60077; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-pinterest {\n    background-color: #bd081c; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-pinterest:hover {\n      background-color: #9c0718; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-dribbble {\n    background-color: #ea4c89; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-dribbble:hover {\n      background-color: #d3437a; }\n  .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-behance {\n    background-color: #1769ff; }\n    .qubely-team-social-links.qubely-team-icon-style-default.qubely-team-icon-layout-fill .qubely-team-social-behance:hover {\n      background-color: #135add; }\n\n.social-share .qubely-team-social-links a {\n  margin-bottom: 8px;\n  display: inline-block; }\n\n.qubely-team-2 .qubely-team-author-info .layout-2 {\n  transition: .3s;\n  transform: translate(50%, -20%);\n  position: absolute;\n  width: 100%;\n  left: -50%;\n  top: 50%; }\n\n.qubely-team-2:hover .qubely-team-author-info .layout-2 {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, -50%);\n  position: absolute;\n  width: 100%;\n  left: -50%;\n  top: 50%; }\n\n.qubely-block-team-carousel .qubely-carousel-extended-outer-stage {\n  padding: 24px 4px 10px; }\n\n.qubely-carousel .qubely-carousel-extended-list .qubely-carousel-item {\n  transition: .3s; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.active {\n  margin-left: 0px; }\n\nh2.qubely-heading-selector:before {\n  display: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/testimonialcarousel/style.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/testimonialcarousel/style.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-testimonial-carousel {\n  transition: all 400ms; }\n  .qubely-block-testimonial-carousel .editor-rich-text .editor-rich-text__tinymce {\n    line-height: inherit; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-quote .qubely-quote-icon {\n    line-height: 1;\n    width: auto;\n    height: auto; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-quote.qubely-position-bottom .qubely-quote-icon {\n    transform: scaleY(-1); }\n  .qubely-block-testimonial-carousel .qubely-single-img.qubely-backend .qubely-testimonial-avatar {\n    cursor: pointer; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-avatar {\n    display: inline; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-avatar.qubely-image-placeholder i {\n      font-size: 0.5em; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-left,\n  .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-right {\n    display: inline-flex;\n    align-items: center; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-left .qubely-testimonial-author-info,\n    .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-right .qubely-testimonial-author-info {\n      text-align: left; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-avatar-layout-right .qubely-testimonial-author-info {\n    text-align: right; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-ratings {\n    unicode-bidi: bidi-override;\n    display: inline-block;\n    position: relative;\n    letter-spacing: 5px; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings:before, .qubely-block-testimonial-carousel .qubely-testimonial-ratings:after {\n      content: \"\\f005\\f005\\f005\\f005\\f005\";\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 400;\n      display: block;\n      white-space: nowrap; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings:before {\n      position: absolute;\n      z-index: 1;\n      left: 0px;\n      overflow: hidden;\n      font-family: \"Font Awesome\\ 5 Free\";\n      font-weight: 900;\n      content: \"\\f005\\f005\\f005\\f005\\f005\"; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings:after {\n      z-index: 0; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"1\"]:before {\n      width: 20%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"1.5\"]:before {\n      width: 29%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"2\"]:before {\n      width: 40%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"2.5\"]:before {\n      width: 49%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"3\"]:before {\n      width: 60%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"3.5\"]:before {\n      width: 69%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"4\"]:before {\n      width: 80%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"4.5\"]:before {\n      width: 89%; }\n    .qubely-block-testimonial-carousel .qubely-testimonial-ratings[data-qubelyrating=\"5\"]:before {\n      width: 100%; }\n  .qubely-block-testimonial-carousel .qubely-testimonial-carousel-arrow-down {\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-top: 15px solid #d6d9dd; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item {\n  position: relative;\n  float: left;\n  overflow: hidden; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item:hover .qubely-repeatable-action-remove {\n    display: block; }\n\n.qubely-testimonial-carousel-content-wrapper {\n  position: relative; }\n\n.layout-3 .qubely-testimonial-carousel-content-wrapper {\n  padding: 20px;\n  border-radius: 10px;\n  background: #f4f4f4; }\n  .layout-3 .qubely-testimonial-carousel-content-wrapper:before {\n    content: \" \";\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    transform: translate(-50%, 50%);\n    border-width: 15px;\n    z-index: 1;\n    border-color: #f4f4f4 transparent transparent transparent;\n    left: 50%;\n    bottom: -15px; }\n\n.layout-3 .qubely-testimonial-author {\n  text-align: center;\n  line-height: 0; }\n\n.layout-3 .qubely-testimonial-avatar {\n  margin-right: 0px; }\n\n.layout-3 .qubely-testimonial-avatar-layout-left .qubely-testimonial-author-info {\n  text-align: center; }\n\n.layout-1 .qubely-testimonial-avatar {\n  margin-right: 20px; }\n\n.layout-2 .qubely-testimonial-avatar {\n  margin-right: 20px; }\n\n.qubely-carousel.qubely-carousel-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-extended-list {\n    position: relative;\n    overflow: hidden; }\n  .qubely-carousel.qubely-carousel-wrapper .js-indicator {\n    position: absolute;\n    z-index: 9;\n    -webkit-perspective: 1000px;\n    perspective: 1000px;\n    transform-style: preserve-3d;\n    transition-property: transform, -webkit-transform, width;\n    -webkit-transition-property: transform, -webkit-transform, width;\n    transition-timing-function: linear;\n    -webkit-transition-timing-function: linear; }\n\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.active {\n  visibility: visible;\n  transform-style: preserve-3d; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.dragenable {\n  visibility: visible;\n  transform-style: preserve-3d; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-item.prev-item {\n  z-index: 1;\n  visibility: visible; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots {\n  height: 50px;\n  width: 100%;\n  margin-top: 10px;\n  z-index: 3;\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%); }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul {\n    margin: 0px;\n    padding: 0;\n    list-style: none;\n    text-align: center; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active {\n      width: 55px; }\n      .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator {\n        width: 100%;\n        height: 100%; }\n    .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li {\n      display: inline-block;\n      height: 4px;\n      width: 30px;\n      margin: 5px;\n      border: 0;\n      background: #f4f4f4;\n      border-radius: 2px;\n      cursor: pointer;\n      position: relative; }\n      .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator {\n        position: absolute;\n        -webkit-perspective: 1000px;\n        perspective: 1000px;\n        transform-style: preserve-3d;\n        transition-property: transform, -webkit-transform, width;\n        -webkit-transition-property: transform, -webkit-transform, width;\n        transition-timing-function: linear;\n        -webkit-transition-timing-function: linear;\n        width: 0;\n        left: 0;\n        top: 0;\n        height: 4px;\n        border-radius: 2px; }\n      .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li .dot-indicator.active {\n        background: #2084f9;\n        width: 100%;\n        top: 0;\n        border-radius: 2px; }\n\n.qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control {\n  height: 50px;\n  width: 100%;\n  margin-top: 10px;\n  z-index: 3; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control {\n    display: inline-block;\n    padding: 10px;\n    border: 1px solid #e2e2e2;\n    position: absolute;\n    cursor: pointer;\n    text-align: center;\n    bottom: 49%;\n    background: rgba(255, 255, 255, 0.4);\n    transition: .3s; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .next-control.nav-control.buttom {\n    bottom: 0; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .prev-control.nav-control.buttom {\n    bottom: 0; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control {\n    right: 0; }\n  .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control {\n    left: 0; }\n\n.qubely-carousel-nav-control .nav-control .dashicons {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.qubely-tesitmonial-item.layout-3 .qubely-testimonial-avatar {\n  margin-right: 0; }\n\n.qubely-testimonial-carousel-content-wrapper {\n  position: relative; }\n\n.qubely-carousel {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .qubely-carousel .qubely-carousel-extended-list {\n    position: relative;\n    overflow: hidden; }\n  .qubely-carousel .js-indicator {\n    position: absolute;\n    z-index: 9;\n    -webkit-perspective: 1000px;\n    perspective: 1000px;\n    transform-style: preserve-3d;\n    transition-property: transform, -webkit-transform, width;\n    -webkit-transition-property: transform, -webkit-transform, width;\n    transition-timing-function: linear;\n    -webkit-transition-timing-function: linear; }\n  .qubely-carousel .qubely-carousel-item {\n    position: relative;\n    float: left; }\n  .qubely-carousel .qubely-carousel-item.active {\n    visibility: visible;\n    transform-style: preserve-3d; }\n  .qubely-carousel .qubely-carousel-item.dragenable {\n    visibility: visible;\n    transform-style: preserve-3d; }\n  .qubely-carousel .qubely-carousel-item.prev-item {\n    z-index: 1;\n    visibility: visible; }\n  .qubely-carousel .qubely-carousel-extended-nav-control {\n    position: relative;\n    height: 20px;\n    width: 100%;\n    margin-top: 5px;\n    z-index: 3; }\n    .qubely-carousel .qubely-carousel-extended-nav-control .nav-control {\n      display: inline-block;\n      height: 40px;\n      width: 40px;\n      padding: 10px;\n      border: 1px solid #ababab;\n      position: absolute;\n      cursor: pointer;\n      text-align: center;\n      bottom: 100px;\n      background: rgba(255, 255, 255, 0.4); }\n    .qubely-carousel .qubely-carousel-extended-nav-control .nav-control.next-control {\n      right: 0; }\n    .qubely-carousel .qubely-carousel-extended-nav-control .nav-control.prev-control {\n      left: 0; }\n  .qubely-carousel .qubely-carousel-extended-dots {\n    position: relative;\n    height: 20px;\n    width: 100%;\n    margin-top: 5px;\n    z-index: 3;\n    position: absolute;\n    bottom: 50px;\n    left: 50%;\n    transform: translateX(-50%); }\n    .qubely-carousel .qubely-carousel-extended-dots ul {\n      margin: -4px;\n      padding: 0;\n      list-style: none;\n      text-align: center; }\n      .qubely-carousel .qubely-carousel-extended-dots ul li {\n        display: inline-block;\n        height: 4px;\n        width: 30px;\n        margin: 5px;\n        border: 0;\n        background: rgba(218, 92, 92, 0.4);\n        border-radius: 2px;\n        cursor: pointer;\n        position: relative; }\n        .qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator {\n          position: absolute;\n          -webkit-perspective: 1000px;\n          perspective: 1000px;\n          transform-style: preserve-3d;\n          transition-property: transform, -webkit-transform, width;\n          -webkit-transition-property: transform, -webkit-transform, width;\n          transition-timing-function: linear;\n          -webkit-transition-timing-function: linear;\n          width: 0;\n          left: 0;\n          top: 0;\n          height: 4px;\n          border-radius: 2px; }\n        .qubely-carousel .qubely-carousel-extended-dots ul li .qubely-carousel-extended-dot-indicator.active {\n          background: #ffffff;\n          width: 100%;\n          top: 0;\n          border-radius: 2px; }\n      .qubely-carousel .qubely-carousel-extended-dots ul li.active {\n        width: 80px; }\n\n.qubely-carousel-extended-outer-stage {\n  position: relative;\n  overflow: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  transition: all 0.25s ease 0s;\n  -webkit-transition: all 0.25s ease 0s;\n  display: flex; }\n\n.qubely-testimonial-author .qubely-testimonial-author-name {\n  line-height: normal; }\n\n.qubely-testimonial-author .qubely-testimonial-author-designation {\n  line-height: normal; }\n\n.qubely-block-testimonial-carousel .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots {\n  position: relative; }\n\n.qubely-carousel.qubely-carousel-wrapper.is-faded .qubely-carousel-extended-list .qubely-carousel-extended-outer-stage .qubely-carousel-item:not(.active) {\n  opacity: 0.1; }\n\n.qubely-block-testimonial-carousel .qubely-testimonial-avatar.qubely-image-placeholder i {\n  transform: translate(0px, 45%);\n  display: inline-block; }\n", ""]);



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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
var createBlock = wp.blocks.createBlock;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    RichText = _wp$editor.RichText;
var _wp$components = wp.components,
    Dropdown = _wp$components.Dropdown,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    Toolbar = _wp$components.Toolbar,
    TextareaControl = _wp$components.TextareaControl;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$qubelyComponents = wp.qubelyComponents,
    ButtonGroup = _wp$qubelyComponents.ButtonGroup,
    BoxShadow = _wp$qubelyComponents.BoxShadow,
    BorderRadius = _wp$qubelyComponents.BorderRadius,
    Padding = _wp$qubelyComponents.Padding,
    Styles = _wp$qubelyComponents.Styles,
    Wrapper = _wp$qubelyComponents.Wrapper,
    Range = _wp$qubelyComponents.Range,
    Separator = _wp$qubelyComponents.Separator,
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
    _wp$qubelyComponents$ = _wp$qubelyComponents.gloalSettings,
    globalSettingsPanel = _wp$qubelyComponents$.globalSettingsPanel,
    animationSettings = _wp$qubelyComponents$.animationSettings,
    interactionSettings = _wp$qubelyComponents$.interactionSettings;

var Edit = function (_Component) {
    _inherits(Edit, _Component);

    function Edit(props) {
        _classCallCheck(this, Edit);

        var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

        _this.renderFormFieldTypes = function () {
            var clientId = _this.props.clientId;

            var _dispatch = dispatch('core/block-editor'),
                replaceInnerBlocks = _dispatch.replaceInnerBlocks;

            var _select = select('core/block-editor'),
                getBlocks = _select.getBlocks;

            var _this$state = _this.state,
                hideDropdown = _this$state.hideDropdown,
                groupField = _this$state.groupField;

            var innerBlocks = [].concat(_toConsumableArray(getBlocks(clientId)));

            var formFields = [[__('Text'), 'text'], [__('Number'), 'number'], [__('Email'), 'email'], [__('Radio'), 'radio'], [__('Checkbox'), 'checkbox'], [__('Textarea'), 'textarea'], [__('Date'), 'date'], [__('Time'), 'time'], [__('Dropdown'), 'dropdown']];
            var formColumns = [[__('Two'), 2], [__('Three'), 3], [__('Four'), 4]];

            return React.createElement(
                'div',
                { className: 'qubely-form-field-types' },
                !groupField && React.createElement(
                    'div',
                    { className: 'qubely-form-field-tabs' },
                    React.createElement(
                        'div',
                        {
                            onClick: function onClick() {
                                _this.setState({ groupField: true });
                            },
                            className: 'qubely-form-field-tab' + (groupField ? ' qubely-active' : '')
                        },
                        _icons2.default.from_fields.column,
                        ' Add Column'
                    )
                ),
                groupField ? React.createElement(
                    'div',
                    { className: 'qubely-form-column-options' },
                    formColumns.map(function (_ref, index) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            columnName = _ref2[0],
                            value = _ref2[1];

                        return React.createElement(
                            'div',
                            {
                                className: 'qubely-form-column-option',
                                onClick: function onClick() {
                                    var tempWidth = '' + 100 / (index + 2);
                                    innerBlocks.push(createBlock('qubely/form-row', {}, Array(value).fill(0).map(function () {
                                        return createBlock('qubely/form-column', { width: { sm: tempWidth, md: tempWidth, xs: tempWidth, unit: '%' }, fieldSize: 'custom', parentClientId: clientId });
                                    })));
                                    replaceInnerBlocks(clientId, innerBlocks, false);
                                    _this.setState({ groupField: false });
                                    hideDropdown && hideDropdown();
                                }
                            },
                            Array(index + 2).fill(0).map(function () {
                                return React.createElement('i', { style: { width: 100 / (index + 1) + '%' } });
                            })
                        );
                    })
                ) : formFields.map(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                        fieldName = _ref4[0],
                        type = _ref4[1];

                    return React.createElement(
                        'div',
                        { className: 'qubely-form-field-type',
                            onClick: function onClick() {
                                hideDropdown && hideDropdown();
                                _this.addNewItem(fieldName, type);
                            }
                        },
                        _icons2.default.from_fields[type],
                        '   ',
                        fieldName
                    );
                })
            );
        };

        _this.renderFormTemplate = function () {
            var _this$props = _this.props,
                clientId = _this$props.clientId,
                formItems = _this$props.attributes.formItems;

            return [['qubely/form-row', { parentClientId: clientId }, [['qubely/form-column', { parentClientId: clientId }, [['qubely/formfield-text', { parentClientId: clientId, type: 'text', label: 'First Name', placeholder: 'Add first name', width: 'large', required: true }]]], ['qubely/form-column', { parentClientId: clientId }, [['qubely/formfield-text', { parentClientId: clientId, type: 'text', label: 'Last Name', placeholder: 'Add last name', width: 'large', required: true }]]]]]].concat(_toConsumableArray(formItems.map(function (_ref5) {
                var type = _ref5.type,
                    label = _ref5.label,
                    options = _ref5.options,
                    placeholder = _ref5.placeholder,
                    width = _ref5.width,
                    required = _ref5.required;

                return ['qubely/form-row', { parentClientId: clientId }, [['qubely/form-column', { parentClientId: clientId }, [['qubely/formfield-' + type, { parentClientId: clientId, type: type, label: label, options: options, placeholder: placeholder, width: width, required: required }]]]]];
            })));
        };

        _this.state = {
            spacer: true,
            selectedItem: -1,
            hideDropdown: null,
            newItemType: 'text',
            device: 'md',
            groupField: false
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
        key: 'addNewItem',
        value: function addNewItem(fieldName, newFieldType) {
            var _props4 = this.props,
                clientId = _props4.clientId,
                attributes = _props4.attributes,
                setAttributes = _props4.setAttributes;

            var _select2 = select('core/block-editor'),
                getBlocks = _select2.getBlocks;

            var _dispatch2 = dispatch('core/block-editor'),
                replaceInnerBlocks = _dispatch2.replaceInnerBlocks;

            var formItems = [].concat(_toConsumableArray(attributes.formItems));
            var newItem = {
                type: newFieldType,
                label: fieldName,
                placeholder: '',
                width: 100,
                required: true,
                hideLabel: false
            };

            formItems.push(newItem);
            setAttributes({ formItems: formItems });

            var innerBlocks = [].concat(_toConsumableArray(getBlocks(clientId)));
            innerBlocks.push(createBlock('qubely/form-row', {}, [createBlock('qubely/form-column', {}, [createBlock('qubely/formfield-' + newFieldType)])]));
            replaceInnerBlocks(clientId, innerBlocks, false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props5 = this.props,
                clientId = _props5.clientId,
                attributes = _props5.attributes,
                setAttributes = _props5.setAttributes,
                _props5$attributes = _props5.attributes,
                uniqueId = _props5$attributes.uniqueId,
                layout = _props5$attributes.layout,
                formItems = _props5$attributes.formItems,
                labelColor = _props5$attributes.labelColor,
                labelAlignment = _props5$attributes.labelAlignment,
                labelTypography = _props5$attributes.labelTypography,
                spacing = _props5$attributes.spacing,
                gutter = _props5$attributes.gutter,
                inputSize = _props5$attributes.inputSize,
                inputCustomSize = _props5$attributes.inputCustomSize,
                inputTypography = _props5$attributes.inputTypography,
                inputBoxShadow = _props5$attributes.inputBoxShadow,
                inputColor = _props5$attributes.inputColor,
                inputColorFocus = _props5$attributes.inputColorFocus,
                inputColorHover = _props5$attributes.inputColorHover,
                inputBg = _props5$attributes.inputBg,
                materialDarkInputBg = _props5$attributes.materialDarkInputBg,
                inputBgFocus = _props5$attributes.inputBgFocus,
                inputBgHover = _props5$attributes.inputBgHover,
                inputBorder = _props5$attributes.inputBorder,
                inputBorderRadius = _props5$attributes.inputBorderRadius,
                inputBorderMaterial = _props5$attributes.inputBorderMaterial,
                inputBorderColorFocus = _props5$attributes.inputBorderColorFocus,
                inputBorderColorHover = _props5$attributes.inputBorderColorHover,
                textareaHeight = _props5$attributes.textareaHeight,
                placeholderColor = _props5$attributes.placeholderColor,
                placeholderColorFocus = _props5$attributes.placeholderColorFocus,
                placeholderColorHover = _props5$attributes.placeholderColorHover,
                enableButton = _props5$attributes.enableButton,
                buttonTag = _props5$attributes.buttonTag,
                buttonSize = _props5$attributes.buttonSize,
                buttonFillType = _props5$attributes.buttonFillType,
                buttonText = _props5$attributes.buttonText,
                buttonIconName = _props5$attributes.buttonIconName,
                buttonIconPosition = _props5$attributes.buttonIconPosition,
                fieldErrorMessage = _props5$attributes.fieldErrorMessage,
                formSuccessMessage = _props5$attributes.formSuccessMessage,
                formErrorMessage = _props5$attributes.formErrorMessage,
                reCaptcha = _props5$attributes.reCaptcha,
                reCaptchaSiteKey = _props5$attributes.reCaptchaSiteKey,
                reCaptchaSecretKey = _props5$attributes.reCaptchaSecretKey,
                policyCheckbox = _props5$attributes.policyCheckbox,
                policyCheckboxText = _props5$attributes.policyCheckboxText,
                emailReceiver = _props5$attributes.emailReceiver,
                emailHeaders = _props5$attributes.emailHeaders,
                emailFrom = _props5$attributes.emailFrom,
                emailSubject = _props5$attributes.emailSubject,
                emailBody = _props5$attributes.emailBody,
                globalZindex = _props5$attributes.globalZindex,
                enablePosition = _props5$attributes.enablePosition,
                selectPosition = _props5$attributes.selectPosition,
                positionXaxis = _props5$attributes.positionXaxis,
                positionYaxis = _props5$attributes.positionYaxis,
                hideTablet = _props5$attributes.hideTablet,
                hideMobile = _props5$attributes.hideMobile,
                globalCss = _props5$attributes.globalCss,
                animation = _props5$attributes.animation,
                interaction = _props5$attributes.interaction;
            var device = this.state.device;


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
                            options: [{ value: 'classic', img: _icons2.default.form_classic }, { value: 'material', img: _icons2.default.form_material }, { value: 'materialdark', img: _icons2.default.form_material_dark }]
                        })
                    ),
                    React.createElement(
                        PanelBody,
                        { title: __('Label'), initialOpen: false },
                        React.createElement(ButtonGroup, {
                            label: __('Label Alignment'),
                            options: [[__('Top'), 'top'], [__('Left'), 'left'], [__('Right'), 'right']],
                            value: labelAlignment,
                            onChange: function onChange(value) {
                                return setAttributes({ labelAlignment: value });
                            }
                        }),
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
                        })
                    ),
                    React.createElement(
                        PanelBody,
                        { title: __('Input'), initialOpen: false },
                        layout != 'material' && React.createElement(
                            Fragment,
                            null,
                            React.createElement(RadioAdvanced, {
                                label: __('Input Size'),
                                options: [{ label: 'S', value: 'small', title: 'Small' }, { label: 'M', value: 'medium', title: 'Medium' }, { label: 'L', value: 'large', title: 'Large' }, { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }],
                                value: inputSize,
                                onChange: function onChange(value) {
                                    return setAttributes({ inputSize: value });
                                } }),
                            inputSize == 'custom' && React.createElement(Padding, {
                                max: 50,
                                min: 0,
                                responsive: true,
                                value: inputCustomSize,
                                label: __('Custom Size'),
                                unit: ['px', 'em', '%'],
                                onChange: function onChange(value) {
                                    return setAttributes({ inputCustomSize: value });
                                }
                            })
                        ),
                        React.createElement(Range, {
                            min: 100,
                            max: 500,
                            responsive: true,
                            value: textareaHeight,
                            unit: ['px', 'em', '%'],
                            label: __('Textarea Height'),
                            onChange: function onChange(value) {
                                return setAttributes({ textareaHeight: value });
                            }
                        }),
                        React.createElement(Range, {
                            min: 0,
                            max: 60,
                            responsive: true,
                            value: spacing,
                            label: __('Spacing'),
                            unit: ['px', 'em', '%'],
                            onChange: function onChange(value) {
                                return setAttributes({ spacing: value });
                            }
                        }),
                        React.createElement(Range, {
                            min: 0,
                            max: 60,
                            responsive: true,
                            value: gutter,
                            label: __('Gutter'),
                            unit: ['px', 'em', '%'],
                            onChange: function onChange(value) {
                                return setAttributes({ gutter: value });
                            }
                        }),
                        React.createElement(Border, {
                            min: 0,
                            max: 10,
                            responsive: true,
                            value: layout === 'classic' ? inputBorder : inputBorderMaterial,
                            label: __('Border'),
                            unit: ['px', 'em', '%'],
                            onChange: function onChange(val) {
                                return setAttributes(layout === 'classic' ? { inputBorder: val } : { inputBorderMaterial: val });
                            }
                        }),
                        layout != 'material' && React.createElement(BorderRadius, {
                            min: 0,
                            max: 100,
                            responsive: true,
                            label: __('Radius'),
                            value: inputBorderRadius,
                            unit: ['px', 'em', '%'],
                            onChange: function onChange(value) {
                                return setAttributes({ inputBorderRadius: value });
                            }
                        }),
                        React.createElement(
                            Tabs,
                            null,
                            React.createElement(
                                Tab,
                                { tabTitle: __('Normal') },
                                React.createElement(Color, { label: __('Input Text Color'), value: inputColor, onChange: function onChange(val) {
                                        return setAttributes({ inputColor: val });
                                    } }),
                                React.createElement(Color, {
                                    label: __('Background Color'),
                                    value: layout !== 'materialdark' ? inputBg : materialDarkInputBg,
                                    onChange: function onChange(val) {
                                        return setAttributes(layout !== 'materialdark' ? { inputBg: val } : { materialDarkInputBg: val });
                                    }
                                }),
                                React.createElement(Color, { label: __('Placeholder Color'), value: placeholderColor, onChange: function onChange(val) {
                                        return setAttributes({ placeholderColor: val });
                                    } })
                            ),
                            React.createElement(
                                Tab,
                                { tabTitle: __('Focus') },
                                React.createElement(Color, { label: __('Text Color'), value: inputColorFocus, onChange: function onChange(val) {
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
                                React.createElement(Color, { label: __('Text Color'), value: inputColorHover, onChange: function onChange(val) {
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
                        React.createElement(Typography, { value: inputTypography, onChange: function onChange(val) {
                                return setAttributes({ inputTypography: val });
                            } }),
                        React.createElement(Separator, null),
                        React.createElement(BoxShadow, {
                            disableInset: true,
                            label: __('Box-Shadow'),
                            value: inputBoxShadow,
                            onChange: function onChange(value) {
                                return setAttributes({ inputBoxShadow: value });
                            }
                        }),
                        React.createElement(Separator, null)
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
                    buttonSettings(this.props.attributes, device, function (key, value) {
                        return setAttributes(_defineProperty({}, key, value));
                    }, function (key, value) {
                        _this2.setState(_defineProperty({}, key, value));
                    }),
                    animationSettings(uniqueId, animation, setAttributes),
                    interactionSettings(uniqueId, interaction, setAttributes)
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
                globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes),
                React.createElement(
                    'div',
                    { className: 'qubely-block-' + uniqueId },
                    React.createElement(
                        'div',
                        { className: 'qubely-block-form qubely-layout-' + layout },
                        React.createElement(
                            'form',
                            { className: 'qubely-form is-' + inputSize },
                            React.createElement(InnerBlocks, {
                                allowedBlocks: ['qubely/formfield-row', 'qubely/formfield-column'],
                                template: this.renderFormTemplate()
                            }),
                            policyCheckbox && React.createElement(
                                'div',
                                { className: 'qubely-form-checkbox' },
                                React.createElement('input', { className: 'qubely-from-policy-checkbox', type: 'checkbox', name: 'qubely-form-policy-' + uniqueId, id: 'qubely-form-policy-checkbox-' + uniqueId, value: 'Yes', required: true }),
                                React.createElement(RichText, {
                                    placeholder: __('Add checkbox message'),
                                    className: 'qubely-form-policy-checkbox-message',
                                    value: policyCheckboxText,
                                    onChange: function onChange(value) {
                                        return setAttributes({ policyCheckboxText: value });
                                    }
                                })
                            ),
                            React.createElement(
                                'div',
                                { className: 'qubely-form-button' },
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
                        ),
                        React.createElement(
                            'div',
                            { className: 'qubely-form-add-item' },
                            React.createElement(Dropdown, {
                                className: "qubely-action-add-form-field",
                                contentClassName: "qubely-form-field-picker",
                                position: 'bottom center',
                                renderToggle: function renderToggle(_ref6) {
                                    var isOpen = _ref6.isOpen,
                                        onToggle = _ref6.onToggle;
                                    return React.createElement(
                                        'div',
                                        { onClick: onToggle, 'aria-expanded': isOpen, className: 'qubely-action-add-form-item' },
                                        React.createElement('i', { className: 'fas fa-plus-circle' }),
                                        React.createElement(
                                            'span',
                                            { onClick: function onClick() {
                                                    return _this2.setState({ hideDropdown: onToggle });
                                                } },
                                            ' ',
                                            __('Add new item')
                                        )
                                    );
                                },
                                renderContent: function renderContent() {
                                    return _this2.renderFormFieldTypes();
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

exports.default = compose([withSelect(function (select, ownProps) {
    var clientId = ownProps.clientId;

    var _select3 = select('core/editor'),
        getBlock = _select3.getBlock,
        getBlockRootClientId = _select3.getBlockRootClientId,
        getBlockAttributes = _select3.getBlockAttributes;

    var rootBlockClientId = getBlockRootClientId(clientId);

    return { rootBlockClientId: rootBlockClientId };
}), withDispatch(function (dispatch) {
    var _dispatch3 = dispatch('core/editor'),
        insertBlock = _dispatch3.insertBlock,
        removeBlock = _dispatch3.removeBlock,
        updateBlockAttributes = _dispatch3.updateBlockAttributes,
        toggleSelection = _dispatch3.toggleSelection;

    return {
        insertBlock: insertBlock,
        removeBlock: removeBlock,
        updateBlockAttributes: updateBlockAttributes,
        toggleSelection: toggleSelection
    };
})])(Edit);

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
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$qubelyComponents = wp.qubelyComponents,
    QubelyButtonSave = _wp$qubelyComponents.QubelyButtonSave,
    _wp$qubelyComponents$ = _wp$qubelyComponents.HelperFunction,
    animationAttr = _wp$qubelyComponents$.animationAttr,
    IsInteraction = _wp$qubelyComponents$.IsInteraction;

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
        key: 'render',
        value: function render() {
            var _encrypt = this._encrypt;
            var _props$attributes = this.props.attributes,
                uniqueId = _props$attributes.uniqueId,
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
                animation = _props$attributes.animation,
                interaction = _props$attributes.interaction;


            var interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';

            return React.createElement(
                'div',
                _extends({ className: 'qubely-block-' + uniqueId }, animationAttr(animation)),
                React.createElement(
                    'div',
                    { className: 'qubely-block-form ' + interactionClass + ' qubely-layout-' + layout },
                    React.createElement(
                        'form',
                        { className: 'qubely-form is-' + inputSize },
                        React.createElement(InnerBlocks.Content, null),
                        reCaptcha && React.createElement('div', { className: 'qubely-form qubely-google-recaptcha' }),
                        policyCheckbox && React.createElement(
                            'div',
                            { className: 'qubely-form-checkbox' },
                            React.createElement('input', { className: 'qubely-from-policy-checkbox', type: 'checkbox', name: 'qubely-form-policy-' + uniqueId, id: 'qubely-form-policy-checkbox-' + uniqueId, value: 'Yes', required: true }),
                            React.createElement(RichText.Content, {
                                className: 'qubely-form-policy-checkbox-message',
                                value: policyCheckboxText
                            })
                        ),
                        React.createElement(
                            'div',
                            { className: 'qubely-form-button' },
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
                        React.createElement('div', { className: 'qubely-form-message' })
                    )
                )
            );
        }
    }]);

    return Save;
}(Component);

exports.default = Save;

/***/ }),

/***/ "./src/blocks/form/commonSettings.js":
/*!*******************************************!*\
  !*** ./src/blocks/form/commonSettings.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function (clientId) {
    var _useState = useState('md'),
        _useState2 = _slicedToArray(_useState, 2),
        device = _useState2[0],
        changeDevice = _useState2[1];

    var _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        isUpdating = _useState4[0],
        setUpdate = _useState4[1];

    var _select = select('core/block-editor'),
        getBlockAttributes = _select.getBlockAttributes;

    var attributes = getBlockAttributes(clientId);

    var _dispatch = dispatch('core/block-editor'),
        updateBlockAttributes = _dispatch.updateBlockAttributes;

    var _attributes = attributes,
        layout = _attributes.layout,
        labelColor = _attributes.labelColor,
        labelAlignment = _attributes.labelAlignment,
        labelTypography = _attributes.labelTypography,
        spacing = _attributes.spacing,
        gutter = _attributes.gutter,
        inputSize = _attributes.inputSize,
        inputCustomSize = _attributes.inputCustomSize,
        inputTypography = _attributes.inputTypography,
        inputBoxShadow = _attributes.inputBoxShadow,
        inputColor = _attributes.inputColor,
        inputColorFocus = _attributes.inputColorFocus,
        inputColorHover = _attributes.inputColorHover,
        inputBg = _attributes.inputBg,
        inputBgFocus = _attributes.inputBgFocus,
        inputBgHover = _attributes.inputBgHover,
        inputBorder = _attributes.inputBorder,
        inputBorderRadius = _attributes.inputBorderRadius,
        inputBorderMaterial = _attributes.inputBorderMaterial,
        inputBorderColorFocus = _attributes.inputBorderColorFocus,
        inputBorderColorHover = _attributes.inputBorderColorHover,
        textareaHeight = _attributes.textareaHeight,
        placeholderColor = _attributes.placeholderColor,
        placeholderColorFocus = _attributes.placeholderColorFocus,
        placeholderColorHover = _attributes.placeholderColorHover,
        enableButton = _attributes.enableButton,
        buttonTag = _attributes.buttonTag,
        buttonSize = _attributes.buttonSize,
        buttonFillType = _attributes.buttonFillType,
        buttonText = _attributes.buttonText,
        buttonIconName = _attributes.buttonIconName,
        buttonIconPosition = _attributes.buttonIconPosition,
        fieldErrorMessage = _attributes.fieldErrorMessage,
        formSuccessMessage = _attributes.formSuccessMessage,
        formErrorMessage = _attributes.formErrorMessage,
        reCaptcha = _attributes.reCaptcha,
        reCaptchaSiteKey = _attributes.reCaptchaSiteKey,
        reCaptchaSecretKey = _attributes.reCaptchaSecretKey,
        policyCheckbox = _attributes.policyCheckbox,
        policyCheckboxText = _attributes.policyCheckboxText,
        emailReceiver = _attributes.emailReceiver,
        emailHeaders = _attributes.emailHeaders,
        emailFrom = _attributes.emailFrom,
        emailSubject = _attributes.emailSubject,
        emailBody = _attributes.emailBody,
        globalZindex = _attributes.globalZindex,
        hideTablet = _attributes.hideTablet,
        hideMobile = _attributes.hideMobile,
        globalCss = _attributes.globalCss,
        height = _attributes.height,
        width = _attributes.width;


    var updateAttributes = function updateAttributes(key, value) {
        updateBlockAttributes(clientId, _defineProperty({}, key, value));
        attributes = getBlockAttributes(clientId);
        setUpdate(!isUpdating);
    };

    return React.createElement(
        Fragment,
        null,
        React.createElement(
            PanelBody,
            { title: __(''), opened: true },
            React.createElement(Styles, {
                value: layout,
                onChange: function onChange(val) {
                    return updateAttributes('layout', val);
                },
                options: [{ value: 'classic', img: _icons2.default.form_classic }, { value: 'material', img: _icons2.default.form_material }, { value: 'materialdark', img: _icons2.default.form_material_dark }]
            })
        ),
        React.createElement(
            PanelBody,
            { title: __('Label'), initialOpen: false },
            React.createElement(ButtonGroup, {
                label: __('Label Alignment'),
                options: [[__('Top'), 'top'], [__('Left'), 'left'], [__('Right'), 'right']],
                value: labelAlignment,
                onChange: function onChange(value) {
                    return updateAttributes('labelAlignment', value);
                }
            }),
            React.createElement(Typography, {
                value: labelTypography,
                onChange: function onChange(val) {
                    return updateAttributes('labelTypography', val);
                }
            }),
            React.createElement(Color, {
                label: __('Color'),
                value: labelColor,
                onChange: function onChange(val) {
                    return updateAttributes('labelColor', val);
                }
            })
        ),
        React.createElement(
            PanelBody,
            { title: __('Input'), initialOpen: false },
            layout != 'material' && React.createElement(
                Fragment,
                null,
                React.createElement(RadioAdvanced, {
                    label: __('Input Size'),
                    options: [{ label: 'S', value: 'small', title: 'Small' }, { label: 'M', value: 'medium', title: 'Medium' }, { label: 'L', value: 'large', title: 'Large' }, { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }],
                    value: inputSize,
                    onChange: function onChange(value) {
                        return updateAttributes('inputSize', value);
                    } }),
                inputSize == 'custom' && React.createElement(Padding, {
                    max: 50,
                    min: 0,
                    responsive: true,
                    value: inputCustomSize,
                    label: __('Custom Size'),
                    unit: ['px', 'em', '%'],
                    onChange: function onChange(value) {
                        return updateAttributes('inputCustomSize', value);
                    }
                })
            ),
            React.createElement(Range, {
                min: 100,
                max: 500,
                responsive: true,
                value: textareaHeight,
                unit: ['px', 'em', '%'],
                label: __('Textarea Height'),
                onChange: function onChange(value) {
                    return updateAttributes('textareaHeight', value);
                }
            }),
            React.createElement(Range, {
                min: 0,
                max: 60,
                responsive: true,
                value: spacing,
                label: __('Spacing'),
                unit: ['px', 'em', '%'],
                onChange: function onChange(value) {
                    return updateAttributes('spacing', value);
                }
            }),
            React.createElement(Range, {
                min: 0,
                max: 60,
                responsive: true,
                value: gutter,
                label: __('Gutter'),
                unit: ['px', 'em', '%'],
                onChange: function onChange(value) {
                    return updateAttributes('gutter', value);
                }
            }),
            React.createElement(Border, {
                min: 0,
                max: 10,
                responsive: true,
                value: layout === 'classic' ? inputBorder : inputBorderMaterial,
                label: __('Border'),
                unit: ['px', 'em', '%'],
                onChange: function onChange(val) {
                    return setAttributes(layout === 'classic' ? { inputBorder: val } : { inputBorderMaterial: val });
                } }),
            layout != 'material' && React.createElement(BorderRadius, {
                min: 0,
                max: 100,
                responsive: true,
                label: __('Field Radius'),
                value: inputBorderRadius,
                unit: ['px', 'em', '%'],
                onChange: function onChange(value) {
                    return updateAttributes('inputBorderRadius', value);
                }
            }),
            React.createElement(
                Tabs,
                null,
                React.createElement(
                    Tab,
                    { tabTitle: __('Normal') },
                    React.createElement(Color, { label: __('Input Text Color'), value: inputColor, onChange: function onChange(val) {
                            return updateAttributes('inputColor', val);
                        } }),
                    React.createElement(Color, { label: __('Background Color'), value: inputBg, onChange: function onChange(val) {
                            return updateAttributes('inputBg', val);
                        } }),
                    React.createElement(Color, { label: __('Placeholder Color'), value: placeholderColor, onChange: function onChange(val) {
                            return updateAttributes('placeholderColor', val);
                        } })
                ),
                React.createElement(
                    Tab,
                    { tabTitle: __('Focus') },
                    React.createElement(Color, { label: __('Text Color'), value: inputColorFocus, onChange: function onChange(val) {
                            return updateAttributes('inputColorFocus', val);
                        } }),
                    React.createElement(Color, { label: __('Background Color'), value: inputBgFocus, onChange: function onChange(val) {
                            return updateAttributes('inputBgFocus', val);
                        } }),
                    React.createElement(Color, { label: __('Border Color'), value: inputBorderColorFocus, onChange: function onChange(value) {
                            return updateAttributes('inputBorderColorFocus', value);
                        } }),
                    React.createElement(Color, { label: __('Placeholder Color'), value: placeholderColorFocus, onChange: function onChange(val) {
                            return updateAttributes('placeholderColorFocus', val);
                        } })
                ),
                React.createElement(
                    Tab,
                    { tabTitle: __('Hover') },
                    React.createElement(Color, { label: __('Text Color'), value: inputColorHover, onChange: function onChange(val) {
                            return updateAttributes('inputColorHover', val);
                        } }),
                    React.createElement(Color, { label: __('Background Color'), value: inputBgHover, onChange: function onChange(val) {
                            return updateAttributes('inputBgHover', val);
                        } }),
                    React.createElement(Color, { label: __('Border Color'), value: inputBorderColorHover, onChange: function onChange(value) {
                            return updateAttributes('inputBorderColorHover', value);
                        } }),
                    React.createElement(Color, { label: __('Placeholder Color'), value: placeholderColorHover, onChange: function onChange(val) {
                            return updateAttributes('placeholderColorHover', val);
                        } })
                )
            ),
            React.createElement(Typography, { value: inputTypography, onChange: function onChange(val) {
                    return updateAttributes('inputTypography', val);
                } }),
            React.createElement(Separator, null),
            React.createElement(BoxShadow, {
                disableInset: true,
                label: __('Box-Shadow'),
                value: inputBoxShadow,
                onChange: function onChange(value) {
                    return updateAttributes('inputBoxShadow', value);
                }
            }),
            React.createElement(Separator, null)
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
                            return updateAttributes('fieldErrorMessage', val);
                        }
                    }),
                    React.createElement(TextareaControl, {
                        label: __('Form Submit Success Message'),
                        value: formSuccessMessage,
                        onChange: function onChange(val) {
                            return updateAttributes('formSuccessMessage', val);
                        },
                        help: __('Set your desired message after successful form submission. Leave blank for default.')
                    }),
                    React.createElement(TextareaControl, {
                        label: __('Form Submit Failed Message'),
                        value: formErrorMessage,
                        onChange: function onChange(val) {
                            return updateAttributes('formErrorMessage', val);
                        },
                        help: __('Set your desired message for form submission error. Leave blank for default.')
                    }),
                    React.createElement(Toggle, { label: __('Enable Captcha'), value: reCaptcha, onChange: function onChange(val) {
                            return updateAttributes('reCaptcha', val);
                        } }),
                    reCaptcha && React.createElement(
                        'div',
                        null,
                        React.createElement(TextControl, {
                            label: __('Site Key '),
                            value: reCaptchaSiteKey,
                            onChange: function onChange(val) {
                                return updateAttributes('reCaptchaSiteKey', val);
                            },
                            placeholder: __('Enter Google Site Key')
                        }),
                        React.createElement(TextControl, {
                            label: __('Secret Key '),
                            value: reCaptchaSecretKey,
                            onChange: function onChange(val) {
                                return updateAttributes('reCaptchaSecretKey', val);
                            },
                            placeholder: __('Enter Google Secret Key')
                        })
                    ),
                    React.createElement(Toggle, { label: __('Enable Policy Checkbox'), value: policyCheckbox, onChange: function onChange(val) {
                            return updateAttributes('policyCheckbox', val);
                        } })
                ),
                React.createElement(
                    Tab,
                    { tabTitle: __('Email') },
                    React.createElement(TextControl, {
                        label: __('Recipient Email'),
                        value: emailReceiver,
                        onChange: function onChange(val) {
                            return updateAttributes('emailReceiver', val);
                        },
                        placeholder: __('Enter Recipient Email'),
                        help: __('Enter the recipient email address. This field is mandatory. Without a recipient email, contact form will not work.')
                    }),
                    React.createElement(TextareaControl, {
                        label: __('Email Headers'),
                        value: emailHeaders,
                        onChange: function onChange(val) {
                            return updateAttributes('emailHeaders', val);
                        }
                    }),
                    React.createElement(TextControl, {
                        label: __('From Email'),
                        value: emailFrom,
                        onChange: function onChange(val) {
                            return updateAttributes('emailFrom', val);
                        },
                        placeholder: __('Your Name: admin@example.com')
                    }),
                    React.createElement(TextControl, {
                        label: __('Subject'),
                        value: emailSubject,
                        onChange: function onChange(val) {
                            return updateAttributes('emailSubject', val);
                        },
                        placeholder: __('Enter Subject')
                    }),
                    React.createElement(TextareaControl, {
                        label: __('Email Body'),
                        value: emailBody,
                        onChange: function onChange(val) {
                            return updateAttributes('emailBody', val);
                        },
                        help: __("Set your form email body here. In editor don't add any CSS style or others option just add your form field name between double curly braces {{field-name}} as you set in 'Field Name'.")
                    })
                )
            )
        ),
        buttonSettings(attributes, device, function (key, value) {
            updateAttributes(key, value);
        }, function (key, value) {
            changeDevice(value);
        })
    );
};

var _icons = __webpack_require__(/*! ../../helpers/icons */ "./src/helpers/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl;
var _wp$qubelyComponents = wp.qubelyComponents,
    ButtonGroup = _wp$qubelyComponents.ButtonGroup,
    BoxShadow = _wp$qubelyComponents.BoxShadow,
    BorderRadius = _wp$qubelyComponents.BorderRadius,
    Padding = _wp$qubelyComponents.Padding,
    Styles = _wp$qubelyComponents.Styles,
    Range = _wp$qubelyComponents.Range,
    Separator = _wp$qubelyComponents.Separator,
    Toggle = _wp$qubelyComponents.Toggle,
    Typography = _wp$qubelyComponents.Typography,
    Color = _wp$qubelyComponents.Color,
    Tabs = _wp$qubelyComponents.Tabs,
    Tab = _wp$qubelyComponents.Tab,
    Border = _wp$qubelyComponents.Border,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    buttonSettings = _wp$qubelyComponents.QubelyButton.buttonSettings;

/***/ }),

/***/ "./src/blocks/form/fields/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/form/fields/edit.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = Edit;

var _commonSettings = __webpack_require__(/*! ../commonSettings */ "./src/blocks/form/commonSettings.js");

var _commonSettings2 = _interopRequireDefault(_commonSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var __ = wp.i18n.__;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    useRef = _wp$element.useRef,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    RangeControl = _wp$components.RangeControl,
    Tooltip = _wp$components.Tooltip;
var _wp$qubelyComponents = wp.qubelyComponents,
    ButtonGroup = _wp$qubelyComponents.ButtonGroup,
    Color = _wp$qubelyComponents.Color,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    Range = _wp$qubelyComponents.Range,
    Select = _wp$qubelyComponents.Select,
    Separator = _wp$qubelyComponents.Separator,
    Toggle = _wp$qubelyComponents.Toggle,
    Typography = _wp$qubelyComponents.Typography,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;
function Edit(props) {
    var _useState = useState(12),
        _useState2 = _slicedToArray(_useState, 2),
        hour = _useState2[0],
        setHour = _useState2[1];

    var _useState3 = useState(0),
        _useState4 = _slicedToArray(_useState3, 2),
        minute = _useState4[0],
        setMinute = _useState4[1];

    var _useState5 = useState(new Date()),
        _useState6 = _slicedToArray(_useState5, 2),
        date = _useState6[0],
        setDate = _useState6[1];

    var _useState7 = useState('md'),
        _useState8 = _slicedToArray(_useState7, 2),
        device = _useState8[0],
        changeDevice = _useState8[1];

    var _useState9 = useState(-1),
        _useState10 = _slicedToArray(_useState9, 2),
        draggedItem = _useState10[0],
        setDraggedItem = _useState10[1];

    var _useState11 = useState(date.getFullYear()),
        _useState12 = _slicedToArray(_useState11, 2),
        year = _useState12[0],
        setYear = _useState12[1];

    var _useState13 = useState(''),
        _useState14 = _slicedToArray(_useState13, 2),
        dropdownValue = _useState14[0],
        setDropdownValue = _useState14[1];

    var _useState15 = useState(false),
        _useState16 = _slicedToArray(_useState15, 2),
        showTimePicker = _useState16[0],
        setTimePicker = _useState16[1];

    var _useState17 = useState(-1),
        _useState18 = _slicedToArray(_useState17, 2),
        draggedOverItem = _useState18[0],
        setDraggedOverItem = _useState18[1];

    var _useState19 = useState('PM'),
        _useState20 = _slicedToArray(_useState19, 2),
        seletedTimeFormat = _useState20[0],
        changeseletedTimeFormat = _useState20[1];

    var _select = select('core/block-editor'),
        getBlockRootClientId = _select.getBlockRootClientId,
        getBlockName = _select.getBlockName;

    var name = props.name,
        clientId = props.clientId,
        attributes = props.attributes,
        setAttributes = props.setAttributes,
        _props$attributes = props.attributes,
        uniqueId = _props$attributes.uniqueId,
        parentClientId = _props$attributes.parentClientId,
        fieldName = _props$attributes.fieldName,
        height = _props$attributes.height,
        type = _props$attributes.type,
        label = _props$attributes.label,
        emailConformation = _props$attributes.emailConformation,
        conformationEmailLabel = _props$attributes.conformationEmailLabel,
        columns = _props$attributes.columns,
        enableOtherOption = _props$attributes.enableOtherOption,
        dateFormat = _props$attributes.dateFormat,
        dateSeparator = _props$attributes.dateSeparator,
        instruction = _props$attributes.instruction,
        options = _props$attributes.options,
        placeHolder = _props$attributes.placeHolder,
        required = _props$attributes.required,
        minuteInterval = _props$attributes.minuteInterval,
        timeFormatType = _props$attributes.timeFormatType;


    useEffect(function () {
        var _client = clientId.substr(0, 6);

        if (!uniqueId) {
            setAttributes({ uniqueId: _client, fieldName: type + '-' + _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client, fieldName: type + '-' + _client });
        }

        $('.qubely-block-' + uniqueId + ' .qubely-datepicker').datepicker({
            duration: "fast",
            changeMonth: true,
            changeYear: true,
            yearRange: year - 50 + ':' + (year + 10),
            dateFormat: dateFormat
        });
    });

    var updateOptions = function updateOptions(type, index, newValue) {
        var newOptions = [].concat(_toConsumableArray(options));
        if (type === 'add') {
            newOptions.push('New option');
        } else if (type === 'delete') {
            newOptions.splice(index, 1);
        } else if (type === 'update') {
            newOptions[index] = newValue;
        }
        setAttributes({ options: newOptions });
    };

    var renderOptions = function renderOptions() {
        return React.createElement(
            'div',
            { className: 'qubely-form-field qubely-form-' + type + ' qubely-' + type + '-' + columns },
            options.map(function (option, index) {
                return React.createElement(
                    'div',
                    { className: 'qubely-form-field-' + type + '-option' },
                    React.createElement('input', { type: type, id: option, value: option, name: fieldName }),
                    React.createElement(RichText, {
                        placeholder: __('option'),
                        className: 'qubely-' + type + '-option',
                        value: option,
                        onChange: function onChange(value) {
                            return updateOptions('update', index, value);
                        }
                    }),
                    React.createElement(
                        Tooltip,
                        { text: __('Delete this option') },
                        React.createElement(
                            'span',
                            { className: 'qubely-action-remove-option', role: 'button', onClick: function onClick() {
                                    return updateOptions('delete', index);
                                } },
                            React.createElement('i', { className: 'fas fa-times' })
                        )
                    )
                );
            }),
            React.createElement(
                'div',
                { className: 'qubely-action-add-option', onClick: function onClick() {
                        return updateOptions('add');
                    } },
                React.createElement(
                    'span',
                    { className: 'qubely-option-add-icon' },
                    React.createElement('i', { className: 'fas fa-plus' })
                ),
                React.createElement(
                    'span',
                    { className: 'qubely-action-add-text' },
                    ' Add another '
                )
            )
        );
    };

    var handleTimePicker = function handleTimePicker(type, actionType) {

        if (type === 'hour') {
            if (actionType === 'increase') {

                timeFormatType === 12 && hour === 11 && changeseletedTimeFormat(seletedTimeFormat === 'AM' ? 'PM' : 'AM');
                setHour(hour === timeFormatType ? timeFormatType === 12 ? 1 : 0 : hour + 1);
            } else {
                timeFormatType === 12 && (hour === 12 || hour === 1) && changeseletedTimeFormat(seletedTimeFormat === 'AM' ? 'PM' : 'AM');
                setHour(timeFormatType === 12 && hour === 1 || timeFormatType === 23 && hour === 0 ? timeFormatType : hour - 1);
            }
        } else if (type === 'minute') {

            if (actionType === 'increase') {
                if (minute >= 60 - minuteInterval) {
                    timeFormatType === 12 && hour === 11 && changeseletedTimeFormat(seletedTimeFormat === 'AM' ? 'PM' : 'AM');
                    setHour(hour === timeFormatType ? timeFormatType === 12 ? 1 : 0 : hour + 1);
                    setMinute((minute + minuteInterval) % 60);
                } else {
                    setMinute(minute + minuteInterval);
                }
            } else {
                if (minute < minuteInterval) {
                    timeFormatType === 12 && hour === 12 && changeseletedTimeFormat(seletedTimeFormat === 'AM' ? 'PM' : 'AM');
                    setHour(timeFormatType === 12 ? hour === 1 ? timeFormatType : hour - 1 : hour === 0 ? timeFormatType : hour - 1);
                    setMinute(minute - minuteInterval === 0 ? 0 : 60 + (minute - minuteInterval));
                } else {
                    setMinute(minute - minuteInterval);
                }
            }
        }
    };
    var renderTimePicker = function renderTimePicker() {
        return React.createElement(
            'div',
            { className: 'qubely-form-timepicker-wrapper' },
            React.createElement('input', { type: 'text', className: 'qubely-form-field qubely-time-picker', value: hour + ':' + minute + ' ' + (timeFormatType === 12 ? '' + seletedTimeFormat : ''), onClick: function onClick() {
                    return setTimePicker(!showTimePicker);
                }, readonly: true }),
            React.createElement(
                'div',
                { className: 'qubely-form-timepicker' + (showTimePicker ? ' qubely-active' : '') },
                React.createElement(
                    'div',
                    { className: 'qubely-timePicker-hour' },
                    React.createElement(
                        'div',
                        { className: 'qubely-timePicker-button button-up',
                            onClick: function onClick() {
                                return handleTimePicker('hour', 'increase');
                            }
                        },
                        React.createElement('i', { className: 'fas fa-angle-up' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-form-timepicker-hour' },
                        hour
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-timePicker-button button-down',
                            onClick: function onClick() {
                                return handleTimePicker('hour', 'decrease');
                            }
                        },
                        React.createElement('i', { className: 'fas fa-angle-down' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'qubely-timePicker-minute' },
                    React.createElement(
                        'div',
                        { className: 'qubely-timePicker-button button-up',
                            onClick: function onClick() {
                                return handleTimePicker('minute', 'increase');
                            }
                        },
                        React.createElement('i', { className: 'fas fa-angle-up' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-form-timepicker-minute' },
                        minute
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-timePicker-button button-down',
                            onClick: function onClick() {
                                return handleTimePicker('minute', 'decrease');
                            }
                        },
                        React.createElement('i', { className: 'fas fa-angle-down' })
                    )
                ),
                timeFormatType === 12 && React.createElement(
                    'div',
                    { className: 'qubely-timePicker-time-format' },
                    React.createElement(
                        'div',
                        { className: 'qubely-timePicker-button button-up',
                            onClick: function onClick() {
                                return changeseletedTimeFormat(seletedTimeFormat === 'AM' ? 'PM' : 'AM');
                            }
                        },
                        React.createElement('i', { className: 'fas fa-angle-up' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-form-time-format' },
                        seletedTimeFormat
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-timePicker-button button-down',
                            onClick: function onClick() {
                                return changeseletedTimeFormat(seletedTimeFormat === 'AM' ? 'PM' : 'AM');
                            }
                        },
                        React.createElement('i', { className: 'fas fa-angle-down' })
                    )
                )
            )
        );
    };

    var renderEmailField = function renderEmailField() {

        return React.createElement(
            Fragment,
            null,
            React.createElement('input', { className: 'qubely-form-field qubely-form-email', type: 'email', placeholder: __(placeHolder), required: required, name: fieldName }),
            emailConformation && React.createElement(
                Fragment,
                null,
                React.createElement(RichText, {
                    placeholder: __('Confirmation Email'),
                    className: 'qubely-form-field-label',
                    value: conformationEmailLabel,
                    onChange: function onChange(value) {
                        return setAttributes({ conformationEmailLabel: value });
                    }
                }),
                React.createElement('input', { className: 'qubely-form-field qubely-form-confirmation-email', type: 'email', placeholder: __(placeHolder), required: required, name: 'confirmation-' + fieldName })
            )
        );
    };

    var renderCommonSettings = function renderCommonSettings() {
        return React.createElement(
            Fragment,
            null,
            React.createElement(TextControl, {
                label: __('Label'),
                value: label,
                onChange: function onChange(value) {
                    return setAttributes({ label: value });
                }
            }),
            React.createElement(TextareaControl, {
                label: __('Instructions'),
                value: instruction,
                onChange: function onChange(value) {
                    return setAttributes({ instruction: value });
                }
            }),
            React.createElement(TextControl, {
                label: __('Name'),
                value: fieldName,
                onChange: function onChange(value) {
                    return setAttributes({ fieldName: value });
                },
                help: __('You must write field name with hyphen(-) with lowercase. No space, UPPERCASE, Capitalize is not allowed. This name should match with Form template value. Never keep empty this name.')
            }),
            React.createElement(Separator, null)
        );
    };

    var handleDragEnd = function handleDragEnd() {
        var newOptions = [].concat(_toConsumableArray(options));

        newOptions[draggedOverItem] = options[draggedItem];
        newOptions[draggedItem] = options[draggedOverItem];

        setAttributes({ options: newOptions });
        setDraggedItem(-1);
        setDraggedOverItem(-1);
    };

    var getParentClientId = function getParentClientId(clientId) {
        var parentClientID = getBlockRootClientId(clientId);
        if (getBlockName(parentClientID) === 'qubely/form') {
            return parentClientID;
        } else {
            return getParentClientId(parentClientID);
        }
    };

    var blockname = name.split('/')[1];

    if (uniqueId) {
        CssGenerator(attributes, blockname, uniqueId);
    }

    return React.createElement(
        Fragment,
        null,
        React.createElement(
            InspectorControls,
            null,
            (0, _commonSettings2.default)(getParentClientId(clientId)),
            React.createElement(
                PanelBody,
                { title: __(type[0].toUpperCase() + type.slice(1)), opened: true },
                renderCommonSettings(),
                name === 'qubely/formfield-email' && React.createElement(
                    Fragment,
                    null,
                    React.createElement(Toggle, {
                        label: __('Email Input Confirmation'),
                        value: emailConformation,
                        onChange: function onChange(value) {
                            return setAttributes({ emailConformation: value });
                        }
                    }),
                    emailConformation && React.createElement(TextControl, {
                        label: __(''),
                        value: conformationEmailLabel,
                        onChange: function onChange(value) {
                            return setAttributes({ conformationEmailLabel: value });
                        }
                    })
                ),
                name === 'qubely/formfield-textarea' && React.createElement(
                    Fragment,
                    null,
                    React.createElement(Range, {
                        min: 50,
                        max: 600,
                        responsive: true,
                        value: height,
                        device: device,
                        label: __('Height'),
                        unit: ['px', 'em', '%'],
                        onChange: function onChange(value) {
                            return setAttributes({ height: value });
                        },
                        onDeviceChange: function onDeviceChange(value) {
                            return changeDevice(value);
                        } })
                ),
                (name === 'qubely/formfield-radio' || name === 'qubely/formfield-checkbox') && React.createElement(
                    Fragment,
                    null,
                    React.createElement(Select, {
                        label: __('Show Data in'),
                        value: columns,
                        options: [['auto', __('Auto')], ['1-column', __('1 Column')], ['2-column', __('2 Column')], ['3-column', __('3 Column')]],
                        onChange: function onChange(val) {
                            return setAttributes({ columns: val });
                        } }),
                    React.createElement(Toggle, {
                        label: __('Display Other Option'),
                        value: enableOtherOption,
                        onChange: function onChange(value) {
                            var newOptions = [].concat(_toConsumableArray(options));
                            value ? newOptions.push('Other') : newOptions.pop();
                            setAttributes({ enableOtherOption: value, options: newOptions });
                        }
                    })
                ),
                name === 'qubely/formfield-date' && React.createElement(
                    Fragment,
                    null,
                    React.createElement(
                        'div',
                        { className: 'qubely-form-date-picker-format' },
                        React.createElement(ButtonGroup, {
                            label: __('Date Format'),
                            options: [[__('01-JAN-2000'), 'dd' + dateSeparator + 'M' + dateSeparator + 'yy'], [__('JAN-01-2000'), 'M' + dateSeparator + 'dd' + dateSeparator + 'yy'], [__('2000-JAN-01'), 'yy' + dateSeparator + 'M' + dateSeparator + 'dd']],
                            value: dateFormat,
                            onChange: function onChange(value) {
                                return setAttributes({ dateFormat: value });
                            }
                        })
                    ),
                    React.createElement(ButtonGroup, {
                        label: __('Separator'),
                        options: [[__('-'), '-'], [__('/'), '/'], [__('.'), '.']],
                        value: dateSeparator,
                        onChange: function onChange(value) {
                            return setAttributes({ dateSeparator: value });
                        }
                    })
                ),
                name === 'qubely/formfield-dropdown' && React.createElement(
                    Fragment,
                    null,
                    React.createElement(
                        'label',
                        { className: 'qubely-form-field' },
                        'Dropdown Options'
                    ),
                    options.map(function (option, index) {
                        return React.createElement(
                            'div',
                            {
                                draggable: true,
                                onDragEnd: function onDragEnd() {
                                    return handleDragEnd();
                                },
                                onDragOver: function onDragOver() {
                                    return setDraggedOverItem(index);
                                },
                                'onDragqubely-form-date': function onDragqubelyFormDate() {
                                    return setDraggedItem(index);
                                },
                                className: 'qubely-dropdown-field-option qubely-option-' + index
                            },
                            React.createElement(
                                'span',
                                { className: 'qubely-option-move-icon' },
                                React.createElement('i', { className: 'fa fa-bars' })
                            ),
                            React.createElement(RichText, {
                                placeholder: __('option'),
                                className: 'qubely-option',
                                value: option,
                                onChange: function onChange(value) {
                                    return updateOptions('update', index, value);
                                }
                            })
                        );
                    }),
                    React.createElement(
                        'div',
                        { className: 'qubely-dropdown-add-field-option' },
                        React.createElement(
                            'span',
                            { className: 'qubely-option-move-icon' },
                            React.createElement('i', { className: 'fas fa-plus-circle' })
                        ),
                        React.createElement(
                            'span',
                            { className: 'qubely-action-add-option', onClick: function onClick() {
                                    return updateOptions('add');
                                } },
                            '  Add new item '
                        )
                    )
                ),
                name === 'qubely/formfield-time' && React.createElement(
                    Fragment,
                    null,
                    React.createElement(
                        'div',
                        { className: 'qubely-form-time-picker-format' },
                        React.createElement(ButtonGroup, {
                            label: __('Time Format'),
                            options: [[__('24 Hours'), 23], [__('AM/PM'), 12]],
                            value: timeFormatType,
                            onChange: function onChange(value) {
                                setHour(timeFormatType === 12 ? seletedTimeFormat === 'PM' ? 12 + hour : hour : hour < 13 ? hour : hour % 12);
                                timeFormatType === 23 && changeseletedTimeFormat(hour >= 12 ? 'PM' : 'AM');
                                setAttributes({ timeFormatType: value });
                            }
                        })
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-form-time-picker-minute-interval' },
                        React.createElement(ButtonGroup, {
                            label: __('Minute Interval'),
                            options: [[__('1'), 1], [__('5'), 5], [__('10'), 10], [__('15'), 15], [__('20'), 20], [__('30'), 30]],
                            value: minuteInterval,
                            onChange: function onChange(value) {
                                return setAttributes({ minuteInterval: value });
                            }
                        })
                    )
                ),
                React.createElement(Toggle, {
                    label: __('Required'),
                    value: required,
                    onChange: function onChange(value) {
                        return setAttributes({ required: value });
                    }
                })
            )
        ),
        React.createElement(
            'div',
            { className: 'qubely-block-' + uniqueId },
            React.createElement(
                'div',
                { className: 'qubely-form-field-wrapper' },
                React.createElement(
                    'label',
                    { className: 'qubely-form-label' },
                    React.createElement(RichText, {
                        placeholder: __('Input label'),
                        className: 'qubely-form-field-label',
                        value: label,
                        onChange: function onChange(value) {
                            return setAttributes({ label: value });
                        }
                    }),
                    required && React.createElement(
                        'span',
                        { className: 'qubely-from-field-required-sign' },
                        '*'
                    )
                ),
                type === 'textarea' ? React.createElement('textarea', { className: 'qubely-form-field qubely-form-textarea', placeholder: __(placeHolder), name: fieldName, required: required }) : type === 'dropdown' ? React.createElement(
                    'select',
                    { className: 'qubely-form-field qubely-form-dropdown', value: dropdownValue, onChange: function onChange(event) {
                            return setDropdownValue(event.target.value);
                        } },
                    options.map(function (option) {
                        return React.createElement(
                            'option',
                            { value: option },
                            option
                        );
                    })
                ) : type === 'radio' || type === 'checkbox' ? renderOptions() : type === 'date' ? React.createElement(
                    'div',
                    { 'class': 'qubely-date-picker-wrapper' },
                    React.createElement('input', { type: 'text', className: 'qubely-form-field qubely-datepicker', autocomplete: 'off', placeholder: __(dateFormat), name: fieldName, readonly: true })
                ) : type === 'time' ? renderTimePicker() : type === 'email' ? renderEmailField() : React.createElement('input', { className: 'qubely-form-field qubely-form-' + type, name: fieldName, type: type, placeholder: __(placeHolder), required: required })
            )
        )
    );
}

/***/ }),

/***/ "./src/blocks/form/fields/formDefaults.js":
/*!************************************************!*\
  !*** ./src/blocks/form/fields/formDefaults.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FieldDefaults = {
    category: 'qubely',
    // parent: ['qubely/form','qubely/form-column'],
    supports: {
        reusable: false,
        html: false,
        inserter: false
    },
    attributes: {
        uniqueId: {
            type: 'string',
            default: ''
        },
        parentClientId: {
            type: 'string',
            default: ''
        },
        type: {
            type: 'string',
            default: null
        },
        label: {
            type: 'string',
            default: 'label'
        },
        instruction: {
            type: 'string',
            default: null
        },
        required: {
            type: 'boolean',
            default: false
        }

    }
};
exports.default = FieldDefaults;

/***/ }),

/***/ "./src/blocks/form/fields/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/form/fields/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerFromFields = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _qubelyField = __webpack_require__(/*! ./qubelyField */ "./src/blocks/form/fields/qubelyField.js");

var qubelyField = _interopRequireWildcard(_qubelyField);

__webpack_require__(/*! ./style.scss */ "./src/blocks/form/fields/style.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;

/**
 * import required attributes of form fields
 */

var registerBlock = function registerBlock(block) {
    if (!block) {
        return;
    }

    var blockName = block.blockName,
        settings = block.settings;


    registerBlockType(blockName, _extends({}, settings));
};

var qubelyFormFields = [

// 1. text field
_extends({}, qubelyField, {
    settings: _extends({}, qubelyField.settings, {
        title: __('Text'),
        description: __('Text field for Qubely Form'),
        icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/form/text.svg', alt: __('Text field') }),
        attributes: _extends({}, qubelyField.settings.attributes, {
            fieldName: {
                type: 'string',
                default: 'text'
            },
            type: {
                type: 'string',
                default: 'text'
            },
            placeHolder: {
                type: 'string',
                default: 'Add text'
            }
        })

    }),
    blockName: "qubely/formfield-text"
}),
// 2 . number
_extends({}, qubelyField, {
    settings: _extends({}, qubelyField.settings, {
        title: __('Number'),
        description: __('Number field for Qubely Form'),
        icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/form/number.svg', alt: __('Number field') }),
        attributes: _extends({}, qubelyField.settings.attributes, {
            fieldName: {
                type: 'string',
                default: 'number'
            },
            type: {
                type: 'string',
                default: 'number'
            },
            placeHolder: {
                type: 'string',
                default: 'Add number'
            }
        })

    }),
    blockName: "qubely/formfield-number"
}),
//3. email
_extends({}, qubelyField, {
    settings: _extends({}, qubelyField.settings, {
        title: __('Email'),
        description: __('Email field for Qubely Form'),
        icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/form/email.svg', alt: __('Email field') }),
        attributes: _extends({}, qubelyField.settings.attributes, {
            fieldName: {
                type: 'string',
                default: 'email'
            },
            type: {
                type: 'string',
                default: 'email'
            },
            label: {
                type: 'string',
                default: 'Email'
            },
            emailConformation: {
                type: 'boolean',
                default: false
            },
            conformationEmailLabel: {
                type: 'string',
                default: 'Confirm Email'
            },
            placeHolder: {
                type: 'string',
                default: 'Add email'
            }
        })

    }),
    blockName: "qubely/formfield-email"
}),
//4. textarea
_extends({}, qubelyField, {
    settings: _extends({}, qubelyField.settings, {
        title: __('Textarea'),
        description: __('Textarea field for Qubely Form'),
        icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/form/textarea.svg', alt: __('Textarea field') }),
        attributes: _extends({}, qubelyField.settings.attributes, {
            fieldName: {
                type: 'string',
                default: 'textarea'
            },
            type: {
                type: 'string',
                default: 'textarea'
            },
            height: {
                type: 'object',
                default: {
                    md: 150,
                    unit: 'px'
                },
                style: [{
                    selector: '{{QUBELY}} .qubely-form-field.qubely-form-textarea { height: {{height}};}'
                }]
            },
            placeHolder: {
                type: 'string',
                default: 'Add text'
            }
        })

    }),
    blockName: "qubely/formfield-textarea"
}),
// 5. dropdown
_extends({}, qubelyField, {
    settings: _extends({}, qubelyField.settings, {
        title: __('Dropdown'),
        description: __('Dropdown field for Qubely Form'),
        icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/form/dropdown.svg', alt: __('Dropdown field') }),
        attributes: _extends({}, qubelyField.settings.attributes, {
            fieldName: {
                type: 'string',
                default: 'dropdown'
            },
            type: {
                type: 'string',
                default: 'dropdown'
            },
            label: {
                type: 'string',
                default: 'Dropdown'
            },
            options: {
                type: 'array',
                default: ['option one', 'option two', 'option three']
            }
        })

    }),
    blockName: "qubely/formfield-dropdown"
}),
// 6. radio
_extends({}, qubelyField, {
    settings: _extends({}, qubelyField.settings, {
        title: __('Radio'),
        description: __('Radio field for Qubely Form'),
        icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/form/radio.svg', alt: __('Radio field') }),
        attributes: _extends({}, qubelyField.settings.attributes, {
            fieldName: {
                type: 'string',
                default: 'radio'
            },
            type: {
                type: 'string',
                default: 'radio'
            },
            columns: {
                type: 'string',
                default: '1-column'
            },
            options: {
                type: 'array',
                default: ['option one', 'option two', 'option three']
            },
            enableOtherOption: {
                type: 'boolean',
                default: false
            }
        })

    }),
    blockName: "qubely/formfield-radio"
}),
// 7. checkbox
_extends({}, qubelyField, {
    settings: _extends({}, qubelyField.settings, {
        title: __('Checkbox'),
        description: __('Checkbox field for Qubely Form'),
        icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/form/checkbox.svg', alt: __('Checkbox field') }),
        attributes: _extends({}, qubelyField.settings.attributes, {
            fieldName: {
                type: 'string',
                default: 'checkbox'
            },
            type: {
                type: 'string',
                default: 'checkbox'
            },
            columns: {
                type: 'string',
                default: '1-column'
            },
            options: {
                type: 'array',
                default: ['option one', 'option two', 'option three']
            }
        })

    }),
    blockName: "qubely/formfield-checkbox"
}),
// 8. date picker
_extends({}, qubelyField, {
    settings: _extends({}, qubelyField.settings, {
        title: __('Date Picker'),
        description: __('Date picker field for Qubely Form'),
        icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/form/date.svg', alt: __('Date field') }),
        attributes: _extends({}, qubelyField.settings.attributes, {
            fieldName: {
                type: 'string',
                default: 'date-picker'
            },
            type: {
                type: 'string',
                default: 'date'
            },
            dateSeparator: {
                type: 'string',
                default: '-'
            },
            dateFormat: {
                type: 'string',
                default: 'dd-M-yy'
            }
        })

    }),
    blockName: "qubely/formfield-date"
}),
// 9. time picker
_extends({}, qubelyField, {
    settings: _extends({}, qubelyField.settings, {
        title: __('Time Picker'),
        description: __('Time picker field for Qubely Form'),
        icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/form/time.svg', alt: __('Time field') }),
        attributes: _extends({}, qubelyField.settings.attributes, {
            fieldName: {
                type: 'string',
                default: 'time-picker'
            },
            type: {
                type: 'string',
                default: 'time'
            },
            timeFormatType: {
                type: 'number',
                default: 12
            },
            seletedTimeFormat: {
                type: 'string',
                default: 'PM'
            },
            minuteInterval: {
                type: 'number',
                default: 5
            }
        })

    }),
    blockName: "qubely/formfield-time"
})];

/**
 * Register form fields
 */
var registerFromFields = exports.registerFromFields = function registerFromFields() {
    qubelyFormFields.forEach(registerBlock);
};

registerFromFields();

/***/ }),

/***/ "./src/blocks/form/fields/qubelyField.js":
/*!***********************************************!*\
  !*** ./src/blocks/form/fields/qubelyField.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.settings = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! ./style.scss */ "./src/blocks/form/fields/style.scss");

var _edit = __webpack_require__(/*! ./edit */ "./src/blocks/form/fields/edit.js");

var _edit2 = _interopRequireDefault(_edit);

var _save = __webpack_require__(/*! ./save */ "./src/blocks/form/fields/save.js");

var _save2 = _interopRequireDefault(_save);

var _formDefaults = __webpack_require__(/*! ./formDefaults */ "./src/blocks/form/fields/formDefaults.js");

var _formDefaults2 = _interopRequireDefault(_formDefaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = _extends({}, _formDefaults2.default, {
    icon: 'forms',
    supports: {
        html: false,
        inserter: false,
        reusable: false
    },
    edit: function edit(props) {
        return (0, _edit2.default)(props);
    },
    save: function save(props) {
        return (0, _save2.default)(props);
    }
});

exports.settings = settings;

/***/ }),

/***/ "./src/blocks/form/fields/save.js":
/*!****************************************!*\
  !*** ./src/blocks/form/fields/save.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Save;
var __ = wp.i18n.__;
var RichText = wp.editor.RichText;
var Fragment = wp.element.Fragment;
function Save(props) {
    var _props$attributes = props.attributes,
        uniqueId = _props$attributes.uniqueId,
        label = _props$attributes.label,
        type = _props$attributes.type,
        options = _props$attributes.options,
        placeHolder = _props$attributes.placeHolder,
        required = _props$attributes.required,
        columns = _props$attributes.columns,
        emailConformation = _props$attributes.emailConformation,
        conformationEmailLabel = _props$attributes.conformationEmailLabel,
        dateFormat = _props$attributes.dateFormat,
        minuteInterval = _props$attributes.minuteInterval,
        timeFormatType = _props$attributes.timeFormatType,
        seletedTimeFormat = _props$attributes.seletedTimeFormat,
        fieldName = _props$attributes.fieldName;


    var renderOptions = function renderOptions() {
        return React.createElement(
            'div',
            { className: 'qubely-form-field qubely-form-' + type + ' qubely-' + type + '-' + columns, 'data-required': required },
            options.map(function (option, index) {
                return React.createElement(
                    'div',
                    { className: 'qubely-form-field-' + type + '-option' },
                    React.createElement('input', { type: type, id: '' + uniqueId + index, value: option, name: 'qubely-form-input[' + fieldName + (required ? '*' : '') + ']' }),
                    React.createElement(RichText.Content, {
                        tagName: 'label',
                        placeholder: __('option'),
                        className: 'qubely-' + type + '-option',
                        value: option,
                        'for': '' + uniqueId + index
                    })
                );
            })
        );
    };

    var renderEmailField = function renderEmailField() {

        return React.createElement(
            Fragment,
            null,
            React.createElement('input', { className: 'qubely-form-field qubely-form-email', type: 'email', placeholder: __(placeHolder), required: required, id: uniqueId, name: 'qubely-form-input[' + fieldName + (required ? '*' : '') + ']' }),
            emailConformation && React.createElement(
                Fragment,
                null,
                React.createElement(
                    'label',
                    { className: 'qubely-form-label', 'for': 'confirmation-' + uniqueId },
                    React.createElement(RichText.Content, { value: conformationEmailLabel }),
                    required && React.createElement(
                        'span',
                        { className: 'qubely-from-field-required-sign' },
                        '*'
                    )
                ),
                React.createElement('input', { className: 'qubely-form-field qubely-form-confirmation-email', type: 'email', placeholder: __(placeHolder), required: required, id: 'confirmation-' + uniqueId, name: 'qubely-form-input[confirmation-' + fieldName + (required ? '*' : '') + ']' })
            )
        );
    };

    var renderDatePicker = function renderDatePicker() {
        var options = JSON.stringify({ dateFormat: dateFormat });
        return React.createElement(
            'div',
            { className: 'qubely-date-picker-wrapper', 'data-options': options },
            React.createElement('input', { type: 'text', className: 'qubely-form-field qubely-datepicker', autocomplete: 'off', placeholder: __(dateFormat), id: uniqueId, name: 'qubely-form-input[' + fieldName + (required ? '*' : '') + ']', readonly: true })
        );
    };
    var renderTimePicker = function renderTimePicker() {

        var options = JSON.stringify({
            minuteInterval: minuteInterval,
            timeFormatType: timeFormatType
        });
        return React.createElement(
            'div',
            { className: 'qubely-form-timepicker-wrapper' },
            React.createElement('input', { type: 'text', className: 'qubely-form-field qubely-time-picker', placeholder: __(timeFormatType === 12 ? '12:00 PM' : '23:00'), id: uniqueId, name: 'qubely-form-input[' + fieldName + (required ? '*' : '') + ']', readonly: true }),
            React.createElement(
                'div',
                { className: 'qubely-form-timepicker', 'data-options': options },
                React.createElement(
                    'div',
                    { className: 'qubely-timePicker-hour' },
                    React.createElement(
                        'div',
                        { className: 'qubely-timePicker-button qubely-hour-button-up' },
                        React.createElement('i', { className: 'fas fa-angle-up' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-form-timepicker-hour' },
                        __('12')
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-timePicker-button qubely-hour-button-down' },
                        React.createElement('i', { className: 'fas fa-angle-down' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'qubely-timePicker-minute' },
                    React.createElement(
                        'div',
                        { className: 'qubely-timePicker-button qubely-minute-button-up' },
                        React.createElement('i', { className: 'fas fa-angle-up' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-form-timepicker-minute' },
                        __('00')
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-timePicker-button qubely-minute-button-down' },
                        React.createElement('i', { className: 'fas fa-angle-down' })
                    )
                ),
                timeFormatType === 12 && React.createElement(
                    'div',
                    { className: 'qubely-timePicker-time-format' },
                    React.createElement(
                        'div',
                        { className: 'qubely-timePicker-button qubely-hourformat-button' },
                        React.createElement('i', { className: 'fas fa-angle-up' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-form-time-format' },
                        __('PM')
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-timePicker-button qubely-hourformat-button' },
                        React.createElement('i', { className: 'fas fa-angle-down' })
                    )
                )
            )
        );
    };

    return React.createElement(
        'div',
        { className: 'qubely-block-' + uniqueId },
        React.createElement(
            'div',
            { className: 'qubely-form-field-wrapper' },
            React.createElement(
                'label',
                { className: 'qubely-form-label', 'for': uniqueId },
                React.createElement(RichText.Content, { value: label }),
                required && React.createElement(
                    'span',
                    { className: 'qubely-from-field-required-sign' },
                    '*'
                )
            ),
            type === 'textarea' ? React.createElement('textarea', { className: 'qubely-form-field qubely-form-textarea', placeholder: __(placeHolder), id: uniqueId, name: 'qubely-form-input[' + fieldName + (required ? '*' : '') + ']', required: required }) : type === 'dropdown' ? React.createElement(
                'select',
                { className: 'qubely-form-field qubely-form-dropdown', id: uniqueId, name: 'qubely-form-input[' + fieldName + (required ? '*' : '') + ']' },
                options.map(function (option) {
                    return React.createElement(
                        'option',
                        { value: option },
                        option
                    );
                })
            ) : type === 'radio' || type === 'checkbox' ? renderOptions() : type === 'date' ? renderDatePicker() : type === 'time' ? renderTimePicker() : type === 'email' ? renderEmailField() : React.createElement('input', { className: 'qubely-form-field qubely-form-' + type, type: type, id: uniqueId, name: 'qubely-form-input[' + fieldName + (required ? '*' : '') + ']', placeholder: __(placeHolder), required: required })
        )
    );
}

/***/ }),

/***/ "./src/blocks/form/fields/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/form/fields/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/fields/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! ./style.scss */ "./src/blocks/form/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/form/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/form/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$qubelyComponents = wp.qubelyComponents,
    globalAttributes = _wp$qubelyComponents.gloalSettings.globalAttributes,
    buttonAttributes = _wp$qubelyComponents.QubelyButton.buttonAttributes;


var defaultFormItems = [{
    type: 'email',
    label: 'Email',
    name: 'email',
    placeholder: 'Email',
    width: 90, required: true,
    hideLabel: false
}, {
    type: 'textarea',
    label: 'Message',
    name: 'message',
    placeholder: 'Message',
    width: 90,
    required: true,
    hideLabel: false
}];

registerBlockType('qubely/form', {
    title: __('Form'),
    category: 'qubely',
    icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/block-form.svg', alt: __('Form') }),
    description: 'Create functional Form using Qubely Form block.',
    keywords: [__('Form'), __('Form Builder'), __('Builder')],
    supports: {
        align: ['full']
    },
    attributes: _extends({
        uniqueId: { type: 'string', default: '' }
    }, globalAttributes, buttonAttributes, {
        height: {
            type: 'number',
            default: 200
        },
        width: {
            type: 'number',
            default: 320
        },
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
            style: [
                // {
                //     selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper {margin-bottom: {{spacing}};}'
                // }
            ]
        },

        gutter: {
            type: 'object', default: { md: 30, unit: 'px' },
            style: [
                // {
                //     selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper {margin-left: calc(-{{gutter}}/2);margin-right: calc(-{{gutter}}/2);}'
                // }
            ]
        },

        //label settings
        labelTypography: {
            type: 'object',
            default: {},
            style: [{ selector: '{{QUBELY}} .qubely-form-field-label' }]
        },
        labelColor: {
            type: 'string',
            default: '',
            style: [{ selector: '{{QUBELY}} .qubely-form-field-label { color:{{labelColor}}; }' }]
        },
        labelAlignment: {
            type: 'string',
            default: 'top'
            // style: [
            //     {
            //         condition: [
            //             { key: 'labelAlignment', relation: '==', value: 'top' }
            //         ],
            //         selector: '{{QUBELY}} .qubely-form-field-wrapper {flex-direction:column;}'
            //     },
            //     {
            //         condition: [
            //             { key: 'labelAlignment', relation: '==', value: 'left' }
            //         ],
            //         selector: '{{QUBELY}} .qubely-form-field-wrapper {justify-content:flex-start;}'
            //     },
            //     {
            //         condition: [
            //             { key: 'labelAlignment', relation: '==', value: 'right' }
            //         ],
            //         selector: '{{QUBELY}} .qubely-form-field-wrapper {flex-direction:row-reverse;}'
            //     },
            // ]
        },

        inputTypography: {
            type: 'obejct', default: { openTypography: 1, size: { md: 14, unit: 'px' } },
            style: [{
                selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field, {{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field::placeholder'
            }]
        },
        inputBoxShadow: {
            type: 'object',
            default: {},
            style: [{
                selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio)'
            }]
        },

        inputColor: { type: 'string', default: "#495057", style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio) {color: {{inputColor}};}' }] },
        inputColorHover: {
            type: 'string',
            default: "#495057",
            style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):hover {color: {{inputColorHover}};}' }]
        },

        inputColorFocus: {
            type: 'string',
            default: "#495057",
            style: [{
                selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):focus {color: {{inputColorFocus}};}'
            }]
        },

        placeholderColor: {
            type: 'string',
            default: "#818181",
            style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio)::placeholder {color: {{placeholderColor}};}' }]
        },

        placeholderColorHover: {
            type: 'string',
            default: "",
            style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):hover::placeholder {color: {{placeholderColorHover}};}' }]
        },

        placeholderColorFocus: {
            type: 'string',
            default: "",
            style: [{ selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):focus::placeholder {color: {{placeholderColorFocus}};}' }]
        },

        inputBg: {
            type: 'string', default: "#fff",
            style: [{
                condition: [{ key: 'layout', relation: '!=', value: 'materialdark' }],
                selector: '{{QUBELY}} .qubely-block-form .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio) {background-color: {{inputBg}};}'
            }]
        },
        materialDarkInputBg: {
            type: 'string', default: "#f5f5f5",
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'materialdark' }],
                selector: '{{QUBELY}} .qubely-block-form .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio) {background-color: {{materialDarkInputBg}};}'
            }]
        },

        inputBgHover: {
            type: 'string', default: '',
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'classic' }],
                selector: '{{QUBELY}} input.qubely-form-field:hover,{{QUBELY}} textarea.qubely-form-field:hover {background-color: {{inputBgHover}};}'
            }]
        },

        inputBgFocus: {
            type: 'string', default: "#fff",
            style: [{
                // condition: [
                //     { key: 'layout', relation: '==', value: 'classic' },
                // ],
                selector: '{{QUBELY}} .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio):focus {background-color: {{inputBgFocus}};}'
            }]
        },

        inputBorder: {
            type: 'object',
            default: {
                openBorder: 1,
                type: 'solid',
                widthType: 'global',
                global: { md: 1 },
                custom: { md: '1 1 1 1' },
                color: '#ced4da'
            },
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'classic' }],
                selector: '{{QUBELY}} .qubely-block-form.qubely-layout-classic .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio)'
            }]
        },
        inputBorderRadius: {
            type: 'object',
            default: {
                openBorderRadius: 1,
                radiusType: 'global',
                global: {
                    md: 4
                },
                unit: 'px'
            },
            style: [{
                condition: [{ key: 'layout', relation: '!=', value: 'material' }],
                selector: '{{QUBELY}} input.qubely-form-field, {{QUBELY}} textarea.qubely-form-field'
            }, {
                condition: [{ key: 'layout', relation: '==', value: 'material' }],
                selector: '{{QUBELY}} input.qubely-form-field{border-radius:0;} {{QUBELY}} textarea.qubely-form-field{border-radius:0;}'
            }]
        },

        inputBorderMaterial: {
            type: 'object',
            default: {
                openBorder: 1,
                type: 'solid',
                widthType: 'custom',
                custom: { md: '0 0 2 0' },
                color: '#e5e5e5'
            },
            style: [{
                condition: [{ key: 'layout', relation: '!=', value: 'classic' }],
                selector: '{{QUBELY}} .qubely-block-form .qubely-form .qubely-form-field-wrapper .qubely-form-field:not(.qubely-form-checkbox):not(.qubely-form-radio)'

            }]
        },

        inputBorderColorHover: {
            type: 'string', default: '',
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'classic' }],
                selector: '{{QUBELY}} input.qubely-form-field:hover,{{QUBELY}} textarea.qubely-form-field:hover {border-color: {{inputBorderColorHover}};}'
            }, {
                condition: [{ key: 'layout', relation: '==', value: 'material' }],
                selector: '{{QUBELY}} input.qubely-form-field:hover,{{QUBELY}} textarea.qubely-form-field:hover {border-bottom-color: {{inputBorderColorHover}};}'
            }]
        },

        inputBorderColorFocus: {
            type: 'string', default: '',
            style: [{
                condition: [{ key: 'layout', relation: '==', value: 'classic' }],
                selector: '{{QUBELY}} input.qubely-form-field:focus, textarea.qubely-form-field:focus {border-color: {{inputBorderColorFocus}}; box-shadow: 0 0 0 2px {{inputBorderColorFocus}};}'
            }, {
                condition: [{ key: 'layout', relation: '==', value: 'material' }],
                selector: '{{QUBELY}} input.qubely-form-field:focus, textarea.qubely-form-field:focus {border-bottom-color: {{inputBorderColorFocus}};}'
            }]
        },

        inputSize: { type: 'string', default: 'medium' },

        inputCustomSize: {
            type: 'object',
            default: {
                openPadding: 1,
                paddingType: 'custom',
                global: { md: '5' },
                custom: { md: '8 15 8 15' },
                unit: 'px'
            },
            style: [{
                condition: [{ key: 'layout', relation: '!=', value: 'material' }, { key: 'inputSize', relation: '==', value: 'custom' }],
                selector: '{{QUBELY}} .qubely-form.is-custom .qubely-form-field '
            }, {
                condition: [{ key: 'layout', relation: '==', value: 'material' }],
                selector: '{{QUBELY}} .qubely-form .qubely-form-field, {{QUBELY}} .qubely-form textarea.qubely-form-field {padding: 10px 0;}'
            }]
        },
        // inputPaddingY: {
        //     type: 'object', default: { md: 10, unit: 'px' },
        //     style: [
        //         {
        //             condition: [
        //                 { key: 'layout', relation: '==', value: 'classic' },
        //                 { key: 'inputSize', relation: '==', value: 'custom' }
        //             ],
        //             selector: '{{QUBELY}} .qubely-form.is-custom .qubely-form-field {padding-top: {{inputPaddingY}}; padding-bottom: {{inputPaddingY}};}'
        //         },
        //         {
        //             condition: [
        //                 { key: 'layout', relation: '==', value: 'material' },
        //                 { key: 'inputSize', relation: '==', value: 'custom' }
        //             ],
        //             selector: '{{QUBELY}} .qubely-form.is-custom .qubely-form-field {padding-top: {{inputPaddingY}}; padding-bottom: {{inputPaddingY}};}'
        //         }
        //     ]
        // },
        // inputPaddingX: {
        //     type: 'object', default: { md: 15, unit: 'px' },
        //     style: [
        //         {
        //             condition: [
        //                 { key: 'layout', relation: '==', value: 'classic' },
        //                 { key: 'inputSize', relation: '==', value: 'custom' }
        //             ],
        //             selector: '{{QUBELY}} .qubely-form .qubely-form-control {padding-left: {{inputPaddingX}}; padding-right: {{inputPaddingX}};}'
        //         }
        //     ]
        // },
        textareaHeight: {
            type: 'object', default: { md: 200, unit: 'px' },
            style: [{
                selector: '{{QUBELY}} .qubely-form .qubely-form-group textarea.qubely-form-control {height: {{textareaHeight}};}'
            }]
        },

        fieldErrorMessage: { type: 'string', default: 'Please fill the required field.' },
        formSuccessMessage: { type: 'string', default: 'Email successfully sent!' },
        formErrorMessage: { type: 'string', default: 'Email sent failed, fill required field and try again!' },
        reCaptcha: { type: 'boolean', default: false },
        reCaptchaSiteKey: { type: 'string', default: '' },
        reCaptchaSecretKey: { type: 'string', default: '' },
        policyCheckbox: { type: 'boolean', default: false },
        policyCheckboxText: { type: 'string', default: 'I agree with the Terms & Conditions and I declare that I have read the information that is required in accordance with the terms' },
        emailReceiver: { type: 'string', default: '' },
        emailHeaders: { type: 'string', default: 'Reply-To: {{email}}\nReply-name: {{first-name}} {{last-name}}\nCc: {{email}}\nBcc: admin@yourcompany.com' },
        emailFrom: { type: 'string', default: 'Your Name: admin@example.com' },
        emailSubject: { type: 'string', default: '{{subject}} | {{email}} | {{site-name}}' },
        emailBody: { type: 'string', default: '<p><strong>From:</strong> {{first-name}} {{last-name}}</p><strong>Email:</strong> {{email}}</p>\n<p><strong>Subject:</strong> {{subject}}</p>\n<p><strong>Message:</strong> {{message}}</p>' },
        showGlobalSettings: { type: 'boolean', default: true } // Global Settings
    }),
    edit: _Edit2.default,
    save: _Save2.default
});

/***/ }),

/***/ "./src/blocks/form/row/column/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/form/row/column/edit.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _icons = __webpack_require__(/*! ../../../../helpers/icons */ "./src/helpers/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$editor = wp.editor,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var compose = wp.compose.compose;
var createBlock = wp.blocks.createBlock;
var _wp$components = wp.components,
    Dropdown = _wp$components.Dropdown,
    PanelBody = _wp$components.PanelBody;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$qubelyComponents = wp.qubelyComponents,
    Range = _wp$qubelyComponents.Range,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator,
    parseResponsiveViewPort = _wp$qubelyComponents.HelperFunction.parseResponsiveViewPort;

var Edit = function (_Component) {
    _inherits(Edit, _Component);

    function Edit(props) {
        _classCallCheck(this, Edit);

        var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

        _this.renderFormFieldTypes = function () {
            var _this$props = _this.props,
                clientId = _this$props.clientId,
                insertBlock = _this$props.insertBlock,
                parentClientId = _this$props.attributes.parentClientId;
            var hideDropdown = _this.state.hideDropdown;


            var formFields = [[__('Text'), 'text'], [__('Number'), 'number'], [__('Email'), 'email'], [__('Radio'), 'radio'], [__('Checkbox'), 'checkbox'], [__('Textarea'), 'textarea'], [__('Date'), 'date'], [__('Time'), 'time'], [__('Dropdown'), 'dropdown']];
            return React.createElement(
                'div',
                { className: 'qubely-form-field-types' },
                formFields.map(function (_ref, index) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        fieldName = _ref2[0],
                        type = _ref2[1];

                    return React.createElement(
                        'div',
                        { className: 'qubely-form-field-type',
                            onClick: function onClick() {
                                hideDropdown && hideDropdown();
                                insertBlock(createBlock('qubely/formfield-' + type, { parentClientId: parentClientId }), undefined, clientId);
                            }
                        },
                        _icons2.default.from_fields[type],
                        ' ',
                        fieldName
                    );
                })
            );
        };

        _this.state = {
            hideDropdown: null
        };
        return _this;
    }

    _createClass(Edit, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                setAttributes = _props.setAttributes,
                clientId = _props.clientId,
                _props$attributes = _props.attributes,
                uniqueId = _props$attributes.uniqueId,
                fieldSize = _props$attributes.fieldSize,
                width = _props$attributes.width;

            var _client = clientId.substr(0, 6);
            if (!uniqueId) {
                setAttributes({ uniqueId: _client });
            } else if (uniqueId && uniqueId != _client) {
                setAttributes({ uniqueId: _client });
            }
            var currentField = $('#block-' + clientId);
            currentField.css({
                width: fieldSize === 'small' ? '30%' : fieldSize === 'medium' ? '50%' : fieldSize === 'large' ? '100%' : width[parseResponsiveViewPort()] + '%'
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var _props2 = this.props,
                clientId = _props2.clientId,
                _props2$attributes = _props2.attributes,
                fieldSize = _props2$attributes.fieldSize,
                width = _props2$attributes.width;


            var currentField = $('#block-' + clientId);
            currentField.css({
                width: fieldSize === 'small' ? '30%' : fieldSize === 'medium' ? '50%' : fieldSize === 'large' ? '100%' : width[parseResponsiveViewPort()] + '%'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props3 = this.props,
                hasInnerBlocks = _props3.hasInnerBlocks,
                setAttributes = _props3.setAttributes,
                attributes = _props3.attributes,
                _props3$attributes = _props3.attributes,
                uniqueId = _props3$attributes.uniqueId,
                fieldSize = _props3$attributes.fieldSize,
                width = _props3$attributes.width;


            if (uniqueId) {
                CssGenerator(attributes, 'form-column', uniqueId);
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
                        React.createElement(RadioAdvanced, {
                            label: __('Field Size'),
                            options: [{ label: 'S', value: 'small', title: 'Small' }, { label: 'M', value: 'medium', title: 'Medium' }, { label: 'L', value: 'large', title: 'Large' }, { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }],
                            value: fieldSize,
                            onChange: function onChange(value) {
                                return setAttributes({ fieldSize: value });
                            } }),
                        fieldSize === 'custom' && React.createElement(Range, {
                            min: 20,
                            max: 100,
                            responsive: true,
                            value: width,
                            label: __('Width'),
                            onChange: function onChange(value) {
                                return setAttributes({ width: value });
                            }
                        })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'qubely-block-' + uniqueId + '  qubely-' + fieldSize },
                    React.createElement(
                        'div',
                        { className: 'qubely-form-column' },
                        hasInnerBlocks ? React.createElement(InnerBlocks, {
                            allowedBlocks: ['qubely/formfield-text', 'qubely/formfield-number', 'qubely/formfield-email', 'qubely/formfield-textarea', 'qubely/formfield-radio', 'qubely/formfield-dropdown', 'qubely/formfield-checkbox', 'qubely/formfield-date', 'qubely/formfield-time']
                        }) : React.createElement(Dropdown, {
                            className: "qubely-action-add-form-field",
                            contentClassName: "qubely-form-field-picker",
                            position: 'bottom center',
                            renderToggle: function renderToggle(_ref3) {
                                var isOpen = _ref3.isOpen,
                                    onToggle = _ref3.onToggle;
                                return React.createElement(
                                    'div',
                                    { onClick: onToggle, 'aria-expanded': isOpen, className: 'qubely-action-add-form-item' },
                                    React.createElement(
                                        'div',
                                        { className: 'qubely-action-add-form-empty', onClick: function onClick() {
                                                return _this2.setState({ hideDropdown: onToggle });
                                            } },
                                        React.createElement(
                                            'svg',
                                            { 'aria-hidden': 'true', role: 'img', focusable: 'false', 'class': 'dashicon dashicons-insert', xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 20 20' },
                                            React.createElement('path', { d: 'M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z' })
                                        )
                                    )
                                );
                            },
                            renderContent: function renderContent() {
                                return _this2.renderFormFieldTypes();
                            }
                        })
                    )
                )
            );
        }
    }]);

    return Edit;
}(Component);

exports.default = compose([withSelect(function (select, _ref4) {
    var clientId = _ref4.clientId;

    var _select = select('core/block-editor'),
        getBlock = _select.getBlock;

    var block = getBlock(clientId);

    var _select2 = select('core/block-editor'),
        getBlockOrder = _select2.getBlockOrder;

    return {
        hasInnerBlocks: !!(block && block.innerBlocks.length),
        hasChildBlocks: getBlockOrder(clientId).length > 0
    };
}), withDispatch(function (dispatch) {
    var _dispatch = dispatch('core/editor'),
        insertBlock = _dispatch.insertBlock,
        removeBlock = _dispatch.removeBlock,
        updateBlockAttributes = _dispatch.updateBlockAttributes,
        toggleSelection = _dispatch.toggleSelection;

    return {
        insertBlock: insertBlock,
        removeBlock: removeBlock,
        updateBlockAttributes: updateBlockAttributes,
        toggleSelection: toggleSelection
    };
})])(Edit);

/***/ }),

/***/ "./src/blocks/form/row/column/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/form/row/column/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _save = __webpack_require__(/*! ./save */ "./src/blocks/form/row/column/save.js");

var _save2 = _interopRequireDefault(_save);

var _edit = __webpack_require__(/*! ./edit */ "./src/blocks/form/row/column/edit.js");

var _edit2 = _interopRequireDefault(_edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './style.scss'
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var parseResponsiveViewPort = wp.qubelyComponents.HelperFunction.parseResponsiveViewPort;


registerBlockType('qubely/form-column', {
    title: __('Form Column'),
    category: 'qubely',
    parent: ['qubely/form-row'],
    supports: {
        inserter: false,
        reusable: false,
        html: false
    },
    icon: React.createElement('img', { src: qubely_admin.plugin + 'assets/img/blocks/block-form.svg', alt: __('Form') }),
    attributes: {
        uniqueId: {
            type: 'string',
            default: ''
        },
        parentClientId: {
            type: 'string',
            default: ''
        },
        fieldSize: {
            type: 'string',
            default: 'large'
        },
        width: {
            type: 'object',
            default: {
                md: 50,
                sm: 50,
                xs: 100,
                unit: '%',
                device: 'md'
            },
            style: [{
                condition: [{ key: 'fieldSize', relation: '==', value: 'large' }],
                selector: '{{QUBELY}}.qubely-form-field-front.qubely-large {flex:100%;max-width:100%;}'
            }, {
                condition: [{ key: 'fieldSize', relation: '==', value: 'small' }],
                selector: '{{QUBELY}}.qubely-form-field-front.qubely-small {flex:25%;max-width:25%;}'
            }, {
                condition: [{ key: 'fieldSize', relation: '==', value: 'medium' }],
                selector: '{{QUBELY}}.qubely-form-field-front.qubely-medium {flex:45%;max-width:45%;}'
            }, {
                condition: [{ key: 'fieldSize', relation: '==', value: 'custom' }],
                selector: '{{QUBELY}}.qubely-form-field-front.qubely-custom {flex:{{width}};max-width:{{width}};}'
            }]
        }
    },
    getEditWrapperProps: function getEditWrapperProps(attributes) {
        var fieldSize = attributes.fieldSize,
            width = attributes.width;

        if (Number.isFinite(width)) {
            return {
                style: {
                    width: fieldSize === 'small' ? '30%' : fieldSize === 'medium' ? '50%' : fieldSize === 'large' ? '90%' : width[parseResponsiveViewPort] + '%'
                }
            };
        }
    },

    edit: _edit2.default,
    save: _save2.default
});

/***/ }),

/***/ "./src/blocks/form/row/column/save.js":
/*!********************************************!*\
  !*** ./src/blocks/form/row/column/save.js ***!
  \********************************************/
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

var Component = wp.element.Component;
var InnerBlocks = wp.editor.InnerBlocks;
var parseResponsiveViewPort = wp.qubelyComponents.HelperFunction.parseResponsiveViewPort;

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
                fieldSize = _props$attributes.fieldSize;


            return React.createElement(
                "div",
                { className: "qubely-block-" + uniqueId + " qubely-form-field-front qubely-" + fieldSize },
                React.createElement(
                    "div",
                    { className: "qubely-form-column" },
                    React.createElement(InnerBlocks.Content, null)
                )
            );
        }
    }]);

    return Save;
}(Component);

exports.default = Save;

/***/ }),

/***/ "./src/blocks/form/row/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/form/row/edit.js ***!
  \*************************************/
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
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$editor = wp.editor,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var PanelBody = wp.components.PanelBody;
var _wp$qubelyComponents = wp.qubelyComponents,
    Range = _wp$qubelyComponents.Range,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator;

var Edit = function (_Component) {
    _inherits(Edit, _Component);

    function Edit(props) {
        _classCallCheck(this, Edit);

        var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

        _this.state = { device: 'md' };
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
                attributes = _props2.attributes,
                setAttributes = _props2.setAttributes,
                _props2$attributes = _props2.attributes,
                uniqueId = _props2$attributes.uniqueId,
                gutter = _props2$attributes.gutter,
                spacer = _props2$attributes.spacer;
            var device = this.state.device;


            if (uniqueId) {
                CssGenerator(attributes, 'form-row', uniqueId);
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
                        React.createElement(Range, {
                            min: 0,
                            max: 100,
                            responsive: true,
                            value: gutter,
                            label: __('Gutter'),
                            unit: ['px', 'em', '%'],
                            device: device,
                            onDeviceChange: function onDeviceChange(value) {
                                return _this2.setState({ device: value });
                            },
                            onChange: function onChange(value) {
                                return setAttributes({ gutter: value });
                            }
                        }),
                        React.createElement(Range, {
                            min: 5,
                            max: 100,
                            responsive: true,
                            value: spacer,
                            label: __('Spacer'),
                            unit: ['px', 'em', '%'],
                            device: device,
                            onDeviceChange: function onDeviceChange(value) {
                                return _this2.setState({ device: value });
                            },
                            onChange: function onChange(value) {
                                return setAttributes({ spacer: value });
                            }
                        })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'qubely-block-' + uniqueId },
                    React.createElement(
                        'div',
                        { className: 'qubely-form-row qubely-backend' },
                        React.createElement(InnerBlocks, { allowedBlocks: ['qubely/formfield-column'] })
                    )
                )
            );
        }
    }]);

    return Edit;
}(Component);

exports.default = Edit;

/***/ }),

/***/ "./src/blocks/form/row/index.js":
/*!**************************************!*\
  !*** ./src/blocks/form/row/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./src/blocks/form/row/style.scss");

var _save = __webpack_require__(/*! ./save */ "./src/blocks/form/row/save.js");

var _save2 = _interopRequireDefault(_save);

var _edit = __webpack_require__(/*! ./edit */ "./src/blocks/form/row/edit.js");

var _edit2 = _interopRequireDefault(_edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('qubely/form-row', {
    title: __('Form Row'),
    category: 'qubely',
    parent: ['qubely/form'],
    supports: {
        inserter: false,
        reusable: false,
        html: false
    },
    icon: React.createElement('img', { src: qubely_admin.plugin + 'assets/img/blocks/block-form.svg', alt: __('Form') }),
    attributes: {
        uniqueId: {
            type: 'string',
            default: ''
        },
        parentClientId: {
            type: 'string',
            default: ''
        },
        gutter: {
            type: 'object',
            default: {
                md: 10,
                sm: 10,
                xs: 10,
                unit: 'px',
                device: 'md'
            },
            style: [{
                selector: '{{QUBELY}} .qubely-form-row.qubely-backend .editor-inner-blocks.block-editor-inner-blocks >div {margin-left:-{{gutter}};margin-right:-{{gutter}};} {{QUBELY}} .qubely-form-row.qubely-frontend {margin-left:-{{gutter}};margin-right:-{{gutter}};} {{QUBELY}} .qubely-form-row.qubely-backend .editor-block-list__layout.block-editor-block-list__layout>div,{{QUBELY}} .qubely-form-row.qubely-frontend .qubely-form-field-front{padding-left:{{gutter}};padding-right:{{gutter}};} '
            }]
        },
        spacer: {
            type: 'object',
            default: {
                md: 10,
                sm: 10,
                xs: 10,
                unit: 'px',
                device: 'md'
            },
            style: [{
                selector: '{{QUBELY}} .qubely-form-row {margin-bottom:{{spacer}};}'
            }]
        }
    },
    edit: _edit2.default,
    save: _save2.default
});

/***/ }),

/***/ "./src/blocks/form/row/save.js":
/*!*************************************!*\
  !*** ./src/blocks/form/row/save.js ***!
  \*************************************/
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

var Component = wp.element.Component;
var InnerBlocks = wp.editor.InnerBlocks;

var Save = function (_Component) {
    _inherits(Save, _Component);

    function Save() {
        _classCallCheck(this, Save);

        return _possibleConstructorReturn(this, (Save.__proto__ || Object.getPrototypeOf(Save)).apply(this, arguments));
    }

    _createClass(Save, [{
        key: "render",
        value: function render() {
            var uniqueId = this.props.attributes.uniqueId;

            return React.createElement(
                "div",
                { className: "qubely-block-" + uniqueId },
                React.createElement(
                    "div",
                    { className: "qubely-form-row qubely-frontend" },
                    React.createElement(InnerBlocks.Content, null)
                )
            );
        }
    }]);

    return Save;
}(Component);

exports.default = Save;

/***/ }),

/***/ "./src/blocks/form/row/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/form/row/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/form/row/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
    MediaPlaceholder = _wp$editor.MediaPlaceholder;
var _wp$qubelyComponents = wp.qubelyComponents,
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
    BorderRadius = _wp$qubelyComponents.BorderRadius,
    BoxShadow = _wp$qubelyComponents.BoxShadow,
    Alignment = _wp$qubelyComponents.Alignment,
    Padding = _wp$qubelyComponents.Padding,
    InlineToolbar = _wp$qubelyComponents.Inline.InlineToolbar,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator,
    _wp$qubelyComponents$ = _wp$qubelyComponents.gloalSettings,
    globalSettingsPanel = _wp$qubelyComponents$.globalSettingsPanel,
    animationSettings = _wp$qubelyComponents$.animationSettings,
    interactionSettings = _wp$qubelyComponents$.interactionSettings;

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
                var updatedAttributes = key === 'add' ? [].concat(_toConsumableArray(galleryContents), [{ title: __('Best Gutenberg Plugin') }]) : galleryContents.slice(0, galleryItems - 1);
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
            var _this$props3 = _this.props,
                setAttributes = _this$props3.setAttributes,
                _this$props3$attribut = _this$props3.attributes,
                galleryContents = _this$props3$attribut.galleryContents,
                enableCaption = _this$props3$attribut.enableCaption,
                showCaption = _this$props3$attribut.showCaption,
                imageAnimation = _this$props3$attribut.imageAnimation;


            return [].concat(_toConsumableArray(galleryContents), [{ image: undefined, title: undefined, addNewItem: true }]).map(function (_ref, index) {
                var title = _ref.title,
                    image = _ref.image,
                    _ref$addNewItem = _ref.addNewItem,
                    addNewItem = _ref$addNewItem === undefined ? false : _ref$addNewItem;

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
                            React.createElement('span', { className: 'dashicons dashicons-no-alt' })
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
                                        if (addNewItem) {
                                            setAttributes({
                                                galleryContents: [].concat(_toConsumableArray(galleryContents), _toConsumableArray(value.map(function (item) {
                                                    return {
                                                        title: item.caption,
                                                        image: item
                                                    };
                                                })))
                                            });
                                        } else {
                                            _this.updateGalleryImage('image', value, index);
                                        }
                                    },
                                    allowedTypes: ['image'],
                                    multiple: addNewItem,
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
                                                    __('Insert Image')
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

        _this.onSelectImages = function (images) {
            var setAttributes = _this.props.setAttributes;

            var galleryNewContents = images.map(function (image) {
                return {
                    title: image.caption,
                    image: image
                };
            });

            setAttributes({ galleryContents: galleryNewContents, galleryItems: galleryNewContents.length });
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
                galleryContents = _props2$attributes.galleryContents,
                style = _props2$attributes.style,
                column = _props2$attributes.column,
                gutter = _props2$attributes.gutter,
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
                overlayBlend = _props2$attributes.overlayBlend,
                globalZindex = _props2$attributes.globalZindex,
                enablePosition = _props2$attributes.enablePosition,
                selectPosition = _props2$attributes.selectPosition,
                positionXaxis = _props2$attributes.positionXaxis,
                positionYaxis = _props2$attributes.positionYaxis,
                hideTablet = _props2$attributes.hideTablet,
                hideMobile = _props2$attributes.hideMobile,
                globalCss = _props2$attributes.globalCss,
                animation = _props2$attributes.animation,
                interaction = _props2$attributes.interaction;
            var device = this.state.device;


            if (uniqueId) {
                CssGenerator(this.props.attributes, 'gallery', uniqueId);
            }

            if (galleryContents.length === 0) {
                return React.createElement(MediaPlaceholder, {
                    className: 'qubely-gallery-media-placeholder',
                    labels: {
                        title: __('Qubely Gallery'),
                        instructions: __('Drag images, upload new ones or select files from your library.')
                    },
                    onSelect: this.onSelectImages,
                    accept: 'image/*',
                    allowedTypes: ['image'],
                    multiple: true
                });
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
                            options: [{ value: 1, svg: _icons2.default.gallery_1 }, { value: 2, svg: _icons2.default.gallery_2 }]
                        }),
                        React.createElement(Range, {
                            label: __('Select Column'),
                            value: column,
                            onChange: function onChange(value) {
                                return setAttributes({ column: value });
                            },
                            min: 1, step: 1, max: 6,
                            responsive: true, device: device,
                            onDeviceChange: function onDeviceChange(value) {
                                return _this2.setState({ device: value });
                            }
                        }),
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
                    ),
                    animationSettings(uniqueId, animation, setAttributes),
                    interactionSettings(uniqueId, interaction, setAttributes)
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
                globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes),
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
var _wp$qubelyComponents$ = wp.qubelyComponents.HelperFunction,
    animationAttr = _wp$qubelyComponents$.animationAttr,
    IsInteraction = _wp$qubelyComponents$.IsInteraction;

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
			    column = _props$attributes.column,
			    interaction = _props$attributes.interaction;

			var interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';
			return React.createElement(
				'div',
				_extends({ className: 'qubely-block-' + uniqueId }, animationAttr(animation)),
				React.createElement(
					'div',
					{ className: 'qubely-block-gallery ' + interactionClass + ' qubely-gallery-item-' + style },
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


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! ./style.scss */ "./src/blocks/gallery/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/gallery/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/gallery/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var globalAttributes = wp.qubelyComponents.gloalSettings.globalAttributes;


registerBlockType('qubely/gallery', {
    title: __('Gallery'),
    category: 'qubely',
    description: __('Showcase detailed with Qubely Gallery'),
    icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/block-testimonial-carousel.svg', alt: __('Gallery') }),
    keywords: [__('Gallery'), __('Image')],
    attributes: _extends({
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
            default: []
        },
        images: {
            type: 'array',
            default: [],
            source: 'query',
            selector: '.qubely-image-carousel-item',
            query: {
                url: {
                    source: 'attribute',
                    selector: 'img',
                    attribute: 'src'
                },
                link: {
                    source: 'attribute',
                    selector: 'img',
                    attribute: 'data-link'
                },
                alt: {
                    source: 'attribute',
                    selector: 'img',
                    attribute: 'alt',
                    default: ''
                },
                id: {
                    source: 'attribute',
                    selector: 'img',
                    attribute: 'data-id'
                },
                caption: {
                    type: 'array',
                    source: 'children',
                    selector: 'figcaption'
                }
            }
        },
        //gallery settings
        style: {
            type: 'number',
            default: 1
        },
        galleryItems: {
            type: 'number',
            default: 6
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
            default: 3
        }, 'default', { md: 3, sm: 1, xs: 1, unit: 'px' }),
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
                openShadow: false,
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
                openColor: 0,
                type: 'color',
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
                selector: '{{QUBELY}} .qubely-gallery-item .qubely-gallery-image-container:after'
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
    }, globalAttributes),
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    Tooltip = _wp$components.Tooltip,
    Toolbar = _wp$components.Toolbar;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    BlockControls = _wp$editor.BlockControls,
    MediaPlaceholder = _wp$editor.MediaPlaceholder;
var _wp$qubelyComponents = wp.qubelyComponents,
    Range = _wp$qubelyComponents.Range,
    Color = _wp$qubelyComponents.Color,
    Typography = _wp$qubelyComponents.Typography,
    Toggle = _wp$qubelyComponents.Toggle,
    Separator = _wp$qubelyComponents.Separator,
    ColorAdvanced = _wp$qubelyComponents.ColorAdvanced,
    Border = _wp$qubelyComponents.Border,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    Select = _wp$qubelyComponents.Select,
    Styles = _wp$qubelyComponents.Styles,
    Alignment = _wp$qubelyComponents.Alignment,
    Padding = _wp$qubelyComponents.Padding,
    Tabs = _wp$qubelyComponents.Tabs,
    Tab = _wp$qubelyComponents.Tab,
    Carousel = _wp$qubelyComponents.Carousel,
    ButtonGroup = _wp$qubelyComponents.ButtonGroup,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator,
    InlineToolbar = _wp$qubelyComponents.Inline.InlineToolbar,
    _wp$qubelyComponents$ = _wp$qubelyComponents.gloalSettings,
    globalSettingsPanel = _wp$qubelyComponents$.globalSettingsPanel,
    animationSettings = _wp$qubelyComponents$.animationSettings;

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

		_this.renderSlider = function (sliderimage, index, addNewItem) {
			var _this$props2 = _this.props,
			    setAttributes = _this$props2.setAttributes,
			    carouselItems = _this$props2.attributes.carouselItems;

			return React.createElement(
				'div',
				{ className: 'qubely-single-img qubely-slider-image-container ' + (sliderimage != undefined && sliderimage.url != undefined ? '' : ' qubely-empty-image') },
				React.createElement(MediaUpload, {
					onSelect: function onSelect(value) {
						if (addNewItem) {
							setAttributes({
								carouselItems: [].concat(_toConsumableArray(carouselItems), _toConsumableArray(value.map(function (item) {
									return {
										sliderimage: item,
										message: null,
										slidertitle: item.caption,
										subtitle: null
									};
								})))
							});
						} else {
							_this.updateAtrributes('sliderimage', value, index);
						}
					},
					allowedTypes: ['image'],
					multiple: addNewItem,
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

		_this.renderSliderInfo = function (item, index) {
			var _this$props$attribute = _this.props.attributes,
			    layout = _this$props$attribute.layout,
			    sliderContent = _this$props$attribute.sliderContent,
			    activeDescription = _this$props$attribute.activeDescription;
			var slidertitle = item.slidertitle,
			    subtitle = item.subtitle,
			    sliderimage = item.sliderimage,
			    message = item.message,
			    _item$addNewItem = item.addNewItem,
			    addNewItem = _item$addNewItem === undefined ? false : _item$addNewItem;


			return React.createElement(
				'div',
				{ className: 'qubely-image-slider' },
				_this.renderSlider(sliderimage, index, addNewItem),
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
								React.createElement(RichText, {
									keepPlaceholderOnFocus: true,
									placeholder: __('Add image title...'),
									formattingControls: ['bold', 'italic', 'link'],
									onChange: function onChange(value) {
										return _this.updateAtrributes('slidertitle', value, index);
									},
									value: slidertitle
								})
							),
							React.createElement(
								'div',
								{ className: 'qubely-image-subtitle' },
								React.createElement(RichText, {
									placeholder: __('Add image subtitle...'),
									formattingControls: ['bold', 'italic', 'link'],
									keepPlaceholderOnFocus: true,
									onChange: function onChange(value) {
										return _this.updateAtrributes('subtitle', value, index);
									},
									value: subtitle
								})
							),
							activeDescription && React.createElement(
								'div',
								{ className: 'qubely-slider-description' },
								React.createElement(RichText, {
									key: 'editable',
									placeholder: __('Add description...'),
									formattingControls: ['bold', 'italic', 'link', 'strikethrough'],
									keepPlaceholderOnFocus: true,
									onChange: function onChange(value) {
										return _this.updateAtrributes('message', value, index);
									},
									value: message
								}),
								'\xCE'
							)
						)
					)
				)
			);
		};

		_this.renderImages = function () {
			var _this$props$attribute2 = _this.props.attributes,
			    layout = _this$props$attribute2.layout,
			    carouselItems = _this$props$attribute2.carouselItems,
			    items = _this$props$attribute2.items,
			    contentVerticalAlign = _this$props$attribute2.contentVerticalAlign;

			return [].concat(_toConsumableArray(carouselItems), [{ sliderimage: null, message: null, slidertitle: null, subtitle: null, addNewItem: true }]).map(function (item, index) {
				return React.createElement(
					'div',
					{ key: index, className: 'qubely-carousel-item item-layout' + layout + ' align-' + contentVerticalAlign },
					carouselItems.length > items.md && carouselItems.length > items.sm && carouselItems.length > items.sm && React.createElement(
						Tooltip,
						{ text: __('Delete this item') },
						React.createElement(
							'span',
							{ className: 'qubely-repeatable-action-remove', role: 'button', onClick: function onClick() {
									return _this.removeCrouselItem(index);
								} },
							React.createElement('span', { 'class': 'dashicons dashicons-no-alt' })
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

		_this.removeCrouselItem = function (index) {
			var _this$props3 = _this.props,
			    setAttributes = _this$props3.setAttributes,
			    carouselItems = _this$props3.attributes.carouselItems;

			var newCarouselItems = JSON.parse(JSON.stringify(carouselItems));
			newCarouselItems.splice(index, 1);
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
			    overlayBlend = _props2$attributes.overlayBlend,
			    sliderMargin = _props2$attributes.sliderMargin,
			    dotsposition = _props2$attributes.dotsposition,
			    carouselImageSize = _props2$attributes.carouselImageSize,
			    imageWidth = _props2$attributes.imageWidth,
			    avatarHeight = _props2$attributes.avatarHeight,
			    globalZindex = _props2$attributes.globalZindex,
			    enablePosition = _props2$attributes.enablePosition,
			    selectPosition = _props2$attributes.selectPosition,
			    positionXaxis = _props2$attributes.positionXaxis,
			    positionYaxis = _props2$attributes.positionYaxis,
			    hideTablet = _props2$attributes.hideTablet,
			    hideMobile = _props2$attributes.hideMobile,
			    globalCss = _props2$attributes.globalCss,
			    animation = _props2$attributes.animation;
			var device = this.state.device;


			var carouselSettings = {
				autoplay: autoPlay,
				items: layout != 2 ? layout == 5 ? itemfive : items : itemthree,
				center: layout == 3 || layout == 4 ? isCentered : notCentered,
				nav: nav,
				dots: dots,
				margin: sliderMargin,
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

			if (uniqueId) {
				CssGenerator(this.props.attributes, 'imagecarousel', uniqueId);
			}

			if (carouselItems.length === 0) {
				return React.createElement(MediaPlaceholder, {
					className: 'qubely-image-carousel-media-placeholder',
					labels: {
						title: __('Qubely Image Carousel'),
						instructions: __('Drag images, upload new ones or select files from your library.')
					},
					onSelect: function onSelect(images) {
						setAttributes({
							carouselItems: images.map(function (image) {
								return {
									sliderimage: image,
									slidertitle: image.caption,
									subtitle: null,
									message: null
								};
							})
						});
					},
					accept: 'image/*',
					allowedTypes: ['image'],
					multiple: true
				});
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
							options: [{ value: 1, svg: _icons2.default.imagecarousel_1, label: __('Layout 1') }, { value: 2, svg: _icons2.default.imagecarousel_2, label: __('Layout 2') }, { value: 3, svg: _icons2.default.imagecarousel_3, label: __('Layout 3') }, { value: 4, svg: _icons2.default.imagecarousel_4, label: __('Layout 4') }, { value: 6, svg: _icons2.default.imagecarousel_6, label: __('Layout 5') }],
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
						layout == 2 && React.createElement(Range, (_React$createElement2 = {
							label: __('Number of Columns'),
							min: 1, max: 20, responsive: true, device: device
						}, _defineProperty(_React$createElement2, 'device', this.state.device), _defineProperty(_React$createElement2, 'value', layout != 2 ? layout == 5 ? itemfive : items : itemthree), _defineProperty(_React$createElement2, 'onChange', function onChange(value) {
							return setAttributes(layout != 2 ? layout == 5 ? { itemfive: value } : { items: value } : { itemthree: value });
						}), _defineProperty(_React$createElement2, 'onDeviceChange', function onDeviceChange(value) {
							return _this2.setState({ device: value });
						}), _React$createElement2)),
						React.createElement(Range, {
							label: __('Margin'),
							min: 0,
							max: 80,
							value: sliderMargin,
							onChange: function onChange(value) {
								return setAttributes({ sliderMargin: parseInt(value) });
							}
						}),
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
								label: __('Dot Position'),
								value: dotsposition, onChange: function onChange(value) {
									return setAttributes({ dotsposition: value });
								},
								min: -20, max: 200,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this2.setState({ device: value });
								}
							}),
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
					),
					React.createElement(
						PanelBody,
						{ title: __('Media'), initialOpen: false },
						React.createElement(RadioAdvanced, {
							label: __('Image Size'),
							options: [{ label: 'L', value: '1140px', title: 'Large' }, { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }],
							value: carouselImageSize,
							onChange: function onChange(value) {
								return setAttributes({ carouselImageSize: value });
							}
						}),
						carouselImageSize == 'custom' && React.createElement(
							Fragment,
							null,
							React.createElement(Range, {
								label: React.createElement('span', { className: 'dashicons dashicons-leftright', title: 'Width' }),
								value: imageWidth,
								onChange: function onChange(value) {
									return setAttributes({ imageWidth: value });
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
						)
					),
					animationSettings(uniqueId, animation, setAttributes)
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
				globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes),
				React.createElement(
					'div',
					{ className: 'qubely-block-' + uniqueId },
					React.createElement(
						'div',
						{ className: 'qubely-block-image-carousel qubely-layout-' + layout },
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
								"div",
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
			    sliderMargin = _props$attributes2.sliderMargin,
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
				margin: sliderMargin,
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
						{ className: "qubely-carousel qubely-carousel-wrapper" + (isCentered && activeFade ? " is-faded" : " "), "data-options": options, id: "qubelyCarousel1" },
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


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! ./style.scss */ "./src/blocks/imagecarousel/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/imagecarousel/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/imagecarousel/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var globalAttributes = wp.qubelyComponents.gloalSettings.globalAttributes;


registerBlockType('qubely/imagecarousel', {
	title: __('Image Carousel'),
	description: __('Insert images and beautify them with Qubely Image Carousel Block'),
	icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/block-testimonial-carousel.svg', alt: __('Image Carousel Block') }),
	category: 'qubely',
	keywords: [__('Image'), __('Carousel')],
	attributes: _extends({
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
		sliderMargin: {
			type: 'number',
			default: 30
		},
		nav: { type: 'boolean', default: true },
		dots: { type: 'boolean', default: false },
		centerPadding: { type: 'number', default: 210 },

		carouselItems: {
			type: 'array',
			default: []
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
		arrowStyle: { type: 'string', default: 'arrowright2' },
		horizontalScroll: {
			type: 'object',
			default: { md: -78, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control { right: {{horizontalScroll}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control { left: {{horizontalScroll}} }  ' }]
		},
		// arrowPosition: {type: 'string', default: 'center' },
		arrowPosition: {
			type: 'object',
			default: { md: 50, unit: '%' },
			style: [{ selector: '{{QUBELY}} .qubely-block-image-carousel .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control { top: {{arrowPosition}}; } ' }]
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
			default: { md: 14, unit: 'px' },
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
		dotsposition: {
			type: 'string',
			default: { md: 80, unit: 'px' },
			style: [{
				selector: '{{QUBELY}} .qubely-block-image-carousel .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul { margin-top: {{dotsposition}} }'
			}]
		},
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
  * 			Media 
  * ------------------------------------ */
		carouselImageSize: {
			type: 'string',
			default: '1140px',
			style: [{
				condition: [{ key: 'carouselImageSize', relation: '!=', value: 'custom' }],
				selector: '{{QUBELY}} .qubely-block-image-carousel .qubely-image-item img { display: inline-block; width: {{carouselImageSize}}; height: auto; }'
			}]
		},
		imageWidth: {
			type: 'string',
			default: { md: 100, unit: '%' },
			style: [{
				condition: [{ key: 'carouselImageSize', relation: '==', value: 'custom' }],
				selector: '{{QUBELY}} .qubely-block-image-carousel .qubely-image-item img {width: {{imageWidth}};}'
			}]
		},
		avatarHeight: {
			type: 'string',
			default: { md: 100, unit: '%' },
			style: [{
				condition: [{ key: 'carouselImageSize', relation: '==', value: 'custom' }],
				selector: '{{QUBELY}} .qubely-block-image-carousel .qubely-image-item img {height: {{avatarHeight}};}'
			}]
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
		showGlobalSettings: { type: 'boolean', default: true } }, globalAttributes),

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
    InlineToolbar = _wp$qubelyComponents.Inline.InlineToolbar,
    _wp$qubelyComponents$ = _wp$qubelyComponents.gloalSettings,
    globalSettingsPanel = _wp$qubelyComponents$.globalSettingsPanel,
    animationSettings = _wp$qubelyComponents$.animationSettings,
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator;


var CATEGORIES_LIST_QUERY = { per_page: -1 };

var Edit = function (_Component) {
	_inherits(Edit, _Component);

	function Edit() {
		_classCallCheck(this, Edit);

		var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));

		_this.renderFeaturedImage = function (post) {
			var _this$props$attribute = _this.props.attributes,
			    style = _this$props$attribute.style,
			    imgSize = _this$props$attribute.imgSize,
			    imageAnimation = _this$props$attribute.imageAnimation,
			    showCategory = _this$props$attribute.showCategory,
			    categoryPosition = _this$props$attribute.categoryPosition;

			return React.createElement(
				Fragment,
				null,
				showCategory == 'badge' && style === 4 && React.createElement(
					'div',
					{ className: 'qubely-postgrid-cat-position qubely-postgrid-cat-position-' + categoryPosition },
					React.createElement('span', { className: 'qubely-postcarousel-category', dangerouslySetInnerHTML: { __html: post.qubely_category } })
				),
				React.createElement(
					'div',
					{ className: 'qubely-post-grid-img qubely-post-img qubely-post-img-' + imageAnimation },
					React.createElement('img', { className: 'qubely-post-image', src: post.qubely_featured_image_url && post.qubely_featured_image_url[imgSize][0] }),
					showCategory == 'badge' && style != 4 && React.createElement(
						'div',
						{ className: 'qubely-postcarousel-cat-position qubely-postcarousel-cat-position-' + categoryPosition },
						React.createElement('span', { className: 'qubely-postcarousel-category qubely-backend', dangerouslySetInnerHTML: { __html: post.qubely_category } })
					)
				)
			);
		};

		_this.renderCardContent = function (post) {
			var _this$props$attribute2 = _this.props.attributes,
			    contentPosition = _this$props$attribute2.contentPosition,
			    readmoreStyle = _this$props$attribute2.readmoreStyle,
			    showCategory = _this$props$attribute2.showCategory,
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
			    posts = _props2.posts,
			    taxonomyList = _props2.taxonomyList,
			    setAttributes = _props2.setAttributes,
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
			    stackBorderRadius = _props2$attributes.stackBorderRadius,
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
			    overlayBorderRadius = _props2$attributes.overlayBorderRadius,
			    contentPadding = _props2$attributes.contentPadding,
			    titleSpace = _props2$attributes.titleSpace,
			    categorySpace = _props2$attributes.categorySpace,
			    metaSpace = _props2$attributes.metaSpace,
			    excerptSpace = _props2$attributes.excerptSpace,
			    globalZindex = _props2$attributes.globalZindex,
			    enablePosition = _props2$attributes.enablePosition,
			    selectPosition = _props2$attributes.selectPosition,
			    positionXaxis = _props2$attributes.positionXaxis,
			    positionYaxis = _props2$attributes.positionYaxis,
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
			    dotPosition = _props2$attributes.dotPosition,
			    dots = _props2$attributes.dots,
			    dotwidth = _props2$attributes.dotwidth,
			    dotHeight = _props2$attributes.dotHeight,
			    dotBorderRadius = _props2$attributes.dotBorderRadius,
			    dotColor = _props2$attributes.dotColor,
			    dotActiveColor = _props2$attributes.dotActiveColor,
			    gutterspace = _props2$attributes.gutterspace,
			    sliderItemsSpace = _props2$attributes.sliderItemsSpace,
			    sliderItemMargin = _props2$attributes.sliderItemMargin,
			    dotalignment = _props2$attributes.dotalignment,
			    textalignment = _props2$attributes.textalignment,
			    animation = _props2$attributes.animation;
			var device = this.state.device;


			if (uniqueId) {
				CssGenerator(this.props.attributes, 'postcarousel', uniqueId);
			}

			var carouselSettings = {
				nav: nav,
				dots: dots,
				margin: sliderItemMargin,
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
						}), _React$createElement)),
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
								return _this3.setState({ device: value });
							}
						}),
						React.createElement(Range, {
							label: __('Margin'),
							value: sliderItemMargin,
							onChange: function onChange(value) {
								return setAttributes({ sliderItemMargin: parseInt(value) });
							},
							min: 0, max: 100
						})
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
								label: __('Dot Position'),
								value: dotPosition, onChange: function onChange(value) {
									return setAttributes({ dotPosition: value });
								},
								min: -200, max: 200,
								responsive: true, unit: ['px', 'em', '%'],
								device: device,
								onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								}
							}),
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
							React.createElement(ButtonGroup, {
								label: __('Dot Alignment'),
								options: [[__('Left'), 'left'], [__('Middle'), 'center'], [__('Right'), 'right']],
								value: dotalignment,
								onChange: function onChange(value) {
									return setAttributes({ dotalignment: value });
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
						style != 3 && React.createElement(ButtonGroup, {
							label: __('Content Align'),
							options: [[__('Left'), 'left'], [__('Middle'), 'center'], [__('Right'), 'right']],
							value: contentPosition,
							onChange: function onChange(value) {
								return setAttributes({ contentPosition: value });
							}
						}),
						(style === 3 || style === 4) && React.createElement(ButtonGroup, {
							label: __('Content Position'),
							options: style === 3 ? [[__('Left'), 'left'], [__('Middle'), 'center'], [__('Right'), 'right']] : [[__('Top'), 'top'], [__('Middle'), 'center'], [__('Bottom'), 'bottom']],
							value: style === 3 ? contentPosition : girdContentPosition,
							onChange: function onChange(value) {
								return setAttributes(style === 3 ? { contentPosition: value } : { girdContentPosition: value });
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
							}
						}),
						style === 4 && React.createElement(Select, { label: __('Hover Effect'), options: [['none', __('No Animation')], ['slide-top', __('Slide From Top')], ['slide-right', __('Slide From Right')], ['slide-bottom', __('Slide From Bottom')], ['slide-left', __('Slide From Left')], ['zoom-in', __('Zoom In')], ['zoom-out', __('Zoom Out')]], value: imageAnimation, onChange: function onChange(val) {
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
						React.createElement(ButtonGroup, {
							label: __('Text Align'),
							options: [[__('Left'), 'left'], [__('Middle'), 'center'], [__('Right'), 'right']],
							value: textalignment,
							onChange: function onChange(value) {
								return setAttributes({ textalignment: value });
							}
						}),
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
					),
					animationSettings(uniqueId, animation, setAttributes)
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
				globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes),
				React.createElement(
					'div',
					{ className: 'qubely-block-' + uniqueId },
					posts && posts.length ? React.createElement(
						'div',
						{ className: 'qubely-block-image-carousel qubely-postcarousel-wrapper' },
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
											{ className: 'qubely-post-grid-wrapper qubely-post-grid-' + (style === 3 ? contentPosition : girdContentPosition) },
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


var _registerBlockType;

__webpack_require__(/*! ./style.scss */ "./src/blocks/postcarousel/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/postcarousel/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('qubely/postcarousel', (_registerBlockType = {
	title: __('Post Carousel'),
	description: 'Blog post carousel',
	icon: 'image-flip-horizontal'
}, _defineProperty(_registerBlockType, 'icon', React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/block-post-carousel.svg', alt: __('Post Carousel Block') })), _defineProperty(_registerBlockType, 'category', 'qubely'), _defineProperty(_registerBlockType, 'keywords', [__('Post'), __('Blog Post Carousel')]), _defineProperty(_registerBlockType, 'edit', _Edit2.default), _defineProperty(_registerBlockType, 'save', function save(props) {
	return null;
}), _registerBlockType));

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
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator,
    _wp$qubelyComponents$ = _wp$qubelyComponents.gloalSettings,
    globalSettingsPanel = _wp$qubelyComponents$.globalSettingsPanel,
    animationSettings = _wp$qubelyComponents$.animationSettings,
    interactionSettings = _wp$qubelyComponents$.interactionSettings,
    InlineToolbar = _wp$qubelyComponents.Inline.InlineToolbar;


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
				Fragment,
				null,
				showCategory == 'badge' && style === 4 && React.createElement(
					'div',
					{ className: 'qubely-postgrid-cat-position qubely-postgrid-cat-position-' + categoryPosition },
					React.createElement('span', { className: 'qubely-postgrid-category', dangerouslySetInnerHTML: { __html: post.qubely_category } })
				),
				React.createElement(
					'div',
					{ className: (layout === 1 ? 'qubely-post-list-img' : 'qubely-post-grid-img') + ' qubely-post-img qubely-post-img-' + imageAnimation },
					React.createElement('img', { className: 'qubely-post-image', src: post.qubely_featured_image_url && post.qubely_featured_image_url[imgSize][0] }),
					showCategory == 'badge' && style != 4 && React.createElement(
						'div',
						{ className: 'qubely-postgrid-cat-position qubely-postgrid-cat-position-' + categoryPosition },
						React.createElement('span', { className: 'qubely-postgrid-category', dangerouslySetInnerHTML: { __html: post.qubely_category } })
					)
				)
			);
		};

		_this.renderCardContent = function (post) {
			var _this$props$attribute2 = _this.props.attributes,
			    layout = _this$props$attribute2.layout,
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
				showCategory === 'default' && React.createElement('span', { className: 'qubely-postgrid-category', dangerouslySetInnerHTML: { __html: post.qubely_category } }),
				showTitle && titlePosition == true && title,
				(showAuthor || showDates || showComment) && React.createElement(
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
				showExcerpt && React.createElement('div', { className: 'qubely-postgrid-intro', dangerouslySetInnerHTML: { __html: _this.truncate(post.excerpt.rendered, excerptLimit) } }),
				showReadMore && React.createElement(
					'div',
					{ className: 'qubely-postgrid-btn-wrapper' },
					React.createElement(
						'a',
						{ className: 'qubely-postgrid-btn qubely-button-' + readmoreStyle + ' is-' + readmoreSize },
						buttonText
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
			    posts = _props2.posts,
			    taxonomyList = _props2.taxonomyList,
			    setAttributes = _props2.setAttributes,
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
			    fixedSmallHeight = _props2$attributes.fixedSmallHeight,
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
			    categoryPosition = _props2$attributes.categoryPosition,
			    showExcerpt = _props2$attributes.showExcerpt,
			    excerptLimit = _props2$attributes.excerptLimit,
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
			    overlaySmallHeight = _props2$attributes.overlaySmallHeight,
			    overlaySpace = _props2$attributes.overlaySpace,
			    overlayBorderRadius = _props2$attributes.overlayBorderRadius,
			    columnGap = _props2$attributes.columnGap,
			    contentPadding = _props2$attributes.contentPadding,
			    titleSpace = _props2$attributes.titleSpace,
			    imageSpace = _props2$attributes.imageSpace,
			    categorySpace = _props2$attributes.categorySpace,
			    metaSpace = _props2$attributes.metaSpace,
			    excerptSpace = _props2$attributes.excerptSpace,
			    globalZindex = _props2$attributes.globalZindex,
			    enablePosition = _props2$attributes.enablePosition,
			    selectPosition = _props2$attributes.selectPosition,
			    positionXaxis = _props2$attributes.positionXaxis,
			    positionYaxis = _props2$attributes.positionYaxis,
			    hideTablet = _props2$attributes.hideTablet,
			    hideMobile = _props2$attributes.hideMobile,
			    globalCss = _props2$attributes.globalCss,
			    animation = _props2$attributes.animation,
			    interaction = _props2$attributes.interaction;
			var device = this.state.device;


			if (uniqueId) {
				CssGenerator(this.props.attributes, 'postgrid', uniqueId);
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
							options: [{ value: 1, svg: _icons2.default.postgrid_1, label: __('') }, { value: 2, svg: _icons2.default.postgrid_2, label: __('') }, { value: 3, svg: _icons2.default.postgrid_3, label: __('') }, { value: 4, svg: _icons2.default.postgrid_4, label: __('') }, { value: 5, svg: _icons2.default.postgrid_5, label: __('') }],
							value: layout,
							onChange: function onChange(val) {
								return setAttributes({ layout: val });
							}
						})
					),
					React.createElement(
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
						(layout === 1 || layout != 1 && (style === 3 || style === 4)) && React.createElement(ButtonGroup, {
							label: __('Content Align'),
							options: layout != 1 && style === 3 ? [[__('Left'), 'left'], [__('Middle'), 'center'], [__('Right'), 'right']] : [[__('Top'), 'top'], [__('Middle'), 'center'], [__('Bottom'), 'bottom']],
							value: layout != 1 && style === 3 ? contentPosition : girdContentPosition,
							onChange: function onChange(value) {
								return setAttributes(layout != 1 && style === 3 ? { contentPosition: value } : { girdContentPosition: value });
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
							(layout === 5 || layout === 3) && React.createElement(Range, { label: __('Overlay Small Height'), value: overlaySmallHeight, onChange: function onChange(value) {
									return setAttributes({ overlaySmallHeight: value });
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
						style != 4 && React.createElement(
							Fragment,
							null,
							React.createElement(Toggle, { label: __('Fixed Image Height'), value: enableFixedHeight, onChange: function onChange(value) {
									return setAttributes({ enableFixedHeight: value });
								} }),
							enableFixedHeight && React.createElement(Range, { label: __('large Image'), value: fixedHeight, onChange: function onChange(value) {
									return setAttributes({ fixedHeight: value });
								}, unit: ['px', 'em', '%'], min: 10, max: 1000, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} }),
							enableFixedHeight && (layout === 5 || layout === 3) && React.createElement(Range, { label: __('Small Image'), value: fixedSmallHeight, onChange: function onChange(value) {
									return setAttributes({ fixedSmallHeight: value });
								}, unit: ['px', 'em', '%'], min: 10, max: 400, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
									return _this3.setState({ device: value });
								} })
						),
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
						style === 4 && React.createElement(Select, { label: __('Hover Effect'), options: [['none', __('No Animation')], ['slide-top', __('Slide From Top')], ['slide-right', __('Slide From Right')], ['slide-bottom', __('Slide From Bottom')], ['slide-left', __('Slide From Left')], ['zoom-in', __('Zoom In')], ['zoom-out', __('Zoom Out')]], value: imageAnimation, onChange: function onChange(val) {
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
						{ title: __('Category'), initialOpen: false },
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
							layout !== 2 && showCategory == 'badge' && React.createElement(Select, {
								label: __("Badge Position"),
								options: [['leftTop', __('Left Top')], ['rightTop', __('Right Top')], ['leftBottom', __('Left Bottom')], ['rightBottom', __('Right Bottom')]],
								value: categoryPosition,
								onChange: function onChange(value) {
									return setAttributes({ categoryPosition: value });
								}
							}),
							layout === 2 && showCategory == 'badge' && React.createElement(
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
						(layout === 2 || layout === 5) && React.createElement(Range, { label: __('Column Gap'), value: columnGap, onChange: function onChange(value) {
								return setAttributes({ columnGap: value });
							}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						showCategory == 'default' && React.createElement(Range, { label: __('Category'), value: categorySpace, onChange: function onChange(value) {
								return setAttributes({ categorySpace: value });
							}, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
								return _this3.setState({ device: value });
							} }),
						(layout != 1 && style === 1 || style === 2) && React.createElement(Range, { label: __('Image'), value: imageSpace, onChange: function onChange(value) {
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
						React.createElement(Typography, { label: __('Excerpt'), value: excerptTypography, onChange: function onChange(value) {
								return setAttributes({ excerptTypography: value });
							}, device: device, onDeviceChange: function onDeviceChange(value) {
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
					),
					animationSettings(uniqueId, animation, setAttributes),
					interactionSettings(uniqueId, interaction, setAttributes)
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
				globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes),
				React.createElement(
					'div',
					{ className: 'qubely-block-' + uniqueId },
					posts && posts.length ? React.createElement(
						'div',
						{ className: 'qubely-postgrid-wrapper qubely-postgrid-layout-' + layout + ' ' + (layout === 2 || layout === 3 || layout === 4 ? 'qubely-postgrid-column qubely-postgrid-column-md' + column.md + ' ' + 'qubely-postgrid-column-sm' + column.sm + ' ' + 'qubely-postgrid-column-xs' + column.xs : '') },
						posts && posts.map(function (post, index) {
							return React.createElement(
								'div',
								{ className: 'qubely-postgrid ' + (layout === 1 ? 'qubely-post-list-view' : 'qubely-post-grid-view') + ' qubely-postgrid-style-' + style + ' ' + (layout == 5 && index == 0 || layout == 3 && index == 0 ? 'qubely-post-large-view' : 'qubely-post-small-view') },
								React.createElement(
									'div',
									{ className: '' + (layout === 1 ? 'qubely-post-list-wrapper qubely-post-list-' + (layout != 1 && style === 3 ? contentPosition : girdContentPosition) : 'qubely-post-grid-wrapper qubely-post-grid-' + (layout != 1 && style === 3 ? contentPosition : girdContentPosition)) },
									showImages && post.qubely_featured_image_url && _this3.renderFeaturedImage(post),
									_this3.renderCardContent(post)
								)
							);
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
	description: __('Fetch blog posts and display them beautifully in grid or list views with Qubely Postgrid Block.'),
	icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/block-post-grid.svg', alt: __('Post Grid Block') }),
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
    Background = _wp$qubelyComponents.Background,
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
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator,
    _wp$qubelyComponents$ = _wp$qubelyComponents.gloalSettings,
    globalSettingsPanel = _wp$qubelyComponents$.globalSettingsPanel,
    animationSettings = _wp$qubelyComponents$.animationSettings,
    interactionSettings = _wp$qubelyComponents$.interactionSettings;

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
                mediaType = _this$props$attribute2.mediaType,
                enableMedia = _this$props$attribute2.enableMedia,
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
                    digitText = _ref.digitText,
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
                            React.createElement('span', { 'class': 'dashicons dashicons-no-alt' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-pricelist-content' },
                        enableMedia == 1 && mediaType == 'image' && React.createElement(
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
                        enableMedia == 1 && mediaType == 'digit' && React.createElement(
                            'div',
                            { className: 'qubely-pricelist-media-digit' },
                            React.createElement(
                                'div',
                                { className: 'qubely-pricelist-digit' },
                                React.createElement(RichText, {
                                    placeholder: __('01'),
                                    tagName: 'div',
                                    className: 'qubely-pricelist-digit',
                                    value: digitText,
                                    onChange: function onChange(value) {
                                        return _this.updatePricelistContent('digitText', value, index);
                                    },
                                    keepPlaceholderOnFocus: true
                                })
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
                column = _props2$attributes.column,
                columnGap = _props2$attributes.columnGap,
                headingLevel = _props2$attributes.headingLevel,
                priceAfterTitle = _props2$attributes.priceAfterTitle,
                headingTypography = _props2$attributes.headingTypography,
                headingColor = _props2$attributes.headingColor,
                headingWhiteColor = _props2$attributes.headingWhiteColor,
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
                overlayContentBg = _props2$attributes.overlayContentBg,
                overlayHoverBg = _props2$attributes.overlayHoverBg,
                overlayBg = _props2$attributes.overlayBg,
                height = _props2$attributes.height,
                enableLine = _props2$attributes.enableLine,
                lineBorderWidth = _props2$attributes.lineBorderWidth,
                lineBorderColor = _props2$attributes.lineBorderColor,
                lineBorderStyle = _props2$attributes.lineBorderStyle,
                badgePosition = _props2$attributes.badgePosition,
                enableMedia = _props2$attributes.enableMedia,
                mediaType = _props2$attributes.mediaType,
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
                digitColor = _props2$attributes.digitColor,
                digitBg = _props2$attributes.digitBg,
                digitSize = _props2$attributes.digitSize,
                digitBorderRadius = _props2$attributes.digitBorderRadius,
                digitSpacing = _props2$attributes.digitSpacing,
                digitTypography = _props2$attributes.digitTypography,
                enablePrice = _props2$attributes.enablePrice,
                priceTypography = _props2$attributes.priceTypography,
                priceColor = _props2$attributes.priceColor,
                priceWhiteColor = _props2$attributes.priceWhiteColor,
                enableDescription = _props2$attributes.enableDescription,
                descriptionTypography = _props2$attributes.descriptionTypography,
                descriptionColor = _props2$attributes.descriptionColor,
                descriptionWhiteColor = _props2$attributes.descriptionWhiteColor,
                enableDiscount = _props2$attributes.enableDiscount,
                discountTypography = _props2$attributes.discountTypography,
                discountColor = _props2$attributes.discountColor,
                discountWhiteColor = _props2$attributes.discountWhiteColor,
                globalZindex = _props2$attributes.globalZindex,
                enablePosition = _props2$attributes.enablePosition,
                selectPosition = _props2$attributes.selectPosition,
                positionXaxis = _props2$attributes.positionXaxis,
                positionYaxis = _props2$attributes.positionYaxis,
                hideTablet = _props2$attributes.hideTablet,
                hideMobile = _props2$attributes.hideMobile,
                globalCss = _props2$attributes.globalCss,
                animation = _props2$attributes.animation,
                interaction = _props2$attributes.interaction;
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
                        React.createElement(Range, { label: __('Select Column'), value: column, onChange: function onChange(value) {
                                return setAttributes({ column: value });
                            }, min: 1, step: 1, max: 3, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                                return _this2.setState({ device: value });
                            } }),
                        React.createElement(Range, { label: __('Column Gap'), value: columnGap, onChange: function onChange(value) {
                                return setAttributes({ columnGap: value });
                            }, unit: ['px', 'em', '%'], min: 0, max: 100, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                                return _this2.setState({ device: value });
                            } }),
                        React.createElement(Toggle, { label: __('Price After Title'), value: priceAfterTitle, onChange: function onChange(val) {
                                return setAttributes({ priceAfterTitle: val });
                            } })
                    ),
                    React.createElement(
                        PanelBody,
                        { title: __('Price List Layouts'), initialOpen: false },
                        enableMedia == 1 && mediaType == 'image' ? React.createElement(Styles, { columns: 3, value: style, onChange: function onChange(val) {
                                return setAttributes({ style: val });
                            },
                            options: [{ value: 1, svg: _icons2.default.postgrid_design_1 }, { value: 2, svg: _icons2.default.postgrid_design_3 }, { value: 3, svg: _icons2.default.postgrid_design_6 }]
                        }) : React.createElement(Styles, { columns: 2, value: style, onChange: function onChange(val) {
                                return setAttributes({ style: val });
                            },
                            options: [{ value: 1, svg: _icons2.default.postgrid_design_1 }, { value: 2, svg: _icons2.default.postgrid_design_3 }]
                        }),
                        React.createElement(Alignment, { label: __('Alignment'), value: contentAlign, onChange: function onChange(val) {
                                return setAttributes({ contentAlign: val });
                            }, alignmentType: 'content', disableJustify: true }),
                        style != 3 && React.createElement(
                            Fragment,
                            null,
                            React.createElement(Background, { label: __('Background'), sources: ['image', 'gradient'], parallax: true, value: contentBg, onChange: function onChange(val) {
                                    return setAttributes({ contentBg: val });
                                } }),
                            style == 2 && React.createElement(ColorAdvanced, { label: __('Overlay'), value: overlayContentBg, onChange: function onChange(value) {
                                    return setAttributes({ overlayContentBg: value });
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
                        enableMedia == 1 && mediaType == 'image' && style === 3 && React.createElement(
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
                        enableMedia == 1 && mediaType == 'image' && style === 3 && React.createElement(Range, { label: __('Height'), value: height, onChange: function onChange(val) {
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
                        { title: __('Media'), initialOpen: false },
                        React.createElement(Toggle, { label: __('Enable'), value: enableMedia, onChange: function onChange(val) {
                                return setAttributes({ enableMedia: val });
                            } }),
                        enableMedia == 1 && React.createElement(RadioAdvanced, { label: __('Media Type'), value: mediaType, onChange: function onChange(value) {
                                return setAttributes({ mediaType: value });
                            },
                            options: [{ label: __('Image'), value: 'image', title: __('Image') }, { label: __('Digit'), value: 'digit', title: __('Digit') }]
                        }),
                        enableMedia == 1 && style != 3 && React.createElement(
                            Fragment,
                            null,
                            React.createElement(RadioAdvanced, { label: __('Position'), value: imagePosition, onChange: function onChange(value) {
                                    return setAttributes({ imagePosition: value });
                                },
                                options: [{ label: __('Left'), value: 'left', title: __('Left') }, { label: __('Top'), value: 'top', title: __('Top') }]
                            }),
                            enableMedia == 1 && mediaType == 'image' && React.createElement(
                                Fragment,
                                null,
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
                        enableMedia == 1 && mediaType == 'digit' && React.createElement(
                            Fragment,
                            null,
                            React.createElement(Typography, { label: __('Typography'), value: digitTypography, onChange: function onChange(val) {
                                    return setAttributes({ digitTypography: val });
                                }, device: device, onDeviceChange: function onDeviceChange(value) {
                                    return _this2.setState({ device: value });
                                } }),
                            React.createElement(Color, { label: __('Color'), value: digitColor, onChange: function onChange(value) {
                                    return setAttributes({ digitColor: value });
                                } }),
                            React.createElement(Color, { label: __('Background Color'), value: digitBg, onChange: function onChange(value) {
                                    return setAttributes({ digitBg: value });
                                } }),
                            React.createElement(Range, { label: __('Size'), value: digitSize, onChange: function onChange(val) {
                                    return setAttributes({ digitSize: val });
                                }, min: 0, max: 500, responsive: true, unit: ['px', 'em', '%'], device: device, onDeviceChange: function onDeviceChange(value) {
                                    return _this2.setState({ device: value });
                                } }),
                            React.createElement(BorderRadius, { label: __('Radius'), value: digitBorderRadius, onChange: function onChange(val) {
                                    return setAttributes({ digitBorderRadius: val });
                                }, min: 0, max: 100, unit: ['px', 'em', '%'], responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                                    return _this2.setState({ device: value });
                                } }),
                            React.createElement(Range, { label: __('Spacing'), value: digitSpacing, onChange: function onChange(val) {
                                    return setAttributes({ digitSpacing: val });
                                }, min: 0, max: 100, responsive: true, unit: ['px', 'em', '%'], device: device, onDeviceChange: function onDeviceChange(value) {
                                    return _this2.setState({ device: value });
                                } })
                        )
                    ),
                    enableMedia == 1 && mediaType == 'image' && React.createElement(
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
                        React.createElement(Color, {
                            label: __('Heading Color'),
                            value: style != '3' ? headingColor : headingWhiteColor,
                            onChange: function onChange(val) {
                                return setAttributes(style != '3' ? { headingColor: val } : { headingWhiteColor: val });
                            }
                        }),
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
                            React.createElement(Color, {
                                label: __('Description Color'),
                                value: style != '3' ? descriptionColor : descriptionWhiteColor,
                                onChange: function onChange(val) {
                                    return setAttributes(style != '3' ? { descriptionColor: val } : { descriptionWhiteColor: val });
                                }
                            })
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
                            React.createElement(Color, {
                                label: __('Price Color'),
                                value: style != '3' ? priceColor : priceWhiteColor,
                                onChange: function onChange(val) {
                                    return setAttributes(style != '3' ? { priceColor: val } : { priceWhiteColor: val });
                                }
                            })
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
                            React.createElement(Color, {
                                label: __('Discount Color'),
                                value: style != '3' ? discountColor : discountWhiteColor,
                                onChange: function onChange(val) {
                                    return setAttributes(style != '3' ? { discountColor: val } : { discountWhiteColor: val });
                                }
                            })
                        )
                    ),
                    animationSettings(uniqueId, animation, setAttributes),
                    interactionSettings(uniqueId, interaction, setAttributes)
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
                globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes),
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
var _wp$qubelyComponents$ = wp.qubelyComponents.HelperFunction,
    animationAttr = _wp$qubelyComponents$.animationAttr,
    IsInteraction = _wp$qubelyComponents$.IsInteraction;

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
                enableMedia = _this$props$attribute.enableMedia,
                mediaType = _this$props$attribute.mediaType,
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
                    digitText = _ref2.digitText,
                    price = _ref2.price;

                return React.createElement(
                    'div',
                    { key: index, className: 'qubely-pricelist-item qubely-pricelist-item-' + contentAlign },
                    React.createElement(
                        'div',
                        { className: 'qubely-pricelist-content' },
                        enableMedia == 1 && mediaType == 'image' && image != undefined && image.url != undefined && React.createElement(
                            'div',
                            { className: 'qubely-pricelist-image-container' },
                            React.createElement('img', { src: image.url, alt: title }),
                            enableBadge && badge && React.createElement(RichText.Content, { tagName: 'div', className: 'qubely-pricelist-badge', value: badge })
                        ),
                        enableMedia == 1 && mediaType == 'digit' && digitText && React.createElement(
                            'div',
                            { className: 'qubely-pricelist-media-digit' },
                            React.createElement(
                                'div',
                                { className: 'qubely-pricelist-digit' },
                                React.createElement(RichText.Content, { tagName: 'div', className: 'qubely-pricelist-discount', value: digitText })
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
                                    React.createElement(RichText.Content, { tagName: titleTagName, className: 'qubely-pricelist-title', value: title }),
                                    enableLine && priceAfterTitle == 0 && React.createElement('span', { className: 'qubely-pricelist-line' }),
                                    React.createElement(
                                        'div',
                                        { className: 'qubely-pricelist-price-wrapper' },
                                        enableDiscount && discount && React.createElement(RichText.Content, { tagName: 'div', className: 'qubely-pricelist-discount', value: discount }),
                                        enablePrice && price && React.createElement(RichText.Content, { tagName: 'div', className: 'qubely-pricelist-price', value: price })
                                    )
                                ),
                                enableDescription && description && React.createElement(RichText.Content, { tagName: 'div', className: 'qubely-pricelist-introtext', value: description })
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
                interaction = _props$attributes.interaction;

            var interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';
            return React.createElement(
                'div',
                _extends({ className: 'qubely-block-' + uniqueId }, animationAttr(animation)),
                React.createElement(
                    'div',
                    { className: 'qubely-block-pricelist ' + interactionClass + ' qubely-pricelist-item-' + style },
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


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! ./style.scss */ "./src/blocks/pricelist/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/pricelist/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/pricelist/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var globalAttributes = wp.qubelyComponents.gloalSettings.globalAttributes;


registerBlockType('qubely/pricelist', {
    title: __('Price List'),
    category: 'qubely',
    description: __('Showcase detailed with Qubely Price List.'),
    icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/block-testimonial-carousel.svg', alt: __('Price List') }),
    keywords: [__('Price List'), __('Pricing')],
    attributes: _extends({
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
            default: [{ title: 'Qubely Blocks', digitText: '01', badge: 'Hot', price: '$20.00', discount: '$10', description: 'Qubely offers a rich collection of highly customizable dedicated Gutenberg blocks.' }, { title: 'Pre-made Sections', digitText: '02', badge: 'Hot', price: '$30.00', discount: '$15', description: 'Qubely has a rich library of ready sections that can be imported and used as blocks on the Gutenberg.' }, { title: 'Rich Blocks Collection', digitText: '03', badge: 'Hot', price: '$40.00', discount: '$25', description: 'Get a rich collection of blocks that are highly customizable and easy to use.' }, { title: 'Layout Packs', digitText: '04', badge: 'Hot', price: '$50.00', discount: '$35', description: 'Qubely gives you many beautiful template layouts completely free of cost. These can also customize.' }]
        },

        // Content
        column: {
            type: 'object',
            default: {
                md: '2'
            },
            style: [{
                selector: '{{QUBELY}} .qubely-pricelist-items {grid-template-columns: repeat({{column}}, 1fr);}'
            }]
        },
        columnGap: {
            type: 'object',
            default: {
                md: '20',
                unit: 'px'
            },
            style: [{
                selector: '{{QUBELY}} .qubely-pricelist-items {grid-gap: {{columnGap}};}'
            }]
        },
        style: {
            type: 'number',
            default: 2
        },
        contentAlign: {
            type: 'string',
            default: 'left'
        },
        overlayContentBg: {
            type: 'object', default: {
                type: 'color',
                openColor: 0,
                color: 'rgba(6, 80, 183, 0.7)',
                gradient: { color1: '#1066CC', color2: '#2184F9', direction: 0, start: 0, stop: 100 }
            },
            style: [{
                condition: [{ key: 'style', relation: '==', value: '2' }],
                selector: '{{QUBELY}} .qubely-pricelist-content:before'
            }]
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
            type: 'object',
            default: {
                openBg: 1,
                bgDefaultColor: '#f5f5f5'
            },
            style: [{
                condition: [{ key: 'style', relation: '===', value: '1' }],
                selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-1'
            }, {
                condition: [{ key: 'style', relation: '===', value: '2' }],
                selector: '{{QUBELY}} .qubely-pricelist-item-2 .qubely-pricelist-content'
            }]
        },
        height: {
            type: 'object',
            default: {
                md: '150',
                unit: 'px'
            },
            style: [{
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'style', relation: '===', value: '3' }, { key: 'mediaType', relation: '==', value: 'image' }],
                selector: '{{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-content, {{QUBELY}} .qubely-block-pricelist.qubely-pricelist-item-3 .qubely-pricelist-image-container .qubely-empty-image {height: {{height}};}'
            }]
        },
        contentSpacing: {
            type: 'object',
            default: {
                md: 0,
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
                    md: 20
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
                openShadow: false,
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
                selector: '{{QUBELY}} .qubely-pricelist-item .qubely-pricelist-image-container:before'
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
                selector: '{{QUBELY}} .qubely-pricelist-item:hover .qubely-pricelist-image-container:before'
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
            default: '#e5e5e5',
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
            style: [{
                condition: [{ key: 'style', relation: '!=', value: '3' }],
                selector: '{{QUBELY}} .qubely-pricelist-title {color: {{headingColor}};}'
            }]
        },
        headingWhiteColor: {
            type: 'string',
            default: '#fff',
            style: [{
                condition: [{ key: 'style', relation: '==', value: '3' }],
                selector: '{{QUBELY}} .qubely-pricelist-title {color: {{headingWhiteColor}};}'
            }]
        },
        headingSpacing: {
            type: 'object',
            default: {
                md: 1,
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
        // descriptionColor: {
        // 	type: 'string',
        // 	default: '',
        // 	style: [
        //         {
        // 			condition: [
        //                 { key: 'enableDescription', relation: '==', value: true }
        //             ],
        //             selector: '{{QUBELY}} .qubely-pricelist-introtext {color: {{descriptionColor}};}'
        //         }
        //     ]
        // },

        descriptionColor: {
            type: 'string',
            default: '',
            style: [{
                condition: [{ key: 'style', relation: '!=', value: '3' }, { key: 'enableDescription', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-pricelist-introtext {color: {{descriptionColor}};}'
            }]
        },
        descriptionWhiteColor: {
            type: 'string',
            default: '#fff',
            style: [{
                condition: [{ key: 'style', relation: '==', value: '3' }, { key: 'enableDescription', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-pricelist-introtext {color: {{descriptionWhiteColor}};}'
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
                condition: [{ key: 'style', relation: '!=', value: '3' }, { key: 'enableDiscount', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-pricelist-discount {color: {{discountColor}};}'
            }]
        },
        discountWhiteColor: {
            type: 'string',
            default: '#fff',
            style: [{
                condition: [{ key: 'style', relation: '==', value: '3' }, { key: 'enableDiscount', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-pricelist-discount {color: {{discountWhiteColor}};}'
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
                condition: [{ key: 'style', relation: '!=', value: '3' }, { key: 'enablePrice', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-pricelist-price {color: {{priceColor}};}'
            }]
        },
        priceWhiteColor: {
            type: 'string',
            default: '#fff',
            style: [{
                condition: [{ key: 'style', relation: '==', value: '3' }, { key: 'enablePrice', relation: '==', value: true }],
                selector: '{{QUBELY}} .qubely-pricelist-price {color: {{priceWhiteColor}};}'
            }]
        },

        //Badge
        enableBadge: {
            type: 'boolean',
            default: false
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
        // enableImage: {
        // 	type: 'boolean',
        // 	default: true,
        // },
        enableMedia: {
            type: 'boolean',
            default: true
        },
        mediaType: {
            type: 'string',
            default: 'image'
        },
        imagePosition: {
            type: 'string',
            default: 'left',
            style: [{
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'imagePosition', relation: '==', value: 'left' }, { key: 'style', relation: '!=', value: '3' }],
                selector: '{{QUBELY}} .qubely-pricelist-content {display: -webkit-box; display: -ms-flexbox; display: flex;}'
            }]
        },
        imageBorderRadius: {
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
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'style', relation: '!=', value: '3' }, { key: 'mediaType', relation: '==', value: 'image' }],
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
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'style', relation: '!=', value: '3' }, { key: 'mediaType', relation: '==', value: 'image' }],
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
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'imagePosition', relation: '==', value: 'left' }, { key: 'mediaType', relation: '==', value: 'image' }, { key: 'style', relation: '!=', value: '3' }, { key: 'contentAlign', relation: '!=', value: 'left' }],
                selector: '{{QUBELY}} .qubely-pricelist-description-wrapper {margin-right: {{imageSpacing}};}'
            }, {
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'imagePosition', relation: '==', value: 'left' }, { key: 'mediaType', relation: '==', value: 'image' }, { key: 'style', relation: '!=', value: '3' }, { key: 'contentAlign', relation: '==', value: 'left' }],
                selector: '{{QUBELY}} .qubely-pricelist-image-container {margin-right: {{imageSpacing}};}'
            }, {
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'imagePosition', relation: '==', value: 'top' }, { key: 'mediaType', relation: '==', value: 'image' }, { key: 'style', relation: '!=', value: '3' }],
                selector: '{{QUBELY}} .qubely-pricelist-image-container {margin-bottom: {{imageSpacing}};}'
            }]
        },

        //digit
        digitTypography: {
            type: 'object',
            default: { openTypography: 1, size: { md: 12, unit: 'px' } },
            style: [{
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'mediaType', relation: '==', value: 'digit' }],
                selector: '{{QUBELY}} .qubely-pricelist-digit'
            }]
        },
        digitColor: {
            type: 'string',
            default: '#fff',
            style: [{
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'mediaType', relation: '==', value: 'digit' }],
                selector: '{{QUBELY}} .qubely-pricelist-digit {color: {{digitColor}};}'
            }]
        },
        digitBg: {
            type: 'string',
            default: '#2184F9',
            style: [{
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'mediaType', relation: '==', value: 'digit' }],
                selector: '{{QUBELY}} .qubely-pricelist-digit {background: {{digitBg}};}'
            }]
        },
        digitSize: {
            type: 'object',
            default: {
                md: '40',
                unit: 'px'
            },
            style: [{
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'mediaType', relation: '==', value: 'digit' }, { key: 'style', relation: '!=', value: '3' }],
                selector: '{{QUBELY}} .qubely-pricelist-digit {text-align:center; width: {{digitSize}};} {{QUBELY}} .qubely-pricelist-digit {height: {{digitSize}};} {{QUBELY}} .qubely-pricelist-digit {line-height: {{digitSize}};}'
            }]
        },
        digitBorderRadius: {
            type: 'object',
            default: {
                openBorderRadius: 1,
                radiusType: 'global',
                global: {
                    md: 100
                },
                unit: 'px'
            },
            style: [{
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'mediaType', relation: '==', value: 'digit' }, { key: 'style', relation: '!=', value: '3' }],
                selector: '{{QUBELY}} .qubely-pricelist-digit'
            }]
        },
        digitSpacing: {
            type: 'object',
            default: {
                md: 15,
                unit: 'px'
            },
            style: [{
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'imagePosition', relation: '==', value: 'left' }, { key: 'mediaType', relation: '==', value: 'digit' }, { key: 'contentAlign', relation: '!=', value: 'left' }],
                selector: '{{QUBELY}} .qubely-pricelist-description-wrapper {margin-right: {{digitSpacing}};}'
            }, {
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'imagePosition', relation: '==', value: 'left' }, { key: 'mediaType', relation: '==', value: 'digit' }, { key: 'contentAlign', relation: '==', value: 'left' }],
                selector: '{{QUBELY}} .qubely-block-pricelist .qubely-pricelist-item .qubely-pricelist-digit {margin-right: {{digitSpacing}};}'
            }, {
                condition: [{ key: 'enableMedia', relation: '==', value: true }, { key: 'imagePosition', relation: '==', value: 'top' }, { key: 'mediaType', relation: '==', value: 'digit' }],
                selector: '{{QUBELY}} .qubely-block-pricelist .qubely-pricelist-item .qubely-pricelist-digit {margin-bottom: {{digitSpacing}};}'
            }]
        },

        //
        pricelistItems: { type: 'number', default: 4 },
        showGlobalSettings: { type: 'boolean', default: true }, // Global Settings
        showContextMenu: { type: 'boolean', default: true }
    }, globalAttributes),
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
    Tooltip = _wp$components.Tooltip,
    Toolbar = _wp$components.Toolbar;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    BlockControls = _wp$editor.BlockControls;
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
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator,
    _wp$qubelyComponents$ = _wp$qubelyComponents.gloalSettings,
    globalSettingsPanel = _wp$qubelyComponents$.globalSettingsPanel,
    animationSettings = _wp$qubelyComponents$.animationSettings,
    InlineToolbar = _wp$qubelyComponents.Inline.InlineToolbar;

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
					{ className: 'qubely-team-social-links qubely-team-icon-layout-' + iconStyle + ' qubely-team-icon-style-' + (iconUseDefaultStyle == 1 ? 'default' : 'custom') },
					facebook && React.createElement(
						'a',
						{ className: 'qubely-team-social-facebook' },
						React.createElement('i', { className: 'fab fa-facebook-f' })
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
			    showAvatar = _this$props$attribute2.showAvatar,
			    enablename = _this$props$attribute2.enablename;
			var author = item.author,
			    designation = item.designation,
			    avatar = item.avatar;


			return React.createElement(
				'div',
				{ className: 'qubely-team-author' },
				showAvatar && _this.renderAvatar(avatar, index) /* Author avater callback function */,
				enablename && React.createElement(
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
					{ key: index, className: 'qubely-carousel-item' },
					carouselItems.length > items.md && carouselItems.length > items.sm && carouselItems.length > items.sm && React.createElement(
						Tooltip,
						{ text: __('Delete this item') },
						React.createElement(
							'span',
							{ className: 'qubely-repeatable-action-remove', role: 'button', onClick: function onClick() {
									return _this.removeCrouselItem(index);
								} },
							React.createElement('span', { className: 'dashicons dashicons-no-alt' })
						)
					),
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
			    iconBorderColorHover = _props2$attributes.iconBorderColorHover,
			    sliderMargin = _props2$attributes.sliderMargin,
			    enablename = _props2$attributes.enablename,
			    dotsPosition = _props2$attributes.dotsPosition,
			    horizontalScrollleft = _props2$attributes.horizontalScrollleft,
			    contentSpacing = _props2$attributes.contentSpacing,
			    globalZindex = _props2$attributes.globalZindex,
			    enablePosition = _props2$attributes.enablePosition,
			    selectPosition = _props2$attributes.selectPosition,
			    positionXaxis = _props2$attributes.positionXaxis,
			    positionYaxis = _props2$attributes.positionYaxis,
			    hideTablet = _props2$attributes.hideTablet,
			    hideMobile = _props2$attributes.hideMobile,
			    globalCss = _props2$attributes.globalCss,
			    animation = _props2$attributes.animation;
			var device = this.state.device;


			var carouselSettings = {
				autoplay: autoPlay,
				items: items,
				margin: sliderMargin,
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
						}),
						React.createElement(Range, {
							label: __('Margin'),
							min: 0,
							max: 80,
							value: sliderMargin,
							onChange: function onChange(value) {
								return setAttributes({ sliderMargin: parseInt(value) });
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
							React.createElement(Range, {
								label: __('Vertical Position'),
								value: dotsPosition, onChange: function onChange(value) {
									return setAttributes({ dotsPosition: value });
								},
								min: -100, max: 100,
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
						React.createElement(Toggle, { label: __('Enable Name'), value: enablename, onChange: function onChange(value) {
								return setAttributes({ enablename: value });
							} }),
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
						layout == 3 && React.createElement(Range, {
							label: __('Content Spacing'),
							value: contentSpacing, onChange: function onChange(value) {
								return setAttributes({ contentSpacing: value });
							},
							unit: ['px', 'em', '%'], max: 300,
							min: 0,
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
					),
					animationSettings(uniqueId, animation, setAttributes)
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
				globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes),
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
            React.createElement("i", { className: "fab fa-facebook-f" })
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
          showAvatar = _this$props$attribute2.showAvatar,
          enablename = _this$props$attribute2.enablename;
      var author = item.author,
          designation = item.designation,
          avatar = item.avatar;

      return React.createElement(
        "div",
        { className: "qubely-team-author" },
        showAvatar && _this.renderAvatar(avatar, index) /* Author avater callback function */,
        enablename && React.createElement(
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
          sliderMargin = _props$attributes2.sliderMargin,
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
        margin: sliderMargin,
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


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! ./style.scss */ "./src/blocks/teamcarousel/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/teamcarousel/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/teamcarousel/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var globalAttributes = wp.qubelyComponents.gloalSettings.globalAttributes;


registerBlockType('qubely/teamcarousel', {
	title: __('Team Carousel'),
	description: __('Design and showcase Qubely Team Carousel block'),
	icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/block-team-carousel.svg', alt: __('Team Carousel Block') }),
	category: 'qubely',
	keywords: [__('Team'), __('Carousel')],
	attributes: _extends({
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
		sliderMargin: {
			type: 'number',
			default: 30
		},
		// Infinite Loop
		infiniteLoop: { type: 'boolean', default: true },
		isCentered: { type: 'boolean', default: false },
		activeFade: { type: 'boolean', default: false },

		/*------------------------------------
  * 			Slider Settings 			
  -------------------------------------- */
		arrowStyle: { type: 'string', default: 'arrowright2' },
		horizontalScroll: {
			type: 'object',
			default: { md: 0, unit: '%' },
			style: [{
				selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control { left: {{horizontalScroll}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control { right: {{horizontalScroll}} }'
			}]
		},
		arrowPosition: {
			type: 'object',
			default: { md: 50, unit: '%' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control { top: {{arrowPosition}}; } ' }]
		},
		dotsPosition: {
			type: 'object',
			default: { md: -40, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots { bottom: {{dotsPosition}}; } ' }]
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
			default: { md: 14, unit: 'px' },
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
		enablename: { type: 'boolean', default: true },
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
				condition: [{ key: 'layout', relation: '==', value: '1' }],
				selector: '{{QUBELY}} .qubely-team-carousel-item .qubely-team-1 {background-color: {{bgColor}};}'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '2' }],
				selector: '{{QUBELY}} .qubely-team-2 .qubely-team-author-info {background-color: {{bgColor}};}'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '3' }],
				selector: '{{QUBELY}} .qubely-team-3 .qubely-team-author {background-color: {{bgColor}};} {{QUBELY}} .layout-3 .qubely-team-carousel-content-wrapper:before {border-color: {{bgColor}} transparent transparent transparent;}'
			}]
		},
		// Content padding.
		bgPadding: {
			type: 'object',
			default: {},
			style: [{
				condition: [{ key: 'layout', relation: '==', value: '1' }],
				selector: '{{QUBELY}} .qubely-team-1 .qubely-team-author-info'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '2' }],
				selector: '{{QUBELY}} .qubely-layout-2 .qubely-tesitmonial-item, {{QUBELY}} .qubely-team-2 .qubely-team-author-info'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '3' }],
				selector: '{{QUBELY}} .qubely-team-carousel-item .qubely-team-3'
			}]
		},
		contentSpacing: {
			type: 'object',
			default: {},
			style: [{
				condition: [{ key: 'layout', relation: '==', value: '3' }],
				selector: '{{QUBELY}} .qubely-team-author-info .layout-3 {margin-top: {{contentSpacing}};}'
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
			style: [{ selector: '{{QUBELY}} .qubely-block-team-carousel .qubely-carousel-item' }]
		},
		boxShadowHover: {
			type: 'object', default: {},
			style: [{ selector: '{{QUBELY}} .qubely-block-team-carousel .qubely-carousel-item:hover' }]
		},
		showGlobalSettings: { type: 'boolean', default: true },

		/**
  * Social Share */
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
	}, globalAttributes),
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
    Tooltip = _wp$components.Tooltip,
    Toolbar = _wp$components.Toolbar;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    BlockControls = _wp$editor.BlockControls;
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
    CssGenerator = _wp$qubelyComponents.CssGenerator.CssGenerator,
    _wp$qubelyComponents$ = _wp$qubelyComponents.gloalSettings,
    globalSettingsPanel = _wp$qubelyComponents$.globalSettingsPanel,
    animationSettings = _wp$qubelyComponents$.animationSettings,
    InlineToolbar = _wp$qubelyComponents.Inline.InlineToolbar;

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
			    items = _this$props$attribute2.items,
			    quoteIcon = _this$props$attribute2.quoteIcon,
			    ratings = _this$props$attribute2.ratings;


			return carouselItems.map(function (item, index) {
				var message = item.message;

				return React.createElement(
					'div',
					{ key: index, className: 'qubely-carousel-item' },
					carouselItems.length > items.md && carouselItems.length > items.sm && carouselItems.length > items.sm && React.createElement(
						Tooltip,
						{ text: __('Delete this item') },
						React.createElement(
							'span',
							{ className: 'qubely-repeatable-action-remove', role: 'button', onClick: function onClick() {
									return _this.removeCrouselItem(index);
								} },
							React.createElement('span', { className: 'dashicons dashicons-no-alt' })
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
							showRatings && ratings > 0 && layout !== 1 && React.createElement('div', { className: 'qubely-testimonial-ratings B', 'data-qubelyrating': ratings }),
							React.createElement(
								'div',
								{ className: 'qubely-testimonial-content' },
								_this.renderMessage(message, index)
							),
							showRatings && ratings > 0 && layout == 1 && React.createElement('div', { className: 'qubely-testimonial-ratings A', 'data-qubelyrating': ratings })
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
			    dotsPosition = _props2$attributes.dotsPosition,
			    dotIndicator = _props2$attributes.dotIndicator,
			    dotswidth = _props2$attributes.dotswidth,
			    dotHeight = _props2$attributes.dotHeight,
			    dotBorderRadius = _props2$attributes.dotBorderRadius,
			    dotColor = _props2$attributes.dotColor,
			    dotActiveColor = _props2$attributes.dotActiveColor,
			    horizontalScroll = _props2$attributes.horizontalScroll,
			    sliderItemMargin = _props2$attributes.sliderItemMargin,
			    globalZindex = _props2$attributes.globalZindex,
			    enablePosition = _props2$attributes.enablePosition,
			    selectPosition = _props2$attributes.selectPosition,
			    positionXaxis = _props2$attributes.positionXaxis,
			    positionYaxis = _props2$attributes.positionYaxis,
			    hideTablet = _props2$attributes.hideTablet,
			    hideMobile = _props2$attributes.hideMobile,
			    globalCss = _props2$attributes.globalCss,
			    animation = _props2$attributes.animation;
			var device = this.state.device;

			var carouselSettings = {
				autoplay: autoPlay,
				nav: nav,
				dots: dots,
				items: items,
				speed: speed,
				interval: interval,
				center: isCentered,
				arrowStyle: arrowStyle,
				margin: sliderItemMargin,
				dot_indicator: dotIndicator,
				arrowPosition: arrowPosition,
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
						}),
						React.createElement(Range, {
							label: __('Margin'),
							min: 0,
							max: 80,
							value: sliderItemMargin,
							onChange: function onChange(value) {
								return setAttributes({ sliderItemMargin: parseInt(value) });
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
								value: dotswidth, onChange: function onChange(value) {
									return setAttributes({ dotswidth: value });
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
							React.createElement(Range, {
								label: __('Spacing'),
								value: dotsPosition, onChange: function onChange(value) {
									return setAttributes({ dotsPosition: value });
								},
								min: -50, max: 100,
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
					),
					animationSettings(uniqueId, animation, setAttributes)
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
				globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes),
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
          sliderItemMargin = _props$attributes2.sliderItemMargin,
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
        margin: sliderItemMargin,
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


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! ./style.scss */ "./src/blocks/testimonialcarousel/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/testimonialcarousel/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/testimonialcarousel/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var globalAttributes = wp.qubelyComponents.gloalSettings.globalAttributes;


registerBlockType('qubely/testimonialcarousel', {
	title: __('Testimonial Carousel'),
	description: __('Design and showcase customer reviews, remarks as testimonials with Qubely Testimonial Carousel block'),
	icon: React.createElement('img', { src: qubely_pro_admin.plugin + 'assets/img/blocks/block-testimonial-carousel.svg', alt: __('Team Block') }),
	category: 'qubely',
	keywords: [__('Testimonial'), __('Carousel')],
	attributes: _extends({
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
			default: { md: 1, unit: 'px' },
			style: [{
				selector: '{{QUBELY}} .qubely-carousel .qubely-carousel-extended-list .qubely-carousel-item { padding: 0 {{sliderItemsSpace}}; }'
			}]
		},
		sliderItemMargin: {
			type: 'number',
			default: 10
		},
		// Infinite Loop
		infiniteLoop: { type: 'boolean', default: true },
		isCentered: { type: 'boolean', default: false },
		activeFade: { type: 'boolean', default: false },

		/*------------------------------------
  * 			Slider Settings 			
  -------------------------------------- */
		arrowStyle: { type: 'string', default: 'arrowright2' },
		horizontalScroll: {
			type: 'object',
			default: { md: -70, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control { right: {{horizontalScroll}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control { left: {{horizontalScroll}} }  ' }]
		},
		// arrowPosition: {type: 'string', default: 'center' },
		arrowPosition: {
			type: 'object',
			default: { md: 49, unit: '%' },
			style: [{ selector: '{{QUBELY}} .qubely-block-testimonial-carousel .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control { top: {{arrowPosition}}; } ' }]
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
			default: { md: 14, unit: 'px' },
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
		dotswidth: {
			type: 'string',
			default: { md: 30, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-block-testimonial-carousel .qubely-carousel-wrapper .qubely-carousel-dots ul li { width: {{dotswidth}} }' }]
		},
		dotHeight: {
			type: 'string',
			default: { md: 4, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-block-testimonial-carousel .qubely-carousel-wrapper .qubely-carousel-dots ul li { height: {{dotHeight}} }' }]
		},
		dotBorderRadius: {
			type: 'string',
			default: { md: 4, unit: 'px' },
			style: [{ selector: '{{QUBELY}} .qubely-block-testimonial-carousel .qubely-carousel-wrapper .qubely-carousel-dots ul li { border-radius: {{dotBorderRadius}} } {{QUBELY}} .qubely-block-testimonial-carousel .qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator { border-radius: {{dotBorderRadius}} }' }]
		},
		dotsPosition: {
			type: 'object',
			default: { md: 0, unit: 'px' },
			style: [{
				selector: '{{QUBELY}} .qubely-block-testimonial-carousel .qubely-carousel-wrapper .qubely-carousel-dots { margin-top: {{dotsPosition}}; } '
			}]
		},
		// Dot.
		dotColor: {
			type: 'object', default: { type: 'color', openColor: 1, color: '#f4f4f4' },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li' }]
		},
		// Dot Active Color.
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
		messageSpacingBottom: {
			type: 'object',
			default: { md: 20, unit: 'px' },
			style: [{
				condition: [{ key: 'layout', relation: '==', value: '1' }],
				selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1 .qubely-testimonial-carousel-content-wrapper .qubely-testimonial-content {margin-bottom: {{messageSpacingBottom}};}'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '2' }],
				selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-2 .qubely-testimonial-carousel-content-wrapper .qubely-testimonial-content {margin-bottom: {{messageSpacingBottom}};}'
			}, {
				condition: [{ key: 'layout', relation: '==', value: '3' }],
				selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-3 .qubely-testimonial-carousel-content-wrapper {margin-bottom: {{messageSpacingBottom}};}'
			}]
		},

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
				selector: '{{QUBELY}} .qubely-testimonial-avatar { display: inline-block; width: {{avatarSize}}; height: {{avatarSize}}; font-size: {{avatarSize}}; }'
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
			}, {
				condition: [{ key: 'layout', relation: '==', value: '3' }],
				selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-3 .qubely-single-img { margin-bottom: {{avatarSpacing}} }'
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
		showGlobalSettings: { type: 'boolean', default: true } }, globalAttributes),
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
    form_material_dark: React.createElement('img', { src: img_path + '/form/materialdark.svg', alt: __('Material dark') }),

    from_fields: {
        column: React.createElement('img', { src: img_path + '/form/column.svg', alt: __('qubely form Column') }),
        text: React.createElement('img', { src: img_path + '/form/text.svg', alt: __('qubely form text-field') }),
        number: React.createElement('img', { src: img_path + '/form/number.svg', alt: __('qubely form number-field') }),
        textarea: React.createElement('img', { src: img_path + '/form/textarea.svg', alt: __('qubely form textarea-field') }),
        checkbox: React.createElement('img', { src: img_path + '/form/checkbox.svg', alt: __('qubely form checkbox-field') }),
        date: React.createElement('img', { src: img_path + '/form/date.svg', alt: __('qubely form date-field') }),
        dropdown: React.createElement('img', { src: img_path + '/form/dropdown.svg', alt: __('qubely form dropdown-field') }),
        email: React.createElement('img', { src: img_path + '/form/email.svg', alt: __('qubely form email-field') }),
        radio: React.createElement('img', { src: img_path + '/form/radio.svg', alt: __('qubely form radio-field') }),
        time: React.createElement('img', { src: img_path + '/form/time.svg', alt: __('qubely form time-field') })
    },

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
    postgrid_3: React.createElement('img', { src: img_path + '/postgrid/3.svg', alt: __('Layout 3') }),
    postgrid_4: React.createElement('img', { src: img_path + '/postgrid/4.svg', alt: __('Layout 4') }),
    postgrid_5: React.createElement('img', { src: img_path + '/postgrid/5.svg', alt: __('Layout 5') }),

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
    imagecarousel_6: React.createElement('img', { src: img_path + '/imagecarousel/layout6.svg', alt: __('Design 6') }),

    // Gallery.
    gallery_1: React.createElement('img', { src: img_path + '/gallery/layout1.svg', alt: __('Design 1') }),
    gallery_2: React.createElement('img', { src: img_path + '/gallery/layout2.svg', alt: __('Design 2') })

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


__webpack_require__(/*! ./blocks/form/row */ "./src/blocks/form/row/index.js");

__webpack_require__(/*! ./blocks/form/row/column */ "./src/blocks/form/row/column/index.js");

__webpack_require__(/*! ./blocks/form */ "./src/blocks/form/index.js");

__webpack_require__(/*! ./blocks/form/fields */ "./src/blocks/form/fields/index.js");

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

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/plugins/quebly/wp-content/plugins/qubely-pro/assets/reactjs/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=qubely.pro.dev.js.map