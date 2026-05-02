// Cookie consent for Fiestas Españolas
(function() {
    if (localStorage.getItem('cookies_accepted')) return;
    var s = document.createElement('style');
    s.textContent = '#cb{position:fixed;left:1rem;top:33vh;background:#1a1a1a;color:#fff;padding:1.2rem;z-index:99999;border:1px solid #333;border-radius:16px;max-width:300px;font-size:0.85rem;line-height:1.5;font-family:Inter,sans-serif;box-shadow:0 10px 40px rgba(0,0,0,0.5);}';
    s.textContent += '#cb button{background:var(--gradient,#ffd700);color:#000;border:none;padding:0.5rem 1.5rem;border-radius:50px;cursor:pointer;font-weight:600;margin-right:0.5rem;}';
    s.textContent += '#cb a{color:#a0a0a0;}';
    document.head.appendChild(s);
    var b = document.createElement('div'); b.id = 'cb';
    b.innerHTML = '<p style="margin:0 0 0.8rem 0;">Usamos cookies técnicas.</p><button id="ca">Aceptar</button><a href="aviso-legal.html">Info</a>';
    document.body.appendChild(b);
    document.getElementById('ca').onclick = function(){ localStorage.setItem('cookies_accepted','true'); b.style.display='none'; };
})();