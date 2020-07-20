/*!
 * 
 * ▄█     █▄     ▄████████    ▄████████ ███▄▄▄▄    ▄█  ███▄▄▄▄      ▄██████▄
 * ███     ███   ███    ███   ███    ███ ███▀▀▀██▄ ███  ███▀▀▀██▄   ███    ███
 * ███     ███   ███    ███   ███    ███ ███   ███ ███▌ ███   ███   ███    █▀
 * ███     ███   ███    ███  ▄███▄▄▄▄██▀ ███   ███ ███▌ ███   ███  ▄███
 * ███     ███ ▀███████████ ▀▀███▀▀▀▀▀   ███   ███ ███▌ ███   ███ ▀▀███ ████▄
 * ███     ███   ███    ███ ▀███████████ ███   ███ ███  ███   ███   ███    ███
 * ███ ▄█▄ ███   ███    ███   ███    ███ ███   ███ ███  ███   ███   ███    ███
 * ▀███▀███▀     ███    █▀    ███    ███  ▀█   █▀  █▀    ▀█   █▀    ████████▀
 *                             ███    ███
 * 
 * Don't edit this file directly. Edit with Webpack.
 * Then after you're done run npm run build
 * 
 * Scaffolded with @juandinella/penny-scripts
 * 
 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/assets/js/general/index.js");
var app=function app(){Object(_general__WEBPACK_IMPORTED_MODULE_0__["default"])();};/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/assets/js/general/acc.js":
/*!**************************************!*\
  !*** ./src/assets/js/general/acc.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o,allowArrayLike){var it;if(typeof Symbol==="undefined"||o[Symbol.iterator]==null){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e){throw _e;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=o[Symbol.iterator]();},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e2){didErr=true;err=_e2;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}var acc=function acc(){var acc=document.getElementsByClassName('item--nav');var _iterator=_createForOfIteratorHelper(acc),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var el=_step.value;el.addEventListener('click',function(){this.classList.toggle('active');var more=this.nextElementSibling;if(more.style.display==='block'){more.style.display='none';this.style.transform='rotate(0deg)';}else{more.style.display='block';this.style.transform='rotate(180deg)';}});}}catch(err){_iterator.e(err);}finally{_iterator.f();}};/* harmony default export */ __webpack_exports__["default"] = (acc);

/***/ }),

/***/ "./src/assets/js/general/general.js":
/*!******************************************!*\
  !*** ./src/assets/js/general/general.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/assets/js/general/menu.js");
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab */ "./src/assets/js/general/tab.js");
/* harmony import */ var _slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slick */ "./src/assets/js/general/slick.js");
/* harmony import */ var _scrollspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollspy */ "./src/assets/js/general/scrollspy.js");
/* harmony import */ var _tab_slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab-slide */ "./src/assets/js/general/tab-slide.js");
/* harmony import */ var _acc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acc */ "./src/assets/js/general/acc.js");
var general=function general(){Object(_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();Object(_tab__WEBPACK_IMPORTED_MODULE_1__["default"])();Object(_tab_slide__WEBPACK_IMPORTED_MODULE_4__["default"])();Object(_scrollspy__WEBPACK_IMPORTED_MODULE_3__["default"])();Object(_slick__WEBPACK_IMPORTED_MODULE_2__["default"])();Object(_acc__WEBPACK_IMPORTED_MODULE_5__["default"])();};/* harmony default export */ __webpack_exports__["default"] = (general);

/***/ }),

