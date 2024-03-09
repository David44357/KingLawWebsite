document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.createElement('div');
    overlay.id = 'loader';
    overlay.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        z-index: 999;
    `;
    
    const svgImage = document.createElement('img');
    svgImage.id = 'svgImage';
    svgImage.src = 'https://cdn.jsdelivr.net/gh/jasminder/flutter_preloader/preload.svg';
    svgImage.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;
    svgImage.style.display = 'none';
    
    document.body.appendChild(overlay);
    document.body.appendChild(svgImage);
    
    function hideOverlay() {
        overlay.style.display = 'none';
        svgImage.style.display = 'block';
    }
    
    setTimeout(hideOverlay, 100); // Simulate loading external JS files
});
