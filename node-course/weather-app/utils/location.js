const request = require('request');

async function geocode(address, callback) {
    const apiKey = 'pk.eyJ1IjoiZmVsaXBlc3NpbmEiLCJhIjoiY2tiYzloYXE3MDkzdDMwcW85NXpnbWQ4YyJ9.0W5_n-nqe7HvwIxLF2-pSQ';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${apiKey}&limit=1`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Cannot connect to location API');
        } else if (body.features.length === 0) {
            callback('Invalid search, try another location');
        } else {
            const { features } = body;
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name,
            });
        }
    });
}

module.exports = {
    geocode,
};
