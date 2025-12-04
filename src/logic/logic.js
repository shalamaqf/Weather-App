// Create a function to set up the form and get the location
function getLocation() {
    const location = document.getElementById('location').value;
    return location;
}

/* Create an async function to receive the location input
   and fetch the location JSON data */
async function getLocationData() {
    const key = '2F8ZWAB7SDMAQ7TREVK5VY772';
    try {
        const location = getLocation();
        const locationData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}`);
        return locationData;
    } catch {
        console.log(err);
    }
}

// Create a function to turn JSON data to JS object
async function turnDataToObject() {
    try {
        const locationData = await getLocationData();
        const data = await locationData.json();
        return data;
    } catch {
        console.log(err);
    }
}

// Create an async function to get the info (location, temps, and weather condition)
export async function getInfo() {
    const data = await turnDataToObject();
    const location = data.address;
    const fahrenheit = Math.trunc(data.currentConditions.temp);
    const celcius = Math.trunc((fahrenheit - 32) * 5/9);
    const condition = data.currentConditions.conditions;

    return {
        location,
        fahrenheit,
        celcius,
        condition
    }
}

// Create an async function to get a gif based on the weather condition
export async function getGif() {
    // Select the img element
    const img = document.getElementById('giphy');
    // API's key
    const key = 'zc2pqdzUxA0yZUCPY9ckOzh0o8Dbpodk';
    try {
        const info = await getInfo();
        const condition = info.condition;
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${condition}`);
        const data = await response.json();
        img.src = data.data.images.original.url;
    } catch {
        console.log(err);
    }
}