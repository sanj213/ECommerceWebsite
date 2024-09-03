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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/accessToken.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  role: {\n    type: String,\n    default: 'user'\n  },\n  root: {\n    type: Boolean,\n    default: false\n  },\n  avatar: {\n    type: String,\n    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'\n  }\n}, {\n  timestamps: true\n});\nlet Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.user || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('user', userSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dataset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvdXNlck1vZGVsLmpzP2MwNGEiXSwibmFtZXMiOlsidXNlclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJyb2xlIiwiZGVmYXVsdCIsInJvb3QiLCJCb29sZWFuIiwiYXZhdGFyIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUUvQixNQUFNQSxVQUFVLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsTUFBTSxDQUFDO0VBQ25DQyxJQUFJLEVBQUU7SUFDRkMsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLFFBQVEsRUFBRTtFQUNkLENBQUM7RUFDREMsS0FBSyxFQUFFO0lBQ0hILElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNkRSxNQUFNLEVBQUU7RUFDWixDQUFDO0VBQ0RDLFFBQVEsRUFBRTtJQUNOTCxJQUFJLEVBQUVDLE1BQU07SUFDWkMsUUFBUSxFQUFFO0VBQ2QsQ0FBQztFQUNESSxJQUFJLEVBQUU7SUFDRk4sSUFBSSxFQUFFQyxNQUFNO0lBQ1pNLE9BQU8sRUFBRTtFQUNiLENBQUM7RUFDREMsSUFBSSxFQUFFO0lBQ0ZSLElBQUksRUFBRVMsT0FBTztJQUNiRixPQUFPLEVBQUU7RUFDYixDQUFDO0VBQ0RHLE1BQU0sRUFBRTtJQUNKVixJQUFJLEVBQUVDLE1BQU07SUFDWk0sT0FBTyxFQUFFO0VBQ2I7QUFDSixDQUFDLEVBQUU7RUFDQ0ksVUFBVSxFQUFFO0FBQ2hCLENBQUMsQ0FBQztBQUVGLElBQUlDLE9BQU8sR0FBR2YsK0NBQVEsQ0FBQ2dCLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJakIsK0NBQVEsQ0FBQ2tCLEtBQUssQ0FBQyxNQUFNLEVBQUVuQixVQUFVLENBQUM7QUFDekRnQixzRUFBTyIsImZpbGUiOiIuL21vZGVscy91c2VyTW9kZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICd1c2VyJ1xuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RldmF0Y2hhbm5lbC9pbWFnZS91cGxvYWQvdjE2MDI3NTI0MDIvYXZhdGFyL2F2YXRhcl9jdWdxNDAucG5nJ1xuICAgIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KVxuXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/userModel.js\n");

/***/ }),

