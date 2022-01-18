//
// To catch the logs from this file, click the extension
// and open the popup.html, right click anywhere on the page 
// and select "Inspect". The devtools will be opened for the
// extension, where we can catch the console logs.
//
// 09-20-2021, Charles

///
// Country seletion
///

let flagImage = document.getElementById('flagImage');
let modal = document.getElementById("modal");
let close = document.getElementById("close");
let vpnSwitch = document.getElementById('vpnSwitch');


flagImage.addEventListener('click', async () => {
  modal.style.display = "flex";
})

close.addEventListener('click', async () => {
  modal.style.display = "none";
})

function setFlag() {
  chrome.storage.sync.get(['country'], (result) => {
    let country = result['country']
    if (!country) {
      country = 'us';
    }
    flagImage.src = `images/${country}.png`;

    if (vpnSwitch.checked) {
      chrome.runtime.sendMessage({
        "cmd": "connect"
      });
    }
  });
}

// click on a <li>, each <li> has an ID.
function clickCountry(event) {
  var country = event.currentTarget.id;
  console.log(country);

  // Save country in the store
  chrome.storage.sync.set({
    'country': country
  }, function () {
    // Update flag image
    setFlag();
    modal.style.display = "none";
  });
}

///
// VPN switch
///


vpnSwitch.addEventListener('change', async () => {
  console.log('vpn:', vpnSwitch.checked);
  if (vpnSwitch.checked) {
    // Turn on proxy
    chrome.runtime.sendMessage({
      "cmd": "connect"
    });
    return;
  }

  // Turn off proxy
  chrome.runtime.sendMessage({
    "cmd": "disconnect"
  });
  return;
});

///
// rating
///

let rating = document.getElementById('rating');
const ratingURL = "https://bit.ly/39rfYxo";

rating.addEventListener('click', async () => {
  window.open(ratingURL);
})

///
// Get native apps
///

let msstore = document.getElementById('msstore');
const msstoreURL = "https://bit.ly/2XCHO76";
msstore.addEventListener('click', async () => {
  window.open(msstoreURL);
})

let macstore = document.getElementById('macstore');
const macstoreURL = "https://apple.co/3o0SYh8";
macstore.addEventListener('click', async () => {
  window.open(macstoreURL);
})

///
// share
///

const extensionURL = 'https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Ffreevpn-free-vpn-proxy%2Fibmdbhboiekjjoadjahpnmmcgdmabbdf%3Fhl%3Den';


const fbshare = `https://facebook.com/sharer/sharer.php?u=${extensionURL}`;
const btlyfb = 'https://bit.ly/2XEkZjA';
let fb = document.getElementById('fb');
fb.addEventListener('click', async () => {
  window.open(btlyfb);
})

const twText = 'VPN Plus Best VPN for Chrome';
const twTextEncoded = encodeURIComponent(twText);
const twshare = `https://twitter.com/intent/tweet/?text=${twTextEncoded}&url=${extensionURL}&hashtags=vpn`;
const btlytw = 'https://bit.ly/39wVXWi';
let tw = document.getElementById('tw');
tw.addEventListener('click', async () => {
  window.open(btlytw);
})


const tgshare = `https://telegram.me/share/url?text=${twTextEncoded}&url=${extensionURL}`;
const btlytg = 'https://bit.ly/3zBwlSB';
let tg = document.getElementById('tg');
tg.addEventListener('click', async () => {
  window.open(btlytg);
})


const redditshare = `https://reddit.com/submit?url=${extensionURL}&title=${twTextEncoded}`
const btlyreddit = 'https://bit.ly/2XzOyCJ';
let reddit = document.getElementById('reddit');
reddit.addEventListener('click', async () => {
  window.open(btlyreddit);
})


const inshare = `https://www.linkedin.com/shareArticle?mini=true&url=${extensionURL}&title=${twTextEncoded}&summary=${twTextEncoded}&source=${extensionURL}`
const btlyin = 'https://bit.ly/39sxGAn';
let linkedin = document.getElementById('linkedin');
linkedin.addEventListener('click', async () => {
  window.open(btlyin);
})

const whatsappshare = `https://api.whatsapp.com/send?text=${twTextEncoded}%20${extensionURL}`
const btlywhatsapp = 'https://bit.ly/3CFeHiC';
let whatsapp = document.getElementById('whatsapp');
whatsapp.addEventListener('click', async () => {
  window.open(btlywhatsapp);
})

// var _gaq = _gaq || [];
// _gaq.push(['_setAccount', 'UA-87918972-2']);
// _gaq.push(['_trackPageview']);

// (function () {
//   var ga = document.createElement('script');
//   ga.type = 'text/javascript';
//   ga.async = true;
//   ga.src = 'https://ssl.google-analytics.com/ga.js';
//   var s = document.getElementsByTagName('script')[0];
//   s.parentNode.insertBefore(ga, s);
// })();


function listenCountrySelection() {
  var rows = document.getElementById("countryList").getElementsByTagName("li");
  for (var i = 0; i < rows.length; i++) {
    var li = rows.item(i);
    li.addEventListener("click", clickCountry);
  }
}

function setVpnSwitchStateOnStart() {
  chrome.proxy.settings.get({
      'incognito': false
    },
    function (config) {
      console.log(`proxy get: ${JSON.stringify(config)}`)

      // Use devtools to inspect this value.
      // controlled_by_this_extension: proxy is set by this extension
      // controllable_by_this_extension: proxy is not set by this extension

      if (config && config.levelOfControl == 'controlled_by_this_extension') {
        // Proxy is enabled, update the UI accordingly.
        vpnSwitch.checked = true;
      }
    });
}

document.addEventListener('DOMContentLoaded', function () {
  setVpnSwitchStateOnStart();
  listenCountrySelection();
  setFlag();
});