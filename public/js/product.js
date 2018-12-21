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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/simple-mask-money/lib/simple-mask-money.js":
/*!*****************************************************************!*\
  !*** ./node_modules/simple-mask-money/lib/simple-mask-money.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}}();var i=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.allowNegative=!1,this.negativeSignAfter=!1,this.decimalSeparator=",",this.fixed=!0,this.fractionDigits=2,this.prefix="",this.suffix="",this.thousandsSeparator=".",this.cursor="move",this.merge(e)}return e(t,[{key:"merge",value:function(e){e&&"object"===(void 0===e?"undefined":r(e))&&(this.fixed="boolean"==typeof e.fixed?e.fixed:this.fixed,this.allowNegative="boolean"==typeof e.allowNegative?e.allowNegative:this.allowNegative,this.negativeSignAfter="boolean"==typeof e.negativeSignAfter?e.negativeSignAfter:this.negativeSignAfter,this.decimalSeparator=void 0===e.decimalSeparator?this.decimalSeparator:e.decimalSeparator,this.fractionDigits=void 0===e.fractionDigits?this.fractionDigits:e.fractionDigits,this.prefix=void 0===e.prefix?this.prefix:e.prefix,this.suffix=void 0===e.suffix?this.suffix:e.suffix,this.thousandsSeparator=void 0===e.thousandsSeparator?this.thousandsSeparator:e.thousandsSeparator,this.cursor=void 0===e.cursor?this.cursor:e.cursor)}}]),t}(),n=function(){function i(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}}();var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.args=new i(e)}return n(t,[{key:"isFloat",value:function(e){return e%1!=0}},{key:"completer",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;return this.args.fixed?"".padEnd(e,"0"):"".padEnd(e,"_")}},{key:"emptyOrInvalid",value:function(){return""+this.completer()+this.args.decimalSeparator+this.completer(this.args.fractionDigits)}},{key:"onlyNumber",value:function(e){for(var t=e.toString().indexOf(this.args.decimalSeparator),r=!1,i="",n=e.length-1;0<=n;n--)isFinite(e[n])?i=e[n]+i:-1===t||r||e[n]!==this.args.decimalSeparator||(i=e[n].replace(this.args.decimalSeparator,".")+i,r=!0);return"."===i[0]?"0"+i:i}},{key:"addingPrefix",value:function(e){return""+this.args.prefix+e}},{key:"removingPrefix",value:function(e){return-1!==e.indexOf(this.args.prefix,0)&&(e=e.substring(this.args.prefix.length,e.length)),e}},{key:"addingSuffix",value:function(e){return""+e+this.args.suffix}},{key:"removingSuffix",value:function(e){var t=e.indexOf(this.args.suffix,e.length-this.args.suffix.length);if(-1!==t){var r=e.substring(0,t);e=r+e.substring(r.length+this.args.suffix.length-1,e.length-1)}return e}},{key:"addingCompleter",value:function(e,t,r){for(var i=!(3<arguments.length&&void 0!==arguments[3])||arguments[3];e.length<r;)e=i?""+t+e:""+e+t;return e}},{key:"removingCompleter",value:function(e,t){for(var r=!(2<arguments.length&&void 0!==arguments[2])||arguments[2]?0:e.length-1;e[r]===t;)e=e.substring(0,r-1)+e.substring(r+1,e.length);return e}},{key:"addingSeparators",value:function(e){for(var t=e.length-this.args.fractionDigits,r=this.args.fixed?"d":"w",i="\\,?||\\.?(\\"+r+")",n=Math.ceil(t/3),a=this.args.decimalSeparator+"$"+(n+1),o=n;0!==o;o--)3<=t?(i="(\\"+r+"{3})"+i,t-=3):i="(\\"+r+"{"+t+"})"+i,a=1<o?this.args.thousandsSeparator+"$"+o+a:"$"+o+a;return e.replace(new RegExp(i),a)}},{key:"replaceSeparator",value:function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";return e.replace(new RegExp("\\"+t,"g"),r)}},{key:"adjustDotPosition",value:function(e){var t,r=e.toString();return t=(r=r.replace(".","")).length-this.args.fractionDigits,r=r.substring(0,t)+"."+r.substring(t)}},{key:"checkNumberStart",value:function(e){var t=e.toString();return"."===t[0]?"0"+t:t}},{key:"textToNumber",value:function(e,t){var r=e.toString(),i=this.completer();return this.args.prefix&&(r=this.removingPrefix(r)),this.args.suffix&&(r=this.removingSuffix(r)),(r=this.onlyNumber(r))&&(t&&(r=this.adjustDotPosition(r)),r=this.removingCompleter(r,i),r=this.checkNumberStart(r)),r||(this.args.fixed?"0":"")}},{key:"numberToText",value:function(e){var t=this.emptyOrInvalid();if(e=this.replaceSeparator(e.toString(),this.args.decimalSeparator,"."),!isNaN(parseFloat(e))){if(this.isFloat(e)){var r=e.split("."),i=r[0],n=r[1];t=""+i+(n=this.addingCompleter(n||"",this.completer(),this.args.fractionDigits,!1))}else t=this.replaceSeparator(e,"."),t=this.addingCompleter(t||"",this.completer(),this.args.fractionDigits),t=this.args.fractionDigits>=t.length?""+this.completer()+t:t;t=this.addingSeparators(t)}return this.args.prefix&&(t=this.addingPrefix(t)),this.args.suffix&&(t=this.addingSuffix(t)),t}}]),t}(),s=function(e){var t=-1;if("selectionStart"in e)t=e.selectionStart;else if(document.selection){e.focus();var r=document.selection.createRange(),i=document.selection.createRange().text.length;r.moveStart("character",-e.value.length),t=r.text.length-i}return t},u=function(e,t){if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,t);else if(e.createTextRange){var r=e.createTextRange();r.collapse(!0),r.moveEnd("character",t),r.moveStart("character",t),r.select()}},f=function(e,t){var r=void 0;switch(!0){case t.length<e.length:r=-1;break;case t.length>e.length:r=1;break;default:r=0}return r},a=function(){function i(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}}();var l=new i,c=new t(l);return function(){function o(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),l=new i,c=new t(l),Object.defineProperty(this,"args",{get:function(){return l},set:function(e){l=new i(e),c=new t(l)}}),this.formatToNumber=o.formatToNumber,this.format=o.format,this.setMask=o.setMask}return a(o,null,[{key:"format",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],r=l.allowNegative&&-1!==e.indexOf("-"),i=c.numberToText(c.textToNumber(e,t));return(!l.negativeSignAfter&&r?"-":"")+i+(l.negativeSignAfter&&r?"-":"")}},{key:"formatToNumber",value:function(e){var t=e.toString(),r="0",i=l.allowNegative&&-1!==t.indexOf("-");return i&&(t=t.replace("-","")),t=c.textToNumber(t),isNaN(parseFloat(t))||(r=t),parseFloat(i?-1*r:r)}},{key:"setMask",value:function(e,t){if("undefined"==typeof document)throw"This function only works on client side";var a="string"==typeof e?document.querySelector(e):e;return t&&(o.args=t),a.addEventListener("input",function(e){var t=a.value,r=o.format(t,!0),i=s(a)-f(r,t),n=o.args.cursor;"start"===n?i=0:"end"===n&&(i=r.length),a.value=r,a._value=r,u(a,i),!(e instanceof Event)&&a.dispatchEvent(new Event("input"))}),a.formatToNumber=function(){return o.formatToNumber(a.value)},a}},{key:"args",get:function(){return l},set:function(e){l=new i(e),c=new t(l)}}]),o}()});
//# sourceMappingURL=simple-mask-money.js.map


/***/ }),

/***/ "./resources/js/product.js":
/*!*********************************!*\
  !*** ./resources/js/product.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simple_mask_money__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-mask-money */ "./node_modules/simple-mask-money/lib/simple-mask-money.js");
/* harmony import */ var simple_mask_money__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_mask_money__WEBPACK_IMPORTED_MODULE_0__);

window.SimpleMaskMoney = simple_mask_money__WEBPACK_IMPORTED_MODULE_0___default.a;
var args = {
  allowNegative: false,
  negativeSignAfter: false,
  prefix: '',
  suffix: '',
  fixed: true,
  fractionDigits: 2,
  decimalSeparator: ',',
  thousandsSeparator: '.',
  cursor: 'move'
};
var input = simple_mask_money__WEBPACK_IMPORTED_MODULE_0___default.a.setMask('[name="discount"], [name="price"]', args);
input.formatToNumber();

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi ./resources/js/product.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/benquer/rocketzweb/resources/js/product.js */"./resources/js/product.js");


/***/ })

/******/ });