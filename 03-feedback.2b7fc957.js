!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var o,i,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function h(e){return l=e,f=setTimeout(S,t),s?p(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function S(){var e=g();if(O(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-c);return d?b(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&o?p(e):(o=i=void 0,u)}function T(){var e=g(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return h(c);if(d)return f=setTimeout(S,t),p(c)}return void 0===f&&(f=setTimeout(S,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},T.flush=function(){return void 0===f?u:w(g())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var h=document.querySelector(".feedback-form"),O=document.querySelector(".submit-btn"),S={};O.addEventListener("click",(function(e){e.preventDefault(),console.log(S),localStorage.removeItem("feedback-form-state"),h.reset()})),h.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500));try{var w=JSON.parse(localStorage.getItem("feedback-form-state"));h.elements.message.value=w.message||"",h.elements.email.value=w.email||""}catch(e){console.log(e.name)}}();
//# sourceMappingURL=03-feedback.2b7fc957.js.map