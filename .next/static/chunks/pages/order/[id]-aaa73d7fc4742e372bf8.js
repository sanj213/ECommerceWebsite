_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n},o=r("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,c=void 0!==o&&o;return r||a&&c}},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=(n=r("Xuae"))&&n.__esModule?n:{default:n},c=r("lwAK"),i=r("FYa8"),s=r("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,s=f.length;i<s;i++){var u=f[i];if(a.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?o=!1:r.add(u);else{var d=a.props[u],l=n[u]||new Set;l.has(d)?o=!1:(l.add(d),n[u]=l)}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return a.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,a.useContext)(c.AmpStateContext),n=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)}h.rewind=function(){};var b=h;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Ivv9:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order/[id]",function(){return r("u6i0")}])},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),o=r("ZhPi"),c=r("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||c()}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),a=r("lwsE"),o=r("W8MJ"),c=r("a1gu"),i=r("Nsbk"),s=r("7W2i");function u(e,t,r){return t=i(t),c(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,r||[],i(e).constructor):t.apply(e,r))}t.__esModule=!0,t.default=void 0;var d=r("q1tI"),l=function(e){function t(e){var r;return a(this,t),(r=u(this,t,[e]))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(n(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return s(t,e),o(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}])}(d.Component);t.default=l},YFqc:function(e,t,r){e.exports=r("cTJO")},a1gu:function(e,t,r){var n=r("cDf5"),a=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?a(e):t}},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var o,c=a(r("q1tI")),i=r("elyg"),s=r("nOHt"),u=new Map,d=window.IntersectionObserver,l={};var f=function(e,t){var r=o||(d?o=new d((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),u.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function p(e,t,r,n){(0,i.isLocalURL)(t)&&(e.prefetch(t,r,n).catch((function(e){0})),l[t+"%"+r]=!0)}var h=function(e){var t=!1!==e.prefetch,r=(0,s.useRouter)(),a=r&&r.pathname||"/",o=c.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],c=r[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),u=o.href,h=o.as,b=e.children,y=e.replace,j=e.shallow,m=e.scroll,O=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var v=c.Children.only(b),x=v&&"object"===typeof v&&v.ref,g=c.default.useRef(),w={ref:c.default.useCallback((function(e){(g.current&&(g.current(),g.current=void 0),t&&d&&e&&e.tagName&&(0,i.isLocalURL)(u))&&(l[u+"%"+h]||(g.current=f(e,(function(){p(r,u,h,{locale:"undefined"!==typeof O?O:r&&r.locale})}))));x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[t,x,u,h,r,O]),onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:s}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,r,u,h,y,j,m,O)}};return t&&(w.onMouseEnter=function(e){(0,i.isLocalURL)(u)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),p(r,u,h,{priority:!0}))}),(e.passHref||"a"===v.type&&!("href"in v.props))&&(w.href=(0,i.addBasePath)((0,i.addLocale)(h,"undefined"!==typeof O?O:r&&r.locale,r&&r.defaultLocale))),c.default.cloneElement(v,w)};t.default=h},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},u6i0:function(e,t,r){"use strict";r.r(t);var n=r("8Kt/"),a=r.n(n),o=r("q1tI"),c=r("qG/y"),i=r("nOHt"),s=r("YFqc"),u=r.n(s),d=r("rePB"),l=r("EFaQ"),f=r("WtUO"),p=r("nKUr");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=e.order,r=e.onPaymentSuccess,n=Object(o.useRef)(),a=Object(o.useContext)(c.a),i=a.state,s=a.dispatch,u=i.auth,d=i.orders;return Object(o.useEffect)((function(){paypal.Buttons({createOrder:function(e,r){return r.order.create({purchase_units:[{amount:{value:t.total}}]})},onApprove:function(e,n){return s({type:"NOTIFY",payload:{loading:!0}}),n.order.capture().then((function(e){Object(l.c)("order/payment/".concat(t._id),{paymentId:e.payer.payer_id},u.token).then((function(n){if(n.err)return s({type:"NOTIFY",payload:{error:n.err}});s(Object(f.f)(d,t._id,b(b({},t),{},{paid:!0,dateOfPayment:e.create_time,paymentId:e.payer.payer_id,method:"Paypal"}),"ADD_ORDERS")),s({type:"NOTIFY",payload:{success:n.msg}}),r()}))}))}}).render(n.current)}),[]),Object(p.jsx)("div",{ref:n})};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t=e.orderDetail,r=e.state,n=e.dispatch,a=r.auth,c=r.orders,i=Object(o.useState)(!1),s=i[0],d=i[1];return a.user?Object(p.jsx)(p.Fragment,{children:t.map((function(e){return Object(p.jsx)("div",{style:{margin:"20px auto"},className:"row justify-content-around",children:s?Object(p.jsxs)("div",{className:"text-uppercase my-3",style:{maxWidth:"600px"},children:[Object(p.jsxs)("h2",{className:"text-break",children:["Order ",e._id]}),Object(p.jsxs)("div",{className:"mt-4 text-secondary",children:[Object(p.jsx)("h3",{children:"Shipping"}),Object(p.jsxs)("p",{children:["Name: ",e.user.name]}),Object(p.jsxs)("p",{children:["Email: ",e.user.email]}),Object(p.jsxs)("p",{children:["Address: ",e.address]}),Object(p.jsxs)("p",{children:["Mobile: ",e.mobile]}),Object(p.jsxs)("div",{className:"alert ".concat(e.delivered?"alert-success":"alert-danger"," d-flex justify-content-between align-items-center"),role:"alert",children:[e.delivered?"Delivered on ".concat(e.updatedAt):"Not Delivered","admin"===a.user.role&&!e.delivered&&Object(p.jsx)("button",{className:"btn btn-dark text-uppercase",onClick:function(){return function(e){n({type:"NOTIFY",payload:{loading:!0}}),Object(l.c)("order/delivered/".concat(e._id),null,a.token).then((function(t){if(t.err)return n({type:"NOTIFY",payload:{error:t.err}});var r=t.result,a=r.paid,o=r.dateOfPayment,i=r.method,s=r.delivered;return n(Object(f.f)(c,e._id,m(m({},e),{},{paid:a,dateOfPayment:o,method:i,delivered:s}),"ADD_ORDERS")),n({type:"NOTIFY",payload:{success:t.msg}})}))}(e)},children:"Mark as delivered"})]}),Object(p.jsx)("h3",{children:"Payment"}),e.method&&Object(p.jsxs)("h6",{children:["Method: ",Object(p.jsx)("em",{children:e.method})]}),e.paymentId&&Object(p.jsxs)("p",{children:["PaymentId: ",Object(p.jsx)("em",{children:e.paymentId})]}),Object(p.jsx)("div",{className:"alert ".concat(e.paid?"alert-success":"alert-danger"," d-flex justify-content-between align-items-center"),role:"alert",children:e.paid?"Paid on ".concat(e.dateOfPayment):"Not Paid"}),Object(p.jsx)("h3",{children:"Order Items"}),e.cart.map((function(e){return Object(p.jsxs)("div",{className:"row border-bottom mx-0 p-2 justify-content-betwenn align-items-center",style:{maxWidth:"550px"},children:[Object(p.jsx)("img",{src:e.images[0].url,alt:e.images[0].url,style:{width:"50px",height:"45px",objectFit:"cover"}}),Object(p.jsx)("h5",{className:"flex-fill text-secondary px-3 m-0",children:Object(p.jsx)(u.a,{href:"/product/".concat(e._id),children:e.title})}),Object(p.jsxs)("span",{className:"text-info m-0",children:[e.quantity," x $",e.price," = $",e.price*e.quantity]})]},e._id)}))]})]}):Object(p.jsxs)("div",{className:"p-4",children:[Object(p.jsxs)("h2",{className:"mb-4 text-uppercase",children:["Total: $",e.total]}),Object(p.jsx)(y,{order:e,onPaymentSuccess:function(){return d(!0)}})]})},e._id)}))}):null};t.default=function(){var e=Object(o.useContext)(c.a),t=e.state,r=e.dispatch,n=t.orders,s=t.auth,u=Object(i.useRouter)(),d=Object(o.useState)([]),l=d[0],f=d[1];return Object(o.useEffect)((function(){var e=n.filter((function(e){return e._id===u.query.id}));f(e)}),[n]),s.user?Object(p.jsxs)("div",{className:"my-3",children:[Object(p.jsx)(a.a,{children:Object(p.jsx)("title",{children:"Detail Orders"})}),Object(p.jsx)("div",{children:Object(p.jsxs)("button",{className:"btn btn-dark",onClick:function(){return u.back()},children:[Object(p.jsx)("i",{className:"fas fa-long-arrow-alt-left","aria-hidden":"true"})," Go Back"]})}),Object(p.jsx)(O,{orderDetail:l,state:t,dispatch:r})]}):null}}},[["Ivv9",0,1,2,3]]]);