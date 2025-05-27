/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./PhoneBookMain_ch.css":
/*!******************************!*\
  !*** ./PhoneBookMain_ch.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ex/./PhoneBookMain_ch.css?");

/***/ }),

/***/ "./PhoneBookMain_ch.js":
/*!*****************************!*\
  !*** ./PhoneBookMain_ch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PhoneBookMain_ch_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneBookMain_ch.css */ \"./PhoneBookMain_ch.css\");\n\r\n\r\n\r\n        // 연락처 데이터 배열 (보통은 외부 JSON 파일에서 가져옴)\r\n        const data = [\r\n        {\"id\":\"1\", \"pic\": \"Marvin.png\", \"name\": \"Marvin McKinney\", \"hp\": \"(480) 555-0103\",\"email\" :\"tim.jennings@example.com\" },\r\n            { \"id\":\"2\",\"pic\": \"Eleanor.png\", \"name\": \"Eleanor Pena\", \"hp\": \"(209) 555-0104\",\"email\" :\"Eleanor.123@example.com\"  },\r\n            {\"id\":\"3\", \"pic\": \"Guy.png\", \"name\": \"Guy Hawkins\", \"hp\": \"(307) 555-0133\",\"email\" :\"Strongmarvi@example.com\"  },\r\n            { \"id\":\"4\",\"pic\": \"Esther.png\", \"name\": \"Esther Howard\", \"hp\": \"(239) 555-0108\",\"email\" :\"Esther123@example.com\"  },\r\n            { \"id\":\"5\",\"pic\": \"Kathryn.png\", \"name\": \"Kathryn Murphy\", \"hp\": \"(225) 555-0118\",\"email\" :\"Kathrn123@example.com\"  },\r\n            { \"id\":\"6\",\"pic\": \"Ralph.png\", \"name\": \"Ralgo hover\", \"hp\": \"(808) 555-0111\",\"email\" :\"bill.sanders@example.com\"  }\r\n        ];\r\n\r\n        // 연락처 항목을 삽입할 DOM 요소 선택 (.container)\r\n        const container = document.querySelector(\".container2\");\r\n\r\n        // 연락처 데이터 배열을 순회하면서 각 항목을 HTML로 생성하여 삽입\r\n        data.forEach(obj => {\r\n            // 템플릿 문자열로 연락처 항목 생성\r\n            const contactHTML = `\r\n                <div class=\"contact\">\r\n                    \r\n                    <!-- 이미지를 클릭하면 detail2.html?id=해당 id 로 이동 -->\r\n            <a href=\"detail2.html?id=${obj.id}\">\r\n                <img src=\"${obj.pic}\" alt=\"${obj.name}\">\r\n            </a>\r\n\r\n                    <!-- 이름과 전화번호 목록 -->\r\n                    <ul>\r\n                        <li><strong></strong> ${obj.name}</li>\r\n                        <li><strong></strong> ${obj.hp}</li>\r\n                    </ul>\r\n                </div>\r\n            `;\r\n\r\n            // 생성된 HTML을 .container 내부에 추가\r\n            container.innerHTML += contactHTML;\r\n        });\r\n\n\n//# sourceURL=webpack://ex/./PhoneBookMain_ch.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./PhoneBookMain_ch.js");
/******/ 	
/******/ })()
;