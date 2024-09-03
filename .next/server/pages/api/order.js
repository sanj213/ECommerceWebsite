module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/order/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ \"./models/userModel.js\");\n\n\nconst auth = async (req, res) => {\n  const token = req.headers.authorization;\n  if (!token) return res.status(400).json({\n    err: 'Invalid Authentication.'\n  });\n  const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, \"sanj4020228718061949\");\n  if (!decoded) return res.status(400).json({\n    err: 'Invalid Authentication.'\n  });\n  const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n    _id: decoded.id\n  });\n  return {\n    id: user._id,\n    role: user.role,\n    root: user.root\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL2F1dGguanM/MTRjMiJdLCJuYW1lcyI6WyJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwiand0IiwidmVyaWZ5IiwicHJvY2VzcyIsInVzZXIiLCJVc2VycyIsImZpbmRPbmUiLCJfaWQiLCJpZCIsInJvbGUiLCJyb290Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUNTO0FBR3ZDLE1BQU1BLElBQUksR0FBRyxNQUFBQSxDQUFPQyxHQUFHLEVBQUVDLEdBQUcsS0FBSztFQUM3QixNQUFNQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQ0csT0FBTyxDQUFDQyxhQUFhO0VBQ3ZDLElBQUcsQ0FBQ0YsS0FBSyxFQUFFLE9BQU9ELEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7SUFBQ0MsR0FBRyxFQUFFO0VBQXlCLENBQUMsQ0FBQztFQUV4RSxNQUFNQyxPQUFPLEdBQUdDLG1EQUFHLENBQUNDLE1BQU0sQ0FBQ1IsS0FBSyxFQUFFUyxzQkFBK0IsQ0FBQztFQUNsRSxJQUFHLENBQUNILE9BQU8sRUFBRSxPQUFPUCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO0lBQUNDLEdBQUcsRUFBRTtFQUF5QixDQUFDLENBQUM7RUFFMUUsTUFBTUssSUFBSSxHQUFHLE1BQU1DLHlEQUFLLENBQUNDLE9BQU8sQ0FBQztJQUFDQyxHQUFHLEVBQUVQLE9BQU8sQ0FBQ1E7RUFBRSxDQUFDLENBQUM7RUFFbkQsT0FBTztJQUFDQSxFQUFFLEVBQUVKLElBQUksQ0FBQ0csR0FBRztJQUFFRSxJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTtJQUFFQyxJQUFJLEVBQUVOLElBQUksQ0FBQ007RUFBSSxDQUFDO0FBQzNELENBQUM7QUFHY25CLG1FQUFJIiwiZmlsZSI6Ii4vbWlkZGxld2FyZS9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vbW9kZWxzL3VzZXJNb2RlbCdcblxuXG5jb25zdCBhdXRoID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICAgIGlmKCF0b2tlbikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdJbnZhbGlkIEF1dGhlbnRpY2F0aW9uLid9KVxuXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpXG4gICAgaWYoIWRlY29kZWQpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnSW52YWxpZCBBdXRoZW50aWNhdGlvbi4nfSlcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHtfaWQ6IGRlY29kZWQuaWR9KVxuXG4gICAgcmV0dXJuIHtpZDogdXNlci5faWQsIHJvbGU6IHVzZXIucm9sZSwgcm9vdDogdXNlci5yb290fTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middleware/auth.js\n");

/***/ }),

