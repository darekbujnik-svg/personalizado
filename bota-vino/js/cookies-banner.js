// Cookie consent for Bota de Vino
(function() {
    if (localStorage.getItem('cookies_accepted')) return;
    var style = document.createElement('style');
    style.textContent = '#cb{position:fixed;left:1rem;top:33vh;background:#fff;color:#000;padding:1.2rem;z-index:99999;border:2px solid #000;max-width:300px;font-size:0.8rem;line-height:1.5;font-family:IBM Plex Mono,monospace;}';
    style.textContent += '#cb button{background:#000;color:#fff;border:none;padding:0.5rem 1.5rem;cursor:pointer;font-family:inherit;font-size:0.8rem;margin-right:0.5rem;}';
    style.textContent += '#cb a{color:#8b4513;}';
    document.head.appendChild(style);
    var b = document.createElement('div'); b.id = 'cb';
    b.innerHTML = '<p style="margin:0 0 0.8rem 0;">Usamos cookies técnicas.</p><button id="ca">ACEPTAR</button><a href="aviso-legal.html">INFO</a>';
    document.body.appendChild(b);
    document.getElementById('ca').onclick = function(){ localStorage.setItem('cookies_accepted','true'); b.style.display='none'; };
})();