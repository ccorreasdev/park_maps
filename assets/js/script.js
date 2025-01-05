const zoomQuantity = 90;
const parqueOeste = document.querySelector("#parque-oeste");
const parqueJumilla = document.querySelector("#parque-jumilla");
const parque8Marzo = document.querySelector("#parque-8-marzo");
const parqueFrutera = document.querySelector("#parque-frutera");
const parquePabloIglesias = document.querySelector("#parque-pablo-iglesias");
const parquePerreraVereda = document.querySelector("#parque-perrera-vereda");
const parquePilar = document.querySelector("#parque-pilar");
const parqueSanLazaro = document.querySelector("#parque-san-lazaro");
const parqueGarroferets = document.querySelector("#parque-garroferets");
const parqueRepublica = document.querySelector("#parque-republica");
const parqueRavonis = document.querySelector("#parque-ravonis");
const parqueCarmencita = document.querySelector("#parque-carmencita");
const parqueMagdalena = document.querySelector("#parque-magdalena");
const parqueBancalFondo = document.querySelector("#parque-bancal");
const parqueAlbereda = document.querySelector("#parque-albereda");
const parqueLaCruz = document.querySelector("#parque-cruz");
const parqueSanchisGuarner = document.querySelector("#parque-sanchis");
const parqueGarrova = document.querySelector("#parque-garrova");
const parqueWilfredo = document.querySelector("#parque-wilfredo");
const parqueUva = document.querySelector("#parque-uva");
const parqueUniuonMusical = document.querySelector("#parque-union-musical");
const parqueEspecias = document.querySelector("#parque-especias");
const parqueDonante = document.querySelector("#parque-donante");
const parquePiedra = document.querySelector("#parque-piedra");
const parquePedregal = document.querySelector("#parque-pedregal");
const parqueUnicef = document.querySelector("#parque-unicef");
const parqueFelix = document.querySelector("#parque-felix");
const parqueGlorieta = document.querySelector("#parque-glorieta");



let map = L.map('map').setView([38.384210, -0.766474], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


parqueGlorieta.addEventListener("click", () => {
    map.setView([38.385273, -0.768750], zoomQuantity);
    L.marker([38.385273, -0.768750]).addTo(map);
})

parqueFelix.addEventListener("click", () => {
    map.setView([38.383747, -0.766189], zoomQuantity);
    L.marker([38.383747, -0.766189]).addTo(map);
})

parqueUnicef.addEventListener("click", () => {
    map.setView([38.382942, -0.768706], zoomQuantity);
    L.marker([38.382942, -0.768706]).addTo(map);
})

parquePedregal.addEventListener("click", () => {
    map.setView([38.378689, -0.769685], zoomQuantity);
    L.marker([38.378689, -0.769685]).addTo(map);
})


parquePiedra.addEventListener("click", () => {
    map.setView([38.380298, -0.765124], zoomQuantity);
    L.marker([38.380298, -0.765124]).addTo(map);
})

parqueDonante.addEventListener("click", () => {
    map.setView([38.380749, -0.763830], zoomQuantity);
    L.marker([38.380749, -0.763830]).addTo(map);
})


parqueEspecias.addEventListener("click", () => {
    map.setView([38.381085, -0.762196], zoomQuantity);
    L.marker([38.381085, -0.762196]).addTo(map);
})

parqueUniuonMusical.addEventListener("click", () => {
    map.setView([38.381503, -0.760874], zoomQuantity);
    L.marker([38.381503, -0.760874]).addTo(map);
})

parqueUva.addEventListener("click", () => {
    map.setView([38.381805, -0.759806], zoomQuantity);
    L.marker([38.381805, -0.759806]).addTo(map);
})

parqueOeste.addEventListener("click", () => {
    map.setView([38.381610, -0.778151], zoomQuantity);
    L.marker([38.381610, -0.778151]).addTo(map);
})

parqueJumilla.addEventListener("click", () => {
    map.setView([38.375546, -0.772165], zoomQuantity);
    L.marker([38.375546, -0.772165]).addTo(map);
})

parque8Marzo.addEventListener("click", () => {
    map.setView([38.378405, -0.771196], zoomQuantity);
    L.marker([38.378405, -0.771196]).addTo(map);
})

parqueFrutera.addEventListener("click", () => {
    map.setView([38.387375, -0.758832], zoomQuantity);
    L.marker([38.387375, -0.758832]).addTo(map);
})

parquePabloIglesias.addEventListener("click", () => {
    map.setView([38.382064, -0.772814], zoomQuantity);
    L.marker([38.382064, -0.772814]).addTo(map);
})

parquePerreraVereda.addEventListener("click", () => {
    map.setView([38.382316, -0.775082], zoomQuantity);
    L.marker([38.382316, -0.775082]).addTo(map);
})

parquePilar.addEventListener("click", () => {
    map.setView([38.383459, -0.774110], zoomQuantity);
    L.marker([38.383459, -0.774110]).addTo(map);
})

parqueSanLazaro.addEventListener("click", () => {
    map.setView([38.384872, -0.772866], zoomQuantity);
    L.marker([38.384872, -0.772866]).addTo(map);
})

parqueGarroferets.addEventListener("click", () => {
    map.setView([38.385626, -0.772962], zoomQuantity);
    L.marker([38.385626, -0.772962]).addTo(map);
})

parqueRavonis.addEventListener("click", () => {
    map.setView([38.390381, -0.770379], zoomQuantity);
    L.marker([38.390381, -0.770379]).addTo(map);
})

parqueRepublica.addEventListener("click", () => {
    map.setView([38.389035, -0.771006], zoomQuantity);
    L.marker([38.389035, -0.771006]).addTo(map);
})

parqueCarmencita.addEventListener("click", () => {
    map.setView([38.390349, -0.768323], zoomQuantity);
    L.marker([38.390349, -0.768323]).addTo(map);
})

parqueMagdalena.addEventListener("click", () => {
    map.setView([38.388822, -0.766991], zoomQuantity);
    L.marker([38.388822, -0.766991]).addTo(map);
})

parqueBancalFondo.addEventListener("click", () => {
    map.setView([38.389637, -0.765051], zoomQuantity);
    L.marker([38.389637, -0.765051]).addTo(map);
})

parqueAlbereda.addEventListener("click", () => {
    map.setView([38.388642, -0.763592], zoomQuantity);
    L.marker([38.388642, -0.763592]).addTo(map);
})

parqueLaCruz.addEventListener("click", () => {
    map.setView([38.387754, -0.762079], zoomQuantity);
    L.marker([38.387754, -0.762079]).addTo(map);
})

parqueSanchisGuarner.addEventListener("click", () => {
    map.setView([38.386900, -0.760630], zoomQuantity);
    L.marker([38.386900, -0.760630]).addTo(map);
})

parqueGarrova.addEventListener("click", () => {
    map.setView([38.385188, -0.757017], zoomQuantity);
    L.marker([38.385188, -0.757017]).addTo(map);
})

parqueWilfredo.addEventListener("click", () => {
    map.setView([38.384026, -0.757575], zoomQuantity);
    L.marker([38.384026, -0.757575]).addTo(map);
})