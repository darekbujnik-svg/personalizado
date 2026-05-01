// Licznik wizyt widoczny tylko dla określonego IP
document.addEventListener('DOMContentLoaded', function() {
    const adminIP = '84.125.126.153'; // Twój IP
    
    // Funkcja pobierająca IP użytkownika
    async function getVisitorIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            console.error('Błąd pobierania IP:', error);
            return null;
        }
    }
    
    // Licznik w localStorage
    function updateCounter() {
        let count = localStorage.getItem('porron_visitor_count');
        if (!count) {
            count = '0';
        }
        count = parseInt(count) + 1;
        localStorage.setItem('porron_visitor_count', count.toString());
        return count;
    }
    
    // Wyświetl licznik jeśli to admin
    async function initCounter() {
        const visitorIP = await getVisitorIP();
        const count = updateCounter();
        
        if (visitorIP === adminIP) {
            const counterDiv = document.createElement('div');
            counterDiv.className = 'visitor-counter';
            counterDiv.innerHTML = `
                <div style="font-weight: bold; margin-bottom: 5px;">📊 Visitor Counter</div>
                <div>Total: ${count}</div>
                <div style="font-size: 11px; opacity: 0.8; margin-top: 3px;">Your IP: ${visitorIP}</div>
            `;
            
            // Styl
            counterDiv.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: rgba(0,0,0,0.8);
                color: white;
                padding: 10px 15px;
                border-radius: 10px;
                font-family: monospace;
                font-size: 14px;
                z-index: 9999;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            `;
            
            document.body.appendChild(counterDiv);
            
            // Przycisk do ukrycia
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '×';
            closeBtn.style.cssText = `
                position: absolute;
                top: 5px;
                right: 5px;
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 16px;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            closeBtn.onclick = function() {
                counterDiv.style.display = 'none';
            };
            counterDiv.appendChild(closeBtn);
        }
    }
    
    // Inicjalizacja
    initCounter();
});
