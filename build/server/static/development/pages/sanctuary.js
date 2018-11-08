module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/components/UI/Backdrop/Backdrop.js":
/*!*******************************************************!*\
  !*** ./components/components/UI/Backdrop/Backdrop.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tongeren/code/chittawela-next/components/components/UI/Backdrop/Backdrop.js";




var backdrop = function backdrop(props) {
  return props.show ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: props.clicked,
    className: "jsx-1378233804" + " " + "Backdrop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1378233804",
    css: ".Backdrop.jsx-1378233804{width:100%;height:100%;position:fixed;z-index:100;left:0;top:0;background-color:rgba(0,0,0,0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9jb21wb25lbnRzL2NvbXBvbmVudHMvVUkvQmFja2Ryb3AvQmFja2Ryb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWtCLEFBR3NCLFdBQ0MsWUFDRyxlQUNILFlBQ0wsT0FDRCxNQUM4QixpQ0FDdEMiLCJmaWxlIjoiL1VzZXJzL3RvbmdlcmVuL2NvZGUvY2hpdHRhd2VsYS1uZXh0L2NvbXBvbmVudHMvY29tcG9uZW50cy9VSS9CYWNrZHJvcC9CYWNrZHJvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBiYWNrZHJvcCA9IChwcm9wcykgPT4gKFxuICBwcm9wcy5zaG93ID8gXG4gICAgPEZyYWdtZW50PiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIkJhY2tkcm9wXCJ9IG9uQ2xpY2s9e3Byb3BzLmNsaWNrZWR9PjwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuQmFja2Ryb3Age1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgfSBcbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+IDogbnVsbFxuKTsgIFxuXG5cblxuZXhwb3J0IGRlZmF1bHQgYmFja2Ryb3A7Il19 */\n/*@ sourceURL=/Users/tongeren/code/chittawela-next/components/components/UI/Backdrop/Backdrop.js */",
    __self: this
  })) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (backdrop);

/***/ }),

/***/ "./components/components/navigation/AnimatedIconTripleChevronDown/AnimatedIconTripleChevronDown.js":
/*!*********************************************************************************************************!*\
  !*** ./components/components/navigation/AnimatedIconTripleChevronDown/AnimatedIconTripleChevronDown.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes/Routes */ "./components/routes/Routes.js");
var _jsxFileName = "/Users/tongeren/code/chittawela-next/components/components/navigation/AnimatedIconTripleChevronDown/AnimatedIconTripleChevronDown.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var tripleChevronDownIcon = __webpack_require__(/*! ../../../../static/icons/TripleChevronDown.svg */ "./static/icons/TripleChevronDown.svg");

