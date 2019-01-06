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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__ = __webpack_require__(/*! @wordpress/blocks */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_editor__ = __webpack_require__(/*! @wordpress/editor */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_editor__);\n\n\n\nvar blockProperties = {\n\ticon: 'editor-code',\n\tcategory: 'formatting',\n\n\tattributes: {\n\t\tcontent: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'text',\n\t\t\tselector: 'pre'\n\t\t}\n\t},\n\n\tsupports: {\n\t\thtml: false\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    className = _ref.className;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_editor__[\"PlainText\"], {\n\t\t\t\tvalue: attributes.content,\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ content: content });\n\t\t\t\t},\n\t\t\t\tplaceholder: 'Write code…'\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\n\t\tvar el = document.createElement('div');\n\t\tel.appendChild(document.createTextNode(attributes.content));\n\n\t\treturn wp.element.createElement(\n\t\t\t'pre',\n\t\t\tnull,\n\t\t\tel.innerHTML\n\t\t);\n\t}\n};\n\nblockProperties.title = 'Viper Test Block: Client';\nObject(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__[\"registerBlockType\"])('viper007bond/test-block-client', blockProperties);\n\nblockProperties.title = 'Viper Test Block: Server';\nObject(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__[\"registerBlockType\"])('viper007bond/test-block-server', blockProperties);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCB7IFBsYWluVGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcblxudmFyIGJsb2NrUHJvcGVydGllcyA9IHtcblx0aWNvbjogJ2VkaXRvci1jb2RlJyxcblx0Y2F0ZWdvcnk6ICdmb3JtYXR0aW5nJyxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Y29udGVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICd0ZXh0Jyxcblx0XHRcdHNlbGVjdG9yOiAncHJlJ1xuXHRcdH1cblx0fSxcblxuXHRzdXBwb3J0czoge1xuXHRcdGh0bWw6IGZhbHNlXG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBsYWluVGV4dCwge1xuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5jb250ZW50LFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgY29udGVudDogY29udGVudCB9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICdXcml0ZSBjb2Rl4oCmJ1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuXG5cdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXR0cmlidXRlcy5jb250ZW50KSk7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J3ByZScsXG5cdFx0XHRudWxsLFxuXHRcdFx0ZWwuaW5uZXJIVE1MXG5cdFx0KTtcblx0fVxufTtcblxuYmxvY2tQcm9wZXJ0aWVzLnRpdGxlID0gJ1ZpcGVyIFRlc3QgQmxvY2s6IENsaWVudCc7XG5yZWdpc3RlckJsb2NrVHlwZSgndmlwZXIwMDdib25kL3Rlc3QtYmxvY2stY2xpZW50JywgYmxvY2tQcm9wZXJ0aWVzKTtcblxuYmxvY2tQcm9wZXJ0aWVzLnRpdGxlID0gJ1ZpcGVyIFRlc3QgQmxvY2s6IFNlcnZlcic7XG5yZWdpc3RlckJsb2NrVHlwZSgndmlwZXIwMDdib25kL3Rlc3QtYmxvY2stc2VydmVyJywgYmxvY2tQcm9wZXJ0aWVzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
/*! dynamic exports provided */
/*! exports used: registerBlockType */
/***/ (function(module, exports) {

module.exports = wp.blocks;

/***/ }),
/* 2 */
/*!****************************!*\
  !*** external "wp.editor" ***!
  \****************************/
/*! dynamic exports provided */
/*! exports used: PlainText */
/***/ (function(module, exports) {

module.exports = wp.editor;

/***/ })
/******/ ]);