/***/ "./src/assets/js/general/index.js":
/*!****************************************!*\
  !*** ./src/assets/js/general/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/assets/js/general/general.js");
/* harmony default export */ __webpack_exports__["default"] = (_general__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/assets/js/general/menu.js":
/*!***************************************!*\
  !*** ./src/assets/js/general/menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var menu=function menu(){var open=document.getElementById('menu');var close=document.getElementById('close');var menuResponsive=document.getElementById('menu-dropdown');open.addEventListener('click',function(){if(menuResponsive.classList.contains('--open')){menuResponsive.classList.remove('--open');menuResponsive.classList.add('--close');}else{menuResponsive.classList.add('--open');menuResponsive.classList.remove('--close');}});close.addEventListener('click',function(){if(menuResponsive.classList.contains('--close')){menuResponsive.classList.remove('--close');menuResponsive.classList.add('--open');}else{menuResponsive.classList.add('--close');menuResponsive.classList.remove('--open');}});};/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/assets/js/general/scrollspy.js":
/*!********************************************!*\
  !*** ./src/assets/js/general/scrollspy.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}var scrollspy=function scrollspy(){document.addEventListener('DOMContentLoaded',function(){var sections=document.querySelectorAll('.ancla');var menuLinks=document.querySelectorAll('.scrollspy__nav-item a');var makeActive=function makeActive(link){return menuLinks[link].classList.add('--active');};var node=document.createElement('span');var nameSection=document.getElementById('name-section');var removeActive=function removeActive(link){return menuLinks[link].classList.remove('--active');};var removeAllActive=function removeAllActive(){return _toConsumableArray(Array(sections.length).keys()).forEach(function(link){return removeActive(link);});};var sectionMargin=400;var currentActive=0;window.addEventListener('scroll',function(e){var current=sections.length-_toConsumableArray(sections).reverse().findIndex(function(section){var actualPos=window.scrollY>=section.offsetTop-sectionMargin;if(actualPos){var attr=section.getAttribute('data-name');console.log(attr);node.innerHTML="".concat(attr);nameSection.appendChild(node);return actualPos;}})-1;if(current!==currentActive){removeAllActive();currentActive=current;makeActive(current);}});},false);};/* harmony default export */ __webpack_exports__["default"] = (scrollspy);

/***/ }),

/***/ "./src/assets/js/general/slick.js":
/*!****************************************!*\
  !*** ./src/assets/js/general/slick.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var slick=function slick(){$('.news__carousel').slick({slidesToShow:4,slidesToScroll:1,autoplay:false,infinite:false,variableWidth:true,responsive:[{breakpoint:768,settings:{centerMode:true}}]});$('.partners__carousel').slick({slidesToShow:5,slidesToScroll:1,autoplay:false,variableWidth:true,infinite:true,responsive:[{breakpoint:768,settings:{centerMode:true,arrows:false,autoplay:false}}]});};/* harmony default export */ __webpack_exports__["default"] = (slick);

/***/ }),

/***/ "./src/assets/js/general/tab-slide.js":
/*!********************************************!*\
  !*** ./src/assets/js/general/tab-slide.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o,allowArrayLike){var it;if(typeof Symbol==="undefined"||o[Symbol.iterator]==null){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e){throw _e;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=o[Symbol.iterator]();},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e2){didErr=true;err=_e2;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}var tabSlide=function tabSlide(){var btn=document.querySelectorAll('.partners__carousel .item');var tabCont=document.querySelectorAll('.partners__data .item');var _iterator=_createForOfIteratorHelper(btn),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var el=_step.value;el.addEventListener('mouseover',function(e){var slideItem=e.target.dataset.index;if(slideItem){var _iterator2=_createForOfIteratorHelper(tabCont),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var tag=_step2.value;var dataSet=tag.dataset.index;slideItem===dataSet?tag.classList.add('active'):tag.classList.remove('active');}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}}});el.addEventListener('mouseout',function(e){var _iterator3=_createForOfIteratorHelper(tabCont),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var tag=_step3.value;tag.classList.remove('active');console.log('Mouseover out');}}catch(err){_iterator3.e(err);}finally{_iterator3.f();}});}}catch(err){_iterator.e(err);}finally{_iterator.f();}};/* harmony default export */ __webpack_exports__["default"] = (tabSlide);

/***/ }),

/***/ "./src/assets/js/general/tab.js":
/*!**************************************!*\
  !*** ./src/assets/js/general/tab.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o,allowArrayLike){var it;if(typeof Symbol==="undefined"||o[Symbol.iterator]==null){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e){throw _e;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=o[Symbol.iterator]();},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e2){didErr=true;err=_e2;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}var tabs=function tabs(){var btn=document.querySelectorAll('.network__tab--nav button');var tabContent=document.querySelectorAll('.network__tab--content .tabcontent');var _iterator=_createForOfIteratorHelper(btn),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var el=_step.value;el.addEventListener('click',function(e){var selectBtn=e.target.dataset.tabname;if(selectBtn){var _iterator2=_createForOfIteratorHelper(tabContent),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var tag=_step2.value;selectBtn===tag.id?tag.classList.add('--show'):tag.classList.remove('--show');}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}}});}}catch(err){_iterator.e(err);}finally{_iterator.f();}};/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/assets/js/app.js");
Object(_app_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map