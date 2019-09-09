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
var Alignment = wp.qubelyComponents.Alignment;
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
                alignment = _props$attributes.alignment;
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
                            disableToggle: true })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'qubely-block-' + uniqueId },
                    text
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
                text
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
        alignment: { type: 'string', default: 'left', style: [{ selector: '{{QUBELY}} {text-align: {{alignment}};}' }] }
    },
    edit: _Edit2.default,
    save: _Save2.default
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./blocks/tests/index.js */ "./src/blocks/tests/index.js");

var __ = wp.i18n.__;

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/plugins/qubely/wp-content/plugins/qubely-pro/assets/reactjs/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=qubely.pro.dev.js.map