var AnimatedIconTripleChevronDown =
/*#__PURE__*/
function (_Component) {
  _inherits(AnimatedIconTripleChevronDown, _Component);

  function AnimatedIconTripleChevronDown() {
    _classCallCheck(this, AnimatedIconTripleChevronDown);

    return _possibleConstructorReturn(this, _getPrototypeOf(AnimatedIconTripleChevronDown).apply(this, arguments));
  }

  _createClass(AnimatedIconTripleChevronDown, [{
    key: "componentDiDMount",
    value: function componentDiDMount() {
      var router = this.props.router;
      var currentPath = router.pathname;
      var page = Object(_routes_Routes__WEBPACK_IMPORTED_MODULE_3__["nextPage"])(currentPath);
      router.prefetch(page);
    }
  }, {
    key: "render",
    value: function render() {
      var router = this.props.router;
      var currentPath = router.pathname;
      var page = Object(_routes_Routes__WEBPACK_IMPORTED_MODULE_3__["nextPage"])(currentPath);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-307315022" + " " + "Animation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        onClick: function onClick() {
          return router.push(page);
        },
        src: tripleChevronDownIcon,
        alt: "MenuIcon",
        className: "jsx-307315022" + " " + "Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "307315022",
        css: ".Icon.jsx-307315022{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;height:4vh;}.Animation.jsx-307315022{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:moveUpDown-jsx-307315022;animation-name:moveUpDown-jsx-307315022;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-timing-function:cubic-bezier(0.09,0.55,0.58,0.96);animation-timing-function:cubic-bezier(0.09,0.55,0.58,0.96);-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}@-webkit-keyframes moveUpDown-jsx-307315022{0%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}50%{-webkit-transform:translate3d(0,2.4vh,0);-ms-transform:translate3d(0,2.4vh,0);transform:translate3d(0,2.4vh,0);}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes moveUpDown-jsx-307315022{0%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}50%{-webkit-transform:translate3d(0,2.4vh,0);-ms-transform:translate3d(0,2.4vh,0);transform:translate3d(0,2.4vh,0);}100%{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9jb21wb25lbnRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9BbmltYXRlZEljb25UcmlwbGVDaGV2cm9uRG93bi9BbmltYXRlZEljb25UcmlwbGVDaGV2cm9uRG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QjRCLEFBRzJDLEFBS2lCLEFBVUEsQUFDSyxBQUNILHVFQWhCMUIsT0FLZSxJQUo5QixpQkFhd0MsQUFFRSxZQURHLHVEQVR0Qiw4Q0FDSyx3REFDdUMsZ0lBQ3RDLDBEQUNQLHVFQUN0QiIsImZpbGUiOiIvVXNlcnMvdG9uZ2VyZW4vY29kZS9jaGl0dGF3ZWxhLW5leHQvY29tcG9uZW50cy9jb21wb25lbnRzL25hdmlnYXRpb24vQW5pbWF0ZWRJY29uVHJpcGxlQ2hldnJvbkRvd24vQW5pbWF0ZWRJY29uVHJpcGxlQ2hldnJvbkRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IG5leHRQYWdlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzL1JvdXRlcyc7XG5cbmNvbnN0IHRyaXBsZUNoZXZyb25Eb3duSWNvbiA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3N0YXRpYy9pY29ucy9UcmlwbGVDaGV2cm9uRG93bi5zdmcnKTtcblxuY2xhc3MgQW5pbWF0ZWRJY29uVHJpcGxlQ2hldnJvbkRvd24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpRE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSByb3V0ZXIucGF0aG5hbWU7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBuZXh0UGFnZShjdXJyZW50UGF0aCk7XG4gICAgICAgIHJvdXRlci5wcmVmZXRjaChwYWdlKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSByb3V0ZXIucGF0aG5hbWU7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBuZXh0UGFnZShjdXJyZW50UGF0aCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIkFuaW1hdGlvblwifT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1wiSWNvblwifSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChwYWdlKX0gc3JjPXt0cmlwbGVDaGV2cm9uRG93bkljb259IGFsdD1cIk1lbnVJY29uXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICBcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5JY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHZoO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLkFuaW1hdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZlVXBEb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA5LCAwLjU1LCAwLjU4LCAwLjk2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIG1vdmVVcERvd24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIuNHZoLCAwKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfSAgICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFuaW1hdGVkSWNvblRyaXBsZUNoZXZyb25Eb3duKTtcbiJdfQ== */\n/*@ sourceURL=/Users/tongeren/code/chittawela-next/components/components/navigation/AnimatedIconTripleChevronDown/AnimatedIconTripleChevronDown.js */",
        __self: this
      }));
    }
  }]);

  return AnimatedIconTripleChevronDown;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(AnimatedIconTripleChevronDown));

/***/ }),

/***/ "./components/components/navigation/Button/Button.js":
/*!***********************************************************!*\
  !*** ./components/components/navigation/Button/Button.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/tongeren/code/chittawela-next/components/components/navigation/Button/Button.js";




var buttonText = "RESERVE MY SPOT!";

var button = function button(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/checkout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: props.clicked,
    className: "jsx-2264321469" + " " + "Button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, buttonText)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2264321469",
    css: ".Button.jsx-2264321469{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;background-color:#8f7a49;border-radius:0;border:0.2vw solid whitesmoke;display:inline-block;cursor:pointer;color:whitesmoke;font-family:'Roboto';font-size:3vw;-webkit-letter-spacing:0.5vw;-moz-letter-spacing:0.5vw;-ms-letter-spacing:0.5vw;letter-spacing:0.5vw;height:5vh;width:39vw;-webkit-text-decoration:none;text-decoration:none;}.Button.jsx-2264321469:hover{background-color:#8f7a49;}.Button.jsx-2264321469:active{position:relative;top:0.2vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9jb21wb25lbnRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVnQixBQUcyQixBQWdCTSxBQUlOLGtCQUNSLE9BSlosR0FLQSwyQ0FyQjJCLHlCQUNULGdCQUNjLDhCQUNULHFCQUNOLGVBQ0MsaUJBQ0sscUJBQ1AsY0FDTyxxR0FDVixXQUNBLFdBQ1Usa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9jb21wb25lbnRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9CdXR0b24vQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBidXR0b25UZXh0ID0gXCJSRVNFUlZFIE1ZIFNQT1QhXCI7XG5cbmNvbnN0IGJ1dHRvbiA9IChwcm9wcykgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPExpbmsgaHJlZj1cIi9jaGVja291dFwiPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5jbGlja2VkfSBjbGFzc05hbWU9e1wiQnV0dG9uXCJ9PntidXR0b25UZXh0fTwvYnV0dG9uPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuQnV0dG9uIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY3YTQ5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwOyBcbiAgICAgICAgYm9yZGVyOiAwLjJ2dyBzb2xpZCB3aGl0ZXNtb2tlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6d2hpdGVzbW9rZTsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjV2dztcbiAgICAgICAgaGVpZ2h0OiA1dmg7IFxuICAgICAgICB3aWR0aDogMzl2dztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICBcbiAgICAgIC5CdXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4ZjdhNDk7O1xuICAgICAgfVxuXG4gICAgICAuQnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAwLjJ2dztcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBidXR0b247XG4iXX0= */\n/*@ sourceURL=/Users/tongeren/code/chittawela-next/components/components/navigation/Button/Button.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (button);

/***/ }),

