// Fixed Footer v3 - mobile friendly
document.addEventListener('DOMContentLoaded', function() {
    const whatsappNumber = '34695142539';
    
    const footer = document.createElement('div');
    footer.id = 'brutal-footer-fixed-v2';
    
    footer.innerHTML = `
        <!-- Expanded view (desktop + tablet) -->
        <div class="footer-content-v2">
            <div class="etsy-section">
                <a href="https://www.etsy.com/es/listing/597121131/porron-de-vino-personalizado-grabado-con-foto" 
                   class="etsy-link-v2" target="_blank">
                   <span class="link-icon-v2">🛒</span>
                   COMPRA
                </a>
            </div>
            
            <div class="whatsapp-section">
                <div class="whatsapp-container-v2">
                    <textarea id="whatsapp-message-v2" class="brutal-input-v2" 
                        placeholder="MENSAJE WHATSAPP..." rows="1"
                    >Hola, me interesa porrón de vino personalizado. ¿Puedo ver boceto antes de realizar pedido?</textarea>
                    
                    <div class="whatsapp-buttons-v2">
                        <button id="send-whatsapp-v2" class="btn-whatsapp-send-v2">ENVIAR</button>
                        <button id="open-whatsapp-v2" class="btn-whatsapp-open-v2">ABRIR</button>
                    </div>
                    
                    <div class="whatsapp-info-v2">
                        <span class="phone-v2">+34 695 142 539</span>
                    </div>
                </div>
            </div>
            
            <div class="toggle-section">
                <button id="toggle-footer-v2" class="btn-toggle-v2">▲</button>
            </div>
        </div>
        
        <!-- Minimized state -->
        <div class="footer-minimized-v2" id="footer-minimized-v2">
            <button id="show-footer-v2" class="btn-show-v2">
                <span>CONTACTO</span> ▼
            </button>
        </div>
        
        <!-- Mobile only: floating WhatsApp icon -->
        <a href="https://wa.me/${whatsappNumber}" target="_blank" id="whatsapp-float-mobile" class="whatsapp-float-mobile">
            <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.88.509 3.643 1.395 5.162L2.1 21.9l4.738-1.294C8.362 21.475 10.093 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.68 0-3.237-.54-4.5-1.448l-.322-.213-2.813.768.77-2.741-.21-.33C4.06 15.16 3.5 13.61 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"/>
            </svg>
        </a>
    `;
    
    document.body.appendChild(footer);
    
    // Send message
    document.getElementById('send-whatsapp-v2').addEventListener('click', function() {
        const message = document.getElementById('whatsapp-message-v2').value.trim();
        const url = message 
            ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
            : `https://wa.me/${whatsappNumber}`;
        window.open(url, '_blank');
    });
    
    // Open WhatsApp
    document.getElementById('open-whatsapp-v2').addEventListener('click', function() {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    });
    
    // Toggle expand/minimize
    let isMinimized = false;
    
    document.getElementById('toggle-footer-v2').addEventListener('click', function() {
        isMinimized = true;
        document.querySelector('.footer-content-v2').style.display = 'none';
        document.getElementById('footer-minimized-v2').style.display = 'flex';
        this.textContent = '▼';
    });
    
    document.getElementById('show-footer-v2').addEventListener('click', function() {
        isMinimized = false;
        document.querySelector('.footer-content-v2').style.display = 'flex';
        document.getElementById('footer-minimized-v2').style.display = 'none';
        document.getElementById('toggle-footer-v2').textContent = '▲';
    });
    
    // Auto-resize textarea
    const textarea = document.getElementById('whatsapp-message-v2');
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});

