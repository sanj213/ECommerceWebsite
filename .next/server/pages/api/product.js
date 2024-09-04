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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/product/index.js");
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

/***/ "./pages/api/product/index.js":
/*!************************************!*\
  !*** ./pages/api/product/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"./utils/connectDB.js\");\n/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/productModel */ \"./models/productModel.js\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ \"./middleware/auth.js\");\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nObject(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  switch (req.method) {\n    case \"GET\":\n      await getProducts(req, res);\n      break;\n    case \"POST\":\n      await createProduct(req, res);\n      break;\n  }\n});\nclass APIfeatures {\n  constructor(query, queryString) {\n    this.query = query;\n    this.queryString = queryString;\n  }\n  filtering() {\n    const queryObj = _objectSpread({}, this.queryString);\n    const excludeFields = ['page', 'sort', 'limit'];\n    excludeFields.forEach(el => delete queryObj[el]);\n    if (queryObj.category !== 'all') this.query.find({\n      category: queryObj.category\n    });\n    if (queryObj.title !== 'all') this.query.find({\n      title: {\n        $regex: queryObj.title\n      }\n    });\n    this.query.find();\n    return this;\n  }\n  sorting() {\n    if (this.queryString.sort) {\n      const sortBy = this.queryString.sort.split(',').join('');\n      this.query = this.query.sort(sortBy);\n    } else {\n      this.query = this.query.sort('-createdAt');\n    }\n    return this;\n  }\n  paginating() {\n    const page = this.queryString.page * 1 || 1;\n    const limit = this.queryString.limit * 1 || 6;\n    const skip = (page - 1) * limit;\n    this.query = this.query.skip(skip).limit(limit);\n    return this;\n  }\n}\nconst getProducts = async (req, res) => {\n  try {\n    const features = new APIfeatures(_models_productModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(), req.query).filtering().sorting().paginating();\n    const products = await features.query;\n    res.json({\n      status: 'success',\n      result: products.length,\n      products\n    });\n  } catch (err) {\n    return res.status(500).json({\n      err: err.message\n    });\n  }\n};\nconst createProduct = async (req, res) => {\n  try {\n    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n    if (result.role !== 'admin') return res.status(400).json({\n      err: 'Authentication is not valid.'\n    });\n    const {\n      title,\n      price,\n      inStock,\n      description,\n      content,\n      category,\n      images\n    } = req.body;\n    if (!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0) return res.status(400).json({\n      err: 'Please add all the fields.'\n    });\n    const newProduct = new _models_productModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      title: title.toLowerCase(),\n      price,\n      inStock,\n      description,\n      content,\n      category,\n      images\n    });\n    await newProduct.save();\n    res.json({\n      msg: 'Success! Created a new product'\n    });\n  } catch (err) {\n    return res.status(500).json({\n      err: err.message\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC5qcz9iMmMwIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsInJlcSIsInJlcyIsIm1ldGhvZCIsImdldFByb2R1Y3RzIiwiY3JlYXRlUHJvZHVjdCIsIkFQSWZlYXR1cmVzIiwiY29uc3RydWN0b3IiLCJxdWVyeSIsInF1ZXJ5U3RyaW5nIiwiZmlsdGVyaW5nIiwicXVlcnlPYmoiLCJfb2JqZWN0U3ByZWFkIiwiZXhjbHVkZUZpZWxkcyIsImZvckVhY2giLCJlbCIsImNhdGVnb3J5IiwiZmluZCIsInRpdGxlIiwiJHJlZ2V4Iiwic29ydGluZyIsInNvcnQiLCJzb3J0QnkiLCJzcGxpdCIsImpvaW4iLCJwYWdpbmF0aW5nIiwicGFnZSIsImxpbWl0Iiwic2tpcCIsImZlYXR1cmVzIiwiUHJvZHVjdHMiLCJwcm9kdWN0cyIsImpzb24iLCJzdGF0dXMiLCJyZXN1bHQiLCJsZW5ndGgiLCJlcnIiLCJtZXNzYWdlIiwiYXV0aCIsInJvbGUiLCJwcmljZSIsImluU3RvY2siLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJib2R5IiwibmV3UHJvZHVjdCIsInRvTG93ZXJDYXNlIiwic2F2ZSIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdEO0FBQ0c7QUFDUjtBQUUzQ0EsZ0VBQVMsQ0FBQyxDQUFDO0FBRUksc0VBQU9DLEdBQUcsRUFBRUMsR0FBRyxLQUFLO0VBQy9CLFFBQU9ELEdBQUcsQ0FBQ0UsTUFBTTtJQUNiLEtBQUssS0FBSztNQUNOLE1BQU1DLFdBQVcsQ0FBQ0gsR0FBRyxFQUFFQyxHQUFHLENBQUM7TUFDM0I7SUFDSixLQUFLLE1BQU07TUFDUCxNQUFNRyxhQUFhLENBQUNKLEdBQUcsRUFBRUMsR0FBRyxDQUFDO01BQzdCO0VBQ1I7QUFDSixDQUFDO0FBRUQsTUFBTUksV0FBVyxDQUFDO0VBQ2RDLFdBQVdBLENBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFDO0lBQzNC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QUFDLE9BQU9iLEdBQUcsRUFBRTtJQUNWLE9BQU9sQyxHQUFHLENBQUMrQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNELElBQUksQ0FBQztNQUFDSSxHQUFHLEVBQUVBLEdBQUcsQ0FBQ0M7SUFBTyxDQUFDLENBQUM7RUFDbkQ7QUFDSixDQUFDIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3Byb2R1Y3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcHJvZHVjdE1vZGVsJ1xuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJ1xuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBzd2l0Y2gocmVxLm1ldGhvZCl7XG4gICAgICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgICAgICAgIGF3YWl0IGdldFByb2R1Y3RzKHJlcSwgcmVzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVQcm9kdWN0KHJlcSwgcmVzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5jbGFzcyBBUElmZWF0dXJlcyB7XG4gICAgY29uc3RydWN0b3IocXVlcnksIHF1ZXJ5U3RyaW5nKXtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLnF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmc7XG4gICAgfVxuICAgIGZpbHRlcmluZygpe1xuICAgICAgICBjb25zdCBxdWVyeU9iaiA9IHsuLi50aGlzLnF1ZXJ5U3RyaW5nfVxuXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVGaWVsZHMgPSBbJ3BhZ2UnLCAnc29ydCcsICdsaW1pdCddXG4gICAgICAgIGV4Y2x1ZGVGaWVsZHMuZm9yRWFjaChlbCA9PiBkZWxldGUocXVlcnlPYmpbZWxdKSlcblxuICAgICAgICBpZihxdWVyeU9iai5jYXRlZ29yeSAhPT0gJ2FsbCcpXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5LmZpbmQoe2NhdGVnb3J5OiBxdWVyeU9iai5jYXRlZ29yeX0pXG4gICAgICAgIGlmKHF1ZXJ5T2JqLnRpdGxlICE9PSAnYWxsJylcbiAgICAgICAgICAgIHRoaXMucXVlcnkuZmluZCh7dGl0bGU6IHskcmVnZXg6IHF1ZXJ5T2JqLnRpdGxlfX0pXG5cbiAgICAgICAgdGhpcy5xdWVyeS5maW5kKClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc29ydGluZygpe1xuICAgICAgICBpZih0aGlzLnF1ZXJ5U3RyaW5nLnNvcnQpe1xuICAgICAgICAgICAgY29uc3Qgc29ydEJ5ID0gdGhpcy5xdWVyeVN0cmluZy5zb3J0LnNwbGl0KCcsJykuam9pbignJylcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LnNvcnQoc29ydEJ5KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LnNvcnQoJy1jcmVhdGVkQXQnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcGFnaW5hdGluZygpe1xuICAgICAgICBjb25zdCBwYWdlID0gdGhpcy5xdWVyeVN0cmluZy5wYWdlICogMSB8fCAxXG4gICAgICAgIGNvbnN0IGxpbWl0ID0gdGhpcy5xdWVyeVN0cmluZy5saW1pdCAqIDEgfHwgNlxuICAgICAgICBjb25zdCBza2lwID0gKHBhZ2UgLSAxKSAqIGxpbWl0O1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5za2lwKHNraXApLmxpbWl0KGxpbWl0KVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbmNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmVhdHVyZXMgPSBuZXcgQVBJZmVhdHVyZXMoUHJvZHVjdHMuZmluZCgpLCByZXEucXVlcnkpXG4gICAgICAgIC5maWx0ZXJpbmcoKS5zb3J0aW5nKCkucGFnaW5hdGluZygpXG5cbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBmZWF0dXJlcy5xdWVyeVxuICAgICAgICBcbiAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICByZXN1bHQ6IHByb2R1Y3RzLmxlbmd0aCxcbiAgICAgICAgICAgIHByb2R1Y3RzXG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVQcm9kdWN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcylcbiAgICAgICAgaWYocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnQXV0aGVudGljYXRpb24gaXMgbm90IHZhbGlkLid9KVxuXG4gICAgICAgIGNvbnN0IHt0aXRsZSwgcHJpY2UsIGluU3RvY2ssIGRlc2NyaXB0aW9uLCBjb250ZW50LCBjYXRlZ29yeSwgaW1hZ2VzfSA9IHJlcS5ib2R5XG5cbiAgICAgICAgaWYoIXRpdGxlIHx8ICFwcmljZSB8fCAhaW5TdG9jayB8fCAhZGVzY3JpcHRpb24gfHwgIWNvbnRlbnQgfHwgY2F0ZWdvcnkgPT09ICdhbGwnIHx8IGltYWdlcy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnUGxlYXNlIGFkZCBhbGwgdGhlIGZpZWxkcy4nfSlcblxuXG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSBuZXcgUHJvZHVjdHMoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLnRvTG93ZXJDYXNlKCksIHByaWNlLCBpblN0b2NrLCBkZXNjcmlwdGlvbiwgY29udGVudCwgY2F0ZWdvcnksIGltYWdlc1xuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IG5ld1Byb2R1Y3Quc2F2ZSgpXG5cbiAgICAgICAgcmVzLmpzb24oe21zZzogJ1N1Y2Nlc3MhIENyZWF0ZWQgYSBuZXcgcHJvZHVjdCd9KVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/product/index.js\n");

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