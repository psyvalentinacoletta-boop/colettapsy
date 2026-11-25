/* Google Tag Manager (GTM-NCBD5SLJ): caricato SOLO dopo il consenso ai cookie di terze parti. */
(function () {
  var KEY = 'cookie_consent_v2', SIX_MONTHS = 182 * 24 * 60 * 60 * 1000, GTM_ID = 'GTM-NCBD5SLJ';
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  // Consent Mode: tutto negato finché l'utente non accetta
  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied'
  });
  var loaded = false;
  function clearGoogleCookies() {
    var host = location.hostname, parts = host.split('.'), root = parts.slice(-2).join('.');
    document.cookie.split(';').forEach(function (c) {
      var n = c.split('=')[0].trim();
      if (/^(_ga|_gid|_gat|_gcl|_gac|_dc_gtm|IDE|test_cookie)/.test(n)) {
        [host, '.' + host, root, '.' + root].forEach(function (d) {
          document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + d;
        });
        document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      }
    });
  }
  window.cookieTracking = {
    grant: function () {
      gtag('consent', 'update', {
        ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted'
      });
      if (loaded) return;
      loaded = true;
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
      document.head.appendChild(s);
    },
    revoke: function () {
      clearGoogleCookies();
      if (loaded) location.reload(); // scarica gli script già caricati
    }
  };
  try {
    var v = JSON.parse(localStorage.getItem(KEY));
    if (v && v.maps && Date.now() - v.t < SIX_MONTHS) window.cookieTracking.grant();
  } catch (e) {}
})();
