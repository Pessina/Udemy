const request = require('request');

function forecast(latitude, longitude, callback) {
    const apiKey = '820e860cfe14cb9ec2d3d7fa60a3b778';
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${latitude},${longitude}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connet to weather api');
        } else if (body.error) {
            callback('Weather Api: bad location');
        } else {
            const { current, location } = body;
            const { name, country, region } = location;
            callback(undefined, {
                temperature: current.temperature,
                name,
                country,
                region,
            });
        }
    });
}

module.exports = {
    forecast,
};
