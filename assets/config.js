/* Adsterra integration. Global scripts are loaded only once per page. */
window.DREAMSCAPE_CONFIG = { ads: {
  home: '',
  article: '<script>var atOptions={key:"acb3d68d200632a1b00bae26ada37a24",format:"iframe",height:90,width:728,params:{}};<\/script><script src="https://bicea.org/22/acb3d68d200632a1b00bae26ada37a24"><\/script>',
  download: '<a class="smartlink" href="https://arwf.org/4/6559bba3fa4123775ae92516409b65a8" target="_blank" rel="sponsored noopener noreferrer">Sponsored offer ↗</a>', footer: ''
} };
(function styleSmartlink(){
  var style=document.createElement('style');
  style.textContent='.download-box .ad-slot{min-height:0;margin:12px auto 0}.smartlink{display:inline-block;color:#557096;font:11px Manrope,Arial,sans-serif;text-decoration:underline;text-underline-offset:3px}.smartlink:hover{color:#1165e8}';
  document.head.appendChild(style);
})();
(function addNativeBanner(){
  var heading=document.querySelector('.section-head');
  if(!heading||document.getElementById('container-4f44806910fdeeef64142179c3b2b19b'))return;
  var slot=document.createElement('section');
  slot.className='ad-slot';slot.setAttribute('aria-label','Advertisement');
  slot.innerHTML='<div id="container-4f44806910fdeeef64142179c3b2b19b"></div>';
  heading.insertAdjacentElement('afterend',slot);
  var script=document.createElement('script');
  script.async=true;script.dataset.cfasync='false';script.src='https://bicea.org/21/4f44806910fdeeef64142179c3b2b19b';document.head.appendChild(script);
})();
(function loadGlobalAds(){
  if(window.DREAMSCAPE_GLOBAL_ADS_LOADED)return;
  window.DREAMSCAPE_GLOBAL_ADS_LOADED=true;
  ['https://afders.org/1/14265134445173d3bdc0d16a82ba8d59','https://bicea.org/14/47295a48be1c9e4084ff52ae680dac66'].forEach(function(src){
    var script=document.createElement('script');script.dataset.cfasync='false';script.src=src;document.head.appendChild(script);
  });
})();
