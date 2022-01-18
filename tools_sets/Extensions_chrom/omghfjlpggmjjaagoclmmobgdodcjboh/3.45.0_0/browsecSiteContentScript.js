/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4284:
/***/ ((module) => {

module.exports = {
  'differentColorsInBanner': {
    'event': 'onboarding.install',
    'id': 'zA5D8e0LT4iBD4Au-T8jKA',
    'taskNumber': 294,
    // 901
    'type': 'event'
  },
  'fastServersWarning': {
    'event': 'fastServers',
    'id': '4M02qrBQTq6GJ5QG7Kw4Dw',
    'taskNumber': 178,
    // 877
    'type': 'event',
    'version': '3.41.0'
  },
  'missingLocationLink': {
    'id': 'DWeBbv86SGeGNI1ybCjN7g',
    'taskNumber': 243,
    'type': 'event',
    'event': 'onboarding.install'
  },
  'premiumComparisonOnFirstPopup': {
    'id': 'RbZW13_0RoebnWwdw-4EoQ',
    'event': 'onboarding.install',
    'taskNumber': 262,
    // 879
    'type': 'event'
  },
  'premiumOverlayOnPopupOpen': {
    'id': 'Ei89c9qLRLeTZiCbZTieRw',
    'event': 'onboarding.install',
    'taskNumber': 152,
    // 882
    'type': 'event'
  },
  'promotionPageAfterInstall': {
    'id': '_mRLtabcQ3e_iXHaK31Wjw',
    'event': 'onboarding.install',
    'taskNumber': 284,
    // 892
    'type': 'event'
  },
  'startupTips': {
    'id': 'NzBKpQCYQnCJl2pXtCitVQ',
    'event': 'onboarding.install',
    'version': '3.40.0',
    'taskNumber': 152,
    'type': 'event'
  },
  'stepsForFirstProxyOn': {
    'id': 'U71OCGRvQ7-4cbz23Enm5Q',
    'event': 'onboarding.install',
    'taskNumber': 263,
    // 883
    'type': 'event'
  }
};

/***/ }),

/***/ 4019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const experiments = __webpack_require__(4284);

const proxySettings = __webpack_require__(5778);

module.exports = {
  'type': 'production',
  'name': {
    'chrome': '__MSG_extension_name_chrome__',
    'edge': 'Browsec VPN - Free VPN for Edge',
    'firefox': 'Browsec VPN - Free VPN for Firefox',
    'opera': 'Browsec VPN - Free VPN for Opera'
  },
  'shortName': 'Browsec VPN',
  'description': {
    'chrome': '__MSG_extension_description_chrome__',
    'edge': 'Browsec VPN is an Edge VPN extension that protects your IP from Internet threats and lets you browse privately for free.',
    'firefox': 'Browsec VPN is a Firefox VPN extension that protects your IP from Internet threats and lets you browse privately for free.',
    'opera': 'Browsec VPN is an Opera VPN extension that protects your IP from Internet threats and lets you browse privately for free.'
  },
  'apiServerUrls': ['https://browsec.com/api/v1', 'https://drah7iczdw1tu.cloudfront.net/v1'],
  'baseUrl': 'https://browsec.com',
  'ga': {
    'enabled': true,
    'extension_id': ['omghfjlpggmjjaagoclmmobgdodcjboh', 'dknfpcdpbkjijldegonllfnnfhabjpde', '05908b89-695d-4687-aa36-6d87f42a464d' // NOTE temporary
    ],
    'tracking_id': 'UA-43024042-1',
    'chance': 0.01,
    'fullTrackingId': 'UA-43024042-3'
  },
  'auth': {
    // When disabled, users can't login/register
    'enabled': true
  },
  'proxy': {
    'defaultCountry': 'nl',
    'settings': proxySettings
  },
  experiments
};

/***/ }),

