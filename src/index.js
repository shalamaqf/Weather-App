import './styles.css';

// Create a function to set up the form and get the location
function getLocation() {
    const location = prompt('Enter a location:');
    console.log(location);
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