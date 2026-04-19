// Brutalist Fixed Footer v2 - 10% Etsy, 90% WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    // Create fixed footer
    const footer = document.createElement('div');
    footer.id = 'brutal-footer-fixed-v2';
    footer.className = 'brutal-footer-fixed-v2';
    
    // Footer HTML - 10/90 split
    footer.innerHTML = `
        <div class="footer-content-v2">
            <!-- 10% - Etsy Link -->
            <div class="etsy-section">
                <a href="https://www.etsy.com/es/listing/989841459/bota-de-vino-personalizada-con-tu-foto" 
                   class="etsy-link-v2" target="_blank">
                   <span class="link-icon-v2">🛒</span>
                   COMPRA
                </a>
            </div>
            
            <!-- 90% - WhatsApp -->
            <div class="whatsapp-section">
                <div class="whatsapp-container-v2">
                    <textarea 
                        id="whatsapp-message-v2" 
                        class="brutal-input-v2" 
                        placeholder="MENSAJE WHATSAPP..."
                        rows="1"
                    >Hola, me interesa una bota de vino personalizada</textarea>
                    
                    <div class="whatsapp-buttons-v2">
                        <button id="send-whatsapp-v2" class="btn-whatsapp-send-v2">
                            ENVIAR
                        </button>
                        <button id="open-whatsapp-v2" class="btn-whatsapp-open-v2">
                            ABRIR
                        </button>
                    </div>
                    
                    <div class="whatsapp-info-v2">
                        <span class="phone-v2">+34 695 142 539</span>
                    </div>
                </div>
            </div>
            
            <!-- Toggle button - ALWAYS VISIBLE -->
            <div class="toggle-section">
                <button id="toggle-footer-v2" class="btn-toggle-v2">▲</button>
            </div>
        </div>
        
        <!-- Minimized state - button to show -->
        <div class="footer-minimized-v2" id="footer-minimized-v2">
            <button id="show-footer-v2" class="btn-show-v2">
                <span>CONTACTO</span> ▼
            </button>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(footer);
    
    // WhatsApp number
    const whatsappNumber = '34695142539';
    
    // Send message function
    document.getElementById('send-whatsapp-v2').addEventListener('click', function() {
        const message = document.getElementById('whatsapp-message-v2').value.trim();
        if (message) {
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        } else {
            alert('ESCRIBE UN MENSAJE');
        }
    });
    
    // Open WhatsApp function
    document.getElementById('open-whatsapp-v2').addEventListener('click', function() {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    });
    
    // Toggle footer (minimize/maximize)
    let isMinimized = false;
    
    document.getElementById('toggle-footer-v2').addEventListener('click', function() {
        if (!isMinimized) {
            // Hide footer content, show minimized button
            document.querySelector('.footer-content-v2').style.display = 'none';
            document.getElementById('footer-minimized-v2').style.display = 'flex';
            this.textContent = '▼';
            isMinimized = true;
        }
    });
    
    document.getElementById('show-footer-v2').addEventListener('click', function() {
        // Show footer content, hide minimized button
        document.querySelector('.footer-content-v2').style.display = 'flex';
        document.getElementById('footer-minimized-v2').style.display = 'none';
        document.getElementById('toggle-footer-v2').textContent = '▲';
        isMinimized = false;
    });
    
    // Auto-adjust textarea height
    const textarea = document.getElementById('whatsapp-message-v2');
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});

// Add styles
const style = document.createElement('style');
style.textContent = `
/* Brutalist Fixed Footer v2 - 10/90 split */
#brutal-footer-fixed-v2 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    color: #ffffff;
    border-top: 4px solid #8b4513;
    font-family: 'IBM Plex Mono', monospace;
    z-index: 10000;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
}

.footer-content-v2 {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    min-height: 60px;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    transition: background 0.3s;
}

.footer-content-v2:hover {
    background: rgba(0, 0, 0, 0.7);
}

/* 10% - Etsy Section */
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
    color: #8b4513;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.5rem 0.75rem;
    border: 2px solid #8b4513;
    background: rgba(0, 0, 0, 0.7);
    transition: all 0.2s;
    width: 100%;
    text-align: center;
}

