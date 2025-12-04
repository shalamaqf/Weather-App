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
