/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 651:
/***/ (() => {

(() => {
  if (self.Promise.prototype.finally) return;
  /**
  @method
  @param {Function}
  @return {Promise} initial */

  self.Promise.prototype.finally = function (onFinally) {
    // eslint-disable-line no-extend-native
    this.then(onFinally, onFinally);
    return this;
  };
})();

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/polyfills/Promise.prototype.finally.js
var Promise_prototype_finally = __webpack_require__(651);
;// CONCATENATED MODULE: ./src/general/tools/createElement.ts
/* global TreeElement, TreeTextNode */
const possibleAttributes = Object.freeze(['autocomplete', 'colspan', 'height', 'href', 'name', 'rowspan', 'src', 'target', 'type', 'width']);
/** @function */

let typescriptConverter = preObject => Object.assign({}, preObject, // @ts-ignore
{
  'type': typeof preObject.tag === 'string' ? 'element' : 'node'
});
/** Self-looped function to create elements tree
@function */


const createElement = (preObject, classModification = className => className) => {
  let object = typescriptConverter(preObject); // Node case

  if (object.type === 'node') {
    if (typeof object.text !== 'string') {
      throw new Error('createElement called without text property');
    }

    return document.createTextNode(object.text);
  } // Element case


  const {
    attributes,
    tag
  } = object;
  let element = document.createElement(tag);

  if (object.class) {
    let className = classModification(object.class);
    element.setAttribute('class', className);
  }

  if (object.style) element.setAttribute('style', object.style);

  if (attributes) {
    for (const [attribute, value] of Object.entries(attributes)) {
      const incompatibleAttributes = !possibleAttributes.includes(attribute) && !attribute.startsWith('data-');
      if (incompatibleAttributes) continue;
      if (attribute === 'src' && tag !== 'img') continue;
      element.setAttribute(attribute, value);
    }
  }

  if (object.node) object.node(element);
  if (object.text) element.textContent = object.text;

  if (object.children) {
    const children = object.children.map(child => createElement(child, classModification));
    children.forEach(child => {
      element.appendChild(child);
    });
  }

  return element;
};

/* harmony default export */ const tools_createElement = (createElement);
;// CONCATENATED MODULE: ./src/bg/contentScripts/notification/notification.css
/* harmony default export */ const notification = ("._Notification{\n  position: fixed;\n  bottom: 30px;\n\tright: 30px;\n  z-index: 44444444;\n  font-size: 14px;\n  line-height: 1.4;\n\tfont-family: tahoma, arial, sans-serif;\n}\n._Notification,\n._Notification *{\n  margin: 0;\n  padding: 0;\n}\n\n._Notification_Small,\n._Notification_Big{\n  display: none;\n}\n._Notification_Small{\n  width: 1px;\n\theight: 1px;\n\tborder-radius: 50%;\n\tbackground-color: #FFF;\n\tbox-shadow: 0 2px 7px rgba(0,0,0,.2);\n\ttransition: opacity .3s;\n  cursor: pointer;\n\tdisplay: none;\n\toverflow: hidden;\n\topacity: 0;\n}\n._Notification_Small:hover {\n\topacity: 1;\n}\n\n._Notification_Small:before,\n._Notification_Small:after{\n  content: ' ';\n  display:block;\n}\n._Notification_Small:before{\n  position: absolute;\n  left: 8px;\n  top: 8px;\n  width: 32px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:32px;\n  box-sizing: content-box;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTkzNTc0NjhGREZDMTFFNkFDMzRBNTQ2QTYyRDhGQ0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTkzNTc0NjlGREZDMTFFNkFDMzRBNTQ2QTYyRDhGQ0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOTM1NzQ2NkZERkMxMUU2QUMzNEE1NDZBNjJEOEZDQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOTM1NzQ2N0ZERkMxMUU2QUMzNEE1NDZBNjJEOEZDQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiPs7a8AAAW0SURBVHjaxFdpUFNXFP6ygIArqCCyi6OAOiquA+4VZCplGSsOtorYATsqZUas2Fp1sB2B1jpF+aHYVm0V3KbBpY6KW0HUFltrka0gyBIgQSCIUIG8vN7zLJGExdD84DKXvHvvd77z5d5zz8kT8TyPgWxiQ4GKuoaxzxpUURoNfzbz3sPCNZviVGyap8/bdx8Ws/lztE64fimgHeirPy4snbbh43hZhVyhZg742cvW8/bTAoROrfN5pm84X1ev4hmOIzzZvYlb2P3eFl62tZntSkw54OgZyN17kMurmpr5CV4hWof6AqjTOuEIT3bM/iDx9CWgxyNQPmu0CwqLvfd92qUofx9v8ezpHghYuw2trS/73E1aJ9wshg/0WyBm9puJh/gMjoEaRb19cPj2bNpCGsdti8ApWQZKy+UGHSnhTp67ii+2bxDGxBO0LjabeA0RYJ5bWHKpoqrWiQbvvrMEw4YMxo6EQ/2Kq91fpcBskClCg32EcaVc4US8xN+ngDPnb3y5yGvG1PuXv4XXrCmIjgjB9cwcqNWafgkgPNltDF8h8BDfYsZL/L0KyCsq89y2J3njjKVhkNcocerw53B2sEVuUen/ut9kR/bEU11bB0/GS/zsSDy74kSdiSgiJl525eb9oM6F7dFr8OHaYKg5DhKxBKUV1fj9USEe/FmA/KIyVFQpkJeViknzV8PR3gYeE10wc5o7Zkx1wzjHseA0HKQSCQ79IENC0o9ah35L5qYf+fqTYB0BLHnYzfH7oILTaLQ7cvpYHEbYmiEyPRoLXebBd/wSjLdyxUiLETCVmkIsen16Gl6DdnU76ltVKGl4gmslN/FL2R2kBCWhSdGOkLU7tViJWKz59cp3jjajrYSoltI/9s2Duzqn5upoj0z5HeGZyKjrtzuRVzEvZVmvx/BYkY+F9gt05sgP+Qtb9XayNgbu5uQu0jceMXQY8pWFRuX5PGZPPPqNJarFOkFYXFY5WR9kKjFBbbPCKAFlDeUwkUi7zRc9qZikI6BWWW+rDxKJRFC21BkloLZFqRMrXQqbrf4tGIiaLNIK8Jgf2tT8olXnsCofnseK1PeheNH7LrwpCC1MLXBtnQwO0wN15ocOsXien5U2XHsE7ErU9FSmrQePNuorjhlsLVxR/dbVnyBgwjjHx/qgdq4DY4baGCXAxcoJHZy62zzzl6cjgOXr2/ogVctzeFi7GSVgErMnHv3G/N3SEcDSo4wyVFfQ0+oqgcCYNtnGA09rdMs4+aF03DmW/ncmcp9Fsy90rQUZWb8hJnzNK8WOc7B8oi/Gj3SFlYUlBklep2IKRDrnNq4djf+oUPysBJf/zkB2+X24WDrhm4upOgLID/NX1a0YUZXyfy8mpzMle7g542paEjo0HWybxKhskrPMViB0eq5tVuJs6HGsTAtjsWINh+F2bMfchU7PGvZnIjbBstXRyC94qv32F0/smzXF3fWPbgKo7Uo8cvD0heubk/duxVvzZ4LjORSz4hIp+6jf1zAl+AAmsOIlFklwI+sBNn+6D6sClibviY2I6rEcC5HfobZgCfCusq5x6pbdSXBwHoX42E3wORoAtUZjsACpWIyM8AvYuf8wyoprsT8uGtajLR+xdOdlYiJt7fUXkSlbVHdw/iGRn5WzAoXTZ2/heWsLtsyL6lfwRXttxMv2NpxMzaBCh5URO8qJV995jz9Kzc0HVcmOJnhPdhv3l3AsCUfgP9EP9sPtDHJOuED35dgRn/LqJjCe9GOJ3sRr8JuR9ShLefrxxLnrQ/2TL13J1uQ8ykdKYBLMpWZ9Oqd1whH+/M+ZGrInHuIz5s1oeuTWvbLKaoW6oUXFB51YzXsf9hU6tc5nmq9/0cgzHBcRs1eWW/DE06g3I/3OSvbYuvrGKI7jzt3Mzy6KPLOliQTQJxsXs/mf2KtZFOEM5aQuGui34wEX8K8AAwDBE6hyr22tyQAAAABJRU5ErkJggg==\");\n}\n._Notification_Small:after{\n  position: absolute;\n\tright: 2px;\n\ttop: 2px;\n\twidth: 10px;\n\toverflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:10px;\n  box-sizing: content-box;\n\tbackground-color: #993B3B;\n\tborder-radius: 50%;\n}\n\n._Notification_Big{}\n._Notification_Big_In{\n  background-color: #FFF;\n\tcolor: #494B4D;\n\tbox-shadow: 0 5px 15px rgba(0,0,0,.15);\n\tborder-radius: 4px;\n\twidth: 340px;\n}\n\n._Notification_Big_In::before {\n  content: ' ';\n  display: block;\n\tborder-radius: 4px 4px 0 0;\n\tposition: relative;\n\toverflow:hidden;font-size:0;text-indent:-9999px;height:0;\n\tpadding-top:54px;\n  box-sizing: content-box;\n\tbackground: #1C304E url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAiCAYAAACTHwETAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTkzNTc0NjRGREZDMTFFNkFDMzRBNTQ2QTYyRDhGQ0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTkzNTc0NjVGREZDMTFFNkFDMzRBNTQ2QTYyRDhGQ0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOTM1NzQ2MkZERkMxMUU2QUMzNEE1NDZBNjJEOEZDQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOTM1NzQ2M0ZERkMxMUU2QUMzNEE1NDZBNjJEOEZDQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmyAFe0AAAsKSURBVHja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') no-repeat center center;\n}\n\n._Notification_Big_In_In {\n\tpadding: 25px 30px 28px;\n\ttext-align: center;\n}\n\n._Notification_Big_Title{\n\tmargin-bottom: 11px;\n\tfont-size: 18px;\n\tfont-weight: 600;\n\tcolor: #3B9946;\n\ttext-align: center;\n}\n\n._Notification_Big_Text{\n\tfont-size: 14px;\n\tline-height: 22px;\n\ttext-align: center;\n  padding-bottom: 20px;\n}\n\na._Notification_Big_Button{\n\tborder-radius: 3px;\n  position: relative;\n\tdisplay: table;\n  height: 40px;\n  width: 100%;\n\tfont-size: 14px;\n\tbackground-color: #3B9946;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcolor: #fff;\n\ttransition: background .3s;\n}\na._Notification_Big_Button:hover{\n\tbackground: #308139;\n  color: #fff;\n\ttext-decoration: none;\n}\na._Notification_Big_Button_long{\n  height: 48px;\n}\n._Notification_Big_Button_In{\n  display: table-cell;\n  vertical-align: middle;\n  padding: 0px 15px;\n}\n._Notification_Big_Button_Name{\n  line-height: 20px;\n}\n._Notification_Big_Button_Name_uppercase{\n  text-transform: uppercase;\n  font-weight: bold;\n}\n._Notification_Big_Button_Price{\n  display: block;\n  font-size: 12px;\n}\n._Notification_Big_Button_Price_Value{\n  font-weight: bold;\n}\n._Notification_Big_Button_Price_OldValue{\n  text-decoration: line-through;\n  color: #9aca9f;\n  margin-left: 3px;\n}\n\n._Notification_Big_Button_Discount{\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 8px;\n}\n._Notification_Big_Button_Discount_In{\n  width: 36px;\n  height: 36px;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCgk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUyLjI3MTUgMjguOTk2OUM1MS41OTM2IDI5LjY3OTggNTEuMTMyMSAzMC41NDczIDUwLjk0NDggMzEuNDkxMUM1MC43NTc1IDMyLjQzNDggNTAuODUyNiAzMy40MTI4IDUxLjIxODQgMzQuMzAyOEM1MS40MTU5IDM0LjcwMDIgNTEuNTI1OCAzNS4xMzU0IDUxLjU0MDggMzUuNTc5QzUxLjU1NTcgMzYuMDIyNSA1MS40NzUzIDM2LjQ2NDEgNTEuMzA0OSAzNi44NzM5QzUxLjEzNDYgMzcuMjgzNyA1MC44NzgzIDM3LjY1MjEgNTAuNTUzMyAzNy45NTQ0QzUwLjIyODMgMzguMjU2NyA0OS44NDIxIDM4LjQ4NTkgNDkuNDIxIDM4LjYyNjNDNDguNTMzOCAzOC45OTY3IDQ3Ljc3NTcgMzkuNjIwNCA0Ny4yNDEyIDQwLjQxOTNDNDYuNzA2OCA0MS4yMTgyIDQ2LjQxOTggNDIuMTU2OSA0Ni40MTYyIDQzLjExODFDNDYuNDQ4NyA0My41NTk2IDQ2LjM4NTUgNDQuMDAzIDQ2LjIzMTEgNDQuNDE3OUM0Ni4wNzY4IDQ0LjgzMjkgNDUuODM0OCA0NS4yMDk2IDQ1LjUyMTcgNDUuNTIyNkM0NS4yMDg1IDQ1LjgzNTcgNDQuODMxNyA0Ni4wNzc2IDQ0LjQxNjYgNDYuMjMxOUM0NC4wMDE1IDQ2LjM4NjIgNDMuNTU4IDQ2LjQ0OTIgNDMuMTE2MyA0Ni40MTY4QzQyLjE1MzUgNDYuNDIyMiA0MS4yMTM3IDQ2LjcxMTUgNDAuNDE0NSA0Ny4yNDgzQzM5LjYxNTIgNDcuNzg1MSAzOC45OTIxIDQ4LjU0NTcgMzguNjIzMSA0OS40MzQ4QzM4LjQ4MTggNDkuODUzNCAzOC4yNTI1IDUwLjIzNjkgMzcuOTUwNyA1MC41NTk1QzM3LjY0ODggNTAuODgyMiAzNy4yODEyIDUxLjEzNjUgMzYuODcyOSA1MS4zMDU0QzM2LjQ2NDUgNTEuNDc0MyAzNi4wMjQ3IDUxLjU1MzggMzUuNTgzIDUxLjUzODZDMzUuMTQxNCA1MS41MjM0IDM0LjcwOCA1MS40MTQgMzQuMzEyMiA1MS4yMTc1QzMzLjQyMjIgNTAuODUwNCAzMi40NDM3IDUwLjc1NDUgMzEuNDk5MyA1MC45NDE4QzMwLjU1NDkgNTEuMTI5MSAyOS42ODcgNTEuNTkxMyAyOS4wMDQ2IDUyLjI3MDNDMjguNzEzNSA1Mi42MDQxIDI4LjM1NDEgNTIuODcxNyAyNy45NTA4IDUzLjA1NTFDMjcuNTQ3NiA1My4yMzg0IDI3LjEwOTcgNTMuMzMzMyAyNi42NjY3IDUzLjMzMzNDMjYuMjIzNiA1My4zMzMzIDI1Ljc4NTggNTMuMjM4NCAyNS4zODI1IDUzLjA1NTFDMjQuOTc5MiA1Mi44NzE3IDI0LjYxOTggNTIuNjA0MSAyNC4zMjg3IDUyLjI3MDNDMjMuNjQ1NSA1MS41OTI2IDIyLjc3NzcgNTEuMTMxMyAyMS44MzM3IDUwLjk0NEMyMC44ODk3IDUwLjc1NjggMTkuOTExNCA1MC44NTE5IDE5LjAyMTEgNTEuMjE3NUMxOC42MjUzIDUxLjQxNCAxOC4xOTIgNTEuNTIzNCAxNy43NTAzIDUxLjUzODZDMTcuMzA4NiA1MS41NTM4IDE2Ljg2ODggNTEuNDc0MyAxNi40NjA1IDUxLjMwNTRDMTYuMDUyMSA1MS4xMzY1IDE1LjY4NDUgNTAuODgyMiAxNS4zODI3IDUwLjU1OTVDMTUuMDgwOCA1MC4yMzY5IDE0Ljg1MTUgNDkuODUzNCAxNC43MTAyIDQ5LjQzNDhDMTQuMzM4MiA0OC41NDUgMTMuNzEyMyA0Ny43ODQ1IDEyLjkxMDggNDcuMjQ3OEMxMi4xMDkzIDQ2LjcxMTEgMTEuMTY3NiA0Ni40MjIgMTAuMjAyOSA0Ni40MTY4QzkuNzYxNTcgNDYuNDQ4IDkuMzE4NTYgNDYuMzg0MiA4LjkwNDAzIDQ2LjIyOTVDOC40ODk1IDQ2LjA3NDcgOC4xMTMwNiA0NS44MzI5IDcuODAwMTggNDUuNTIwMUM3LjQ4NzI5IDQ1LjIwNzMgNy4yNDUzMiA0NC44MzEgNy4wOTA1NSA0NC40MTY2QzYuOTM1NzkgNDQuMDAyMiA2Ljg3MTkzIDQzLjU1OTMgNi45MDMyMSA0My4xMTgxQzYuOTAyMzggNDIuMTU2MyA2LjYxNjQ3IDQxLjIxNjQgNi4wODE2NiA0MC40MTY5QzUuNTQ2ODUgMzkuNjE3NCA0Ljc4NzA5IDM4Ljk5NDQgMy44OTgyOSAzOC42MjYzQzMuNDc3ODIgMzguNDg1MiAzLjA5MjUzIDM4LjI1NTUgMi43Njg1NSAzNy45NTI3QzIuNDQ0NTcgMzcuNjQ5OSAyLjE4OTQ0IDM3LjI4MSAyLjAyMDM2IDM2Ljg3MTFDMS44NTEyOSAzNi40NjEyIDEuNzcyMyAzNi4wMTk4IDEuNzg4NjIgMzUuNTc2N0MxLjgwNDk1IDM1LjEzMzcgMS45MTYyIDM0LjY5OTEgMi4xMTQ5OCAzNC4zMDI4QzIuNDgwNjkgMzMuNDEyOCAyLjU3NTg1IDMyLjQzNDggMi4zODg1NCAzMS40OTExQzIuMjAxMjMgMzAuNTQ3MyAxLjczOTc2IDI5LjY3OTggMS4wNjE4NiAyOC45OTY5QzAuNzI4NDUyIDI4LjcwNyAwLjQ2MTAzOCAyOC4zNDkgMC4yNzc4NDkgMjcuOTQ3QzAuMDk0NjYwMiAyNy41NDUgMCAyNy4xMDg0IDAgMjYuNjY2N0MwIDI2LjIyNDkgMC4wOTQ2NjAyIDI1Ljc4ODMgMC4yNzc4NDkgMjUuMzg2M0MwLjQ2MTAzOCAyNC45ODQ0IDAuNzI4NDUyIDI0LjYyNjMgMS4wNjE4NiAyNC4zMzY1QzEuNzM5NzYgMjMuNjUzNSAyLjIwMTIzIDIyLjc4NiAyLjM4ODU0IDIxLjg0MjNDMi41NzU4NSAyMC44OTg1IDIuNDgwNjkgMTkuOTIwNiAyLjExNDk4IDE5LjAzMDZDMS45MTYyIDE4LjYzNDIgMS44MDQ5NSAxOC4xOTk3IDEuNzg4NjIgMTcuNzU2NkMxLjc3MjMgMTcuMzEzNSAxLjg1MTI5IDE2Ljg3MjEgMi4wMjAzNiAxNi40NjIyQzIuMTg5NDQgMTYuMDUyMyAyLjQ0NDU3IDE1LjY4MzQgMi43Njg1NSAxNS4zODA2QzMuMDkyNTMgMTUuMDc3OCAzLjQ3NzgyIDE0Ljg0ODIgMy44OTgyOSAxNC43MDcxQzQuNzg2IDE0LjMzNzQgNS41NDQ2OCAxMy43MTQgNi4wNzkyNiAxMi45MTQ5QzYuNjEzODQgMTIuMTE1OCA2LjkwMDUzIDExLjE3NjYgNi45MDMyMSAxMC4yMTUzQzYuODcxOTMgOS43NzQwMyA2LjkzNTc5IDkuMzMxMTYgNy4wOTA1NSA4LjkxNjc2QzcuMjQ1MzIgOC41MDIzNiA3LjQ4NzI5IDguMTI2MDQgNy44MDAxOCA3LjgxMzI2QzguMTEzMDYgNy41MDA0OCA4LjQ4OTUgNy4yNTg1OSA4LjkwNDAzIDcuMTAzODdDOS4zMTg1NiA2Ljk0OTE1IDkuNzYxNTcgNi44ODUzMiAxMC4yMDI5IDYuOTE2NThDMTEuMTY3NiA2LjkxMTMgMTIuMTA5MyA2LjYyMjIgMTIuOTEwOCA2LjA4NTUzQzEzLjcxMjMgNS41NDg4NiAxNC4zMzgyIDQuNzg4MzMgMTQuNzEwMiAzLjg5ODU4QzE0Ljg1MTUgMy40Nzk5NyAxNS4wODA4IDMuMDk2NDkgMTUuMzgyNyAyLjc3MzgzQzE1LjY4NDUgMi40NTExNyAxNi4wNTIxIDIuMTk2ODIgMTYuNDYwNSAyLjAyNzk0QzE2Ljg2ODggMS44NTkwNiAxNy4zMDg2IDEuNzc5NTYgMTcuNzUwMyAxLjc5NDczQzE4LjE5MiAxLjgwOTkgMTguNjI1MyAxLjkxOTM1IDE5LjAyMTEgMi4xMTU4NEMxOS45MTE0IDIuNDgxNDQgMjAuODg5NyAyLjU3NjU3IDIxLjgzMzcgMi4zODkzMkMyMi43Nzc3IDIuMjAyMDcgMjMuNjQ1NSAxLjc0MDc1IDI0LjMyODcgMS4wNjMwNkMyNC42MTk4IDAuNzI5MjQyIDI0Ljk3OTIgMC40NjE2MzcgMjUuMzgyNSAwLjI3ODI3NEMyNS43ODU4IDAuMDk0OTExIDI2LjIyMzYgMCAyNi42NjY3IDBDMjcuMTA5NyAwIDI3LjU0NzYgMC4wOTQ5MTEgMjcuOTUwOCAwLjI3ODI3NEMyOC4zNTQxIDAuNDYxNjM3IDI4LjcxMzUgMC43MjkyNDIgMjkuMDA0NiAxLjA2MzA2QzI5LjY4NyAxLjc0MjAyIDMwLjU1NDkgMi4yMDQyMyAzMS40OTkzIDIuMzkxNTVDMzIuNDQzNyAyLjU3ODg2IDMzLjQyMjIgMi40ODI5MiAzNC4zMTIyIDIuMTE1ODRDMzQuNzA4IDEuOTE5MzUgMzUuMTQxNCAxLjgwOTkgMzUuNTgzIDEuNzk0NzNDMzYuMDI0NyAxLjc3OTU2IDM2LjQ2NDUgMS44NTkwNiAzNi44NzI5IDIuMDI3OTRDMzcuMjgxMiAyLjE5NjgyIDM3LjY0ODggMi40NTExNyAzNy45NTA3IDIuNzczODNDMzguMjUyNSAzLjA5NjQ5IDM4LjQ4MTggMy40Nzk5NyAzOC42MjMxIDMuODk4NThDMzguOTkyMSA0Ljc4NzY2IDM5LjYxNTIgNS41NDgyIDQwLjQxNDUgNi4wODUwMkM0MS4yMTM3IDYuNjIxODMgNDIuMTUzNSA2LjkxMTEgNDMuMTE2MyA2LjkxNjU4QzQzLjU1OCA2Ljg4NDEzIDQ0LjAwMTUgNi45NDcxNyA0NC40MTY2IDcuMTAxNDdDNDQuODMxNyA3LjI1NTc3IDQ1LjIwODUgNy40OTc2NiA0NS41MjE3IDcuODEwNjlDNDUuODM0OCA4LjEyMzczIDQ2LjA3NjggOC41MDA0NSA0Ni4yMzExIDguOTE1MzlDNDYuMzg1NSA5LjMzMDMzIDQ2LjQ0ODcgOS43NzM3NSA0Ni40MTYyIDEwLjIxNTNDNDYuNDIxOCAxMS4xNzU5IDQ2LjcwOTYgMTIuMTEzOCA0Ny4yNDM4IDEyLjkxMjNDNDcuNzc4IDEzLjcxMDkgNDguNTM1IDE0LjMzNSA0OS40MjEgMTQuNzA3MUM0OS44NDIxIDE0Ljg0NzQgNTAuMjI4MyAxNS4wNzY2IDUwLjU1MzMgMTUuMzc4OUM1MC44NzgzIDE1LjY4MTIgNTEuMTM0NiAxNi4wNDk3IDUxLjMwNDkgMTYuNDU5NUM1MS40NzUzIDE2Ljg2OTMgNTEuNTU1NyAxNy4zMTA4IDUxLjU0MDggMTcuNzU0NEM1MS41MjU4IDE4LjE5NzkgNTEuNDE1OSAxOC42MzMyIDUxLjIxODQgMTkuMDMwNkM1MC44NTI2IDE5LjkyMDYgNTAuNzU3NSAyMC44OTg1IDUwLjk0NDggMjEuODQyM0M1MS4xMzIxIDIyLjc4NiA1MS41OTM2IDIzLjY1MzUgNTIuMjcxNSAyNC4zMzY1QzUyLjYwNDkgMjQuNjI2MyA1Mi44NzIzIDI0Ljk4NDQgNTMuMDU1NSAyNS4zODYzQzUzLjIzODcgMjUuNzg4MyA1My4zMzMzIDI2LjIyNDkgNTMuMzMzMyAyNi42NjY3QzUzLjMzMzMgMjcuMTA4NCA1My4yMzg3IDI3LjU0NSA1My4wNTU1IDI3Ljk0N0M1Mi44NzIzIDI4LjM0OSA1Mi42MDQ5IDI4LjcwNyA1Mi4yNzE1IDI4Ljk5NjlaIiBmaWxsPSIjMjgzNDRGIi8+DQo8L3N2Zz4NCg==\");\n  background-size: 100% 100%;\n  display: table;\n  position: absolute;\n  right: 0;\n  top: calc(50% - 36px / 2);\n}\n._Notification_Big_Button_Discount_In_In{\n  display: table-cell;\n  vertical-align: middle;\n}\n._Notification_Big_Button_Discount_Minus{\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 10px;\n  font-weight: bold;\n}\n._Notification_Big_Button_Discount_Value{\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n  font-weight: bold;\n}\n._Notification_Big_Button_Discount_Percent{\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 8px;\n  font-weight: bold;\n}\n\n._Notification_Later{\n  padding-top: 15px;\n  text-align: center;\n}\n._Notification_Later_In{\n  cursor: pointer;\n  color: #1C304E;\n  text-decoration: underline;\n}\n._Notification_Later_In:hover{\n  color: #1C304E;\n  text-decoration: none;\n}\n\n._Notification._Notification_stSmall ._Notification_Small{\n\tdisplay: none!important;\n\twidth: 48px;\n\theight: 48px;\n\topacity: .5;\n}\n._Notification._Notification_stBig ._Notification_Big{\n  display: block!important;\n}\n");
;// CONCATENATED MODULE: ./src/general/tools/insertStyle.ts
/** Add text style in page
@function
@param css - like '.class{ display: block; }' */
/* harmony default export */ const insertStyle = (css => {
  let style
  /*: HTMLStyleElement*/
  = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
});
;// CONCATENATED MODULE: ./src/contentScripts/notification.ts
/* global TreeElement */

 // @ts-ignore



const originalCss = notification; // TS crap

const minClassLength = (() => {
  let lengths = originalCss.split('{').slice(0, -1).flatMap((part, index) => {
    part = part.trim();
    if (index) part = part.split('}')[1];
    return part.split(',').map(item => item.trim().replace(/^\./g, '').length);
  });
  return Math.min.apply(Math, lengths);
})(); // Class modification parameter


const modifierOptions = {
  'offset': 1 + Math.floor(Math.random() * (minClassLength - 1)),
  'value': Math.floor(Math.random() * 999999)
};
/** @function */

const modifier = className => {
  const left
  /*: string*/
  = className.slice(0, modifierOptions.offset);
  const right
  /*: string*/
  = className.slice(modifierOptions.offset);
  return left + modifierOptions.value + right;
};
/** @function */


const classModification = className => className.split(' ').map(part => modifier(part)).join(' ');

const css = originalCss.split('}').slice(0, -1).map(part => {
  let [selectors, rules]
  /*: string[]*/
  = // eslint-disable-line standard/array-bracket-even-spacing
  part.split('{').map(item => item.trim());
  rules = '{' + rules + '}';
  selectors = selectors.split(',').map(selector => selector.trim().replace(/\.([_a-zA-Z]+)/g, (match, className) => '.' + modifier(className))).join(',');
  return selectors + rules;
}).join('');
/** @function */

const sendMessage = message => {
  if (typeof browser !== 'undefined') {
    return browser.runtime.sendMessage(message);
  }

  return new Promise(resolve => {
    chrome.runtime.sendMessage(message, resolve);
  });
}; // User's language


const language
/*: string*/
= navigator.language.slice(0, 2).toLowerCase(); // Main execution flow

(async () => {
  /** Intitial call to get popup status + translation
  (When page fully loaded + message received) */
  let {
    html,
    size
  } = await new Promise(async resolve => {
    const data = await sendMessage({
      language,
      'type': 'notification:request:initial',
      'url': location.href
    });
    if (data === null || data === void 0 ? void 0 : data.show) resolve(data);
  }); // Inserting styles in <head>

  insertStyle(css);

  let elements = (() => {
    let elements = {};
    let structure = {
      'tag': 'div',
      'class': '_Notification ' + (size === 'small' ? '_Notification_stSmall' : '_Notification_stBig'),
      'children': [{
        'tag': 'div',
        'class': '_Notification_Small',
        'node': node => {
          elements.makeBig = node;
        }
      }, {
        'tag': 'div',
        'class': '_Notification_Big',
        'children': [html]
      }]
    };
    elements.parent = tools_createElement(structure, classModification)
    /*: any*/
    ;
    elements.makeSmall = Array.from(elements.parent.querySelectorAll('[data-click="close"]'));
    return elements;
  })();
  /** @function */


  const setVisibility = visible => {
    sendMessage({
      'type': 'notification:request:setVisibility',
      visible
    });

    if (visible) {
      elements.parent.classList.add(modifier('_Notification_stBig'));
      elements.parent.classList.remove(modifier('_Notification_stSmall'));
    } else {
      elements.parent.classList.remove(modifier('_Notification_stBig'));
      elements.parent.classList.add(modifier('_Notification_stSmall'));
    }
  };

  elements.makeBig.addEventListener('click', () => {
    setVisibility(true);
  });
  elements.makeSmall.forEach(element => {
    element.addEventListener('click', () => {
      setVisibility(false);
    });
  });
  elements.parent.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', async event => {
      event.preventDefault();
      sendMessage({
        'type': 'notification:request:click',
        'url': location.href
      });
      await new Promise(resolve => {
        setTimeout(resolve, 50);
      });
      self.open(link.href);
    });
  }); // Inserting into actual DOM with delay

  setTimeout(() => {
    document.body.append(elements.parent); // Wait for actual showing

    if (size !== 'big') return;
    const rect = elements.parent.getClientRects()[0];
    if (!rect.width || !rect.height) return;
    sendMessage({
      'type': 'notification:request:popupShow',
      'url': location.href
    });
  }, 10 * 1000); // Ping to check all is OK

  /** @function */

  const ping = async () => {
    try {
      await new Promise((resolve, reject) => {
        try {
          sendMessage({
            'type': 'notification:ping'
          }).then(state => {
            if (state === 'ok') resolve();
          });
          setTimeout(() => {
            reject(new Error('Ping timeout reached'));
          }, 3000);
        } catch (error) {
          reject(error);
        }
      });
      setTimeout(ping, 4000);
    } catch (x) {
      elements.parent.remove();
    }
  };

  ping();
})();
})();

/******/ })()
;