/***/ "./models/orderModel.js":
/*!******************************!*\
  !*** ./models/orderModel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst orderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  user: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ObjectId,\n    ref: 'user'\n  },\n  address: String,\n  mobile: String,\n  cart: Array,\n  total: Number,\n  paymentId: String,\n  method: String,\n  delivered: {\n    type: Boolean,\n    default: false\n  },\n  paid: {\n    type: Boolean,\n    default: false\n  },\n  dateOfPayment: Date\n}, {\n  timestamps: true\n});\nlet Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.order || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('order', orderSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dataset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvb3JkZXJNb2RlbC5qcz9kMGE2Il0sIm5hbWVzIjpbIm9yZGVyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ1c2VyIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJhZGRyZXNzIiwiU3RyaW5nIiwibW9iaWxlIiwiY2FydCIsIkFycmF5IiwidG90YWwiLCJOdW1iZXIiLCJwYXltZW50SWQiLCJtZXRob2QiLCJkZWxpdmVyZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsInBhaWQiLCJkYXRlT2ZQYXltZW50IiwiRGF0ZSIsInRpbWVzdGFtcHMiLCJEYXRhc2V0IiwibW9kZWxzIiwib3JkZXIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQStCO0FBRS9CLE1BQU1BLFdBQVcsR0FBRyxJQUFJQywrQ0FBUSxDQUFDQyxNQUFNLENBQUM7RUFDcENDLElBQUksRUFBRTtJQUNGQyxJQUFJLEVBQUVILCtDQUFRLENBQUNJLEtBQUssQ0FBQ0MsUUFBUTtJQUM3QkMsR0FBRyxFQUFFO0VBQ1QsQ0FBQztFQUNEQyxPQUFPLEVBQUVDLE1BQU07RUFDZkMsTUFBTSxFQUFFRCxNQUFNO0VBQ2RFLElBQUksRUFBRUMsS0FBSztFQUNYQyxLQUFLLEVBQUVDLE1BQU07RUFDYkMsU0FBUyxFQUFFTixNQUFNO0VBQ2pCTyxNQUFNLEVBQUVQLE1BQU07RUFDZFEsU0FBUyxFQUFFO0lBQ1BiLElBQUksRUFBRWMsT0FBTztJQUNiQyxPQUFPLEVBQUU7RUFDYixDQUFDO0VBQ0RDLElBQUksRUFBRTtJQUNGaEIsSUFBSSxFQUFFYyxPQUFPO0lBQ2JDLE9BQU8sRUFBRTtFQUNiLENBQUM7RUFDREUsYUFBYSxFQUFFQztBQUNuQixDQUFDLEVBQUU7RUFDQ0MsVUFBVSxFQUFFO0FBQ2hCLENBQUMsQ0FBQztBQUVGLElBQUlDLE9BQU8sR0FBR3ZCLCtDQUFRLENBQUN3QixNQUFNLENBQUNDLEtBQUssSUFBSXpCLCtDQUFRLENBQUMwQixLQUFLLENBQUMsT0FBTyxFQUFFM0IsV0FBVyxDQUFDO0FBQzVEd0Isc0VBQU8iLCJmaWxlIjoiLi9tb2RlbHMvb3JkZXJNb2RlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3Qgb3JkZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB1c2VyOiB7XG4gICAgICAgIHR5cGU6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkLFxuICAgICAgICByZWY6ICd1c2VyJ1xuICAgIH0sXG4gICAgYWRkcmVzczogU3RyaW5nLFxuICAgIG1vYmlsZTogU3RyaW5nLFxuICAgIGNhcnQ6IEFycmF5LFxuICAgIHRvdGFsOiBOdW1iZXIsXG4gICAgcGF5bWVudElkOiBTdHJpbmcsXG4gICAgbWV0aG9kOiBTdHJpbmcsXG4gICAgZGVsaXZlcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBwYWlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBkYXRlT2ZQYXltZW50OiBEYXRlXG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSlcblxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMub3JkZXIgfHwgbW9uZ29vc2UubW9kZWwoJ29yZGVyJywgb3JkZXJTY2hlbWEpXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/orderModel.js\n");

/***/ }),

