// Simple frame effect - static image with technical overlay
document.addEventListener('DOMContentLoaded', function() {
    const oldImage = document.querySelector('.brutal-image');
    if (!oldImage) return;
    
    // Simple HTML structure
    oldImage.innerHTML = `
        <div class="simple-frame-container">
            <!-- Product image -->
            <div class="frame-product-image"></div>
            
            <!-- Technical overlay -->
            <div class="frame-overlay">
                <!-- Grid -->
                <div class="overlay-grid-h"></div>
                <div class="overlay-grid-v"></div>
                
                <!-- Measurements -->
                <div class="overlay-measure m1">
                    <div class="measure-line"></div>
                    <div class="measure-label">30cm</div>
                </div>
                
                <div class="overlay-measure m2">
                    <div class="measure-line"></div>
                    <div class="measure-label">20cm</div>
                </div>
                
                <!-- Frame -->
                <div class="overlay-frame">
                    <div class="frame-corner tl"></div>
                    <div class="frame-corner tr"></div>
                    <div class="frame-corner bl"></div>
                    <div class="frame-corner br"></div>
                </div>
                
                <!-- Label -->
                <div class="overlay-label">VISTA TÉCNICA</div>
            </div>
        </div>
    `;
    
    // Minimal styles - don't override body
    const style = document.createElement('style');
    style.textContent = `
        .simple-frame-container {
            position: relative;
            width: 100%;
            height: 400px;
            border: 4px solid #000000;
            overflow: hidden;
            background: #000000;
        }
        
        .frame-product-image {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-image: url('images/1.webp');
            background-size: 40%;
            background-position: right;
			background-margen:10%;
            background-repeat: no-repeat;
            background-attachment: fixed;
            opacity: 0.9;
        }
        
        .frame-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        /* Grid */
        .overlay-grid-h {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;
            background: rgba(139, 69, 19, 0.6);
            transform: translateY(-50%);
        }
        
        .overlay-grid-v {
            position: absolute;
            top: 0;
            left: 50%;
            width: 1px;
            height: 100%;
            background: rgba(139, 69, 19, 0.6);
            transform: translateX(-50%);
        }
        
        /* Measurements */
        .overlay-measure {
            position: absolute;
        }
        
        .m1 {
            top: 30%;
            left: 20%;
        }
        
        .m2 {
            bottom: 25%;
            right: 25%;
        }
        
        .measure-line {
            width: 60px;
            height: 1px;
            background: #ff6b6b;
            position: relative;
        }
        
        .measure-line::before,
        .measure-line::after {
            content: '';
            position: absolute;
            width: 1px;
            height: 10px;
            background: #ff6b6b;
            top: -5px;
        }
        
        .measure-line::after {
            right: 0;
        }
        
        .measure-label {
            position: absolute;
            top: -25px;
            left: 50%;
            transform: translateX(-50%);
            color: #ff6b6b;
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.75rem;
            font-weight: 700;
            background: rgba(0, 0, 0, 0.8);
            padding: 2px 6px;
            border: 1px solid #ff6b6b;
        }
        
        /* Frame */
        .overlay-frame {
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            border: 2px solid #8b4513;
        }
        
        .frame-corner {
            position: absolute;
            width: 20px;
            height: 20px;
            border: 3px solid #000000;
        }
        
        .tl {
            top: -3px;
            left: -3px;
            border-right: none;
            border-bottom: none;
        }
        
        .tr {
            top: -3px;
            right: -3px;
            border-left: none;
            border-bottom: none;
        }
        
        .bl {
            bottom: -3px;
            left: -3px;
            border-right: none;
            border-top: none;
        }
        
        .br {
            bottom: -3px;
            right: -3px;
            border-left: none;
            border-top: none;
        }
        
        /* Label */
        .overlay-label {
            position: absolute;
            bottom: 10px;
            right: 10px;
            background: #000000;
            color: #8b4513;
            padding: 0.5rem 1rem;
            border: 2px solid #8b4513;
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    `;
    
    document.head.appendChild(style);
});