/***/ "./components/components/navigation/NavigationItems/NavigationItem/NavigationItem.js":
/*!*******************************************************************************************!*\
  !*** ./components/components/navigation/NavigationItems/NavigationItem/NavigationItem.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/tongeren/code/chittawela-next/components/components/navigation/NavigationItems/NavigationItem/NavigationItem.js";





var navigationItem = function navigationItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3713396712" + " " + "NavigationItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: props.path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3713396712" + " " + "Link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.navText))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3713396712",
    css: ".NavigationItem.jsx-3713396712{margin:4.8vw 0;box-sizing:border-box;display:block;width:100%;border-bottom:solid 1px #eee;}.Link.jsx-3713396712{color:#8f7a49;-webkit-text-decoration:none;text-decoration:none;text-align:left;width:100%;box-sizing:border-box;display:block;font-size:4vw;}.Link.jsx-3713396712:hover,.Link.jsx-3713396712:active,.Link.active.jsx-3713396712{color:black;}@media (min-width:500px){.NavigationItem.jsx-3713396712{margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;width:auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Link.jsx-3713396712{color:whitesmoke;height:100%;padding:16px 10px;border-bottom:4px solid transparent;font-size:4vw;}.Link.jsx-3713396712:hover,.Link.jsx-3713396712:active,.Link.active.jsx-3713396712{background-color:#8f7a49;border-bottom:4px solid black;color:whitesmoke;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9jb21wb25lbnRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uSXRlbXMvTmF2aWdhdGlvbkl0ZW0vTmF2aWdhdGlvbkl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdCLEFBR3dCLEFBUUQsQUFZRixBQUtELEFBUVEsQUFVUSxTQWpCWixHQUxqQixFQVp1QixDQVJDLEVBaUNSLFFBVWtCLElBVFosUUFqQ04sVUFrQ3dCLElBakMzQixJQTBDUSxPQXpDVSxFQU1iLFFBb0NoQixRQW5DVyxHQWdCRyxBQVVFLFFBaENsQixBQU93QixJQWdCVCxFQVViLFNBVHFCLE9BaEJQLGNBQ0EsY0FDaEIsMERBZUUiLCJmaWxlIjoiL1VzZXJzL3RvbmdlcmVuL2NvZGUvY2hpdHRhd2VsYS1uZXh0L2NvbXBvbmVudHMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL05hdmlnYXRpb25JdGVtcy9OYXZpZ2F0aW9uSXRlbS9OYXZpZ2F0aW9uSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgbmF2aWdhdGlvbkl0ZW0gPSAocHJvcHMpID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxsaSBjbGFzc05hbWU9e1wiTmF2aWdhdGlvbkl0ZW1cIn0+XG4gICAgICA8TGluayBocmVmPXtwcm9wcy5wYXRofT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtcIkxpbmtcIn0+e3Byb3BzLm5hdlRleHR9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLk5hdmlnYXRpb25JdGVtIHtcbiAgICAgICAgbWFyZ2luOiA0Ljh2dyAwOyAvKiAxMHB4IDA7ICovXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlZWU7XG4gICAgICB9XG4gICAgXG4gICAgICAuTGluayB7XG4gICAgICAgIGNvbG9yOiAjOGY3YTQ5O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICB9XG4gICAgXG4gICAgICAuTGluazpob3ZlcixcbiAgICAgIC5MaW5rOmFjdGl2ZSxcbiAgICAgIC5MaW5rLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgLk5hdmlnYXRpb25JdGVtIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuTGluayB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTBweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLkxpbms6aG92ZXIsXG4gICAgICAgIC5MaW5rOmFjdGl2ZSxcbiAgICAgICAgLkxpbmsuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY3YTQ5O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9GcmFnbWVudD4gIFxuKTsgIFxuXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9uSXRlbTtcbiJdfQ== */\n/*@ sourceURL=/Users/tongeren/code/chittawela-next/components/components/navigation/NavigationItems/NavigationItem/NavigationItem.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (navigationItem);

/***/ }),

/***/ "./components/components/navigation/NavigationItems/NavigationItems.js":
/*!*****************************************************************************!*\
  !*** ./components/components/navigation/NavigationItems/NavigationItems.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationItem/NavigationItem */ "./components/components/navigation/NavigationItems/NavigationItem/NavigationItem.js");
/* harmony import */ var _routes_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes/Routes */ "./components/routes/Routes.js");
var _jsxFileName = "/Users/tongeren/code/chittawela-next/components/components/navigation/NavigationItems/NavigationItems.js";



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // import classes from './NavigationItems.module.css';




