// Cookie consent for Vino Español
(function() {
    if (localStorage.getItem('cookies_accepted')) return;
    var s = document.createElement('style');
    s.textContent = '#cb{position:fixed;left:1rem;top:33vh;background:#fff;color:#333;padding:1.2rem;z-index:99999;border:1px solid #e0d6c9;border-radius:8px;max-width:300px;font-size:0.85rem;line-height:1.5;box-shadow:0 10px 30px rgba(0,0,0,0.1);}';
    s.textContent += '#cb button{background:#7b1c1c;color:#fff;border:none;padding:0.5rem 1.5rem;border-radius:4px;cursor:pointer;margin-right:0.5rem;}';
    s.textContent += '#cb a{color:#7b1c1c;}';
    document.head.appendChild(s);
    var b = document.createElement('div'); b.id = 'cb';
    b.innerHTML = '<p style="margin:0 0 0.8rem 0;">Usamos cookies técnicas.</p><button id="ca">Aceptar</button><a href="aviso-legal.html">Info</a>';
    document.body.appendChild(b);
    document.getElementById('ca').onclick = function(){ localStorage.setItem('cookies_accepted','true'); b.style.display='none'; };
})();