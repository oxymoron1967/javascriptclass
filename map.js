// Create a new Leaflet map
let poemMap;
poemMap = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(poemMap);

poemMap.setView([40.7128, -74.0060], 16);

const timesSquare = L.marker([40.7580, -73.9855]).addTo(poemMap);
timesSquare.bindPopup("<b>Times Square</b>");

const circle = L.circle([40.7580, -73.9855], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(poemMap);

const polyline = L.polyline([
    [40.7580, -73.9855],
    [40.7486, -73.9840]
], {
    color: 'blue'
}).addTo(poemMap);

polyline.bindPopup("<b>Times Square to the Graduate Center</b>");

circle.bindPopup("I'm a circle!");

poemMap.panTo(timesSquare.getLatLng());

poemMap.on('click', function(e) {
    const latLng = e.latlng;
    console.log(latLng.lat);
    console.log(latLng.lng);
});

const metMuseum = L.marker([40.7792, -73.9635]).addTo(poemMap);
metMuseum.bindPopup("<b>The Metropolitan Museum of Art</b>");

const lexSub = L.marker([40.7795, -73.9558]).addTo(poemMap)
lexSub.bindPopup("<b>86th Street and Lexington Avenue</b>");

const subway = L.polyline([
    [40.7792, -73.9635],
    [40.7795, -73.9558]
], {
    color: 'green'
}).addTo(poemMap);

subway.bindPopup("<b>The 4,5,6 trains stop here. This is the closest subway service to the Metropolitan Museum of Art</b>");