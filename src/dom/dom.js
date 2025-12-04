import { getInfo, getGif } from '../logic/logic.js';

// Create a function to attach an event listener on search button
export function attachEventSearchButton() {
    const searchButton = document.getElementById('search');
    searchButton.addEventListener('click', () => {
        getInfo();
        getGif();
    })
}