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

//FUNCION COVID

$.ajax({
    url: 'https://disease.sh/v3/covid-19/all',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      // Define los valores a mostrar en el gráfico circular
      let casos = data.cases;
      let muertes = data.deaths;
      let recuperados = data.recovered;

      $('#casos').html(casos);
      $('#muertes').html(muertes);
      $('#recuperados').html(recuperados);
     
      let casos1 = data.cases.toLocaleString();
      let muertes1 = data.deaths.toLocaleString();
      let recuperados1 = data.recovered.toLocaleString();

      

      $('#casos1').html(casos1);
      $('#muertes1').html(muertes1);
      $('#recuperados1').html(recuperados1);
      
      // Crea el gráfico circular utilizando Chart.js
     // Carga la librería de Google Charts
     google.charts.load('current', {packages: ['corechart']});
                
                // Define la función que se llamará cuando la librería esté lista
                google.charts.setOnLoadCallback(dibujarGrafico);

                
                
                // Define la función que dibuja el gráfico
                function dibujarGrafico() {
                  // Crea los datos del gráfico
                  var datos = google.visualization.arrayToDataTable([
                    ['Dato', 'Población'],
                    ['Casos', casos],
                    ['Muertes', muertes],
                    ['Recuperados', recuperados],
                  ]);

                  // Define las opciones del gráfico
                  var opciones = {
                    title: 'Datos mundiales COVID-19.',
                    width: 600,
                    height: 400
                  };
                
                  // Crea el gráfico y lo dibuja en el contenedor especificado
                  var grafico = new google.visualization.BarChart(document.getElementById('grafico'));
                  grafico.draw(datos, opciones);
                }

      
    },
    error: function() {
      alert('Error al obtener los datos de la API.');
    }
  });



  //FORMULARIO
document.getElementById("error_nombre_vacio").style.display="none";
document.getElementById("error_nombre_size").style.display="none";
document.getElementById("error_pApellido_vacio").style.display="none";
document.getElementById("error_pApellido_size").style.display="none";
document.getElementById("error_sApellido_vacio").style.display="none";
document.getElementById("error_sApellido_size").style.display="none";
document.getElementById("error_rut_vacio").style.display="none";
document.getElementById("error_rut_reg").style.display="none";
document.getElementById("error_tel_vacio").style.display="none";
document.getElementById("error_tel_isnan").style.display="none";
document.getElementById("error_tel_limit").style.display="none";
document.getElementById("error_mail_vacio").style.display="none";
document.getElementById("error_mail_reg").style.display="none";
document.getElementById("error_servicio").style.display="none";
document.getElementById("error_codPromo_reg").style.display="none";
document.getElementById("error_metodopago_vacio").style.display="none";