/***/ "./models/productModel.js":
/*!********************************!*\
  !*** ./models/productModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  title: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  price: {\n    type: Number,\n    required: true,\n    trim: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  content: {\n    type: String,\n    required: true\n  },\n  images: {\n    type: Array,\n    required: true\n  },\n  category: {\n    type: String,\n    required: true\n  },\n  checked: {\n    type: Boolean,\n    default: false\n  },\n  inStock: {\n    type: Number,\n    default: 0\n  },\n  sold: {\n    type: Number,\n    default: 0\n  }\n}, {\n  timestamps: true\n});\nlet Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('product', productSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dataset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvcHJvZHVjdE1vZGVsLmpzPzcyMjUiXSwibmFtZXMiOlsicHJvZHVjdFNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2UiLCJOdW1iZXIiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJBcnJheSIsImNhdGVnb3J5IiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaW5TdG9jayIsInNvbGQiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsInByb2R1Y3QiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQStCO0FBRS9CLE1BQU1BLGFBQWEsR0FBRyxJQUFJQywrQ0FBUSxDQUFDQyxNQUFNLENBQUM7RUFDdENDLEtBQUssRUFBRTtJQUNIQyxJQUFJLEVBQUVDLE1BQU07SUFDWkMsUUFBUSxFQUFFLElBQUk7SUFDZEMsSUFBSSxFQUFFO0VBQ1YsQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDSEosSUFBSSxFQUFFSyxNQUFNO0lBQ1pILFFBQVEsRUFBRSxJQUFJO0lBQ2RDLElBQUksRUFBRTtFQUNWLENBQUM7RUFDREcsV0FBVyxFQUFFO0lBQ1ROLElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUU7RUFDZCxDQUFDO0VBQ0RLLE9BQU8sRUFBRTtJQUNMUCxJQUFJLEVBQUVDLE1BQU07SUFDWkMsUUFBUSxFQUFFO0VBQ2QsQ0FBQztFQUNETSxNQUFNLEVBQUU7SUFDSlIsSUFBSSxFQUFFUyxLQUFLO0lBQ1hQLFFBQVEsRUFBRTtFQUNkLENBQUM7RUFDRFEsUUFBUSxFQUFFO0lBQ05WLElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUU7RUFDZCxDQUFDO0VBQ0RTLE9BQU8sRUFBRTtJQUNMWCxJQUFJLEVBQUVZLE9BQU87SUFDYkMsT0FBTyxFQUFFO0VBQ2IsQ0FBQztFQUNEQyxPQUFPLEVBQUU7SUFDTGQsSUFBSSxFQUFFSyxNQUFNO0lBQ1pRLE9BQU8sRUFBRTtFQUNiLENBQUM7RUFDREUsSUFBSSxFQUFFO0lBQ0ZmLElBQUksRUFBRUssTUFBTTtJQUNaUSxPQUFPLEVBQUU7RUFDYjtBQUNKLENBQUMsRUFBRTtFQUNDRyxVQUFVLEVBQUU7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsSUFBSUMsT0FBTyxHQUFHcEIsK0NBQVEsQ0FBQ3FCLE1BQU0sQ0FBQ0MsT0FBTyxJQUFJdEIsK0NBQVEsQ0FBQ3VCLEtBQUssQ0FBQyxTQUFTLEVBQUV4QixhQUFhLENBQUM7QUFDbEVxQixzRUFBTyIsImZpbGUiOiIuL21vZGVscy9wcm9kdWN0TW9kZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0cmltOiB0cnVlXG4gICAgfSxcbiAgICBwcmljZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0cmltOiB0cnVlXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGltYWdlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNhdGVnb3J5OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGluU3RvY2s6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBzb2xkOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMFxuICAgIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KVxuXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy5wcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdwcm9kdWN0JywgcHJvZHVjdFNjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/productModel.js\n");

/***/ }),

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  role: {\n    type: String,\n    default: 'user'\n  },\n  root: {\n    type: Boolean,\n    default: false\n  },\n  avatar: {\n    type: String,\n    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'\n  }\n}, {\n  timestamps: true\n});\nlet Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.user || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('user', userSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dataset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvdXNlck1vZGVsLmpzP2MwNGEiXSwibmFtZXMiOlsidXNlclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJyb2xlIiwiZGVmYXVsdCIsInJvb3QiLCJCb29sZWFuIiwiYXZhdGFyIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUUvQixNQUFNQSxVQUFVLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsTUFBTSxDQUFDO0VBQ25DQyxJQUFJLEVBQUU7SUFDRkMsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLFFBQVEsRUFBRTtFQUNkLENBQUM7RUFDREMsS0FBSyxFQUFFO0lBQ0hILElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNkRSxNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0RDLFFBQVEsRUFBRTtJQUNOTCxJQUFJLEVBQUVDLE1BQU07SUFDWkMsUUFBUSxFQUFFO0VBQ2QsQ0FBQztFQUNESSxJQUFJLEVBQUU7SUFDRk4sSUFBSSxFQUFFQyxNQUFNO0lBQ1pNLE9BQU8sRUFBRTtFQUNiLENBQUM7RUFDREMsSUFBSSxFQUFFO0lBQ0ZSLElBQUksRUFBRVMsT0FBTztJQUNiRixPQUFPLEVBQUU7RUFDYixDQUFDO0VBQ0RHLE1BQU0sRUFBRTtJQUNKVixJQUFJLEVBQUVDLE1BQU07SUFDWk0sT0FBTyxFQUFFO0VBQ2I7QUFDSixDQUFDLEVBQUU7RUFDQ0ksVUFBVSxFQUFFO0FBQ2hCLENBQUMsQ0FBQztBQUVGLElBQUlDLE9BQU8sR0FBR2YsK0NBQVEsQ0FBQ2dCLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJakIsK0NBQVEsQ0FBQ2tCLEtBQUssQ0FBQyxNQUFNLEVBQUVuQixVQUFVLENBQUM7QUFDekRnQixzRUFBTyIsImZpbGUiOiIuL21vZGVscy91c2VyTW9kZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICd1c2VyJ1xuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RldmF0Y2hhbm5lbC9pbWFnZS91cGxvYWQvdjE2MDI3NTI0MDIvYXZhdGFyL2F2YXRhcl9jdWdxNDAucG5nJ1xuICAgIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KVxuXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/userModel.js\n");

/***/ }),

