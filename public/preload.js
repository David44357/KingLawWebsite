// FULL SCREEN OVERLAY
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

//LOGO IMAGE
const logoImage = document.createElement('img');
logoImage.id = 'logoImage';
logoImage.src = 'https://kinglawnc.com/images/New%20Logo%20Square%20Icon%20(100x100).png';
logoImage.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    width:100px;
    height:100px;
    top: calc(50% - 75px);
    left: 50%;
    transform: translate(-50%, -50%);
`;
logoImage.style.display = 'none';
document.body.appendChild(logoImage);

//SVG IMAGE
const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://cdn.jsdelivr.net/gh/jasminder/flutter_preloader/preload.svg';
svgImage.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    width:50px;
    height:50px;
    top: calc(50% + 45px);
    left: 50%;
    transform: translate(-50%, -50%);
`;
svgImage.style.display = 'none';
document.body.appendChild(svgImage);


// Text Element
const textElement = document.createElement('div');
textElement.id = 'textElement';
textElement.textContent = 'Allow up to one minute to load'
textElement.style.cssText = `
    position: absolute;
   top: calc(50% - 20px);
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    color: black;
    text-align:center;
    font-weight:semi-bold;
    color:black;
`;

// Append the text element to the overlay
textElement.style.display = 'none';
document.body.appendChild(textElement);


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
    setTimeout(hideOverlay, 100); // Replace with your actual loading code.
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);
