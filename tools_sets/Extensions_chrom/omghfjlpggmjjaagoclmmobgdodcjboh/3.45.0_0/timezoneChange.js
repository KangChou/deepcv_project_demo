/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/bg/contentScripts/timezoneChange/dateCodeChange.js
/* harmony default export */ const dateCodeChange = ("let dateCodeChange = (Date, offsetDifference, proxyTimeZoneOffset) => {\n  /** @function */\n  const zeroString = (value\n  /*: number | string*/\n  ) =>\n  /*: string*/\n  {\n    const outputString = String(value);\n    return outputString.length >= 2 ? outputString : '0' + outputString;\n  };\n\n  const timezone\n  /*: string*/\n  = (proxyTimeZoneOffset >= 0 ? '+' : '-') + zeroString(Math.floor(Math.abs(proxyTimeZoneOffset) / 60)) + zeroString(Math.abs(proxyTimeZoneOffset) % 60);\n\n  const changeDateStringTimezone = (original\n  /*: string*/\n  ) => {\n    const newString = original.split('(')[0].trim();\n    return newString.replace(/GMT[\\\\+\\\\-][0-9]{4}/, 'GMT' + timezone);\n  };\n\n  if (Date.isModified) return Date;\n  const originalMethods = {};\n  originalMethods.now = Date.now;\n  originalMethods.toString = Date.prototype.toString;\n  originalMethods.toGMTString = Date.prototype.toGMTString;\n  originalMethods.toUTCString = Date.prototype.toUTCString;\n  originalMethods.toISOString = Date.prototype.toISOString;\n  originalMethods.toTimeString = Date.prototype.toTimeString;\n  originalMethods.toJSON = Date.prototype.toJSON;\n  originalMethods.getTime = Date.prototype.getTime;\n\n  const ModifiedDate = function (...args) {\n    let date = new Date(...args);\n    /* No instance */\n\n    if (!(this instanceof Date)) {\n      date = new Date(date.getTime() + offsetDifference * 60 * 1000);\n      return changeDateStringTimezone(date.toString());\n    }\n    /* No arguments with instance */\n\n\n    if (arguments.length === 0) {\n      return new Date(date.getTime() + offsetDifference * 60 * 1000);\n    }\n    /* 1 argument with instance */\n\n\n    if (arguments.length === 1) {\n      /* timestamp */\n      return new Date(arguments[0]);\n    }\n    /* 2+ agruments with instance */\n\n    /*date = new Date(\n      date.getTime() + offsetDifference * 60 * 1000\n    ); */\n\n\n    return date;\n  };\n\n  ModifiedDate.prototype = Date.prototype;\n  /*ModifiedDate.prototype.getTime = function(){\n    return (\n      originalMethods.getTime.call( this ) - offsetDifference * 60 * 1000\n    );\n  };*/\n\n  Object.getOwnPropertyNames(Date).filter(name => !(name in ModifiedDate)).forEach(name => {\n    Object.defineProperty(ModifiedDate, name, Object.getOwnPropertyDescriptor(Date, name));\n  });\n  Object.defineProperties(Date.prototype, {\n    'getTimezoneOffset': {\n      'configurable': true,\n      'enumerable': false,\n      'writable': true,\n      'value': function () {\n        return -proxyTimeZoneOffset;\n      }\n    },\n    'toISOString': {\n      'configurable': true,\n      'enumerable': false,\n      'writable': true,\n      'value': function () {\n        const date = new Date(this.getTime() - offsetDifference * 60 * 1000);\n        return originalMethods.toISOString.call(date);\n      }\n    },\n    'toString': {\n      'configurable': true,\n      'enumerable': false,\n      'writable': true,\n      'value': function () {\n        const date = new Date(this.getTime());\n        return changeDateStringTimezone(originalMethods.toString.call(date));\n      }\n    },\n    'toTimeString': {\n      'configurable': true,\n      'enumerable': false,\n      'writable': true,\n      'value': function () {\n        const date = new Date(this.getTime());\n        return changeDateStringTimezone(originalMethods.toTimeString.call(date));\n      }\n    },\n    'toUTCString': {\n      'configurable': true,\n      'enumerable': false,\n      'writable': true,\n      'value': function () {\n        const date = new Date(this.getTime() - offsetDifference * 60 * 1000);\n        return originalMethods.toUTCString.call(date);\n      }\n    }\n  });\n\n  if (Date.prototype.toGMTString) {\n    Object.defineProperty(Date.prototype, 'toGMTString', {\n      'configurable': true,\n      'enumerable': false,\n      'writable': true,\n      'value': function () {\n        const date = new Date(this.getTime() - offsetDifference * 60 * 1000);\n        return originalMethods.toGMTString.call(date);\n      }\n    });\n  }\n\n  ModifiedDate.now = function () {\n    return originalMethods.now() + offsetDifference * 60 * 1000;\n  };\n\n  Object.defineProperties(ModifiedDate, {\n    'length': {\n      'enumerable': false,\n      'configurable': true,\n      'writable': false,\n      'value': 7\n    },\n    'name': {\n      'enumerable': false,\n      'configurable': true,\n      'writable': false,\n      'value': 'Date'\n    },\n    'isModified': {\n      'enumerable': false,\n      'configurable': true,\n      'writable': false,\n      'value': true\n    }\n  });\n  return ModifiedDate;\n};\n\n;");
;// CONCATENATED MODULE: ./src/contentScripts/timezoneChange.ts

/** @function */

const sendMessage = message => {
  if (typeof browser !== 'undefined') {
    return browser.runtime.sendMessage(message);
  }

  return new Promise(resolve => {
    chrome.runtime.sendMessage(message, resolve);
  });
};

(async () => {
  const bgResponse = await sendMessage({
    'type': 'date',
    'url': location.href
  });
  if (!bgResponse) return;
  let {
    'original': originalTimeZoneOffset,
    'proxy': proxyTimeZoneOffset
  } = bgResponse;
  if (proxyTimeZoneOffset === null) return;
  let offsetDifference = proxyTimeZoneOffset - originalTimeZoneOffset;
  const code = `
  let offsetDifference = ${offsetDifference};
  let proxyTimeZoneOffset = ${proxyTimeZoneOffset};

  ${dateCodeChange}

  Date = dateCodeChange( Date, offsetDifference, proxyTimeZoneOffset );
  `;
  const script = document.createElement('script');
  script.innerText = code.replace(/\n/gm, '');
  if (!document.documentElement) return; // Flow crap

  document.documentElement.insertBefore(script, document.documentElement.firstChild);
})();
/******/ })()
;