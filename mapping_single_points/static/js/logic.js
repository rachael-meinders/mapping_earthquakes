// add console.log to check if our code is working
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//  13.4.1 Add a marker to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//     radius: 100,
//     color: "black",
//      fillColor: "yellow"
//  }).addTo(map);

 //
 L.circleMarker([34.0522, -118.2437], {
     radius: 50,
     color: "black",
     fillColor: "yellow"
 }).addTo(map);

// 13.2 create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
})
// then add our "graymap" tile layer to the map
streets.addTo(map);