/***/ "./pages/api/order/index.js":
/*!**********************************!*\
  !*** ./pages/api/order/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"./utils/connectDB.js\");\n/* harmony import */ var _models_orderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/orderModel */ \"./models/orderModel.js\");\n/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/productModel */ \"./models/productModel.js\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../middleware/auth */ \"./middleware/auth.js\");\n\n\n\n\nObject(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  switch (req.method) {\n    case \"POST\":\n      await createOrder(req, res);\n      break;\n    case \"GET\":\n      await getOrders(req, res);\n      break;\n  }\n});\nconst getOrders = async (req, res) => {\n  try {\n    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req, res);\n    let orders;\n    if (result.role !== 'admin') {\n      orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n        user: result.id\n      }).populate(\"user\", \"-password\");\n    } else {\n      orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find().populate(\"user\", \"-password\");\n    }\n    res.json({\n      orders\n    });\n  } catch (err) {\n    return res.status(500).json({\n      err: err.message\n    });\n  }\n};\nconst createOrder = async (req, res) => {\n  try {\n    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req, res);\n    const {\n      address,\n      mobile,\n      cart,\n      total\n    } = req.body;\n    const newOrder = new _models_orderModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      user: result.id,\n      address,\n      mobile,\n      cart,\n      total\n    });\n    cart.filter(item => {\n      return sold(item._id, item.quantity, item.inStock, item.sold);\n    });\n    await newOrder.save();\n    res.json({\n      msg: 'Order success! We will contact you to confirm the order.',\n      newOrder\n    });\n  } catch (err) {\n    return res.status(500).json({\n      err: err.message\n    });\n  }\n};\nconst sold = async (id, quantity, oldInStock, oldSold) => {\n  await _models_productModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOneAndUpdate({\n    _id: id\n  }, {\n    inStock: oldInStock - quantity,\n    sold: quantity + oldSold\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvb3JkZXIvaW5kZXguanM/NDYyZCJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjcmVhdGVPcmRlciIsImdldE9yZGVycyIsInJlc3VsdCIsImF1dGgiLCJvcmRlcnMiLCJyb2xlIiwiT3JkZXJzIiwiZmluZCIsInVzZXIiLCJpZCIsInBvcHVsYXRlIiwianNvbiIsImVyciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJhZGRyZXNzIiwibW9iaWxlIiwiY2FydCIsInRvdGFsIiwiYm9keSIsIm5ld09yZGVyIiwiZmlsdGVyIiwiaXRlbSIsInNvbGQiLCJfaWQiLCJxdWFudGl0eSIsImluU3RvY2siLCJzYXZlIiwibXNnIiwib2xkSW5TdG9jayIsIm9sZFNvbGQiLCJQcm9kdWN0cyIsImZpbmRPbmVBbmRVcGRhdGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDRDtBQUNJO0FBQ1I7QUFFM0NBLGdFQUFTLENBQUMsQ0FBQztBQUVJLHNFQUFPQyxHQUFHLEVBQUVDLEdBQUcsS0FBSztFQUMvQixRQUFPRCxHQUFHLENBQUNFLE1BQU07SUFDYixLQUFLLE1BQU07TUFDUCxNQUFNQyxXQUFXLENBQUNILEdBQUcsRUFBRUMsR0FBRyxDQUFDO01BQzNCO0lBQ0osS0FBSyxLQUFLO01BQ04sTUFBTUcsU0FBUyxDQUFDSixHQUFHLEVBQUVDLEdBQUcsQ0FBQztNQUN6QjtFQUNSO0FBQ0osQ0FBQztBQUVELE1BQU1HLFNBQVMsR0FBRyxNQUFBQSxDQUFPSixHQUFHLEVBQUVDLEdBQUcsS0FBSztFQUNsQyxJQUFJO0lBQ0EsTUFBTUksTUFBTSxHQUFHLE1BQU1DLGdFQUFJLENBQUNOLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBRW5DLElBQUlNLE1BQU07SUFDVixJQUFHRixNQUFNLENBQUNHLElBQUksS0FBSyxPQUFPLEVBQUM7TUFDdkJELE1BQU0sR0FBRyxNQUFNRSwwREFBTSxDQUFDQyxJQUFJLENBQUM7UUFBQ0MsSUFBSSxFQUFFTixNQUFNLENBQUNPO01BQUUsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDO0lBQy9FLENBQUMsTUFBSTtNQUNETixNQUFNLEdBQUcsTUFBTUUsMERBQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQ0csUUFBUSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7SUFDOUQ7SUFFQVosR0FBRyxDQUFDYSxJQUFJLENBQUM7TUFBQ1A7SUFBTSxDQUFDLENBQUM7RUFDdEIsQ0FBQyxDQUFDLE9BQU9RLEdBQUcsRUFBRTtJQUNWLE9BQU9kLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRixJQUFJLENBQUM7TUFBQ0MsR0FBRyxFQUFFQSxHQUFHLENBQUNFO0lBQU8sQ0FBQyxDQUFDO0VBQ25EO0FBQ0osQ0FBQztBQUVELE1BQU1kLFdBQVcsR0FBRyxNQUFBQSxDQUFPSCxHQUFHLEVBQUVDLEdBQUcsS0FBSztFQUNwQyxJQUFJO0lBQ0EsTUFBTUksTUFBTSxHQUFHLE1BQU1DLGdFQUFJLENBQUNOLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQ25DLE1BQU07TUFBRWlCLE9BQU87TUFBRUMsTUFBTTtNQUFFQyxJQUFJO01BQUVDO0lBQU0sQ0FBQyxHQUFHckIsR0FBRyxDQUFDc0IsSUFBSTtJQUVqRCxNQUFNQyxRQUFRLEdBQUcsSUFBSWQsMERBQU0sQ0FBQztNQUN4QkUsSUFBSSxFQUFFTixNQUFNLENBQUNPLEVBQUU7TUFBRU0sT0FBTztNQUFFQyxNQUFNO01BQUVDLElBQUk7TUFBRUM7SUFDNUMsQ0FBQyxDQUFDO0lBRUZELElBQUksQ0FBQ0ksTUFBTSxDQUFDQyxJQUFJLElBQUk7TUFDaEIsT0FBT0MsSUFBSSxDQUFDRCxJQUFJLENBQUNFLEdBQUcsRUFBRUYsSUFBSSxDQUFDRyxRQUFRLEVBQUVILElBQUksQ0FBQ0ksT0FBTyxFQUFFSixJQUFJLENBQUNDLElBQUksQ0FBQztJQUNqRSxDQUFDLENBQUM7SUFFRixNQUFNSCxRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0lBRXJCN0IsR0FBRyxDQUFDYSxJQUFJLENBQUM7TUFDTGlCLEdBQUcsRUFBRSwwREFBMEQ7TUFDL0RSO0lBQ0osQ0FBQyxDQUFDO0VBRU4sQ0FBQyxDQUFDLE9BQU9SLEdBQUcsRUFBRTtJQUNWLE9BQU9kLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRixJQUFJLENBQUM7TUFBQ0MsR0FBRyxFQUFFQSxHQUFHLENBQUNFO0lBQU8sQ0FBQyxDQUFDO0VBQ25EO0FBQ0osQ0FBQztBQUVELE1BQU1TLElBQUksR0FBRyxNQUFBQSxDQUFPZCxFQUFFLEVBQUVnQixRQUFRLEVBQUVJLFVBQVUsRUFBRUMsT0FBTyxLQUFLO0VBQ3RELE1BQU1DLDREQUFRLENBQUNDLGdCQUFnQixDQUFDO0lBQUNSLEdBQUcsRUFBRWY7RUFBRSxDQUFDLEVBQUU7SUFDdkNpQixPQUFPLEVBQUVHLFVBQVUsR0FBR0osUUFBUTtJQUM5QkYsSUFBSSxFQUFFRSxRQUFRLEdBQUdLO0VBQ3JCLENBQUMsQ0FBQztBQUNOLENBQUMiLCJmaWxlIjoiLi9wYWdlcy9hcGkvb3JkZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL29yZGVyTW9kZWwnXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Byb2R1Y3RNb2RlbCdcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCdcblxuY29ubmVjdERCKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgc3dpdGNoKHJlcS5tZXRob2Qpe1xuICAgICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlT3JkZXIocmVxLCByZXMpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkdFVFwiOlxuICAgICAgICAgICAgYXdhaXQgZ2V0T3JkZXJzKHJlcSwgcmVzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5jb25zdCBnZXRPcmRlcnMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxuXG4gICAgICAgIGxldCBvcmRlcnM7XG4gICAgICAgIGlmKHJlc3VsdC5yb2xlICE9PSAnYWRtaW4nKXtcbiAgICAgICAgICAgIG9yZGVycyA9IGF3YWl0IE9yZGVycy5maW5kKHt1c2VyOiByZXN1bHQuaWR9KS5wb3B1bGF0ZShcInVzZXJcIiwgXCItcGFzc3dvcmRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBvcmRlcnMgPSBhd2FpdCBPcmRlcnMuZmluZCgpLnBvcHVsYXRlKFwidXNlclwiLCBcIi1wYXNzd29yZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzLmpzb24oe29yZGVyc30pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVPcmRlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpXG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcywgbW9iaWxlLCBjYXJ0LCB0b3RhbCB9ID0gcmVxLmJvZHlcblxuICAgICAgICBjb25zdCBuZXdPcmRlciA9IG5ldyBPcmRlcnMoe1xuICAgICAgICAgICAgdXNlcjogcmVzdWx0LmlkLCBhZGRyZXNzLCBtb2JpbGUsIGNhcnQsIHRvdGFsXG4gICAgICAgIH0pXG5cbiAgICAgICAgY2FydC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc29sZChpdGVtLl9pZCwgaXRlbS5xdWFudGl0eSwgaXRlbS5pblN0b2NrLCBpdGVtLnNvbGQpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgbmV3T3JkZXIuc2F2ZSgpXG5cbiAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgbXNnOiAnT3JkZXIgc3VjY2VzcyEgV2Ugd2lsbCBjb250YWN0IHlvdSB0byBjb25maXJtIHRoZSBvcmRlci4nLFxuICAgICAgICAgICAgbmV3T3JkZXJcbiAgICAgICAgfSlcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn1cblxuY29uc3Qgc29sZCA9IGFzeW5jIChpZCwgcXVhbnRpdHksIG9sZEluU3RvY2ssIG9sZFNvbGQpID0+IHtcbiAgICBhd2FpdCBQcm9kdWN0cy5maW5kT25lQW5kVXBkYXRlKHtfaWQ6IGlkfSwge1xuICAgICAgICBpblN0b2NrOiBvbGRJblN0b2NrIC0gcXVhbnRpdHksXG4gICAgICAgIHNvbGQ6IHF1YW50aXR5ICsgb2xkU29sZFxuICAgIH0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/order/index.js\n");

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = () => {\n  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {\n    console.log('Already connected.');\n    return;\n  }\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://sanj:sanju213@cluster0.kpjeomb.mongodb.net/ecommerceweb?retryWrites=true&w=majority\", {\n    useCreateIndex: true,\n    useFindAndModify: false,\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  }, err => {\n    if (err) throw err;\n    console.log('Connected to mongodb.');\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0REIuanM/YjdkNCJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJtb25nb29zZSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQStCO0FBRS9CLE1BQU1BLFNBQVMsR0FBR0EsQ0FBQSxLQUFNO0VBQ3BCLElBQUdDLCtDQUFRLENBQUNDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxFQUFDO0lBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztJQUNqQztFQUNKO0VBQ0FKLCtDQUFRLENBQUNLLE9BQU8sQ0FBQ0MsbUdBQXVCLEVBQUU7SUFDdENDLGNBQWMsRUFBRSxJQUFJO0lBQ3BCQyxnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCQyxlQUFlLEVBQUUsSUFBSTtJQUNyQkMsa0JBQWtCLEVBQUU7RUFDeEIsQ0FBQyxFQUFFQyxHQUFHLElBQUk7SUFDTixJQUFHQSxHQUFHLEVBQUUsTUFBTUEsR0FBRztJQUNqQlIsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7RUFDeEMsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUdjTCx3RUFBUyIsImZpbGUiOiIuL3V0aWxzL2Nvbm5lY3REQi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xuICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJylcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XG4gICAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbiAgICB9LCBlcnIgPT4ge1xuICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/connectDB.js\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });