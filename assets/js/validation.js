//FUNCION JQUERY PARA MOSTRAR FECHA Y HORA EN TODAS LAS PAGINAS
const $tiempo = document.querySelector('.tiempo'), $fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['DOM','LUN','MAR','MIE','JUE','VIE','SAB'];
    let showSemana = (semana[diaSemana]);
    $fecha.innerHTML = `${dia}-${mes}-${anio} ${showSemana}`
}
setInterval(() => {
    digitalClock()
}, 1000);

//FUNCION DEL CLIMA ACTUAL
$(document).ready(function() {
  var apiKey = 'de4bde4d30f29e5059da40005d30614b'; 
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=Santiago,cl&appid=' + apiKey;

  $.ajax({
    url: url,
    dataType: 'json',
    success: function(data) {
      let temperatura = Math.round(data.main.temp - 273.15);
      let humedad = data.main.humidity;
      let velocidadViento = data.wind.speed;
      let ciudad = data.name;

      document.getElementById("temperatura").innerHTML = temperatura;
      document.getElementById("ciudad").innerHTML = ciudad;
      document.getElementById("viento").innerHTML = velocidadViento;
      document.getElementById("humedad").innerHTML = humedad;
    },
    error: function() {
      console.log('Error al obtener la información del clima de Santiago de Chile');
    }
  });
});

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

//FUNCION DE MODO OSCURO
let modo=document.getElementById("modo");
let body=document.body;

modo.addEventListener("click", function(){
    let val=body.classList.toggle("dark")
    localStorage.setItem("modo",val)
})

let valor=localStorage.getItem("modo")

if (valor=="true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}

