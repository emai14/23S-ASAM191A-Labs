// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':8}

let food = L.featureGroup();
let none = L.featureGroup();

let layers = {
    "Can order food/drink": food,
    "No food/drink": none
}

let circleOptions = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSQFSj2sr98Q6ZArZsEB-hzmDPm-SQlfetm4pWV5Erv6OCIgEaaGhH8X17iDlEYlccHhulxb8ovErPQ/pub?output=csv"

// define the leaflet map
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

// add layer control box
L.control.layers(null,layers).addTo(map)

let Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
});

Esri_WorldGrayCanvas.addTo(map);

function addMarker(data){
    if(data['Can you order food/drink here?'] == "Yes"){
        circleOptions.fillColor = "red"
        food.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>Can Order Food</h2>`))
        createButtons(data.lat,data.lng,data['What is this place called?'])
        }
    else{
        circleOptions.fillColor = "blue"
        none.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>No Food</h2>`))
        createButtons(data.lat,data.lng,data['What is this place called?'])
    }
    return data
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
    food.addTo(map) // add our layers after markers have been made
    none.addTo(map) // add our layers after markers have been made  
    let allLayers = L.featureGroup([food,none]);
    map.fitBounds(allLayers.getBounds());
}

loadData(dataUrl)
