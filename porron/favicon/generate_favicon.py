#!/usr/bin/env python3
import subprocess
import os

# Instaluj cairosvg jeśli nie ma
try:
    import cairosvg
except ImportError:
    print("Instalowanie cairosvg...")
    subprocess.run(["pip3", "install", "cairosvg"], check=True)
    import cairosvg

# Rozmiary favicon
sizes = [
    (16, 16, "favicon-16x16.png"),
    (32, 32, "favicon-32x32.png"),
    (64, 64, "favicon-64x64.png"),
    (180, 180, "apple-touch-icon.png"),
    (192, 192, "android-chrome-192x192.png"),
    (512, 512, "android-chrome-512x512.png")
]

# Generuj PNG z SVG
for width, height, filename in sizes:
    input_svg = "favicon.svg"
    output_png = filename
    
    cairosvg.svg2png(
        url=input_svg,
        write_to=output_png,
        output_width=width,
        output_height=height
    )
    print(f"✓ Wygenerowano {filename} ({width}x{height})")

# Tworzenie ICO (Windows)
print("\nTworzenie favicon.ico...")
subprocess.run([
    "convert", 
    "favicon-16x16.png", "favicon-32x32.png", "favicon-64x64.png",
    "-colors", "256",
    "favicon.ico"
], capture_output=True)

print("✓ Gotowe! Favicony wygenerowane.")