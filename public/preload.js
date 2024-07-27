// if ('connection' in navigator) {
//   const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

//   function updateConnectionStatus() {
//     console.log(`Connection type changed to ${connection.effectiveType}`);
//     console.log("connection.type")
//     console.log("connection.type")
//     console.log(connection.type)
//     alert(`Connection type changed to ${connection.effectiveType}`)
//     alert(`connection.type ${connection.type}`)
//     if (connection.type === 'wifi') {
//       console.log('Connected to Wi-Fi');
//     } else if (connection.type === 'cellular') {
//       console.log('Connected to Mobile Data');
//     } else {
//       console.log('Connection type is unknown');
//     }
//   }

//   connection.addEventListener('change', updateConnectionStatus);
//   updateConnectionStatus();
// } else {
//   console.log('The Network Information API is not supported by your browser.');
// }

//White Background
document.body.style.backgroundColor = "white";
document.body.style.cssText = `
    background-color: white !important;
`;
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


// Text Element
const textElement = document.createElement('div');
textElement.id = 'textElement';
textElement.textContent = 'Downloading Compass.'
textElement.style.cssText = `
    position: absolute;
   top: calc(50% - 20px);
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: black;
    text-align:center;
    font-weight:bold;
    color:black;
`;

// Append the text element to the overlay
textElement.style.display = 'none';
document.body.appendChild(textElement);


//Progress bar
const progressContainer = document.createElement('div');
progressContainer.id = 'myProgress';
//progressContainer.style.width = '100%';
//progressContainer.style.backgroundColor = '#ddd';
//progressContainer.style.borderRadius = '25px'; // Add border radius to container
//progressContainer.style.marginTop = '60px';    // Add margin top to container
progressContainer.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(50% - 20px);
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    width: 100%;
    max-width:280px;
    border-radius: 25px;
    margin-top: 30px;
    background-color: #ddd;
`;

// Create and style the progress bar itself
const progressBar = document.createElement('div');
progressBar.style.width = '1%';
progressBar.style.height = '30px';
progressBar.style.backgroundColor = '#04AA6D';
progressBar.style.borderRadius = '25px';  // Add border radius to bar
progressBar.id = 'myBar';
 // Append the progress bar to the container
progressContainer.appendChild(progressBar);
progressContainer.style.display = 'none';
//textElement.parentNode.insertBefore(progressContainer, textElement.nextSibling);
document.body.appendChild(progressContainer);





// Function to hide the overlay, logo, and text
function hideOverlay() {
  overlay.style.display = 'none';
  logoImage.style.display = 'inline';
  textElement.style.display = 'inline';
  progressContainer.style.display = 'inline';
}


// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
  // Replace the following lines with the actual code that loads your external JS files
  // For demonstration purposes, we'll use a setTimeout to simulate loading external JS files.
  setTimeout(hideOverlay, 100); // Replace with your actual loading code.
  let progress_seconds = 5;
  if ('connection' in navigator) {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    function updateConnectionStatus() {
      console.log(`Connection type changed to ${connection.effectiveType}`);
      console.log("connection.type")
      console.log(connection.type)
      // alert(`Connection type changed to ${connection.effectiveType}`)
      // alert(`connection.type ${connection.type}`)
      if (connection.type === 'wifi') {
        console.log('Connected to Wi-Fi');
        progress_seconds = 5;
      } else if (connection.type === 'cellular') {
        console.log('Connected to Mobile Data');
        progress_seconds = 15;
      } else {
        console.log('Connection type is unknown');
        progress_seconds = 5;
      }
    }

    connection.addEventListener('change', updateConnectionStatus);
    updateConnectionStatus();
  } else {
    console.log('The Network Information API is not supported by your browser.');
  }
  let increment = 20;
  if(progress_seconds === 5 ){
    increment = 20;
  }else if(progress_seconds === 15){
    increment = 7;
  }
  let i = 0;
  function move() {
    if (i === 0) {
      i = 1;
      let elem = document.getElementById("myBar");
      let width = 1;
      let id = setInterval(frame, 1000);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          //width++;
          // 5 seconds
          //width = width + 20;
          // 15 seconds
          // width = width + 7;
          width = width + increment;
          if(width > 100){
          	width = 100;
          }
          elem.style.width = width + "%";
        }
      }
    }
  }
  setTimeout(move, 100);
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);
