import { getInfo, getGif } from '../logic/logic.js';

// Create a function to attach an event listener on search button
export function attachEventSearchButton() {
    const searchButton = document.getElementById('search');
    searchButton.addEventListener('click', async () => {
        try {
            await showTemps();
            await showLocation();
            await showCondition();
            await getGif();
        } catch (err) {
            console.log(err);
        }
    })
}

// Create a function to show the celcius and fahrenheit data
async function showTemps() {
    // Select elements
    const celcius = document.querySelector('.data.celcius');
    const fahrenheit = document.querySelector('.data.fahrenheit');

    try {
        const data = await getInfo();
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