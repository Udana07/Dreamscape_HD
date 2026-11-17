/* Ad configuration now lives in data/ad-settings.json and is managed in Studio. */
window.DREAMSCAPE_CONFIG = { ads: {} };
(function loadManagedAdLayout(){
  var css=document.createElement('link');css.rel='stylesheet';css.href='/assets/ads-layout.css';document.head.appendChild(css);
  var cardCss=document.createElement('link');cardCss.rel='stylesheet';cardCss.href='/assets/card-download-cta.css';document.head.appendChild(cardCss);
  var script=document.createElement('script');script.src='/assets/ads-layout-v3.js';script.defer=true;document.head.appendChild(script);
})();
