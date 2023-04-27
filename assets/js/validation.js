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