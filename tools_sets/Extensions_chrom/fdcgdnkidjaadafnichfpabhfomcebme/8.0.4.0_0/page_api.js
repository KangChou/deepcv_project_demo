var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('script.js');

s.textContent = chrome.runtime.id;

s.onload = function() {
    this.remove();
};

document.addEventListener('updateWithCredentials', e => {
        
    chrome.runtime.sendMessage(s.textContent,{
      subject: 'updateWithCredentials',
      payload: { credentials: e.detail }
    });
  });
(document.head || document.documentElement).appendChild(s);