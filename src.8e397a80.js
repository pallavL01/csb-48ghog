parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"aYSx":[function(require,module,exports) {
"use strict";function t(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=r(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,f=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){f=!0,a=t},f:function(){try{u||null==e.return||e.return()}finally{if(f)throw a}}}}function n(t,n){return a(t)||i(t,n)||r(t,n)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(f){u=!0,o=f}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}}function a(t){if(Array.isArray(t))return t}function u(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function f(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,n,e){return n&&f(t.prototype,n),e&&f(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var c=function(){function e(){u(this,e)}return l(e,null,[{key:"getItems",value:function(t){var n=s().find(function(n){return n.id===t});return n?n.items:[]}},{key:"insertItem",value:function(t,n){var e=s(),r=e.find(function(n){return n.id===t}),o={id:Math.floor(1e5*Math.random()),content:n};if(!r)throw new Error("Column does not exist.");return r.items.push(o),d(e),o}},{key:"updateItem",value:function(e,r){var o=s(),i=n(function(){var n,r=t(o);try{for(r.s();!(n=r.n()).done;){var i=n.value,a=i.items.find(function(t){return t.id===e});if(a)return[a,i]}}catch(u){r.e(u)}finally{r.f()}}(),2),a=i[0],u=i[1];if(!a)throw new Error("Item not found.");if(a.content=void 0===r.content?a.content:r.content,void 0!==r.columnId&&void 0!==r.position){var f=o.find(function(t){return t.id===r.columnId});if(!f)throw new Error("Target column not found.");u.items.splice(u.items.indexOf(a),1),f.items.splice(r.position,0,a)}d(o)}},{key:"deleteItem",value:function(n){var e,r=s(),o=t(r);try{for(o.s();!(e=o.n()).done;){var i=e.value,a=i.items.find(function(t){return t.id===n});a&&i.items.splice(i.items.indexOf(a),1)}}catch(u){o.e(u)}finally{o.f()}d(r)}}]),e}();function s(){var t=localStorage.getItem("kanban-data");return t?JSON.parse(t):[{id:1,items:[]},{id:2,items:[]},{id:3,items:[]}]}function d(t){localStorage.setItem("kanban-data",JSON.stringify(t))}exports.default=c;
},{}],"z02M":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../kanbanApi"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var o=function(){function t(){n(this,t)}return r(t,null,[{key:"createDropZone",value:function(){var t=document.createRange();t.selectNode(document.body);var n=t.createContextualFragment('\n\t\t\t<div class="kanban__dropzone"></div>\n\t\t').children[0];return n.addEventListener("dragover",function(e){e.preventDefault(),n.classList.add("kanban__dropzone--active")}),n.addEventListener("dragleave",function(){n.classList.remove("kanban__dropzone--active")}),n.addEventListener("drop",function(t){t.preventDefault(),n.classList.remove("kanban__dropzone--active");var a=n.closest(".kanban__column"),r=Number(a.dataset.id),o=Array.from(a.querySelectorAll(".kanban__dropzone")).indexOf(n),i=Number(t.dataTransfer.getData("text/plain")),c=document.querySelector('[data-id="'.concat(i,'"]')),u=n.parentElement.classList.contains("kanban__item")?n.parentElement:n;c.contains(n)||(u.after(c),e.default.updateItem(i,{columnId:r,position:o}))}),n}}]),t}();exports.default=o;
},{"../kanbanApi":"aYSx"}],"kVeE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./DropZone.js")),t=n(require("../kanbanApi"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var a=function(){function n(o,i){var a=this;r(this,n);var s=e.default.createDropZone();this.elements={},this.elements.root=n.createRoot(),this.elements.input=this.elements.root.querySelector(".kanban__item-input"),this.elements.root.dataset.id=o,this.elements.input.textContent=i,this.content=i,this.elements.root.appendChild(s);var l=function(){var e=a.elements.input.textContent.trim();e!==a.content&&(a.content=e,t.default.updateItem(o,{content:a.content}))};this.elements.input.addEventListener("blur",l),this.elements.root.addEventListener("dblclick",function(){window.confirm("Are you sure you want to delete this item?")&&(t.default.deleteItem(o),a.elements.input.removeEventListener("blur",l),a.elements.root.parentElement.removeChild(a.elements.root))}),this.elements.root.addEventListener("dragstart",function(e){e.dataTransfer.setData("text/plain",o)}),this.elements.input.addEventListener("drop",function(e){e.preventDefault()})}return i(n,null,[{key:"createRoot",value:function(){var e=document.createRange();return e.selectNode(document.body),e.createContextualFragment('\n\t\t\t<div class="kanban__item" draggable="true">\n\t\t\t\t<div class="kanban__item-input" contenteditable></div>\n\t\t\t</div>\n\t\t').children[0]}}]),n}();exports.default=a;
},{"./DropZone.js":"z02M","../kanbanApi":"aYSx"}],"wBhO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../kanbanApi")),t=r(require("./DropZone.js")),n=r(require("./item"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var s=function(){function r(n,o){var i=this;a(this,r);var s=t.default.createDropZone();this.elements={},this.elements.root=r.createRoot(),this.elements.title=this.elements.root.querySelector(".kanban__column-title"),this.elements.items=this.elements.root.querySelector(".kanban__column-items"),this.elements.addItem=this.elements.root.querySelector(".kanban__add-item"),this.elements.root.dataset.id=n,this.elements.title.textContent=o,this.elements.items.appendChild(s),this.elements.addItem.addEventListener("click",function(){var t=e.default.insertItem(n,"");i.renderItem(t)}),e.default.getItems(n).forEach(function(e){i.renderItem(e)})}return i(r,[{key:"renderItem",value:function(e){var t=new n.default(e.id,e.content);this.elements.items.appendChild(t.elements.root)}}],[{key:"createRoot",value:function(){var e=document.createRange();return e.selectNode(document.body),e.createContextualFragment('\n\t\t\t<div class="kanban__column">\n\t\t\t\t<div class="kanban__column-title"></div>\n\t\t\t\t<div class="kanban__column-items"></div>\n\t\t\t\t<button class="kanban__add-item" type="button">+ Add</button>\n\t\t\t</div>\n\t\t').children[0]}}]),r}();exports.default=s;
},{"../kanbanApi":"aYSx","./DropZone.js":"z02M","./item":"kVeE"}],"aj3C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./Column"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var i=function(){function t(n){var o=this;r(this,t),this.root=n,t.columns().forEach(function(t){var r=new e.default(t.id,t.title);o.root.appendChild(r.elements.root)})}return o(t,null,[{key:"columns",value:function(){return[{id:1,title:"Not Started"},{id:2,title:"In Progress"},{id:3,title:"Completed"}]}}]),t}();exports.default=i;
},{"./Column":"wBhO"}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=r(require("./view/kanban"));function r(e){return e&&e.__esModule?e:{default:e}}new e.default(document.querySelector(".kanban"));
},{"./styles.css":"D9Nj","./view/kanban":"aj3C"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-48ghog/src.8e397a80.js.map