var navigationItems = function navigationItems(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2667761927" + " " + "NavigationItems",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, _routes_Routes__WEBPACK_IMPORTED_MODULE_3__["routes"].map(function (route, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavigationItem_NavigationItem__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      key: i,
      clicked: props.clicked
    }, route, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), route.navText);
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2667761927",
    css: ".NavigationItems.jsx-2667761927{margin:0;padding:0;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}@media (pointer:fine){.NavigationItems.jsx-2667761927{-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9jb21wb25lbnRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uSXRlbXMvTmF2aWdhdGlvbkl0ZW1zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVnQixBQUdrQixBQVdPLFNBVk4sVUFDTSxnQkFDSCxtQkFTYix1REFSaUIsK0RBQ0UsNkZBQ1AsWUFDZCIsImZpbGUiOiIvVXNlcnMvdG9uZ2VyZW4vY29kZS9jaGl0dGF3ZWxhLW5leHQvY29tcG9uZW50cy9jb21wb25lbnRzL25hdmlnYXRpb24vTmF2aWdhdGlvbkl0ZW1zL05hdmlnYXRpb25JdGVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9OYXZpZ2F0aW9uSXRlbXMubW9kdWxlLmNzcyc7XG5pbXBvcnQgTmF2aWdhdGlvbkl0ZW0gZnJvbSAnLi9OYXZpZ2F0aW9uSXRlbS9OYXZpZ2F0aW9uSXRlbSc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMvUm91dGVzJztcblxuY29uc3QgbmF2aWdhdGlvbkl0ZW1zID0gKHByb3BzKSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8dWwgY2xhc3NOYW1lPXtcIk5hdmlnYXRpb25JdGVtc1wifSA+XG4gICAgICB7IHJvdXRlcy5tYXAoKHJvdXRlLCBpKSA9PiAoPE5hdmlnYXRpb25JdGVtIGtleT17aX0gY2xpY2tlZD17cHJvcHMuY2xpY2tlZH0gey4uLnJvdXRlfT57cm91dGUubmF2VGV4dH08L05hdmlnYXRpb25JdGVtPikpIH0gXG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuTmF2aWdhdGlvbkl0ZW1zIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICBcbiAgICAgIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgICAgICAuTmF2aWdhdGlvbkl0ZW1zIHtcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9GcmFnbWVudD4gIFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2aWdhdGlvbkl0ZW1zOyJdfQ== */\n/*@ sourceURL=/Users/tongeren/code/chittawela-next/components/components/navigation/NavigationItems/NavigationItems.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (navigationItems);

/***/ }),

/***/ "./components/components/navigation/SideDrawer/DrawerToggle/DrawerToggle.js":
/*!**********************************************************************************!*\
  !*** ./components/components/navigation/SideDrawer/DrawerToggle/DrawerToggle.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tongeren/code/chittawela-next/components/components/navigation/SideDrawer/DrawerToggle/DrawerToggle.js";




var menuIconsvg = __webpack_require__(/*! ../../../../../static/icons/Menu.svg */ "./static/icons/Menu.svg");

var drawerToggle = function drawerToggle(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: props.clicked,
    className: "jsx-2081795353" + " " + "DrawerToggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: menuIconsvg,
    alt: "MenuIcon",
    className: "jsx-2081795353" + " " + "MenuIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2081795353",
    css: ".DrawerToggle.jsx-2081795353{margin:auto;height:4vh;}.MenuIcon.jsx-2081795353{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;height:4vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9jb21wb25lbnRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9TaWRlRHJhd2VyL0RyYXdlclRvZ2dsZS9EcmF3ZXJUb2dnbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2dCLEFBR3FCLEFBS00sWUFKUCxXQUNiLGdEQUljLFlBQ0QsV0FDYiIsImZpbGUiOiIvVXNlcnMvdG9uZ2VyZW4vY29kZS9jaGl0dGF3ZWxhLW5leHQvY29tcG9uZW50cy9jb21wb25lbnRzL25hdmlnYXRpb24vU2lkZURyYXdlci9EcmF3ZXJUb2dnbGUvRHJhd2VyVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IG1lbnVJY29uc3ZnID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vc3RhdGljL2ljb25zL01lbnUuc3ZnJyk7XG5cbmNvbnN0IGRyYXdlclRvZ2dsZSA9IChwcm9wcykgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9e1wiRHJhd2VyVG9nZ2xlXCJ9IG9uQ2xpY2s9e3Byb3BzLmNsaWNrZWR9PlxuICAgICAgPGltZyBjbGFzc05hbWU9e1wiTWVudUljb25cIn0gc3JjPXttZW51SWNvbnN2Z30gYWx0PVwiTWVudUljb25cIiAvPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5EcmF3ZXJUb2dnbGUgeyAgXG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgaGVpZ2h0OiA0dmg7IFxuICAgICAgfSBcblxuICAgICAgLk1lbnVJY29uIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGhlaWdodDogNHZoOyBcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBkcmF3ZXJUb2dnbGU7XG4iXX0= */\n/*@ sourceURL=/Users/tongeren/code/chittawela-next/components/components/navigation/SideDrawer/DrawerToggle/DrawerToggle.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (drawerToggle);

/***/ }),

