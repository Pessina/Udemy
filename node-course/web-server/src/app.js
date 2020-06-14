const express = require('express');
const path = require('path');
const hbs = require('hbs');

const geo = require('./utils/location');
const weather = require('./utils/weather');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsDirectoryPath = path.join(__dirname, '../templates/views');
const partialsDirectoryPath = path.join(__dirname, '../templates/partials');

hbs.registerPartials(partialsDirectoryPath);
app.set('views', viewsDirectoryPath);
app.set('view engine', 'hbs');

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Felipe',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Felipe',
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'If you want help, you can call me',
        name: 'Felipe',
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help',
        errorMessage: 'Article not found',
        name: 'Felipe',
    });
});

app.get('/weather', (req, res) => {
    const { address } = req.query;
    if (!address) {
        return res.send({
            error: 'You need to provide an address',
        });
    }

    geo.geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error });
        }
        weather.forecast(latitude, longitude, (error, data) => {
            if (error) {
                return res.send({ error });
            }
            res.send({
                location,
                ...data,
            });
        });
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page Not Found',
        name: 'Felipe',
    });
});

app.listen(3000);
