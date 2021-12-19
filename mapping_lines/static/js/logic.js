// add console.log to check if our code is working
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -102.3790], 5);


// 13.4.3
// Coordinates for each point to be used in the line.
let line = [
    [37.615223, -122.389977],
    [30.18999924, -97.668663992],
    [44.882763, -93.2104],
    [43.6775, -79.6308333333],
    [40.641766, -73.780968]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: .5,
    dashArray: '20, 20',
  }).addTo(map);


// 13.2 create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
})
// then add our "graymap" tile layer to the map
streets.addTo(map);