/***/ "./components/components/navigation/SideDrawer/SideDrawer.js":
/*!*******************************************************************!*\
  !*** ./components/components/navigation/SideDrawer/SideDrawer.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Backdrop/Backdrop */ "./components/components/UI/Backdrop/Backdrop.js");
/* harmony import */ var _NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NavigationItems/NavigationItems */ "./components/components/navigation/NavigationItems/NavigationItems.js");
var _jsxFileName = "/Users/tongeren/code/chittawela-next/components/components/navigation/SideDrawer/SideDrawer.js";


 // import classes from './SideDrawer.module.css';




var sideDrawer = function sideDrawer(props) {
  var attachedClasses = ["SideDrawer", "Close"];

  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: props.open,
    clicked: props.closed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4248111947" + " " + (attachedClasses.join(' ') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-4248111947",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavigationItems_NavigationItems__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clicked: props.closed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4248111947",
    css: ".SideDrawer.jsx-4248111947{position:fixed;width:55vw;height:100%;left:0;top:0;z-index:200;background-color:white;padding:16vw 8vw;box-sizing:border-box;-webkit-transition:-webkit-transform 0.3s ease-out;-webkit-transition:transform 0.3s ease-out;transition:transform 0.3s ease-out;}.Open.jsx-4248111947{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.Close.jsx-4248111947{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);}.nav.jsx-4248111947{margin:0;padding:0;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}@media (pointer:fine){.nav.jsx-4248111947{-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;}}@media (pointer:fine){.SideDrawer.jsx-4248111947{display:none;}}NavLink.jsx-4248111947{margin:5vw 0;box-sizing:border-box;display:block;width:100%;}NavLink.jsx-4248111947 a.jsx-4248111947{color:#8f7a49;-webkit-text-decoration:none;text-decoration:none;width:100%;box-sizing:border-box;display:block;}NavLink.jsx-4248111947 a.jsx-4248111947:hover,NavLink.jsx-4248111947 a.jsx-4248111947:active,NavLink.jsx-4248111947 a.active.jsx-4248111947{color:black;}@media (min-width:500px){NavLink.jsx-4248111947{margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;width:auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}NavLink.jsx-4248111947 a.jsx-4248111947{color:whitesmoke;height:100%;padding:8vw 5vw;border-bottom:2vw solid transparent;}NavLink.jsx-4248111947 a.jsx-4248111947:hover,NavLink.jsx-4248111947 a.jsx-4248111947:active,NavLink.jsx-4248111947 a.active.jsx-4248111947{background-color:#8f7a49;border-bottom:2vw solid black;color:whitesmoke;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9jb21wb25lbnRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9TaWRlRHJhd2VyL1NpZGVEcmF3ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUcwQixBQWFTLEFBSUksQUFJbkIsQUFXTyxBQU1ELEFBS0YsQUFPQyxBQVVGLEFBS0QsQUFRUSxBQVNRLFNBNURqQixBQTRDSyxHQUxqQixDQXRCRSxBQUtzQixDQU9ELENBbERWLEVBeUVHLEVBbkRFLE1BNERnQixDQWpGcEIsR0F5RU0sTUFuREwsQUFxQkMsR0ExQ1AsT0FDRCxBQXdFZ0MsSUE5QjNCLEVBekNDLEdBNEJaLENBbURtQixLQXJDckIsR0F6Q3lCLENBOENaLFFBaUNYLEdBaENzQixNQXdCdEIsRUFWYyxDQXJEaEIsRUFQbUIsU0E2REosQ0FsRGYsQ0FvQ2dCLE1BOUNRLEdBNkRELEdBNUNKLEVBOEJuQixjQTlDcUMsK0NBaUJoQiwyQkE0Q25CLHVEQTVERixXQWlCYyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9jb21wb25lbnRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9TaWRlRHJhd2VyL1NpZGVEcmF3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBjbGFzc2VzIGZyb20gJy4vU2lkZURyYXdlci5tb2R1bGUuY3NzJztcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuLi8uLi9VSS9CYWNrZHJvcC9CYWNrZHJvcCc7XG5pbXBvcnQgTmF2aWdhdGlvbkl0ZW1zIGZyb20gJy4uL05hdmlnYXRpb25JdGVtcy9OYXZpZ2F0aW9uSXRlbXMnO1xuXG5jb25zdCBzaWRlRHJhd2VyID0gKHByb3BzKSA9PiB7XG4gIGxldCBhdHRhY2hlZENsYXNzZXMgPSBbXCJTaWRlRHJhd2VyXCIsIFwiQ2xvc2VcIl07XG4gIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgYXR0YWNoZWRDbGFzc2VzID0gW1wiU2lkZURyYXdlclwiLCBcIk9wZW5cIl07XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEJhY2tkcm9wIHNob3c9e3Byb3BzLm9wZW59IGNsaWNrZWQ9e3Byb3BzLmNsb3NlZH0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2F0dGFjaGVkQ2xhc3Nlcy5qb2luKCcgJyl9PlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxOYXZpZ2F0aW9uSXRlbXMgY2xpY2tlZD17cHJvcHMuY2xvc2VkfS8+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5TaWRlRHJhd2VyIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgd2lkdGg6IDU1dnc7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnZ3IDh2dztcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xuICAgICAgICB9XG4gIFxuICAgICAgICAuT3BlbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gIFxuICAgICAgICAuQ2xvc2Uge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgICAgICAgLlNpZGVEcmF3ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgTmF2TGluayB7XG4gICAgICAgICAgbWFyZ2luOiA1dncgMDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgTmF2TGluayBhIHtcbiAgICAgICAgICBjb2xvcjogIzhmN2E0OTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIE5hdkxpbmsgYTpob3ZlcixcbiAgICAgICAgTmF2TGluayBhOmFjdGl2ZSxcbiAgICAgICAgTmF2TGluayBhLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7ICAvKiA8LS0tIENIQU5HRSBUSElTISEhICovIFxuICAgICAgICAgIE5hdkxpbmsge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBOYXZMaW5rIGEge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiA4dncgNXZ3O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnZ3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIE5hdkxpbmsgYTpob3ZlcixcbiAgICAgICAgICBOYXZMaW5rIGE6YWN0aXZlLFxuICAgICAgICAgIE5hdkxpbmsgYS5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhmN2E0OTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJ2dyBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2lkZURyYXdlcjtcblxuIl19 */\n/*@ sourceURL=/Users/tongeren/code/chittawela-next/components/components/navigation/SideDrawer/SideDrawer.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (sideDrawer);

/***/ }),

