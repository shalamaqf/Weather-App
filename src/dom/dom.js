import { getInfo, getGif } from '../logic/logic.js';

// Create a function to attach an event listener on search button
export function attachEventSearchButton() {
    const searchButton = document.getElementById('search');
    searchButton.addEventListener('click', () => {
        showTemps();
        getGif();
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