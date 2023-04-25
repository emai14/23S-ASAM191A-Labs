// declare the map
const map = L.map('the_map').setView([34.0709,0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function createButton(lat,lng,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.getElementById("contents").appendChild(newButton); 
}

function addMarker(lat,lng,title,message){
        console.log(message)
        L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
        createButton(lat,lng,title); 
        return message
    }

addMarker(16.0545, 108.0717, "The Motherland", "Where my parents are from! I hope to do archaeological research here one day.")
addMarker(29.9293, -81.3250, "Summer 2023", "I will hopefully be attending field school here this summer, as an archaeological field technician at Fort Mose!")
addMarker(53.7798, -7.3055, "Random Bucket List Item xD", "One of the things I want to do before I die is go to Ireland and participate in the 12 Pubs of Christmas.")