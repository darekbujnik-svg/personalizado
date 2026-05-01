// Rozwijane okno kontaktowe
document.addEventListener('DOMContentLoaded', function() {
    // Tworzenie okna
    const modalHTML = `
        <div id="contactModal" class="contact-modal">
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <h3>¿Cómo quieres continuar?</h3>
                
                <div class="contact-options">
                    <a href="https://www.etsy.com/your-shop" class="option-btn etsy-btn">
                        <span class="option-icon">🛒</span>
                        <span class="option-text">
                            <strong>Comprar en Etsy</strong>
                            <small>Compra segura con envío internacional</small>
                        </span>
                    </a>
                    
                    <a href="https://wa.me/34695142539" class="option-btn whatsapp-btn">
                        <span class="option-icon">💬</span>
                        <span class="option-text">
                            <strong>Hablar con el vendedor</strong>
                            <small>WhatsApp: +34 695 142 539</small>
                        </span>
                    </a>
                </div>
                
                <div class="whatsapp-chat">
                    <div class="chat-header">
                        <div class="chat-avatar">
                            <div class="avatar-icon">💬</div>
                        </div>
                        <div class="chat-info">
                            <div class="chat-name">Soporte Porrón</div>
                            <div class="chat-status">En línea • responde en minutos</div>
                        </div>
                        <div class="chat-actions">
                            <button class="action-btn">⋮</button>
                        </div>
                    </div>
                    
                    <div class="chat-messages">
                        <div class="message received">
                            <div class="message-content">
                                ¡Hola! 👋 ¿Tienes preguntas sobre el porrón personalizado?
                            </div>
                            <div class="message-time">Ahora</div>
                        </div>
                        
                        <div class="message sent">
                            <div class="message-content">
                                Hola, me interesa el porrón personalizado
                            </div>
                            <div class="message-time">Ahora</div>
                        </div>
                    </div>
                    
                    <div class="chat-input">
                        <div class="input-container">
                            <button class="input-action">😊</button>
                            <input type="text" 
                                   class="message-input" 
                                   placeholder="Escribe un mensaje..."
                                   value="Hola, me interesa el porrón personalizado">
                            <button class="input-action">📎</button>
                            <button class="send-btn">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="input-hint">Presiona Enter para enviar o haz clic en el botón</div>
                    </div>
                    
                    <a href="https://wa.me/34695142539?text=Hola,%20me%20interesa%20el%20porrón%20personalizado" 
                       class="whatsapp-link" target="_blank">
                        <div class="whatsapp-badge">
                            <div class="whatsapp-icon">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.892 0-3.18-1.24-6.162-3.495-8.411"></path>
                                </svg>
                            </div>
                            <span>Abrir en WhatsApp</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Dodanie do body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Stylizacja
    const style = document.createElement('style');
    style.textContent = `
        .contact-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }
        
        .modal-content {
            background: white;
            border-radius: 16px;
            padding: 2rem;
            width: 90%;
            max-width: 500px;
            position: relative;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        .close-modal {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
        }
        
        .contact-options {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin: 2rem 0;
        }
        
        .option-btn {
            display: flex;
            align-items: center;
            padding: 1.5rem;
            border-radius: 12px;
            text-decoration: none;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .option-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .etsy-btn {
            background: #f16521;
            color: white;
        }
        
        .whatsapp-btn {
            background: #25D366;
            color: white;
        }
        
        .option-icon {
            font-size: 2rem;
            margin-right: 1rem;
        }
        
        .option-text {
            display: flex;
            flex-direction: column;
        }
        
        .option-text small {
            opacity: 0.9;
            font-size: 0.9rem;
            margin-top: 0.25rem;
        }
        
        .whatsapp-chat {
            background: #f0f0f0;
            border-radius: 16px;
            overflow: hidden;
            margin-top: 2rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .chat-header {
            display: flex;
            align-items: center;
            padding: 1rem;
            background: #075E54;
            color: white;
        }
        
        .chat-avatar {
            width: 40px;
            height: 40px;
            background: #25D366;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
        }
        
        .avatar-icon {
            font-size: 1.5rem;
        }
        
        .chat-info {
            flex: 1;
        }
        
        .chat-name {
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .chat-status {
            font-size: 0.8rem;
            opacity: 0.9;
        }
        
        .chat-actions {
            margin-left: auto;
        }
        
        .action-btn {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .chat-messages {
            padding: 1rem;
            background: #ECE5DD;
            min-height: 200px;
            max-height: 300px;
            overflow-y: auto;
        }
        
        .message {
            margin-bottom: 1rem;
            max-width: 80%;
        }
        
        .message.received {
            margin-right: auto;
        }
        
        .message.sent {
            margin-left: auto;
        }
        
        .message-content {
            padding: 0.75rem 1rem;
            border-radius: 18px;
            position: relative;
            word-wrap: break-word;
        }
        
        .message.received .message-content {
            background: white;
            border-top-left-radius: 4px;
        }
        
        .message.sent .message-content {
            background: #DCF8C6;
            border-top-right-radius: 4px;
        }
        
        .message-time {
            font-size: 0.7rem;
            color: #666;
            margin-top: 0.25rem;
            text-align: right;
            padding: 0 0.5rem;
        }
        
        .chat-input {
            padding: 1rem;
            background: white;
            border-top: 1px solid #ddd;
        }
        
        .input-container {
            display: flex;
            align-items: center;
            background: #f0f0f0;
            border-radius: 24px;
            padding: 0.5rem 1rem;
        }
        
        .message-input {
            flex: 1;
            border: none;
            background: none;
            padding: 0.5rem;
            font-size: 1rem;
            outline: none;
        }
        
        .input-action {
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0.5rem;
            color: #666;
        }
        
        .send-btn {
            background: #25D366;
            border: none;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: white;
            margin-left: 0.5rem;
        }
        
        .input-hint {
            font-size: 0.8rem;
            color: #666;
            text-align: center;
            margin-top: 0.5rem;
        }
        
        .whatsapp-link {
            display: block;
            text-decoration: none;
            padding: 1rem;
            background: #25D366;
            color: white;
            text-align: center;
            font-weight: 600;
            transition: background 0.2s;
        }
        
        .whatsapp-link:hover {
            background: #1da851;
        }
        
        .whatsapp-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
        
        .whatsapp-icon {
            display: flex;
            align-items: center;
        }
        
        @media (max-width: 768px) {
            .modal-content {
                padding: 1.5rem;
            }
            
            .option-btn {
                padding: 1rem;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Funkcje
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Otwieranie modala
    window.openContactModal = function() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };
    
    // Zamykanie
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Dodanie przycisku do istniejących CTA
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openContactModal();
        });
    });
    
    // Interaktywność chat WhatsApp
    const messageInput = document.querySelector('.message-input');
    const sendBtn = document.querySelector('.send-btn');
    const messagesContainer = document.querySelector('.chat-messages');
    
    if (messageInput && sendBtn) {
        // Wysłanie wiadomości - otwiera WhatsApp
        function sendMessage() {
            const text = messageInput.value.trim();
            if (text) {
                // Dodanie wiadomości do chatu (tylko wizualnie)
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message sent';
                messageDiv.innerHTML = `
                    <div class="message-content">
                        ${text}
                    </div>
                    <div class="message-time">Ahora</div>
                `;
                messagesContainer.appendChild(messageDiv);
                
                // Przewinięcie do dołu
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
                
                // Otwarcie WhatsApp
                const encodedText = encodeURIComponent(text);
                const whatsappUrl = `https://wa.me/34695142539?text=${encodedText}`;
                
                // Otwórz w nowej karcie
                window.open(whatsappUrl, '_blank');
                
                // Zamknij modal po 0.5s
                setTimeout(() => {
                    closeModal();
                }, 500);
            }
        }
        
        // Enter do wysłania
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Kliknięcie przycisku wysyłania
        sendBtn.addEventListener('click', sendMessage);
        
        // Przycisk na dole też otwiera WhatsApp
        const whatsappLink = document.querySelector('.whatsapp-link');
        if (whatsappLink) {
            whatsappLink.addEventListener('click', function(e) {
                e.preventDefault();
                const text = messageInput.value.trim() || 'Hola, me interesa el porrón personalizado';
                const encodedText = encodeURIComponent(text);
                const whatsappUrl = `https://wa.me/34695142539?text=${encodedText}`;
                window.open(whatsappUrl, '_blank');
                closeModal();
            });
        }
        
        // Focus na input przy otwarciu modala
        window.openContactModal = function() {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                messageInput.focus();
                messageInput.select();
            }, 300);
        };
    }
});
