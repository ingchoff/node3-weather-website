const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?\
access_key=d14f1aaee5a9680eb1062ec02e9c2b60&query=${latitude},${longitude}`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const dataCurrent = body.current
            const result = `${dataCurrent.weather_descriptions[0]}. It's currently ${dataCurrent.temperature} degress out. It feels like ${dataCurrent.feelslike} degress out. The Humidity is ${dataCurrent.humidity}%.`
            callback(undefined, result)
        }
    })
}

module.exports = forecast