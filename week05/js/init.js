// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}

fetch("map.geojson")
    .then(response => {
        return response.json()
    })
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
        L.geoJSON(data, {
                pointToLayer: (feature, latlng) => { 
                    return L.circleMarker(latlng, {color: feature.properties.color})
                }
            }).bindPopup(layer => {
                return layer.feature.properties.place;
            }).addTo(map);
    })


            
    function loadData(url){
                Papa.parse(url, {
                    header: true,
                    download: true,
                    complete: results => console.log(results)
                    }
                )}
            
                const dataURL = https//docs.google.com/spreadsheets/d/e/2PACX-1vRpg7kBsGNJzhikU7JVyV69p8ckvilVTVLG5BQGB2yUhNRiKG_GC7dafdcDaIHK8v1Ok083qsUTYrMj/pub?output=csv
                loadData(dataURL)


    