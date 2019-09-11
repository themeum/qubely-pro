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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/formbuilder/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/formbuilder/style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qubely-block-contact-form .qubely-form {\n  display: flex;\n  flex-wrap: wrap; }\n  .qubely-block-contact-form .qubely-form .qubely-form-group {\n    position: relative; }\n    .qubely-block-contact-form .qubely-form .qubely-form-group .qubely-form-label {\n      margin: 0;\n      line-height: 1; }\n    .qubely-block-contact-form .qubely-form .qubely-form-group .qubely-form-control {\n      display: block;\n      width: 100%;\n      background-clip: padding-box;\n      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n      .qubely-block-contact-form .qubely-form .qubely-form-group .qubely-form-control.is-small {\n        padding: 6px 8px; }\n      .qubely-block-contact-form .qubely-form .qubely-form-group .qubely-form-control.is-medium {\n        padding: 8.5px 12px; }\n      .qubely-block-contact-form .qubely-form .qubely-form-group .qubely-form-control.is-large {\n        padding: 14.5px 16px; }\n    .qubely-block-contact-form .qubely-form .qubely-form-group textarea.qubely-form-control {\n      resize: none; }\n    .qubely-block-contact-form .qubely-form .qubely-form-group .qubely-form-control:focus {\n      outline: 0; }\n    .qubely-block-contact-form .qubely-form .qubely-form-group p.qubely-form-required-field {\n      font-size: 14px;\n      color: red;\n      margin: 0; }\n    .qubely-block-contact-form .qubely-form .qubely-form-group .qubely-block-btn-anchor:hover {\n      background-color: transparent; }\n\n.qubely-block-contact-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-group-inner {\n  position: relative; }\n\n.qubely-block-contact-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-label {\n  position: absolute;\n  pointer-events: none;\n  top: 0px;\n  transition: 0.2s ease all; }\n\n.qubely-block-contact-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control {\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0; }\n  .qubely-block-contact-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control:focus, .qubely-block-contact-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control:valid {\n    outline: none;\n    color: #333; }\n  .qubely-block-contact-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control::placeholder {\n    opacity: 0;\n    transition: 400ms; }\n  .qubely-block-contact-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control:focus::placeholder {\n    opacity: 1; }\n\n.qubely-block-contact-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control:focus ~ .qubely-form-label,\n.qubely-block-contact-form.qubely-layout-material .qubely-form .qubely-form-group .qubely-form-control:valid ~ .qubely-form-label {\n  top: -20px; }\n", ""]);



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

/***/ "./src/blocks/formbuilder/Edit.js":
/*!****************************************!*\
  !*** ./src/blocks/formbuilder/Edit.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    Toolbar = _wp$components.Toolbar;
var _wp$qubelyComponents = wp.qubelyComponents,
    Styles = _wp$qubelyComponents.Styles,
    Range = _wp$qubelyComponents.Range,
    Toggle = _wp$qubelyComponents.Toggle,
    Typography = _wp$qubelyComponents.Typography,
    Color = _wp$qubelyComponents.Color,
    Tabs = _wp$qubelyComponents.Tabs,
    Tab = _wp$qubelyComponents.Tab,
    Border = _wp$qubelyComponents.Border,
    RadioAdvanced = _wp$qubelyComponents.RadioAdvanced,
    QubelyButtonEdit = _wp$qubelyComponents.QubelyButtonEdit,
    BorderRadius = _wp$qubelyComponents.BorderRadius,
    Separator = _wp$qubelyComponents.Separator;
//import { CssGenerator } from '../../components/CssGenerator'
//import InlineToolbar from '../../components/fields/inline/InlineToolbar'
//import icons from '../../helpers/icons'
//import '../../components/ButtonComponent'
//import '../../components/GlobalSettings'
//import '../../components/ContextMenu'


var Edit = function (_Component) {
    _inherits(Edit, _Component);

    function Edit(props) {
        _classCallCheck(this, Edit);

        var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

        _this.state = {
            device: 'md',
            spacer: true,
            selectedItem: -1
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
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                selectedItem = _state.selectedItem,
                device = _state.device;
            var _props3 = this.props,
                attributes = _props3.attributes,
                setAttributes = _props3.setAttributes;
            var uniqueId = attributes.uniqueId,
                formItems = attributes.formItems,
                labelTypography = attributes.labelTypography,
                labelColor = attributes.labelColor,
                labelColorFocus = attributes.labelColorFocus,
                inputTypography = attributes.inputTypography,
                inputColor = attributes.inputColor,
                inputColorFocus = attributes.inputColorFocus,
                inputColorHover = attributes.inputColorHover,
                inputBg = attributes.inputBg,
                inputBgFocus = attributes.inputBgFocus,
                inputBgHover = attributes.inputBgHover,
                inputBorder = attributes.inputBorder,
                inputBorderMaterial = attributes.inputBorderMaterial,
                inputBorderColorFocus = attributes.inputBorderColorFocus,
                inputBorderColorHover = attributes.inputBorderColorHover,
                inputBorderRadius = attributes.inputBorderRadius,
                inputSize = attributes.inputSize,
                inputPaddingX = attributes.inputPaddingX,
                inputPaddingY = attributes.inputPaddingY,
                textareaHeight = attributes.textareaHeight,
                placeholderColor = attributes.placeholderColor,
                placeholderColorFocus = attributes.placeholderColorFocus,
                placeholderColorHover = attributes.placeholderColorHover,
                enableButton = attributes.enableButton,
                buttonTag = attributes.buttonTag,
                buttonSize = attributes.buttonSize,
                buttonFillType = attributes.buttonFillType,
                buttonText = attributes.buttonText,
                buttonIconName = attributes.buttonIconName,
                buttonIconPosition = attributes.buttonIconPosition,
                spacing = attributes.spacing,
                gutter = attributes.gutter,
                fieldErrorMessage = attributes.fieldErrorMessage,
                formSuccessMessage = attributes.formSuccessMessage,
                formErrorMessage = attributes.formErrorMessage,
                reCaptcha = attributes.reCaptcha,
                reCaptchaSiteKey = attributes.reCaptchaSiteKey,
                reCaptchaSecretKey = attributes.reCaptchaSecretKey,
                emailReceiver = attributes.emailReceiver,
                emailHeaders = attributes.emailHeaders,
                emailFrom = attributes.emailFrom,
                emailSubject = attributes.emailSubject,
                emailBody = attributes.emailBody,
                layout = attributes.layout;
            //if (uniqueId) { CssGenerator(this.props.attributes, 'contactform', uniqueId); }

            return React.createElement(
                Fragment,
                null,
                React.createElement(
                    InspectorControls,
                    { key: 'inspector' },
                    React.createElement(
                        PanelBody,
                        { title: __(''), initialOpen: true },
                        React.createElement(Styles, {
                            value: layout,
                            onChange: function onChange(val) {
                                return setAttributes({ layout: val });
                            },
                            options: [{ value: 'classic', label: __('Classic') }, { value: 'material', label: __('Material') }]
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
                        React.createElement(TextControl, {
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
                            responsive: true,
                            device: device,
                            onDeviceChange: function onDeviceChange(value) {
                                return _this2.setState({ device: value });
                            }
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
                            label: __('Typography'),
                            value: labelTypography,
                            onChange: function onChange(val) {
                                return setAttributes({ labelTypography: val });
                            },
                            device: device,
                            onDeviceChange: function onDeviceChange(value) {
                                return _this2.setState({ device: value });
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
                        React.createElement(RadioAdvanced, {
                            label: __('Input Size'),
                            options: [{ label: 'S', value: 'small', title: 'Small' }, { label: 'M', value: 'medium', title: 'Medium' }, { label: 'L', value: 'large', title: 'Large' }, { icon: 'fas fa-cog', value: 'custom', title: 'Custom' }],
                            value: inputSize,
                            onChange: function onChange(value) {
                                return setAttributes({ inputSize: value });
                            }
                        }),
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
                                responsive: true,
                                device: device,
                                onDeviceChange: function onDeviceChange(value) {
                                    return _this2.setState({ device: value });
                                }
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
                                responsive: true,
                                device: device,
                                onDeviceChange: function onDeviceChange(value) {
                                    return _this2.setState({ device: value });
                                }
                            }),
                            React.createElement(Separator, null)
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
                            responsive: true,
                            device: device,
                            onDeviceChange: function onDeviceChange(value) {
                                return _this2.setState({ device: value });
                            }
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
                            responsive: true,
                            device: device,
                            onDeviceChange: function onDeviceChange(value) {
                                return _this2.setState({ device: value });
                            }
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
                            responsive: true,
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
                                React.createElement(Color, { label: __('Color'), value: inputColor, onChange: function onChange(val) {
                                        return setAttributes({ inputColor: val });
                                    } }),
                                React.createElement(Color, { label: __('Background Color'), value: inputBg, onChange: function onChange(val) {
                                        return setAttributes({ inputBg: val });
                                    } }),
                                React.createElement(Color, { label: __('Placeholder Color'), value: placeholderColor, onChange: function onChange(val) {
                                        return setAttributes({ placeholderColor: val });
                                    } }),
                                React.createElement(Separator, null),
                                layout == 'classic' && React.createElement(Border, { label: __('Border'), value: inputBorder, onChange: function onChange(val) {
                                        return setAttributes({ inputBorder: val });
                                    }, min: 0, max: 10, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                                        return _this2.setState({ device: value });
                                    } }),
                                layout == 'material' && React.createElement(Border, { label: __('Border'), value: inputBorderMaterial, onChange: function onChange(val) {
                                        return setAttributes({ inputBorderMaterial: val });
                                    }, min: 0, max: 10, responsive: true, device: device, onDeviceChange: function onDeviceChange(value) {
                                        return _this2.setState({ device: value });
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
                                React.createElement(Color, { label: __('Placeholder Color'), value: placeholderColorFocus, onChange: function onChange(val) {
                                        return setAttributes({ placeholderColorFocus: val });
                                    } }),
                                React.createElement(Color, { label: __('Border Color'), value: inputBorderColorFocus, onChange: function onChange(value) {
                                        return setAttributes({ inputBorderColorFocus: value });
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
                                React.createElement(Color, { label: __('Placeholder Color'), value: placeholderColorHover, onChange: function onChange(val) {
                                        return setAttributes({ placeholderColorHover: val });
                                    } }),
                                React.createElement(Color, { label: __('Border Color'), value: inputBorderColorHover, onChange: function onChange(value) {
                                        return setAttributes({ inputBorderColorHover: value });
                                    } })
                            )
                        ),
                        React.createElement(BorderRadius, {
                            label: __('Radius'),
                            value: inputBorderRadius,
                            onChange: function onChange(value) {
                                return setAttributes({ inputBorderRadius: value });
                            },
                            min: 0,
                            max: 100, unit: ['px', 'em', '%'],
                            responsive: true,
                            device: device,
                            onDeviceChange: function onDeviceChange(value) {
                                return _this2.setState({ device: value });
                            }
                        }),
                        React.createElement(Typography, { label: __('Typography'), value: inputTypography, onChange: function onChange(val) {
                                return setAttributes({ inputTypography: val });
                            }, device: device, onDeviceChange: function onDeviceChange(value) {
                                return _this2.setState({ device: value });
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
                                    },
                                    help: __('Set required field error message here. Leave blank for default message.')
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
                                )
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
                    )
                ),
                React.createElement(BlockControls, null),
                React.createElement(
                    'div',
                    { className: 'qubely-block-' + uniqueId },
                    React.createElement(
                        'div',
                        { className: 'qubely-block-contact-form qubely-layout-' + layout },
                        React.createElement(
                            'form',
                            { className: 'qubely-form' },
                            formItems.map(function (item, index) {
                                return React.createElement(
                                    'div',
                                    { key: index, className: 'qubely-form-group qubely-form-group-index-' + index, style: { width: item.width.md + '%' } },
                                    React.createElement(
                                        'div',
                                        { className: 'qubely-form-group-inner' },
                                        !item.hideLabel && layout == 'classic' && React.createElement(
                                            'label',
                                            { className: 'qubely-form-label' },
                                            React.createElement(
                                                'span',
                                                { contenteditable: 'true', onBlur: function onBlur(e) {
                                                        return _this2.setSettings('label', e.target.innerText, index);
                                                    } },
                                                __(item.label),
                                                ' '
                                            ),
                                            ' ',
                                            item.required && '*'
                                        ),
                                        (item.type == 'text' || item.type == 'email') && React.createElement('input', { className: 'qubely-form-control is-' + inputSize, type: item.type, placeholder: __(item.placeholder), required: item.required, onClick: function onClick() {
                                                return _this2.setState({ selectedItem: index });
                                            } }),
                                        item.type == 'textarea' && React.createElement('textarea', { className: 'qubely-form-control', placeholder: __(item.placeholder), required: item.required, onClick: function onClick() {
                                                return _this2.setState({ selectedItem: index });
                                            } }),
                                        layout == 'material' && React.createElement(
                                            'label',
                                            { className: 'qubely-form-label' },
                                            React.createElement(
                                                'span',
                                                { contenteditable: 'true', onBlur: function onBlur(e) {
                                                        return _this2.setSettings('label', e.target.innerText, index);
                                                    } },
                                                __(item.label),
                                                ' '
                                            ),
                                            ' ',
                                            item.required && '*'
                                        )
                                    )
                                );
                            }),
                            React.createElement(
                                'div',
                                { className: 'qubely-form-group', style: { width: '100%' } },
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
                )
            );
        }
    }]);

    return Edit;
}(Component);

exports.default = Edit;

/***/ }),

