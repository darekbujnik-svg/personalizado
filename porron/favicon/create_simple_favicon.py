#!/usr/bin/env python3
from PIL import Image, ImageDraw
import os

# Kolory Hiszpanii
RED = (198, 11, 30)    # #C60B1E
YELLOW = (255, 196, 0) # #FFC400
BLACK = (0, 0, 0)

def create_favicon(size, filename):
    img = Image.new('RGB', (size, size), RED)
    draw = ImageDraw.Draw(img)
    
    # Żółty pasek (jak flaga Hiszpanii)
    yellow_height = size // 2
    yellow_y = (size - yellow_height) // 2
    draw.rectangle([0, yellow_y, size, yellow_y + yellow_height], fill=YELLOW)
    
    # Prostokąt porróna
    porron_width = size * 0.6
    porron_height = size * 0.7
    porron_x = (size - porron_width) // 2
    porron_y = (size - porron_height) // 3
    
    # Główny kształt
    draw.rectangle([porron_x, porron_y, porron_x + porron_width, porron_y + porron_height], 
                   outline=BLACK, width=2)
    
    # Uchwyty
    handle_size = size // 8
    draw.rectangle([porron_x - handle_size//2, porron_y + porron_height//3, 
                    porron_x, porron_y + porron_height//2], fill=BLACK)
    draw.rectangle([porron_x + porron_width, porron_y + porron_height//3,
                    porron_x + porron_width + handle_size//2, porron_y + porron_height//2], fill=BLACK)
    
    # Ustnik (trójkąt)
    spout_y = porron_y + porron_height
    draw.polygon([(size//2 - 2, spout_y), (size//2 + 2, spout_y), (size//2, spout_y + size//6)], 
                 fill=BLACK)
    
    img.save(filename)
    print(f"Created {filename} ({size}x{size})")

# Tworzenie różnych rozmiarów
sizes = [16, 32, 64, 180, 192, 512]
names = {
    16: "favicon-16x16.png",
    32: "favicon-32x32.png", 
    64: "favicon-64x64.png",
    180: "apple-touch-icon.png",
    192: "android-chrome-192x192.png",
    512: "android-chrome-512x512.png"
}

for size in sizes:
    create_favicon(size, f"favicon/{names[size]}")

print("\n✓ All favicons created!")