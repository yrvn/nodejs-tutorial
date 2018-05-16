const request = require('request');
const yargs = require('yargs');


const apikey = 'AIzaSyBCP_ZZpAxf9Nc0gN7vsPZR6ie3Hwp2Ukk';

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var address = encodeURIComponent(argv.address);
var url =
    'http://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&apikey=' +
    apikey;

request({
        url,
        json: true
    },
    (error, response, body) => {
        //console.log(JSON.stringify(error, undefined, 2));
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
);