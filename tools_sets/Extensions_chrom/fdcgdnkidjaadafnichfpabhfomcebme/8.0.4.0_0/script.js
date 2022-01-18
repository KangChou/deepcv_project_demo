(function(root, initPageApi) {
    if (typeof module === 'object' && module.exports) {
      module.exports = initPageApi;
    } else {
      initPageApi();
    }
  })(this, () => {
    function injectFn() {
      window.__zm = {
        updateWithCredentials(creds) {
          document.dispatchEvent(
            new CustomEvent('updateWithCredentials', {
              detail: creds
            })
          );
        },
      };
    }
  
    const inject = `(${injectFn})();`;
  
    const script = document.createElement('script');
    script.innerHTML = inject;
    const parent = document.body || document.head || document.documentElement;
    parent.appendChild(script);
  });
  