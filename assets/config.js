/* Ad configuration now lives in data/ad-settings.json and is managed in Studio. */
window.DREAMSCAPE_CONFIG = { ads: {} };
(function loadManagedAdLayout(){
  [['icon','/favicon-32x32.png','32x32'],['icon','/favicon-16x16.png','16x16'],['apple-touch-icon','/apple-touch-icon.png','180x180'],['manifest','/site.webmanifest','']].forEach(function(item){var link=document.createElement('link');link.rel=item[0];link.href=item[1];if(item[2])link.sizes=item[2];document.head.appendChild(link)});
  var css=document.createElement('link');css.rel='stylesheet';css.href='/assets/ads-layout.css';document.head.appendChild(css);
  var cardCss=document.createElement('link');cardCss.rel='stylesheet';cardCss.href='/assets/card-download-cta.css';document.head.appendChild(cardCss);
  var script=document.createElement('script');script.src='/assets/ads-layout-v3.js';script.defer=true;document.head.appendChild(script);
})();
