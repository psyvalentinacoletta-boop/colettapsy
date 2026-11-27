/* Google Tag Manager (GTM-NCBD5SLJ) con Consent Mode v2 "avanzata".
   GTM viene caricato sempre, ma tutti i consensi partono come "negati":
   finché l'utente non accetta, Google non installa né legge cookie e riceve
   solo segnali anonimi senza cookie (pagina, ora, tipo di browser).
   Con "Accetta" i consensi passano a "concessi". */
(function () {
  var KEY = 'cookie_consent_v2', SIX_MONTHS = 182 * 24 * 60 * 60 * 1000, GTM_ID = 'GTM-NCBD5SLJ';
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  function hasConsent() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY));
      return !!(v && v.maps && Date.now() - v.t < SIX_MONTHS);
    } catch (e) { return false; }
  }

  // Consent Mode: tutto negato di default
  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied'
  });
  // Senza consenso, rimuove gli identificativi dei clic sugli annunci dai segnali inviati
  gtag('set', 'ads_data_redaction', true);

  function grantedUpdate() {
    gtag('consent', 'update', {
      ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted'
    });
  }
  // Se il consenso era già stato dato in una visita precedente, lo applica prima che GTM parta
  if (hasConsent()) grantedUpdate();

  // Caricamento di Google Tag Manager (sempre)
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
  (document.head || document.documentElement).appendChild(s);

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
    grant: function () { grantedUpdate(); },
    hasConsent: hasConsent,
    revoke: function () {
      gtag('consent', 'update', {
        ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied'
      });
      clearGoogleCookies();
      location.reload(); // riparte con i consensi negati
    }
  };
})();
