// White Background
document.body.style.backgroundColor = "white";
document.body.style.cssText = `
    background-color: white !important;
`;

// Full Screen Overlay
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
    background-color: white;
    z-index: 999;
`;
document.body.appendChild(overlay);

// Progress Bar
const progressBar = document.createElement('div');
progressBar.id = 'progressBar';
progressBar.style.cssText = `
    position: absolute;
    top: calc(50% + 75px);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 20px;
    background-color: #f2f2f2;
    border-radius: 10px;
`;

// Progress Bar Fill
const progressBarFill = document.createElement('div');
progressBarFill.id = 'progressBarFill';
progressBarFill.style.cssText = `
    height: 100%;
    background-color: #4CAF50;
    border-radius: 10px;
    width: 0%;
    transition: width 0.5s ease;
`;

// Append the progress bar and its fill to the overlay
progressBar.appendChild(progressBarFill);
document.body.appendChild(progressBar);

// Logo Image
const logoImage = document.createElement('img');
logoImage.id = 'logoImage';
logoImage.src = 'https://kinglawnc.com/images/New%20Logo%20Square%20Icon%20(100x100).png';
logoImage.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    width: 100px;
    height: 100px;
    top: calc(50% - 75px);
    left: 50%;
    transform: translate(-50%, -50%);
`;
logoImage.style.display = 'none';
document.body.appendChild(logoImage);

// SVG Image
const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://cdn.jsdelivr.net/gh/jasminder/flutter_preloader/preload.svg';
svgImage.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    width: 50px;
    height: 50px;
    top: calc(50% + 45px);
    left: 50%;
    transform: translate(-50%, -50%);
`;
svgImage.style.display = 'none';
document.body.appendChild(svgImage);

// Text Element
const textElement = document.createElement('div');
textElement.id = 'textElement';
textElement.textContent = 'App setup. Please be patient.';
textElement.style.cssText = `
    position: absolute;
    top: calc(50% - 20px);
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    color: black;
    text-align: center;
    font-weight: semi-bold;
    color: black;
`;

// Append the text element to the overlay
textElement.style.display = 'none';
document.body.appendChild(textElement);

// Function to update the progress bar
function updateProgressBar(progress) {
    progressBarFill.style.width = progress + '%';
}

// Function to hide the overlay, logo, and text
function hideOverlay() {
    overlay.style.display = 'none';
    svgImage.style.display = 'inline';
    logoImage.style.display = 'inline';
    textElement.style.display = 'inline';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Replace the following lines with the actual code that loads your external JS files
    // For demonstration purposes, we'll use a setTimeout to simulate loading external JS files.
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        updateProgressBar(progress);
        if (progress >= 100) {
            clearInterval(interval);
            hideOverlay();
        }
    }, 500);
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);
