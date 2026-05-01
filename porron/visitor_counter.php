<?php
// Licznik wizyt widoczny tylko dla określonego IP
$admin_ip = '84.125.126.153'; // Twój IP
$counter_file = 'visitor_count.txt';

// Pobierz aktualne IP
$visitor_ip = $_SERVER['REMOTE_ADDR'];

// Inicjalizuj licznik jeśli nie istnieje
if (!file_exists($counter_file)) {
    file_put_contents($counter_file, '0');
}

// Zwiększ licznik dla każdej wizyty
$count = (int)file_get_contents($counter_file);
$count++;
file_put_contents($counter_file, (string)$count);

// Pokaż licznik tylko dla admina
if ($visitor_ip === $admin_ip) {
    echo '<div class="visitor-counter" style="
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
    ">
        <div style="font-weight: bold; margin-bottom: 5px;">📊 Visitor Counter</div>
        <div>Total: ' . $count . '</div>
        <div style="font-size: 11px; opacity: 0.8; margin-top: 3px;">Your IP: ' . $visitor_ip . '</div>
    </div>';
}
?>