/***/ "./pages/api/auth/accessToken.js":
/*!***************************************!*\
  !*** ./pages/api/auth/accessToken.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"./utils/connectDB.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ \"./models/userModel.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/generateToken */ \"./utils/generateToken.js\");\n\n\n\n\nObject(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    const rf_token = req.cookies.refreshtoken;\n    if (!rf_token) return res.status(400).json({\n      err: 'Please login now!'\n    });\n    const result = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(rf_token, \"sanj8488170792655717\");\n    if (!result) return res.status(400).json({\n      err: 'Your token is incorrect or has expired.'\n    });\n    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(result.id);\n    if (!user) return res.status(400).json({\n      err: 'User does not exist.'\n    });\n    const access_token = Object(_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__[\"createAccessToken\"])({\n      id: user._id\n    });\n    res.json({\n      access_token,\n      user: {\n        name: user.name,\n        email: user.email,\n        role: user.role,\n        avatar: user.avatar,\n        root: user.root\n      }\n    });\n  } catch (err) {\n    return res.status(500).json({\n      err: err.message\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qcz8xYTIyIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsInJlcSIsInJlcyIsInJmX3Rva2VuIiwiY29va2llcyIsInJlZnJlc2h0b2tlbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJyZXN1bHQiLCJqd3QiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwidXNlciIsIlVzZXJzIiwiZmluZEJ5SWQiLCJpZCIsImFjY2Vzc190b2tlbiIsImNyZWF0ZUFjY2Vzc1Rva2VuIiwiX2lkIiwibmFtZSIsImVtYWlsIiwicm9sZSIsImF2YXRhciIsInJvb3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDSDtBQUNmO0FBQ2tDO0FBRWhFQSxnRUFBUyxDQUFDLENBQUM7QUFFSSxzRUFBT0MsR0FBRyxFQUFFQyxHQUFHLEtBQUs7RUFDL0IsSUFBRztJQUNDLE1BQU1DLFFBQVEsR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLFlBQVk7SUFDekMsSUFBRyxDQUFDRixRQUFRLEVBQUUsT0FBT0QsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztNQUFDQyxHQUFHLEVBQUU7SUFBbUIsQ0FBQyxDQUFDO0lBRXJFLE1BQU1DLE1BQU0sR0FBR0MsbURBQUcsQ0FBQ0MsTUFBTSxDQUFDUixRQUFRLEVBQUVTLHNCQUFnQyxDQUFDO0lBQ3JFLElBQUcsQ0FBQ0gsTUFBTSxFQUFFLE9BQU9QLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFBQ0MsR0FBRyxFQUFFO0lBQXlDLENBQUMsQ0FBQztJQUV6RixNQUFNSyxJQUFJLEdBQUcsTUFBTUMseURBQUssQ0FBQ0MsUUFBUSxDQUFDTixNQUFNLENBQUNPLEVBQUUsQ0FBQztJQUM1QyxJQUFHLENBQUNILElBQUksRUFBRSxPQUFPWCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO01BQUNDLEdBQUcsRUFBRTtJQUFzQixDQUFDLENBQUM7SUFFcEUsTUFBTVMsWUFBWSxHQUFHQyw4RUFBaUIsQ0FBQztNQUFDRixFQUFFLEVBQUVILElBQUksQ0FBQ007SUFBRyxDQUFDLENBQUM7SUFDdERqQixHQUFHLENBQUNLLElBQUksQ0FBQztNQUNMVSxZQUFZO01BQ1pKLElBQUksRUFBRTtRQUNGTyxJQUFJLEVBQUVQLElBQUksQ0FBQ08sSUFBSTtRQUNmQyxLQUFLLEVBQUVSLElBQUksQ0FBQ1EsS0FBSztRQUNqQkMsSUFBSSxFQUFFVCxJQUFJLENBQUNTLElBQUk7UUFDZkMsTUFBTSxFQUFFVixJQUFJLENBQUNVLE1BQU07UUFDbkJDLElBQUksRUFBRVgsSUFBSSxDQUFDVztNQUNmO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxRQUFNaEIsR0FBRyxFQUFDO0lBQ1AsT0FBT04sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztNQUFDQyxHQUFHLEVBQUVBLEdBQUcsQ0FBQ2lCO0lBQU8sQ0FBQyxDQUFDO0VBQ25EO0FBQ0osQ0FBQyIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hdXRoL2FjY2Vzc1Rva2VuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXJNb2RlbCdcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IHsgY3JlYXRlQWNjZXNzVG9rZW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9nZW5lcmF0ZVRva2VuJ1xuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHJmX3Rva2VuID0gcmVxLmNvb2tpZXMucmVmcmVzaHRva2VuO1xuICAgICAgICBpZighcmZfdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnUGxlYXNlIGxvZ2luIG5vdyEnfSlcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBqd3QudmVyaWZ5KHJmX3Rva2VuLCBwcm9jZXNzLmVudi5SRUZSRVNIX1RPS0VOX1NFQ1JFVClcbiAgICAgICAgaWYoIXJlc3VsdCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdZb3VyIHRva2VuIGlzIGluY29ycmVjdCBvciBoYXMgZXhwaXJlZC4nfSlcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZEJ5SWQocmVzdWx0LmlkKVxuICAgICAgICBpZighdXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdVc2VyIGRvZXMgbm90IGV4aXN0Lid9KVxuXG4gICAgICAgIGNvbnN0IGFjY2Vzc190b2tlbiA9IGNyZWF0ZUFjY2Vzc1Rva2VuKHtpZDogdXNlci5faWR9KVxuICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyLFxuICAgICAgICAgICAgICAgIHJvb3Q6IHVzZXIucm9vdFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1jYXRjaChlcnIpe1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/accessToken.js\n");

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

/***/ "./utils/generateToken.js":
/*!********************************!*\
  !*** ./utils/generateToken.js ***!
  \********************************/
/*! exports provided: createAccessToken, createRefreshToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAccessToken\", function() { return createAccessToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRefreshToken\", function() { return createRefreshToken; });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createAccessToken = payload => {\n  console.log(\"sanj4020228718061949\");\n  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, \"sanj4020228718061949\", {\n    expiresIn: '15m'\n  });\n};\nconst createRefreshToken = payload => {\n  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, \"sanj8488170792655717\", {\n    expiresIn: '7d'\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9nZW5lcmF0ZVRva2VuLmpzPzI3YjMiXSwibmFtZXMiOlsiY3JlYXRlQWNjZXNzVG9rZW4iLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJqd3QiLCJzaWduIiwiZXhwaXJlc0luIiwiY3JlYXRlUmVmcmVzaFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBRXZCLE1BQU1BLGlCQUFpQixHQUFJQyxPQUFPLElBQUs7RUFDMUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxzQkFBK0IsQ0FBQztFQUM1QyxPQUFPQyxtREFBRyxDQUFDQyxJQUFJLENBQUNMLE9BQU8sRUFBRUcsc0JBQStCLEVBQUU7SUFBQ0csU0FBUyxFQUFFO0VBQUssQ0FBQyxDQUFDO0FBQ2pGLENBQUM7QUFFTSxNQUFNQyxrQkFBa0IsR0FBSVAsT0FBTyxJQUFLO0VBQzNDLE9BQU9JLG1EQUFHLENBQUNDLElBQUksQ0FBQ0wsT0FBTyxFQUFFRyxzQkFBZ0MsRUFBRTtJQUFDRyxTQUFTLEVBQUU7RUFBSSxDQUFDLENBQUM7QUFFakYsQ0FBQyIsImZpbGUiOiIuL3V0aWxzL2dlbmVyYXRlVG9rZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjY2Vzc1Rva2VuID0gKHBheWxvYWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKVxuICAgIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVULCB7ZXhwaXJlc0luOiAnMTVtJ30pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZWZyZXNoVG9rZW4gPSAocGF5bG9hZCkgPT4ge1xuICAgIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5SRUZSRVNIX1RPS0VOX1NFQ1JFVCwge2V4cGlyZXNJbjogJzdkJ30pXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/generateToken.js\n");

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