/***/ "./components/components/navigation/Toolbar/Toolbar.js":
/*!*************************************************************!*\
  !*** ./components/components/navigation/Toolbar/Toolbar.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./components/components/navigation/Button/Button.js");
/* harmony import */ var _SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SideDrawer/DrawerToggle/DrawerToggle */ "./components/components/navigation/SideDrawer/DrawerToggle/DrawerToggle.js");
var _jsxFileName = "/Users/tongeren/code/chittawela-next/components/components/navigation/Toolbar/Toolbar.js";


 // import classes from './Toolbar.module.css';




var toolbar = function toolbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3839619020" + " " + "Toolbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SideDrawer_DrawerToggle_DrawerToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clicked: props.drawerToggleClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3839619020",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3839619020",
    css: ".Toolbar.jsx-3839619020{display:grid;width:100vw;grid-template-columns:13vw 47vw 40vw;height:6vh;background-color:black;color:whitesmoke;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9jb21wb25lbnRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Ub29sYmFyL1Rvb2xiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdCLEFBR3NCLGFBQ0QsWUFDeUIscUNBQzFCLFdBQ1ksdUJBQ04saUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9jb21wb25lbnRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Ub29sYmFyL1Rvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBjbGFzc2VzIGZyb20gJy4vVG9vbGJhci5tb2R1bGUuY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgRHJhd2VyVG9nZ2xlIGZyb20gJy4uL1NpZGVEcmF3ZXIvRHJhd2VyVG9nZ2xlL0RyYXdlclRvZ2dsZSc7XG5cbmNvbnN0IHRvb2xiYXIgPSAocHJvcHMpID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtcIlRvb2xiYXJcIn0+XG4gICAgICA8RHJhd2VyVG9nZ2xlIGNsaWNrZWQ9e3Byb3BzLmRyYXdlclRvZ2dsZUNsaWNrZWR9Lz4gXG4gICAgICA8cD48L3A+XG4gICAgICA8QnV0dG9uIC8+IFxuICAgIDwvaGVhZGVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5Ub29sYmFyIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDsgXG4gICAgICAgIHdpZHRoOiAxMDB2dzsgXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTN2dyA0N3Z3IDQwdnc7XG4gICAgICAgIGhlaWdodDogNnZoOyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTsgXG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9vbGJhcjsiXX0= */\n/*@ sourceURL=/Users/tongeren/code/chittawela-next/components/components/navigation/Toolbar/Toolbar.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (toolbar);

/***/ }),

/***/ "./components/containers/Footer/Footer.js":
/*!************************************************!*\
  !*** ./components/containers/Footer/Footer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navigation_AnimatedIconTripleChevronDown_AnimatedIconTripleChevronDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navigation/AnimatedIconTripleChevronDown/AnimatedIconTripleChevronDown */ "./components/components/navigation/AnimatedIconTripleChevronDown/AnimatedIconTripleChevronDown.js");
var _jsxFileName = "/Users/tongeren/code/chittawela-next/components/containers/Footer/Footer.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import Music from '../../components/UI/Music/Music';



