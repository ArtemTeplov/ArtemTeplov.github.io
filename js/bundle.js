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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);


if (window.innerWidth < 768) {
  var mySwiper = new Swiper('.swiper', {
    slidesPerView: 1,
    slideClass: 'swiper-slide',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}

if (window.innerWidth >= 768) {
  var swiper = document.querySelectorAll('.swiper');
  var swiperWrap = document.querySelectorAll('.swiper-wrapper');
  var swiperSlide = document.querySelectorAll('.swiper-slide');
  var swiperPagination = document.querySelectorAll('.swiper-pagination');

  for (var i = 0; i < swiper.length; i++) {
    swiper[i].classList.toggle('swiper');
  }

  for (var _i = 0; _i < swiperWrap.length; _i++) {
    swiperWrap[_i].classList.toggle('swiper-wrapper');
  }

  for (var _i2 = 0; _i2 < swiperSlide.length; _i2++) {
    swiperSlide[_i2].classList.toggle('swiper-slide');
  }

  for (var _i3 = 0; _i3 < swiperPagination.length; _i3++) {
    swiperPagination[_i3].classList.toggle('swiper-pagination');
  }
}

var close1120 = document.querySelectorAll('.card-close--1120');
var button = document.querySelector('.read-more__a');
var icon = document.querySelector('.read-more__icon--close');
var close768 = document.querySelectorAll('.card-close--768');
button.addEventListener('click', function (evt) {
  evt.preventDefault();

  for (var _i4 = 0; _i4 < close1120.length; _i4++) {
    close1120[_i4].classList.toggle('card-close--1120');
  }

  ;

  for (var _i5 = 0; _i5 < close768.length; _i5++) {
    close768[_i5].classList.toggle('card-close--768');
  }

  ;
  button.innerHTML = button.innerHTML === 'Показать все' ? button.innerHTML = 'Скрыть' : button.innerHTML = 'Показать все';
  icon.classList.toggle('read-more__icon--close');
}); //-------------------------------------------------------------------

var button_2 = document.querySelector('.read-more__a-2');
var close1120_2 = document.querySelectorAll('.card-close--1120-2');
var close768_2 = document.querySelectorAll('.card-close--768-2');
var icon_2 = document.querySelector('.read-more__icon--close-2');
button_2.addEventListener('click', function (evt) {
  evt.preventDefault();

  for (var _i6 = 0; _i6 < close1120_2.length; _i6++) {
    close1120_2[_i6].classList.toggle('card-close--1120-2');
  }

  ;

  for (var _i7 = 0; _i7 < close768_2.length; _i7++) {
    close768_2[_i7].classList.toggle('card-close--768-2');
  }

  ;
  button_2.innerHTML = button_2.innerHTML === 'Показать все' ? button_2.innerHTML = 'Скрыть' : button_2.innerHTML = 'Показать все';
  icon_2.classList.toggle('read-more__icon--close-2');
}); //----------------------------------------------------------------------------

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map