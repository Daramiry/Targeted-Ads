// get user's data
// get user's coordinates
const getPos = () => {
    return new Promise(resolve, reject)
    navigator.geolocation.getCurrentPosition(resolve, reject)
}

// get user's time
function getHours() {
    let now = new Date();
    return now.getHours();
}

// helper functions
// check time of day
const getMeal = () => {
    let hr = getHour();
    if (hr > 20) {
        return 'Late Night Snack';

    } else if (hr > 16) {
        return 'Dinner'
    } else if (hr > 12) {
        return 'Lunch';
    } else if( hr > 9) {
        return 'Brunch'
    } else if(hr > 5) {
        return 'Breakfast'

    } else {
        return 'Late Night Snack'
    }

// build ads
// build ad 1
const buildAd1 = () => {
    let ad = document.querySelector('ad1');
    ad.innerHTML =  <p>We have the best ${getMeal}(toUpperCase()) in town!</p>
}

buildAd1()

// build ad 2
const buildingAd2 = async () => {
    let geolocation = await getPos();
    let{latitude, longitude} = geolocation.coords;
    let href = 'https://www.google.com/maps/search/coffee/@${latitude},${longitude},15z/';
}

// event listeners
// on load, build ads
