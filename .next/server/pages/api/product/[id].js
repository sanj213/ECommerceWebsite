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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/product/[id].js");
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

/***/ "./pages/api/product/[id].js":
/*!***********************************!*\
  !*** ./pages/api/product/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"./utils/connectDB.js\");\n/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/productModel */ \"./models/productModel.js\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ \"./middleware/auth.js\");\n\n\n\nObject(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  switch (req.method) {\n    case \"GET\":\n      await getProduct(req, res);\n      break;\n    case \"PUT\":\n      await updateProduct(req, res);\n      break;\n    case \"DELETE\":\n      await deleteProduct(req, res);\n      break;\n  }\n});\nconst getProduct = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.query;\n    const product = await _models_productModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n    if (!product) return res.status(400).json({\n      err: 'This product does not exist.'\n    });\n    res.json({\n      product\n    });\n  } catch (err) {\n    return res.status(500).json({\n      err: err.message\n    });\n  }\n};\nconst updateProduct = async (req, res) => {\n  try {\n    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n    if (result.role !== 'admin') return res.status(400).json({\n      err: 'Authentication is not valid.'\n    });\n    const {\n      id\n    } = req.query;\n    const {\n      title,\n      price,\n      inStock,\n      description,\n      content,\n      category,\n      images\n    } = req.body;\n    if (!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0) return res.status(400).json({\n      err: 'Please add all the fields.'\n    });\n    await _models_productModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n      _id: id\n    }, {\n      title: title.toLowerCase(),\n      price,\n      inStock,\n      description,\n      content,\n      category,\n      images\n    });\n    res.json({\n      msg: 'Success! Updated a product'\n    });\n  } catch (err) {\n    return res.status(500).json({\n      err: err.message\n    });\n  }\n};\nconst deleteProduct = async (req, res) => {\n  try {\n    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n    if (result.role !== 'admin') return res.status(400).json({\n      err: 'Authentication is not valid.'\n    });\n    const {\n      id\n    } = req.query;\n    await _models_productModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\n    res.json({\n      msg: 'Deleted a product.'\n    });\n  } catch (err) {\n    return res.status(500).json({\n      err: err.message\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdC8uanM/MGM1NCJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJnZXRQcm9kdWN0IiwidXBkYXRlUHJvZHVjdCIsImRlbGV0ZVByb2R1Y3QiLCJpZCIsInF1ZXJ5IiwicHJvZHVjdCIsIlByb2R1Y3RzIiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwibWVzc2FnZSIsInJlc3VsdCIsImF1dGgiLCJyb2xlIiwidGl0bGUiLCJwcmljZSIsImluU3RvY2siLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJjYXRlZ29yeSIsImltYWdlcyIsImJvZHkiLCJsZW5ndGgiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwidG9Mb3dlckNhc2UiLCJtc2ciLCJmaW5kQnlJZEFuZERlbGV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDRztBQUNSO0FBRTNDQSxnRUFBUyxDQUFDLENBQUM7QUFFSSxzRUFBT0MsR0FBRyxFQUFFQyxHQUFHLEtBQUs7RUFDL0IsUUFBT0QsR0FBRyxDQUFDRSxNQUFNO0lBQ2IsS0FBSyxLQUFLO01BQ04sTUFBTUMsVUFBVSxDQUFDSCxHQUFHLEVBQUVDLEdBQUcsQ0FBQztNQUMxQjtJQUNKLEtBQUssS0FBSztNQUNOLE1BQU1HLGFBQWEsQ0FBQ0osR0FBRyxFQUFFQyxHQUFHLENBQUM7TUFDN0I7SUFDSixLQUFLLFFBQVE7TUFDVCxNQUFNSSxhQUFhLENBQUNMLEdBQUcsRUFBRUMsR0FBRyxDQUFDO01BQzdCO0VBQ1I7QUFDSixDQUFDO0FBRUQsTUFBTUUsVUFBVSxHQUFHLE1BQUFBLENBQU9ILEdBQUcsRUFBRUMsR0FBRyxLQUFLO0VBQ25DLElBQUk7SUFDQSxNQUFNO01BQUVLO0lBQUcsQ0FBQyxHQUFHTixHQUFHLENBQUNPLEtBQUs7SUFFeEIsTUFBTUMsT0FBTyxHQUFHLE1BQU1DLDREQUFRLENBQUNDLFFB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QUV6QyxDQUFDLENBQUMsT0FBT2pCLEdBQUcsRUFBRTtJQUNWLE9BQU9aLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFBQ0MsR0FBRyxFQUFFQSxHQUFHLENBQUNDO0lBQU8sQ0FBQyxDQUFDO0VBQ25EO0FBQ0osQ0FBQyIsImZpbGUiOiIuL3BhZ2VzL2FwaS9wcm9kdWN0L1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcHJvZHVjdE1vZGVsJ1xuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJ1xuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBzd2l0Y2gocmVxLm1ldGhvZCl7XG4gICAgICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgICAgICAgIGF3YWl0IGdldFByb2R1Y3QocmVxLCByZXMpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlBVVFwiOlxuICAgICAgICAgICAgYXdhaXQgdXBkYXRlUHJvZHVjdChyZXEsIHJlcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiREVMRVRFXCI6XG4gICAgICAgICAgICBhd2FpdCBkZWxldGVQcm9kdWN0KHJlcSwgcmVzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5jb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0cy5maW5kQnlJZChpZClcbiAgICAgICAgaWYoIXByb2R1Y3QpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnVGhpcyBwcm9kdWN0IGRvZXMgbm90IGV4aXN0Lid9KVxuICAgICAgICBcbiAgICAgICAgcmVzLmpzb24oeyBwcm9kdWN0IH0pXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnI6IGVyci5tZXNzYWdlfSlcbiAgICB9XG59XG5cbmNvbnN0IHVwZGF0ZVByb2R1Y3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxuICAgICAgICBpZihyZXN1bHQucm9sZSAhPT0gJ2FkbWluJykgXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnQXV0aGVudGljYXRpb24gaXMgbm90IHZhbGlkLid9KVxuXG4gICAgICAgIGNvbnN0IHtpZH0gPSByZXEucXVlcnlcbiAgICAgICAgY29uc3Qge3RpdGxlLCBwcmljZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5LCBpbWFnZXN9ID0gcmVxLmJvZHlcblxuICAgICAgICBpZighdGl0bGUgfHwgIXByaWNlIHx8ICFpblN0b2NrIHx8ICFkZXNjcmlwdGlvbiB8fCAhY29udGVudCB8fCBjYXRlZ29yeSA9PT0gJ2FsbCcgfHwgaW1hZ2VzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdQbGVhc2UgYWRkIGFsbCB0aGUgZmllbGRzLid9KVxuXG4gICAgICAgIGF3YWl0IFByb2R1Y3RzLmZpbmRPbmVBbmRVcGRhdGUoe19pZDogaWR9LCB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUudG9Mb3dlckNhc2UoKSwgcHJpY2UsIGluU3RvY2ssIGRlc2NyaXB0aW9uLCBjb250ZW50LCBjYXRlZ29yeSwgaW1hZ2VzXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmVzLmpzb24oe21zZzogJ1N1Y2Nlc3MhIFVwZGF0ZWQgYSBwcm9kdWN0J30pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXG4gICAgfVxufVxuXG5jb25zdCBkZWxldGVQcm9kdWN0ID0gYXN5bmMocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxuICAgICAgICBcbiAgICAgICAgaWYocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpIFxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0F1dGhlbnRpY2F0aW9uIGlzIG5vdCB2YWxpZC4nfSlcblxuICAgICAgICBjb25zdCB7aWR9ID0gcmVxLnF1ZXJ5XG5cbiAgICAgICAgYXdhaXQgUHJvZHVjdHMuZmluZEJ5SWRBbmREZWxldGUoaWQpXG4gICAgICAgIHJlcy5qc29uKHttc2c6ICdEZWxldGVkIGEgcHJvZHVjdC4nfSlcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/product/[id].js\n");

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