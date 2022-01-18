chrome.runtime.onInstalled.addListener(() => {
  console.log('chrome.runtime.onInstalled');
});

chrome.runtime.onStartup.addListener(() => {
  console.log('chrome.runtime.onStartup');
  checkProxyStatusAndSetIcon();
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.cmd == "connect") {
      setProxy();
    } else if (request.cmd == "disconnect") {
      resetProxy();
    }
  }
);

///
// Check proxy status and set icons, called by runtime.onStartup
///
function checkProxyStatusAndSetIcon() {
  chrome.proxy.settings.get({
      'incognito': false
    },
    function (config) {
      // console.log(`proxy get: ${JSON.stringify(config)}`)

      // Use devtools to inspect this value.
      // controlled_by_this_extension: proxy is set by this extension
      // controllable_by_this_extension: proxy is not set by this extension

      if (config && config.levelOfControl == 'controlled_by_this_extension') {
        chrome.storage.sync.get(['country'], (result) => {
          let country = result['country']
          if (!country) {
            country = 'us';
          }
          iconData = {
            path: {
              '16': `images/${country}x32.png`,
              '24': `images/${country}x32.png`,
              '32': `images/${country}x32.png`
            }
          }
          chrome.action.setIcon(iconData);
        });
      } else {
        // Set the extension logo 
        iconData = {
          path: {
            "16": "images/shieldx32.png",
            "24": "images/shieldx32.png",
            "32": "images/shieldx32.png"
          }
        }
        chrome.action.setIcon(iconData);
      }
    });
}


/// Set and reset proxy
/// https://developer.chrome.com/docs/extensions/reference/proxy/

var config = {
  mode: "pac_script",
  pacScript: {
    data: ""
  }
};


function setProxy() {
  console.log('setProxy');
  chrome.storage.sync.get(['country'], function (result) {
    console.log(`get kCountry: ${result['country']}`);
    let country = result['country'];
    if (!country) {
      country = "us";
    }

    config.pacScript.data = `function FindProxyForURL(url, host) { return \"HTTPS ${country}.cppcoding.site:443\"; }`
    // console.log(JSON.stringify(config));

    chrome.proxy.settings.set({
        value: config,
        scope: 'regular'
      },
      function () {
        console.log('set proxy');
        checkProxyStatusAndSetIcon();
      });
  });
}

function resetProxy() {
  chrome.proxy.settings.clear({
      scope: "regular"
    },
    function () {
      checkProxyStatusAndSetIcon();
    });
}