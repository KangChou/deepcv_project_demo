/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/* global NodeListOf */
// Chrome V2 only
const sendMessage = message => {
  if (typeof browser !== 'undefined') {
    return browser.runtime.sendMessage(message);
  }

  return new Promise(resolve => {
    chrome.runtime.sendMessage(message, resolve);
  });
};

const domLoaded = (async () => {
  const state = document.readyState;
  if (state !== 'loading') return;
  await new Promise(resolve => {
    window.addEventListener('DOMContentLoaded', resolve);
  });
})();

const variantPromise = sendMessage({
  'type': 'promo page: get variant'
});

(async () => {
  const [variant] = await Promise.all([variantPromise, domLoaded]);
  const links = document.querySelectorAll('a[href*="/orders/new"]');

  const expvarid = (() => {
    if (!variant) return;
    return variant === '1' ? '284_b' : '284_a';
  })();

  for (const link of links) {
    if (expvarid) {
      const url = link.href;
      const urlObject = new URL(url);
      urlObject.searchParams.set('expvarid', expvarid);
      link.href = urlObject.toString();
    }

    link.addEventListener('click', () => {
      sendMessage({
        'type': 'promo page: click'
      });
    });
  }
})();
/******/ })()
;