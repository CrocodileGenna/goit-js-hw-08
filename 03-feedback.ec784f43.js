function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,i,r,u,a,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,a=setTimeout(O,t),l?b(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function O(){var e=v();if(j(e))return h(e);a=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function h(e){return a=void 0,g&&o?b(e):(o=i=void 0,u)}function w(){var e=v(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===a)return S(f);if(s)return a=setTimeout(O,t),b(f)}return void 0===a&&(a=setTimeout(O,t)),u}return t=y(t)||0,p(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=i=a=void 0},w.flush=function(){return void 0===a?u:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector("input"),S=document.querySelector("textarea");document.querySelector("form").addEventListener("input",e(t)((function(e){const t=e.target.form.elements,{email:n,message:o}=t,i={emeil:n.value,mesege:o.value},r=JSON.stringify(i);localStorage.setItem("feedback-form-state",r)}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state")),{emeil:t,mesege:n}=e;b.value=t,S.value=n}();document.querySelector("button").addEventListener("click",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state")),{emeil:n,mesege:o}=t;console.log(`Email: ${n}`,`Messege:${o}`),b.value="",S.value=""}));
//# sourceMappingURL=03-feedback.ec784f43.js.map