var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        className: "jsx-960886095" + " " + 'Footer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-960886095" + " " + 'NextPage',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_navigation_AnimatedIconTripleChevronDown_AnimatedIconTripleChevronDown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "960886095",
        css: ".Footer.jsx-960886095{display:grid;grid-template-columns:5vw 10vw 30vw 10vw 45vw;position:absolute;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;bottom:4vh;width:100vw;}.ToggleMusic.jsx-960886095{grid-column-start:2;}.NextPage.jsx-960886095{grid-column-start:4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9jb21wb25lbnRzL2NvbnRhaW5lcnMvRm9vdGVyL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjc0IsQUFHNEIsQUFTTyxBQUlBLGFBWjBCLE9BU2hELEFBSUEsdUNBWm9CLGtCQUNLLG1HQUNaLFdBQ0MsWUFDZCIsImZpbGUiOiIvVXNlcnMvdG9uZ2VyZW4vY29kZS9jaGl0dGF3ZWxhLW5leHQvY29tcG9uZW50cy9jb250YWluZXJzL0Zvb3Rlci9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IE11c2ljIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVUkvTXVzaWMvTXVzaWMnO1xuaW1wb3J0IEFuaW1hdGVkSWNvblRyaXBsZUNoZXZyb25Eb3duIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9BbmltYXRlZEljb25UcmlwbGVDaGV2cm9uRG93bi9BbmltYXRlZEljb25UcmlwbGVDaGV2cm9uRG93bic7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyICgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17J0Zvb3Rlcid9PlxuICAgICAgICAgICAgey8qIDxNdXNpYyBjbGFzc05hbWU9e2NsYXNzZXMuVG9nZ2xlTXVzaWN9IC8+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydOZXh0UGFnZSd9PlxuICAgICAgICAgICAgICA8QW5pbWF0ZWRJY29uVHJpcGxlQ2hldnJvbkRvd24gLz5cbiAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLkZvb3RlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXZ3IDEwdncgMzB2dyAxMHZ3IDQ1dnc7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJvdHRvbTogNHZoO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIC5Ub2dnbGVNdXNpYyB7XG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAuTmV4dFBhZ2Uge1xuICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0ZyYWdtZW50PiAgXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ== */\n/*@ sourceURL=/Users/tongeren/code/chittawela-next/components/containers/Footer/Footer.js */",
        __self: this
      }));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/hoc/withLayout.js":
/*!**************************************!*\
  !*** ./components/hoc/withLayout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/Layout */ "./layouts/Layout.js");
var _jsxFileName = "/Users/tongeren/code/chittawela-next/components/hoc/withLayout.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (function (Component) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    })));
  };
});

/***/ }),

/***/ "./components/routes/Routes.js":
/*!*************************************!*\
  !*** ./components/routes/Routes.js ***!
  \*************************************/
/*! exports provided: routes, nextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPage", function() { return nextPage; });
var routes = [{
  path: "/",
  navText: "Home"
}, {
  path: "/explore",
  navText: "Explore"
}, {
  path: "/guide",
  navText: "Your Guide"
}, {
  path: "/sanctuary",
  navText: "Your Sanctuary"
}, {
  path: "/about",
  navText: "Chittawela"
}, {
  path: "/contact",
  navText: "Contact Us"
}];
var noOfRoutes = routes.length;
var nextPage = function nextPage(currentPath) {
  var matchPath = function matchPath(ele) {
    return ele.path === currentPath;
  };

  var index = routes.findIndex(matchPath);
  var offset = -index; // if at the end then go back to home 

  if (index < noOfRoutes - 1) {
    offset = 1;
  }

  return routes[index + offset].path;
};

/***/ }),

/***/ "./layouts/Layout.js":
/*!***************************!*\
  !*** ./layouts/Layout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_components_navigation_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components/navigation/Toolbar/Toolbar */ "./components/components/navigation/Toolbar/Toolbar.js");
/* harmony import */ var _components_components_navigation_SideDrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components/navigation/SideDrawer/SideDrawer */ "./components/components/navigation/SideDrawer/SideDrawer.js");
/* harmony import */ var _components_containers_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/containers/Footer/Footer */ "./components/containers/Footer/Footer.js");
/* harmony import */ var _NormalizeCss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NormalizeCss */ "./layouts/NormalizeCss.js");
/* harmony import */ var _TrueGlobalCss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TrueGlobalCss */ "./layouts/TrueGlobalCss.js");
var _jsxFileName = "/Users/tongeren/code/chittawela-next/layouts/Layout.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import SEO from '../../marketing/SEO/SEO';




var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showSideDrawer: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sideDrawerClosedHandler", function () {
      _this.setState({
        showSideDrawer: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sideDrawerToggledHandler", function () {
      _this.setState(function (prevState) {
        return {
          showSideDrawer: !prevState.showSideDrawer
        };
      });
    });

    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_components_navigation_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        drawerToggleClicked: this.sideDrawerToggledHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_components_navigation_SideDrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        open: this.state.showSideDrawer,
        closed: this.sideDrawerClosedHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "Main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_containers_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NormalizeCss__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TrueGlobalCss__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./layouts/NormalizeCss.js":
