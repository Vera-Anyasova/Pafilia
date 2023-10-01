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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/pages/index.css\");\n\nvar cardList = document.querySelector(\"#elements__list\");\nvar buttonPrev = document.querySelector(\".element__prev\");\nvar buttonNext = document.querySelector(\".element__next\");\nvar popup = document.querySelector(\".popup\");\nvar buttonOpenPopup = document.querySelector(\".header__menu\");\nvar links = document.querySelectorAll(\".popup__link\");\n// const link = document.querySelectorAll(\".popup__link\");\n\nvar cards = Array.from(cardList.children);\ncards.forEach(function (item, index) {\n  // Скрываем все слайды, кроме первого\n  if (index !== 0) {\n    item.classList.add(\"hidden\");\n  }\n\n  // Добавляем индексы\n  item.dataset.index = index;\n\n  // Добавляем data атрибут active для первого / активного слайда\n  cards[0].setAttribute(\"data-active\", \"\");\n\n  // Клик по слайдам\n  item.addEventListener(\"click\", function () {\n    showNextCard(\"next\");\n  });\n});\nbuttonNext.onclick = function () {\n  showNextCard(\"next\");\n};\nbuttonPrev.onclick = function () {\n  showNextCard(\"prev\");\n};\nfunction showNextCard(direction) {\n  // Скрываем текущий слайд\n  var currentCard = cardList.querySelector(\"[data-active]\");\n  var currentCardIndex = +currentCard.dataset.index;\n  currentCard.classList.add(\"hidden\");\n  currentCard.removeAttribute(\"data-active\");\n\n  // Расчитываем следующий индекс взависимости от направления движения\n\n  var nextCardIndex;\n  if (direction === \"next\") {\n    nextCardIndex = currentCardIndex + 1 === cards.length ? 0 : currentCardIndex + 1;\n  } else if (direction === \"prev\") {\n    nextCardIndex = currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;\n  }\n\n  // Показываем следующий слайд\n  var nextCard = cardList.querySelector(\"[data-index=\\\"\".concat(nextCardIndex, \"\\\"]\"));\n  nextCard.classList.remove(\"hidden\");\n  nextCard.setAttribute(\"data-active\", \"\");\n}\n\n// Открытие и закрытие попапа\n\nvar openPopup = function openPopup(popup) {\n  popup.classList.add(\"popup_opened\");\n  document.addEventListener(\"keydown\", handleKeyDown);\n};\nvar closePopup = function closePopup(popup) {\n  popup.classList.remove(\"popup_opened\");\n  document.removeEventListener(\"keydown\", handleKeyDown);\n};\n\n// Закрытие попапа нажатием на Esc\n\nfunction handleKeyDown(evt) {\n  if (evt.key === \"Escape\") {\n    closePopup(document.querySelector(\".popup_opened\"));\n  }\n}\n\n// Закрытие попапа кликом на оверлей и на крестик\n\npopup.addEventListener(\"mousedown\", function (evt) {\n  if (evt.target.classList.contains(\"popup_opened\")) {\n    closePopup(popup);\n  }\n  if (evt.target.classList.contains(\"popup__button\")) {\n    closePopup(popup);\n  }\n});\n\n// Открытие попапа при клике по кнопке меню\n\nbuttonOpenPopup.addEventListener(\"click\", function () {\n  openPopup(popup);\n});\n\n// Закрытие попапа при клике на ссылку\n\nlinks.forEach(function (item) {\n  item.addEventListener(\"click\", function () {\n    closePopup(popup);\n  });\n});\n\n//# sourceURL=webpack://pafilia/./src/pages/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pafilia/./src/pages/index.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;