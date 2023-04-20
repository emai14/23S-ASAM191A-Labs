console.log("Hello Asia-Am 191A! :)")

// JavaScript const variable declaration
const map = L.map('the_map').setView([33.9700, -118.444], 10); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

//JavaScript let variable declaration to create a marker
let powell = L.marker([34.0716, -118.4422]).addTo(map) 
        .bindPopup('My favorite place to study :)')

let smpier = L.marker([34.0083, -118.4988]).addTo(map)
        .bindPopup('Arcade on Santa Monica Pier')

let aotp = L.marker([33.7620,-118.1970]).addTo(map)
        .bindPopup('Best aquarium ever :D')

let ghost = L.marker([33.922428, -118.112282]).addTo(map)
        .bindPopup('Where I adopted my dog <3')

function addMarker(lat, lng, message){ 
    console.log(message) 
    L.marker([lat,lng]).addTo(map).bindPopup(message) 
    return message 
        }

let tfc = L.marker([34.050450, -118.438120]).addTo(map)
.bindPopup('Best Westwood restaurant')