/***/ 5778:
/***/ ((module) => {

let proxySettings = {
  'version': 56,
  'countries': {
    'at': {
      'timezoneOffset': 120,
      'premium_servers': [{
        'host': 'at1.lunrac.com',
        'port': 443
      }, {
        'host': 'at2.lunrac.com',
        'port': 443
      }, {
        'host': 'at3.lunrac.com',
        'port': 443
      }, {
        'host': 'at4.lunrac.com',
        'port': 443
      }, {
        'host': 'at5.lunrac.com',
        'port': 443
      }, {
        'host': 'at6.lunrac.com',
        'port': 443
      }, {
        'host': 'at7.lunrac.com',
        'port': 443
      }]
    },
    'au': {
      'timezoneOffset': 525,
      'premium_servers': [{
        'host': 'au2.lunrac.com',
        'port': 443
      }, {
        'host': 'au3.lunrac.com',
        'port': 443
      }]
    },
    'be': {
      'timezoneOffset': 120,
      'premium_servers': [{
        'host': 'be1.lunrac.com',
        'port': 443
      }, {
        'host': 'be2.lunrac.com',
        'port': 443
      }, {
        'host': 'be3.lunrac.com',
        'port': 443
      }, {
        'host': 'be4.lunrac.com',
        'port': 443
      }, {
        'host': 'be5.lunrac.com',
        'port': 443
      }, {
        'host': 'be6.lunrac.com',
        'port': 443
      }, {
        'host': 'be7.lunrac.com',
        'port': 443
      }]
    },
    'bg': {
      'timezoneOffset': 180,
      'premium_servers': [{
        'host': 'bg1.lunrac.com',
        'port': 443
      }, {
        'host': 'bg2.lunrac.com',
        'port': 443
      }]
    },
    'ca': {
      'timezoneOffset': -420,
      'premium_servers': [{
        'host': 'ca1.lunrac.com',
        'port': 443
      }]
    },
    'ch': {
      'timezoneOffset': 120,
      'premium_servers': [{
        'host': 'ch1.lunrac.com',
        'port': 443
      }]
    },
    'de': {
      'timezoneOffset': 120,
      'premium_servers': [{
        'host': 'de1.lunrac.com',
        'port': 443
      }, {
        'host': 'de2.lunrac.com',
        'port': 443
      }, {
        'host': 'de3.lunrac.com',
        'port': 443
      }]
    },
    'dk': {
      'timezoneOffset': 120,
      'premium_servers': [{
        'host': 'dk1.lunrac.com',
        'port': 443
      }, {
        'host': 'dk2.lunrac.com',
        'port': 443
      }]
    },
    'es': {
      'timezoneOffset': 120,
      'premium_servers': [{
        'host': 'es1.lunrac.com',
        'port': 443
      }]
    },
    'fi': {
      'timezoneOffset': 180,
      'premium_servers': [{
        'host': 'fi1.lunrac.com',
        'port': 443
      }, {
        'host': 'fi2.lunrac.com',
        'port': 443
      }, {
        'host': 'fi3.lunrac.com',
        'port': 443
      }, {
        'host': 'fi4.lunrac.com',
        'port': 443
      }]
    },
    'fr': {
      'timezoneOffset': 120,
      'premium_servers': [{
        'host': 'fr1.lunrac.com',
        'port': 443
      }, {
        'host': 'fr2.lunrac.com',
        'port': 443
      }]
    },
    'hk': {
      'timezoneOffset': 480,
      'premium_servers': [{
        'host': 'hk1.lunrac.com',
        'port': 443
      }, {
        'host': 'hk2.lunrac.com',
        'port': 443
      }, {
        'host': 'hk3.lunrac.com',
        'port': 443
      }, {
        'host': 'hk4.lunrac.com',
        'port': 443
      }, {
        'host': 'hk5.lunrac.com',
        'port': 443
      }]
    },
    'ie': {
      'timezoneOffset': 60,
      'premium_servers': [{
        'host': 'ie1.lunrac.com',
        'port': 443
      }, {
        'host': 'ie2.lunrac.com',
        'port': 443
      }]
    },
    'in': {
      'timezoneOffset': 330,
      'premium_servers': [{
        'host': 'in1.lunrac.com',
        'port': 443
      }, {
        'host': 'in2.lunrac.com',
        'port': 443
      }]
    },
    'it': {
      'timezoneOffset': 120,
      'premium_servers': [{
        'host': 'it3.lunrac.com',
        'port': 443
      }]
    },
    'jp': {
      'timezoneOffset': 540,
      'premium_servers': [{
        'host': 'jp1.lunrac.com',
        'port': 443
      }, {
        'host': 'jp2.lunrac.com',
        'port': 443
      }, {
        'host': 'jp3.lunrac.com',
        'port': 443
      }, {
        'host': 'jp4.lunrac.com',
        'port': 443
      }, {
        'host': 'jp5.lunrac.com',
        'port': 443
      }, {
        'host': 'jp6.lunrac.com',
        'port': 443
      }, {
        'host': 'jp7.lunrac.com',
        'port': 443
      }, {
        'host': 'jp8.lunrac.com',
        'port': 443
      }]
    },
    'kr': {
      'timezoneOffset': 540,
      'premium_servers': [{
        'host': 'kr1.lunrac.com',
        'port': 443
      }]
    },
    'lt': {
      'timezoneOffset': 180,
      'premium_servers': [{
        'host': 'lt1.lunrac.com',
        'port': 443
      }, {
        'host': 'lt2.lunrac.com',
        'port': 443
      }]
    },
    'lu': {
      'timezoneOffset': 120,
      'premium_servers': [{
        'host': 'lu1.lunrac.com',
        'port': 443
      }]
    },
    'lv': {
      'timezoneOffset': 180,
      'premium_servers': [{
        'host': 'lv1.lunrac.com',
        'port': 443
      }]
    },
    'mx': {
      'timezoneOffset': -300,
      'premium_servers': [{
        'host': 'mx1.lunrac.com',
        'port': 443
      }]
    },
    'nl': {
      'timezoneOffset': 120,
      'servers': [{
        'host': 'nl1.postls.com',
        'port': 443
      }, {
        'host': 'nl2.postls.com',
        'port': 443
      }, {
        'host': 'nl3.postls.com',
        'port': 443
      }, {
        'host': 'nl4.postls.com',
        'port': 443
      }, {
        'host': 'nl5.postls.com',
        'port': 443
      }, {
        'host': 'nl6.postls.com',
        'port': 443
      }, {
        'host': 'nl7.postls.com',
        'port': 443
      }, {
        'host': 'nl8.postls.com',
        'port': 443
      }, {
        'host': 'nl9.postls.com',
        'port': 443
      }, {
        'host': 'nl10.postls.com',
        'port': 443
      }, {
        'host': 'nl11.postls.com',
        'port': 443
      }, {
        'host': 'nl12.postls.com',
        'port': 443
      }, {
        'host': 'nl13.postls.com',
        'port': 443
      }, {
        'host': 'nl14.postls.com',
        'port': 443
      }, {
        'host': 'nl15.postls.com',
        'port': 443
      }, {
        'host': 'nl16.postls.com',
        'port': 443
      }, {
        'host': 'nl17.postls.com',
        'port': 443
      }, {
        'host': 'nl18.postls.com',
        'port': 443
      }, {
        'host': 'nl19.postls.com',
        'port': 443
      }, {
        'host': 'nl20.postls.com',
        'port': 443
      }, {
        'host': 'nl21.postls.com',
        'port': 443
      }, {
        'host': 'nl22.postls.com',
        'port': 443
      }, {
        'host': 'nl23.postls.com',
        'port': 443
      }, {
        'host': 'nl26.postls.com',
        'port': 443
      }, {
        'host': 'nl27.postls.com',
        'port': 443
      }, {
        'host': 'nl28.postls.com',
        'port': 443
      }, {
        'host': 'nl29.postls.com',
        'port': 443
      }, {
        'host': 'nl30.postls.com',
        'port': 443
      }, {
        'host': 'nl31.postls.com',
        'port': 443
      }, {
        'host': 'nl32.postls.com',
        'port': 443
      }, {
        'host': 'nl33.postls.com',
        'port': 443
      }, {
        'host': 'nl34.postls.com',
        'port': 443
      }, {
        'host': 'nl35.postls.com',
        'port': 443
      }, {
        'host': 'nl36.postls.com',
        'port': 443
      }, {
        'host': 'nl37.postls.com',
        'port': 443
      }, {
        'host': 'nl38.postls.com',
        'port': 443
      }, {
        'host': 'nl39.postls.com',
        'port': 443
      }, {
        'host': 'nl40.postls.com',
        'port': 443
      }, {
        'host': 'nl41.postls.com',
        'port': 443
      }, {
        'host': 'nl42.postls.com',
        'port': 443
      }, {
        'host': 'nl43.postls.com',
        'port': 443
      }, {
        'host': 'nl44.postls.com',
        'port': 443
      }, {
        'host': 'nl45.postls.com',
        'port': 443
      }],
      'premium_servers': [{
        'host': 'nl1.lunrac.com',
        'port': 443
      }, {
        'host': 'nl2.lunrac.com',
        'port': 443
      }, {
        'host': 'nl3.lunrac.com',
        'port': 443
      }, {
        'host': 'nl4.lunrac.com',
        'port': 443
      }, {
        'host': 'nl5.lunrac.com',
        'port': 443
      }, {
        'host': 'nl6.lunrac.com',
        'port': 443
      }, {
        'host': 'nl7.lunrac.com',
        'port': 443
      }, {
        'host': 'nl8.lunrac.com',
        'port': 443
      }]
    },
    'no': {
      'timezoneOffset': 120,
      'premium_servers': [{
        'host': 'no1.lunrac.com',
        'port': 443
      }, {
        'host': 'no2.lunrac.com',
        'port': 443
      }]
    },
    'nz': {
      'timezoneOffset': 720,
      'premium_servers': [{
        'host': 'nz1.lunrac.com',
        'port': 443
      }]
    },
    'ro': {
      'timezoneOffset': 180,
      'premium_servers': [{
        'host': 'ro1.lunrac.com',
        'port': 443
      }, {
        'host': 'ro2.lunrac.com',
        'port': 443
      }]
    },
    'ru': {
      'timezoneOffset': 180,
      'premium_servers': [{
        'host': 'ru6.lunrac.com',
        'port': 443
      }, {
        'host': 'ru7.lunrac.com',
        'port': 443
      }, {
        'host': 'ru8.lunrac.com',
        'port': 443
      }, {
        'host': 'ru9.lunrac.com',
        'port': 443
      }, {
        'host': 'ru10.lunrac.com',
        'port': 443
      }, {
        'host': 'ru11.lunrac.com',
        'port': 443
      }, {
        'host': 'ru12.lunrac.com',
        'port': 443
      }, {
        'host': 'ru13.lunrac.com',
        'port': 443
      }, {
        'host': 'ru14.lunrac.com',
        'port': 443
      }]
    },
    'se': {
      'timezoneOffset': 120,
      'premium_servers': [{
        'host': 'se1.lunrac.com',
        'port': 443
      }, {
        'host': 'se2.lunrac.com',
        'port': 443
      }, {
        'host': 'se3.lunrac.com',
        'port': 443
      }, {
        'host': 'se4.lunrac.com',
        'port': 443
      }]
    },
    'sg': {
      'timezoneOffset': 480,
      'servers': [{
        'host': 'sg1.postls.com',
        'port': 443
      }, {
        'host': 'sg2.postls.com',
        'port': 443
      }, {
        'host': 'sg3.postls.com',
        'port': 443
      }, {
        'host': 'sg4.postls.com',
        'port': 443
      }, {
        'host': 'sg5.postls.com',
        'port': 443
      }, {
        'host': 'sg6.postls.com',
        'port': 443
      }, {
        'host': 'sg7.postls.com',
        'port': 443
      }, {
        'host': 'sg8.postls.com',
        'port': 443
      }, {
        'host': 'sg9.postls.com',
        'port': 443
      }, {
        'host': 'sg10.postls.com',
        'port': 443
      }, {
        'host': 'sg11.postls.com',
        'port': 443
      }, {
        'host': 'sg12.postls.com',
        'port': 443
      }, {
        'host': 'sg13.postls.com',
        'port': 443
      }],
      'premium_servers': [{
        'host': 'sg1.lunrac.com',
        'port': 443
      }, {
        'host': 'sg2.lunrac.com',
        'port': 443
      }, {
        'host': 'sg3.lunrac.com',
        'port': 443
      }, {
        'host': 'sg4.lunrac.com',
        'port': 443
      }]
    },
    'tr': {
      'timezoneOffset': 180,
      'premium_servers': [{
        'host': 'tr1.lunrac.com',
        'port': 443
      }, {
        'host': 'tr2.lunrac.com',
        'port': 443
      }, {
        'host': 'tr3.lunrac.com',
        'port': 443
      }, {
        'host': 'tr4.lunrac.com',
        'port': 443
      }, {
        'host': 'tr5.lunrac.com',
        'port': 443
      }, {
        'host': 'tr6.lunrac.com',
        'port': 443
      }]
    },
    'ua': {
      'timezoneOffset': 180,
      'premium_servers': [{
        'host': 'ua1.lunrac.com',
        'port': 443
      }]
    },
    'uk': {
      'timezoneOffset': 60,
      'servers': [{
        'host': 'uk1.postls.com',
        'port': 443
      }, {
        'host': 'uk2.postls.com',
        'port': 443
      }, {
        'host': 'uk4.postls.com',
        'port': 443
      }, {
        'host': 'uk5.postls.com',
        'port': 443
      }, {
        'host': 'uk6.postls.com',
        'port': 443
      }, {
        'host': 'uk7.postls.com',
        'port': 443
      }, {
        'host': 'uk8.postls.com',
        'port': 443
      }, {
        'host': 'uk9.postls.com',
        'port': 443
      }, {
        'host': 'uk10.postls.com',
        'port': 443
      }, {
        'host': 'uk11.postls.com',
        'port': 443
      }, {
        'host': 'uk12.postls.com',
        'port': 443
      }, {
        'host': 'uk13.postls.com',
        'port': 443
      }, {
        'host': 'uk14.postls.com',
        'port': 443
      }, {
        'host': 'uk15.postls.com',
        'port': 443
      }, {
        'host': 'uk16.postls.com',
        'port': 443
      }, {
        'host': 'uk17.postls.com',
        'port': 443
      }, {
        'host': 'uk18.postls.com',
        'port': 443
      }, {
        'host': 'uk19.postls.com',
        'port': 443
      }, {
        'host': 'uk20.postls.com',
        'port': 443
      }, {
        'host': 'uk21.postls.com',
        'port': 443
      }],
      'premium_servers': [{
        'host': 'uk1.lunrac.com',
        'port': 443
      }, {
        'host': 'uk2.lunrac.com',
        'port': 443
      }, {
        'host': 'uk3.lunrac.com',
        'port': 443
      }, {
        'host': 'uk4.lunrac.com',
        'port': 443
      }, {
        'host': 'uk5.lunrac.com',
        'port': 443
      }, {
        'host': 'uk6.lunrac.com',
        'port': 443
      }, {
        'host': 'uk7.lunrac.com',
        'port': 443
      }, {
        'host': 'uk8.lunrac.com',
        'port': 443
      }, {
        'host': 'uk9.lunrac.com',
        'port': 443
      }, {
        'host': 'uk10.lunrac.com',
        'port': 443
      }, {
        'host': 'uk11.lunrac.com',
        'port': 443
      }]
    },
    'us': {
      'timezoneOffset': -240,
      'servers': [{
        'host': 'us1.postls.com',
        'port': 443
      }, {
        'host': 'us2.postls.com',
        'port': 443
      }, {
        'host': 'us3.postls.com',
        'port': 443
      }, {
        'host': 'us4.postls.com',
        'port': 443
      }, {
        'host': 'us5.postls.com',
        'port': 443
      }, {
        'host': 'us6.postls.com',
        'port': 443
      }, {
        'host': 'us7.postls.com',
        'port': 443
      }, {
        'host': 'us8.postls.com',
        'port': 443
      }, {
        'host': 'us9.postls.com',
        'port': 443
      }, {
        'host': 'us10.postls.com',
        'port': 443
      }, {
        'host': 'us11.postls.com',
        'port': 443
      }, {
        'host': 'us13.postls.com',
        'port': 443
      }, {
        'host': 'us14.postls.com',
        'port': 443
      }, {
        'host': 'us15.postls.com',
        'port': 443
      }, {
        'host': 'us16.postls.com',
        'port': 443
      }, {
        'host': 'us17.postls.com',
        'port': 443
      }, {
        'host': 'us18.postls.com',
        'port': 443
      }, {
        'host': 'us19.postls.com',
        'port': 443
      }, {
        'host': 'us20.postls.com',
        'port': 443
      }, {
        'host': 'us21.postls.com',
        'port': 443
      }, {
        'host': 'us22.postls.com',
        'port': 443
      }, {
        'host': 'us23.postls.com',
        'port': 443
      }, {
        'host': 'us27.postls.com',
        'port': 443
      }, {
        'host': 'us31.postls.com',
        'port': 443
      }, {
        'host': 'us32.postls.com',
        'port': 443
      }],
      'premium_servers': [{
        'host': 'us3.lunrac.com',
        'port': 443
      }, {
        'host': 'us4.lunrac.com',
        'port': 443
      }, {
        'host': 'us5.lunrac.com',
        'port': 443
      }, {
        'host': 'us6.lunrac.com',
        'port': 443
      }, {
        'host': 'us8.lunrac.com',
        'port': 443
      }, {
        'host': 'us9.lunrac.com',
        'port': 443
      }]
    },
    'usw': {
      'timezoneOffset': -420,
      'premium_servers': [{
        'host': 'usw10.lunrac.com',
        'port': 443
      }, {
        'host': 'usw11.lunrac.com',
        'port': 443
      }, {
        'host': 'usw12.lunrac.com',
        'port': 443
      }, {
        'host': 'usw13.lunrac.com',
        'port': 443
      }, {
        'host': 'usw14.lunrac.com',
        'port': 443
      }, {
        'host': 'usw15.lunrac.com',
        'port': 443
      }]
    },
    'za': {
      'timezoneOffset': 120,
      'premium_servers': [{
        'host': 'za1.lunrac.com',
        'port': 443
      }]
    }
  }
};
module.exports = proxySettings;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4019);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);


const _browser = typeof browser !== 'undefined' ? browser : chrome;

self.addEventListener('message', event => {
  const sourceDomain = (() => {
    try {
      return new URL(event.origin).origin;
    } catch (e) {}
  })();

  if (!sourceDomain) return;
  const targetDomain = new URL((config__WEBPACK_IMPORTED_MODULE_0___default().baseUrl)).origin;
  if (sourceDomain !== targetDomain) return;

  _browser.runtime.sendMessage(event.data);
});
})();

/******/ })()
;