function validarFormulario(){
    let nombre = document.getElementById('nombre').value;
    let pApellido = document.getElementById('pApellido').value;
    let sApellido = document.getElementById('sApellido').value;
    let telefonoFormulario = document.getElementById('telefonoFormulario').value;
    let emailFormulario = document.getElementById('emailFormulario').value;
    let rut = document.getElementById('rut').value;
    let tipoServicio = document.getElementById("tipoServicio").value;
    let codPromo = document.getElementById("codPromo").value;
    let metodoPago = document.getElementsByName("metodoPago");
    let emailVerif = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let rutVerif = /^[1-9]\d*\-(\d|k|K)$/;
    let telVerif = /^\d{9}$/;
    let codVerif = /\b[0-9]{3}[A-Za-z]{3}\b/;
    let opcionPago = 0;
    

    //nombre
    if(nombre.trim().length==0) {
        document.getElementById("error_nombre_vacio").style.display="inline";
        document.getElementById("error_nombre_size").style.display="none";
        document.getElementById("nombre").classList.add("is-invalid");
        
    }else if (nombre.trim().length < 3){
        document.getElementById("error_nombre_vacio").style.display="none";
        document.getElementById("error_nombre_vacio").style.display="inline";
        document.getElementById("nombre").classList.add("is-invalid");
    }else{
        document.getElementById("error_nombre_vacio").style.display="none";
        document.getElementById("error_nombre_size").style.display="none";
        document.getElementById("nombre").classList.remove("is-invalid");
        document.getElementById("nombre").classList.add("is-valid");
    }

    //papellido
    if(pApellido.trim().length==0) {
        document.getElementById("error_pApellido_vacio").style.display="inline";
        document.getElementById("error_pApellido_size").style.display="none";
        document.getElementById("pApellido").classList.add("is-invalid");
        
    }else if (pApellido.trim().length < 3){
        document.getElementById("error_pApellido_vacio").style.display="none";
        document.getElementById("error_pApellido_vacio").style.display="inline";
        document.getElementById("pApellido").classList.add("is-invalid");
    }else{
        document.getElementById("error_pApellido_vacio").style.display="none";
        document.getElementById("error_pApellido_size").style.display="none";
        document.getElementById("pApellido").classList.remove("is-invalid");
        document.getElementById("pApellido").classList.add("is-valid");
    }

    //sapellido

    if(sApellido.trim().length==0) {
        document.getElementById("error_sApellido_vacio").style.display="inline";
        document.getElementById("error_sApellido_size").style.display="none";
        document.getElementById("sApellido").classList.add("is-invalid");
        
    }else if (sApellido.trim().length < 3){
        document.getElementById("error_sApellido_vacio").style.display="none";
        document.getElementById("error_sApellido_vacio").style.display="inline";
        document.getElementById("sApellido").classList.add("is-invalid");
    }else{
        document.getElementById("error_sApellido_vacio").style.display="none";
        document.getElementById("error_sApellido_size").style.display="none";
        document.getElementById("sApellido").classList.remove("is-invalid");
        document.getElementById("sApellido").classList.add("is-valid");
    }

    //tel
    if (!telVerif.test(telefonoFormulario)){
        document.getElementById("error_tel_reg").style.display="inline";
        document.getElementById("telefonoFormulario").classList.add("is-invalid");
    }else{
        document.getElementById("error_tel_reg").style.display="none";
        document.getElementById("telefonoFormulario").classList.remove("is-invalid");
        document.getElementById("telefonoFormulario").classList.add("is-valid");
    }
        

    //mail
    if (!emailVerif.test(emailFormulario)){
        document.getElementById("error_mail_reg").style.display="inline";
        document.getElementById("emailFormulario").classList.add("is-invalid");
    }else{
        document.getElementById("error_mail_reg").style.display="none";
        document.getElementById("emailFormulario").classList.remove("is-invalid");
        document.getElementById("emailFormulario").classList.add("is-valid");
    }

    //rut
    if (rut.length ==0){
        document.getElementById("error_rut_vacio").style.display="inline";
        document.getElementById("error_rut_reg").style.display="none";
        document.getElementById("rut").classList.add("is-invalid");
    }else if(!rutVerif.test(rut)){
        document.getElementById("error_rut_vacio").style.display="none";
        document.getElementById("error_rut_reg").style.display="inline";
        document.getElementById("rut").classList.add("is-invalid");
    }else{
        document.getElementById("error_rut_vacio").style.display="none";
        document.getElementById("error_rut_reg").style.display="none";
        document.getElementById("rut").classList.remove("is-invalid");
        document.getElementById("rut").classList.add("is-valid");
    }

    //servicio
    
    if(tipoServicio == null){
        document.getElementById("error_servicio").style.display="inline";
        document.getElementById("tipoServicio").classList.add("is-invalid");
    }else{
        document.getElementById("error_servicio").style.display="none";
        document.getElementById("tipoServicio").classList.remove("is-invalid");
        document.getElementById("tipoServicio").classList.add("is-valid");
    }
    
    //cod

    if(!codVerif.test(codPromo)){
        document.getElementById("error_codPromo_reg").style.display="inline";
        document.getElementById("codPromo").classList.add("is-invalid");
    }else{
        document.getElementById("error_codPromo_reg").style.display="none";
        document.getElementById("codPromo").classList.remove("is-invalid");
        document.getElementById("codPromo").classList.add("is-valid");
    }

    //pago

    for(let i=0; i < metodoPago.length; i++){
        if(metodoPago[i].checked){
            opcionPago++;
        }
    }
    if(opcionPago == 0){
        document.getElementById("error_metodopago_vacio").style.display = "inline";
        document.getElementById("metodoPago").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_metodopago_vacio").style.display = "none";
        document.getElementById("metodoPago").classList.remove("is-invalid");
        document.getElementById("metodoPago").classList.add("is-valid");
    }

    

}

//contador de caracteres
function contadorTextarea(obj){
    let maxC = 50;
    let strC = obj.value.length;
    let numC = (maxC - strC);
    let contadorComentario = document.getElementById("contadorComentario");

    if(numC<0){
        contadorComentario.innerHTML = '<span style="color: red;">Ha excedido el límite de '+maxC+' caracteres.</span>';
    }else{
        contadorComentario.innerHTML = numC +' caracteres restantes.';
    }
}




