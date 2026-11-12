/* Ad configuration now lives in data/ad-settings.json and is managed in Studio. */
window.DREAMSCAPE_CONFIG = { ads: {} };
(function styleSmartlink(){return;
  var style=document.createElement('style');
  style.textContent='.download-box .ad-slot{min-height:0;margin:12px auto 0}.smartlink{display:inline-block;color:#557096;font:11px Manrope,Arial,sans-serif;text-decoration:underline;text-underline-offset:3px}.smartlink:hover{color:#1165e8}';
  document.head.appendChild(style);
})();
(function addNativeBanner(){return;
  var heading=document.querySelector('.section-head');
  if(!heading||document.getElementById('container-4f44806910fdeeef64142179c3b2b19b'))return;
  var slot=document.createElement('section');
  slot.className='ad-slot';slot.setAttribute('aria-label','Advertisement');
  slot.innerHTML='<div id="container-4f44806910fdeeef64142179c3b2b19b"></div>';
  heading.insertAdjacentElement('afterend',slot);
  var script=document.createElement('script');
  script.async=true;script.dataset.cfasync='false';script.src='https://bicea.org/21/4f44806910fdeeef64142179c3b2b19b';document.head.appendChild(script);
})();
(function loadGlobalAds(){return;
  if(window.DREAMSCAPE_GLOBAL_ADS_LOADED)return;
  window.DREAMSCAPE_GLOBAL_ADS_LOADED=true;
  ['https://afders.org/1/14265134445173d3bdc0d16a82ba8d59','https://bicea.org/14/47295a48be1c9e4084ff52ae680dac66'].forEach(function(src){
    var script=document.createElement('script');script.dataset.cfasync='false';script.src=src;document.head.appendChild(script);
  });
})();
(function loadManagedAdLayout(){
  var css=document.createElement('link');css.rel='stylesheet';css.href='/assets/ads-layout.css';document.head.appendChild(css);
  var script=document.createElement('script');script.src='/assets/ads-layout-v3.js';script.defer=true;document.head.appendChild(script);
})();