/***/ "./src/blocks/formbuilder/Save.js":
/*!****************************************!*\
  !*** ./src/blocks/formbuilder/Save.js ***!
  \****************************************/
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
var QubelyButtonSave = wp.qubelyComponents.QubelyButtonSave;
//import { animationAttr } from '../../components/HelperFunction';

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

            return (
                //<div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
                React.createElement(
                    'div',
                    { className: 'qubely-block-' + uniqueId },
                    React.createElement(
                        'style',
                        null,
                        this._renderFormGroupCss()
                    ),
                    React.createElement(
                        'div',
                        { className: 'qubely-block-contact-form qubely-layout-' + layout },
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
                )
            );
        }
    }]);

    return Save;
}(Component);

exports.default = Save;

/***/ }),

/***/ "./src/blocks/formbuilder/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/formbuilder/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _attributes;

__webpack_require__(/*! ./style.scss */ "./src/blocks/formbuilder/style.scss");

var _Edit = __webpack_require__(/*! ./Edit */ "./src/blocks/formbuilder/Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Save = __webpack_require__(/*! ./Save */ "./src/blocks/formbuilder/Save.js");

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


var formItems = [{ type: 'text', label: 'Full Name', name: 'full-name ', placeholder: 'Full Name', width: { md: 50 }, required: true, hideLabel: false }, { type: 'email', label: 'Email', name: 'email', placeholder: 'Email', width: { md: 50 }, required: true, hideLabel: false }, { type: 'text', label: 'Subject', name: 'subject', placeholder: 'Subject', width: { md: 100 }, required: true, hideLabel: false }, { type: 'textarea', label: 'Message', name: 'message', placeholder: 'Message', width: { md: 100 }, required: true, hideLabel: false }];

registerBlockType('qubely/formbuilder', {
    title: __('Form Builder'),
    description: __('Encourage site visitor interactions with Qubely Form builder'),
    category: 'qubely',
    icon: 'universal-access-alt',
    //icon: <img src={qubely_admin.plugin + 'assets/img/blocks/block-contact-form.svg'} alt={__('Form Builder')} />,
    keywords: [__('Contact'), __('Form')],
    attributes: (_attributes = {
        uniqueId: { type: 'string', default: '' },
        layout: { type: 'string', default: 'classic' },
        useDefaultStyle: { type: 'boolean', default: true },
        spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },
        buttonComponent: { type: 'boolean', default: true },
        enableButtonAlignment: { type: 'boolean', default: true },
        enableButton: { type: 'boolean', default: true },
        buttonTag: { type: 'string', default: 'button' },
        buttonText: { type: 'string', default: 'Submit' },
        formItems: { type: 'array', default: formItems },

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
                selector: '{{QUBELY}} .qubely-form .qubely-form-control'
            }]
        },

        inputBorderMaterial: {
            type: 'object',
            default: { openBorder: 1, type: 'solid', widthType: 'custom', custom: { md: '0 0 2 0' }, color: '#ced4da' },
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

    }, _defineProperty(_attributes, 'inputColorHover', {
        type: 'string', default: '',
        style: [{
            selector: '{{QUBELY}} .qubely-form .qubely-form-control:hover {color: {{inputColorHover}};}'
        }]
    }), _defineProperty(_attributes, 'inputBorderRadius', {
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
            condition: [{ key: 'layout', relation: '==', value: 'classic' }],
            selector: '{{QUBELY}} .qubely-form .qubely-form-control'
        }]
    }), _defineProperty(_attributes, 'inputSize', { type: 'string', default: 'medium' }), _defineProperty(_attributes, 'inputPaddingY', {
        type: 'object', default: { md: 10, unit: 'px' },
        style: [{
            condition: [{ key: 'layout', relation: '==', value: 'classic' }, { key: 'inputSize', relation: '==', value: 'custom' }],
            selector: '{{QUBELY}} .qubely-form .qubely-form-control {padding-top: {{inputPaddingY}}; padding-bottom: {{inputPaddingY}};}'
        }, {
            condition: [{ key: 'layout', relation: '==', value: 'material' }, { key: 'inputSize', relation: '==', value: 'custom' }],
            selector: '{{QUBELY}} .qubely-form .qubely-form-control {padding-top: {{inputPaddingY}}; padding-bottom: {{inputPaddingY}};}'
        }]
    }), _defineProperty(_attributes, 'inputPaddingX', {
        type: 'object', default: { md: 15, unit: 'px' },
        style: [{
            condition: [{ key: 'layout', relation: '==', value: 'classic' }, { key: 'inputSize', relation: '==', value: 'custom' }],
            selector: '{{QUBELY}} .qubely-form .qubely-form-control {padding-left: {{inputPaddingX}}; padding-right: {{inputPaddingX}};}'
        }]
    }), _defineProperty(_attributes, 'textareaHeight', {
        type: 'object', default: { md: 200, unit: 'px' },
        style: [{
            selector: '{{QUBELY}} .qubely-form .qubely-form-group textarea.qubely-form-control {height: {{textareaHeight}};}'
        }]
    }), _defineProperty(_attributes, 'fieldErrorMessage', { type: 'string', default: 'Please fill the required field.' }), _defineProperty(_attributes, 'formSuccessMessage', { type: 'string', default: 'Email successfully sent!' }), _defineProperty(_attributes, 'formErrorMessage', { type: 'string', default: 'Email sent failed, fill required field and try again!' }), _defineProperty(_attributes, 'reCaptcha', { type: 'boolean', default: false }), _defineProperty(_attributes, 'reCaptchaSiteKey', { type: 'string', default: '' }), _defineProperty(_attributes, 'reCaptchaSecretKey', { type: 'string', default: '' }), _defineProperty(_attributes, 'emailReceiver', { type: 'string', default: '' }), _defineProperty(_attributes, 'emailHeaders', { type: 'string', default: 'Reply-To: {{email}}\nReply-name: {{full-name }} \nCc: {{email}}\nBcc: admin@yourcompany.com' }), _defineProperty(_attributes, 'emailFrom', { type: 'string', default: 'Your Name: admin@example.com' }), _defineProperty(_attributes, 'emailSubject', { type: 'string', default: '{{subject}} | {{email}} | {{site-name}}' }), _defineProperty(_attributes, 'emailBody', { type: 'string', default: '<p><strong>From:</strong> {{full-name }}</p><strong>Email:</strong> {{email}}</p>\n<p><strong>Subject:</strong> {{subject}}</p>\n<p><strong>Message:</strong> {{message}}</p>' }), _defineProperty(_attributes, 'showGlobalSettings', { type: 'boolean', default: true }), _defineProperty(_attributes, 'showContextMenu', { type: 'boolean', default: true }), _attributes),
    edit: _Edit2.default,
    save: _Save2.default
});

/***/ }),

/***/ "./src/blocks/formbuilder/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/formbuilder/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/formbuilder/style.scss");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./blocks/tests/index.js */ "./src/blocks/tests/index.js");

__webpack_require__(/*! ./blocks/formbuilder/index.js */ "./src/blocks/formbuilder/index.js");

var __ = wp.i18n.__;

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