/*!*********************************!*\
  !*** ./layouts/NormalizeCss.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tongeren/code/chittawela-next/layouts/NormalizeCss.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3601121418",
    css: "body{display:block;margin:0;}p{margin-block-start:0;margin-block-end:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9sYXlvdXRzL05vcm1hbGl6ZUNzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDdUIsQUFHMkIsQUFLTyxjQUpaLE9BS1UsRUFKdkIsaUJBS0EiLCJmaWxlIjoiL1VzZXJzL3RvbmdlcmVuL2NvZGUvY2hpdHRhd2VsYS1uZXh0L2xheW91dHMvTm9ybWFsaXplQ3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgICAgXG4gICAgICAgIGJvZHkgeyBcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwOyAgXG4gICAgICAgIH1cblxuICAgICAgICBwIHsgIFxuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgfSBcbiAgICBgfVxuICAgIDwvc3R5bGU+XG4pOyJdfQ== */\n/*@ sourceURL=/Users/tongeren/code/chittawela-next/layouts/NormalizeCss.js */",
    __self: this
  });
});

/***/ }),

/***/ "./layouts/TrueGlobalCss.js":
/*!**********************************!*\
  !*** ./layouts/TrueGlobalCss.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tongeren/code/chittawela-next/layouts/TrueGlobalCss.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1569373768",
    css: ".Main{background-color:ivory;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b25nZXJlbi9jb2RlL2NoaXR0YXdlbGEtbmV4dC9sYXlvdXRzL1RydWVHbG9iYWxDc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ3VCLEFBR29DLHVCQUMzQiIsImZpbGUiOiIvVXNlcnMvdG9uZ2VyZW4vY29kZS9jaGl0dGF3ZWxhLW5leHQvbGF5b3V0cy9UcnVlR2xvYmFsQ3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5NYWluIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xuICAgICAgICB9ICAgICBcbiAgICBgfVxuICAgIDwvc3R5bGU+XG4pOyJdfQ== */\n/*@ sourceURL=/Users/tongeren/code/chittawela-next/layouts/TrueGlobalCss.js */",
    __self: this
  });
});

/***/ }),

/***/ "./pages/sanctuary.js":
/*!****************************!*\
  !*** ./pages/sanctuary.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hoc_withLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hoc/withLayout */ "./components/hoc/withLayout.js");
var _jsxFileName = "/Users/tongeren/code/chittawela-next/pages/sanctuary.js";


/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hoc_withLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "__TO_FINISH__");
}));

/***/ }),

/***/ "./static/icons/Menu.svg":
/*!*******************************!*\
  !*** ./static/icons/Menu.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLSBHb29nbGUgTWF0ZXJpYWwgRGVzaWduIC8gTW9ub2Nocm9tZSAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1OXB4IiBoZWlnaHQ9IjQ1OXB4IiB2aWV3Qm94PSIwIDAgNDU5IDQ1OSIgc3R5bGU9ImZpbGw6IHdoaXRlc21va2U7IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8ZyBpZD0ibWVudSI+DQoJCTxwYXRoIGQ9Ik0wLDM4Mi41aDQ1OXYtNTFIMFYzODIuNXogTTAsMjU1aDQ1OXYtNTFIMFYyNTV6IE0wLDc2LjV2NTFoNDU5di01MUgweiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./static/icons/TripleChevronDown.svg":
/*!********************************************!*\
  !*** ./static/icons/TripleChevronDown.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NzIuNjgyIDQ3Mi42ODIiIHN0eWxlPSJmaWxsOiB3aGl0ZXNtb2tlOyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDcyLjY4MiA0NzIuNjgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwb2x5Z29uIHBvaW50cz0iMjM1LjI3Miw0MTcuMDcyIDM2LjM2LDI1Ni42NiA4LjU1NSwyOTAuODgxIDIzNS4yNzIsNDcyLjY4MiA0NjQuMTI3LDI5MC44ODEgNDM4LjQ2MSwyNTYuNjYgCQkJIi8+CgkJCTxwb2x5Z29uIHBvaW50cz0iNDY0LjEyNywzNC4yMjEgNDM4LjQ2MSwwIDIzNS4yNzIsMTYwLjQxMiAzNi4zNiwwIDguNTU1LDM0LjIyMSAyMzUuMjcyLDIxNi4wMjIgCQkJIi8+CgkJCTxwb2x5Z29uIHBvaW50cz0iMjM1LjI3MiwyODguNzQyIDM2LjM2LDEyOC4zMyA4LjU1NSwxNjIuNTUxIDIzNS4yNzIsMzQ0LjM1MiA0NjQuMTI3LDE2Mi41NTEgNDM4LjQ2MSwxMjguMzMgCQkJIi8+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/sanctuary.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/sanctuary.js */"./pages/sanctuary.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=sanctuary.js.map