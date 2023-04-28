//FUNCION JQUERY PARA MOSTRAR FECHA Y HORA EN TODAS LAS PAGINAS
$(document).ready(function() {
    // Función para mostrar la fecha y hora actual
    function mostrarFechaHora() {
      var fechaHora = new Date();
      var fecha = fechaHora.toLocaleDateString();
      var hora = fechaHora.toLocaleTimeString();
      $('#fecha').text(fecha);
      $('#hora').text(hora);
    }
  
    // Actualizar la hora cada segundo
    setInterval(mostrarFechaHora, 1000);
  });

//FUNCION DEL CLIMA ACTUAL
const apiKey = "de4bde4d30f29e5059da40005d30614b";
const url = `http://api.openweathermap.org/data/2.5/weather?q=Chile&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperature = Math.round(data.main.temp - 273.15); // Convertir de Kelvin a Celsius
    const description = data.weather[0].description;
    const city = data.name;
    const country = data.sys.country;

// Aquí se muestra la información en los elementos span
    document.getElementById("temperature").textContent = temperature;
    document.getElementById("description").textContent = description;
    document.getElementById("city").textContent = city;
    document.getElementById("country").textContent = country;
  })
  .catch(error => console.error(error));

//FUNCION DE MAPA
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let myMap = L.map('myMap').setView([-33.45694, -70.64827, -0.09], 13)

L.tileLayer(tilesProvider, {
	maxZoom: 18,
}).addTo(myMap);

let marker = L.marker([-33.45694, -70.64827]).addTo(myMap)

let iconMarker = L.icon({
    iconUrl: 'assets/img/marker.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})

let marker2 = L.marker([-33.45694, -70.64827], { icon: iconMarker }).addTo(myMap)

myMap.doubleClickZoom.disable()
myMap.on('dblclick', e => {
  let latLng = myMap.mouseEventToLatLng(e.originalEvent);

  L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).addTo(myMap)
})

navigator.geolocation.getCurrentPosition(
  (pos) => {
    const { coords } = pos
    const { latitude, longitude } = coords
    L.marker([latitude, longitude], { icon: iconMarker }).addTo(myMap)

    setTimeout(() => {
      myMap.panTo(new L.LatLng(latitude, longitude))
    }, 5000)
  },
  (error) => {
    console.log(error)
  },
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })