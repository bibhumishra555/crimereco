// Get the font control buttons and font size display element
var incrementButton = document.querySelector('.font-size-increment');
var decrementButton = document.querySelector('.font-size-decrement');
var defaultButton = document.querySelector('.font-size-default');
var fontSizeDisplay = document.querySelector('.font-size');

// Set the default font size
var fontSize = 16;

// Add event listeners to the font control buttons
incrementButton.addEventListener('click', function() {
    fontSize++;
    updateFontSize();
});

decrementButton.addEventListener('click', function() {
    if (fontSize > 1) {
        fontSize--;
        updateFontSize();
    }
});

defaultButton.addEventListener('click', function() {
    fontSize = 16;
    updateFontSize();
});

// Function to update the font size display
function updateFontSize() {
    fontSizeDisplay.textContent = fontSize;
    document.body.style.fontSize = fontSize + 'px';
}

// Get the theme buttons
var neonThemeButton = document.querySelector('.neon-theme');
var lightThemeButton = document.querySelector('.light-theme');

// Add event listeners to the theme buttons
neonThemeButton.addEventListener('click', function() {
    // Apply neon theme styles to body
    document.body.classList.add('neon-theme');
    document.body.classList.remove('light-theme');
    // Apply neon theme styles to specific elements if needed
    // Example: document.querySelector('.some-element').classList.add('neon-theme');
});

lightThemeButton.addEventListener('click', function() {
    // Apply light theme styles to body
    document.body.classList.remove('neon-theme');
    document.body.classList.add('light-theme');
    // Apply light theme styles to specific elements if needed
    // Example: document.querySelector('.some-element').classList.remove('neon-theme');
});


// Get the drop area
const dropArea = document.getElementById('drop-area');

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults (e) {
  e.preventDefault();
  e.stopPropagation();
}

// Highlight drop area when a file is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
  dropArea.classList.add('highlight');
}

function unhighlight(e) {
  dropArea.classList.remove('highlight');
}

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;

  handleFiles(files);
}

function handleFiles(files) {
  files = [...files];
  files.forEach(uploadFile);
}

function uploadFile(file) {
  // Here you can implement your file upload logic
  console.log('File uploaded:', file.name);
}

document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const uploadForm = document.getElementById("uploadForm");

    uploadForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const files = fileInput.files;
        if (files.length === 0) {
            alert("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("files[]", files[i]);
        }

        try {
            const response = await fetch("/upload", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                alert("Files successfully uploaded!");
            } else {
                alert("Failed to upload files.");
            }
        } catch (error) {
            console.error("Error uploading files:", error);
            alert("An error occurred while uploading the files.");
        }
    });
});


// Select the news slider element
const newsSlider = document.querySelector('.news-slider');

// Set the interval for sliding the news headlines
setInterval(() => {
    // Get the first news headline
    const firstHeadline = newsSlider.querySelector('.news-headline:first-child');

    // Add animation to slide the first news headline up
    firstHeadline.style.animation = 'slideUp 0.5s forwards';

    // Remove the animation after it completes
    setTimeout(() => {
        firstHeadline.style.animation = '';
        // Move the first headline to the end of the list
        newsSlider.appendChild(firstHeadline);
    }, 500);
}, 2000); // Change 2000 to the desired interval in milliseconds (e.g., 3000 for 3 seconds)

let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 1270}px)`;
}

function autoSlide() {
  moveSlide(1);
}

setInterval(autoSlide, 2000);
/*------------------------------------------------13-MAY-2024-----------------------------------------*/