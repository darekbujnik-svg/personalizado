// Cookie consent banner - minimal LSSI/RGPD compliant
(function() {
    if (localStorage.getItem('cookies_accepted')) return;

    var banner = document.createElement('div');
    banner.id = 'cookies-banner';
    banner.style.cssText = 'position:fixed;left:1rem;top:33vh;background:#1a1a1a;color:#ccc;padding:1.2rem 1.5rem;z-index:99999;border-radius:12px;border:1px solid #333;max-width:320px;font-size:0.85rem;line-height:1.5;box-shadow:0 10px 40px rgba(0,0,0,0.4);';

    banner.innerHTML = '<p style="margin:0 0 0.8rem 0;">Esta web usa cookies técnicas para funcionar. Al navegar, aceptas su uso.</p>' +
        '<div style="display:flex;gap:0.5rem;">' +
        '<button id="cookies-accept-btn" style="background:#c41e3a;color:white;border:none;padding:0.5rem 1.5rem;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;flex:1;">Aceptar</button>' +
        '<a href="aviso-legal.html" style="background:transparent;color:#999;border:1px solid #444;padding:0.5rem 1rem;border-radius:6px;text-decoration:none;font-size:0.85rem;display:inline-flex;align-items:center;">Info</a>' +
        '</div>';

    document.body.appendChild(banner);

    document.getElementById('cookies-accept-btn').onclick = function() {
        localStorage.setItem('cookies_accepted', 'true');
        banner.style.display = 'none';
    };
})();
