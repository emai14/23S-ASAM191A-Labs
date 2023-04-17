console.log("Hello Asia-Am 191A! :)")

// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 14); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

//JavaScript let variable declaration to create a marker
let cookie = L.marker([34.0631, -118.4469]).addTo(map) 
        .bindPopup('Diddy Riese!')

let ackerman = L.marker([34.0705, -118.4442]).addTo(map)
        .bindPopup('Ackerman Union')

function addMarker(lat,lng,message){ 
    console.log(message) 
    L.marker([lat,lng]).addTo(map).bindPopup(message) 
    return message 
        }