const style = document.createElement('style');
style.textContent = `
#brutal-footer-fixed-v2 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10000;
}

.footer-content-v2 {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    min-height: 60px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255,255,255,0.2);
}

.footer-content-v2:hover {
    background: rgba(0, 0, 0, 0.7);
}

/* Etsy - 10% */
.etsy-section {
    width: 10%;
    min-width: 80px;
    padding: 0 0.5rem;
    display: flex;
    justify-content: center;
}

.etsy-link-v2 {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #c41e3a;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.5rem 0.75rem;
    border: 2px solid #c41e3a;
    background: rgba(0, 0, 0, 0.7);
    transition: all 0.2s;
    width: 100%;
    text-align: center;
}

.etsy-link-v2:hover {
    background: #c41e3a;
    color: #000;
}

/* WhatsApp - 90% */
.whatsapp-section {
    width: 90%;
    padding: 0 0.5rem;
}

.whatsapp-container-v2 {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
}

.brutal-input-v2 {
    flex: 1;
    background: #000;
    color: #fff;
    border: 2px solid #25D366;
    padding: 0.5rem 0.75rem;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.875rem;
    resize: none;
    overflow-y: hidden;
    min-height: 40px;
    max-height: 80px;
}

.brutal-input-v2:focus {
    outline: none;
    border-color: #fff;
}

.whatsapp-buttons-v2 {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
}

.btn-whatsapp-send-v2, .btn-whatsapp-open-v2 {
    padding: 0.5rem 1rem;
    border: 1px solid #000;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 1px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;
}

.btn-whatsapp-send-v2 {
    background: #25D366;
    color: #000;
}

.btn-whatsapp-send-v2:hover {
    background: #000;
    color: #25D366;
    border-color: #25D366;
}

.btn-whatsapp-open-v2 {
    background: #000;
    color: #25D366;
}

.btn-whatsapp-open-v2:hover {
    background: #25D366;
    color: #000;
}

.whatsapp-info-v2 {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.phone-v2 {
    font-size: 0.875rem;
    color: #25D366;
    font-weight: 700;
    white-space: nowrap;
}

/* Toggle */
.toggle-section {
    padding: 0 0.5rem;
    flex-shrink: 0;
}

.btn-toggle-v2 {
    background: transparent;
    color: #fff;
    border: 1px solid rgba(255,255,255,0.5);
    width: 30px;
    height: 30px;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-toggle-v2:hover {
    background: rgba(255,255,255,0.2);
}

/* Minimized */
.footer-minimized-v2 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    min-height: 60px;
    background: rgba(0,0,0,0.5);
}

.btn-show-v2 {
    background: #000;
    color: #fff;
    border: 1px solid rgba(255,255,255,0.5);
    padding: 0.5rem 1rem;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 700;
    font-size: 0.8rem;
    cursor: pointer;
}

.btn-show-v2:hover {
    background: #fff;
    color: #000;
}

/* ============ MOBILE: Floating WhatsApp icon ============ */
.whatsapp-float-mobile {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    z-index: 10001;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
    animation: whatsapp-pulse 2s infinite;
    transition: transform 0.3s, box-shadow 0.3s;
}

.whatsapp-float-mobile:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
}

@keyframes whatsapp-pulse {
    0% { box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4); }
    50% { box-shadow: 0 4px 25px rgba(37, 211, 102, 0.7); }
    100% { box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4); }
}

/* Mobile: <= 480px - hide footer bar, show floating icon */
@media (max-width: 480px) {
    .footer-content-v2, .footer-minimized-v2 {
        display: none !important;
    }
    
    .whatsapp-float-mobile {
        display: flex;
    }
}

/* Tablet: 481px - 768px */
@media (max-width: 768px) and (min-width: 481px) {
    .etsy-section { width: 15%; min-width: auto; }
    .whatsapp-section { width: 70%; }
    .toggle-section { width: 15%; }
    .whatsapp-container-v2 { flex-wrap: wrap; gap: 0.5rem; }
    .brutal-input-v2 { min-width: 100%; }
    .whatsapp-buttons-v2 { order: 2; flex: 1; justify-content: center; }
    .whatsapp-info-v2 { order: 3; width: 100%; justify-content: center; margin-top: 0.25rem; }
}
`;

document.head.appendChild(style);
