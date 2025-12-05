import { getInfo, getGif, getLocationData } from '../logic/logic.js';

// Create a function to attach an event listener on search button
export function attachEventSearchButton() {
    const searchButton = document.getElementById('search');
    searchButton.addEventListener('click', () => {
        searchButtonOnClick(searchButton);
    })
}

// Create a function to show the celcius and fahrenheit data
async function showTemps() {
    // Select elements
    const celcius = document.querySelector('.data.celcius');
    const fahrenheit = document.querySelector('.data.fahrenheit');

    try {
        const data = await getInfo();

        // Check error
        checkError();

        // Hide the loader 
        hideLoader();

        celcius.textContent = data.celcius + '°C';
        fahrenheit.textContent = data.fahrenheit + '°F';
    } catch (err) {
        console.log(err);
    }
}

// Create an async function to show the location
async function showLocation() {
    const location = document.querySelector('.text.location');

    try {
        const data = await getInfo();
        const text = data.location;
        location.textContent = text.charAt(0).toUpperCase() + text.slice(1);
    } catch (err) {
        console.log(err);
    }
}

// Create an async function to show the weather's condition
async function showCondition() {
    const condition = document.querySelector('.text.condition');

    try {
        const data = await getInfo();
        condition.textContent = data.condition;
    } catch (err) {
        console.log(err);
    }
}

// Create an async function to show the gif
async function showGif() {
    const gif = document.getElementById('giphy');

    try {
        const data = await getGif();
        gif.src = data.data.images.original.url; 
    } catch (err) {
        console.log(err);
    }
}

// Create an async function to show the info
async function showInfo() {
    try {
        await showTemps();
        await showLocation();
        await showCondition();
        await showGif();
    } catch (err) {
        console.log(err);
    }
}

// Create an async function to disable the search button when async codes run
async function searchButtonOnClick(searchBtn) {
    searchBtn.disabled = true;

    // Clear content
    clearContent();

    // Show the loader
    showLoader();

    // Run async codes
    await showInfo();

    // Enabled the search button
    searchBtn.disabled = false;
}

// Create a function to animate dots when loading
export function animateDots() {
    let dots = document.querySelectorAll('.loader');
   
    dots.forEach(dot => {
        dot.classList.add('loading');
    })
}

// Create a function to show the loader
function showLoader() {
    const loaderContainer = document.getElementById('loader-container');

    // Add show class
    loaderContainer.classList.add('show');

    // Animate the dots
    animateDots();
}

// Create a function to hide the loader
function hideLoader() {
    const loaderContainer = document.getElementById('loader-container');

    // Remove show class
    loaderContainer.classList.remove('show');
}

// Create a function to clear main content
function clearContent() {
    const celciusTemp = document.querySelector('.data.celcius');
    const fahrenheitTemp = document.querySelector('.data.fahrenheit');
    const location = document.querySelector('.text.location');
    const condition = document.querySelector('.text.condition');
    const gif = document.getElementById('giphy');
    
    celciusTemp.textContent = '';
    fahrenheitTemp.textContent = '';
    location.textContent = '';
    condition.textContent = '';
    gif.src = '';
}

// Create a function to show the error
function showError() {
    const error = document.getElementById('error');
    error.textContent = 'Location not found.';
}

// Create a function to hide the error
function hideError() {
    const error = document.getElementById('error');
    error.textContent = '';
}

// Create an async function to check the error from API response
async function checkError() {
    const result = await getLocationData();
    if (result === true) {
        showError();
    } else {
        hideError();
    }
}