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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes_personRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/personRoute */ \"./src/routes/personRoute.ts\");\n\r\n\r\n\r\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()({\r\n    origin: \"http://localhost:3000\"\r\n}));\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\r\napp.use(\"/api/person\", _routes_personRoute__WEBPACK_IMPORTED_MODULE_2__.default);\r\napp.get(\"/\", function (_, res) {\r\n    return res.send(\"Hello, World!\");\r\n});\r\nvar PORT = process.env.PORT || 3001;\r\napp.listen(PORT, function () { return console.log(\"Server listening at port \" + PORT); });\r\n\n\n//# sourceURL=webpack://backend/./src/index.ts?");

/***/ }),

/***/ "./src/models/Person.ts":
/*!******************************!*\
  !*** ./src/models/Person.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (sequelize, type) {\r\n    return sequelize.define('person', {\r\n        id: {\r\n            type: type.INTEGER,\r\n            primaryKey: true,\r\n            autoIncrement: true\r\n        },\r\n        first_name: type.STRING,\r\n        last_name: type.STRING,\r\n        address: type.STRING\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://backend/./src/models/Person.ts?");

/***/ }),

/***/ "./src/routes/personRoute.ts":
/*!***********************************!*\
  !*** ./src/routes/personRoute.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sevices_personService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sevices/personService */ \"./src/sevices/personService.ts\");\n\r\n\r\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\nrouter\r\n    .route(\"/\")\r\n    .get(_sevices_personService__WEBPACK_IMPORTED_MODULE_1__.getAllPersons)\r\n    .post(_sevices_personService__WEBPACK_IMPORTED_MODULE_1__.createPerson);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://backend/./src/routes/personRoute.ts?");

/***/ }),

/***/ "./src/sequalize.ts":
/*!**************************!*\
  !*** ./src/sequalize.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Person */ \"./src/models/Person.ts\");\n\r\n\r\nvar sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize({\r\n    dialect: \"sqlite\",\r\n    storage: \"db.sqlite\"\r\n});\r\nvar Person = (0,_models_Person__WEBPACK_IMPORTED_MODULE_1__.default)(sequelize, sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize);\r\nsequelize.sync()\r\n    .then(function () { return console.log(\"Persons db and person table have been created\"); });\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Person);\r\n\n\n//# sourceURL=webpack://backend/./src/sequalize.ts?");

/***/ }),

/***/ "./src/sevices/personService.ts":
/*!**************************************!*\
  !*** ./src/sevices/personService.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllPersons\": () => (/* binding */ getAllPersons),\n/* harmony export */   \"createPerson\": () => (/* binding */ createPerson)\n/* harmony export */ });\n/* harmony import */ var _sequalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sequalize */ \"./src/sequalize.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nvar getAllPersons = function (_, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var persons;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, _sequalize__WEBPACK_IMPORTED_MODULE_0__.default.findAll({ order: [['id', 'DESC']] })];\r\n            case 1:\r\n                persons = _a.sent();\r\n                return [2 /*return*/, res.json(persons)];\r\n        }\r\n    });\r\n}); };\r\nvar createPerson = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, name, surname, address, person, _b;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                _a = req.body, name = _a.name, surname = _a.surname, address = _a.address;\r\n                if (!name || !surname) {\r\n                    return [2 /*return*/, res.status(400).json({ error: \"Name and surname must be provided\" })];\r\n                }\r\n                _c.label = 1;\r\n            case 1:\r\n                _c.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, _sequalize__WEBPACK_IMPORTED_MODULE_0__.default.create({\r\n                        first_name: name,\r\n                        last_name: surname,\r\n                        address: address\r\n                    })];\r\n            case 2:\r\n                person = _c.sent();\r\n                return [2 /*return*/, res.json(person)];\r\n            case 3:\r\n                _b = _c.sent();\r\n                return [2 /*return*/, res.status(400).json({ error: \"Something went wrong\" })];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack://backend/./src/sevices/personService.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;