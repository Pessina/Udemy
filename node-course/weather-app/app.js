const locationAPI = require('./utils/location');
const weatherAPI = require('./utils/weather');

locationAPI.geocode('Vinhedo', (error, { latitude, longitude, location } = {}) => {
    if (error) {
        console.log(error);
    } else {
        weatherAPI.forecast(latitude, longitude, (error, data) => {
            if (error) {
                console.log(error);
            } else {
                console.log(location);
                console.log(data);
            }
        });
    }
});
