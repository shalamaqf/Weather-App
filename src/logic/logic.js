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
export async function turnDataToObject() {
    try {
        const locationData = await getLocationData();
        const data = await locationData.json();
        return data;
    } catch {
        console.log(err);
    }
}