.etsy-link-v2:hover {
    background: #8b4513;
    color: #000000;
}

.link-icon-v2 {
    margin-right: 0.25rem;
    font-size: 0.9rem;
}

/* 90% - WhatsApp Section */
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
    background: #000000;
    color: #ffffff;
    border: 2px solid #25D366;
    padding: 0.5rem 0.75rem;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.875rem;
    resize: none;
    overflow-y: hidden;
    min-height: 40px;
    max-height: 80px;
    width: 100%;
}

.brutal-input-v2:focus {
    outline: none;
    border-color: #ffffff;
}

.whatsapp-buttons-v2 {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
}

.btn-whatsapp-send-v2, .btn-whatsapp-open-v2 {
    padding: 0.5rem 1rem;
    border: 2px solid #000000;
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
    color: #000000;
}

.btn-whatsapp-send-v2:hover {
    background: #000000;
    color: #25D366;
    border-color: #25D366;
}

.btn-whatsapp-open-v2 {
    background: #000000;
    color: #25D366;
    border: 2px solid #25D366;
}

.btn-whatsapp-open-v2:hover {
    background: #25D366;
    color: #000000;
}

.whatsapp-info-v2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
}

.phone-v2 {
    font-size: 0.875rem;
    color: #25D366;
    font-weight: 700;
    white-space: nowrap;
}

/* Toggle Section - ALWAYS VISIBLE */
.toggle-section {
    padding: 0 0.5rem;
    flex-shrink: 0;
}

.btn-toggle-v2 {
    background: #8b4513;
    color: #000000;
    border: 2px solid #000000;
    width: 30px;
    height: 30px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
}

.btn-toggle-v2:hover {
    background: #000000;
    color: #8b4513;
    border-color: #8b4513;
}

/* Minimized state */
.footer-minimized-v2 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(139, 69, 19, 0.7);
    padding: 0.5rem;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    min-height: 60px;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
    transition: background 0.3s;
}

.footer-minimized-v2:hover {
    background: #8b4513;
}

.btn-show-v2 {
    background: #000000;
    color: #ffffff;
    border: 2px solid #000000;
    padding: 0.3rem 0.9rem;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 1px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-left: 10px;
    transform: scale(0.6);
}

.btn-show-v2:hover {
    background: #ffffff;
    color: #000000;
}

/* Mobile responsive */
@media (max-width: 1024px) {
    .footer-content-v2 {
        flex-wrap: wrap;
        padding: 0.75rem;
    }
    
    .etsy-section {
        width: 15%;
        min-width: 70px;
        order: 1;
    }
    
    .whatsapp-section {
        width: 70%;
        order: 2;
        padding-top: 0.5rem;
    }
    
    .toggle-section {
        width: 15%;
        order: 3;
        display: flex;
        justify-content: center;
    }
    
    .whatsapp-container-v2 {
        flex-wrap: wrap;
    }
    
    .brutal-input-v2 {
        min-width: 100%;
        order: 1;
    }
    
    .whatsapp-buttons-v2 {
        order: 2;
        flex: 1;
        justify-content: center;
    }
    
    .whatsapp-info-v2 {
        order: 3;
        justify-content: center;
        width: 100%;
        margin-top: 0.5rem;
    }
}

@media (max-width: 768px) {
    .etsy-section {
        width: 20%;
    }
    
    .whatsapp-section {
        width: 60%;
    }
    
    .toggle-section {
        width: 20%;
    }
    
    .btn-whatsapp-send-v2, .btn-whatsapp-open-v2 {
        padding: 0.4rem 0.75rem;
        font-size: 0.7rem;
    }
    
    .phone-v2 {
        font-size: 0.75rem;
    }
}

@media (max-width: 480px) {
    .etsy-link-v2 {
        font-size: 0.75rem;
        padding: 0.4rem;
    }
    
    .link-icon-v2 {
        margin-right: 0.1rem;
    }
    
    .whatsapp-section {
        width: 100%;
        order: 1;
    }
    
    .etsy-section {
        width: 50%;
        order: 2;
        padding-top: 0.5rem;
    }
    
    .toggle-section {
        width: 50%;
        order: 3;
        padding-top: 0.5rem;
    }
}
`;

document.head.appendChild(style);