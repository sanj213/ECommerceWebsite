_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(t,e,r){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,r=void 0!==e&&e,n=t.hybrid,o=void 0!==n&&n,a=t.hasQuery,i=void 0!==a&&a;return r||o&&i}},"7W2i":function(t,e,r){var n=r("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},"8Kt/":function(t,e,r){"use strict";r("lSNA");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var n,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=n?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=t[o]}r.default=t,e&&e.set(t,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),c=r("FYa8"),u=r("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var d=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var r=o.default.Children.toArray(e.props.children);return t.concat(r)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,r=new Set,n={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var s=d[c];if(o.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?a=!1:r.add(s);else{var l=o.props[s],f=n[s]||new Set;f.has(l)?a=!1:(f.add(l),n[s]=f)}}}return a}}()).reverse().map((function(t,e){var r=t.key||e;return o.default.cloneElement(t,{key:r})}))}function h(t){var e=t.children,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},e)}h.rewind=function(){};var y=h;e.default=y},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,r){"use strict";var n;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.HeadManagerContext=o},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},Nsbk:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),i=r("Bnag");t.exports=function(t){return n(t)||o(t)||a(t)||i()}},Xuae:function(t,e,r){"use strict";var n=r("RIqP"),o=r("lwsE"),a=r("W8MJ"),i=r("a1gu"),c=r("Nsbk"),u=r("7W2i");function s(t,e,r){return e=c(e),i(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return function(){return!!t}()}()?Reflect.construct(e,r||[],c(t).constructor):e.apply(t,r))}e.__esModule=!0,e.default=void 0;var l=r("q1tI"),f=function(t){function e(t){var r;return o(this,e),(r=s(this,e,[t]))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(n(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return u(e,t),a(e,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}])}(l.Component);e.default=f},YFqc:function(t,e,r){t.exports=r("cTJO")},YQMk:function(t,e,r){"use strict";r.r(e);var n=r("KQm4"),o=r("rePB"),a=r("HaE+"),i=r("8Kt/"),c=r.n(i),u=r("q1tI"),s=r("qG/y"),l=r("YFqc"),f=r.n(l),d=r("WtUO"),p=r("nKUr"),h=function(t){var e=t.item,r=t.dispatch,n=t.cart;return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{style:{width:"100px",overflow:"hidden"},children:Object(p.jsx)("img",{src:e.images[0].url,alt:e.images[0].url,className:"img-thumbnail w-100",style:{minWidth:"80px",height:"80px"}})}),Object(p.jsxs)("td",{style:{minWidth:"200px"},className:"w-50 align-middle",children:[Object(p.jsx)("h5",{className:"text-capitalize text-secondary",children:Object(p.jsx)(f.a,{href:"/product/".concat(e._id),children:Object(p.jsx)("a",{children:e.title})})}),Object(p.jsxs)("h6",{className:"text-danger",children:["$",e.quantity*e.price]}),e.inStock>0?Object(p.jsxs)("p",{className:"mb-1 text-danger",children:["In Stock: ",e.inStock]}):Object(p.jsx)("p",{className:"mb-1 text-danger",children:"Out Stock"})]}),Object(p.jsxs)("td",{className:"align-middle",style:{minWidth:"150px"},children:[Object(p.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return r(Object(d.c)(n,e._id))},disabled:1===e.quantity,children:" - "}),Object(p.jsx)("span",{className:"px-3",children:e.quantity}),Object(p.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return r(Object(d.e)(n,e._id))},disabled:e.quantity===e.inStock,children:" + "})]}),Object(p.jsx)("td",{className:"align-middle",style:{minWidth:"50px",cursor:"pointer"},children:Object(p.jsx)("i",{className:"far fa-trash-alt text-danger","aria-hidden":"true",style:{fontSize:"18px"},"data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return r({type:"ADD_MODAL",payload:[{data:n,id:e._id,title:e.title,type:"ADD_CART"}]})}})})]})},y=r("EFaQ"),v=r("nOHt");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(){g=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new P(n||[]);return o(i,"_invoke",{value:E(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var d="suspendedStart",p="executing",h="completed",y={};function v(){}function b(){}function m(){}var j={};s(j,i,(function(){return this}));var x=Object.getPrototypeOf,O=x&&x(x(L([])));O&&O!==r&&n.call(O,i)&&(j=O);var w=m.prototype=v.prototype=Object.create(j);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function E(e,r,n){var o=d;return function(a,i){if(o===p)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?h:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=h,n.method="throw",n.arg=s.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=m,o(w,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:b,configurable:!0}),b.displayName=s(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},_(k.prototype),s(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(w),s(w,u,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=L,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function j(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return x(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}e.default=function(){var t=Object(u.useContext)(s.a),e=t.state,r=t.dispatch,o=e.cart,i=e.auth,l=e.orders,d=Object(u.useState)(0),b=d[0],x=d[1],O=Object(u.useState)(""),w=O[0],_=O[1],k=Object(u.useState)(""),E=k[0],S=k[1],M=Object(u.useState)(!1),N=M[0],P=M[1],L=Object(v.useRouter)();Object(u.useEffect)((function(){!function(){var t=o.reduce((function(t,e){return t+e.price*e.quantity}),0);x(t)}()}),[o]),Object(u.useEffect)((function(){var t=JSON.parse(localStorage.getItem("__next__cart01__sanj"));if(t&&t.length>0){var e=[];(function(){var n=Object(a.a)(g().mark((function n(){var o,a,i,c,u,s,l,f,d,p,h;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=j(t),n.prev=1,o.s();case 3:if((a=o.n()).done){n.next=15;break}return i=a.value,n.next=7,Object(y.b)("product/".concat(i._id));case 7:if((c=n.sent)&&c.product){n.next=11;break}return console.error("Product not found for item with _id: ".concat(i._id)),n.abrupt("continue",13);case 11:u=c.product,s=u._id,l=u.title,f=u.images,d=u.price,p=u.inStock,h=u.sold,p>0&&e.push({_id:s,title:l,images:f,price:d,inStock:p,sold:h,quantity:i.quantity>p?1:i.quantity});case 13:n.next=3;break;case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(1),o.e(n.t0);case 20:return n.prev=20,o.f(),n.finish(20);case 23:r({type:"ADD_CART",payload:e});case 24:case"end":return n.stop()}}),n,null,[[1,17,20,23]])})));return function(){return n.apply(this,arguments)}})()()}}),[N]);var C=function(){var t=Object(a.a)(g().mark((function t(){var e,a,c,u;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(w&&E){t.next=2;break}return t.abrupt("return",r({type:"NOTIFY",payload:{error:"Please add your address and mobile."}}));case 2:e=[],a=j(o),t.prev=4,a.s();case 6:if((c=a.n()).done){t.next=14;break}return u=c.value,t.next=10,Object(y.b)("product/".concat(u._id));case 10:t.sent.product.inStock-u.quantity>=0&&e.push(u);case 12:t.next=6;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(4),a.e(t.t0);case 19:return t.prev=19,a.f(),t.finish(19);case 22:if(!(e.length<o.length)){t.next=25;break}return P(!N),t.abrupt("return",r({type:"NOTIFY",payload:{error:"The product is out of stock or the quantity is insufficient."}}));case 25:r({type:"NOTIFY",payload:{loading:!0}}),Object(y.d)("order",{address:w,mobile:E,cart:o,total:b},i.token).then((function(t){if(t.err)return r({type:"NOTIFY",payload:{error:t.err}});r({type:"ADD_CART",payload:[]});var e=m(m({},t.newOrder),{},{user:i.user});return r({type:"ADD_ORDERS",payload:[].concat(Object(n.a)(l),[e])}),r({type:"NOTIFY",payload:{success:t.msg}}),L.push("/order/".concat(t.newOrder._id))}));case 27:case"end":return t.stop()}}),t,null,[[4,16,19,22]])})));return function(){return t.apply(this,arguments)}}();return 0===o.length?Object(p.jsx)("img",{className:"img-responsive w-100",src:"/empty_cart.jpg",alt:"not empty"}):Object(p.jsxs)("div",{className:"row mx-auto",children:[Object(p.jsx)(c.a,{children:Object(p.jsx)("title",{children:"Cart Page"})}),Object(p.jsxs)("div",{className:"col-md-8 text-secondary table-responsive my-3",children:[Object(p.jsx)("h2",{className:"text-uppercase",children:"Shopping Cart"}),Object(p.jsx)("table",{className:"table my-3",children:Object(p.jsx)("tbody",{children:o.map((function(t){return Object(p.jsx)(h,{item:t,dispatch:r,cart:o},t._id)}))})})]}),Object(p.jsxs)("div",{className:"col-md-4 my-3 text-right text-uppercase text-secondary",children:[Object(p.jsxs)("form",{children:[Object(p.jsx)("h2",{children:"Shipping"}),Object(p.jsx)("label",{htmlFor:"address",children:"Address"}),Object(p.jsx)("input",{type:"text",name:"address",id:"address",className:"form-control mb-2",value:w,onChange:function(t){return _(t.target.value)}}),Object(p.jsx)("label",{htmlFor:"mobile",children:"Mobile"}),Object(p.jsx)("input",{type:"text",name:"mobile",id:"mobile",className:"form-control mb-2",value:E,onChange:function(t){return S(t.target.value)}})]}),Object(p.jsxs)("h3",{children:["Total: ",Object(p.jsxs)("span",{className:"text-danger",children:["$",b]})]}),Object(p.jsx)(f.a,{href:i.user?"#!":"/signin",children:Object(p.jsx)("a",{className:"btn btn-dark my-2",onClick:C,children:"Proceed with payment"})})]})]})}},a1gu:function(t,e,r){var n=r("cDf5"),o=r("PJYZ");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?o(t):e}},ahkM:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return r("YQMk")}])},cTJO:function(t,e,r){"use strict";var n=r("J4zp"),o=r("284h");e.__esModule=!0,e.default=void 0;var a,i=o(r("q1tI")),c=r("elyg"),u=r("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var d=function(t,e){var r=a||(l?a=new l((function(t){t.forEach((function(t){if(s.has(t.target)){var e=s.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(a.unobserve(t.target),s.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(t),s.set(t,e),function(){try{r.unobserve(t)}catch(e){console.error(e)}s.delete(t)}):function(){}};function p(t,e,r,n){(0,c.isLocalURL)(e)&&(t.prefetch(e,r,n).catch((function(t){0})),f[e+"%"+r]=!0)}var h=function(t){var e=!1!==t.prefetch,r=(0,u.useRouter)(),o=r&&r.pathname||"/",a=i.default.useMemo((function(){var e=(0,c.resolveHref)(o,t.href,!0),r=n(e,2),a=r[0],i=r[1];return{href:a,as:t.as?(0,c.resolveHref)(o,t.as):i||a}}),[o,t.href,t.as]),s=a.href,h=a.as,y=t.children,v=t.replace,b=t.shallow,m=t.scroll,g=t.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var j=i.Children.only(y),x=j&&"object"===typeof j&&j.ref,O=i.default.useRef(),w={ref:i.default.useCallback((function(t){(O.current&&(O.current(),O.current=void 0),e&&l&&t&&t.tagName&&(0,c.isLocalURL)(s))&&(f[s+"%"+h]||(O.current=d(t,(function(){p(r,s,h,{locale:"undefined"!==typeof g?g:r&&r.locale})}))));x&&("function"===typeof x?x(t):"object"===typeof x&&(x.current=t))}),[e,x,s,h,r,g]),onClick:function(t){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(t),t.defaultPrevented||function(t,e,r,n,o,a,i,u){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,c.isLocalURL)(r))&&(t.preventDefault(),null==i&&(i=n.indexOf("#")<0),e[o?"replace":"push"](r,n,{shallow:a,locale:u}).then((function(t){t&&i&&(window.scrollTo(0,0),document.body.focus())})))}(t,r,s,h,v,b,m,g)}};return e&&(w.onMouseEnter=function(t){(0,c.isLocalURL)(s)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(t),p(r,s,h,{priority:!0}))}),(t.passHref||"a"===j.type&&!("href"in j.props))&&(w.href=(0,c.addBasePath)((0,c.addLocale)(h,"undefined"!==typeof g?g:r&&r.locale,r&&r.defaultLocale))),i.default.cloneElement(j,w)};e.default=h},lSNA:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},lwAK:function(t,e,r){"use strict";var n;e.__esModule=!0,e.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.AmpStateContext=o}},[["ahkM",0,1,2,3]]]);